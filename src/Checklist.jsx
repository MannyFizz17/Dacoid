import React, { useState } from "react";

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1", checked: false },
    { id: 2, text: "Item 2", checked: false },
    { id: 3, text: "Item 3", checked: false },
    { id: 4, text: "Item 4", checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Checklist</h2>
      <form>
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-2">
            <label className="inline-block">{item.text}</label>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
              className="ml-2 items-end"
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default Checklist;
