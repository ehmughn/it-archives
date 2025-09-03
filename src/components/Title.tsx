import "../css/Title.css";

interface Props {
  text: string;
}

function Title({ text }: Props) {
  return <h1 className="title-heading">{text}</h1>;
}

export default Title;
