import { MainModel } from 'src/interface';
import styles from "src/styles/main.module.css";

export const Main: React.FC<MainModel> = ({elements, select_elements}) => {
  return (
    <main className={styles.main}>
      { Object.values(elements).map((element, i) => (
        <div
          onClick={() => select_elements(element)}
          key={i}
        >{element.text}</div>
      )) }
    </main>
  )
}