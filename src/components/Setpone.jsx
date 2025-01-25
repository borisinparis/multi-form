"use client";

import { Input } from "@/components/Input.jsx";
import { useEffect, useState } from "react";

const namesInput1 = [
    { name: "First name", type: "text", search: "Your first name", errorMessage: "Empty enter your first name" },
    { name: "Last name", type: "text", search: "Your last name", errorMessage: "Empty enter your last name" },
    { name: "Username", type: "text", search: "Your username", errorMessage: "Empty enter your Username" },
]

export const SetpOne = ({ setStep, step }) => {
    const [valueInput, setValueInput] = useState(() => {
        const prevValue = JSON.parse(localStorage.getItem("stepOne") || "{}")
        return prevValue
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.setItem("stepOne", JSON.stringify(valueInput));
    }, [valueInput])

    const onSubmit = () => {
        setErrors({});

        const check = namesInput1.reduce((prev, cur) => {
            if (!valueInput[cur.name] || valueInput[cur.name].length === 0 || valueInput[cur.name].length <= 4) {
                setErrors((prevErrors) => ({ ...prevErrors, [cur.name]: cur.errorMessage }))
                return false;
            }
            if (prev === false) return false;
            return true
        }, true);

        console.log(check)

        console.log("working");


        if (check) {
            setStep(2);
            setValueInput({})
        }

    };


    console.log(valueInput, errors)


    return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="opacity: 1; transform: none;">
            <div className="w-[480px] min-h-[655px] p-8 rounded-xl bg-white/100  ">
            <div className="space-y-2 mb-7">
                <img src="Main 1.png"></img>
                <h1 className="text-[26px] text-foreground font-semibold">Join us! 😎</h1>
                <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">Please provide all current information accurately.</p>
                <form className="flex flex-col flex-grow gap-y-3">
                {
                    namesInput1.map((el, index) => (
                        <Input key={index} index={index} step={step} el={el} errors={errors} setValueInput={setValueInput} value={valueInput[el.name]} />
                    ))
                }
                </form>
                </div>

                <div className="flex w-full gap-x-2 mt-[100px]">
                    <button onClick={onSubmit}
                     type="submit"
                     className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">"Continue 1/3
                    </button>
                </div>




            </div>
            </div>
        </div>

    )
}
