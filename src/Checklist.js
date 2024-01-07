import React, { useState } from 'react';

function Checklist() {
  const items = ['check1', 'check2', 'check3'];
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const toggleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div id='field' key={index}>
          <input
            type='checkbox'
            checked={checkedItems[index]}
            onChange={() => toggleCheck(index)}
          />
          <p style={{ 'display': 'inline' }}>Item {index + 1} {checkedItems[index].toString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Checklist;
