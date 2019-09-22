import React from "react";
import GradeEntry from "./components/GradeEntry";
import "./App.css";

const averageGrade = grades => {
  // Calculate the average of the inputed grades
  const sum = grades.reduce((a, b) => a + b);
  var count = 0;
  grades.forEach(function(element) {
    if (element) {
      count++;
    }
  });
  return count > 0 ? sum / count : "";
};

function Results(props) {
  const avg = averageGrade(props.grades);
  return (
    <div>
      <p>Current Average: {Math.round(avg * 100) / 100} </p>

      {/* Render if all grade are entered */}
      {/* {props.grades.includes(null) && (
        <p>Score needed on final for an
        <select onChange={props.onChange}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>:
        <span> {props.requiredGrade}</span>
        </p>

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
      )} */}
      <form className="form-group" onSubmit={props.onSubmit} >
        <button className="btn btn-primary">Reset</button>
      </form>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grades: Array(6).fill(null),
      isSubmitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const grades = this.state.grades.slice();

    grades[name - 1] = parseInt(value, 10);

    this.setState({
      grades: grades
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  };

  handleReset = event => {
    this.setState({
      grades: Array(6).fill(null),
      isSubmitted: false
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-header">
          <h3>Eplorations in Mathematics Grader</h3>
        </div>

        <div className="grade-entry">
          {!this.state.isSubmitted && (
            <GradeEntry
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
          )}
        </div>

        <div className="results">
          {this.state.isSubmitted && (
            <Results
              grades={this.state.grades}
              requiredGrade={this.state.requiredGrade}
              onSubmit={this.state.handleReset}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
