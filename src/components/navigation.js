import * as React from "react"
import { Link } from "gatsby"

// data
const links = [
  {
    text: "About",
    url: "/about"
  },
  {
    text: "Contact",
    url: "/contact"
  },
  {
    text: "Subscribe",
    url: "/subscribe"
  }
]

const Navigation = () => {
  return(
    <nav>
      <ul style={{listStyle: `none`, margin: `35px 0 0 0`}}>
        {links.map(link => (
          <li key={link.url} style={{marginBottom: 0}}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation