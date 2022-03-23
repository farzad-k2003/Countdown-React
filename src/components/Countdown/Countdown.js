import { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const currentDate = new Date();
  const [diffrence, setDiffrence] = useState(0);
  const [targetDate, setTargerDate] = useState(0, 0, 0);
  //
  useEffect(() => {
    const timer = setTimeout(() => {
      setDiffrence(targetDate - currentDate);
    }, 1000);
    return () => clearTimeout(timer);
  }, [diffrence, targetDate]);
  //
  const days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffrence / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diffrence / (1000 * 60)) % 60);
  const sec = Math.floor((diffrence / 1000) % 60);
  //

  return (
    <>
      <input
        type="date"
        onChange={(event) => setTargerDate(new Date(event.target.value))}
      />
      <div className="container">
        <div className="days elmnt">
          <h2>{days > 0 ? days : "0"}</h2>
          <p>Days</p>
        </div>
        <div className="hours elmnt">
          <h2>{hours > 0 ? hours : "0"}</h2>
          <p>Hours</p>
        </div>
        <div className="min elmnt">
          <h2>{min > 0 ? min : "0"}</h2>
          <p>Minutes</p>
        </div>
        <div className="sec elmnt">
          <h2>{sec > 0 ? sec : "0"}</h2>
          <p>Seconds</p>
        </div>
      </div>
    </>
  );
};
export default Countdown;
