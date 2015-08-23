var React      = require('react'),
    TicTacToe  = require('./TicTacToe.jsx'),
    appDOMNode = document.querySelector('#js-react-app');

React.render(<TicTacToe />, appDOMNode);
