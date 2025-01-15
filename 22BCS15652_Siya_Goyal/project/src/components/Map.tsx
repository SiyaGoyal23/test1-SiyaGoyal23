import React from 'react';
import { MapPin } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')"
      }}></div>
      <div className="absolute bottom-4 right-4">
        <MapPin className="text-blue-600 w-8 h-8" />
      </div>
    </div>
  );
};

export default Map;