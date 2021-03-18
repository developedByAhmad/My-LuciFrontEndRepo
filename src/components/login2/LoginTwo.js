import React, { Component } from 'react'
import { Link,Redirect,withRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Header from '../header2/Header';
import Footer from '../footer/Footer';
import styles from "./loginTwo.module.css"
import { Form } from "react-bootstrap"
import { BsBoxArrowInRight } from 'react-icons/bs';
import axiosInstance from "../../axios-Instance";
import { Components } from 'antd/lib/date-picker/generatePicker'

class LoginTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedIn: false,
      loginMessage: "",
      username_error_text: null,
      password_error_text: null,
      disabled: true,
      loginID: null,
      Loginalert: null,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.value)
  };
  handleSubmit = (e) => {
    // e.preventDefault();
    this.setState({ Loginalert: null });
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);

    axiosInstance
      .post("/authentication/login", user)
      .then((res) => {
        const token = res.data.token;
        // let msg = res.data.message;
        // let loginID = res.data.id;
        // console.log("login Id :", res.data.id);
        // setAuthToken(token);
        localStorage.setItem("loginToken", token);
        // localStorage.setItem("loginId", loginID);
        // let message = res.data.message;
        // console.log(message);
        // alert("Logged in SuccessFully");
        // this.setState({
        //   Loginalert: {
        //     variant: "success",
        //     message: "Log In SuccessFully",
        //   },
        // });
        this.setState({
          email: "",
          password: "",
          loggedIn: true,
          // loginMessage: msg,
          // loginID: loginID,
        });
        // return <Redirect to="/property"/>
        this.props.history.push("/property");
        // console.log(this.props);
        // window.location.href="/property";

        
        // <Redirect to='/User'/>
      })
      .catch((err) => {
        // this.setState({
        //   loginMessage: err.response.data.message,
        // });
        // this.setState({
        //   Loginalert: {
        //     variant: "danger",
        //     message: err.response.data.message,
        //   },
        // });
        // this.setState({
        //   Loginalert: { variant: "danger", message: "Not Signup " },
        // });
         console.log(err);
      });
  };
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    const otherWay = { position: "fixed" }
    return(
      <div className={styles.home} style={{ backgroundColor: "#E5E5E5" }}>
        <Header />
        <Grid xl={12} container direction="column" alignItems="center" justify="center">
          <Grid xl={10} container direction="row"  justify="center" className={styles.mainLogin}>

            <Grid item xs={10} sm={8} md={8} lg={6} xl={6} style={{ height: '86%', minWidth: "29%", backgroundColor: "#FFFFFF", margin: "20px 0px" }} container className={styles.newlogin}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container direction="column" alignItems="center" justify="flex-start">
                <Grid item style={{marginTop: "15px"}}>
                  <h1 className={styles.newheading}> Luci </h1>
                </Grid>
                <Grid item style={{marginTop: "10px"}}>
                  <p className={styles.newtext}> An interactive real estate investing assistant</p>
                </Grid>

                <Grid item container direction="column" alignItems="center" justify="flex-start" style={{marginTop: "5px"}}>
                  <Form>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Form.Group>
                        <Form.Control title="email" className={styles.newinput} id={styles.userIcon} type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"></Form.Control>
                      </Form.Group>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Form.Group>
                        <Form.Control className={styles.newinput} id={styles.passIcon} type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                      </Form.Group>
                    </Grid>


                    <Grid item container xs={12} spacing={2} m={2} direction="column" alignItems="center" justify="flex-start" style={{marginTop: "25px"}}>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Link to="/signup">
                          <button className={styles.newbutton} style={{ background: "#fff", color: "#4B176A", border: "1px solid #4B176A" }}>
                            <BsBoxArrowInRight style={{ marginRight: "5px" }} />
                      Sign Up
                    </button>
                        </Link>
                      </Grid>

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <Link to="/login">
                          <button className={styles.newbutton} onClick={(event) => this.handleSubmit(event)}>
                            <i class="fas fa-paper-plane" style={{ marginRight: "5px" }}></i>
                      Login
                    </button>
                        </Link>
                      </Grid>
                    </Grid>


                  </Form>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}
export default withRouter(LoginTwo);



















// import React from 'react';
// import styles from "./signupTwo.module.css"
// import luciImage from './../../../../src/assets/LuciLogin.png';
// // import signImg from '/../../../../src/assets/log-in.png'
// // import loginImg from '/../../../../src/assets/Group 10.png'
// // import bgImage from '/../../../../src/assets/background.jpeg';
// import Header from './../../header2/Header';
// import Footer from './../../footer/Footer';
// import { BsBoxArrowInRight } from 'react-icons/bs'

// const SignupTwo = props => (
//     <LoginForm />
// );

// class LoginForm extends React.Component{
//   render(){
//     return(
//     <div className={styles.home}>
//         {/* <Header /> */}
//         {/* <img src={bgImage} alt="Background Image" /> */}
//          <div >
//             <FormHeader/>
//             <Form /> 
//             {/* <OtherMethods /> */}
//         </div>
//         {/* <Footer /> */}
//     </div>
//     )
//   }
// }

// const FormHeader = props => (
//     <h2 id={styles.headerTitle}>{props.title}
//     <img src={luciImage} alt="Avatar" />
//     <p> An interactive real estate investing assistant</p>
//     </h2>
// );


// const Form = props => (

//    <div>
//      <FormInput   placeholder="First Name" type="text" />
//      <FormInput   placeholder="Last Name" type="text" />
//      <FormInput   placeholder="Address" type="text"/>
//      <FormInput   placeholder="Town/City" type="text" />
//      <FormInput   placeholder="State" type="text"/>
//      <FormInput   placeholder="Zip Code" type="number" />
//      <FormInput   placeholder="Instant Strategy" type="text" style={{marginBottom:"20px"}}/>
//      <FormButton  title="Sign up"> < BsBoxArrowInRight />  </FormButton>  
//      <FormButton  title="Login"> <i class="fas fa-paper-plane"></i> </FormButton>
//    </div>

// );

// const FormButton = props => (
//   <div id={styles.button} className={styles.row}>
//     <button style={{marginLeft:"28px"}}>{props.children} {props.title}</button>
//   </div>
// );

// const FormInput = props => (
//   <div className={styles.row}>
//     <label>{props.description}</label>
//     <input id={props.id} type={props.type} placeholder={props.placeholder}/>
//   </div>  
// );

// const OtherMethods = props => (
//   <div id={styles.alternativeLogin}>
//     <label>Or sign in with:</label>
//     <div id={styles.iconGroup}>
//       {/* <Facebook />
//       <Twitter />
//       <Google /> */}
//     </div>
//   </div>
// );

// // const Facebook = props => (
// //   <a href="#" id="facebookIcon"></a>
// // );

// // const Twitter = props => (
// //   <a href="#" id="twitterIcon"></a>
// // );

// // const Google = props => (
// //   <a href="#" id="googleIcon"></a>
// // );

// export default SignupTwo;
