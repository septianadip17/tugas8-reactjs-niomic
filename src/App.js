import React, { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Dropdown,
  Breadcrumb,
  ListGroup,
  Form,
  Figure,
  Modal,
  Button,
} from "react-bootstrap";
import manIcon from "./img/man-icon.png";
import "./style.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    setShowModal(true); // Menampilkan modal ketika tombol login diklik
  };

  const handleCloseModal = () => {
    setShowModal(false); // Menutup modal ketika tombol Close diklik
  };

  return (
    <div>
      <h1 className="text-center">tugas 8</h1>
      <Container></Container>
      <Row className="bg-dark">
        <Col>
          <Dropdown className="text-start">
            <Dropdown.Toggle variant="primary">Pilih Bahasa</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Bahasa Indonesia</Dropdown.Item>
              <Dropdown.Item href="/">Thai</Dropdown.Item>
              <Dropdown.Item href="/">English</Dropdown.Item>
              <Dropdown.Item href="/">Ulaenang Ulaenung</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="text-end">
          <img
            src={manIcon}
            alt="man-icon"
            style={{ width: "30px", height: "30px" }}
          />
          <p className="text-white">Alan Saputra</p>
        </Col>
      </Row>

      <Container>
        <Breadcrumb className="text-end">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Bola</Breadcrumb.Item>
        </Breadcrumb>
        <Carousel className="text-center mx-auto">
          <Carousel.Item>
            <img
              src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
              alt="travel1"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Neymar Membuktikan Taringnya Kembali</h3>
              <p>Lama Tak Bersinar Akhirnya Neymar Bersinar</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              alt="travel2"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Inggris Masih Tak Ada Habisnya!</h3>
              <p>Perpaduan Pemain Muda dan Senior Kembali Membuat Gentar</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2024/04/19/rizky-ridho-rafael-struick-timnas-indonesia-u-23-timnas-u-23-indonesia-u-23-indonesia-u-23-vs-australia-u-23-timnas-indonesia-_169.jpeg?w=1200"
              alt="travel3"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Keajaiban Indonesia U-23</h3>
              <p>Hilang Kendali Sampai Semi!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Row className="p-4">
        <Col>
          <ListGroup>
            <ListGroup.Item action>Liga 1 Indonesia</ListGroup.Item>
            <ListGroup.Item action>Liga Primer Inggris</ListGroup.Item>
            <ListGroup.Item action>Serie A</ListGroup.Item>
            <ListGroup.Item action>Liga Thailand</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Figure>
            <h4>DIVISI PRIMERA</h4>
            <p>Main Untuk Catalunya, Gerald Pique inta Dihormati</p>
            <Button variant="primary">Read More</Button>
          </Figure>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-2">
              <Form.Control type="email" placeholder="Masukkan Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Masukkan Password" />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="Term & Condition" />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleLogin}>
              Login
            </Button>
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Anda Berhasil Login!</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary">Save Usernname & Password</Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
