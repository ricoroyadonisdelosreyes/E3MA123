import React from 'react';

const Header = () => {
    return(
        
        <header className='container px-3 pb-1 col-md-12 border-bottom border-secondary bg-green border-5 '>
            <strong>
            <div className="row p-3 bg-green ">
            <div className=" col-md-10 "> 
            <div className="p-heading font-weight-bold text-center p-3" > BirdWatching </div></div>
            <div class=" col-md ">
            <img src='./logo.png' width='150'  alt ="" />
            </div></div>

            <div className = 'row text-center bg-lime p-1'>
            <div className = 'col'>HOME</div>
            <div className = 'col'>GET STARTED</div>
            <div className = 'col'>PHOTOS</div>
            <div className = 'col'>FEATURES</div>
            <div className = 'col'>ABOUT</div>

            </div></strong>
        </header>
        )
}
export default Header