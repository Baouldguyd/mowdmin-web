import React from "react";

const PolicyContent = () => {
  return (
    <div className=" flex flex-col gap-6 text-justify">
      <div className=" ">
        <h1 className="font-[inter-bold]"> Information Collection and Use</h1>
        <p>
          The application collects information when you download and use it,
          this information may include information such as; Your device's
          internet protocol address (e.g. IP address), the pages of the
          Application that you visit, the time and date of your visit, the time
          spent on those pages, the time spent on the application, the operating
          system you use on your mobile device. The Application does not gather
          precise information about the location of your mobile device, The
          Application collects your device's location, which helps the Service
          Provider determine your approximate geographical location and make use
          of in below ways:
        </p>
        <ul className="list-none ml-4 mt-4">
          <li>
            <span>1.</span> Geolocation Services: the service provider utilizes
            location data to provide features such as personalized content,
            relevant recommendations, and location based services.
          </li>
          <li>
            <span>2.</span> Analytics and Improvements: aggregated and
            anonymized location data helps the service provider to analyze user
            behavior, identify trends, and improve the overall performance and
            functionality of the application.
          </li>
          <li>
            <span>3.</span> Third-Party Services: periodically, the service
            provider may transmit anonymized location data to external services.
            These services assist them in enhancing the application and
            optimizing their offerings.
          </li>
        </ul>
        <p className="mt-4">
          The service provider may use the information you provided to contact
          you from time to time to provide you with important information,
          required notices and marketing promotions. For a better experience,
          while using the application, the service provider may require you to
          provide us with certain personally identifiable information, including
          but not limited to Email, Username. The information that the
          serviceprovider request will be retained by them and used as described
          in this privacy policy.
        </p>
      </div>

      <div className="">
        <h1 className=" font-[inter-bold]">Third Party Access</h1>
        <p>
          Only aggregated, anonymized data is periodically transmitted to
          external services to aid the service provider in improving the
          application and their service. The service provider may share your
          information with third parties in the ways that are described in this
          privacy statement. Please note that the application utilizes
          third-party services that have their own Privacy Policy about handling
          data. Below is the link to the Privacy Policy of the third-party
          service providers used by the application:
        </p>
        <a href="https://www.google.com/policies/privacy/">
          https://www.google.com/policies/privacy/
        </a>
        <p>
          The service provider may disclose user provided and automatically
          collected information, as required by law, such as to comply with a
          subpoena, or similar legal process, when they believe in good faith
          that disclosure is necessary to protect their rights, protect your
          safety or the safety of others, investigate fraud, or respond to a
          government request, with their trusted services providers who work on
          their behalf, do not have an independent use of the information we
          disclose to them, and have agreed to adhere to the rules set forth in
          this privacy statement.
        </p>
      </div>

      <div className="">
        <h1 className=" font-[inter-bold]">Opt-Out Rights</h1>
        <p>
          You can stop all collection of information by the application easily
          by uninstalling it. You may use the standard uninstall processes as
          may be available as part of your mobile device or via the mobile
          application marketplace or network.
        </p>
      </div>

      <div className="">
        <h1 className="font-[inter-bold]">Data Retention Policy</h1>
        <p>
          The service provider will retain user provided data for as long as you
          use the application and for a reasonable time thereafter. If you'd
          like them to delete user provided data that you have provided via the
          application, please contact them at{" "}
          <a href="mailto:info@mowdministries.org" className=" underline">
            info@mowdministries.org
          </a>{" "}
          and they will respond in a reasonable time.
        </p>
      </div>
      <div className="">
        <h1 className=" font-[inter-bold]">Children</h1>
        <p>
          The service provider does not use the application to knowingly solicit
          data from or market to children under the age of 13. The application
          does not address anyone under the age of 13. The service provider does
          not knowingly collect personally identifiable information from
          children under 13 years of age. In the case the Service provider
          discover that a child under 13 has provided personal information, the
          service provider will immediately delete this from their servers. If
          you are a parent or guardian and you are aware that your child has
          provided us with personal information, please contact the Service
          Provider (info@mowdministries.org) so that they will be able to take
          the necessary actions.
        </p>
      </div>
      <div className="">
        <h1 className=" font-[inter-bold]">Security</h1>
        <p>
          The service provider is concerned about safeguarding the
          confidentiality of your information. The service provider provides
          physical, electronic, and procedural safeguards to protect information
          the service provider processes and maintains.
        </p>
      </div>
      <div className="">
        <h1 className=" font-[inter-bold]">Changes</h1>
        <p>
          This Privacy & Policy may be updated from time to time for any reason.
          The service provider will notify you of any changes to the Privacy &
          Policy by updating this page with the new Privacy Policy. You are
          advised to consult this Privacy & Policy regularly for any changes, as
          continued use is deemed approval of all changes.
        </p>
        <p className=" mt-4">This privacy policy is effective as of 2024-07-10</p>
      </div>
      <div className="">
        <h1 className=" font-[inter-bold]">Your Consent</h1>
        <p>
          By using the application, you are consenting to the processing of your
          information as set forth in this Privacy & Policy now and as amended
          by us.
        </p>
      </div>
      <div className="">
        <h1 className=" font-[inter-bold]">Contact Us</h1>
        <p>
          If you have any questions regarding privacy while using the
          Application, or have questions about the practices, please contact the
          Service Provider via email at {" "}
          <a href="mailto:info@mowdministries.org." className=" underline">info@mowdministries.org.</a>
        </p>
      </div>
    </div>
  );
};

export default PolicyContent;
