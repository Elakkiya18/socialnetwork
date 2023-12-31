import { useContext } from "react";
import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navbar/Navbar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import{
  createBrowserRouter,
  Navigate,
  Outlet,
  Route,
  Router,
  RouterProvider,

  
} from "react-router-dom";

import { AuthContext } from "./components/context/authContext";
function App() {
  const {currentUser} = useContext(AuthContext);
  const Layout = () =>{
    return (
      <div>
        <NavBar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{flex: 6}}>
             <Outlet/>
          </div>
          
          <RightBar/>
        </div>
      </div>
    );
  };
  
  const ProtectedRoute =({children}) =>{
    if(!currentUser){
      return <Navigate to="./login" />
  }
    return children;
  }
  
  const router = createBrowserRouter([
    { 
      path:"/",
      element:(<ProtectedRoute><Layout/></ProtectedRoute>
        
        ) ,
 
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profil/:id",
          element: <Profile/>,
        },
      ]



    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
   ] );
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};


export default App ;

