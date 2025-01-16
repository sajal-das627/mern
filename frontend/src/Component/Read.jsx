import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Read=()=>{
    const[data, setData] = useState([])
    const getData=async()=>{
        let response = await fetch("http://localhost:9000/",{
            method: "GET", 
            headers:{
                "Content-Type": "application/json"

            }
    
        })
        let result = await response.json()
        setData(result)
       


    }
    const handleDelete=async(id)=>{
        const response = await fetch(`http://localhost:9000/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
            
            
        })
        let result = response.json()
        if(result){
            getData()
        }

    }

    useEffect(()=>{
        getData()
    }, [])
    return(
        <>
        <h1>All User Data</h1>
            {
               
                data?.map((ele, i)=>(
                    <div>
                    <p key={ele._id}>{ele.name}</p>
                    <Link to={`/${ele._id}`} > Edit </Link> <br></br>
                    <a href="#" onClick={()=> handleDelete(ele._id)}>Delete</a>
                    </div>
                ))
                
                
            }
        
        </>
    )

}

export default Read