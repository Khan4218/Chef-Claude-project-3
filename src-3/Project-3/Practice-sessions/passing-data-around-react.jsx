//App.jsx file
import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
  const [userName, setUserName] = React.useState("Bob")

  return (
    <main>
      <Header userName={userName} />
      <Body userName={userName} />
    </main>
  )
}

//Body.jsx file

export default function Body(props) {
  return (
    <section>
      <h1>Welcome back, {props.userName}!</h1>
    </section>
  )
}

//header.jsx file

import avatar from "./icons/user.png"

export default function Header(props) {
  return (
    <header>
      <img src={avatar} />
      <p>{props.userName}</p>
    </header>
  )
}
// above we used props to get state


