import { updateBorrowStatusUseMutation } from "../../hooks/useMutation";




const RequestStatusSelect = ({ id }: { id: number }) => {

    const mutation = updateBorrowStatusUseMutation();
    const loading = mutation.isPending ? mutation.variables?.status : undefined;

return <>
    <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-dashed border-line pt-4">
        <span className="me-auto text-xs font-extrabold uppercase tracking-[0.14em] text-muted">מה תרצי לעשות?</span>

        <button
            type="button"
            onClick={ ()=>{mutation.mutate({id,status:"APPROVED"})}}
            disabled={mutation.isPending}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-ink px-5 py-2.5 text-sm font-bold text-cream shadow-[0_4px_0_0_var(--color-forest),0_14px_24px_-12px_rgb(22_20_31/0.6)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:bg-mint hover:text-ink hover:shadow-[0_6px_0_0_var(--color-ink),0_20px_30px_-14px_rgb(46_203_150/0.6)] active:translate-y-[3px] active:shadow-[0_1px_0_0_var(--color-ink)] disabled:pointer-events-none disabled:opacity-60"
        >
            <span className="grid h-5 w-5 place-items-center rounded-md bg-mint text-[0.7rem] text-ink transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-ink group-hover:text-mint">
                {loading === "APPROVED" ? <span className="h-2.5 w-2.5 animate-spin rounded-sm border-2 border-current border-t-transparent" /> : "✓"}
            </span>
            {loading === "APPROVED" ? "מאשרת..." : "אישור"}
        </button>

        <button
            type="button"
            onClick={()=>{mutation.mutate({id,status:"REJECTED"})}}
            disabled={mutation.isPending}
            className="group inline-flex items-center gap-2 rounded-2xl border-2 border-ink/15 bg-cream/80 px-5 py-2.5 text-sm font-bold text-ink-soft transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:border-coral-deep hover:bg-[#fff1ec] hover:text-coral-deep active:translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
        >
            <span className="grid h-5 w-5 place-items-center rounded-md bg-ink/10 text-[0.7rem] transition-all duration-500 group-hover:rotate-90 group-hover:bg-coral-deep group-hover:text-cream">
                {loading === "REJECTED" ? <span className="h-2.5 w-2.5 animate-spin rounded-sm border-2 border-current border-t-transparent" /> : "✕"}
            </span>
            {loading === "REJECTED" ? "דוחה..." : "דחייה"}
        </button>
    </div>

    {mutation.isError && (
        <p className="mt-3 rounded-xl border-2 border-coral-deep/20 bg-[#fff1ec] px-4 py-2.5 text-sm font-semibold text-coral-deep animate-pop">
            {mutation.error.message}
        </p>
    )}
</>
}
export default RequestStatusSelect