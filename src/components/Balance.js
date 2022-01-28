
import React, { useEffect } from "react"
export default function Balance({expense,setexpense,income, setincome, list}){

  // ADD Income 
  useEffect(() => {
    let sum=1000
    for (let i=0; i< list.length; i++){
      if (list[i].amount>0){
        sum += isNaN(list[i].amount) ? 0 : parseInt(list[i].amount)
        setincome(sum) 
      }

    }
  })
  // ADD Expense 
  useEffect(() => {
    let sum=0
    for (let i=0; i< list.length; i++){
      if (list[i].amount<0){
        sum += isNaN(list[i].amount) ? 0 : parseInt(list[i].amount)
        setexpense(sum) 
      }

    }
  })


    return(
        <>
       <div className="text-center font-bold">
         <h2 className="mt-5"> Your Balance <br/> {income + expense} </h2>
         <div className="flex justify-center bg-white mt-2">
         <h2 className="">INCOME <br/> {income}</h2>

         <h2 className="ml-10">EXPENSE <br/> {expense}</h2>
         </div>
       </div>
        </>
    )
}