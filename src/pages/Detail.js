import { Button, Col, Container, Row } from 'react-bootstrap';
import './Detail.css';

export default function DetailPage(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <img src='/monitor.jpeg' width={'400px'}/>
                    </Col>
                    <Col>
                        <h4>{props.items[0].title}</h4>
                        <p>{props.items[0].content}</p>
                        <p>{props.items[0].price} 원</p>
                        <Button>주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}