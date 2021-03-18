import React, { setState, useContext } from 'react'
import styles from './propertycontent.module.css'
import "./propertycontent.css"
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import { Form, Col } from 'react-bootstrap';
import { FormGroup, Grid } from "@material-ui/core";
import Purchase from '../purchase/Purchase'
import { ContextApi } from "../../../ContextApi/contextApi";
import NumberFormat from "react-number-format";


class PropertyContent extends React.Component {
    static contextType = ContextApi;
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            propAddress: "",
            priorYearTax: "",
            noOfBeds: "",
            noOfBaths: "",
            lotSize: "",
            sqFt: "",
            city: "",
            zip: "",
            state: ""
        };

        this.onImageChange = this.onImageChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(event.target.value);
    };
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };
    static contextType = ContextApi;
    componentDidMount() {
        this.context.PropAddress = this.state.propAddress
    }
    render() {
        const otherWay = { height: "118%" }
        // console.log(this.props);
        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around" alignItems="stretch" style={{backgroundColor:"#FFFFFF"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column" justify="space-around" alignItems="center" style={{ backgroundColor: "#ffffff" }}>

                    <Grid item container xl={11} lg={11} md={10} sm={12} xs={12} direction="row" justify="flex-start" style={{ backgroundColor: "#ffffff" }}>
                        <SidebarContext>
                            <Grid item xl={3} lg={3} md={3} sm={0} xs={0} >
                                <SidebarComponent style={otherWay} />
                            </Grid>

                            <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height: "120vh"}}>
                                <Form className={styles.margins}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridPropertyAddress">
                                            <Form.Label>Property Address</Form.Label>
                                            <Form.Control name="propAddress" className={styles.innput} type="text" value={this.context.form1.propAddress}
                                                onChange={(e) => this.context.handleChange(e, 'form1')} />

                                            <Form.Label> City </Form.Label>
                                            <Form.Control name="city" className={styles.innput} type="text" value={this.context.form1.city}
                                                onChange={(e) => this.context.handleChange(e, 'form1')} />

                                            <Form.Label> Zip </Form.Label>
                                            <Form.Control name="zip" className={styles.innput} type="text" value={this.context.form1.zip}
                                                onChange={(e) => this.context.handleChange(e, 'form1')} />

                                            <Form.Label> Number of Beds</Form.Label>
                                            <Form.Control name="noOfBeds" className={styles.innput} type="text" value={this.context.form1.noOfBeds}
                                                onChange={(e) => this.context.handleChange(e, 'form1')} />

                                            <Form.Label>Lot -size</Form.Label>
                                            <Form.Control name="lotSize" className={styles.innput} type="text" value={this.context.form1.lotSize}
                                                onChange={(e) => this.context.handleChange(e, 'form1')} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridCity">
                                            <FormGroup>
                                                <Form.Label>Prior Year Taxes USD</Form.Label>
                                                <NumberFormat  
                                                customInput={Form.Control} 
                                                thousandSeparator={true} 
                                                prefix={'$'} suffix={".00"} 
                                                displayType={'number'}  name="priorYearTax" className={styles.innput} type="text" value={this.context.form1.priorYearTax}
                                                    onChange={(e) => this.context.handleChange(e, 'form1')} />

                                                <Form.Label> State </Form.Label>
                                                <Form.Control name="state" className={styles.innput} type="text" value={this.context.form1.state}
                                                    onChange={(e) => this.context.handleChange(e, 'form1')} />


                                                <Form.Label>Property Sq. ft</Form.Label>
                                                {/* <Form.Control className={styles.innput} type="text" value={this.state.sqFt}
                                                    onChange={(e) => this.setState({ sqFt: e.target.value })} /> */}
                                                <Form.Control name="sqFt" className={styles.innput} type="text" value={this.context.form1.sqFt}
                                                    onChange={(e) => this.context.handleChange(e, 'form1')} />

                                                <Form.Label>Number of Baths</Form.Label>
                                                <Form.Control name="noOfBaths" className={styles.innput} type="text" value={this.context.form1.noOfBaths}
                                                    onChange={(e) => this.context.handleChange(e, 'form1')} />
                                            </FormGroup>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>

                                <Grid item container justify="flex-start" direction="row" xl={11} lg={11} md={11} sm={12} xs={12} className={styles.imageDivMain}>
                                    <Grid item xs={12}>
                                        {/* <button className={styles.bn}> Upload Image(s)</button> */}
                                        <input
                                            style={{ display: "none" }}
                                            type="file"
                                            name="myImage"
                                            onChange={(e) => this.context.handleChange(e, 'form1')}
                                            ref={fileInput => this.fileInput = fileInput} />
                                        <button onClick={() => this.fileInput.click()} className={styles.bn}>
                                            {/* <input type="file" />  */}
                                        Upload Image(s) </button>

                                    </Grid>

                                    <Grid item className={styles.imageDiv} xs={12}>
                                        <img src={this.state.image} />
                                    </Grid>

                                </Grid>
                            </Grid>
                        </SidebarContext>
                    </Grid>
                </Grid>
                <Grid item xl={12}>
                    <Footer />
                </Grid>
            </Grid>
        )
    }
}

export default PropertyContent;
