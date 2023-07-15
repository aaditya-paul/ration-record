import React, {Component} from "react";
import CalendarUI from "./calendarUI";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      year: 0,
      month: "",
      calendar: [],
    };
  }

  render() {
    return (
      <div>
        <div className="flex items-center p-5 border-b-2 border-slate-950 m-5">
          <h1 className="text-3xl p-2 ">Year : </h1>
          <div className="">
            <input
              onChange={(evt) => {
                this.setState({year: evt.target.value});
              }}
              className="w-32 p-3 border-2 text-xl border-black rounded-xl"
              type="number"
            />
          </div>
          {/*  */}
          <h1 className="text-3xl p-2 ">Month : </h1>
          <div className="">
            <select
              className="w-38 p-3 border-2 text-xl border-black rounded-xl"
              onChange={(e) => {
                this.setState({month: e.target.value});
              }}
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
        </div>
        <div className="p-5">
          {this.state.year > 0 && this.state.month !== "" ? (
            <CalendarUI
              year={this.state.year}
              month={this.state.month}
              calendar={this.state.calendar}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
