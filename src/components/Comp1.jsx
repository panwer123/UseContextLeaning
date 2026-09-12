import { useContext } from "react";
import { userContext } from "../utils/userContext";


const Comp1 = ()=>{
const userdata = useContext(userContext);

    return(
        <div>
         <h1>Comp1</h1>
         {userdata.map((item)=>(
            <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.phone}</p>
                <p>{item.address}</p>
            </div>
         ))}
        </div>
        
    )
}

export default Comp1;