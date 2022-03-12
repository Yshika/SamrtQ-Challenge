import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import "./style.scss";

const Menu = ({ selectedCategory = {} }) => {
  const { menu = {}, addToCart = () => {} } = useContext(Context);
  const [displayedMenu, setDisplayedMenu] = useState([]);

  useEffect(() => {
    console.log("menu", menu);
    if (!menu?.length) return;
    setDisplayedMenu(
      menu?.filter((item) => item?.category === selectedCategory?.name)
    );
    console.log("menu", displayedMenu);
  }, [menu, selectedCategory]);

  return (
    <div className="menu-main">
      <div className="menu-dashboard">
        <div className="menu-banner">
          <img
            src={selectedCategory?.bannerImage}
            alt="category-banner"
            className="menu-banner-img"
          />
        </div>
      </div>
      {displayedMenu?.map((ele, index) => {
        return (
          <div key={index} className="menu-card">
            <div className="menu-card-header">
              <div className="menu-card-header-img-div">
                <img
                  src={ele?.imageurl}
                  alt="header-img"
                  className="menu-card-header-img"
                />
              </div>

              <div className="menu-card-header-desc">
                <h2>{ele?.foodname}</h2>
                <p>{ele?.fooddescription}</p>
              </div>
              <div className="menu-card-header-price">${ele?.price}</div>
            </div>

            <div className="menu-cart">
              <button className="button" onClick={() => addToCart(ele)}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
