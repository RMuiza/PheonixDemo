// import React from 'react'
import React, {useState, useEffect, useContext} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import user4 from '../images/user4.jpeg'
import nav from '../images/nav.png'
import light2 from '../images/light2.jpeg'
import { Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'


function UserPost(){

    const [data,setData] = useState([]) 
    console.log(data)

    useEffect(() => {
        axios.get("https://socialbackend.idesk.lk:5000/allposts",
        {
            headers: {
                "Authorization": "Bearer "  + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjY5ODQzMjMxYmYwZDAwNDViZWRlYzciLCJpYXQiOjE2MDA3NTA2NDJ9.yL0SIEW8QhfCFGUbW4eINovAywGNrKd4YHBwzzdh8fk" 
            }
        })
        .then(res => {
            setData(res.data.posts) 
            // console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
      },[])
    

    return (

     < div> 
     {
            data.map(posts=> {
              
           return(
                    <Container>
                    <Row style={{display:'flex', width:'100%'}}>
                        <Col >
                            <Image src={user4} style={{width:'40px',height:'40px', borderRadius:'20px', marginLeft :'30px', marginRight:'20px',marginTop:'10px'}} />
                        </Col>
                        <Col style={{fontSize:'11px',marginTop:'10px',marginRight:'250px'}}>
                            <Row><b>{posts.postedBy.name}</b></Row>
                            <Row>{posts.postedBy.school}</Row>
                            <Row>{posts.postedDate}</Row>
           <Row>{posts.subject}    {posts.chapter}</Row>
                        </Col>
                        <Col>
                            {/* <Button style={{width:'30px',height:'30px',  marginTop:'10px',alignItems:'center'}}>
                            <Image src={nav} style={{width:'20px',height:'20px'}}/> 
                            </Button>
                            <Image src={nav} style={{width:'30px',height:'30px', borderRadius:'15px', marginTop:'10px'}}/> */}
                            <Dropdown style={{marginTop:'10px'}}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <Image src={nav} style={{width:'20px',height:'20px'}}/> 
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{backgroundColor:'white',}}>
                                    <Dropdown.Item href="#/action-3">Edit</Dropdown.Item><br /><br />
                                    <Dropdown.Item href="#/action-3">Hide</Dropdown.Item><br /><br />
                                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row style={{width:'100%'}}>
                        {
                        posts.photourl
                        ?<Image src={posts.photourl[2]} style={{width:'700px',height:'400px', margin:'25px'}}/>
                       
                        :   <div></div>
                    }
                    </Row>
                    <Row>
                        <span style={{marginLeft:'10px', fontSize:'10px'}}>23 likes 4 shares</span>
                    </Row>
                    <Row style={{width:'100%', display:'flex',border:'1px solid silver'}}>
                        <Button variant='none' style={{width:'33%',margin:'10px'}}>Like</Button>
                        <Button variant='none' style={{width:'33%',margin:'10px'}}>Comment</Button>
                        <Button variant='none' style={{width:'33%',margin:'10px'}}>Share</Button>
                    </Row>
                </Container>
                 )
              })
        }
        </ div>
    );
}

export default UserPost;