
import http from "./http"
  
export default class Api {
  static async uploadFile(file) {
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
          });
      return {data: response.data, status: "succeeded"};
    } catch (err) {
      throw new Error(err.message);
    }
  }

  static async getAlerts() {
    try {
      const response = await http.get("/alerts")
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
