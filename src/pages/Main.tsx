// @flow
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/main.scss'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Typed from 'react-typed'
import Engineer from '../images/engineer.jpg'
import Villa from '../images/villa1.jpeg'
import Company from '../images/company1.jpg'
import Market from '../images/market.jpg'


export type Props = {
    title: string;
  }

export default class Main extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
        document.title = this.props.title
        document.documentElement.style.overflow = "hidden";
        document.documentElement.setAttribute(
          "data-color-scheme",
          document.body.classList.contains('dark') ? "dark" : "light"
        );
        document.documentElement.style.overflow = "";
    }
    render() {
        return (
            <Container fluid className='px-0 mx-0'>
                <Header />
                <div className='head'>
                    <Row className='mx-0'>
                        <Col className='d-flex flex-column justify-content-center align-items-center headline' xs={12} lg={4}>
                            <h1 style={{textAlign: "center"}}>Your <Typed strings={['house', 'company', 'market']} typeSpeed={40} backSpeed={50} loop /> <br /> starts here</h1>
                            <p className='text-center'>Book now and build your dream <Typed strings={['home', 'firm', 'shop']} typeSpeed={40} backSpeed={20} loop /> <FontAwesomeIcon className='icon-style' icon={solid('house')} /> <FontAwesomeIcon className='icon-style' icon={solid('building')} /> <FontAwesomeIcon className='icon-style' icon={solid('shop')} /></p>
                        </Col>
                        <Col lg={8} className='icon-container d-none d-lg-block'>
                            <FontAwesomeIcon className='icon-house' icon={solid('house')} />
                            <FontAwesomeIcon className='icon-building' icon={solid('building')} />
                            <FontAwesomeIcon className='icon-shop' icon={solid('shop')} />
                            <h2 className='icon-center'>Welcome</h2>
                        </Col>
                    </Row>
                </div>


                <div className="about-home">
                <Card className='card-colors'>
                    <Row className='mx-0 py-2 d-flex justify-content-center'>
                        <Col xs={10} md={3}>
                            <Card.Img style={{borderRadius: '10px'}} variant="top" src={Engineer} />
                        </Col>
                        <Col xs={12} md={7}>
                            <Card.Body>
                                <Card.Title>Engs Company <FontAwesomeIcon icon={solid('building')}/></Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut provident perferendis cum. Odio perspiciatis aliquid nobis atque rem tempore omnis impedit, tempora voluptate, expedita culpa eaque harum doloremque, corporis earum aut. Consectetur, temporibus vel placeat eaque cumque laborum architecto provident a atque aliquam saepe molestias deserunt, dolor harum officiis commodi mollitia numquam dolores quos recusandae similique eos, dignissimos earum.
                                </Card.Text>
                                <Link to='/EngsCompany/about' className='btn btn-success'>About us</Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className='card-colors'>
                    <Row className='mx-0 py-2 d-flex justify-content-center flex-md-row-reverse text-md-end'>
                        <Col xs={10} md={3} >
                            <Card.Img style={{borderRadius: '10px'}} variant="top" src={Engineer} />
                        </Col>
                        <Col xs={12} md={7}>
                            <Card.Body>
                                <Card.Title>Our Services <FontAwesomeIcon icon={brands('servicestack')} /></Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut provident perferendis cum. Odio perspiciatis aliquid nobis atque rem tempore omnis impedit, tempora voluptate, expedita culpa eaque harum doloremque, corporis earum aut. Consectetur, temporibus vel placeat eaque cumque laborum architecto provident a atque aliquam saepe molestias deserunt, dolor harum officiis commodi mollitia numquam dolores quos recusandae similique eos, dignissimos earum.
                                </Card.Text>
                                <Link to='/EngsCompany/services' className='btn btn-primary'>See Our Services</Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Card className='card-colors'>
                    <Row className='mx-0 py-2 d-flex justify-content-center'>
                        <Col xs={10} md={3} >
                            <Card.Img style={{borderRadius: '10px'}} variant="top" src={Engineer} />
                        </Col>
                        <Col xs={12} md={7}>
                            <Card.Body>
                                <Card.Title>Best Prices <FontAwesomeIcon icon={solid('dollar-sign')}/></Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut provident perferendis cum. Odio perspiciatis aliquid nobis atque rem tempore omnis impedit, tempora voluptate, expedita culpa eaque harum doloremque, corporis earum aut. Consectetur, temporibus vel placeat eaque cumque laborum architecto provident a atque aliquam saepe molestias deserunt, dolor harum officiis commodi mollitia numquam dolores quos recusandae similique eos, dignissimos earum.
                                </Card.Text>
                                <Link to='/EngsCompany/prices' className='btn btn-warning'>Take A Look</Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                </div>
                <div className="works">
                    <h2 className='text-center'>Company's Latest Works</h2>
                    <Row className='mx-0 justify-content-around'>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={Villa} />
                            <Card.Body>
                                <Card.Title>Luxury Villa</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti mollitia provident assumenda cupiditate nesciunt accusamus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={Company} />
                            <Card.Body>
                                <Card.Title>Company headquarters</Card.Title>
                                <Card.Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas corporis reiciendis doloremque! Officiis, quod accusantium?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card-style'>
                            <Card.Img variant="top" src={Market} />
                            <Card.Body>
                                <Card.Title>Supermarket</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam perspiciatis, iusto et qui omnis!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
                <div className="contact">
                <h2 className='text-center' style={{marginBottom: '2rem'}}>Contact us</h2>
                    <Row className='mx-0 justify-content-center'>
                        <Col xs={12} md={8}>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={6} placeholder='Write your message or order here' />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </Container>
        )
    }
}