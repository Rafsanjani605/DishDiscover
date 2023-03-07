import { createBrowserRouter } from "react-router-dom";
import Categories from "../Categories/Categories";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Random from "../Random/Random";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/category',
                loader: async() =>{
                    return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')},
                element: <Categories></Categories>

            },
            {
                path:'/Random',
                element: <Random></Random>
            }
        ]

    }
])