import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filters = {
  ramadan: [
    {
      type: "select",
      title: "No of days",
      fieldname: "NO_OF_DAYS",
      options: ["15", "30"],
    },
  ],
};

export default filters;

type Filter = {
  type: "select" | "sort";
  title: string;
  fieldname: string;
  options?: string[];
};

type Select = Filter;

export function renderFilters(filters: Filter[]) {
  return (
    <div className="flex w-full py-5 ">
      {filters.map((f) => {
        if (f.type === "select") {
          return renderSelect(f);
        }
      })}
    </div>
  );
}

function renderSelect(filter: Select) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={filter.title} />
      </SelectTrigger>
      <SelectContent>
        {filter.options?.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
