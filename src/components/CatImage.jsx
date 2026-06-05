import { useState } from "react";
import catSilhouette from "../assets/catsilhouette.png";

import "../styles/CatImage.css";

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