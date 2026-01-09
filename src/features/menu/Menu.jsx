import { useLoaderData, useSearchParams } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import MenuOperations from './MenuOperations';

function Menu() {
  const menu = useLoaderData();
  const [searchParams] = useSearchParams();

  // 1) filter
  const filterValue = searchParams.get('show') || 'all';
  let filterMenu;
  if (filterValue === 'all') filterMenu = menu;
  if (filterValue === 'soldout')
    filterMenu = menu.filter((item) => item.soldOut === true);
  if (filterValue === 'no-soldout')
    filterMenu = menu.filter((item) => item.soldOut === false);

  // 2) Sort
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  const sortedMenu = filterMenu.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (typeof aValue === 'string') {
      return aValue.localeCompare(bValue) * modifier;
    }
    return (aValue - bValue) * modifier;
  });

  return (
    <>
      <MenuOperations />
      <ul className="divide-y divide-stone-200 px-2">
        {sortedMenu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
