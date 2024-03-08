import { ValueType } from "realgrid";


export const fields = [
  {
    fieldName: "number",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "sys_id",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "short_description",
    dataType: ValueType.TEXT,
  }
];

export const columns = [
  {
    name: "number",
    fieldName: "number",
    type: "data",
    width: "80",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "number",
      showTooltip: true,
      tooltip: '<span style="color: red;">이름</span>',
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "sys_id",
    fieldName: "sys_id",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "sys_id",
      showTooltip: false,
    },
  },
  {
    name: "short_description",
    fieldName: "short_description",
    type: "data",
    width: "220",
    styles: {
      textAlignment: "center",
    },
    header: "short_description",
  }
];

