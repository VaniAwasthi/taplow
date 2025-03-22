import React from "react";
import { Suspense } from "react";

import ConsultantProfile from "../component/consultantDirectory/ConsultantProfile";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConsultantProfile />
    </Suspense>
  );
};

export default page;
