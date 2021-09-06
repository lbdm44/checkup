/* eslint-disable jest/no-disabled-tests */
import { resolve } from 'path';
import { readJsonSync } from 'fs-extra';
import { CheckupLogParser, FormatterOptions } from '@checkup/core';
const stripAnsi = require('strip-ansi');
const PrettyFormatter = require('../src');

describe('Test Pretty formatter', () => {
  it('can generate string from format', async () => {
    const log = readJsonSync(resolve(__dirname, './__fixtures__/checkup-result.sarif'));
    const logParser = new CheckupLogParser(log);
    const options: FormatterOptions = {
      cwd: '',
      format: 'checkup-formatter-pretty',
    };

    let formatter = new PrettyFormatter(options);

    const result = await formatter.format(logParser);

    expect(stripAnsi(result)).toMatchInlineSnapshot(`
      "Checkup report generated for travis v0.0.1  (1694 files analyzed)
      This project is 9 years old, with 1468 active days, 6010 commits and 1692 files


      lines of code 104439
      ■■■■■■■■■■■■■■■■■■■■■■■■■ js (50740)
      ■■■■■■■■■■■■ svg (24112)
      ■■■■■■■■ scss (15626)
      ■■■■■■■ hbs (13121)
      ■ rb (639)
      ■ html (201)


      Ember Types
        Components 258
        Controllers 44
        Helpers 38
        Initializers 4
        Instance Initializers 6
        Mixins 18
        Models 74
        Routes 65
        Services 47
        Templates 285


      Template Lint Summary
        Errors 673
        Warnings 0


      Number of eslint-disable Usages
        Disabled Rules 27


      Outdated Dependencies
        ┌─────────────────────────────────┬───────────┬────────┐
        │ Dependency                      │ Installed │ Latest │
        ├─────────────────────────────────┼───────────┼────────┤
        │ @ember/optional-features        │ ^1.0.0    │ 2.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ babel-eslint                    │ 10.0.3    │ 10.1.0 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ broccoli-funnel                 │ ^2.0.1    │ 3.0.8  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ broccoli-merge-trees            │ ^3.0.0    │ 4.2.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-c3                        │ ^2.0.0    │ 3.0.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli                       │ ~3.12.0   │ 3.28.0 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-app-version           │ ^3.2.0    │ 5.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-autoprefixer          │ ^0.8.1    │ 1.0.3  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-cjs-transform         │ ^1.3.0    │ 2.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-deploy-lightning-pack │ 1.2.2     │ 4.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-deprecation-workflow  │ ^1.0.0    │ 2.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-dotenv                │ ^2.2.3    │ 3.1.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-head                  │ ^0.4.1    │ 2.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-htmlbars              │ ^4.0.1    │ 5.7.1  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-mirage                │ ^1.1.0    │ 2.2.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-postcss               │ ^4.2.1    │ 7.0.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-cli-test-loader           │ ^2.1.0    │ 3.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-composable-helpers        │ ^2.1.0    │ 4.5.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-concurrency               │ ^1.0.0    │ 2.1.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-data                      │ ~3.12.2   │ 3.28.3 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-exam                      │ ^4.0.0    │ 6.1.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-feature-flags             │ ^5.0.0    │ 6.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-fetch                     │ ^6.0.0    │ 8.1.1  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-inflector                 │ ^3.0.1    │ 4.0.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-metrics                   │ ^0.14.0   │ 1.2.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-power-select              │ ^2.3.4    │ 4.1.6  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-qunit                     │ ^4.6.0    │ 5.1.4  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-resolver                  │ ^5.0.1    │ 8.0.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-source                    │ ~3.12.0   │ 3.28.1 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-test-selectors            │ ^2.0.0    │ 6.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-truth-helpers             │ ^2.0.0    │ 3.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-web-app                   │ ^3.0.1    │ 5.0.1  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ emoji-datasource-apple          │ ^4.0.0    │ 7.0.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ eslint-plugin-ember             │ ^7.1.0    │ 10.5.4 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ eslint-plugin-node              │ ^10.0.0   │ 11.1.0 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ postcss-scss                    │ ^2.0.0    │ 4.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ pusher-js                       │ ^5.0.0    │ 7.0.3  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ qunit-dom                       │ ^0.9.0    │ 2.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ svgo                            │ ^1.0.5    │ 2.5.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ tailwindcss                     │ ^1.0.4    │ 2.2.10 │
        └─────────────────────────────────┴───────────┴────────┘


      Ember Dependencies
        ┌─────────────────────────────────┬───────────┬────────┐
        │ Dependency                      │ Installed │ Latest │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-animated                  │ ^0.9.0    │ 0.11.0 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-c3                        │ ^2.0.0    │ 3.0.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-composable-helpers        │ ^2.1.0    │ 4.5.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-concurrency               │ ^1.0.0    │ 2.1.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-concurrency-scroll        │ ^1.0.0    │ 1.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-data                      │ ~3.12.2   │ 3.28.3 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-element-helper            │ ^0.1.1    │ 0.5.5  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-exam                      │ ^4.0.0    │ 6.1.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-export-application-global │ ^2.0.0    │ 2.0.1  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-feature-flags             │ ^5.0.0    │ 6.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-fetch                     │ ^6.0.0    │ 8.1.1  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-in-viewport               │ ^3.0.0    │ 3.10.2 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-inflector                 │ ^3.0.1    │ 4.0.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-intercom-io               │ ^1.2.0    │ 1.2.1  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-keyboard-shortcuts        │ ^1.0.2    │ 1.2.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-load-initializers         │ ^2.0.0    │ 2.1.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-metrics                   │ ^0.14.0   │ 1.2.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-moment                    │ ^8.0.0    │ 8.0.1  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-pagination-links          │ ^0.4.2    │ 0.4.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-percy                     │ ^1.3.2    │ 1.6.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-power-calendar            │ ^0.16.0   │ 0.16.5 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-power-calendar-moment     │ ^0.1.7    │ 0.1.7  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-power-select              │ ^2.3.4    │ 4.1.6  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-prism                     │ ^0.5.0    │ 0.11.0 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-qunit                     │ ^4.6.0    │ 5.1.4  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-qunit-nice-errors         │ 1.2.0     │ 1.2.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-resolver                  │ ^5.0.1    │ 8.0.2  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-source                    │ ~3.12.0   │ 3.28.1 │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-svg-jar                   │ ^2.2.2    │ 2.3.3  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-test-assets               │ ^1.1.1    │ 1.1.1  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-test-selectors            │ ^2.0.0    │ 6.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-tooltips                  │ ^3.1.1    │ 3.4.7  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-truth-helpers             │ ^2.0.0    │ 3.0.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-try                       │ ^1.2.0    │ 1.4.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-url                       │ ^0.6.0    │ 0.6.0  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-web-app                   │ ^3.0.1    │ 5.0.1  │
        ├─────────────────────────────────┼───────────┼────────┤
        │ ember-window-mock               │ ^0.5.0    │ 0.7.2  │
        └─────────────────────────────────┴───────────┴────────┘




      checkup v1.0.0-beta.11
      config 257cda6f6d50eeef891fc6ec8d808bdb"
    `);
  });

  it.skip('can throw error when custom component is not valid', () => {
    const log = readJsonSync(resolve(__dirname, './__fixtures__/checkup-result.sarif'));
    const logParser = new CheckupLogParser(log);

    const options: FormatterOptions = {
      cwd: '',
      format: 'checkup-formatter-pretty',
      componentName: 'invalidComponent',
    };

    let formatter = new PrettyFormatter(options);

    expect(formatter.format(logParser)).toThrowErrorMatchingInlineSnapshot(``);
  });
});
