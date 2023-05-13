import { useState } from "react";
import DateForm from "./components/DateForm";
import AgeDisplay from "./components/AgeDisplay";

export default function App() {
  const [showAge, setShowAge] = useState(false);
  const [age, setAge] = useState({
    years: "--",
    months: "--",
    days: "--",
  });
  return (
    <>
      <div className="w-full min-h-screen bg-neutral-offWhite flex justify-center items-center font-poppins">
        <div className="w-full max-w-[52.5rem] bg-neutral-white px-10 py-10 mx-2 m-2 rounded-3xl md:rounded-br-[10rem]">
          <DateForm setShowAge={setShowAge} setAge={setAge} />
          <AgeDisplay age={age} />
        </div>
      </div>
    </>
  );
}
