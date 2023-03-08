Ext.define('ModernApp.view.jsonpproxy.JsonpproxyViewStore', {
	extend: 'Ext.data.Store',
	alias: 'store.jsonpproxyviewstore',
	model: 'ModernApp.view.jsonpproxy.JsonpproxyViewModel',
	storeId: 'myStore',
	proxy: {
		type: 'jsonp',
		url: 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fec686',
	}
});
