import React from 'react';

const PrivacyPolicy = () => {
  const getCurrentDate = () => {
    return new Date().toLocaleDateString();
  };

  return (
    <div className="max-w-3xl mx-auto p-8 text-gray-800">
      {/* Section for Privacy Policy Title and Effective Date */}
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-8">
        Last updated: <span className="font-semibold">September 30, 2024</span>
      </p>

      {/* Introduction Section */}
      <p className="mb-6">
        At MechFinder, your privacy is important to us. This Privacy Policy
        outlines how we collect, use, and protect your personal data when you
        use our app. By using MechFinder, you agree to the practices described
        below.
      </p>

      {/* Information We Collect */}
      <h2 className="text-xl font-bold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect various types of information to provide and improve our
        services:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Personal Information:</strong> When you register on our app,
          we may collect personal information such as your name, contact details
          (email, phone number), and address.
        </li>
        <li>
          <strong>Profile Information:</strong> Service providers and shops will
          need to submit details like skills, work history, shop location, and
          service availability.
        </li>
        <li>
          <strong>Geolocation Data:</strong> We may collect your geolocation to
          show nearby service providers or users based on your location.
        </li>
        <li>
          <strong>Payment Information:</strong> Payment details are processed
          through third-party payment gateways like Razorpay. We do not store
          your payment details on our servers.
        </li>
        <li>
          <strong>Usage Data:</strong> We may collect data about how you use our
          app, including pages visited, time spent, and interactions within the
          app.
        </li>
      </ul>

      {/* How We Use Your Information */}
      <h2 className="text-xl font-bold mb-2">2. How We Use Your Information</h2>
      <p className="mb-6">
        We use your information for the following purposes:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>To Provide Services:</strong> We use your personal and profile
          information to connect users and service providers based on their
          needs and location.
        </li>
        <li>
          <strong>To Improve User Experience:</strong> Usage data helps us
          understand how you interact with the app and make improvements
          accordingly.
        </li>
        <li>
          <strong>To Facilitate Payments:</strong> Payment information is
          securely processed by our third-party provider Razorpay, ensuring a
          smooth transaction experience.
        </li>
        <li>
          <strong>To Ensure Safety:</strong> Personal details are verified and
          used to ensure safe interactions between users and service providers.
        </li>
      </ul>

      {/* Data Storage and Security */}
      <h2 className="text-xl font-bold mb-2">3. Data Storage and Security</h2>
      <p className="mb-6">
        All user data is securely stored using Firebase, a cloud platform
        managed by Google Cloud. Firebase provides state-of-the-art encryption
        to ensure your data is safe and protected. This includes:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Personal Data Encryption:</strong> Your personal information
          is encrypted both in transit and at rest.
        </li>
        <li>
          <strong>Access Control:</strong> Only authorized personnel have access
          to sensitive information, and strict policies are in place to prevent
          unauthorized access.
        </li>
      </ul>

      {/* Payment Security */}
      <h2 className="text-xl font-bold mb-2">4. Payment Security</h2>
      <p className="mb-6">
        For payment processing, we use Razorpay, a secure third-party payment
        gateway that adheres to the highest standards of data security and
        encryption. MechFinder does not store any payment details on its
        servers.
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>PCI-DSS Compliance:</strong> Razorpay complies with PCI-DSS
          regulations, ensuring your payment data is processed securely.
        </li>
        <li>
          <strong>Payment Information:</strong> Any payment-related information
          (e.g., credit card details) is handled by Razorpay, and we do not have
          access to it.
        </li>
      </ul>

      {/* Sharing Your Information */}
      <h2 className="text-xl font-bold mb-2">5. Sharing Your Information</h2>
      <p className="mb-6">
        We do not sell or rent your personal information to third parties.
        However, we may share your information under the following
        circumstances:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Service Providers:</strong> Your contact details and
          work-related information may be shared with service providers or users
          to facilitate connections based on your requests.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose information if
          required by law, such as complying with legal processes or protecting
          our rights.
        </li>
      </ul>

      {/* Your Rights */}
      <h2 className="text-xl font-bold mb-2">6. Your Rights</h2>
      <p className="mb-6">
        You have the right to:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Access Your Data</li>
        <li>Delete Your Data</li>
        <li>Update or Correct Your Data</li>
        <li>Withdraw Consent</li>
      </ul>

      {/* Cookies and Tracking */}
      <h2 className="text-xl font-bold mb-2">7. Cookies and Tracking Technologies</h2>
      <p className="mb-6">
        We use cookies and similar technologies to enhance your experience on
        MechFinder.
      </p>

      {/* Changes to Policy */}
      <h2 className="text-xl font-bold mb-2">8. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy periodically to reflect changes in our
        practices or for other operational, legal, or regulatory reasons. Any
        updates will be posted here, and the effective date will be updated
        accordingly.
      </p>

      {/* Contact Us */}
      <h2 className="text-xl font-bold mb-2">9. Contact Us</h2>
      <p className="mb-6">
        If you have any questions or concerns regarding this Privacy Policy or
        your data, feel free to contact us at:
      </p>
      <ul className="list-disc pl-8">
        <li>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:mechfinderhelp@gmail.com"
            className="text-blue-600 underline"
          >
            mechfinderhelp@gmail.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> 09818908237 , 9310079927
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
