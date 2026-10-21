import { useQuery } from "react-query";
import { api } from "../api/api";
import type { Product } from "../types/product";



const Products = () => {
    const { data, isLoading,error } = useQuery( 
        {queryKey:["products"],
        queryFn: async () =>{
         const response = await api.get<Product[]>("/products");
         return response.data;},
         initialData : []});
  return (
    <div> 
      {data?.map((product: Product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
      
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Products;


