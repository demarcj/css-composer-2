import { MainModel } from 'src/interface';
import styles from "src/styles/main.module.css";

export const Main: React.FC<MainModel> = ({elements, select_element}) => {
  return (
    <main className={styles.main}>
      { elements.map((element, i) => (
        <div
          onClick={() => select_element(element)}
          key={i}
        >{element.text}</div>
      )) }
    </main>
  )
}