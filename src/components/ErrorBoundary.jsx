import React, {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops thats not good</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
