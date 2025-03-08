import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import client1 from "../images/clients/client1.jpeg"
import client2 from "../images/clients/client2.jpeg"
import client3 from "../images/clients/client3.jpeg"
import client4 from "../images/clients/client4.jpeg"
import client5 from "../images/clients/client5.jpeg"

const reviews = [
  {
    name: "Sarah L.",
    image: client1,
    text: "I’ve worked with a few dispatch companies, but Pace Link Dispatch stands out. They communicate well, negotiate good rates, and always keep my best interests in mind.",
  },
  {
    name: "Michael T.",
    image: client3,
    text: "I was skeptical about using a dispatch service, but this team has made a big difference. They find loads that actually make sense for me, keep my downtime low, and handle all the paperwork. Couldn’t ask for better support.",
  },
  {
    name: "Emily R.",
    image: client4,
    text: "Excellent service! I get good rates, clear communication, and zero hassle. They know what they’re doing, and it shows in the way they operate.",
  },
  {
    name: "Daniel M.",
    image: client5,
    text: "Great experience so far! They understand my needs as a driver, and I’ve never felt pressured to take a load I didn’t want. Dispatching done right!",
  },
  {
    name: "John D.",
    image: client2,
    text: "Great dispatch service! They find me solid loads, handle the paperwork, and keep me moving. No forced dispatch, just smooth operations. Highly recommend!",
  },
];

const Clients = () => {
  return (
    <div className="mt-8 bg-gray-100" id="clients">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Clients
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Some of our clients' reviews.
          </h2>
        </div>

        <div className="p-16 pt-3" data-aos="fade-in" data-aos-delay="600">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="mx-auto mb-4 w-20 h-20 rounded-full object-cover"
                />
                <p className="text-lg italic text-gray-700">"{review.text}"</p>
                <h4 className="mt-4 font-bold text-blue-900">- {review.name}</h4>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Clients;
