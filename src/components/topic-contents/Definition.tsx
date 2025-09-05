import "../../css/Definition.css";

interface Props {
  title: string;
  meaning: string;
}

function Definition({ title, meaning }: Props) {
  return (
    <div
      className="definition-card"
      role="region"
      aria-labelledby={`definition-${title}`}
    >
      <h2 className="definition-h1" id={`definition-${title}`}>
        {title}
      </h2>
      <p className="definition-p">{meaning}</p>
    </div>
  );
}

export default Definition;
