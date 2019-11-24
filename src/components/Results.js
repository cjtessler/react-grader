import React from "react";

const averageGradeWithoutDrop = grades => {
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


const makeTable = grades => {
  const gradeTable = {
    A: 94,
    "A-": 90,
    "B+": 87,
    B: 84,
    "B-": 80,
    "C+": 77,
    C: 74,
    "C-": 70,
    "D+": 67,
    D: 64,
    "D-": 60
  };

  const tableRows = [];
  const sum = grades.reduce((a, b) => a + b);

  // Drop lowest test (not homework) grade
  const min = Math.min(...grades.slice(0, grades.length - 1));

  // Boolean to stop table generation
  var zeroPosted = false;

  for (const [key, value] of Object.entries(gradeTable)) {
    // Calculate Score on the Final
    const requiredGrade = grades.length * value - (sum - min);
    var gradeForTable = "";

    if (requiredGrade < 0) {
      gradeForTable = 0;
      zeroPosted = true;
    } else {
      gradeForTable = requiredGrade;
    }

    // Create table row
    tableRows.push(
      <tr key={key}>
        <td>{key}</td>
        <td>{gradeForTable}</td>
      </tr>
    );

    // Finish table if looking at negative test scores
    if (zeroPosted) {
      break;
    }
  }

  return tableRows;
};

function Results(props) {
  const { grades } = props;
  const avg = averageGradeWithoutDrop(grades);
  const min = Math.min(...grades.slice(0, grades.length - 1));
  const table = makeTable(grades);

  return (
    <div>
      <p>Average (no drop): {Math.round(avg * 100) / 100}</p>
      <p>Dropped Test Grade: {min}</p>

      <p>
        In order to obtain the <em>Desired Course Grade</em>, you must earn at least the
        specified <em>Score on the Final</em>.
      </p>

      <table className="table">
        <thead>
          <tr>
            <th>Desired Course Grade</th>
            <th>Score on the Final</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>

      <form className="form-group" onSubmit={props.onSubmit}>
        <button className="btn btn-primary">Reset</button>
      </form>
    </div>
  );
}

export default Results;
