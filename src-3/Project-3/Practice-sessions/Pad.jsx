import React from "react"
export default function Pad(props) {

  /**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
 */

  // const [padOn, setPadOn] = React.useState(props.on)
  function handleClick() {
    props.toggle(props.id);
  }



  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : undefined}
      onClick={handleClick}
    ></button>


  )
}