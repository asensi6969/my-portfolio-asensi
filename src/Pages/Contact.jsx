import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      title: "Personal Number",
      value: "+63 915 954 9265",
      icon: <FaPhone />,
      link: "tel:+63915954926",
    },
    {
      title: "Email",
      value: "asensiangelo@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:asensiangelo@gmail.com",
    },
    {
      title: "LinkedIn",
      value: "Angelo Asensi",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/angelo-asensi-782103268",
    },
    {
      title: "Facebook",
      value: "Angelo Asensi",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/a.asensi26",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-6 py-12 md:px-12 lg:px-20">

      <div className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center">

        {/* Header */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#006b3c]">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold text-[#002512] md:text-5xl">
            Contact Me
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Feel free to reach out to me through any of the platforms below.
            I would be happy to connect and discuss opportunities, projects,
            or collaborations.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={
                contact.title === "LinkedIn" ||
                contact.title === "Facebook"
                  ? "_blank"
                  : undefined
              }
              rel={
                contact.title === "LinkedIn" ||
                contact.title === "Facebook"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#e5f3eb] text-2xl text-[#006b3c] transition duration-300 group-hover:bg-[#002512] group-hover:text-white">
                {contact.icon}
              </div>

              {/* Text */}
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500">
                  {contact.title}
                </p>

                <p className="break-all font-semibold text-[#002512]">
                  {contact.value}
                </p>
              </div>

            </a>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Contact;