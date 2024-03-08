import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import {actionTypes} from '@servicenow/ui-core';


const SOME_THING = 'SOME_THING';
const SNC_COLOR_PICKER = 'SNC_COLOR_PICKER#VALUE_SET';

const view = (state, {dispatch}) => {
	return (
		<div>
			<div>
				<input type="radio" on-input= {()=> dispatch('SOME_THING' , {color:'red'})} id= "red" name="color" value="red"/>
				<label htmlFor="red">Red</label>
			</div>
			<div>
				<input type="radio" on-input= {()=> dispatch('SOME_THING', {color:'green'})} id= "green" name="color" value="green"/>
				<label htmlFor="green">Green</label>
			</div>
			<div>
				<input type="radio" on-input= {()=> dispatch('SOME_THING', {color:'blue'})} id= "blue" name="color" value="blue"/>
				<label htmlFor="blue">Blue</label>
			</div>
		</div>
	);
};

createCustomElement('x-902337-color-picker', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
        selectedValue : ''
	},
	actionHandlers:{
		[SOME_THING]: ({dispatch, action}) =>{
			console.log("팀장님이랑 있어서 행복해요 우리는 너무너무 냐하핳하하");
			console.log({value : action.payload.color});
			dispatch('SNC_COLOR_PICKER#VALUE_SET', {value : action.payload.color}); 
		} ,
		[SNC_COLOR_PICKER]: ({action, updateState}) => {
			const {value} = action.payload;
			console.log("뭐여")
			console.log(value)

		  }	
	},
	eventHandlers:[{
		events: ['input'],
		effect(coeffects){
			const {dispatch, action:{payload:{event}}} = coeffects;
			 console.log(event);
			console.log(coeffects);
			//const {value} = event.path[0];
			const {value} = event.composedPath()[0].value; // event.path 대신 event.target 사용
			console.log({value})
			//console.log({value})
			console.log(event.srcElement)
			dispatch('SNC_COLOR_PICKER#VALUE_SET', {value});
		}

	}]
});



