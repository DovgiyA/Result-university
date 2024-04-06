import {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(props){
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivesStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Упс, что-то пошло не так!</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;