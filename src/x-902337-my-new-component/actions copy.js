import {actionTypes} from '@servicenow/ui-core';
import {GridView, LocalDataProvider} from 'realgrid'

export default {
	actionHandlers: {
		[actionTypes.COMPONENT_RENDERED]:{
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
		},
	}
}
