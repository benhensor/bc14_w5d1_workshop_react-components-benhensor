// This is the Button component
// It takes in PROPERTIES and exports it as the default export of the file
// It returns the JSX that you want to render to the page (in this case, a button)
// import the css file
import "./Button.css";

// create a button component that takes in PROPERTIES and exports it as the default export of the file
export default function Button(props) {

  // destructure the properties that are passed in to the component and assign them to variables
  const { someText, onClick } = props;
  return (
    // return the JSX that you want to render to the page (in this case, a button)
    <button className="Button" onClick={onClick}>
      {someText}
    </button>
  );
}