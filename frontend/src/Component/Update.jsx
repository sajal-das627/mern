import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Update=()=>{
      const[name, setName] =useState()
      const navigate = useNavigate()
      const {id} = useParams()
      const singleUser=async()=>{
        let response = await fetch(`http://localhost:9000/${id}`,{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        })
        let result = await response.json()
        console.log(result)
        setName(result.name)

      }

      const handleUpdate=async(e)=>{
        e.preventDefault()
        const updateName = {name}
        let response = await fetch(`http://localhost:9000/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateName)
        })
        if(response){
            navigate("/read")
        }

      }

      useEffect(()=>{
        singleUser()
      },[])

    return(
        <>
        <h1>Edit the data</h1>
        <form onSubmit={handleUpdate}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button>Update</button>
        </form>

        </>
    )
}

export default Update