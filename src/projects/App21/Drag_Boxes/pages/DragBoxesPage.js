import "./index.css";

const DragBoxesPage = () => {
  const NSQUARES = 4;
  let fill = "";

  // We save the fill image html to be used by the current dropped empty box
  const dragStart = (e) => {
    fill = e.target;
    e.target.className += " hold";
    setTimeout(() => (e.target.className = "invisible"), 0);
  };

  const dragEnd = (e) => {
    e.target.className = "fill";
  };

  // we need to preventDefault, if not the drop doesn't works
  const dragOver = (e) => {
    e.preventDefault();
  };
  // we need to preventDefault, if not the drop doesn't works
  const dragEnter = (e) => {
    e.preventDefault();
    e.target.className += " hovered";
  };

  const dragLeave = (e) => {
    e.target.className = "empty";
  };

  const dragDrop = (e) => {
    e.target.className = "empty";
    e.target.appendChild(fill);
  };

  // crete all the empty boxes
  const squares = [];
  for (let i = 0; i < NSQUARES; ++i) {
    squares.push(
      <div
        key={i}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
        className="empty"
      ></div>
    );
  }

  return (
    <div className="content">
      {/* Create the first empty box but with the fill element inside */}
      <div
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
        className="empty"
      >
        <div
          onDragStart={(e) => dragStart(e)}
          onDragEnd={dragEnd}
          className="fill"
          draggable={true}
        ></div>
      </div>
      {squares}
    </div>
  );
};

export default DragBoxesPage;
