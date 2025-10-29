import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '@/service/firebaseconfig';
import { getDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure CSS is included
import InformationSection from '../components/InformationSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';

function Viewtrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);

    useEffect(() => {
        if (tripId) {
            GetTripData();
        }
    }, [tripId]);

    const GetTripData = async () => {
        try {
            const docRef = doc(db, 'AITrips', tripId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log('Document:', docSnap.data());
                setTrip(docSnap.data());
            } else {
                console.log('No such document!');
                toast.error('No trip found');
            }
        } catch (error) {
            console.error('Error fetching trip data:', error);
            toast.error('An error occurred while fetching trip data');
        }
    };

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
            {/* Information Section */}
            <InformationSection trip={trip} />
            
            {/* Recomended Hotels */}
            <Hotels trip={trip} />
            {/* Daily plan */}
            <PlacesToVisit trip={trip} />
            {/* Footer */}

        </div>
    );
}

export default Viewtrip;
