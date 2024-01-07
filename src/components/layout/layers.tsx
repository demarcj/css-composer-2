import { LayersModel } from 'src/interface';
import styles from "src/styles/layers.module.css";

export const Layers: React.FC<LayersModel> = ({display_window}) => {
  return (
    <section 
      className={styles.layers_container}
      style={{display: display_window.layers ? `block` : `none`}}
    >
      <ul className={styles.table_header_row}>
        <li className={styles.table_header}>Index</li>
        <li className={styles.table_header}>Element / Layer Name</li>
        <li className={styles.table_header}>Timeline</li>
      </ul>
    </section>
  )
}