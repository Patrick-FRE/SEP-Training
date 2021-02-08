import { useStonk } from './StonksStore';

export default function Calc() {
  const [state, dispatch] = useStonk();
  return <h1>{state.stonks}</h1>;
}
