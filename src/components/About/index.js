import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="desktop-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="about-lg-image"
        alt="about"
      />
    </div>
    <div className="mobile-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="about-image"
        alt="about"
      />
    </div>
  </div>
)
export default About
