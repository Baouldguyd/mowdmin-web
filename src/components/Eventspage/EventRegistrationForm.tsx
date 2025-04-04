"use client";

const EventRegistrationForm = () => {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg w-full">
        <h2 className="text-lg font-semibold mb-4 text-center">Please register for the upcoming event</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First name:</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Last name:</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Land:</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">PLZ:</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Street and Number:</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Phone number:</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">E-mail:</label>
              <input type="email" className="w-full p-2 border rounded-md" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium">Short message:</label>
            <textarea className="w-full p-2 border rounded-md" rows={3}></textarea>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <button type="submit" className="bg-black text-white px-6 py-2 rounded-md w-full md:w-auto">Submit</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default EventRegistrationForm;
  