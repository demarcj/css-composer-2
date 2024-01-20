import { useState, useEffect } from "react";
import {
  Footer,
  Layers,
  Main, 
  Menu,
  StylingStage
} from './';
import { About } from "src/components/dialog";
import styles from 'src/styles/home.module.css';
import { ElementMapModel, ElementModel } from "src/interface";

export const Home: React.FC = () => {
  const [display_window, set_display_window] = useState({});
  const [selected_elements, set_selected_elements] = useState({} as ElementMapModel);
  const display_window_list = [`styling`, `layers`];
  const elements = {
    heyssssss: {
      order: 0,
      id: `heyssssss`,
      class: `my name`,
      style: [{fontSize: `36px`}],
      text: `yooo!!!`
    },
    ididiididid: {
      order: 1,
      id: `ididiididid`,
      class: `new name`,
      style: [{fontSize: `36px`}],
      text: `My mustache`
    }
  };
  
  const init_display_window = () => {
    const display_window_menu: {[key: string]: boolean} = {}; 
    display_window_list.forEach(list => display_window_menu[list] = true);
    set_display_window({ ...display_window_menu});
  }

  const show_window = (display: string) => {
    const display_window_menu: {[key: string]: boolean} = {...display_window};
    display_window_menu[display] = !display_window_menu[display];
    set_display_window({ ...display_window_menu})
  }

  const select_elements = (element: ElementModel) => {
    set_selected_elements({
      [element.id]: element,
      ...selected_elements
    })
  }

  const open_about_dialog = () => (document.querySelector(`#about`) as HTMLDialogElement).show();

  useEffect(() => {
    !Object.keys(display_window).length && init_display_window();
  });

  return (
    <div className={styles.home}>
      <Menu 
        elements={elements}
        show_window={show_window}
        display_window={display_window}
        open_about_dialog={open_about_dialog}
      />
      <div className={styles.main_styling_container}>
        <Main 
          elements={elements}
          selected_elements={selected_elements}
          select_elements={select_elements}
        />
        <StylingStage 
          display_window={display_window}
          selected_elements={selected_elements}
        />
      </div>
      <Layers
          elements={elements} 
          display_window={display_window}
          select_elements={select_elements}
      />
      <Footer />
      <About />
    </div>
  )
}