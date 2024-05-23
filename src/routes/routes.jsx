import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Recursive from "../pages/Recursive";
import Alphabet from "../pages/Alphabet";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Recursive/>
            },
            {
                path:'alphabet',
                element:<Alphabet/>
            }
        ],
        errorElement:<div>404 Error</div>
    }
])