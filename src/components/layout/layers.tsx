import { LayersModel } from 'src/interface';
import styles from "src/styles/layers.module.css";

export const Layers: React.FC<LayersModel> = ({display_window, elements, select_elements}) => {
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
      <ul>
        {
          Object.values(elements).map((element, i) => (
              <li 
                key={i} 
                className={styles.table_row}
                onClick={() => select_elements(element)}
              >
                <div>{i}</div>
                <div>{element.class}</div>
                <div></div>
              </li>
            )
          )
        }
      </ul>
    </section>
  )
}