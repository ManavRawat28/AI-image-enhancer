import Home from './component/Home'
import './App.css'

function App() {
 

  return (
   <div className='bg-hero flex flex-col justify-center flex-wrap items-center min-h-[100vh] bg-gray-100 px-4 py-8 w-full'>
    <div className='text-center mb-8'>
       <h1 className='text-5xl md:text-6xl font-extrabold text-white mb-4 transition duration-300 hover:text-blue-400 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]'>AI Image Enhancer</h1> 
       <p className='text-lg text-gray-500'> Upload your Image and let AI enhance it for you</p>
    </div>
    <Home className='w-full'></Home>
    <div className='text-sm text-gray-400'> 
      powered by @sherians
    </div>
   </div>
  )
}

export default App
