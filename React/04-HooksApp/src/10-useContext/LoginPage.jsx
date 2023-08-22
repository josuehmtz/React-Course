import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const {user, setUser} = useContext( UserContext );

  return (
    <>
        <h1 className="text-2xl p-2 m-3">Login</h1>
        <hr />
        <pre className="p-2 m-3">
          {JSON.stringify(user, null, 3)}
        </pre>
        <button className="rounded-md text-white p-2 m-3 bg-gray-900" onClick={() => setUser({id:2708, name:'JosuE Hiram', email:'jhiram.alvz@gmail.com'})}>Establecer usuario</button>
    </>
  )
}
