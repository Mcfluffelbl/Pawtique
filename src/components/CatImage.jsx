import catSilhouette from "../assets/catsilhouette.png";


function CatImage({ src, alt, ...props }) {
  return (
    <img
      src={src || catSilhouette}
      alt={alt}
      onError={(e) => {
        e.target.src = catSilhouette;
      }}
      {...props}
    />
  )
}

export default CatImage