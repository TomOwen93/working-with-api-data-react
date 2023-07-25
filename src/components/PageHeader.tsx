import PageTitle from "./PageTitle";
import NavElement from "./NavElement";

function PageHeader(): JSX.Element {
  return (
    <>
      <PageTitle />
      <div className="nav-list">
        <NavElement title={"Home"} />
        <NavElement title={"Contact"} />
        <NavElement title={"FAQs"} />
        <NavElement title={"Login"} />{" "}
      </div>
      <span><hr /></span>
    </>
  );
}
export default PageHeader;
