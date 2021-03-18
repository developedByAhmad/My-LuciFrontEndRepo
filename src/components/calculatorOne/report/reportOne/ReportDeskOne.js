import React,{useContext} from 'react'
// import './App.css';
import {Grid, makeStyles,Card, CardContent,Typography} from '@material-ui/core';
import ReportDeskTwo from './ReportDeskTwo';
import reportImage from './../../../../assets/report1.png';
import { ContextApi } from "../../../../ContextApi/contextApi";



const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  color: {
     fontFamily:'Roboto',
     color:'#4B176A',
     marginLeft:'5%',
     marginTop:'88px',
  },
}));

export default function ReportDeskOne() {
const classes = useStyles();
const contextType = useContext(ContextApi)
console.log(contextType)
return (
    <Grid container spacing={3} xs={12} md={12} lg={12} sm={12} >
      <Grid className={classes.color} container justify="center" spacing={'3'} item xs={12} md={12} lg={12} style={{marginTop:'30px', padding: "10px"}}>
        <Grid item container direction="row">
        <Grid item md={12} sm={10} xs={12}>
          <span  style={{fontWeight:'bold',fontSize:'34px'}}>
            Long Term Rental Agreement
          </span>
        </Grid>

        <Grid item md={12} xs={12}>
            <span style={{fontSize:'25px',marginBottom: "20px"}}>
                Investment Proposal Analysis
            </span>
        </Grid>

          <Grid item xs={8} style={{marginTop:'51px',fontSize:'18px'}}>
            <span>
                Investor Name :
            </span>
            <span style={{fontSize:'18px',marginLeft:'5px'}}>
                lorem ipsum
            </span>
            <Grid item xs={12} md={12} lg={12}>
            <span>
            Email
            <span style={{marginLeft:'77px'}}>:</span>
            </span>
            <span style={{fontSize:'18px',marginLeft:'5px'}}>
            Lorempsumdolorsit@gmail.com
            </span>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <span>
            Phone
            <span style={{marginLeft:'70px'}}>:</span>
            </span>
            <span style={{fontSize:'18px',marginLeft:'5px'}}>
            6453637388
            </span>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <span>
            Website
            <span style={{marginLeft:'56px'}}>:</span>
            </span>
            <span style={{fontSize:'18px',marginLeft:'5px'}}>
            www.Loremipsum.com
            </span>
            </Grid>
          </Grid>
            <Grid item style={{marginBottom: "16px"}} xs={4}>
              <img src={reportImage} alt="Avatar" />
            </Grid>
          </Grid>
    
            
        </Grid>
        

          <Grid container justify="center" spacing={''} item xs={12} md={12} lg={12} style={{marginTop:'10px',}}    >
           
            <Card variant='outlined' justify="center" style={{width:'90%', boxShadow:'2px 2px 1px #C1C1C1  '}}>
              <CardContent>
                <Grid item xs={12} md={12} lg={12} style={{marginLeft:'5%',fontFamily:'Roboto',color:'#4B176A',}}>
                    <Typography  style={{fontSize:'25px',fontWeight:"700"}}>  Deal Summary : </Typography>
                    <Typography style={{fontSize:'22px',fontWeight:"500"}}> Property Details </Typography>
                    <Grid container xs={12} md={12} lg={12} style={{padding:"5px"}}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', fontWeight:"bold", color: "#000000"}}> Pre -Renovation :  </Typography></Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', color: "#000000", fontWeight:"bold"}}> Post -Renovation :  </Typography></Grid>
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Address:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Rehmanpura, Wahadat Road Lahore
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 10
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds::
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 3 beds
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Baths:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 2.5 baths
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Numbers of Baths:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 2.0 baths
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Property Sq. Ft.:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 2500 sq. ft.
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Lot Size:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 0.50 acres
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> After Repair Value:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $350,000.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Property Sq. Ft.:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 2500 sq. ft.
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Initial Equility:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $122,280.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>


                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Prior Year Taxes:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $6,600.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> Price per Sq. Ft.:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> 140.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>


                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Property Value:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $220,000.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>


                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> Price per Sq. Ft.:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> $ 82.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>
                    
                    <Grid container xs={12} md={12} lg={12} style={{padding:"5px"}}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', fontWeight:"bold", color: "#000000"}}> Rental Income :  </Typography></Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', color: "#000000", fontWeight:"bold"}}> Monthly Expenses:  </Typography></Grid>
                  </Grid>      
                  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Numbers of Units:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 2 Units
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Fixed:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $725.00.
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Average Rent:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $1,850.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Variable:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $888.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        <hr />
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Total Monthly Rent:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $3,700.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> Monthly Expenses:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> $1,631.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Other Income:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> Monthly Income:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> $3,700.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}>
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}>
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>


                </Grid>
                
                </CardContent>
            </Card>
          </Grid>
            <Grid container justify="center" item xs={12} md={12} lg={12} style={{marginTop:'0px',}}    >
           
            <Card variant='outlined' justify="center" style={{width:'90%', boxShadow:'2px 2px 1px #C1C1C1'}}>
              <CardContent>
              <Grid item xs={12} md={12} lg={12} style={{marginLeft:'5%',fontFamily:'Roboto',color:'#4B176A',}}>
                    <Typography style={{fontSize:'22px',fontWeight:"500"}}> Acquiisiton Breakdown </Typography>
                    <Grid container xs={12} md={12} lg={12} style={{padding:"5px"}}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', fontWeight:"bold", color: "#000000"}}> Purchase :  </Typography></Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', color: "#000000", fontWeight:"bold"}}> Renovation :  </Typography></Grid>
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Listing Price:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $220,000.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Total Cost:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $ 227,720.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Offer Price:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $205,000.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> % of Purchase:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 34.54%
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> Price Difference:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> $15,000.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Net Change in Rehab Value:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $74,200.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Price Change:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 6.82%
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> Return on Rehab:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> 104,80%
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{padding:"5px"}}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', fontWeight:"bold", color: "#000000"}}> Financing :  </Typography></Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', color: "#000000", fontWeight:"bold"}}> Cash to Close:  </Typography></Grid>
                    </Grid>      
                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Loan Amount:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> $227,720.00
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid> 
                            

                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Downpayment:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> $48,080.00
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid>
                          {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                      </Grid>  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Interest Rate:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> 5.00%
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid> 
                            

                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Renovation:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> $
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid>
                          <hr />
                          {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                      </Grid>  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Term:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> 30.00 years
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid> 
                            

                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Loan Fees:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> $3,865.80
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid>
                          {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                      </Grid>  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Total Fees:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> $3,865.80
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid> 
                            

                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Earnest Money:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> $ 5,000.00
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid>
                          {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                      </Grid>  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Monthly Payment:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> $1,222.45
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid> 
                            

                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Closing Costs:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> $2,500.00
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid>
                          {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                      </Grid>

                      <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Grace Period:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> No
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid> 
                            

                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Emergency Fund:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> $10,000.00
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid>
                          {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                      </Grid>


                      <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> Interest Only:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#000000",}}> 4 Months
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid> 
                            

                          <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                              <Typography style={{fontSize:'18px', color: "#4B176A",}}> Cash to Close:
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                              <Typography style={{fontSize:'18px', color: "#4B176A",}}> $59,445.80
                              <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                              </Typography>
                            </Grid> 
                          </Grid>
                          {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                      </Grid>

                      <Grid container xs={12} md={12} lg={12} style={{padding:"5px"}}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', color: "#000000", fontWeight:"bold"}}>  1% Rule:  </Typography></Grid>
                      </Grid>

                      <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}} direction="column" jusitify="flex-start">
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 1% of Investment:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $2921.66
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Monthly Income:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $3,700.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> Income - Investment:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> 1.27%
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                       </Grid>

                    </Grid>
                  </CardContent>
              </Card>

            <Card variant='outlined' justify="center" style={{width:'90%', boxShadow:'2px 2px 1px #C1C1C1', marginTop: "30px"}}>
              <CardContent>
              <Grid item xs={12} md={12} lg={12} style={{marginLeft:'5%',fontFamily:'Roboto',color:'#4B176A',}}>
                    <Typography style={{fontSize:'22px',fontWeight:"500"}}> Returns  Summary </Typography>
                    <Grid container xs={12} md={12} lg={12} style={{padding:"5px"}}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', fontWeight:"bold", color: "#000000"}}> First Year Returns :  </Typography></Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>  <Typography style={{fontSize:'20px', color: "#000000", fontWeight:"bold"}}> Cash on Cash Return:  </Typography></Grid>
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Purchase Price:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $205,000.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Cap Rate:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> 6.43%
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Cash to Cloase:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $59,000.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}>NPV (5 Years):
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "red",}}> ($22,795.09)
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Annual Income:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $33,300.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> IRR (5 Years):
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> -4.04%
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Annual Expenses:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $14,517.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Property Value:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $357,000.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> NOI:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> $18,783.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Debt Balance:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $225,498.88
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> Debt Service:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#000000",}}> $13,574.93
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> Equity Held:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> $131,501.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>


                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> NIAF:
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> $5,208.00
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid> 
                          

                        <Grid item container xl={6} lg={6} md={6} sm={6} xs={6} direction="row">
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}> :
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Typography style={{fontSize:'18px', color: "#4B176A",}}>
                            <span style={{marginLeft:'61px'}}> {contextType.form1.propAddress}</span>  
                            </Typography>
                          </Grid> 
                        </Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px', color: "#000000",}}> Number of Beds: 10 <span style={{marginLeft:'71px'}}> {contextType.form3.noOfBeds}  </span>  </Typography></Grid> */}
                    </Grid>
                    </Grid>
                  </CardContent>
              </Card>
              
            </Grid>
      </Grid>
  );
}