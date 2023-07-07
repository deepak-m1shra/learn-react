// const heading = React.createElement("h1", { id: "heading" }, "Hellooo from React!")
// const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
// reactRoot.render(heading)

import React from 'react'
import ReactDOM from 'react-dom'

const timeOut1 = 1000
const timeOut2 = 3000

const style = {
    color: "green"
}

const parent1 =
    (<>
        <h1 id="jsxParent">This is Parent (React Element in green color)(JSX) </h1>
        <div>
            <h1>Hello I am h1 (JSX)</h1>
            <h5>Hello I am h5 (JSX)</h5>
            <h5>Hello I am another h5 (JSX)</h5>
            <p>Values of timeout1 and timeOut2 are: {timeOut1}, {timeOut2}</p>
        </div>
    </>);

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
}, timeOut1)

const ContentComponent = () => <div>This is ContentComponent</div>

const HeadingComponent = () =>
    <><h1>This is Heading component </h1>
        <h5>Including React element in React Component</h5>
        <div style={style}>{parent1}</div>
        <p>Values of timeout1 and timeOut2 are: {timeOut1}, {timeOut2}</p>
        <ContentComponent />
    </>


setTimeout(() => {

    const root1 = ReactDOM.createRoot(document.getElementById("root"))

    // Rendering Elements
    // root1.render(parent1)

    // Rendering Components
    root1.render(<HeadingComponent />)
}, timeOut2)

