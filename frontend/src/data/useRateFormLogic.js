import { useState, useEffect } from "react";

const useRateFormLogic = () => {
  const [rateType, setRateType] = useState("maynilad");
  const [valuePerM3, setValuePerM3] = useState("");

  const handleRateChange = (type) => {
    const lowerCaseType = type.toLowerCase().replace(" ", "_");
    setRateType(lowerCaseType);
    console.log(`Rate type set to: ${lowerCaseType}`);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    console.log("Input Value: ", inputValue); 
    if (inputValue === "" || /^[0-9]+(\.[0-9]+)?$/.test(inputValue)) {
      setValuePerM3(inputValue);
    }
  };

  const calculateSamples = () => {
    console.log("Rate Type:", rateType); 
    console.log("Input Value per m³:", valuePerM3); 

    const parsedValuePerM3 = parseFloat(valuePerM3);

    if (isNaN(parsedValuePerM3)) {
      console.log("Invalid valuePerM3:", parsedValuePerM3);
      return ["Enter a valid value"]; 
    }

    if (rateType === "maynilad") {
      return [
        { volume: 0.9, price: 130.57 },
        { volume: 1.4, price: 130.57 },
        { volume: 2.5, price: 130.57 },
      ];
    }

    if (rateType === "step_pricing") {
      const rates = [
        { volume: 0.9, price: parsedValuePerM3 },
        { volume: 1.4, price: parsedValuePerM3 + parsedValuePerM3 },
        { volume: 2.5, price: parsedValuePerM3 + parsedValuePerM3 + parsedValuePerM3 },
      ];

      return rates;
    }

    if (rateType === "linear") {
      const result = [
        { volume: 0.9, price: 0.9 * parsedValuePerM3 },
        { volume: 1.4, price: 1.4 * parsedValuePerM3 },
        { volume: 2.5, price: 2.5 * parsedValuePerM3 },
      ];
      return result;
    }

    return [
      { volume: 0.9, price: 0.9 * parsedValuePerM3 },
      { volume: 1.4, price: 1.4 * parsedValuePerM3 },
      { volume: 2.5, price: 2.5 * parsedValuePerM3 },
    ];
  };

  useEffect(() => {
    console.log("Samples: ", calculateSamples()); 
  }, [rateType, valuePerM3]); 

  return {
    rateType,
    valuePerM3,
    handleRateChange,
    handleInputChange,
    calculateSamples,
  };
};

export default useRateFormLogic;