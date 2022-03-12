import { useEffect, useState } from "react";
import Category from "../../components/category";
import Menu from "../../components/Menu";
import Summary from "../../components/summary";
import "./style.scss";
const Home = () => {
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
        <Summary>Cart</Summary>
      </section>
    </main>
  );
};

export default Home;
