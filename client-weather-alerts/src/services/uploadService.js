import axios from "axios";

const http =  axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-type": "application/json"
    }
  });
  
export default class Api {
  static async uploadFile(file, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    try {
      const response = await http.post(
          "/upload", 
          formData, 
          {
            headers: {
            "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
          });
      console.log("-->response", response)  
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
