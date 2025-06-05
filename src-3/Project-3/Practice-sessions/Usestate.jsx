// import React from "react"

// export default function App() {
//   const result = React.useState("Yes")


//   return (
//     <main>
//       <h1 className="title">Is state important to know?</h1>
//       <button className="value">{result[0]}</button>
//     </main>
//   )
// }

//Use state array destructuring
// import React from "react"
// /**
//  * Challenge:
//  * 1. Create a function called `handleClick` that runs
//  *    setIsImportant("Definitely")
//  * 2. Add a click event listener to the button
//  *    that runs `handleClick` when the button is clicked.
//  */
// export default function App() {
//   let [isImportant, setIsImportant] = React.useState("Yes")
//   function handleClick() {
//     setIsImportant("Definitely")
//   }

//   return (
//     <main>
//       <h1 className="title">Is state important to know?</h1>
//       {/* //here we dont need to give a index to result */}
//       <button className="value" onClick={handleClick}>{isImportant}</button>
//     </main>
//   )
// }

//state practice
/**
 * Challenge:
 * Create state to track our count value (initial value is 0)
 * Don't forget to replace the hard-coded "0" with your new state
 */
//challenge part 2
/**
   * Challenge:
   * Create a function called `add` that runs
   * when the + button is clicked. (Can just console.log("add") for now)
   */
/**
  * Challenge: part 3
  * See if you can think of a way to add 1 to the count
  * every time the + button is clicked
  */
/**
  * Challenge:  last part
  * Add functionality to the minus button
  */
// import React from "react"

// export default function App() {
//   const [count, setCount] = React.useState(0)

//   function add() {
//     setCount(count + 1)

//   }

//   function minus() {
//     setCount(count - 1)
//   }

//   return (
//     <main className="container">
//       <h1>How many times will Bob say "state" in this section?</h1>
//       <div className="counter">
//         <button className="minus" aria-label="Decrease count" onClick={minus}>–</button>
//         <h2 className="count" >{count}</h2>
//         <button className="plus" aria-label="Increase count" onClick={add} >+</button>
//       </div>
//     </main>
//   )
// }


// // Building again from scratch

// import React from "react"

// export default function App() {
//   const [count, setCount] = React.useState(0)

//   function add() {
//     setCount(count + 1)
//   }

//   function minus() {
//     setCount(count - 1)
//   }
//   return (
//     <main className="container">
//       <h1>How many times will Bob say "state" in this section?</h1>
//       <div className="counter">
//         <button className="minus" aria-label="Decrease count" onClick={minus}>–</button>
//         <h2 className="count" >{count}</h2>
//         <button className="plus" aria-label="Increase count" onClick={add} >+</button>
//       </div>
//     </main>

//   )
// }    //done

// //useState using a call back function
// import React from "react"

// export default function App() {
//   const [count, setCount] = React.useState(0)
//   /**
//    * Note: if you ever need the old value of state
//    * to help you determine the new value of state,
//    * you should pass a callback function to your
//    * state setter function instead of using
//    * state directly. This callback function will
//    * receive the old value of state as its parameter,
//    * which you can then use to determine your new
//    * value of state.
//    */
//   function add() {
//     setCount(prevCount => prevCount + 1)
//   }

//   function minus() {
//     //   setCount(function (prevCount) {
//     //     return prevCount - 1;
//     //   })
//     // using shorthand property of above fun
//     setCount(prevCount => prevCount - 1)
//   }


//   return (
//     <main className="container">
//       <h1>How many times will Bob say "state" in this section?</h1>
//       <div className="counter">
//         <button className="minus" aria-label="Decrease count" onClick={minus}>–</button>
//         <h2 className="count" >{count}</h2>
//         <button className="plus" aria-label="Increase count" onClick={add} >+</button>
//       </div>
//     </main>

//   )

// }

// Ternery Operator
// export default function App() {
//   /**
//    * Challenge: Replace the if/else below with a ternary
//    * to determine the text that should display on the page
//    */
//   const isGoingOut = true

//   const answer = isGoingOut ? "Yes" : "No"; // passing down into the button directly


//   👈 Use ternary here

//   Remove the code below 👇 once your ternary is done
//   if (isGoingOut === true) {
//     answer = "Yes"
//   } else {
//     answer = "No"
//   }

//   return (
//     <main>
//       <h1 className="title">Do I feel like going out tonight?</h1>
//       <button className="value">{isGoingOut ? "Yes" : "No"}</button>
//     </main>
//   )
// }

// import React from "react"

// export default function App() {
//   /**
//    * Challenge:
//    * - Initialize state for `isGoingOut` as a boolean
//    * - Make it so clicking the button flips that
//    *   boolean value (true -> false, false -> true)
//    * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//    */
//   const [isGoingOut, setIsGoingOut] = React.useState(0)
//   function handleClick() {

//     setIsGoingOut(prevBoolean => prevBoolean === false)
//   }

//   return (
//     <main>
//       <h1 className="title">Do I feel like going out tonight?</h1>
//       <button
//         className="value"
//         onClick={handleClick}
//         aria-label={`current answer is ${isGoingOut ? "Yes " : "No"}. click to change it`}

//       >
//         {isGoingOut ? "Yes " : "No"}
//       </button>
//     </main>
//   )
// }

//complete state arrays
// import React from "react"
// export default function App() {
/**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize
   * the state array as an empty array
   *
   * Don't worry about fixing `addFavoriteThing` quite yet.
   */
//   const [myFavoriteThings, setMyFavroiteThings] = React.useState([]);

//   const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
//     "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
//   const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

//   function addFavoriteThing() {
//     // We'll work on this next, nothing to do here yet.
//     setMyFavroiteThings((prevthings) => {
//       return [...prevthings,
//       allFavoriteThings[prevthings.length]
//       ]
//     })
//   }

//   return (
//     <main>
//       <button onClick={addFavoriteThing}>Add item</button>
//       <section aria-live="polite">
//         {thingsElements}
//       </section>
//     </main>
//   )
// }

// //complex objects in state

// import React from "react"
// import avatar from "../images/user.png"
// import starFilled from "../images/star-filled.png"
// import starEmpty from "../images/star-empty.png"

// export default function App() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (212) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false
//   })
//   /**
//    * Challenge: Fill in the values in the markup
//    * using the properties of our state object above
//    * (Ignore `isFavorite` for now)
//    */
//   /**
//      * Challenge: Use a ternary to determine which star image variable
//      * should be used based on the `contact.isFavorite` property. Test
//      * your results by manually changing the isFavorite value in state.
//      *
//      * `true` => starFilled
//      * `false` => starEmpty
//      */

//   let starIcon = contact.isFavorite ? `${starFilled}` : `${starEmpty}`;

//   function toggleFavorite() {
//     setContact((prevContact) => {
//       return {
//         ...prevContact,
//         isFavorite: !prevContact.isFavorite
//       }
//     })
//   }

//   //setting state from child components

//   /**
//   * Challenge: Move the star image into its own component (Star)
//   * - It should receive a prop called `isFilled` that it
//   *   uses to determine which icon it will display. (You'll
//   *   need to import the 2 star icons into that new component first).
//   * - Import and render that component, passing the value of
//   *   `isFavorite` to the new `isFilled` prop.
//   * - Don't worry about the abiliity to flip this value quite yet.
//   *   Instead, you can test if it's working by manually changing
//   *   `isFavorite` in state above.
//   */
//   function Star(props) {
//     return (
//       <button
//         onClick={props.handleClick}
//         aria-pressed={props.isFilled}
//         aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
//         className="favorite-button"

//       >
//         <img
//           src={starIcon}
//           alt={props.isFilled ? "is filled" : "is empty click to fill"}
//           className="favorite"
//         />
//       </button>
//     )
//   }



//   return (
//     <main>
//       <article className="card">
//         <img
//           src={avatar}
//           className="avatar"
//           alt="User profile picture of John Doe"
//         />
//         <div className="info">
//           <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
//           <h2 className="name">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           <p className="contact">{contact.phone}</p>
//           <p className="contact">{contact.email}</p>
//         </div>

//       </article>
//     </main>
//   )
// }

// passing state as props

// import React from "react"

// export default function App() {
//   const [count, setCount] = React.useState(0)

//   function add() {
//     setCount(prevCount => prevCount + 1)
//   }

//   function subtract() {
//     setCount(prevCount => prevCount - 1)
//   }

//   function Count(props) {
//     return <h2 className="count">{props.number}</h2>
//   }
//   /**
//    * Challenge:
//    * - Create a new component called `Count`
//    *    - It should receive a prop called `number`, whose value
//    *      is the current value of our count
//    *    - Have the component render the h2.count element below
//    *      and display the incoming prop `number`
//    * - Replace the h2.count below with an instance of
//    *   the new Count component, passing the correct value
//    *   to its `number` prop.
//    * - After doing this, everything should be working the
//    *   same as before.
//    */

//   return (
//     <main className="container">
//       <div className="counter">
//         <button
//           className="minus"
//           onClick={subtract}
//           aria-label="Decrease count"
//         >-</button>

//         <Count number={count} />

//         <button
//           className="plus"
//           onClick={add}
//           aria-label="Increase count"
//         >+</button>
//       </div>
//     </main>
//   )
// }

