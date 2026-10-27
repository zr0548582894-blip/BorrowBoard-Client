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
import { AdminProtected, UserProtected } from "../components/protected";
import WantedItemDtails from "../pages/wantedItemDetails";
import AdminCategories from "../pages/adminCategories";


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
                    element:<UserProtected><ProductForm /></UserProtected>
                },
                {
                    path:"/products/:id/edit",
                    element:<UserProtected><ProductForm /></UserProtected>
                },
                {
                    path:"/wanted",
                    element:<WantedItems/>
                },
                {
                    path:"/wanted/:id",
                    element:<WantedItemDtails/>
                },
                {
                    path:"/wanted/new",
                    element:<UserProtected><WantedItemForm/></UserProtected>
                },
                {
                    path:"/wanted/:id/edit",
                    element:<UserProtected><WantedItemForm/></UserProtected>
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
                    element:<UserProtected><Account /></UserProtected>
                },
                {
                    path:"/admin",
                    element:<AdminProtected><AdminDashboard/></AdminProtected>
                },
                {
                    path:"/admin/products",
                    element:<AdminProtected><AdminProducts/></AdminProtected>
                },
                {
                    path:"/admin/users",
                    element:<AdminProtected><AdminUsers/></AdminProtected>
                },
                                {
                    path:"/admin/categories",
                    element:<AdminProtected><AdminCategories/></AdminProtected>
                },
                {
                    path:"*",
                    element:<NotFoundPage/>
                }
            ]
        }
    ])
export default routs