

import { memo } from "react";
function First({value,functions}){

    console.log("The app is render")
    return(
        <>
        <p>{value}</p>
        <button onClick={()=>functions()}>Start</button>
        </>
    )
}
export default memo(First);