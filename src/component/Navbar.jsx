import { Link } from "react-router-dom"

function Navbar(){
    return (
        <>
        <Link to={"/signup"} >Signup</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/posts"} >Posts</Link>
        </>
    )
}
export default Navbar