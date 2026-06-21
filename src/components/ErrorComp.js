import { useRouteError } from "react-router-dom";

const ErrorComp = () =>{
  const err = useRouteError()
  console.log(err)

    return (
        <>
        <h1>OOOPS SOEMTHING WENT WRONG</h1>
        <p>{err.status}{err.statusText}</p>
        </>
    )
}

export default ErrorComp;