const GenderSelect = ({ onGenderChange, selectedGender }) => {
  return (
    <div className="flex p-2">
      <div className="form-control mx-2">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? "selected" : ''}`}>
          <input
            type="radio"
            name="gender"
            className="radio radio-success"
            value="male"
            checked={selectedGender === "male"}
            onChange={() => onGenderChange('male')}
          />
          <span className="label-text text-emerald-900">Male</span>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? "selected" : ''}`}>
          <input
            type="radio"
            name="gender"
            className="radio radio-success"
            value="female"
            checked={selectedGender === "female"}
            onChange={() => onGenderChange('female')}
          />
          <span className="label-text text-emerald-900">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderSelect;
