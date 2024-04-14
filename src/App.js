import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './App.css';

// 자바스크립트 파일은 확장자명 생략 (.js 안붙여도 됨)
// 다른 자바스크립트에서 export한건 import로 가져와서 변수처럼 사용 -> {변수명}
import data from './data';
import {num1, num2, num3} from './data';

function App() {
  // css를 제공해주는 사이트 : React Bootstrap
  // install react-bootstrap bootstrap

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{data}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">{num1}</Nav.Link>
            <Nav.Link href="#features">{num2}</Nav.Link>
            <Nav.Link href="#pricing">{num3}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <Button variant="primary">기본 버튼</Button>{' '}
    </div>
  );
}

export default App;
