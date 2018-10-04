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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAge = this.setAge.bind(this);
        this.setWeight = this.setWeight.bind(this);
        this.setHeight = this.setHeight.bind(this);
        this.setGender = this.setGender.bind(this);
        this.setWeightUnits = this.setWeightUnits.bind(this);
        this.setHeightUnits = this.setHeightUnits.bind(this);
    }
    

    handleSubmit(e) {
        e.preventDefault();
    this.setState({newData: true})
   
    
  }

    setAge(e) {
        e.preventDefault();
        this.setState({age:e.target.value})
    }

    setWeight(e) {
        e.preventDefault();
        this.setState({weight: e.target.value})
    }

    setHeight(e) {
        e.preventDefault();
        this.setState({height: e.target.value})
    }

    setGender(e){
        
        this.setState({gender: e.target.value})

    }

    setWeightUnits(e) {
        
        this.setState({units:e.target.value})

    }

    setHeightUnits(e) {
        
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
                                placeholder="175"
                                onChange={event => this.setWeight(event)}/>
                                <div onChange={event => this.setWeightUnits(event)}>
                                    <input 
                                    type="radio" 
                                    name="units" 
                                    value="lbs"/>lbs
                                    <input 
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
                                    <input type="radio" name="gender" value="male" defaultChecked/>male
                                    <input type="radio" name="gender" value="female"/>female
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
                                placeholder="70"
                                onChange={event => this.setHeight(event)}/>
                                <div onChange={event => this.setHeightUnits(event)}>
                                    <input type="radio" name="heightUnits" value="inches"/>inches
                                    <input type="radio" name="heightUnits" value="centimeters"defaultChecked/>cm
                                </div>
                            </label>
                        </div>
                    </div>
                        <div className="form-submit">
                            <input type="submit" value="Calculate!"/>
                        </div>   
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