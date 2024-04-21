import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Nav, Navbar, Button } from 'react-bootstrap';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DetailPage from './pages/Detail';

// 자바스크립트 파일은 확장자명 생략 (.js 안붙여도 됨)
// 다른 자바스크립트에서 export한건 import로 가져와서 변수처럼 사용 -> {변수명}
import data from './data';
import {num1, num2, num3} from './data';

// 이미지 사용하려면 import
import mainBG from './main.jpeg';
import { useState } from 'react';

// 라우터는 창 새로고침이 아니라 재렌더링 방식을 사용 (빠름)
function App() {
  // css를 제공해주는 사이트 : React Bootstrap
  // install react-bootstrap bootstrap

  let [items, setItems] = useState(data);
  let [photo, setPhoto] = useState(['/monitor.jpeg', '/mouse.png', '/keyboard.jpeg']);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img src='./logo.png' width={'140px'} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로가기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
        <>
          <div className={'main-bg'}></div>
          <br/>
          <Container>
            <Row>
              {
                items.map((e, idx) => (
                  <ItemCol key={e} data={e} img={photo[idx]} />
                ))
              }
            </Row>
          </Container>
        </>
        }></Route>
        
        <Route path='/detail' element={<DetailPage items={items}/>}></Route>       
      </Routes>

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