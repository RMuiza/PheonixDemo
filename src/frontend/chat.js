import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import user4 from '../images/user4.jpeg'

function Chat(){
    return(
        <Container style={{border:'1px solid silver'}}>
          <Col>
            <Row style={{width:'300px',height:'50px',backgroundColor:'black',color:'white', fontSize:'20px', marginBottom:'10px',marginTop:'10px'}}>Personal Class Guide</Row>
            <Row style={{width:'300px',height:'50px',color:'white',backgroundColor:'black', fontSize:'20px', marginBottom:'10px'}}>Leading Teachers</Row>
            <Row style={{width:'300px',height:'50px', border:'1px solid silver'}}><input type="text" placeholder="Search.."/></Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
            <Row style={{height:'60px'}}>
                <Image src={user4} style={{width:'50px', height:'50px',borderRadius:'25px'}}></Image>
                <span style={{fontSize:'12px'}}>Nazeer Ahmaed</span>
            </Row>
          </Col>
        </Container>
    );
}

export default Chat;