Ext.define('ModernApp.view.jsonpproxy.JsonpproxyView',{
	//extend: 'Ext.grid.Grid',
	extend: 'Ext.Container',
	xtype: 'jsonpproxyview',
	cls: 'jsonpproxyview',
	requires: [],
	controller: {
		type: 'jsonpproxyviewcontroller'
	},
	//viewModel: {
	//	type: 'jsonpproxyviewmodel'
	//},
	store: {
		type: 'jsonpproxyviewstore'
	},
	scrollable: true,
	html: `<div style="user-select: text !important;">Request a Callback for some data.
		<br><br>
		This template will use the 'data > proxy > JsonP' API to make a CORS fetch-like request.
		<br><br>
		Data Grid will go here.
	</div>`,
	items: [
		//{
		//	xtype:'grid',
		//	title: 'Data',
		//	store: 'jsonpproxyviewstore',
		//	columns: [
		//		 { text: 'coord', dataIndex: 'coord' },
		//		 { text: 'weather', dataIndex: 'weather' },
		//		 { text: 'base', dataIndex: 'base' },
		//	],
		//	height: 400,
		//	width: 400
		//},
		{
			xtype: 'button',
			cls: 'jsonpproxyviewbuttonbasic',
			text: 'Button A',
			handler: 'clickButtonA',
		},
		{
			xtype: 'button',
			cls: 'jsonpproxyviewbuttonbasic',
			text: 'Button B',
			handler: 'clickButtonB',
		},
		{
			xtype: 'button',
			cls: 'jsonpproxyviewbuttontest',
			text: 'JsonP Test',
			handler: 'clickButtonJsonP',
		}
	]
});
