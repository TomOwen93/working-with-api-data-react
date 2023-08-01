import PageTitle from "./PageTitle";
import NavElement from "./NavElement";


interface PageHeaderProps {
  handleClick: (title: string) => void;
}

function PageHeader({ handleClick }: PageHeaderProps): JSX.Element {
  return (
    <>
    <div className="full-header">
      <PageTitle />
      <div className="nav-list">
        <NavElement title={"Home"} handleClick={handleClick} />
        <NavElement title={"Contact"} handleClick={handleClick} />
        <NavElement title={"FAQs"} handleClick={handleClick} />
        <NavElement title={"Login"} handleClick={handleClick} />{" "}
        </div>
        </div>
      
      <span>
        <hr />
      </span>
    </>
  );
}
export default PageHeader;
