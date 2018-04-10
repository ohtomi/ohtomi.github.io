const React = require('react')

const CompLibrary = require('../core/CompLibrary.js')
const Container = CompLibrary.Container

class Demo extends React.Component {
    render() {
        return (
            <div>
                <div className="mainContainer">
                    <Container id="example">
                        <h2>react-whiteboard example</h2>
                        <div>
                            <div id="root"></div>
                            <label>
                                width:
                                <select id="width">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </label>
                            &nbsp;|&nbsp;
                            <label>
                                color:
                                <select id="color">
                                    <option value="black" selected>black</option>
                                    <option value="red">red</option>
                                    <option value="green">green</option>
                                    <option value="blue">blue</option>
                                </select>
                            </label>
                            &nbsp;|&nbsp;
                            <label>
                                image:
                                <input type="text" id="image" />
                                <button id="paste">paste</button>
                            </label>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    To draw a line, click the `whiteboard` and move the mouse cursor in the `whiteboard`.
                                </li>
                                <li>
                                    To change line width and line color, select choices.
                                </li>
                                <li>
                                    To paste an image on the `whiteboard`, type an URL of the image in the text box and press the paste button.
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>
                <script src="/js/whiteboard/page.js">
                </script>
            </div>
        )
    }
}

module.exports = Demo
