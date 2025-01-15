import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface LocationInputProps {
  type: 'pickup' | 'destination';
  value: string;
  onChange: (value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ type, value, onChange }) => {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        {type === 'pickup' ? (
          <Navigation className="w-5 h-5 text-blue-500" />
        ) : (
          <MapPin className="w-5 h-5 text-red-500" />
        )}
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={type === 'pickup' ? 'Enter pickup location' : 'Enter destination'}
        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default LocationInput;