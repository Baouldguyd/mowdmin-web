import { Suspense } from "react";

import Layout from "@/components/Layout/Layout";
import Shopspage from "@/components/Shopspage/Shopspage";
import React from "react";

const Shops = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Shopspage />
      </Suspense>
    </Layout>
  );
};

export default Shops;
