import React from 'react';
import { translate } from 'react-translate';

const StickyDiv = (props) => {
  console.log('homewidget', props);
  const description = props.widgetArea[0].description.value;
  const heading = props.widgetArea[0].heading.value;
  return (
    <div className="stickywidget">
      <h3 className="heading">{heading} </h3>
    </div>
  );
};

export default translate('StickyDiv')(StickyDiv);