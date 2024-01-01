import styles from "src/styles/footer.module.css";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}> &copy;{ year } DeMarc Johnson </div>
    </footer>
  )
}