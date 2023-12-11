import { useState } from "react"

function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = async(e)=>{
       e.preventDefault()
       const payload = {email,password}
    //    console.log(payload)
    let res = await fetch("https://witty-kerchief-jay.cyclic.app/users/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
        

    })
    res=await res.json()
    console.log(res)
    localStorage.setItem("token",res.token)
    alert(res.msg)
    }
    

    return (
        <>
        <form onSubmit={handleLogin}>
            
            <input type="email" value={email} placeholder="Enter Email.." onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="Enter Password.." onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" value={"Login"} />
        </form>
        </>
    )
}
export default Login