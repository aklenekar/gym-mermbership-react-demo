export default function ClassesFilter({ name, filters, handleFilterChange }) {
  return (
    <select name={name} className="filter-select" onChange={handleFilterChange}>
      {filters.map((filter) => {
        return <option key={filter.value} value={filter.value}>{filter.name}</option>;
      })}
    </select>
  );
}
