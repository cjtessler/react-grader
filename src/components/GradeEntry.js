import React from "react";

function GradeEntry(props) {
  const titles = ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5", "Homework"];
  const items = []

  // Create  boxes
  for (var i = 0; i< titles.length; i++) {
    items.push(
      <label key={i}>
      {titles[i]}:
      <input
        type="number"
        onChange={props.onChange}
        name={i}
        autoComplete="off"
        className="form-control"
        // required
        min="0"
        max="100"
        defaultValue="80"
      />
    </label>
    )
  }

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
