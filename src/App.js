import React from "react";
import PropTypes from "prop-types";

import GradeEntry from "./components/GradeEntry";
import Results from "./components/Results";

import "./App.css";

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
    const {name, value } = event.target;
    const grades = this.state.grades.slice();

    grades[name] = parseInt(value, 10);

    this.setState({
      grades: grades
    });
  };

  handleSubmit = () => {
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
      <div className="container-fuild is-Responsive">
        <div className="page-header">
          <h4>Eplorations in Mathematics Grader</h4>
        </div>

        {/* Grade Entry */}
        <div className="grade-entry">
          {!this.state.isSubmitted && (
            <GradeEntry
              grades={this.state.grades}
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
