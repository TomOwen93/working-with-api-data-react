interface NavElementProps {
  title: string;
}

function NavElement({ title }: NavElementProps): JSX.Element {
  return (
    <div>
      <p>
        {" "}
        <a href="#">{title}</a> |{" "}
      </p>
    </div>
  );
}

export default NavElement;
