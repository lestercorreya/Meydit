import { useEffect, useState } from "react";

import "./ImagesInputField.css"

import DetailsInterface from "../../interfaces";

interface imagesInputFieldInterface {
  onChange: <key extends keyof DetailsInterface>(field: key, input: DetailsInterface[key]) => void,
  value: FileList | null | undefined,
  error: boolean,
  field: keyof DetailsInterface
}

const ImagesInputField = (props: imagesInputFieldInterface) => {
  const { onChange, value, error, field } = props

  const [imageUrls, setImageUrls] = useState<string[]>([])

  useEffect(() => {
    if (value) {
      var newImages = []
      for (var i = 0; i < value.length; i++) {
        newImages.push(URL.createObjectURL(value[i]))
        setImageUrls(newImages)
      }
    }
  }, [value])

  return (
    <div>
      <label className={error ? "fileUpload error" : "fileUpload"}>
        <input type="file" onChange={(event) => onChange(field, event.target.files)} multiple />
        Click to {value ? "Re-Upload" : "Upload"}
      </label>
      {value && <div className="imageViewer">
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