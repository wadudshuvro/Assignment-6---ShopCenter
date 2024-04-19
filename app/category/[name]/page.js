"use client";
import EachProduct from "@/components/EachProduct";
import data from "../../../database/data.json";
import EachCategory from "@/components/EachCategory";
import { useState } from "react";
export default function CategoryPage({ params }) {
  const { name } = params;
  const [active, setActive] = useState(name);

  const handleActive = (category) => {
    setActive(category);
  };
  const categoryArr = ["All"];
  for (let i of data.products) {
    if (!categoryArr.includes(i.category)) {
      categoryArr.push(i.category);
    }
  }

  const currentProduct = data.products.filter((p) => p.category == active);
  console.log(currentProduct);

  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        {categoryArr.map((category) => (
          <EachCategory
            key={category}
            category={category}
            changeActive={handleActive}
            active={active}
          />
        ))}
      </div>
      <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
        {active == "All"
          ? data.products.map((product) => (
              <EachProduct
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                discountPercentage={product.discountPercentage}
                thumbnail={product.thumbnail}
              />
            ))
          : currentProduct.map((product) => (
              <EachProduct
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                discountPercentage={product.discountPercentage}
                thumbnail={product.thumbnail}
              />
            ))}
      </div>
    </section>
  );
}
