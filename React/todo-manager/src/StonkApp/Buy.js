import { useStonk } from './StonksStore';

export default function Buy() {
  const [state, dispatch] = useStonk();

  return (
    <section>
      <h1>Buy</h1>
      <p>
        How many Stonks would you lie to buy?{' '}
        <button onClick={() => dispatch({ type: 'decre' })}>Sub-</button>{' '}
        {state.stonks}
        <button onClick={() => dispatch({ type: 'incre' })}>Sub+</button>
      </p>
    </section>
  );
}
