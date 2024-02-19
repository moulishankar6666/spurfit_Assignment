import "./index.css";

const CardItem = (props) => {
  const { eachItemDetails } = props;
  const { imageLink, description, heading, bgColor } = eachItemDetails;
  return (
    <li className="card-container" style={{ backgroundColor: bgColor }}>
      {imageLink}
      <h1>{heading}</h1>
      <p>{description}</p>
    </li>
  );
};

export default CardItem;
