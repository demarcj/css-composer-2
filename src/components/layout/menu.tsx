import { ElementModel } from 'src/interface'
import styles from "src/styles/menu.module.css";

export const Menu: React.FC<{elements: ElementModel[]}> = ({elements}) => {
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
              <div>Open Project</div>
            </li>
            <li>
              <div>Save</div>
              </li>
            <li>
              <div>Export</div>
            </li>
          </ul>
        </li>
        <li>
          <div>Edit</div>
          <ul>
            <li>
              <div>Delete Element</div>
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
              <div>Font</div>
              <ul>
                <li>
                  <div>Size</div>
                </li>
                <li>
                  <div>Weight</div>
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
              <div>Style</div>
            </li>
            <li>
              <div>Layers</div>
            </li>
          </ul>
        </li>
        <li>
          <div>Help</div>
          <ul>
            <li>
              <div>About...</div>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  )
}