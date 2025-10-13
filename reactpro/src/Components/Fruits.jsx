import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const fruits = [
    { name: "Apple", color: "Red", soldout: true },
    { name: "Banana", color: "Yellow", soldout: false },
    { name: "Orange", color: "Orange", soldout: false },
    { name: "Mango", color: "Yellow", soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            color={fruit.color}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
