import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
 import { RxCross1 } from "react-icons/rx";


const Grid = ({ photos, setPhotos }) => {
  const [hoveredPhoto, setHoveredPhoto] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete/${id}`);
      setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo._id !== id));
      toast.success("Deleted Successfully");

       setSelectedPhoto(null);
    } catch (error) {
      toast.error("Error deleting photo", error);
    }
  };

  const handleImageClick = (id) => {
    setSelectedPhoto(selectedPhoto === id ? null : id);
  };

  useEffect(() => {
     const handleOverlayClick = () => {
      setSelectedPhoto(null);
    };

     return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  return (
    <>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div
            key={_id}
            className={`grid__item ${selectedPhoto === _id ? "selected" : ""}`}
            onMouseEnter={() => setHoveredPhoto(_id)}
            onMouseLeave={() => setHoveredPhoto(null)}
            onClick={() => handleImageClick(_id)}
          >
            {hoveredPhoto === _id && (
              <button className="delete-button" onClick={() => handleDelete(_id)}>
                <FaRegTrashAlt />
              </button>
            )}
            <img
              src={`http://localhost:5000/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <div className="preview-overlay">
          <button
            className="cancel-button"
            onClick={() => setSelectedPhoto(null)}
          >
            <RxCross1 />

           </button>

          <img
            className="preview-image"
            src={`http://localhost:5000/uploads/${photos.find((photo) => photo._id === selectedPhoto)?.photo}`}
            alt="preview"
          />
        </div>
      )}
      <Toaster />
    </>
  );
};

export default Grid;
