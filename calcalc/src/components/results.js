import React, { Component } from 'react';

class Results extends Component {
   
    render() {
    const data = this.props.data;
    console.log(data)
    let age= data.age;
    let weight = data.weight;
    let height = data.height;
    let gender = data.gender;
    let units = data.units;
    let heightUnits = data.heightUnits;
    let BMR;

    if (units==="lbs") {
        weight = weight / 2.205;
    }

    if (heightUnits ==="inches") {
        height = height * 2.54;
    }

    if(gender === "male") {
        BMR= ((10*weight) + (6.5*height) - (5*age) +5);
    }else {
        BMR= ((10*weight) + (6.5*height) - (5*age) -161);
    }
        return (
            <div>
                Results
                <p>You Have a BMR of {Math.round(BMR)} calories
                this means that your body burns about {Math.round(BMR)} calories in one day simply by being alive!
                It is rare that someone would rest all day, your activity factor gives you a better estimate of your total 
                calories burned. The chart below shows updated calculations of your total caloires burned based on how active you are. Hover over your 
                amount of daily activity to see updated calculations.
                </p>
                <div className="activitybar"> 
                <div className="activitybox a">
                sedentary: <span>{Math.round(BMR *1.2)}cals </span>
                </div>
                <div className="activitybox b">
                lightly active: <span>{Math.round(BMR*1.375)}cals</span>
                </div>
                <div className="activitybox c">
                moderately active: <span>{Math.round(BMR*1.550)}cals</span>
                </div>
                <div className="activitybox d">
                very active: <span> {Math.round(BMR*1.725)}cals </span>
                </div>
                <div className="activitybox e">
                extra active: <span>{Math.round(BMR*1.9)}cals </span>
                </div>
                 </div>
            </div>
        )
    }
}

export default Results;