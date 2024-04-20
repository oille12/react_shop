import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Nav, Navbar, Button } from 'react-bootstrap';
import './App.css';

// 자바스크립트 파일은 확장자명 생략 (.js 안붙여도 됨)
// 다른 자바스크립트에서 export한건 import로 가져와서 변수처럼 사용 -> {변수명}
import data from './data';
import {num1, num2, num3} from './data';

// 이미지 사용하려면 import
import mainBG from './main.jpeg';
import { useState } from 'react';



function App() {
  // css를 제공해주는 사이트 : React Bootstrap
  // install react-bootstrap bootstrap

  let [items, setItems] = useState(data);
  let [photo, setPhoto] = useState(['/monitor.jpeg', '/mouse.png', '/keyboard.jpeg']);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src='./logo.png' width={'140px'} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">상세페이지</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className={'main-bg'}>
        
      </div>
      <br/>

      <Container>
      <Row>
        {items.map((item, index) => (
          <ItemCol key={index} data={item} img={photo[index]} />
        ))}
        {/* <ItemCol data={data[0]} img={'/monitor.jpeg'} />
        <ItemCol data={data[1]} img={'/mouse.png'} />
        <ItemCol data={data[2]} img={'/keyboard.jpeg'} /> */}
      </Row>
    </Container>

      <br/>
      <Button variant="primary">기본 버튼</Button>{' '}
    </div>
  );
}

export default App;


// 컴포넌트로 분리했으면 props로 받아와야 하는 부분을 변경
function ItemCol(props) {
  // 사용하는 곳에서 결정해줘야 하는 부분만(그때그때 바뀌는 부분) props 처리
  return (
      <>
        <Col>
          <img src={props.img} width={'300px'} height={'300px'} />
          <h4>{props.data.title}</h4>
          <p>{props.data.price} 원</p>
        </Col>
      </>
  )
}