import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deletetem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deletetem(pizzaId))}>
      Delete
    </Button>
  );
}
