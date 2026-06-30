import FilterBar from "@/components/filters/filterBar";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import ProductsList from "@/components/products/productsList";

export default function Home() {
  return (
    <div>
       <Header/>
       <FilterBar/>
       <ProductsList/>
    </div>
  );
}
