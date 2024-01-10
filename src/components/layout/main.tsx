import { MainModel } from 'src/interface';
import styles from "src/styles/main.module.css";

export const Main: React.FC<MainModel> = ({elements}) => {
  return (
    <main className={styles.main}>
      { elements.map((element, i) => <div key={i}>{element.text}</div>) }
    </main>
  )
}