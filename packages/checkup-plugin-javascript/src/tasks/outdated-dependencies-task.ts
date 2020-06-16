import * as npmCheck from 'npm-check';

import { BaseTask, TaskType, Task, TaskMetaData, TaskResult } from '@checkup/core';

import OutdatedDependenciesTaskResult from '../results/outdated-dependencies-task-result';
import { PackageJson } from 'type-fest';

export type OutdatedDependency = {
  moduleName: string;
  homepage: string;
  regError: string | undefined;
  pkgError: string | undefined;
  latest: string;
  installed: string;
  isInstalled: boolean;
  notInstalled: boolean;
  packageWanted: string;
  packageJson: string;
  devDependency: boolean;
  usedInScripts: string[] | undefined;
  mismatch: boolean;
  semverValid: string;
  easyUpgrade: boolean;
  bump: string;
  unused: boolean;
};

async function getOutdated(path: string, debug: debug.Debugger): Promise<OutdatedDependency[]> {
  let result;
  let packages;

  try {
    debug('Running npmCheck...');
    result = await npmCheck({ cwd: path });
    debug('npmCheck complete!');
  } catch {
    throw new Error('Could not check project dependencies');
  }

  packages = result.get('packages');

  return packages;
}

function getTotalDependencies(packageJson: PackageJson) {
  return (
    Object.keys(packageJson.dependencies ?? {}).length +
    Object.keys(packageJson.devDependencies ?? {}).length
  );
}

export default class OutdatedDependenciesTask extends BaseTask implements Task {
  meta: TaskMetaData = {
    taskName: 'outdated-dependencies',
    friendlyTaskName: 'Outdated Dependencies',
    taskClassification: {
      type: TaskType.Insights,
      category: 'dependencies',
    },
  };

  async run(): Promise<TaskResult> {
    let result: OutdatedDependenciesTaskResult = new OutdatedDependenciesTaskResult(
      this.meta,
      this.config
    );

    result.outdatedDependencies = await getOutdated(this.context.cliFlags.cwd, this.debugTask);
    result.totalDependencies = getTotalDependencies(this.context.pkg);

    return result;
  }
}
