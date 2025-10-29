import { Button } from "@/components/ui/button";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from "@/constants/options";
import { chatSession } from "@/service/AIModal";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Firebase Imports
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate} from "react-router-dom";

// Firebase Config (Make sure you replace this with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyCk3pLBQiXqx4--ho2_ahaZ7lZnEOfh2FA",
  authDomain: "ai-travel-planner-a7021.firebaseapp.com",
  projectId: "ai-travel-planner-a7021",
  storageBucket: "ai-travel-planner-a7021.appspot.com", // Corrected
  messagingSenderId: "727177344736",
  appId: "1:727177344736:web:3bf3ab756570fdc469c285",
  measurementId: "G-JFZJ1LX2ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function CreateTrip() {
  const [place, setPlace] = useState("");
  const [formData, setFormData] = useState({
    Location: "",
    noOfDays: "",
    budget: "",
    traveler: "",
  });
  
  const [loading, setLoading] = useState(false);

  const navigate=useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleGenerateTrip = async () => {
    // Check if any field is empty
    if (!formData.Location || !formData.noOfDays || !formData.budget || !formData.traveler) {
      toast.error("Please fill in all fields before generating the trip!");
      return;
    }
    if (parseInt(formData.noOfDays) > 5) {
      console.log("Please enter days < 5");
      toast.error("Please enter days less than 5");
      return;
    }

    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{Location}', formData?.Location)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveller}', formData?.traveler)
      .replace('{budget}', formData?.budget)
      .replace('{totalDays}', formData?.noOfDays);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    const responseText = await result?.response.text();
console.log("AI Response:", responseText);
if (!responseText) {
  toast.error("No response from the AI. Please try again!");
  return;
}
setLoading(false);
SaveAiTrip(responseText);

  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const docId = Date.now().toString();
    try {
      const parsedTripData = JSON.parse(TripData); // Convert string to object
      await setDoc(doc(db, "AITrips", docId), {
        userSelection: formData,
        tripData: parsedTripData, // Save as an object
        id: docId,
      });
      toast.success("Trip generated and saved successfully!");
    } catch (error) {
      console.error("Error saving trip data: ", error);
      toast.error("Failed to save the trip data!");
    }
    setLoading(false);
    navigate('/view-trip/'+docId)
  };
  
  
  
  

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us Your Travel Preference</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just Provide Some Basic Information, and our trip planner will generate a
        customised itinerary based on your preference
      </p>

      <div className="mt-15 flex flex-col gap-8">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is the destination of your choice?
          </h2>
          <input
            className="bg-white text-black border border-gray-300 rounded p-2 focus:outline-none w-full"
            type="text"
            value={formData.Location}
            onChange={(e) => handleInputChange("Location", e.target.value)}
            placeholder="Enter text"
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How Many Days Are You Planning Your Trip?
          </h2>
          <input
            type="number"
            placeholder={"Ex.3"}
            className="bg-white text-black border border-gray-300 rounded p-2 focus:outline-none w-full"
            value={formData.noOfDays}
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">
          What is your Budget?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                ${formData?.budget === item.title && 'shadow-lg border-black'}`}
            >
              <h2 className="text-3xl ">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">
          Who do you plan on travelling with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelesList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("traveler", item.people)}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                ${formData?.traveler === item.people && 'shadow-lg border-black'}`}
            >
              <h2 className="text-3xl ">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 justify-end flex">
        <Button onClick={handleGenerateTrip}>Generate Trip</Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CreateTrip;
