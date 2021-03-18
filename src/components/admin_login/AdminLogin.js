import React, {Component} from 'react'
import HeaderThree from "../header2/HeaderThree";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import BodyImage from './../../assets/admin_login_body_image.png'
import styles from './admin_login.module.css'

class AdminLogin extends Component {

  render() {

    return (

      <div style={{background: 'white', color: '4B176A' /*, height:'auto'*/}}>
        <HeaderThree/>


        <h1 className={styles.headingStyle}>Admin Login</h1>

        <div className={styles.flexContainer}>
          <div className={styles.flexChild}>
            <img src={BodyImage} style={{width: 'auto', height: 'auto'}}/>
          </div>

          <div className={styles.flexChild2}>
            <div className={"row"}>
              <label>User Name</label>
              <input type="text" id={"name"} className={styles.flex_input} type="text" id={"subject"} style={{borderColor: 'currentColor'}} />
            </div>
            <br/>

            <div className={"row"}>
              <label>Password</label>
              <input type="text" id={"name"} className={styles.flex_input} type="text" id={"subject"} style={{borderColor: 'currentColor'}} />
            </div>

            <br/>
            <br/>
            <br/>
            <div className={"row"}>
              <button className={"flexbutton"} style={{width: '100%', height:'50px', fontWeight: 'bold', borderRadius:'15px', background:'#4B176A' , color:'white', borderColor: 'currentColor'}}>Log in</button>
            </div>


          </div>


        </div>


        <Footer/>
      </div>

    )
  }
}


export default withRouter(AdminLogin)
