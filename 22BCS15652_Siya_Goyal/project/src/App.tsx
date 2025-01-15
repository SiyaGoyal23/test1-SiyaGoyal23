import React, { useState, useEffect } from 'react';
import { ArrowRight, AlertCircle, Car, Clock } from 'lucide-react';
import Map from './components/Map';
import RideOptions from './components/RideOptions';
import LocationInput from './components/LocationInput';

interface AvailableRide {
  id: string;
  driver: string;
  vehicle: string;
  eta: string;
  rating: number;
  price: number;
  distance: string;
}

function App() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedRide, setSelectedRide] = useState('economy');
  const [showRideDetails, setShowRideDetails] = useState(false);
  const [availableRides, setAvailableRides] = useState<AvailableRide[]>([]);
  const [loading, setLoading] = useState(false);

  const handleBookRide = async () => {
    if (!pickup || !destination) {
      alert('Please enter pickup and destination locations');
      return;
    }

    setLoading(true);
    setShowRideDetails(false);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate fetching available rides with more details
    const mockRides: AvailableRide[] = [
      {
        id: '1',
        driver: 'John Smith',
        vehicle: 'Toyota Camry - Silver',
        eta: '3',
        rating: 4.8,
        price: 25.50,
        distance: '2.3 miles'
      },
      {
        id: '2',
        driver: 'Sarah Johnson',
        vehicle: 'Honda Civic - Black',
        eta: '5',
        rating: 4.9,
        price: 22.75,
        distance: '2.5 miles'
      },
      {
        id: '3',
        driver: 'Mike Wilson',
        vehicle: 'Tesla Model 3 - White',
        eta: '7',
        rating: 4.7,
        price: 35.00,
        distance: '3.1 miles'
      }
    ];

    setAvailableRides(mockRides);
    setShowRideDetails(true);
    setLoading(false);
  };

  const handleConfirmRide = (ride: AvailableRide) => {
    const message = `🚗 Ride Confirmed!\n\nDriver: ${ride.driver}\nVehicle: ${ride.vehicle}\nETA: ${ride.eta} minutes\nPrice: $${ride.price.toFixed(2)}\n\nYour driver is on the way!`;
    alert(message);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">RideShare</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Book a Ride</h2>
              
              <div className="space-y-4">
                <LocationInput
                  type="pickup"
                  value={pickup}
                  onChange={setPickup}
                />
                <LocationInput
                  type="destination"
                  value={destination}
                  onChange={setDestination}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Ride Type</h2>
              <RideOptions selected={selectedRide} onSelect={setSelectedRide} />
            </div>

            <button
              onClick={handleBookRide}
              disabled={loading}
              className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Finding Rides...</span>
                </>
              ) : (
                <>
                  <span>Find Available Rides</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {showRideDetails && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Rides</h2>
                <div className="space-y-4">
                  {availableRides.map((ride) => (
                    <div 
                      key={ride.id} 
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Car className="w-5 h-5 text-gray-600" />
                            <h3 className="font-semibold text-lg">{ride.driver}</h3>
                          </div>
                          <p className="text-gray-600">{ride.vehicle}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              ⭐ {ride.rating}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {ride.eta} mins
                            </span>
                            <span>{ride.distance}</span>
                          </div>
                          <div className="text-lg font-semibold text-blue-600">
                            ${ride.price.toFixed(2)}
                          </div>
                        </div>
                        <button
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                          onClick={() => handleConfirmRide(ride)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;