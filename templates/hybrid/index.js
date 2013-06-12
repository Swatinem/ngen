
exports.variables = {
	Module: 'Module name: ',
	description: 'Module description: ',
	module: function (values, done) {
		done(values.Module.toLowerCase());
	},
	'module-': function (values, done) {
		done(values.Module.replace(/([a-z])([A-Z])/g, function () {
			return arguments[1] + '-' + arguments[2];
		}).toLowerCase());
	},
	MODULE: function (values, done) {
		done(values.Module.replace(/([a-z])([A-Z])/g, function () {
			return arguments[1] + '_' + arguments[2];
		}).toUpperCase());
	},
};
