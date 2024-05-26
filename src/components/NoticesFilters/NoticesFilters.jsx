import { useEffect, useState } from 'react';
import {
  NoticesField,
  NoticesFiltersContainer,
  NoticesForm,
  ResetButton,
} from './NoticesFilters.styled';
import { Field, Formik } from 'formik';
import Select from 'react-select';
import SearchField from '../SearchField/SearchField';
import { useDispatch } from 'react-redux';
import { getNoticesCategories } from '../../redux/operation';
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '30px',
    padding: '6px',
    width: '227px',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'white',
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'blue'
      : state.isFocused
      ? 'lightblue'
      : 'white',
    color: state.isSelected ? 'white' : 'black',
    '&:hover': {
      backgroundColor: 'lightblue',
    },
  }),
};

const NoticesFilters = () => {
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [petTypes, setPetTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await dispatch(getNoticesCategories());
        console.log(categoriesResponse);
        if (categoriesResponse.meta.requestStatus === 'fulfilled') {
          setCategories(categoriesResponse.payload.categoris);
          setGenders(categoriesResponse.payload.sex);
          setPetTypes(categoriesResponse.payload.species);
          setCities(categoriesResponse.payload.location);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const getCiti = (inputValue) => {
    try {
      console.log(inputValue);
      console.log(cities);
      const loc = cities.filter((location) => {
        return (
          location.cityEn.toLowerCase().includes(inputValue.toLowerCase()) ||
          location.countyEn.toLowerCase().includes(inputValue.toLowerCase()) ||
          location.stateEn.toLowerCase().includes(inputValue.toLowerCase())
        );
      });

      const val = loc.map((l) => ({
        label: `${l.cityEn}, ${l.countyEn}, ${l.stateEn}`,
        value: l._id,
      }));
      console.log(val);
    } catch (error) {
      console.error('Error fetching locations', error);
    }
  };

  return (
    <NoticesFiltersContainer>
      <Formik
        initialValues={{
          keyword: '',
          category: '',
          gender: '',
          petType: '',
          location: '',
          sortBy: '',
        }}
        onSubmit={(values) => {
          //   onFilterChange(values);
        }}
      >
        {({ setFieldValue }) => (
          <NoticesForm>
            <SearchField
              name="keyword"
              placeholder="Search..."
              onChange={(e) => setFieldValue('keyword', e.target.value)}
            />

            <NoticesField as="select" name="category">
              <option value="">Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </NoticesField>

            <NoticesField as="select" name="gender">
              <option value="">By gender</option>
              {genders.map((gender, index) => (
                <option key={index} value={gender}>
                  {gender}
                </option>
              ))}
            </NoticesField>
            <NoticesField as="select" name="petType">
              <option value="">By type</option>
              {petTypes.map((petType, index) => (
                <option key={index} value={petType}>
                  {petType}
                </option>
              ))}
            </NoticesField>

            <Select
              name="location"
              options={locations}
              styles={customStyles}
              onInputChange={getCiti}
              onChange={(selectedOption) => {
                console.log(selectedOption);
                setLocations(selectedOption);
              }}
              placeholder="Location"
            />
            <div>
              <label>
                <Field type="radio" name="sortBy" value="popularity" />
                Popular
              </label>
              <label>
                <Field type="radio" name="sortBy" value="unpopular" />
                Unpopular
              </label>
              <label>
                <Field type="radio" name="sortBy" value="cheap" />
                Cheap
              </label>
              <label>
                <Field type="radio" name="sortBy" value="expensive" />
                Expensive
              </label>
            </div>

            <ResetButton type="reset">Reset</ResetButton>
          </NoticesForm>
        )}
      </Formik>
    </NoticesFiltersContainer>
  );
};
export default NoticesFilters;
