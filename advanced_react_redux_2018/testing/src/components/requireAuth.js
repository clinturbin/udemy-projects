import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        // Our component just got rendered
        componentDidMount() {
            this.shoudlNavigateAway();
        }

        // Our component just got updated
        componentDidUpdate() {
            this.shoudlNavigateAway();
        }

        shoudlNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth};
    };

    return connect(mapStateToProps)(ComposedComponent);
};