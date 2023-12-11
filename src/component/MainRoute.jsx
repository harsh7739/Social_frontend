import {Routes,Route} from "react-router-dom"
import Signup from "./Signup"
import HomePage from "./HomePage"
import Login from "./Login"
import PostPage from "./PostPage"

function MainRoute(){
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage></HomePage>} ></Route>
            <Route path="/signup" element={<Signup />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/posts" element={<PostPage />} ></Route>
            {/* <Route path="/posts/update/:id" element={}></Route> */}
        </Routes>
        </>
    )
}
export default MainRoute