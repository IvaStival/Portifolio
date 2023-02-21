const MiddlePage = ({title, link, className, handleMouseEnter, handleMouseLeave}) => {
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={className}>
            <h1>{title}</h1>
            <a href={link} className='btn'>Buw Now</a>
        </div>
    );
};

export default MiddlePage;