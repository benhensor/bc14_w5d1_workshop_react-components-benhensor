# React Component Workshop

## Task 1 - Building Blocks of React

##### We'll use our knowledge of React to start building a clone of a Blog UI.

**1.1:**

👉 This repo has the React app already created within it. You just need to install the Node modules with `npm i` in your terminal. Spend a few minutes looking around the file structure and familiarizing yourself with how the app works.

**1.2:**

👉 There is already a component tree diagram in the assets folder; [take a look](./assets/Blog-Component-Tree.png) and see the structure of the application. Use this component tree as your guide as you create your app!
<br/>

If you get stuck during this workshop, you can always refer back to the React docs, such as the [Describing the UI section](https://react.dev/learn/describing-the-ui), to explore the concepts we've learned today in more detail with plenty of examples! There's also a wealth of articles and videos on React out there, and you can always ask ChatGPT to explain concepts and answer questions as well.

---

<br>
<br>

## Task 2 - Creating Components

You'll see that the Card component is called within App, but it isn't defined yet. You'll need to build it.

👉 Build a re-useable component:

- Create a new folder inside of the components folder and call it `Card`.
- Inside the `Card` folder Create a new file called index.js.
- Inside index.js, create a functional component that returns a JSX element for your card.
- Add a className `className="card"` to the JSX as there is a className allready applied to it in App.css (you can customize the CSS if you have time!).

👉 Navigate back to [App.js](./src/App.js). This is the root component of our application.

- Import and call the `Card` component inside the app component.
- Call the Card component multiple times to get multiple cards displaying.
- Run and save the code and check that the cards are displaying on the screen

---

<br>
<br>

## Task 3 - Nested Components

👉 Create a button component and nest it inside of the Card component

- Create a new folder inside of the components folder and call it `Button`.
- Inside the `Button` folder, create a new file called index.js.
- inside index.js create a functional component that returns a JSX button with the text `See more` inside.
- Import and add the Button component to your card component.
- Add a className `className="Button"` to the button. This time, create a Button.css file inside of your Button folder.
- Import the Button.css into the index.js Button component
- when you want to add Styles to a file simply import the css file like so at the top of the file:
  `import "./Card.css";`
- Add some styling to your button using the CSS file.

---

<br>
<br>

## Task 4 - Using Props

👉 Now that we know we can change the data we put into our components with props, go back to the Card component and add more elements to the JSX. Remember, React can only render one parent element from a component, so all JSX elements in your component must have a common parent. Add the elements listed below as elements in the Card component.

And if you need reminding of how to use props, you can use docs pages and articles like [this](https://www.w3schools.com/react/react_props.asp).

- A title :

  `<h3> props goes here </h3>`

- text description :

  `<p> props goes here </p>`

- An Image :

  `<img alt="soc" width={"100%"} src={ url props goes here } />`

---

Make sure that you're handing in the right information via props for each element! Here are some handy URLs that you can use:

- SoC logo: `"https://i.ytimg.com/vi/hHwblpw3grg/maxresdefault.jpg"`
- SoC images:
  - `"https://pbs.twimg.com/media/FI5tl66XwAI7vYW.jpg"`
  - `"https://www.birminghamupdates.com/wp-content/uploads/2020/07/IMG_7540-scaled-e1594894273443.jpg"`

## Task 5 - Prop drilling - passing props down the tree

👉 Now we are going to learn about how to pass information further down the component tree. We know we can pass props down from app.js to the Card component, but we can also pass it down further into the button component inside the Card component. For example:

`let buttonText="more"`

- App.js
  `someText={buttonText}`
  - Card.js
    `someText={props.buttonText}`
    - Button.js
      `someText={props.buttonText}`

For your next task, change the button component so that it takes in text from app.js.

---

<br>
<br>

---

## Bonus-1 - Inline Styling⭐ :

We can do inline styling with the style prop in React, and we can also use props passed down to affect this styling.

```js
function Heading(props) {
  return <h1 style={{ color: props.color }}>some text</h1>;
}
```

Try to change the color of any text or button with props.
For more details on inline styling in React, [click here](https://www.w3schools.com/react/react_css.asp).

## Bonus-2 - Styling and practice ⭐ :

Keep practicing your newfound skills creating additional components, passing more props, and styling your components. Get creative!
