import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import actionHandlers from './actionHandlers';
import styles from './styles.scss';

createCustomElement('x-902337-example-agent-assist', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
		searchString: null,
		isLoading: false,
		result: []
	},
	properties: {
		fields: {
			default: {
				short_description: {
					displayValue: 'email',
					value: 'email',
					visible: true
				}
			}
		}
	},
	actionHandlers
});
