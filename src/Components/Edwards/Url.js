import React from 'react';
import { translate } from 'react-translate';

const URL = props => {
    const { data } = props;
    return (
        <div>
            <a className="btn edw-btn btn-lg" href={data.url.value}>
                <i className="ico ico-book"></i>
                {data.title.value}
            </a>
        </div>
    );
};

export default translate('URL')(URL);
