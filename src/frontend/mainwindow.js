import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cardview from './cardview'
import Chat from './chat'
import Header from './header'
// import Header from './header'
// import Nav from './navbar'
import Newsfeed from './newsfeed'

function Mainwindow(){
    return(
        <Container >
            <Row><Header /></Row>
            <Row style={{display:'flex'}}>
                <Col><Newsfeed /></Col>
                <Col><Cardview /></Col>
                <Col><Chat /></Col>
            </Row>
        </Container>
    );
}

export default Mainwindow;