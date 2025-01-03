import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { imageDetails } from '../Store/Slices/Imageslices';
import { GiSpinningBlades } from 'react-icons/gi';

function Details() {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            dispatch(imageDetails(params.id));
        }
    }, [params.id, dispatch]);

    const image = useSelector((state) => state.imageList.details || {});

    return (
        <div className="p-6 max-w-4xl mx-auto bg-gray-100 shadow-md rounded-lg">
            <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Back
            </button>

            {image.download_url ? (
                <div className="mt-6">
                    <img
                        className="w-full h-auto object-cover rounded-md shadow-lg"
                        src={image.download_url}
                        alt="Image details"
                    />
                    <div className="mt-4 text-center">
                        <a
                           target="_blank"
                            href={image.download_url}
                            download
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition inline-block"
                        >
                            Download
                        </a>
                    </div>
                </div>
            ) : (
                <h1 className="justify-center items-center gap-3  text-2xl flex font-semibold text-gray-700">
                        Loading <GiSpinningBlades className="animate-spin"/>
                       </h1>
            )}
        </div>
    );
}

export default Details;
