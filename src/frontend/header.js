import React from 'react'
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
// import nav5 from '../images/nav5.png'
import dots1 from '../images/dots1.png'
import wNav from '../images/wNav.png'

function Header(){
    return(
            <Row style={{width:'1580px',height:'50px',backgroundColor:'black', color:'white', display:'flex'}}>
                <Col sm={2} >
                    {/* <Image src={wNav} style={{height:'30px', width:'30px'}}></Image> */}
                </Col>
                <Col sm={6} > 
                    <Image src={dots1} style={{height:'30px', width:'30px',right:'80%'}}></Image>
                </Col>
            </Row>
    );
}

export default Header;