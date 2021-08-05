import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import { translate } from 'react-translate';

const Accordian = props => {
    const { data } = props;
    return (
        <div>
            <span class="glyphicon expand-plus-sign"></span>

            <Accordion allowMultipleExpanded={true}>
                {
                    data.map((accordian, index) => {
                        return <AccordionItem key={index} uuid={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {accordian.title.value}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <span dangerouslySetInnerHTML={{ __html: accordian.description.value }}></span>
                            </AccordionItemPanel>
                        </AccordionItem>
                    })
                }
            </Accordion>
        </div>
    );
};

export default translate('Accordian')(Accordian);
