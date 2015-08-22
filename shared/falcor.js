import { Model } from 'falcor';

export default new Model({
  cache: {
    postcardsById: {
      '1': {
        id: 1,
        name: 'Missing you from Alaska',
        frontHtml: '<h1>Stuff</h1>',
        backHtml: '<h1>Stuff on the back</h1>',
      }
    },

    postcards: [
      { $type: 'ref', value: ['postcardsById', '1'] }
    ]
  }
});
