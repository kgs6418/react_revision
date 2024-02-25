import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    let[data,setData]=useState({})
        useEffect(()=>{
            fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
            .then((responseData)=>responseData.json())
            .then((responseData)=>setData(responseData[currency]))
            // console.log(data)

        },[currency])
    // console.log(data)
    return data

}
export default useCurrencyInfo