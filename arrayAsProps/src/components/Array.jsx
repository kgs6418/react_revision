import React from "react";
function Array(props){
    // console.log(props)
    let newNamesArray=props.names
    // console.log(newNamesArray)
    let hold=newNamesArray.map(listArr)
    function listArr(e,index){
         // always remember ==> Every array element should have a property called "key" ie. a unique identifier.
        return <li key={index}>{e}</li> 
    }
    console.log(hold)


    return(
        <>
        <ul>Names of Students are:-{hold}
        </ul>

        </>
    )
}
export default Array