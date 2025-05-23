import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  let text = "NO Enhanced Image"

  return (
    <div className='container mt-8 grid  md:grid-cols-2 gap-4 w-full max-w-[800px] ' > {/* medium ho toh grid col -2 ho jae */}
      
      {/* original image */}
      <div className="original-img bg-white shadow-lg overflow-hidden rounded-xl">
        <h2 className="font-semibold text-center text-xl text-white bg-gray-800 py-2">
          Original Image
        </h2>

        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt="Uploaded"
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="font-bold  flex items-center justify-center bg-gray-300 h-64 text-gray-600">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced  image */}
      <div className="updated-img bg-white shadow-lg overflow-hidden rounded-xl">{/* original image */}
        <h2 className='font-semibold text-center text-xl text-white bg-blue-800 py-2'>Enhanced  Image</h2>

        {props.loading ? (
          <Loading></Loading>
        ) : props.enhanced ? (
          <img src={props.enhanced} alt="" className='w-full h-64 object-cover transition-transform duration-300 hover:scale-105' /> /* object-cover means img/vedio cover full parent conatiner */
        ) : (
          <div className='font-bold  flex items-center justify-center bg-gray-300 h-64 text-gray-600'>NO Enhanced Image</div>
        )}

      </div>

    </div>
  )
}

export default ImagePreview
