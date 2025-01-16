import { useState } from "react"
import {useNavigate} from "react-router-dom"

const Create=()=>{
    const[name, setName] = useState()
    const navigate = useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const userName = {name}
        const response = await fetch("http://localhost:9000/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userName)
        }) 

        if(response){
            navigate("/read")

        }
    }
    return(
        <>
        <h1>Fill the form</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button>Add</button>
        </form>

        </>
    )
}

export default Create