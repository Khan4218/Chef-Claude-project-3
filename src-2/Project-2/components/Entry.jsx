
export default function Entry(props) {
  return (
    <main>
      <div className="card-1">
        <img
          className="card-img"
          src={props.entry.img.src}
          alt={props.entry.img.alt}
        />
        <div className="card-content">
          <div className="item-1">
            {props.entry.locationIcon}
            <span className="country-name">{props.entry.country}</span>
            <a href={props.entry.googleMapsLink} target="_blank">View on Google Maps</a>
          </div>
          <h1 className="place-title">{props.entry.title}</h1>
          <div className="place-cont">
            <p className="place-dates">{props.entry.dates}</p>
            <p className="place-description">{props.entry.text}</p>
          </div>
        </div>
      </div>
    </main>


  )
}