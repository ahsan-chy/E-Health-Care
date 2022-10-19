import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./datetimepick.css"

const DateTimePick = () => {
const [datetime, setDateTime] = useState(new Date());
console.log(datetime)

  return (
    <div>
        <div className="d-flex justify-content-center align-content-center">
              
              <div>    <DateTimePicker
                  onChange={(date) => setDateTime(date)}
                  value={datetime}
                  placeholderText="Please Pick Date"
                  format="y-MM-dd h a"
                  minDate={new Date()}
                  min={new Date ("10/17/2022 10:00 AM")}
                  max={new Date ("10/21/2021 05:00 PM")}
                  hourAriaLabel="Hour"
                  
                /></div>
              </div>
    </div>
  )
}

export default DateTimePick