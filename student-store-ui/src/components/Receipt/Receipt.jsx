import React from 'react'
import "./Receipt.css"

function Receipt(props) {

    function closeReceipt (){
        props.setReceipt(false)
    }

  return (
    <div>
        <h1 className={props.receipt ? "receipt" : "hidden1"} >Successful Receipt</h1>
        <button className={props.receipt ? "receipt" : "hidden1"} onClick={closeReceipt}>Exit Receipt</button>
    </div>
  )
}

export default Receipt