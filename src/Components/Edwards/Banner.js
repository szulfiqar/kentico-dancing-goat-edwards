import React from 'react';
import { translate } from 'react-translate';

const Banner = props => {
    const { data } = props;

    return (
        <div className="custom-banner-container strip-margin pageBannerContainer">
            <img className="desktop-img"
                src={data.webimage[0]?.url}
                alt={data.title} />
            {/* <img className="mobile-img"
                src={mobile_banner_image}
                alt={mobile_banner_alt} /> */}
            <div className="edw-caption ">
                <div className="edw-caption-inner">
                    <div className="container clearfix">
                        <div className="banner-edw">
                            <div className="container">
                                <div className="redboxes">
                                    <div className="redbox-sm" />
                                    <div className="redbox-lg">
                                        <h1 className="forcesmall">{data.title}</h1>
                                        <p>{data.descriptions}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default translate('Banner')(Banner);
