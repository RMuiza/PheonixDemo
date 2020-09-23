// import React from 'react'
import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Cardview from './cardview'
import UserPost from './userPost'






function Newsfeed(){
    return(
        <Container>
            <Row style={{width:'750px',height:'100px',backgroundColor:'white',color:'black', border: '1px solid black',margin:'10px'}}>
                <Row style={{width:'700px',height:'80px',backgroundColor:'white',color:'black', alignItems:"center",border:'0.5px solid silver',borderRadius:'10px', margin:'10px'}}>
                    Update your Status
                </Row>
            </Row>
            <Row style={{width:'750px',height: '775px',alignItems:'center',backgroundColor:'#D3D3D3', margin:'10px',overflowY:'scroll',overflowX:'hidden'}}>
               <UserPost />
            </Row>
            
        </Container>
    );
}

export default Newsfeed;