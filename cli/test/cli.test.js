const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const test = require('node:test');

const cli = path.join(__dirname, '..', 'index.js');

const run = (...args) => spawnSync(process.execPath, [cli, ...args], {
  encoding: 'utf8',
});

test('projects command emits structured project data', () => {
  const result = run('--json', 'projects');
  assert.equal(result.status, 0);

  const output = JSON.parse(result.stdout);
  assert.equal(output.projects[0].slug, 'healos');
  assert.equal(output.projects.length, 4);
});

test('project command returns a non-zero status for an unknown project', () => {
  const result = run('--json', 'project', 'missing-project');
  assert.equal(result.status, 1);
  assert.equal(JSON.parse(result.stdout).error, 'project_not_found');
});
