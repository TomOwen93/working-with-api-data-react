interface NavElementProps {
  title: string;
  handleClick: (title: string) => void;
}

function NavElement({ title, handleClick }: NavElementProps): JSX.Element {
  const handleClicked = () => handleClick(title);

  return (
    <div className="nav-link">
      {" "}
      <button
        onClick={handleClicked}
        style={{ background: "none", color: "white" }}
      >
        {title}
      </button>{" "}
      |{" "}
    </div>
  );
}

export default NavElement;
