"use client";

import { SetpOne } from "../../components/Setpone";
 
const namesInput2 =[
  {name:"Email", type:"email", search:"Email"},
  {name:"Phone number", type:"number", search:"Your phone number"},
  {name:"Password", type:"text", search:"your password"},
  {name:"Confirm password", type:"text", search:"Confirm password"},
]
const namesInput3 =[
  {name:"Date of birth", type:"date"},
  {name:"profile", type:"file" ,text:"Browse or drop image"
  },
]


export default function Home() {
  return ( <>
  <SetpOne />
      </>
  );
}
