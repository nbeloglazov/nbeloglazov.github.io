(function e$$0(x,Q,k){function h(a,b){if(!Q[a]){if(!x[a]){var d="function"==typeof require&&require;if(!b&&d)return d(a,!0);if(m)return m(a,!0);throw Error("Cannot find module '"+a+"'");}d=Q[a]={exports:{}};x[a][0].call(d.exports,function(f){var b=x[a][1][f];return h(b?b:f)},d,d.exports,e$$0,x,Q,k)}return Q[a].exports}for(var m="function"==typeof require&&require,n=0;n<k.length;n++)h(k[n]);return h})({1:[function(D,x,Q){x={isDomPresent:!0,navigator:navigator,window:window,document:document,ajax:function(k){var h=
new XMLHttpRequest;h.open("GET",k,!1);h.overrideMimeType&&h.overrideMimeType("text/plain");h.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");h.send(null);if(200!==h.status&&0!==h.status)throw"XMLHttpRequest failed, status code "+h.status;return h.responseText}};window.Processing=D("./src/")(x)},{"./src/":27}],2:[function(D,x,Q){x.exports={name:"Processing.js",version:"1.4.8",dependencies:{argv:"~0.0.2",browserify:"~2.18.1",express:"~3.3.3","node-minify":"~0.7.3",nunjucks:"~0.1.9",
open:"0.0.3"},devDependencies:{grunt:"~0.4.1","grunt-cli":"~0.1.8","grunt-contrib-jshint":"~0.4.3"}}},{}],3:[function(D,x,Q){x.exports=function(k){if(k instanceof Array){var h=-1;this.hasNext=function(){return++h<k.length};this.next=function(){return k[h]}}else{if(k.iterator instanceof Function)return k.iterator();throw"Unable to iterate: "+k;}}},{}],4:[function(D,x,Q){x.exports={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,
VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1E-4,MAX_FLOAT:3.4028235E38,MIN_FLOAT:-3.4028235E38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f\u00a0",RGB:1,ARGB:2,
HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,
QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,
DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,
ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}},{}],5:[function(D,x,Q){x.exports=function(k){function h(){}function m(a,d,f){if(a.hasOwnProperty(d)&&
"function"===typeof a[d]){var l=a[d];if("$overloads"in l)l.$defaultOverload=f;else if("$overloads"in f||l.length!==f.length){var p;"$overloads"in f?(p=f.$overloads.slice(0),p[l.length]=l,l=f.$defaultOverload):(p=[],p[f.length]=f,p[l.length]=l);var r=function(){return(r.$overloads[arguments.length]||("$methodArgsIndex"in r&&arguments.length>r.$methodArgsIndex?r.$overloads[r.$methodArgsIndex]:null)||r.$defaultOverload).apply(this,arguments)};r.$overloads=p;"$methodArgsIndex"in f&&(r.$methodArgsIndex=
f.$methodArgsIndex);r.$defaultOverload=l;r.name=d;a[d]=r}}else a[d]=f}function n(b,d){function f(f){a.defineProperty(b,f,{get:function(){return d[f]},set:function(c){d[f]=c},enumerable:!0})}var l=[],p;for(p in d)"function"===typeof d[p]?m(b,p,d[p]):"$"===p.charAt(0)||p in b||l.push(p);for(;0<l.length;)f(l.shift());b.$super=d}h.prototype=k.PConstants;var a=new h;Object.keys(k).forEach(function(b){a[b]=k[b]});a.defineProperty=function(a,d,f){"defineProperty"in Object?Object.defineProperty(a,d,f):(f.hasOwnProperty("get")&&
a.__defineGetter__(d,f.get),f.hasOwnProperty("set")&&a.__defineSetter__(d,f.set))};a.extendClassChain=function(a){for(var d=[a],f=a.$upcast;f;f=f.$upcast)n(f,a),d.push(f),a=f;for(;0<d.length;)d.pop().$self=a};a.extendStaticMembers=function(a,d){n(a,d)};a.extendInterfaceMembers=function(a,d){n(a,d)};a.addMethod=function(a,d,f,l){var p=a[d];if(p||l){var r=f.length;if("$overloads"in p)p.$overloads[r]=f;else{var c=function(){return(c.$overloads[arguments.length]||("$methodArgsIndex"in c&&arguments.length>
c.$methodArgsIndex?c.$overloads[c.$methodArgsIndex]:null)||c.$defaultOverload).apply(this,arguments)},h=[];p&&(h[p.length]=p);h[r]=f;c.$overloads=h;c.$defaultOverload=p||f;l&&(c.$methodArgsIndex=r);c.name=d;a[d]=c}}else a[d]=f};a.createJavaArray=function(b,d){var f=null,l=null;if("string"===typeof b)if("boolean"===b)l=!1;else{var p;p="string"!==typeof b?!1:-1!=="byte int char color float long double".split(" ").indexOf(b);p&&(l=0)}if("number"===typeof d[0])if(p=0|d[0],1>=d.length){f=[];f.length=p;
for(var r=0;r<p;++r)f[r]=l}else for(f=[],l=d.slice(1),r=0;r<p;++r)f.push(a.createJavaArray(b,l));return f};a.defineProperty(a,"screenWidth",{get:function(){return window.innerWidth}});a.defineProperty(a,"screenHeight",{get:function(){return window.innerHeight}});return a}},{}],6:[function(D,x,Q){x.exports=function(k,h){var m=h.window,n=h.document,a=m.XMLHttpRequest,b=h.noop,d=h.isDOMPresent,f=h.version;k.version=f?f:"@DEV-VERSION@";k.lib={};k.registerLibrary=function(f,c){k.lib[f]=c;c.hasOwnProperty("init")&&
c.init(defaultScope)};k.Sketch=function(f){this.attachFunction=f;this.options={pauseOnBlur:!1,globalKeyEvents:!1};this.onExit=this.onFrameEnd=this.onFrameStart=this.onLoop=this.onPause=this.onSetup=this.onLoad=b;this.params={};this.imageCache={pending:0,images:{},operaCache:{},add:function(c,f){if(!this.images[c]&&(d||(this.images[c]=null),f||(f=new Image,f.onload=function(c){return function(){c.pending--}}(this),this.pending++,f.src=c),this.images[c]=f,m.opera)){var a=n.createElement("div");a.appendChild(f);
a.style.position="absolute";a.style.opacity=0;a.style.width="1px";a.style.height="1px";this.operaCache[c]||(n.body.appendChild(a),this.operaCache[c]=a)}}};this.sourceCode=void 0;this.attach=function(c){if("function"===typeof this.attachFunction)this.attachFunction(c);else if(this.sourceCode){var f=(new Function("return ("+this.sourceCode+");"))();f(c);this.attachFunction=f}else throw"Unable to attach sketch to the processing instance";};this.toString=function(){var c,f;f="((function(Sketch) {\n"+
("var sketch = new Sketch(\n"+this.sourceCode+");\n");for(c in this.options)if(this.options.hasOwnProperty(c)){var a=this.options[c];f+="sketch.options."+c+" = "+("string"===typeof a?'"'+a+'"':""+a)+";\n"}for(c in this.imageCache)this.options.hasOwnProperty(c)&&(f+='sketch.imageCache.add("'+c+'");\n');return f+"return sketch;\n})(Processing.Sketch))"}};var l=k.loadSketchFromSources=function(f,c){function d(c,f){var b=new a;b.onreadystatechange=function(){if(4===b.readyState){var c;200!==b.status&&
0!==b.status?c="Invalid XHR status "+b.status:""===b.responseText&&(c="withCredentials"in new a&&!1===(new a).withCredentials&&"file:"===m.location.protocol?"XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.":"File is empty.");f(b.responseText,c)}};b.open("GET",c,!0);b.overrideMimeType&&
b.overrideMimeType("application/json");b.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");b.send(null)}function b(c,a){function m(d,b){l[c]=d;++v;b&&p.push(a+" ==> "+b);if(v===h)if(0===p.length)try{return new k(f,l.join("\n"))}catch(md){throw console.log("Processing.js: Unable to execute pjs sketch."),md;}else throw"Processing.js: Unable to load pjs sketch files: "+p.join("\n");}if("#"===a.charAt(0)){var ca=n.getElementById(a.substring(1));ca?m(ca.text||ca.textContent):m("","Unable to load pjs sketch: element with id '"+
a.substring(1)+"' was not found")}else d(a,m)}for(var l=[],p=[],h=c.length,v=0,ga=0;ga<h;++ga)b(ga,c[ga])},p=function(){n.removeEventListener("DOMContentLoaded",p,!1);processingInstances=[];k.instances=processingInstances;for(var f=n.getElementsByTagName("canvas"),c,a=0,d=f.length;a<d;a++){var b=f[a].getAttribute("data-processing-sources");null===b&&(b=f[a].getAttribute("data-src"),null===b&&(b=f[a].getAttribute("datasrc")));if(b){c=b.split(/\s+/g);for(b=0;b<c.length;)c[b]?b++:c.splice(b,1);l(f[a],
c)}}f=n.getElementsByTagName("script");d=[];for(a=f.length-1;0<=a;a--)d.push(f[a]);a=0;for(b=d.length;a<b;a++)if(c=d[a],c.getAttribute&&(f=c.getAttribute("type"))&&("text/processing"===f.toLowerCase()||"application/processing"===f.toLowerCase())){var h=c.getAttribute("data-processing-target"),f=void 0;if(h)f=n.getElementById(h);else{for(h=c.nextSibling;h&&1!==h.nodeType;)h=h.nextSibling;h&&"canvas"===h.nodeName.toLowerCase()&&(f=h)}f&&(c.getAttribute("src")?(c=c.getAttribute("src").split(/\s+/),l(f,
c)):(c=c.textContent||c.text,new k(f,c)))}};n.addEventListener("DOMContentLoaded",p,!1);k.reload=function(){if(0<processingInstances.length)for(var f=processingInstances.length-1;0<=f;f--)processingInstances[f]&&processingInstances[f].exit();p()};k.disableInit=function(){n.removeEventListener("DOMContentLoaded",p,!1)};return k}},{}],7:[function(D,x,Q){x.exports=function(k,h){return null===k||null===h?null===k&&null===h:"string"===typeof k||"object"!==typeof k?k===h:k.equals instanceof Function?k.equals(h):
k===h}},{}],8:[function(D,x,Q){x.exports=function(k,h){if("string"===typeof k){for(var m=0,n=0;n<k.length;++n)m=31*m+k.charCodeAt(n)&4294967295;return m}if("object"!==typeof k)return k&4294967295;if(k.hashCode instanceof Function)return k.hashCode();k.$id===h&&(k.$id=Math.floor(65536*Math.random())-32768<<16|Math.floor(65536*Math.random()));return k.$id}},{}],9:[function(D,x,Q){x.exports=function(k){function h(a){var b=-1;this.hasNext=function(){return b+1<a.length};this.next=function(){return a[++b]};
this.remove=function(){a.splice(b--,1)}}function m(a){var b=[];a&&a.toArray&&(b=a.toArray());this.get=function(a){return b[a]};this.contains=function(a){return-1<this.indexOf(a)};this.indexOf=function(a){for(var f=0,l=b.length;f<l;++f)if(n(a,b[f]))return f;return-1};this.lastIndexOf=function(a){for(var f=b.length-1;0<=f;--f)if(n(a,b[f]))return f;return-1};this.add=function(){if(1===arguments.length)b.push(arguments[0]);else if(2===arguments.length){var a=arguments[0];if("number"===typeof a)if(0<=
a&&a<=b.length)b.splice(a,0,arguments[1]);else throw a+" is not a valid index";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.addAll=function(a,f){var l;if("number"===typeof a){if(0>a||a>b.length)throw"Index out of bounds for addAll: "+a+" greater or equal than "+b.length;for(l=new ObjectIterator(f);l.hasNext();)b.splice(a++,0,l.next())}else for(l=new ObjectIterator(a);l.hasNext();)b.push(l.next())};this.set=function(){if(2===arguments.length){var a=
arguments[0];if("number"===typeof a)if(0<=a&&a<b.length)b.splice(a,1,arguments[1]);else throw a+" is not a valid index.";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.size=function(){return b.length};this.clear=function(){b.length=0};this.remove=function(a){if("number"===typeof a)return b.splice(a,1)[0];a=this.indexOf(a);return-1<a?(b.splice(a,1),!0):!1};this.removeAll=function(a){var f,b,p,r=new m;r.addAll(this);this.clear();for(b=f=0;f<r.size();f++)p=
r.get(f),a.contains(p)||this.add(b++,p);return this.size()<r.size()?!0:!1};this.isEmpty=function(){return!b.length};this.clone=function(){return new m(this)};this.toArray=function(){return b.slice(0)};this.iterator=function(){return new h(b)}}var n=k.virtEquals;return m}},{}],10:[function(D,x,Q){x.exports=function(k,h){var m=function(n){this.code="string"===typeof n&&1===n.length?n.charCodeAt(0):"number"===typeof n?n:n instanceof m?n:NaN;return k[this.code]===h?k[this.code]=this:k[this.code]};m.prototype.toString=
function(){return String.fromCharCode(this.code)};m.prototype.valueOf=function(){return this.code};return m}({})},{}],11:[function(D,x,Q){x.exports=function(k){function h(){function a(f){f=m(f)%c.length;return 0>f?c.length+f:f}function b(){if(!(k<=r*c.length)){for(var f=[],b=0;b<c.length;++b)void 0!==c[b]&&(f=f.concat(c[b]));b=2*c.length;c=[];c.length=b;for(b=0;b<f.length;++b){var d=a(f[b].key),l=c[d];void 0===l&&(c[d]=l=[]);l.push(f[b])}}}function d(f,a){function b(){for(;!p;)if(++l,d>=c.length)p=
!0;else if(void 0===c[d]||l>=c[d].length)l=-1,++d;else break}var d=0,l=-1,p=!1,r;this.hasNext=function(){return!p};this.next=function(){r=f(c[d][l]);b();return r};this.remove=function(){void 0!==r&&(a(r),--l,b())};b()}function f(c,f,a){this.clear=function(){ca.clear()};this.contains=function(c){return f(c)};this.containsAll=function(c){for(c=c.iterator();c.hasNext();)if(!this.contains(c.next()))return!1;return!0};this.isEmpty=function(){return ca.isEmpty()};this.iterator=function(){return new d(c,
a)};this.remove=function(c){return this.contains(c)?(a(c),!0):!1};this.removeAll=function(c){for(c=c.iterator();c.hasNext();){var f=c.next();this.contains(f)&&a(f)}return!0};this.retainAll=function(c){for(var f=this.iterator(),b=[];f.hasNext();){var d=f.next();c.contains(d)||b.push(d)}for(c=0;c<b.length;++c)a(b[c]);return 0<b.length};this.size=function(){return ca.size()};this.toArray=function(){for(var c=[],f=this.iterator();f.hasNext();)c.push(f.next());return c}}function l(c){this._isIn=function(f){return f===
ca&&void 0===c.removed};this.equals=function(f){return n(c.key,f.getKey())};this.getKey=function(){return c.key};this.getValue=function(){return c.value};this.hashCode=function(f){return m(c.key)};this.setValue=function(f){var a=c.value;c.value=f;return a}}if(1===arguments.length&&arguments[0]instanceof h)return arguments[0].clone();var p=0<arguments.length?arguments[0]:16,r=1<arguments.length?arguments[1]:0.75,c=[];c.length=p;var k=0,ca=this;this.clear=function(){k=0;c=[];c.length=p};this.clone=
function(){var c=new h;c.putAll(this);return c};this.containsKey=function(f){var b=a(f),b=c[b];if(void 0===b)return!1;for(var d=0;d<b.length;++d)if(n(b[d].key,f))return!0;return!1};this.containsValue=function(f){for(var a=0;a<c.length;++a){var b=c[a];if(void 0!==b)for(var d=0;d<b.length;++d)if(n(b[d].value,f))return!0}return!1};this.entrySet=function(){return new f(function(c){return new l(c)},function(c){return c instanceof l&&c._isIn(ca)},function(c){return ca.remove(c.getKey())})};this.get=function(f){var b=
a(f),b=c[b];if(void 0===b)return null;for(var d=0;d<b.length;++d)if(n(b[d].key,f))return b[d].value;return null};this.isEmpty=function(){return 0===k};this.keySet=function(){return new f(function(c){return c.key},function(c){return ca.containsKey(c)},function(c){return ca.remove(c)})};this.values=function(){return new f(function(c){return c.value},function(c){return ca.containsValue(c)},function(c){return ca.removeByValue(c)})};this.put=function(f,d){var l=a(f),p=c[l];if(void 0===p)return++k,c[l]=
[{key:f,value:d}],b(),null;for(l=0;l<p.length;++l)if(n(p[l].key,f)){var r=p[l].value;p[l].value=d;return r}++k;p.push({key:f,value:d});b();return null};this.putAll=function(c){for(c=c.entrySet().iterator();c.hasNext();){var f=c.next();this.put(f.getKey(),f.getValue())}};this.remove=function(f){var b=a(f),d=c[b];if(void 0===d)return null;for(var l=0;l<d.length;++l)if(n(d[l].key,f))return--k,f=d[l].value,d[l].removed=!0,1<d.length?d.splice(l,1):c[b]=void 0,f;return null};this.removeByValue=function(f){var a,
b,d,l;for(a in c)if(c.hasOwnProperty(a))for(b=0,d=c[a].length;b<d;b++)if(l=c[a][b],l.value===f)return c[a].splice(b,1),!0;return!1};this.size=function(){return k}}var m=k.virtHashCode,n=k.virtEquals;return h}},{}],12:[function(D,x,Q){x.exports=function(k,h){function m(b,d){b===h&&(b="");this.name=b;d===h&&(d=0);this.size=d;this.glyph=!1;this.descent=this.ascent=0;this.leading=1.2*d;var f=b.indexOf(" Italic Bold");-1!==f&&(b=b.substring(0,f));this.style="normal";f=b.indexOf(" Italic");-1!==f&&(b=b.substring(0,
f),this.style="italic");this.weight="normal";f=b.indexOf(" Bold");-1!==f&&(b=b.substring(0,f),this.weight="bold");this.family="sans-serif";if(b!==h)switch(b){case "sans-serif":case "serif":case "monospace":case "fantasy":case "cursive":this.family=b;break;default:this.family='"'+b+'", sans-serif'}var f=this.size/250,l=n.createElement("canvas");l.width=500;l.height=500;l.style.opacity=0;var p=this.getCSSDefinition("250px","normal"),r=l.getContext("2d");r.font=p;l.width=r.measureText("dbflkhyjqpg").width;
r.font=p;p=n.createElement("div");p.style.position="absolute";p.style.opacity=0;p.style.fontFamily='"'+this.name+'"';p.style.fontSize="250px";p.innerHTML="dbflkhyjqpg<br/>dbflkhyjqpg";n.body.appendChild(p);var c=l.width,k=l.height,l=k/2;r.fillStyle="white";r.fillRect(0,0,c,k);r.fillStyle="black";r.fillText("dbflkhyjqpg",0,l);for(var k=r.getImageData(0,0,c,k).data,m=0,G=4*c,A=k.length;++m<A&&255===k[m];)a();c=Math.round(m/G);for(m=A-1;0<--m&&255===k[m];)a();k=Math.round(m/G);this.ascent=f*(l-c);this.descent=
f*(k-l);n.defaultView.getComputedStyle&&(l=n.defaultView.getComputedStyle(p,null).getPropertyValue("height"),l=f*l.replace("px",""),l>=2*this.size&&(this.leading=Math.round(l/2)));n.body.removeChild(p);f=this.caching?r:void 0;this.context2d=f;this.css=this.getCSSDefinition();this.context2d&&(this.context2d.font=this.css)}var n=k.Browser.document,a=k.noop;m.prototype.caching=!0;m.prototype.getCSSDefinition=function(a,d){a===h&&(a=this.size+"px");d===h&&(d=this.leading+"px");return[this.style,"normal",
this.weight,a+"/"+d,this.family].join(" ")};m.prototype.measureTextWidth=function(a){return this.context2d.measureText(a).width};m.prototype.measureTextWidthFallback=function(a){var d=n.createElement("canvas").getContext("2d");d.font=this.css;return d.measureText(a).width};m.PFontCache={length:0};m.get=function(a,d){d=(10*d+0.5|0)/10;var f=m.PFontCache,l=a+"/"+d;if(!f[l]){f[l]=new m(a,d);f.length++;if(50===f.length){m.prototype.measureTextWidth=m.prototype.measureTextWidthFallback;m.prototype.caching=
!1;for(var p in f)"length"!==p&&(f[p].context2d=null);return new m(a,d)}if(400===f.length)return m.PFontCache={},m.get=m.getFallback,new m(a,d)}return f[l]};m.getFallback=function(a,d){return new m(a,d)};m.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]};m.preloading={template:{},initialized:!1,initialize:function(){var a=n.createElement("style");a.setAttribute("type","text/css");a.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+
function(){return"#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#".replace(/[#237]/g,function(a){return"AAAAAAAA".substr(~~a?7-a:6)})}()+"')\n       format('truetype');\n}";n.head.appendChild(a);a=n.createElement("span");a.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';
a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.template=a;this.initialized=!0},getElementWidth:function(a){return n.defaultView.getComputedStyle(a,"").getPropertyValue("width")},timeAttempted:0,pending:function(a){this.initialized||this.initialize();for(var d,f,l=this.getElementWidth(this.template),p=0;p<this.fontList.length;p++){d=this.fontList[p];f=this.getElementWidth(d);if(4E3>this.timeAttempted&&f===l)return this.timeAttempted+=a,!0;n.body.removeChild(d);this.fontList.splice(p--,1);this.timeAttempted=
0}return 0===this.fontList.length?!1:!0},fontList:[],addedList:{},add:function(a){this.initialized||this.initialize();var d="object"===typeof a?a.fontFace:a;a="object"===typeof a?a.url:a;if(!this.addedList[d]){var f=n.createElement("style");f.setAttribute("type","text/css");f.innerHTML="@font-face{\n  font-family: '"+d+"';\n  src:  url('"+a+"');\n}\n";n.head.appendChild(f);this.addedList[d]=!0;a=n.createElement("span");a.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;";a.style.fontFamily=
'"'+d+'", "PjsEmptyFont", fantasy';a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.fontList.push(a)}}};return m}},{}],13:[function(D,x,Q){x.exports=function(k,h){var m=k.p,n=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof n?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};n.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],
a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},
invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var d,f;a instanceof PVector?(d=a.x,f=a.y,b||(b=new PVector)):a instanceof Array&&(d=a[0],f=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2],b[1]=this.elements[3]*d+this.elements[4]*f+this.elements[5]):b instanceof PVector&&(b.x=this.elements[0]*d+this.elements[1]*f+this.elements[2],b.y=this.elements[3]*d+this.elements[4]*f+this.elements[5],b.z=0);return b},multX:function(a,
b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>PConstants.MIN_INT){var b=
this.elements[0],d=this.elements[1],f=this.elements[2],l=this.elements[3],p=this.elements[4],r=this.elements[5];this.elements[0]=p/a;this.elements[3]=-l/a;this.elements[1]=-d/a;this.elements[4]=b/a;this.elements[2]=(d*r-p*f)/a;this.elements[5]=(l*f-b*r)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof
n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],d=0,f=0;2>f;f++)for(var l=0;3>l;l++,d++)b[d]+=this.elements[3*f+0]*a[l+0]+this.elements[3*f+1]*a[l+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&
arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var d=this.elements[0],f=this.elements[1];this.elements[0]=
b*d+a*f;this.elements[1]=-a*d+b*f;d=this.elements[3];f=this.elements[4];this.elements[3]=b*d+a*f;this.elements[4]=-a*d+b*f},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=printMatrixHelper(this.elements),a=""+m.nfs(this.elements[0],a,4)+" "+m.nfs(this.elements[1],a,4)+" "+m.nfs(this.elements[2],a,4)+"\n"+m.nfs(this.elements[3],a,4)+" "+m.nfs(this.elements[4],a,4)+" "+m.nfs(this.elements[5],a,4)+"\n\n";m.println(a)}};return n}},{}],14:[function(D,
x,Q){x.exports=function(k,h){var m=k.p,n=function(){this.reset()};n.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},
translate:function(a,b,d){d===h&&(d=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+d*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+d*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+d*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+d*this.elements[14]},transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=
a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var d,f,l,p;a instanceof PVector?(d=a.x,f=a.y,l=a.z,p=1,b||(b=new PVector)):a instanceof Array&&(d=a[0],f=a[1],l=a[2],p=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof
Array&&(3===b.length?(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3],b[1]=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7],b[2]=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3]*p,b[1]=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7]*p,b[2]=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+
this.elements[11]*p,b[3]=this.elements[12]*d+this.elements[13]*f+this.elements[14]*l+this.elements[15]*p));b instanceof PVector&&(b.x=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3],b.y=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7],b.z=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+this.elements[11]);return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):
1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=0,f=0;4>f;f++)for(var l=0;4>l;l++,d++)b[d]+=this.elements[l+0]*a[4*f+0]+this.elements[l+4]*a[4*f+1]+this.elements[l+8]*a[4*f+2]+this.elements[l+12]*a[4*f+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&
(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=0,f=0;4>f;f++)for(var l=0;4>l;l++,d++)b[d]+=this.elements[4*f+0]*a[l+0]+this.elements[4*f+1]*a[l+4]+this.elements[4*f+2]*a[l+8]+this.elements[4*f+3]*a[l+12];this.elements=b.slice()},rotate:function(a,b,d,f){if(d){var l=Math.cos(a);a=Math.sin(a);var p=1-l;this.apply(p*b*b+l,p*b*d-a*f,p*b*f+a*d,0,p*b*d+a*f,p*d*d+l,p*d*f-a*b,0,p*b*f-a*d,p*d*f+a*b,p*f*f+l,0,0,0,0,1)}else this.rotateZ(a)},invApply:function(){inverseCopy===h&&(inverseCopy=new n);
var a=arguments;inverseCopy.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!inverseCopy.invert())return!1;this.preApply(inverseCopy);return!0},rotateX:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,
b,d){!a||b||d?a&&(b&&!d)&&(d=1):b=d=a;a&&(b&&d)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=d,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=d,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=d,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=d)},skewX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,
0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,d,f){return d?f?this.elements[0]*a+this.elements[1]*b+this.elements[2]*d+this.elements[3]*f:this.elements[0]*a+this.elements[1]*b+this.elements[2]*d+this.elements[3]:this.elements[0]*a+this.elements[1]*b+this.elements[3]},multY:function(a,b,d,f){return d?f?this.elements[4]*a+this.elements[5]*b+this.elements[6]*d+this.elements[7]*f:this.elements[4]*a+this.elements[5]*b+this.elements[6]*
d+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,d,f){return f?this.elements[8]*a+this.elements[9]*b+this.elements[10]*d+this.elements[11]*f:this.elements[8]*a+this.elements[9]*b+this.elements[10]*d+this.elements[11]},multW:function(a,b,d,f){return f?this.elements[12]*a+this.elements[13]*b+this.elements[14]*d+this.elements[15]*f:this.elements[12]*a+this.elements[13]*b+this.elements[14]*d+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-
this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],d=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],f=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],l=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],p=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],r=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],c=this.elements[8]*this.elements[14]-this.elements[10]*
this.elements[12],h=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],m=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],n=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],x=a*n-b*m+d*k+f*h-l*c+p*r;if(1E-9>=Math.abs(x))return!1;var v=[];v[0]=+this.elements[5]*n-this.elements[6]*m+this.elements[7]*k;v[4]=-this.elements[4]*n+this.elements[6]*h-this.elements[7]*c;
v[8]=+this.elements[4]*m-this.elements[5]*h+this.elements[7]*r;v[12]=-this.elements[4]*k+this.elements[5]*c-this.elements[6]*r;v[1]=-this.elements[1]*n+this.elements[2]*m-this.elements[3]*k;v[5]=+this.elements[0]*n-this.elements[2]*h+this.elements[3]*c;v[9]=-this.elements[0]*m+this.elements[1]*h-this.elements[3]*r;v[13]=+this.elements[0]*k-this.elements[1]*c+this.elements[2]*r;v[2]=+this.elements[13]*p-this.elements[14]*l+this.elements[15]*f;v[6]=-this.elements[12]*p+this.elements[14]*d-this.elements[15]*
b;v[10]=+this.elements[12]*l-this.elements[13]*d+this.elements[15]*a;v[14]=-this.elements[12]*f+this.elements[13]*b-this.elements[14]*a;v[3]=-this.elements[9]*p+this.elements[10]*l-this.elements[11]*f;v[7]=+this.elements[8]*p-this.elements[10]*d+this.elements[11]*b;v[11]=-this.elements[8]*l+this.elements[9]*d-this.elements[11]*a;v[15]=+this.elements[8]*f-this.elements[9]*b+this.elements[10]*a;a=1/x;v[0]*=a;v[1]*=a;v[2]*=a;v[3]*=a;v[4]*=a;v[5]*=a;v[6]*=a;v[7]*=a;v[8]*=a;v[9]*=a;v[10]*=a;v[11]*=a;v[12]*=
a;v[13]*=a;v[14]*=a;v[15]*=a;this.elements=v.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=printMatrixHelper(this.elements),a=""+m.nfs(this.elements[0],a,4)+" "+m.nfs(this.elements[1],a,4)+" "+m.nfs(this.elements[2],a,4)+" "+m.nfs(this.elements[3],a,4)+"\n"+m.nfs(this.elements[4],a,4)+" "+m.nfs(this.elements[5],a,4)+" "+m.nfs(this.elements[6],a,4)+" "+m.nfs(this.elements[7],a,4)+"\n"+m.nfs(this.elements[8],
a,4)+" "+m.nfs(this.elements[9],a,4)+" "+m.nfs(this.elements[10],a,4)+" "+m.nfs(this.elements[11],a,4)+"\n"+m.nfs(this.elements[12],a,4)+" "+m.nfs(this.elements[13],a,4)+" "+m.nfs(this.elements[14],a,4)+" "+m.nfs(this.elements[15],a,4)+"\n\n";m.println(a)},invTranslate:function(a,b,d){this.preApply(1,0,0,-a,0,1,0,-b,0,0,1,-d,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);
this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,d){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/d,0,0,0,0,1])}};return n}},{}],15:[function(D,x,Q){x.exports=function(k){var h=k.PConstants,m=k.PMatrix2D,n=k.PMatrix3D;k=function(a){this.family=a||h.GROUP;this.style=this.visible=!0;this.children=[];this.nameTable=[];this.params=[];this.name="";this.parent=this.height=this.width=
this.close=this.kind=this.matrix=this.image=null};k.prototype={isVisible:function(){return this.visible},setVisible:function(a){this.visible=a},disableStyle:function(){this.style=!1;for(var a=0,b=this.children.length;a<b;a++)this.children[a].disableStyle()},enableStyle:function(){this.style=!0;for(var a=0,b=this.children.length;a<b;a++)this.children[a].enableStyle()},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(a){this.name=
a},getName:function(){return this.name},draw:function(a){if(!a)throw"render context missing for draw() in PShape";this.visible&&(this.pre(a),this.drawImpl(a),this.post(a))},drawImpl:function(a){this.family===h.GROUP?this.drawGroup(a):this.family===h.PRIMITIVE?this.drawPrimitive(a):this.family===h.GEOMETRY?this.drawGeometry(a):this.family===h.PATH&&this.drawPath(a)},drawPath:function(a){var b,d;if(0!==this.vertices.length){a.beginShape();if(0===this.vertexCodes.length)if(2===this.vertices[0].length)for(b=
0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b][0],this.vertices[b][1]);else for(b=0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b][0],this.vertices[b][1],this.vertices[b][2]);else{var f=0;if(2===this.vertices[0].length)for(b=0,d=this.vertexCodes.length;b<d;b++)this.vertexCodes[b]===h.VERTEX?(a.vertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f].moveTo),a.breakShape=!1,f++):this.vertexCodes[b]===h.BEZIER_VERTEX?(a.bezierVertex(this.vertices[f+0][0],this.vertices[f+
0][1],this.vertices[f+1][0],this.vertices[f+1][1],this.vertices[f+2][0],this.vertices[f+2][1]),f+=3):this.vertexCodes[b]===h.CURVE_VERTEX?(a.curveVertex(this.vertices[f][0],this.vertices[f][1]),f++):this.vertexCodes[b]===h.BREAK&&(a.breakShape=!0);else for(b=0,d=this.vertexCodes.length;b<d;b++)this.vertexCodes[b]===h.VERTEX?(a.vertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f][2]),!0===this.vertices[f].moveTo?vertArray[vertArray.length-1].moveTo=!0:!1===this.vertices[f].moveTo&&(vertArray[vertArray.length-
1].moveTo=!1),a.breakShape=!1):this.vertexCodes[b]===h.BEZIER_VERTEX?(a.bezierVertex(this.vertices[f+0][0],this.vertices[f+0][1],this.vertices[f+0][2],this.vertices[f+1][0],this.vertices[f+1][1],this.vertices[f+1][2],this.vertices[f+2][0],this.vertices[f+2][1],this.vertices[f+2][2]),f+=3):this.vertexCodes[b]===h.CURVE_VERTEX?(a.curveVertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f][2]),f++):this.vertexCodes[b]===h.BREAK&&(a.breakShape=!0)}a.endShape(this.close?h.CLOSE:h.OPEN)}},drawGeometry:function(a){var b,
d;a.beginShape(this.kind);if(this.style)for(b=0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b]);else for(b=0,d=this.vertices.length;b<d;b++){var f=this.vertices[b];0===f[2]?a.vertex(f[0],f[1]):a.vertex(f[0],f[1],f[2])}a.endShape()},drawGroup:function(a){for(var b=0,d=this.children.length;b<d;b++)this.children[b].draw(a)},drawPrimitive:function(a){if(this.kind===h.POINT)a.point(this.params[0],this.params[1]);else if(this.kind===h.LINE)4===this.params.length?a.line(this.params[0],this.params[1],
this.params[2],this.params[3]):a.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===h.TRIANGLE)a.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===h.QUAD)a.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7]);else if(this.kind===h.RECT)if(null!==this.image){var b=imageModeConvert;a.imageMode(h.CORNER);
a.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3]);imageModeConvert=b}else b=a.curRectMode,a.rectMode(h.CORNER),a.rect(this.params[0],this.params[1],this.params[2],this.params[3]),a.curRectMode=b;else this.kind===h.ELLIPSE?(b=a.curEllipseMode,a.ellipseMode(h.CORNER),a.ellipse(this.params[0],this.params[1],this.params[2],this.params[3]),a.curEllipseMode=b):this.kind===h.ARC?(b=curEllipseMode,a.ellipseMode(h.CORNER),a.arc(this.params[0],this.params[1],this.params[2],this.params[3],
this.params[4],this.params[5]),curEllipseMode=b):this.kind===h.BOX?1===this.params.length?a.box(this.params[0]):a.box(this.params[0],this.params[1],this.params[2]):this.kind===h.SPHERE&&a.sphere(this.params[0])},pre:function(a){this.matrix&&(a.pushMatrix(),a.transform(this.matrix));this.style&&(a.pushStyle(),this.styles(a))},post:function(a){this.matrix&&a.popMatrix();this.style&&a.popStyle()},styles:function(a){this.stroke?(a.stroke(this.strokeColor),a.strokeWeight(this.strokeWeight),a.strokeCap(this.strokeCap),
a.strokeJoin(this.strokeJoin)):a.noStroke();this.fill?a.fill(this.fillColor):a.noFill()},getChild:function(a){var b,d;if("number"===typeof a)return this.children[a];var f;if(""===a||this.name===a)return this;if(0<this.nameTable.length){b=0;for(d=this.nameTable.length;b<d||f;b++)if(this.nameTable[b].getName===a){f=this.nameTable[b];break}if(f)return f}b=0;for(d=this.children.length;b<d;b++)if(f=this.children[b].getChild(a))return f;return null},getChildCount:function(){return this.children.length},
addChild:function(a){this.children.push(a);a.parent=this;null!==a.getName()&&this.addName(a.getName(),a)},addName:function(a,b){null!==this.parent?this.parent.addName(a,b):this.nameTable.push([a,b])},translate:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.translate(arguments[0],arguments[1])):(this.checkMatrix(3),this.matrix.translate(arguments[0],arguments[1],0))},checkMatrix:function(a){null===this.matrix?this.matrix=2===a?new m:new n:3===a&&this.matrix instanceof m&&(this.matrix=
new n)},rotateX:function(a){this.rotate(a,1,0,0)},rotateY:function(a){this.rotate(a,0,1,0)},rotateZ:function(a){this.rotate(a,0,0,1)},rotate:function(){1===arguments.length?(this.checkMatrix(2),this.matrix.rotate(arguments[0])):(this.checkMatrix(3),this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3]))},scale:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1])):3===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],
arguments[1],arguments[2])):(this.checkMatrix(2),this.matrix.scale(arguments[0]))},resetMatrix:function(){this.checkMatrix(2);this.matrix.reset()},applyMatrix:function(a){1===arguments.length?this.applyMatrix(a.elements[0],a.elements[1],0,a.elements[2],a.elements[3],a.elements[4],0,a.elements[5],0,0,1,0,0,0,0,1):6===arguments.length?(this.checkMatrix(2),this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)):16===arguments.length&&(this.checkMatrix(3),
this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15]))}};return k}},{}],16:[function(D,x,Q){x.exports=function(k){var h=k.CommonFunctions,m=k.PConstants,n=k.PShape,a=k.XMLElement,b=k.colors,d=function(){n.call(this);if(1===arguments.length){if(this.element=arguments[0],this.vertexCodes=[],this.vertices=[],this.opacity=1,
this.stroke=!1,this.strokeColor=m.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=m.SQUARE,this.strokeJoin=m.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient=null,this.strokeOpacity=1,this.fill=!0,this.fillColor=m.ALPHA_MASK,this.fillName=this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1,"svg"!==this.element.getName())throw"root is not <svg>, it's <"+this.element.getName()+">";}else 2===arguments.length&&("string"===typeof arguments[1]?-1<arguments[1].indexOf(".svg")&&
(this.element=new a(!0,arguments[1]),this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=m.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=m.SQUARE,this.strokeJoin=m.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient="",this.strokeOpacity=1,this.fill=!0,this.fillColor=m.ALPHA_MASK,this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1):arguments[0]&&(this.element=arguments[1],this.vertexCodes=arguments[0].vertexCodes.slice(),this.vertices=arguments[0].vertices.slice(),
this.stroke=arguments[0].stroke,this.strokeColor=arguments[0].strokeColor,this.strokeWeight=arguments[0].strokeWeight,this.strokeCap=arguments[0].strokeCap,this.strokeJoin=arguments[0].strokeJoin,this.strokeGradient=arguments[0].strokeGradient,this.strokeGradientPaint=arguments[0].strokeGradientPaint,this.strokeName=arguments[0].strokeName,this.fill=arguments[0].fill,this.fillColor=arguments[0].fillColor,this.fillGradient=arguments[0].fillGradient,this.fillGradientPaint=arguments[0].fillGradientPaint,
this.fillName=arguments[0].fillName,this.strokeOpacity=arguments[0].strokeOpacity,this.fillOpacity=arguments[0].fillOpacity,this.opacity=arguments[0].opacity));this.name=this.element.getStringAttribute("id");this.visible="none"!==this.element.getStringAttribute("display","inline");var f=this.element.getAttribute("transform");f&&(this.matrix=this.parseMatrix(f));f=this.element.getStringAttribute("viewBox");null!==f&&(f=f.split(" "),this.width=f[2],this.height=f[3]);var f=this.element.getStringAttribute("width"),
b=this.element.getStringAttribute("height");if(null!==f)this.width=this.parseUnitSize(f),this.height=this.parseUnitSize(b);else if(0===this.width||0===this.height)throw this.height=this.width=1,"The width and/or height is not readable in the <svg> tag of this file.";this.parseColors(this.element);this.parseChildren(this.element)};d.prototype=new n;d.prototype.parseMatrix=function(){function f(f){var a=[];f.replace(/\((.*?)\)/,function(){return function(f,c){a=c.replace(/,+/g," ").split(/\s+/)}}());
return a}return function(a){this.checkMatrix(2);var b=[];a.replace(/\s*(\w+)\((.*?)\)/g,function(c){b.push(h.trim(c))});if(0===b.length)return null;a=0;for(var d=b.length;a<d;a++){var c=f(b[a]);if(-1!==b[a].indexOf("matrix"))this.matrix.set(c[0],c[2],c[4],c[1],c[3],c[5]);else if(-1!==b[a].indexOf("translate"))this.matrix.translate(c[0],2===c.length?c[1]:0);else if(-1!==b[a].indexOf("scale"))this.matrix.scale(c[0],2===c.length?c[1]:c[0]);else if(-1!==b[a].indexOf("rotate")){var k=c[0];1===c.length?
this.matrix.rotate(h.radians(k)):3===c.length&&(this.matrix.translate(c[1],c[2]),this.matrix.rotate(h.radians(c[0])),this.matrix.translate(-c[1],-c[2]))}else-1!==b[a].indexOf("skewX")?this.matrix.skewX(parseFloat(c[0])):-1!==b[a].indexOf("skewY")?this.matrix.skewY(c[0]):-1!==b[a].indexOf("shearX")?this.matrix.shearX(c[0]):-1!==b[a].indexOf("shearY")&&this.matrix.shearY(c[0])}return this.matrix}}();d.prototype.parseChildren=function(f){f=f.getChildren();var a=new n,b,d;b=0;for(d=f.length;b<d;b++){var c=
this.parseChild(f[b]);c&&a.addChild(c)}b=0;for(d=a.children.length;b<d;b++)this.children.push(a.children[b])};d.prototype.getName=function(){return this.name};d.prototype.parseChild=function(f){var a=f.getName(),b;"g"===a?b=new d(this,f):"defs"===a?b=new d(this,f):"line"===a?(b=new d(this,f),b.parseLine()):"circle"===a?(b=new d(this,f),b.parseEllipse(!0)):"ellipse"===a?(b=new d(this,f),b.parseEllipse(!1)):"rect"===a?(b=new d(this,f),b.parseRect()):"polygon"===a?(b=new d(this,f),b.parsePoly(!0)):"polyline"===
a?(b=new d(this,f),b.parsePoly(!1)):"path"===a?(b=new d(this,f),b.parsePath()):"radialGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient"):"linearGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient"):"text"===a?unimplemented("PShapeSVG.prototype.parseChild, name = text"):"filter"===a?unimplemented("PShapeSVG.prototype.parseChild, name = filter"):"mask"===a&&unimplemented("PShapeSVG.prototype.parseChild, name = mask");return b};d.prototype.parsePath=
function(){this.family=m.PATH;this.kind=0;var f=h.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "));if(null!==f)for(var f=f.split(""),a=0,b=0,d=0,c=0,k=c=d=0,n=0,G=0,A=0,x=A=c=G=d=0,v=0,ga="",q=[],D=!1,M,nc,u;x<f.length;)if(v=f[x].charCodeAt(0),65<=v&&90>=v||97<=v&&122>=v){u=x;x++;if(x<f.length)for(q=[],v=f[x].charCodeAt(0);!(65<=v&&90>=v||97<=v&&100>=v||102<=v&&122>=v)&&!1===D;)32===v?""!==ga&&(q.push(parseFloat(ga)),ga=""):45===v?101===f[x-1].charCodeAt(0)?ga+=f[x].toString():(""!==
ga&&q.push(parseFloat(ga)),ga=f[x].toString()):ga+=f[x].toString(),x++,x===f.length?D=!0:v=f[x].charCodeAt(0);""!==ga&&(q.push(parseFloat(ga)),ga="");nc=f[u];v=nc.charCodeAt(0);if(77===v){if(2<=q.length&&0===q.length%2&&(a=q[0],b=q[1],this.parsePathMoveto(a,b),2<q.length))for(u=2,v=q.length;u<v;u+=2)a=q[u],b=q[u+1],this.parsePathLineto(a,b)}else if(109===v){if(2<=q.length&&0===q.length%2&&(a+=q[0],b+=q[1],this.parsePathMoveto(a,b),2<q.length))for(u=2,v=q.length;u<v;u+=2)a+=q[u],b+=q[u+1],this.parsePathLineto(a,
b)}else if(76===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)a=q[u],b=q[u+1],this.parsePathLineto(a,b)}else if(108===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)a+=q[u],b+=q[u+1],this.parsePathLineto(a,b)}else if(72===v)for(u=0,v=q.length;u<v;u++)a=q[u],this.parsePathLineto(a,b);else if(104===v)for(u=0,v=q.length;u<v;u++)a+=q[u],this.parsePathLineto(a,b);else if(86===v)for(u=0,v=q.length;u<v;u++)b=q[u],this.parsePathLineto(a,b);else if(118===v)for(u=0,v=q.length;u<
v;u++)b+=q[u],this.parsePathLineto(a,b);else if(67===v){if(6<=q.length&&0===q.length%6)for(u=0,v=q.length;u<v;u+=6)d=q[u],k=q[u+1],c=q[u+2],n=q[u+3],G=q[u+4],A=q[u+5],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(99===v){if(6<=q.length&&0===q.length%6)for(u=0,v=q.length;u<v;u+=6)d=a+q[u],k=b+q[u+1],c=a+q[u+2],n=b+q[u+3],G=a+q[u+4],A=b+q[u+5],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(83===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)"c"===M.toLowerCase()||"s"===M.toLowerCase()?
(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),k=A+(A-G)):(d=this.vertices[this.vertices.length-1][0],k=this.vertices[this.vertices.length-1][1]),c=q[u],n=q[u+1],G=q[u+2],A=q[u+3],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(115===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)"c"===M.toLowerCase()||"s"===M.toLowerCase()?(d=this.vertices[this.vertices.length-
2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),k=A+(A-G)):(d=this.vertices[this.vertices.length-1][0],k=this.vertices[this.vertices.length-1][1]),c=a+q[u],n=b+q[u+1],G=a+q[u+2],A=b+q[u+3],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(81===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)d=q[u],c=q[u+1],G=q[u+2],A=q[u+3],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(113===v){if(4<=
q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)d=a+q[u],c=b+q[u+1],G=a+q[u+2],A=b+q[u+3],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(84===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)"q"===M.toLowerCase()||"t"===M.toLowerCase()?(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),c=A+(A-G)):(d=a,c=b),G=q[u],A=q[u+1],this.parsePathQuadto(a,b,
d,c,G,A),a=G,b=A}else if(116===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)"q"===M.toLowerCase()||"t"===M.toLowerCase()?(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),c=A+(A-G)):(d=a,c=b),G=a+q[u],A=b+q[u+1],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(90===v||122===v)this.close=!0;M=nc.toString()}else x++};d.prototype.parsePathQuadto=function(a,
b,d,r,c,h){if(0<this.vertices.length)this.parsePathCode(m.BEZIER_VERTEX),this.parsePathVertex(a+2*(d-a)/3,b+2*(r-b)/3),this.parsePathVertex(c+2*(d-c)/3,h+2*(r-h)/3),this.parsePathVertex(c,h);else throw"Path must start with M/m";};d.prototype.parsePathCurveto=function(a,b,d,r,c,h){if(0<this.vertices.length)this.parsePathCode(m.BEZIER_VERTEX),this.parsePathVertex(a,b),this.parsePathVertex(d,r),this.parsePathVertex(c,h);else throw"Path must start with M/m";};d.prototype.parsePathLineto=function(a,b){if(0<
this.vertices.length)this.parsePathCode(m.VERTEX),this.parsePathVertex(a,b),this.vertices[this.vertices.length-1].moveTo=!1;else throw"Path must start with M/m";};d.prototype.parsePathMoveto=function(a,b){0<this.vertices.length&&this.parsePathCode(m.BREAK);this.parsePathCode(m.VERTEX);this.parsePathVertex(a,b);this.vertices[this.vertices.length-1].moveTo=!0};d.prototype.parsePathVertex=function(a,b){var d=[];d[0]=a;d[1]=b;this.vertices.push(d)};d.prototype.parsePathCode=function(a){this.vertexCodes.push(a)};
d.prototype.parsePoly=function(a){this.family=m.PATH;this.close=a;a=h.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "));if(null!==a)if(a=a.split(" "),0===a.length%2)for(var b=0,d=a.length;b<d;b++){var r=[];r[0]=a[b];r[1]=a[++b];this.vertices.push(r)}else throw"Error parsing polygon points: odd number of coordinates provided";};d.prototype.parseRect=function(){this.kind=m.RECT;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x");this.params[1]=
this.element.getFloatAttribute("y");this.params[2]=this.element.getFloatAttribute("width");this.params[3]=this.element.getFloatAttribute("height");if(0>this.params[2]||0>this.params[3])throw"svg error: negative width or height found while parsing <rect>";};d.prototype.parseEllipse=function(a){this.kind=m.ELLIPSE;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("cx")|0;this.params[1]=this.element.getFloatAttribute("cy")|0;var b;if(a){if(a=b=this.element.getFloatAttribute("r"),
0>a)throw"svg error: negative radius found while parsing <circle>";}else if(a=this.element.getFloatAttribute("rx"),b=this.element.getFloatAttribute("ry"),0>a||0>b)throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>";this.params[0]-=a;this.params[1]-=b;this.params[2]=2*a;this.params[3]=2*b};d.prototype.parseLine=function(){this.kind=m.LINE;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x1");this.params[1]=this.element.getFloatAttribute("y1");
this.params[2]=this.element.getFloatAttribute("x2");this.params[3]=this.element.getFloatAttribute("y2")};d.prototype.parseColors=function(a){a.hasAttribute("opacity")&&this.setOpacity(a.getAttribute("opacity"));a.hasAttribute("stroke")&&this.setStroke(a.getAttribute("stroke"));a.hasAttribute("stroke-width")&&this.setStrokeWeight(a.getAttribute("stroke-width"));a.hasAttribute("stroke-linejoin")&&this.setStrokeJoin(a.getAttribute("stroke-linejoin"));a.hasAttribute("stroke-linecap")&&this.setStrokeCap(a.getStringAttribute("stroke-linecap"));
a.hasAttribute("fill")&&this.setFill(a.getStringAttribute("fill"));if(a.hasAttribute("style")){a=a.getStringAttribute("style").toString().split(";");for(var b=0,d=a.length;b<d;b++){var r=h.trim(a[b].split(":"));"fill"===r[0]?this.setFill(r[1]):"fill-opacity"===r[0]?this.setFillOpacity(r[1]):"stroke"===r[0]?this.setStroke(r[1]):"stroke-width"===r[0]?this.setStrokeWeight(r[1]):"stroke-linecap"===r[0]?this.setStrokeCap(r[1]):"stroke-linejoin"===r[0]?this.setStrokeJoin(r[1]):"stroke-opacity"===r[0]?this.setStrokeOpacity(r[1]):
"opacity"===r[0]&&this.setOpacity(r[1])}}};d.prototype.setFillOpacity=function(a){this.fillOpacity=parseFloat(a);this.fillColor=255*this.fillOpacity<<24|this.fillColor&16777215};d.prototype.setFill=function(a){var d=this.fillColor&4278190080;"none"===a?this.fill=!1:0===a.indexOf("#")?(this.fill=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.fillColor=d|parseInt(a.substring(1),16)&16777215):0===a.indexOf("rgb")?(this.fill=!0,this.fillColor=d|this.parseRGB(a)):0===a.indexOf("url(#")?
this.fillName=a.substring(5,a.length-1):b[a]&&(this.fill=!0,this.fillColor=d|parseInt(b[a].substring(1),16)&16777215)};d.prototype.setOpacity=function(a){this.strokeColor=255*parseFloat(a)<<24|this.strokeColor&16777215;this.fillColor=255*parseFloat(a)<<24|this.fillColor&16777215};d.prototype.setStroke=function(a){var d=this.strokeColor&4278190080;"none"===a?this.stroke=!1:"#"===a.charAt(0)?(this.stroke=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.strokeColor=d|parseInt(a.substring(1),
16)&16777215):0===a.indexOf("rgb")?(this.stroke=!0,this.strokeColor=d|this.parseRGB(a)):0===a.indexOf("url(#")?this.strokeName=a.substring(5,a.length-1):b[a]&&(this.stroke=!0,this.strokeColor=d|parseInt(b[a].substring(1),16)&16777215)};d.prototype.setStrokeWeight=function(a){this.strokeWeight=this.parseUnitSize(a)};d.prototype.setStrokeJoin=function(a){"miter"===a?this.strokeJoin=m.MITER:"round"===a?this.strokeJoin=m.ROUND:"bevel"===a&&(this.strokeJoin=m.BEVEL)};d.prototype.setStrokeCap=function(a){"butt"===
a?this.strokeCap=m.SQUARE:"round"===a?this.strokeCap=m.ROUND:"square"===a&&(this.strokeCap=m.PROJECT)};d.prototype.setStrokeOpacity=function(a){this.strokeOpacity=parseFloat(a);this.strokeColor=255*this.strokeOpacity<<24|this.strokeColor&16777215};d.prototype.parseRGB=function(a){a=a.substring(a.indexOf("(")+1,a.indexOf(")")).split(", ");return a[0]<<16|a[1]<<8|a[2]};d.prototype.parseUnitSize=function(a){var b=a.length-2;return 0>b?a:a.indexOf("pt")===b?1.25*parseFloat(a.substring(0,b)):a.indexOf("pc")===
b?15*parseFloat(a.substring(0,b)):a.indexOf("mm")===b?3.543307*parseFloat(a.substring(0,b)):a.indexOf("cm")===b?35.43307*parseFloat(a.substring(0,b)):a.indexOf("in")===b?90*parseFloat(a.substring(0,b)):a.indexOf("px")===b?parseFloat(a.substring(0,b)):parseFloat(a)};return d}},{}],17:[function(D,x,Q){x.exports=function(k,h){function m(a,b,l){this.x=a||0;this.y=b||0;this.z=l||0}function n(a){return function(b,l){var p=b.get();p[a](l);return p}}var a=k.PConstants;m.fromAngle=function(a,b){if(b===h||
null===b)b=new m;b.x=Math.cos(a);b.y=Math.sin(a);return b};m.random2D=function(b){return m.fromAngle(Math.random()*a.TWO_PI,b)};m.random3D=function(b){var f=Math.random()*a.TWO_PI,l=2*Math.random()-1,p=Math.sqrt(1-l*l),r=p*Math.cos(f),f=p*Math.sin(f);b===h||null===b?b=new m(r,f,l):b.set(r,f,l);return b};m.dist=function(a,b){return a.dist(b)};m.dot=function(a,b){return a.dot(b)};m.cross=function(a,b){return a.cross(b)};m.sub=function(a,b){return new m(a.x-b.x,a.y-b.y,a.z-b.z)};m.angleBetween=function(a,
b){return Math.acos(a.dot(b)/(a.mag()*b.mag()))};m.lerp=function(a,b,l){a=new m(a.x,a.y,a.z);a.lerp(b,l);return a};m.prototype={set:function(a,b,l){1===arguments.length?this.set(a.x||a[0]||0,a.y||a[1]||0,a.z||a[2]||0):(this.x=a,this.y=b,this.z=l)},get:function(){return new m(this.x,this.y,this.z)},mag:function(){var a=this.x,b=this.y,l=this.z;return Math.sqrt(a*a+b*b+l*l)},magSq:function(){var a=this.x,b=this.y,l=this.z;return a*a+b*b+l*l},setMag:function(a,b){if(b===h)b=a,this.normalize(),this.mult(b);
else return a.normalize(),a.mult(b),a},add:function(a,b,l){1===arguments.length?(this.x+=a.x,this.y+=a.y,this.z+=a.z):(this.x+=a,this.y+=b,this.z+=l)},sub:function(a,b,l){1===arguments.length?(this.x-=a.x,this.y-=a.y,this.z-=a.z):(this.x-=a,this.y-=b,this.z-=l)},mult:function(a){"number"===typeof a?(this.x*=a,this.y*=a,this.z*=a):(this.x*=a.x,this.y*=a.y,this.z*=a.z)},div:function(a){"number"===typeof a?(this.x/=a,this.y/=a,this.z/=a):(this.x/=a.x,this.y/=a.y,this.z/=a.z)},rotate:function(a){var b=
this.x,l=Math.cos(a);a=Math.sin(a);this.x=l*this.x-a*this.y;this.y=a*b+l*this.y},dist:function(a){var b=this.x-a.x,l=this.y-a.y;a=this.z-a.z;return Math.sqrt(b*b+l*l+a*a)},dot:function(a,b,l){return 1===arguments.length?this.x*a.x+this.y*a.y+this.z*a.z:this.x*a+this.y*b+this.z*l},cross:function(a){var b=this.x,l=this.y,p=this.z;return new m(l*a.z-a.y*p,p*a.x-a.z*b,b*a.y-a.x*l)},lerp:function(a,b,l,p){var r,c;2===arguments.length?(p=b,r=a.x,c=a.y,l=a.z):(r=a,c=b);this.x+=(r-this.x)*p;this.y+=(c-this.y)*
p;this.z+=(l-this.z)*p},normalize:function(){var a=this.mag();0<a&&this.div(a)},limit:function(a){this.mag()>a&&(this.normalize(),this.mult(a))},heading:function(){return-Math.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}};for(var b in m.prototype)m.prototype.hasOwnProperty(b)&&!m.hasOwnProperty(b)&&(m[b]=n(b));return m}},{}],18:[function(D,x,Q){x.exports=function(){var k=
function(h,k,n,a,b){this.fullName=h||"";this.name=k||"";this.namespace=n||"";this.value=a;this.type=b};k.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(h){this.value=h}};return k}},{}],19:[function(D,x,Q){x.exports=function(k,h){var m=k.Browser,n=m.ajax,a=m.window.DOMParser,b=k.XMLAttribute,d=function(a,b,d,r){this.attributes=
[];this.children=[];this.name=this.fullName=null;this.namespace="";this.parent=this.content=null;this.systemID=this.lineNr="";this.type="ELEMENT";a&&("string"===typeof a?b===h&&-1<a.indexOf("<")?this.parse(a):(this.fullName=a,this.namespace=b,this.systemId=d,this.lineNr=r):this.parse(b))};d.prototype={parse:function(b){var d;try{var p=b.substring(b.length-4);if(".xml"===p||".svg"===p)b=n(b);d=(new a).parseFromString(b,"text/xml");var r=d.documentElement;if(r)this.parseChildrenRecursive(null,r);else throw"Error loading document";
return this}catch(c){throw c;}},parseChildrenRecursive:function(a,l){var p,r,c,h;a?(p=new d(l.nodeName),p.parent=a):(this.fullName=l.localName,this.name=l.nodeName,p=this);if(3===l.nodeType&&""!==l.textContent)return this.createPCDataElement(l.textContent);if(4===l.nodeType)return this.createCDataElement(l.textContent);if(l.attributes)for(c=0,h=l.attributes.length;c<h;c++)r=l.attributes[c],r=new b(r.getname,r.nodeName,r.namespaceURI,r.nodeValue,r.nodeType),p.attributes.push(r);if(l.childNodes)for(c=
0,h=l.childNodes.length;c<h;c++)r=p.parseChildrenRecursive(p,l.childNodes[c]),null!==r&&p.children.push(r);return p},createElement:function(a,b,p,r){return p===h?new d(a,b):new d(a,b,p,r)},createPCDataElement:function(a,b){if(""===a.replace(/^\s+$/g,""))return null;var p=new d;p.type="TEXT";p.content=a;return p},createCDataElement:function(a){var b=this.createPCDataElement(a);if(null===b)return null;b.type="CDATA";var d={"<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"},r;for(r in d)Object.hasOwnProperty(d,
r)||(a=a.replace(RegExp(r,"g"),d[r]));b.cdata=a;return b},hasAttribute:function(){if(1===arguments.length)return null!==this.getAttribute(arguments[0]);if(2===arguments.length)return null!==this.getAttribute(arguments[0],arguments[1])},equals:function(a){if(!(a instanceof d))return!1;var b,p;if(this.fullName!==a.fullName||this.attributes.length!==a.getAttributeCount()||this.attributes.length!==a.attributes.length)return!1;var r,c;b=0;for(p=this.attributes.length;b<p;b++)if(r=this.attributes[b].getName(),
c=this.attributes[b].getNamespace(),r=a.findAttribute(r,c),null===r||this.attributes[b].getValue()!==r.getValue()||this.attributes[b].getType()!==r.getType())return!1;if(this.children.length!==a.getChildCount())return!1;if(0<this.children.length){b=0;for(p=this.children.length;b<p;b++)if(r=this.getChild(b),c=a.getChild(b),!r.equals(c))return!1;return!0}return this.content===a.content},getContent:function(){if("TEXT"===this.type||"CDATA"===this.type)return this.content;var a=this.children;return 1!==
a.length||"TEXT"!==a[0].type&&"CDATA"!==a[0].type?null:a[0].content},getAttribute:function(){var a;if(2===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():arguments[1];if(1===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():null;if(3===arguments.length)return(a=this.findAttribute(arguments[0],arguments[1]))?a.getValue():arguments[2]},getStringAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0]):2===arguments.length?this.getAttribute(arguments[0],
arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(a){return this.getStringAttribute(a)},getFloatAttribute:function(){return 1===arguments.length?parseFloat(this.getAttribute(arguments[0],0)):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(a){return this.getFloatAttribute(a)},getIntAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0],0):
2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(a){return this.getIntAttribute(a)},hasChildren:function(){return 0<this.children.length},addChild:function(a){null!==a&&(a.parent=this,this.children.push(a))},insertChild:function(a,b){if(a){if(null===a.getLocalName()&&!this.hasChildren()){var d=this.children[this.children.length-1];if(null===d.getLocalName()){d.setContent(d.getContent()+a.getContent());return}}a.parent=
this;this.children.splice(b,0,a)}},getChild:function(a){if("number"===typeof a)return this.children[a];if(-1!==a.indexOf("/"))return this.getChildRecursive(a.split("/"),0);for(var b,d,r=0,c=this.getChildCount();r<c;r++)if(b=this.getChild(r),d=b.getName(),null!==d&&d===a)return b;return null},getChildren:function(){if(1===arguments.length){if("number"===typeof arguments[0])return this.getChild(arguments[0]);if(-1!==arguments[0].indexOf("/"))return this.getChildrenRecursive(arguments[0].split("/"),
0);for(var a=[],b,d,r=0,c=this.getChildCount();r<c;r++)b=this.getChild(r),d=b.getName(),null!==d&&d===arguments[0]&&a.push(b);return a}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(a,b){if(b===a.length)return this;for(var d,r,c=a[b],h=0,k=this.getChildCount();h<k;h++)if(d=this.getChild(h),r=d.getName(),null!==r&&r===c)return d.getChildRecursive(a,b+1);return null},getChildrenRecursive:function(a,b){if(b===a.length-1)return this.getChildren(a[b]);
for(var d=this.getChildren(a[b]),r=[],c=0;c<d.length;c++)r=r.concat(d[c].getChildrenRecursive(a,b+1));return r},isLeaf:function(){return!this.hasChildren()},listChildren:function(){for(var a=[],b=0,d=this.children.length;b<d;b++)a.push(this.getChild(b).getName());return a},removeAttribute:function(a,b){this.namespace=b||"";for(var d=0,r=this.attributes.length;d<r;d++)if(this.attributes[d].getName()===a&&this.attributes[d].getNamespace()===this.namespace){this.attributes.splice(d,1);break}},removeChild:function(a){if(a)for(var b=
0,d=this.children.length;b<d;b++)if(this.children[b].equals(a)){this.children.splice(b,1);break}},removeChildAtIndex:function(a){this.children.length>a&&this.children.splice(a,1)},findAttribute:function(a,b){this.namespace=b||"";for(var d=0,r=this.attributes.length;d<r;d++)if(this.attributes[d].getName()===a&&this.attributes[d].getNamespace()===this.namespace)return this.attributes[d];return null},setAttribute:function(){var a;if(3===arguments.length){a=arguments[0].indexOf(":");var d=arguments[0].substring(a+
1);(a=this.findAttribute(d,arguments[1]))?a.setValue(arguments[2]):(a=new b(arguments[0],d,arguments[1],arguments[2],"CDATA"),this.attributes.push(a))}else(a=this.findAttribute(arguments[0]))?a.setValue(arguments[1]):(a=new b(arguments[0],arguments[0],null,arguments[1],"CDATA"),this.attributes.push(a))},setString:function(a,b){this.setAttribute(a,b)},setInt:function(a,b){this.setAttribute(a,b)},setFloat:function(a,b){this.setAttribute(a,b)},setContent:function(a){0<this.children.length&&Processing.debug("Tried to set content for XMLElement with children");
this.content=a},setName:function(){if(1===arguments.length)this.name=arguments[0],this.fullName=arguments[0],this.namespace=null;else{var a=arguments[0].indexOf(":");this.name=null===arguments[1]||0>a?arguments[0]:arguments[0].substring(a+1);this.fullName=arguments[0];this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if("TEXT"===this.type)return this.content;
if("CDATA"===this.type)return this.cdata;var a=this.fullName,b="<"+a,d;for(d=0;d<this.attributes.length;d++)var r=this.attributes[d],b=b+(" "+r.getName()+'="'+r.getValue()+'"');if(0===this.children.length)b=""===this.content?b+"/>":b+(">"+this.content+"</"+a+">");else{b+=">";for(d=0;d<this.children.length;d++)b+=this.children[d].toString();b+="</"+a+">"}return b}};d.parse=function(a){var b=new d;b.parse(a);return b};return d}},{}],20:[function(D,x,Q){x.exports={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",
aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",
darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",
hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",
linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",
palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",
tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},{}],21:[function(D,x,Q){x.exports=function(k,h,m){return function(n,a){n.__contains=function(b,d){return"string"!==typeof b?b.contains.apply(b,a(arguments)):null!==b&&null!==d&&"string"===typeof d&&-1<b.indexOf(d)};n.__replaceAll=function(b,d,f){return"string"!==typeof b?b.replaceAll.apply(b,a(arguments)):
b.replace(RegExp(d,"g"),f)};n.__replaceFirst=function(b,d,f){return"string"!==typeof b?b.replaceFirst.apply(b,a(arguments)):b.replace(RegExp(d,""),f)};n.__replace=function(b,d,f){if("string"!==typeof b)return b.replace.apply(b,a(arguments));if(d instanceof RegExp)return b.replace(d,f);"string"!==typeof d&&(d=d.toString());if(""===d)return b;var h=b.indexOf(d);if(0>h)return b;var k=0,r="";do r+=b.substring(k,h)+f,k=h+d.length;while(0<=(h=b.indexOf(d,k)));return r+b.substring(k)};n.__equals=function(b,
d){return b.equals instanceof Function?b.equals.apply(b,a(arguments)):h(b,d)};n.__equalsIgnoreCase=function(b,d){return"string"!==typeof b?b.equalsIgnoreCase.apply(b,a(arguments)):b.toLowerCase()===d.toLowerCase()};n.__toCharArray=function(b){if("string"!==typeof b)return b.toCharArray.apply(b,a(arguments));for(var d=[],f=0,h=b.length;f<h;++f)d[f]=new Char(b.charAt(f));return d};n.__split=function(b,d,f){if("string"!==typeof b)return b.split.apply(b,a(arguments));var h=RegExp(d);if(f===m||1>f)return b.split(h);
for(var k=[],r=b,c;-1!==(c=r.search(h))&&k.length<f-1;){var n=h.exec(r).toString();k.push(r.substring(0,c));r=r.substring(c+n.length)}-1===c&&""===r||k.push(r);return k};n.__codePointAt=function(a,d){var f=a.charCodeAt(d),h;return 55296<=f&&56319>=f?(h=a.charCodeAt(d+1),1024*(f-55296)+(h-56320)+65536):f};n.__matches=function(a,d){return RegExp(d).test(a)};n.__startsWith=function(b,d,f){if("string"!==typeof b)return b.startsWith.apply(b,a(arguments));f=f||0;return 0>f||f>b.length?!1:""===d||d===b?
!0:b.indexOf(d)===f};n.__endsWith=function(b,d){if("string"!==typeof b)return b.endsWith.apply(b,a(arguments));var f=d?d.length:0;return""===d||d===b?!0:b.indexOf(d)===b.length-f};n.__hashCode=function(b){return b.hashCode instanceof Function?b.hashCode.apply(b,a(arguments)):k(b)};n.__printStackTrace=function(a){n.println("Exception: "+a.toString())}}}},{}],22:[function(D,x,Q){x.exports=function(k,h){function m(a,b){var c=a||362436069,d=b||521288629,f=function(){c=36969*(c&65535)+(c>>>16)&4294967295;
d=18E3*(d&65535)+(d>>>16)&4294967295;return((c&65535)<<16|d&65535)&4294967295};this.doubleGenerator=function(){var a=f()/4294967296;return 0>a?1+a:a};this.intGenerator=f}function n(a){function b(a,c,d,f){a&=15;var r=8>a?c:d;c=4>a?d:12===a||14===a?c:f;return(0===(a&1)?r:-r)+(0===(a&2)?c:-c)}function c(a,b,c){b=0===(a&1)?b:c;return 0===(a&2)?-b:b}function d(a,b,c){return b+a*(c-b)}a=a!==h?new m(a):m.createRandomized();var f,k,l=new Uint8Array(512);for(f=0;256>f;++f)l[f]=f;for(f=0;256>f;++f){var n=l[k=
a.intGenerator()&255];l[k]=l[f];l[f]=n}for(f=0;256>f;++f)l[f+256]=l[f];this.noise3d=function(a,c,f){var h=Math.floor(a)&255,k=Math.floor(c)&255,p=Math.floor(f)&255;a-=Math.floor(a);c-=Math.floor(c);f-=Math.floor(f);var m=(3-2*a)*a*a,n=(3-2*c)*c*c,G=l[h]+k,ca=l[G]+p,G=l[G+1]+p,k=l[h+1]+k,h=l[k]+p,p=l[k+1]+p;return d((3-2*f)*f*f,d(n,d(m,b(l[ca],a,c,f),b(l[h],a-1,c,f)),d(m,b(l[G],a,c-1,f),b(l[p],a-1,c-1,f))),d(n,d(m,b(l[ca+1],a,c,f-1),b(l[h+1],a-1,c,f-1)),d(m,b(l[G+1],a,c-1,f-1),b(l[p+1],a-1,c-1,f-1))))};
this.noise2d=function(a,b){var f=Math.floor(a)&255,r=Math.floor(b)&255;a-=Math.floor(a);b-=Math.floor(b);var h=(3-2*a)*a*a,k=l[f]+r,f=l[f+1]+r;return d((3-2*b)*b*b,d(h,c(l[k],a,b),c(l[f],a-1,b)),d(h,c(l[k+1],a,b-1),c(l[f+1],a-1,b-1)))};this.noise1d=function(a){var b=Math.floor(a)&255;a-=Math.floor(a);return d((3-2*a)*a*a,0===(l[b]&1)?-a:a,0===(l[b+1]&1)?-(a-1):a-1)}}var a=function(){return Math.random()};k.abs=Math.abs;k.ceil=Math.ceil;k.exp=Math.exp;k.floor=Math.floor;k.log=Math.log;k.pow=Math.pow;
k.round=Math.round;k.sqrt=Math.sqrt;k.acos=Math.acos;k.asin=Math.asin;k.atan=Math.atan;k.atan2=Math.atan2;k.cos=Math.cos;k.sin=Math.sin;k.tan=Math.tan;k.constrain=function(a,b,c){return a>c?c:a<b?b:a};k.dist=function(){var a,b,c;if(4===arguments.length)return a=arguments[0]-arguments[2],b=arguments[1]-arguments[3],Math.sqrt(a*a+b*b);if(6===arguments.length)return a=arguments[0]-arguments[3],b=arguments[1]-arguments[4],c=arguments[2]-arguments[5],Math.sqrt(a*a+b*b+c*c)};k.lerp=function(a,b,c){return(b-
a)*c+a};k.mag=function(a,b,c){return c?Math.sqrt(a*a+b*b+c*c):Math.sqrt(a*a+b*b)};k.map=function(a,b,c,d,f){return d+(f-d)*((a-b)/(c-b))};k.max=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[1]:arguments[0];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b<a[d]&&(b=a[d]);return b};k.min=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[0]:
arguments[1];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b>a[d]&&(b=a[d]);return b};k.norm=function(a,b,c){return(a-b)/(c-b)};k.sq=function(a){return a*a};k.degrees=function(a){return 180*a/Math.PI};k.random=function(){if(0===arguments.length)return a();if(1===arguments.length)return a()*arguments[0];var b=arguments[0],d=arguments[1];return a()*(d-b)+b};m.createRandomized=function(){var a=
new Date;return new m(a/6E4&4294967295,a&4294967295)};k.randomSeed=function(b){a=(new m(b)).doubleGenerator;this.haveNextNextGaussian=!1};k.randomGaussian=function(){if(this.haveNextNextGaussian)return this.haveNextNextGaussian=!1,this.nextNextGaussian;var b,d,c;do b=2*a()-1,d=2*a()-1,c=b*b+d*d;while(1<=c||0===c);c=Math.sqrt(-2*Math.log(c)/c);this.nextNextGaussian=d*c;this.haveNextNextGaussian=!0;return b*c};var b=h,d=4,f=0.5,l=h;k.noise=function(a,k,c){b===h&&(b=new n(l));for(var m=b,ca=1,G=1,A=
0,x=0;x<d;++x){ca*=f;switch(arguments.length){case 1:A+=ca*(1+m.noise1d(G*a))/2;break;case 2:A+=ca*(1+m.noise2d(G*a,G*k))/2;break;case 3:A+=ca*(1+m.noise3d(G*a,G*k,G*c))/2}G*=2}return A};k.noiseDetail=function(a,b){d=a;b!==h&&(f=b)};k.noiseSeed=function(a){l=a;b=h}}},{}],23:[function(D,x,Q){x.exports=function(k){var h={trim:function(h){if(h instanceof Array){for(var k=[],a=0;a<h.length;a++)k.push(h[a].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""));return k}return h.replace(/^\s*/,"").replace(/\s*$/,
"").replace(/\r*$/,"")},radians:function(h){return h/180*Math.PI},nfCoreScalar:function(h,n,a,b,d,f){n=0>h?a:n;a=0===d;d=d===k||0>d?0:d;h=Math.abs(h);if(a)for(d=1,h*=10;1E-6<Math.abs(Math.round(h)-h)&&7>d;)++d,h*=10;else 0!==d&&(h*=Math.pow(10,d));a=2*h;Math.floor(h)===h?a=h:Math.floor(a)===a?(h=Math.floor(h),a=h+h%2):a=Math.round(h);h="";for(b+=d;0<b||0<a;)b--,h=""+a%10+h,a=Math.floor(a/10);if(f!==k)for(b=h.length-3-d;0<b;)h=h.substring(0,b)+f+h.substring(b),b-=3;return 0<d?n+h.substring(0,h.length-
d)+"."+h.substring(h.length-d,h.length):n+h},nfCore:function(k,n,a,b,d,f){if(k instanceof Array){for(var l=[],p=0,r=k.length;p<r;p++)l.push(h.nfCoreScalar(k[p],n,a,b,d,f));return l}return h.nfCoreScalar(k,n,a,b,d,f)},nf:function(k,n,a){return h.nfCore(k,"","-",n,a)},nfs:function(k,n,a){return h.nfCore(k," ","-",n,a)},nfp:function(k,n,a){return h.nfCore(k,"+","-",n,a)},nfc:function(k,n){return h.nfCore(k,"","-",0,n,",")},withCommonFunctions:function(k){"trim radians nf nfs nfp nfc".split(" ").forEach(function(n){k[n]=
h[n]})}};return h}()},{}],24:[function(D,x,Q){x.exports=function(k,h,m,n,a,b){function d(a,b){var d=a,f=0,h=0;k.pmouseX=k.mouseX;k.pmouseY=k.mouseY;if(d.offsetParent){do f+=d.offsetLeft,h+=d.offsetTop;while(d=d.offsetParent)}d=a;do f-=d.scrollLeft||0,h-=d.scrollTop||0;while(d=d.parentNode);var l,p,m,x;n.defaultView&&n.defaultView.getComputedStyle&&(l=parseInt(n.defaultView.getComputedStyle(a,null).paddingLeft,10)||0,p=parseInt(n.defaultView.getComputedStyle(a,null).paddingTop,10)||0,m=parseInt(n.defaultView.getComputedStyle(a,
null).borderLeftWidth,10)||0,x=parseInt(n.defaultView.getComputedStyle(a,null).borderTopWidth,10)||0);f=f+l+m;h=h+p+x;f+=window.pageXOffset;h+=window.pageYOffset;return{X:f,Y:h}}function f(a,b){var f=d(a,b);k.mouseX=b.pageX-f.X;k.mouseY=b.pageY-f.Y}function l(a){var b=d(a.changedTouches[0].target,a.changedTouches[0]),f;for(f=0;f<a.touches.length;f++){var h=a.touches[f];h.offsetX=h.pageX-b.X;h.offsetY=h.pageY-b.Y}for(f=0;f<a.targetTouches.length;f++)h=a.targetTouches[f],h.offsetX=h.pageX-b.X,h.offsetY=
h.pageY-b.Y;for(f=0;f<a.changedTouches.length;f++)h=a.changedTouches[f],h.offsetX=h.pageX-b.X,h.offsetY=h.pageY-b.Y;return a}m(h,"touchstart",function(d){h.setAttribute("style","-webkit-user-select: none");h.setAttribute("onclick","void(0)");h.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)");for(var c=0,p=eventHandlers.length;c<p;c++){var n=eventHandlers[c].type;"mouseout"!==n&&"mousemove"!==n&&"mousedown"!==n&&"mouseup"!==n&&"DOMMouseScroll"!==n&&"mousewheel"!==n&&"touchstart"!==
n||detachEventHandler(eventHandlers[c])}k.touchStart!==b||k.touchMove!==b||k.touchEnd!==b||k.touchCancel!==b?(m(h,"touchstart",function(a){k.touchStart!==b&&(a=l(a),k.touchStart(a))}),m(h,"touchmove",function(a){k.touchMove!==b&&(a.preventDefault(),a=l(a),k.touchMove(a))}),m(h,"touchend",function(a){k.touchEnd!==b&&(a=l(a),k.touchEnd(a))}),m(h,"touchcancel",function(a){k.touchCancel!==b&&(a=l(a),k.touchCancel(a))})):(m(h,"touchstart",function(b){f(h,b.touches[0]);k.__mousePressed=!0;k.mouseDragging=
!1;k.mouseButton=a.LEFT;"function"===typeof k.mousePressed&&k.mousePressed()}),m(h,"touchmove",function(a){a.preventDefault();f(h,a.touches[0]);"function"!==typeof k.mouseMoved||k.__mousePressed||k.mouseMoved();"function"===typeof k.mouseDragged&&k.__mousePressed&&(k.mouseDragged(),k.mouseDragging=!0)}),m(h,"touchend",function(a){k.__mousePressed=!1;"function"!==typeof k.mouseClicked||k.mouseDragging||k.mouseClicked();"function"===typeof k.mouseReleased&&k.mouseReleased()}));h.dispatchEvent(d)});
(function(){var a=!0,b=function(a){a.preventDefault();a.stopPropagation()};k.disableContextMenu=function(){a&&(m(h,"contextmenu",b),a=!1)};k.enableContextMenu=function(){a||(detachEventHandler({elem:h,type:"contextmenu",fn:b}),a=!0)}})();m(h,"mousemove",function(a){f(h,a);"function"!==typeof k.mouseMoved||k.__mousePressed||k.mouseMoved();"function"===typeof k.mouseDragged&&k.__mousePressed&&(k.mouseDragged(),k.mouseDragging=!0)});m(h,"mouseout",function(a){"function"===typeof k.mouseOut&&k.mouseOut()});
m(h,"mouseover",function(a){f(h,a);"function"===typeof k.mouseOver&&k.mouseOver()});h.onmousedown=function(){h.focus();return!1};m(h,"mousedown",function(b){k.__mousePressed=!0;k.mouseDragging=!1;switch(b.which){case 1:k.mouseButton=a.LEFT;break;case 2:k.mouseButton=a.CENTER;break;case 3:k.mouseButton=a.RIGHT}"function"===typeof k.mousePressed&&k.mousePressed()});m(h,"mouseup",function(a){k.__mousePressed=!1;"function"!==typeof k.mouseClicked||k.mouseDragging||k.mouseClicked();"function"===typeof k.mouseReleased&&
k.mouseReleased()});var p=function(a){var b=0;a.wheelDelta?(b=a.wheelDelta/120,window.opera&&(b=-b)):a.detail&&(b=-a.detail/3);(k.mouseScroll=b)&&"function"===typeof k.mouseScrolled&&k.mouseScrolled()};m(n,"DOMMouseScroll",p);m(n,"mousewheel",p)}},{}],25:[function(D,x,Q){x.exports=function(k,h){function m(){var a="abs acos alpha ambient ambientLight append applyMatrix arc arrayCopy asin atan atan2 background beginCamera beginDraw beginShape bezier bezierDetail bezierPoint bezierTangent bezierVertex binary blend blendColor blit_resize blue box breakShape brightness camera ceil Character color colorMode concat constrain copy cos createFont createGraphics createImage cursor curve curveDetail curvePoint curveTangent curveTightness curveVertex day degrees directionalLight disableContextMenu dist draw ellipse ellipseMode emissive enableContextMenu endCamera endDraw endShape exit exp expand externals fill filter floor focused frameCount frameRate frustum get glyphLook glyphTable green height hex hint hour hue image imageMode intersect join key keyCode keyPressed keyReleased keyTyped lerp lerpColor lightFalloff lights lightSpecular line link loadBytes loadFont loadGlyphs loadImage loadPixels loadShape loadXML loadStrings log loop mag map match matchAll max millis min minute mix modelX modelY modelZ modes month mouseButton mouseClicked mouseDragged mouseMoved mouseOut mouseOver mousePressed mouseReleased mouseScroll mouseScrolled mouseX mouseY name nf nfc nfp nfs noCursor noFill noise noiseDetail noiseSeed noLights noLoop norm normal noSmooth noStroke noTint ortho param parseBoolean parseByte parseChar parseFloat parseInt peg perspective PImage pixels PMatrix2D PMatrix3D PMatrixStack pmouseX pmouseY point pointLight popMatrix popStyle pow print printCamera println printMatrix printProjection PShape PShapeSVG pushMatrix pushStyle quad radians random randomGaussian randomSeed rect rectMode red redraw requestImage resetMatrix reverse rotate rotateX rotateY rotateZ round saturation save saveFrame saveStrings scale screenX screenY screenZ second set setup shape shapeMode shared shearX shearY shininess shorten sin size smooth sort specular sphere sphereDetail splice split splitTokens spotLight sq sqrt status str stroke strokeCap strokeJoin strokeWeight subset tan text textAlign textAscent textDescent textFont textLeading textMode textSize texture textureMode textWidth tint toImageData touchCancel touchEnd touchMove touchStart translate transform triangle trim unbinary unhex updatePixels use3DContext vertex width XMLElement XML year __contains __equals __equalsIgnoreCase __frameRate __hashCode __int_cast __instanceof __keyPressed __mousePressed __printStackTrace __replace __replaceAll __replaceFirst __toCharArray __split __codePointAt __startsWith __endsWith __matches".split(" ");
f&&Object.keys(f).forEach(function(b){a.push(b)});var b={},d,h;d=0;for(h=a.length;d<h;++d)b[a[d]]=null;for(var l in k.lib)if(k.lib.hasOwnProperty(l)&&k.lib[l].exports){var p=k.lib[l].exports;d=0;for(h=p.length;d<h;++d)b[p[d]]=null}return b}function n(a){function c(a){var b=/^\s*/.exec(a);if(b[0].length===a.length)a={left:b[0],middle:"",right:""};else{var c=/\s*$/.exec(a);a={left:b[0],middle:a.substring(b[0].length,c.index),right:c[0]}}a.untrim=function(a){return this.left+a+this.right};return a}function f(a){return a.replace(/^\s+/,
"").replace(/\s+$/,"")}function h(a,b){for(var c=0,e=b.length;c<e;++c)a[b[c]]=null;return a}function k(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function l(a){return a.substring(2,a.length-1)}function n(a,b){var c=N.length;N.push(a);return'"'+b+c+'"'}function v(a){a=a.replace(qa,function(a){return n(a,"E")});a=a.replace(la,function(a){return n(a,"D")});return a=a.replace(jb,function(a){return n(a,"H")})}function x(a,b){return a.replace(Eb,function(a,c,e,d,f,tb){return e!==b?a:n(a,
"G")})}function q(a){this.name=a}function D(a,b){this.params=a;this.methodArgsParam=b}function M(a){var b=f(a.substring(1,a.length-1));a=[];var c=null;if(""!==b)for(var b=b.split(","),e=0;e<b.length;++e){var d=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(b[e]);if(e===b.length-1&&0<=b[e].indexOf("...")){c=new q(d[1]);break}a.push(new q(d[1]))}return new D(a,c)}function Q(a){function b(a,e,f,tb){a=N[tb];d=!0;a=c(a.substring(1,a.length-1));return"__"+f+(""===a.middle?n("("+e.replace(/\.\s*$/,
"")+")","B"):n("("+e.replace(/\.\s*$/,"")+","+a.middle+")","B"))}function e(a,b,c){d=!0;return"__instanceof"+n("("+b+", "+c+")","B")}a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(a,b,c){return c});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(a,b,c){return n(a,"F")});a=a.replace(jb,function(a){return n(a,"H")});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,
function(a,b,c){a=c.replace(/"C(\d+)"/g,function(a,b){return N[b]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ");a="{"+a.substring(1,a.length-1)+"}";b="('"+b+"', "+n(a,"A")+")";return"$p.createJavaArray"+n(b,"B")});a=a.replace(/(\.\s*length)\s*"B\d+"/g,"$1");a=a.replace(/#([0-9A-Fa-f]{6})\b/g,function(a,b){return"0xFF"+b});a=a.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(a,b,c){b=N[b];if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(b))return a;
if(/^\(\s*int\s*\)$/.test(b))return"(int)"+c;b=b.split(/"C(\d+)"/g);return 1<b.length&&!/^\[\s*\]$/.test(N[b[1]])?a:""+c});a=a.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(a,b){var e=c(b);return e.untrim("__int_cast("+e.middle+")")});a=a.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1");a=a.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(a,b,c){return b===c?a:""===c?"0"+b:b});a=a.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1");a=
a.replace(/([^\s])%([^=\s])/g,"$1 % $2");a=a.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1");a=a.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(a,b){return"parse"+b.substring(0,1).toUpperCase()+b.substring(1)+'"B'});a=a.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(a,b,c,e,d,f){return c?(a=N[e],d?"pixels.setPixel"+n("("+a.substring(1,a.length-1)+","+f+")","B"):"pixels.getPixel"+n("("+a.substring(1,a.length-1)+")","B")):b?"pixels.getLength"+
n("()","B"):d?"pixels.set"+n("("+f+")","B"):"pixels.toArray"+n("()","B")});var d;do d=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g,b);while(d);do d=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,
e);while(d);return a=a.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")}function u(a,b){this.baseInterfaceName=a;this.body=b;b.owner=this}function nd(a){var b=RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(a);a=ja;var c="class"+ ++ab;ja=c;var e=b[1]+"$"+c,b=new u(e,ea(N[b[2]],e,"","implements "+b[1]));b.classId=c;b.scopeId=a;X[c]=b;ja=a;return b}function Ia(a,b,c){this.name=a;this.params=b;this.body=c}function T(a){a=RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(a);
return new Ia("function"!==a[1]?a[1]:null,M(N[a[2]]),ra(N[a[3]]))}function Y(a){this.members=a}function U(a){a=a.split(",");for(var b=0;b<a.length;++b){var c=a[b].indexOf(":");a[b]=0>c?{value:ma(a[b])}:{label:f(a[b].substring(0,c)),value:ma(f(a[b].substring(c+1)))}}return new Y(a)}function Z(a){if("("===a.charAt(0)||"["===a.charAt(0))return a.charAt(0)+Z(a.substring(1,a.length-1))+a.charAt(a.length-1);if("{"===a.charAt(0))return/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(a)?"{"+n(a.substring(1,a.length-
1),"I")+"}":"["+Z(a.substring(1,a.length-1))+"]";a=c(a);var b=Q(a.middle),b=b.replace(/"[ABC](\d+)"/g,function(a,b){return Z(N[b])});return a.untrim(b)}function sa(a){return a.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(a,b,c,e,d,f){return b?a:C({name:c,member:d,callSign:!!f})+(e===p?"":e)})}function ta(a,b){this.expr=a;this.transforms=b}function $b(a,b,c){this.name=a;this.value=b;this.isDefault=c}function bb(a,b){var c=a.indexOf("="),e,d;0>c?(e=a,c=
b,d=!0):(e=a.substring(0,c),c=ma(a.substring(c+1)),d=!1);return new $b(f(e.replace(/(\s*"C\d+")+/g,"")),c,d)}function Sa(a){return"int"===a||"float"===a?"0":"boolean"===a?"false":"color"===a?"0x00000000":"null"}function cb(a,b){this.definitions=a;this.varType=b}function Fb(a){this.expression=a}function db(a){if(Gb.test(a)){var b=ub.exec(a);a=a.substring(b[0].length).split(",");for(var c=Sa(b[2]),e=0;e<a.length;++e)a[e]=bb(a[e],c);return new cb(a,b[2])}return new Fb(ma(a))}function Hb(a,b,c){this.initStatement=
a;this.condition=b;this.step=c}function Ib(a,b){this.initStatement=a;this.container=b}function wa(a,b){this.initStatement=a;this.container=b}function za(a){if(/\bin\b/.test(a))return a=a.substring(1,a.length-1).split(/\bin\b/g),new Ib(db(f(a[0])),ma(a[1]));if(0<=a.indexOf(":")&&0>a.indexOf(";"))return a=a.substring(1,a.length-1).split(":"),new wa(db(f(a[0])),ma(a[1]));a=a.substring(1,a.length-1).split(";");return new Hb(db(f(a[0])),ma(a[1]),ma(a[2]))}function Ta(a){a.sort(function(a,b){return b.weight-
a.weight})}function Ja(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Jb(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Kb(a){var b=qa.exec(a);qa.lastIndex=0;var c=0<=b[1].indexOf("static"),e=N[l(b[6])];a=ja;var d="class"+ ++ab;ja=d;b="interface"===b[2]?new Ja(b[3],eb(e,b[3],b[4]),c):new Jb(b[3],ea(e,b[3],b[4],b[5]),c);b.classId=d;b.scopeId=a;X[d]=b;ja=a;return b}function Lb(a,b,c,e){this.name=a;this.params=b;this.body=c;this.isStatic=e}function fb(a){a=
la.exec(a);la.lastIndex=0;var b=0<=a[1].indexOf("static"),c=";"!==a[6]?N[l(a[6])]:"{}";return new Lb(a[3],M(N[l(a[4])]),ra(c),b)}function Mb(a,b,c){this.definitions=a;this.fieldType=b;this.isStatic=c}function Ua(a){var b=ub.exec(a),c=0<=b[1].indexOf("static");a=a.substring(b[0].length).split(/,\s*/g);for(var e=Sa(b[2]),d=0;d<a.length;++d)a[d]=bb(a[d],e);return new Mb(a,b[2],c)}function Nb(a,b){this.params=a;this.body=b}function ac(a){a=RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(a);var b=M(N[a[1]]);return new Nb(b,
ra(N[a[2]]))}function Ka(a,b,c,e,d,f){this.name=a;this.interfacesNames=b;this.methodsNames=c;this.fields=e;this.innerClasses=d;this.misc=f;a=0;for(b=e.length;a<b;++a)e[a].owner=this}function H(a,b,c,e,d,f,g,h,k){this.name=a;this.baseClassName=b;this.interfacesNames=c;this.functions=e;this.methods=d;this.fields=f;this.cstrs=g;this.innerClasses=h;this.misc=k;a=0;for(b=f.length;a<b;++a)f[a].owner=this}function lb(a,b){this.name=a;this.body=b;b.owner=this}function mb(a,b){this.name=a;this.body=b;b.owner=
this}function Ob(a){var b=qa.exec(a);qa.lastIndex=0;var c=N[l(b[6])];a=ja;var e="class"+ ++ab;ja=e;b="interface"===b[2]?new lb(b[3],eb(c,b[3],b[4])):new mb(b[3],ea(c,b[3],b[4],b[5]));b.classId=e;b.scopeId=a;X[e]=b;ja=a;return b}function vb(a,b,c){this.name=a;this.params=b;this.body=c}function rc(a){a=la.exec(a);la.lastIndex=0;return new vb(a[3],M(N[l(a[4])]),ra(N[l(a[6])]))}function Pb(a,b){this.argument=a;this.misc=b}function bc(a,b){this.argument=a;this.misc=b}function S(a,b,c){this.name=a;this.argument=
b;this.misc=c}function Qb(a){this.expr=a}function wb(a){this.label=a}function e(a){for(var b=[],c=0,e=a.length;c<e;++c){var d=a[c];d instanceof cb?b=b.concat(d.getNames()):d instanceof Pb&&d.argument.initStatement instanceof cb?b=b.concat(d.argument.initStatement.getNames()):(d instanceof Ja||d instanceof Jb||d instanceof lb||d instanceof mb||d instanceof vb||d instanceof Ia)&&b.push(d.name)}return h({},b)}function g(a){this.statements=a}function da(a){this.statements=a}var ha=m(),R=[];a=a.replace(/\r\n?|\n\r/g,
"\n").replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(a,b,c,e,d,f,g,h){return b||c?(b=R.length,R.push(a),"'"+b+"'"):e?(b=R.length,R.push(f),d+"'"+b+"'"):""!==h?" ":"\n"});a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return"__x005F_x"+b});a=a.replace(/\$/g,"__x0024");a=a.replace(/return\s*[\n\r]+/g,"return ");var ka,La=function(a,b,c,e){if(b||e)return a;ka=!0;return""};do ka=
!1,a=a.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,La);while(ka);var N=function(a){var b=[];a=a.split(/([\{\[\(\)\]\}])/);for(var c=a[0],e=[],d=1;d<a.length;d+=2){var f=a[d];if("["===f||"{"===f||"("===f)e.push(c),c=
f;else if("]"===f||"}"===f||")"===f){var g="}"===f?"A":")"===f?"B":"C",h=b.length;b.push(c+f);c=e.pop()+'"'+g+(h+1)+'"'}c+=a[d+1]}b.unshift(c);return b}(a),C,X={},ja,ab=0,ea,eb,ra,Da,ma,qa=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,
la=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g,Gb=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,
Eb=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g,ub=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/,jb=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;q.prototype.toString=function(){return this.name};
D.prototype.getNames=function(){for(var a=[],b=0,c=this.params.length;b<c;++b)a.push(this.params[b].name);return a};D.prototype.prependMethodArgs=function(a){return this.methodArgsParam?"{\nvar "+this.methodArgsParam.name+" = Array.prototype.slice.call(arguments, "+this.params.length+");\n"+a.substring(1):a};D.prototype.toString=function(){if(0===this.params.length)return"()";for(var a="(",b=0,c=this.params.length;b<c;++b)a+=this.params[b]+", ";return a.substring(0,a.length-2)+")"};u.prototype.toString=
function(){return"new ("+this.body+")"};Ia.prototype.toString=function(){var a=C,b=h({"this":null},this.params.getNames());C=function(c){return b.hasOwnProperty(c.name)?c.name:a(c)};var c="function";this.name&&(c+=" "+this.name);var e=this.params.prependMethodArgs(this.body.toString()),c=c+(this.params+" "+e);C=a;return c};Y.prototype.toString=function(){var a=C;C=function(b){return"this"===b.name?"this":a(b)};for(var b="",c=0,e=this.members.length;c<e;++c)this.members[c].label&&(b+=this.members[c].label+
": "),b+=this.members[c].value.toString()+", ";C=a;return b.substring(0,b.length-2)};ta.prototype.toString=function(){var a=this.transforms;return sa(this.expr).replace(/"!(\d+)"/g,function(b,c){return a[c].toString()})};ma=function(a){var b=[];a=Z(a);a=a.replace(/"H(\d+)"/g,function(a,c){b.push(T(N[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"F(\d+)"/g,function(a,c){b.push(nd(N[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"I(\d+)"/g,function(a,c){b.push(U(N[c]));return'"!'+(b.length-1)+'"'});
return new ta(a,b)};$b.prototype.toString=function(){return this.name+" = "+this.value};cb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};cb.prototype.toString=function(){return"var "+this.definitions.join(",")};Fb.prototype.toString=function(){return this.expression.toString()};Hb.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"};Ib.prototype.toString=function(){var a=this.initStatement.toString();
0<=a.indexOf("=")&&(a=a.substring(0,a.indexOf("=")));return"("+a+" in "+this.container+")"};wa.iteratorId=0;wa.prototype.toString=function(){var a=this.initStatement.toString(),b="$it"+wa.iteratorId++,a=a.replace(/^\s*var\s*/,"").split("=")[0];return"("+("var "+b+" = new $p.ObjectIterator("+this.container+"), "+a+" = void(0)")+"; "+(b+".hasNext() && (("+a+" = "+b+".next()) || true)")+";)"};Ja.prototype.toString=function(){return""+this.body};Jb.prototype.toString=function(){return""+this.body};Lb.prototype.toString=
function(){var a=h({},this.params.getNames()),b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.methodId+this.params+" "+c+"\n";C=b;return c};Mb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};Mb.prototype.toString=function(){var a=C({name:"[this]"});if(this.isStatic){for(var b=this.owner.name,c=[],e=0,d=this.definitions.length;e<d;++e){var f=
this.definitions[e],g=f.name,h=b+"."+g;c.push("if("+h+" === void(0)) {\n "+h+" = "+f.value+"; }\n$p.defineProperty("+a+", '"+g+"', { get: function(){return "+h+";}, set: function(val){"+h+" = val;} });\n")}return c.join("")}return a+"."+this.definitions.join("; "+a+".")};Nb.prototype.toString=function(){var a=h({},this.params.getNames()),b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c="function $constr_"+this.params.params.length+this.params.toString(),e=this.params.prependMethodArgs(this.body.toString());
/\$(superCstr|constr)\b/.test(e)||(e="{\n$superCstr();\n"+e.substring(1));C=b;return c+e+"\n"};Ka.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var e,d,f,g;e=0;for(f=this.fields.length;e<f;++e){var h=this.fields[e].getNames();d=0;for(g=h.length;d<g;++d)a[h[d]]=this.fields[e]}e=0;for(f=this.methodsNames.length;e<f;++e)b[this.methodsNames[e]]=!0;e=0;for(f=this.innerClasses.length;e<f;++e)a=this.innerClasses[e],c[a.name]=a};Ka.prototype.toString=function(){for(var a=
this.owner,b=0;a;)++b,a=a.scope;var a=this.name,c=b="";this.getMembers({},{},{});var e,d;if(this.owner.interfaces){var f=[],g;e=0;for(d=this.interfacesNames.length;e<d;++e)this.owner.interfaces[e]&&(g=C({name:this.interfacesNames[e]}),f.push(g),b+="$p.extendInterfaceMembers("+a+", "+g+");\n");c+=a+".$interfaces = ["+f.join(", ")+"];\n"}c=c+(a+".$isInterface = true;\n")+(a+".$methods = ['"+this.methodsNames.join("', '")+"'];\n");Ta(this.innerClasses);e=0;for(d=this.innerClasses.length;e<d;++e)f=this.innerClasses[e],
f.isStatic&&(b+=a+"."+f.name+" = "+f+";\n");e=0;for(d=this.fields.length;e<d;++e)f=this.fields[e],f.isStatic&&(b+=a+"."+f.definitions.join(";\n"+a+".")+";\n");return"(function() {\nfunction "+a+"() { throw 'Unable to create the interface'; }\n"+b+c+"return "+a+";\n})()"};eb=function(a,b,e){a=a.substring(1,a.length-1);a=v(a);a=x(a,b);var d=[],f=[];a=a.replace(/"([DE])(\d+)"/g,function(a,b,c){"D"===b?d.push(c):"E"===b&&f.push(c);return""});a=a.split(/;(?:\s*;)*/g);var g,h;e!==p&&(g=e.replace(/^\s*extends\s+(.+?)\s*$/g,
"$1").split(/\s*,\s*/g));e=0;for(h=d.length;e<h;++e){var k=fb(N[d[e]]);d[e]=k.name}e=0;for(h=a.length-1;e<h;++e)k=c(a[e]),a[e]=Ua(k.middle);k=a.pop();e=0;for(h=f.length;e<h;++e)f[e]=Kb(N[f[e]]);return new Ka(b,g,d,a,f,{tail:k})};H.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var e,d,f,g;e=0;for(f=this.fields.length;e<f;++e){var h=this.fields[e].getNames();d=0;for(g=h.length;d<g;++d)a[h[d]]=this.fields[e]}e=0;for(f=this.methods.length;e<f;++e)a=this.methods[e],
b[a.name]=a;e=0;for(f=this.innerClasses.length;e<f;++e)b=this.innerClasses[e],c[b.name]=b};H.prototype.toString=function(){var a="$this_"+function(a){for(var b=0;a;)++b,a=a.scope;return b}(this.owner),b=this.name,c="var "+a+" = this;\n",e="",d="",g={},h={},k={};this.getMembers(g,h,k);var l=C;C=function(c){var e=c.name;return"this"===e?c.callSign||!c.member?a+".$self":a:g.hasOwnProperty(e)?g[e].isStatic?b+"."+e:a+"."+e:k.hasOwnProperty(e)?a+"."+e:h.hasOwnProperty(e)?h[e].isStatic?b+"."+e:a+".$self."+
e:l(c)};var p;this.baseClassName?(p=l({name:this.baseClassName}),c=c+("var $super = { $upcast: "+a+" };\n")+("function $superCstr(){"+p+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"),d+=b+".$base = "+p+";\n"):c+="function $superCstr(){$p.extendClassChain("+a+")}\n";this.owner.base&&(e+="$p.extendStaticMembers("+b+", "+p+");\n");var r,n,m;if(this.owner.interfaces){n=[];p=0;for(r=this.interfacesNames.length;p<r;++p)this.owner.interfaces[p]&&(m=l({name:this.interfacesNames[p]}),
n.push(m),e+="$p.extendInterfaceMembers("+b+", "+m+");\n");d+=b+".$interfaces = ["+n.join(", ")+"];\n"}0<this.functions.length&&(c+=this.functions.join("\n")+"\n");Ta(this.innerClasses);p=0;for(r=this.innerClasses.length;p<r;++p)n=this.innerClasses[p],n.isStatic?(e+=b+"."+n.name+" = "+n+";\n",c+=a+"."+n.name+" = "+b+"."+n.name+";\n"):c+=a+"."+n.name+" = "+n+";\n";p=0;for(r=this.fields.length;p<r;++p){var v=this.fields[p];if(v.isStatic)for(e+=b+"."+v.definitions.join(";\n"+b+".")+";\n",n=0,m=v.definitions.length;n<
m;++n)var u=v.definitions[n].name,q=b+"."+u,c=c+("$p.defineProperty("+a+", '"+u+"', {get: function(){return "+q+"}, set: function(val){"+q+" = val}});\n");else c+=a+"."+v.definitions.join(";\n"+a+".")+";\n"}n={};p=0;for(r=this.methods.length;p<r;++p)m=this.methods[p],v=n[m.name],u=m.name+"$"+m.params.params.length,q=!!m.params.methodArgsParam,v?(++v,u+="_"+v):v=1,m.methodId=u,n[m.name]=v,m.isStatic?(e+=m,e+="$p.addMethod("+b+", '"+m.name+"', "+u+", "+q+");\n"):c+=m,c+="$p.addMethod("+a+", '"+m.name+
"', "+u+", "+q+");\n";c+=f(this.misc.tail);0<this.cstrs.length&&(c+=this.cstrs.join("\n")+"\n");c+="function $constr() {\n";n=[];p=0;for(r=this.cstrs.length;p<r;++p)m=this.cstrs[p].params.params.length,n.push("if(arguments.length "+(this.cstrs[p].params.methodArgsParam?">=":"===")+" "+m+") { $constr_"+m+".apply("+a+", arguments); }");0<n.length&&(c+=n.join(" else ")+" else ");c+="$superCstr();\n}\n";c+="$constr.apply(null, arguments);\n";C=l;return"(function() {\nfunction "+b+"() {\n"+c+"}\n"+e+d+
"return "+b+";\n})()"};ea=function(a,b,e,d){a=a.substring(1,a.length-1);a=v(a);a=x(a,b);var f=[],g=[],h=[],k=[];a=a.replace(/"([DEGH])(\d+)"/g,function(a,b,c){"D"===b?f.push(c):"E"===b?g.push(c):"H"===b?k.push(c):h.push(c);return""});a=a.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g);var l,n;e!==p&&(l=e.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1"));d!==p&&(n=d.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g));for(e=0;e<k.length;++e)k[e]=T(N[k[e]]);
for(e=0;e<f.length;++e)f[e]=fb(N[f[e]]);for(e=0;e<a.length-1;++e)d=c(a[e]),a[e]=Ua(d.middle);d=a.pop();for(e=0;e<h.length;++e)h[e]=ac(N[h[e]]);for(e=0;e<g.length;++e)g[e]=Kb(N[g[e]]);return new H(b,l,n,k,f,a,h,g,{tail:d})};lb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};mb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};vb.prototype.toString=function(){var a=h({},this.params.getNames()),
b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.name+this.params+" "+c+"\n$p."+this.name+" = "+this.name+";\n"+this.name+" = "+this.name+".bind($p);";C=b;return c};Pb.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};bc.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};S.prototype.toString=function(){var a=this.misc.prefix;this.argument!==p&&(a+=this.argument.toString());
return a};Qb.prototype.toString=function(){return"case "+this.expr+":"};wb.prototype.toString=function(){return this.label};Da=function(a,b,e){var d=RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g),g=[];a=a.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1");for(var h=0,k,l;null!==(k=d.exec(a));){if(k[1]!==p)l=a.lastIndexOf('"B',d.lastIndex),h=a.substring(h,
l),"for"===k[1]?g.push(new Pb(za(N[k[2]]),{prefix:h})):"catch"===k[1]?g.push(new bc(M(N[k[2]]),{prefix:h})):g.push(new S(k[1],ma(N[k[2]]),{prefix:h}));else if(k[3]!==p)g.push(new S(k[3],p,{prefix:a.substring(h,d.lastIndex)}));else if(k[4]!==p){l=a.substring(h,d.lastIndex-k[4].length);if(0!==f(l).length)continue;g.push(l);h=k[4].charAt(1);k=k[5];"D"===h?g.push(b(N[k])):"E"===h?g.push(e(N[k])):"H"===h?g.push(T(N[k])):g.push(ra(N[k]))}else if(k[6]!==p)g.push(new Qb(ma(f(k[7]))));else if(k[8]!==p){l=
a.substring(h,d.lastIndex-k[8].length);if(0!==f(l).length)continue;g.push(new wb(a.substring(h,d.lastIndex)))}else k=c(a.substring(h,d.lastIndex-1)),g.push(k.left),g.push(db(k.middle)),g.push(k.right+";");h=d.lastIndex}b=c(a.substring(h));g.push(b.left);""!==b.middle&&(g.push(db(b.middle)),g.push(";"+b.right));return g};g.prototype.toString=function(){var a=e(this.statements),b=C;k(a)||(C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)});var c="{\n"+this.statements.join("")+"\n}";C=b;return c};
ra=function(a){a=c(a.substring(1,a.length-1));return new g(Da(a.middle))};da.prototype.toString=function(){for(var a=[],c=[],f,g=0,h=this.statements.length;g<h;++g)f=this.statements[g],f instanceof mb||f instanceof lb?a.push(f):c.push(f);Ta(a);var k=e(this.statements);C=function(a){a=a.name;return k.hasOwnProperty(a)?a:ha.hasOwnProperty(a)||d.hasOwnProperty(a)||b.hasOwnProperty(a)?"$p."+a:a};a="// this code was autogenerated from PJS\n(function($p) {\n"+a.join("")+"\n"+c.join("")+"\n})";C=null;return a};
a=function(){var a=v(N[0]),a=a.replace(/\bimport\s+[^;]+;/g,"");return new da(Da(a,rc,Ob))}();(function(a){function b(a,e){for(var d=e.split("."),f=a.scope,g;f;){if(f.hasOwnProperty(d[0])){g=f[d[0]];break}f=f.scope}g===p&&(g=c[d[0]]);for(var f=1,h=d.length;f<h&&g;++f)g=g.inScope[d[f]];return g}var c={},e;for(e in X)if(X.hasOwnProperty(e)){a=X[e];var d=a.scopeId,f=a.name;d?(d=X[d],a.scope=d,d.inScope===p&&(d.inScope={}),d.inScope[f]=a):c[f]=a}for(e in X)if(X.hasOwnProperty(e)){a=X[e];if(f=a.body.baseClassName)if(f=
b(a,f))a.base=f,f.derived||(f.derived=[]),f.derived.push(a);var f=a.body.interfacesNames,d=[],g,h;if(f&&0<f.length){g=0;for(h=f.length;g<h;++g){var k=b(a,f[g]);d.push(k);k&&(k.derived||(k.derived=[]),k.derived.push(a))}0<d.length&&(a.interfaces=d)}}})(a);(function(a){function b(a,e){var d=c[a];if(!d)return!1;var f=d.indexOf(e);if(0>f)return!1;d.splice(f,1);if(0<d.length)return!1;delete c[a];return!0}a=[];var c={},e,d,f;for(e in X)if(X.hasOwnProperty(e))if(f=X[e],f.inScope||f.derived){var g=[];if(f.inScope)for(d in f.inScope)f.inScope.hasOwnProperty(d)&&
g.push(f.inScope[d]);f.derived&&(g=g.concat(f.derived));c[e]=g}else a.push(e),f.weight=0;for(;0<a.length;)if(e=a.shift(),f=X[e],f.scopeId&&b(f.scopeId,f)&&(a.push(f.scopeId),X[f.scopeId].weight=f.weight+1),f.base&&b(f.base.classId,f)&&(a.push(f.base.classId),f.base.weight=f.weight+1),f.interfaces)for(e=0,d=f.interfaces.length;e<d;++e)f.interfaces[e]&&b(f.interfaces[e].classId,f)&&(a.push(f.interfaces[e].classId),f.interfaces[e].weight=f.weight+1)})(a);a=a.toString();a=a.replace(/\s*\n(?:[\t ]*\n)+/g,
"\n\n");a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return String.fromCharCode(parseInt(b,16))});return function(a,b){return a.replace(/'(\d+)'/g,function(a,c){var e=b[c];return"/"===e.charAt(0)?e:/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(e)?"(new $p.Character("+e+"))":e})}(a,R)}function a(a,b){var d=RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(a);if(d&&2===d.length)for(var f=[],d=d.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(a,b){f.push(b);return"{"+(f.length-
1)+"}"}}()).replace("\n","").replace("\r","").split(";"),h=function(a){return a.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")},k=0,l=d.length;k<l;k++){var p=d[k].split("=");if(p&&2===p.length){var n=h(p[0]),m=h(p[1]),p=[];if("preload"===n)for(p=m.split(","),n=0,m=p.length;n<m;n++){var x=h(p[n]);b.imageCache.add(x)}else if("font"===n)for(p=m.split(","),n=0,m=p.length;n<m;n++){var x=h(p[n]),D=/^\{(\d*?)\}$/.exec(x);PFont.preloading.add(D?JSON.parse("{"+f[D[1]]+"}"):x)}else"pauseOnBlur"===n?b.options.pauseOnBlur=
"true"===m:"globalKeyEvents"===n?b.options.globalKeyEvents="true"===m:"param-"===n.substring(0,6)?b.params[n.substring(6)]=m:b.options[n]=m}}return a}var b=h.defaultScope,d=b.PConstants,f=h.aFunctions,l=h.Browser.document,p;k.compile=function(b){var c=new k.Sketch;b=a(b,c);b=n(b);c.sourceCode=b;return c};k.logger=new function(a){var b={BufferMax:200};b.wrapper=a.createElement("div");b.wrapper.setAttribute("style","opacity:.75;display:block;position:fixed;bottom:0px;left:0px;right:0px;height:50px;background-color:#aaa");
b.dragger=a.createElement("div");b.dragger.setAttribute("style","display:block;border:3px black raised;cursor:n-resize;position:absolute;top:0px;left:0px;right:0px;height:5px;background-color:#333");b.closer=a.createElement("div");b.closer.onmouseover=function(){b.closer.style.setProperty("background-color","#ccc")};b.closer.onmouseout=function(){b.closer.style.setProperty("background-color","#ddd")};b.closer.innerHTML="&#10006;";b.closer.setAttribute("style","opacity:.5;display:block;border:3px black raised;position:absolute;top:10px;right:30px;height:20px;width:20px;background-color:#ddd;color:#000;line-height:20px;text-align:center;cursor:pointer;");
b.javaconsole=a.createElement("div");b.javaconsole.setAttribute("style","overflow-x: auto;display:block;position:absolute;left:10px;right:0px;bottom:5px;top:10px;overflow-y:scroll;height:40px;");b.wrapper.appendChild(b.dragger);b.wrapper.appendChild(b.javaconsole);b.wrapper.appendChild(b.closer);b.dragger.onmousedown=function(d){b.divheight=b.wrapper.style.height;a.selection?a.selection.empty():window.getSelection().removeAllRanges();var f=d.screenY;window.onmousemove=function(a){b.wrapper.style.height=
parseFloat(b.divheight)+(f-a.screenY)+"px";b.javaconsole.style.height=parseFloat(b.divheight)+(f-a.screenY)-10+"px"};window.onmouseup=function(d){a.selection?a.selection.empty():window.getSelection().removeAllRanges();b.wrapper.style.height=parseFloat(b.divheight)+(f-d.screenY)+"px";b.javaconsole.style.height=parseFloat(b.divheight)+(f-d.screenY)-10+"px";window.onmousemove=null;window.onmouseup=null}};b.BufferArray=[];b.print=b.log=function(a){b.BufferArray[b.BufferArray.length-1]?b.BufferArray[b.BufferArray.length-
1]+=a+"":b.BufferArray.push(a);b.javaconsole.innerHTML=b.BufferArray.join("");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible")};b.println=function(d){a.body.appendChild(b.wrapper);b.print(d);b.BufferArray.push("<br/>");b.javaconsole.innerHTML=b.BufferArray.join("");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible");b.BufferArray.length>b.BufferMax?b.BufferArray.splice(0,
1):b.javaconsole.scrollTop=b.javaconsole.scrollHeight;"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible")};b.showconsole=function(){b.wrapper.style.visibility="visible"};b.hideconsole=function(){b.wrapper.style.visibility="hidden"};b.closer.onclick=function(){b.hideconsole()};b.hideconsole();return b}(l);return k}},{}],26:[function(D,x,Q){x.exports=function(k,h){function m(a,b){return a in l?l[a]:"function"===typeof l[b]?l[b]:function(a){if(a instanceof Array)return a;if("number"===
typeof a){var b=[];b.length=a;return b}}}var n=k.defaultScope,a=k.extend,b=k.Browser,d=b.ajax,f=b.navigator,l=b.window,p=b.document,r=k.noop,c=n.PConstants;PFont=n.PFont;PShapeSVG=n.PShapeSVG;PVector=n.PVector;Char=Character=n.Char;ObjectIterator=n.ObjectIterator;XMLElement=n.XMLElement;XML=n.XML;var x=l.HTMLCanvasElement,D=l.HTMLImageElement,G=l.localStorage;p.head||(p.head=p.getElementsByTagName("head")[0]);var A=m("Float32Array","WebGLFloatArray"),Q=m("Int32Array","WebGLIntArray"),v=m("Uint16Array",
"WebGLUnsignedShortArray"),ga=m("Uint8Array","WebGLUnsignedByteArray");if(9<=p.documentMode&&!p.doctype)throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>";var q=[],Zb={},M=this.Processing=function(b,k,m){function Ia(a,b,z){a.addEventListener?a.addEventListener(b,z,!1):a.attachEvent("on"+b,z);wb.push({elem:a,type:b,fn:z})}function T(a,b,z,c){var e=Fa.locations[a];e===h&&(e=g.getUniformLocation(b,z),Fa.locations[a]=e);null!==e&&
(4===c.length?g.uniform4fv(e,c):3===c.length?g.uniform3fv(e,c):2===c.length?g.uniform2fv(e,c):g.uniform1f(e,c))}function Y(a,b,z,c){var e=Fa.locations[a];e===h&&(e=g.getUniformLocation(b,z),Fa.locations[a]=e);null!==e&&(4===c.length?g.uniform4iv(e,c):3===c.length?g.uniform3iv(e,c):2===c.length?g.uniform2iv(e,c):g.uniform1i(e,c))}function U(a,b,z,c,e){var d=Fa.locations[a];d===h&&(d=g.getUniformLocation(b,z),Fa.locations[a]=d);-1!==d&&(16===e.length?g.uniformMatrix4fv(d,c,e):9===e.length?g.uniformMatrix3fv(d,
c,e):g.uniformMatrix2fv(d,c,e))}function Z(a,b,z,c,e){var d=Fa.attributes[a];d===h&&(d=g.getAttribLocation(b,z),Fa.attributes[a]=d);-1!==d&&(g.bindBuffer(g.ARRAY_BUFFER,e),g.vertexAttribPointer(d,c,g.FLOAT,!1,0,0),g.enableVertexAttribArray(d))}function sa(a,b,z){var c=Fa.attributes[a];c===h&&(c=g.getAttribLocation(b,z),Fa.attributes[a]=c);-1!==c&&g.disableVertexAttribArray(c)}function ta(a,b,z,$){Va===c.HSB?(z=e.color.toRGB(a,b,z),a=z[0],b=z[1],z=z[2]):(a=Math.round(255*(a/xa)),b=Math.round(255*(b/
Ea)),z=Math.round(255*(z/ya)));$=Math.round(255*($/ia));a=0>a?0:a;b=0>b?0:b;z=0>z?0:z;$=0>$?0:$;return(255<$?255:$)<<24&c.ALPHA_MASK|(255<a?255:a)<<16&c.RED_MASK|(255<b?255:b)<<8&c.GREEN_MASK|(255<z?255:z)&c.BLUE_MASK}function $b(a){if(a<=xa&&0<=a){if(Va===c.RGB)return ta(a,a,a,ia);if(Va===c.HSB)return ta(0,0,a/xa*ya,ia)}if(a)return 2147483647<a&&(a-=4294967296),a}function bb(a){var b,z,$;b=((a&c.RED_MASK)>>>16)/255;z=((a&c.GREEN_MASK)>>>8)/255;$=(a&c.BLUE_MASK)/255;a=e.max(e.max(b,z),$);var d=e.min(e.min(b,
z),$);if(d===a)return[0,0,a*ya];b=(b===a?(z-$)/(a-d):z===a?2+($-b)/(a-d):4+(b-z)/(a-d))/6;0>b?b+=1:1<b&&(b-=1);return[b*xa,(a-d)/a*Ea,a*ya]}function Sa(){g.restore();N=ab=!0}function cb(){var a=(Date.now()-tc)/1E3;ec++;var b=ec/a;0.5<a&&(tc=Date.now(),ec=0,e.__frameRate=b);e.frameCount++}function Fb(a){a=parseInt("0x"+a,16);2147483647<a&&(a-=4294967296);return a}function db(a){if("number"===typeof a)return 0!==a;if("boolean"===typeof a)return a;if("string"===typeof a)return"true"===a.toLowerCase();
if(a instanceof Char)return 49===a.code||84===a.code||116===a.code}function Hb(a){if("number"===typeof a)return a;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseFloat(a);if(a instanceof Char)return a.code}function Ib(a,b){if("number"===typeof a)return a&4294967295;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseInt(a,b||10)&4294967295;if(a instanceof Char)return a.code}function wa(){R&&(N&&(g.fillStyle=e.color.toString(La),N=!1),g.fill())}function za(){C&&
(ab&&(g.strokeStyle=e.color.toString(ja),ab=!1),g.stroke())}function Ta(){wa();za();g.closePath()}function Ja(a,b,z){var c=Mc.shift();c===h&&(c={},c.canvas=p.createElement("canvas"),c.context=c.canvas.getContext("2d"));Mc.push(c);var e=c.canvas,d=c.context;b=b||a.width;z=z||a.height;e.width=b;e.height=z;a?"data"in a?d.putImageData(a,0,0):(d.clearRect(0,0,b,z),d.drawImage(a,0,0,b,z)):d.clearRect(0,0,b,z);return c}function Jb(a){return{getLength:function(a){return function(){if(a.isRemote)throw"Image is loaded remotely. Cannot get length.";
return a.imageData.data.length?a.imageData.data.length/4:0}}(a),getPixel:function(a){return function(L){L*=4;var b=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";return b[L+3]<<24&c.ALPHA_MASK|b[L]<<16&c.RED_MASK|b[L+1]<<8&c.GREEN_MASK|b[L+2]&c.BLUE_MASK}}(a),setPixel:function(a){return function(L,b){var e=4*L,d=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot set pixel.";d[e+0]=(b&c.RED_MASK)>>>16;d[e+1]=(b&c.GREEN_MASK)>>>8;d[e+2]=b&c.BLUE_MASK;
d[e+3]=(b&c.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a),toArray:function(a){return function(){var L=[],b=a.imageData.data,e=a.width*a.height;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";for(var d=0,f=0;d<e;d++,f+=4)L.push(b[f+3]<<24&c.ALPHA_MASK|b[f]<<16&c.RED_MASK|b[f+1]<<8&c.GREEN_MASK|b[f+2]&c.BLUE_MASK);return L}}(a),set:function(a){return function(L){var b,e,d;if(this.isRemote)throw"Image is loaded remotely. Cannot set pixels.";e=a.imageData.data;for(var f=0,g=L.length;f<g;f++)d=
L[f],b=4*f,e[b+0]=(d&c.RED_MASK)>>>16,e[b+1]=(d&c.GREEN_MASK)>>>8,e[b+2]=d&c.BLUE_MASK,e[b+3]=(d&c.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a)}}function Kb(a,b,z,$){var d=new Ga(z,$,c.ARGB);d.fromImageData(e.toImageData(a,b,z,$));return d}function Lb(a,b,z,e,d){if(d.isRemote)throw"Image is loaded remotely. Cannot get x,y,w,h.";var f=new Ga(z,e,c.ARGB),g=f.imageData.data,h=d.width,s=d.height;d=d.imageData.data;var k=Math.max(0,-b),l=Math.max(0,-a);e=Math.min(e,s-b);for(s=Math.min(z,h-a);k<e;++k)for(var n=
4*((b+k)*h+(a+l)),p=4*(k*z+l),m=l;m<s;++m)g[p++]=d[n++],g[p++]=d[n++],g[p++]=d[n++],g[p++]=d[n++];f.__isDirty=!0;return f}function fb(){Rb&&(g=Nc,Rb=!1,e.updatePixels())}function Mb(){function a(L,b){L[b]=function(){fb();g[b].apply(g,arguments)}}function b(a,L){e.defineProperty(a,L,{get:function(){fb();return g[L]},set:function(a){fb();g[L]=a}})}for(var z in g)"function"===typeof g[z]?a(this,z):b(this,z)}function Ua(a){return a instanceof String?a:"number"===typeof a?a===(0|a)?a.toString():e.nf(a,
0,3):null===a||a===h?"":a.toString()}function Nb(a,b,z,e){var d;0>a.indexOf("\n")?(a=[a],d=1):(a=a.split(/\r?\n/g),d=a.length);var f=0;Wa===c.TOP?f=Xa+Ma:Wa===c.CENTER?f=Xa/2-(d-1)*Aa/2:Wa===c.BOTTOM&&(f=-(Ma+(d-1)*Aa));for(var g=0;g<d;++g)ha.text$line(a[g],b,z+f,e,nb),f+=Aa}function ac(a,b,z,e,d,f){if(0!==a.length&&(0!==e&&0!==d)&&!(Na>d)){for(var g=-1,h=0,s=0,k=[],l=0,n=a.length;l<n;l++){var p=a[l],m=" "===p,r=ba.measureTextWidth(p);if("\n"!==p&&s+r<=e)m&&(g=l),s+=r;else{if(g+1===h)if(0<l)g=l;else return;
"\n"===p?(k.push({text:a.substring(h,l),width:s}),h=l+1):(k.push({text:a.substring(h,g+1),width:s}),h=g+1);s=0;l=h-1}}h<n&&k.push({text:a.substring(h),width:s});a=1;g=Xa;nb===c.CENTER?a=e/2:nb===c.RIGHT&&(a=e);e=k.length;h=Math.min(e,Math.floor(d/Aa));Wa===c.TOP?g=Xa+Ma:Wa===c.CENTER?g=d/2-Aa*(h/2-1):Wa===c.BOTTOM&&(g=Ma+Aa);for(h=0;h<e;h++){l=h*Aa;if(g+l>d-Ma)break;s=k[h];ha.text$line(s.text,b+a,z+g+l,f,nb)}}}function Ka(a){ha="3D"===a?new B:"2D"===a?new E:new F;for(var b in F.prototype)F.prototype.hasOwnProperty(b)&&
0>b.indexOf("$")&&(e[b]=ha[b]);ha.$init()}function H(a){return function(){Ka("2D");return ha[a].apply(this,arguments)}}function lb(a){a=a.which||a.keyCode;switch(a){case 13:return 10;case 91:case 93:case 224:return 157;case 57392:return 17;case 46:return 127;case 45:return 155}return a}function mb(a){"function"===typeof a.preventDefault?a.preventDefault():"function"===typeof a.stopPropagation&&a.stopPropagation();return!1}function Ob(){for(var a in hb)if(hb.hasOwnProperty(a)){e.__keyPressed=!0;return}e.__keyPressed=
!1}function vb(a,b){hb[a]=b;ob=null;e.key=b;e.keyCode=a;e.keyPressed();e.keyCode=0;e.keyTyped();Ob()}function rc(a){var b=lb(a);if(b===c.DELETE)vb(b,new Char(127));else if(0>qd.indexOf(b))ob=b;else{var z=new Char(c.CODED);e.key=z;e.keyCode=b;hb[b]=z;e.keyPressed();ob=null;Ob();return mb(a)}}function Pb(a){if(null!==ob){var b=ob,z;z=a.which||a.keyCode;var c=a.shiftKey||a.ctrlKey||a.altKey||a.metaKey;switch(z){case 13:z=c?13:10;break;case 8:z=c?127:8}z=new Char(z);vb(b,z);return mb(a)}}function bc(a){a=
lb(a);var b=hb[a];b!==h&&(e.key=b,e.keyCode=a,e.keyReleased(),delete hb[a],Ob())}if(!(this instanceof M))throw"called Processing constructor as if it were a function: missing 'new'.";var S={},Qb=b===h&&k===h,S=Qb?p.createElement("canvas"):"string"===typeof b?p.getElementById(b):b;if(!("getContext"in S))throw"called Processing constructor without passing canvas element reference or id.";var wb=[],e=this;e.Char=e.Character=Char;a.withCommonFunctions(e);a.withMath(e);a.withProxyFunctions(e,function(a){return Array.prototype.slice.call(a,
1)});a.withTouch(e,S,Ia,p,c);m&&Object.keys(m).forEach(function(a){e[a]=m[a]});e.externals={canvas:S,context:h,sketch:h,window:l};e.name="Processing.js Instance";e.use3DContext=!1;e.focused=!1;e.breakShape=!1;e.glyphTable={};e.pmouseX=0;e.pmouseY=0;e.mouseX=0;e.mouseY=0;e.mouseButton=0;e.mouseScroll=0;e.mouseClicked=h;e.mouseDragged=h;e.mouseMoved=h;e.mousePressed=h;e.mouseReleased=h;e.mouseScrolled=h;e.mouseOver=h;e.mouseOut=h;e.touchStart=h;e.touchEnd=h;e.touchMove=h;e.touchCancel=h;e.key=h;e.keyCode=
h;e.keyPressed=r;e.keyReleased=r;e.keyTyped=r;e.draw=h;e.setup=h;e.__mousePressed=!1;e.__keyPressed=!1;e.__frameRate=60;e.frameCount=0;e.width=100;e.height=100;var g,da,ha,R=!0,ka=[1,1,1,1],La=4294967295,N=!0,C=!0,X=[0,0,0,1],ja=4278190080,ab=!0,ea=1,eb=!1,ra=!1,Da=!0,ma=0,qa=c.CORNER,la=c.CENTER,Gb=0,Eb=0,ub=0,jb=c.NORMAL_MODE_AUTO,tb=60,Kc=1E3/tb,od=S.style.cursor,aa=c.POLYGON,oc=0,pc=20,Lc=!1,kb=-3355444,qc=20,ia=255,xa=255,Ea=255,ya=255,cc=0,dc=0,Va=c.RGB,gb=null,sc=null,Oc=Date.now(),tc=Oc,ec=
0,Ba,Sb,fc,xb,yb,uc,vc,Fa={attributes:{},locations:{}},y,J,na,wc,xc,yc,gc,zc,Tb,Ac,Pc,Bc,Qc,hc,Rc,Sc,Tc,Uc=0,Vc=0,Wc=c.IMAGE,ua=!1,Cc,Dc,Ec,nb=c.LEFT,Wa=c.BASELINE,ic=c.MODEL,zb="Arial",Na=12,Xa=9,Ma=2,Aa=14,ba=PFont.get(zb,Na),Nc,Fc=null,Rb=!1,Xc,Yc=1E3,hb=[],ob=null,qd=[c.SHIFT,c.CONTROL,c.ALT,c.CAPSLK,c.PGUP,c.PGDN,c.END,c.HOME,c.LEFT,c.UP,c.RIGHT,c.DOWN,c.NUMLK,c.INSERT,c.F1,c.F2,c.F3,c.F4,c.F5,c.F6,c.F7,c.F8,c.F9,c.F10,c.F11,c.F12,c.META],O=0,jc=0,pb=0,Oa=[],Pa=[],Qa=[],Ub=new A(c.SINCOS_LENGTH),
Vb=new A(c.SINCOS_LENGTH),P,qb,Ra,K,fa,Ab,Bb,Wb,Ha,kc=!1,lc=60*(Math.PI/180),Gc=e.width/2,rb=e.height/2,sb=rb/Math.tan(lc/2),Zc=sb/10,$c=10*sb,ad=e.width/e.height,t=[],va=[],oa=0,Cb=!1,Db=!1,ib=!0,Xb=c.CORNER,bd=[],cd=new A([0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,
0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5]),dd=new A([0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,
-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5]),rd=new A([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),Hc=new A([0,0,0,0,1,0,1,1,0,1,0,0]),sd=new A([0,0,1,0,0,1,0,0,1,0,0,1]),td="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );"+
(/Windows/.test(f.userAgent)?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}",
Ic=function(a,b,z){var c=a.createShader(a.VERTEX_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw a.getShaderInfoLog(c);b=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(b,z);a.compileShader(b);if(!a.getShaderParameter(b,a.COMPILE_STATUS))throw a.getShaderInfoLog(b);z=a.createProgram();a.attachShader(z,c);a.attachShader(z,b);a.linkProgram(z);if(!a.getProgramParameter(z,a.LINK_STATUS))throw"Error linking shaders.";return z},ed=function(a,b,z,c,e){return{x:a,
y:b,w:z,h:c}},mc=ed,ud=function(a,b,z,c,e){return{x:a,y:b,w:e?z:z-a,h:e?c:c-b}},vd=function(a,b,z,c,e){return{x:a-z/2,y:b-c/2,w:z,h:c}},W=function(){},E=function(){},B=function(){},F=function(){};E.prototype=new W;E.prototype.constructor=E;B.prototype=new W;B.prototype.constructor=B;F.prototype=new W;F.prototype.constructor=F;W.prototype.a3DOnlyFunction=r;e.shape=function(a,b,z,$,d){1<=arguments.length&&null!==arguments[0]&&a.isVisible()&&(e.pushMatrix(),Xb===c.CENTER?5===arguments.length?(e.translate(b-
$/2,z-d/2),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length?e.translate(b-a.getWidth()/2,-a.getHeight()/2):e.translate(-a.getWidth()/2,-a.getHeight()/2):Xb===c.CORNER?5===arguments.length?(e.translate(b,z),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length&&e.translate(b,z):Xb===c.CORNERS&&(5===arguments.length?($-=b,d-=z,e.translate(b,z),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length&&e.translate(b,z)),a.draw(e),(1===arguments.length&&Xb===c.CENTER||1<arguments.length)&&
e.popMatrix())};e.shapeMode=function(a){Xb=a};e.loadShape=function(a){return 1===arguments.length&&-1<a.indexOf(".svg")?new PShapeSVG(null,a):null};e.loadXML=function(a){return new XML(e,a)};var fd=function(a){for(var b=0,z=0;z<a.length;z++)b=0!==z?Math.max(b,Math.abs(a[z])):Math.abs(a[z]);a=(b+"").indexOf(".");0===a?a=1:-1===a&&(a=(b+"").length);return a},Ya=e.PMatrix2D=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof Ya?this.set(arguments[0].array()):6===
arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};Ya.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof Ya?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new Ya;a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},
translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var z,c;a instanceof PVector?(z=a.x,c=a.y,b||(b=new PVector)):a instanceof Array&&(z=a[0],c=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*z+this.elements[1]*c+this.elements[2],b[1]=this.elements[3]*z+this.elements[4]*c+this.elements[5]):
b instanceof PVector&&(b.x=this.elements[0]*z+this.elements[1]*c+this.elements[2],b.y=this.elements[3]*z+this.elements[4]*c+this.elements[5],b.z=0);return b},multX:function(a,b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,
Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>c.MIN_INT){var b=this.elements[0],z=this.elements[1],e=this.elements[2],d=this.elements[3],f=this.elements[4],g=this.elements[5];this.elements[0]=f/a;this.elements[3]=-d/a;this.elements[1]=-z/a;this.elements[4]=b/a;this.elements[2]=(z*g-f*e)/a;this.elements[5]=(d*e-b*g)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&
b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof Ya?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],z=0,c=0;2>c;c++)for(var e=0;3>e;e++,z++)b[z]+=this.elements[3*c+0]*a[e+0]+this.elements[3*
c+1]*a[e+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof Ya?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=
this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements[0],e=this.elements[1];this.elements[0]=b*c+a*e;this.elements[1]=-a*c+b*e;c=this.elements[3];e=this.elements[4];this.elements[3]=b*c+a*e;this.elements[4]=-a*c+b*e},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=fd(this.elements),a=""+e.nfs(this.elements[0],
a,4)+" "+e.nfs(this.elements[1],a,4)+" "+e.nfs(this.elements[2],a,4)+"\n"+e.nfs(this.elements[3],a,4)+" "+e.nfs(this.elements[4],a,4)+" "+e.nfs(this.elements[5],a,4)+"\n\n";e.println(a)}};var I=e.PMatrix3D=function(){this.reset()};I.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof I?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},
get:function(){var a=new I;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(a,b,c){c===h&&(c=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+c*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+c*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+c*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+c*this.elements[14]},
transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var c,e,d,f;a instanceof
PVector?(c=a.x,e=a.y,d=a.z,f=1,b||(b=new PVector)):a instanceof Array&&(c=a[0],e=a[1],d=a[2],f=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof Array&&(3===b.length?(b[0]=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3],b[1]=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7],b[2]=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3]*
f,b[1]=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7]*f,b[2]=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]*f,b[3]=this.elements[12]*c+this.elements[13]*e+this.elements[14]*d+this.elements[15]*f));b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3],b.y=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7],b.z=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]);
return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof I?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,e=0;4>e;e++)for(var d=0;4>d;d++,c++)b[c]+=this.elements[d+0]*a[4*e+0]+this.elements[d+4]*a[4*e+1]+this.elements[d+8]*a[4*e+2]+this.elements[d+12]*a[4*e+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&
arguments[0]instanceof I?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,e=0;4>e;e++)for(var d=0;4>d;d++,c++)b[c]+=this.elements[4*e+0]*a[d+0]+this.elements[4*e+1]*a[d+4]+this.elements[4*e+2]*a[d+8]+this.elements[4*e+3]*a[d+12];this.elements=b.slice()},rotate:function(a,b,c,d){if(4>arguments.length)this.rotateZ(a);else{var f=new PVector(b,c,d),g=
f.mag();if(0!==g){1!=g&&(f.normalize(),b=f.x,c=f.y,d=f.z);var f=e.cos(a),g=e.sin(a),h=1-f;this.apply(h*b*b+f,h*b*c-g*d,h*b*d+g*c,0,h*b*c+g*d,h*c*c+f,h*c*d-g*b,0,h*b*d-g*c,h*c*d+g*b,h*d*d+f,0,0,0,0,1)}}},invApply:function(){Wb===h&&(Wb=new I);var a=arguments;Wb.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!Wb.invert())return!1;this.preApply(Wb);return!0},rotateX:function(a){var b=e.cos(a);a=e.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=
e.cos(a);a=e.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,b,c){!a||b||c?a&&(b&&!c)&&(c=1):b=c=a;a&&(b&&c)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=c,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=c,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=c,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=c)},skewX:function(a){a=
Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,c,e){return c?e?this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]*e:this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]:this.elements[0]*a+this.elements[1]*
b+this.elements[3]},multY:function(a,b,c,e){return c?e?this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]*e:this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,c,e){return e?this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]*e:this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]},multW:function(a,b,c,e){return e?this.elements[12]*a+
this.elements[13]*b+this.elements[14]*c+this.elements[15]*e:this.elements[12]*a+this.elements[13]*b+this.elements[14]*c+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],c=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],e=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],d=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],
f=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],g=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],h=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],s=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],l=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],n=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],
p=a*n-b*l+c*k+e*s-d*h+f*g;if(1E-9>=Math.abs(p))return!1;var m=[];m[0]=+this.elements[5]*n-this.elements[6]*l+this.elements[7]*k;m[4]=-this.elements[4]*n+this.elements[6]*s-this.elements[7]*h;m[8]=+this.elements[4]*l-this.elements[5]*s+this.elements[7]*g;m[12]=-this.elements[4]*k+this.elements[5]*h-this.elements[6]*g;m[1]=-this.elements[1]*n+this.elements[2]*l-this.elements[3]*k;m[5]=+this.elements[0]*n-this.elements[2]*s+this.elements[3]*h;m[9]=-this.elements[0]*l+this.elements[1]*s-this.elements[3]*
g;m[13]=+this.elements[0]*k-this.elements[1]*h+this.elements[2]*g;m[2]=+this.elements[13]*f-this.elements[14]*d+this.elements[15]*e;m[6]=-this.elements[12]*f+this.elements[14]*c-this.elements[15]*b;m[10]=+this.elements[12]*d-this.elements[13]*c+this.elements[15]*a;m[14]=-this.elements[12]*e+this.elements[13]*b-this.elements[14]*a;m[3]=-this.elements[9]*f+this.elements[10]*d-this.elements[11]*e;m[7]=+this.elements[8]*f-this.elements[10]*c+this.elements[11]*b;m[11]=-this.elements[8]*d+this.elements[9]*
c-this.elements[11]*a;m[15]=+this.elements[8]*e-this.elements[9]*b+this.elements[10]*a;a=1/p;m[0]*=a;m[1]*=a;m[2]*=a;m[3]*=a;m[4]*=a;m[5]*=a;m[6]*=a;m[7]*=a;m[8]*=a;m[9]*=a;m[10]*=a;m[11]*=a;m[12]*=a;m[13]*=a;m[14]*=a;m[15]*=a;this.elements=m.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=fd(this.elements),a=""+e.nfs(this.elements[0],a,4)+" "+e.nfs(this.elements[1],a,4)+" "+e.nfs(this.elements[2],a,4)+" "+
e.nfs(this.elements[3],a,4)+"\n"+e.nfs(this.elements[4],a,4)+" "+e.nfs(this.elements[5],a,4)+" "+e.nfs(this.elements[6],a,4)+" "+e.nfs(this.elements[7],a,4)+"\n"+e.nfs(this.elements[8],a,4)+" "+e.nfs(this.elements[9],a,4)+" "+e.nfs(this.elements[10],a,4)+" "+e.nfs(this.elements[11],a,4)+"\n"+e.nfs(this.elements[12],a,4)+" "+e.nfs(this.elements[13],a,4)+" "+e.nfs(this.elements[14],a,4)+" "+e.nfs(this.elements[15],a,4)+"\n\n";e.println(a)},invTranslate:function(a,b,c){this.preApply(1,0,0,-a,0,1,0,-b,
0,0,1,-c,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,c){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/c,0,0,0,0,1])}};var Za=e.PMatrixStack=function(){this.matrixStack=[]};Za.prototype.load=function(){var a=
ha.$newPMatrix();1===arguments.length?a.set(arguments[0]):a.set(arguments);this.matrixStack.push(a)};E.prototype.$newPMatrix=function(){return new Ya};B.prototype.$newPMatrix=function(){return new I};Za.prototype.push=function(){this.matrixStack.push(this.peek())};Za.prototype.pop=function(){return this.matrixStack.pop()};Za.prototype.peek=function(){var a=ha.$newPMatrix();a.set(this.matrixStack[this.matrixStack.length-1]);return a};Za.prototype.mult=function(a){this.matrixStack[this.matrixStack.length-
1].apply(a)};e.split=function(a,b){return a.split(b)};e.splitTokens=function(a,b){if(b===h)return a.split(/\s+/g);var c=b.split(/()/g),e="",d=a.length,f,g,k=[];for(f=0;f<d;f++)g=a[f],-1<c.indexOf(g)?(""!==e&&k.push(e),e=""):e+=g;""!==e&&k.push(e);return k};e.append=function(a,b){a[a.length]=b;return a};e.concat=function(a,b){return a.concat(b)};e.sort=function(a,b){var c=[];if(0<a.length){for(var e=0<b?b:a.length,d=0;d<e;d++)c.push(a[d]);"string"===typeof a[0]?c.sort():c.sort(function(a,b){return a-
b});if(0<b)for(e=c.length;e<a.length;e++)c.push(a[e])}return c};e.splice=function(a,b,c){if(0===b.length)return a;if(b instanceof Array)for(var e=0;e<b.length;c++,e++)a.splice(c,0,b[e]);else a.splice(c,0,b);return a};e.subset=function(a,b,c){return a.slice(b,c!==h?b+c:a.length)};e.join=function(a,b){return a.join(b)};e.shorten=function(a){for(var b=[],c=a.length,e=0;e<c;e++)b[e]=a[e];b.pop();return b};e.expand=function(a,b){var c=a.slice(0);c.length=b||2*a.length;return c};e.arrayCopy=function(){var a,
b=0,c,e=0,d;2===arguments.length?(a=arguments[0],c=arguments[1],d=a.length):3===arguments.length?(a=arguments[0],c=arguments[1],d=arguments[2]):5===arguments.length&&(a=arguments[0],b=arguments[1],c=arguments[2],e=arguments[3],d=arguments[4]);for(var f=b;f<d+b;f++,e++)if(c[e]!==h)c[e]=a[f];else throw"array index out of bounds exception";};e.reverse=function(a){return a.reverse()};e.mix=function(a,b,c){return a+((b-a)*c>>8)};e.peg=function(a){return 0>a?0:255<a?255:a};e.modes=function(){function a(b,
L,c,e,d,yd,z,f,$,h,pd){b=g(((b&4278190080)>>>24)+L,255)<<24;c+=($-c)*L>>8;e+=(h-e)*L>>8;L=d+((pd-d)*L>>8);return b|(0>c?0:255<c?255:c)<<16|(0>e?0:255<e?255:e)<<8|(0>L?0:255<L?255:L)}var b=c.ALPHA_MASK,e=c.RED_MASK,d=c.GREEN_MASK,f=c.BLUE_MASK,g=Math.min,h=Math.max;return{replace:function(a,b){return b},blend:function(a,L){var c=(L&b)>>>24,h=a&e,k=a&d,w=a&f,l=L&e,m=L&d,n=L&f;return g(((a&b)>>>24)+c,255)<<24|h+((l-h)*c>>8)&e|k+((m-k)*c>>8)&d|w+((n-w)*c>>8)&f},add:function(a,L){var c=(L&b)>>>24;return g(((a&
b)>>>24)+c,255)<<24|g((a&e)+((L&e)>>8)*c,e)&e|g((a&d)+((L&d)>>8)*c,d)&d|g((a&f)+((L&f)*c>>8),f)},subtract:function(a,L){var c=(L&b)>>>24;return g(((a&b)>>>24)+c,255)<<24|h((a&e)-((L&e)>>8)*c,d)&e|h((a&d)-((L&d)>>8)*c,f)&d|h((a&f)-((L&f)*c>>8),0)},lightest:function(a,L){var c=(L&b)>>>24;return g(((a&b)>>>24)+c,255)<<24|h(a&e,((L&e)>>8)*c)&e|h(a&d,((L&d)>>8)*c)&d|h(a&f,(L&f)*c>>8)},darkest:function(a,L){var c=(L&b)>>>24,h=a&e,k=a&d,w=a&f,l=g(a&e,((L&e)>>8)*c),m=g(a&d,((L&d)>>8)*c),n=g(a&f,(L&f)*c>>
8);return g(((a&b)>>>24)+c,255)<<24|h+((l-h)*c>>8)&e|k+((m-k)*c>>8)&d|w+((n-w)*c>>8)&f},difference:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,h>V?h-V:V-h,k>l?k-l:l-k,w>m?w-m:m-w)},exclusion:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,h+V-(h*V>>7),k+l-(k*l>>7),w+m-(w*m>>7))},multiply:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,
(g&b)>>>24,h,k,w,V,l,m,h*V>>8,k*l>>8,w*m>>8)},screen:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,255-((255-h)*(255-V)>>8),255-((255-k)*(255-l)>>8),255-((255-w)*(255-m)>>8))},hard_light:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,128>V?h*V>>7:255-((255-h)*(255-V)>>7),128>l?k*l>>7:255-((255-k)*(255-l)>>7),128>m?w*m>>7:255-((255-w)*(255-m)>>7))},soft_light:function(c,g){var h=
(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,(h*V>>7)+(h*h>>8)-(h*h*V>>15),(k*l>>7)+(k*k>>8)-(k*k*l>>15),(w*m>>7)+(w*w>>8)-(w*w*m>>15))},overlay:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,128>h?h*V>>7:255-((255-h)*(255-V)>>7),128>k?k*l>>7:255-((255-k)*(255-l)>>7),128>w?w*m>>7:255-((255-w)*(255-m)>>7))},dodge:function(c,g){var h=(g&b)>>>24,k=(c&e)>>16,w=(c&d)>>8,V=c&f,l=(g&e)>>16,m=(g&d)>>
8,n=g&f,p=255;255!==l&&(p=(k<<8)/(255-l),p=0>p?0:255<p?255:p);var r=255;255!==m&&(r=(w<<8)/(255-m),r=0>r?0:255<r?255:r);var t=255;255!==n&&(t=(V<<8)/(255-n),t=0>t?0:255<t?255:t);return a(c,h,k,w,V,l,m,n,p,r,t)},burn:function(c,g){var h=(g&b)>>>24,k=(c&e)>>16,w=(c&d)>>8,V=c&f,l=(g&e)>>16,m=(g&d)>>8,n=g&f,p=0;0!==l&&(p=(255-k<<8)/l,p=255-(0>p?0:255<p?255:p));var r=0;0!==m&&(r=(255-w<<8)/m,r=255-(0>r?0:255<r?255:r));var t=0;0!==n&&(t=(255-V<<8)/n,t=255-(0>t?0:255<t?255:t));return a(c,h,k,w,V,l,m,n,p,
r,t)}}}();e.color=function(a,b,e,d){return a!==h&&b!==h&&e!==h&&d!==h?ta(a,b,e,d):a!==h&&b!==h&&e!==h?ta(a,b,e,ia):a!==h&&b!==h?(a&c.ALPHA_MASK?(b=Math.round(255*(b/ia)),b=255<b?255:b,a=a-(a&c.ALPHA_MASK)+((0>b?0:b)<<24&c.ALPHA_MASK)):a=Va===c.RGB?ta(a,a,a,b):Va===c.HSB?ta(0,0,a/xa*ya,b):void 0,a):"number"===typeof a?$b(a):ta(xa,Ea,ya,ia)};e.color.toString=function(a){return"rgba("+((a&c.RED_MASK)>>>16)+","+((a&c.GREEN_MASK)>>>8)+","+(a&c.BLUE_MASK)+","+((a&c.ALPHA_MASK)>>>24)/255+")"};e.color.toInt=
function(a,b,e,d){return d<<24&c.ALPHA_MASK|a<<16&c.RED_MASK|b<<8&c.GREEN_MASK|e&c.BLUE_MASK};e.color.toArray=function(a){return[(a&c.RED_MASK)>>>16,(a&c.GREEN_MASK)>>>8,a&c.BLUE_MASK,(a&c.ALPHA_MASK)>>>24]};e.color.toGLArray=function(a){return[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255,((a&c.ALPHA_MASK)>>>24)/255]};e.color.toRGB=function(a,b,c){a=a>xa?xa:a;b=b>Ea?Ea:b;c=c>ya?ya:c;a=360*(a/xa);b=100*(b/Ea);c=100*(c/ya);var e=Math.round(255*(c/100));if(0===b)return[e,
e,e];a%=360;var d=a%60,f=Math.round(255*(c*(100-b)/1E4)),g=Math.round(255*(c*(6E3-b*d)/6E5));b=Math.round(255*(c*(6E3-b*(60-d))/6E5));switch(Math.floor(a/60)){case 0:return[e,b,f];case 1:return[g,e,f];case 2:return[f,e,b];case 3:return[f,g,e];case 4:return[b,f,e];case 5:return[e,f,g]}};e.brightness=function(a){return bb(a)[2]};e.saturation=function(a){return bb(a)[1]};e.hue=function(a){return bb(a)[0]};e.red=function(a){return((a&c.RED_MASK)>>>16)/255*xa};e.green=function(a){return((a&c.GREEN_MASK)>>>
8)/255*Ea};e.blue=function(a){return(a&c.BLUE_MASK)/255*ya};e.alpha=function(a){return((a&c.ALPHA_MASK)>>>24)/255*ia};e.lerpColor=function(a,b,d){var f,g,h,k,l,s;a=e.color(a);b=e.color(b);if(Va===c.HSB)return h=bb(a),a=((a&c.ALPHA_MASK)>>>24)/ia,g=bb(b),b=((b&c.ALPHA_MASK)>>>24)/ia,s=e.lerp(h[0],g[0],d),f=e.lerp(h[1],g[1],d),h=e.lerp(h[2],g[2],d),h=e.color.toRGB(s,f,h),d=e.lerp(a,b,d)*ia,d<<24&c.ALPHA_MASK|h[0]<<16&c.RED_MASK|h[1]<<8&c.GREEN_MASK|h[2]&c.BLUE_MASK;f=(a&c.RED_MASK)>>>16;g=(a&c.GREEN_MASK)>>>
8;h=a&c.BLUE_MASK;a=((a&c.ALPHA_MASK)>>>24)/ia;k=(b&c.RED_MASK)>>>16;l=(b&c.GREEN_MASK)>>>8;s=b&c.BLUE_MASK;b=((b&c.ALPHA_MASK)>>>24)/ia;f=e.lerp(f,k,d)|0;g=e.lerp(g,l,d)|0;h=e.lerp(h,s,d)|0;d=e.lerp(a,b,d)*ia;return d<<24&c.ALPHA_MASK|f<<16&c.RED_MASK|g<<8&c.GREEN_MASK|h&c.BLUE_MASK};e.colorMode=function(){Va=arguments[0];1<arguments.length&&(xa=arguments[1],Ea=arguments[2]||arguments[1],ya=arguments[3]||arguments[1],ia=arguments[4]||arguments[1])};e.blendColor=function(a,b,d){if(d===c.REPLACE)return e.modes.replace(a,
b);if(d===c.BLEND)return e.modes.blend(a,b);if(d===c.ADD)return e.modes.add(a,b);if(d===c.SUBTRACT)return e.modes.subtract(a,b);if(d===c.LIGHTEST)return e.modes.lightest(a,b);if(d===c.DARKEST)return e.modes.darkest(a,b);if(d===c.DIFFERENCE)return e.modes.difference(a,b);if(d===c.EXCLUSION)return e.modes.exclusion(a,b);if(d===c.MULTIPLY)return e.modes.multiply(a,b);if(d===c.SCREEN)return e.modes.screen(a,b);if(d===c.HARD_LIGHT)return e.modes.hard_light(a,b);if(d===c.SOFT_LIGHT)return e.modes.soft_light(a,
b);if(d===c.OVERLAY)return e.modes.overlay(a,b);if(d===c.DODGE)return e.modes.dodge(a,b);if(d===c.BURN)return e.modes.burn(a,b)};e.printMatrix=function(){K.print()};E.prototype.translate=function(a,b){K.translate(a,b);fa.invTranslate(a,b);g.translate(a,b)};B.prototype.translate=function(a,b,c){K.translate(a,b,c);fa.invTranslate(a,b,c)};E.prototype.scale=function(a,b){K.scale(a,b);fa.invScale(a,b);g.scale(a,b||a)};B.prototype.scale=function(a,b,c){K.scale(a,b,c);fa.invScale(a,b,c)};E.prototype.transform=
function(a){a=a.array();g.transform(a[0],a[3],a[1],a[4],a[2],a[5])};B.prototype.transformm=function(a){throw"p.transform is currently not supported in 3D mode";};E.prototype.pushMatrix=function(){Ab.load(K);Bb.load(fa);g.save()};B.prototype.pushMatrix=function(){Ab.load(K);Bb.load(fa)};E.prototype.popMatrix=function(){K.set(Ab.pop());fa.set(Bb.pop());Sa()};B.prototype.popMatrix=function(){K.set(Ab.pop());fa.set(Bb.pop())};E.prototype.resetMatrix=function(){K.reset();fa.reset();g.setTransform(1,0,
0,1,0,0)};B.prototype.resetMatrix=function(){K.reset();fa.reset()};W.prototype.applyMatrix=function(){var a=arguments;K.apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);fa.invApply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])};E.prototype.applyMatrix=function(){for(var a=arguments,b=a.length;16>b;b++)a[b]=0;a[10]=a[15]=1;W.prototype.applyMatrix.apply(this,a)};e.rotateX=function(a){K.rotateX(a);fa.invRotateX(a)};
E.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead.";};B.prototype.rotateZ=function(a){K.rotateZ(a);fa.invRotateZ(a)};e.rotateY=function(a){K.rotateY(a);fa.invRotateY(a)};E.prototype.rotate=function(a){K.rotateZ(a);fa.invRotateZ(a);g.rotate(a)};B.prototype.rotate=function(a){4>arguments.length?e.rotateZ(a):(K.rotate(a,arguments[1],arguments[2],arguments[3]),fa.rotate(-a,arguments[1],arguments[2],arguments[3]))};E.prototype.shearX=function(a){K.shearX(a);
g.transform(1,0,a,1,0,0)};B.prototype.shearX=function(a){K.shearX(a)};E.prototype.shearY=function(a){K.shearY(a);g.transform(1,a,0,1,0,0)};B.prototype.shearY=function(a){K.shearY(a)};e.pushStyle=function(){g.save();e.pushMatrix();bd.push({doFill:R,currentFillColor:La,doStroke:C,currentStrokeColor:ja,curTint:gb,curRectMode:qa,curColorMode:Va,colorModeX:xa,colorModeZ:ya,colorModeY:Ea,colorModeA:ia,curTextFont:ba,horizontalTextAlignment:nb,verticalTextAlignment:Wa,textMode:ic,curFontName:zb,curTextSize:Na,
curTextAscent:Xa,curTextDescent:Ma,curTextLeading:Aa})};e.popStyle=function(){var a=bd.pop();if(a)Sa(),e.popMatrix(),R=a.doFill,La=a.currentFillColor,C=a.doStroke,ja=a.currentStrokeColor,gb=a.curTint,qa=a.curRectMode,Va=a.curColorMode,xa=a.colorModeX,ya=a.colorModeZ,Ea=a.colorModeY,ia=a.colorModeA,ba=a.curTextFont,zb=a.curFontName,Na=a.curTextSize,nb=a.horizontalTextAlignment,Wa=a.verticalTextAlignment,ic=a.textMode,Xa=a.curTextAscent,Ma=a.curTextDescent,Aa=a.curTextLeading;else throw"Too many popStyle() without enough pushStyle()";
};e.year=function(){return(new Date).getFullYear()};e.month=function(){return(new Date).getMonth()+1};e.day=function(){return(new Date).getDate()};e.hour=function(){return(new Date).getHours()};e.minute=function(){return(new Date).getMinutes()};e.second=function(){return(new Date).getSeconds()};e.millis=function(){return Date.now()-Oc};E.prototype.redraw=function(){cb();g.lineWidth=ea;var a=e.pmouseX,b=e.pmouseY;e.pmouseX=cc;e.pmouseY=dc;g.save();e.draw();Sa();cc=e.mouseX;dc=e.mouseY;e.pmouseX=a;
e.pmouseY=b};B.prototype.redraw=function(){cb();var a=e.pmouseX,b=e.pmouseY;e.pmouseX=cc;e.pmouseY=dc;g.clear(g.DEPTH_BUFFER_BIT);Fa={attributes:{},locations:{}};e.noLights();e.lightFalloff(1,0,0);e.shininess(1);e.ambient(255,255,255);e.specular(0,0,0);e.emissive(0,0,0);e.camera();e.draw();cc=e.mouseX;dc=e.mouseY;e.pmouseX=a;e.pmouseY=b};e.noLoop=function(){eb=Da=!1;clearInterval(ma);da.onPause()};e.loop=function(){eb||(tc=Date.now(),ec=0,ma=l.setInterval(function(){try{da.onFrameStart(),e.redraw(),
da.onFrameEnd()}catch(a){throw l.clearInterval(ma),a;}},Kc),eb=Da=!0,da.onLoop())};e.frameRate=function(a){tb=a;Kc=1E3/tb;Da&&(e.noLoop(),e.loop())};e.exit=function(){l.clearInterval(ma);var a=e.externals.canvas.id;q.splice(Zb[a],1);delete Zb[a];delete S.onmousedown;for(var b in M.lib)M.lib.hasOwnProperty(b)&&M.lib[b].hasOwnProperty("detach")&&M.lib[b].detach(e);for(a=wb.length;a--;){var c=wb[a];b=c.elem;var d=c.type,c=c.fn;b.removeEventListener?b.removeEventListener(d,c,!1):b.detachEvent&&b.detachEvent("on"+
d,c)}da.onExit()};e.cursor=function(){if(1<arguments.length||1===arguments.length&&arguments[0]instanceof e.PImage){var a=arguments[0],b,c;if(3<=arguments.length){if(b=arguments[1],c=arguments[2],0>b||0>c||c>=a.height||b>=a.width)throw"x and y must be non-negative and less than the dimensions of the image";}else b=a.width>>>1,c=a.height>>>1;a='url("'+a.toDataURL()+'") '+b+" "+c+", default";S.style.cursor=a}else S.style.cursor=1===arguments.length?arguments[0]:od};e.noCursor=function(){S.style.cursor=
c.NOCURSOR};e.link=function(a,b){b!==h?l.open(a,b):l.location=a};e.beginDraw=r;e.endDraw=r;E.prototype.toImageData=function(a,b,c,d){a=a!==h?a:0;b=b!==h?b:0;c=c!==h?c:e.width;d=d!==h?d:e.height;return g.getImageData(a,b,c,d)};B.prototype.toImageData=function(a,b,c,d){a=a!==h?a:0;b=b!==h?b:0;c=c!==h?c:e.width;d=d!==h?d:e.height;var f=p.createElement("canvas").getContext("2d").createImageData(c,d),k=new ga(4*c*d);g.readPixels(a,b,c,d,g.RGBA,g.UNSIGNED_BYTE,k);a=0;b=k.length;for(var w=f.data;a<b;a++)w[a]=
k[4*(d-1-Math.floor(a/4/c))*c+a%(4*c)];return f};e.status=function(a){l.status=a};e.binary=function(a,b){var c;if(0<b)c=b;else if(a instanceof Char)c=16,a|=0;else for(c=32;1<c&&!(a>>>c-1&1);)c--;for(var e="";0<c;)e+=a>>>--c&1?"1":"0";return e};e.unbinary=function(a){for(var b=a.length-1,c=1,e=0;0<=b;){var d=a[b--];if("0"!==d&&"1"!==d)throw"the value passed into unbinary was not an 8 bit binary number";"1"===d&&(e+=c);c<<=1}return e};e.hex=function(a,b){1===arguments.length&&(b=a instanceof Char?4:
8);var c=a,e=b,e=e===h||null===e?e=8:e;0>c&&(c=4294967295+c+1);for(c=Number(c).toString(16).toUpperCase();c.length<e;)c="0"+c;c.length>=e&&(c=c.substring(c.length-e,c.length));return c};e.unhex=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Fb(a[c]));return b}return Fb(a)};e.loadStrings=function(a){if(G[a])return G[a].split("\n");a=d(a);if("string"!==typeof a||""===a)return[];a=a.replace(/(\r\n?)/g,"\n").replace(/\n$/,"");return a.split("\n")};e.saveStrings=function(a,b){G[a]=
b.join("\n")};e.loadBytes=function(a){a=d(a);for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b};e.matchAll=function(a,b){for(var c=[],e,d=RegExp(b,"g");null!==(e=d.exec(a));)c.push(e),0===e[0].length&&++d.lastIndex;return 0<c.length?c:null};e.match=function(a,b){return a.match(b)};e.println=function(a){M.logger.println(a)};e.print=function(a){M.logger.print(a)};e.str=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(a[c].toString()+"");return b}return a.toString()+
""};e.parseBoolean=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(db(a[c]));return b}return db(a)};e.parseByte=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(0-(a[c]&128)|a[c]&127);return b}return 0-(a&128)|a&127};e.parseChar=function(a){if("number"===typeof a)return new Char(String.fromCharCode(a&65535));if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(new Char(String.fromCharCode(a[c]&65535)));return b}throw"char() may receive only one argument of type int, byte, int[], or byte[].";
};e.parseFloat=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Hb(a[c]));return b}return Hb(a)};e.parseInt=function(a,b){if(a instanceof Array){for(var c=[],e=0;e<a.length;e++)"string"!==typeof a[e]||/^\s*[+\-]?\d+\s*$/.test(a[e])?c.push(Ib(a[e],b)):c.push(0);return c}return Ib(a,b)};e.__int_cast=function(a){return 0|a};e.__instanceof=function(a,b){if("function"!==typeof b)throw"Function is expected as type argument for instanceof operator";if("string"===typeof a)return b===
Object||b===String;if(a instanceof b)return!0;if("object"!==typeof a||null===a)return!1;var c=a.constructor;if(b.$isInterface){for(var e=[];c;)c.$interfaces&&(e=e.concat(c.$interfaces)),c=c.$base;for(;0<e.length;){c=e.shift();if(c===b)return!0;c.$interfaces&&(e=e.concat(c.$interfaces))}return!1}for(;c.hasOwnProperty("$base");)if(c=c.$base,c===b)return!0;return!1};W.prototype.size=function(a,b,d){C&&e.stroke(0);R&&e.fill(255);d={fillStyle:g.fillStyle,strokeStyle:g.strokeStyle,lineCap:g.lineCap,lineJoin:g.lineJoin};
0<S.style.length&&(S.style.removeProperty("width"),S.style.removeProperty("height"));S.width=e.width=a||100;S.height=e.height=b||100;for(var f in d)d.hasOwnProperty(f)&&(g[f]=d[f]);e.textFont(ba);e.background();Yc=Math.max(1E3,0.05*a*b);e.externals.context=g;for(a=0;a<c.SINCOS_LENGTH;a++)Ub[a]=e.sin(0.5*a*(c.PI/180)),Vb[a]=e.cos(0.5*a*(c.PI/180))};E.prototype.size=function(a,b,c){g===h&&(g=S.getContext("2d"),Ab=new Za,Bb=new Za,K=new Ya,fa=new Ya);W.prototype.size.apply(this,arguments)};B.prototype.size=
function(){var a=!1;return function(b,c,d){if(a)throw"Multiple calls to size() for 3D renders are not allowed.";a=!0;try{S.width=e.width=b||100;S.height=e.height=c||100;for(var f=S,h=["experimental-webgl","webgl","webkit-3d"],k,l=0,s=h.length;l<s&&!(k=f.getContext(h[l],{antialias:!1,preserveDrawingBuffer:!0}));l++);g=k;Sc=g.createTexture();Tc=g.createTexture()}catch(m){M.debug(m)}if(!g)throw"WebGL context is not supported on this browser.";g.viewport(0,0,S.width,S.height);g.enable(g.DEPTH_TEST);g.enable(g.BLEND);
g.blendFunc(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA);J=Ic(g,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}");
na=Ic(g,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}");
e.strokeWeight(1);y=Ic(g,td,"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}");g.useProgram(y);Y("usingTexture3d",y,"usingTexture",ua);e.lightFalloff(1,0,0);e.shininess(1);e.ambient(255,255,255);e.specular(0,0,0);e.emissive(0,0,0);wc=g.createBuffer();
g.bindBuffer(g.ARRAY_BUFFER,wc);g.bufferData(g.ARRAY_BUFFER,cd,g.STATIC_DRAW);xc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,xc);g.bufferData(g.ARRAY_BUFFER,rd,g.STATIC_DRAW);yc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,yc);g.bufferData(g.ARRAY_BUFFER,dd,g.STATIC_DRAW);gc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,gc);g.bufferData(g.ARRAY_BUFFER,Hc,g.STATIC_DRAW);zc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,zc);g.bufferData(g.ARRAY_BUFFER,sd,g.STATIC_DRAW);Tb=g.createBuffer();Ac=g.createBuffer();
Pc=g.createBuffer();Bc=g.createBuffer();Qc=g.createBuffer();Rc=g.createBuffer();hc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,hc);g.bufferData(g.ARRAY_BUFFER,new A([0,0,0]),g.STATIC_DRAW);Cc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,Cc);g.bufferData(g.ARRAY_BUFFER,new A([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),g.STATIC_DRAW);Dc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,Dc);g.bufferData(g.ARRAY_BUFFER,new A([0,0,1,0,1,1,0,1]),g.STATIC_DRAW);Ec=g.createBuffer();g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,Ec);
g.bufferData(g.ELEMENT_ARRAY_BUFFER,new v([0,1,2,2,3,0]),g.STATIC_DRAW);qb=new I;Ra=new I;K=new I;fa=new I;Ha=new I;e.camera();e.perspective();Ab=new Za;Bb=new Za;Sb=new I;fc=new I;xb=new I;yb=new I;uc=new I;vc=new I;vc.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);W.prototype.size.apply(this,arguments)}}();E.prototype.ambientLight=W.prototype.a3DOnlyFunction;B.prototype.ambientLight=function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";d=new PVector(d,f,h);f=new I;f.scale(1,
-1,1);f.apply(K.array());f.mult(d,d);a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uLights.color.3d."+O,y,"uLights"+O+".color",a);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());Y("uLights.type.3d."+O,y,"uLights"+O+".type",0);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.directionalLight=W.prototype.a3DOnlyFunction;B.prototype.directionalLight=function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+
" lights";g.useProgram(y);var k=new I;k.scale(1,-1,1);k.apply(K.array());k=k.array();d=[k[0]*d+k[4]*f+k[8]*h,k[1]*d+k[5]*f+k[9]*h,k[2]*d+k[6]*f+k[10]*h];a=ta(a,b,e,0);T("uLights.color.3d."+O,y,"uLights"+O+".color",[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255]);T("uLights.position.3d."+O,y,"uLights"+O+".position",d);Y("uLights.type.3d."+O,y,"uLights"+O+".type",1);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.lightFalloff=W.prototype.a3DOnlyFunction;B.prototype.lightFalloff=
function(a,b,c){g.useProgram(y);T("uFalloff3d",y,"uFalloff",[a,b,c])};E.prototype.lightSpecular=W.prototype.a3DOnlyFunction;B.prototype.lightSpecular=function(a,b,e){a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uSpecular3d",y,"uSpecular",a)};e.lights=function(){e.ambientLight(128,128,128);e.directionalLight(128,128,128,0,0,-1);e.lightFalloff(1,0,0);e.lightSpecular(0,0,0)};E.prototype.pointLight=W.prototype.a3DOnlyFunction;B.prototype.pointLight=
function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";d=new PVector(d,f,h);f=new I;f.scale(1,-1,1);f.apply(K.array());f.mult(d,d);a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uLights.color.3d."+O,y,"uLights"+O+".color",a);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());Y("uLights.type.3d."+O,y,"uLights"+O+".type",2);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.noLights=W.prototype.a3DOnlyFunction;
B.prototype.noLights=function(){O=0;g.useProgram(y);Y("uLightCount3d",y,"uLightCount",O)};E.prototype.spotLight=W.prototype.a3DOnlyFunction;B.prototype.spotLight=function(a,b,e,d,f,h,k,l,s,m,n){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";g.useProgram(y);d=new PVector(d,f,h);f=new I;f.scale(1,-1,1);f.apply(K.array());f.mult(d,d);f=f.array();k=[f[0]*k+f[4]*l+f[8]*s,f[1]*k+f[5]*l+f[9]*s,f[2]*k+f[6]*l+f[10]*s];a=ta(a,b,e,0);T("uLights.color.3d."+O,y,"uLights"+O+".color",[((a&c.RED_MASK)>>>
16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255]);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());T("uLights.direction.3d."+O,y,"uLights"+O+".direction",k);T("uLights.concentration.3d."+O,y,"uLights"+O+".concentration",n);T("uLights.angle.3d."+O,y,"uLights"+O+".angle",m);Y("uLights.type.3d."+O,y,"uLights"+O+".type",3);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode";};B.prototype.beginCamera=function(){if(kc)throw"You cannot call beginCamera() again before calling endCamera()";
kc=!0;K=Ra;fa=qb};E.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode";};B.prototype.endCamera=function(){if(!kc)throw"You cannot call endCamera() before calling beginCamera()";K.set(qb);fa.set(Ra);kc=!1};e.camera=function(a,b,c,d,f,g,k,l,s){a===h&&(Gc=e.width/2,rb=e.height/2,sb=rb/Math.tan(lc/2),a=Gc,b=rb,c=sb,d=Gc,f=rb,k=g=0,l=1,s=0);d=new PVector(a-d,b-f,c-g);var m=new PVector(k,l,s);d.normalize();s=PVector.cross(m,d);m=PVector.cross(d,s);s.normalize();m.normalize();
k=s.x;l=s.y;s=s.z;f=m.x;g=m.y;var m=m.z,n=d.x,p=d.y;d=d.z;qb.set(k,l,s,0,f,g,m,0,n,p,d,0,0,0,0,1);qb.translate(-a,-b,-c);Ra.reset();Ra.invApply(k,l,s,0,f,g,m,0,n,p,d,0,0,0,0,1);Ra.translate(a,b,c);K.set(qb);fa.set(Ra)};e.perspective=function(a,b,c,d){0===arguments.length&&(rb=S.height/2,sb=rb/Math.tan(lc/2),Zc=sb/10,$c=10*sb,ad=e.width/e.height,a=lc,b=ad,c=Zc,d=$c);var f,g;f=c*Math.tan(a/2);g=-f;e.frustum(g*b,f*b,g,f,c,d)};E.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode";
};B.prototype.frustum=function(a,b,c,e,d,f){Ha=new I;Ha.set(2*d/(b-a),0,(b+a)/(b-a),0,0,2*d/(e-c),(e+c)/(e-c),0,0,0,-(f+d)/(f-d),-(2*f*d)/(f-d),0,0,-1,0);a=new I;a.set(Ha);a.transpose();g.useProgram(J);U("projection2d",J,"uProjection",!1,a.array());g.useProgram(y);U("projection3d",y,"uProjection",!1,a.array());g.useProgram(na);U("uProjectionUS",na,"uProjection",!1,a.array())};e.ortho=function(a,b,c,d,f,h){0===arguments.length&&(a=0,b=e.width,c=0,d=e.height,f=-10,h=10);var k=2/(b-a),l=2/(d-c),s=-2/
(h-f),m=-(b+a)/(b-a),n=-(d+c)/(d-c),p=-(h+f)/(h-f);Ha=new I;Ha.set(k,0,0,m,0,l,0,n,0,0,s,p,0,0,0,1);k=new I;k.set(Ha);k.transpose();g.useProgram(J);U("projection2d",J,"uProjection",!1,k.array());g.useProgram(y);U("projection3d",y,"uProjection",!1,k.array());g.useProgram(na);U("uProjectionUS",na,"uProjection",!1,k.array())};e.printProjection=function(){Ha.print()};e.printCamera=function(){qb.print()};E.prototype.box=W.prototype.a3DOnlyFunction;B.prototype.box=function(a,b,c){b&&c||(b=c=a);var e=new I;
e.scale(a,b,c);a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();R&&(g.useProgram(y),U("model3d",y,"uModel",!1,e.array()),U("view3d",y,"uView",!1,a.array()),g.enable(g.POLYGON_OFFSET_FILL),g.polygonOffset(1,1),T("color3d",y,"uColor",ka),0<O?(b=new I,b.set(a),c=new I,c.set(e),b.mult(c),c=new I,c.set(b),c.invert(),c.transpose(),U("uNormalTransform3d",y,"uNormalTransform",!1,c.array()),Z("aNormal3d",y,"aNormal",3,xc)):sa("aNormal3d",y,"aNormal"),Z("aVertex3d",y,"aVertex",3,wc),sa("aColor3d",y,
"aColor"),sa("aTexture3d",y,"aTexture"),g.drawArrays(g.TRIANGLES,0,cd.length/3),g.disable(g.POLYGON_OFFSET_FILL));0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,e.array()),U("uView2d",J,"uView",!1,a.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Z("vertex2d",J,"aVertex",3,yc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.LINES,0,dd.length/3))};e.sphereDetail=function(a,b){var e;1===arguments.length&&(a=b=arguments[0]);3>a&&(a=3);2>b&&(b=2);if(a!==pb||
b!==jc){var d=c.SINCOS_LENGTH/a,f=new A(a),h=new A(a);for(e=0;e<a;e++)f[e]=Vb[e*d%c.SINCOS_LENGTH|0],h[e]=Ub[e*d%c.SINCOS_LENGTH|0];e=a*(b-1)+2;d=0;Oa=new A(e);Pa=new A(e);Qa=new A(e);var k=0.5*c.SINCOS_LENGTH/b,l=k;for(e=1;e<b;e++){for(var s=Ub[l%c.SINCOS_LENGTH|0],m=-Vb[l%c.SINCOS_LENGTH|0],n=0;n<a;n++)Oa[d]=f[n]*s,Pa[d]=m,Qa[d++]=h[n]*s;l+=k}pb=a;jc=b;P=[];for(f=0;f<pb;f++)P.push(0),P.push(-1),P.push(0),P.push(Oa[f]),P.push(Pa[f]),P.push(Qa[f]);P.push(0);P.push(-1);P.push(0);P.push(Oa[0]);P.push(Pa[0]);
P.push(Qa[0]);k=0;for(f=2;f<jc;f++){h=e=k;d=k+=pb;for(l=0;l<pb;l++)P.push(Oa[h]),P.push(Pa[h]),P.push(Qa[h++]),P.push(Oa[d]),P.push(Pa[d]),P.push(Qa[d++]);h=e;d=k;P.push(Oa[h]);P.push(Pa[h]);P.push(Qa[h]);P.push(Oa[d]);P.push(Pa[d]);P.push(Qa[d])}for(f=0;f<pb;f++)d=k+f,P.push(Oa[d]),P.push(Pa[d]),P.push(Qa[d]),P.push(0),P.push(1),P.push(0);P.push(Oa[k]);P.push(Pa[k]);P.push(Qa[k]);P.push(0);P.push(1);P.push(0);g.bindBuffer(g.ARRAY_BUFFER,Tb);g.bufferData(g.ARRAY_BUFFER,new A(P),g.STATIC_DRAW)}};E.prototype.sphere=
W.prototype.a3DOnlyFunction;B.prototype.sphere=function(a){(3>pb||2>jc)&&e.sphereDetail(30);var b=new I;b.scale(a,a,a);a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();if(R){if(0<O){var c=new I;c.set(a);var d=new I;d.set(b);c.mult(d);d=new I;d.set(c);d.invert();d.transpose();U("uNormalTransform3d",y,"uNormalTransform",!1,d.array());Z("aNormal3d",y,"aNormal",3,Tb)}else sa("aNormal3d",y,"aNormal");g.useProgram(y);sa("aTexture3d",y,"aTexture");U("uModel3d",y,"uModel",!1,b.array());U("uView3d",
y,"uView",!1,a.array());Z("aVertex3d",y,"aVertex",3,Tb);sa("aColor3d",y,"aColor");g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(1,1);T("uColor3d",y,"uColor",ka);g.drawArrays(g.TRIANGLE_STRIP,0,P.length/3);g.disable(g.POLYGON_OFFSET_FILL)}0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,b.array()),U("uView2d",J,"uView",!1,a.array()),Z("aVertex2d",J,"aVertex",3,Tb),sa("aTextureCoord2d",J,"aTextureCoord"),T("uColor2d",J,"uColor",X),Y("uIsDrawingText",J,"uIsDrawingText",!1),g.drawArrays(g.LINE_STRIP,
0,P.length/3))};e.modelX=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[0]*f+d[1]*g+d[2]*h+d[3]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*b;return 0!==d?a/d:a};e.modelY=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[4]*f+d[5]*g+d[6]*h+d[7]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*
b;return 0!==d?a/d:a};e.modelZ=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[8]*f+d[9]*g+d[10]*h+d[11]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*b;return 0!==d?a/d:a};E.prototype.ambient=W.prototype.a3DOnlyFunction;B.prototype.ambient=function(a,b,c){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialAmbient3d",y,"uMaterialAmbient",e.color.toGLArray(a).slice(0,
3))};E.prototype.emissive=W.prototype.a3DOnlyFunction;B.prototype.emissive=function(a,b,c){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialEmissive3d",y,"uMaterialEmissive",e.color.toGLArray(a).slice(0,3))};E.prototype.shininess=W.prototype.a3DOnlyFunction;B.prototype.shininess=function(a){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);T("uShininess3d",y,"uShininess",a)};E.prototype.specular=W.prototype.a3DOnlyFunction;B.prototype.specular=function(a,b,c){g.useProgram(y);
Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialSpecular3d",y,"uMaterialSpecular",e.color.toGLArray(a).slice(0,3))};e.screenX=function(a,b,c){var d=K.array();if(16===d.length){var f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=Ha.array();a=c[0]*f+c[1]*g+c[2]*h+c[3]*b;f=c[12]*f+c[13]*g+c[14]*h+c[15]*b;0!==f&&(a/=f);return e.width*(1+a)/2}return K.multX(a,b)};e.screenY=function(a,b,c){var d=K.array();if(16===d.length){var f=
d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=Ha.array();a=c[4]*f+c[5]*g+c[6]*h+c[7]*b;f=c[12]*f+c[13]*g+c[14]*h+c[15]*b;0!==f&&(a/=f);return e.height*(1+a)/2}return K.multY(a,b)};e.screenZ=function(a,b,c){var e=K.array();if(16!==e.length)return 0;var d=Ha.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[8]*f+d[9]*g+d[10]*h+d[11]*b;d=d[12]*f+d[13]*
g+d[14]*h+d[15]*b;0!==d&&(a/=d);return(a+1)/2};W.prototype.fill=function(){var a=e.color.apply(this,arguments);a===La&&R||(R=!0,La=a)};E.prototype.fill=function(){W.prototype.fill.apply(this,arguments);N=!0};B.prototype.fill=function(){W.prototype.fill.apply(this,arguments);ka=e.color.toGLArray(La)};e.noFill=function(){R=!1};W.prototype.stroke=function(){var a=e.color.apply(this,arguments);a===ja&&C||(C=!0,ja=a)};E.prototype.stroke=function(){W.prototype.stroke.apply(this,arguments);ab=!0};B.prototype.stroke=
function(){W.prototype.stroke.apply(this,arguments);X=e.color.toGLArray(ja)};e.noStroke=function(){C=!1};W.prototype.strokeWeight=function(a){ea=a};E.prototype.strokeWeight=function(a){W.prototype.strokeWeight.apply(this,arguments);g.lineWidth=a};B.prototype.strokeWeight=function(a){W.prototype.strokeWeight.apply(this,arguments);g.useProgram(J);T("pointSize2d",J,"uPointSize",a);g.useProgram(na);T("pointSizeUnlitShape",na,"uPointSize",a);g.lineWidth(a)};e.strokeCap=function(a){ha.$ensureContext().lineCap=
a};e.strokeJoin=function(a){ha.$ensureContext().lineJoin=a};E.prototype.smooth=function(){ra=!0;var a=S.style;a.setProperty("image-rendering","optimizeQuality","important");a.setProperty("-ms-interpolation-mode","bicubic","important");g.hasOwnProperty("mozImageSmoothingEnabled")&&(g.mozImageSmoothingEnabled=!0)};B.prototype.smooth=function(){ra=!0};E.prototype.noSmooth=function(){ra=!1;var a=S.style;a.setProperty("image-rendering","optimizeSpeed","important");a.setProperty("image-rendering","-moz-crisp-edges",
"important");a.setProperty("image-rendering","-webkit-optimize-contrast","important");a.setProperty("image-rendering","optimize-contrast","important");a.setProperty("-ms-interpolation-mode","nearest-neighbor","important");g.hasOwnProperty("mozImageSmoothingEnabled")&&(g.mozImageSmoothingEnabled=!1)};B.prototype.noSmooth=function(){ra=!1};E.prototype.point=function(a,b){C&&(a=Math.round(a),b=Math.round(b),g.fillStyle=e.color.toString(ja),N=!0,1<ea?(g.beginPath(),g.arc(a,b,ea/2,0,c.TWO_PI,!1),g.fill()):
g.fillRect(a,b,1,1))};B.prototype.point=function(a,b,c){var e=new I;e.translate(a,b,c||0);e.transpose();a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();g.useProgram(J);U("uModel2d",J,"uModel",!1,e.array());U("uView2d",J,"uView",!1,a.array());0<ea&&C&&(T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Y("uSmooth2d",J,"uSmooth",ra),Z("aVertex2d",J,"aVertex",3,hc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.POINTS,0,1))};e.beginShape=function(a){aa=a;t=[]};E.prototype.vertex=
function(a,b,c){var e=[];ib&&(ib=!1);e.isVert=!0;e[0]=a;e[1]=b;e[2]=0;e[3]=0;e[4]=0;e[5]=La;e[6]=ja;t.push(e);c&&(t[t.length-1].moveTo=c)};B.prototype.vertex=function(a,b,e,d,f){var g=[];ib&&(ib=!1);g.isVert=!0;f===h&&ua&&(f=d,d=e,e=0);d!==h&&f!==h&&(Wc===c.IMAGE&&(d/=Uc,f/=Vc),d=1<d?1:d,d=0>d?0:d,f=1<f?1:f,f=0>f?0:f);g[0]=a;g[1]=b;g[2]=e||0;g[3]=d||0;g[4]=f||0;g[5]=ka[0];g[6]=ka[1];g[7]=ka[2];g[8]=ka[3];g[9]=X[0];g[10]=X[1];g[11]=X[2];g[12]=X[3];g[13]=Gb;g[14]=Eb;g[15]=ub;t.push(g)};var gd=function(a,
b){var c=new I;c.scale(1,-1,1);c.apply(K.array());c.transpose();g.useProgram(na);U("uViewUS",na,"uView",!1,c.array());Y("uSmoothUS",na,"uSmooth",ra);Z("aVertexUS",na,"aVertex",3,hc);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);Z("aColorUS",na,"aColor",4,Bc);g.bufferData(g.ARRAY_BUFFER,new A(b),g.STREAM_DRAW);g.drawArrays(g.POINTS,0,a.length/3)},Ca=function(a,b,c){b="LINES"===b?g.LINES:"LINE_LOOP"===b?g.LINE_LOOP:g.LINE_STRIP;var e=new I;e.scale(1,-1,1);e.apply(K.array());e.transpose();g.useProgram(na);
U("uViewUS",na,"uView",!1,e.array());Z("aVertexUS",na,"aVertex",3,Ac);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);Z("aColorUS",na,"aColor",4,Qc);g.bufferData(g.ARRAY_BUFFER,new A(c),g.STREAM_DRAW);g.drawArrays(b,0,a.length/3)},$a=function(a,b,c,e){b="TRIANGLES"===b?g.TRIANGLES:"TRIANGLE_FAN"===b?g.TRIANGLE_FAN:g.TRIANGLE_STRIP;var d=new I;d.scale(1,-1,1);d.apply(K.array());d.transpose();g.useProgram(y);U("model3d",y,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);U("view3d",y,"uView",!1,d.array());
g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(1,1);T("color3d",y,"uColor",[-1,0,0,0]);Z("vertex3d",y,"aVertex",3,Pc);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);ua&&null!==gb&&sc(c);Z("aColor3d",y,"aColor",4,Bc);g.bufferData(g.ARRAY_BUFFER,new A(c),g.STREAM_DRAW);sa("aNormal3d",y,"aNormal");ua&&(Y("uUsingTexture3d",y,"uUsingTexture",ua),Z("aTexture3d",y,"aTexture",2,Rc),g.bufferData(g.ARRAY_BUFFER,new A(e),g.STREAM_DRAW));g.drawArrays(b,0,a.length/3);g.disable(g.POLYGON_OFFSET_FILL)};E.prototype.endShape=
function(a){if(0!==t.length){(a=a===c.CLOSE)&&t.push(t[0]);var b=[],d=[],f=[],k=[],l;ib=!0;var w,m,s=t.length;for(w=0;w<s;w++)for(l=t[w],m=0;3>m;m++)b.push(l[m]);for(w=0;w<s;w++)for(l=t[w],m=5;9>m;m++)d.push(l[m]);for(w=0;w<s;w++)for(l=t[w],m=9;13>m;m++)f.push(l[m]);for(w=0;w<s;w++)l=t[w],k.push(l[3]),k.push(l[4]);if(!Cb||aa!==c.POLYGON&&aa!==h)if(!Db||aa!==c.POLYGON&&aa!==h)if(aa===c.POINTS)for(w=0;w<s;w++)l=t[w],C&&e.stroke(l[6]),e.point(l[0],l[1]);else if(aa===c.LINES)for(w=0;w+1<s;w+=2)l=t[w],
C&&e.stroke(t[w+1][6]),e.line(l[0],l[1],t[w+1][0],t[w+1][1]);else if(aa===c.TRIANGLES)for(w=0;w+2<s;w+=3)l=t[w],g.beginPath(),g.moveTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1]),g.lineTo(t[w+2][0],t[w+2][1]),g.lineTo(l[0],l[1]),R&&(e.fill(t[w+2][5]),wa()),C&&(e.stroke(t[w+2][6]),za()),g.closePath();else if(aa===c.TRIANGLE_STRIP)for(w=0;w+1<s;w++)l=t[w],g.beginPath(),g.moveTo(t[w+1][0],t[w+1][1]),g.lineTo(l[0],l[1]),C&&e.stroke(t[w+1][6]),R&&e.fill(t[w+1][5]),w+2<s&&(g.lineTo(t[w+2][0],t[w+2][1]),C&&
e.stroke(t[w+2][6]),R&&e.fill(t[w+2][5])),Ta();else if(aa===c.TRIANGLE_FAN){if(2<s)for(g.beginPath(),g.moveTo(t[0][0],t[0][1]),g.lineTo(t[1][0],t[1][1]),g.lineTo(t[2][0],t[2][1]),R&&(e.fill(t[2][5]),wa()),C&&(e.stroke(t[2][6]),za()),g.closePath(),w=3;w<s;w++)l=t[w],g.beginPath(),g.moveTo(t[0][0],t[0][1]),g.lineTo(t[w-1][0],t[w-1][1]),g.lineTo(l[0],l[1]),R&&(e.fill(l[5]),wa()),C&&(e.stroke(l[6]),za()),g.closePath()}else if(aa===c.QUADS)for(w=0;w+3<s;w+=4){l=t[w];g.beginPath();g.moveTo(l[0],l[1]);for(m=
1;4>m;m++)g.lineTo(t[w+m][0],t[w+m][1]);g.lineTo(l[0],l[1]);R&&(e.fill(t[w+3][5]),wa());C&&(e.stroke(t[w+3][6]),za());g.closePath()}else if(aa===c.QUAD_STRIP){if(3<s)for(w=0;w+1<s;w+=2)l=t[w],g.beginPath(),w+3<s?(g.moveTo(t[w+2][0],t[w+2][1]),g.lineTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1]),g.lineTo(t[w+3][0],t[w+3][1]),R&&e.fill(t[w+3][5]),C&&e.stroke(t[w+3][6])):(g.moveTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1])),Ta()}else{g.beginPath();g.moveTo(t[0][0],t[0][1]);for(w=1;w<s;w++)l=t[w],l.isVert&&
(l.moveTo?g.moveTo(l[0],l[1]):g.lineTo(l[0],l[1]));Ta()}else{g.beginPath();for(w=0;w<s;w++)l=t[w],t[w].isVert?t[w].moveTo?g.moveTo(l[0],l[1]):g.lineTo(l[0],l[1]):g.bezierCurveTo(t[w][0],t[w][1],t[w][2],t[w][3],t[w][4],t[w][5]);Ta()}else if(3<s){b=[];d=1-oc;g.beginPath();g.moveTo(t[1][0],t[1][1]);for(w=1;w+2<s;w++)l=t[w],b[0]=[l[0],l[1]],b[1]=[l[0]+(d*t[w+1][0]-d*t[w-1][0])/6,l[1]+(d*t[w+1][1]-d*t[w-1][1])/6],b[2]=[t[w+1][0]+(d*t[w][0]-d*t[w+2][0])/6,t[w+1][1]+(d*t[w][1]-d*t[w+2][1])/6],b[3]=[t[w+
1][0],t[w+1][1]],g.bezierCurveTo(b[1][0],b[1][1],b[2][0],b[2][1],b[3][0],b[3][1]);Ta()}Db=Cb=!1;va=[];oa=0;a&&t.pop()}};B.prototype.endShape=function(a){if(0!==t.length){var b=a===c.CLOSE;a=[];var e=[],d=[],f=[],k=[],l;ib=!0;var m,s,n=t.length;for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)e.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=5;9>s;s++)d.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);for(m=0;m<n;m++)l=t[m],k.push(l[3]),k.push(l[4]);if(b){e.push(t[0][0]);e.push(t[0][1]);e.push(t[0][2]);
for(m=5;9>m;m++)d.push(t[0][m]);for(m=9;13>m;m++)f.push(t[0][m]);k.push(t[0][3]);k.push(t[0][4])}if(!Cb||aa!==c.POLYGON&&aa!==h)if(!Db||aa!==c.POLYGON&&aa!==h){if(aa===c.POINTS){for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);gd(a,f)}else if(aa===c.LINES){for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=5;9>s;s++)d.push(l[s]);Ca(a,"LINES",f)}else if(aa===c.TRIANGLES){if(2<n)for(m=0;m+2<n;m+=3){e=[];k=[];a=[];d=[];f=[];for(s=0;3>s;s++)for(b=0;3>b;b++)a.push(t[m+
s][b]),e.push(t[m+s][b]);for(s=0;3>s;s++)for(b=3;5>b;b++)k.push(t[m+s][b]);for(s=0;3>s;s++)for(b=5;9>b;b++)d.push(t[m+s][b]),f.push(t[m+s][b+4]);C&&Ca(a,"LINE_LOOP",f);(R||ua)&&$a(e,"TRIANGLES",d,k)}}else if(aa===c.TRIANGLE_STRIP){if(2<n)for(m=0;m+2<n;m++){a=[];e=[];f=[];d=[];k=[];for(s=0;3>s;s++)for(b=0;3>b;b++)a.push(t[m+s][b]),e.push(t[m+s][b]);for(s=0;3>s;s++)for(b=3;5>b;b++)k.push(t[m+s][b]);for(s=0;3>s;s++)for(b=5;9>b;b++)f.push(t[m+s][b+4]),d.push(t[m+s][b]);(R||ua)&&$a(e,"TRIANGLE_STRIP",
d,k);C&&Ca(a,"LINE_LOOP",f)}}else if(aa===c.TRIANGLE_FAN){if(2<n){for(m=0;3>m;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;3>m;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);C&&Ca(a,"LINE_LOOP",f);for(m=2;m+1<n;m++){a=[];f=[];a.push(t[0][0]);a.push(t[0][1]);a.push(t[0][2]);f.push(t[0][9]);f.push(t[0][10]);f.push(t[0][11]);f.push(t[0][12]);for(s=0;2>s;s++)for(b=0;3>b;b++)a.push(t[m+s][b]);for(s=0;2>s;s++)for(b=9;13>b;b++)f.push(t[m+s][b]);C&&Ca(a,"LINE_STRIP",f)}(R||ua)&&$a(e,"TRIANGLE_FAN",d,k)}}else if(aa===
c.QUADS)for(m=0;m+3<n;m+=4){a=[];for(s=0;4>s;s++)for(l=t[m+s],b=0;3>b;b++)a.push(l[b]);C&&Ca(a,"LINE_LOOP",f);if(R){e=[];d=[];k=[];for(s=0;3>s;s++)e.push(t[m][s]);for(s=5;9>s;s++)d.push(t[m][s]);for(s=0;3>s;s++)e.push(t[m+1][s]);for(s=5;9>s;s++)d.push(t[m+1][s]);for(s=0;3>s;s++)e.push(t[m+3][s]);for(s=5;9>s;s++)d.push(t[m+3][s]);for(s=0;3>s;s++)e.push(t[m+2][s]);for(s=5;9>s;s++)d.push(t[m+2][s]);ua&&(k.push(t[m+0][3]),k.push(t[m+0][4]),k.push(t[m+1][3]),k.push(t[m+1][4]),k.push(t[m+3][3]),k.push(t[m+
3][4]),k.push(t[m+2][3]),k.push(t[m+2][4]));$a(e,"TRIANGLE_STRIP",d,k)}}else if(aa===c.QUAD_STRIP){if(3<n){for(m=0;2>m;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;2>m;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);Ca(a,"LINE_STRIP",f);4<n&&0<n%2&&(e.splice(e.length-3),t.pop());for(m=0;m+3<n;m+=2){a=[];f=[];for(s=0;3>s;s++)a.push(t[m+1][s]);for(s=0;3>s;s++)a.push(t[m+3][s]);for(s=0;3>s;s++)a.push(t[m+2][s]);for(s=0;3>s;s++)a.push(t[m+0][s]);for(s=9;13>s;s++)f.push(t[m+1][s]);for(s=9;13>s;s++)f.push(t[m+
3][s]);for(s=9;13>s;s++)f.push(t[m+2][s]);for(s=9;13>s;s++)f.push(t[m+0][s]);C&&Ca(a,"LINE_STRIP",f)}(R||ua)&&$a(e,"TRIANGLE_LIST",d,k)}}else if(1===n){for(s=0;3>s;s++)a.push(t[0][s]);for(s=9;13>s;s++)f.push(t[0][s]);gd(a,f)}else{for(m=0;m<n;m++){l=t[m];for(s=0;3>s;s++)a.push(l[s]);for(s=5;9>s;s++)f.push(l[s])}C&&b?Ca(a,"LINE_LOOP",f):C&&!b&&Ca(a,"LINE_STRIP",f);(R||ua)&&$a(e,"TRIANGLE_FAN",d,k)}ua=!1;g.useProgram(y);Y("usingTexture3d",y,"uUsingTexture",ua)}else a=e,a.splice(a.length-3),f.splice(f.length-
4),C&&Ca(a,null,f),R&&$a(e,"TRIANGLES",d);else C&&Ca(e,null,f),R&&$a(e,null,d);Db=Cb=!1;va=[];oa=0}};var hd=function(a,b){var c=1/a,e=c*c,d=e*c;b.set(0,0,0,1,d,e,c,0,6*d,2*e,0,0,6*d,0,0,0)},id=function(){xb||(Sb=new I,xb=new I,Lc=!0);var a=oc;Sb.set((a-1)/2,(a+3)/2,(-3-a)/2,(1-a)/2,1-a,(-5-a)/2,a+2,(a-1)/2,(a-1)/2,0,(1-a)/2,0,0,1,0,0);hd(pc,xb);uc||(fc=new I);fc.set(Sb);fc.preApply(uc);xb.apply(Sb)};E.prototype.bezierVertex=function(){Db=!0;var a=[];if(ib)throw"vertex() must be used at least once before calling bezierVertex()";
for(var b=0;b<arguments.length;b++)a[b]=arguments[b];t.push(a);t[t.length-1].isVert=!1};B.prototype.bezierVertex=function(){Db=!0;if(ib)throw"vertex() must be used at least once before calling bezierVertex()";if(9===arguments.length){yb===h&&(yb=new I);var a=t.length-1;hd(qc,yb);yb.apply(vc);for(var b=yb.array(),c=t[a][0],d=t[a][1],a=t[a][2],f=b[4]*c+b[5]*arguments[0]+b[6]*arguments[3]+b[7]*arguments[6],g=b[8]*c+b[9]*arguments[0]+b[10]*arguments[3]+b[11]*arguments[6],k=b[12]*c+b[13]*arguments[0]+
b[14]*arguments[3]+b[15]*arguments[6],l=b[4]*d+b[5]*arguments[1]+b[6]*arguments[4]+b[7]*arguments[7],m=b[8]*d+b[9]*arguments[1]+b[10]*arguments[4]+b[11]*arguments[7],n=b[12]*d+b[13]*arguments[1]+b[14]*arguments[4]+b[15]*arguments[7],p=b[4]*a+b[5]*arguments[2]+b[6]*arguments[5]+b[7]*arguments[8],r=b[8]*a+b[9]*arguments[2]+b[10]*arguments[5]+b[11]*arguments[8],b=b[12]*a+b[13]*arguments[2]+b[14]*arguments[5]+b[15]*arguments[8],v=0;v<qc;v++)c+=f,f+=g,g+=k,d+=l,l+=m,m+=n,a+=p,p+=r,r+=b,e.vertex(c,d,a);
e.vertex(arguments[6],arguments[7],arguments[8])}};e.texture=function(a){var b=ha.$ensureContext();if(a.__texture)b.bindTexture(b.TEXTURE_2D,a.__texture);else{if("canvas"===a.localName)b.bindTexture(b.TEXTURE_2D,Sc),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR),b.generateMipmap(b.TEXTURE_2D);else{var c=b.createTexture(),e=p.createElement("canvas"),d=e.getContext("2d"),
f;if(a.width&0===a.width-1)e.width=a.width;else{for(f=1;f<a.width;)f*=2;e.width=f}if(a.height&0===a.height-1)e.height=a.height;else{for(f=1;f<a.height;)f*=2;e.height=f}d.drawImage(a.sourceImg,0,0,a.width,a.height,0,0,e.width,e.height);b.bindTexture(b.TEXTURE_2D,c);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR_MIPMAP_LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,
b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,e);b.generateMipmap(b.TEXTURE_2D);a.__texture=c}Uc=a.width;Vc=a.height}ua=!0;b.useProgram(y);Y("usingTexture3d",y,"uUsingTexture",ua)};e.textureMode=function(a){Wc=a};E.prototype.curveVertex=function(a,b){Cb=!0;e.vertex(a,b)};B.prototype.curveVertex=function(a,b,c){Cb=!0;Lc||id();var d=[];d[0]=a;d[1]=b;d[2]=c;va.push(d);oa++;if(3<oa){var f=va[oa-4][0],g=va[oa-4][1],h=va[oa-4][2],k=va[oa-3][0],l=va[oa-3][1],m=va[oa-3][2],n=
va[oa-2][0],p=va[oa-2][1],r=va[oa-2][2],t=va[oa-1][0],v=va[oa-1][1],u=va[oa-1][2];a=k;b=l;c=m;var q=xb.array(),d=q[4]*f+q[5]*k+q[6]*n+q[7]*t,x=q[8]*f+q[9]*k+q[10]*n+q[11]*t,f=q[12]*f+q[13]*k+q[14]*n+q[15]*t,k=q[4]*g+q[5]*l+q[6]*p+q[7]*v,n=q[8]*g+q[9]*l+q[10]*p+q[11]*v,g=q[12]*g+q[13]*l+q[14]*p+q[15]*v,l=q[4]*h+q[5]*m+q[6]*r+q[7]*u,p=q[8]*h+q[9]*m+q[10]*r+q[11]*u,h=q[12]*h+q[13]*m+q[14]*r+q[15]*u;e.vertex(a,b,c);for(m=0;m<pc;m++)a+=d,d+=x,x+=f,b+=k,k+=n,n+=g,c+=l,l+=p,p+=h,e.vertex(a,b,c)}};E.prototype.curve=
function(a,b,c,d,f,g,h,k){e.beginShape();e.curveVertex(a,b);e.curveVertex(c,d);e.curveVertex(f,g);e.curveVertex(h,k);e.endShape()};B.prototype.curve=function(a,b,c,d,f,g,k,l,m,n,p,r){r!==h?(e.beginShape(),e.curveVertex(a,b,c),e.curveVertex(d,f,g),e.curveVertex(k,l,m),e.curveVertex(n,p,r)):(e.beginShape(),e.curveVertex(a,b),e.curveVertex(c,d),e.curveVertex(f,g),e.curveVertex(k,l));e.endShape()};e.curveTightness=function(a){oc=a};e.curveDetail=function(a){pc=a;id()};e.rectMode=function(a){qa=a};e.imageMode=
function(a){switch(a){case c.CORNER:mc=ed;break;case c.CORNERS:mc=ud;break;case c.CENTER:mc=vd;break;default:throw"Invalid imageMode";}};e.ellipseMode=function(a){la=a};e.arc=function(a,b,d,f,g,h){if(!(0>=d||h<g)){la===c.CORNERS?(d-=a,f-=b):la===c.RADIUS?(a-=d,b-=f,d*=2,f*=2):la===c.CENTER&&(a-=d/2,b-=f/2);for(;0>g;)g+=c.TWO_PI,h+=c.TWO_PI;h-g>c.TWO_PI&&(g=0,h=c.TWO_PI);d/=2;f/=2;a+=d;b+=f;g=0|0.5+2*g*e.RAD_TO_DEG;h=0|0.5+2*h*e.RAD_TO_DEG;var k,l;if(R){var m=C;C=!1;e.beginShape();e.vertex(a,b);for(k=
g;k<=h;k++)l=k%c.SINCOS_LENGTH,e.vertex(a+Vb[l]*d,b+Ub[l]*f);e.endShape(c.CLOSE);C=m}if(C){m=R;R=!1;e.beginShape();for(k=g;k<=h;k++)l=k%c.SINCOS_LENGTH,e.vertex(a+Vb[l]*d,b+Ub[l]*f);e.endShape();R=m}}};E.prototype.line=function(a,b,c,d){if(C)if(a=Math.round(a),c=Math.round(c),b=Math.round(b),d=Math.round(d),a===c&&b===d)e.point(a,b);else{for(var f=h,k=h,l=!0,f=K.array(),m=[1,0,0,0,1,0],s=0;6>s&&l;s++)l=f[s]===m[s];l&&(a===c?(b>d&&(f=b,b=d,d=f),d++,1===ea%2&&g.translate(0.5,0)):b===d&&(a>c&&(f=a,a=
c,c=f),c++,1===ea%2&&g.translate(0,0.5)),1===ea&&(k=g.lineCap,g.lineCap="butt"));g.beginPath();g.moveTo(a||0,b||0);g.lineTo(c||0,d||0);za();l&&(a===c&&1===ea%2?g.translate(-0.5,0):b===d&&1===ea%2&&g.translate(0,-0.5),1===ea&&(g.lineCap=k))}};B.prototype.line=function(a,b,c,d,f,k){if(f===h||k===h)k=0,f=d,d=c,c=0;a===d&&b===f&&c===k?e.point(a,b,c):(a=[a,b,c,d,f,k],b=new I,b.scale(1,-1,1),b.apply(K.array()),b.transpose(),0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,
0,0,1]),U("uView2d",J,"uView",!1,b.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText",J,"uIsDrawingText",!1),Z("aVertex2d",J,"aVertex",3,Ac),sa("aTextureCoord2d",J,"aTextureCoord"),g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW),g.drawArrays(g.LINES,0,2)))};E.prototype.bezier=function(){if(8!==arguments.length)throw"You must use 8 parameters for bezier() in 2D mode";e.beginShape();e.vertex(arguments[0],arguments[1]);e.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],
arguments[7]);e.endShape()};B.prototype.bezier=function(){if(12!==arguments.length)throw"You must use 12 parameters for bezier() in 3D mode";e.beginShape();e.vertex(arguments[0],arguments[1],arguments[2]);e.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11]);e.endShape()};e.bezierDetail=function(a){qc=a};e.bezierPoint=function(a,b,c,e,d){return(1-d)*(1-d)*(1-d)*a+3*(1-d)*(1-d)*d*b+3*(1-d)*d*d*c+d*d*d*e};e.bezierTangent=
function(a,b,c,e,d){return 3*d*d*(-a+3*b-3*c+e)+6*d*(a-2*b+c)+3*(-a+b)};e.curvePoint=function(a,b,c,e,d){return 0.5*(2*b+(-a+c)*d+(2*a-5*b+4*c-e)*d*d+(-a+3*b-3*c+e)*d*d*d)};e.curveTangent=function(a,b,c,e,d){return 0.5*(-a+c+2*(2*a-5*b+4*c-e)*d+3*(-a+3*b-3*c+e)*d*d)};e.triangle=function(a,b,d,f,g,h){e.beginShape(c.TRIANGLES);e.vertex(a,b,0);e.vertex(d,f,0);e.vertex(g,h,0);e.endShape()};e.quad=function(a,b,d,f,g,h,k,l){e.beginShape(c.QUADS);e.vertex(a,b,0);e.vertex(d,f,0);e.vertex(g,h,0);e.vertex(k,
l,0);e.endShape()};E.prototype.rect=function(a,b,e,d,f,k,l,m){if(e||d)if(qa===c.CORNERS?(e-=a,d-=b):qa===c.RADIUS?(e*=2,d*=2,a-=e/2,b-=d/2):qa===c.CENTER&&(a-=e/2,b-=d/2),a=Math.round(a),b=Math.round(b),e=Math.round(e),d=Math.round(d),f!==h){m===h&&(m=l=k=f);var s=e/2,n=d/2;if(f>s||f>n)f=Math.min(s,n);if(k>s||k>n)k=Math.min(s,n);if(l>s||l>n)l=Math.min(s,n);if(m>s||m>n)m=Math.min(s,n);R&&!C||g.translate(0.5,0.5);g.beginPath();g.moveTo(a+f,b);g.lineTo(a+e-k,b);g.quadraticCurveTo(a+e,b,a+e,b+k);g.lineTo(a+
e,b+d-l);g.quadraticCurveTo(a+e,b+d,a+e-l,b+d);g.lineTo(a+m,b+d);g.quadraticCurveTo(a,b+d,a,b+d-m);g.lineTo(a,b+f);g.quadraticCurveTo(a,b,a+f,b);R&&!C||g.translate(-0.5,-0.5);wa();za()}else C&&1===ea%2&&g.translate(0.5,0.5),g.beginPath(),g.rect(a,b,e,d),wa(),za(),C&&1===ea%2&&g.translate(-0.5,-0.5)};B.prototype.rect=function(a,b,e,d,f,k,l,m){if(f!==h)throw"rect() with rounded corners is not supported in 3D mode";qa===c.CORNERS?(e-=a,d-=b):qa===c.RADIUS?(e*=2,d*=2,a-=e/2,b-=d/2):qa===c.CENTER&&(a-=
e/2,b-=d/2);f=new I;f.translate(a,b,0);f.scale(e,d,1);f.transpose();b=new I;b.scale(1,-1,1);b.apply(K.array());b.transpose();0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,f.array()),U("uView2d",J,"uView",!1,b.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Z("aVertex2d",J,"aVertex",3,gc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.LINE_LOOP,0,Hc.length/3));R&&(g.useProgram(y),U("uModel3d",y,"uModel",!1,f.array()),U("uView3d",y,"uView",!1,b.array()),
g.enable(g.POLYGON_OFFSET_FILL),g.polygonOffset(1,1),T("color3d",y,"uColor",ka),0<O?(a=new I,a.set(b),b=new I,b.set(f),a.mult(b),b=new I,b.set(a),b.invert(),b.transpose(),U("uNormalTransform3d",y,"uNormalTransform",!1,b.array()),Z("aNormal3d",y,"aNormal",3,zc)):sa("normal3d",y,"aNormal"),Z("vertex3d",y,"aVertex",3,gc),g.drawArrays(g.TRIANGLE_FAN,0,Hc.length/3),g.disable(g.POLYGON_OFFSET_FILL))};E.prototype.ellipse=function(a,b,d,f){a=a||0;b=b||0;if(!(0>=d&&0>=f))if(la===c.RADIUS?(d*=2,f*=2):la===
c.CORNERS?(d-=a,f-=b,a+=d/2,b+=f/2):la===c.CORNER&&(a+=d/2,b+=f/2),d===f)g.beginPath(),g.arc(a,b,d/2,0,c.TWO_PI,!1),wa(),za();else{d/=2;f/=2;var h=0.5522847498307933*d,k=0.5522847498307933*f;e.beginShape();e.vertex(a+d,b);e.bezierVertex(a+d,b-k,a+h,b-f,a,b-f);e.bezierVertex(a-h,b-f,a-d,b-k,a-d,b);e.bezierVertex(a-d,b+k,a-h,b+f,a,b+f);e.bezierVertex(a+h,b+f,a+d,b+k,a+d,b);e.endShape()}};B.prototype.ellipse=function(a,b,d,f){a=a||0;b=b||0;if(!(0>=d&&0>=f)){la===c.RADIUS?(d*=2,f*=2):la===c.CORNERS?(d-=
a,f-=b,a+=d/2,b+=f/2):la===c.CORNER&&(a+=d/2,b+=f/2);d/=2;f/=2;var g=0.5522847498307933*d,h=0.5522847498307933*f;e.beginShape();e.vertex(a+d,b);e.bezierVertex(a+d,b-h,0,a+g,b-f,0,a,b-f,0);e.bezierVertex(a-g,b-f,0,a-d,b-h,0,a-d,b,0);e.bezierVertex(a-d,b+h,0,a-g,b+f,0,a,b+f,0);e.bezierVertex(a+g,b+f,0,a+d,b+h,0,a+d,b,0);e.endShape();if(R){for(g=f=d=0;g<t.length;g++)d+=t[g][0],f+=t[g][1];d/=t.length;f/=t.length;g=[];a=[];b=[];g[0]=d;g[1]=f;g[2]=0;g[3]=0;g[4]=0;g[5]=ka[0];g[6]=ka[1];g[7]=ka[2];g[8]=ka[3];
g[9]=X[0];g[10]=X[1];g[11]=X[2];g[12]=X[3];g[13]=Gb;g[14]=Eb;g[15]=ub;t.unshift(g);for(g=0;g<t.length;g++){for(d=0;3>d;d++)a.push(t[g][d]);for(d=5;9>d;d++)b.push(t[g][d])}$a(a,"TRIANGLE_FAN",b)}}};e.normal=function(a,b,d){if(3!==arguments.length||"number"!==typeof a||"number"!==typeof b||"number"!==typeof d)throw"normal() requires three numeric arguments.";Gb=a;Eb=b;ub=d;0!==aa&&(jb===c.NORMAL_MODE_AUTO?jb=c.NORMAL_MODE_SHAPE:jb===c.NORMAL_MODE_SHAPE&&(jb=c.NORMAL_MODE_VERTEX))};e.save=function(a,
b){return b!==h?l.open(b.toDataURL(),"_blank"):l.open(e.externals.canvas.toDataURL(),"_blank")};var wd=0;e.saveFrame=function(a){a===h&&(a="screen-####.png");a=a.replace(/#+/,function(a){for(var b=""+wd++;b.length<a.length;)b="0"+b;return b});e.save(a)};var xd=p.createElement("canvas").getContext("2d"),Mc=[h,h,h],Ga=function(a,b,d){this.__isDirty=!1;if(a instanceof D)this.fromHTMLImageData(a);else if(b||d){this.width=a||1;this.height=b||1;a=this.sourceImg=p.createElement("canvas");a.width=this.width;
a.height=this.height;this.imageData=a.getContext("2d").createImageData(this.width,this.height);this.format=d===c.ARGB||d===c.ALPHA?d:c.RGB;if(this.format===c.RGB)for(d=3,a=this.imageData.data,b=a.length;d<b;d+=4)a[d]=255;this.__isDirty=!0;this.updatePixels()}else this.height=this.width=0,this.imageData=xd.createImageData(1,1),this.format=c.ARGB;this.pixels=Jb(this)};Ga.prototype={__isPImage:!0,updatePixels:function(){var a=this.sourceImg;a&&(a instanceof x&&this.__isDirty)&&a.getContext("2d").putImageData(this.imageData,
0,0);this.__isDirty=!1},fromHTMLImageData:function(a){var b=Ja(a);try{var c=b.context.getImageData(0,0,a.width,a.height);this.fromImageData(c)}catch(d){a.width&&a.height&&(this.isRemote=!0,this.width=a.width,this.height=a.height)}this.sourceImg=a},get:function(a,b,c,d){if(!arguments.length)return e.get(this);if(2===arguments.length)return e.get(a,b,this);if(4===arguments.length)return e.get(a,b,c,d,this)},set:function(a,b,c){e.set(a,b,c,this);this.__isDirty=!0},blend:function(a,b,c,d,f,g,h,k,l,m){9===
arguments.length?e.blend(this,a,b,c,d,f,g,h,k,l,this):10===arguments.length&&e.blend(a,b,c,d,f,g,h,k,l,m,this);delete this.sourceImg},copy:function(a,b,d,f,g,h,k,l,m){8===arguments.length?e.blend(this,a,b,d,f,g,h,k,l,c.REPLACE,this):9===arguments.length&&e.blend(a,b,d,f,g,h,k,l,m,c.REPLACE,this);delete this.sourceImg},filter:function(a,b){2===arguments.length?e.filter(a,b,this):1===arguments.length&&e.filter(a,null,this);delete this.sourceImg},save:function(a){e.save(a,this)},resize:function(a,b){if(this.isRemote)throw"Image is loaded remotely. Cannot resize.";
if(0!==this.width||0!==this.height){0===a&&0!==b?a=Math.floor(this.width/this.height*b):0===b&&0!==a&&(b=Math.floor(this.height/this.width*a));var c=Ja(this.imageData).canvas,c=Ja(c,a,b).context.getImageData(0,0,a,b);this.fromImageData(c)}},mask:function(a){var b=this.toImageData(),c,d;if(a instanceof Ga||a.__isPImage)if(a.width===this.width&&a.height===this.height)for(a=a.toImageData(),c=2,d=4*this.width*this.height;c<d;c+=4)b.data[c+1]=a.data[c];else throw"mask must have the same dimensions as PImage.";
else if(a instanceof Array)if(this.width*this.height===a.length)for(c=0,d=a.length;c<d;++c)b.data[4*c+3]=a[c];else throw"mask array must be the same length as PImage pixels array.";this.fromImageData(b)},loadPixels:r,toImageData:function(){return this.isRemote?this.sourceImg:this.__isDirty?Ja(this.sourceImg).context.getImageData(0,0,this.width,this.height):this.imageData},toDataURL:function(){if(this.isRemote)throw"Image is loaded remotely. Cannot create dataURI.";return Ja(this.imageData).canvas.toDataURL()},
fromImageData:function(a){var b=a.width,d=a.height,e=p.createElement("canvas"),f=e.getContext("2d");this.width=e.width=b;this.height=e.height=d;f.putImageData(a,0,0);this.format=c.ARGB;this.imageData=a;this.sourceImg=e}};e.PImage=Ga;e.createImage=function(a,b,c){return new Ga(a,b,c)};e.loadImage=function(a,b,c){if(da.imageCache.images[a])return b=new Ga(da.imageCache.images[a]),b.loaded=!0,b;b=new Ga;var d=p.createElement("img");b.sourceImg=d;d.onload=function(a,b,c){return function(){b.fromHTMLImageData(a);
b.loaded=!0;c&&c()}}(d,b,c);d.src=a;return b};e.requestImage=e.loadImage;e.get=function(a,b,d,f,g){if(void 0!==g)return Lb(a,b,d,f,g);if(void 0!==f)return Kb(a,b,d,f);if(void 0!==d){if(d.isRemote)throw"Image is loaded remotely. Cannot get x,y.";a=4*b*d.width+4*a;d=d.imageData.data;return d[a+3]<<24&c.ALPHA_MASK|d[a]<<16&c.RED_MASK|d[a+1]<<8&c.GREEN_MASK|d[a+2]&c.BLUE_MASK}return void 0!==b?(a>=e.width||0>a||0>b||b>=e.height?d=0:Rb?(a=4*((0|a)+e.width*(0|b)),d=e.imageData.data,d=d[a+3]<<24&c.ALPHA_MASK|
d[a]<<16&c.RED_MASK|d[a+1]<<8&c.GREEN_MASK|d[a+2]&c.BLUE_MASK):(d=e.toImageData(0|a,0|b,1,1).data,d=d[3]<<24&c.ALPHA_MASK|d[0]<<16&c.RED_MASK|d[1]<<8&c.GREEN_MASK|d[2]&c.BLUE_MASK),d):void 0!==a?Lb(0,0,a.width,a.height,a):Kb(0,0,e.width,e.height)};e.createGraphics=function(a,b,c){var d=new M;d.size(a,b,c);d.background(0,0);return d};e.set=function(a,b,c,d){if(3===arguments.length)"number"===typeof c?a<e.width&&(0<=a&&0<=b&&b<e.height)&&(Rb||(e.loadPixels(),null===Fc&&(Nc=g,Fc=new Mb),Rb=!0,g=Fc,Xc=
0),e.pixels.setPixel((0|a)+e.width*(0|b),c),++Xc>Yc&&fb()):(c instanceof Ga||c.__isPImage)&&e.image(c,a,b);else if(4===arguments.length){if(d.isRemote)throw"Image is loaded remotely. Cannot set x,y.";var f=e.color.toArray(c),h=4*b*d.width+4*a,k=d.imageData.data;k[h]=f[0];k[h+1]=f[1];k[h+2]=f[2];k[h+3]=f[3]}};e.imageData={};e.pixels={getLength:function(){return e.imageData.data.length?e.imageData.data.length/4:0},getPixel:function(a){a*=4;var b=e.imageData.data;return b[a+3]<<24&4278190080|b[a+0]<<
16&16711680|b[a+1]<<8&65280|b[a+2]&255},setPixel:function(a,b){var c=4*a,d=e.imageData.data;d[c+0]=(b&16711680)>>>16;d[c+1]=(b&65280)>>>8;d[c+2]=b&255;d[c+3]=(b&4278190080)>>>24},toArray:function(){for(var a=[],b=e.imageData.width*e.imageData.height,c=e.imageData.data,d=0,f=0;d<b;d++,f+=4)a.push(c[f+3]<<24&4278190080|c[f+0]<<16&16711680|c[f+1]<<8&65280|c[f+2]&255);return a},set:function(a){for(var b=0,c=a.length;b<c;b++)this.setPixel(b,a[b])}};e.loadPixels=function(){e.imageData=ha.$ensureContext().getImageData(0,
0,e.width,e.height)};e.updatePixels=function(){e.imageData&&ha.$ensureContext().putImageData(e.imageData,0,0)};e.hint=function(a){var b=ha.$ensureContext();a===c.DISABLE_DEPTH_TEST?(b.disable(b.DEPTH_TEST),b.depthMask(!1),b.clear(b.DEPTH_BUFFER_BIT)):a===c.ENABLE_DEPTH_TEST?(b.enable(b.DEPTH_TEST),b.depthMask(!0)):a===c.ENABLE_OPENGL_2X_SMOOTH||a===c.ENABLE_OPENGL_4X_SMOOTH?ra=!0:a===c.DISABLE_OPENGL_2X_SMOOTH&&(ra=!1)};var jd=function(a,b,c,d){if(a instanceof Ga||a.__isPImage){if(!a.loaded)throw"Error using image in background(): PImage not loaded.";
if(a.width!==e.width||a.height!==e.height)throw"Background image must be the same dimensions as the canvas.";}else a=e.color(a,b,c,d);kb=a};E.prototype.background=function(a,b,c,d){a!==h&&jd(a,b,c,d);kb instanceof Ga||kb.__isPImage?(g.save(),g.setTransform(1,0,0,1,0,0),e.image(kb,0,0)):(g.save(),g.setTransform(1,0,0,1,0,0),e.alpha(kb)!==ia&&g.clearRect(0,0,e.width,e.height),g.fillStyle=e.color.toString(kb),g.fillRect(0,0,e.width,e.height),N=!0);Sa()};B.prototype.background=function(a,b,c,d){0<arguments.length&&
jd(a,b,c,d);var f=e.color.toGLArray(kb);g.clearColor(f[0],f[1],f[2],f[3]);g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT)};E.prototype.image=function(a,b,c,d,e){b=Math.round(b);c=Math.round(c);if(0<a.width){var f=mc(b||0,c||0,d||a.width,e||a.height,4>arguments.length);if(a.sourceImg&&null===gb){var h=a.sourceImg;a.__isDirty&&a.updatePixels();g.drawImage(h,0,0,h.width,h.height,f.x,f.y,f.w,f.h)}else h=a.toImageData(),null!==gb&&(gb(h),a.__isDirty=!0),g.drawImage(Ja(h).canvas,0,0,a.width,a.height,f.x,
f.y,f.w,f.h)}};B.prototype.image=function(a,b,c,d,f){0<a.width&&(b=Math.round(b),c=Math.round(c),d=d||a.width,f=f||a.height,e.beginShape(e.QUADS),e.texture(a),e.vertex(b,c,0,0,0),e.vertex(b,c+f,0,0,f),e.vertex(b+d,c+f,0,d,f),e.vertex(b+d,c,0,d,0),e.endShape())};e.tint=function(a,b,c,d){a=e.color(a,b,c,d);var f=e.red(a)/xa,g=e.green(a)/Ea,h=e.blue(a)/ya,k=e.alpha(a)/ia;gb=function(a){var b=a.data;a=4*a.width*a.height;for(var c=0;c<a;)b[c++]*=f,b[c++]*=g,b[c++]*=h,b[c++]*=k};sc=function(a){for(var b=
0;b<a.length;)a[b++]=f,a[b++]=g,a[b++]=h,a[b++]=k}};e.noTint=function(){sc=gb=null};e.copy=function(a,b,d,f,g,k,l,m,n){n===h&&(n=m,m=l,l=k,k=g,g=f,f=d,d=b,b=a,a=e);e.blend(a,b,d,f,g,k,l,m,n,c.REPLACE)};e.blend=function(a,b,c,d,f,g,k,l,m,n,p){if(a.isRemote)throw"Image is loaded remotely. Cannot blend image.";n===h&&(n=m,m=l,l=k,k=g,g=f,f=d,d=c,c=b,b=a,a=e);d=b+d;f=c+f;l=g+l;m=k+m;var r=p||e;p!==h&&n!==h||e.loadPixels();a.loadPixels();a===e&&e.intersect(b,c,d,f,g,k,l,m)?e.blit_resize(e.get(b,c,d-b,
f-c),0,0,d-b-1,f-c-1,r.imageData.data,r.width,r.height,g,k,l,m,n):e.blit_resize(a,b,c,d,f,r.imageData.data,r.width,r.height,g,k,l,m,n);p===h&&e.updatePixels()};var kd=function(a,b){var c=0,d=b.pixels.getLength(),e=new Q(d),f,g,h,k,l,m,n,p,r,t,q,v;if(a)for(;c<d;)for(f=c,g=c+b.width;c<g;)h=k=b.pixels.getPixel(c),m=c-1,l=c+1,n=c-b.width,p=c+b.width,m<f&&(m=c),l>=g&&(l=c),0>n&&(n=0),p>=d&&(p=c),n=b.pixels.getPixel(n),m=b.pixels.getPixel(m),p=b.pixels.getPixel(p),l=b.pixels.getPixel(l),h=77*(h>>16&255)+
151*(h>>8&255)+28*(h&255),t=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),r=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),q=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),t<h&&(k=m,h=t),r<h&&(k=l,h=r),q<h&&(k=n,h=q),v<h&&(k=p),e[c++]=k;else for(;c<d;)for(f=c,g=c+b.width;c<g;)h=k=b.pixels.getPixel(c),m=c-1,l=c+1,n=c-b.width,p=c+b.width,m<f&&(m=c),l>=g&&(l=c),0>n&&(n=0),p>=d&&(p=c),n=b.pixels.getPixel(n),m=b.pixels.getPixel(m),p=b.pixels.getPixel(p),l=b.pixels.getPixel(l),
h=77*(h>>16&255)+151*(h>>8&255)+28*(h&255),t=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),r=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),q=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),t>h&&(k=m,h=t),r>h&&(k=l,h=r),q>h&&(k=n,h=q),v>h&&(k=p),e[c++]=k;b.pixels.set(e)};e.filter=function(a,b,d){var f,g,k,l;3===arguments.length?(d.loadPixels(),f=d):(e.loadPixels(),f=e);b===h&&(b=null);if(f.isRemote)throw"Image is loaded remotely. Cannot filter image.";var m=f.pixels.getLength();
switch(a){case c.BLUR:var n=b||1,p=f,r,t,q,v,u,x,y,C,D;k=p.pixels.getLength();l=new A(k);m=new A(k);g=new A(k);k=new A(k);var F=0,G,E,H,n=e.floor(3.5*n),B,n=1>n?1:248>n?n:248;if(e.shared.blurRadius!==n){e.shared.blurRadius=n;e.shared.blurKernelSize=1+(e.shared.blurRadius<<1);e.shared.blurKernel=new A(e.shared.blurKernelSize);var I=e.shared.blurKernel,J=e.shared.blurKernelSize;for(B=0;B<J;B++)I[B]=0;J=(n-1)*(n-1);for(B=1;B<n;B++)I[n+B]=I[void 0]=J;I[n]=n*n}n=p.height;B=p.width;I=e.shared.blurKernelSize;
C=e.shared.blurRadius;var J=e.shared.blurKernel,K=p.imageData.data;for(E=0;E<n;E++){for(G=0;G<B;G++){q=t=r=v=p=0;x=G-C;if(0>x)u=-x,x=0;else{if(x>=B)break;u=0}for(H=u;H<I&&!(x>=B);H++)y=4*(x+F),u=J[H],v+=u*K[y+3],r+=u*K[y],t+=u*K[y+1],q+=u*K[y+2],p+=u,x++;y=F+G;k[y]=v/p;l[y]=r/p;m[y]=t/p;g[y]=q/p}F+=B}F=0;C=-C;D=C*B;for(E=0;E<n;E++){for(G=0;G<B;G++){q=t=r=v=p=0;if(0>C)u=y=-C,x=G;else{if(C>=n)break;u=0;y=C;x=G+D}for(H=u;H<I&&!(y>=n);H++)u=J[H],v+=u*k[x],r+=u*l[x],t+=u*m[x],q+=u*g[x],p+=u,y++,x+=B;y=
4*(G+F);K[y]=r/p;K[y+1]=t/p;K[y+2]=q/p;K[y+3]=v/p}F+=B;D+=B;C++}break;case c.GRAY:if(f.format===c.ALPHA){for(l=0;l<m;l++)g=255-f.pixels.getPixel(l),f.pixels.setPixel(l,4278190080|g<<16|g<<8|g);f.format=c.RGB}else for(l=0;l<m;l++)g=f.pixels.getPixel(l),k=77*(g>>16&255)+151*(g>>8&255)+28*(g&255)>>8,f.pixels.setPixel(l,g&c.ALPHA_MASK|k<<16|k<<8|k);break;case c.INVERT:for(l=0;l<m;l++)f.pixels.setPixel(l,f.pixels.getPixel(l)^16777215);break;case c.POSTERIZE:if(null===b)throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";
g=e.floor(b);if(2>g||255<g)throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)";k=g-1;for(l=0;l<m;l++)F=f.pixels.getPixel(l)>>16&255,n=f.pixels.getPixel(l)>>8&255,B=f.pixels.getPixel(l)&255,F=255*(F*g>>8)/k,n=255*(n*g>>8)/k,B=255*(B*g>>8)/k,f.pixels.setPixel(l,4278190080&f.pixels.getPixel(l)|F<<16|n<<8|B);break;case c.OPAQUE:for(l=0;l<m;l++)f.pixels.setPixel(l,f.pixels.getPixel(l)|4278190080);f.format=c.RGB;break;case c.THRESHOLD:null===b&&(b=0.5);if(0>b||1<b)throw"Level must be between 0 and 1 for filter(THRESHOLD, level)";
g=e.floor(255*b);for(l=0;l<m;l++)k=e.max((f.pixels.getPixel(l)&c.RED_MASK)>>16,e.max((f.pixels.getPixel(l)&c.GREEN_MASK)>>8,f.pixels.getPixel(l)&c.BLUE_MASK)),f.pixels.setPixel(l,f.pixels.getPixel(l)&c.ALPHA_MASK|(k<g?0:16777215));break;case c.ERODE:kd(!0,f);break;case c.DILATE:kd(!1,f)}f.updatePixels()};e.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,
blurKernelSize:0,blurKernel:null};e.intersect=function(a,b,c,d,e,f,g,h){c=c-a+1;d=d-b+1;g=g-e+1;h=h-f+1;e<a?(g+=e-a,g>c&&(g=c)):(a=c+a-e,g>a&&(g=a));f<b?(h+=f-b,h>d&&(h=d)):(b=d+b-f,h>b&&(h=b));return!(0>=g||0>=h)};var pa={};pa[c.BLEND]=e.modes.blend;pa[c.ADD]=e.modes.add;pa[c.SUBTRACT]=e.modes.subtract;pa[c.LIGHTEST]=e.modes.lightest;pa[c.DARKEST]=e.modes.darkest;pa[c.REPLACE]=e.modes.replace;pa[c.DIFFERENCE]=e.modes.difference;pa[c.EXCLUSION]=e.modes.exclusion;pa[c.MULTIPLY]=e.modes.multiply;pa[c.SCREEN]=
e.modes.screen;pa[c.OVERLAY]=e.modes.overlay;pa[c.HARD_LIGHT]=e.modes.hard_light;pa[c.SOFT_LIGHT]=e.modes.soft_light;pa[c.DODGE]=e.modes.dodge;pa[c.BURN]=e.modes.burn;e.blit_resize=function(a,b,d,f,g,h,k,l,m,n,p,r,t){0>b&&(b=0);0>d&&(d=0);f>=a.width&&(f=a.width-1);g>=a.height&&(g=a.height-1);f-=b;g-=d;p-=m;r-=n;if(!(0>=p||0>=r||0>=f||0>=g||m>=k||n>=l||b>=a.width||d>=a.height)){f=Math.floor(f/p*c.PRECISIONF);g=Math.floor(g/r*c.PRECISIONF);var q=e.shared;q.srcXOffset=Math.floor(0>m?-m*f:b*c.PRECISIONF);
q.srcYOffset=Math.floor(0>n?-n*g:d*c.PRECISIONF);0>m&&(p+=m,m=0);0>n&&(r+=n,n=0);p=Math.min(p,k-m);r=Math.min(r,l-n);b=n*k+m;var v;q.srcBuffer=a.imageData.data;q.iw=a.width;q.iw1=a.width-1;q.ih1=a.height-1;d=pa[t];var u,x,y,C;m=c.ALPHA_MASK;n=c.RED_MASK;var A=c.GREEN_MASK,B=c.BLUE_MASK,F=c.PREC_MAXVAL,D=c.PRECISIONB,G=c.PREC_RED_SHIFT,H=c.PREC_ALPHA_SHIFT,E=q.srcBuffer,I=Math.min;for(t=0;t<r;t++){q.sX=q.srcXOffset;q.fracV=q.srcYOffset&F;q.ifV=F-q.fracV;q.v1=(q.srcYOffset>>D)*q.iw;q.v2=I((q.srcYOffset>>
D)+1,q.ih1)*q.iw;for(a=0;a<p;a++)l=4*(b+a),v=h[l+3]<<24&m|h[l]<<16&n|h[l+1]<<8&A|h[l+2]&B,q.fracU=q.sX&F,q.ifU=F-q.fracU,q.ul=q.ifU*q.ifV>>D,q.ll=q.ifU*q.fracV>>D,q.ur=q.fracU*q.ifV>>D,q.lr=q.fracU*q.fracV>>D,q.u1=q.sX>>D,q.u2=I(q.u1+1,q.iw1),u=4*(q.v1+q.u1),x=4*(q.v1+q.u2),y=4*(q.v2+q.u1),C=4*(q.v2+q.u2),q.cUL=E[u+3]<<24&m|E[u]<<16&n|E[u+1]<<8&A|E[u+2]&B,q.cUR=E[x+3]<<24&m|E[x]<<16&n|E[x+1]<<8&A|E[x+2]&B,q.cLL=E[y+3]<<24&m|E[y]<<16&n|E[y+1]<<8&A|E[y+2]&B,q.cLR=E[C+3]<<24&m|E[C]<<16&n|E[C+1]<<8&A|
E[C+2]&B,q.r=q.ul*((q.cUL&n)>>16)+q.ll*((q.cLL&n)>>16)+q.ur*((q.cUR&n)>>16)+q.lr*((q.cLR&n)>>16)<<G&n,q.g=q.ul*(q.cUL&A)+q.ll*(q.cLL&A)+q.ur*(q.cUR&A)+q.lr*(q.cLR&A)>>>D&A,q.b=q.ul*(q.cUL&B)+q.ll*(q.cLL&B)+q.ur*(q.cUR&B)+q.lr*(q.cLR&B)>>>D,q.a=q.ul*((q.cUL&m)>>>24)+q.ll*((q.cLL&m)>>>24)+q.ur*((q.cUR&m)>>>24)+q.lr*((q.cLR&m)>>>24)<<H&m,v=d(v,q.a|q.r|q.g|q.b),h[l]=(v&n)>>>16,h[l+1]=(v&A)>>>8,h[l+2]=v&B,h[l+3]=(v&m)>>>24,q.sX+=f;b+=k;q.srcYOffset+=g}}};e.loadFont=function(a,b){if(a===h)throw"font name required in loadFont.";
if(-1===a.indexOf(".svg"))return b===h&&(b=ba.size),PFont.get(a,b);var c=e.loadGlyphs(a);return{name:a,css:"12px sans-serif",glyph:!0,units_per_em:c.units_per_em,horiz_adv_x:1/c.units_per_em*c.horiz_adv_x,ascent:c.ascent,descent:c.descent,width:function(b){for(var c=0,d=b.length,f=0;f<d;f++)try{c+=parseFloat(e.glyphLook(e.glyphTable[a],b[f]).horiz_adv_x)}catch(g){M.debug(g)}return c/e.glyphTable[a].units_per_em}}};e.createFont=function(a,b){return e.loadFont(a,b)};e.textFont=function(a,b){b!==h&&
(a.glyph||(a=PFont.get(a.name,b)),Na=b);ba=a;zb=ba.name;Xa=ba.ascent;Ma=ba.descent;Aa=ba.leading;ha.$ensureContext().font=ba.css};e.textSize=function(a){ba=PFont.get(zb,a);Na=a;Xa=ba.ascent;Ma=ba.descent;Aa=ba.leading;ha.$ensureContext().font=ba.css};e.textAscent=function(){return Xa};e.textDescent=function(){return Ma};e.textLeading=function(a){Aa=a};e.textAlign=function(a,b){nb=a;Wa=b||c.BASELINE};E.prototype.textWidth=function(a){a=Ua(a).split(/\r?\n/g);var b=0,c,d=a.length;g.font=ba.css;for(c=
0;c<d;++c)b=Math.max(b,ba.measureTextWidth(a[c]));return b|0};B.prototype.textWidth=function(a){a=Ua(a).split(/\r?\n/g);var b=0,c,d=a.length;Ba===h&&(Ba=p.createElement("canvas"));var e=Ba.getContext("2d");e.font=ba.css;for(c=0;c<d;++c)b=Math.max(b,e.measureText(a[c]).width);return b|0};e.glyphLook=function(a,b){try{switch(b){case "1":return a.one;case "2":return a.two;case "3":return a.three;case "4":return a.four;case "5":return a.five;case "6":return a.six;case "7":return a.seven;case "8":return a.eight;
case "9":return a.nine;case "0":return a.zero;case " ":return a.space;case "$":return a.dollar;case "!":return a.exclam;case '"':return a.quotedbl;case "#":return a.numbersign;case "%":return a.percent;case "&":return a.ampersand;case "'":return a.quotesingle;case "(":return a.parenleft;case ")":return a.parenright;case "*":return a.asterisk;case "+":return a.plus;case ",":return a.comma;case "-":return a.hyphen;case ".":return a.period;case "/":return a.slash;case "_":return a.underscore;case ":":return a.colon;
case ";":return a.semicolon;case "<":return a.less;case "=":return a.equal;case ">":return a.greater;case "?":return a.question;case "@":return a.at;case "[":return a.bracketleft;case "\\":return a.backslash;case "]":return a.bracketright;case "^":return a.asciicircum;case "`":return a.grave;case "{":return a.braceleft;case "|":return a.bar;case "}":return a.braceright;case "~":return a.asciitilde;default:return a[b]}}catch(c){M.debug(c)}};E.prototype.text$line=function(a,b,d,f,h){f=f=0;if(ba.glyph){f=
e.glyphTable[zb];g.save();g.translate(b,d+Na);h!==c.RIGHT&&h!==c.CENTER||f.width(a);b=1/f.units_per_em*Na;g.scale(b,b);b=0;for(d=a.length;b<d;b++)try{e.glyphLook(f,a[b]).draw()}catch(k){M.debug(k)}Sa()}else if(a&&"fillText"in g){N&&(g.fillStyle=e.color.toString(La),N=!1);if(h===c.RIGHT||h===c.CENTER)f=ba.measureTextWidth(a),f=h===c.RIGHT?-f:-f/2;g.fillText(a,b+f,d)}};B.prototype.text$line=function(a,b,d,e,f){Ba===h&&(Ba=p.createElement("canvas"));var k=g;g=Ba.getContext("2d");g.font=ba.css;var l=
ba.measureTextWidth(a);Ba.width=l;Ba.height=Na;g=Ba.getContext("2d");g.font=ba.css;g.textBaseline="top";E.prototype.text$line(a,0,0,0,c.LEFT);a=Ba.width/Ba.height;g=k;g.bindTexture(g.TEXTURE_2D,Tc);g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,Ba);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE);
k=0;f===c.RIGHT?k=-l:f===c.CENTER&&(k=-l/2);f=new I;l=0.5*Na;f.translate(b+k-l/2,d-l,e);f.scale(-a*l,-l,l);f.translate(-1,-1,-1);f.transpose();b=new I;b.scale(1,-1,1);b.apply(K.array());b.transpose();g.useProgram(J);Z("aVertex2d",J,"aVertex",3,Cc);Z("aTextureCoord2d",J,"aTextureCoord",2,Dc);Y("uSampler2d",J,"uSampler",[0]);Y("uIsDrawingText2d",J,"uIsDrawingText",!0);U("uModel2d",J,"uModel",!1,f.array());U("uView2d",J,"uView",!1,b.array());T("uColor2d",J,"uColor",ka);g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,
Ec);g.drawElements(g.TRIANGLES,6,g.UNSIGNED_SHORT,0)};e.text=function(){ic!==c.SHAPE&&(3===arguments.length?Nb(Ua(arguments[0]),arguments[1],arguments[2],0):4===arguments.length?Nb(Ua(arguments[0]),arguments[1],arguments[2],arguments[3]):5===arguments.length?ac(Ua(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0):6===arguments.length&&ac(Ua(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]))};e.textMode=function(a){ic=a};e.loadGlyphs=function(a){var b,
c,d,f,k,m,n,q,r,t,v,u,x=function(a,b){var c=0,d=[],e,f=RegExp(a,"g");for(e=d[c]=f.exec(b);e;)c++,e=d[c]=f.exec(b);return d},y=function(a){var e=x("[A-Za-z][0-9\\- ]+|Z",a);u="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";q=a=m=k=f=d=c=b=0;r="";t=e.length-1;for(var h=0;h<t;h++){var l=e[h][0];a=x("[0-9\\-]+",l);switch(l[0]){case "M":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);u+="curContext.moveTo("+b+","+-c+");";break;case "L":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);
u+="curContext.lineTo("+b+","+-c+");";break;case "H":b=parseFloat(a[0][0]);u+="curContext.lineTo("+b+","+-c+");";break;case "V":c=parseFloat(a[0][0]);u+="curContext.lineTo("+b+","+-c+");";break;case "T":k=parseFloat(a[0][0]);m=parseFloat(a[1][0]);"Q"===r||"T"===r?(a=Math.sqrt(Math.pow(b-d,2)+Math.pow(f-c,2)),q=Math.PI+Math.atan2(d-b,f-c),d=b+Math.sin(q)*a,f=c+Math.cos(q)*a):(d=b,f=c);u+="curContext.quadraticCurveTo("+d+","+-f+","+k+","+-m+");";b=k;c=m;break;case "Q":d=parseFloat(a[0][0]);f=parseFloat(a[1][0]);
k=parseFloat(a[2][0]);m=parseFloat(a[3][0]);u+="curContext.quadraticCurveTo("+d+","+-f+","+k+","+-m+");";b=k;c=m;break;case "Z":u+="curContext.closePath();"}r=l[0]}u+="afterPathDraw();";u+="curContext.translate("+v+",0);";u+="}}";return(new Function("beforePathDraw","afterPathDraw",u))(function(){g.save();return ha.$ensureContext()},function(){wa();za();Sa()})},A=function(b){var c=b.getElementsByTagName("font");e.glyphTable[a].horiz_adv_x=c[0].getAttribute("horiz-adv-x");c=b.getElementsByTagName("font-face")[0];
e.glyphTable[a].units_per_em=parseFloat(c.getAttribute("units-per-em"));e.glyphTable[a].ascent=parseFloat(c.getAttribute("ascent"));e.glyphTable[a].descent=parseFloat(c.getAttribute("descent"));b=b.getElementsByTagName("glyph");for(var c=b.length,d=0;d<c;d++){var f=b[d].getAttribute("unicode"),g=b[d].getAttribute("glyph-name");v=b[d].getAttribute("horiz-adv-x");null===v&&(v=e.glyphTable[a].horiz_adv_x);n=b[d].getAttribute("d");n!==h&&(u=y(n),e.glyphTable[a][g]={name:g,unicode:f,horiz_adv_x:v,draw:u.draw})}};
e.glyphTable[a]={};(function(){var b;try{b=p.implementation.createDocument("","",null)}catch(c){M.debug(c.message);return}try{b.async=!1,b.load(a),A(b.getElementsByTagName("svg")[0])}catch(d){M.debug(d);try{var e=new l.XMLHttpRequest;e.open("GET",a,!1);e.send(null);A(e.responseXML.documentElement)}catch(f){M.debug(d)}}})(a);return e.glyphTable[a]};e.param=function(a){var b="data-processing-"+a;if(S.hasAttribute(b))return S.getAttribute(b);for(var b=0,c=S.childNodes.length;b<c;++b){var d=S.childNodes.item(b);
if(1===d.nodeType&&"param"===d.tagName.toLowerCase()&&d.getAttribute("name")===a)return d.getAttribute("value")}return da.params.hasOwnProperty(a)?da.params[a]:null};F.prototype.translate=H("translate");F.prototype.transform=H("transform");F.prototype.scale=H("scale");F.prototype.pushMatrix=H("pushMatrix");F.prototype.popMatrix=H("popMatrix");F.prototype.resetMatrix=H("resetMatrix");F.prototype.applyMatrix=H("applyMatrix");F.prototype.rotate=H("rotate");F.prototype.rotateZ=H("rotateZ");F.prototype.shearX=
H("shearX");F.prototype.shearY=H("shearY");F.prototype.redraw=H("redraw");F.prototype.toImageData=H("toImageData");F.prototype.ambientLight=H("ambientLight");F.prototype.directionalLight=H("directionalLight");F.prototype.lightFalloff=H("lightFalloff");F.prototype.lightSpecular=H("lightSpecular");F.prototype.pointLight=H("pointLight");F.prototype.noLights=H("noLights");F.prototype.spotLight=H("spotLight");F.prototype.beginCamera=H("beginCamera");F.prototype.endCamera=H("endCamera");F.prototype.frustum=
H("frustum");F.prototype.box=H("box");F.prototype.sphere=H("sphere");F.prototype.ambient=H("ambient");F.prototype.emissive=H("emissive");F.prototype.shininess=H("shininess");F.prototype.specular=H("specular");F.prototype.fill=H("fill");F.prototype.stroke=H("stroke");F.prototype.strokeWeight=H("strokeWeight");F.prototype.smooth=H("smooth");F.prototype.noSmooth=H("noSmooth");F.prototype.point=H("point");F.prototype.vertex=H("vertex");F.prototype.endShape=H("endShape");F.prototype.bezierVertex=H("bezierVertex");
F.prototype.curveVertex=H("curveVertex");F.prototype.curve=H("curve");F.prototype.line=H("line");F.prototype.bezier=H("bezier");F.prototype.rect=H("rect");F.prototype.ellipse=H("ellipse");F.prototype.background=H("background");F.prototype.image=H("image");F.prototype.textWidth=H("textWidth");F.prototype.text$line=H("text$line");F.prototype.$ensureContext=H("$ensureContext");F.prototype.$newPMatrix=H("$newPMatrix");F.prototype.size=function(a,b,d){Ka(d===c.WEBGL?"3D":"2D");e.size(a,b,d)};F.prototype.$init=
r;E.prototype.$init=function(){e.size(e.width,e.height);g.lineCap="round";e.noSmooth();e.disableContextMenu()};B.prototype.$init=function(){e.use3DContext=!0;e.disableContextMenu()};W.prototype.$ensureContext=function(){return g};S.getAttribute("tabindex")||S.setAttribute("tabindex",0);if(Qb)da=new M.Sketch,Ka(),e.size=function(a,b,d){d&&d===c.WEBGL?Ka("3D"):Ka("2D");e.size(a,b,d)};else{da=k instanceof M.Sketch?k:"function"===typeof k?new M.Sketch(k):k?M.compile(k):new M.Sketch(function(){});e.externals.sketch=
da;Ka();S.onfocus=function(){e.focused=!0};S.onblur=function(){e.focused=!1;da.options.globalKeyEvents||(e.__keyPressed=!1,hb=[],ob=null)};da.options.pauseOnBlur&&(Ia(l,"focus",function(){Da&&e.loop()}),Ia(l,"blur",function(){Da&&eb&&(e.noLoop(),Da=!0);e.__keyPressed=!1;hb=[];ob=null}));var Jc=da.options.globalKeyEvents?l:S;Ia(Jc,"keydown",rc);Ia(Jc,"keypress",Pb);Ia(Jc,"keyup",bc);for(var Yb in M.lib)M.lib.hasOwnProperty(Yb)&&(M.lib[Yb].hasOwnProperty("attach")?M.lib[Yb].attach(e):M.lib[Yb]instanceof
Function&&M.lib[Yb].call(this));var ld=function(a){if(da.imageCache.pending||PFont.preloading.pending(100))l.setTimeout(function(){ld(a)},100);else{if(l.opera){var b,c,d=da.imageCache.operaCache;for(b in d)d.hasOwnProperty(b)&&(c=d[b],null!==c&&p.body.removeChild(c),delete d[b])}da.attach(a,n);da.onLoad(a);a.setup&&(a.setup(),a.resetMatrix(),da.onSetup());fb();a.draw&&(Da?a.loop():a.redraw())}};this.externals.canvas.id!==h&&this.externals.canvas.id.length||(this.externals.canvas.id="__processing"+
q.length);Zb[this.externals.canvas.id]=q.length;q.push(this);ld(e)}};M.debug=function(){return"console"in l?function(a){l.console.log("Processing.js: "+a)}:r}();M.prototype=n;M.instances=q;M.getInstanceById=function(a){return q[Zb[a]]};(function(a){function b(a){return function(){throw"Processing.js does not support "+a+".";}}for(var c="open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "),
d=c.length,f,h;d--;)f=c[d],h=f.replace("()",""),a[h]=b(f)})(n);return M}},{}],27:[function(D,x,Q){var k={virtEquals:D("./Helpers/virtEquals"),virtHashCode:D("./Helpers/virtHashCode"),ObjectIterator:D("./Helpers/ObjectIterator"),PConstants:D("./Helpers/PConstants"),ArrayList:D("./Objects/ArrayList"),HashMap:D("./Objects/HashMap"),PVector:D("./Objects/PVector"),PFont:D("./Objects/PFont"),Char:D("./Objects/Char"),XMLAttribute:D("./Objects/XMLAttribute"),XMLElement:D("./Objects/XMLElement"),PMatrix2D:D("./Objects/PMatrix2D"),
PMatrix3D:D("./Objects/PMatrix3D"),PShape:D("./Objects/PShape"),colors:D("./Objects/webcolors"),PShapeSVG:D("./Objects/PShapeSVG"),CommonFunctions:D("./P5Functions/commonFunctions"),defaultScope:D("./Helpers/defaultScope"),Processing:D("./Processing"),setupParser:D("./Parser/Parser"),finalize:D("./Helpers/finalizeProcessing")};k.extend={withMath:D("./P5Functions/Math.js"),withProxyFunctions:D("./P5Functions/JavaProxyFunctions")(k.virtHashCode,k.virtEquals),withTouch:D("./P5Functions/touchmouse"),
withCommonFunctions:k.CommonFunctions.withCommonFunctions};x.exports=function(h,m){var n=function(){},a=k.virtEquals,b=k.virtHashCode,d=k.PConstants,f=k.CommonFunctions,l=k.ObjectIterator,p=k.Char,r=k.XMLAttribute(),c=k.ArrayList({virtHashCode:b,virtEquals:a}),a=k.HashMap({virtHashCode:b,virtEquals:a}),b=k.PVector({PConstants:d}),x=k.PFont({Browser:h,noop:n}),r=k.XMLElement({Browser:h,XMLAttribute:r}),Q=k.PMatrix2D({p:f}),G=k.PMatrix3D({p:f}),Q=k.PShape({PConstants:d,PMatrix2D:Q,PMatrix3D:G}),f=k.PShapeSVG({CommonFunctions:f,
PConstants:d,PShape:Q,XMLElement:r,colors:k.colors}),d=k.defaultScope({ArrayList:c,HashMap:a,PVector:b,PFont:x,PShapeSVG:f,ObjectIterator:l,PConstants:d,Char:p,XMLElement:r,XML:r}),l=k.Processing({defaultScope:d,Browser:h,extend:k.extend,noop:n}),l=k.setupParser(l,{Browser:h,aFunctions:m,defaultScope:d});return l=k.finalize(l,{version:D("../package.json").version,isDomPresent:h.isDomPresent,window:h.window,document:h.document,noop:n})}},{"../package.json":2,"./Helpers/ObjectIterator":3,"./Helpers/PConstants":4,
"./Helpers/defaultScope":5,"./Helpers/finalizeProcessing":6,"./Helpers/virtEquals":7,"./Helpers/virtHashCode":8,"./Objects/ArrayList":9,"./Objects/Char":10,"./Objects/HashMap":11,"./Objects/PFont":12,"./Objects/PMatrix2D":13,"./Objects/PMatrix3D":14,"./Objects/PShape":15,"./Objects/PShapeSVG":16,"./Objects/PVector":17,"./Objects/XMLAttribute":18,"./Objects/XMLElement":19,"./Objects/webcolors":20,"./P5Functions/JavaProxyFunctions":21,"./P5Functions/Math.js":22,"./P5Functions/commonFunctions":23,"./P5Functions/touchmouse":24,
"./Parser/Parser":25,"./Processing":26}]},{},[1]);

;(function(){
var h, aa = this;
function r(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ca(a) {
  var b = r(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function da(a) {
  return "string" == typeof a;
}
function ea(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
function ha(a) {
  if (!ia.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(ja, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ka, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(la, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ma, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(na, "\x26#39;"));
  return a;
}
var ja = /&/g, ka = /</g, la = />/g, ma = /"/g, na = /'/g, ia = /[&<>"']/;
function oa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
Math.random();
function pa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ra(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < qa.length;f++) {
      c = qa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function sa(a, b) {
  null != a && this.append.apply(this, arguments);
}
sa.prototype.Ka = "";
sa.prototype.append = function(a, b, c) {
  this.Ka += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ka += arguments[d];
    }
  }
  return this;
};
sa.prototype.toString = function() {
  return this.Ka;
};
var ua = Array.prototype, va = ua.indexOf ? function(a, b, c) {
  return ua.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (da(a)) {
    return da(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, wa = ua.forEach ? function(a, b, c) {
  ua.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = da(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
function ya(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function za(a, b, c) {
  return 2 >= arguments.length ? ua.slice.call(a, b) : ua.slice.call(a, b, c);
}
;function Aa() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var Ba = null;
function Ca() {
  return new u(null, 5, [Da, !0, Ea, !0, Fa, !1, Ga, !1, Ha, null], null);
}
function w(a) {
  return null != a && !1 !== a;
}
function Ia(a) {
  return null == a;
}
function Ja(a) {
  return w(a) ? !1 : !0;
}
function y(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : z ? !1 : null;
}
function Ka(a) {
  return null == a ? null : a.constructor;
}
function B(a, b) {
  var c = Ka(b), c = w(w(c) ? c.Eb : c) ? c.Cb : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function La(a) {
  var b = a.Cb;
  return w(b) ? b : "" + C.a(a);
}
function Ma(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function Na(a) {
  return Array.prototype.slice.call(arguments);
}
var Oa = {}, Pa = {};
function Qa(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = Qa[r(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw B("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Ra(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = Ra[r(null == a ? null : a)];
  if (!b && (b = Ra._, !b)) {
    throw B("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var Sa = {};
function Ta(a, b) {
  if (a ? a.D : a) {
    return a.D(a, b);
  }
  var c;
  c = Ta[r(null == a ? null : a)];
  if (!c && (c = Ta._, !c)) {
    throw B("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ua = {}, D = function() {
  function a(a, b, c) {
    if (a ? a.Y : a) {
      return a.Y(a, b, c);
    }
    var g;
    g = D[r(null == a ? null : a)];
    if (!g && (g = D._, !g)) {
      throw B("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.C : a) {
      return a.C(a, b);
    }
    var c;
    c = D[r(null == a ? null : a)];
    if (!c && (c = D._, !c)) {
      throw B("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Va = {};
function Wa(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = Wa[r(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw B("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Xa(a) {
  if (a ? a.V : a) {
    return a.V(a);
  }
  var b;
  b = Xa[r(null == a ? null : a)];
  if (!b && (b = Xa._, !b)) {
    throw B("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ya = {}, Za = {}, $a = function() {
  function a(a, b, c) {
    if (a ? a.L : a) {
      return a.L(a, b, c);
    }
    var g;
    g = $a[r(null == a ? null : a)];
    if (!g && (g = $a._, !g)) {
      throw B("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.K : a) {
      return a.K(a, b);
    }
    var c;
    c = $a[r(null == a ? null : a)];
    if (!c && (c = $a._, !c)) {
      throw B("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function ab(a, b) {
  if (a ? a.Wa : a) {
    return a.Wa(a, b);
  }
  var c;
  c = ab[r(null == a ? null : a)];
  if (!c && (c = ab._, !c)) {
    throw B("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function bb(a, b, c) {
  if (a ? a.La : a) {
    return a.La(a, b, c);
  }
  var d;
  d = bb[r(null == a ? null : a)];
  if (!d && (d = bb._, !d)) {
    throw B("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var cb = {};
function db(a, b) {
  if (a ? a.$a : a) {
    return a.$a(a, b);
  }
  var c;
  c = db[r(null == a ? null : a)];
  if (!c && (c = db._, !c)) {
    throw B("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var eb = {};
function fb(a) {
  if (a ? a.ab : a) {
    return a.ab();
  }
  var b;
  b = fb[r(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw B("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function gb(a) {
  if (a ? a.gb : a) {
    return a.gb();
  }
  var b;
  b = gb[r(null == a ? null : a)];
  if (!b && (b = gb._, !b)) {
    throw B("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var hb = {};
function ib(a, b) {
  if (a ? a.ib : a) {
    return a.ib(0, b);
  }
  var c;
  c = ib[r(null == a ? null : a)];
  if (!c && (c = ib._, !c)) {
    throw B("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
var jb = {};
function kb(a, b, c) {
  if (a ? a.bb : a) {
    return a.bb(a, b, c);
  }
  var d;
  d = kb[r(null == a ? null : a)];
  if (!d && (d = kb._, !d)) {
    throw B("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function lb(a) {
  if (a ? a.pb : a) {
    return a.state;
  }
  var b;
  b = lb[r(null == a ? null : a)];
  if (!b && (b = lb._, !b)) {
    throw B("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var mb = {};
function nb(a) {
  if (a ? a.F : a) {
    return a.F(a);
  }
  var b;
  b = nb[r(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw B("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var ob = {};
function pb(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = pb[r(null == a ? null : a)];
  if (!c && (c = pb._, !c)) {
    throw B("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var qb = {}, rb = function() {
  function a(a, b, c) {
    if (a ? a.P : a) {
      return a.P(a, b, c);
    }
    var g;
    g = rb[r(null == a ? null : a)];
    if (!g && (g = rb._, !g)) {
      throw B("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.O : a) {
      return a.O(a, b);
    }
    var c;
    c = rb[r(null == a ? null : a)];
    if (!c && (c = rb._, !c)) {
      throw B("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function sb(a, b) {
  if (a ? a.u : a) {
    return a.u(a, b);
  }
  var c;
  c = sb[r(null == a ? null : a)];
  if (!c && (c = sb._, !c)) {
    throw B("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function tb(a) {
  if (a ? a.B : a) {
    return a.B(a);
  }
  var b;
  b = tb[r(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw B("IHash.-hash", a);
  }
  return b.call(null, a);
}
var ub = {};
function vb(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = vb[r(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw B("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var wb = {}, xb = {};
function yb(a) {
  if (a ? a.Ua : a) {
    return a.Ua(a);
  }
  var b;
  b = yb[r(null == a ? null : a)];
  if (!b && (b = yb._, !b)) {
    throw B("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function E(a, b) {
  if (a ? a.lb : a) {
    return a.lb(0, b);
  }
  var c;
  c = E[r(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw B("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var zb = {};
function Ab(a, b, c) {
  if (a ? a.v : a) {
    return a.v(a, b, c);
  }
  var d;
  d = Ab[r(null == a ? null : a)];
  if (!d && (d = Ab._, !d)) {
    throw B("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Bb(a, b, c) {
  if (a ? a.kb : a) {
    return a.kb(0, b, c);
  }
  var d;
  d = Bb[r(null == a ? null : a)];
  if (!d && (d = Bb._, !d)) {
    throw B("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Cb(a) {
  if (a ? a.Ma : a) {
    return a.Ma(a);
  }
  var b;
  b = Cb[r(null == a ? null : a)];
  if (!b && (b = Cb._, !b)) {
    throw B("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Db(a, b) {
  if (a ? a.Ba : a) {
    return a.Ba(a, b);
  }
  var c;
  c = Db[r(null == a ? null : a)];
  if (!c && (c = Db._, !c)) {
    throw B("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Eb(a) {
  if (a ? a.Ca : a) {
    return a.Ca(a);
  }
  var b;
  b = Eb[r(null == a ? null : a)];
  if (!b && (b = Eb._, !b)) {
    throw B("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Fb(a, b, c) {
  if (a ? a.Oa : a) {
    return a.Oa(a, b, c);
  }
  var d;
  d = Fb[r(null == a ? null : a)];
  if (!d && (d = Fb._, !d)) {
    throw B("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Gb(a, b, c) {
  if (a ? a.jb : a) {
    return a.jb(0, b, c);
  }
  var d;
  d = Gb[r(null == a ? null : a)];
  if (!d && (d = Gb._, !d)) {
    throw B("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Hb(a) {
  if (a ? a.eb : a) {
    return a.eb();
  }
  var b;
  b = Hb[r(null == a ? null : a)];
  if (!b && (b = Hb._, !b)) {
    throw B("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Ib(a) {
  if (a ? a.Ya : a) {
    return a.Ya(a);
  }
  var b;
  b = Ib[r(null == a ? null : a)];
  if (!b && (b = Ib._, !b)) {
    throw B("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Jb(a) {
  if (a ? a.Za : a) {
    return a.Za(a);
  }
  var b;
  b = Jb[r(null == a ? null : a)];
  if (!b && (b = Jb._, !b)) {
    throw B("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Lb(a) {
  if (a ? a.Xa : a) {
    return a.Xa(a);
  }
  var b;
  b = Lb[r(null == a ? null : a)];
  if (!b && (b = Lb._, !b)) {
    throw B("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Mb(a) {
  this.Hb = a;
  this.q = 0;
  this.j = 1073741824;
}
Mb.prototype.lb = function(a, b) {
  return this.Hb.append(b);
};
function Nb(a) {
  var b = new sa;
  a.v(null, new Mb(b), Ca());
  return "" + C.a(b);
}
var Ob = "undefined" !== typeof Math.imul && 0 !== (Math.imul.b ? Math.imul.b(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Pb(a) {
  a = Ob(a, 3432918353);
  return Ob(a << 15 | a >>> -15, 461845907);
}
function Qb(a, b) {
  var c = a ^ b;
  return Ob(c << 13 | c >>> -13, 5) + 3864292196;
}
function Rb(a, b) {
  var c = a ^ b, c = Ob(c ^ c >>> 16, 2246822507), c = Ob(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function Sb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Qb(c, Pb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ Pb(a.charCodeAt(a.length - 1)) : b;
  return Rb(b, Ob(2, a.length));
}
var Tb = {}, Ub = 0;
function Vb(a) {
  255 < Ub && (Tb = {}, Ub = 0);
  var b = Tb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Ob(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
          b = void 0;
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Tb[a] = b;
    Ub += 1;
  }
  return a = b;
}
function Wb(a) {
  a && (a.j & 4194304 || a.Ob) ? a = a.B(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Vb(a), 0 !== a && (a = Pb(a), a = Qb(0, a), a = Rb(a, 4))) : a = null == a ? 0 : z ? tb(a) : null;
  return a;
}
function Xb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Yb(a, b) {
  if (w(F.b ? F.b(a, b) : F.call(null, a, b))) {
    return 0;
  }
  var c = Ja(a.X);
  if (w(c ? b.X : c)) {
    return-1;
  }
  if (w(a.X)) {
    if (Ja(b.X)) {
      return 1;
    }
    c = Zb.b ? Zb.b(a.X, b.X) : Zb.call(null, a.X, b.X);
    return 0 === c ? Zb.b ? Zb.b(a.name, b.name) : Zb.call(null, a.name, b.name) : c;
  }
  return $b ? Zb.b ? Zb.b(a.name, b.name) : Zb.call(null, a.name, b.name) : null;
}
function ac(a, b, c, d, e) {
  this.X = a;
  this.name = b;
  this.Aa = c;
  this.Fa = d;
  this.$ = e;
  this.j = 2154168321;
  this.q = 4096;
}
h = ac.prototype;
h.v = function(a, b) {
  return E(b, this.Aa);
};
h.B = function() {
  var a = this.Fa;
  return null != a ? a : this.Fa = a = Xb(Sb(this.name), Vb(this.X));
};
h.H = function(a, b) {
  return new ac(this.X, this.name, this.Aa, this.Fa, b);
};
h.F = function() {
  return this.$;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return $a.c(c, this, null);
      case 3:
        return $a.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ma(b)));
};
h.a = function(a) {
  return $a.c(a, this, null);
};
h.b = function(a, b) {
  return $a.c(a, this, b);
};
h.u = function(a, b) {
  return b instanceof ac ? this.Aa === b.Aa : !1;
};
h.toString = function() {
  return this.Aa;
};
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.j & 8388608 || a.Rb)) {
    return a.G(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new bc(a, 0);
  }
  if (y(ub, a)) {
    return vb(a);
  }
  if (z) {
    throw Error("" + C.a(a) + " is not ISeqable");
  }
  return null;
}
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.j & 64 || a.Na)) {
    return a.Q(null);
  }
  a = G(a);
  return null == a ? null : Wa(a);
}
function I(a) {
  return null != a ? a && (a.j & 64 || a.Na) ? a.V(null) : (a = G(a)) ? Xa(a) : J : J;
}
function K(a) {
  return null == a ? null : a && (a.j & 128 || a.hb) ? a.U(null) : G(I(a));
}
var F = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || sb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.b(a, d)) {
          if (K(e)) {
            a = d, d = H(e), e = K(e);
          } else {
            return b.b(d, H(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.m = 2;
    a.g = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.a = function() {
    return!0;
  };
  b.b = a;
  b.f = c.f;
  return b;
}();
function cc(a, b) {
  var c = Pb(a), c = Qb(0, c);
  return Rb(c, b);
}
function dc(a) {
  var b = 0, c = 1;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = Ob(31, c) + Wb(H(a)) | 0, a = K(a);
    } else {
      return cc(c, b);
    }
  }
}
function ec(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + Wb(H(a)) | 0, a = K(a);
    } else {
      return cc(c, b);
    }
  }
}
Pa["null"] = !0;
Qa["null"] = function() {
  return 0;
};
Date.prototype.u = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
sb.number = function(a, b) {
  return a === b;
};
mb["function"] = !0;
nb["function"] = function() {
  return null;
};
Oa["function"] = !0;
tb._ = function(a) {
  return a[fa] || (a[fa] = ++ga);
};
function fc(a) {
  return a + 1;
}
var gc = function() {
  function a(a, b, c, d) {
    for (var l = Qa(a);;) {
      if (d < l) {
        c = b.b ? b.b(c, D.b(a, d)) : b.call(null, c, D.b(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = Qa(a), l = 0;;) {
      if (l < d) {
        c = b.b ? b.b(c, D.b(a, l)) : b.call(null, c, D.b(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = Qa(a);
    if (0 === c) {
      return b.h ? b.h() : b.call(null);
    }
    for (var d = D.b(a, 0), l = 1;;) {
      if (l < c) {
        d = b.b ? b.b(d, D.b(a, l)) : b.call(null, d, D.b(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.c = b;
  d.k = a;
  return d;
}(), hc = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.b ? b.b(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.b ? b.b(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.h ? b.h() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.b ? b.b(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.c = b;
  d.k = a;
  return d;
}();
function ic(a) {
  return a ? a.j & 2 || a.ob ? !0 : a.j ? !1 : y(Pa, a) : y(Pa, a);
}
function jc(a) {
  return a ? a.j & 16 || a.fb ? !0 : a.j ? !1 : y(Ua, a) : y(Ua, a);
}
function bc(a, b) {
  this.d = a;
  this.n = b;
  this.j = 166199550;
  this.q = 8192;
}
h = bc.prototype;
h.toString = function() {
  return Nb(this);
};
h.C = function(a, b) {
  var c = b + this.n;
  return c < this.d.length ? this.d[c] : null;
};
h.Y = function(a, b, c) {
  a = b + this.n;
  return a < this.d.length ? this.d[a] : c;
};
h.U = function() {
  return this.n + 1 < this.d.length ? new bc(this.d, this.n + 1) : null;
};
h.I = function() {
  return this.d.length - this.n;
};
h.Ua = function() {
  var a = Qa(this);
  return 0 < a ? new kc(this, a - 1, null) : null;
};
h.B = function() {
  return dc(this);
};
h.u = function(a, b) {
  return lc.b ? lc.b(this, b) : lc.call(null, this, b);
};
h.J = function() {
  return J;
};
h.O = function(a, b) {
  return hc.k(this.d, b, this.d[this.n], this.n + 1);
};
h.P = function(a, b, c) {
  return hc.k(this.d, b, c, this.n);
};
h.Q = function() {
  return this.d[this.n];
};
h.V = function() {
  return this.n + 1 < this.d.length ? new bc(this.d, this.n + 1) : J;
};
h.G = function() {
  return this;
};
h.D = function(a, b) {
  return M.b ? M.b(b, this) : M.call(null, b, this);
};
var mc = function() {
  function a(a, b) {
    return b < a.length ? new bc(a, b) : null;
  }
  function b(a) {
    return c.b(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), L = function() {
  function a(a, b) {
    return mc.b(a, b);
  }
  function b(a) {
    return mc.b(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function kc(a, b, c) {
  this.Ra = a;
  this.n = b;
  this.l = c;
  this.j = 32374990;
  this.q = 8192;
}
h = kc.prototype;
h.toString = function() {
  return Nb(this);
};
h.F = function() {
  return this.l;
};
h.U = function() {
  return 0 < this.n ? new kc(this.Ra, this.n - 1, null) : null;
};
h.I = function() {
  return this.n + 1;
};
h.B = function() {
  return dc(this);
};
h.u = function(a, b) {
  return lc.b ? lc.b(this, b) : lc.call(null, this, b);
};
h.J = function() {
  return nc.b ? nc.b(J, this.l) : nc.call(null, J, this.l);
};
h.O = function(a, b) {
  return N.b ? N.b(b, this) : N.call(null, b, this);
};
h.P = function(a, b, c) {
  return N.c ? N.c(b, c, this) : N.call(null, b, c, this);
};
h.Q = function() {
  return D.b(this.Ra, this.n);
};
h.V = function() {
  return 0 < this.n ? new kc(this.Ra, this.n - 1, null) : J;
};
h.G = function() {
  return this;
};
h.H = function(a, b) {
  return new kc(this.Ra, this.n, b);
};
h.D = function(a, b) {
  return M.b ? M.b(b, this) : M.call(null, b, this);
};
sb._ = function(a, b) {
  return a === b;
};
var oc = function() {
  function a(a, b) {
    return null != a ? Ta(a, b) : Ta(J, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (w(e)) {
          a = b.b(a, d), d = H(e), e = K(e);
        } else {
          return b.b(a, d);
        }
      }
    }
    a.m = 2;
    a.g = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.b = a;
  b.f = c.f;
  return b;
}();
function P(a) {
  if (null != a) {
    if (a && (a.j & 2 || a.ob)) {
      a = a.I(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (y(Pa, a)) {
            a = Qa(a);
          } else {
            if (z) {
              a: {
                a = G(a);
                for (var b = 0;;) {
                  if (ic(a)) {
                    a = b + Qa(a);
                    break a;
                  }
                  a = K(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var pc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return G(a) ? H(a) : c;
      }
      if (jc(a)) {
        return D.c(a, b, c);
      }
      if (G(a)) {
        a = K(a), b -= 1;
      } else {
        return z ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (G(a)) {
          return H(a);
        }
        throw Error("Index out of bounds");
      }
      if (jc(a)) {
        return D.b(a, b);
      }
      if (G(a)) {
        var c = K(a), g = b - 1;
        a = c;
        b = g;
      } else {
        if (z) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Q = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.j & 16 || a.fb)) {
      return a.Y(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (y(Ua, a)) {
      return D.b(a, b);
    }
    if (a ? a.j & 64 || a.Na || (a.j ? 0 : y(Va, a)) : y(Va, a)) {
      return pc.c(a, b, c);
    }
    if (z) {
      throw Error("nth not supported on this type " + C.a(La(Ka(a))));
    }
    return null;
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.j & 16 || a.fb)) {
      return a.C(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (y(Ua, a)) {
      return D.b(a, b);
    }
    if (a ? a.j & 64 || a.Na || (a.j ? 0 : y(Va, a)) : y(Va, a)) {
      return pc.b(a, b);
    }
    if (z) {
      throw Error("nth not supported on this type " + C.a(La(Ka(a))));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    return null != a ? a && (a.j & 256 || a.sb) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : y(Za, a) ? $a.c(a, b, c) : z ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.j & 256 || a.sb) ? a.K(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : y(Za, a) ? $a.b(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), rc = function() {
  function a(a, b, c) {
    return null != a ? bb(a, b, c) : qc.b ? qc.b([b], [c]) : qc.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = L(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), w(l)) {
          d = H(l), e = H(K(l)), l = K(K(l));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.g = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var l = H(a);
      a = I(a);
      return c(b, d, l, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.f(b, e, f, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.g = c.g;
  b.c = a;
  b.f = c.f;
  return b;
}(), sc = function() {
  function a(a, b) {
    return null == a ? null : db(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.b(a, d);
        if (w(e)) {
          d = H(e), e = K(e);
        } else {
          return a;
        }
      }
    }
    a.m = 2;
    a.g = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.a = function(a) {
    return a;
  };
  b.b = a;
  b.f = c.f;
  return b;
}();
function tc(a) {
  var b = "function" == r(a);
  return b ? b : a ? w(w(null) ? null : a.nb) ? !0 : a.Db ? !1 : y(Oa, a) : y(Oa, a);
}
function uc(a, b) {
  this.e = a;
  this.l = b;
  this.q = 0;
  this.j = 393217;
}
h = uc.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta, xa, Kb) {
    switch(arguments.length) {
      case 1:
        var x = a, x = this;
        return x.e.h ? x.e.h() : x.e.call(null);
      case 2:
        return x = a, x = this, x.e.a ? x.e.a(c) : x.e.call(null, c);
      case 3:
        return x = a, x = this, x.e.b ? x.e.b(c, d) : x.e.call(null, c, d);
      case 4:
        return x = a, x = this, x.e.c ? x.e.c(c, d, e) : x.e.call(null, c, d, e);
      case 5:
        return x = a, x = this, x.e.k ? x.e.k(c, d, e, f) : x.e.call(null, c, d, e, f);
      case 6:
        return x = a, x = this, x.e.p ? x.e.p(c, d, e, f, g) : x.e.call(null, c, d, e, f, g);
      case 7:
        return x = a, x = this, x.e.N ? x.e.N(c, d, e, f, g, k) : x.e.call(null, c, d, e, f, g, k);
      case 8:
        return x = a, x = this, x.e.aa ? x.e.aa(c, d, e, f, g, k, l) : x.e.call(null, c, d, e, f, g, k, l);
      case 9:
        return x = a, x = this, x.e.va ? x.e.va(c, d, e, f, g, k, l, m) : x.e.call(null, c, d, e, f, g, k, l, m);
      case 10:
        return x = a, x = this, x.e.wa ? x.e.wa(c, d, e, f, g, k, l, m, n) : x.e.call(null, c, d, e, f, g, k, l, m, n);
      case 11:
        return x = a, x = this, x.e.ka ? x.e.ka(c, d, e, f, g, k, l, m, n, p) : x.e.call(null, c, d, e, f, g, k, l, m, n, p);
      case 12:
        return x = a, x = this, x.e.la ? x.e.la(c, d, e, f, g, k, l, m, n, p, t) : x.e.call(null, c, d, e, f, g, k, l, m, n, p, t);
      case 13:
        return x = a, x = this, x.e.ma ? x.e.ma(c, d, e, f, g, k, l, m, n, p, t, s) : x.e.call(null, c, d, e, f, g, k, l, m, n, p, t, s);
      case 14:
        return x = a, x = this, x.e.na ? x.e.na(c, d, e, f, g, k, l, m, n, p, t, s, q) : x.e.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q);
      case 15:
        return x = a, x = this, x.e.oa ? x.e.oa(c, d, e, f, g, k, l, m, n, p, t, s, q, v) : x.e.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v);
      case 16:
        return x = a, x = this, x.e.pa ? x.e.pa(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A) : x.e.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A);
      case 17:
        return x = a, x = this, x.e.qa ? x.e.qa(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O) : x.e.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O);
      case 18:
        return x = a, x = this, x.e.ra ? x.e.ra(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T) : x.e.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T);
      case 19:
        return x = a, x = this, x.e.sa ? x.e.sa(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba) : x.e.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba);
      case 20:
        return x = a, x = this, x.e.ta ? x.e.ta(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta) : x.e.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta);
      case 21:
        return x = a, x = this, x.e.ua ? x.e.ua(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta, xa) : x.e.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta, xa);
      case 22:
        return x = a, x = this, S.rb ? S.rb(x.e, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta, xa, Kb) : S.call(null, x.e, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta, xa, Kb);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ma(b)));
};
h.h = function() {
  return this.e.h ? this.e.h() : this.e.call(null);
};
h.a = function(a) {
  return this.e.a ? this.e.a(a) : this.e.call(null, a);
};
h.b = function(a, b) {
  return this.e.b ? this.e.b(a, b) : this.e.call(null, a, b);
};
h.c = function(a, b, c) {
  return this.e.c ? this.e.c(a, b, c) : this.e.call(null, a, b, c);
};
h.k = function(a, b, c, d) {
  return this.e.k ? this.e.k(a, b, c, d) : this.e.call(null, a, b, c, d);
};
h.p = function(a, b, c, d, e) {
  return this.e.p ? this.e.p(a, b, c, d, e) : this.e.call(null, a, b, c, d, e);
};
h.N = function(a, b, c, d, e, f) {
  return this.e.N ? this.e.N(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f);
};
h.aa = function(a, b, c, d, e, f, g) {
  return this.e.aa ? this.e.aa(a, b, c, d, e, f, g) : this.e.call(null, a, b, c, d, e, f, g);
};
h.va = function(a, b, c, d, e, f, g, k) {
  return this.e.va ? this.e.va(a, b, c, d, e, f, g, k) : this.e.call(null, a, b, c, d, e, f, g, k);
};
h.wa = function(a, b, c, d, e, f, g, k, l) {
  return this.e.wa ? this.e.wa(a, b, c, d, e, f, g, k, l) : this.e.call(null, a, b, c, d, e, f, g, k, l);
};
h.ka = function(a, b, c, d, e, f, g, k, l, m) {
  return this.e.ka ? this.e.ka(a, b, c, d, e, f, g, k, l, m) : this.e.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.la = function(a, b, c, d, e, f, g, k, l, m, n) {
  return this.e.la ? this.e.la(a, b, c, d, e, f, g, k, l, m, n) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.ma = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  return this.e.ma ? this.e.ma(a, b, c, d, e, f, g, k, l, m, n, p) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.na = function(a, b, c, d, e, f, g, k, l, m, n, p, t) {
  return this.e.na ? this.e.na(a, b, c, d, e, f, g, k, l, m, n, p, t) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, t);
};
h.oa = function(a, b, c, d, e, f, g, k, l, m, n, p, t, s) {
  return this.e.oa ? this.e.oa(a, b, c, d, e, f, g, k, l, m, n, p, t, s) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, t, s);
};
h.pa = function(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q) {
  return this.e.pa ? this.e.pa(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, t, s, q);
};
h.qa = function(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v) {
  return this.e.qa ? this.e.qa(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v);
};
h.ra = function(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A) {
  return this.e.ra ? this.e.ra(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A);
};
h.sa = function(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O) {
  return this.e.sa ? this.e.sa(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O);
};
h.ta = function(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T) {
  return this.e.ta ? this.e.ta(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T);
};
h.ua = function(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba) {
  return this.e.ua ? this.e.ua(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba);
};
h.nb = !0;
h.H = function(a, b) {
  return new uc(this.e, b);
};
h.F = function() {
  return this.l;
};
function nc(a, b) {
  return tc(a) && !(a ? a.j & 262144 || a.Vb || (a.j ? 0 : y(ob, a)) : y(ob, a)) ? new uc(a, b) : null == a ? null : pb(a, b);
}
function vc(a) {
  var b = null != a;
  return(b ? a ? a.j & 131072 || a.ub || (a.j ? 0 : y(mb, a)) : y(mb, a) : b) ? nb(a) : null;
}
var wc = function() {
  function a(a, b) {
    return null == a ? null : ib(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.b(a, d);
        if (w(e)) {
          d = H(e), e = K(e);
        } else {
          return a;
        }
      }
    }
    a.m = 2;
    a.g = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.a = function(a) {
    return a;
  };
  b.b = a;
  b.f = c.f;
  return b;
}();
function xc(a) {
  return null == a ? !1 : a ? a.j & 8 || a.Lb ? !0 : a.j ? !1 : y(Sa, a) : y(Sa, a);
}
function yc(a) {
  return null == a ? !1 : a ? a.j & 4096 || a.Tb ? !0 : a.j ? !1 : y(hb, a) : y(hb, a);
}
function zc(a) {
  return a ? a.j & 16777216 || a.Sb ? !0 : a.j ? !1 : y(wb, a) : y(wb, a);
}
function Ac(a) {
  return null == a ? !1 : a ? a.j & 1024 || a.Pb ? !0 : a.j ? !1 : y(cb, a) : y(cb, a);
}
function Bc(a) {
  return a ? a.j & 16384 || a.Ub ? !0 : a.j ? !1 : y(jb, a) : y(jb, a);
}
function Cc(a) {
  return a ? a.q & 512 || a.Kb ? !0 : !1 : !1;
}
function Dc(a) {
  var b = [];
  pa(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function Ec(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Fc = {};
function Gc(a) {
  return null == a ? !1 : a ? a.j & 64 || a.Na ? !0 : a.j ? !1 : y(Va, a) : y(Va, a);
}
function Hc(a) {
  return w(a) ? !0 : !1;
}
function Zb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Ka(a) === Ka(b)) {
    return a && (a.q & 2048 || a.Sa) ? a.Ta(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (z) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Ic = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = Zb(Q.b(a, g), Q.b(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = P(a), g = P(b);
    return f < g ? -1 : f > g ? 1 : z ? c.k(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.k = a;
  return c;
}(), N = function() {
  function a(a, b, c) {
    for (c = G(c);;) {
      if (c) {
        b = a.b ? a.b(b, H(c)) : a.call(null, b, H(c)), c = K(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = G(b);
    return c ? Jc.c ? Jc.c(a, H(c), K(c)) : Jc.call(null, a, H(c), K(c)) : a.h ? a.h() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Jc = function() {
  function a(a, b, c) {
    return c && (c.j & 524288 || c.wb) ? c.P(null, a, b) : c instanceof Array ? hc.c(c, a, b) : "string" === typeof c ? hc.c(c, a, b) : y(qb, c) ? rb.c(c, a, b) : z ? N.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.j & 524288 || b.wb) ? b.O(null, a) : b instanceof Array ? hc.b(b, a) : "string" === typeof b ? hc.b(b, a) : y(qb, b) ? rb.b(b, a) : z ? N.b(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Kc = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var k = null;
      2 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Jc.c(a, b + c, d);
    }
    b.m = 2;
    b.g = function(a) {
      var b = H(a);
      a = K(a);
      var c = H(a);
      a = I(a);
      return d(b, c, a);
    };
    b.f = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.f(a, d, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 2;
  a.g = b.g;
  a.h = function() {
    return 0;
  };
  a.a = function(a) {
    return a;
  };
  a.b = function(a, b) {
    return a + b;
  };
  a.f = b.f;
  return a;
}();
function Lc(a) {
  return a - 1;
}
function Mc(a) {
  return 0 <= a ? Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a) : Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a);
}
function Nc(a) {
  return Mc((a - a % 2) / 2);
}
var Oc = function() {
  function a(a) {
    return a * c.h();
  }
  function b() {
    return Math.random.h ? Math.random.h() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.a = a;
  return c;
}();
function Pc(a) {
  return Mc(Oc.a(a));
}
function Qc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Rc(a) {
  var b = 1;
  for (a = G(a);;) {
    if (a && 0 < b) {
      b -= 1, a = K(a);
    } else {
      return a;
    }
  }
}
var C = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new sa(b.a(a)), l = d;;) {
        if (w(l)) {
          e = e.append(b.a(H(l))), l = K(l);
        } else {
          return e.toString();
        }
      }
    }
    a.m = 1;
    a.g = function(a) {
      var b = H(a);
      a = I(a);
      return c(b, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, L(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.g = c.g;
  b.h = function() {
    return "";
  };
  b.a = a;
  b.f = c.f;
  return b;
}();
function lc(a, b) {
  return Hc(zc(b) ? function() {
    for (var c = G(a), d = G(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (F.b(H(c), H(d))) {
        c = K(c), d = K(d);
      } else {
        return z ? !1 : null;
      }
    }
  }() : null);
}
function Sc(a, b, c, d, e) {
  this.l = a;
  this.first = b;
  this.ia = c;
  this.count = d;
  this.o = e;
  this.j = 65937646;
  this.q = 8192;
}
h = Sc.prototype;
h.toString = function() {
  return Nb(this);
};
h.F = function() {
  return this.l;
};
h.U = function() {
  return 1 === this.count ? null : this.ia;
};
h.I = function() {
  return this.count;
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return J;
};
h.O = function(a, b) {
  return N.b(b, this);
};
h.P = function(a, b, c) {
  return N.c(b, c, this);
};
h.Q = function() {
  return this.first;
};
h.V = function() {
  return 1 === this.count ? J : this.ia;
};
h.G = function() {
  return this;
};
h.H = function(a, b) {
  return new Sc(b, this.first, this.ia, this.count, this.o);
};
h.D = function(a, b) {
  return new Sc(this.l, b, this, this.count + 1, null);
};
function Tc(a) {
  this.l = a;
  this.j = 65937614;
  this.q = 8192;
}
h = Tc.prototype;
h.toString = function() {
  return Nb(this);
};
h.F = function() {
  return this.l;
};
h.U = function() {
  return null;
};
h.I = function() {
  return 0;
};
h.B = function() {
  return 0;
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return this;
};
h.O = function(a, b) {
  return N.b(b, this);
};
h.P = function(a, b, c) {
  return N.c(b, c, this);
};
h.Q = function() {
  return null;
};
h.V = function() {
  return J;
};
h.G = function() {
  return null;
};
h.H = function(a, b) {
  return new Tc(b);
};
h.D = function(a, b) {
  return new Sc(this.l, b, null, 1, null);
};
var J = new Tc(null);
function Uc(a) {
  return(a ? a.j & 134217728 || a.Qb || (a.j ? 0 : y(xb, a)) : y(xb, a)) ? yb(a) : Jc.c(oc, J, a);
}
var Vc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof bc && 0 === a.n) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.Q(null)), a = a.U(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = J;;) {
      if (0 < a) {
        var f = a - 1, e = e.D(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.m = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function Wc(a, b, c, d) {
  this.l = a;
  this.first = b;
  this.ia = c;
  this.o = d;
  this.j = 65929452;
  this.q = 8192;
}
h = Wc.prototype;
h.toString = function() {
  return Nb(this);
};
h.F = function() {
  return this.l;
};
h.U = function() {
  return null == this.ia ? null : G(this.ia);
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return nc(J, this.l);
};
h.O = function(a, b) {
  return N.b(b, this);
};
h.P = function(a, b, c) {
  return N.c(b, c, this);
};
h.Q = function() {
  return this.first;
};
h.V = function() {
  return null == this.ia ? J : this.ia;
};
h.G = function() {
  return this;
};
h.H = function(a, b) {
  return new Wc(b, this.first, this.ia, this.o);
};
h.D = function(a, b) {
  return new Wc(null, b, this, this.o);
};
function M(a, b) {
  var c = null == b;
  return(c ? c : b && (b.j & 64 || b.Na)) ? new Wc(null, a, b, null) : new Wc(null, a, G(b), null);
}
function U(a, b, c, d) {
  this.X = a;
  this.name = b;
  this.xa = c;
  this.Fa = d;
  this.j = 2153775105;
  this.q = 4096;
}
h = U.prototype;
h.v = function(a, b) {
  return E(b, ":" + C.a(this.xa));
};
h.B = function() {
  var a = this.Fa;
  return null != a ? a : this.Fa = a = Xb(Sb(this.name), Vb(this.X)) + 2654435769;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return R.b(c, this);
      case 3:
        return R.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ma(b)));
};
h.a = function(a) {
  return R.b(a, this);
};
h.b = function(a, b) {
  return R.c(a, this, b);
};
h.u = function(a, b) {
  return b instanceof U ? this.xa === b.xa : !1;
};
h.toString = function() {
  return ":" + C.a(this.xa);
};
var Yc = function() {
  function a(a, b) {
    return new U(a, b, "" + C.a(w(a) ? "" + C.a(a) + "/" : null) + C.a(b), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof ac) {
      var b;
      if (a && (a.q & 4096 || a.vb)) {
        b = a.X;
      } else {
        throw Error("Doesn't support namespace: " + C.a(a));
      }
      return new U(b, Xc.a ? Xc.a(a) : Xc.call(null, a), a.Aa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Zc(a, b, c, d) {
  this.l = a;
  this.Ia = b;
  this.t = c;
  this.o = d;
  this.q = 0;
  this.j = 32374988;
}
h = Zc.prototype;
h.toString = function() {
  return Nb(this);
};
function $c(a) {
  null != a.Ia && (a.t = a.Ia.h ? a.Ia.h() : a.Ia.call(null), a.Ia = null);
  return a.t;
}
h.F = function() {
  return this.l;
};
h.U = function() {
  vb(this);
  return null == this.t ? null : K(this.t);
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return nc(J, this.l);
};
h.O = function(a, b) {
  return N.b(b, this);
};
h.P = function(a, b, c) {
  return N.c(b, c, this);
};
h.Q = function() {
  vb(this);
  return null == this.t ? null : H(this.t);
};
h.V = function() {
  vb(this);
  return null != this.t ? I(this.t) : J;
};
h.G = function() {
  $c(this);
  if (null == this.t) {
    return null;
  }
  for (var a = this.t;;) {
    if (a instanceof Zc) {
      a = $c(a);
    } else {
      return this.t = a, G(this.t);
    }
  }
};
h.H = function(a, b) {
  return new Zc(b, this.Ia, this.t, this.o);
};
h.D = function(a, b) {
  return M(b, this);
};
function ad(a, b) {
  this.Va = a;
  this.end = b;
  this.q = 0;
  this.j = 2;
}
ad.prototype.I = function() {
  return this.end;
};
ad.prototype.add = function(a) {
  this.Va[this.end] = a;
  return this.end += 1;
};
ad.prototype.S = function() {
  var a = new bd(this.Va, 0, this.end);
  this.Va = null;
  return a;
};
function cd(a) {
  return new ad(Array(a), 0);
}
function bd(a, b, c) {
  this.d = a;
  this.w = b;
  this.end = c;
  this.q = 0;
  this.j = 524306;
}
h = bd.prototype;
h.O = function(a, b) {
  return hc.k(this.d, b, this.d[this.w], this.w + 1);
};
h.P = function(a, b, c) {
  return hc.k(this.d, b, c, this.w);
};
h.eb = function() {
  if (this.w === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new bd(this.d, this.w + 1, this.end);
};
h.C = function(a, b) {
  return this.d[this.w + b];
};
h.Y = function(a, b, c) {
  return 0 <= b && b < this.end - this.w ? this.d[this.w + b] : c;
};
h.I = function() {
  return this.end - this.w;
};
var dd = function() {
  function a(a, b, c) {
    return new bd(a, b, c);
  }
  function b(a, b) {
    return new bd(a, b, a.length);
  }
  function c(a) {
    return new bd(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.c = a;
  return d;
}();
function ed(a, b, c, d) {
  this.S = a;
  this.ea = b;
  this.l = c;
  this.o = d;
  this.j = 31850732;
  this.q = 1536;
}
h = ed.prototype;
h.toString = function() {
  return Nb(this);
};
h.F = function() {
  return this.l;
};
h.U = function() {
  if (1 < Qa(this.S)) {
    return new ed(Hb(this.S), this.ea, this.l, null);
  }
  var a = vb(this.ea);
  return null == a ? null : a;
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return nc(J, this.l);
};
h.Q = function() {
  return D.b(this.S, 0);
};
h.V = function() {
  return 1 < Qa(this.S) ? new ed(Hb(this.S), this.ea, this.l, null) : null == this.ea ? J : this.ea;
};
h.G = function() {
  return this;
};
h.Ya = function() {
  return this.S;
};
h.Za = function() {
  return null == this.ea ? J : this.ea;
};
h.H = function(a, b) {
  return new ed(this.S, this.ea, b, this.o);
};
h.D = function(a, b) {
  return M(b, this);
};
h.Xa = function() {
  return null == this.ea ? null : this.ea;
};
function fd(a, b) {
  return 0 === Qa(a) ? b : new ed(a, b, null, null);
}
function gd(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(H(a)), a = K(a);
    } else {
      return b;
    }
  }
}
function hd(a, b) {
  if (ic(a)) {
    return P(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = K(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var jd = function id(b) {
  return null == b ? null : null == K(b) ? G(H(b)) : z ? M(H(b), id(K(b))) : null;
}, kd = function() {
  function a(a, b) {
    return new Zc(null, function() {
      var c = G(a);
      return c ? Cc(c) ? fd(Ib(c), d.b(Jb(c), b)) : M(H(c), d.b(I(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Zc(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Zc(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, f) {
      var e = null;
      2 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, e);
    }
    function b(a, c, f) {
      return function p(a, b) {
        return new Zc(null, function() {
          var c = G(a);
          return c ? Cc(c) ? fd(Ib(c), p(Jb(c), b)) : M(H(c), p(I(c), b)) : w(b) ? p(H(b), K(b)) : null;
        }, null, null);
      }(d.b(a, c), f);
    }
    a.m = 2;
    a.g = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return b(c, d, a);
    };
    a.f = b;
    return a;
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.f(d, g, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.g = e.g;
  d.h = c;
  d.a = b;
  d.b = a;
  d.f = e.f;
  return d;
}(), ld = function() {
  function a(a, b, c, d) {
    return M(a, M(b, M(c, d)));
  }
  function b(a, b, c) {
    return M(a, M(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var p = null;
      4 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, p);
    }
    function b(a, c, d, f, e) {
      return M(a, M(c, M(d, M(f, jd(e)))));
    }
    a.m = 4;
    a.g = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var n = H(a);
      a = I(a);
      return b(c, d, e, n, a);
    };
    a.f = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return G(c);
      case 2:
        return M(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.f(c, f, g, k, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 4;
  c.g = d.g;
  c.a = function(a) {
    return G(a);
  };
  c.b = function(a, b) {
    return M(a, b);
  };
  c.c = b;
  c.k = a;
  c.f = d.f;
  return c;
}(), md = function() {
  var a = null, b = function() {
    function a(c, f, g, k) {
      var l = null;
      3 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = Fb(a, c, d), w(k)) {
          c = H(k), d = H(K(k)), k = K(K(k));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.g = function(a) {
      var c = H(a);
      a = K(a);
      var g = H(a);
      a = K(a);
      var k = H(a);
      a = I(a);
      return b(c, g, k, a);
    };
    a.f = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Fb(a, d, e);
      default:
        return b.f(a, d, e, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 3;
  a.g = b.g;
  a.c = function(a, b, e) {
    return Fb(a, b, e);
  };
  a.f = b.f;
  return a;
}();
function nd(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.h ? a.h() : a.call(null);
  }
  c = Wa(d);
  var e = Xa(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = Wa(e), f = Xa(e);
  if (2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d);
  }
  var e = Wa(f), g = Xa(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = Wa(g), k = Xa(g);
  if (4 === b) {
    return a.k ? a.k(c, d, e, f) : a.k ? a.k(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Wa(k), l = Xa(k);
  if (5 === b) {
    return a.p ? a.p(c, d, e, f, g) : a.p ? a.p(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = Wa(l), m = Xa(l);
  if (6 === b) {
    return a.N ? a.N(c, d, e, f, g, k) : a.N ? a.N(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = Wa(m), n = Xa(m);
  if (7 === b) {
    return a.aa ? a.aa(c, d, e, f, g, k, l) : a.aa ? a.aa(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var m = Wa(n), p = Xa(n);
  if (8 === b) {
    return a.va ? a.va(c, d, e, f, g, k, l, m) : a.va ? a.va(c, d, e, f, g, k, l, m) : a.call(null, c, d, e, f, g, k, l, m);
  }
  var n = Wa(p), t = Xa(p);
  if (9 === b) {
    return a.wa ? a.wa(c, d, e, f, g, k, l, m, n) : a.wa ? a.wa(c, d, e, f, g, k, l, m, n) : a.call(null, c, d, e, f, g, k, l, m, n);
  }
  var p = Wa(t), s = Xa(t);
  if (10 === b) {
    return a.ka ? a.ka(c, d, e, f, g, k, l, m, n, p) : a.ka ? a.ka(c, d, e, f, g, k, l, m, n, p) : a.call(null, c, d, e, f, g, k, l, m, n, p);
  }
  var t = Wa(s), q = Xa(s);
  if (11 === b) {
    return a.la ? a.la(c, d, e, f, g, k, l, m, n, p, t) : a.la ? a.la(c, d, e, f, g, k, l, m, n, p, t) : a.call(null, c, d, e, f, g, k, l, m, n, p, t);
  }
  var s = Wa(q), v = Xa(q);
  if (12 === b) {
    return a.ma ? a.ma(c, d, e, f, g, k, l, m, n, p, t, s) : a.ma ? a.ma(c, d, e, f, g, k, l, m, n, p, t, s) : a.call(null, c, d, e, f, g, k, l, m, n, p, t, s);
  }
  var q = Wa(v), A = Xa(v);
  if (13 === b) {
    return a.na ? a.na(c, d, e, f, g, k, l, m, n, p, t, s, q) : a.na ? a.na(c, d, e, f, g, k, l, m, n, p, t, s, q) : a.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q);
  }
  var v = Wa(A), O = Xa(A);
  if (14 === b) {
    return a.oa ? a.oa(c, d, e, f, g, k, l, m, n, p, t, s, q, v) : a.oa ? a.oa(c, d, e, f, g, k, l, m, n, p, t, s, q, v) : a.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v);
  }
  var A = Wa(O), T = Xa(O);
  if (15 === b) {
    return a.pa ? a.pa(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A) : a.pa ? a.pa(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A) : a.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A);
  }
  var O = Wa(T), ba = Xa(T);
  if (16 === b) {
    return a.qa ? a.qa(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O) : a.qa ? a.qa(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O) : a.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O);
  }
  var T = Wa(ba), ta = Xa(ba);
  if (17 === b) {
    return a.ra ? a.ra(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T) : a.ra ? a.ra(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T) : a.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T);
  }
  var ba = Wa(ta), xa = Xa(ta);
  if (18 === b) {
    return a.sa ? a.sa(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba) : a.sa ? a.sa(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba) : a.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba);
  }
  ta = Wa(xa);
  xa = Xa(xa);
  if (19 === b) {
    return a.ta ? a.ta(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta) : a.ta ? a.ta(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta) : a.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta);
  }
  var Kb = Wa(xa);
  Xa(xa);
  if (20 === b) {
    return a.ua ? a.ua(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta, Kb) : a.ua ? a.ua(c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta, Kb) : a.call(null, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A, O, T, ba, ta, Kb);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, f) {
    b = ld.k(b, c, d, f);
    c = a.m;
    return a.g ? (d = hd(b, c + 1), d <= c ? nd(a, d, b) : a.g(b)) : a.apply(a, gd(b));
  }
  function b(a, b, c, d) {
    b = ld.c(b, c, d);
    c = a.m;
    return a.g ? (d = hd(b, c + 1), d <= c ? nd(a, d, b) : a.g(b)) : a.apply(a, gd(b));
  }
  function c(a, b, c) {
    b = ld.b(b, c);
    c = a.m;
    if (a.g) {
      var d = hd(b, c + 1);
      return d <= c ? nd(a, d, b) : a.g(b);
    }
    return a.apply(a, gd(b));
  }
  function d(a, b) {
    var c = a.m;
    if (a.g) {
      var d = hd(b, c + 1);
      return d <= c ? nd(a, d, b) : a.g(b);
    }
    return a.apply(a, gd(b));
  }
  var e = null, f = function() {
    function a(c, d, f, e, g, s) {
      var q = null;
      5 < arguments.length && (q = L(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, e, g, q);
    }
    function b(a, c, d, f, e, g) {
      c = M(c, M(d, M(f, M(e, jd(g)))));
      d = a.m;
      return a.g ? (f = hd(c, d + 1), f <= d ? nd(a, f, c) : a.g(c)) : a.apply(a, gd(c));
    }
    a.m = 5;
    a.g = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var f = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var g = H(a);
      a = I(a);
      return b(c, d, f, e, g, a);
    };
    a.f = b;
    return a;
  }(), e = function(e, k, l, m, n, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, n);
      default:
        return f.f(e, k, l, m, n, L(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.g = f.g;
  e.b = d;
  e.c = c;
  e.k = b;
  e.p = a;
  e.f = f.f;
  return e;
}(), od = function() {
  function a(a, b) {
    return!F.b(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Ja(S.k(F, a, c, d));
    }
    a.m = 2;
    a.g = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return b(c, d, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.g = c.g;
  b.a = function() {
    return!1;
  };
  b.b = a;
  b.f = c.f;
  return b;
}();
function pd(a, b) {
  for (;;) {
    if (null == G(b)) {
      return!0;
    }
    if (w(a.a ? a.a(H(b)) : a.call(null, H(b)))) {
      var c = a, d = K(b);
      a = c;
      b = d;
    } else {
      return z ? !1 : null;
    }
  }
}
function qd(a) {
  for (var b = rd;;) {
    if (G(a)) {
      var c = b.a ? b.a(H(a)) : b.call(null, H(a));
      if (w(c)) {
        return c;
      }
      a = K(a);
    } else {
      return null;
    }
  }
}
function rd(a) {
  return a;
}
function sd(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return Ja(S.k(a, b, d, e));
      }
      b.m = 2;
      b.g = function(a) {
        var b = H(a);
        a = K(a);
        var d = H(a);
        a = I(a);
        return c(b, d, a);
      };
      b.f = c;
      return b;
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return Ja(a.h ? a.h() : a.call(null));
        case 1:
          var g = b;
          return Ja(a.a ? a.a(g) : a.call(null, g));
        case 2:
          var g = b, k = e;
          return Ja(a.b ? a.b(g, k) : a.call(null, g, k));
        default:
          return c.f(b, e, L(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.m = 2;
    b.g = c.g;
    return b;
  }();
}
var td = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, f) {
          var e = null;
          3 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, e);
        }
        function k(d, l, m, n) {
          return a.a ? a.a(b.a ? b.a(S.p(c, d, l, m, n)) : b.call(null, S.p(c, d, l, m, n))) : a.call(null, b.a ? b.a(S.p(c, d, l, m, n)) : b.call(null, S.p(c, d, l, m, n)));
        }
        d.m = 3;
        d.g = function(a) {
          var b = H(a);
          a = K(a);
          var c = H(a);
          a = K(a);
          var d = H(a);
          a = I(a);
          return k(b, c, d, a);
        };
        d.f = k;
        return d;
      }(), d = function(d, k, p, t) {
        switch(arguments.length) {
          case 0:
            return a.a ? a.a(b.a ? b.a(c.h ? c.h() : c.call(null)) : b.call(null, c.h ? c.h() : c.call(null))) : a.call(null, b.a ? b.a(c.h ? c.h() : c.call(null)) : b.call(null, c.h ? c.h() : c.call(null)));
          case 1:
            var s = d;
            return a.a ? a.a(b.a ? b.a(c.a ? c.a(s) : c.call(null, s)) : b.call(null, c.a ? c.a(s) : c.call(null, s))) : a.call(null, b.a ? b.a(c.a ? c.a(s) : c.call(null, s)) : b.call(null, c.a ? c.a(s) : c.call(null, s)));
          case 2:
            var s = d, q = k;
            return a.a ? a.a(b.a ? b.a(c.b ? c.b(s, q) : c.call(null, s, q)) : b.call(null, c.b ? c.b(s, q) : c.call(null, s, q))) : a.call(null, b.a ? b.a(c.b ? c.b(s, q) : c.call(null, s, q)) : b.call(null, c.b ? c.b(s, q) : c.call(null, s, q)));
          case 3:
            var s = d, q = k, v = p;
            return a.a ? a.a(b.a ? b.a(c.c ? c.c(s, q, v) : c.call(null, s, q, v)) : b.call(null, c.c ? c.c(s, q, v) : c.call(null, s, q, v))) : a.call(null, b.a ? b.a(c.c ? c.c(s, q, v) : c.call(null, s, q, v)) : b.call(null, c.c ? c.c(s, q, v) : c.call(null, s, q, v)));
          default:
            return l.f(d, k, p, L(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.m = 3;
      d.g = l.g;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, f, e) {
          var g = null;
          3 < arguments.length && (g = L(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, f, g);
        }
        function d(c, g, k, l) {
          return a.a ? a.a(S.p(b, c, g, k, l)) : a.call(null, S.p(b, c, g, k, l));
        }
        c.m = 3;
        c.g = function(a) {
          var b = H(a);
          a = K(a);
          var c = H(a);
          a = K(a);
          var f = H(a);
          a = I(a);
          return d(b, c, f, a);
        };
        c.f = d;
        return c;
      }(), c = function(c, g, n, p) {
        switch(arguments.length) {
          case 0:
            return a.a ? a.a(b.h ? b.h() : b.call(null)) : a.call(null, b.h ? b.h() : b.call(null));
          case 1:
            var t = c;
            return a.a ? a.a(b.a ? b.a(t) : b.call(null, t)) : a.call(null, b.a ? b.a(t) : b.call(null, t));
          case 2:
            var t = c, s = g;
            return a.a ? a.a(b.b ? b.b(t, s) : b.call(null, t, s)) : a.call(null, b.b ? b.b(t, s) : b.call(null, t, s));
          case 3:
            var t = c, s = g, q = n;
            return a.a ? a.a(b.c ? b.c(t, s, q) : b.call(null, t, s, q)) : a.call(null, b.c ? b.c(t, s, q) : b.call(null, t, s, q));
          default:
            return d.f(c, g, n, L(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.m = 3;
      c.g = d.g;
      return c;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, m) {
      var n = null;
      3 < arguments.length && (n = L(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, n);
    }
    function b(a, c, d, f) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
            return c.call(this, d);
          }
          function c(b) {
            b = S.b(H(a), b);
            for (var d = K(a);;) {
              if (d) {
                b = H(d).call(null, b), d = K(d);
              } else {
                return b;
              }
            }
          }
          b.m = 0;
          b.g = function(a) {
            a = G(a);
            return c(a);
          };
          b.f = c;
          return b;
        }();
      }(Uc(ld.k(a, c, d, f)));
    }
    a.m = 3;
    a.g = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = I(a);
      return b(c, d, e, a);
    };
    a.f = b;
    return a;
  }(), c = function(c, f, g, k) {
    switch(arguments.length) {
      case 0:
        return rd;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.f(c, f, g, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 3;
  c.g = d.g;
  c.h = function() {
    return rd;
  };
  c.a = function(a) {
    return a;
  };
  c.b = b;
  c.c = a;
  c.f = d.f;
  return c;
}(), ud = function() {
  function a(a, b, c, e) {
    return new Zc(null, function() {
      var m = G(b), n = G(c), p = G(e);
      return m && n && p ? M(a.c ? a.c(H(m), H(n), H(p)) : a.call(null, H(m), H(n), H(p)), d.k(a, I(m), I(n), I(p))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Zc(null, function() {
      var e = G(b), m = G(c);
      return e && m ? M(a.b ? a.b(H(e), H(m)) : a.call(null, H(e), H(m)), d.c(a, I(e), I(m))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Zc(null, function() {
      var c = G(b);
      if (c) {
        if (Cc(c)) {
          for (var e = Ib(c), m = P(e), n = cd(m), p = 0;;) {
            if (p < m) {
              var t = a.a ? a.a(D.b(e, p)) : a.call(null, D.b(e, p));
              n.add(t);
              p += 1;
            } else {
              break;
            }
          }
          return fd(n.S(), d.b(a, Jb(c)));
        }
        return M(a.a ? a.a(H(c)) : a.call(null, H(c)), d.b(a, I(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var t = null;
      4 < arguments.length && (t = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, t);
    }
    function b(a, c, e, f, g) {
      var t = function q(a) {
        return new Zc(null, function() {
          var b = d.b(G, a);
          return pd(rd, b) ? M(d.b(H, b), q(d.b(I, b))) : null;
        }, null, null);
      };
      return d.b(function() {
        return function(b) {
          return S.b(a, b);
        };
      }(t), t(oc.f(g, f, L([e, c], 0))));
    }
    a.m = 4;
    a.g = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var f = H(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.f = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.f(d, g, k, l, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.g = e.g;
  d.b = c;
  d.c = b;
  d.k = a;
  d.f = e.f;
  return d;
}(), wd = function vd(b, c) {
  return new Zc(null, function() {
    if (0 < b) {
      var d = G(c);
      return d ? M(H(d), vd(b - 1, I(d))) : null;
    }
    return null;
  }, null, null);
};
function xd(a) {
  return new Zc(null, function(b) {
    return function() {
      return b(2, a);
    };
  }(function(a, c) {
    for (;;) {
      var d = G(c);
      if (0 < a && d) {
        var e = a - 1, d = I(d);
        a = e;
        c = d;
      } else {
        return d;
      }
    }
  }), null, null);
}
function yd(a, b) {
  return new Zc(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = G(b), f;
      f = (f = e) ? a.a ? a.a(H(e)) : a.call(null, H(e)) : f;
      if (w(f)) {
        f = a, e = I(e), a = f, b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
var zd = function() {
  function a(a, b) {
    return wd(a, c.a(b));
  }
  function b(a) {
    return new Zc(null, function() {
      return M(a.h ? a.h() : a.call(null), c.a(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Bd = function Ad(b, c) {
  return new Zc(null, function() {
    var d = G(c);
    if (d) {
      if (Cc(d)) {
        for (var e = Ib(d), f = P(e), g = cd(f), k = 0;;) {
          if (k < f) {
            if (w(b.a ? b.a(D.b(e, k)) : b.call(null, D.b(e, k)))) {
              var l = D.b(e, k);
              g.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return fd(g.S(), Ad(b, Jb(d)));
      }
      e = H(d);
      d = I(d);
      return w(b.a ? b.a(e) : b.call(null, e)) ? M(e, Ad(b, d)) : Ad(b, d);
    }
    return null;
  }, null, null);
};
function Cd(a, b) {
  return Bd(sd(a), b);
}
function Dd(a, b) {
  var c;
  null != a ? a && (a.q & 4 || a.Mb) ? (c = Jc.c(Db, Cb(a), b), c = Eb(c)) : c = Jc.c(Ta, a, b) : c = Jc.c(oc, J, b);
  return c;
}
var Ed = function() {
  function a(a, b, c, d, f, p) {
    var t = Q.c(b, 0, null);
    return(b = Rc(b)) ? rc.c(a, t, e.N(R.b(a, t), b, c, d, f, p)) : rc.c(a, t, c.k ? c.k(R.b(a, t), d, f, p) : c.call(null, R.b(a, t), d, f, p));
  }
  function b(a, b, c, d, f) {
    var p = Q.c(b, 0, null);
    return(b = Rc(b)) ? rc.c(a, p, e.p(R.b(a, p), b, c, d, f)) : rc.c(a, p, c.c ? c.c(R.b(a, p), d, f) : c.call(null, R.b(a, p), d, f));
  }
  function c(a, b, c, d) {
    var f = Q.c(b, 0, null);
    return(b = Rc(b)) ? rc.c(a, f, e.k(R.b(a, f), b, c, d)) : rc.c(a, f, c.b ? c.b(R.b(a, f), d) : c.call(null, R.b(a, f), d));
  }
  function d(a, b, c) {
    var d = Q.c(b, 0, null);
    return(b = Rc(b)) ? rc.c(a, d, e.c(R.b(a, d), b, c)) : rc.c(a, d, c.a ? c.a(R.b(a, d)) : c.call(null, R.b(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, s, q) {
      var v = null;
      6 < arguments.length && (v = L(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, s, v);
    }
    function b(a, c, d, f, g, k, q) {
      var v = Q.c(c, 0, null);
      return(c = Rc(c)) ? rc.c(a, v, S.f(e, R.b(a, v), c, d, f, L([g, k, q], 0))) : rc.c(a, v, S.f(d, R.b(a, v), f, g, k, L([q], 0)));
    }
    a.m = 6;
    a.g = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var f = H(a);
      a = K(a);
      var g = H(a);
      a = K(a);
      var q = H(a);
      a = I(a);
      return b(c, d, e, f, g, q, a);
    };
    a.f = b;
    return a;
  }(), e = function(e, k, l, m, n, p, t) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, m);
      case 5:
        return b.call(this, e, k, l, m, n);
      case 6:
        return a.call(this, e, k, l, m, n, p);
      default:
        return f.f(e, k, l, m, n, p, L(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 6;
  e.g = f.g;
  e.c = d;
  e.k = c;
  e.p = b;
  e.N = a;
  e.f = f.f;
  return e;
}();
function Fd(a, b) {
  this.r = a;
  this.d = b;
}
function Gd(a) {
  return new Fd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Hd(a) {
  a = a.i;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Id(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Gd(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var Kd = function Jd(b, c, d, e) {
  var f = new Fd(d.r, Ma(d.d)), g = b.i - 1 >>> c & 31;
  5 === c ? f.d[g] = e : (d = d.d[g], b = null != d ? Jd(b, c - 5, d, e) : Id(null, c - 5, e), f.d[g] = b);
  return f;
};
function Ld(a, b) {
  throw Error("No item " + C.a(a) + " in vector of length " + C.a(b));
}
function Md(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.d[0];
    } else {
      return b.d;
    }
  }
}
function Nd(a, b) {
  if (b >= Hd(a)) {
    return a.R;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.d[b >>> d & 31], d = e
    } else {
      return c.d;
    }
  }
}
function Od(a, b) {
  return 0 <= b && b < a.i ? Nd(a, b) : Ld(b, a.i);
}
var Qd = function Pd(b, c, d, e, f) {
  var g = new Fd(d.r, Ma(d.d));
  if (0 === c) {
    g.d[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Pd(b, c - 5, d.d[k], e, f);
    g.d[k] = b;
  }
  return g;
};
function V(a, b, c, d, e, f) {
  this.l = a;
  this.i = b;
  this.shift = c;
  this.root = d;
  this.R = e;
  this.o = f;
  this.j = 167668511;
  this.q = 8196;
}
h = V.prototype;
h.toString = function() {
  return Nb(this);
};
h.K = function(a, b) {
  return $a.c(this, b, null);
};
h.L = function(a, b, c) {
  return "number" === typeof b ? D.c(this, b, c) : c;
};
h.C = function(a, b) {
  return Od(this, b)[b & 31];
};
h.Y = function(a, b, c) {
  return 0 <= b && b < this.i ? Nd(this, b)[b & 31] : c;
};
h.bb = function(a, b, c) {
  if (0 <= b && b < this.i) {
    return Hd(this) <= b ? (a = Ma(this.R), a[b & 31] = c, new V(this.l, this.i, this.shift, this.root, a, null)) : new V(this.l, this.i, this.shift, Qd(this, this.shift, this.root, b, c), this.R, null);
  }
  if (b === this.i) {
    return Ta(this, c);
  }
  if (z) {
    throw Error("Index " + C.a(b) + " out of bounds  [0," + C.a(this.i) + "]");
  }
  return null;
};
h.F = function() {
  return this.l;
};
h.I = function() {
  return this.i;
};
h.ab = function() {
  return D.b(this, 0);
};
h.gb = function() {
  return D.b(this, 1);
};
h.Ua = function() {
  return 0 < this.i ? new kc(this, this.i - 1, null) : null;
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.Ma = function() {
  return new Rd(this.i, this.shift, Sd.a ? Sd.a(this.root) : Sd.call(null, this.root), Td.a ? Td.a(this.R) : Td.call(null, this.R));
};
h.J = function() {
  return nc(Ud, this.l);
};
h.O = function(a, b) {
  return gc.b(this, b);
};
h.P = function(a, b, c) {
  return gc.c(this, b, c);
};
h.La = function(a, b, c) {
  if ("number" === typeof b) {
    return kb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.G = function() {
  return 0 === this.i ? null : 32 >= this.i ? new bc(this.R, 0) : z ? Vd.k ? Vd.k(this, Md(this), 0, 0) : Vd.call(null, this, Md(this), 0, 0) : null;
};
h.H = function(a, b) {
  return new V(b, this.i, this.shift, this.root, this.R, this.o);
};
h.D = function(a, b) {
  if (32 > this.i - Hd(this)) {
    for (var c = this.R.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.R[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new V(this.l, this.i + 1, this.shift, this.root, d, null);
  }
  c = (d = this.i >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Gd(null), d.d[0] = this.root, e = Id(null, this.shift, new Fd(null, this.R)), d.d[1] = e) : d = Kd(this, this.shift, this.root, new Fd(null, this.R));
  return new V(this.l, this.i + 1, c, d, [b], null);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.Y(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ma(b)));
};
h.a = function(a) {
  return this.C(null, a);
};
h.b = function(a, b) {
  return this.Y(null, a, b);
};
var W = new Fd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ud = new V(null, 0, 5, W, [], 0);
function Wd(a) {
  return Eb(Jc.c(Db, Cb(Ud), a));
}
function Xd(a, b, c, d, e, f) {
  this.A = a;
  this.Z = b;
  this.n = c;
  this.w = d;
  this.l = e;
  this.o = f;
  this.j = 32243948;
  this.q = 1536;
}
h = Xd.prototype;
h.toString = function() {
  return Nb(this);
};
h.U = function() {
  if (this.w + 1 < this.Z.length) {
    var a = Vd.k ? Vd.k(this.A, this.Z, this.n, this.w + 1) : Vd.call(null, this.A, this.Z, this.n, this.w + 1);
    return null == a ? null : a;
  }
  return Lb(this);
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return nc(Ud, this.l);
};
h.O = function(a, b) {
  return gc.b(Yd.c ? Yd.c(this.A, this.n + this.w, P(this.A)) : Yd.call(null, this.A, this.n + this.w, P(this.A)), b);
};
h.P = function(a, b, c) {
  return gc.c(Yd.c ? Yd.c(this.A, this.n + this.w, P(this.A)) : Yd.call(null, this.A, this.n + this.w, P(this.A)), b, c);
};
h.Q = function() {
  return this.Z[this.w];
};
h.V = function() {
  if (this.w + 1 < this.Z.length) {
    var a = Vd.k ? Vd.k(this.A, this.Z, this.n, this.w + 1) : Vd.call(null, this.A, this.Z, this.n, this.w + 1);
    return null == a ? J : a;
  }
  return Jb(this);
};
h.G = function() {
  return this;
};
h.Ya = function() {
  return dd.b(this.Z, this.w);
};
h.Za = function() {
  var a = this.n + this.Z.length;
  return a < Qa(this.A) ? Vd.k ? Vd.k(this.A, Nd(this.A, a), a, 0) : Vd.call(null, this.A, Nd(this.A, a), a, 0) : J;
};
h.H = function(a, b) {
  return Vd.p ? Vd.p(this.A, this.Z, this.n, this.w, b) : Vd.call(null, this.A, this.Z, this.n, this.w, b);
};
h.D = function(a, b) {
  return M(b, this);
};
h.Xa = function() {
  var a = this.n + this.Z.length;
  return a < Qa(this.A) ? Vd.k ? Vd.k(this.A, Nd(this.A, a), a, 0) : Vd.call(null, this.A, Nd(this.A, a), a, 0) : null;
};
var Vd = function() {
  function a(a, b, c, d, l) {
    return new Xd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Xd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Xd(a, Od(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.k = b;
  d.p = a;
  return d;
}();
function Zd(a, b, c, d, e) {
  this.l = a;
  this.fa = b;
  this.start = c;
  this.end = d;
  this.o = e;
  this.j = 166617887;
  this.q = 8192;
}
h = Zd.prototype;
h.toString = function() {
  return Nb(this);
};
h.K = function(a, b) {
  return $a.c(this, b, null);
};
h.L = function(a, b, c) {
  return "number" === typeof b ? D.c(this, b, c) : c;
};
h.C = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Ld(b, this.end - this.start) : D.b(this.fa, this.start + b);
};
h.Y = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : D.c(this.fa, this.start + b, c);
};
h.bb = function(a, b, c) {
  var d = this, e = d.start + b;
  return $d.p ? $d.p(d.l, rc.c(d.fa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : $d.call(null, d.l, rc.c(d.fa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.F = function() {
  return this.l;
};
h.I = function() {
  return this.end - this.start;
};
h.Ua = function() {
  return this.start !== this.end ? new kc(this, this.end - this.start - 1, null) : null;
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return nc(Ud, this.l);
};
h.O = function(a, b) {
  return gc.b(this, b);
};
h.P = function(a, b, c) {
  return gc.c(this, b, c);
};
h.La = function(a, b, c) {
  if ("number" === typeof b) {
    return kb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.G = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : M(D.b(a.fa, e), new Zc(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.H = function(a, b) {
  return $d.p ? $d.p(b, this.fa, this.start, this.end, this.o) : $d.call(null, b, this.fa, this.start, this.end, this.o);
};
h.D = function(a, b) {
  return $d.p ? $d.p(this.l, kb(this.fa, this.end, b), this.start, this.end + 1, null) : $d.call(null, this.l, kb(this.fa, this.end, b), this.start, this.end + 1, null);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.Y(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ma(b)));
};
h.a = function(a) {
  return this.C(null, a);
};
h.b = function(a, b) {
  return this.Y(null, a, b);
};
function $d(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Zd) {
      c = b.start + c, d = b.start + d, b = b.fa;
    } else {
      var f = P(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Zd(a, b, c, d, e);
    }
  }
}
var Yd = function() {
  function a(a, b, c) {
    return $d(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, P(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function ae(a, b) {
  return a === b.r ? b : new Fd(a, Ma(b.d));
}
function Sd(a) {
  return new Fd({}, Ma(a.d));
}
function Td(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Ec(a, 0, b, 0, a.length);
  return b;
}
var ce = function be(b, c, d, e) {
  d = ae(b.root.r, d);
  var f = b.i - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.d[f];
    b = null != g ? be(b, c - 5, g, e) : Id(b.root.r, c - 5, e);
  }
  d.d[f] = b;
  return d;
};
function Rd(a, b, c, d) {
  this.i = a;
  this.shift = b;
  this.root = c;
  this.R = d;
  this.j = 275;
  this.q = 88;
}
h = Rd.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ma(b)));
};
h.a = function(a) {
  return this.K(null, a);
};
h.b = function(a, b) {
  return this.L(null, a, b);
};
h.K = function(a, b) {
  return $a.c(this, b, null);
};
h.L = function(a, b, c) {
  return "number" === typeof b ? D.c(this, b, c) : c;
};
h.C = function(a, b) {
  if (this.root.r) {
    return Od(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.Y = function(a, b, c) {
  return 0 <= b && b < this.i ? D.b(this, b) : c;
};
h.I = function() {
  if (this.root.r) {
    return this.i;
  }
  throw Error("count after persistent!");
};
h.jb = function(a, b, c) {
  var d = this;
  if (d.root.r) {
    if (0 <= b && b < d.i) {
      return Hd(this) <= b ? d.R[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = ae(d.root.r, k);
          if (0 === a) {
            l.d[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.d[m]);
            l.d[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.i) {
      return Db(this, c);
    }
    if (z) {
      throw Error("Index " + C.a(b) + " out of bounds for TransientVector of length" + C.a(d.i));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
h.Oa = function(a, b, c) {
  if ("number" === typeof b) {
    return Gb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.Ba = function(a, b) {
  if (this.root.r) {
    if (32 > this.i - Hd(this)) {
      this.R[this.i & 31] = b;
    } else {
      var c = new Fd(this.root.r, this.R), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.R = d;
      if (this.i >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Id(this.root.r, this.shift, c);
        this.root = new Fd(this.root.r, d);
        this.shift = e;
      } else {
        this.root = ce(this, this.shift, this.root, c);
      }
    }
    this.i += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Ca = function() {
  if (this.root.r) {
    this.root.r = null;
    var a = this.i - Hd(this), b = Array(a);
    Ec(this.R, 0, b, 0, a);
    return new V(null, this.i, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function de() {
  this.q = 0;
  this.j = 2097152;
}
de.prototype.u = function() {
  return!1;
};
var ee = new de;
function fe(a, b) {
  return Hc(Ac(b) ? P(a) === P(b) ? pd(rd, ud.b(function(a) {
    return F.b(R.c(b, H(a), ee), H(K(a)));
  }, a)) : null : null);
}
function ge(a, b) {
  var c = a.d;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.xa, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof U && e === g.xa) {
          c = f;
          break a;
        }
        if (z) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (da(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (z) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof ac) {
        a: {
          d = c.length;
          e = b.Aa;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof ac && e === g.Aa) {
              c = f;
              break a;
            }
            if (z) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (z) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (z) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (F.b(b, c[e])) {
                  c = e;
                  break a;
                }
                if (z) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function he(a, b, c) {
  this.d = a;
  this.n = b;
  this.$ = c;
  this.q = 0;
  this.j = 32374990;
}
h = he.prototype;
h.toString = function() {
  return Nb(this);
};
h.F = function() {
  return this.$;
};
h.U = function() {
  return this.n < this.d.length - 2 ? new he(this.d, this.n + 2, this.$) : null;
};
h.I = function() {
  return(this.d.length - this.n) / 2;
};
h.B = function() {
  return dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return nc(J, this.$);
};
h.O = function(a, b) {
  return N.b(b, this);
};
h.P = function(a, b, c) {
  return N.c(b, c, this);
};
h.Q = function() {
  return new V(null, 2, 5, W, [this.d[this.n], this.d[this.n + 1]], null);
};
h.V = function() {
  return this.n < this.d.length - 2 ? new he(this.d, this.n + 2, this.$) : J;
};
h.G = function() {
  return this;
};
h.H = function(a, b) {
  return new he(this.d, this.n, b);
};
h.D = function(a, b) {
  return M(b, this);
};
function u(a, b, c, d) {
  this.l = a;
  this.i = b;
  this.d = c;
  this.o = d;
  this.j = 16647951;
  this.q = 8196;
}
h = u.prototype;
h.toString = function() {
  return Nb(this);
};
h.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.C(null, e), g = Q.c(f, 0, null), f = Q.c(f, 1, null);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = G(b)) {
        Cc(b) ? (c = Ib(b), b = Jb(b), g = c, d = P(c), c = g) : (c = H(b), g = Q.c(c, 0, null), f = Q.c(c, 1, null), a.b ? a.b(f, g) : a.call(null, f, g), b = K(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.K = function(a, b) {
  return $a.c(this, b, null);
};
h.L = function(a, b, c) {
  a = ge(this, b);
  return-1 === a ? c : this.d[a + 1];
};
h.F = function() {
  return this.l;
};
h.I = function() {
  return this.i;
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ec(this);
};
h.u = function(a, b) {
  return fe(this, b);
};
h.Ma = function() {
  return new ie({}, this.d.length, Ma(this.d));
};
h.J = function() {
  return pb(je, this.l);
};
h.O = function(a, b) {
  return N.b(b, this);
};
h.P = function(a, b, c) {
  return N.c(b, c, this);
};
h.$a = function(a, b) {
  if (0 <= ge(this, b)) {
    var c = this.d.length, d = c - 2;
    if (0 === d) {
      return Ra(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new u(this.l, this.i - 1, d, null);
      }
      if (F.b(b, this.d[e])) {
        e += 2;
      } else {
        if (z) {
          d[f] = this.d[e], d[f + 1] = this.d[e + 1], f += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
h.La = function(a, b, c) {
  a = ge(this, b);
  if (-1 === a) {
    if (this.i < ke) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new u(this.l, this.i + 1, e, null);
    }
    return pb(bb(Dd(le, this), b, c), this.l);
  }
  return c === this.d[a + 1] ? this : z ? (b = Ma(this.d), b[a + 1] = c, new u(this.l, this.i, b, null)) : null;
};
h.Wa = function(a, b) {
  return-1 !== ge(this, b);
};
h.G = function() {
  var a = this.d;
  return 0 <= a.length - 2 ? new he(a, 0, null) : null;
};
h.H = function(a, b) {
  return new u(b, this.i, this.d, this.o);
};
h.D = function(a, b) {
  if (Bc(b)) {
    return bb(this, D.b(b, 0), D.b(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = H(d);
    if (Bc(e)) {
      c = bb(c, D.b(e, 0), D.b(e, 1)), d = K(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ma(b)));
};
h.a = function(a) {
  return this.K(null, a);
};
h.b = function(a, b) {
  return this.L(null, a, b);
};
var je = new u(null, 0, [], null), ke = 8;
function ie(a, b, c) {
  this.Ga = a;
  this.Ea = b;
  this.d = c;
  this.q = 56;
  this.j = 258;
}
h = ie.prototype;
h.Oa = function(a, b, c) {
  if (w(this.Ga)) {
    a = ge(this, b);
    if (-1 === a) {
      return this.Ea + 2 <= 2 * ke ? (this.Ea += 2, this.d.push(b), this.d.push(c), this) : md.c(me.b ? me.b(this.Ea, this.d) : me.call(null, this.Ea, this.d), b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.Ba = function(a, b) {
  if (w(this.Ga)) {
    if (b ? b.j & 2048 || b.tb || (b.j ? 0 : y(eb, b)) : y(eb, b)) {
      return Fb(this, ne.a ? ne.a(b) : ne.call(null, b), oe.a ? oe.a(b) : oe.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = H(c);
      if (w(e)) {
        c = K(c), d = Fb(d, ne.a ? ne.a(e) : ne.call(null, e), oe.a ? oe.a(e) : oe.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Ca = function() {
  if (w(this.Ga)) {
    return this.Ga = !1, new u(null, Nc(this.Ea), this.d, null);
  }
  throw Error("persistent! called twice");
};
h.K = function(a, b) {
  return $a.c(this, b, null);
};
h.L = function(a, b, c) {
  if (w(this.Ga)) {
    return a = ge(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.I = function() {
  if (w(this.Ga)) {
    return Nc(this.Ea);
  }
  throw Error("count after persistent!");
};
function me(a, b) {
  for (var c = Cb(le), d = 0;;) {
    if (d < a) {
      c = md.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function pe() {
  this.ga = !1;
}
function qe(a, b) {
  return a === b ? !0 : a === b || a instanceof U && b instanceof U && a.xa === b.xa ? !0 : z ? F.b(a, b) : null;
}
var re = function() {
  function a(a, b, c, g, k) {
    a = Ma(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function b(a, b, c) {
    a = Ma(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.p = a;
  return c;
}();
function se(a, b) {
  var c = Array(a.length - 2);
  Ec(a, 0, c, 0, 2 * b);
  Ec(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var te = function() {
  function a(a, b, c, g, k, l) {
    a = a.Ha(b);
    a.d[c] = g;
    a.d[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Ha(b);
    a.d[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = b;
  c.N = a;
  return c;
}();
function ue(a, b, c) {
  this.r = a;
  this.s = b;
  this.d = c;
}
h = ue.prototype;
h.Ha = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = Qc(this.s), c = Array(0 > b ? 4 : 2 * (b + 1));
  Ec(this.d, 0, c, 0, 2 * b);
  return new ue(a, this.s, c);
};
h.Pa = function() {
  return ve.a ? ve.a(this.d) : ve.call(null, this.d);
};
h.ya = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.s & e)) {
    return d;
  }
  var f = Qc(this.s & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.ya(a + 5, b, c, d) : qe(c, e) ? f : z ? d : null;
};
h.ca = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = Qc(this.s & g - 1);
  if (0 === (this.s & g)) {
    var l = Qc(this.s);
    if (2 * l < this.d.length) {
      a = this.Ha(a);
      b = a.d;
      f.ga = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.s |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = we.ca(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.s >>> d & 1) && (k[d] = null != this.d[e] ? we.ca(a, b + 5, Wb(this.d[e]), this.d[e], this.d[e + 1], f) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new xe(a, l + 1, k);
    }
    return z ? (b = Array(2 * (l + 4)), Ec(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Ec(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.ga = !0, a = this.Ha(a), a.d = b, a.s |= g, a) : null;
  }
  l = this.d[2 * k];
  g = this.d[2 * k + 1];
  return null == l ? (l = g.ca(a, b + 5, c, d, e, f), l === g ? this : te.k(this, a, 2 * k + 1, l)) : qe(d, l) ? e === g ? this : te.k(this, a, 2 * k + 1, e) : z ? (f.ga = !0, te.N(this, a, 2 * k, null, 2 * k + 1, ye.aa ? ye.aa(a, b + 5, l, g, c, d, e) : ye.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.ba = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Qc(this.s & f - 1);
  if (0 === (this.s & f)) {
    var k = Qc(this.s);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = we.ba(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.s >>> c & 1) && (g[c] = null != this.d[d] ? we.ba(a + 5, Wb(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new xe(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Ec(this.d, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Ec(this.d, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.ga = !0;
    return new ue(null, this.s | f, a);
  }
  k = this.d[2 * g];
  f = this.d[2 * g + 1];
  return null == k ? (k = f.ba(a + 5, b, c, d, e), k === f ? this : new ue(null, this.s, re.c(this.d, 2 * g + 1, k))) : qe(c, k) ? d === f ? this : new ue(null, this.s, re.c(this.d, 2 * g + 1, d)) : z ? (e.ga = !0, new ue(null, this.s, re.p(this.d, 2 * g, null, 2 * g + 1, ye.N ? ye.N(a + 5, k, f, b, c, d) : ye.call(null, a + 5, k, f, b, c, d)))) : null;
};
h.Qa = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.s & d)) {
    return this;
  }
  var e = Qc(this.s & d - 1), f = this.d[2 * e], g = this.d[2 * e + 1];
  return null == f ? (a = g.Qa(a + 5, b, c), a === g ? this : null != a ? new ue(null, this.s, re.c(this.d, 2 * e + 1, a)) : this.s === d ? null : z ? new ue(null, this.s ^ d, se(this.d, e)) : null) : qe(c, f) ? new ue(null, this.s ^ d, se(this.d, e)) : z ? this : null;
};
var we = new ue(null, 0, []);
function xe(a, b, c) {
  this.r = a;
  this.i = b;
  this.d = c;
}
h = xe.prototype;
h.Ha = function(a) {
  return a === this.r ? this : new xe(a, this.i, Ma(this.d));
};
h.Pa = function() {
  return ze.a ? ze.a(this.d) : ze.call(null, this.d);
};
h.ya = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.ya(a + 5, b, c, d) : d;
};
h.ca = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.d[g];
  if (null == k) {
    return a = te.k(this, a, g, we.ca(a, b + 5, c, d, e, f)), a.i += 1, a;
  }
  b = k.ca(a, b + 5, c, d, e, f);
  return b === k ? this : te.k(this, a, g, b);
};
h.ba = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.d[f];
  if (null == g) {
    return new xe(null, this.i + 1, re.c(this.d, f, we.ba(a + 5, b, c, d, e)));
  }
  a = g.ba(a + 5, b, c, d, e);
  return a === g ? this : new xe(null, this.i, re.c(this.d, f, a));
};
h.Qa = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if (null != e) {
    a = e.Qa(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.i) {
          a: {
            e = this.d;
            a = 2 * (this.i - 1);
            b = Array(a);
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new ue(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new xe(null, this.i - 1, re.c(this.d, d, a));
        }
      } else {
        d = z ? new xe(null, this.i, re.c(this.d, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
function Ae(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (qe(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Be(a, b, c, d) {
  this.r = a;
  this.ha = b;
  this.i = c;
  this.d = d;
}
h = Be.prototype;
h.Ha = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = Array(2 * (this.i + 1));
  Ec(this.d, 0, b, 0, 2 * this.i);
  return new Be(a, this.ha, this.i, b);
};
h.Pa = function() {
  return ve.a ? ve.a(this.d) : ve.call(null, this.d);
};
h.ya = function(a, b, c, d) {
  a = Ae(this.d, this.i, c);
  return 0 > a ? d : qe(c, this.d[a]) ? this.d[a + 1] : z ? d : null;
};
h.ca = function(a, b, c, d, e, f) {
  if (c === this.ha) {
    b = Ae(this.d, this.i, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.i) {
        return a = te.N(this, a, 2 * this.i, d, 2 * this.i + 1, e), f.ga = !0, a.i += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      Ec(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ga = !0;
      f = this.i + 1;
      a === this.r ? (this.d = b, this.i = f, a = this) : a = new Be(this.r, this.ha, f, b);
      return a;
    }
    return this.d[b + 1] === e ? this : te.k(this, a, b + 1, e);
  }
  return(new ue(a, 1 << (this.ha >>> b & 31), [null, this, null, null])).ca(a, b, c, d, e, f);
};
h.ba = function(a, b, c, d, e) {
  return b === this.ha ? (a = Ae(this.d, this.i, c), -1 === a ? (a = 2 * this.i, b = Array(a + 2), Ec(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ga = !0, new Be(null, this.ha, this.i + 1, b)) : F.b(this.d[a], d) ? this : new Be(null, this.ha, this.i, re.c(this.d, a + 1, d))) : (new ue(null, 1 << (this.ha >>> a & 31), [null, this])).ba(a, b, c, d, e);
};
h.Qa = function(a, b, c) {
  a = Ae(this.d, this.i, c);
  return-1 === a ? this : 1 === this.i ? null : z ? new Be(null, this.ha, this.i - 1, se(this.d, Nc(a))) : null;
};
var ye = function() {
  function a(a, b, c, g, k, l, m) {
    var n = Wb(c);
    if (n === k) {
      return new Be(null, n, 2, [c, g, l, m]);
    }
    var p = new pe;
    return we.ca(a, b, n, c, g, p).ca(a, b, k, l, m, p);
  }
  function b(a, b, c, g, k, l) {
    var m = Wb(b);
    if (m === g) {
      return new Be(null, m, 2, [b, c, k, l]);
    }
    var n = new pe;
    return we.ba(a, m, b, c, n).ba(a, g, k, l, n);
  }
  var c = null, c = function(c, e, f, g, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.N = b;
  c.aa = a;
  return c;
}();
function Ce(a, b, c, d, e) {
  this.l = a;
  this.da = b;
  this.n = c;
  this.t = d;
  this.o = e;
  this.q = 0;
  this.j = 32374860;
}
h = Ce.prototype;
h.toString = function() {
  return Nb(this);
};
h.F = function() {
  return this.l;
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return nc(J, this.l);
};
h.O = function(a, b) {
  return N.b(b, this);
};
h.P = function(a, b, c) {
  return N.c(b, c, this);
};
h.Q = function() {
  return null == this.t ? new V(null, 2, 5, W, [this.da[this.n], this.da[this.n + 1]], null) : H(this.t);
};
h.V = function() {
  return null == this.t ? ve.c ? ve.c(this.da, this.n + 2, null) : ve.call(null, this.da, this.n + 2, null) : ve.c ? ve.c(this.da, this.n, K(this.t)) : ve.call(null, this.da, this.n, K(this.t));
};
h.G = function() {
  return this;
};
h.H = function(a, b) {
  return new Ce(b, this.da, this.n, this.t, this.o);
};
h.D = function(a, b) {
  return M(b, this);
};
var ve = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Ce(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (w(g) && (g = g.Pa(), w(g))) {
            return new Ce(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Ce(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function De(a, b, c, d, e) {
  this.l = a;
  this.da = b;
  this.n = c;
  this.t = d;
  this.o = e;
  this.q = 0;
  this.j = 32374860;
}
h = De.prototype;
h.toString = function() {
  return Nb(this);
};
h.F = function() {
  return this.l;
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return nc(J, this.l);
};
h.O = function(a, b) {
  return N.b(b, this);
};
h.P = function(a, b, c) {
  return N.c(b, c, this);
};
h.Q = function() {
  return H(this.t);
};
h.V = function() {
  return ze.k ? ze.k(null, this.da, this.n, K(this.t)) : ze.call(null, null, this.da, this.n, K(this.t));
};
h.G = function() {
  return this;
};
h.H = function(a, b) {
  return new De(b, this.da, this.n, this.t, this.o);
};
h.D = function(a, b) {
  return M(b, this);
};
var ze = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (w(k) && (k = k.Pa(), w(k))) {
            return new De(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new De(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.k(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.k = a;
  return c;
}();
function Ee(a, b, c, d, e, f) {
  this.l = a;
  this.i = b;
  this.root = c;
  this.T = d;
  this.W = e;
  this.o = f;
  this.j = 16123663;
  this.q = 8196;
}
h = Ee.prototype;
h.toString = function() {
  return Nb(this);
};
h.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.C(null, e), g = Q.c(f, 0, null), f = Q.c(f, 1, null);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = G(b)) {
        Cc(b) ? (c = Ib(b), b = Jb(b), g = c, d = P(c), c = g) : (c = H(b), g = Q.c(c, 0, null), f = Q.c(c, 1, null), a.b ? a.b(f, g) : a.call(null, f, g), b = K(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.K = function(a, b) {
  return $a.c(this, b, null);
};
h.L = function(a, b, c) {
  return null == b ? this.T ? this.W : c : null == this.root ? c : z ? this.root.ya(0, Wb(b), b, c) : null;
};
h.F = function() {
  return this.l;
};
h.I = function() {
  return this.i;
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ec(this);
};
h.u = function(a, b) {
  return fe(this, b);
};
h.Ma = function() {
  return new Fe({}, this.root, this.i, this.T, this.W);
};
h.J = function() {
  return pb(le, this.l);
};
h.$a = function(a, b) {
  if (null == b) {
    return this.T ? new Ee(this.l, this.i - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (z) {
    var c = this.root.Qa(0, Wb(b), b);
    return c === this.root ? this : new Ee(this.l, this.i - 1, c, this.T, this.W, null);
  }
  return null;
};
h.La = function(a, b, c) {
  if (null == b) {
    return this.T && c === this.W ? this : new Ee(this.l, this.T ? this.i : this.i + 1, this.root, !0, c, null);
  }
  a = new pe;
  b = (null == this.root ? we : this.root).ba(0, Wb(b), b, c, a);
  return b === this.root ? this : new Ee(this.l, a.ga ? this.i + 1 : this.i, b, this.T, this.W, null);
};
h.Wa = function(a, b) {
  return null == b ? this.T : null == this.root ? !1 : z ? this.root.ya(0, Wb(b), b, Fc) !== Fc : null;
};
h.G = function() {
  if (0 < this.i) {
    var a = null != this.root ? this.root.Pa() : null;
    return this.T ? M(new V(null, 2, 5, W, [null, this.W], null), a) : a;
  }
  return null;
};
h.H = function(a, b) {
  return new Ee(b, this.i, this.root, this.T, this.W, this.o);
};
h.D = function(a, b) {
  if (Bc(b)) {
    return bb(this, D.b(b, 0), D.b(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = H(d);
    if (Bc(e)) {
      c = bb(c, D.b(e, 0), D.b(e, 1)), d = K(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ma(b)));
};
h.a = function(a) {
  return this.K(null, a);
};
h.b = function(a, b) {
  return this.L(null, a, b);
};
var le = new Ee(null, 0, null, !1, null, 0);
function qc(a, b) {
  for (var c = a.length, d = 0, e = Cb(le);;) {
    if (d < c) {
      var f = d + 1, e = e.Oa(null, a[d], b[d]), d = f
    } else {
      return Eb(e);
    }
  }
}
function Fe(a, b, c, d, e) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.T = d;
  this.W = e;
  this.q = 56;
  this.j = 258;
}
h = Fe.prototype;
h.Oa = function(a, b, c) {
  return Ge(this, b, c);
};
h.Ba = function(a, b) {
  var c;
  a: {
    if (this.r) {
      if (b ? b.j & 2048 || b.tb || (b.j ? 0 : y(eb, b)) : y(eb, b)) {
        c = Ge(this, ne.a ? ne.a(b) : ne.call(null, b), oe.a ? oe.a(b) : oe.call(null, b));
        break a;
      }
      c = G(b);
      for (var d = this;;) {
        var e = H(c);
        if (w(e)) {
          c = K(c), d = Ge(d, ne.a ? ne.a(e) : ne.call(null, e), oe.a ? oe.a(e) : oe.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
h.Ca = function() {
  var a;
  if (this.r) {
    this.r = null, a = new Ee(null, this.count, this.root, this.T, this.W, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.K = function(a, b) {
  return null == b ? this.T ? this.W : null : null == this.root ? null : this.root.ya(0, Wb(b), b);
};
h.L = function(a, b, c) {
  return null == b ? this.T ? this.W : c : null == this.root ? c : this.root.ya(0, Wb(b), b, c);
};
h.I = function() {
  if (this.r) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ge(a, b, c) {
  if (a.r) {
    if (null == b) {
      a.W !== c && (a.W = c), a.T || (a.count += 1, a.T = !0);
    } else {
      var d = new pe;
      b = (null == a.root ? we : a.root).ca(a.r, 0, Wb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ga && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var He = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = G(a);
    for (var b = Cb(le);;) {
      if (a) {
        var e = K(K(a)), b = md.c(b, H(a), H(K(a)));
        a = e;
      } else {
        return Eb(b);
      }
    }
  }
  a.m = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.f = b;
  return a;
}(), Ie = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new u(null, Nc(P(a)), S.b(Na, a), null);
  }
  a.m = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function Je(a, b) {
  this.za = a;
  this.$ = b;
  this.q = 0;
  this.j = 32374988;
}
h = Je.prototype;
h.toString = function() {
  return Nb(this);
};
h.F = function() {
  return this.$;
};
h.U = function() {
  var a = this.za, a = (a ? a.j & 128 || a.hb || (a.j ? 0 : y(Ya, a)) : y(Ya, a)) ? this.za.U(null) : K(this.za);
  return null == a ? null : new Je(a, this.$);
};
h.B = function() {
  return dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return nc(J, this.$);
};
h.O = function(a, b) {
  return N.b(b, this);
};
h.P = function(a, b, c) {
  return N.c(b, c, this);
};
h.Q = function() {
  return this.za.Q(null).ab();
};
h.V = function() {
  var a = this.za, a = (a ? a.j & 128 || a.hb || (a.j ? 0 : y(Ya, a)) : y(Ya, a)) ? this.za.U(null) : K(this.za);
  return null != a ? new Je(a, this.$) : J;
};
h.G = function() {
  return this;
};
h.H = function(a, b) {
  return new Je(this.za, b);
};
h.D = function(a, b) {
  return M(b, this);
};
function ne(a) {
  return fb(a);
}
function oe(a) {
  return gb(a);
}
var Ke = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return w(qd(a)) ? Jc.b(function(a, b) {
      return oc.b(w(a) ? a : je, b);
    }, a) : null;
  }
  a.m = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function Le(a) {
  for (var b = je, c = G(new V(null, 2, 5, W, [X, Y], null));;) {
    if (c) {
      var d = H(c), e = R.c(a, d, Me), b = od.b(e, Me) ? rc.c(b, d, e) : b, c = K(c)
    } else {
      return b;
    }
  }
}
function Ne(a, b, c) {
  this.l = a;
  this.Da = b;
  this.o = c;
  this.j = 15077647;
  this.q = 8196;
}
h = Ne.prototype;
h.toString = function() {
  return Nb(this);
};
h.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.C(null, e), g = Q.c(f, 0, null), f = Q.c(f, 1, null);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = G(b)) {
        Cc(b) ? (c = Ib(b), b = Jb(b), g = c, d = P(c), c = g) : (c = H(b), g = Q.c(c, 0, null), f = Q.c(c, 1, null), a.b ? a.b(f, g) : a.call(null, f, g), b = K(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.K = function(a, b) {
  return $a.c(this, b, null);
};
h.L = function(a, b, c) {
  return ab(this.Da, b) ? b : c;
};
h.F = function() {
  return this.l;
};
h.I = function() {
  return Qa(this.Da);
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = ec(this);
};
h.u = function(a, b) {
  return yc(b) && P(this) === P(b) && pd(function(a) {
    return function(b) {
      return R.c(a, b, Fc) === Fc ? !1 : !0;
    };
  }(this), b);
};
h.Ma = function() {
  return new Oe(Cb(this.Da));
};
h.J = function() {
  return nc(Pe, this.l);
};
h.ib = function(a, b) {
  return new Ne(this.l, db(this.Da, b), null);
};
h.G = function() {
  var a = G(this.Da);
  return a ? new Je(a, null) : null;
};
h.H = function(a, b) {
  return new Ne(b, this.Da, this.o);
};
h.D = function(a, b) {
  return new Ne(this.l, rc.c(this.Da, b, null), null);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ma(b)));
};
h.a = function(a) {
  return this.K(null, a);
};
h.b = function(a, b) {
  return this.L(null, a, b);
};
var Pe = new Ne(null, je, 0);
function Oe(a) {
  this.ja = a;
  this.j = 259;
  this.q = 136;
}
h = Oe.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return $a.c(this.ja, c, Fc) === Fc ? null : c;
      case 3:
        return $a.c(this.ja, c, Fc) === Fc ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ma(b)));
};
h.a = function(a) {
  return $a.c(this.ja, a, Fc) === Fc ? null : a;
};
h.b = function(a, b) {
  return $a.c(this.ja, a, Fc) === Fc ? b : a;
};
h.K = function(a, b) {
  return $a.c(this, b, null);
};
h.L = function(a, b, c) {
  return $a.c(this.ja, b, Fc) === Fc ? c : b;
};
h.I = function() {
  return P(this.ja);
};
h.Ba = function(a, b) {
  this.ja = md.c(this.ja, b, null);
  return this;
};
h.Ca = function() {
  return new Ne(null, Eb(this.ja), null);
};
function Qe(a) {
  a = G(a);
  if (null == a) {
    return Pe;
  }
  if (a instanceof bc && 0 === a.n) {
    a = a.d;
    a: {
      for (var b = 0, c = Cb(Pe);;) {
        if (b < a.length) {
          var d = b + 1, c = c.Ba(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.Ca(null);
  }
  if (z) {
    for (d = Cb(Pe);;) {
      if (null != a) {
        b = a.U(null), d = d.Ba(null, a.Q(null)), a = b;
      } else {
        return d.Ca(null);
      }
    }
  } else {
    return null;
  }
}
function Re(a) {
  return function c(a, e) {
    return new Zc(null, function() {
      return function(a, d) {
        for (;;) {
          var e = a, l = Q.c(e, 0, null);
          if (e = G(e)) {
            if (R.c(d, l, Fc) !== Fc) {
              l = I(e), e = d, a = l, d = e;
            } else {
              return M(l, c(I(e), oc.b(d, l)));
            }
          } else {
            return null;
          }
        }
      }.call(null, a, e);
    }, null, null);
  }(a, Pe);
}
function Xc(a) {
  if (a && (a.q & 4096 || a.vb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + C.a(a));
}
var Te = function Se(b, c) {
  return new Zc(null, function() {
    var d = G(c);
    return d ? w(b.a ? b.a(H(d)) : b.call(null, H(d))) ? M(H(d), Se(b, I(d))) : null : null;
  }, null, null);
};
function Ue(a, b, c, d, e) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.o = e;
  this.j = 32375006;
  this.q = 8192;
}
h = Ue.prototype;
h.toString = function() {
  return Nb(this);
};
h.C = function(a, b) {
  if (b < Qa(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.Y = function(a, b, c) {
  return b < Qa(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.F = function() {
  return this.l;
};
h.U = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Ue(this.l, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Ue(this.l, this.start + this.step, this.end, this.step, null) : null;
};
h.I = function() {
  return Ja(vb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
h.B = function() {
  var a = this.o;
  return null != a ? a : this.o = a = dc(this);
};
h.u = function(a, b) {
  return lc(this, b);
};
h.J = function() {
  return nc(J, this.l);
};
h.O = function(a, b) {
  return gc.b(this, b);
};
h.P = function(a, b, c) {
  return gc.c(this, b, c);
};
h.Q = function() {
  return null == vb(this) ? null : this.start;
};
h.V = function() {
  return null != vb(this) ? new Ue(this.l, this.start + this.step, this.end, this.step, null) : J;
};
h.G = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.H = function(a, b) {
  return new Ue(b, this.start, this.end, this.step, this.o);
};
h.D = function(a, b) {
  return M(b, this);
};
var Ve = function() {
  function a(a, b, c) {
    return new Ue(null, a, b, c, null);
  }
  function b(a, b) {
    return e.c(a, b, 1);
  }
  function c(a) {
    return e.c(0, a, 1);
  }
  function d() {
    return e.c(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, g, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.h = d;
  e.a = c;
  e.b = b;
  e.c = a;
  return e;
}();
function We(a, b) {
  return new V(null, 2, 5, W, [Te(a, b), yd(a, b)], null);
}
var Xe = function() {
  function a(a, b, c) {
    return function() {
      var d = null, e = function() {
        function d(a, b, c, f) {
          var g = null;
          3 < arguments.length && (g = L(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, g);
        }
        function e(d, l, m, n) {
          return new V(null, 3, 5, W, [S.p(a, d, l, m, n), S.p(b, d, l, m, n), S.p(c, d, l, m, n)], null);
        }
        d.m = 3;
        d.g = function(a) {
          var b = H(a);
          a = K(a);
          var c = H(a);
          a = K(a);
          var d = H(a);
          a = I(a);
          return e(b, c, d, a);
        };
        d.f = e;
        return d;
      }(), d = function(d, l, t, s) {
        switch(arguments.length) {
          case 0:
            return new V(null, 3, 5, W, [a.h ? a.h() : a.call(null), b.h ? b.h() : b.call(null), c.h ? c.h() : c.call(null)], null);
          case 1:
            var q = d;
            return new V(null, 3, 5, W, [a.a ? a.a(q) : a.call(null, q), b.a ? b.a(q) : b.call(null, q), c.a ? c.a(q) : c.call(null, q)], null);
          case 2:
            var q = d, v = l;
            return new V(null, 3, 5, W, [a.b ? a.b(q, v) : a.call(null, q, v), b.b ? b.b(q, v) : b.call(null, q, v), c.b ? c.b(q, v) : c.call(null, q, v)], null);
          case 3:
            var q = d, v = l, A = t;
            return new V(null, 3, 5, W, [a.c ? a.c(q, v, A) : a.call(null, q, v, A), b.c ? b.c(q, v, A) : b.call(null, q, v, A), c.c ? c.c(q, v, A) : c.call(null, q, v, A)], null);
          default:
            return e.f(d, l, t, L(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.m = 3;
      d.g = e.g;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = L(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, e, k, l) {
          return new V(null, 2, 5, W, [S.p(a, c, e, k, l), S.p(b, c, e, k, l)], null);
        }
        c.m = 3;
        c.g = function(a) {
          var b = H(a);
          a = K(a);
          var c = H(a);
          a = K(a);
          var e = H(a);
          a = I(a);
          return d(b, c, e, a);
        };
        c.f = d;
        return c;
      }(), c = function(c, e, k, t) {
        switch(arguments.length) {
          case 0:
            return new V(null, 2, 5, W, [a.h ? a.h() : a.call(null), b.h ? b.h() : b.call(null)], null);
          case 1:
            var s = c;
            return new V(null, 2, 5, W, [a.a ? a.a(s) : a.call(null, s), b.a ? b.a(s) : b.call(null, s)], null);
          case 2:
            var s = c, q = e;
            return new V(null, 2, 5, W, [a.b ? a.b(s, q) : a.call(null, s, q), b.b ? b.b(s, q) : b.call(null, s, q)], null);
          case 3:
            var s = c, q = e, v = k;
            return new V(null, 2, 5, W, [a.c ? a.c(s, q, v) : a.call(null, s, q, v), b.c ? b.c(s, q, v) : b.call(null, s, q, v)], null);
          default:
            return d.f(c, e, k, L(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.m = 3;
      c.g = d.g;
      return c;
    }();
  }
  function c(a) {
    return function() {
      var b = null, c = function() {
        function b(a, d, e, f) {
          var g = null;
          3 < arguments.length && (g = L(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, d, e, g);
        }
        function c(b, d, e, g) {
          return new V(null, 1, 5, W, [S.p(a, b, d, e, g)], null);
        }
        b.m = 3;
        b.g = function(a) {
          var b = H(a);
          a = K(a);
          var d = H(a);
          a = K(a);
          var e = H(a);
          a = I(a);
          return c(b, d, e, a);
        };
        b.f = c;
        return b;
      }(), b = function(b, d, e, g) {
        switch(arguments.length) {
          case 0:
            return new V(null, 1, 5, W, [a.h ? a.h() : a.call(null)], null);
          case 1:
            var t = b;
            return new V(null, 1, 5, W, [a.a ? a.a(t) : a.call(null, t)], null);
          case 2:
            var t = b, s = d;
            return new V(null, 1, 5, W, [a.b ? a.b(t, s) : a.call(null, t, s)], null);
          case 3:
            var t = b, s = d, q = e;
            return new V(null, 1, 5, W, [a.c ? a.c(t, s, q) : a.call(null, t, s, q)], null);
          default:
            return c.f(b, d, e, L(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      b.m = 3;
      b.g = c.g;
      return b;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f) {
      var p = null;
      3 < arguments.length && (p = L(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, p);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(c, d, e) {
            return Jc.c(function() {
              return function(a, b) {
                return oc.b(a, b.c ? b.c(c, d, e) : b.call(null, c, d, e));
              };
            }(a), Ud, a);
          }
          function c(b, d) {
            return Jc.c(function() {
              return function(a, c) {
                return oc.b(a, c.b ? c.b(b, d) : c.call(null, b, d));
              };
            }(a), Ud, a);
          }
          function d(b) {
            return Jc.c(function() {
              return function(a, c) {
                return oc.b(a, c.a ? c.a(b) : c.call(null, b));
              };
            }(a), Ud, a);
          }
          function e() {
            return Jc.c(function() {
              return function(a, b) {
                return oc.b(a, b.h ? b.h() : b.call(null));
              };
            }(a), Ud, a);
          }
          var f = null, g = function() {
            function b(a, d, e, f) {
              var g = null;
              3 < arguments.length && (g = L(Array.prototype.slice.call(arguments, 3), 0));
              return c.call(this, a, d, e, g);
            }
            function c(b, d, e, f) {
              return Jc.c(function() {
                return function(a, c) {
                  return oc.b(a, S.p(c, b, d, e, f));
                };
              }(a), Ud, a);
            }
            b.m = 3;
            b.g = function(a) {
              var b = H(a);
              a = K(a);
              var d = H(a);
              a = K(a);
              var e = H(a);
              a = I(a);
              return c(b, d, e, a);
            };
            b.f = c;
            return b;
          }(), f = function(a, f, k, l) {
            switch(arguments.length) {
              case 0:
                return e.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, f);
              case 3:
                return b.call(this, a, f, k);
              default:
                return g.f(a, f, k, L(arguments, 3));
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          f.m = 3;
          f.g = g.g;
          return f;
        }();
      }(ld.k(a, c, d, e));
    }
    a.m = 3;
    a.g = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = I(a);
      return b(c, d, e, a);
    };
    a.f = b;
    return a;
  }(), d = function(d, g, k, l) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, k);
      default:
        return e.f(d, g, k, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 3;
  d.g = e.g;
  d.a = c;
  d.b = b;
  d.c = a;
  d.f = e.f;
  return d;
}(), Ye = function() {
  function a(a, b) {
    for (;;) {
      if (G(b) && 0 < a) {
        var c = a - 1, g = K(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (G(a)) {
        a = K(a);
      } else {
        return null;
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Ze = function() {
  function a(a, b) {
    Ye.b(a, b);
    return b;
  }
  function b(a) {
    Ye.a(a);
    return a;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function $e(a, b, c, d, e, f, g) {
  var k = Ba;
  try {
    Ba = null == Ba ? null : Ba - 1;
    if (null != Ba && 0 > Ba) {
      return E(a, "#");
    }
    E(a, c);
    G(g) && (b.c ? b.c(H(g), a, f) : b.call(null, H(g), a, f));
    for (var l = K(g), m = Ha.a(f) - 1;;) {
      if (!l || null != m && 0 === m) {
        G(l) && 0 === m && (E(a, d), E(a, "..."));
        break;
      } else {
        E(a, d);
        b.c ? b.c(H(l), a, f) : b.call(null, H(l), a, f);
        var n = K(l);
        c = m - 1;
        l = n;
        m = c;
      }
    }
    return E(a, e);
  } finally {
    Ba = k;
  }
}
var af = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = G(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.C(null, k);
        E(a, l);
        k += 1;
      } else {
        if (e = G(e)) {
          f = e, Cc(f) ? (e = Ib(f), g = Jb(f), f = e, l = P(e), e = g, g = l) : (l = H(f), E(a, l), e = K(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.m = 1;
  a.g = function(a) {
    var d = H(a);
    a = I(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}(), bf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function cf(a) {
  return'"' + C.a(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return bf[a];
  })) + '"';
}
var ff = function df(b, c, d) {
  if (null == b) {
    return E(c, "nil");
  }
  if (void 0 === b) {
    return E(c, "#\x3cundefined\x3e");
  }
  if (z) {
    w(function() {
      var c = R.b(d, Fa);
      return w(c) ? (c = b ? b.j & 131072 || b.ub ? !0 : b.j ? !1 : y(mb, b) : y(mb, b)) ? vc(b) : c : c;
    }()) && (E(c, "^"), df(vc(b), c, d), E(c, " "));
    if (null == b) {
      return E(c, "nil");
    }
    if (b.Eb) {
      return b.Wb(b, c, d);
    }
    if (b && (b.j & 2147483648 || b.M)) {
      return b.v(null, c, d);
    }
    if (Ka(b) === Boolean || "number" === typeof b) {
      return E(c, "" + C.a(b));
    }
    if (null != b && b.constructor === Object) {
      return E(c, "#js "), ef.k ? ef.k(ud.b(function(c) {
        return new V(null, 2, 5, W, [Yc.a(c), b[c]], null);
      }, Dc(b)), df, c, d) : ef.call(null, ud.b(function(c) {
        return new V(null, 2, 5, W, [Yc.a(c), b[c]], null);
      }, Dc(b)), df, c, d);
    }
    if (b instanceof Array) {
      return $e(c, df, "#js [", " ", "]", d, b);
    }
    if (da(b)) {
      return w(Ea.a(d)) ? E(c, cf(b)) : E(c, b);
    }
    if (tc(b)) {
      return af.f(c, L(["#\x3c", "" + C.a(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + C.a(b);;) {
          if (P(d) < c) {
            d = "0" + C.a(d);
          } else {
            return d;
          }
        }
      };
      return af.f(c, L(['#inst "', "" + C.a(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? af.f(c, L(['#"', b.source, '"'], 0)) : (b ? b.j & 2147483648 || b.M || (b.j ? 0 : y(zb, b)) : y(zb, b)) ? Ab(b, c, d) : z ? af.f(c, L(["#\x3c", "" + C.a(b), "\x3e"], 0)) : null;
  }
  return null;
};
function gf(a, b) {
  var c = new sa;
  a: {
    var d = new Mb(c);
    ff(H(a), d, b);
    for (var e = G(K(a)), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.C(null, k);
        E(d, " ");
        ff(l, d, b);
        k += 1;
      } else {
        if (e = G(e)) {
          f = e, Cc(f) ? (e = Ib(f), g = Jb(f), f = e, l = P(e), e = g, g = l) : (l = H(f), E(d, " "), ff(l, d, b), e = K(f), f = null, g = 0), k = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
function hf(a, b) {
  return null == a || Ja(G(a)) ? "" : "" + C.a(gf(a, b));
}
var jf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return hf(a, Ca());
  }
  a.m = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.f = b;
  return a;
}(), kf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = rc.c(Ca(), Ea, !1);
    a = hf(a, b);
    Aa.a ? Aa.a(a) : Aa.call(null);
    w(!0) ? (a = Ca(), Aa.a ? Aa.a("\n") : Aa.call(null), a = (R.b(a, Da), null)) : a = null;
    return a;
  }
  a.m = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function ef(a, b, c, d) {
  return $e(c, function(a, c, d) {
    b.c ? b.c(fb(a), c, d) : b.call(null, fb(a), c, d);
    E(c, " ");
    return b.c ? b.c(gb(a), c, d) : b.call(null, gb(a), c, d);
  }, "{", ", ", "}", d, G(a));
}
bc.prototype.M = !0;
bc.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Zc.prototype.M = !0;
Zc.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Ce.prototype.M = !0;
Ce.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
he.prototype.M = !0;
he.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Xd.prototype.M = !0;
Xd.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Wc.prototype.M = !0;
Wc.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
kc.prototype.M = !0;
kc.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Ee.prototype.M = !0;
Ee.prototype.v = function(a, b, c) {
  return ef(this, ff, b, c);
};
De.prototype.M = !0;
De.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Zd.prototype.M = !0;
Zd.prototype.v = function(a, b, c) {
  return $e(b, ff, "[", " ", "]", c, this);
};
Ne.prototype.M = !0;
Ne.prototype.v = function(a, b, c) {
  return $e(b, ff, "#{", " ", "}", c, this);
};
ed.prototype.M = !0;
ed.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
V.prototype.M = !0;
V.prototype.v = function(a, b, c) {
  return $e(b, ff, "[", " ", "]", c, this);
};
Tc.prototype.M = !0;
Tc.prototype.v = function(a, b) {
  return E(b, "()");
};
u.prototype.M = !0;
u.prototype.v = function(a, b, c) {
  return ef(this, ff, b, c);
};
Ue.prototype.M = !0;
Ue.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Je.prototype.M = !0;
Je.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
Sc.prototype.M = !0;
Sc.prototype.v = function(a, b, c) {
  return $e(b, ff, "(", " ", ")", c, this);
};
V.prototype.Sa = !0;
V.prototype.Ta = function(a, b) {
  return Ic.b(this, b);
};
Zd.prototype.Sa = !0;
Zd.prototype.Ta = function(a, b) {
  return Ic.b(this, b);
};
U.prototype.Sa = !0;
U.prototype.Ta = function(a, b) {
  return Yb(this, b);
};
ac.prototype.Sa = !0;
ac.prototype.Ta = function(a, b) {
  return Yb(this, b);
};
function lf(a, b) {
  if (a ? a.xb : a) {
    return a.xb(a, b);
  }
  var c;
  c = lf[r(null == a ? null : a)];
  if (!c && (c = lf._, !c)) {
    throw B("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var mf = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Bb : a) {
      return a.Bb(a, b, c, d, e);
    }
    var n;
    n = mf[r(null == a ? null : a)];
    if (!n && (n = mf._, !n)) {
      throw B("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Ab : a) {
      return a.Ab(a, b, c, d);
    }
    var e;
    e = mf[r(null == a ? null : a)];
    if (!e && (e = mf._, !e)) {
      throw B("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.zb : a) {
      return a.zb(a, b, c);
    }
    var d;
    d = mf[r(null == a ? null : a)];
    if (!d && (d = mf._, !d)) {
      throw B("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.yb : a) {
      return a.yb(a, b);
    }
    var c;
    c = mf[r(null == a ? null : a)];
    if (!c && (c = mf._, !c)) {
      throw B("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, k);
      case 4:
        return b.call(this, e, g, k, l);
      case 5:
        return a.call(this, e, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.b = d;
  e.c = c;
  e.k = b;
  e.p = a;
  return e;
}();
function nf(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.Jb = c;
  this.mb = d;
  this.j = 2153938944;
  this.q = 16386;
}
h = nf.prototype;
h.B = function() {
  return this[fa] || (this[fa] = ++ga);
};
h.kb = function(a, b, c) {
  a = G(this.mb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.C(null, f), k = Q.c(g, 0, null), g = Q.c(g, 1, null);
      g.k ? g.k(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = G(a)) {
        Cc(a) ? (d = Ib(a), a = Jb(a), k = d, e = P(d), d = k) : (d = H(a), k = Q.c(d, 0, null), g = Q.c(d, 1, null), g.k ? g.k(k, this, b, c) : g.call(null, k, this, b, c), a = K(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.v = function(a, b, c) {
  E(b, "#\x3cAtom: ");
  ff(this.state, b, c);
  return E(b, "\x3e");
};
h.F = function() {
  return this.l;
};
h.pb = function() {
  return this.state;
};
h.u = function(a, b) {
  return this === b;
};
var pf = function() {
  function a(a) {
    return new nf(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Gc(c) ? S.b(He, c) : c, e = R.b(d, of), d = R.b(d, Fa);
      return new nf(a, d, e, null);
    }
    a.m = 1;
    a.g = function(a) {
      var c = H(a);
      a = I(a);
      return b(c, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, L(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.g = c.g;
  b.a = a;
  b.f = c.f;
  return b;
}();
function qf(a, b) {
  if (a instanceof nf) {
    var c = a.Jb;
    if (null != c && !w(c.a ? c.a(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + C.a(jf.f(L([Vc(new ac(null, "validate", "validate", 1439230700, null), new ac(null, "new-value", "new-value", -1567397401, null))], 0))));
    }
    c = a.state;
    a.state = b;
    null != a.mb && Bb(a, c, b);
    return b;
  }
  return lf(a, b);
}
var rf = function() {
  function a(a, b, c, d) {
    return a instanceof nf ? qf(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d)) : mf.k(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof nf ? qf(a, b.b ? b.b(a.state, c) : b.call(null, a.state, c)) : mf.c(a, b, c);
  }
  function c(a, b) {
    return a instanceof nf ? qf(a, b.a ? b.a(a.state) : b.call(null, a.state)) : mf.b(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var t = null;
      4 < arguments.length && (t = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, t);
    }
    function b(a, c, d, e, f) {
      return a instanceof nf ? qf(a, S.p(c, a.state, d, e, f)) : mf.p(a, c, d, e, f);
    }
    a.m = 4;
    a.g = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var f = H(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.f = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.f(d, g, k, l, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.g = e.g;
  d.b = c;
  d.c = b;
  d.k = a;
  d.f = e.f;
  return d;
}(), sf = {};
function tf(a, b) {
  if (a ? a.qb : a) {
    return a.qb(a, b);
  }
  var c;
  c = tf[r(null == a ? null : a)];
  if (!c && (c = tf._, !c)) {
    throw B("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var vf = function() {
  function a(a) {
    return b.f(a, L([new u(null, 1, [uf, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = L(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? w(w(null) ? null : a.Nb) || (a.Db ? 0 : y(sf, a)) : y(sf, a)) {
        return tf(a, S.b(Ie, c));
      }
      if (G(c)) {
        var d = Gc(c) ? S.b(He, c) : c, e = R.b(d, uf);
        return function(a, b, c, d) {
          return function q(e) {
            return Gc(e) ? Ze.a(ud.b(q, e)) : xc(e) ? Dd(null == e ? null : Ra(e), ud.b(q, e)) : e instanceof Array ? Wd(ud.b(q, e)) : Ka(e) === Object ? Dd(je, function() {
              return function(a, b, c, d) {
                return function xa(f) {
                  return new Zc(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = G(f);
                        if (a) {
                          if (Cc(a)) {
                            var b = Ib(a), c = P(b), g = cd(c);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = D.b(b, k), l = new V(null, 2, 5, W, [d.a ? d.a(l) : d.call(null, l), q(e[l])], null);
                                  g.add(l);
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? fd(g.S(), xa(Jb(a))) : fd(g.S(), null);
                          }
                          g = H(a);
                          return M(new V(null, 2, 5, W, [d.a ? d.a(g) : d.call(null, g), q(e[g])], null), xa(I(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(Dc(e));
            }()) : z ? e : null;
          };
        }(c, d, e, w(e) ? Yc : C)(a);
      }
      return null;
    }
    a.m = 1;
    a.g = function(a) {
      var c = H(a);
      a = I(a);
      return b(c, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, L(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.g = c.g;
  b.a = a;
  b.f = c.f;
  return b;
}(), Oc = function() {
  function a(a) {
    return(Math.random.h ? Math.random.h() : Math.random.call(null)) * a;
  }
  function b() {
    return c.a(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.a = a;
  return c;
}(), Pc = function(a) {
  return Math.floor.a ? Math.floor.a((Math.random.h ? Math.random.h() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.h ? Math.random.h() : Math.random.call(null)) * a);
};
var wf, xf, yf, zf;
function Af() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
zf = yf = xf = wf = !1;
var Bf;
if (Bf = Af()) {
  var Cf = aa.navigator;
  wf = 0 == Bf.lastIndexOf("Opera", 0);
  xf = !wf && (-1 != Bf.indexOf("MSIE") || -1 != Bf.indexOf("Trident"));
  yf = !wf && -1 != Bf.indexOf("WebKit");
  zf = !wf && !yf && !xf && "Gecko" == Cf.product;
}
var Df = xf, Ef = zf, Ff = yf;
function Gf() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Hf;
a: {
  var If = "", Jf;
  if (wf && aa.opera) {
    var Kf = aa.opera.version, If = "function" == typeof Kf ? Kf() : Kf
  } else {
    if (Ef ? Jf = /rv\:([^\);]+)(\)|;)/ : Df ? Jf = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Ff && (Jf = /WebKit\/(\S+)/), Jf) {
      var Lf = Jf.exec(Af()), If = Lf ? Lf[1] : ""
    }
  }
  if (Df) {
    var Mf = Gf();
    if (Mf > parseFloat(If)) {
      Hf = String(Mf);
      break a;
    }
  }
  Hf = If;
}
var Nf = {};
function Of(a) {
  if (!Nf[a]) {
    for (var b = 0, c = String(Hf).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(g) || ["", "", ""], p = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = oa(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || oa(0 == n[2].length, 0 == p[2].length) || oa(n[2], p[2]);
      } while (0 == b);
    }
    Nf[a] = 0 <= b;
  }
}
var Pf = aa.document, Qf = Pf && Df ? Gf() || ("CSS1Compat" == Pf.compatMode ? parseInt(Hf, 10) : 5) : void 0;
var Rf = !Df || Df && 9 <= Qf;
!Ef && !Df || Df && Df && 9 <= Qf || Ef && Of("1.9.1");
Df && Of("9");
function Sf(a, b) {
  var c;
  c = a.className;
  c = da(c) && c.match(/\S+/g) || [];
  for (var d = za(arguments, 1), e = c.length + d.length, f = c, g = 0;g < d.length;g++) {
    0 <= va(f, d[g]) || f.push(d[g]);
  }
  a.className = c.join(" ");
  return c.length == e;
}
;function Tf(a, b) {
  pa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Uf ? a.setAttribute(Uf[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Uf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Vf(a, b, c) {
  var d = arguments, e = document, f = d[0], g = d[1];
  if (!Rf && g && (g.name || g.type)) {
    f = ["\x3c", f];
    g.name && f.push(' name\x3d"', ha(g.name), '"');
    if (g.type) {
      f.push(' type\x3d"', ha(g.type), '"');
      var k = {};
      ra(k, g);
      delete k.type;
      g = k;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = e.createElement(f);
  g && (da(g) ? f.className = g : "array" == r(g) ? Sf.apply(null, [f].concat(g)) : Tf(f, g));
  2 < d.length && Wf(e, f, d);
  return f;
}
function Wf(a, b, c) {
  function d(c) {
    c && b.appendChild(da(c) ? a.createTextNode(c) : c);
  }
  for (var e = 2;e < c.length;e++) {
    var f = c[e];
    !ca(f) || ea(f) && 0 < f.nodeType ? d(f) : wa(Xf(f) ? ya(f) : f, d);
  }
}
function Xf(a) {
  if (a && "number" == typeof a.length) {
    if (ea(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if ("function" == r(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
;var Y = new U(null, "y", "y"), Yf = new U(null, "key-code", "key-code"), Zf = new U(null, "shift", "shift"), $f = new U(null, "features", "features"), ag = new U(null, "baseline", "baseline"), bg = new U(null, "disable-stroke-perspective", "disable-stroke-perspective"), cg = new U(null, "down", "down"), dg = new U(null, "enable-retina-pixels", "enable-retina-pixels"), eg = new U(null, "disable-depth-mask", "disable-depth-mask"), fg = new U(null, "p-y", "p-y"), gg = new U(null, "r", "r"), hg = new U(null, 
"burn", "burn"), ig = new U(null, "key-typed", "key-typed"), jg = new U(null, "mouse-clicked", "mouse-clicked"), kg = new U(null, "mouse-released", "mouse-released"), lg = new U(null, "fn", "fn"), mg = new U(null, "f8", "f8"), Fa = new U(null, "meta", "meta"), ng = new U(null, "screen", "screen"), og = new U(null, "enable-depth-test", "enable-depth-test"), pg = new U(null, "mouse-exited", "mouse-exited"), qg = new U(null, "enable-depth-sort", "enable-depth-sort"), rg = new U(null, "f1", "f1"), sg = 
new U(null, "color", "color"), Ga = new U(null, "dup", "dup"), tg = new U(null, "java2d", "java2d"), ug = new U(null, "running?", "running?"), vg = new U(null, "disable-texture-mipmaps", "disable-texture-mipmaps"), wg = new U(null, "key", "key"), xg = new U(null, "darkest", "darkest"), yg = new U(null, "f10", "f10"), zg = new U(null, "dodge", "dodge"), Ag = new U(null, "bottom", "bottom"), z = new U(null, "else", "else"), Bg = new U(null, "on-close", "on-close"), Cg = new U(null, "disable-stroke-pure", 
"disable-stroke-pure"), Dg = new U(null, "replace", "replace"), Eg = new U(null, "alt", "alt"), Fg = new U(null, "button", "button"), Gg = new U(null, "top", "top"), Hg = new U(null, "mouse-wheel", "mouse-wheel"), of = new U(null, "validator", "validator"), Ig = new U(null, "disable-depth-test", "disable-depth-test"), $b = new U(null, "default", "default"), Jg = new U(null, "colourful?", "colourful?"), Kg = new U(null, "n", "n"), Lg = new U(null, "decor", "decor"), Mg = new U(null, "enable-stroke-perspective", 
"enable-stroke-perspective"), Ng = new U(null, "opengl", "opengl"), Og = new U(null, "mouse-moved", "mouse-moved"), Pg = new U(null, "safe-draw-fn", "safe-draw-fn"), Qg = new U(null, "enable-native-fonts", "enable-native-fonts"), Rg = new U(null, "f5", "f5"), Sg = new U(null, "command", "command"), Tg = new U(null, "update", "update"), Ug = new U(null, "points", "points"), Da = new U(null, "flush-on-newline", "flush-on-newline"), Vg = new U(null, "dragging", "dragging"), Wg = new U(null, "up", "up"), 
Xg = new U(null, "renderer", "renderer"), Yg = new U(null, "size", "size"), Zg = new U(null, "leaders", "leaders"), $g = new U(null, "center", "center"), ah = new U(null, "setup", "setup"), bh = new U(null, "mouse-pressed", "mouse-pressed"), ch = new U(null, "middleware", "middleware"), dh = new U(null, "disable-optimized-stroke", "disable-optimized-stroke"), eh = new U(null, "focus-gained", "focus-gained"), Ea = new U(null, "readably", "readably"), fh = new U(null, "f11", "f11"), gh = new U(null, 
"host", "host"), hh = new U(null, "overlay", "overlay"), ih = new U(null, "mouse-entered", "mouse-entered"), jh = new U(null, "enable-opengl-errors", "enable-opengl-errors"), kh = new U(null, "enable-stroke-pure", "enable-stroke-pure"), lh = new U(null, "no-safe-draw", "no-safe-draw"), mh = new U(null, "tail-size", "tail-size"), nh = new U(null, "focus-lost", "focus-lost"), oh = new U(null, "f3", "f3"), ph = new U(null, "enable-depth-mask", "enable-depth-mask"), qh = new U(null, "key-pressed", "key-pressed"), 
rh = new U(null, "key-released", "key-released"), Ha = new U(null, "print-length", "print-length"), sh = new U(null, "tail", "tail"), th = new U(null, "f2", "f2"), uh = new U(null, "control", "control"), vh = new U(null, "difference", "difference"), wh = new U(null, "enable-optimized-stroke", "enable-optimized-stroke"), xh = new U(null, "toroidal-board?", "toroidal-board?"), yh = new U(null, "p-x", "p-x"), zh = new U(null, "p2d", "p2d"), Ah = new U(null, "f12", "f12"), Bh = new U(null, "exclusion", 
"exclusion"), Ch = new U(null, "disable-opengl-errors", "disable-opengl-errors"), Dh = new U(null, "unknown-key", "unknown-key"), Eh = new U(null, "right", "right"), Fh = new U(null, "host-id", "host-id"), Gh = new U(null, "hard-light", "hard-light"), Hh = new U(null, "disable-retina-pixels", "disable-retina-pixels"), Ih = new U(null, "multiply", "multiply"), Jh = new U(null, "lightest", "lightest"), Kh = new U(null, "f7", "f7"), X = new U(null, "x", "x"), Lh = new U(null, "blend", "blend"), Mh = 
new U(null, "disable-depth-sort", "disable-depth-sort"), Nh = new U(null, "raw-key", "raw-key"), Oh = new U(null, "target", "target"), Ph = new U(null, "constant-velocity?", "constant-velocity?"), Qh = new U(null, "f9", "f9"), Rh = new U(null, "draw", "draw"), Sh = new U(null, "add", "add"), Th = new U(null, "soft-light", "soft-light"), Uh = new U(null, "subtract", "subtract"), Vh = new U(null, "f6", "f6"), uf = new U(null, "keywordize-keys", "keywordize-keys"), Wh = new U(null, "f4", "f4"), Xh = 
new U(null, "velocity", "velocity"), Yh = new U(null, "p3d", "p3d"), Zh = new U(null, "mouse-dragged", "mouse-dragged"), $h = new U(null, "left", "left"), Me = new U("cljs.core", "not-found", "cljs.core/not-found"), ai = new U(null, "enable-texture-mipmaps", "enable-texture-mipmaps"), bi = new U(null, "disable-native-fonts", "disable-native-fonts");
var ci = function() {
  function a(a, b, c) {
    if (a ? a.Gb : a) {
      return a.Gb(a, b, c);
    }
    var d;
    d = ci[r(null == a ? null : a)];
    if (!d && (d = ci._, !d)) {
      throw B("DOMBuilder.-element", a);
    }
    return d.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Fb : a) {
      return a.Fb(a, b);
    }
    var c;
    c = ci[r(null == a ? null : a)];
    if (!c && (c = ci._, !c)) {
      throw B("DOMBuilder.-element", a);
    }
    return c.call(null, a, b);
  }
  function c(a) {
    if (a ? a.cb : a) {
      return a.cb(a);
    }
    var b;
    b = ci[r(null == a ? null : a)];
    if (!b && (b = ci._, !b)) {
      throw B("DOMBuilder.-element", a);
    }
    return b.call(null, a);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.c = a;
  return d;
}(), di = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return console.log(S.b(jf, a));
  }
  a.m = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
Element.prototype.cb = function() {
  di.f(L(["js/Element (-element ", this, ")"], 0));
  return this;
};
V.prototype.cb = function() {
  di.f(L(["PersistentVector (-element ", this, ")"], 0));
  var a = H(this), b = H(K(this)), c = xd(this);
  return Ac(b) ? ci.c(a, b, c) : ci.c(a, null, I(this));
};
ci.string = function() {
  function a(a, b, e) {
    di.f(L(["string (-element ", a, " ", b, " ", e, ")"], 0));
    b = Ac(b) && G(b) ? Jc.c(function(a, b) {
      var c = Q.c(b, 0, null), d = Q.c(b, 1, null), e = null == a ? {} : a;
      di.f(L(["o \x3d ", e], 0));
      di.f(L(["k \x3d ", c], 0));
      di.f(L(["v \x3d ", d], 0));
      return c instanceof U || "string" === typeof c ? (e[Xc(c)] = d, e) : null;
    }, {}, b) : null;
    console.log(b);
    return G(e) ? S.k(Vf, Xc(a), b, ud.b(ci, e)) : Vf(Xc(a), b);
  }
  var b = null;
  return b = function(b, d, e) {
    switch(arguments.length) {
      case 1:
        di.f(L(["string (-element ", b, ")"], 0));
        var f;
        b instanceof U ? (f = Xc(b), f = document.createElement(f)) : z ? (f = Xc(b), f = document.createTextNode(String(f))) : f = null;
        return f;
      case 2:
        return di.f(L(["string (-element ", b, " ", d, ")"], 0)), f = H(d), Ac(f) ? ci.c(b, f, I(d)) : ci.c(b, null, d);
      case 3:
        return a.call(this, b, d, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
var ei = new u(null, 3, [Lg, new V(null, 2, 5, W, ["2.0", "Try :features [:present] for similar effect"], null), Oh, new V(null, 2, 5, W, ["2.0", "Use :features [:keep-on-top] instead."], null), Pg, new V(null, 2, 5, W, ["2.0", "Use :features [:no-safe-fns] instead."], null)], null);
function fi(a) {
  a = Qe(a);
  w(a.a ? a.a(lh) : a.call(null, lh)) && kf.f(L(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.", "Use :feature [:no-safe-fns] now."], 0));
  return wc.b(a, lh);
}
function gi(a) {
  var b = Ed.c(a, new V(null, 1, 5, W, [$f], null), fi);
  return Dd(je, Cd(Ia, function() {
    return function(a) {
      return function e(b) {
        return new Zc(null, function() {
          return function() {
            for (;;) {
              var a = G(b);
              if (a) {
                if (Cc(a)) {
                  var c = Ib(a), l = P(c), m = cd(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = D.b(c, a), e = Q.c(b, 0, null), f = Q.c(b, 1, null), b = m;
                        var g = ei.a ? ei.a(e) : ei.call(null, e);
                        w(g) ? (f = Q.c(g, 0, null), g = Q.c(g, 1, null), kf.f(L([e, "option was removed in Quil", f, ".", g], 0)), e = null) : e = new V(null, 2, 5, W, [e, f], null);
                        b.add(e);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? fd(m.S(), e(Jb(a))) : fd(m.S(), null);
                }
                var n = H(a), p = Q.c(n, 0, null), t = Q.c(n, 1, null);
                return M(function() {
                  var a = ei.a ? ei.a(p) : ei.call(null, p);
                  if (w(a)) {
                    var b = Q.c(a, 0, null), a = Q.c(a, 1, null);
                    kf.f(L([p, "option was removed in Quil", b, ".", a], 0));
                    return null;
                  }
                  return new V(null, 2, 5, W, [p, t], null);
                }(), e(I(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()));
}
;function hi() {
  return null;
}
;var Z = null, ii = new u(null, 4, [tg, "JAVA2D", zh, "P2D", Yh, "P3D", Ng, "OPENGL"], null), ji = function() {
  function a(a, b, c) {
    return Z.size(a | 0, b | 0, Z[R.b(ii, c)]);
  }
  function b(a, b) {
    return Z.size(a | 0, b | 0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function ki(a) {
  var b = Ke.f(L([new u(null, 1, [Yg, new V(null, 2, 5, W, [500, 300], null)], null), function(b) {
    return b.a ? b.a(a) : b.call(null, a);
  }.call(null, S.b(td, M(gi, ch.b(a, Ud))))], 0)), c = function() {
    var a = Rh.a(b);
    return w(a) ? a : hi;
  }(), d = function() {
    var a = ah.a(b);
    return w(a) ? a : hi;
  }(), e = function() {
    var a = Yg.a(b);
    return w(a) ? a : new V(null, 2, 5, W, [200, 200], null);
  }(), f = Xg.a(b), g = function() {
    var a = qh.a(b);
    return w(a) ? a : hi;
  }(), k = function() {
    var a = rh.a(b);
    return w(a) ? a : hi;
  }(), l = function() {
    var a = ig.a(b);
    return w(a) ? a : hi;
  }(), m = function() {
    var a = jg.a(b);
    return w(a) ? a : hi;
  }(), n = function() {
    var a = Zh.a(b);
    return w(a) ? a : hi;
  }(), p = function() {
    var a = Og.a(b);
    return w(a) ? a : hi;
  }(), t = function() {
    var a = bh.a(b);
    return w(a) ? a : hi;
  }(), s = function() {
    var a = kg.a(b);
    return w(a) ? a : hi;
  }(), q = function() {
    var a = pg.a(b);
    return w(a) ? a : hi;
  }(), v = function() {
    var a = ih.a(b);
    return w(a) ? a : hi;
  }(), A = function() {
    var a = Hg.a(b);
    return w(a) ? a : function() {
      return function() {
        return null;
      };
    }(a, b, c, d, e, f, g, k, l, m, n, p, t, s, q, v);
  }();
  return function(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v) {
    return function(A) {
      A.setup = function(a, b, c, d, e) {
        return function() {
          var a = Z;
          try {
            return Z = A, S.b(ji, kd.b(d, w(e) ? new V(null, 1, 5, W, [e], null) : Ud)), c.h ? c.h() : c.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.draw = function(a, b) {
        return function() {
          var a = Z;
          try {
            return Z = A, b.h ? b.h() : b.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.keyPressed = function(a, b, c, d, e, f) {
        return function() {
          var a = Z;
          try {
            return Z = A, f.h ? f.h() : f.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.keyReleased = function(a, b, c, d, e, f, g) {
        return function() {
          var a = Z;
          try {
            return Z = A, g.h ? g.h() : g.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.keyTyped = function(a, b, c, d, e, f, g, k) {
        return function() {
          var a = Z;
          try {
            return Z = A, k.h ? k.h() : k.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.mouseClicked = function(a, b, c, d, e, f, g, k, l) {
        return function() {
          var a = Z;
          try {
            return Z = A, l.h ? l.h() : l.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.mouseDragged = function(a, b, c, d, e, f, g, k, l, m) {
        return function() {
          var a = Z;
          try {
            return Z = A, m.h ? m.h() : m.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.mouseMoved = function(a, b, c, d, e, f, g, k, l, m, n) {
        return function() {
          var a = Z;
          try {
            return Z = A, n.h ? n.h() : n.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.mousePressed = function(a, b, c, d, e, f, g, k, l, m, n, p) {
        return function() {
          var a = Z;
          try {
            return Z = A, p.h ? p.h() : p.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.mouseReleased = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
        return function() {
          var a = Z;
          try {
            return Z = A, q.h ? q.h() : q.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.mouseOut = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s) {
        return function() {
          var a = Z;
          try {
            return Z = A, s.h ? s.h() : s.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.mouseOver = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t) {
        return function() {
          var a = Z;
          try {
            return Z = A, t.h ? t.h() : t.call(null);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.mouseScrolled = function(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v) {
        return function() {
          var a = Z;
          try {
            return Z = A, v.a ? v.a(-1 * A.mouseScroll) : v.call(null, -1 * A.mouseScroll);
          } finally {
            Z = a;
          }
        };
      }(a, b, c, d, e, f, g, k, l, m, n, p, q, s, t, v);
      A.Ja = pf.a(null);
      return A.Ib = pf.a(60);
    };
  }(b, c, d, e, f, g, k, l, m, n, p, t, s, q, v, A);
}
var li = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = S.b(He, a);
    var b;
    b = gh.a(a);
    b = Xc(b);
    var e = document;
    b = da(b) ? e.getElementById(b) : b;
    a = ki(a);
    return w(b) ? new Processing(b, a) : null;
  }
  a.m = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.f = b;
  return a;
}(), mi = pf.a(J);
function ni(a) {
  var b = document.createElement("canvas");
  b.setAttribute("id", a);
  document.body.appendChild(b);
}
function oi() {
  for (var a = 1 >= document.body.childNodes.length, b = G(lb(mi)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.C(null, e);
      a && ni(Fh.a(f));
      lg.a(f).call(null);
      e += 1;
    } else {
      if (b = G(b)) {
        c = b, Cc(c) ? (b = Ib(c), d = Jb(c), c = b, f = P(b), b = d, d = f) : (f = H(c), a && ni(Fh.a(f)), lg.a(f).call(null), b = K(c), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
}
w(window.addEventListener) ? window.addEventListener("load", oi, !1) : w(window.attachEvent) && window.attachEvent("on" + C.a("load"), oi);
function $() {
  return w(null) ? null : Z;
}
qc([hg, ng, xg, zg, Dg, hh, vh, Bh, Gh, Ih, Jh, Lh, Sh, Th, Uh], "BURN SCREEN DARKEST DODGE REPLACE OVERLAY DIFFERENCE EXCLUSION HARD_LIGHT MULTIPLY LIGHTEST BLEND ADD SOFT_LIGHT SUBTRACT".split(" "));
qc([bg, dg, eg, og, qg, vg, Cg, Ig, Mg, Qg, dh, jh, kh, ph, wh, Ch, Hh, Mh, ai, bi], "DISABLE_STROKE_PERSPECTIVE ENABLE_RETINA_PIXELS DISABLE_DEPTH_MASK ENABLE_DEPTH_TEST ENABLE_DEPTH_SORT DISABLE_TEXTURE_MIPMAPS DISABLE_STROKE_PURE DISABLE_DEPTH_TEST ENABLE_STROKE_PERSPECTIVE ENABLE_NATIVE_FONTS DISABLE_OPTIMIZED_STROKE ENABLE_OPENGL_ERRORS ENABLE_STROKE_PURE ENABLE_DEPTH_MASK ENABLE_OPTIMIZED_STROKE DISABLE_OPENGL_ERRORS DISABLE_RETINA_PIXELS DISABLE_DEPTH_SORT ENABLE_TEXTURE_MIPMAPS DISABLE_NATIVE_FONTS".split(" "));
var pi = new u(null, 3, [$h, "LEFT", $g, "CENTER", Eh, "RIGHT"], null), qi = new u(null, 4, [Gg, "TOP", Ag, "BOTTOM", $g, "CENTER", ag, "BASELINE"], null), ri = Math.PI, si = 2 * ri, ti = qc([121, 39, 157, 119, 116, 113, 40, 117, 118, 122, 17, 115, 112, 123, 16, 120, 38, 18, 114, 37], [yg, Eh, Sg, mg, Rg, th, cg, Vh, Kh, fh, uh, Wh, rg, Ah, Zf, Qh, Wg, Eg, oh, $h]), ui = function() {
  function a(a, b, c, d) {
    return $().background(a, b, c, d);
  }
  function b(a, b, c) {
    return $().background(a, b, c);
  }
  function c(a, b) {
    return $().background(a, b);
  }
  function d(a) {
    return $().background(a);
  }
  var e = null, e = function(e, g, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, g);
      case 3:
        return b.call(this, e, g, k);
      case 4:
        return a.call(this, e, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.c = b;
  e.k = a;
  return e;
}(), vi = function() {
  function a(a, b, c, d) {
    return ui.k(a, b, c, d);
  }
  function b(a, b, c) {
    return ui.c(a, b, c);
  }
  function c(a, b) {
    return $().background(a, b);
  }
  function d(a) {
    return $().background(a);
  }
  var e = null, e = function(e, g, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, g);
      case 3:
        return b.call(this, e, g, k);
      case 4:
        return a.call(this, e, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.c = b;
  e.k = a;
  return e;
}(), wi = function() {
  function a(a, b, c, d) {
    return $().color(a, b, c, d);
  }
  function b(a, b, c) {
    return $().color(a, b, c);
  }
  function c(a, b) {
    return $().color(a, b);
  }
  function d(a) {
    return $().color(a);
  }
  var e = null, e = function(e, g, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, g);
      case 3:
        return b.call(this, e, g, k);
      case 4:
        return a.call(this, e, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.c = b;
  e.k = a;
  return e;
}();
function xi(a, b, c) {
  return Z.constrain(a, b, c);
}
function yi(a) {
  return Z.cos(a);
}
var zi = function() {
  function a(a, b, c, g, k, l) {
    return Z.dist(a, b, c, g, k, l);
  }
  function b(a, b, c, g) {
    return Z.dist(a, b, c, g);
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = b;
  c.N = a;
  return c;
}(), Ai = function() {
  function a(a, b, c, d) {
    return $().fill(a, b, c, d);
  }
  function b(a, b, c) {
    return $().fill(a, b, c);
  }
  function c(a, b) {
    return $().fill(a, b);
  }
  function d(a) {
    return $().fill(a);
  }
  var e = null, e = function(e, g, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, g);
      case 3:
        return b.call(this, e, g, k);
      case 4:
        return a.call(this, e, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.c = b;
  e.k = a;
  return e;
}(), Bi = function() {
  function a(a, b, c, d) {
    return Ai.k(a, b, c, d);
  }
  function b(a, b, c) {
    return Ai.c(a, b, c);
  }
  function c(a, b) {
    return Ai.b(a, b);
  }
  function d(a) {
    return Ai.a(a);
  }
  var e = null, e = function(e, g, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, g);
      case 3:
        return b.call(this, e, g, k);
      case 4:
        return a.call(this, e, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.c = b;
  e.k = a;
  return e;
}(), Ci = function() {
  function a(a, b, c, d, l, m) {
    return $().line(a, b, c, d, l, m);
  }
  function b(a, b, c, d) {
    return $().line(a, b, c, d);
  }
  function c(a, b) {
    return S.b(d, kd.b(a, b));
  }
  var d = null, d = function(d, f, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 4:
        return b.call(this, d, f, g, k);
      case 6:
        return a.call(this, d, f, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.k = b;
  d.N = a;
  return d;
}();
function Di() {
  var a = Z.mouseButton;
  return w(F.b ? F.b(37, a) : F.call(null, 37, a)) ? $h : w(F.b ? F.b(39, a) : F.call(null, 39, a)) ? Eh : w(F.b ? F.b(3, a) : F.call(null, 3, a)) ? $g : null;
}
var Ei = function() {
  function a(a, b, c) {
    return $().point(a, b, c);
  }
  function b(a, b) {
    return $().point(a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function Fi(a) {
  return Z.sin(a);
}
var Gi = function() {
  function a(a, b, c, d) {
    return $().stroke(a, b, c, d);
  }
  function b(a, b, c) {
    return $().stroke(a, b, c);
  }
  function c(a, b) {
    return $().stroke(a, b);
  }
  function d(a) {
    return $().stroke(a);
  }
  var e = null, e = function(e, g, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, g);
      case 3:
        return b.call(this, e, g, k);
      case 4:
        return a.call(this, e, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.c = b;
  e.k = a;
  return e;
}(), Hi = function() {
  function a(a, b, c, d) {
    return Gi.k(a, b, c, d);
  }
  function b(a, b, c) {
    return Gi.c(a, b, c);
  }
  function c(a, b) {
    return Gi.b(a, b);
  }
  function d(a) {
    return Gi.a(a);
  }
  var e = null, e = function(e, g, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, g);
      case 3:
        return b.call(this, e, g, k);
      case 4:
        return a.call(this, e, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.c = b;
  e.k = a;
  return e;
}(), Ii = function() {
  function a(a, b, c, d, l) {
    return $().text(a, b, c, d, l);
  }
  function b(a, b, c, d) {
    return $().text(a, b, c, d);
  }
  function c(a, b, c) {
    return $().text(a, b, c);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.k = b;
  d.p = a;
  return d;
}(), Ji = function() {
  function a(a, b) {
    var c = Z[R.b(pi, a)], g = Z[R.b(qi, b)];
    return $().textAlign(c | 0, g | 0);
  }
  function b(a) {
    a = Z[R.b(pi, a)];
    return $().textAlign(a | 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Ki = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return S.b(li, a);
  }
  a.m = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
Yc.a(" ");
function Li(a) {
  var b = ah.b(a, function() {
    return null;
  });
  return rc.c(a, ah, function(a) {
    return function() {
      return qf(Z.Ja, a.h ? a.h() : a.call(null));
    };
  }(b));
}
function Mi(a) {
  var b = Rh.b(a, function() {
    return null;
  }), c = Tg.b(a, rd), b = function(a, b) {
    return function() {
      return a.a ? a.a(rf.b(Z.Ja, F.b(Z.frameCount, 1) ? rd : b)) : a.call(null, rf.b(Z.Ja, F.b(Z.frameCount, 1) ? rd : b));
    };
  }(b, c);
  return rc.c(sc.b(a, Tg), Rh, b);
}
function Ni() {
  return new u(null, 2, [X, Z.mouseX, Y, Z.mouseY], null);
}
function Oi() {
  return new u(null, 3, [X, Z.mouseX, Y, Z.mouseY, Fg, Di()], null);
}
function Pi() {
  var a;
  a = Z.key;
  var b = Z.keyCode;
  a = F.b(65535, ("" + C.a(a)).charCodeAt()) ? R.c(ti, b, Dh) : Yc.a("" + C.a(a));
  return new u(null, 3, [wg, a, Yf, Z.keyCode, Nh, Z.key], null);
}
var Qi = function() {
  function a(a, b, c) {
    var g = a.a ? a.a(b) : a.call(null, b);
    return w(g) ? rc.c(a, b, w(c) ? function(a) {
      return function() {
        return rf.c(Z.Ja, a, c.h ? c.h() : c.call(null));
      };
    }(g, g) : function(a) {
      return function() {
        return rf.b(Z.Ja, a);
      };
    }(g, g)) : a;
  }
  function b(a, b) {
    return c.c(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}(), Ri = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return Jc.c(function(a, b) {
      return b instanceof U ? Qi.b(a, b) : S.c(Qi, a, b);
    }, a, b);
  }
  a.m = 1;
  a.g = function(a) {
    var d = H(a);
    a = I(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}();
function Si(a) {
  var b = Hg.a(a);
  return w(b) ? rc.c(a, Hg, function(a) {
    return function(b) {
      return rf.c(Z.Ja, a, b);
    };
  }(b, b)) : a;
}
function Ti(a) {
  return Si(Ri.f(Mi(Li(a)), L([eh, nh, new V(null, 2, 5, W, [ih, Ni], null), new V(null, 2, 5, W, [pg, Ni], null), new V(null, 2, 5, W, [bh, Oi], null), new V(null, 2, 5, W, [kg, Ni], null), new V(null, 2, 5, W, [jg, Oi], null), new V(null, 2, 5, W, [Og, function() {
    return new u(null, 4, [X, Z.mouseX, Y, Z.mouseY, yh, Z.pmouseX, fg, Z.pmouseY], null);
  }], null), new V(null, 2, 5, W, [Zh, function() {
    return new u(null, 5, [X, Z.mouseX, Y, Z.mouseY, yh, Z.pmouseX, fg, Z.pmouseY, Fg, Di()], null);
  }], null), new V(null, 2, 5, W, [qh, Pi], null), rh, new V(null, 2, 5, W, [ig, Pi], null), Bg], 0)));
}
;function Ui(a) {
  return Ti(a);
}
;function Vi(a) {
  function b(a, b) {
    var d = c(b, Zg.a(a)), k = Q.c(d, 0, null), d = Q.c(d, 1, null);
    return rc.c(Ed.p(a, new V(null, 2, 5, W, [Ug, b], null), rc, Zg, k), Zg, d);
  }
  function c(a, b) {
    var c = wd(2, Cd(function(b) {
      return F.b(b, a);
    }, Re(b)));
    return new V(null, 2, 5, W, [c, Jc.c(d, b, c)], null);
  }
  function d(a, b) {
    var c = We(function(a) {
      return F.b(a, b);
    }, a), d = Q.c(c, 0, null), c = Q.c(c, 1, null);
    return kd.b(d, I(c));
  }
  return H(Bd(function(a) {
    return pd(function(a) {
      return F.b(P(Zg.a(a)), 2);
    }, a);
  }, zd.a(function() {
    var c = Ve.a(P(a)), d;
    d = kd.b(c, c);
    d = gd.a ? gd.a(d) : gd.call(null, d);
    for (var g = Math.random, k = d.length - 1;0 < k;k--) {
      var l = Math.floor(g() * (k + 1)), m = d[k];
      d[k] = d[l];
      d[l] = m;
    }
    d = Wd.a ? Wd.a(d) : Wd.call(null, d);
    return Ug.a(Jc.c(b, new u(null, 2, [Ug, a, Zg, d], null), c));
  })));
}
function Wi(a, b) {
  return Wd(Vi(Wd(zd.b(a, function() {
    Oc.a(si);
    var a = Oc.a(3);
    return new u(null, 4, [X, Pc(500), Y, Pc(500), sg, wi.c(127 + Pc(127), 127 + Pc(127), 127 + Pc(127)), Xh, w(b) ? Xe.b(yi, Fi).call(null, a) : new V(null, 2, 5, W, [0, 0], null)], null);
  }))));
}
function Xi(a) {
  return Ed.p(Ed.p(a, new V(null, 1, 5, W, [X], null), xi, 0, 500), new V(null, 1, 5, W, [Y], null), xi, 0, 500);
}
function Yi(a) {
  return Ed.c(Ed.c(a, new V(null, 1, 5, W, [X], null), function(a) {
    return((a + 500) % 500 + 500) % 500;
  }), new V(null, 1, 5, W, [Y], null), function(a) {
    return((a + 500) % 500 + 500) % 500;
  });
}
function Zi(a, b) {
  var c = Ug.a(b), d = Zg.a(a), e = Q.c(d, 0, null), f = Q.c(d, 1, null), d = c.a ? c.a(e) : c.call(null, e), g = c.a ? c.a(f) : c.call(null, f), c = X.a(g) - X.a(d), e = Y.a(g) - Y.a(d), f = (X.a(d) + X.a(g)) / 2, d = (Y.a(d) + Y.a(g)) / 2, d = -(c * f + e * d), f = Z.sq(c) + Z.sq(e), f = Z.sqrt(f), d = (c * X.a(a) + e * Y.a(a) + d) / f, c = Z.atan2(e, c), c = 0 < d ? ri + c : c, e = Math.abs.a ? Math.abs.a(d) : Math.abs.call(null, d), e = 3 < e ? 3 : e, e = 1 > e ? new V(null, 2, 5, W, [0, 0], 
  null) : new V(null, 2, 5, W, [yi(c) * e, Fi(c) * e], null), c = Q.c(e, 0, null), e = Q.c(e, 1, null), f = Xh.a(a), d = Q.c(f, 0, null), f = Q.c(f, 1, null), g = 0 === mh.a(b) ? Ud : M(new u(null, 2, [X, X.a(a), Y, Y.a(a)], null), wd(mh.a(b) - 1, sh.a(a))), k = w(xh.a(b)) ? Yi : Xi;
  return k.a ? k.a(Ed.p(Ed.p(rc.c(a, sh, g), new V(null, 1, 5, W, [X], null), Kc, c, d), new V(null, 1, 5, W, [Y], null), Kc, e, f)) : k.call(null, Ed.p(Ed.p(rc.c(a, sh, g), new V(null, 1, 5, W, [X], null), Kc, c, d), new V(null, 1, 5, W, [Y], null), Kc, e, f));
}
function $i(a, b) {
  return Jc.c(function(a, d) {
    return Ed.k(a, new V(null, 1, 5, W, [d], null), Zi, b);
  }, a, Ve.a(P(a)));
}
function aj(a) {
  return w(ug.a(a)) ? Ed.k(a, new V(null, 1, 5, W, [Ug], null), $i, a) : a;
}
function bj(a) {
  Ei.b(X.a(a), Y.a(a));
  if (w(!0)) {
    a = G(sh.a(a));
    for (var b = null, c = 0, d = 0;;) {
      if (d < c) {
        var e = b.C(null, d);
        Ei.b(X.a(e), Y.a(e));
        d += 1;
      } else {
        if (a = G(a)) {
          b = a, Cc(b) ? (a = Ib(b), c = Jb(b), b = a, e = P(a), a = c, c = e) : (e = H(b), Ei.b(X.a(e), Y.a(e)), a = K(b), b = null, c = 0), d = 0;
        } else {
          break;
        }
      }
    }
  }
}
function cj(a, b, c) {
  return function e(f) {
    return new Zc(null, function() {
      for (var g = f;;) {
        if (g = G(g)) {
          if (Cc(g)) {
            var k = Ib(g), l = P(k), m = cd(l);
            a: {
              for (var n = 0;;) {
                if (n < l) {
                  var p = D.b(k, n), t = a.a ? a.a(p) : a.call(null, p);
                  10 > zi.k(X.a(t), Y.a(t), b, c) && m.add(p);
                  n += 1;
                } else {
                  k = !0;
                  break a;
                }
              }
              k = void 0;
            }
            return k ? fd(m.S(), e(Jb(g))) : fd(m.S(), null);
          }
          m = H(g);
          k = a.a ? a.a(m) : a.call(null, m);
          if (10 > zi.k(X.a(k), Y.a(k), b, c)) {
            return M(m, e(I(g)));
          }
          g = I(g);
        } else {
          return null;
        }
      }
    }, null, null);
  }(Ve.a(P(a)));
}
function dj(a, b) {
  var c = Zg.a(b), d = Q.c(c, 0, null), c = Q.c(c, 1, null), d = a.a ? a.a(d) : a.call(null, d), c = a.a ? a.a(c) : a.call(null, c), e = 500 * (Y.a(d) - Y.a(c)), f = 500 * (X.a(c) - X.a(d)), g = (X.a(d) + X.a(c)) / 2, k = (Y.a(d) + Y.a(c)) / 2;
  Hi.c(0, 255, 0);
  bj(b);
  Hi.c(255, 0, 0);
  bj(d);
  bj(c);
  $().strokeWeight(1);
  Ci.k(g + e, k + f, g - e, k - f);
}
function ej(a) {
  a = Gc(a) ? S.b(He, a) : a;
  var b = R.b(a, Ug);
  vi.a(240);
  $().strokeWeight(10);
  Hi.a(0);
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.C(null, f);
      w(Jg.a(a)) && Hi.a(sg.a(g));
      bj(g);
      f += 1;
    } else {
      if (c = G(c)) {
        d = c, Cc(d) ? (c = Ib(d), f = Jb(d), d = c, e = P(c), c = f) : (c = H(d), w(Jg.a(a)) && Hi.a(sg.a(c)), bj(c), c = K(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  c = G(cj(b, Z.mouseX, Z.mouseY));
  d = null;
  for (f = e = 0;;) {
    if (f < e) {
      g = d.C(null, f), dj(b, b.a ? b.a(g) : b.call(null, g)), f += 1;
    } else {
      if (c = G(c)) {
        d = c, Cc(d) ? (c = Ib(d), f = Jb(d), d = c, e = P(c), c = f) : (c = H(d), dj(b, b.a ? b.a(c) : b.call(null, c)), c = K(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  R.c(a, ug, Fc) !== Fc ? a = null : ($().textSize(20), Ji.b($g, $g), Bi.a(0), a = Ii.p("Select me and press Space", 0, 0, Z.width, Z.height));
  return a;
}
function fj(a, b) {
  var c = Vg.a(a);
  return w(c) ? Ed.k(a, new V(null, 2, 5, W, [Ug, c], null), Ke, Le(b)) : a;
}
function gj(a, b) {
  var c = H(cj(Ug.a(a), X.a(b), Y.a(b)));
  return rc.c(a, Vg, c);
}
function hj(a) {
  return rc.c(a, Ug, Wi(Kg.a(a), Ph.a(a)));
}
function ij(a, b) {
  return hj(Ed.c(a, new V(null, 1, 5, W, [Kg], null), function(a) {
    a = b.a ? b.a(a) : b.call(null, a);
    return 3 > a ? 3 : a;
  }));
}
function jj(a, b) {
  var c = wg.a(b);
  return w(F.b ? F.b(gg, c) : F.call(null, gg, c)) ? hj(a) : w(F.b ? F.b(Wg, c) : F.call(null, Wg, c)) ? ij(a, fc) : w(F.b ? F.b(cg, c) : F.call(null, cg, c)) ? ij(a, Lc) : w(F.b ? F.b($h, c) : F.call(null, $h, c)) ? Ed.c(a, new V(null, 1, 5, W, [mh], null), function() {
    return function(a) {
      a -= 1;
      return 0 < a ? a : 0;
    };
  }(F, c)) : w(F.b ? F.b(Eh, c) : F.call(null, Eh, c)) ? Ed.c(a, new V(null, 1, 5, W, [mh], null), fc) : w(F.b ? F.b(Yc.a(" "), c) : F.call(null, Yc.a(" "), c)) ? Ed.c(a, new V(null, 1, 5, W, [ug], null), Ja) : a;
}
function kj(a) {
  return Ki.f(L([gh, gh.a(a), Yg, new V(null, 2, 5, W, [500, 500], null), ah, function() {
    qf(Z.Ib, 30);
    Z.frameRate(30);
    return Ke.f(L([a, new u(null, 3, [Ug, Wi(15, Ph.a(a)), Vg, null, Kg, 15], null)], 0));
  }, Rh, ej, Tg, aj, bh, gj, Zh, fj, qh, jj, ch, new V(null, 1, 5, W, [Ui], null)], 0));
}
kj(new u(null, 5, [Ph, !0, Jg, !1, mh, 1, gh, "sketch", xh, !0], null));
function lj(a) {
  return kj(vf.f(a, L([uf, !0], 0)));
}
var mj = ["equilibrium", "sketch"], nj = aa;
mj[0] in nj || !nj.execScript || nj.execScript("var " + mj[0]);
for (var oj;mj.length && (oj = mj.shift());) {
  mj.length || void 0 === lj ? nj = nj[oj] ? nj[oj] : nj[oj] = {} : nj[oj] = lj;
}
;
})();
