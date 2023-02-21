import "./index.css";
const FormWavePage = () => {
  const renderLabel = (label) => {
    return label
      .split("")
      .map((letter, id) => (
        <span style={{ transitionDelay: id * 50 + "ms" }}>{letter}</span>
      ));
  };

  console.log(renderLabel("email"));

  return (
    <div className="container">
      <h1>Please Login</h1>
      <form>
        <div className="form-control">
          <input type="text" required />
          <label>{renderLabel("Email")}</label>
        </div>
        <div className="form-control">
          <input type="password" required />
          <label>{renderLabel("Password")}</label>
        </div>
        <button className="btn">Login</button>
        <p className="text">
          Don't have an account? <a href="http://google.com">Register</a>
        </p>
      </form>
    </div>
  );
};

export default FormWavePage;
