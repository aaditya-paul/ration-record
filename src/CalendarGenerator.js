import React from "react";

class CalendarGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      calendar: [],
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {year} = this.state;
    const calendar = this.generateCalendar(year);
    this.setState({calendar});
  };

  generateCalendar(year) {
    const months = [
      {name: "January", days: 31},
      {name: "February", days: this.isLeapYear(year) ? 29 : 28},
      {name: "March", days: 31},
      {name: "April", days: 30},
      {name: "May", days: 31},
      {name: "June", days: 30},
      {name: "July", days: 31},
      {name: "August", days: 31},
      {name: "September", days: 30},
      {name: "October", days: 31},
      {name: "November", days: 30},
      {name: "December", days: 31},
    ];

    const calendar = [];

    months.forEach((month) => {
      const firstDay = new Date(year, months.indexOf(month), 1).getDay();
      const days = [];

      // Add empty cells for days before the 1st of the month
      for (let i = 0; i < firstDay; i++) {
        days.push("");
      }

      // Add the days of the month
      for (let day = 1; day <= month.days; day++) {
        days.push(day);
      }

      calendar.push({name: month.name, days});
    });

    return calendar;
  }

  isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  render() {
    const {year, calendar} = this.state;

    return (
      <div>
        <h1>Calendar Generator</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Year:
            <input
              type="number"
              name="year"
              value={year}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Generate Calendar</button>
        </form>
        <br />
        {calendar.length > 0 && (
          <div>
            {calendar.map((month, index) => (
              <div key={index}>
                <h3>{month.name}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Sun</th>
                      <th>Mon</th>
                      <th>Tue</th>
                      <th>Wed</th>
                      <th>Thu</th>
                      <th>Fri</th>
                      <th>Sat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {month.days.map((day, index) => (
                      <td key={index}>{day}</td>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CalendarGenerator;
