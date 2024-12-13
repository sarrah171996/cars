import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar.jsx'


export default function MasterLayOut() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    
    </>
  )
}
