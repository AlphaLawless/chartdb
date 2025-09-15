import { z } from 'zod';
import { type ColumnInfo, ColumnInfoSchema } from './column-info';
import {
  type DBCustomTypeInfo,
  DBCustomTypeInfoSchema,
} from './custom-type-info';
import { type ForeignKeyInfo, ForeignKeyInfoSchema } from './foreign-key-info';
import { type IndexInfo, IndexInfoSchema } from './index-info';
import { type PrimaryKeyInfo, PrimaryKeyInfoSchema } from './primary-key-info';
import { type TableInfo, TableInfoSchema } from './table-info';
import { type ViewInfo, ViewInfoSchema } from './view-info';

export interface DatabaseMetadata {
  fk_info: ForeignKeyInfo[];
  pk_info: PrimaryKeyInfo[];
  columns: ColumnInfo[];
  indexes: IndexInfo[];
  tables: TableInfo[];
  views: ViewInfo[];
  custom_types?: DBCustomTypeInfo[];
  database_name: string;
  version: string;
}

export const DatabaseMetadataSchema: z.ZodType<DatabaseMetadata> = z.object({
  fk_info: z.array(ForeignKeyInfoSchema),
  pk_info: z.array(PrimaryKeyInfoSchema),
  columns: z.array(ColumnInfoSchema),
  indexes: z.array(IndexInfoSchema),
  tables: z.array(TableInfoSchema),
  views: z.array(ViewInfoSchema),
  custom_types: z.array(DBCustomTypeInfoSchema).optional(),
  database_name: z.string(),
  version: z.string(),
});

export const isDatabaseMetadata = (obj: unknown): boolean => {
  const parsedObject = DatabaseMetadataSchema.safeParse(obj);

  if (!parsedObject.success) {
    console.error(parsedObject.error);
    return false;
  }

  return true;
};

export const loadDatabaseMetadata = (jsonString: string): DatabaseMetadata => {
  try {
    const parsedData: DatabaseMetadata = JSON.parse(jsonString);
    return parsedData;
  } catch (parseError) {
    throw new Error(`Error parsing JSON data: ${parseError}`);
  }
};
