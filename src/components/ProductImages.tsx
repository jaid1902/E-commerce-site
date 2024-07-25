"use client";
import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://i.pinimg.com/236x/a1/de/38/a1de387e8a8a15ff67eeae2c0d273113.jpg",
//   },
//   {
//     id: 2,
//     url: "https://i.pinimg.com/236x/4d/a1/96/4da196613f710f20cb2dd2b33005e954.jpg",
//   },
//   {
//     id: 3,
//     url: "https://i.pinimg.com/236x/6e/69/e5/6e69e5d310f18a1e3412a2e14da0c670.jpg",
//   },
//   {
//     id: 4,
//     url: "https://i.pinimg.com/236x/6e/69/e5/6e69e5d310f18a1e3412a2e14da0c670.jpg",
//   },
// ];

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {items.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
