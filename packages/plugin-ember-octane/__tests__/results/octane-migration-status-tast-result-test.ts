import { stdout } from '@checkup/test-helpers';
// import { OctaneMigrationStatusTask } from '../../src/tasks';
import { OctaneMigrationStatusTaskResult } from '../../src/results';

// classic-decorator-hooks                  -
// classic-decorator-no-classic-methods     -
// no-actions-hash                          - 3
// no-classic-classes                       - 5
// no-classic-components                    - 5
// no-component-lifecycle-hooks             -
// no-computed-properties-in-native-classes -
// no-get-with-default                      -
// no-get                                   - 3
// no-jquery                                -
// require-tagless-components               - 4

describe('octane-migration-status-task-result', () => {
  describe('console output', () => {
    test('simple console output', async () => {
      let sampleOctaneReport = require('../__fixtures__/sample-octane-eslint-report.json');
      let taskResult = new OctaneMigrationStatusTaskResult(sampleOctaneReport);

      taskResult.toConsole();

      expect(stdout()).toMatchSnapshot();
    });
  });

  describe('JSON output', () => {
    test('it should have basic JSON results', () => {
      let sampleOctaneReport = require('../__fixtures__/sample-octane-eslint-report.json');
      let taskResult = new OctaneMigrationStatusTaskResult(sampleOctaneReport);

      let jsonResults = taskResult.toJson();

      expect(jsonResults).toBeDefined();
    });
  });
});
