import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = ({properties : {text='', color = ''}}) => {
	return (
		<div style={{color}}>{text}  123456789</div>
	);
};

createCustomElement('x-902337-color-text', {
	renderer: {type: snabbdom},
	view,
	styles,
	properties:{
		text:{},
		color:{}
	}
});
