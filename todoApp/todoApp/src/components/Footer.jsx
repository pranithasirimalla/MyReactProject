import styles from "./footer.module.css";
export default function Footer({ todos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.footerItem}>Total Todos : {todos.length} </span>
      <span className={styles.footerItem}>
        Completed Todos: {todos.filter((todo) => todo.done).length}
      </span>
    </div>
  );
}
