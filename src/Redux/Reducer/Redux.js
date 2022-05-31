import React , {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"

export default function Redux() {

    const Dispatch = useDispatch();
    const Selector = useSelector(state => state);
    const [Change, SetChange] = useState("");
  
  
    const GetBen = () => {
      Dispatch({ type: "Ben", payload: "Hello Ben" })
      console.log("Get Ben", Selector)
    }
    const GetNimrod = () => {
      Dispatch({ type: "Nimrod", payload: "Hello Nimrod" })
      console.log("AGEt Nimrod", Selector)
    }
  
  
    return (
        <div>
            {Selector}
            {console.log("Classname", Selector)}
            <button onClick={GetNimrod}>Change to Nimrod</button>
            <button onClick={GetBen}>Change to Ben</button>
        </div>
    )
}