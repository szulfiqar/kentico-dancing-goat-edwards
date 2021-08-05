import React, { Component } from 'react';
import { translate } from 'react-translate';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { EdwardsPage1Store } from '../Stores/EdwardsPage1Store';
import Banner from '../Components/Edwards/Banner';
import URL from '../Components/Edwards/Url';
import Accordian from '../Components/Edwards/Accordian';


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
        descriptions: cafe.description.value,
        tabs: cafe.tabs.value,
        webimage: cafe.webimage.value
      };
      return model;
    };

    let content = null;

    if (this.state.cafes && this.state.cafes.length > 0) {
      content = this.state.cafes.map(createModel)[0];
    }

    console.log(content);

    return (
      <div>
        {content && <div>
          <Banner data={content} />
          <div className="container">
            <Tabs>
              <TabList>
                {
                  content.tabs.map((tab, index) => {
                    return <Tab key={index}>{tab.title.value}</Tab>
                  })
                }
              </TabList>
              {
                content.tabs.map((tab, index) => {
                  return <TabPanel key={index}>
                    <div>
                      <h2 dangerouslySetInnerHTML={{ __html: tab.title.value }}></h2>
                    </div>
                    <div>
                      {
                        tab.urls?.value?.map((url, index) => {
                          return <URL key={index} data={url} />
                        })
                      }
                    </div>
                    <div style={{ marginTop: '10px' }}>
                      <Accordian key={index} data={tab.accordians.value} />
                    </div>
                  </TabPanel>
                })
              }
            </Tabs>
          </div>
        </div>}
      </div>
    );
  }
}

export default translate('EdwardsPage1')(EdwardsPage1);
