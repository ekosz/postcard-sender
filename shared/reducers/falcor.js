import { Model } from 'falcor';

const initialState = new Model({
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

export default function(state = initialState, action) {
  return state;
}
