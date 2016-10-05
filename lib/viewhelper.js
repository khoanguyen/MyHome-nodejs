var hljs = require('highlight.js');
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
	process.stdout.write("Highlight called\n");
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});


module.exports = function(vash) {
	vash.helpers.h1 = function(content) {
		return this.raw(`<h1>${content}</h1>`);
	};
	
	vash.helpers.outputEditable = function(sessionUser, text) {
		if (sessionUser) {
			return this.raw(`<div>${text} asads</div>`)
		} else {
			return this.raw(`<div>${text} asdd</div>`)
		}
	};
	
	vash.helpers.md = function(input) {
		return this.raw(md.render(input));
	};
};
