import React from "react";
import PropTypes from "prop-types";

import GradeEntry from "./components/GradeEntry";
import Results from "./components/Results";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grades: Array(6).fill(80),
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
  };

  render() {
    return (
      <div className="container-fuild">
        <div className="page-header">
          <h3>Eplorations in Mathematics Grader</h3>
        </div>

        {/* Grade Entry */}
        <div className="grade-entry">
          {!this.state.isSubmitted && (
            <GradeEntry
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
          )}
        </div>

        {/* Results */}
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

App.propTypes = {
  grades: PropTypes.arrayOf(PropTypes.number).isRequired,
  isSubmitted: PropTypes.bool
};

export default App;
