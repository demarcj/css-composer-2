import styles from "src/styles/menu.module.css"

export const Menu: React.FC = () => {
  return (
    <header className={styles.menu}>
      <ul className={styles.menu_list}>
        <li>
          Project
          <ul>
            <li>New Project</li>
            <li>Open Project</li>
            <li>Save</li>
            <li>Export</li>
          </ul>
        </li>
        <li>Edit</li>
        <li>Element</li>
        <li>Style</li>
        <li>Animation</li>
        <li>Reference</li>
        <li>Window</li>
        <li>Help</li>
      </ul>
    </header>
  )
}