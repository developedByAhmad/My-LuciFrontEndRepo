import React, {useState} from 'react'
import styles from "./signupAdlForms.module.css";
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import {Col, Form} from "react-bootstrap"
import axios from 'axios'
// import url from "../../axios_url/url";
import Header from "../../header2/Header";
import Footer from "../../footer/Footer";

// const api = axios.create({
//     // baseURL: 'http://localhost:6003/api/authentication'
//     baseURL: url + '/api/authentication'
// });


function SignupAdlForm3() {

    const [formProp, setFormProp] = useState({
        username: '',
        password: '',
        re_entered_password: ''
    })

    // const submitForm = async () => {

    //     let res = await api.post('', {
    //         username: `${formProp.username}`,
    //         password: `${formProp.password}`,
    //         re_entered_password: `${formProp.re_entered_password}`
    //     })
    // }


    return (

        // <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="space-around"
        //       alignItems="stretch"
        //       style={{backgroundColor: "#ffffff", padding: "25px 25px 25px 25px"}}>

        <div style={{backgroundColor: "#E5E5E5"}}>
            <Header/>
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="center"
                  alignItems="center">
                <Grid container xl={8} lg={8} md={10} sm={12} xs={12} justify="center" alignItems="center"
                      style={{backgroundColor: '#ffffff'}} className={styles.newlogin}>

                    <Grid item direction="row">

                        <Form>
                            <Form.Row>
                                <h1 className={styles.heading}> LUCI Technologies LLC - Sign UP Form </h1>
                            </Form.Row>
                            <Form.Row>
                                <h4 className={styles.heading}> User Profile Setup</h4>
                            </Form.Row>
                            <br/>
                            <br/>


                            <Form.Row>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" className={styles.newinput} value={formProp.username} onChange={e => setFormProp({...formProp, username: e.target.value})}/>
                            </Form.Row>
                            <br/>

                            <Form.Row>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" className={styles.newinput} value={formProp.password} onChange={e => setFormProp({...formProp, password: e.target.value})}/>
                            </Form.Row>
                            <br/>

                            <Form.Row>
                                <Form.Label>Re-enter Password</Form.Label>
                                <Form.Control type="password" className={styles.newinput}
                                              value={formProp.re_entered_password} onChange={e => setFormProp({...formProp, re_entered_password: e.target.value})}/>
                            </Form.Row>
                            <br/>


                        </Form>
                        <div>
                            <button
                                style={{width: '150px', height: '50px', background: '#4B176A', color: '#ffffff'}}>Back
                            </button>
                            <button style={{
                                width: '150px',
                                height: '50px',
                                background: '#4B176A',
                                color: '#ffffff',
                                marginLeft: '50px'
                            }}>Submit
                            </button>
                        </div>
                        <br/>
                        <br/>


                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    )

}

export default SignupAdlForm3
