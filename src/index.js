import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Results(props) {
    // Calculate the average of the inputed grades
    const sum = props.grades.reduce((a, b) => a + b);
    var count = 0;
    props.grades.forEach(function (element) {
        if (element) {
            count++;
        }
    });
    const avg = (count > 0) ? sum / count : "";

    // Calculate the score need to obtain a specifc grade
    function handleSelect(event) {

    }

    return (
        <div>
            <p>Current Average: {Math.round(avg * 100) / 100} </p>
            <p>Score needed on final for an
                <select name="letter" onChange={handleSelect}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>:
            </p>
        </div>
    )
}

class GradeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            grades: Array(6).fill(null)
        }

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const grades = this.state.grades.slice();

        grades[name - 1] = value ? parseInt(value, 10) : null;

        this.setState({
            grades: grades
        });
    }

    render() {
        // Generate JSX for grade input
        const items = [];
        for (let i = 1; i <= 5; i++) {
            items.push(
                <label key={i}>
                    Test {i}: <span> </span>
                    <input type="text" onChange={this.handleChange} name={i} />
                </label>
            );
        }
        items.push(
            <label key={6}>
                Homework: <span> </span>
                <input type="text" onChange={this.handleChange} name="6" />
            </label>
        );

        // Return JSX
        return (
            <div className="page">
                <h3>Explorations in Mathematics Grader</h3>
                <p>Enter your grades in the form. </p>
                <div className="form">
                    <form onClick={this.handleSumbit}>
                        {items}
                    </form>
                    <Results grades={this.state.grades} />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <GradeForm />,
    document.getElementById('root')
);