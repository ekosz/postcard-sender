import { Model } from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

export default new Model({
  source: new HttpDataSource('/model.json'),
  cache: {
    postcards: [
      { $type: 'ref', value: ['postcardsById', '1'] }
    ]
  }
});
