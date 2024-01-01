import styles from "src/styles/layers.module.css"

export const Layers: React.FC = () => {
  return (
    <section className={styles.layers_container}>
      <ul className={styles.table_header_row}>
        <li className={styles.table_header}>Index</li>
        <li className={styles.table_header}>Element / Layer Name</li>
        <li className={styles.table_header}>Timeline</li>
      </ul>
    </section>
  )
}