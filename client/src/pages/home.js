import React from "react";
import { Redirect, useParams } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to AdoptADog! Login or Signup to find a doggy to adopt!</p>
    </div>
  );
}
