import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';
import { enhancedImageAPI } from '../utils/enhanceimageApi';

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhanceImage, setEnhanceImage] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const uploadImageHandler = async (file) => {  //file coming from upload image , i need call API and then save image to uploadIMAGE 
    setUploadImage(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
    setLoading(true); // loading-Call API for enhanced image
    try {
      const enhancedResult = await enhancedImageAPI(file);
      if (!enhancedResult) throw new Error("Image not returned"); // fixed: check for URL string instead of object
      setEnhanceImage(enhancedResult); // fixed: result is a string (URL), not an object with .image
    } catch (error) {
      console.log("enhancement error", error);
      alert('facing some Error Please try again later');
    } finally {
      setLoading(false); // moved here so loading ends whether success or failure
    }
  };

  return (
    <div className="p-4">
      <ImageUpload 
        uploadImageHandler={uploadImageHandler}
      />
      <ImagePreview 
        uploaded={uploadImage}
        enhanced={enhanceImage}
        loading={loading}
      />
    </div>
  );
};

export default Home;

