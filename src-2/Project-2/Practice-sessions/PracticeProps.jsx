// //challenge 1 props
// export default function PracticeProps() {
//   const hours = new Date().getHours()
//   let timeOfDay
//   if (hours < 12) {
//     timeOfDay = 'morning'
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = 'afternoon'
//   } else if (hours >= 21) {
//     timeOfDay = 'night'
//   }


//   return (
//     <h1>
//       Good {timeOfDay} Akbar
//     </h1>

//   );
// };


// // A small Article project to learn props and reuseability
// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"));
// root.render(
//   function App() {
//     <>
//       <div className="contacts">

//         <Contact
//           img="./images/mr-whiskerson.png"   // passing data into a component
//           name="Mr. Whiskerson"
//           phone="(212) 555-1234"
//           email="mr.whiskaz@catnap.meow"

//         />
//         <Contact
//           img="./images/fluffykins.png"
//           name="Fluffykins"
//           phone="(212) 555-2345"
//           email="fluff@me.com"
//         />
//         <Contact
//           img="./images/felix.png"
//           name="Felix"
//           phone="(212) 555-4567"
//           email="thecat@hotmail.com"
//         />
//         <Contact
//           img="./images/pumpkin.png"
//           name="(0800) CAT KING"
//           phone="(212) 555-4567"
//           email="pumpkin@scrimba.com"

//         />
//       </div>
//     </>
//   }
// )

// function Contact(props) {    //received props into a component
//   return (
//     <article className="contact-card">
//       <img
//         src={props.img}
//         alt={`photo of ${props.name}`}
//       />
//       <h3>{props.name}</h3>
//       <div className="info-group">
//         <img
//           src="./images/phone-icon.png"
//           alt="phone icon"
//         />
//         <p>{props.phone}</p>
//       </div>
//       <div className="info-group">
//         <img
//           src="./images/mail-icon.png"
//           alt="mail icon"
//         />
//         <p>{props.email}</p>
//       </div>
//     </article>
//   )
// };

// // object destructuring

// const person = {
//   img: "./images/mr-whiskerson.png",
//   name: "Mr. Whiskerson",
//   phone: "(800) 555-1234",
//   email: "mr.whiskaz@catnap.meow"
// }

// const { name, phone, email, img } = person;
// console.log(name);
// console.log(phone);
// console.log(email);
// console.log(img);
// // object destructuring 
// export default function Contact({ img, name, phone, email }) {
//   return (
//     <article className="contact-card">
//       <img
//         src={img}
//         alt="Photo of Mr. Whiskerson"
//       />
//       <h3>{name}</h3>
//       <div className="info-group">
//         <img
//           src="./images/phone-icon.png"
//           alt="phone icon"
//         />
//         <p>{phone}</p>
//       </div>
//       <div className="info-group">
//         <img
//           src="./images/mail-icon.png"
//           alt="mail icon"
//         />
//         <p>{email}</p>
//       </div>
//     </article>
//   )
// }

// Practice more props
export default function App() {
  return (
    <>
      <Jokes
        Setup="I got my daughter a fridge for her birthday."
        Punchline="I can't wait to see her face light up when she opens it."
        Upvotes={10} // non string and it is a number to props
        isPun={true} // adding boolean value to props
        comments={[{ author: "", text: "", title: "" }]} // adding array to props
      />
      <Jokes
        Setup="How did the hacker escape the police?"
        Punchline="He just ransomware!" />
      <Jokes
        Setup="Why don't pirates travel on mountain roads?"
        Punchline="Scurvy."
      />
      <Jokes
        Setup="Why do bees stay in the hive in the winter?"
        Punchline="Swarm."
      />
      <Jokes
        Setup="What's the best thing about Switzerland?"
        Punchline="I don't know, but the flag is a big plus!"

      />


    </>
  )
}


export default function Jokes({ Setup, Punchline }) {
  return (
    <ul>
      <li>
        <h1>
          {Setup}
        </h1>
      </li>
      {Punchline}
    </ul>


  )
}

// Using array.Map method to pass props 
import Joke from "./Joke"
import jokesData from "./jokesData" // importing data from external source which consists of props setup and punchline


export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <main>
      {jokeElements}
    </main>
  )
}



/*
<>
  <div className="card-1">
    <img
      className="card-img"
      src="../src/project-2/images/image2.jpg"
      alt="Sydney opera house"
    />
    <div className="card-content">
      <div className="item-1">
        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
        <span className="country-name">AUSTRALIA</span>
        <a href={mapsLink2} target="_blank" rel="noopener noreferrer" className="map-link">View on Google maps</a>
      </div>
      <h1 className="place-title">Sydney Opera House</h1>
      <div className="place-cont">
        <p className="place-dates">27 May, 2023 - 8 Jun, 2023</p>
        <p className="place-description">
          The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.
        </p>
      </div>
    </div>
  </div>


  <div className="card-1">
    <img
      className="card-img"
      src="../src/project-2/images/image3.jpg"
      alt="Geirangerfjord"
    />
    <div className="card-content">
      <div className="item-1">
        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
        <span className="country-name">NORWAY</span>
        <a href={mapsLink3} target="_blank" rel="noopener noreferrer" className="map-link">View on Google maps</a>
      </div>
      <h1 className="place-title">Geirangerfjord</h1>
      <div className="place-cont">
        <p className="place-dates">01 Oct, 2024 - 18 Nov, 2024</p>
        <p className="place-description">
          The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.
        </p>
      </div>
    </div>
  </div>
</>
*/

//const mapsLink2 = "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2152967,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"

// const mapsLink3 = "https://www.google.com/maps/place/Geirangerfjord/@62.1049113,7.0051744,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?coh=164777&entry=tt&shorturl=1o.gl/maps/whXGgXTXYnZT89uW8";