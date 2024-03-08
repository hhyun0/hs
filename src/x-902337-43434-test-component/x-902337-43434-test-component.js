
import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view'
import actions from './actions';
import '../nxu-searchable-dropdown';


createCustomElement('x-902337-test-component', {
	renderer: { type: snabbdom },
    view,
    styles,
	...actions,
	initialState: {},
	properties: {}
});
