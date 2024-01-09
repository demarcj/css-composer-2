import { MenuModel } from 'src/interface';
import styles from "src/styles/menu.module.css";

export const Menu: React.FC<MenuModel> = ({elements, show_window, display_window, open_about_dialog}) => {
  
  return (
    <header className={styles.menu}>
      <ul className={styles.menu_list}>
        <li>
          <div>Project</div>
          <ul>
            <li>
              <div className={!!elements.length ? '' : styles.disabled}>New Project</div>
            </li>
            <li>
              <div className={!!elements.length ? '' : styles.disabled}>Open Project</div>
            </li>
            <li>
              <div className={!!elements.length ? '' : styles.disabled}>Save</div>
              </li>
            <li>
              <div className={!!elements.length ? '' : styles.disabled}>Export</div>
            </li>
          </ul>
        </li>
        <li>
          <div>Edit</div>
          <ul>
            <li>
              <div className={!!elements.length ? '' : styles.disabled}>Delete Element</div>
            </li>
          </ul>
        </li>
        <li>
          <div>Element</div>
          <ul>
            <li>
              <div>New Text</div>
            </li>
          </ul>
        </li>
        <li>
          <div>Style</div>
          <ul>
            <li>
              <div className={!!elements.length ? '' : styles.disabled}>Font</div>
              <ul>
                <li>
                  <div className={!!elements.length ? '' : styles.disabled}>Size</div>
                </li>
                <li>
                  <div className={!!elements.length ? '' : styles.disabled}>Weight</div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <div>Animation</div>
        </li>
        <li>
          <div>Reference</div>
        </li>
        <li>
          <div>Window</div>
          <ul>
            <li>
              <div 
                className={display_window.styling ? styles.window : ``}
                onClick={() => show_window(`styling`)}
              >Styling</div>
            </li>
            <li>
              <div 
                className={display_window.layers ? styles.window : ``}
                onClick={() => show_window(`layers`)}
              >Layers</div>
            </li>
          </ul>
        </li>
        <li>
          <div>Help</div>
          <ul>
            <li>
              <div
                onClick={() => open_about_dialog()}
              >About...</div>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  )
}