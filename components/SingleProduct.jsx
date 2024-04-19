"use client"
import Image from "next/image";
import Star from "./Star";
import data from "../database/data.json"
import Link from "next/link";


export default function SingleProduct({params}) {
  const {id} = params;
  let productObj = {}
  for (let i of data.products){
    if(i.id == id){
      productObj = {...i}
    }
  }
  const imagesArr = []
  for (let i of productObj.images) {
    imagesArr.push(<Image
      width={100}
      height={100}
      src={i}
      className="w-[100px] h-[100px] mx-auto border object-cover"
      alt=""
    />)
  }
  return (
    <div className="h-screen">
      <div className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500 rounded-md p-4 h-[10%]">
            <Image
              width={100}
              height={100}
              src={productObj.thumbnail}
              className="w-[100%] h-[100%] mx-auto object-cover"
              alt=""
            />

            <div className="flex gap-4 mt-4 overflow-hidden">
             {imagesArr}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {productObj.title}
            </h1>
            <Link href={`/category/${productObj.category}`} className="text-[#919090] my-3 hover:text-blue-600">({productObj.category})</Link>
            
            <div className="mt-3 flex items-center justify-start gap-1">
              <Star num={5}/>
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${productObj.price}
                </span>
                <span className="font-bold text-2xl">${Math.round(productObj.price - productObj.price*productObj.discountPercentage/100)}</span>
              </p>
            </div>
            <div>
              <p className="leading-7">
                {productObj.description}
              </p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${Math.round(productObj.price - productObj.price*productObj.discountPercentage/100)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
