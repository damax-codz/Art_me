import { Link, Outlet } from "react-router-dom"


import './Footer.css'

const footer = ()=>{
 return (
   <div className="footer">
     <div className="sec">
       <Link to="/home" className="nav">
         <h2>Artme</h2>
       </Link>
       <div className="Nav-link">
         <ul>
           <li>
             <Link to="/gallery" className="nav">
               gallery
             </Link>
           </li>
           <li>
             <Link to="/gallery" className="nav">
               About Us
             </Link>
           </li>
           <li>
             <Link to="/gallery" className="nav">
               Contact
             </Link>
           </li>
           <li>
             <Link to="/gallery" className="nav">
               Help
             </Link>
           </li>
         </ul>
       </div>
       <div className="social">
         <img src="" alt="" />
         <img src="" alt="" />
         <img src="" alt="" />
       </div>
     </div>
     <div className="hr"></div>
     <div className="subscribe">
       subscribe to our news letter
       <div className="input">
         <form
           className="form"
           action="http://localhost:3000/admin"
           method="post"
         >
           <input
             typeof="email" name="email"
             placeholder="input your email here.."
             required
           />
           <button className="button">subscribe</button>
         </form>
       </div>
     </div>
     <p>
       Copyright © 2017-2022 MIT by Ezra design by damax hub and Ezra
       <br />
       Official NestJS Consulting Trilon.io hosted by Netlify
     </p>
     <Outlet />
   </div>
 );
}

export default footer