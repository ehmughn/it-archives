import InLineDefinition from "./InLineDefinition";
import "../../css/List.css";

interface Props {
  title: string;
  content: Content[];
}

export interface Content {
  title: string;
  content: string;
  type: string;
}

function List(props: Props) {
  const renderContent = (item: Content) => {
    if (item.type === "inline") {
      return (
        <li className="list-li1" key={item.title}>
          <InLineDefinition title={item.title} meaning={item.content} />
        </li>
      );
    } else {
      return (
        <li className="list-li2" key={item.title}>
          <strong>{item.title}</strong>
        </li>
      );
    }
  };

  return (
    <div className="list-card">
      <h1 className="list-h1">{props.title}</h1>
      <ol className="list-ol">
        {props.content.map((item) => renderContent(item))}
      </ol>
    </div>
  );
}

export default List;
