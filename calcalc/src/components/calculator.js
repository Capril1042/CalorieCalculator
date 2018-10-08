import React, { Component } from 'react';
import Results from './results';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
                age: '',
                weight: '',
                units: 'kg',
                gender: 'male',
                height: '',
                heightUnits:'cm',
                newData: false
            
        };
    }
    

    handleSubmit=(e)=> {
        e.preventDefault();
    this.setState({newData: true});

   
    
  }

    setAge=(e)=> {
        e.preventDefault();
        this.setState({age:e.target.value})
    }

    setWeight=(e)=> {
        e.preventDefault();
        this.setState({weight: e.target.value})
    }

    setHeight=(e)=> {
        e.preventDefault();
        this.setState({height: e.target.value})
    }

    setGender=(e)=>{
        
        this.setState({gender: e.target.value})

    }

    setWeightUnits=(e)=> {
        
        this.setState({units:e.target.value})

    }

    setHeightUnits=(e)=> {
        
        this.setState({heightUnits: e.target.value})

    }

    render() {
            console.log(this.state);
        return(
            <div>
            <div className="calculator-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        Daily Caloric Intake Calculator
                    </div>
                    <div className="form-meat">
                        <div className="form-group">
                            <label>
                                Age:
                                <br></br>
                                <input 
                                type="number" 
                                name="age" 
                                value={this.state.age}
                                placeholder="25"
                                onChange={event => this.setAge(event)}/> years
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Weight:
                                <br></br>
                                <input 
                                type="number" 
                                name="weight" 
                                value={this.state.weight}
                                placeholder="385"
                                onChange={event => this.setWeight(event)}/>
                                <div onChange={event => this.setWeightUnits(event)}>
                                    <input className="radioandlabel"
                                    type="radio" 
                                    name="units" 
                                    value="lbs"/>lbs
                                    <input className="radioandlabel"
                                    type="radio" 
                                    name="units" 
                                    value="kg"
                                    defaultChecked/>kg
                                </div>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Gender:
                                <br></br>
                                <div onChange={event => this.setGender(event)}>
                                    <input className="radioandlabel" type="radio" name="gender" value="male" defaultChecked/>male
                                    <input  className="radioandlabel"type="radio" name="gender" value="female"/>female
                                </div>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Height:
                                <br></br>
                                <input 
                                type="number" 
                                name="height" 
                                value={this.state.height}
                                placeholder="177.8"
                                onChange={event => this.setHeight(event)}/>
                                <div onChange={event => this.setHeightUnits(event)}>
                                    <input className="radioandlabel" type="radio" name="heightUnits" value="inches"/>inches
                                    <input className="radioandlabel" type="radio" name="heightUnits" value="centimeters"defaultChecked/>cm
                                </div>
                            </label>
                        </div>
                    </div>
                       {
        this.state.newData === false ?
           
                        <div className="form-submit">
                            <input type="submit" value="Calculate!"/>
                        </div>   
            :<div> change the inputs above for continous calculations</div>
    }
                </form>
            </div>
    {
        this.state.newData === true ?
            < Results data={this.state}/>
            :null
    }
            </div>
        )
    }
}

export default Calculator;