import Code from "./Code";
import Welcome from "./Welcome";

export default function Ternary() {
  const display = false;
  return display ? (
    <h1>Yo, I very Happy</h1>
  ) : (
    <h1>I don't know. I am just here</h1>
  );
}