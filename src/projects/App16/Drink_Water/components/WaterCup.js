
const WaterCup = (props) => {

    const handleClick = (e) => {
        let id = props.id
        if(e.target.className.includes('full')){
            --id;
        }
        props.handleHighlight(id)
    }

    return (
        <div onClick={handleClick} className={`cup ${props.small ? 'cup-small' : ''} ${props.highlight ? 'full' : ''}`}>
            {props.children}
        </div>
    )
}

export default WaterCup;