import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class ContentFeed extends React.Component {
    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch('http://127.0.0.1:8000/api/item/')
            .then(results => results.json())
            .then(results => console.log(results))
    }

    render() {
        return null
    }
}

ReactDOM.render(
    <ContentFeed/>,
    document.getElementById('root')
);
registerServiceWorker();
