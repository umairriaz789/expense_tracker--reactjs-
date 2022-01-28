import React from "react"
import {v4 as uuidv4} from "uuid"
import { AiFillDelete } from "react-icons/ai";

export default function Transection({Addtransection,setAddtransection, amount, setamount, list, setList}){
    
  
  const handleSubmit = (e) =>{
        e.preventDefault()
        if( ! Addtransection || !amount){
          alert("Please Fill the All")
    
        }else{
        const newItems={
          id: uuidv4(),
          Addtransection,
          amount
        }
        setAddtransection("")
        setamount("")
        setList ([...list, newItems])
      }
    }





    const deleteRow =(id) =>  setList(list.filter((row) => row.id !==id))
    
    return(
      <>
        <form onSubmit={handleSubmit}>
         <div className="text-center">
         <table width="100%" className="mb-10">
          {list.map(({id, Addtransection,amount}) => (
            <React.Fragment key={id}>
          <tbody>
            <tr>
              <td>{Addtransection}</td>
              <td>{amount}</td>
              <td><button onClick = {()=> deleteRow(id)}><AiFillDelete className="text-red-500"/></button></td>
            </tr>
          </tbody>
            </React.Fragment>
          ))}
          </table>
         <hr/>
         <h2 className="font-bold"> ADD NEW TRANSECTION </h2>
         <hr/>
         <div className="font-bold">
         <label htmlFor="name">Expense Category</label>
         </div>
         <br/>
        <input type="text" name="text" id="Salary" placeholder="Salary" autoComplete="off"
        value={Addtransection}
        onChange={(e)=> setAddtransection(e.target.value)}
       />
       <br/>
       <div className="font-bold">
       <label htmlFor="amount">Amount</label>
       </div>
       <p>(Negative - Expense , Postitve - Income)</p>
         <br/>
        <input type="number" name="text" id="amount" placeholder="Amount" autoComplete="off"
        value={amount}
        onChange={(e)=> setamount(e.target.value)}
       />
       <br/>
         {/*
         <input type="text" name="text" id="salary" placeholder="Salary" autoComplete="off"/>
         <h3>Amount</h3>
         <p>(Negative - Expense , Postitve - Income)</p>
         <input type="number" name="number" id="amount" placeholder="Amount" autoComplete="off"/>
         */}
  
       </div>
       <div className="text-center">
       <button type="submit" className="mb-3 mt-3 bg-gray-500 text-white 
        font-bold py-2 px-3 rounded shadow border-2 border-gray-500 hover:bg-transparent
        hover:text-gray-500 transition-all duration-300 ">Add Transection</button>
        </div>
        </form>
      </>  
    )
}