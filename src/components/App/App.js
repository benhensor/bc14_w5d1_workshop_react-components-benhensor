// This is the main component of the app
// It imports the Card component and renders it to the page
// It also imports the css file
// import the card component
import Card from "../Card";
// import the css file
import "./App.css";

// create a function called App that returns the JSX that you want to render to the page
function App() {

  // create a variable called buttonText and assign it the value of "See more"
  const buttonText = "See more";
  return (
    // return the JSX that you want to render to the page (in this case, a div with a Card component)
    <div className="App">
      {/* pass in the properties that you want to use in the card component */}
      <Card
        title="School of Code"
        description="Not just a place but a state of mind!"
        imgURL="https://i.ytimg.com/vi/hHwblpw3grg/maxresdefault.jpg"
        buttonText={buttonText}
      />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

// export the App component as the default export of the file
export default App;
