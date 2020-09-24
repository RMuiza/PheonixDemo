import React from 'react'
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
// import nav5 from '../images/nav5.png'
import dots1 from '../images/dots1.png'
import wNav from '../images/wNav.png'
import notification from '../images/notification.png'
import Dropdown from 'react-bootstrap/Dropdown'

function Header(){
    return(
            <Row style={{width:'1580px',height:'50px',backgroundColor:'black', color:'white', display:'flex'}}>

                            <Dropdown style={{marginTop:'10px'}}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{height:'30px', width:'30px',marginLeft:'10px',marginTop:'10px',marginBottom:'20px'}}>
                                <Image src={wNav} style={{height:'20px', width:'20px'}}/> 
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{backgroundColor:'white',}}>
                                    <Dropdown.Item href="#/action-3">Course Fee</Dropdown.Item><br /><br />
                                    <Dropdown.Item href="#/action-3">Payments</Dropdown.Item><br /><br />
                                    <Dropdown.Item href="#/action-3">Wallet</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                    
                    <span style={{marginLeft:'10px',marginTop:'10px',marginRight:'1200px'}}>Rs.2000</span>
                
                    <Image src={dots1} style={{height:'30px', width:'30px',marginLeft:'10px',marginRight:'25px',marginTop:'10px'}}></Image>

                    <Image src={notification} style={{height:'35px', width:'35px',marginLeft:'10px',marginRight:'50px',marginTop:'10px'}}></Image>

                    <span style={{marginTop:'10px'}}>Logout</span>
            </Row>
    );
}

export default Header;