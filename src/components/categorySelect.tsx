import { useCategoriesQuery } from "../hooks/useQuery";

type Prop = {
    value: number | undefined,
    onChange: (id: number | undefined) => void
}

const CategorySelect = ({ value, onChange }: Prop) => {
    const {data:categories}=useCategoriesQuery()
    return <>
        <select className="field select-field min-w-[12rem] font-semibold" value={value ?? ""}
            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : undefined)}
        >
            <option value="">כל הקטגוריות</option>
            {categories?.map(c=>(<option key={c.id} value={c.id}>{c.name}</option>))}
        </select>
        
    </>
}
export default CategorySelect
