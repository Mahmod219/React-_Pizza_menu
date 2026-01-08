import { useSearchParams } from 'react-router-dom';

export default function Filter({ filterFiled, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterFiled) || options.at(0).value;

    function handleClick(value) {
        searchParams.set(filterFiled, value);
        setSearchParams(searchParams);
    }

    return (
        <div className="my-3 flex gap-2 px-3 py-4">
            {options.map((option) => (
                <button
                    className={`rounded-md px-2 py-2 hover:bg-yellow-400 ${
                        option.value === currentFilter
                            ? 'bg-yellow-400'
                            : 'bg-stone-200'
                    }`}
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
