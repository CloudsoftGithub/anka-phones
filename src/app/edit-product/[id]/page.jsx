
import EditProduct from "@/components/EditProduct";
import getSingle from "@/product-fetch/getSingle";

export default async function page({ params: { id } }) {
  const user = await getSingle(id);
  const { name, price, description, imgUrl } = user;
  return (
    <>
      <EditProduct
        id={id}
        name={name}
        price={price}
        description={description}
        imgUrl={imgUrl}
      />
    </>
  );
}
