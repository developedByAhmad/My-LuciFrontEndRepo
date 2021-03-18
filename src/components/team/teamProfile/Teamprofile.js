import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import {Table} from 'react-bootstrap';
import styles from './teamprofile.module.css';
import HeaderTwo from './../../header2/HeaderTwo';
import Footer from './../../footer/Footer';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {FontIcon} from "@material-ui/core"
import './teamprofile.css'
import { Grid } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        root: {
              textAlign: "right",
              "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#4B176A"
              }
          },
        // Name of the rule
        text: {
          // Some CSS
          color: "#4B176A",
          backgroundColor: "#ffffff",
          textTransform: 'none',
          fontSize: "16px",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "5px" 
        },
      },
    },
  });

  
// const headersOne = ["Property","Strategy", "Price", "PRole", "actRole", "action"]
const Teamprofile = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    // const employeeProperty = [
    //     {property: "Property 01", strategy: "Buy and Sold", price: 400, proRole: 15, actRole : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    //     {property: "Property 04", strategy: "Buy and Sold", price: 100, proRole: 9, actRole : 11, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    //     {property: "Property 10", strategy: "Buy and Sold", price: 150, proRole: 11, actRole : 14, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    //     {property: "Property 03", strategy: "Buy and Sold", price: 350, proRole: 12, actRole : 19, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    //     {property: "Property 02", strategy: "Buy and Sold", price: 240, proRole: 10, actRole : 7, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    //     {property: "Property 011", strategy: "Buy and Sold", price: 374, proRole: 14, actRole : 11, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>}
    // ]

    const underContract = [
        {property: "Property 01", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400, action: [<Link to="/property">  <button className={styles.specialButton} style={{marginRight: "8px"}}> LTR </button></Link>, <Link to="/propertytwo">  <button className={styles.specialButton}> F&F </button></Link>]},
        {property: "Property 02", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 022", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 11", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 05", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 07", submitted: "Vender 1", accepted: "Vendor 1", proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>}

    ]

    const submittedOffer = [
        {property: "Property 01", submitted: "Vender 1",  proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 02", submitted: "Vender 1", proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 022", submitted: "Vender 1",  proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 11", submitted: "Vender 1",  proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 05", submitted: "Vender 1",  proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {property: "Property 07", submitted: "Vender 1",  proRole: 400, status: 400, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},

    ]

    // const renderEmployee = (employeeProperty, index) =>{
    //     return(
    //         <Tr key={index}>
    //             <Td>{employeeProperty.property}</Td>
    //             <Td>{employeeProperty.strategy}</Td>
    //             <Td>{employeeProperty.price}</Td>
    //             <Td>{employeeProperty.proRole}</Td>
    //             <Td>{employeeProperty.actRole}</Td>
    //             <Td>{employeeProperty.action}</Td>
    //         </Tr>
    //     )
    // }

    const renderUnderContract = (underContract, index) =>{
        return(
            <Tr key={index}>
                <Td>{underContract.property}</Td>
                <Td>{underContract.submitted}</Td>
                <Td>{underContract.accepted}</Td>
                <Td>{underContract.proRole}</Td>
                <Td>{underContract.status}</Td>
                <Td style={{display: "flex"}}>{underContract.action}</Td>
            </Tr>
        )
    }


    const renderSubmitOffer = (submittedOffer, index) =>{
        return(
            <Tr key={index}>
                <Td>{submittedOffer.property} </Td>
                <Td>{submittedOffer.submitted}</Td>
                <Td>{submittedOffer.proRole}  </Td>
                <Td>{submittedOffer.status}   </Td>
                <Td>{submittedOffer.action}   </Td>
            </Tr>
        )
    }


    return (
        <>
        <HeaderTwo />
        <Grid style={{backgroundColor:"#FFFFFF", paddingBottom:"40px"}} xl={12} lg={12} md={12} sm={12} xs={12} spacing={3}  alignItems="center" container direction="column">
            <Grid item container xl={11} lg={11}  direction="row" spacing={2} >
                {/* <Grid item xs={8} style={{paddingRight: "100px"}}> 
                    <h1 className={styles.heading} > Active Portfolio </h1>
                </Grid> */}
                {/* <Grid item className={styles.heading} xs={4}> 
                   
                    <ThemeProvider theme={theme}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            New Analysis
                        </Button>
                        <Menu   
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}><Link to="/property">LTR</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/propertytwo">F&F</Link></MenuItem>
                        </Menu>
                    </ThemeProvider>
                        
                </Grid> */}

                {/* <Grid item>
                    <Table hover style={{borderRadius:"15px"}} >
                            <Thead  className={styles.tableH1}>
                                <Tr>
                                    <Th>Property</Th>
                                    <Th>Strategy</Th>
                                    <Th>Purchase Date</Th>
                                    <Th>Holding Period</Th>
                                    <Th>Purchase Price</Th>
                                    <Th>Initial NOI</Th>
                                    <Th>Initial NIAF</Th>
                                    <Th>Cash on Cash Return</Th>
                                    <Th>ROI</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody style={{backgroundColor:"white"}}>
                                {employeeProperty.map(renderEmployee)}
                            </Tbody>
                        </Table>
                </Grid> */}
            </Grid>

            <Grid item> 
                <h1 className={styles.heading} style={{marginTop:"30px"}}> In The Pipeline </h1>
            </Grid>

            <Grid item container xl={11} lg={11}   direction="row" spacing={1} alignItems="space-around" justify="flex-start">
                <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Grid item><caption className={styles.caption} style={{captionSide:"top"}}>Under Contract</caption>
                                <Table hover style={{borderRadius:"15px"}}> 
                                
                                    <Thead>
                                        <Tr className={styles.tableH1}>
                                            <Th>Property</Th>
                                            <Th>Staretgy </Th>
                                            <Th>Closing Date</Th>
                                            <Th>Due Dilligence Period</Th>
                                            <Th>Closing Price</Th>
                                            <Th>Renovation Estimate</Th>
                                            <Th>Cash to Close</Th>
                                            <Th>Modeled Cash on Cash Return</Th>
                                            <Th>Modeled ROI</Th>
                                            <Th>Action</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody style={{backgroundColor:"white"}}>
                                        {underContract.map(renderUnderContract)}
                                    </Tbody>
                                </Table>    
                    </Grid>
                </Grid>

                <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Grid item>
                    <caption className={styles.caption} style={{captionSide:"top"}}>Submitted Offers</caption>
                    <Table hover style={{borderRadius:"15px"}}>
                                <Thead>
                                        <Tr className={styles.tableH1}>
                                            <Th>Property</Th>
                                            <Th>Strategy</Th>
                                            <Th>Listed Price</Th>
                                            <Th>Offer Price</Th>
                                            <Th>Renovation Estimate</Th>
                                            <Th>Cash to Close</Th>
                                            <Th>Modeled NOI</Th>
                                            <Th>Modeled Cash on Cash Return</Th>
                                            <Th>Modeled ROI</Th>
                                            <Th>Action</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody style={{backgroundColor:"white", paddingRight: "10px"}}>
                                        {submittedOffer.map(renderSubmitOffer)}
                                    </Tbody>
                                </Table>
                    </Grid>
                </Grid>


             
            </Grid>


            
            <Grid item><h1 className={styles.heading} style={{marginTop:"30px"}}> Analyzed Properties </h1></Grid>


            <Grid item container xl={11} lg={11}  direction="row" spacing={2} alignItems="space-around" justify="center" style={{backgroundColor:"#FFFFFF",borderRadius:"10px"}}>
                <Grid item contianer xl={11} lg={11} md={10} sm={11} xs={11}>
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Generate Additional Graphs </label><br></br> 
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Generate Amortization Schedule </label>
                    <br></br>
                </Grid>
                <Grid item contianer xl={6} lg={6} md={10} sm={11} xs={11}>
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Generate Full Proforma </label><br></br> 
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Attach Loaded Images </label> 
                </Grid>

                <Grid xl={10} lg={12} md={10} sm={11} xs={11} spacing={2} item container direction="row" justify="flez-start" >
                    <Grid item  xl={5} lg={5} >
                        <button className="reportBtn"> Generate Report </button>
                    </Grid>

                    <Grid item container xl={10} lg={10}>
                        <h3 className="progressTxt"> Progress(70%) </h3>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                70%
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </Grid>


        </Grid>
        <Footer />
        </>






        // <div>
        // <HeaderTwo />

        //     <div className="container-fluid" style={{backgroundColor:"#E5E5E5"}}>
        //         <div className="row"  className={styles.firstHeading}>
        //             <h1 className={styles.heading} > Active Portfolio </h1>
        //             <h1 className={styles.heading} > New Analysis </h1>
        //         </div>

        //         <div className="wrapper">
        //             <div className="row" style={{margin:"20px 15px"}}>

        //                 <Table hover style={{borderRadius:"15px"}} >
        //                     <Thead  className={styles.tableH1}>
        //                         <Tr>
        //                             <Th>Property</Th>
        //                             <Th>Strategy</Th>
        //                             <Th>Price</Th>
        //                             <Th>Pro Role</Th>
        //                             <Th>Act Role</Th>
        //                             <Th>Action</Th>
        //                         </Tr>
        //                     </Thead>
        //                     <Tbody style={{backgroundColor:"white"}}>
        //                         {employeeProperty.map(renderEmployee)}
        //                     </Tbody>
        //                 </Table>
        //             </div>
        //         </div>



        //         <h1 className={styles.heading}> In The Pipeline </h1>
        //         <div className="wrapper3" style={{backgroundColor:"#E5E5E5"}}>
        //             <div className="row" style={{margin:"10px 10px"}}>
        //                 <div className="wrapper2 col-sm-5 col-md-5 col-lg-6" style={{margin:"20px 0px 25px 5px"}}>
        //                         <Table hover>
        //                         <caption style={{captionSide:"top"}}>Under Contract</caption>
        //                             <Thead>
        //                                 <Tr className={styles.tableH1}>
        //                                     <Th>Property</Th>
        //                                     <Th>Submitted</Th>
        //                                     <Th>Accepted</Th>
        //                                     <Th>Pro Role</Th>
        //                                     <Th>Status</Th>
        //                                 </Tr>
        //                             </Thead>
        //                             <Tbody style={{backgroundColor:"white"}}>
        //                                 {underContract.map(renderUnderContract)}
        //                             </Tbody>
        //                         </Table>
        //                 </div>

        //                 <div className="wrapper2 col-sm-5 col-md-4 col-lg-4" id="mobiletbl">
        //                         <Table hover>
        //                         <caption style={{captionSide:"top"}}>Submitted Offers</caption>
        //                             <Thead>
        //                                 <Tr className={styles.tableH1}>
        //                                     <Th>Property</Th>
        //                                     <Th>Submitted</Th>
        //                                     <Th>Pro Role</Th>
        //                                     <Th>Status</Th>
        //                                 </Tr>
        //                             </Thead>
        //                             <Tbody style={{backgroundColor:"white"}}>
        //                                 {submittedOffer.map(renderSubmitOffer)}
        //                             </Tbody>
        //                         </Table>
        //                 </div>
        //             </div>


        //             {/* <div className="row col-5"> */}
           
        //             </div>                    
        //         {/* </div> */}

        
        //         <div className="wrapper3" style={{margin:"30px 130px", margin:"auto"}}>
        //             <div className="row" style={{backgroundColor:"#FFFFFF"}}>
        //                 <h1 className={styles.heading}> Analyzed Properties </h1>
        //                 <div className="col-6" style={{textAlign:"left",  padding:"20px 40px"}}>
        //                     {/* <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /> */}
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Generate Additional Graphs </label><br></br> 
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Generate Amortization Schedule </label>
        //                     <br></br> 
        //                     <button className="reportBtn"> Generate Report </button>
        //                 </div>

        //                 <div className="col-6" style={{textAlign:"left", padding:"20px 60px"}}>
        //                     {/* <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /> */}
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Generate Full Proforma </label><br></br> 
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Attach Loaded Images </label> 
        //                 </div>

        //                 <h3 className="progressTxt"> Progress(70%) </h3>
        //                 <div className="progress">
        //                     <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
        //                     70%
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // <Footer />
        // </div>
        
    )
}

export default Teamprofile
