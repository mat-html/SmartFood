function Reserve() {
  return (
   <form>
    <div className="form-group mb-2">
      <label htmlFor="firstOption">Date</label>
      <input
    type="date"
    id="firstOption"
    name="firstOption"
    className="form-control"
  />
    </div>

    <div className="form-group mb-2">
  <label htmlFor="secondOption">Time:</label>
  <input
    type="time"
    id="secondOption"
    name="secondOption"
    className="form-control"
  />
</div>


    <div className="form-group mb-2">
      <label htmlFor="thirdOption">People</label>
      <select
        id="thirdOption"
        name="thirdOption"
        className="form-control"
       
      >
        <option value="">Select an option</option>
        <option value="option1">1 people</option>
        <option value="option2">2 people</option>
        <option value="option3">3 people</option>
        <option value="option4">4 people</option>
        <option value="option5">5 people</option>
        <option value="option6">6 people</option>
        <option value="option7">7 people</option>
        <option value="option8">8 people</option>
        <option value="option9">9 people</option>
        <option value="option10">10 people</option>
        <option value="option11">11 people</option>
        <option value="option12">12 people</option>
        <option value="option13">13 people</option>
      </select>
    </div>
  </form>
  );
}

export default Reserve;
