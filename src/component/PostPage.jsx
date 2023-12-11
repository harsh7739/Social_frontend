import { useEffect, useState } from "react"

function PostPage(){
    const [data,setData] = useState([])
    async function fetchFun(){
        let res= await fetch("https://witty-kerchief-jay.cyclic.app/posts",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        res = await res.json()
        setData(res)
        console.log(res)

    }

    useEffect(()=>{
fetchFun()
    },[])


   async function handleDelete(id){
 let res= await fetch(`https://witty-kerchief-jay.cyclic.app/posts/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        res = await res.json()
       alert(res.msg)
       fetchFun()
        console.log(res)
    }

    return (
        <>
            <h1>Counter:{data.length}</h1>
        {
            data?.map((item)=>(
                <div>
                    <h2>{item.title}</h2>
                    <h3>{item.body}</h3>
                    <h3>{item.device}</h3>
                    
                    <button>Edit</button>
                    <button onSubmit={()=>handleDelete(item._id)} >Delete</button>
                </div>
            ))
        }
        </>
    )
}
export default PostPage