import "./MainPost.css";

const MainPost = ({ category, title, img_url, resume, date }) => {
  return (
    <div className="main-post-container">
      <div className="content">
        <img src={img_url} alt=""></img>
        <h1>{category}</h1>
        <div className="text-content">
          <h2>{title}</h2>
          <p className="text">{resume}</p>
          <a href="/post">Read Post ...</a>
          <div className="date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
