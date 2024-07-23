import React, { useState } from "react";
import Modal from "react-modal";
import t1 from "../assets/img/testimonial1.jpg";
import t2 from "../assets/img/testimonial2.jpg";

import t4 from "../assets/img/testimonial4.jpg";
import t5 from "../assets/img/testimonial1.jpg";
import t6 from "../assets/img/testimonial2.jpg";
import t8 from "../assets/img/testimonial4.jpg";

const images = [t1, t2, t4, t5, t6, t8, t1, t2, t4, t5, t6, t8];
const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full py-10 px-4">
      <h2 className="text-m uppercase font-bold text-center text-gray-900 mb-8">
        OUR Gallery
        <span className="block mt-2 h-1 w-10 bg-[#ffafcc] mx-auto"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden relative cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index}`}
              className="w-[300px] h-[250px] object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl"
          >
            &times;
          </button>
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          >
            &lt;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Gallery ${currentImageIndex}`}
            className="max-w-full max-h-full"
          />
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          >
            &gt;
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
