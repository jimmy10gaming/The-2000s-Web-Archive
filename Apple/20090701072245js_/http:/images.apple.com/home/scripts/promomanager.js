var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var promoManager = {
	setItems: function(value) {
		this._items = value;
	},
	setCookiePrefix: function(value) {
		this._cookiePrefix = value;
	},
	_hasCookies:[],

	cookieStringForItemAtIndex: function(index) {
		return this._cookiePrefix+index;
	},
	cookieStringForLastSeenItem: function() {
		return this._cookiePrefix+"last";
	},

	_firstUnseenItemIndex: -1,
	_currentItemIndex: -1,
	_lastSeenItemIndex: -1,
	setCurrentItemIndex: function(value) {
		this._currentItemIndex = value;
		var date = new Date();
		date.setDate(date.getDate() + 42);
		document.cookie = (this.cookieStringForItemAtIndex(this._currentItemIndex)+'=true; expires=' + date.toGMTString() + '; path=/; domain='+window.location.hostname);
		document.cookie = (this.cookieStringForLastSeenItem()+'='+value+'; expires=' + date.toGMTString() + '; path=/; domain='+window.location.hostname);
		if(this._unseenItems.length === 1) {
			//Erase the cookies
			for(var j=0, countJ = this._items.length;j<countJ;j++) {
				document.cookie = (this.cookieStringForItemAtIndex(j)+'=;path=/; domain='+window.location.hostname);
			}
		}
	},

	_hasSeenItem: false,
	currentItemIndex: function() {
		if(this._currentItemIndex === -1) {
			this.readCookiesIfNeeded();
		}
		return this._currentItemIndex;
	},
	currentItem: function() {
		return this._items[this.currentItemIndex()];
	},
	_didReadCookies: false,
	readCookiesIfNeeded: function() {
		if(!this._didReadCookies) {
			var cookies = document.cookie.split(';'), lastSeenValue = 0, currentIndex, lastSeenCookie = this.cookieStringForLastSeenItem();
			this._unseenItems = [];
			this._lastSeenItemIndex = -1;
			for(var j=0, countJ = this._items.length;j<countJ;j++) {
				var jRegex = new RegExp(this.cookieStringForItemAtIndex(j));

				for(var i = 0; i < cookies.length; i++) {
					var iCookie = cookies[i], iLastSeenValue, iCookieValue = iCookie.split("=")[1];

					if (iCookie.match(lastSeenCookie)) {
						this._lastSeenItemIndex = parseInt(iCookieValue);
					}
					else if (iCookie.match(jRegex) && iCookieValue && iCookieValue.length > 0) {

						this._hasCookies[j] = true;
						this._hasSeenItem = true;
						break;
					}
				}

				if(!this._hasCookies[j]) {
					if(this._firstUnseenItemIndex === -1) {
						this._firstUnseenItemIndex = j;
					}
					this._unseenItems[this._unseenItems.length] = j;
					this._hasCookies[j] = false;
				}
			}
			if(this._unseenItems.length>0) {
				do {
					currentIndex = this._unseenItems[Math.floor(Math.random()*(this._unseenItems.length))];
				} while (currentIndex === this._lastSeenItemIndex)
			}
			else {
				do {
					currentIndex = Math.floor(Math.random()*this._items.length);
				} while (currentIndex === this._lastSeenItemIndex)
			}

			this.setCurrentItemIndex(currentIndex);
			this._didReadCookies = true;
		}
	}
};

}
/*
     FILE ARCHIVED ON 14:09:56 Jul 02, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:32:37 Nov 22, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.646
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.01
  esindex: 0.014
  cdx.remote: 15.026
  LoadShardBlock: 163.677 (3)
  PetaboxLoader3.datanode: 237.95 (5)
  load_resource: 259.198 (2)
  PetaboxLoader3.resolve: 148.847 (2)
*/