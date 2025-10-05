import FruitRender from "./FruitRender";

export default function FruitsTwo() {
  //const fruits = ["Apple", "Mango", "Bananas", "Orange", "Pineapple"]
  const fruits = [
    { name: "Apple", price: 11, emoji: "🍏" },
    { name: "Mango", price: 6, emoji: "🥭" },
    { name: "Banana", price: 3, emoji: "🍌" },
    { name: "Orange", price: 4, emoji: "🍊" },
    { name: "Pineapple", price: 9, emoji: "🍍" },
    { name: "Grapes", price: 5, emoji: "🍇" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <FruitRender
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
          // <li key={fruit.name}> {fruit.emoji} {fruit.name} ${fruit.price} </li>
        ))}
      </ul>
    </div>
  );
}
