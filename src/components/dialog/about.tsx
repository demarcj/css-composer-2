import styles from "src/styles/dialog.module.css";

export const About: React.FC = () => {
  const close = () => (document.querySelector(`#about`) as HTMLDialogElement).close();



  return (
    <dialog id="about" className={styles.info}>
      <div>Create HTML and export that HTML's styling as reference or use it in your project :)</div>
      <div>
        <button
          onClick={() => close()}
        >Close</button>
      </div>
    </dialog>
  )
}