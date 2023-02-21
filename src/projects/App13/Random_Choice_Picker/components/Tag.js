
const Tag = ({title, highlight}) => {
    return (
        <span className={`tag ${highlight ? 'highlight' : ''}`}>{title}</span>
    );
};

export default Tag;