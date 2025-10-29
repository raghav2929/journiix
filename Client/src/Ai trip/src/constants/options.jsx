export const SelectTravelesList =[
    {
        id:1,
        title:'Just Me',
        desc:'A sole travelers in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏠',
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'⛵',
        people:'5 to 10 people'
    }
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about costs',
        icon:'🤑',
    }
]

export const AI_PROMPT ="Generate Travel Plan for : {Location}, for {totalDays} Days for {traveller} People with a {budget} budget, give me a Hotels options list with HotelName, Hotel address, Price in rupees, hotel image url, geo coordinates, rating, descriptions and suggest itinerary(inLowerCase) with placeName, placeDetails, placeImageUrl, geoCoordinates, ticketPricing, rating, timeToTravel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."