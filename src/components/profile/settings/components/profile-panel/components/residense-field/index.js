import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { getCountries, getCities } from 'domains/profile/operations/residense';
import { setSelectedCountryIso, clearCountriesData } from 'domains/profile/actions/';
import { selectResidenseCountries, selectResidenseCities } from 'domains/profile/selectors';

import { Select } from 'antd';

export class ResidenseField extends React.Component {
  render () {
    const { countries, cities } = this.props;
    console.log(this.props);

    const selectProps = {
      allowClear: true,
      showSearch: true,
      labelInValue: true,
      defaultActiveFirstOption: false,
      filterOption: false,
      style: { width: '100%' },
    };

    return (
      <>
        <Select
          {...selectProps}
          placeholder="Выберите страну"
          loading={countries.isLoading}
          onSearch={this.handleCountrySearch}
          onSelect={this.handleCountrySelect}
          onChange={this.handleCountryChange}
        >
          {Object.values(countries.data).map(country => (
            <Select.Option key={country.iso}>{country.name}</Select.Option>
          ))}
        </Select>
        <Select
          {...selectProps}
          placeholder="Выберите город"
          loading={cities.isLoading}
          onSearch={this.handleCitySearch}
          onChange={this.handleCityChange}
          style={{ width: '100%' }}
        >
          {Object.values(cities.data).map(city => (
            <Select.Option key={city.id}>{city.name}</Select.Option>
          ))}
        </Select>
      </>
    );
  }

  handleCountrySearch = debounce((search) => {
    this.props.getCountries(search);
  }, 300);

  handleCountrySelect = ({ key }) => {
    const { setSelectedCountryIso, getCities } = this.props;
    if (key) {
      setSelectedCountryIso(key);
      getCities({ countryIso: key, limit: 100 });
    } else {
      setSelectedCountryIso(null);
    }
  };

  handleCountryChange = country => {
    const { onChange, value } = this.props;
    if (!country) {
      this.props.clearCountriesData();
    }

    onChange({
      ...value,
      country,
    });
  }

  handleCitySearch = debounce((name) => {
    const { getCities, countries } = this.props;
    const { selectedIso } = countries;

    getCities({ name, countryIso: selectedIso });
  }, 300);

  handleCityChange = city => {
    const { onChange, value } = this.props;
    onChange({
      ...value,
      city,
    });
  }
};

const mapStateToProps = state => ({
  countries: selectResidenseCountries(state),
  cities: selectResidenseCities(state),
});

const mapDispatchToProps = {
  getCountries: getCountries,
  getCities: getCities,
  setSelectedCountryIso: setSelectedCountryIso,
  clearCountriesData: clearCountriesData,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  { forwardRef: true }
)(ResidenseField);
