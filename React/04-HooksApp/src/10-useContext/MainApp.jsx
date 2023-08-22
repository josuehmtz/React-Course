import { UserProvider } from "./context/UserProvider"
import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
export const MainApp = () => {
  return (
    <UserProvider>
        <NavBar/>        
        <h1 className="text-4xl p-2 m-3">MainApp</h1>
        <hr />
        
        <div>
          <Outlet/>
        </div>
    </UserProvider>
  )
}
