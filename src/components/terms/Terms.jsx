import React from "react";

const Terms = () => {
  return (
    <div className="p-5  relative w-full " id="top">
      <header className="flex justify-center ">
        <h1 className="text-2xl text-blueMain font-bold text-center ">
          Payslate Terms and Conditions
        </h1>
      </header>
      <div className=" fixed max-w-sm lg:max-w-2xl w-full flex justify-end items-center">
        <a href="#top">
          <span className="mr-20  mt-20 lg:mr-0 lg:mt-0 w-10 h-10 md:w-16 md:h-16 rounded-full flex justify-center items-center bg-Hwhite z-50 shadow-xl bg-opacity-50">
            <svg
              className="w-5 h-5 md:w-10 md:h-10"
              width="86"
              height="86"
              viewBox="0 0 86 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69.0889 35.7236L44.9014 11.5361C44.6518 11.2862 44.3554 11.088 44.0292 10.9528C43.7029 10.8175 43.3532 10.7479 43 10.7479C42.6469 10.7479 42.2971 10.8175 41.9709 10.9528C41.6446 11.088 41.3482 11.2862 41.0986 11.5361L16.9111 35.7236C16.4068 36.2279 16.1235 36.9118 16.1235 37.625C16.1235 38.3382 16.4068 39.0221 16.9111 39.5264C17.4154 40.0307 18.0994 40.314 18.8125 40.314C19.5257 40.314 20.2097 40.0307 20.7139 39.5264L40.3125 19.9245V72.5625C40.3125 73.2753 40.5957 73.9588 41.0997 74.4628C41.6037 74.9669 42.2873 75.25 43 75.25C43.7128 75.25 44.3964 74.9669 44.9004 74.4628C45.4044 73.9588 45.6875 73.2753 45.6875 72.5625V19.9245L65.2861 39.5264C65.7904 40.0307 66.4744 40.314 67.1875 40.314C67.9007 40.314 68.5847 40.0307 69.0889 39.5264C69.5932 39.0221 69.8765 38.3382 69.8765 37.625C69.8765 36.9118 69.5932 36.2279 69.0889 35.7236Z"
                fill="#0096C4"
              />
            </svg>
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-y-2 pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline  ">
          WELCOME TO HUIOSPAY’S WEB PLATFORM / SERVICES .
        </h1>
        <p className="text-sm text-gray-600 ">
          Please read these terms and conditions carefully before using the
          Services. By using the Services, you agree to be bound by these terms
          and conditions. This agreement contains the terms and conditions for
          the usage of this website. It is essential for users to read it, as it
          will affect relations between Huiospay and users. so read it
          carefully.
        </p>
        <p className="text-sm text-gray-600 ">
          Continuous usage will be construed as acceptance of the terms and
          conditions contained therein.
        </p>
        <p className="text-sm text-gray-600 ">
          These terms and conditions may be revised periodically and will take
          effect once updated on the site
        </p>
        <h1 className="text-xl text-blueMain font-bold text-left underline  ">
          DEFINITIONS
        </h1>
        <p className="text-sm text-gray-600 ">
          &quot;Content&quot;: Any data, information, text, software, images,
          audio, video, or other materials that are posted, uploaded,
          transmitted, or otherwise made available through the Services.
        </p>
        <p className="text-sm text-gray-600 ">
          &quot;User&quot;: Any individual or entity that accesses or uses the
          Services.
          <br />
          &quot;You&quot;: The User.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          ELIGIBILTY
        </h1>
        <p className="text-sm text-gray-600 ">
          You must be at least 18 years of age and a resident of Nigeria to use
          the Services.
        </p>
      </div>
      <div className="pt-5 flex flex-col gap-y-4">
        <h1 className="text-xl text-blueMain font-bold text-left underline  ">
          REGISTRATION
        </h1>
        <p className="text-sm text-gray-600 ">
          To use certain features of the Services, you may be required to
          register for an account. When registering for an account, you agree to
          provide accurate and complete information about yourself. You are
          responsible for maintaining the confidentiality of your account login
          information and for all activities that occur under your account. You
          agree to notify us immediately of any unauthorized use of your
          account.
        </p>
      </div>
      <div className="pt-5 flex flex-col gap-y-4">
        <h1 className="text-xl text-blueMain font-bold text-left underline  ">
          ACCESSIBILITY
        </h1>
        <div>
          <p className="text-sm text-gray-600 ">
            The website is freely accessible to all users although there might
            be limitations pending the creation of accounts and
            security/passwords before users can avail certain products and
            services.
            <br />
            Users are responsible for providing equipment, technologies, or
            software which gain them access to the internet and our site. In
            other words, users will be liable for their internet fees/charges to
            their service provider.
          </p>
          {/* <ul className="list-disc pl-5 text-sm text-gray-600 ">
            <li>Device Type</li>
            <li>Operating System</li>
            <li>Unique device identifiers</li>
          </ul> */}
        </div>
      </div>
      <div className="pt-5 flex flex-col gap-y-4">
        <h1 className="text-xl text-blueMain font-bold text-left underline  ">
          SECURITY
        </h1>
        <div>
          <p className="text-sm text-gray-600 ">
            Transactions on this site are secured and for users to have full
            functionality/access to our products and services they need to
            create accounts with appropriate passwords. Users are responsible
            for the safety and security of their account details. And user
            account may be disabled due to security breaches, abuses, or failure
            to comply with terms and conditions.
          </p>
        </div>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          ACCESS TO THE SERVICES
        </h1>
        <p className="text-sm text-gray-600 ">
          We may suspend or terminate your access to the Services at any time
          without notice or liability if we believe that you have violated any
          of these terms and conditions or if we believe that your use of the
          Services is harmful to our business or to other Users
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          USER CONDUCT
        </h1>
        <p className="text-sm text-gray-600 ">
          The purpose of the Huiospay website/platform is to enable and complete
          various legal commercial transactions and users may be disabled for
          inappropriate or unlawful usage. To enjoy access to our
          website/platforms users must undertake to do the following;
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-600 ">
          <li>
            {" "}
            Use the website/platform for lawful purposes and transactions.
          </li>
          <li>Operating System</li>
          <li>
            Avoid conduct deemed unlawful, abusive, libelous, threatening, and
            obscene or transmission of questionable materials with content that
            may infringe on the rights or sensibility of others.
          </li>
          <li>To keep to the theme of the site (commercial transactions)</li>
          <li>
            To ensure all information provided on the website is true and not
            false or misleading.
          </li>
          <li>
            Not post materials that may contain harmful soft wares or viruses.
          </li>
          <li>Not to violate any policy /guidelines of this website.</li>
          <li>
            Not to undertake any act or action that may disrupt normal
            services/flow of information and transactions on our website.
          </li>
        </ul>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          INTELLECTUAL PROPERTY/COPYRIGHT
        </h1>
        <p className="text-sm text-gray-600 ">
          Huiospay is the registered trademark of Huios Finance Limited and the
          owner of the Intellectual property of Huiospay and its platforms.
          Materials published therein are the property of Huiospay and all
          unauthorized use may lead to legal action.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          THIRD -PARTY &amp; LINKS
        </h1>
        <p className="text-sm text-gray-600 ">
          The Services may contain links to third-party websites or services
          that are not owned or controlled by HuiosPay. We have no control over,
          and assume no responsibility for, the content, privacy policies, or
          practices of any third-party websites or services. You further
          acknowledge and agree that HuiosPay shall not be responsible or
          liable, directly or indirectly, for any damage or loss caused or
          alleged to be caused by or in connection with the use of or reliance
          on any such content, goods or services available on or through any
          such websites or services.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          DISCLAIMER WARRANTIES
        </h1>
        <p className="text-sm text-gray-600 ">
          HuiosPay makes no warranties, express or implied, about the Services.
          The Services are provided &quot;as is&quot; and &quot;as
          available&quot;. We disclaim all warranties of merchantability,
          fitness for a particular purpose, and non-infringement.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          LIABILITY
        </h1>
        <p className="text-sm text-gray-600 ">
          Huiospay shall not be liable directly or indirectly, incidental or
          consequential for damages of any kind of losses as a result of;
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-600 ">
          <li> Unauthorized usage or access (hacking)</li>
          <li>Unauthorized statement or conduct by or attributed to users</li>
          <li>Exigencies of business.</li>
        </ul>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          INDEMNIFICATION
        </h1>
        <p className="text-sm text-gray-600 ">
          Users agree to indemnify Huiospay, its parent company, affiliates, and
          agents from any and all liabilities, claims, and expenses arising from
          breach of this Agreement except when caused by Huiospay’s intentional
          misconduct or gross negligence.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          MISCELLANEOUS
        </h1>
        <p className="text-sm text-gray-600 ">
          This agreement along with privacy services as the basis of the
          relationship between the users and Huiospay. This agreement is
          personal to the user and may not be assigned to anyone.
          <br />
          This agreement does not create any association, partnership, principal
          and agent, employee and employer, master and servant relation but
          rather independent parties.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          FEE
        </h1>
        <p className="text-sm text-gray-600 ">
          Upon enrolment on our sites, customers/users may be liable for such
          fees for certain services rendered. These may be monthly or otherwise
          depending on what services or product was used.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Termination
        </h1>
        <p className="text-sm text-gray-600 ">
          We may terminate your use of the Services at any time without notice
          or liability. We may also terminate your use of the Services if you
          violate any of these terms and conditions.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Changes to Terms and Conditions
        </h1>
        <p className="text-sm text-gray-600 ">
          We may update these terms and conditions from time to time. We will
          notify you of any material changes by posting the updated terms and
          conditions on our website. You are responsible for reviewing
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          GOVERNING LAW
        </h1>
        <p className="text-sm text-gray-600 ">
          The Laws of the Federal Republic of Nigeria shall govern this
          Agreement. The Nigerian courts have jurisdiction in relation to any
          dispute or claim arising out of or in connection with the terms or
          their subject matter or formation.F
        </p>
      </div>
    </div>
  );
};

export default Terms;
