'use strict';

var React = require('react');

module.exports = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        pic: React.PropTypes.string.isRequired,
        bio: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div className="PersonCard">
                <img className="PersonCard-Pic" src={this.props.pic} />
                <div>
                    <h1>{this.props.name}</h1>
                    {this.props.bio}
                </div>
            </div>
        );
    }
});
