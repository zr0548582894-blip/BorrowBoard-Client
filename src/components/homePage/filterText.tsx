import { useState } from "react"

type Props = {
  onSearch: (text: string | undefined) => void;
  placeholder?: string;
};

const FilterText =  ({ onSearch, placeholder = "חיפוש..." }: Props) => {
    const [text, setText] = useState("")
    return <>
        <form className="group relative flex w-full items-center gap-2" onSubmit={(e) => {
            e.preventDefault();
            onSearch(text.trim() || undefined)
        }}>
            <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-colors group-focus-within:text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            </span>
            <input className="field pr-11" placeholder={placeholder} type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button className="btn-primary shrink-0" type="submit">חיפוש</button>
        </form>
    </>
}
export default FilterText
