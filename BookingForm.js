import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BookingForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", mobile: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("bookingData", JSON.stringify(data));
    navigate("/success");
  };

  return (
    <div className="center-page">
      <div className="center-card">
        <h2>Book Your Seat</h2>
        <form className="form" onSubmit={submitHandler}>
          <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} required />
          <input type="email" placeholder="Email" onChange={e => setData({...data, email: e.target.value})} required />
          <input placeholder="Mobile" onChange={e => setData({...data, mobile: e.target.value})} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
