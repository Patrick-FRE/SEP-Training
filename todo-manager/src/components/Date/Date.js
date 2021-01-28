import React from "react";
import dayjs from "dayjs";
// var weekday = require("dayjs/plugin/weekday");
// dayjs.extend(weekday);

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
  }

  componentDidMount() {
    const date = dayjs().format("MM/DD/YYYY");
    this.setState({
      date: date,
    });
    console.log(date);
  }

  render() {
    return (
      <div className="date">
        <p>{this.state.date}</p>
      </div>
    );
  }
}

export default Date;
