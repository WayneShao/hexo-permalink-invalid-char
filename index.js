'use strict';

var hexo = hexo || {};
var config = hexo.config || {};
var pluginConfig = config.permalink_invalid_char || {};

hexo.extend.filter.register('post_permalink', function (data) {
  if (pluginConfig.enable) {
    // https://github.com/andyhu/transliteration#slugifystr-options
    const options = Object.assign({}, pluginConfig, { ignore: ['/', '.'] })
  	var symbols = [ '"', '<', '>', '#', '%', '{', '}', '|', '\\', '^', '~', '[', ']', '`', ';', '/', '?', ':', '@', '=', '&' ];
  	if(!pluginConfig.separator)
      pluginConfig.separator = '_';
  	symbols.forEach(function(symbol){
  		data = data.replace(symbol, pluginConfig.separator)
  	});
    if(pluginConfig.extra_chars)
      pluginConfig.extra_chars.forEach(function(symbol){
        data = data.replace(symbol, pluginConfig.separator)
      });

    return data;
  }
  return data;
});
