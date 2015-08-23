var React      = require('react'),
    PersonCard = require('./PersonCard.jsx'),
    appDOMNode = document.querySelector('#js-react-app');

React.render(
    <div className="App">
        <PersonCard
            pic="http://graph.facebook.com/100003296350600/picture?type=normal"
            name="Andre Eberhardt"
            bio="Lorem ipsum dolor sit amet" />
        <PersonCard
            pic="http://graph.facebook.com/100002427667690/picture?type=normal"
            name="William Martins"
            bio="Lorem ipsum dolor sit amet" />
    </div>,
    appDOMNode
);
