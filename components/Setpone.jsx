"use client";

import { useState } from "react";

// Define input fields
const namesInput1 = [
  { name: "First name", type: "text", search: "Your first name" },
  { name: "Last name", type: "text", search: "Your last name" },
  { name: "Username", type: "text", search: "Your username" },
];

export const SetpOne = () => {
  const [valueInput, setValueInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
    let newErrors = {};
    
    // Check if any input is empty
    Object.keys(valueInput).forEach((key) => {
      if (!valueInput[key]) {
        newErrors[key] = `${namesInput1.find((input) => input.name.toLowerCase().includes(key)).name} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);  // Set errors if there are any
      console.log("Form has errors:", newErrors);
    } else {
      setErrors({});  // Clear errors if form is valid
      console.log("Form submitted successfully!");
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setValueInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="w-[100%] flex items-center justify-center h-[1400px] bg-gray">
      <div className="w-[480px] min-h-[655px] p-8 rounded-xl bg-black">
        <h1 className="text-[26px] text-white">Join us! 😎</h1>
        <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>

        {namesInput1.map((el, index) => {
          const fieldName = el.name.toLowerCase().replace(" ", "");
          return (
            <div key={index} className="flex flex-col mt-10">
              <label htmlFor={`input-${index}`} className="text-sm text-white font-semibold">
                {el?.name}
              </label>
              <input
                type={el.type}
                placeholder={el.search}
                name={fieldName}  // Use the field name as the input name
                value={valueInput[fieldName]}  // Bind the input value to the state
                onChange={onChange}  // Handle input change
                className="w-full border py-4 px-2 rounded-xl"
              />
              {errors[fieldName] && (
                <p className="text-red-500">{errors[fieldName]}</p>  // Display specific error
              )}
            </div>
          );
        })}

        <div className="flex w-full gap-x-2 mt-auto">
          <button
            onClick={onSubmit}
            type="button"
            className="flex flex-1 items-center justify-center w-[100%] h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80"
          >
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
};
