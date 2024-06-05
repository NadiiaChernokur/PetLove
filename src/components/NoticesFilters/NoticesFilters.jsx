import { useEffect, useState } from 'react';
import {
  BorderDiv,
  CheckDiv,
  CheckboxInput,
  CheckboxLabel,
  NoticesField,
  NoticesFiltersContainer,
  NoticesForm,
  SearchButton,
} from './NoticesFilters.styled';
import { Formik } from 'formik';
import Select from 'react-select';
import SearchField from '../SearchField/SearchField';
import { useDispatch } from 'react-redux';
import {
  getNoticesCategories,
  getNoticesResponse,
} from '../../redux/operation';
import sprite from '../../img/sprite.svg';
import { NewsButton } from '../../pages/News/News.styled';

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

const NoticesFilters = ({ arrayByCategory, page, total, toFirst }) => {
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [petTypes, setPetTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [cities, setCities] = useState([]);
  const [check, setCheck] = useState('');
  const [toPage, setToPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [valuesArray, setValuesArray] = useState({
    category: '',
    gender: '',
    keyword: '',
    location: '',
    petType: '',
    sortBy: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNotices = async () => {
      const valuesArrayPage = { ...valuesArray, toPage };
      const response = await dispatch(getNoticesResponse(valuesArrayPage));
      arrayByCategory(response.payload.results);
      return;
    };
    if (page !== toPage) {
      setToPage(page);
      fetchNotices();
    }
  }, [arrayByCategory, dispatch, page, toPage, valuesArray]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await dispatch(getNoticesCategories());

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
      const copyArray = JSON.parse(JSON.stringify(cities));
      console.log(copyArray);
      if (!Array.isArray(copyArray) || copyArray.length === 0) {
        console.error('Cities array is empty or not an array');
        return;
      }
      const loc = copyArray.filter((location) => {
        const cityEn = location.cityEn || '';
        const countyEn = location.countyEn || '';
        const stateEn = location.stateEn || '';

        return (
          cityEn.toLowerCase().includes(inputValue.toLowerCase()) ||
          countyEn.toLowerCase().includes(inputValue.toLowerCase()) ||
          stateEn.toLowerCase().includes(inputValue.toLowerCase())
        );
      });

      const val = loc.map((l) => ({
        label: `${l.cityEn}, ${l.countyEn}, ${l.stateEn}`,
        value: l._id,
      }));
      setLocations(val);
    } catch (error) {
      console.error('Error fetching locations', error);
    }
  };

  const handleSelectChange = async (field, value, setFieldValue, values) => {
    console.log(value);
    console.log(selectedOption);
    console.log(values);
    setFieldValue(field, value);
    const updatedValues = { ...values, [field]: value, toPage: 1 };

    const response = await dispatch(getNoticesResponse(updatedValues));
    toFirst();
    total(response.payload.totalPages);
    arrayByCategory(response.payload.results);
  };

  const radioClear = async (field, setFieldValue, values) => {
    console.log('999999');
    setCheck('');
    await handleSelectChange(field, '', setFieldValue, values);
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
        onSubmit={async (values) => {}}
      >
        {({ setFieldValue, values }) => (
          <NoticesForm>
            <div style={{ position: 'relative' }}>
              <SearchField
                name="keyword"
                placeholder="Search..."
                onChange={async (e) => {
                  const value = e.target.value;
                  setValuesArray(values);
                  await handleSelectChange(
                    'keyword',
                    value,
                    setFieldValue,
                    values
                  );
                }}
              />

              <SearchButton type="button">
                <svg width="20" height="20">
                  <use href={`${sprite}#search`}></use>
                </svg>
              </SearchButton>
            </div>
            <NoticesField
              as="select"
              name="category"
              onChange={async (e) => {
                const value = e.target.value;
                setValuesArray(values);
                if (page !== 1) {
                  page === 1;
                }
                await handleSelectChange(
                  'category',
                  value,
                  setFieldValue,
                  values
                );
              }}
            >
              <option value="">Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </NoticesField>

            <NoticesField
              as="select"
              name="gender"
              onChange={async (e) => {
                const value = e.target.value;
                setValuesArray(values);
                await handleSelectChange(
                  'gender',
                  value,
                  setFieldValue,
                  values
                );
              }}
            >
              <option value="">By gender</option>
              {genders.map((gender, index) => (
                <option key={index} value={gender}>
                  {gender}
                </option>
              ))}
            </NoticesField>
            <NoticesField
              as="select"
              name="petType"
              onChange={async (e) => {
                const value = e.target.value;
                setValuesArray(values);
                await handleSelectChange(
                  'petType',
                  value,
                  setFieldValue,
                  values
                );
              }}
            >
              <option value="">By type</option>
              {petTypes.map((petType, index) => (
                <option key={index} value={petType}>
                  {petType}
                </option>
              ))}
            </NoticesField>
            <div style={{ position: 'relative' }}>
              <Select
                name="location"
                options={locations}
                styles={customStyles}
                onInputChange={getCiti}
                placeholder="Location"
                onChange={async (selectedOption) => {
                  setValuesArray(values);
                  const value = selectedOption;
                  setSelectedOption(value.label);
                  await handleSelectChange(
                    'location',
                    value.value,
                    setFieldValue,
                    values
                  );
                }}
              />
              {selectedOption && (
                <NewsButton
                  type="button"
                  onClick={() =>
                    handleSelectChange('location', '', setFieldValue, values)
                  }
                  style={{ position: 'absolute', right: ' 41', top: '14' }}
                >
                  <svg width="20" height="20">
                    <use href={`${sprite}#cross-small`}></use>
                  </svg>
                </NewsButton>
              )}
              <SearchButton type="button" style={{ background: 'white' }}>
                <svg width="20" height="20">
                  <use href={`${sprite}#search`}></use>
                </svg>
              </SearchButton>
            </div>
            <BorderDiv></BorderDiv>
            <CheckDiv>
              <CheckboxLabel
                style={check === 'popularity' ? { background: '#f6b83d' } : {}}
              >
                <CheckboxInput
                  type="radio"
                  name="sortBy"
                  value="popularity"
                  checked={check === 'popularity'}
                  onChange={async (e) => {
                    setCheck('popularity');
                    const value = e.target.value;
                    setValuesArray(values);
                    await handleSelectChange(
                      'sortBy',
                      value,
                      setFieldValue,
                      values
                    );
                  }}
                />
                Popular
                <svg
                  width="20"
                  height="20"
                  onClick={async () => {
                    await radioClear('sortBy', setFieldValue, values);
                  }}
                >
                  <use href={`${sprite}#x`}></use>
                </svg>
              </CheckboxLabel>
              <CheckboxLabel
                style={check === 'unpopular' ? { background: '#f6b83d' } : {}}
              >
                <CheckboxInput
                  type="radio"
                  name="sortBy"
                  value="unpopular"
                  checked={check === 'unpopular'}
                  onChange={async (e) => {
                    setCheck('unpopular');
                    const value = e.target.value;
                    setValuesArray(values);
                    await handleSelectChange(
                      'sortBy',
                      value,
                      setFieldValue,
                      values
                    );
                  }}
                />
                Unpopular
                <svg
                  width="20"
                  height="20"
                  onClick={async () => {
                    await radioClear('sortBy', setFieldValue, values);
                  }}
                >
                  <use href={`${sprite}#x`}></use>
                </svg>
              </CheckboxLabel>
              <CheckboxLabel
                style={check === 'cheap' ? { background: '#f6b83d' } : {}}
              >
                <CheckboxInput
                  type="radio"
                  name="sortBy"
                  value="cheap"
                  checked={check === 'cheap'}
                  onChange={async (e) => {
                    console.log('lllllllllllll');
                    console.log(check);
                    setCheck((prev) => (prev === 'cheap' ? '' : 'cheap'));
                    // setCheck('cheap');
                    setValuesArray(values);
                    const value = e.target.value;
                    await handleSelectChange(
                      'sortBy',
                      value,
                      setFieldValue,
                      values
                    );
                  }}
                />
                Cheap
                <svg
                  width="20"
                  height="20"
                  onClick={async () => {
                    await radioClear('sortBy', setFieldValue, values);
                  }}
                >
                  <use href={`${sprite}#x`}></use>
                </svg>
              </CheckboxLabel>
              <CheckboxLabel
                style={check === 'expensive' ? { background: '#f6b83d' } : {}}
              >
                <CheckboxInput
                  type="radio"
                  name="sortBy"
                  value="expensive"
                  checked={check === 'expensive'}
                  onChange={async (e) => {
                    setCheck('expensive');
                    setValuesArray(values);
                    const value = e.target.value;
                    await handleSelectChange(
                      'sortBy',
                      value,
                      setFieldValue,
                      values
                    );
                  }}
                />
                Expensive
                <svg
                  width="20"
                  height="20"
                  onClick={async () => {
                    await radioClear('sortBy', setFieldValue, values);
                  }}
                >
                  <use href={`${sprite}#x`}></use>
                </svg>
              </CheckboxLabel>
            </CheckDiv>
          </NoticesForm>
        )}
      </Formik>
    </NoticesFiltersContainer>
  );
};
export default NoticesFilters;
