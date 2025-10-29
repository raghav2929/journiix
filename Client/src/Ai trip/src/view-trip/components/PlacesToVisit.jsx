import React from 'react';

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Places To Visit</h2>
      <div>
        {trip?.tripData?.itinerary?.map((dayItem, dayIndex) => (
          <div key={dayIndex}>
            {/* Horizontal Segment for Days */}
            {dayIndex > 0 && <hr className="my-8 border-gray-300" />}

            {/* Day Title */}
            <h3 className="font-semibold text-lg text-black mb-4">Day: {dayItem.day}</h3>

            {/* Places Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {dayItem.places?.map((place, placeIndex) => (
                <a
                  key={placeIndex}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    place?.placeName + " " + place?.geoCoordinates
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-all cursor-pointer"
                >
                  <div className="p-4 rounded-lg  transition-all">
                    {/* Image */}
                    <img
                      src="/placeholder.jpg"
                      alt={place.placeName}
                      className="w-full h-40 object-cover rounded-lg"
                    />

                    {/* Place Details */}
                    <div className="my-2 flex flex-col gap-2">
                      <h2 className="font-medium text-black">{place.placeName}</h2>
                      <h2 className="text-xs text-gray-500">📍 {place.geoCoordinates}</h2>
                      <h2 className="text-xs text-black">{place.placeDetails}</h2>
                      <h2 className="text-xs text-black">💰 {place.ticketPricing}</h2>
                      <h2 className="text-xs text-black">⭐ {place.rating}</h2>
                      <h2 className="text-xs text-black">⏱️ {place.timeToTravel}</h2>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
