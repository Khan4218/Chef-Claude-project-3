import { createRoot } from "react-dom/client"
// import App from "./Practice-sessions/Conditional-Rendering"
// import App from "./Practice-sessions/forms.jsx"
import App from "./App-3.jsx";
// import App from "./Practice-sessions/Usestate.jsx";
// import App from "./Practice-sessions/add-event-listenser.jsx"
// import App from "./Practice-sessions/AppSounds.jsx"
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <App darkMode={true} />
  </>
)