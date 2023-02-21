import { useState, useEffect, useRef } from "react"

const CardItem = ({image, activate, title}) => {
    const [active, setActive] = useState(activate)
    const refEl = useRef();

    // This code will get all page clicks

    useEffect(() => {
        const handleEvent = (event) => {
            // If we click on other component that is not the current we return and don't do anything
            if(!refEl.current){
                return
            }
            // if is the clicked isn't the current where the code is executed we turn the active false
            if(!refEl.current.contains(event.target)){
                setActive(false);
            }
        };
        // Add a "click" listener that call the "handleEvent"
        document.addEventListener('click', handleEvent);

        // When we close the page we remove the Listener
        return () => {
            document.removeEventListener('click', handleEvent);
        }
    }, []);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div ref={refEl} onClick={handleClick} className={`panel ${active ? "active" : ""}`} style={{backgroundImage: `url(${image})`}}>
                <h3>{title}</h3>
            </div>
    )
};

export default CardItem;