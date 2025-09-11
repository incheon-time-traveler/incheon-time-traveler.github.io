const page = {
  database_info: {
    name: 'db_template',
    table_count: 1,
    available_tables: ['real_estate_transactions']
  },
  schema_summary: [
    {
      table: 'real_estate_transactions',
      columns: 8,
      primary_keys: [
        'year_month',
        'legal_dong_address',
        'admin_dong_address',
        'admin_dong_code',
        'aggregate_district_code'
      ],
      key_columns: [
        'year_month (PRI)',
        'legal_dong_address (PRI)',
        'admin_dong_address (PRI)',
        'admin_dong_code (PRI)',
        'aggregate_district_code (PRI)'
      ]
    }
  ],
  detailed_schema: [
    {
      table_name: 'real_estate_transactions',
      description: 'Table with 8 columns and 2 sample rows',
      columns: [
        'year_month: varchar NOT NULL PRIMARY KEY (samples: 202401, 202401)',
        'legal_dong_address: varchar NOT NULL PRIMARY KEY (samples: 부산광역시 강서구 대저1동, 부산광역시 강서구 동선동)',
        'admin_dong_address: varchar NOT NULL PRIMARY KEY (samples: 부산광역시 강서구 대저1동, 부산광역시 강서구 가덕도동)',
        'admin_dong_code: bigint NOT NULL PRIMARY KEY (samples: 2644051000, 2644058000)',
        'aggregate_district_code: bigint NOT NULL PRIMARY KEY (samples: 2112051030003, 2112058010001)',
        'avg_transaction_price_10kkrw: decimal (samples: 95000.00, 13875.00)',
        'avg_building_area_sqm: decimal (samples: 211.98, 40.03)',
        'building_type: varchar (samples: 단독, 연립다세대)'
      ],
      sample_data:
        'Available columns: year_month, legal_dong_address, admin_dong_address, admin_dong_code, aggregate_district_code, avg_transaction_price_10kkrw, avg_building_area_sqm, building_type'
    }
  ],
  query_hints: {
    join_suggestions: 'Single table query',
    recommended_limits: 'Use LIMIT clause for large result sets',
    date_columns: []
  }
};
