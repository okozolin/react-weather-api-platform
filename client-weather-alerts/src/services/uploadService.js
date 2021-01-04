import axios from "axios";

export default class Api {
  static async uploadFile(file) {
    let formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
          "/upload", 
          formData, 
          {
            headers: {
            "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
          });
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
