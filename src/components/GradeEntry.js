import React from 'react';

function GradeEntry(props) {
    const items = [];
    
    // Create Test boxes
    for (let i = 1; i <= 5; i++) {
      items.push(
        <label key={i}>
          Test {i}: <span> </span>
          <input type="text" onChange={props.onChange} name={i} autoComplete="off" className="form-control"/>
        </label>
      );
    }

    // Create Homework boxes
    items.push(
      <label key={6}>
        Homework: <span> </span>
        <input type="text" onChange={props.onChange} name="6" autoComplete="off" className="form-control" />
      </label>
    );

    // Return the form
    return (
      <div className="form-group col">
        <label>Enter your grades in the form below.</label>
        <form onSubmit={props.onSubmit}>
          {items}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  export default GradeEntry;