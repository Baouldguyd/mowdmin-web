"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
const DonationsInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // animate only once

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" p-4 flex justify-center items-center my-4 "
    >
      <div className="text-center">
        <h2 className=" font-bold text-lg">By Bank Transfer:</h2>
        <p>
          <strong>KD Bank</strong>
        </p>
        <p>
          <strong>IBAN:</strong> DE71 3506 0190 2100 5600 14
        </p>

        <h2>Via Stripe or PayPal:</h2>

        <div className=" flex max-sm:flex-col">
          <img
            src="https://memberpress.com/wp-content/uploads/2017/09/Integrations-Stripe-1724x970-1.svg"
            alt="Secure Payments Powered by Stripe"
            className="max-w-[250px]"
          />
          <img
            src="https://www.top-bank.ch/images/logo_540/paypal.png"
            alt="Credit Cards"
            className="max-w-[250px]"
          />
        </div>

        <h3 className="font-semibold">Purpose of Donations:</h3>
        <ol className=" flex flex-col items-start list-disc ">
          <li>Open Air Evangelization</li>
          <li>Support for orphans and disadvantaged children.</li>
          <li>Support for people with social and psychological problems.</li>
        </ol>

        <h3 className="mt-4">
          <u> Organization</u>
        </h3>
        <p>
          <strong>Mowdministries e.V</strong>
        </p>

        <h3>Administrative Office</h3>
        <p>
          Mowdministries e.V, Rosenstr. 57, 59077 Hamm, Germany. <br />
          Religious organization without profit motive, registered under <br />
          VR 4773 District Court of Saarbrücken. <br />
          Tax ID: 322/5838/1452
        </p>
      </div>
    </motion.div>
  );
};

export default DonationsInfo;
