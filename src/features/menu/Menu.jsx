import { useLoaderData, useSearchParams } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import MenuOperations from './MenuOperations';

function Menu() {
  const menu = useLoaderData();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get('show') || 'all';
  let filterMenu;
  if (filterValue === 'all') filterMenu = menu;
  if (filterValue === 'soldout')
    filterMenu = menu.filter((item) => item.soldOut === true);
  if (filterValue === 'no-soldout')
    filterMenu = menu.filter((item) => item.soldOut === false);

  console.log(filterMenu);

  return (
    <>
      <MenuOperations />
      <ul className="divide-y divide-stone-200 px-2">
        {filterMenu.map((pizza) => (
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
