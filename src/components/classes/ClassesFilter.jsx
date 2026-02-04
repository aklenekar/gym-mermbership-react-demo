export default function ClassesFilter({ filters }) {
  return (
    <select className="filter-select">
      {filters.map((filter) => {
        return <option value={filter.value}>{filter.name}</option>;
      })}
    </select>
  );
}
