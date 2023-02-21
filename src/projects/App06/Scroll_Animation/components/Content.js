import { useState, useRef, useEffect } from "react";

const Content = ({trigger, scroll, name}) => {
    const [pos, setPos] = useState(trigger);
    const boxRef = useRef();

    useEffect(() => {
        getPosition(boxRef);
    }, [scroll])

    const getPosition = (box) => {
        setPos(box.current.getBoundingClientRect().top)
    }

    return(
        <div ref={boxRef} className={`box ${pos < trigger ? "show" : ''}`}><h2>{name}</h2></div>
    );
};

export default Content;