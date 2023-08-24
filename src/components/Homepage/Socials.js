import { faIndustry, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Socials = () => {
  return (
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Things you can except from us
          </h2>
          <p class="text-gray-500 sm:text-xl">
            Ad duis mollit nostrud commodo nostrud nulla qui non exercitation
            consequat incididunt. Adipisicing occaecat consequat occaecat nulla
            nisi commodo labore ad.
          </p>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 ">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h3 class="mb-2 text-xl font-bold">Local Products</h3>
            <p class="text-gray-800">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 ">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h3 class="mb-2 text-xl font-bold">Local Products</h3>
            <p class="text-gray-800">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 ">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h3 class="mb-2 text-xl font-bold">Local Products</h3>
            <p class="text-gray-800">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 ">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h3 class="mb-2 text-xl font-bold">Local Products</h3>
            <p class="text-gray-800">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 ">
              <FontAwesomeIcon icon={faIndustry} />
            </div>
            <h3 class="mb-2 text-xl font-bold">Fertilizer</h3>
            <p class="text-gray-800">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 ">
              <FontAwesomeIcon icon={faIndustry} />
            </div>
            <h3 class="mb-2 text-xl font-bold">Fertilizer</h3>
            <p class="text-gray-800">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
