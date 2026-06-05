import { useState } from "react";
// Import img CatSilhoutte from assets map
import catSilhouette from "../assets/catsilhouette.png";

// Import CSS style for catimage
import "../styles/CatImage.css";

// Reusable component for cat error img 
function CatImage({ src, alt, ...props }) {
  const [isFallback, setIsFallback] = useState(false);

  return (
    <img
      src={isFallback ? catSilhouette : src}
      alt={alt}
      className={isFallback ? "fallback-image" : ""}
      onError={() => setIsFallback(true)}
      {...props}
    />
  );
}

export default CatImage;