// import title component
import Title from "../Title";

// import button component
import Button from "../Button";

// create a card component that takes in PROPERTIES and exports it as the default export of the file
export default function Card(props) {

  // destructure the properties that are passed in to the component and assign them to variables
  const {title, description, imgURL, buttonText, onClick, someText} = props;
  return (
    // return the JSX that you want to render to the page (in this case, a div with a h3, p, img and button)
  <div className="Card">
    <Title />
    <h3>{title}</h3>
    <p>{description}</p>
    <img alt="soc" width={"100%"} src={imgURL}/>
    {/* pass in the properties that you want to use in the button component */}
    <Button
    buttonText={buttonText}
    onClick={onClick}
    someText={someText}
  />
  </div>
   );
}