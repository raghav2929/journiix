import React from 'react';

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <a
  key={index}
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel?.hotelName + " " + hotel?.hotelAddress)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-105 transition-all cursor-pointer"
>
            <div>
              <img src="/placeholder.jpg" alt="" className="rounded-xl" />
              <div className="my-2 flex flex-col gap-2">
                <h2 className="font-medium text-black">{hotel.hotelName}</h2>
                <h2 className="text-xs text-gray-500">📍{hotel.hotelAddress}</h2>
                <h2 className="text-xs text-black">💰₹{hotel.priceInRupees} Per Night</h2>
                <h2 className="text-xs text-black">⭐{hotel.rating}</h2>
                <h2 className="text-xs text-black">{hotel.description}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
