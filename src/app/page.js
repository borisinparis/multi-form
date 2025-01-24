"use client";

import { SetpOne } from "@/components/Setpone";
import { SetpTwo } from "@/components/SetpTwo";
import { SetpThird } from "@/components/SetpThird";
import { Completed } from"@/components/Completed"

import { useState } from "react";



export default function Home() {
  const [step, SetStep] = useState(1);
  console.log(step);

  return (<>
    {step === 1 ? <SetpOne setStep={SetStep} step={step} /> : <></>}
    {step === 2 ? <SetpTwo setStep={SetStep} step={step} /> : <></>}
    {step === 3 ? <SetpThird setStep={SetStep} step={step} /> : <></>}
    {step === 4 ? <Completed /> : <></>}
  </>
  );
}
