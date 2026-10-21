import axios from "axios";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  const response = await axios.post<{ secure_url: string }>(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    formData
  );
  return response.data.secure_url; // הכתובת המלאה של התמונה
};

export const getImageSrc = (imageUrl: string | null) => {
  if (!imageUrl) return null;
  if (imageUrl.startsWith("http")) return imageUrl;
  return `${import.meta.env.VITE_API_URL}${imageUrl}`;
};