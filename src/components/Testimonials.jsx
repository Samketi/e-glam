import React from "react";
import t4 from "../assets/img/testimonial4.jpg";
import t5 from "../assets/img/testimonial1.jpg";
import t6 from "../assets/img/testimonial2.jpg";
import t8 from "../assets/img/testimonial4.jpg";

// Testimonials data
const testimonials = [
  {
    comment:
      "I love your system. I am completely blown away. Cribrocket is exactly what our business has been lacking.",
    rating: 5,
    imgUrl: t4,
    user: "Mary-Ann Doe",
  },
  {
    comment:
      "The user experience is fantastic and the support team is very responsive.",
    rating: 4,
    imgUrl: t5,
    user: "John Smith",
  },
  {
    comment:
      "This product has greatly improved our efficiency and productivity.",
    rating: 5,
    imgUrl: t6,
    user: "Alice Johnson",
  },
  {
    comment: "There are some minor bugs but overall a great system.",
    rating: 3,
    imgUrl: t8,
    user: "Michael Brown",
  },
  // {
  //   comment: "The integration was seamless and the features are very useful.",
  //   rating: 4,
  //   imgUrl: "src/assets/testimonial2.jpg",
  //   user: "Emily Davis",
  // },
];

const Testimonials = () => {
  return (
    <div className="px-4 bg-[#9a8c98] py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-m uppercase  font-bold text-center text-[#f2e9e4] mb-8">
          Testimonials
          <span className="block mt-2 h-1 w-10 bg-red-600 mx-auto"></span>
        </h2>

        <div className="flex ">
          <div className="w-[20%] text-left hidden pr-4 md:grid">
            <h1 className="relative mt-10 text-2xl font-bold  text-[#f2e9e4]">
              DONT <br /> TAKE OUR <br /> WORDS,{" "}
            </h1>
            <p className="text-[#f2e9e4]">TAKE THEIRS ...</p>
          </div>
          <div className=" w-full overall items-centre gap-20 grid grid-cols-2 ml-1 sm:flex sm:gap-2">
            {testimonials.map((testimonial, key) => (
              <div
                key={key}
                className={`max-w-lg mx-auto shadow-lg bg-[#4a4e69]  p-8 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105
      }`}
              >
                <div>
                  <p className="text-sm text-[#f2e9e4] italic mb-4 flex-grow">
                    {testimonial.comment}
                  </p>
                </div>
                <div className="grid items-center text-[#f2e9e4] mt-4 sm:flex">
                  <img
                    src={testimonial.imgUrl} // replace this with the actual image URL
                    alt="Mary-Ann Doe"
                    className="w-12 h-12 rounded-full hidden md:block"
                  />
                  <div className="flex-col ml-4">
                    <p className="font-semibold text-sm">{testimonial.user}</p>
                    {/* <Rating
                      name="rating"
                      value={testimonial.rating}
                      readOnly
                      className="mt-3"
                      size="small"
                    /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
