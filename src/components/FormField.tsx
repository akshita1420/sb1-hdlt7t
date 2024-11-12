import React from 'react';
import { FieldRange } from '../types/medical';

interface FormFieldProps {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  range: FieldRange;
  unit?: string;
}

export default function FormField({ 
  label, 
  name, 
  value, 
  onChange, 
  range, 
  unit 
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        {unit && (
          <span className="text-sm text-gray-500">
            {unit}
          </span>
        )}
      </div>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        min={range.min}
        max={range.max}
        step={range.step}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-shadow"
        required
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>Min: {range.min}</span>
        <span>Max: {range.max}</span>
      </div>
    </div>
  );
}