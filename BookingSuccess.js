function BookingSuccess() {
  const data = JSON.parse(localStorage.getItem("bookingData"));
  const bookingId = Math.floor(Math.random() * 900000 + 100000);

  return (
    <div className="center-page">
      <div className="center-card">
        <h2>Booking Successful</h2>
        <div className="booking-id">Booking ID: {bookingId}</div>
        <p className="success-text">Name: {data.name}</p>
        <p className="success-text">Email: {data.email}</p>
        <p className="success-text">Mobile: {data.mobile}</p>
      </div>
    </div>
  );
}

export default BookingSuccess;
