// // import ReactDOM from 'react-dom/client';

// export default function App() {

//   function handleClick() {
//     console.log("I was clicked!")
//   }

//   /**
//    * Challenge: add our new function to the button
//    */

//   return (
//     <main className="container">
//       <img
//         src="https://picsum.photos/640/360"
//         alt="Placeholder image from Picsum"
//       />
//       <button onClick={handleClick}>Click me</button>
//     </main>
//   )
// }

// // ReactDOM.createRoot(document.getElementById('root')).render(<App />);
/**
   * Challenge: Log something to the console when the mouse
   * hovers over the image
   */

export default function App() {

  function handleClick() {
    console.log("I was clicked!")
  }
  function handleMouseOver() {
    return (
      console.log('I was hovered')
    )

  }


  /**
   * Challenge: add our new function to the button
   */

  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick} >Click me</button>

    </main>
  )
}
