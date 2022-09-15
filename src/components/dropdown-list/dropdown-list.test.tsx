import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttribute } from '../../utils/testing-utils';
import DropDownList from './dropdown-list';

describe('<DropDownList /> Testing', () => {

    describe('Passing Props', () => {

        const comboBox = {
            locations:{
                MDC: {
                    floors: {
                        "0": {
                            sections: ["A", "B", "C"]
                        },
                        "18": {
                            sections: ["A", "B", "C"]
                        },
                        "24": {
                            sections: ["A", "B", "C"]
                        }
                    }
                },
                Austin: {
                    floors: {
                        "0": {
                            sections: ["A", "B", "C"]
                        },
                        "18": {
                            sections: ["A", "B", "C"]
                        },
                        "24": {
                            sections: ["A", "B", "C"]
                        }
                    }
                }
            }
        }

        let wrapper : ShallowWrapper;
        beforeEach(() => {
            const props = {
                name: "locations",
                inputLabel: "Locations",
                items: Object.keys(comboBox.locations),
                itemSelected: "MDC",
                handleSelect: () => {}
            }
            wrapper = shallow(<DropDownList {...props} />)
        })

        it('Should Render',  () => {
            const component = findByTestAttribute(wrapper, 'dropdown-list');
            expect(component.length).toBe(1);
        })
    }) 
})