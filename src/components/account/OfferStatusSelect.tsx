import { updateOfferStatusUseMutation } from "../../hooks/useMutation";

const OfferStatusSelect = ({ id }: { id: number }) => {
  const mutation = updateOfferStatusUseMutation();

  return (
    <div className="mt-4 flex gap-3">
      <button
        onClick={() => mutation.mutate({ id, status: "ACCEPTED" })}
        className="rounded-2xl bg-[#d17d6b] px-6 py-2.5 font-bold text-white hover:bg-[#bf6a58]"
      >
        אישור
      </button>
      <button
        onClick={() => mutation.mutate({ id, status: "REJECTED" })}
        className="rounded-2xl border border-[#e7dad2] px-6 py-2.5 font-bold text-[#6f6170] hover:bg-[#fbf7f2]"
      >
        דחייה
      </button>
      {mutation.isError && <p className="text-sm text-red-700">{mutation.error.message}</p>}
    </div>
  );
};

export default OfferStatusSelect;