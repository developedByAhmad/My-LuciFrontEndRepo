import React, {Component} from 'react'
import Header from "../header2/Header";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {Layout} from "antd";
import BodyImage from '../../assets/payment_details_body_image.png'
import {Helmet} from "react-helmet";
import styles from './payment_details.module.css'
import './checkbox.css'

const {Content} = Layout;

class PaymentDetails extends Component{

  render() {
    return (

      <div style={{background:'white'}}>

        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"/>
        </Helmet>


        <Header/>

        <div className={"flex-container"}>
          <h3 className={"display-4"} style={{textAlign:'center', fontWeight:'bold', width:'100%', height:'76px', color: '#4B176A'}}>Payment Details</h3>
        </div>

        <div className={styles.flexContainer} style={{marginTop:'60px'}}>
          <div className={styles.flexChild} /*style={{marginLeft: '83px'}}*/>
            <img className={styles.bodyImage} src={BodyImage}/>
          </div>


          <div className={styles.flexChild}  /*style={{marginLeft: '100px'}}*/>
            <br/>
            <h6 style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}>Card Details</h6>
            <br/>
            <br/>

            <div className={"row"}>
              <label>Name Of Card</label>
              <input type="text" id={"name"} className={styles.flex_input} type="text" id={"subject"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>
            <br/>


            <div className={"row"}>
              <label>Card Number</label>
              <input type="text" id={"name"} className={styles.flex_input} type="text" id={"subject"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>
            <br/>


            <div className={"row"}>
              <label>Valid Through</label>
              <input type="text" id={"name"} className={styles.flex_input} type="text" id={"subject"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>

            <br/>


            <div className={"row"}>
              <label>CVV</label>
              <input type="text" id={"name"} className={styles.flex_input} type="text" id={"subject"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>
            <br/>
            <br/>

            <h6 style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}>Choose Type Of Plan</h6>
            <br/>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                $50/Month
              </label>
            </div>
            <br/>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
              <label className="form-check-label" htmlFor="flexCheckChecked">
                $550/Year
              </label>
            </div>



            <br/>
            <br/>
            <br/>
            <div className={styles.otherChild}>
              <button className={"flexbutton"} style={{borderColor: 'currentColor'}} /*style={{width: '85%', height:'86px', fontWeight: 'bold', borderRadius:'20px'}}*/>PAY</button>
            </div>


          </div>

        </div>

        <Footer/>

      </div>

    )
  }

}

export default PaymentDetails
