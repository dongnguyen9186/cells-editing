import React, { Component } from "react";
import { dailySaleCsvFieldDefinitions } from "./fieldDefinitions";
import DailySalesCSVEditTable from "./table";
import { Parser } from "hot-formula-parser";
import { CanEdit } from "./can-edit";
import { TabsConfigs } from "./tab-configs";
import { response } from "./data";

export const isEmpty = value =>
  typeof value === "undefined" || value === null || value === "";

const parser = new Parser();

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.formatRowsData(response.data)
    };
  }

  componentDidMount() {
    this.setFomulaVariables();
  }

  setFomulaVariables = () => {
    this.setFomulaVariable("actual_cash", 0);

    Object.keys(this.state.data).forEach(key => {
      this.setFomulaVariable(key, this.state.data[key].posValue);
    });
  };

  setFomulaVariable = (key, value) => {
    parser.setVariable(this.generateVariableName(key), value);
  };

  generateVariableName = name => {
    if (name.startsWith("deposit")) {
      return "ref_" + name + "_value";
    }
    return name;
  };

  executeParser = fieldName => {
    const valueTemplate = this.getValueTemplate(fieldName);
    return parser.parse(valueTemplate);
  };

  formatRowsData = data => {
    let result = {};
    dailySaleCsvFieldDefinitions.forEach(fieldDefinition => {
      const rowData = data[fieldDefinition.name];
      if (!rowData) {
        return;
      }
      const { name, ...rest } = fieldDefinition;
      const rowDataWithDefinitionExtention = {
        ...rest,
        valuerefference: name,
        posValue: rowData.pos || 0,
        aspValue: rowData.asp || 0
      };
      result[fieldDefinition.name] = rowDataWithDefinitionExtention;
    });
    return result;
  };

  formatAsTabData = (data, tabFieldNames = []) => {
    return tabFieldNames.map(fieldName => ({
      ...data[fieldName]
    }));
  };

  resolveAspDataByFieldName = fieldName => {
    const executedResult = this.executeParser(fieldName);
    const { result, error } = executedResult;
    return !!error ? 0 : result || 0;
  };

  updateDataAndFomula = (name, data) => {
    const rowData = data[name];
    const result = this.resolveAspDataByFieldName(name);
    this.setFomulaVariable(name, result);
    rowData.aspValue = result;
  };

  handleChangedCell = (key, value) => {
    this.setState(prevState => {
      const prevData = { ...prevState.data };
      prevData[key].aspValue = value;
      this.setFomulaVariable(key, value);

      const grossSalesRowData = prevData["gross_sales"];
      const grossSalesResult = this.resolveAspDataByFieldName("gross_sales");

      if (grossSalesResult !== grossSalesRowData.aspValue) {
        //TODO: UPDATE CELL CONFIG
      }
      //TODO: Optimize this to only calculating on relation cells
      this.updateDataAndFomula("net_sales", prevData);
      this.updateDataAndFomula("unit_price_per_person", prevData);
      this.updateDataAndFomula("net_sales_general", prevData);
      this.updateDataAndFomula("service_charge_general", prevData);
      this.updateDataAndFomula("tax_discount_except_tax_general", prevData);
      this.updateDataAndFomula("tax_general", prevData);
      this.updateDataAndFomula("persons_general", prevData);
      this.updateDataAndFomula("groups_general", prevData);
      this.updateDataAndFomula("unit_price_per_person_general", prevData);
      this.updateDataAndFomula("unit_price_per_person_banquet", prevData);
      this.updateDataAndFomula("labor_ta", prevData);
      this.updateDataAndFomula("gross_profit_man_hour", prevData);
      this.updateDataAndFomula("withdrawal_on_cashier1", prevData);
      this.updateDataAndFomula("next_day_change", prevData);
      this.updateDataAndFomula("cash_excess_or_deficiency", prevData);

      return {
        data: prevData
      };
    });
  };

  getValueTemplate = name => {
    const fieldDefinition = dailySaleCsvFieldDefinitions.find(
      definition => definition.name === name
    );

    return fieldDefinition.posValueTemplate;
  };

  render() {
    const data = { ...this.state.data };

    return (
      <CanEdit>
        {({ editable }) => (
          <div>
            {TabsConfigs.map((tab, tabIndex) => {
              return tab.fieldsGroups.map((fieldNames, groupNumber) => (
                <DailySalesCSVEditTable
                  key={`tab${tabIndex}${groupNumber}`}
                  editable={editable}
                  data={this.formatAsTabData(data, fieldNames)}
                  handleChangedCell={this.handleChangedCell}
                />
              ));
            })}
          </div>
        )}
      </CanEdit>
    );
  }
}

export default Demo;
