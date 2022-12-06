/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Gatsby React, Netlify CMS, Hosted on Firebase, Assembled with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="https://www.linkedin.com/in/ssyap/">YAP S S</Link>
      </p>
    </div>
  </footer>
)

export default Footer
