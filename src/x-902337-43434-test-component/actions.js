
import { actionTypes } from '@servicenow/ui-core';
const { COMPONENT_BOOTSTRAPPED} = actionTypes;

export default {
  actionHandlers: {
    [COMPONENT_BOOTSTRAPPED]: (coeffects) => { console.log("COMPONENT_BOOTSTRAPPED: x-902337-43434-test-component") },
  }
}
