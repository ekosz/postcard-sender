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
  }
]);
