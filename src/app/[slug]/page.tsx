import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { notFound } from "next/navigation";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];
  const reviewRes = await fetch(
    ` https://api.fera.ai/v3/public/reviews?product.id=${product._id}&public_key=${process.env.NEXT_PUBLIC_FERA_ID}`
  );
  const reviews = await reviewRes.json();

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* image  */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* text  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100"></div>
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="text-2xl font-medium">
            ${product.price?.discountedPrice}
          </h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="text-2xl font-medium">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100"></div>
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}
        <div className="h-[2px] bg-gray-100"></div>
        {product.additionalInfoSections?.map((section: any) =>
          section.title !== "shortDesc" ? (
            <div className="text-sm" key={section.title}>
              <h4 className="font-medium mb-4">{section.title}</h4>
              <p>{section.description}</p>
            </div>
          ) : null  
        )}
        <div className="h-[2px] bg-gray-100"></div>
        {/* reviews  */}
        <h1 className="text-2xl">User Reviews</h1>
        {reviews.data.map((review: any) => (
          <div className="flex flex-col gap-4" key={review.id}>
            {/* user  */}
            <div className="flex items-center gap-4 font-medium">
              <Image
                src={review.customer.avatar_url}
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{review.customer.display_name}</span>
            </div>
            {/* stars  */}
            <div className="flex gap-2">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Image
                  src="/star.png"
                  key={index}
                  alt=""
                  height={16}
                  width={16}
                />
              ))}
            </div>
            {/* desc  */}
            {review.heading && <p>{review.heading}</p>}
            {review.body && <p>{review.body}</p>}
            <div className="">
              {review.media.map((media: any) => (
                <Image
                  src={media.url}
                  key={media.id}
                  alt=""
                  height={100}
                  width={50}
                  className="object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
