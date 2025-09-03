import "../../css/Definition.css";

interface Props {
  title: string;
  meaning: string;
}

function Definition({ title, meaning }: Props) {
  return (
    <div className="definition-card">
      <h1 className="definition-h1">{title}</h1>
      <p className="definition-p">{meaning}</p>
    </div>
  );
}

export default Definition;
