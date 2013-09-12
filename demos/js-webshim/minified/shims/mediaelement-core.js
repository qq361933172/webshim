(function(e,t){"use strict";var i,n,a=t.$,r=e.audio&&e.video,o=!1,s=t.bugs,l="mediaelement-jaris",u=function(){t.ready(l,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([l],r))})},c=t.cfg,d=c.mediaelement;if(!d)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var p=document.createElement("video");if(e.videoBuffered="buffered"in p,e.mediaDefaultMuted="defaultMuted"in p,o="loop"in p,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!d.preferFlash){var m={1:1},f=function(e){var i,r,o;!d.preferFlash&&(a(e.target).is("audio, video")||(o=e.target.parentNode)&&a("source:last",o)[0]==e.target)&&(i=a(e.target).closest("audio, video"))&&(r=i.prop("error"))&&!m[r.code]&&a(function(){n&&!d.preferFlash?(u(),t.ready("WINDOWLOAD "+l,function(){setTimeout(function(){d.preferFlash||!t.mediaelement.createSWF||i.is(".nonnative-api-active")||(d.preferFlash=!0,document.removeEventListener("error",f,!0),a("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+i.prop("error")+"first error: "+r))},9)})):document.removeEventListener("error",f,!0)})};document.addEventListener("error",f,!0),a("audio, video").each(function(){var e=a.prop(this,"error");return e&&!m[e]?(f({target:this}),!1):void 0})}}e.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof a("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(e){s.track=!0}}(),i=e.track&&!s.track,t.register("mediaelement-core",function(t,a,s,c,d,p){n=swfmini.hasFlashPlayerVersion("9.0.115"),t("html").addClass(n?"swf":"no-swf");var m=a.mediaelement;m.parseRtmp=function(e){var t,i,n,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],t=1,i=o.length;i>t;t++)n||-1===o[t].indexOf(":")||(o[t]=o[t].split(":")[1],n=!0),n?e.streamId.push(o[t]):e.server+=o[t]+"/";e.streamId.length||a.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(e,i){e=t(e);var n,a={src:e.attr("src")||"",elem:e,srcProp:e.prop("src")};return a.src?(n=e.attr("data-server"),null!=n&&(a.server=n),n=e.attr("type"),n?(a.type=n,a.container=t.trim(n.split(";")[0])):(i||(i=e[0].nodeName.toLowerCase(),"source"==i&&(i=(e.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=m.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=e.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:m.parseRtmp(a)),a):a},h=!n&&"postMessage"in s&&r,v=function(){v.loaded||(v.loaded=!0,p.noAutoTrack||a.ready("WINDOWLOAD",function(){y(),a.loader.loadList(["track-ui"])}))},g=function(){var e;return function(){!e&&h&&(e=!0,a.loader.loadScript("https://www.youtube.com/player_api"),t(function(){a._polyfill(["mediaelement-yt"])}))}}(),y=function(){n?u():g()};a.addPolyfill("mediaelement-yt",{test:!h,d:["dom-support"]}),m.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},m.mimeTypes.source=t.extend({},m.mimeTypes.audio,m.mimeTypes.video),m.getTypeForSrc=function(e,i){if(-1!=e.indexOf("youtube.com/watch?")||-1!=e.indexOf("youtube.com/v/"))return"video/youtube";if(0===e.indexOf("rtmp"))return i+"/rtmp";e=e.split("?")[0].split("#")[0].split("."),e=e[e.length-1];var n;return t.each(m.mimeTypes[i],function(t,i){return-1!==i.indexOf(e)?(n=t,!1):d}),n},m.srces=function(e,i){if(e=t(e),!i){i=[];var n=e[0].nodeName.toLowerCase(),a=f(e,n);return a.src?i.push(a):t("source",e).each(function(){a=f(this,n),a.src&&i.push(a)}),i}e.removeAttr("src").removeAttr("type").find("source").remove(),t.isArray(i)||(i=[i]),i.forEach(function(i){"string"==typeof i&&(i={src:i}),e.append(t(c.createElement("source")).attr(i))})},t.fn.loadMediaSrc=function(e,i){return this.each(function(){i!==d&&(t(this).removeAttr("poster"),i&&t.attr(this,"poster",i)),m.srces(this,e),t(this).mediaLoad()})},m.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],m.canThirdPlaySrces=function(e,i){var a="";return(n||h)&&(e=t(e),i=i||m.srces(e),t.each(i,function(e,t){return t.container&&t.src&&(n&&-1!=m.swfMimeTypes.indexOf(t.container)||h&&"video/youtube"==t.container)?(a=t,!1):d})),a};var b={};m.canNativePlaySrces=function(e,i){var n="";if(r){e=t(e);var a=(e[0].nodeName||"").toLowerCase(),o=(b[a]||{prop:{_supvalue:!1}}).prop._supvalue||e[0].canPlayType;if(!o)return n;i=i||m.srces(e),t.each(i,function(t,i){return i.type&&o.call(e[0],i.type)?(n=i,!1):d})}return n};var w=/^\s*application\/octet\-stream\s*$/i,x=function(){var e=w.test(t.attr(this,"type")||"");return e&&t(this).removeAttr("type"),e};m.setError=function(e,i){if(t("source",e).filter(x).length){a.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{t(e).mediaLoad()}catch(n){}}else i||(i="can't play sources"),t(e).pause().data("mediaerror",i),a.error("mediaelementError: "+i),setTimeout(function(){t(e).data("mediaerror")&&t(e).addClass("media-error").trigger("mediaerror")},1)};var T=function(){var e;return function(t,i,r){a.ready(n?l:"mediaelement-yt",function(){m.createSWF?m.createSWF(t,i,r):e||(e=!0,y(),T(t,i,r))}),e||!h||m.createSWF||g()}}(),N=function(e,t,i,n,a){var r;i||i!==!1&&t&&"third"==t.isActive?(r=m.canThirdPlaySrces(e,n),r?T(e,r,t):a?m.setError(e,!1):N(e,t,!1,n,!0)):(r=m.canNativePlaySrces(e,n),r?t&&"third"==t.isActive&&m.setActive(e,"html5",t):a?(m.setError(e,!1),t&&"third"==t.isActive&&m.setActive(e,"html5",t)):N(e,t,!0,n,!0))},E=/^(?:embed|object|datalist)$/i,A=function(e,i){var n=a.data(e,"mediaelementBase")||a.data(e,"mediaelementBase",{}),r=m.srces(e),o=e.parentNode;clearTimeout(n.loadTimer),t(e).removeClass("media-error"),t.data(e,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!E.test(o.nodeName||"")&&(i=i||a.data(e,"mediaelement"),m.sortMedia&&r.sort(m.sortMedia),N(e,i,p.preferFlash||d,r))};m.selectSource=A,t(c).on("ended",function(e){var i=a.data(e.target,"mediaelement");(!o||i&&"html5"!=i.isActive||t.prop(e.target,"loop"))&&setTimeout(function(){!t.prop(e.target,"paused")&&t.prop(e.target,"loop")&&t(e.target).prop("currentTime",0).play()},1)});var k=!1,S=function(){var i=function(){if(a.implement(this,"mediaelement")&&(A(this),e.mediaDefaultMuted||null==t.attr(this,"muted")||t.prop(this,"muted",!0),r&&(!o||"ActiveXObject"in s))){var i,n,l=this,u=function(){var e=t.prop(l,"buffered");if(e){for(var i="",n=0,a=e.length;a>n;n++)i+=e.end(n);return i}},c=function(){var e=u();e!=n&&(n=e,a.info("needed to trigger progress manually"),t(l).triggerHandler("progress"))};t(this).on({"play loadstart progress":function(e){"progress"==e.type&&(n=u()),clearTimeout(i),i=setTimeout(c,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(n=!1),clearTimeout(i)}}),"ActiveXObject"in s&&t.prop(this,"paused")&&!t.prop(this,"readyState")&&t(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&t(this).prop("preload","metadata").mediaLoad()}};a.ready("dom-support",function(){k=!0,o||a.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(e){var i;i=a.defineNodeNameProperty(e,"load",{prop:{value:function(){var e=a.data(this,"mediaelement");A(this,e),!r||e&&"html5"!=e.isActive||!i.prop._supvalue||i.prop._supvalue.apply(this,arguments)}}}),b[e]=a.defineNodeNameProperty(e,"canPlayType",{prop:{value:function(i){var a="";return r&&b[e].prop._supvalue&&(a=b[e].prop._supvalue.call(this,i),"no"==a&&(a="")),!a&&n&&(i=t.trim((i||"").split(";")[0]),-1!=m.swfMimeTypes.indexOf(i)&&(a="maybe")),a}}})}),a.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=a.data(e,"mediaelementBase")||a.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){A(e),e=null},9)}}),a.addReady(function(e,n){var a=t("video, audio",e).add(n.filter("video, audio")).each(i);!v.loaded&&t("track",a).length&&v(),a=null})}),r&&!k&&a.addReady(function(e,i){k||t("video, audio",e).add(i.filter("video, audio")).each(function(){return m.canNativePlaySrces(this)?d:(y(),k=!0,!1)})})};i&&a.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(a.isReady("mediaelement-core",!0),S(),a.ready("WINDOWLOAD mediaelement",y)):a.ready(l,S),a.ready("track",v)})})(Modernizr,webshims);