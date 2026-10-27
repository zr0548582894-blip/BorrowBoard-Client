import { useState } from "react";
import ProductCard from "../components/homePage/productCard";
import { productsUseQuery } from "../hooks/useQuery";
import CategorySelect from "../components/categorySelect";
import FilterText from "../components/homePage/filterText";
import { Link } from "react-router";

const Products = () => {

  const [categoryId, setCategoryId] = useState<number | undefined>(undefined)
  const [search, setSearch] = useState<string | undefined>(undefined);
const { data, error, isLoading } = productsUseQuery("allProducts", { categoryId, search });



  return (
    <main dir="rtl" className="relative min-h-screen px-4 pb-24 pt-10 sm:px-8 sm:pt-16">
      <section className="relative mx-auto w-full max-w-7xl">
        {/* Hero */}
        <div className="grid items-center gap-10 pb-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-16">
          <div className="animate-rise">
            <span className="eyebrow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-coral/60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-coral" />
              </span>
              האוסף שלנו
            </span>
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.02] tracking-tight text-ink sm:text-7xl">
              כל <span className="marker">המוצרים</span>
              <span className="text-coral">.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-muted sm:text-lg">
              מגוון פריטים שנבחרו בקפידה, מחכים למצוא את המקום הבא שלהם.
            </p>

            <div className="glass mt-8 inline-flex items-center gap-4 rounded-2xl px-5 py-4 [animation-delay:200ms] animate-rise">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-xl text-sun shadow-[0_8px_18px_-8px_rgb(22_20_31/0.7)]">
                <span className="inline-block animate-spin-slow">✳</span>
              </div>
              <div>
                <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-muted">במבחר שלנו</p>
                <p className="font-display text-2xl font-black tabular-nums text-ink">{data?.length} פריטים</p>
              </div>
            </div>
          </div>

          {/* Color-block mosaic */}
          <div aria-hidden className="tile-stage hidden h-[340px] grid-cols-6 grid-rows-6 gap-3 lg:grid">
            <div className="tile col-span-3 row-span-4 bg-coral">
              <span className="absolute bottom-5 right-5 font-display text-6xl font-black text-ink/90">א</span>
            </div>
            <div className="tile col-span-2 row-span-2 bg-sun" />
            <div className="tile col-span-1 row-span-3 bg-navy" />
            <div className="tile col-span-2 row-span-2 bg-mint">
              <span className="absolute inset-0 m-auto h-10 w-10 rounded-full border-[6px] border-forest/80" />
            </div>
            <div className="tile col-span-1 row-span-3 bg-lilac" />
            <div className="tile col-span-2 row-span-2 bg-sky" />
            <div className="tile col-span-1 row-span-2 bg-blush" />
            <div className="tile col-span-2 row-span-2 bg-ink">
              <span className="absolute left-4 top-4 h-3 w-3 rounded-sm bg-sun" />
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="glass sticky top-4 z-20 mb-10 grid gap-3 rounded-[1.75rem] p-3 sm:grid-cols-[1fr_auto] sm:items-center sm:p-4 [animation-delay:300ms] animate-rise">
          <FilterText onSearch={setSearch} placeholder="חיפוש...." />
          <CategorySelect value={categoryId} onChange={setCategoryId} />
        </div>

        {isLoading && (
          <p className="flex flex-col items-center gap-4 py-20 text-center text-lg font-bold text-ink-soft">
            <span className="loader-dots"><i /><i /><i /></span>
            טוען נתונים...
          </p>
        )}
        {error && (
          <p className="mx-auto mt-6 max-w-xl rounded-2xl border-2 border-coral-deep/20 bg-[#fff1ec] p-6 text-center font-semibold text-coral-deep shadow-[0_20px_40px_-30px_rgb(212_69_42/0.6)] animate-pop">
            {error.message}
          </p>
        )}
{data && data.length === 0 && (
  <div className="glass mx-auto mt-6 flex max-w-xl flex-col items-center gap-5 rounded-3xl p-10 text-center animate-pop">
    <p className="font-display text-2xl font-bold text-ink-soft">לא נמצאו תוצאות</p>
    <p className="text-muted">לא מצאת את מה שחיפשת? פרסמי בקשה, ואולי מישהי תוכל להשאיל לך</p>
    <Link to="/wanted/new" className="btn-primary px-8 py-3.5">
      פרסום בקשה למוצר
      <span aria-hidden className="text-lg leading-none">←</span>
    </Link>
  </div>
)}

        <div className="card-grid grid grid-cols-2 items-start gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {data?.map(p => (
            <div key={p.id} className="min-w-0">
              <ProductCard
                imageUrl={p.imageUrl}
                name={p.name}
                description={p.description}
                condition={p.condition}
                status={p.status}
                id={p.id}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
