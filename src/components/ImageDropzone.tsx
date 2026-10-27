import { useState } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { uploadToCloudinary } from "../api/cloudinary";

type Props = {
  value?: string | null;
  onChange: (url: string | null) => void;
};

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

const ImageDropzone = ({ value, onChange }: Props) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = async (accepted: File[], rejected: FileRejection[]) => {
    setError(null);

    if (rejected.length) {
      const code = rejected[0].errors[0]?.code;
      setError(
        code === "file-too-large" ? "גודל התמונה עד 5MB"
        : code === "file-invalid-type" ? "ניתן להעלות רק JPG, PNG או WEBP"
        : "לא ניתן להעלות את הקובץ"
      );
      return;
    }

    const file = accepted[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      onChange(url);
    } catch {
      setError("העלאת התמונה נכשלה, נסי שוב");
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [], "image/png": [], "image/webp": [] },
    maxFiles: 1,
    maxSize: MAX_SIZE,
    disabled: uploading,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`group relative grid min-h-44 cursor-pointer place-items-center overflow-hidden rounded-2xl border-2 border-dashed p-6 text-center transition-all duration-300 ${
          isDragActive
            ? "scale-[1.01] border-ink bg-sun/30"
            : "border-line bg-white/60 hover:border-ink/40 hover:bg-white/90"
        } ${uploading ? "pointer-events-none opacity-70" : ""}`}
      >
        <input {...getInputProps()} />

        {value ? (
          <div className="relative w-full">
            <img src={value} alt="" className="mx-auto max-h-60 rounded-xl object-contain shadow-[0_18px_40px_-24px_rgb(22_20_31/0.6)]" />
            <p className="mt-3 text-xs font-bold text-muted">גררי או לחצי כדי להחליף תמונה</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div aria-hidden className={`mb-3 grid grid-cols-2 gap-1 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${uploading ? "animate-spin" : "group-hover:rotate-90"}`}>
              <i className="h-4 w-4 rounded bg-coral" />
              <i className="h-4 w-4 rounded bg-sun" />
              <i className="h-4 w-4 rounded bg-sky" />
              <i className="h-4 w-4 rounded bg-mint" />
            </div>
            <p className="font-bold text-ink">
              {uploading ? "מעלה תמונה..." : isDragActive ? "שחררי כאן" : "גררי תמונה לכאן או לחצי לבחירה"}
            </p>
            <p className="mt-1 text-xs text-muted">JPG, PNG או WEBP, עד 5MB</p>
          </div>
        )}
      </div>

      {value && !uploading && (
        <button
          type="button"
          onClick={() => onChange(null)}
          className="mt-2 text-sm font-bold text-coral-deep transition-colors hover:text-ink"
        >
          הסרת תמונה
        </button>
      )}

      {error && <p className="field-error">{error}</p>}
    </div>
  );
};

export default ImageDropzone;