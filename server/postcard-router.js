import jsong from 'falcor-json-graph';
import Router from "falcor-router";
import postcardService from './postcard-service';

export default Router.createClass([
  {
    route: 'postcardsById[{integers:ids}]["id", "name", "frontHtml", "backHtml"]',
    get: function(pathSet) {
      return postcardService.get(pathSet.ids).then(postcards => {
        let jsonGraph = {},
            postcardsById = jsonGraph.postcardsById = {};

        pathSet.ids.forEach(id => {
          let postcard = postcards[id];

          if(!postcard) {
            postcardsById[id] = jsong.atom(postcard);
          } else {
            postcardsById[id] = {};
            pathSet[2].forEach(attr => { postcardsById[id][attr] = postcard[attr] });
          }
        });

        return { jsonGraph };
      });
    }
  },
  {
    route: 'postcards[{integers:indices}].name',
    get: function(pathSet) {
      return postcardService.all().then(records => {
        return pathSet.indices.map(index => {
          let record = records[index];

          if (!record) {
            return {
              path: ['postcards', index],
              value: null
            }
          }

          return {
            path: ['postcards', index, 'name'],
            value: record.name,
          }
        })
      });
    }
  }
]);
