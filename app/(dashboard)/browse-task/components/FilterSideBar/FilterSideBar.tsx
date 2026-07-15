import { useState } from "react";
import styles from "./filtersidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
//  Types
export interface FilterState {
  categories: string[];
  priceMin: number;
  priceMax: number;
  deliveryTime: string[];
  taskLevel: string[];
}

interface Props {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

const CATEGORIES = [
  "All Categories",
  "Academic Help",
  "Writing & Editing",
  "Data & Tech",
  "Design & Multimedia",
  "Business Support",
  "Others",
];
const DELIVERY_OPTIONS = [
  "Anytime",
  "Within 24 hours",
  "Within 3 days",
  "Within a week",
];
const LEVEL_OPTIONS = ["Beginner", "Intermediate", "Expert"];

//  CheckboxGroup
function CheckboxGroup({
  options,
  selected,
  onChange,
}: {
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  function toggle(opt: string) {
    onChange(
      selected.includes(opt)
        ? selected.filter((v) => v !== opt)
        : [...selected, opt],
    );
  }

  return (
    <div className={styles.checkboxGroup}>
      {options.map((opt) => (
        <label key={opt} className={styles.checkboxLabel}>
          <input
            type='checkbox'
            className={styles.checkbox}
            checked={selected.includes(opt)}
            onChange={() => toggle(opt)}
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}

//  RangeSlider
function RangeSlider({
  min,
  max,
  value,
  onChange,
}: {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}) {
  return (
    <div className={styles.rangeWrapper}>
      <input
        type='range'
        min={min}
        max={max}
        value={value[1]}
        className={styles.rangeInput}
        onChange={(e) => onChange([value[0], Number(e.target.value)])}
      />
      <div className={styles.rangeValues}>
        <span className={styles.rangeInput2}>
          ₱{" "}
          <input
            type='number'
            value={value[0]}
            min={min}
            max={value[1]}
            onChange={(e) => onChange([Number(e.target.value), value[1]])}
            className={styles.numberInput}
          />
        </span>
        <span className={styles.rangeSep}>to</span>
        <span className={styles.rangeInput2}>
          ₱{" "}
          <input
            type='number'
            value={value[1]}
            min={value[0]}
            max={max}
            onChange={(e) => onChange([value[0], Number(e.target.value)])}
            className={styles.numberInput}
          />
        </span>
      </div>
    </div>
  );
}

//  FilterSection
function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className={styles.section}>
      <button
        className={styles.sectionHeader}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.sectionTitle}>{title}</span>
        <span className={styles.sectionChevron}>
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </button>
      {open && <div className={styles.sectionBody}>{children}</div>}
    </div>
  );
}

//  FilterSidebar
export default function FilterSidebar({ filters, onChange }: Props) {
  function reset() {
    onChange({
      categories: ["All Categories"],
      priceMin: 0,
      priceMax: 5000,
      deliveryTime: ["Anytime"],
      taskLevel: ["Intermediate"],
    });
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <span className={styles.sidebarTitle}>Filters</span>
        <button className={styles.clearBtn} onClick={reset}>
          Clear all
        </button>
      </div>

      <FilterSection title='Categories'>
        <CheckboxGroup
          options={CATEGORIES}
          selected={filters.categories}
          onChange={(categories) => onChange({ ...filters, categories })}
        />
      </FilterSection>

      <FilterSection title='Price Range'>
        <RangeSlider
          min={0}
          max={5000}
          value={[filters.priceMin, filters.priceMax]}
          onChange={([priceMin, priceMax]) =>
            onChange({ ...filters, priceMin, priceMax })
          }
        />
      </FilterSection>

      <FilterSection title='Delivery Time'>
        <CheckboxGroup
          options={DELIVERY_OPTIONS}
          selected={filters.deliveryTime}
          onChange={(deliveryTime) => onChange({ ...filters, deliveryTime })}
        />
      </FilterSection>

      <FilterSection title='Task Level'>
        <CheckboxGroup
          options={LEVEL_OPTIONS}
          selected={filters.taskLevel}
          onChange={(taskLevel) => onChange({ ...filters, taskLevel })}
        />
      </FilterSection>

      <div className={styles.actions}>
        <button className={styles.applyBtn}>Apply Filters</button>
        <button className={styles.resetBtn} onClick={reset}>
          Reset
        </button>
      </div>
    </aside>
  );
}
