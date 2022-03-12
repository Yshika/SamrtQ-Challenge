import { useContext, useEffect, useState } from "react";
import Category from "../../components/category";
import Menu from "../../components/Menu";
import { Context } from "../../context";
import "./style.scss";
const Home = () => {
  const data = useContext(Context);

  const [selectedCategory, setSelectedCategory] = useState({});
  useEffect(() => {
    console.log("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="main">
      <div className="main-heading">build your menu</div>
      <section className="main-section">
        <Category
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></Category>
        <Menu selectedCategory={selectedCategory}>Food</Menu>
        <div>Cart</div>
      </section>
    </main>
  );
};

export default Home;
