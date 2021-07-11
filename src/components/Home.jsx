import React from 'react'
import Navbar from './Navbar';

const Home = () => {
    return (
    <div className="main"> 
        <Navbar />
          <div className="top">
              <div className="showcase">
                 <h1>Welcome to <span>Jala Design</span></h1>
                  
                   <p>At Jala Design we make your digital dreams a reality. 
                   </p>
                 
                 <div className="showcase_buttons"></div>
                 <button className="showcase_btn-services"><a href="/about">Learn More</a></button>
             </div>   
          </div>
          <div className="about">
            <h2>
                Lorem ipsum dolor sit amet.
            </h2>
             <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas deleniti tempore veritatis itaque voluptates id qui.
             </p>
        </div>
        <div className="parra">
           <h3>Lorem ipsum dolor.</h3>
            <p className="one">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum dolorum nihil labore nostrum, cumque 
            </p>
            <h3>Lorem ipsum dolor.</h3>
             <p className="two">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum dolorum nihil labore nostrum, cumque 
            </p>
            <h3>Lorem ipsum dolor.</h3>
            <p className="three">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum dolorum nihil labore nostrum, cumque 
            </p>
        </div>
            <div className="greyzone">
               <div className="photo"></div>
               <div className="grey-p"> 
               <h2>Lorem ipsum dolor sit.</h2>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim blanditiis porro eligendi odio sed officiis similique, tempora, optio recusandae ducimus temporibus quasi. Eligendi, a ducimus. Aut perspiciatis ut vero iure!</p>
                  
                   <div className="button_control"></div>
                   <button className="btgrey"><a href="/contact">Contact</a></button>
                 </div>
            </div>
        </div>
    
    )


};

export default Home;