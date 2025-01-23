"use client";
import { Input } from "@/components/Input.jsx";
import { useState } from "react";

const namesInput2 = [
    { name: "Email", type: "email", search: "Email" , errorMessage: "Not your Email"  },
    { name: "Phone number", type: "number", search: "Your phone number", errorMessage: "Enter your phone number"  },
    { name: "Password", type: "password", search: "your password", errorMessage: "Password include /number/ and /UpperWords/"  },
    { name: "Confirm password", type: "password", search: "Confirm password" , errorMessage: "/Not matching/" },
]


export const SetpTwo = ({setStep , step}) => {
    const [secondPage, setSecondPage] = useState({});
    const [errors, setErrors] = useState({});

    const onSubmit = () => {
        setErrors({});

        const check = namesInput2.reduce((prev, cur) => {
            if(cur.name =="Email"){
            if (!secondPage[cur.name].match(/[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) || secondPage[cur.name].length === 0) {
                setErrors((prevErrors) => ({ ...prevErrors, [cur.name]: cur.errorMessage }))
                return false;
            }
        }
            if(cur.name == "Phone number") {
                if(!secondPage[cur.name] || secondPage[cur.name].length< 8 || secondPage[cur.name].length === 0) {
                    setErrors((prevErrors) => ({ ...prevErrors, [cur.name]: cur.errorMessage }))
                    return false;
                }

            }
            if(cur.name == "Password") {
                const passwordSaver = [secondPage.Password]
                console.log(passwordSaver + " ene bol log");
                
                if(!secondPage[cur.name] || secondPage[cur.name].length< 8 || secondPage[cur.name].length === 0) {
                    setErrors((prevErrors) => ({ ...prevErrors, [cur.name]: cur.errorMessage }))
                    return false;
                }

            }
            if(cur.name == "Confirm Password") {
                if(!secondPage[cur.name] || secondPage[cur.name] === passwordSaver) {
                    setErrors((prevErrors) => ({ ...prevErrors, [cur.name]: cur.errorMessage }))
                    return false;
                }

            }
            if (prev === false) return false;
            return true
        }, true)

        console.log(check)

        console.log("working");


        if (check) {
            setStep(3);
            setSecondPage({})
        }
    };
    console.log(secondPage, errors)
    return (
        <div className="w-[100%] flex items-center justify-center h-[1400px] bg-gray">
            <div className="w-[480px] min-h-[655px] p-8 rounded-xl bg-black">
                <h1 className="text-[26px]  text-white">Join us! 😎</h1>
                <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">Please provide all current information accurately.</p>
                {
                    namesInput2.map((el, index) => (
                        <Input key={index} index={index} step={step} el={el} errors={errors} setSecondPage={setSecondPage} />
                    ))
                }

                <div className="flex w-full gap-x-2 mt-auto">
                    <button onClick={onSubmit} type="submit" className="flex flex-1 items-center justify-center w-[100%] h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">"{`${step}/3 continue`}
                    </button>
                </div>




            </div>
        </div>
    )
}