// 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return "Click on me!";
}

// 2. Create a react component
const App = () => {

    const labelName = {text: "Enter name:"}

    return (
        <div>
            <label htmlFor="name" className="label">
                {labelName.text}
            </label>
            <input type="text" id="name" />
            <button style={{backgroundColor:'blue',color: 'white'}} type="submit">
                {getButtonText()}
            </button>
        </div>
    );
};

// 3. Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
