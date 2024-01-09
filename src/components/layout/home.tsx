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

export const Home: React.FC = () => {
  const [display_window, set_display_window] = useState({});
  const display_window_list = [`styling`, `layers`];
  const elements = [
    {
      order: 0,
      id: `heyssssss`,
      class: `my name`,
      style: [{fontSize: `36px`}]
    },
    {
      order: 1,
      id: `ididiididid`,
      class: `new name`,
      style: [{fontSize: `36px`}]
    }
  ];
  
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

  const open_about_dialog = () => (document.querySelector(`#about`) as HTMLDialogElement).show();

  useEffect(() => {
    !Object.keys(display_window).length && init_display_window();
  });

  return (
    <>
      <div className={styles.home}>
        <Menu 
          elements={elements}
          show_window={show_window}
          display_window={display_window}
          open_about_dialog={open_about_dialog}
        />
        <div className={styles.main_styling_container}>
          <Main />
          <StylingStage 
            display_window={display_window}
          />
        </div>
        <Layers
            elements={elements} 
            display_window={display_window}
        />
        <Footer />
        <About />
      </div>
    </>
  )
}