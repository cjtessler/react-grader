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
    const { name, value } = event.target;
    const grades = this.state.grades.slice();

    grades[name] = parseInt(value, 10);

    this.setState({
      grades: grades
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  };

  handleReset = event => {
    event.preventDefault()
    this.setState({
      // grades: Array(6).fill(null),
      isSubmitted: false
    });
  };

  render() {
    return (
      <div className="container-fuild is-Responsive">
        <div className="page-header">
          <h4>Explorations in Mathematics Grader</h4>
        </div>

        {!this.state.isSubmitted ? (
          <div className="grade-entry">
              <GradeEntry
                grades={this.state.grades}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
              />
            
          </div>
        ) : (
          <div className="results">
              <Results
                grades={this.state.grades}
                requiredGrade={this.state.requiredGrade}
                onSubmit={this.handleReset}
              />
          </div>
        )}
      </div>
    );
  }
}

App.propTypes = {
  grades: PropTypes.arrayOf(PropTypes.number).isRequired,
  isSubmitted: PropTypes.bool
};

export default App;
