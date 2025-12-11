"use client";

import { Container } from "@/components/ui/container";

import React from "react";

const page = () => {
  return (
    <Container className="py-24">
      <div className="bg-brand-white min-h-screen">
        <div>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Portfolio Client Side REACT
            </h1>
            <button
              className=" text-red-500 dark:text-red-400 bg-amber-500"
              onClick={() => alert("Hello world")}
            >
              click here
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
