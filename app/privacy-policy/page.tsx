
import AcccentTitle from "../components/AcccentTitle/AccentTitle";
import Title from "../components/Title/Title";
import "./style.scss";
import NexLink from "next/link";
export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy__ellipses"></div>
      <NexLink className="privacy-policy__backward" href="/">
        <svg
          width="41"
          height="14"
          viewBox="0 0 41 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 7H1M1 7L7.41772 0.5M1 7L7.41772 13.5"
            stroke="white"
            stroke-linecap="round"
          />
        </svg>
      </NexLink>
      <Title> Personal data conditions</Title>
      <AcccentTitle>User Agreement:</AcccentTitle>
      <p className="privacy-policy__text">
        Welcome to&nbsp;Sifox Technologies&rsquo; website. By&nbsp;using our
        services and providing your personal information, you agree to&nbsp;the
        terms and conditions outlined below:
      </p>
      <AcccentTitle>1. Information Collection: </AcccentTitle>
      <p className="privacy-policy__text">
        Sifox Technologies may collect personal data, including but not limited
        to&nbsp;your name, telephone number, and email address, when you choose
        to send&nbsp;us your questions or&nbsp;feedback via the website.
      </p>
      <AcccentTitle>2. Data Usage:</AcccentTitle>
      <p className="privacy-policy__text">
        Your personal information will be used solely for the purpose of
        addressing your inquiries or feedback. Sifox Technologies may also use
        your information for internal record-keeping, improvement of our
        products and services, and occasional promotional emails if you have
        opted to receive them.
      </p>
      <AcccentTitle>3. Data Protection:</AcccentTitle>
      <p className="privacy-policy__text">
        Your personal information will be&nbsp;used solely for the purpose of
        addressing your inquiries or&nbsp;feedback. Sifox Technologies may also
        use your information for internal record-keeping, improvement
        of&nbsp;our products and services, and occasional promotional emails
        if&nbsp;you have opted to&nbsp;receive them.
      </p>
      <AcccentTitle>4. Data Sharing:</AcccentTitle>
      <p className="privacy-policy__text">
        Sifox Technologies does not sell, trade, or&nbsp;otherwise transfer your
        personal information to&nbsp;outside parties unless required by&nbsp;law
        or&nbsp;as necessary to&nbsp;fulfill your requests.
      </p>
      <AcccentTitle>5. Cookies and Tracking:</AcccentTitle>
      <p className="privacy-policy__text">
        By&nbsp;using our website, you agree to&nbsp;the use of&nbsp;cookies and
        other tracking technologies to&nbsp;enhance your browsing experience and
        gather information about website traffic and usage patterns. You can
        adjust your browser settings to&nbsp;refuse cookies, although this may
        affect some website functionalities.
      </p>
      <AcccentTitle>6. Age Restrictions:</AcccentTitle>
      <p className="privacy-policy__text">
        Sifox Technologies&rsquo; website is&nbsp;intended for use
        by&nbsp;individuals who are at&nbsp;least 18&nbsp;years old. If&nbsp;you
        are under&nbsp;18, you may use the website under the supervision
        of&nbsp;a&nbsp;parent or&nbsp;legal guardian.
      </p>
      <AcccentTitle>7. Changes to Agreement:</AcccentTitle>
      <p className="privacy-policy__text">
        Sifox Technologies reserves the right to&nbsp;modify or&nbsp;update this
        User Agreement at&nbsp;any time. Users are encouraged to&nbsp;review
        this agreement periodically for any changes.
      </p>
      <p className="privacy-policy__text">
        By&nbsp;using the Sifox Technologies website, you agree to&nbsp;the
        terms and conditions stated above. If&nbsp;you do&nbsp;not agree with
        any part of&nbsp;this agreement, please refrain from using our website
        or&nbsp;providing any personal information.
      </p>
      <p className="privacy-policy__text">
        For any further information or&nbsp;inquiries regarding this agreement,
        please contact&nbsp;us at&nbsp;[insert contact information].
      </p>
      <p className="privacy-policy__text">
        Thank you for visiting Sifox Technologies.
      </p>
    </div>
  );
}
