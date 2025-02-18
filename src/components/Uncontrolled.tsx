import React, { useRef } from 'react';

const UncontrolledForm: React.FC = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      text: textRef.current?.value,
      isChecked: checkboxRef.current?.checked,
      selectedOption: selectRef.current?.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Text:
          <input type="text" ref={textRef} />
        </label>
      </div>
      <div>
        <label>
          Checkbox:
          <input type="checkbox" ref={checkboxRef} />
        </label>
      </div>
      <div>
        <label>
          Select:
          <select ref={selectRef}>
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

export default UncontrolledForm;
