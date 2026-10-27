import { useState } from "react";
import { AddCatergoriesUseMutation, DelCatergoriesUseMutation, EditCatergoriesUseMutation } from "../hooks/useMutation";
import { useCategoriesQuery } from "../hooks/useQuery";

const AdminCategories = () => {
    const addCategory = AddCatergoriesUseMutation();
    const { data, isLoading, error } = useCategoriesQuery();
    const [name, setName] = useState("");
    const editCategory = EditCatergoriesUseMutation()
    const delCategory = DelCatergoriesUseMutation()
    const [editId, setEditId] = useState<number | null>(null);
    const [editName, setEditName] = useState("");

    if (isLoading)
        return (
            <p className="flex flex-col items-center gap-4 py-20 text-center text-lg font-bold text-ink-soft">
                <span className="loader-dots"><i /><i /><i /></span>
                טוען קטגוריות...
            </p>
        );
    if (error)
        return (
            <p className="mx-auto mt-12 max-w-xl rounded-2xl border-2 border-coral-deep/20 bg-[#fff1ec] p-6 text-center font-semibold text-coral-deep animate-pop">
                {error.message}
            </p>
        );

    const onDelit = (id: number) => {
        delCategory.mutate(id)
    }

    const errorClass = "mb-6 rounded-2xl border-2 border-coral-deep/20 bg-[#fff1ec] p-4 text-center font-semibold text-coral-deep";
    const lightBtn = "rounded-2xl border border-[#e7dad2] px-4 py-2 text-sm font-bold text-[#6f6170] transition hover:bg-[#fbf7f2]";

    return (
        <main dir="rtl" className="relative min-h-screen px-4 pb-24 pt-10 sm:px-8 sm:pt-16">
            <section className="mx-auto w-full max-w-3xl">
                {/* כותרת */}
                <div className="mb-10 animate-rise">
                    <span className="eyebrow">
                        <span className="h-2.5 w-2.5 rounded-sm bg-coral" />
                        ניהול
                    </span>
                    <h1 className="mt-5 font-display text-5xl font-black leading-[1.02] tracking-tight text-ink sm:text-6xl">
                        <span className="marker">קטגוריות</span>
                        <span className="text-coral">.</span>
                    </h1>
                </div>

                {/* הוספה */}
                <div className="glass mb-6 flex flex-col gap-3 rounded-3xl p-4 sm:flex-row sm:p-5">
                    <input
                        className="field flex-1"
                        type="text"
                        placeholder="שם קטגוריה חדשה"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button
                        className="btn-primary px-8 py-3"
                        onClick={() => { addCategory.mutate({ name }); setName(""); }}
                        disabled={addCategory.isPending}
                    >
                        {addCategory.isPending ? "מוסיפה..." : "הוספה"}
                    </button>
                </div>

                {/* שגיאות */}
                {addCategory.isError && <p className={errorClass}>{addCategory.error.message}</p>}
                {editCategory.isError && <p className={errorClass}>{editCategory.error.message}</p>}
                {delCategory.isError && <p className={errorClass}>{delCategory.error.message}</p>}

                {/* רשימה */}
                {!data || data.length === 0 ? (
                    <p className="glass rounded-3xl p-10 text-center font-bold text-ink-soft">עוד אין קטגוריות</p>
                ) : (
                    <div className="glass overflow-hidden rounded-3xl">
                        {data.map((c) => (
                            <div
                                key={c.id}
                                className={`flex flex-wrap items-center gap-3 border-b border-line px-5 py-4 last:border-b-0 sm:px-6 ${
                                    editId === c.id ? "bg-[#fff8f5]" : ""
                                }`}
                            >
                                <span className="h-3 w-3 shrink-0 rounded-sm bg-coral" />

                                {editId === c.id ? (
                                    <>
                                        {/* מצב עריכה */}
                                        <input
                                            className="field min-w-0 flex-1 py-2"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                        />
                                        <button
                                            className="rounded-2xl bg-[#d17d6b] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#bf6a58]"
                                            onClick={() => { editCategory.mutate({ id: c.id, name: editName }); setEditId(null); }}
                                        >
                                            שמירה
                                        </button>
                                        <button className={lightBtn} onClick={() => setEditId(null)}>
                                            ביטול
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        {/* מצב רגיל */}
                                        <p className="flex-1 font-bold text-ink">{c.name}</p>
                                        <button className={lightBtn} onClick={() => { setEditId(c.id); setEditName(c.name) }}>
                                            עריכה
                                        </button>
                                        <button
                                            className="rounded-2xl border border-red-200 px-4 py-2 text-sm font-bold text-red-700 transition hover:bg-red-50"
                                            onClick={() => onDelit(c.id)}
                                        >
                                            מחיקה
                                        </button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default AdminCategories;