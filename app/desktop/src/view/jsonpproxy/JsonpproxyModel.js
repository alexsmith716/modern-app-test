Ext.define('ModernApp.view.jsonpproxy.JsonpproxyViewModel', {
	extend: 'Ext.data.Model',
	fields: [
			{ name: 'coord', type: 'auto', defaultValue: {
				"lon": -0.1257,
				"lat": 51.5085
			}},
			{ name: 'weather', type: 'auto', defaultValue: [{
				"id": 803,
				"main": "Clouds",
				"description": "broken clouds",
				"icon": "04n"
			}]},
			{ name: 'base', type: 'string' },
			{ name: 'main', type: 'auto', defaultValue: {
				"temp": 274.55,
				"feels_like": 274.55,
				"temp_min": 272.17,
				"temp_max": 276.2,
				"pressure": 1008,
				"humidity": 88
			}},
			{ name: 'visibility', type: 'int' },
			{ name: 'wind', type: 'auto', defaultValue: {
				"speed": 1.03,
				"deg": 0
			}},
			{ name: 'clouds', type: 'auto', defaultValue: {
				"all": 84
			}},
			{ name: 'dt', type: 'int' },
			{ name: 'sys', type: 'auto', defaultValue: {
				"type": 2,
				"id": 2075535,
				"country": "GB",
				"sunrise": 1678084553,
				"sunset": 1678124889
			}},
			{ name: 'timezone', type: 'int' },
			{ name: 'id', type: 'int' },
			{ name: 'name', type: 'string' },
			{ name: 'cod', type: 'int' },
	],
});
