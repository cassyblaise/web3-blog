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
      Let learn, build and explore web3. Make with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="https://twitter.com/cassyjnr/" target="_blank">Cassy</Link>
      </p>
    </div>
  </footer>
)

export default Footer
