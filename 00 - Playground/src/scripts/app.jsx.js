var React      = require('react'),
    appDOMNode = document.querySelector('#js-react-app');

var TechTalks = React.createClass({
    render: function() {
        return <div>Olá Pessoal</div>;
    }
});

React.render(
    <div className="App">
        <TechTalks />
    </div>,
    appDOMNode
);
