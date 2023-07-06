// const heading = React.createElement("h1", { id: "heading" }, "Hellooo from React!")
// const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
// reactRoot.render(heading)

import React from 'react'
import ReactDOM from 'react-dom'


setTimeout(() => {
    const parent = React.createElement("div", {
        id: "parent"
    },
        React.createElement("div", {},
            [React.createElement("h1", { id: "h1_1" }, "Hello I am h1"),
            React.createElement("h5", { id: "h5_1" }, "Hello I am h5"),
            React.createElement("h5", { id: "h5_2" }, "Hello I am another h552231")])
    )

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)
}, 4000)

