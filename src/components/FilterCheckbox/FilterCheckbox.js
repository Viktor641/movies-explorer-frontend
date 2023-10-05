import './FilterCheckbox.css';
import React, { useEffect } from 'react';

function FilterCheckbox(props) {
  const { isChecked, onCheckboxChange } = props;

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    onCheckboxChange(newValue);
    localStorage.setItem('isChecked', newValue.toString());
  };

  useEffect(() => {
    const savedCheckboxState = localStorage.getItem('isChecked');
    if (savedCheckboxState === 'true') {
      onCheckboxChange(true);
    }
  }, [onCheckboxChange]);
  
  return (
    <div className='search__toggle'>
      <label className='search__label' aria-label="Короткометражки">
        <input
          type="checkbox"
          className='search__checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className='search__slider' />
      </label>
      <p className='search__films'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;