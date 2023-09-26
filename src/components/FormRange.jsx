import { useState } from "react";

function FormRange({ label, name, size, price }) {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  return (
    <div className="from-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{selectedPrice/100}$</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 py-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max:{maxPrice/100}$</span>
      </div>
    </div>
  );
}

export default FormRange;