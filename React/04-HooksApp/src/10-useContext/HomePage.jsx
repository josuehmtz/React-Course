import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

  const {user} = useContext(UserContext)

  return (
    <>
        <h1 className="text-2xl p-2 m-3">HomePage {user?.name}</h1>
        <hr />
        <pre className="p-2 m-3">
          {JSON.stringify(user, null, 3)}
        </pre>
    </>
  )
}
