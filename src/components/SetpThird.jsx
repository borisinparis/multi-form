"use client";

import { Input } from "@/components/Input.jsx";
import { useState } from "react";

const namesInput3 = [
    { name: "Date of birth", type: "date" },
    {
        name: "profile", type: "file", text: "Browse or drop image"
    },
]

export const SetpThird = ({ setStep, step }) => {
    const [thirdValue, setThirdValue] = useState({});
    const [errors, setErrors] = useState({});


    const onSubmitBack = () => {
        setStep(2)

    }

    const onSubmit = () => {
        setErrors({});
        console.log(thirdValue["Date of birth"]);
        const dateOfCalender = new Date(thirdValue["Date of birth"]);
        const year = dateOfCalender.getFullYear();
        console.log(year);

        console.log(thirdValue["profile"]);



        const check = namesInput3.reduce((prev, cur) => {
            console.log(cur.name);
            if (cur.name == "Date of birth") {
                if (!year || (year >= 1940 && year <= 2012)) {
                    setErrors((prevErrors) => ({ ...prevErrors, [cur.name]: cur.errorMessage }))
                    return false;
                }

            }
            if (cur.name == "profile") {
                if (!thirdValue[cur.name]) {
                    setErrors((prevErrors) => ({ ...prevErrors, [cur.name]: cur.errorMessage }))
                    return false;
                }

            }

            return prev
        }, true);

        console.log('check', check)

        if (check) {
            setStep(4);
            setThirdValue({})
        }

    };

    return (
        <div className="w-[100%] flex items-center justify-center h-[1400px] bg-gray">
            <div className="w-[480px] min-h-[655px] p-8 rounded-xl bg-black">
                <h1 className="text-[26px]  text-white">Join us! 😎</h1>
                <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">Please provide all current information accurately.</p>
                {
                    namesInput3.map((el, index) => (
                        <Input
                            key={index}
                            index={index}
                            step={step}
                            el={el}
                            errors={errors}
                            setThirdValue={setThirdValue} />
                    ))
                }

                <div className="flex w-full gap-x-2 mt-auto">
                    <button onClick={onSubmitBack} className="flex flex-1 items-center justify-center w-[20px] h-[44px] rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">"back</button>
                    <button onClick={onSubmit} type="submit" className="flex flex-1 items-center justify-center w-[100%] h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">{`${step}/3 last one`}
                    </button>
                </div>




            </div>
        </div>

    )
}
