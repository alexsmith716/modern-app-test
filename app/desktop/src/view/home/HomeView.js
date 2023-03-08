Ext.define('ModernApp.view.home.HomeView',{
	extend: 'Ext.Container',
	xtype: 'homeview',
	cls: 'homeview',
	controller: {
		type: 'homeviewcontroller'
	},
	viewModel: {
		type: 'homeviewmodel'
	},
	requires: [],
	scrollable: true,
	html: `<div style="user-select: text !important;">Welcome to the Ext JS Modern Desktop Template Application!
	<br><br>
	This template has the standard architecture for a desktop application
	<br>
	- header and footer with custom buttons and text
	<br>
	- left-side collapsable menu with custom area on top of menu
	<br>
	- right-side (optional) detail view
	<br>
	- Single Page Application (spa) routing (note # in URL)
	<br>
	- Each View (menu) isolated into its own folder (under the 'view' folder)
	<br>
	- These files: View, View scss file, ViewController, ViewModel (called a ViewPackage)
	<br><br>
	Notice that the menu allows you to select from several views, 
	<br>
	- Home (the view you are currently on)
	<br>
	- Personnel
	<br><br>
	select the personnel menu item to see an example of a page with an Ext JS grid
	<br><br>
	To build a new ViewPackage, type the following in a command window:
	<br>
	- <span style="color:red;">ext-gen viewpackage employee</span> (shortcut: <span style="color:red;">ext vp employee</span>)
	<br><br>
	Simple Theming:
	<br><br>
	- go to 'app/desktop/sass/var.scss', uncomment one of the $base-color variables
	<br>
	- more adventurous? go to <span style="color:red;">'app/shared/sass/var.scss'</span> and uncomment all the lines
	</div>`,
	items: [
		{
			xtype: 'container',
			cls: 'homeviewtextlobsterfont',
			html: `<div>This font family is "font-lobster-v20-latin-regular"</div>`
		},
		{
			xtype: 'container',
			cls: 'homeviewtextnorwesterfont',
			html: `<div>This font family is "norwester"</div>`
		},
		{
			xtype: 'container',
			cls: 'homeviewtextoldenglishfont',
			html: `<div>This font family is "Old English"</div>`
		}
	],
});
