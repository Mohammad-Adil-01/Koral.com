import "../src/Navbar.css";
import searchimg from "../src/images/searchimg.webp";
import responsive from "../src/images/responsive.webp";
import visual from "../src/images/visual.jpg"
import setting2 from "../src/images/setting2.avif"
export default function Navbar() {
  return (
    <>
      <div className="main-body">
        <div className="main">
          <div className="Nav-section ">
            <header>
              <h1>Koral</h1>
            </header>
            <nav className="navigation">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Pages</a>
                </li>
                <li>
                  <a href="/">PortFolio</a>
                </li>
                <li>
                  <a href="/">Header</a>
                </li>
                <li>
                  <a href="/">Element</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </nav>
            <a href="https://www.google.com" target="post" className="search-img-link">
              <img src={searchimg} alt="" />
              Search on google
            </a>
          </div>
          <div className="body">
            <h2>Create Amazing Website with Amazing Graphics</h2>
            <p>
              Create What you need For your perfect website. Choose from Wide
              Range of Element & Simple put them on your own Canvas.
            </p>
          </div>
          <div className="button">
            <button>Explore More</button>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="wrap-body-content">
        <div className="body-content">
          <img src={responsive} alt="images responsive logo" />
          <div className="content">
          <h5>Responsive Design</h5>
          <p>
            This website is Responsive you can check by openeing this website on
            diffrent devices,This website is Responsive you can check by openeing this website on
          </p>
          </div>
        </div>
        <div className="body-content">
          <img src={visual} alt="images visual logo" />
          <div className="content">
          <h5>Visual Effect</h5>
          <p>
            This website is Responsive you can check by openeing this website on
            diffrent devices,This website is Responsive you can check by openeing this website on
          </p>
          </div>
        </div>
        <div className="body-content">
          <img src={setting2} alt="images setting logo" />
          <div className="content">
          <h5>Admin Panel</h5>
          <p>
            This website is Responsive you can check by openeing this website on
            diffrent devices,This website is Responsive you can check by openeing this website on
          </p>
          </div>
        </div>
        </div>
        <footer>
&copy; {new Date().getFullYear()} All Rights Reserved - Koral.com        </footer>
      </div>
    </>
  );
}   
