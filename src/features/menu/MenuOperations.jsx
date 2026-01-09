import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

export default function MenuOperations() {
  return (
    <div className="flex items-center gap-3">
      <Filter
        className=" "
        filterFiled="show"
        options={[
          { value: 'all', label: 'All' },
          { value: 'soldout', label: 'Soldout' },
          { value: 'no-soldout', label: 'No soldout' },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'unitPrice-asc', label: 'Sort by price (low firs)' },
          { value: 'unitPrice-desc', label: 'Sort by price (high first)' },
        ]}
      />
    </div>
  );
}
