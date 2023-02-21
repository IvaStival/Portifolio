import FAQItem from "./FAQItem";

const FAQList = ({configs}) => {
    const renderedList = configs.map((item, id) => {
        return <FAQItem key={id} title={item.title} text={item.text} active={item.active}/>
    })

    return (
        <>
            {renderedList}
        </>
    );
};

export default FAQList;