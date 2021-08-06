import React from 'react';
import { translate } from 'react-translate';

const HomeWidget = (props) => {
  //console.log('homewidget' + props.widgetArea.description);
  const description = props.widgetArea[0].description.value;
  const heading = props.widgetArea[0].heading.value;
  console.log(props.widgetArea[0].description.value);
  return (
    <div className="widget">
    <h3 className="heading">{heading} </h3>
      <div
        className="widgetDescription"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
    </div>
  );
};

export default translate('HomeWidget')(HomeWidget);