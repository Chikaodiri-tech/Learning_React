import OtherFruitCondition from "./OtherFruitCondition";

export default function FruitSoldOut() {
  //const fruits = ["Apple", "Mango", "Bananas", "Orange", "Pineapple"]
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍏", soldOut: false },
    { name: "Mango", price: 6, emoji: "🥭", soldOut: true },
    { name: "Banana", price: 3, emoji: "🍌", soldOut: false},
    { name: "Orange", price: 4, emoji: "🍊", soldOut: true },
    { name: "Pineapple", price: 9, emoji: "🍍", soldOut: false},
    { name: "Grapes", price: 5, emoji: "🍇", soldOut: true},
    { name: "Strawberry", price: 7, emoji: "🍓", soldOut: false },
    { name: "Watermelon", price: 8, emoji: "🍉", soldOut: true },
  ];
  return (
    <div>
      <ol>
        {fruits.map((fruit) => (
          <OtherFruitCondition
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout = {fruit.soldOut}
          />
          // <li key={fruit.name}> {fruit.emoji} {fruit.name} ${fruit.price} </li>
        ))}
      </ol>
    </div>
  );
}