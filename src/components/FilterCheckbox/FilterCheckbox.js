import './FilterCheckbox.css';
import React, { useState, useEffect } from 'react';

function FilterCheckbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const saveCheckboxState = (value) => {
    localStorage.setItem('isChecked', String(value));
  };

  useEffect(() => {
    const savedCheckboxState = localStorage.getItem('isChecked');
    if (savedCheckboxState === 'true') {
      setIsChecked(true);
    }
  }, []);

  function handleCheckboxChange() {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    saveCheckboxState(newCheckedState);
  
    props.onCheckboxChange(newCheckedState);
  }
  
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