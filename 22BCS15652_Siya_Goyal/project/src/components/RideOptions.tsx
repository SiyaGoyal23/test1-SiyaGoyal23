import React from 'react';
import { Car, Truck, Bike } from 'lucide-react';

interface RideOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  price: string;
  time: string;
}

const rideOptions: RideOption[] = [
  {
    id: 'economy',
    name: 'Economy',
    icon: <Car className="w-6 h-6" />,
    price: '$12-15',
    time: '5 min'
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: <Truck className="w-6 h-6" />,
    price: '$18-22',
    time: '3 min'
  },
  {
    id: 'bike',
    name: 'Bike',
    icon: <Bike className="w-6 h-6" />,
    price: '$8-10',
    time: '8 min'
  }
];

const RideOptions: React.FC<{ onSelect: (id: string) => void; selected: string }> = ({ onSelect, selected }) => {
  return (
    <div className="space-y-3">
      {rideOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`w-full p-4 rounded-lg border transition-all ${
            selected === option.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-gray-600">{option.icon}</div>
              <div className="text-left">
                <h3 className="font-medium">{option.name}</h3>
                <p className="text-sm text-gray-500">{option.time} away</p>
              </div>
            </div>
            <span className="font-semibold">{option.price}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default RideOptions;