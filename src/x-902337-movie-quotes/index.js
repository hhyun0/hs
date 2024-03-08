import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>
			<div>
				<input type="radio" id= "red" name="color" value="red"/>
				<label htmlFor="red">Red</label>
			</div>
			<div>
				<input type="radio" id= "green" name="color" value="green"/>
				<label htmlFor="green">Green</label>
			</div>
			<div>
				<input type="radio" id= "blue" name="color" value="blue"/>
				<label htmlFor="blue">Blue</label>
			</div>
		</div>
	);
};

createCustomElement('x-902337-movie-quotes', {
	renderer: {type: snabbdom},
	view,
	styles,
	eventHandlers:[{
		events: ['input'],
		effect(coeffects){
			const {dispatch, action:{payload:{event}}} = coeffects;
			 console.log(event);
			//console.log(dispatch);
			//console.log(coeffects);
			//const {value} = event.path[0];
			const {value} = event.srcElement; // event.path 대신 event.target 사용
			console.log({value})
			console.log(event.srcElement)
			dispatch('SNC_COLOR_PICKER#VALUE_SET', {value});
		}

	}]
});
