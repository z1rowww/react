import React, { useState } from 'react';

const ControlledForm: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ text, isChecked, selectedOption });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Text:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
      </div>
      <div>
        <label>
          Checkbox:
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        </label>
      </div>
      <div>
        <label>
          Select:
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
