import { useEffect, useState } from "react";
import "./ImagesInputField.css"

interface imagesInputFieldInterface {
  onChange: (input: FileList | null) => void,
  uploadedImages: FileList | null,
  error: boolean
}

const ImagesInputField = (props: imagesInputFieldInterface) => {
  const { onChange, uploadedImages, error } = props

  const [imageUrls, setImageUrls] = useState<string[]>([])

  useEffect(() => {
    if (uploadedImages) {
      var newImages = []
      for (var i = 0; i < uploadedImages.length; i++) {
        newImages.push(URL.createObjectURL(uploadedImages[i]))
        setImageUrls(newImages)
      }
    }
  }, [uploadedImages])

  return (
    <div>
      <div className="label">Images</div>
      <label className={error ? "fileUpload error" : "fileUpload"}>
        <input type="file" onChange={(event) => onChange(event.target.files)} multiple />
        Click to {uploadedImages ? "Re-Upload" : "Upload"}
      </label>
      {error && <div className="errorText">Upload Images</div>}
      {uploadedImages && <div className="imageViewer">
        {
          imageUrls.map(url => {
            return (
              <img src={url} alt="uploaded" className="uploadedImage" />
            )
          })
        }
      </div>}
    </div>
  );
};

export default ImagesInputField;