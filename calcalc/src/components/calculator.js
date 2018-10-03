import React, { Component } from 'react';

class Calculator extends Component {
    render() {
        return(
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
                                <input type="number" name="age"/> years
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Weight:
                                <br></br>
                                <input type="number" name="weight"/>
                                <input type="radio" name="units" value="lbs"checked/>lbs
                                <input type="radio" name="units" value="kg"/>kg
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Gender:
                                <br></br>
                                <input type="radio" name="gender" value="male"checked/>male
                                <input type="radio" name="gender" value="female"/>female
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Height:
                                <br></br>
                                <input type="number" name="height"/>
                                <input type="radio" name="height-units" value="inches"checked/>inches
                                <input type="radio" name="height-units" value="centimeters"/>cm
                            </label>
                        </div>
                    </div>
                        <div className="form-submit">
                            <input type="submit" value="Calculate!"/>
                        </div>   
                </form>
            </div>
        )
    }
}

export default Calculator;