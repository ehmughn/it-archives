import InLineDefinition from "./InLineDefinition";
import "../../css/List.css";

interface SubList {
  title: string;
  content: string;
  type: string;
}

interface Props {
  title: string;
  content: SubList[];
}

function List({ title, content }: Props) {
  const renderContent = (item: SubList) => {
    if (item.type === "InLineDefinition") {
      return (
        <li className="list-li1" key={item.title}>
          <InLineDefinition title={item.title} meaning={item.content} />
        </li>
      );
    }
    return (
      <li className="list-li2" key={item.title}>
        <strong>{item.title}</strong>
      </li>
    );
  };

  return (
    <div className="list-card" role="list">
      <h2 className="list-h1">{title}</h2>
      <ol className="list-ol">{content.map((item) => renderContent(item))}</ol>
    </div>
  );
}

export default List;
