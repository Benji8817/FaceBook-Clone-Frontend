import Login from "./Pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./Pages/register/Register";
import Home from "./Pages/home/Home.jsx"

function App(){
  const router = createBrowserRouter([
    {
      path: "/Home",
      element:<Home/>
    },
    
    {
      path: "/login",
      element:<Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
  ]);
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  );

}
  

export default App;
