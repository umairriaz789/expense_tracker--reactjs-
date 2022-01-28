import React,{useState} from "react"
import Balance from "./components/Balance";
import Header from "./components/Header"
import History from "./components/History"
import Transection from "./components/Transection";


function App() {
  const [Addtransection,setAddtransection]=useState("")
  const [amount, setamount]=useState("")
  const [list, setList]=useState([])
  const [income,setincome]=useState(1000)
  const [expense,setexpense]=useState(0)
  return (
    <div className=" m-5 p-5 xl:max-w-2xl  xl:mx-auto bg-gray-100 rounded shadow" >
      <Header/>
      <Balance amount={amount} setamount={setamount} income={income} setincome={setincome} expense={expense} setexpense={setexpense} list={list} setList={setList}/>
      <History/>
      <Transection Addtransection={Addtransection} setAddtransection={setAddtransection}
       amount={amount} setamount={setamount} list={list} setList={setList} />

    </div>
  );
}

export default App;
