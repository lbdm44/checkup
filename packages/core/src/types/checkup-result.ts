import { Action, TaskError, TaskName } from './tasks';
import { CheckupConfig } from './config';

export type IndexableObject = { [key: string]: any };

export type DataSummary = {
  values: Record<string, number>;
  dataKey: string;
  total: number;
  units?: string;
};

export interface TaskResult {
  info: {
    taskName: TaskName;
    taskDisplayName: string;
    category: string;
    group?: string;
  };
  result: Record<string, any>;
}

interface BaseResult {
  key: string;
  type: string;
  data: Array<string | IndexableObject>;
}

export interface SummaryResult extends BaseResult {
  type: 'summary';
  count: number;
}

export interface MultiValueResult extends BaseResult {
  type: 'multi-value';
  dataSummary: DataSummary;
}

export interface LookupValueResult extends BaseResult {
  type: 'lookup-value';
  dataSummary: {
    values: Record<string, number>;
    dataKey: string;
    valueKey: string;
    total: number;
  };
}

export type Result = SummaryResult | MultiValueResult | LookupValueResult;

export interface CheckupResult {
  info: {
    project: {
      name: string;
      version: string;
      repository: {
        totalCommits: number;
        totalFiles: number;
        age: string;
        activeDays: string;
      };
    };
    cli: {
      schema: number;
      configHash: string;
      config: CheckupConfig;
      version: string;
      args: {
        paths: string[];
      };
      flags: {
        config?: string;
        task?: string[];
        format: string;
        outputFile?: string;
        excludePaths?: string[];
      };
      timings: Record<string, number>;
    };
    analyzedFiles: string[];
    analyzedFilesCount: number;
  };
  results: TaskResult[];
  errors: TaskError[];
  actions: Action[];
}
