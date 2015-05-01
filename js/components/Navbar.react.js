var Navbar = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.title}</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav"></ul>
                    </div>
                </div>
            </div>
        );
    }
});

export default Navbar;
