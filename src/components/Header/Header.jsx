// import React from 'react'
import headerImg from '../../assets/assignment-images/imges/landing-page/car 2 1.png'
import locationImg from'../../assets/assignment-images/imges/landing-page/location.png'
import carImg from'../../assets/assignment-images/imges/landing-page/car-icon.png'
import cardImg1 from'../../assets/assignment-images/imges/card/car1.png'
import jagImg from'../../assets/assignment-images/imges/landing-page/jaguar.png'
import nisImg from'../../assets/assignment-images/imges/landing-page/nissan.png'
import volvoImg from'../../assets/assignment-images/imges/landing-page/volvo.png'
import audImg from'../../assets/assignment-images/imges/landing-page/audi.png'
import car2 from'../../assets/assignment-images/imges/landing-page/sec-5/Audi 1.png'
import chat from'../../assets/assignment-images/imges/landing-page/sec-5/chat.png'
import message from'../../assets/assignment-images/imges/landing-page/sec-5/message.png'
import user from'../../assets/assignment-images/imges/landing-page/sec-5/user.png'
import man from'../../assets/assignment-images/imges/landing-page/sec-6/Rectangle 8 (1).png'
import girl from'../../assets/assignment-images/imges/landing-page/sec-6/girl.png'
import iphone from'../../assets/assignment-images/imges/landing-page/sec-7/iPhone-14.png'
import android from'../../assets/assignment-images/imges/landing-page/andriod.png'
import ios from'../../assets/assignment-images/imges/landing-page/ios.png'
import logo from "../../assets/assignment-images/imges/nav/logo.png"
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'



export default function Header() {
 
    let [vichels , setVichels] = useState([])

    
    let getvichels = async ()=>{

try {

    let {data} = await axios.get('https://myfakeapi.com/api/cars/');
    setVichels(data.cars)

vichels.push(data.cars)
        
    
} catch (error) {
    console.log(error);

}
    
    }
    
    useEffect(()=>{
        getvichels();
    },[])

return (
    <>
      
<div className="container-fluid ">
    <div className="row ">
        <div className="col-md-6 vh-100 d-flex w-100 align-items-center  justify-content-between position-relative">
            <div className={`header-content col-md-4 m-5 p-5 ${styles.moveContent}`}>
                {/*----------------- عايزة اغير نوع الخط ----------------------*/}
<h2 className={styles.headerContent}>Find, book and rent a car <span className= {styles.contentWord}>Easily</span></h2>
<p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
            </div>

            <div>

                <div className={`  ${styles.headerImg}`}>

<img className= {`w-100`} src={headerImg} alt="" />
                </div>
            </div>
        </div>


<div className="container ">

        <form className={`  d-flex m- p-5  ${styles.headerSearch} ` } role="search">
      <div className='d-flex w-75 m-auto'>
      <i className={`fa-solid fa-location-dot p-2`}></i>
        <input className="  m-auto  form-control me-2" type="search" placeholder="Search By Name" aria-label="Search" />
        <button className="btn " type="submit">Search</button>
      </div>
      </form>
    </div>
{/* --------------------------------------- */}
    <button className={`btn m-auto ${styles.headerBtn} `} type="submit">POPULAR RENT DEALS</button>
{/* ---------------------------------------- */}
    <h2 className='text-center m-5 p-5'>Most popular cars rental deals</h2>
{/* --------------- show some vechels ------------------------- */}

<div className="row d-flex justify-content-center  ps-5 pe-3 m-3 mb-5 ">

 { vichels.map((vichel , index)=>(


     <div className=' col-md-3 ' key={index}>
 <Link className='nav-link'  to={`/details/${vichel.id}/` }>

    <div className="">

<img src={cardImg1} alt="" />
  <p className="card-title">{vichel.car}</p>
  <p className="card-title">{vichel.car_model}</p>
  <p className="card-title"><i className="fa-solid fa-calendar-days"></i> {vichel.car_model_year}</p>
  <p className="card-title"> {vichel.price} </p>



    <a href="#" className="btn btn-primary">Go somewhere</a>
    
</div>

</Link>
    </div>

   
   

)).slice(0,4)} 



</div>


{/* ----------------------------------------- */}

<Link  className={`btn m-auto  ${styles.showAll} `}to='/allcars'  >SHOW ALL VICHELS <i className="fa-solid fa-arrow-right ms-2"></i> </Link>
{/* <button className={`btn m-auto  ${styles.showAll} `} type="submit">POPULAR RENT DEALS <i className="fa-solid fa-arrow-right ms-2"></i></button> */}

</div>

{/* ----------------------------------------- */}

<div className=' m-5 text-center'>

<button className={`btn m-5 ${styles.headerBtn} `} type="submit">HOW IT WORK</button>
</div>

<h2 className='text-center m-5 p-5'>Most popular cars rental deals</h2>

</div>

{/* -------------------------------------- */}

<div className={`container text-center justify-content-center  d-flex ${styles.headerCards}`}>

<div className="row ms-5 w-75  ">
    <div className="col-md-4">
    <img src={locationImg} className='w-50' alt="" />
    <h4 className='m-2'>Choose location</h4>
    <p >Choose your and find your best car</p>
    </div>



    <div className="col-md-4">
<img className='w-50' src={carImg}  alt="" />
    <h4 className='m-2'>Pick-up date</h4>
    <p>Select your pick up date and time to book your car</p>
    </div>



    <div className="col-md-4 ">
    <img src={locationImg} className='w-50' alt="" />

    <h4 className='m-2'>Book your car</h4>
    <p >Book your car and we will deliver it directly to you</p>
    </div>

{/* ----------------------------------- */}




</div>


</div>

<div className="container mt-5 d-flex  text-center ">
    <div className="col-md-3 ms-5 ">
        <img src={jagImg} alt="" />
    </div>

    <div className="col-md-3 ">
        <img src={nisImg} alt="" />
    </div>

    <div className="col-md-3 ">
        <img src={volvoImg} alt="" />
    </div>

    <div className="col-md-3 ">
        <img src={audImg} alt="" />
    </div>


</div>


{/* ================== why choose us section =========================== */}

<div className="row mt-5">
    <div className="container d-flex justify-content-between">
        <div className="col-md-5 ">

<img className='w-100' src={car2} alt="" />

        </div>


        <div className="col-md-5 me-5">
        <button className={`btn  ${styles.whyChooseBtn} `} type="submit">WHY CHOOSE US</button>
        <h3 className='mt-4 mb-5'>We offer the best experience with our rental deals</h3>

        <div className="d-flex m-5">
            <img className='' src={user} alt="" />

            <div>

                <div className='ms-4'>

            <h6>Best price guaranteed </h6>
            <p>Find a lower price? We’ll refund you 100% of the difference.</p>
                </div>

            </div>
        </div>


        <div className="d-flex m-5">
            <img className='' src={user} alt="" />

            <div>

                <div className='ms-4'>

            <h6>24 hour car delivery</h6>
            <p>Book your car anytime and we will deliver it directly to you.</p>
                </div>

            </div>
        </div>


        <div className="d-flex m-5">
            <img className='' src={message} alt="" />

            <div>

                <div className='ms-4'>

            <h6>Best price guaranteed</h6>
            <p>Find a lower price? We’ll refund you 100% of the difference.</p>
                </div>

            </div>
        </div>


        <div className="d-flex m-5">
            <img className='' src={chat} alt="" />

            <div>

                <div className='ms-4'>

            <h6>24/7 technical support</h6>
            <p>Have a question? Contact Rentcars support any time when you have problem.</p>
                </div>

            </div>
        </div>


        </div>
    </div>
</div>



{/* ==================testemonial section =========================== */}

<div className={`row  ${styles.tesemonial}`}>
    <div className="container  ">
        <div className='text-center'>

    <button className={`btn m-5 ${styles.headerBtn} `} type="submit">TESTEMONIAL</button>
        </div>
    <h2 className='text-center '>Most popular cars rental deals</h2>

<div className="d-flex m-4 justify-content-between">

    <div className={`col-md-6 d-flex bg-body ${styles.card}`}>
    <img className='w-75 me-3' src={man}  alt="" />
    <div>
    <h2 className='m-2'>5.5 stars</h2>
    <i className={`fa-solid fa-star p-2`}></i>
    <i className={`fa-solid fa-star p-2`}></i>
    <i className={`fa-solid fa-star p-2`}></i>
    <i className={`fa-solid fa-star p-2`}></i>
    <i className={`fa-solid fa-star p-2`}></i>

    <p>“I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.”</p>

<div  className='mt-5 text-start m-2'>
    
<h6>Charlie Johnson</h6>
<p>Last updated 3 mins ago
</p>
</div>
    </div>

    </div>



    <div className="col-md-5 d-flex bg-body">
    <img className={`w-75  me-3 ${styles.card}`} src={girl}  alt="" />
    <div>
    <h2 className='m-2'>5.5 stars</h2>
    <i className={`fa-solid fa-star p-2`}></i>
    <i className={`fa-solid fa-star p-2`}></i>
    <i className={`fa-solid fa-star p-2`}></i>
    <i className={`fa-solid fa-star p-2`}></i>
    <i className={`fa-solid fa-star p-2`}></i>

    <p>“I feel very secure when using caretals services. Your customer care team is very enthusiastic and the driver is always on time.”</p>

<div  className='mt-5 text-start m-2'>
    
<h6>Charlie Johnson</h6>
<p>Last updated 3 mins ago
</p>
</div>
    </div>

    </div>
</div>


    </div>
</div>

<div className="row  text">
    <div className="container d-flex justify-content-between ">


        <div className="co-md-6 m-5 ">

            <h3 className={styles.headerContent}>Download Rentcars App for <span className= {styles.contentWord}>FREE</span></h3>
            <p>For faster, easier booking and exclusive deals.</p>
           
           <div className='ms-5 '>

             <img className='me-2' src={android} alt="" />
             <img src={ios} alt="" />

           
           </div>

           <div className='mt-3'>

            < input className={`form-control w-50 mb-2 ${styles.headerInput}`} type="text" placeholder='Name' />
            < input className={`form-control w-50 mb-2 ${styles.headerInput}`} type="number" placeholder='Phone Number' />
            < input className={`form-control w-50 mb-2 ${styles.headerInput}`} type="email" placeholder='Email' />
           <div className='text-center w-50'>

            <button className={`btn btn-info w-25 ${styles.landingInput}`} type="submit">Send</button>
           </div>

           </div>

        </div>


        <div className="co-md-6 d-flex justify-content-end m-5 mb-0">
            <img className='w-75' src={iphone} alt="" />

            </div>


    </div>
</div>

{/* ========================= footer section =========================== */}

<div className="row">
    <div className={`container d-flex  justify-content-center p-5 ${styles.footer} `}>
        <div className="col-md-3 m-4">

               <div className='ms-2'>
                   <img src={logo} alt="" />
               </div>
<div>

                <span className='m-2'> <i className={`fa-solid fa-location-dot p-2 m-2`}></i>25566 Hc 1, Glenallen,Alaska, 99588, USA</span>
</div>

<div>

              <span className='m-2'> <i className={`fa-solid fa-phone p-2 m-2`}></i> +603 4784 273 12</span>
</div>

    
<div>
               <span className='m-2'> <i className={`fa-solid fa-envelope p-2 m-2`}></i>rentcars@gmail.com</span>
</div>
        </div>



    <div className='m-4 '>
        <h4 className='mb-2'>Our Products</h4>
        <h6>Career</h6>
        <h6>Car</h6>
        <h6>Packages</h6>
        <h6>Features</h6>
        <h6>Priceline</h6>

    </div>


    <div className=' m-4'>
        <h4 className='mb-2'>Resources</h4>
        <h6>Download</h6>
        <h6>Help Centre</h6>
        <h6>Guides</h6>
        <h6>Partner Network</h6>
        <h6>Cruises</h6>
        <h6>Developer</h6>

    </div>


    <div className='m-4'>
        <h4 className='mb-2'>About Rentcars</h4>
        <h6>Why choose us</h6>
        <h6>Our Story</h6>
        <h6>Investor Relations</h6>
        <h6>Press Center</h6>
        <h6>Advertise</h6>

    </div>


    <div className='m-4'>
        <h4 className='mb-2'>Follow Us</h4>

<span>
    <i className="fa-brands fa-square-facebook m-2">
    <i className="fa-brands fa-instagram m-2"></i>
    <i className="fa-brands fa-square-youtube m-2"></i>
        
        </i></span>
    </div>







    </div>

    <div className={`container pb-5 ${styles.footer }  `}>
    <hr className='w-75 m-auto' />
    < p className={` mt-4 ${styles.footerP}`} > Copyright 2023 ・ Rentcars, All Rights Reserved  </p>

    </div>     
</div>

    </>
  )
}
