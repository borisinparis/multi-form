"use client";

import { SetpOne } from "@/components/Setpone";
import { SetpTwo } from "@/components/SetpTwo";
import { SetpThird } from "@/components/SetpThird";
import { Completed } from"@/components/Completed"

import { useEffect,useState } from "react";



export default function Home() {
  const [step, SetStep] = useState(() => {
return  Number(localStorage.getItem("step") || 1)
  });
  console.log(step);

  useEffect(() => {
    localStorage.setItem("step", step);
}, [step])

  return (<>
    {step === 1 ? <SetpOne setStep={SetStep} step={step} /> : <></>}
    {step === 2 ? <SetpTwo setStep={SetStep} step={step} /> : <></>}
    {step === 3 ? <SetpThird setStep={SetStep} step={step} /> : <></>}
    {step === 4 ? <Completed step={step} /> : <></>}
  </>
  );
}
