'ues strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'coverage',
  ],
  dep: [
  ],
  devdep: [
    'autod',
    'autod-egg',
    'egg-bin',
    'tslint',
    'tslint-config-egg',
    'typescript',
  ],
  keep: [
  ],
  semver: [
  ],
  test: 'scripts',
};
