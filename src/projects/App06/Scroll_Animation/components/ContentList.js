import Content from "./Content";

const ContentList = ({trigger, scroll, contents}) => {
    const renderedContents = contents.map((content, id) => {
        return (<Content key={id} trigger={trigger} scroll={scroll} name={content}/>)
    });

    return (
        <div>
            {renderedContents}
        </div>
        
    );
};

export default ContentList;