// //?Esta es una opción de como se puede poner varios elementos dentro del functional component
// import { Fragment } from "react"

// export const FirstApp = () => {
//   return (
//     <Fragment>
//       <div>Josue Hiram</div>
//       <div>Parent element example</div>
//     </Fragment>

//   )
// }


const getName = () => 'Hello Hiram';

//* If the value won't change, the constant should be outside of the functional component

const name = 'Hello Josue, welcome to your first app';

const newMessage = {
  message: 'Hello World', 
  name : 'Josue Hiram'
}

export const FirstApp = () => {
  return (
    <>
      <h1>{ getName() }</h1>
      {/* <h1>{ name }</h1> */}
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <p>Parent element example</p>
    </>

  )
}
