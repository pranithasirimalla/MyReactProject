export default function Fruit({ name, color, soldout }) {
  return (
    <li>
      {color === "Orange" ? name : null} - {color} {soldout ? "(Sold Out)" : ""}
    </li>
  );
}
