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
                        TODO
                    </Container>
                </div>
                <script src="/js/whiteboard/page.js">
                </script>
            </div>
        )
    }
}

module.exports = Demo
