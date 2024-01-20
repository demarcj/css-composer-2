import { StylingStageModel } from 'src/interface';
import styles from "src/styles/styling_stage.module.css";

export const StylingStage: React.FC<StylingStageModel> = ({display_window, selected_elements}) => {
  return (
    <section 
      className={styles.styling_stage}
      style={{display: display_window.styling ? `block` : `none`}}
    >
      <div className={styles.header}>Styling</div>
      {
        !!Object.values(selected_elements).length ? <div>{Object.values(selected_elements)[0].class}</div> : undefined
      }
    </section>
  )
}