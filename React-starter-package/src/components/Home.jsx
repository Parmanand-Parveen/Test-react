import React, { useEffect, useState } from "react";
import { getImages } from "../Store/Slices/Imageslices";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { GiSpinningBlades } from "react-icons/gi";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [count, setCount] = useState(1); // Start from page 1

  useEffect(() => {
    dispatch(getImages(count));
  }, [dispatch, count]);

  const images = useSelector((state) => state.imageList);

  const getDetails = (id) => {
    navigate(`/${id}`);
  };

  const handlePreviousPage = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleNextPage = () => {
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePreviousPage}
          disabled={count === 1}
          className={`px-4 py-2 rounded-md ${
            count === 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600 transition"
          }`}
        >
          Previous Page
        </button>
        <p className="text-lg font-semibold">
          Page: <span className="text-blue-500">{count}</span>
        </p>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Next Page
        </button>
      </div>
      {images.loading ? (
        <h1 className="justify-center items-center gap-3  text-2xl flex font-semibold text-gray-700">
         Loading <GiSpinningBlades className="animate-spin"/>
        </h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.images.map((image) => (
            <div
              className="relative group overflow-hidden bg-white shadow-md rounded-lg cursor-pointer transform transition hover:scale-105"
              key={image.id}
              onClick={() => getDetails(image.id)}
            >
              <img
                className="w-full h-64 object-cover group-hover:opacity-75 transition duration-300"
                src={image.download_url}
                alt={image.author}
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">
                  {image.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
