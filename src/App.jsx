import './App.css'

import MasterLayOut from './components/MasterLayOut/MasterLayOut.jsx'
 import Header from './components/Header/header.jsx'
import AllCars from './components/AllCars/AllCars.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from './components/Details/Details.jsx'
function App() {

  const routes = createBrowserRouter([{
    path:'/',
    element:<MasterLayOut/>,
    children:[
      {index : "true" , element : <Header/>},
      {path : "/allcars" , element : <AllCars/>},
      {path :'/home' ,element :<Header/>},
      {path :'/details/:id' ,element :<Details/>},
      
    ]
  }])

  return (
    

    <>

<RouterProvider router={routes}></RouterProvider>


{/* <MasterLayOut/> */}
{/* <Header/>
<AllCars/> */}


    </>
  )
}

export default App
