
import "./home.css";
import { useState, useEffect } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";


function Home() {
  const placeHolders = [
    "Search for food",
    "search for restaurant",
    "search for drinks",
    "search for desserts",
    "search for snacks",
    "search for burger",
    "search for pizza",
  ];
  const [currentPlaceHolder, setCurrentPlaceHolder] = useState(placeHolders[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % placeHolders.length;
      setCurrentPlaceHolder(placeHolders[nextIndex]);
      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);
  const images = [
    "https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=clncU414Y_vfH-OoUqiwy5AnZRwBpeSehVqJkD9SvKU=",
    "https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=hthCHhBsUotyv4SCP8MdltTNv1bT6g5R9NIB1fufva0=",
    "https://media.istockphoto.com/id/157636846/photo/fizz.jpg?s=612x612&w=0&k=20&c=MUznstTBCD2-UJ4GFxWvJDGkl8IgjBizjIUR8TPq4-Y=",
    "https://media.istockphoto.com/id/1137312508/photo/assortment-of-products-with-high-sugar-level.webp?a=1&b=1&s=612x612&w=0&k=20&c=XOFA1_Ffx-0xDTg35DoLPJfU49uWPZUCf8rNChdPOgs=",
    "https://media.istockphoto.com/id/1218213212/photo/homemade-french-fries-with-ketchup-and-mayonnaise-on-rustic-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=QYwXP0-whoz7Cni7CXNfIyT_pOcRpZUYHqkTYH4MEhA=",
    "https://media.istockphoto.com/id/1333127665/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?s=612x612&w=0&k=20&c=63UXYPOISm8nJ8SNK79dDm0w1gY6jXzYQP0heL6fnOg=",
  ];

  const [current, setCurrent] = useState(0);

  const nextImg = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const prevImg = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const menuCard = [
    {
      imageUrl: "pizza.jpeg",
      name: "Pizza Hut",
      rating: 4.5,
      location: "Downtown",
    },
    {
      imageUrl: "burger.jpeg",
      name: "Burger King",
      rating: 4.2,
      location: "Uptown",
    },
    {
      imageUrl: "frenchfries.jpeg",
      name: "Subway",
      rating: 4.0,
      location: "Midtown",
    },
    {
      imageUrl: "dessert.jpeg",
      name: "Taco Bell",
      rating: 4.3,
      location: "Eastside",
    },
    {
      imageUrl: "biryani.jpeg",
      name: "KFC",
      rating: 4.1,
      location: "Westside",
    },
    {
      imageUrl: "drinks.jpeg",
      name: "Drinks Hub",
      rating: 4.4,
      location: "Suburbs",
    },
    {
      imageUrl: "chinese.jpeg",
      name: "Panda Express",
      rating: 4.2,
      location: "Chinatown",
    },
    {
      imageUrl: "chitpotle.jpeg",
      name: "Chipotle",
      rating: 4.5,
      location: "City Center",
    },
  ];
  return (
    <div className="home">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder={currentPlaceHolder}
        />
        <IoMdSearch className="search-icon" />
      </div>
      <div className="image-container">
        <ul className="image-list">
          <li>
            <div className="clip-shape">
              <p>
                FoodBuddy is your go-to app for discovering and ordering your
                favorite meals. From piping hot pizzas and juicy burgers to
                refreshing drinks and sweet desserts – we bring all your
                cravings to your fingertips.
              </p>
              <p>
                Our mission is simple: to connect food lovers with the best
                restaurants around them. Whether you want to dine in, take away,
                or order online – FoodBuddy makes it easy, fast, and fun!
              </p>
            </div>
          </li>
          <li>
            <div className="assistant">
              <FaRobot />
            </div>
          </li>
          <li>
            <div className="image">
              <img
                src={images[current]}
                alt="Hand lifting a cheesy slice from a pizza topped with paneer cubes, green and red bell peppers. The pizza sits on a wooden tray over a red table, with a Pizza Hut logo and name above. A pepper shaker and green plants are in the background, creating a vibrant and inviting atmosphere."
                className="slider-img"
              />

              <div className="controls">
                <button onClick={nextImg} className="right-btn">
                  <AiFillCaretRight />
                </button>
                <button onClick={prevImg} className="left-btn">
                  <AiFillCaretLeft />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="middlePart">
        <p className="text">Order your favorite food !</p>

        <div className="menu-list">
          {menuCard.map((card, idx) => (
            <div key={idx} className="menu-card">
              <img
                src={card.imageUrl}
                alt={card.name}
                className="menu-card-img"
              />
              <div className="menu-card-details">
                <h3>{card.name}</h3>
                <p>Rating: {card.rating}</p>
                <p>Location: {card.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
