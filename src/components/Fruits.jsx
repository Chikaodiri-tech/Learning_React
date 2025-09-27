import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Bananas", "Orange", "Pineapple"]
  const fruits = [
    {name: "Apple", price: 10, emoji: "🍎"},
    {name: "Mango", price: 15, emoji: "🥭"},
    {name: "Banana", price: 5, emoji: "🍌"},
    {name: "Orange", price: 8, emoji: "🍊"},
    {name: "Pineapple", price: 12, emoji: "🍍"},
    {name: "Grapes", price: 7, emoji: "🍇"}
  ];
  return (
    <div>
        <ul>
            {fruits.map((fruit) => (
                <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
               // <li key={fruit.name}> {fruit.emoji} {fruit.name} ${fruit.price} </li>
            ))}
        </ul>
    </div>
  );
}