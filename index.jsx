import "./App.css";

function App() {
  return (
    <>
      <div className="a">
        <h1>Website</h1>

        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>

        <button>Login</button>
      </div>

      <div className="b">
        <div>
          <h1>We Make Your Business Interesting</h1>
          <p>We create modern digital solutions for your business.</p>
          <button>Get Started</button>
        </div>

        <div className="image">
          <img
            src="https://thumbs.dreamstime.com/b/group-business-people-working-outdoors-work-related-images-above-them-39387675.jpg"
            alt="business"
          />
        </div>
      </div>

      <h1>Our Services</h1>

      <div className="s">
        <div className="c">
          <h2>Design</h2>
          <p>Creative website designs.</p>
          <img
            src="https://img.magnific.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?semt=ais_hybrid&w=740&q=80"
            alt="design"
          />
        </div>

        <div className="c">
          <h2>Development</h2>
          <p>Responsive websites.</p>
          <img
            src="https://www.helixdigital.com.au/wp-content/uploads/2018/10/responsive-website-design.jpg"
            alt="development"
          />
        </div>

        <div className="c">
          <h2>Marketing</h2>
          <p>Digital marketing strategies.</p>
          <img
            src="https://www.shutterstock.com/image-photo/internet-business-technology-network-concept-260nw-2476823445.jpg"
            alt="marketing"
          />
        </div>
      </div>

      <h1>Contact Us</h1>

      <div className="d">
        <p>Email: info@company.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Main Street, USA</p>
      </div>
    </>
  );
}

export default App;