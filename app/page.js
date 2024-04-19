import EachProduct from "@/components/EachProduct";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import data from "../database/data.json";

export default function Home() {
  return (
    <div>
      <Hero state={true} />
      <section class="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10 ">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {data.products.map((product) => (
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
      <Email />
      <Footer />
    </div>
  );
}
