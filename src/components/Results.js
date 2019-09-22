import React from 'react';


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

  export default Results;