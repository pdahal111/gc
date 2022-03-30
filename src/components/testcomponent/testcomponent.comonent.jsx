import { Outlet } from "react-router-dom";

const Test =()=>{
    return (
        <div>
            <h2>Iam from the test component</h2>
            <Outlet></Outlet>
        </div>
    ); 
}
export default Test; 