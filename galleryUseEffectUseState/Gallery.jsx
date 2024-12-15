import React, { useState, useEffect } from "react";

import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos ")
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Ошибка загрузки изображений.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Загрузка изображений...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.thumbnailUrl}
            alt={image.title}
            style={{ width: "100px", height: "100px", cursor: "pointer" }}
            onClick={() => setSelectedImage(image.url)}
          />
        ))}
      </div>
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
