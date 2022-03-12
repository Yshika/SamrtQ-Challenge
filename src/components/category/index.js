import { useContext, useEffect } from "react";
import { Context } from "../../context";
import "./style.scss";
const Category = ({
  selectedCategory = {},
  setSelectedCategory = () => {},
}) => {
  const { extras: { categories = {} } = {} } = useContext(Context);

  useEffect(() => {
    if (!Object.keys(categories).length) return;
    setSelectedCategory({
      name: Object.keys(categories)[0],
      ...categories[Object.keys(categories)[0]],
    });
  }, [categories]);

  return (
    <div className="category-main">
      {Object.keys(categories)?.map((ele, index) => {
        const data = {
          name: ele,
          ...categories?.[ele],
        };
        return (
          <div
            className={`category-ele ${
              JSON.stringify(data) === JSON.stringify(selectedCategory)
                ? "category-ele-selected"
                : ""
            }`}
            key={index}
            onClick={() => {
              setSelectedCategory(data);
            }}
          >
            <div className="category-img-div">
              <img src={data?.icon} className="category-img"></img>
            </div>
            <div className="category-name">{data?.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
