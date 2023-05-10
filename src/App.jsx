import { useState } from "react";
import DateForm from "./components/DateForm";
import AgeDisplay from "./components/AgeDisplay";
export default function App() {
  const [showAge, setShowAge] = useState(false);
  return (
    <>
      <DateForm setShowAge={setShowAge} />
      {showAge && <AgeDisplay />}
    </>
  );
}
