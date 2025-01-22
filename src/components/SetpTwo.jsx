"use client";
import { Input } from "@/components/Input.jsx";
import { useState } from "react";

const namesInput2 = [
    { name: "Email", type: "email", search: "Email" },
    { name: "Phone number", type: "number", search: "Your phone number" },
    { name: "Password", type: "text", search: "your password" },
    { name: "Confirm password", type: "text", search: "Confirm password" },
]


export const SetpTwo = ({setStep}) => {
    const [valueInput, setValueInput] = useState({});
    const [errors, setErrors] = useState({});

    const onSubmit = () => {
        setErrors({});

        const check = namesInput2.reduce((prev, cur) => {
            if (!valueInput[cur.name] || valueInput[cur.name].length === 0) {
                setErrors((prevErrors) => ({ ...prevErrors, [cur.name]: cur.errorMessage }))
                return false;
            }
            if (prev === false) return false;
            return true;
        }, true)

        console.log(check)

        console.log("working");

        if (check) {
            setStep(3);
            setValueInput({})
        }
    };

    return (
        <div className="w-[100%] flex items-center justify-center h-[1400px] bg-gray">
            <div className="w-[480px] min-h-[655px] p-8 rounded-xl bg-black">
                <h1 className="text-[26px]  text-white">Join us! 😎</h1>
                <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">Please provide all current information accurately.</p>
                {
                    namesInput2.map((el, index) => (
                        <Input key={index} index={index} el={el} errors={errors} setValueInput={setValueInput} />
                    ))
                }

                <div className="flex w-full gap-x-2 mt-auto">
                    <button onClick={onSubmit} type="submit" className="flex flex-1 items-center justify-center w-[100%] h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">"Continue 1/3
                    </button>
                </div>




            </div>
        </div>
    )
}