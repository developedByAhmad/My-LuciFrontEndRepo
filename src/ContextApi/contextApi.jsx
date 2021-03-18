import React from "react";

export const ContextApi = React.createContext();

class ContextApiProvider extends React.Component{

    state={
        form1:{},
        form2:{},
        form3:{},
        Finance:{},
        Income:{},
        FixedExpense:{},
        VariableExpense:{},
        Assumptions:{},
        Report:{}
    }

    changeMethod = (e) =>{
        this.setState({
            propAddres:e.target.value
        })
    }
    handleChange = (event, flag) => {
        const {name, value} = event.target
        // this.setState({ [event.target.name]: event.target.value });
        // console.log("Context Api handle Change", event.target.value)
        this.setState(prevState=> {
            console.log(prevState)
            return {
                [flag]:{
                    ...prevState[flag],
                    [name]:value
                }
            }
        })
        console.log(this.state)
    }

    render(){
        return <ContextApi.Provider value={{
            ...this.state,
            changeMethod: this.changeMethod,
            handleChange: this.handleChange

        }}>{this.props.children}</ContextApi.Provider> 
    }
}
export default ContextApiProvider;