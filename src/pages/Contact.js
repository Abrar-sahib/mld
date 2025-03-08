import React, { useState, useRef } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useDocTitle("MLD | Molad e Konsult - Send us a message");

  const form = useRef(null); // ✅ Added form reference
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const clearErrors = () => setErrors({});

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";

    console.log(form);
    

    emailjs
      .sendForm("service_yzlc1g5", "template_mectt9k", form.current, {
        publicKey: "mIFrgL3hgv9Mvt5yf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message.");
        }
      )
      .finally(() => {
        setLoading(false);
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Send Message";
      });
  };

  return (
    <>
      <NavBar />
      <div id="contact" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <form ref={form} onSubmit={sendEmail}>
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                Send us a message
              </h1>
              <h2 className="font-bold text-center lg:text-left text-blue-900 uppercase text-xl mt-3">
                &quot;Let us elevate your growth with our expert dispatch services.&quot;
              </h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="from_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    required
                  />
                </div>
                <div>
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name*"
                    required
                  />
                </div>
                <div>
                  <input
                    name="from_email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div>
                  <input
                    name="from_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="tel"
                    placeholder="Phone*"
                    required
                  />
                </div>
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  disabled={loading}
                  className={`uppercase text-sm font-bold tracking-wide ${
                    loading ? "bg-gray-400" : "bg-gray-500 hover:bg-blue-900"
                  } text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline`}
                >
                  {loading ? "Loading..." : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
