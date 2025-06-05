
/*import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"))
const myElement = <h1>Come on, run it!</h1>;               //my first react code

root.render(
  myElement
);
console.log(myElement);*/
/*
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));  // yeah i did it

function MyElement() {
  return <h1>if this runs you are learning well</h1>
}
root.render(                                  //This code is using React
  <MyElement />
)
*/
/*
const root = document.getElementById('root');
const h1 = document.createElement('h1');          //This code is using javaScript
h1.textContent = 'i am a good learner';
root.appendChild(h1);*/

/*
const newRoot = document.getElementById('root');
const h1 = document.createElement('h1');
h1.textContent = 'Hello, vanilla JavaScript!'
newRoot.appendChild(h1)
*/
/*
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"));
root.render(
  <main>
    <img src="src/assets/react.svg" />
    <h1>This is another element</h1>
  </main>

)
*/
/*
// using a custom component and calling fun using <fun />
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"));
root.render(
  <TemporaryName />
)

function TemporaryName() {
  return (
    <main>
      <img src="src/assets/react.svg" width="40px" alt="logo-react" />
      <h1>Fun facts about React </h1>
      <ul>
        <li> was first released in 2018 </li>
        <li> was originally created by Jordan walke</li>
        <li> Has well over 100k stars on Git</li>
        <li> is maintained by Meta</li>
        <li> Powers thousands of enterprise apps including <br />mobile apps</li>
      </ul>


    </main>
  )
}
  */
/*
//challenge part 1 from scrimba

import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"));


root.render(
  <PageComp />
)

function PageComp() {
  return (
    <ol>
      <li>I can save time using react</li>
      <li>I can reuse the </li>
      <li> it is easy to understand than javaScript</li>
    </ol>
  )
}
*/
/*

//challenge part 2 from scrimba
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"));


root.render(
  <PageComp />
)

function PageComp() {
  return (
    <div>
      <header> <img src="../../src/assets/react.svg" width="40px" alt="react-logo" /> My First React Project  </header>

      <main>
        <h1>Why use React</h1>
        <ol>
          <li>I can save time using react</li>
          <li>I can reuse the </li>
          <li> it is easy to understand than javaScript</li>
        </ol>
      </main>
      <footer>
        <small>All rights Reserved</small>
      </footer>
    </div>

  )
}
  */
// using fragments instead of parent element

/*

import { createRoot } from "react-dom/client"
import Header from "./Header.jsx";
import MainComponent from "./MainComponent.jsx";
import Footer from "./Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
const root = createRoot(document.getElementById("root"));


root.render(
  <PageComp />
)

function PageComp() {
  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
     
    </>

  )
}
  */