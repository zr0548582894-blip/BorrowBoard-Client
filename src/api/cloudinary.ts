const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

/** מעלה קובץ ל-Cloudinary ומחזיר את הקישור לתמונה */
export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  // fetch רגיל ולא api של axios - כדי לא לשלוח את כתובת השרת ואת הטוקן ל-Cloudinary
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData }
  );

  if (!response.ok) throw new Error("העלאת התמונה נכשלה");

  const data = await response.json();
  return data.secure_url as string;
};