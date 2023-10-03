import axios from "axios";
export const baseURlUser =
  "https://elite-ryde-user-api.azurewebsites.net/api";
export const baseURLGeneral =
  "https://elite-ryde-management-api.azurewebsites.net/api";

export async function uploadDocument(files, type, email) {
  try {
    const uploadPromises = files?.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await axios({
          url: `${baseURLGeneral}/upload-document?documentType=${type}&userEmail=${email}`,
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });

        if (response?.data?.status) {
          return response?.data?.data?.url;
        }
      } catch (error) {
        throw new Error("Items couldnt be uploaded");
      }
    });

    const uploadDocuments = await Promise.all(uploadPromises);
    return uploadDocuments;
  } catch (error) {
    throw new Error(error);
  }
}