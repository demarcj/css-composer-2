import { 
  Footer,
  Layers,
  Main, 
  Menu,
  StylingStage
} from './';
import styles from 'src/styles/home.module.css';

export const Home: React.FC = () => {
  const elements = [
    {
      order: 1,
      id: `heyssssss`,
      class: ``,
      style: [{fontSize: `36px`}]
    }
  ];
  return (
    <div className={styles.home}>
      <Menu 
        elements={elements}
      />
      <div className={styles.main_styling_container}>
        <Main />
        <StylingStage />
      </div>
      <Layers />
      <Footer />
    </div>
  )
}