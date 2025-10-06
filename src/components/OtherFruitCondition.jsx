export default function OtherFruitCondition({ name, price, emoji, soldout }) {
  return (
    <>
        <li>
            {emoji} {name} ${price} {soldout ? "SoldOut" : ""}
        </li>
    </>
  )
}