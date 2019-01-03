export const dataType = Object.freeze({
  TEXT: "text",
  NUMBER: "number",
  CURRENCY: "currency"
});

const sales_total = [
  {
    name: "weather",
    type: dataType.CURRENCY
  },
  {
    name: "gross_sales",
    type: dataType.CURRENCY,
    posValueTemplate: `
    (cash_voucher1 + cash_voucher2 + cash_voucher3 + cash_voucher4 + cash_voucher5 + cash_voucher6 + cash_voucher7 + cash_voucher8 + cash_voucher9 + cash_voucher10)
    - cash_voucher_difference
    + (payment_media1 + payment_media2 + payment_media3 + payment_media4 + payment_media5 + payment_media6 + 
     payment_media7 + payment_media8 + payment_media9 + payment_media10 + payment_media11 + payment_media12 +
     payment_media13 + payment_media14 + payment_media15 + payment_media16 + payment_media17 + payment_media18 + payment_media19 + payment_media20)
    `
  },
  {
    name: "net_sales",
    type: dataType.CURRENCY,
    readonly: true,
    posValueTemplate: "gross_sales - tax"
  },
  {
    name: "service_charge",
    type: dataType.CURRENCY
  },
  {
    name: "discount_exc_tax",
    type: dataType.CURRENCY
  },
  {
    name: "tax",
    type: dataType.CURRENCY
  },
  {
    name: "persons",
    type: dataType.NUMBER
  },
  {
    name: "groups",
    type: dataType.NUMBER
  },
  {
    name: "unit_price_per_person",
    type: dataType.CURRENCY,
    posValueTemplate: "net_sales/persons",
    readonly: true
  }
];

const sales_general_banquet = [
  {
    name: "net_sales_general",
    type: dataType.CURRENCY,
    readonly: true,
    posValueTemplate: "net_sales - net_sales_banquet"
  },
  {
    name: "service_charge_general",
    type: dataType.CURRENCY,
    readonly: true,
    posValueTemplate: "service_charge - service_charge_banquet"
  },
  {
    name: "tax_discount_except_tax_general",
    type: dataType.CURRENCY,
    readonly: true,
    posValueTemplate: "discount_exc_tax - tax_discount_except_tax_banquet"
  },
  {
    name: "tax_general",
    type: dataType.CURRENCY,
    readonly: true,
    posValueTemplate: "tax - tax_banquet"
  },
  {
    name: "persons_general",
    type: dataType.NUMBER,
    readonly: true,
    posValueTemplate: "persons - persons_banquet"
  },
  {
    name: "groups_general",
    type: dataType.NUMBER,
    readonly: true,
    posValueTemplate: "groups - groups_banquet"
  },
  {
    name: "unit_price_per_person_general",
    type: dataType.CURRENCY,
    readonly: true,
    posValueTemplate: "net_sales_general / persons_general"
  },
  {
    name: "net_sales_banquet",
    type: dataType.CURRENCY
  },
  {
    name: "service_charge_banquet",
    type: dataType.CURRENCY
  },
  {
    name: "tax_discount_except_tax_banquet",
    type: dataType.CURRENCY
  },
  {
    name: "tax_banquet",
    type: dataType.CURRENCY
  },
  {
    name: "persons_banquet",
    type: dataType.NUMBER
  },
  {
    name: "groups_banquet",
    type: dataType.NUMBER
  },
  {
    name: "unit_price_per_person_banquet",
    type: dataType.CURRENCY,
    readonly: true,
    posValueTemplate: "net_sales_banquet / persons_banquet"
  }
];

const labor_cost = [
  {
    name: "labor_ta",
    type: dataType.NUMBER,
    readonly: true,
    posValueTemplate: "employee_ta + contractor_ta"
  },
  {
    name: "employee_ta",
    type: dataType.NUMBER
  },
  {
    name: "employee_cost",
    type: dataType.CURRENCY
  },
  {
    name: "contractor_ta",
    type: dataType.NUMBER
  },
  {
    name: "contractor_cost",
    type: dataType.CURRENCY
  },
  {
    name: "gross_profit_man_hour",
    type: dataType.CURRENCY,
    readonly: true,
    posValueTemplate: "net_sales / (labor_ta / 60)"
  },
  {
    name: "purchase_amount",
    type: dataType.CURRENCY
  },
  {
    name: "budget_sales",
    type: dataType.CURRENCY
  },
  {
    name: "budget_persons",
    type: dataType.NUMBER
  },
  {
    name: "budget_working_ta",
    type: dataType.NUMBER
  }
];
const cash_voucher = [
  {
    name: "cash_voucher1",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher2",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher3",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher4",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher5",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher6",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher7",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher8",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher9",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher10",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher_change",
    type: dataType.CURRENCY
  },
  {
    name: "cash_voucher_difference",
    type: dataType.CURRENCY
  }
];

const payment_media = [
  {
    name: "payment_media1",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media2",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media3",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media4",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media5",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media6",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media7",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media8",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media9",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media10",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media11",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media12",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media13",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media14",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media15",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media16",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media17",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media18",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media19",
    type: dataType.CURRENCY
  },
  {
    name: "payment_media20",
    type: dataType.CURRENCY
  }
];
const discount_ticket = [
  {
    name: "discount_ticket_payment1",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment2",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment3",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment4",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment5",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment6",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment7",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment8",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment9",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment10",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment11",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment12",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment13",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment14",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_payment15",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_change",
    type: dataType.CURRENCY
  },
  {
    name: "discount_ticket_difference",
    type: dataType.CURRENCY
  },
  {
    name: "rounded_price",
    type: dataType.CURRENCY
  }
];

const deposit = [
  {
    name: "deposit1",
    type: dataType.CURRENCY
  },
  {
    name: "deposit2",
    type: dataType.CURRENCY
  },
  {
    name: "deposit3",
    type: dataType.CURRENCY
  },
  {
    name: "deposit4",
    type: dataType.CURRENCY
  },
  {
    name: "deposit5",
    type: dataType.CURRENCY
  },
  {
    name: "deposit6",
    type: dataType.CURRENCY
  },
  {
    name: "deposit7",
    type: dataType.CURRENCY
  },
  {
    name: "deposit8",
    type: dataType.CURRENCY
  },
  {
    name: "deposit9",
    type: dataType.CURRENCY
  },
  {
    name: "deposit10",
    type: dataType.CURRENCY
  },
  {
    name: "withdrawal_on_cashier1",
    type: dataType.CURRENCY,
    readonly: true,
    posValueTemplate: `withdrawal_on_cashier2 + withdrawal_on_cashier3
            + withdrawal_on_cashier4 + withdrawal_on_cashier5
            + withdrawal_on_cashier6 + withdrawal_on_cashier7
            + withdrawal_on_cashier8 + withdrawal_on_cashier9
            + withdrawal_on_cashier10`
  },
  {
    name: "withdrawal_on_cashier2",
    type: dataType.CURRENCY
  },
  {
    name: "withdrawal_on_cashier3",
    type: dataType.CURRENCY
  },
  {
    name: "withdrawal_on_cashier4",
    type: dataType.CURRENCY
  },
  {
    name: "withdrawal_on_cashier5",
    type: dataType.CURRENCY
  },
  {
    name: "withdrawal_on_cashier6",
    type: dataType.CURRENCY
  },
  {
    name: "withdrawal_on_cashier7",
    type: dataType.CURRENCY
  },
  {
    name: "withdrawal_on_cashier8",
    type: dataType.CURRENCY
  },
  {
    name: "withdrawal_on_cashier9",
    type: dataType.CURRENCY
  },
  {
    name: "withdrawal_on_cashier10",
    type: dataType.CURRENCY
  }
];

const register = [
  {
    name: "cash_change",
    type: dataType.CURRENCY
  },
  {
    name: "next_day_change",
    type: dataType.CURRENCY,
    readonly: true,
    posValueTemplate: "cash_change + change_change - change_over"
  },
  {
    name: "change_change",
    type: dataType.CURRENCY
  },
  {
    name: "change_over",
    type: dataType.CURRENCY
  },
  {
    name: "cash_excess_or_deficiency",
    type: dataType.CURRENCY,
    readonly: true,
    // posValueTemplate: `cash_change + payment_media1 - cash_voucher_change - discount_ticket_change + deposit1`
    posValueTemplate: `actual_cash - cash_change + payment_media1 - cash_voucher_change - discount_ticket_change
    + ref_deposit1_value + ref_deposit2_value + ref_deposit3_value + ref_deposit4_value +
    ref_deposit5_value + ref_deposit6_value + ref_deposit7_value + ref_deposit8_value + ref_deposit9_value + ref_deposit10_value
    - withdrawal_on_cashier1 - change_change + change_over`
  },
  {
    name: "deducted_cash_amount",
    type: dataType.CURRENCY
  }
];

export const dailySaleCsvFieldDefinitions = [
  ...sales_total,
  ...sales_general_banquet,
  ...labor_cost,
  ...cash_voucher,
  ...payment_media,
  ...discount_ticket,
  ...deposit,
  ...register
];
