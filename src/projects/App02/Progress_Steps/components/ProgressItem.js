
const ProgreeItem = ({number, activate}) => {
    return (
        <div className={`circle ${activate ? 'active' : ''}`}>{number}</div>
    )
}

export default ProgreeItem;