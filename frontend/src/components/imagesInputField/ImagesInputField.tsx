import { useEffect, useState } from "react";
import "./ImagesInputField.css"

interface imagesInputFieldInterface {
  onChange: (input: FileList | null) => void,
  uploadedImages: FileList | null
}

const ImagesInputField = (props: imagesInputFieldInterface) => {
  const { onChange, uploadedImages } = props

  const [imageUrls, setImageUrls] = useState<string[]>([])

  useEffect(() => {
    if (uploadedImages) {
      for (var i = 0; i < uploadedImages.length; i++) {
        var newImages = []
        newImages.push(URL.createObjectURL(uploadedImages[i]))
        setImageUrls(newImages)
      }
    }
  }, [uploadedImages])

  return (
    <div>
      {uploadedImages ?
        <div className="imageViewer">
          {
            imageUrls.map(url => {
              return (
                <img src={url} alt="uploaded" className="uploadedImage" />
              )
            })
          }
        </div>
        : <div>
          <div className="label">Images</div>
          <label className="fileUpload">
            <input type="file" onChange={(event) => onChange(event.target.files)} />
            Click to Upload
          </label>
        </div>}
    </div>
  );
};

export default ImagesInputField;