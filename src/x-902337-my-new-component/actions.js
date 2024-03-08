import {actionTypes} from '@servicenow/ui-core';
import {GridView, LocalDataProvider} from 'realgrid'
import {createHttpEffect} from '@servicenow/ui-effect-http';

const FETCH_ITEM_SUCCEEDED = 'FETCH_ITEM_SUCCEEDED';
const CHECKLIST_LOAD_REQUESTED = 'CHECKLIST_LOAD_REQUESTED';
// errorActionType: FETCH_ITEM_FAILED,
const REAL_LOAD_REQUESTED = 'REAL_LOAD_REQUESTED';
const FETCH_ITEM_FAILED = 'FETCH_ITEM_FAILED';

export default {
	actionHandlers: {
		[actionTypes.COMPONENT_BOOTSTRAPPED]: ({
			dispatch,
			properties
		}) => {
			dispatch(CHECKLIST_LOAD_REQUESTED);
			const {table, sysid} = properties;
		},
		[CHECKLIST_LOAD_REQUESTED]: createHttpEffect('/api/now/table/'+ table, {
			successActionType: FETCH_ITEM_SUCCEEDED,
			errorActionType: FETCH_ITEM_FAILED
		}),
		[FETCH_ITEM_FAILED]: () => {
			debugger
		},
		[FETCH_ITEM_SUCCEEDED]: ({action, updateState, dispatch}) => {
			const {
				payload: {result = []}
			} = action;
			console.log("Result:", result);
			updateState({
				path: 'rows',
				operation: 'set',
				value: result.map(item => ({
					number: item.number,
					sys_id: item.sys_id,
					short_description: item.short_description
				}))
			});
			dispatch(REAL_LOAD_REQUESTED);
		},
		[REAL_LOAD_REQUESTED]:{
			effect({state, host}){
				let container = host.shadowRoot.querySelector("#realgrid");
				const provider = new LocalDataProvider(true);
				const grid = new GridView(container);
				const fields = state.fields;
				const columns = state.columns;
				const rows = state.rows;
				grid.setDataSource(provider);
				provider.setFields(fields);
				grid.setColumns(columns);
				provider.setRows(rows);
			}
		}
	}
}
