import {useState, useRef} from 'react'

import './index.css'

const HiddenSearchPage = () => {
    const [active, setActive] = useState(false)
    const inputRef = useRef(null);

    const HandleClick = () => {
        setActive(!active);
        inputRef.current.focus()
    }

    return (
        <div className={`search ${active ? "active" : ''}`}>
            <input 
                ref={inputRef}
                type='text' 
                className="input"
                placeholder="Search..."/>
            <button onClick={HandleClick} className="btn">
                <i className="fas fa-search"></i>
            </button>
            
        </div>
    );
};

export default HiddenSearchPage;