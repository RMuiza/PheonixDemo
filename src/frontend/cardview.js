import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import class1 from '../images/class1.webm'
import class2 from '../images/class2.webm'


function Cardview(){
    return(
        <Container style={{width:'450px'}}>  
            <Row style={{height:'100px',backgroundColor:'black',color:'white',fontSize:'20px',margin:'10px'}}>Live Stream Classes Islandwide</Row>
            <Row style={{border:'1px solid silver',margin:'10px',display:'flex'}}>
                <Col ><video src={class1} style={{height:'100px',margin:'10px'}}></video></Col>
                <Col style={{height:'100px',backgroundColor:'grey',fontSize:'12px',margin:'10px'}}>Date and Time:
                                                                        2020.07.15
                                                                        Teachers Name:
                                                                        Abdul Kadar
                                                                        Streaming From:
                                                                        Jaffna
                                                                        Per Hour Charge:
                                                                        100.00 LKR</Col>
            </Row>

            <Row style={{border:'1px solid silver',display:'flex',margin:'10px'}}>
                <Col ><video src={class2} style={{height:'100px',margin:'10px'}}></video></Col>
                <Col style={{height:'100px',backgroundColor:'grey',fontSize:'12px',margin:'10px'}}>Date and Time:
                                                                        2020.07.15
                                                                        Teachers Name:
                                                                        Abdul Kadar
                                                                        Streaming From:
                                                                        Jaffna
                                                                        Per Hour Charge:
                                                                        100.00 LKR</Col>
            </Row>
            
        </Container>
    );
}

export default Cardview;