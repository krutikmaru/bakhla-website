import { Button } from "@/components/ui/button";
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
      options: ["15", "20", "30"],
    },
    {
      type: "range",
      title: "Price range",
      fieldname: "QUIT_I_QUAD",
      options: [
        { from: 100000, to: 150000 },
        { from: 150000, to: 200000 },
        { from: 200000, to: 250000 },
        ,
        { from: 250000, to: 300000 },
        ,
        { from: 300000, to: "*" },
      ],
    },
  ],
  hajj: [
    {
      type: "select",
      title: "No of days",
      fieldname: "NO_OF_DAYS",
      options: ["15", "20", "30"],
    },
    {
      type: "range",
      title: "Price range",
      fieldname: "FOUR_BED_SHARING",
      options: [
        { from: 100000, to: 150000 },
        { from: 150000, to: 200000 },
        { from: 200000, to: 250000 },
        ,
        { from: 250000, to: 300000 },
        ,
        { from: 300000, to: "*" },
      ],
    },
  ],
};

export default filters;

type Filter = {
  type: "select" | "range";
  title: string;
  fieldname: string;
  options?: string[];
};

type Select = Filter;

type RangeOption = {
  from: number;
  to: number | string;
};
type Range = {
  type: string;
  title: string;
  fieldname: string;
  options: RangeOption[];
};

export function renderFilters(
  filters: Filter[],
  filtersArray: any,
  setFilters: any
) {
  return (
    <div className="flex w-full py-5 space-x-5 items-end">
      {filters.map((f) => {
        if (f.type === "select") {
          return renderSelect(f, filtersArray, setFilters);
        }
        if (f.type === "range") {
          return renderRangeSelect(f as any, setFilters);
        }
      })}
      <Button
        onClick={() => {
          setFilters([]);
        }}
        variant="secondary"
      >
        Clear Filters
      </Button>
    </div>
  );
}

function renderSelect(filter: Select, filters: any, setFilters: any) {
  function handleSelectValueChange(value: string) {
    if (value === "*") {
      setFilters((prevFilters: any) => {
        return prevFilters.filter((f: any) => f.fieldname !== filter.fieldname);
      });
    } else {
      setFilters((prevFilters: any) => {
        let notFound = true;
        const newFilters = prevFilters.map((f: any) => {
          if (f.fieldname === filter.fieldname) {
            notFound = false;
            return { ...f, value: value };
          }
          return f;
        });

        if (notFound) {
          newFilters.push({
            fieldname: filter.fieldname,
            type: "equals",
            value: value,
          });
        }
        return newFilters;
      });
    }
  }
  return (
    <div className="flex flex-col space-y-1 justify-start items-start">
      <span className="text-neutral-500 text-xs">{filter.title}</span>
      <Select onValueChange={handleSelectValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={filter.title} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"*"}>None</SelectItem>
          {filter.options?.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function renderRangeSelect(filter: Range, setFilters: any) {
  function handleRangeSelectValueChange(value: string) {
    if (value === "*") {
      setFilters((prevFilters: any) => {
        return prevFilters.filter((f: any) => f.fieldname !== filter.fieldname);
      });
    } else {
      setFilters((prevFilters: any) => {
        let notFound = true;
        const newFilters = prevFilters.map((f: any) => {
          if (f.fieldname === filter.fieldname) {
            notFound = false;
            return { ...f, value: JSON.parse(value) };
          }
          return f;
        });

        if (notFound) {
          newFilters.push({
            fieldname: filter.fieldname,
            type: "range",
            value: JSON.parse(value),
          });
        }
        return newFilters;
      });
    }
  }

  return (
    <div className="flex flex-col space-y-1 justify-start items-start">
      <span className="text-neutral-500 text-xs">{filter.title}</span>

      <Select onValueChange={handleRangeSelectValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={filter.title} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"*"}>None</SelectItem>
          {filter.options?.map((option) => (
            <SelectItem key={option.from} value={JSON.stringify(option)}>
              {option.to === "*"
                ? `${option.from} > `
                : `${option.from} to ${option.to}`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
