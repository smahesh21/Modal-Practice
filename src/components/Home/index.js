import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="desktop-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-lg-image"
        alt="home"
      />
    </div>
    <div className="mobile-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="home-image"
        alt="home"
      />
    </div>
  </div>
)
export default Home
