import styles from './fooditem.module.css';
export default function FoodItem({foodItem}) {

    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={foodItem.image} alt={foodItem.title} />
           <div className={styles.itemContent}>
               <p className={styles.itemName}>{foodItem.title}</p>
           </div>
            <div className={styles.buttonContainer}>
                <button className={styles.itemButton}>View Recipe</button>
            </div>
        </div>
    );
}       