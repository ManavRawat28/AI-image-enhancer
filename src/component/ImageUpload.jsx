import React from 'react';

const ImageUpload = (props) => {

;
 const showImageHandler=(e)=>{
    const file=e.target.files[0]
     if(file){
      props.uploadImageHandler(file)// sending to HOME
     }
 }

  return (
    <div className={`bg-white shadow-lg rounded-2xl p-6  transition duration-300 hover:text-blue-400 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] md: max-w-[800px] lg:min-w-[800px]`}>
      <label
        htmlFor="fileInput"
        className="block cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-300 transition-all"
      >
        <input type="file" id="fileInput" className="hidden" onChange={showImageHandler} />
        <span className="text-lg font-medium text-gray-600">
          Click and drag to upload your image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;

