import ProgreeItem from "./ProgressItem";

const ProgressList = ({size, current}) => {

    // create the circle based on the size
    const circle_list = [];
    for(var i=0; i < size; ++i){
        // Check if i is less than current, if yes we activate it
        if(i <= current){
            circle_list.push(<ProgreeItem key={i} number={i+1} activate={true} />)
        }else{
            circle_list.push(<ProgreeItem key={i} number={i+1} />)
        }
    }
    
    return (
        <div className="progress-container">
            <div className="progress" id="progress"></div>
            {circle_list}
        </div>
    )
}

export default ProgressList;