import { useState } from "react";
import DateForm from "./components/DateForm";
import AgeDisplay from "./components/AgeDisplay";
export default function App() {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className="w-full min-h-screen bg-[#f1f1f1] flex justify-center items-center">
      <div className="w-full max-w-[52.5rem] bg-[#ffff] px-10 py-10  rounded-3xl rounded-br-[10rem]">
        <DateForm setShowAge={setShowAge} />
        {/* {showAge && <AgeDisplay />} */}
        <AgeDisplay />
      </div>
    </div>
  );
}
