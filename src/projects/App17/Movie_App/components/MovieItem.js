const MovieItem = ({title, poster_path, vote_average, overview}) => {
    const img_path = 'https://image.tmdb.org/t/p/w1280'

    const getClassByRate = (vote) => {
        if(vote >= 8){
            return 'green';
        } else if(vote >= 5){
            return 'orange';
        } else {
            return 'red';
        }
    }

    return (
        <div className="movie">
            <img src={`${img_path + poster_path}`} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={getClassByRate(vote_average)}>{vote_average}</span>
            </div>
            <div className="overview">
                <h3>Overview</h3>
                {overview}
            </div>
        </div>
    );
};

export default MovieItem;