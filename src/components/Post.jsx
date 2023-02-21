import "./Post.css";

const Post = ({ category, title, resume, date, img_url }) => {
  const handleClick = (e) => {
    console.log(resume);
  };

  return (
    <div onClick={handleClick} className="post-content">
      <img src={img_url} alt=""></img>
      <h3>{category}</h3>
      <h4>{title}</h4>
      <p>{resume}</p>
      <div className="date">{date}</div>
    </div>
  );
};

export default Post;
