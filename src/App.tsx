import React from 'react';
import './App.css';

function App() {

    const names = ["Dimych", "Sveta", "Katay", "Viktor", "Ignat"]

    const users = [{name: "Dimych"}, {name: "Sveta"}, {name: "Katay"}, {name: "Viktor"}, {name: "Ignat"}]

    const liElements = users.map((u, index) => <li key={index}>{index} - {u.name}</li>)

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
