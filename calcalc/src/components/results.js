import React, { Component } from 'react';

class Results extends Component {
    
    render() {
    const data = this.props.props;
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
                <p>You Have a BMR of{Math.round(BMR)} </p>
            </div>
        )
    }
}

export default Results;