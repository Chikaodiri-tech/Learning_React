import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent () {
    let message;
    const display = false;
    if (display) {
        message = <h1>This is message one been rendered!</h1>
    } else {
        message = <h1>This is for message two!</h1>
    }
    return message;
}