import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./footer.css";

function Footer() {
  const reviews = [
    {
      name: "Priya S.",
      review: "Amazing food and lightning-fast delivery. Highly recommended!",
    },
    {
      name: "Rahul M.",
      review: "The app is super user-friendly and the variety is great.",
    },
    {
      name: "Anita K.",
      review: "Delicious meals, and excellent customer service!",
    },
    {
      name: "Vikram L.",
      review: "A fantastic way to explore new cuisines in my city.",
    },
  ];
  return (
    <div>
      <footer className="footer">
        {/*About Branding*/}
        <div className="branding">
          <h3>
            <span>Food</span>
            <span>Buddy</span>
            <p>
              Delivering happiness to your doorstep.
              <br />
              Your go-to app for food delivery from your favorite restaurants!
            </p>
          </h3>
        </div>

        {/*Customer Reviews*/}
        <div className="customer-reviews">
          <h4>Customer Reviews </h4>
          <ul>
            {reviews.map((r, index) => (
              <li key={index}>
                <p>"{r.review}"</p>
                <p>- {r.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/*Social media*/}
        <div className="social-media">
          <h4>Follow Us</h4>
          <div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              arget="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/*Copyright*/}
        <div className="copyright">
          © {new Date().getFullYear()} FoodBuddy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
