import { useState } from "react"

function Signup(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [gender,setGender]= useState("")
    const [password,setPassword] = useState("")

    const handleSignup = async(e)=>{
       e.preventDefault()
       const payload = {name,email,gender,password}
    //    console.log(payload)
    let res = await fetch("https://witty-kerchief-jay.cyclic.app/users/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
        

    })
    res=await res.json()
    console.log(res)
    }
    

    return (
        <>
        <form onSubmit={handleSignup}>
            <input type="text" value={name} placeholder="Enter Name.." onChange={(e)=>setName(e.target.value)}/>
            <input type="email" value={email} placeholder="Enter Email.." onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" value={gender} placeholder="Enter gender.." onChange={(e)=>setGender(e.target.value)}/>
            <input type="password" value={password} placeholder="Enter Password.." onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" value={"Signup"} />
        </form>
        </>
    )
}
export default Signup