import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./home.scss"
import Topbar from '../../components/topbar/Topbar'




const Home= ()=>{
    return (
        < div className='Home'>
     <div className='searchTab'>
         <form className='tab'>
             <input type="text" placeholder='Search here'></input>
             <button> Search</button>
             </form>
             <h1 className='Title'>IBOOK Media.</h1>

         <div className='Middle'>
             <h1 className="news">News Feed</h1>
             </div>
             
             


         
     </div>
     </div>
    )
        
   
    




}
























export default Home