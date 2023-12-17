import "./Loader.scss";

const Loader = ({ counter }) => {
  return (
    <div className="loading">
      <div className="loading__content">loading...</div>
      <div className="loading__percentage">{counter}%</div>
    </div>
  );
};

export default Loader;
