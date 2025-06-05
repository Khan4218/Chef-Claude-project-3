// import React from "react"
// export default function App() {
//   return (
//     <>
//       <Jokes
//         setup="I got my daughter a fridge for her birthday."
//         punchline="I can't wait to see her face light up when she opens it."
//         Upvotes={10} // non string and it is a number to props
//         isPun={true} // adding boolean value to props
//         comments={[{ author: "", text: "", title: "" }]} // adding array to props
//       />
//       <Jokes
//         setup="How did the hacker escape the police?"
//         punchline="He just ransomware!" />
//       <Jokes
//         setup="Why don't pirates travel on mountain roads?"
//         punchline="Scurvy."
//       />
//       <Jokes
//         setup="Why do bees stay in the hive in the winter?"
//         punchline="Swarm."
//       />
//       <Jokes
//         setup="What's the best thing about Switzerland?"
//         punchline="I don't know, but the flag is a big plus!"

//       />


//     </>
//   )
// }



// function Jokes(props) {
//   const [isShown, setIsShown] = React.useState(false)

//   function toggleShown() {
//     setIsShown(prevShown => !prevShown)
//   }

//   console.log(isShown)
//   return (

//     <div>
//       {props.setup ? <h3>{props.setup}</h3> : null}   {/*using ternery operator instead of && operator */}
//       {/* <p>{isShown ? props.punchline : false}</p> */}
//       {/* {isShown > 0 && <p>{props.punchline}</p>} Using conditional rendering */}
//       {isShown ? <p>{props.punchline}</p> : null} {/*Using ternery instead of && operator */}
//       <button onClick={toggleShown}>{isShown ? "hide" : "show"} punchline</button>

//       <hr />
//     </div>
//   )
// }

// import React from "react"

// export default function App() {
//   const [unreadMessages, setUnreadMessages] = React.useState([])

//   /**
//    * Challenge:
//    * Only display the <h1> below if there are unread messages
//    */

//   return (
//     <div>
//       {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
//       {unreadMessages.length <= 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
//     </div>
//   )
// }


// import React from "react"

// export default function App() {
//   const [messages, setMessages] = React.useState([])
//   /**
//    * Challenge:
//    * - If there are no unread messages, display "You're all caught up!"
//    * - If there's exactly 1 unread message, it should read "You have 
//    *   1 unread message" (singular)
//    * - If there are > 1 unread messages, display "You have <n> unread
//    *   messages" (plural)
//    */
//   return (
//     <div>
//       <h1>{messages.length === 0 && <p>You're all caught up!</p>}</h1>
//       <h1>{messages.length === 1 && <p>You have {messages.length} unread messages</p>}</h1>
//       <h1>{messages.length > 1 && <p>You have {messages.length} unread messages</p>}</h1>


//     </div>
//   )
// }


//practing conditional rendering in a different way 
import React from "react"

export default function App() {
  const [messages, setMessages] = React.useState(["a", "b"])


  function determineText() {
    if (messages.length === 0) {
      return "You're all caught up!"
    } else if (messages.length === 1) {
      return "You have 1 unread message"
    } else {
      return `You have ${messages.length} unread messages`
    }
  }

  return (
    <div>
      <h1>{determineText()}</h1>
    </div>
  )
}