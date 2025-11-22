var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
if (typeof(AC) == "undefined") AC = {};

AC.Randinator = Class.create();
AC.Randinator.prototype = {
	initialize: function() {	
		if (arguments.length > 0 && typeof(arguments[arguments.length-1]) == 'object') { // looking for a container object at the end
			Event.onDOMReady(this.randomizeContent.bind(this, arguments));
		}
		else if (arguments.length > 0) {
			this.renderInline(arguments[Math.floor(Math.random() * arguments.length)]);
		}
	},
	randomizeContent: function(args) {	
		var randNum = Math.floor(Math.random() * (args.length-1)); // avoid the container arg at the end		
		this.renderToContainer($(args[args.length-1].container), args[randNum]);
	},
	renderToContainer: function(container, content) {
		container.innerHTML = content;
	},
	renderInline: function(content) {
		document.write(content);
	}
};

function randinator() {
	if (arguments.length > 0) new AC.Randinator(arguments[Math.floor(Math.random() * arguments.length)]);
}

}
/*
     FILE ARCHIVED ON 14:08:43 Jul 02, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:32:40 Nov 22, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.603
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.011
  esindex: 0.015
  cdx.remote: 58.49
  LoadShardBlock: 2347.542 (3)
  PetaboxLoader3.datanode: 2114.37 (5)
  load_resource: 131.794 (2)
  PetaboxLoader3.resolve: 41.952
*/