import React, {Component} from 'react'
import HeaderTwo from "../header2/HeaderTwo";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import styles from './chat_design.module.css'
import Helmet from 'react-helmet'
import flex_styles from './chat_menu.module.css'
import UserIcon from '../../assets/userIcon.png'
import NewChat from '../../assets/new_chat.png'
import ChatMenuIcon from '../../assets/for_chat_menu.png'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import '../header2/header2.module.css'
import '../faqs/myCollapse.css'

class ChatMenu extends Component {

  render() {
    return (

      <div>
        {/* <Helmet>
          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                id="bootstrap-css"/>
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script> */}
          {/*<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
{/* 
          <link rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/> */}
          {/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> */}
          {/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}

          {/*<link rel="preconnect" href="https://fonts.gstatic.com"/>*/}
          {/*<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>*/}
        {/* </Helmet> */}

        <HeaderTwo/>
        <div className={flex_styles.flexContainer}>

          <div className={flex_styles.flexChild}>

            <div className={styles.messaging}>
              <div className={styles.inbox_msg}>
                <div className={styles.inbox_people} style={{
                  background: '#FFFFFF',
                  border: '0px solid rgba(0, 0, 0, 0.05)',
                  boxSizing: 'border-box',
                  boxShadow: '0px 4px 35px -7px rgba(0, 0, 0, 0.15)'
                }}>

                  <div className={styles.inbox_chat} className={"scroll"}>
                    <h3 style={{fontWeight: 'bold', color: '#4B176A', marginLeft: '10px'}}>Messages</h3>

                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={NewChat}/>
                        </div>
                        <div className={styles.chat_ib}>
                          <h5 style={{marginTop: '5px'}}>New Chat</h5>
                          {/*<p style={{color: '#4B176A'}}>Lorem ipsum dolor sit amet, </p>*/}
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib}>
                          <h5>Jone Doe</h5>
                          <p>Lorem ipsum dolor sit amet, </p>
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib}>
                          <h5>Harry Poter</h5>
                          <p>Lorem ipsum sit amet, consectetur</p>
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list_active}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib_active}>
                          <h5>Walt Disney</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib}>
                          <h5>Washington Sundar</h5>
                          <p>Lorem ipsum , consectetur</p>
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib}>
                          <h5>William Carry</h5>
                          <p>Lorem ipsum dolor sit , consectetur</p>
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib}>
                          <h5>Fransisco Fernandis</h5>
                          <p>Lorem ipsum dolor , </p>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>


                <div className={styles.mesgs}>

                  <div className={styles.titleBar}>
                    <div className={styles.title_msg_img} style={{padding: '10px 0 0 5px'}}>
                      <img src={UserIcon}/>
                    </div>
                    <div style={{display: 'inline-block', padding: '0px 0 0px 2px'}}><h5>Walt Disney</h5></div>


                  </div>

                  <div className={styles.msg_history} style={{marginBottom: '25px'}}>


                    <div className={styles.outgoing_msg}>
                      <div className={styles.outgoing_msg_img}><img src={UserIcon}/></div>
                      <div className={styles.sent_msg}>
                        <p>Praesent consectetur ornare urna ut.</p>
                        <span className={styles.time_date}> 08/02/2021        3.35 PM</span></div>
                    </div>

                    <div className="incoming_msg">
                      <div className={styles.incoming_msg_img}><img src={UserIcon}/></div>
                      <div className={styles.received_msg}>
                        <div className={styles.received_withd_msg}>
                          <p>Lorem ipsum dolor sit amet, consectetur</p>
                          <span className={styles.time_date}> 4.12 PM        08/02/2021</span></div>
                      </div>
                    </div>

                    <div className={styles.outgoing_msg}>
                      <div className={styles.outgoing_msg_img}><img src={UserIcon}/></div>
                      <div className={styles.sent_msg}>
                        <p>Praesent consectetur ornare urna ut euismod.</p>
                        <span className={styles.time_date}>09/02/2021         11:45 PM</span>
                      </div>


                    </div>


                    <div className="incoming_msg">
                      <div className={styles.incoming_msg_img}><img src={UserIcon}/></div>
                      <div className={styles.received_msg}>
                        <div className={styles.received_withd_msg}>
                          <p>......</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.type_msg}>
                    <div className={flex_styles.input_msg_write}>
                      <input type="text" className={flex_styles.input_msg_write} placeholder="Write Message"/>
                      <button className={styles.msg_send_btn} type="button"><i className="fa fa-send-o"
                                                                               aria-hidden="true"></i></button>
                    </div>

                  </div>
                </div>


              </div>
            </div>


          </div>

          <div className={flex_styles.flexChild2}>

            <div style={{marginLeft: '-12px'}}>
              <Navbar collapseOnSelect expand="lg" variant="light">

                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                  <img src={ChatMenuIcon} style={{width: '25px', display: "inline"}}/>
                  <h6 style={{display: 'inline', marginLeft: '2px'}}>Conversations</h6>
                </Navbar.Toggle>

                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="navbar-nav ml-auto">
                    {/*<Nav.Link href="/teamprofile"><img src={headIcon} /> </Nav.Link>*/}
                    {/*<Nav.Link href="/team"><h4 className={styles.linkText}> ST Taran</h4></Nav.Link>*/}
                    {/*<Nav.Link href="/team"><img src={headDrop} /> </Nav.Link>*/}

                    <div className={styles.inbox_msg}>
                      <div className={styles.inbox_people_c2} style={{
                        background: '#FFFFFF',
                        border: '0px solid rgba(0, 0, 0, 0.05)',
                        boxSizing: 'border-box',
                        boxShadow: '0px 4px 35px -7px rgba(0, 0, 0, 0.15)'
                      }}>

                        <div className={styles.inbox_chat} className={"scroll"}>


                          <div className={styles.chat_list}>
                            <div className={styles.chat_people}>
                              <div className={styles.chat_img}>
                                <img src={NewChat}/>
                              </div>
                              <div className={styles.chat_ib}>
                                <h5 style={{marginTop: '5px'}}>New Chat</h5>
                              </div>
                            </div>
                          </div>


                          <div className={styles.chat_list}>
                            <div className={styles.chat_people}>
                              <div className={styles.chat_img}>
                                <img src={UserIcon}/>
                              </div>
                              <div className={styles.chat_ib}>
                                <h5>Jone Doe</h5>
                                <p>Lorem ipsum dolor sit amet, </p>
                              </div>
                            </div>
                          </div>


                          <div className={styles.chat_list}>
                            <div className={styles.chat_people}>
                              <div className={styles.chat_img}>
                                <img src={UserIcon}/>
                              </div>
                              <div className={styles.chat_ib}>
                                <h5>Harry Poter</h5>
                                <p>Lorem ipsum sit amet, consectetur</p>
                              </div>
                            </div>
                          </div>


                          <div className={styles.chat_list_active}>
                            <div className={styles.chat_people}>
                              <div className={styles.chat_img}>
                                <img src={UserIcon}/>
                              </div>
                              <div className={styles.chat_ib_active}>
                                <h5>Walt Disney</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                              </div>
                            </div>
                          </div>


                          <div className={styles.chat_list}>
                            <div className={styles.chat_people}>
                              <div className={styles.chat_img}>
                                <img src={UserIcon}/>
                              </div>
                              <div className={styles.chat_ib}>
                                <h5>Washington Sundar</h5>
                                <p>Lorem ipsum , consectetur</p>
                              </div>
                            </div>
                          </div>


                          <div className={styles.chat_list}>
                            <div className={styles.chat_people}>
                              <div className={styles.chat_img}>
                                <img src={UserIcon}/>
                              </div>
                              <div className={styles.chat_ib}>
                                <h5>William Carry</h5>
                                <p>Lorem ipsum dolor sit , consectetur</p>
                              </div>
                            </div>
                          </div>


                          <div className={styles.chat_list}>
                            <div className={styles.chat_people}>
                              <div className={styles.chat_img}>
                                <img src={UserIcon}/>
                              </div>
                              <div className={styles.chat_ib}>
                                <h5>Fransisco Fernandis</h5>
                                <p>Lorem ipsum dolor , </p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>

                  </Nav>
                </Navbar.Collapse>

              </Navbar>
            </div>


            <div className={styles.mesgs_c2}>


              <div className={styles.titleBar}>
                <div className={styles.title_msg_img_c2} style={{padding: '10px 0 0 5px'}}>
                  <img src={UserIcon}/>
                </div>
                <div style={{display: 'inline-block', padding: '0px 0 0px 2px'}}><h5>Walt Disney</h5></div>

              </div>


              <div className={styles.msg_history}>


                <div className={styles.outgoing_msg}>
                  <div className={styles.outgoing_msg_img}><img src={UserIcon}/></div>
                  <div className={styles.sent_msg}>
                    <p>Praesent consectetur ornare urna ut.</p>
                    <span className={styles.time_date}> 08/02/2021        3.35 PM</span></div>
                </div>

                <div className="incoming_msg">
                  <div className={styles.incoming_msg_img}><img src={UserIcon}/></div>
                  <div className={styles.received_msg}>
                    <div className={styles.received_withd_msg}>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <span className={styles.time_date}> 4.12 PM        08/02/2021</span></div>
                  </div>
                </div>

                <div className={styles.outgoing_msg}>
                  <div className={styles.outgoing_msg_img}><img src={UserIcon}/></div>
                  <div className={styles.sent_msg}>
                    <p>Praesent consectetur ornare urna ut euismod.</p>
                    <span className={styles.time_date}>09/02/2021         11:45 PM</span>
                  </div>


                </div>


                <div className="incoming_msg">
                  <div className={styles.incoming_msg_img}><img src={UserIcon}/></div>
                  <div className={styles.received_msg}>
                    <div className={styles.received_withd_msg}>
                      <p>......</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.type_msg}>
                <div className={flex_styles.input_msg_write}>
                  <input type="text" className={flex_styles.input_msg_write} placeholder="Write Message"/>
                  <button className={styles.msg_send_btn} type="button"><i className="fa fa-send-o"
                                                                           aria-hidden="true"></i></button>
                </div>

              </div>
            </div>
            {/*</div>*/}
            {/*</div>*/}
          </div>


        </div>

        <Footer/>


      </div>

    )
  }

}

export default withRouter(ChatMenu)