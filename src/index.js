import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const averageGrade = (grades) => {
    // Calculate the average of the inputed grades
    const sum = grades.reduce((a, b) => a + b);
    var count = 0;
    grades.forEach(function (element) {
        if (element) {
            count++;
        }
    });
    return ((count > 0) ? sum / count : "");
}

function GradeEntry(props) {
    // Generate JSX for grade input
    const items = [];
    for (let i = 1; i <= 5; i++) {
        items.push(
            <label key={i}>
                Test {i}: <span> </span>
                <input type="text" onChange={props.onChange} name={i} />
            </label>
        );
    }
    items.push(
        <label key={6}>
            Homework: <span> </span>
            <input type="text" onChange={props.onChange} name="6" />
        </label>
    );

    return (
        <div className="form">
            <form>
                {items}
            </form>
        </div>
    )
}


function Results(props) {

    const avg = averageGrade(props.grades)

    return (
        <div>
            <p>Current Average: {Math.round(avg * 100) / 100} </p>

            {/* Render if all grade are entered */}
            {
                props.grades.includes(null) &&
                // <p>Score needed on final for an
                // <select onChange={props.onChange}>
                //         <option value="A">A</option>
                //         <option value="B">B</option>
                //         <option value="C">C</option>
                //         <option value="D">D</option>
                //     </select>:
                // <span> {props.requiredGrade}</span>
                // </p>

                <table>
                    <tr>
                        <th>Desired Score</th>
                        <th>Score on Final</th>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td></td>
                    </tr>
                </table>
            }
        </div>
    )
}


class GradeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            grades: Array(6).fill(null),
            requiredGrade: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    };

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const grades = this.state.grades.slice();

        grades[name - 1] = value ? parseInt(value, 10) : null;

        this.setState({
            grades: grades
        });

    }

    handleSelectChange = (event) => {
        const gradeMap = {
            "A": 94,
            "B": 84,
            "C": 74,
            "D": 64
        };

        // Pulls the desired letter grade from event
        const value = event.target.value;

        this.setState({
            requiredGrade: gradeMap[value]
        });

    }

    render() {
        return (
            <div className="page">
                <h3>Explorations in Mathematics Grader</h3>
                <p>Enter your grades in the form. </p>
                <GradeEntry onChange={this.handleChange} />
                <Results onChange={this.handleSelectChange} grades={this.state.grades} requiredGrade={this.state.requiredGrade} />
            </div>
        );
    }
}


ReactDOM.render(
    <GradeForm />,
    document.getElementById('root')
);