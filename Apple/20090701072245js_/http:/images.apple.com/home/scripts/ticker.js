var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
Effect.DefaultOptions.duration=0.3;NewsTicker=Class.create();Object.extend(NewsTicker.prototype,{tickerDiv:"ticker",tickerLocation:"billboard",tickerTitle:"news-link",tickerLink:"/hotnews/",feedURL:"/hotnews/feeds/ticker.rss",pauseLength:3500,timer:0,currentTitle:0,items:null,initialize:function(){this.items=[];
new Ajax.Request(this.feedURL,{method:"get",onSuccess:function(a){this.parseXML(a.responseXML);
this.buildTicker()}.bind(this),onFailure:function(){console.log("Please visit http://www.apple.com/hotnews for the latest news and information on Apple.")
},onException:function(b,a){}})},buildTicker:function(){if(this.items[this.currentTitle]){$(this.tickerTitle).innerHTML=this.items[this.currentTitle]["title"];
this.start()}},parseXML:function(a){$A(a.getElementsByTagName("item")).each(function(c){title=c.getElementsByTagName("title")[0].childNodes[0].nodeValue;
var b=NewsTicker.tickerLink;this.items.push({title:title,link:b})}.bind(this))},start:function(){this.interval=setInterval(this.showNext.bind(this),this.pauseLength)
},stop:function(){clearInterval(this.interval)},showNext:function(){if(this.currentTitle<this.items.length-1){this.currentTitle=this.currentTitle+1
}else{this.currentTitle=0}new Effect.Fade("news-link",{afterFinish:function(){this.switchData();
new Effect.Appear("news-link")}.bind(this)})},switchData:function(){$(this.tickerTitle).setAttribute("href",this.tickerLink);
if(this.items[this.currentTitle]){$(this.tickerTitle).innerHTML=this.items[this.currentTitle]["title"]
}}});Event.observe(window,"load",function(){var a=new NewsTicker()});
}
/*
     FILE ARCHIVED ON 14:10:10 Jul 02, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:32:37 Nov 22, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.521
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.012
  cdx.remote: 38.16
  LoadShardBlock: 83.631 (3)
  PetaboxLoader3.datanode: 171.297 (5)
  load_resource: 917.215 (2)
  PetaboxLoader3.resolve: 782.972 (2)
*/