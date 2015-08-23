const postcardsById = {
  1: {
    id: 1,
    name: 'Missing you from Alaska',
    frontHtml: '<h1>Stuff</h1>',
    backHtml: '<h1>Stuff on the back</h1>',
  }
};

export default {
  get: function(ids) {
    return new Promise(function(good, bad) {
      good(postcardsById);
    });
  }
};

