import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params) {
    debugger
    ajax({
      type: 'POST',
      url: 'https://github.com/login/oauth/access_token',
      data: JSON.stringify({
        client_id: '95022b2412e84c07ccd7',
        client_secret: 'd88efbeb59957a18920a156fc82b4382f8a32439',
        code: params.code
      })

    }).then((response)=> { debugger });

  }
});
