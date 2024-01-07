import { StylingStageModel } from 'src/interface';
import styles from "src/styles/styling_stage.module.css";

export const StylingStage: React.FC<StylingStageModel> = ({display_window}) => {
  return (
    <section 
      className={styles.styling_stage}
      style={{display: display_window.styling ? `block` : `none`}}
    >
      <div className={styles.header}>Styling</div>
    </section>
  )
}