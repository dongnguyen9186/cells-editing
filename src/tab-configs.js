export const TabsConfigs = [
  {
    id: "sales_total",
    fieldsGroups: [
      ["weather"],
      ["gross_sales"],
      [
        "net_sales",
        "service_charge",
        "discount_exc_tax",
        "tax",
        "persons",
        "groups",
        "unit_price_per_person"
      ]
    ]
  },
  {
    id: "sales_general_banquet",
    fieldsGroups: [
      [
        "net_sales_general",
        "service_charge_general",
        "tax_discount_except_tax_general",
        "tax_general",
        "persons_general",
        "groups_general",
        "unit_price_per_person_general"
      ],
      [
        "net_sales_banquet",
        "service_charge_banquet",
        "tax_discount_except_tax_banquet",
        "tax_banquet",
        "persons_banquet",
        "groups_banquet",
        "unit_price_per_person_banquet"
      ],
      []
    ]
  },
  {
    id: "labor_cost",
    fieldsGroups: [
      [
        "labor_ta",
        "employee_ta",
        "employee_cost",
        "contractor_ta",
        "contractor_cost",
        "gross_profit_man_hour"
      ],
      ["purchase_amount"],
      ["budget_sales", "budget_persons", "budget_working_ta"]
    ]
  },
  {
    title: "cash_voucher",
    fieldsGroups: [
      [
        "cash_voucher1",
        "cash_voucher2",
        "cash_voucher3",
        "cash_voucher4",
        "cash_voucher5",
        "cash_voucher6",
        "cash_voucher7",
        "cash_voucher8"
      ],
      ["cash_voucher9", "cash_voucher10"],
      ["cash_voucher_change", "cash_voucher_difference"]
    ]
  },
  {
    id: "payment_media",
    fieldsGroups: [
      [
        "payment_media1",
        "payment_media2",
        "payment_media3",
        "payment_media4",
        "payment_media5",
        "payment_media6",
        "payment_media7",
        "payment_media8"
      ],
      [
        "payment_media9",
        "payment_media10",
        "payment_media11",
        "payment_media12",
        "payment_media13",
        "payment_media14",
        "payment_media15",
        "payment_media16"
      ],
      [
        "payment_media17",
        "payment_media18",
        "payment_media19",
        "payment_media20"
      ]
    ]
  },
  {
    title: "discount_ticket",
    fieldsGroups: [
      [
        "discount_ticket_payment1",
        "discount_ticket_payment2",
        "discount_ticket_payment3",
        "discount_ticket_payment4",
        "discount_ticket_payment5",
        "discount_ticket_payment6",
        "discount_ticket_payment7",
        "discount_ticket_payment8"
      ],
      [
        "discount_ticket_payment9",
        "discount_ticket_payment10",
        "discount_ticket_payment11",
        "discount_ticket_payment12",
        "discount_ticket_payment13",
        "discount_ticket_payment14",
        "discount_ticket_payment15"
      ],
      ["discount_ticket_change", "discount_ticket_difference", "rounded_price"]
    ]
  },
  {
    title: "deposit",
    fieldsGroups: [
      [
        "deposit1",
        "deposit2",
        "deposit3",
        "deposit4",
        "deposit5",
        "deposit6",
        "deposit7",
        "deposit8"
      ],
      [
        "deposit9",
        "deposit10",
        "withdrawal_on_cashier1",
        "withdrawal_on_cashier2",
        "withdrawal_on_cashier3",
        "withdrawal_on_cashier4",
        "withdrawal_on_cashier5"
      ],
      [
        "withdrawal_on_cashier6",
        "withdrawal_on_cashier7",
        "withdrawal_on_cashier8",
        "withdrawal_on_cashier9",
        "withdrawal_on_cashier10"
      ]
    ]
  },
  {
    title: "register",
    fieldsGroups: [
      [
        "cash_change",
        "next_day_change",
        "change_change",
        "change_over",
        "cash_excess_or_deficiency",
        "deducted_cash_amount"
      ],
      [],
      []
    ]
  }
];
