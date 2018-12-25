// 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// 2. Create a react component
const App = () => {
    return (
        <div>
            <label for="name" class="label">Enter name:</label>
            <input type="text" id="name" />
            <button style="background-color:blue; color: white;" type="submit">Submit</button>
        </div>
    );
};

// 3. Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
