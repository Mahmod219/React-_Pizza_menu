import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'font-semibold text-sm inline-block rounded-full bg-yellow-400 tracking-wide text-stone-600 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ';
  const styles = {
    primary: base + 'md:px-6 md:py-4 px-4 py-3',
    small: base + 'px-4 py-2 md:px5 md:py-2.5 text-xs',
    secondary:
      'font-semibold text-sm md:px-6 md:py-3.5 px-4 py-2.5 inline-block rounded-full border-2 border-stone-400 tracking-wide text-stone-600 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800  focus:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ',
    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
