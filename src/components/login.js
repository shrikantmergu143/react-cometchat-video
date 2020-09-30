import React  from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Image from '../background.png'
import {API_KEY} from '../constant/constant'
import  {CometChat} from '@cometchat-pro/chat'
import { useHistory } from 'react-router'

export const Login = () => {
    const [username, setUsername] = React.useState('')
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const history = useHistory()


const login = async (username) => {
        const UID = username
var user = new CometChat.User(UID);
user.setName(username);

    if(username){
      CometChat.createUser(user, API_KEY).then(
        user => {
            console.log("user created", user);
            CometChat.login(UID,API_KEY).then(
                data => {
                    history.push('/video')
                },
                error => {
                  console.log("Login failed with exception:", { error });    
                }
              );

        },error => {
            CometChat.login(UID,API_KEY).then(
                data => {
                  history.push('/video')
                },
                error => {
                  console.log("Login failed with exception:", { error });    
                }
              );
        }
    )
      
    }else{
      history.push('/video')
    }
      
}

    const formsubmit = async (e) =>{
        e.preventDefault()
        setIsSubmitting(true)
        const data = await login(username)
        if(data){
        setIsSubmitting(false)
        setUsername('')
        }
    }

    return(           
           <Container>
            <Row>
                <Col md={8} className='top-margin'> 
                <center >
                    <img src={Image} className='mt-5' alt='background'/>
                </center>
                </Col>
                <Col md={4} className='margin-top'>
                <h5><strong>WELCOME TO COMETCHAT VIDEO CALL</strong></h5>
                <Row>
                    <div className='ml-3' onClick={()=>{ setIsSubmitting(true);  login('superhero1')}}>
                        <img src='https://data-us.cometchat.io/assets/images/avatars/ironman.png' height='50px' width='50px' alt='superher1'/>
                            <p>superhero1</p>
                            </div>
                            <div className='ml-3' onClick={()=>{ setIsSubmitting(true);login('superhero2')}}>
                        <img src='https://data-us.cometchat.io/assets/images/avatars/captainamerica.png' height='50px' width='50px' alt='superher2'/>
                            <p>superhero2</p>
                            </div>
                            <div className='ml-3' onClick={()=>{setIsSubmitting(true); login('superhero3')}}>
                        <img src='https://data-us.cometchat.io/assets/images/avatars/spiderman.png' height='50px' width='50px' alt='superher3' />
                            <p>superhero3</p>
                            </div>
                    </Row>
                    <Form onSubmit={formsubmit} >
                    <Form.Control type='text' placeholder='Enter or click the username above' className='mt-2' onChange={(e)=> setUsername(e.target.value)} />
                      <Button type='submit' variant="primary" className='bt-width mt-4' disabled={isSubmitting}>
                          Login {isSubmitting ? (<i className="fa fa-spinner fa-spin"></i>) : null}
                          </Button>
                    </Form>
                </Col>
            </Row>
           </Container>
        
)
    } 
