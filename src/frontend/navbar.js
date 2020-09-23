import React from 'react'
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import logo from '../images/logo.jpg'



function Nav(){
    return(
        <nav>
            <Col style={{width:'250px',height:'900px',backgroundColor:'black',color:'white'}}>
                <Row style={{borderBottom:'0.5px solid silver',color:'white',fontFamily:'verdana',height:'60px', display:'flex',marginBottom:'5px'}}>
                    <Image src={logo} style={{width:'50px', height:'50px', borderRadius:'25px', margin:'10px'}}/>
                    <span style={{color:'white', margin:'25px'}}> Dashboard</span>
                </Row>
                <Row style={{borderBottom:'0.5px solid silver',color:'white',fontFamily:'verdana',height:'60px'}}>iDesk - Dashboard</Row>
                <Row style={{borderBottom:'0.5px solid silver',color:'white',fontFamily:'verdana',height:'60px'}}>iDesk - Dashboard</Row>
                <Row style={{borderBottom:'0.5px solid silver',color:'white',fontFamily:'verdana',height:'60px'}}>iDesk - Dashboard</Row>
                <Row style={{borderBottom:'0.5px solid silver',color:'white',fontFamily:'verdana',height:'60px'}}>iDesk - Dashboard</Row>
                <Row style={{borderBottom:'0.5px solid silver',color:'white',fontFamily:'verdana',height:'60px'}}>iDesk - Dashboard</Row>
            </Col>
        </nav>
    );
}

export default Nav;