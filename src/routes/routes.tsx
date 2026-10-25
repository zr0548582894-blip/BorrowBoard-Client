import { createBrowserRouter } from "react-router";
import App from "../App";
import ProductDtails from "../pages/productDtails";
import ProductForm from "../pages/productForm";
import Products from "../pages/products";
import WantedItemForm from "../pages/wantedItemForm";
import Account from "../pages/account";
import Login from "../pages/login";
import Register from "../pages/register";
import WantedItems from "../pages/wantedItems";
import AdminDashboard from "../pages/adminDashboard";
import AdminProducts from "../pages/adminProducts";
import AdminUsers from "../pages/adminUsers";
import NotFoundPage from "../pages/notFoundPage";


const routs=createBrowserRouter(
    [
        {
            path:"",
            element:<App />,
            children:[
                {
                    path: "/",
                    element:<Products/>
                },
                {
                    path:"/products/:id",
                    element:<ProductDtails/>
                },
                {
                    path:"/products/new",
                    element:<ProductForm/>
                },
                {
                    path:"/products/:id/edit",
                    element:<ProductForm/>
                },
                {
                    path:"/wanted",
                    element:<WantedItems/>
                },
                {
                    path:"/wanted/:id",
                    element:<WantedItemForm/>
                },
                {
                    path:"/wanted/new",
                    element:<WantedItemForm/>
                },
                {
                    path:"/wanted/:id/edit",
                    element:<WantedItemForm/>
                },
                {
                    path:"/login",
                    element:<Login/>
                },
                {
                    path:"/register",
                    element:<Register/>
                },
                {
                    path:"/me",
                    element:<Account/>
                },
                {
                    path:"/admin",
                    element:<AdminDashboard/>
                },
                {
                    path:"/admin/products",
                    element:<AdminProducts/>
                },
                {
                    path:"/admin/users",
                    element:<AdminUsers/>
                },
                {
                    path:"*",
                    element:<NotFoundPage/>
                }
            ]
        }
    ])
export default routs