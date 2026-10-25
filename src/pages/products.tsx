import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";
import type { Product } from "../types/product";



const Products = () => {
    const { data, isLoading, error } = useQuery( 
        {queryKey:["products"],
        queryFn: async () =>{
         const response = await api.get<Product[]>("/products");
         return response.data;},
        });
  return (
    <div> 
      {data?.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
      
      {isLoading && <p>Loading...</p>}
      {error ? <p>Error occurred while fetching products.</p> : null}
    </div>
  );
};

export default Products;
