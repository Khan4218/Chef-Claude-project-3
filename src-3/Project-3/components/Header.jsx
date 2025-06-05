import image from "../images/image.png"

export default function Header() {
  return (
    <header className="header">
      <img src={image} alt="chef-claude-icon" className="image" />
      <span className="text">Chef Claude</span>
    </header>

  )
}