import React from "react";
import { Rating } from "@mui/material";

const TestimonialCard = ({ comment, rating, imgurl, user }) => {
  return (
    <div className="max-w-lg mx-auto shadow-lg rounded-lg p-8">
      <div className="flex items-start space-x-4">
        <div>
          <p className="text-lg text-gray-700 italic mb-4">{comment}</p>
          <div className="text-sm flex items-center text-gray-500">
            <img
              src={imgurl} // replace this with the actual image URL
              alt="Mary-Ann Doe"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-col ml-4">
              <p className="font-semibold text-sm">{user}</p>
              <Rating name="rating" value={rating} readOnly className="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
