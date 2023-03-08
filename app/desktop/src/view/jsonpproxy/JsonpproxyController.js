Ext.define('ModernApp.view.jsonpproxy.JsonpproxyViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.jsonpproxyviewcontroller',
	store: {
		type: 'jsonpproxyviewstore'
	},

	clickButtonA: function() {
		Ext.Msg.alert('Button A', 'Button A was clicked!');
	},

	clickButtonB: function() {
		Ext.Msg.alert('Button B', 'Button B was clicked!');
	},

	// Ext.data.JsonP.callback1({"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":278.99,"feels_like":276.27,"temp_min":278.07,"temp_max":279.7,"pressure":1000,"humidity":91},"visibility":10000,"wind":{"speed":3.6,"deg":250},"clouds":{"all":40},"dt":1678139390,"sys":{"type":2,"id":2075535,"country":"GB","sunrise":1678084553,"sunset":1678124889},"timezone":0,"id":2643743,"name":"London","cod":200})
	// Ext.data.JsonP.callback1({"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":279.03,"feels_like":275.76,"temp_min":278.01,"temp_max":279.82,"pressure":1000,"humidity":91},"visibility":10000,"wind":{"speed":4.63,"deg":250},"clouds":{"all":20},"dt":1678136665,"sys":{"type":2,"id":2075535,"country":"GB","sunrise":1678084553,"sunset":1678124889},"timezone":0,"id":2643743,"name":"London","cod":200})
	// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fec53686&_dc=1678127985377&page=1&start=0&limit=25&callback=Ext.data.JsonP.callback1
	clickButtonJsonP: function() {
		const theStore = Ext.create('ModernApp.view.jsonpproxy.JsonpproxyViewStore');
		const testLoad = theStore.load({
			callback1: function (result, request) {
				console.log("Success!");
				console.log(result, request);
			},
			success: function (result, request) {
				console.log("Success!");
				console.log(result, request);
			}
		});
	},
});


