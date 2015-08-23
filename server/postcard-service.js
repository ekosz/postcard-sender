import db from './db'

const records = {
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
      db.then((client, done) => {
        client.query('SELECT * FROM postcards WHERE id = ANY($1::int[])', [ids], (err, result) => {
          if(err) { bad(err); return false; }

          good(result.rows.reduce((acc, row) => { acc[row.id] = row; return acc }, {}));
          return true;
        });
      });
    });
  },

  all: function() {
    return new Promise(function(good, bad) {
      db.then((client, done) => {
        client.query('SELECT * FROM postcards', (err, result) => {
          if(err) { bad(err); return false; }

          good(result.rows);
          return true;
        });
      });
    });
  }
};
