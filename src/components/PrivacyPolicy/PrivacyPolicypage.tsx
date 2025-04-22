import PolicyContent from "./PolicyContent";

const PrivacyPolicypage = () => {
  return (
    <div className=" min-h-[100svh]">
      <div className="bg-[#040725] justify-center text-white h-[50svh] flex items-end pb-10">
        <div className="">
          <h1 className=" text-2xl min-md:text-5xl text-center font-[inter-bold]">
            Privacy & Policy
          </h1>
          <p className=" text-center text-[#CFCFCF] text-base min-md:text-[1.3rem] min-md:w-[75%] mx-auto mt-4">
            This privacy policy applies to the Mowdministries e.V app (hereby
            referred to as "Application") for mobile devices that was created by
            Mowdministries (hereby referred to as "Service Provider") as a Free
            service. This service is intended for use "AS IS".
          </p>
        </div>
      </div>
      <div className=" p-8">
      <PolicyContent />
      </div>
    </div>
  );
};

export default PrivacyPolicypage;
