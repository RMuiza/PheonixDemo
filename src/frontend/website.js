import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Cardview from './cardview'
// import Chat from './chat'
import Mainwindow from './mainwindow'
import Nav from './navbar'
// import Newsfeed from './newsfeed'

function Website(){
    return(
        <Container>   
                {/* <Row ><Header/></Row> */}
                <Row style={{display:'flex'}}>
                <Col><Nav /></Col>
                <Col><Mainwindow /></Col>
                </Row>
        </Container>
    );
}

export default Website;