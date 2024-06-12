import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      midterm: '',
      final: '',
      assignments: '',
      participation: '',
      attendance: '',
      project: '',
      result: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    if (value === '' || (Number(value) <= 100 && !isNaN(value))) {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = () => {
    const { midterm, final, assignments, participation, attendance, project } = this.state;
    const scores = { midterm, final, assignments, participation, attendance, project };

    for (let key in scores) {
      if (scores[key] === '' || isNaN(scores[key])) {
        alert('Please enter a valid number');
        return;
      }
    }

    const midtermGrade = parseFloat(midterm) * 0.25;
    const finalGrade = parseFloat(final) * 0.35;
    const assignmentsGrade = parseFloat(assignments) * 0.2;
    const participationGrade = parseFloat(participation) * 0.05;
    const attendanceGrade = parseFloat(attendance) * 0.05;
    const projectGrade = parseFloat(project) * 0.1;

    const total = midtermGrade + finalGrade + assignmentsGrade + participationGrade + attendanceGrade + projectGrade;

    this.setState({ result: `Final Score: ${total.toFixed(2)}` });
  };

  render() {
    const { midterm, final, assignments, participation, attendance, project, result } = this.state;
    return (
      <div className="App-calc">
        <div className="input-group">
          <label>Midterm:</label>
          <input
            type="number"
            name="midterm"
            value={midterm}
            onChange={this.handleChange}
            placeholder="Enter your midterm grade"
          />

          <label>Final:</label>
          <input
            type="number"
            name="final"
            value={final}
            onChange={this.handleChange}
            placeholder="Enter your final grade"
          />

          <label>Project or Research Paper:</label>
          <input
            type="number"
            name="project"
            value={project}
            onChange={this.handleChange}
            placeholder="Enter your project/research grade"
          />

          <label>Participation:</label>
          <input
            type="number"
            name="participation"
            value={participation}
            onChange={this.handleChange}
            placeholder="Enter your participation grade"
            />

          2<label>Assignments:</label>
          <input
            type="number"
            name="assignments"
            value={assignments}
            onChange={this.handleChange}
            placeholder="Enter your assignments grade"
          />

          <label>Attendance:</label>
          <input
            type="number"
            name="attendance"
            value={attendance}
            onChange={this.handleChange}
            placeholder="Enter your attendance grade"
          />
        </div>

        <div className="result">
          <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
          <p>{result}</p>
        </div>
      </div>
    );
  }
}

export default App;