"use client";

import { Input } from "@/components/Input.jsx";
import { useEffect,useState } from "react";

const namesInput3 = [
    { name: "Date of birth", type: "date" },
    {
        name: "profile", type: "file", text: "Browse or drop image"
    },
]

export const SetpThird = ({ setStep, step }) => {
    const [thirdValue, setThirdValue] = useState(() =>{
        if(typeof window !== "undefined") {
        const prevValue = JSON.parse(localStorage.getItem("stepThird") || "{}")
        return prevValue || {}
    }
    return {}
});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.setItem("stepThird", JSON.stringify(thirdValue));
    }, [thirdValue])

    const onSubmitBack = () => {
        setStep(2)

    }

    const onSubmit = () => {
        setErrors({});
        const dateOfCalender = new Date(thirdValue["Date of birth"]);
        const year = dateOfCalender.getFullYear();

        console.log(thirdValue["profile"]);



        const check = namesInput3.reduce((prev, cur) => {
            console.log((cur.name));
            console.log(namesInput3[0].name);
            console.log(year);
            
            
            if (cur.name === namesInput3[0].name && ( year<1940 || year>2024)) {
                console.log(year);
                
                    setErrors((prevErrors) => 
                        ({ 
                           ...prevErrors, 
                        [cur.name]: cur.errorMessage }))
                    return false;

            }
            if (cur.name == "profile" && thirdValue[cur.name] ) {
                
                    setErrors((prevErrors) => ({ ...prevErrors, [cur.name]: cur.errorMessage }))
                    return false;

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
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="opacity: 1; transform: none;">
        <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
                <div className="space-y-2 mb-7">
                    <img src="Main 1.png"></img>
                <h1 className="text-[26px] text-foreground font-semibold">Join us! 😎</h1>
                <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">Please provide all current information accurately.</p>
                </div>
                <form className="flex flex-col flex-grow gap-y-3">
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
                </form>

                <div className="flex w-full gap-x-2 mt-auto">
                    <button onClick={onSubmitBack} className="flex flex-1 items-center justify-center w-[20px] h-[44px] rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">"back</button>
                    <button onClick={onSubmit} type="submit" className="flex flex-1 items-center justify-center w-[100%] h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">{`${step}/3 last one`}
                    </button>
                </div>




            </div>
        </div>
        </div>

    )
}
