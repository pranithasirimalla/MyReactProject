import styles from "./todolist.module.css";
export default function ({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    console.log("Clicked on:", name);
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span
          onClick={() => handleDelete(item)}
          className={styles.deleteButton}
        >
          x
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
