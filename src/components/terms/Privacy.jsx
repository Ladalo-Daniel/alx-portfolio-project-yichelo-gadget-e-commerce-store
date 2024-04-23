import React from "react";

const Privacy = () => {
  return (
    <div className="p-5 relative" id="top">
      <header className="flex justify-center">
        <h1 className="text-2xl text-blueMain font-bold text-center ">
          Privacy Policy
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
        <p className="text-sm text-gray-600 ">
         PaySlate is a product of  HuiosPay Limited, a leading financial technology (FinTech) payment
          processing company in Nigeria with emphasis on creating cutting edge
          innovative solutions in facilitating safe, transparent and secured
          electronic payment solutions (payment solutions services, payment
          terminal services) for businesses in Nigeria. Our Offices are located
          at No 28 Adetokunbo Ademola Crescent, Wuse 2 Abuja.RC No.1855526
        </p>
        <p className="text-sm text-gray-600 ">
          PaySlate is committed to protecting the privacy of your personal data.
          This Privacy Policy explains how we collect, use, and disclose your
          personal data when you use our website, mobile applications, and other
          services.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Objective
        </h1>
        <p className="text-sm text-gray-600 ">
          This Privacy Policy enlightens users about their privacy rights
          regarding our collection, use, storage, sharing and protection of
          personal information.It applies to the HuiosPay website and other
          related sites, applications, services and tools regardless of how they
          are accessed or used.
        </p>
      </div>
      <div className="pt-5 flex flex-col gap-y-4">
        <h1 className="text-xl text-blueMain font-bold text-left underline  ">
          What is Personal Information or Data?
        </h1>
        <p className="text-sm text-gray-600 ">
          What is Personal Information or Data?
        </p>
        <p className="text-sm text-gray-600 ">
          {" "}
          Personal information or data refers to any information that can be
          used to identify an individual, such as their name, address, phone
          number, email address, date of birth, identification documents and
          financial information
        </p>
        <p className="text-sm text-gray-600 ">
          Personal data is defined according to the Nigerian Data Protection
          Regulation/General Data Protection Regulation as: “Any information
          relating to an identified or identifiable natural person; an
          identifiable natural person is one who can be identified, directly or
          indirectly, in particular by reference to an identifier such as name,
          an Identification number, location data, an online identifier or to
          one or more factors specific to the physical, physiological, genetic,
          mental economic, cultural or social identity of that natural person.”
        </p>
        <p className="text-sm text-gray-600 ">
          HuiosPay Privacy Policy is in compliance with industry regulations; it
          provides information on how data is securely collected, processed and
          stored in a responsible and sustainable manner.
        </p>
        <p className="text-sm text-gray-600 ">
          This privacy policy will explain how our organization uses the
          personal data we collect from our customers and related partners when
          they use any of our platforms or subscribe to any of our services and
          products.
        </p>
      </div>
      <div className="pt-5 flex flex-col gap-y-4">
        <h1 className="text-xl text-blueMain font-bold text-left underline  ">
          Collection of Personal Information
        </h1>
        <div>
          <p className="text-sm text-gray-600 ">
            To ensure smooth transactions we require personal identifiable
            information/data popularly known as KYC (Know Your Customer). This
            information is specific to an individual. These include email,
            address, phone number, date of birth, name e.t.c
          </p>
          {/* <ul className="list-disc pl-5 text-sm text-gray-600 ">
            <li>Device Type</li>
            <li>Operating System</li>
            <li>Unique device identifiers</li>
          </ul> */}
        </div>

        {/* <p className="text-sm text-gray-600 ">
          {" "}
          Data we collect can depend on the individual settings of your device
          and software. We recommend checking the policies of your device
          manufacturer or software provider to learn what information they make
          available to us.
        </p> */}
      </div>
      <div className="pt-5 flex flex-col gap-y-4">
        <h1 className="text-xl text-blueMain font-bold text-left underline  ">
          What Personal Data Do We Collect and How it is Collected?
        </h1>
        <div>
          <p className="text-sm text-gray-600 ">
            We collect the following types of personal data from you; data could
            be collected either electronically (automatically) or manually:
            <br />
            <b>Information you provide to us:</b> We collect personal data that
            you provide to us when you create an account, use our Services, or
            contact us for customer support. This may include your name,
            address, phone number, email address, date of birth, and financial
            information.
            <br />
            <b>Information we collect automatically:</b> We automatically
            collect certain non-personal data when you use our Services, such as
            your IP address, device type, browser type, and referring URL.
            <br />
            <b>Information from third parties:</b> We may collect personal data
            about you from third parties, such as credit bureaus ,social media
            platform or other financial service providers and other related
            agencies.
            <br />
            <b>Information collected manually:</b> we may collect customer’s
            data when they visit our physical locations for inquiries or enter
            data manually for our services and products. We may collect
            customers’ data through our customer services platforms which
            includes phone calls, emails, social media and other communication
            medium.
          </p>
        </div>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Usage of Information
        </h1>
        <p className="text-sm text-gray-600 ">
          The main purpose of data collection is to ensure the provision of a
          seamless, reliable, efficient and secure customer experience; with the
          aim of exceeding customer service excellence and achieving each
          individual customer’s needs. We also collect information which aids in
          ensuring and enhancing customer service experience specific to each
          customer, for purpose of credit checks and accuracy of information.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          How Do We Use Your Personal Data?
        </h1>
        <p className="text-sm text-gray-600 ">
          We use your personal data for the following purposes:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-600 ">
          <li>
            <b>To provide you with our Services:</b> We use your personal data
            to provide you with our Services, such as processing payments,
            opening accounts, and providing customer support. HuiosPay may send
            notifications (alerts) about transactions, verifying identity,
            account creation/maintenance and other auxiliary services
            (passwords, dispute resolution challenges, fraud prevention, policy
            violation detection/prevention, troubleshooting e.t.c)
          </li>
          <li>
            <b>To improve our Services:</b> We use your personal data to improve
            our Services, such as by analyzing website traffic and user
            behavior. We may contact you electronically or manually to conduct
            polls, surveys, distribution of questionnaires on HuiosPay Services
            and products.
          </li>
          <li>
            <b> To send you marketing communications:</b> We may use your
            personal data to send you marketing communications, such as emails
            and promotional offers.
          </li>
          <li>
            {" "}
            <b> To protect our business:</b> We use your personal data to
            protect our business, such as by preventing fraud and detecting and
            investigating security breaches.
          </li>
        </ul>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          How Do We Disclose or Share Your Personal Data?
        </h1>
        <p className="text-sm text-gray-600 ">
          We may disclose or share your personal information or data with other
          HuiosPay Users and Other third parties:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-600 ">
          <li>
            <b>Members of the HuiosPay Team:</b> to provide joint content,
            products, and services (such as registration, transactions and
            customer support), to help detect and prevent potentially illegal
            acts and violations of our policies, and to guide decisions about
            their products, services, and communications. This information will
            only be used for marketing communications only, if customers have
            requested for the services.
          </li>
          <li>
            <b>Financial institutions:</b> that we partner with to jointly
            create and offer a product may only use this information to market
            HuiosPay related products, unless customer has given consent for
            other uses.
          </li>
          <li>
            <b> Credit bureaus and collection agencies:</b>to report account
            information, as permitted by law.
          </li>
          <li>
            {" "}
            <b> Banking partners:</b> as required by credit/debit card
            association rules for inclusion on their list of terminated
            merchants.
          </li>
          <li>
            <b>Companies:</b> that we plan to merge with or are acquired by.
            (Should such a combination occur, we will require that the new
            combined entity follow this Privacy Policy with respect to customer
            personal information. Customer will receive prior notice if personal
            information would be used contrary to this policy).
          </li>
          <li>
            <b>
              {" "}
              Law enforcement, government officials, or other third parties
              Agencies:
            </b>
            pursuant to a subpoena, court order, or other legal process or
            requirement applicable to HuiosPay or one of its affiliates; We may
            disclose your personal data to law enforcement agencies if we are
            required to do so by law or in complying with law or credit/debit
            card rules. if we believe that it is necessary to protect our rights
            or the rights of others. Also, in our sole discretion, that the
            disclosure of personal information is necessary to prevent physical
            harm or financial loss, to report suspected illegal activity or to
            investigate violations of our User Agreement.
          </li>
          <li>
            {" "}
            HuiosPay may share your personal information with other third
            parties in certain circumstances or/and for the following purposes:
          </li>
          <ul className="list-decimal pl-5 text-sm text-gray-600 ">
            <li>
              {" "}
              Fraud Prevention and Risk Management: to help prevent fraud or
              assess and manage risk.
            </li>
            <li>
              {" "}
              Customer Service: for customer service purposes, including to help
              service your accounts or resolve disputes.
            </li>
            <li>
              {" "}
              Shipping: in connection with shipping and related services for
              purchases made using HuiosPay Services.
            </li>
            <li>
              {" "}
              Legal Compliance: to help them comply with anti-money laundering,
              counter-terrorist financing verification requirements and the
              Central Bank of Nigeria regulations on Know Your Customer (KYC).
            </li>
          </ul>
          <li>
            {" "}
            Service Providers:We may disclose your personal data to service
            providers who help us to provide our Services, such as payment
            processors and cloud hosting providers to enable them under contract
            with us to support our business operations, such as fraud
            prevention, bill collection, marketing, customer service, address
            verification and technology services. Our contracts dictate that
            these service providers only use customer information in connection
            with the services they perform for us and not for their own benefit.
          </li>
          <li>
            {" "}
            <li>
              {" "}
              With your consent or direction to do so to other third parties.
            </li>
            <ul className="list-item pl-5 text-sm text-gray-600 ">
              <li>
                {" "}
                Kindly note that these third parties may be in other countries
                where the laws on processing personal information may be less
                stringent than in our country of primary jurisprudence.
              </li>
              <li>
                We will not be liable to or for the use of any of our products
                and services on a third-party website or application except we
                state otherwise. Any information that are entered on such
                systems (and not directly on an HuiosPay platforms) will be
                shared with the owner of the third-party website or application.
                These sites are having their own privacy policies and customers
                are encouraged to review their privacy policies before providing
                them with personal information. HuiosPay is not responsible for
                the content or information practices of such third parties.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Marketing
        </h1>
        <p className="text-sm text-gray-600 ">
          We do not sell or rent your personal information to third party for
          their marketing promotions. We may combine customer’s information from
          our database with that collected from other companies and use it to
          improve HuiosPay Services, platforms, and advertisements. We have also
          included options for customers that had initially subscribed to
          receiving notifications or information about our products and services
          to opt out, unsubscribe or request to be removed from applicable
          database.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Customer Data Protection Rights
        </h1>
        <p className="text-sm text-gray-600 ">
          Our customers have inalienable data protection rights and are entitled
          to the following:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-600 ">
          <li>
            <b>The right to access your personal data–</b>Customer have the
            right to request for copies of their personal data that we hold.
            HuiosPay may charge a fee for this service
          </li>
          <li>
            <b>The right to rectification of inaccurate personal data-</b>{" "}
            Customers have the right to: request that HuiosPay rectifies any
            information they believe and have proven have been captured
            inaccurately. Customers also have the right to request HuiosPay to
            complete the information they believe is incomplete.
          </li>
          <li>
            <b> The right to erasure of your personal data–</b>Customers have
            the right to: request that HuiosPay erases their personal data,
            under certain conditions. These conditions are not limited to
            regulatory requirements, law enforcement agencies, or where such
            action may cause disruption to our system.
          </li>
          <li>
            {" "}
            <b>
              {" "}
              The right to restrict processing of your personal data: –
            </b>{" "}
            Customers have the right to: request that HuiosPay restricts the
            processing of their personal data, under certain conditions.
          </li>
          <li>
            <b> The right to object to processing of your personal data:–</b>
            Customers have the right to object to HuiosPay processing of your
            personal data, under certain conditions.
          </li>
          <li>
            {" "}
            <b> The right to data portability –</b> Customers have the right to:
            request to receive your personal data that HuiosPay may have
            collected in a structured, commonly used, and machine-readable
            format and to have it transmitted to another controller.another
            organization, or directly to them, under certain conditions.
          </li>
        </ul>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          How to Exercise Your Rights
        </h1>
        <p className="text-sm text-gray-600 ">
          To exercise any of your rights, please contact us at
          contactus@huiospay.com
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Cookies and Similar Technologies
        </h1>
        <p className="text-sm text-gray-600 ">
          We use cookies and similar technologies to enhance your experience on
          our website and improve our services. You can manage your cookie
          preferences through your browser settings. For detailed information on
          the cookies and how we use them see our  Cookie Policy.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Third-Party Links
        </h1>
        <p className="text-sm text-gray-600 ">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these third-party
          sites.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Data Security
        </h1>
        <p className="text-sm text-gray-600 ">
          We have implemented appropriate security measures to protect your
          personal data from unauthorized access, use, disclosure, alteration,
          or destruction.These measures include:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-600 ">
          <li>
            <b>Physical security measures:–</b>We have implemented physical
            security measures to protect our data centers, including access
            control systems and security cameras.
          </li>
          <li>
            <b>Technical security measures:</b> We have implemented technical
            security measures to protect our data, such as encryption and
            firewalls.
          </li>
          <li>
            <b> Organizational security measures:–</b>We have implemented
            organizational security measures to protect our data, such as data
            breach reporting procedures and employee training.
          </li>
        </ul>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Data Retention
        </h1>
        <p className="text-sm text-gray-600 ">
          We will retain your personal data for no longer than is necessary for
          the purposes for which it was collected.Customer request based on any
          of the rights above shall be handled within a reasonable time.
          Customer may contact us by email (contactus@huiospay.com) or our phone
          lines.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Remedies
        </h1>
        <p className="text-sm text-gray-600 ">
          Upon becoming aware of any violation of the Policy, the company shall
          assess the depth of the violation and take all available action to
          remedy, modify, correct and any and all other actions as available
          according to the law. This may be done reasonably within 30 days.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Privacy Policy Changes And Privacy
        </h1>
        <p className="text-sm text-gray-600 ">
          We may update this Privacy Policy from time to time as our Privacy
          Policies are reviewed periodically in line with current regulations
          and developments in the industry. We will notify you of any material
          changes by posting the updated Privacy Policy on our website and our
          various platforms.
          <bbr />
          Whenever your personal information is collected, we would inform you
          of your rights and channels available to exercise your rights.
          Alternatively, we also let you manage how much information you wish or
          choose to share.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Compliance With Nigeria Data Protection Regulation (NDPR)
        </h1>
        <p className="text-sm text-gray-600 ">
          We comply with the Nigeria Data Protection Regulation (NDPR) and other
          applicable data protection laws.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Consent
        </h1>
        <p className="text-sm text-gray-600 ">
          Your consent to our Privacy Policy is implied once you make use of any
          of our products or services on any of our platforms although your
          consent will often be sought before usage. (websites, contents,
          technologies, etc.)
          <br />
          It is important to note that consent can be explicitly withdrawn at
          any given time through appropriate channels and services will cease or
          be stopped. Consent and withdrawal for those below 18 or those legally
          unfit or otherwise must be by the appropriate person.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Additional Information
        </h1>
        <p className="text-sm text-gray-600 ">
          Customer Data Protection Rights are preserved. This Privacy Policy
          without an explicit contract, governs the use of HuiosPay Services by
          users. For more detailed information on how we process your personal
          data, please refer to our Data Protection Notice.
        </p>
      </div>
      <div className="pt-5">
        <h1 className="text-xl text-blueMain font-bold text-left underline pb-5 ">
          Contact Us
        </h1>
        <p className="text-sm text-gray-600 ">
          If you have concerns or any questions about this Privacy Policy,and
          would like to exercise your protection rights; Please contact us at
          contactus@huiospay.com or privacy@huiospay.com .<br />
          Our Customer Contact Centre :+234(0) 8037086670 |(0) 8096247247
        </p>
      </div>
    </div>
  );
};

export default Privacy;
