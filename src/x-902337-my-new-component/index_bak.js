import { createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import styles from './checklist.scss';
import checklistActions from './actions';
import rtlBehavior from '@servicenow/behavior-rtl';
import {columns, fields, rows} from './realgrid-data';

createCustomElement('x-902337-my-new-component', {
    renderer: { type: snabbdom },
    view,
    initialState: { columns, fields, rows},
    ...checklistActions,
    styles,
    behaviors: [rtlBehavior]
});
