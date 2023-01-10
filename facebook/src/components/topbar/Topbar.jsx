import "./topbar.scss"
import React from "react"



const Topbar = ()=>{
    return(
        <div className="container">
            <div className="topbarLeft">
                <span className="icon">IBOOK Media</span>
            </div>
            
            <div className="topbarMiddle">
                <div className="topbarLink1">Homepage</div>
                <div className="topbarLink2">News Feed</div>
                <div className="topbarLink3 ">Profile</div>
            </div>
            <div className="topbarRight">
            <form>
             <input type="text" className="searchBar" placeholder='Search here'>
             
             </input>
             
             </form>
            </div>
        </div>
    )
}
    export default Topbar 