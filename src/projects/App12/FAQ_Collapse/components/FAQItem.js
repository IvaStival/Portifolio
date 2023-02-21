import { useState } from 'react';

const FAQItem = ({title, text, active}) => {
    const [ activate, setActivate ] = useState(active)

    const handleToggleClick = (event) => {
        setActivate(!activate);
    }

    return (
        <div className={`faq ${activate ? 'active' : ''}`}>
            <h3 className="faq-title">
                {title}
            </h3>
            <p className="faq-text">
                {text}
            </p>

            <button onClick={handleToggleClick} className="faq-toggle">
                <i className="fas fa-chevron-down"></i>
                <i className="fas fa-times"></i>
            </button>
        </div>
    );
};

export default FAQItem;