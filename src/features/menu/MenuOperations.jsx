import Filter from '../../ui/Filter';

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
    </div>
  );
}
