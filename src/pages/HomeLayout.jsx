import { Outlet, useNavigation } from "react-router-dom"
import { Header } from "../components"
import Navbar from "../components/Navbar"
import Loading from "../components/Loading"
function HomeLayout() {
  const navigate = useNavigation()

  const loading = navigate.state == 'loading'
  return (
    <>
    <Header/>
    <Navbar/>
      {loading ? <Loading/> : <Outlet/>}
    </>
  )
}

export default HomeLayout
