import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cardImg1 from'../../assets/assignment-images/imges/card/car3.png'


export default function AllCars() {

   
  let [vichels , setVichels] = useState([])

    
  let getvichels = async ()=>{

try {

  let {data} = await axios.get('https://myfakeapi.com/api/cars/');
  setVichels(data.cars)

vichels.push(data.cars)

console.log(vichels);

      
  
} catch (error) {
  console.log(error);

}
  
  }
  
  useEffect(()=>{
      getvichels();
  },[])


  return (
    <>

<div className="row d-flex justify-content-center  ps-5 pe-3 m-3 mb-5 ">

 { vichels.map((vichel , index)=>(


     <div className=' col-md-3 mb-5' key={index}>
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

   
   

))} 



</div>


    </>
  )
}
