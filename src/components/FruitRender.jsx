export default function FruitRender({ name, price, emoji }) {
  return (
    <>
      {price > 5 ? (
        <li>
          {emoji} {name} ${price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
