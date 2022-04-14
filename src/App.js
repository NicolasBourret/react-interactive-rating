import { useState } from "react";
import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";

function App() {
  const [rate, setRate] = useState(null);
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <div className="container">
        {step === 1 ? (
          <FirstStep
            onRateChange={setRate}
            rate={rate}
            onStepChange={setStep}
          />
        ) : (
          <SecondStep rate={rate} />
        )}
      </div>
    </div>
  );
}

export default App;
