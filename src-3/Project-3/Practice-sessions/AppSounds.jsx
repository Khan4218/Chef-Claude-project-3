import React from "react"
import padsData from "./pads"
import Pad from "./Pad.jsx"

export default function App({ darkMode }) {

  const [pads, setPads] = React.useState(padsData)
  /**
    * Challenge: Create a toggle() function that logs
    * "clicked!" to the console
    * 
    * Pass that function down to each of the Pad components
    * and set it up so when they get clicked, the function runs
    */

  function toggle(id) {

    setPads(prevPads => prevPads.map(
      pad => pad.id === id ? { ...pad, on: !pad.on } : pad
    )
    )



    /**
       * Challenge:
       * Call setPads to update the state of the one pad that was
       * clicked. Map over the previous pads array, and if the current
       * item you're iterating over has the same id as the `id` passed
       * to this function, then return a new object with the `on` value
       * set to the opposite of what it was before.
       * Otherwise (if the ids don't match), just return the previous
       * item as it was, unchanged.
       */


  }

  const buttonElements = pads.map(pad => (
    <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />
  ))


  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  )
}

