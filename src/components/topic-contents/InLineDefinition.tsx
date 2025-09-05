import "../../css/InLineDefinition.css";

interface Props {
  title: string;
  meaning: string;
}

function InLineDefinition({ title, meaning }: Props) {
  return (
    <div className="inline-definition-text">
      <p className="inline-definition-p" role="definition">
        <span className="inline-definition-title">{title}</span>
        <span className="inline-definition-separator"> — </span>
        <span className="inline-definition-meaning">{meaning}</span>
      </p>
    </div>
  );
}

export default InLineDefinition;
