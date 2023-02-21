import { useEffect, useState } from "react";
import './index.css';

import ProgressList from "../components/ProgressList";

const ProgressPage = ({size}) => {
    const [position, setPosition] = useState(0);
    const [my_size] = useState(size)

    // This useEffect will update the CSS --progress-width with the new size based on the current circle position
    useEffect(() => {
        const width = (position) / (my_size-1) * 100 + '%'
        document.documentElement.style.setProperty('--progress-width', width)
    },[position, my_size]);

    // HANDLES
    // Sum 1 to the current positon 
    const handleNextClick = () => {
        // if the postion is bigger or equal to size-1 we put size-1
        if(position >= size-1){
            setPosition(size-1)
        }
        else{
            setPosition(position+1);
        }
    }
    // Subtractic 1 to the current positon 
    const handlePrevClick = () => {
        // if less than 1 we put 0
        if(position < 1){
            setPosition(0)
        }
        else{
            setPosition(position-1)
        }
    }

    return (
        <div className="container">
            {/* Populate the circles */}
            <ProgressList size={size} current={position}/>
            <div>
                <button onClick={handlePrevClick} className="btn" id="prev" disabled={position ? false : true}>Prev</button>
                <button onClick={handleNextClick} className="btn" id="next" disabled={position >= size-1 ? true : false}>Next</button>
            </div>
        </div>
    )
}

export default ProgressPage;