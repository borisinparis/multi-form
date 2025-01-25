"use client";
import { Input } from "@/components/Input.jsx";
import { useEffect,useState } from "react";

const namesInput2 = [
    { name: "Email", type: "email", search: "Email" , errorMessage: "Not your Email"  },
    { name: "Phone number", type: "number", search: "Your phone number", errorMessage: "Enter your phone number"  },
    { name: "Password", type: "password", search: "your password", errorMessage: "Password include /number/ and /UpperWords/"  },
    { name: "Confirm password", type: "password", search: "Confirm password" , errorMessage: "/Not matching/" },
]


export const SetpTwo = ({setStep , step}) => {
    const [secondPage, setSecondPage] = useState(() => {

        const prevValue = JSON.parse(localStorage.getItem("stepTwo") || "{}")
        return prevValue
    });
    const [errors, setErrors] = useState({});

        useEffect(() => {
        localStorage.setItem("stepTwo", JSON.stringify(secondPage));
        },[secondPage])

    const onSubmitBack =() => {
        setStep(1)

    }



    const onSubmit = () => {
        setErrors({});
            console.log();
            
            

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
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="opacity: 1; transform: none;">
            <div className="w-[480px] min-h-[655px] p-8 rounded-xl bg-white/100">
            <div className="space-y-2 mb-7">
                <img src="Main 1.png"></img>
                <h1 className="text-[26px] text-foreground font-semibold">Join us! 😎</h1>
                <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">Please provide all current information accurately.</p>
                <form className="flex flex-col flex-grow gap-y-3">
                {
                    namesInput2.map((el, index) => (
                        <Input key={index} index={index} step={step} el={el} errors={errors} setSecondPage={setSecondPage} value={secondPage[el.name]} />
                    ))
                }
                </form>
                </div>

                <div className="flex w-full gap-x-2 mt-auto">
                    <button onClick={onSubmitBack} className="flex flex-1 items-center justify-center w-[20px] h-[44px] rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">"back</button>
                    <button onClick={onSubmit} type="submit" className="flex flex-1 items-center justify-center w-[70%] h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">"{`${step}/3 continue`}
                    </button>
                </div>




            </div>
        </div>
        </div>
    )
}