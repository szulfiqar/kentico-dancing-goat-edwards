import React, { Component } from 'react';
import { translate } from 'react-translate';

import { EdwardsPage1Store } from '../Stores/EdwardsPage1Store';
import ContactMap from '../Components/ContactMap';

let getState = language => {
  return {
    cafes: EdwardsPage1Store.getCompanyCafes(language)
  };
};

class EdwardsPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = getState(props.language);
    this.onChange = this.onChange.bind(this);
    this.selectAddress = this.selectAddress.bind(this);
  }

  componentDidMount() {
    EdwardsPage1Store.addChangeListener(this.onChange);
    EdwardsPage1Store.fetchPageDetails(this.props.language);
  }

  componentWillUnmount() {
    EdwardsPage1Store.removeChangeListener(this.onChange);
    EdwardsPage1Store.unsubscribe();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.language !== nextProps.language) {
      EdwardsPage1Store.fetchPageDetails(nextProps.language);
      return {
        language: nextProps.language,
        selectedAddress: undefined
      };
    }
    return null;
  }

  onChange(language) {
    this.setState(getState(language || this.props.language));
  }

  selectAddress(address) {
    this.setState({
      selectedAddress: address
    });
  }

  render() {

    let createModel = cafe => {
      console.log(cafe);
      let model = {
        title: cafe.title.value,
        descriptions: cafe.descriptions.value,
      };
      return model;
    };

    let content = null;

    if (this.state.cafes && this.state.cafes.length > 0) {
      content = this.state.cafes.map(createModel)[0];
    }

    console.log(content);

    return (
      <div className="container">
        {content && <div>
          <h2>{content.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: content.descriptions
            }}></div>
        </div>}
      </div>
    );
  }
}

export default translate('EdwardsPage1')(EdwardsPage1);

