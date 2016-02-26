'use strict';

const globalHooks = require('../../../hooks');
const transformHook = require('../../../../../lib/transform')

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [
    transformHook({
      username: data => data.username.toLowerCase().replaceAll(/\s/, ''),
      slug: data => data.title.slugify()
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
