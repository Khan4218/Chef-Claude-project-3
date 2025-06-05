// props are immutable for example
function App(a, b) {
  a = 45; // dont d0 this 
  return a + b
}

App(1, 2);


function learnprops(props) {
  //cant change the passed props dont do this
  props.icon = "other-icon.png"
}

<learnprops icon='spatula.png' />