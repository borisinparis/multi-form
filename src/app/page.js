"use client";

import { SetpOne } from "@/components/Setpone";
import { SetpTwo } from "@/components/SetpTwo";
import {SetpThird} from "@/components/SetpThird";
import { useState } from "react";



export default function Home() {
  const [step, SetStep] = useState(1);
  return (<>
    {step === 1 ? <SetpOne setStep={SetStep} /> : <></>}
    {step === 2 ? <SetpTwo setStep={SetStep} /> : <></>}
    {step === 3 ? <SetpThird setStep={SetStep} /> : <></>}
    {step === 4 ? <SetpThird setStep={SetStep} /> : <></>}
  </>
  );
}
