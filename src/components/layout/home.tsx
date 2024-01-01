import { 
  Footer,
  Layers,
  Main, 
  Menu,
  StylingStage
} from './';
import styles from 'src/styles/home.module.css';

export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Menu />
      <div className={styles.main_styling_container}>
        <Main />
        <StylingStage />
      </div>
      <Layers />
      <Footer />
    </div>
  )
}