const PawsRatingInput = ({ rating, disabled, onChange }) => {

  return (
    <>
    <input
      type="number"
      disabled={disabled}
      value={rating}
      onChange={onChange}
    />
    <div className="rating-input">
        <div className="empty" >
            <i className="fa fa-paw"></i>
        </div>
        <div className="filled" >
            <i className="fa fa-paw"></i>
        </div>
        <div className="filled" >
            <i className="fa fa-paw"></i>
        </div>
        <div className="filled" >
            <i className="fa fa-paw"></i>
        </div>
        <div className="filled" >
            <i className="fa fa-paw"></i>
        </div>
    </div>
    </>
  );
};

export default PawsRatingInput;
