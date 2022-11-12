import {Component} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Aboute } from "./Aboute/Aboute";
import { Chlid } from "./Chlid/Chlid";
import Contacts from "./Contacts/Contacts";
import { Gallery } from "./Gallery/Gallery";
import Home from "./Home/Home";
import Layoud from "./Layoud/Layoud";



let X =createBrowserRouter([
  {path:'/' ,element:<Layoud/> ,children:[
    {index:true ,element:<Home/>},
    {path:'aboute' ,element:<Aboute/>},
    {path:'Contacts' ,element:<Contacts/>},
    {path:'Gallery' ,element:<Gallery/>},
    {path:'Child' ,element:<Chlid/>},
  ]}

])

 export default class App extends Component
 {
   state ={}
   render()
   {
    return<> 
      <RouterProvider router={X}/>
    </>
   }
 }