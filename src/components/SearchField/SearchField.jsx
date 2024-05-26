import { Input } from './SearchField.styled';

const SearchField = ({ value, onChange, placeholder }) => {
  //   console.log(value);
  //   console.log(onChange);
  //   console.log(placeholder);
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default SearchField;
