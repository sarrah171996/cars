import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import carImg from'../../assets/assignment-images/imges/card/car2.png'
import ac from'../../assets/assignment-images/imges/card/d8wxke_2_.png'
import doors from'../../assets/assignment-images/imges/card/doors.png'
import frames from'../../assets/assignment-images/imges/card/Frame.png'
import user from'../../assets/assignment-images/imges/card/user.png'




import styles from './Details.module.css'




export default function Details() {


    const [car , setCar] =useState({})
    let params= useParams();


    const getCarDetails = async ()=>{
        let {data} = await axios.get(`https://myfakeapi.com/api/cars/${params.id}`);
        setCar(data)
        
        // car.push(data.cars)
        
        console.log( car  );
        

    }

    useEffect(()=>{
        getCarDetails();
    },[])



  return (
    <>
<div className="container ">
    <div className="row m-5  ">
        <div className="col-md-4 mt-5 me-3 ">

<img src={carImg}  className='w-100' alt="" />


            </div> 

            <div className="col-md-6 mt-5">
            <p className={`  ${styles.whyChoose} `} >WHY CHOOSE US</p>
            <h2 className='mb-5'>WE OFFER THE BEST EXPERIENCE WITH OUR RENTAL DEALS</h2>

            <h4>{car.car}</h4>
            <div className={ ` ${styles.details}`}>
                <img src={ac} alt="" />
                <span className='m-2'>Air Conditioning </span>
            </div>


            <div className={ ` ${styles.details}`}>
                <img src={user} alt="" />
                <span className='m-2'>2 passengers </span>
            </div>


            <div className={ ` ${styles.details}`}>
                <img src={frames} alt="" />
                <span className='m-2'>Auto </span>
            </div>


            <div className={ ` ${styles.details}`}>
                <img src={doors} alt="" />
                <span className='m-2'>2 Doors </span>
            </div>



            </div>
            
              </div>
</div>

    </>
  )
}
