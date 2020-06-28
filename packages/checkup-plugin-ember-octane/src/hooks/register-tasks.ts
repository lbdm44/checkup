import { Hook } from '@oclif/config';
import { getPluginName, RegisterTaskArgs } from '@checkup/core';

import OctaneMigrationStatusTask from '../tasks/octane-migration-status-task';

const hook: Hook<RegisterTaskArgs> = async function ({ context, tasks }: RegisterTaskArgs) {
  let pluginName = getPluginName(__dirname);

  tasks.registerTask(new OctaneMigrationStatusTask(pluginName, context));
};

export default hook;
