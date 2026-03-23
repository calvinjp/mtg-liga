import type { Pokemon } from "./pokedex";

interface SelectProps {
  data: Pokemon[];
  selected: string;
  desc: string;
  img: string;
  setSelected: (value: string) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const Select = (props: SelectProps) => {
  const { data, selected, desc, img, setSelected, handleNext, handlePrev } =
    props;
  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {data.map((pokemon) => (
          <option value={pokemon.name} key={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <h1>{desc}</h1>
      <img src={img}></img>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Prev</button>
    </>
  );
};
export default Select;
