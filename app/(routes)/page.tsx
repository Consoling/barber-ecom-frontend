import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import { useEffect } from "react";

export const revalidate = 0;

const HomePage = async () => {
  const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;



const firstBillboardURL = fetch(URL)
.then(res => res.json())
.then(jsonArray => {
    if(jsonArray.length > 0) {
        const firstObject = jsonArray[0];
        const id = firstObject.id;
        const json = id;
        console.log(json); // This will be the ID of the first object in the array
    } else {
        throw new Error("JSON array is empty");
    }
})
.catch(error => {
    console.error("Error fetching and extracting ID:", error);
    // handle the error as needed
});



  console.log(firstBillboardURL)
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('efed36f6-9844-4a7b-a513-039e1cffb1b2');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;