interface SearchInputProps {
  handleInput: (event: string) => void;
  inputValue: string;
}

export default function SearchInput({
  handleInput,
  inputValue,
}: SearchInputProps): JSX.Element {
  return (
    <>
      <input
        className="input-box"
        placeholder="Search..."
        onChange={(e) => handleInput(e.target.value)}
        value={inputValue}
      ></input>
    </>
  );
}
