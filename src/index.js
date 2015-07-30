'use strict';
/* globals window, angular */

angular.module('vlui', [

  'ui.select',

  ])
  .constant('_', window._)
  // datalib, vegalite, vega
  .constant('dl', window.dl)
  .constant('vl', window.vl)
  .constant('vg', window.vg)
  // other libraries
  .constant('jQuery', window.$)
  .constant('Blob', window.Blob)
  .constant('URL', window.URL)
  .constant('Drop', window.Drop)
  .constant('Heap', window.Heap)
  // constants
  .constant('consts', {
    addCount: true, // add count field to Dataset.dataschema
    debug: false,
    useUrl: true,
    logging: false,
    defaultConfigSet: 'large',
    appId: 'vlui',
    priority: {
      bookmark: 0,
      popup: 0,
      vislist: 1000
    },
    myriaRest: ''
  });
