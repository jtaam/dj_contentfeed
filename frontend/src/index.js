import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import {
    Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap'

class ContentFeed extends React.Component {
    constructor() {
        super();
        this.state = {
            'items': [],
        }
    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch('http://127.0.0.1:8000/api/item/')
            .then(results => results.json())
            .then(results => this.setState({'items': results}))
    }

    render() {
        return (
            <ul>
                {this.state.items.map(function (item, index) {
                    return (
                        <ContentItem item={item} key={index + 1}/>
                    )
                })}
            </ul>
        )
    }
}

const ContentItem = ({item}) => (
    <Row className="ContentItem">
        <Col xs="3"/>
        <Col xs="12" sm="6">
            <Card>
                <CardImg src={item.image}/>
                <CardBody>
                    <CardTitle>
                        {item.title}
                    </CardTitle>
                    <CardText>
                        {item.description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    </Row>
)

ReactDOM.render(
    <ContentFeed/>,
    document.getElementById('root')
);
registerServiceWorker();
