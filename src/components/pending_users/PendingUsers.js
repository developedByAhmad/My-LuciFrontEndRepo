import React, {Component} from 'react'
import HeaderTwo from "../header2/HeaderTwo";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import styles from './pending_users.module.css'
import AcceptEveryone from '../../assets/accept_everyone.png'
import DenyEveryone from '../../assets/deny_everyone.png'
import Accept from '../../assets/accept.png'
import Deny from '../../assets/deny.png'
import UserIcon from '../../assets/userIcon.png'

class PendingUsers extends Component{

  render() {
    return (
      <div style={{background: 'white', color: '4B176A' /*, height:'auto'*/}}>
        <HeaderTwo/>


        <h5 style={{ textAlign: 'center', fontWeight:'bold', color:'#4B176A'}}>Pending Users</h5>

        <div className={styles.flexContainer}>
          <div className={styles.flexChild_option1}>
            <img src={AcceptEveryone} style={{width:'auto', height: 'auto'}}/>
          </div>

          <div className={styles.flexChild_option2}>
            <img src={DenyEveryone} style={{width:'auto', height: 'auto'}}/>
          </div>
        </div>

        <div>
          <h5 className={styles.countStatus}>6 Pending Users</h5>
        </div>

        <div className={styles.flexContainer}>


          <div className={styles.flexChild}>

            <div className={"col"} style={{display: '-webkit-box', marginBottom: '35px'}}>
              <img src={UserIcon} className={styles.userIcon}/>
              <div style={{color: '4B176A', marginLeft: '10px'}}>
                <h4 className={styles.nameSize} style={{fontWeight: 'bold', color: '#4B176A'}}>Jane Doe</h4>
                <p className={styles.messageSize}>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>

            <div className={"col"} style={{display: '-webkit-box', marginBottom: '35px'}}>
              <img src={UserIcon} className={styles.userIcon}/>
              <div style={{color: '4B176A', marginLeft: '10px'}}>
                <h4 className={styles.nameSize} style={{fontWeight: 'bold', color: '#4B176A'}}>William Cary</h4>
                <p className={styles.messageSize}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>


            <div className={"col"} style={{display: '-webkit-box', marginBottom: '35px'}}>
              <img src={UserIcon} style={{width: 'auto', height: 'auto'}}/>
              <div style={{color: '4B176A', marginLeft: '10px'}}>
                <h4 className={styles.nameSize} style={{fontWeight: 'bold', color: '#4B176A'}}>Harry Poter</h4>
                <p className={styles.messageSize}>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
              </div>
            </div>


            <div className={"col"} style={{display: '-webkit-box', marginBottom: '35px'}}>
              <img src={UserIcon} style={{width: 'auto', height: 'auto'}}/>
              <div style={{color: '4B176A', marginLeft: '10px'}}>
                <h4 className={styles.nameSize} style={{fontWeight: 'bold', color: '#4B176A'}}>Suzan Chan</h4>
                <p className={styles.messageSize}>Lorem ipsum dolor sit amet, </p>
              </div>
            </div>



            <div className={"col"} style={{display: '-webkit-box', marginBottom: '35px'}}>
              <img src={UserIcon} style={{width: 'auto', height: 'auto'}}/>
              <div style={{color: '4B176A', marginLeft: '10px'}}>
                <h4 className={styles.nameSize} style={{fontWeight: 'bold', color: '#4B176A'}}>Washington Sundar</h4>
                <p className={styles.messageSize}>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
              </div>
            </div>


            <div className={"col"} style={{display: '-webkit-box', marginBottom: '35px'}}>
              <img src={UserIcon} style={{width: 'auto', height: 'auto'}}/>
              <div style={{color: '4B176A', marginLeft: '10px'}}>
                <h4 className={styles.nameSize} style={{fontWeight: 'bold', color: '#4B176A'}}>Robart Disney</h4>
                <p className={styles.messageSize}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>




          </div>

          <div className={styles.flexChild2}>

            <div className={"col"} style={{display: '-webkit-box', marginBottom: '45px'}}>
              <img src={Accept} className={styles.acceptButtonMargin}/>
              <img src={Deny} className={styles.denyButtonMargin}/>
            </div>

            <div className={"col"} style={{display: '-webkit-box', marginBottom: '45px'}}>
              <img src={Accept} className={styles.acceptButtonMargin}/>
              <img src={Deny} className={styles.denyButtonMargin}/>
            </div>

            <div className={"col"} style={{display: '-webkit-box', marginBottom: '45px'}}>
              <img src={Accept} className={styles.acceptButtonMargin}/>
              <img src={Deny} className={styles.denyButtonMargin}/>
            </div>

            <div className={"col"} style={{display: '-webkit-box', marginBottom: '45px'}}>
              <img src={Accept} className={styles.acceptButtonMargin}/>
              <img src={Deny} className={styles.denyButtonMargin}/>
            </div>

            <div className={"col"} style={{display: '-webkit-box', marginBottom: '45px'}}>
              <img src={Accept} className={styles.acceptButtonMargin}/>
              <img src={Deny} className={styles.denyButtonMargin}/>
            </div>

            <div className={"col"} style={{display: '-webkit-box', marginBottom: '45px'}}>
              <img src={Accept} className={styles.acceptButtonMargin}/>
              <img src={Deny} className={styles.denyButtonMargin}/>
            </div>



          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}

export default withRouter(PendingUsers)