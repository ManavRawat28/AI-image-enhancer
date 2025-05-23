import axios from "axios";
const API_KEY = '';
const BaseURL = '';


export const enhancedImageAPI = async (file) => {
    try {
        // Upload image
        const task_id = await uploadImage(file);
        console.log("image uploaded successfully");

        // Fetch enhanced image // is API ko call krne se pehle thoda time le taki image ajae jo bheji thi toh m isko tab tak call krta hu jab tak image waha api m chli ja na jae
        // we will use polling here - kisi api ko tab tak krte h jab tak hmey wo data mil ni jata
        const enhanceImageData = await pollforEnhnacedImage(task_id);
        console.log("image fetched successfully");
        console.log(enhanceImageData);

         return enhanceImageData.image;

    } catch (error) {
        console.log("error enhancing image", error.message);
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file); 

    const { data } = await axios.post(`${BaseURL}/api/tasks/visual/scale`, formData, {
        headers: {
            // removed manual content-type, let browser set it with boundary
            "X-API-KEY": API_KEY,
        },
    });
    console.log(data)
    if(!data?.data?.task_id){
        throw new Error("Failed to upload image")
    }
    return data.data.task_id;
};
const fetchenhancedImage = async (task_id) => {
  const { data } = await axios.get(`${BaseURL}/api/tasks/visual/scale/${task_id}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });

  console.log(data); // Debug full response

  if (!data?.data) {
    throw new Error("Invalid API response");
  }

  return data.data; // DO NOT check for image here, handle in polling
};

const pollforEnhnacedImage = async (task_id, retries = 0) => {
  const result = await fetchenhancedImage(task_id);

  if (result.progress < 100) { // fixed: check progress instead of state
    console.log('processing');

    if (retries >= 20) {
      throw new Error("Max retries limit reached, please try again later");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollforEnhnacedImage(task_id, retries + 1);
  }

  return result; // return full object (including result.image)
};



