"use client";
import { useForm } from "@formspree/react";
import { Loader } from "lucide-react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";


const Baptism = () => {
  const [state, handleSubmit] = useForm("xkgrgdbe");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  return (
    <div className="bg-[#F8F8F8] text-center py-8 px-4 sm:py-12 sm:px-8 lg:px-20 my-14">
      <h1 className="text-2xl sm:text-3xl font-[inter-bold] mb-4">
        TO BAPTIZE
      </h1>
      <div className="max-w-4xl mx-auto">
        <p className="italic text-sm sm:text-base mb-4">
          <strong>Acts 2:38 –</strong>{" "}
          <em>
            "Repent and be baptized, every one of you, in the name of Jesus
            Christ for the forgiveness of your sins. And you will receive the
            gift of the Holy Spirit."
          </em>
        </p>
        <p className="text-sm sm:text-base text-left mb-6">
          Baptism is not a requirement for salvation, nor does it cleanse or
          offer forgiveness of sins. When we read Acts 2:38, the phrase simply
          means "because of the forgiveness of our sins". Therefore, we are
          baptized as a result of the forgiveness we have already received
          through Christ. True forgiveness comes through sincere repentance,
          paving the way for baptism by immersion not by ablutions. Baptism is
          an act of obedience that follows conversion, symbolizing our
          commitment to Christ.
        </p>
        <p className="italic text-sm sm:text-base text-left mb-8">
          As 1 Peter 3:21 states, baptism is "the pledge of a clear conscience
          toward God."
        </p>
      </div>

      <div className="bg-[#02021e] text-white p-6 sm:p-8 rounded-xl max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-[inter-bold] mb-4">
          Register for the baptism class or get baptized.
        </h2>
        <p className="text-sm sm:text-base mb-6">
          We invite you to take this important step of faith. To register for
          the baptism course or to be baptized, please fill out the form. Send
          us your details and we will contact you to arrange an appointment.
        </p>

    <motion.div 
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
    transition={{ duration: 0.8, ease: "easeOut" }}>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">
                Full name:
              </label>
              <input
                name="fullName"
                className="w-full p-2 rounded text-black  text-sm sm:text-base bg-[#fff]"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">
                E-mail address:
              </label>
              <input
                name="email"
                className="w-full p-2 rounded text-black text-sm sm:text-base bg-[#fff]"
                type="email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">
                Phone number:
              </label>
              <input
                name="phone"
                className="w-full p-2 rounded text-black text-sm sm:text-base bg-[#fff]"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">
              Land:
            </label>
            <input
              name="land"
              className="w-full p-2 rounded text-black text-sm sm:text-base bg-[#fff]"
              required
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">
              Address:
            </label>
            <input
              name="address"
              className="w-full p-2 rounded text-black text-sm sm:text-base bg-[#fff]"
              required
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">
              Tell us briefly about you:
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full p-2 rounded text-black text-sm sm:text-base bg-[#fff]"
              required
            />
          </div>

          <div className="sm:col-span-3 flex flex-col sm:flex-row gap-4 mt-2">
            <label className="flex items-center text-sm sm:text-base">
              <input
                type="checkbox"
                name="course"
                className="mr-2 h-4 w-4 bg-[#fff]"
              />
              Taufeklass
            </label>
            <label className="flex items-center text-sm sm:text-base">
              <input
                type="checkbox"
                name="baptized"
                className="mr-2 h-4 w-4 bg-[#fff]"
              />
              Get baptized
            </label>
          </div>

          <div className="sm:col-span-3 mt-6">
            <button
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              type="submit"
              className="w-full sm:w-auto mx-auto bg-[#FF0000] hover:bg-red-700 text-white py-2 px-8 rounded text-sm sm:text-base red-button font-[inter-bold]"
            >
              {state.submitting ? <Loader /> : "Submit"}
            </button>
          </div>
        </form>
    </motion.div>
        {state.succeeded && (
            <p className="text-green-500 text-center mt-4">
                Thank you for your registration! We will contact you soon.
            </p>
        )}
        {state.errors && (
            <p className="text-red-500 text-center mt-4">
                Oops! Something went wrong. Please try again.
            </p>
        )}
      </div>
    </div>
  );
};

export default Baptism;
