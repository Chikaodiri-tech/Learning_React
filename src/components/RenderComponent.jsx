import Code from "./Code";
import Welcome from "./Welcome";

export default function RenderComponent() {
    const display = false; // Change this to true to see the Welcome component
    // const display = true; // Uncomment this line to switch to Welcome component
    return display ? <Welcome/> : <Code/>
}