import Image from "next/image";
import Link from "next/link";

export default function EachProduct({
  title,
  category,
  description,
  price,
  discountPercentage,
  thumbnail,
  id
}) {
  const currentPrice = Math.round(price - (discountPercentage * price) / 100);
  return (
    <div className="p-5">
      <div class="relative delay-150 w-[90%] flex justify-center items-center rounded-md h-[250px] bg-gray-200 bg-cover bg-center transition-all duration-3000 ease-in-out transform overflow-hidden">
        <div className="absolute">
          {" "}
          <Image
            src={thumbnail}
            alt=""
            width={500}
            height={100}
            className="h-full w-full"
          />
        </div>
      </div>
      <h2 class="text-sm lg:text-base mt-2">
        <Link class="text-base font-bold hover:text-green-600" href={`/product/${id}`}>
          {title}
        </Link>
        <span class="text-[#525252] hover:text-blue-600">
          <Link href={`/category/${category}`}>({category})</Link>
        </span>
      </h2>
      <p class="text-[#919090] text-sm ">{description}</p>

      <p class="text-rose-600 text-sm mt-4">
        <span class="text-[#919090] line-through">${price}</span> $
        {currentPrice}
      </p>
    </div>
  );
}
