import pg from 'pg';

export default new Promise((good, bad) => {
  pg.connect(process.env.DB_URL, (err, client, done) => {
    if(err) { console.error(err); bad(err); return false; }

    good(client, done);
    return true;
  });
});
