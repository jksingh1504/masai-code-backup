import styles from "./Button.module.css";

function ButtonComponent({ title, onClick, disabled, id, page,Total }) {
  return (
    <button id={id} onClick={onClick} disabled={disabled} data-testid="button-component" className={styles.button}>
      {title}
    </button>
  );
}

export default ButtonComponent;
