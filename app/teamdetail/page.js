"use client";
import React, { Suspense } from "react";
import TeamDetail from "../component/globalpage/TeamDetail";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeamDetail />
    </Suspense>
  );
};

export default Page;
