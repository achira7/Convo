//import React from "react";

const GenderSelect = () => {
  return (
    <div className="flex p-2">
      <div className="form-control mx-2">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          
          <input type="radio" name="gender" className="radio radio-success" />
          <span className="label-text">Male</span>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          
          <input type="radio" name="gender" className="radio radio-success" />
          <span className="label-text">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderSelect;
