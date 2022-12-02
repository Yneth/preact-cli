module.exports = function renderToString({ cwd }, app, renderOpts) {
	const preact = require(require.resolve('preact', { paths: [cwd] }));
	const renderToString = require(require.resolve('preact-render-to-string', {
		paths: [cwd],
	}));

	const result = renderToString(preact.h(app, renderOpts));
	return result + '!Hi from custom render!';
};
