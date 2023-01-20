import { useDispatch ,useSelector } from "react-redux";
import { increment, incrementByValue } from "../features/showSlice";


const SubChild1 = (props) => {

    const dispatch = useDispatch();

    const data = useSelector((c) => {
        return c.show.value;

    });


    
    return (
        <div>
            <h1>SubChild1 - {data}</h1>
            <button onClick={()=>dispatch(increment())}>Click Me</button>
            <button onClick={()=>dispatch(incrementByValue(10))}>Clicked</button>
        </div>
    );
};




export default SubChild1;