import React from 'react';

function FilterCheckboxSavedMovies(props) {
  const { isChecked, onCheckboxChange } = props;

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    onCheckboxChange(newValue);
  };

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

export default FilterCheckboxSavedMovies;