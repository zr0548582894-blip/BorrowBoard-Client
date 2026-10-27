
import { useState } from "react";
import WantedItemsCard from "../components/wantedItemsPage/WantedItemsCard";
import { WantedItemsUseQuery } from "../hooks/useQuery";
import CategorySelect from '../components/categorySelect';
import FilterText from '../components/homePage/filterText';


const wantedItems = () => {

  const [categoryId, setCategoryId] = useState<number | undefined>(undefined)
  const [search,setSearch]=useState<string|undefined>(undefined)
  const { data, error, isLoading } = WantedItemsUseQuery("allWantedItems", { categoryId,search })

  return (
    <div dir="rtl" className="relative min-h-screen px-4 pb-24 pt-10 sm:px-8 sm:pt-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Hero */}
        <div className="relative mb-12 overflow-hidden rounded-[2.25rem] bg-ink px-6 py-12 text-cream shadow-[0_40px_80px_-40px_rgb(22_20_31/0.8)] sm:px-12 sm:py-16 animate-rise">
          <div aria-hidden className="tile-stage pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 grid-cols-4 grid-rows-4 gap-3 p-6 opacity-95 md:grid">
            <div className="tile col-span-2 row-span-2 bg-sky" />
            <div className="tile col-span-1 row-span-1 bg-sun" />
            <div className="tile col-span-1 row-span-3 bg-coral" />
            <div className="tile col-span-1 row-span-2 bg-mint" />
            <div className="tile col-span-2 row-span-2 bg-lilac" />
            <div className="tile col-span-1 row-span-1 bg-blush" />
          </div>
          <div className="relative max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/10 px-4 py-1.5 text-xs font-bold tracking-wide text-sun">
              <span className="h-2 w-2 rounded-sm bg-sun" />
              לוח המבוקשים
            </span>
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl">
              המוצרים <span className="text-coral">שלנו</span>
            </h1>
            <div className="mt-6 flex gap-2" aria-hidden>
              <span className="h-1.5 w-14 rounded-full bg-coral" />
              <span className="h-1.5 w-8 rounded-full bg-sun" />
              <span className="h-1.5 w-4 rounded-full bg-sky" />
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="glass sticky top-4 z-20 mb-10 grid gap-3 rounded-[1.75rem] p-3 sm:grid-cols-[auto_1fr] sm:items-center sm:p-4 [animation-delay:150ms] animate-rise">
          <CategorySelect value={categoryId} onChange={setCategoryId} />
          <FilterText onSearch={setSearch} />
        </div>

        {isLoading && (
          <p className="flex flex-col items-center gap-4 py-20 text-center text-lg font-bold text-ink-soft">
            <span className="loader-dots"><i /><i /><i /></span>
            טוען נתונים...
          </p>
        )}
        {error && <p className="mx-auto mt-6 max-w-xl rounded-2xl border-2 border-coral-deep/20 bg-[#fff1ec] p-6 text-center font-semibold text-coral-deep animate-pop">{error.message}</p>}
        {data && data.length === 0 && (
          <p className="glass mx-auto mt-6 max-w-xl rounded-3xl p-10 text-center font-display text-2xl font-bold text-ink-soft animate-pop">לא נמצאו תוצאות</p>
        )}
        <div className="card-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map(p => <WantedItemsCard key={p.id} imageUrl={p.imageUrl} name={p.title} description={p.description} id={p.id} status={p.status}></WantedItemsCard>)}
        </div>
      </div>
    </div>
  );
};

export default wantedItems;
