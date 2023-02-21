import CardItem from "./CardItem";

const CardList = ({data}) => {
    const renderedCars = data.map((image) => {
       return <CardItem key={image.title} image={image.url} activate={image.act} title={image.title}/>;
    })

    return (
        <div className="container">
            {renderedCars}
        </div>
    )
}

export default CardList;