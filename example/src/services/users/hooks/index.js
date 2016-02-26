'use strict';

const globalHooks = require('../../../hooks');
const transformHook = require('../../../../../lib/transform')

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    transformHook({
      username: v => v.toLowerCase().replaceAll(/\s/, '')
    })
  ],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
