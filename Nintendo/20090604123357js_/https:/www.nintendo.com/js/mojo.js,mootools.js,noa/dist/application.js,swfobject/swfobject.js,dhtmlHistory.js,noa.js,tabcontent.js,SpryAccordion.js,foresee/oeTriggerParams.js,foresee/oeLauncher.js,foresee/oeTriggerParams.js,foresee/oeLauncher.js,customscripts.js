var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var mojo={Version:"0.1b"};dojo.provide("mojo.command.Behavior");dojo.declare("mojo.command.Behavior",null,{_requestObj:null,getRequest:function(){if(!this._requestObj){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Behavior - requestObj not set")}}return this._requestObj},_execute:function(B){this._requestObj=B;if(typeof (B.update)=="function"){B.update()}if(!this._requestObj){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Behavior - requestObj not set")}}else{if(!this._requestObj.callerObj){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Behavior - callerObj not set")}}}if(djConfig&&djConfig.isDebug){try{return this.execute(B)}catch(A){console.debug("EXCEPTION: "+A.message+" in mojo.command.Behavior.execute() for command: "+B.commandName+", controller: "+B.controllerName)}}else{return this.execute(B)}},execute:function(A){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Behavior - execute() not implemented")}}});dojo.provide("mojo.command.Command");dojo.declare("mojo.command.Command",null,{_requestObj:null,getRequest:function(){if(!this._requestObj){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Command - requestObj not set")}}return this._requestObj},_execute:function(B){this._requestObj=B;if(typeof (B.update)=="function"){B.update()}if(djConfig&&djConfig.isDebug){try{return this.execute(B)}catch(A){console.debug("EXCEPTION: "+A.message+" in mojo.command.Command.execute() for command: "+B.commandName+", controller: "+B.controllerName)}}else{return this.execute(B)}},execute:function(A){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Command - execute() not implemented")}},onResponse:function(A){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Command - onResponse() not implemented")}},onError:function(A){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Command - onError() not implemented")}}});dojo.provide("mojo.command.Rule");dojo.declare("mojo.command.Rule",null,{_requestObj:null,getRequest:function(){if(!this._requestObj){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Rule - requestObj not set")}}return this._requestObj},_execute:function(B){this._requestObj=B;if(typeof (B.update)=="function"){B.update()}if(!this._requestObj){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Rule - requestObj not set")}}else{if(!this._requestObj.callerObj){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Rule - callerObj not set")}}else{if(!this._requestObj.invocation){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Rule - invocation not set")}}}}if(djConfig&&djConfig.isDebug){try{return this.execute(B)}catch(A){console.debug("EXCEPTION: "+A.message+" in mojo.command.Rule.execute() for command: "+B.commandName+", controller: "+B.controllerName)}}else{return this.execute(B)}},execute:function(A){if(this.condition(A)){return A.invocation.proceed()}},condition:function(A){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.command.Rule - condition() not implemented")}}});if(!dojo._hasResource["mojo.component.Template"]){dojo._hasResource["mojo.component.Template"]=true;dojo.provide("mojo.component.Template");dojo.require("dijit.dijit");dojo.require("dijit._Widget");dojo.require("dijit._Templated");dojo.require("dijit._Container");dojo.declare("mojo.component.Template",[dijit._Widget,dijit._Templated,dijit._Container],{initWithData:false,iterate:true,escapeHtml:false,escapeQuotes:false,modelSource:"",modelDependency:"",templateObj:[],templateConditions:[],_controllers:null,getModelSource:function(){return this.modelSource},getModelDependency:function(){return this.modelDependency},_modelSourceHandle:null,_modelDependencyHandle:null,setModelSource:function(A){if(this.getModelSource().length>0){if(this._modelSourceHandle){mojo.Model.removeObserver(this._modelSourceHandle)}this.modelSource=A;this._modelSourceHandle=mojo.Model.addObserver(this.modelSource,this,"onModelUpdate");this.onModelUpdate()}},setModelDependency:function(A){if(this.getModelDependency().length>0){if(this._modelDependencyHandle){mojo.Model.removeObserver(this._modelDependencyHandle)}this.modelDependency=A;this._modelDependencyHandle=mojo.Model.addObserver(this.modelDependency,this,"onModelDependencyUpdate");this.onModelDependencyUpdate()}},_getTemplateControllers:function(){var A=this.srcNodeRef.parentNode;var B=mojo.controller.Map.getInstance();while(A!=null){if(A.id&&B.getSiteMap()["#"+A.id]){return B.getSiteMap()["#"+A.id];break}A=A.parentNode}return null},buildRendering:function(){var C=mojo.query("*[dojoType=mojo.component.Template]",this.srcNodeRef);var D=C.length;for(var F=0;F<D;F++){var A=document.createTextNode("{cdata}");var E=document.createTextNode("{/cdata}");dojo.place(A,C[F],"before");dojo.place(E,C[F],"after")}var J=[];this.templateConditions=[];var I=mojo.query("> [prototype]",this.srcNodeRef);for(var F=0,B,G;F<I.length;F++){this.templateConditions[F]=I[F].getAttribute("prototype");J[F]=I[F].innerHTML;I[F].style.display="none"}if(J.length==0){J[0]=this.srcNodeRef.innerHTML}for(var F=0;F<J.length;F++){J[F]=J[F].replace(/&lt;/g,"<").replace(/&gt;/g,">");J[F]=J[F].replace(/\%21/g,"!").replace(/\%7B/g,"{").replace(/\%7D/g,"}");J[F]=this._normalize(J[F]);J[F]=TrimPath.parseTemplate(J[F],this.srcNodeRef.id+":"+F)}this.templateObj=J;var H=this.srcNodeRef.childNodes;this.initWithData=((H.length>I.length)&&I.length>0);this.hide();this.setModelDependency(this.getModelDependency());this.setModelSource(this.getModelSource())},_bindToModel:function(){var modifiers={escapeQuotes:function(str){str=str.toString();str=str.replace(/\"/g,"&#34;");str=str.replace(/\'/g,"&#39;");return str}};var sModel=this.getModelSource();if(sModel.length>0&&mojo.Model.contains(sModel)&&this.srcNodeRef){var modelData=mojo.Model.get(sModel);var result=new Array();if(!dojo.isArray(modelData)){modelData=[modelData]}var modelDataLength=modelData.length;if(!this.iterate&&modelDataLength>0){modelDataLength=1}var iActiveTemplate=0;if(modelDataLength>0&&modelData[0]!=null){with(modelData[0]){for(var i=0,len=this.templateConditions.length;i<len;i++){try{if(this.templateConditions[i].toLowerCase()=="true"||eval(this.templateConditions[i])){iActiveTemplate=i;break}}catch(e){}}}}for(var i=0;i<modelDataLength;i++){if(modelData[i]){if(typeof (modelData[i])!="object"){var tmpModelData=modelData[i].toString();modelData[i]=new Object();modelData[i].data=tmpModelData}modelData[i].currentIndex=i;if(this.escapeQuotes){}result.push(this.templateObj[iActiveTemplate].process(modelData[i]))}}if(!this._controllers){this._controllers=this._getTemplateControllers()}var templateNode=this.srcNodeRef;templateNode.innerHTML="";templateNode.innerHTML=result.join("");var inlineDijits=mojo.query("*[dojoType='mojo.component.Template']",this.srcNodeRef);var inlineDijitsLength=inlineDijits.length;var allowedAttributes=["escapeHtml","escapeQuotes","modelSource","modelDependency"];var attributeCount=allowedAttributes.length;for(var i=0;i<inlineDijitsLength;i++){var dijitParams={};var attributeAsTemplate;for(var j=0;j<attributeCount;j++){if(inlineDijits[i].getAttribute(allowedAttributes[j])){attributeValue=inlineDijits[i].getAttribute(allowedAttributes[j]);if(/[\!|\$]\{[^\}]*\}/.test(attributeValue)){attributeAsTemplate=this._normalize(attributeValue);attributeAsTemplate=TrimPath.parseTemplate(attributeAsTemplate);attributeValue=attributeAsTemplate.process(modelData[i])}dijitParams[allowedAttributes[j]]=attributeValue}}var newDijit=new mojo.component.Template(dijitParams,inlineDijits[i])}var parent=this.srcNodeRef.parentNode;while(parent!=null){if(parent.id&&dijit.byId(parent.id)){var widget=dijit.byId(parent.id);if(widget["sync"]&&typeof (widget["sync"])=="function"){widget.sync()}}parent=parent.parentNode}if(!this._controllers){this._controllers=this._getTemplateControllers()}if(this._controllers){var controllersLength=this._controllers.length;for(var i=0;i<controllersLength;i++){var controllerName=this._controllers[i].controller;mojo.Model.get("__mojoTemplateControllers")[controllerName]=true}}this.show()}else{if(!this.initWithData){this.initWithData=false;this.hide()}}},hide:function(){if(this.srcNodeRef){dojo.style(this.srcNodeRef,"display","none")}},show:function(){if(this.srcNodeRef){dojo.style(this.srcNodeRef,"display","block")}},_replacedNode:null,_normalize:function(E){var D=/[\!|\$]\{[^\}]*\}/g;var B=E.match(D);var F=E.split(D);var I=new Array();var A=0;if(B){A=B.length}for(var C=0;C<A;C++){I.push(F[C]);var H="$"+B[C].substring(1);var G="";if(this.escapeHtml){G+="|escape"}if(this.escapeQuotes){G+="|escapeQuotes"}H=H.substring(0,H.length-1)+G+"}";I.push(H)}I.push(F[A]);return I.join("")},onModelUpdate:function(){if(this.getModelDependency().length==0||this._dependencyMet){this._bindToModel()}},_dependencyMet:false,onModelDependencyUpdate:function(){if(this.getModelDependency().length>0&&mojo.Model.contains(this.getModelDependency())){this._dependencyMet=true;this.onModelUpdate()}else{this._dependencyMet=false}}})}dojo.provide("mojo.controller.Controller");dojo.declare("mojo.controller.Controller",null,{constructor:function(A){this._commands=new Array();this._tags=new Array();this._contextElementObj=A;this.addCommands();this._addObservers();this.addIntercepts();this.onInit();mojo.Messaging.subscribe("/mojo/controller/"+this.declaredClass+"/addObservers",this,"_addObservers");mojo.Messaging.subscribe("/mojo/controller/addObservers",this,"_addObservers")},_contextElementObj:null,_commands:new Array(),_queryCache:new Object(),_observers:new Object(),_tags:new Array(),getContextElement:function(){return this._contextElementObj},onInit:function(){},_addObservers:function(){this._queryCache=new Object();this._observers=new Object();this.addObservers();for(var B in this._queryCache){if(this._queryCache[B]["length"]){for(var C in this._observers[B]){if(this._observers[B][C]["length"]){for(var A=0;A<this._queryCache[B].length;A++){this._addObserver(this._queryCache[B][A],C,this._observers[B][C])}}}}}this._queryCache=new Object();this._observers=new Object()},addObservers:function(){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.controller.Controller - addObservers() not implemented")}},addObserver:function(I,E,H,F){var A=function(K){if(!dojo.isArray(K)){return false}for(var L=0,J=K.length;L<J;L++){if(typeof (K[L])!="string"){return false}}return true};if(!I){return }if(typeof (I)=="string"||A(I)){if(!dojo.isArray(I)){I=[I]}for(var D=0,G=I.length;D<G;D++){var C=I[D];if(!this._queryCache[C]){this._queryCache[C]=mojo.query(C,this.getContextElement())}if(!this._observers[C]){this._observers[C]=new Object()}if(!this._observers[C][E]){this._observers[C][E]=new Array()}var B=this._observers[C][E].length;this._observers[C][E][B]={cmdName:H,paramsObj:F}}}else{if(!dojo.isArray(I)){I=[I]}for(var D=0;D<I.length;D++){this._addObserver(I[D],E,[{cmdName:H,paramsObj:F}])}}},_addObserver:function(I,D,A){var E=this._setRequest;var H=this.getContextElement();var F=this.declaredClass;var B=new Array();for(var C=0;C<A.length;C++){if(!this._observerIsTagged(I,D,A[C])){B.push(A[C]);this._tagObserver(I,D,A[C])}}if(!I.mojoObservers){I.mojoObservers=new Object()}if(!I.mojoObservers[D]){I.mojoObservers[D.toLowerCase()]=new Array()}if(B.length>0){var G=function(K){for(var J=0;J<B.length;J++){if(typeof mojo!="undefined"){var L=E(B[J].paramsObj,I,H,K,B[J].cmdName,F);mojo.Messaging.publish("/mojo/command/"+F+"."+B[J].cmdName,[L])}}};if(["onmouseleave","onmouseenter"].indexOf(D.toLowerCase())!=-1&&MooTools&&Element.Events.mouseleave&&Element.Events.mouseenter){$(I).addEvent(D.replace("on",""),G)}else{dojo.connect(I,D,G)}I.mojoObservers[D.toLowerCase()].push(G)}},_tagObserver:function(A,E,D){if(!A.mojoObserve){A.mojoObserve=new Object()}if(!A.mojoObserve[this.declaredClass]){var F=this._tags.length;A.mojoObserve[this.declaredClass]=F;this._tags[F]=new Object()}var C=A.mojoObserve[this.declaredClass];var B=this._generateTagKey(E,D);if(this._tags[C]&&!this._tags[C][B]){this._tags[C][B]=true}},_generateTagKey:function(D,C){var B=D+"_"+C.cmdName;if(C.paramsObj){var E;if(typeof (C.paramsObj)=="function"){E=C.paramsObj.toString()}else{if(typeof (C.paramsObj)=="object"){for(var A in C.paramsObj){if(C.paramsObj[A]){E+=A+":"+C.paramsObj[A].toString()+","}}}}B+="_"+E}return B},_observerIsTagged:function(A,D,C){if(!A.mojoObserve){A.mojoObserve=new Object()}var E=false;var B=this._generateTagKey(D,C);if(A.mojoObserve[this.declaredClass]&&this._tags[A.mojoObserve[this.declaredClass]]&&this._tags[A.mojoObserve[this.declaredClass]][B]){E=true}return E},addCommands:function(){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.controller.Controller - addCommands() not implemented")}},addCommand:function(cmdName,cmdObjPath){if(!this._commands[cmdName]){this._commands[cmdName]=new Array()}var addFunc=function(cmdName,cmdObjPath,thisObj){dojo.require(cmdObjPath);var cmdObj=eval("new "+cmdObjPath+"()");thisObj._commands[cmdName].push(cmdObj);mojo.Messaging.subscribe("/mojo/command/"+thisObj.declaredClass+"."+cmdName,cmdObj,"_execute")};if(djConfig&&djConfig.isDebug){try{addFunc(cmdName,cmdObjPath,this)}catch(ex){console.debug("EXCEPTION: "+ex.message+" in mojo.controller.Controller.addCommand() for command: "+cmdName)}}else{addFunc(cmdName,cmdObjPath,this)}},getCommand:function(A){if(this._commands[A]){return this._commands[A][0]}return null},getCommandChain:function(A){if(this._commands[A]){return this._commands[A]}return null},addIntercepts:function(){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.controller.Controller - addIntercepts() not implemented")}},addIntercept:function(F,B,H,E){if(B==H){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.controller.Controller - a command cannot add advice to itself")}}else{var C=this._setRequest;var I=this.getContextElement();var D=this.declaredClass;var G=this._commands[B][0]["_execute"];var A=function(J){if(typeof mojo!="undefined"){requestObj=C(E,J.args[0].callerObj,I,J.args[0].eventObj,H,D,J);mojo.Messaging.publish("/mojo/command/"+D+"."+H,[requestObj])}};switch(F){case"before":this._commands[B][0]["_execute"]=function(){var J={args:arguments,calleeObj:this};A.apply(this,[J]);return G.apply(this,arguments)};break;case"after":this._commands[B][0]["_execute"]=function(){var J={args:arguments,calleeObj:this};G.apply(this,arguments);return A.apply(this,[J])};break;case"around":this._commands[B][0]["_execute"]=function(){var J={args:arguments,calleeObj:this};J.proceed=function(){return G.apply(this.calleeObj,this.args)};return A.apply(this,[J])};break}}},_setRequest:function(G,A,F,D,C,B,E){var H=new mojo.controller.Request(G,A,F,D,C,B,E);return H}});mojo.controller.Controller.updateObservers=function(A){if(A){mojo.Messaging.publish("/mojo/controller/"+A+"/addObservers")}else{mojo.Messaging.publish("/mojo/controller/addObservers")}};dojo.declare("mojo.controller.Request",null,{constructor:function(G,A,F,D,B,C,E){if(typeof (G)=="function"){this.paramsObj={};this._paramsFunc=G}else{if(typeof (G)=="object"){this.paramsObj=G}}this.callerObj=A;this.contextObj=F;this.eventObj=D;this.commandName=B;this.controllerName=C;this.invocation=E},_paramsFunc:null,paramsObj:null,callerObj:null,contextObj:null,eventObj:null,commandName:null,controllerName:null,invocation:null,update:function(){if(this._paramsFunc&&typeof (this._paramsFunc)=="function"){var A=this._paramsFunc(this.contextObj,this.callerObj);for(var B in A){this.paramsObj[B]=A[B]}}},getParams:function(){if(!this.paramsObj){this.update()}return this.paramsObj},getCaller:function(){return this.callerObj},getContextElement:function(){return this.contextObj},getEvent:function(){return this.eventObj},getCommandName:function(){return this.commandName},getControllerName:function(){return this.controllerName},getInvocation:function(){return this.invocation}});dojo.provide("mojo.controller.Map");var __mojoControllerMap=null;dojo.declare("mojo.controller.Map",null,{constructor:function(){mojo.Messaging.subscribe("/mojo/controller/mapControllers",this,"mapControllers")},_controllers:new Array(),_siteMap:null,getSiteMap:function(){if(!this._siteMap){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.controller.Map - siteMap not set")}}return this._siteMap},setSiteMap:function(A){this._siteMap=A},mapControllers:function(C){var B=this.getSiteMap();for(pattern in B){if(pattern.indexOf("#")==0){var A;if(C&&typeof (C)=="object"){A=mojo.queryFirst(pattern,C)}else{A=mojo.queryFirst(pattern)}if(A){if(C&&typeof (C)=="object"){this._mapControllers(B[pattern],A)}else{var F=false;var D=A.parentNode;while(D){if(dojo.hasClass(D,"dojoDialog")){F=true;break}D=D.parentNode}if(!F){this._mapControllers(B[pattern],A)}}}}else{if(C&&typeof (C)=="string"){var E=new RegExp(pattern);if(E.test(C)){this._mapControllers(B[pattern])}}}}this.onComplete()},_mapControllers:function(E,A){var B=E.length;for(var C=0;C<B;C++){var D=E[C].controller;this.mapController(D,A)}},mapController:function(controllerName,contextElementObj){if(!this._controllers[controllerName]){var mapFunc=function(controllerName,contextElementObj,thisObj){dojo.require(controllerName);if(contextElementObj){thisObj._controllers[controllerName]=eval("new "+controllerName+"(contextElementObj)")}else{thisObj._controllers[controllerName]=eval("new "+controllerName+"(null)")}};if(djConfig&&djConfig.isDebug){try{mapFunc(controllerName,contextElementObj,this)}catch(ex){console.debug("EXCEPTION: "+ex.message+" in mojo.controller.Map.mapController() for controller: "+controllerName)}}else{mapFunc(controllerName,contextElementObj,this)}}},onComplete:function(){}});mojo.controller.Map.mapControllers=function(A){mojo.Messaging.publish("/mojo/controller/mapControllers",[A])};mojo.controller.Map.getInstance=function(){if(__mojoControllerMap==null){__mojoControllerMap=new mojo.controller.Map()}return __mojoControllerMap};dojo.provide("mojo.helper.Events");mojo.fireEvent=function(B,A){var C=B.mojoObservers[A.toLowerCase()];if(C){C.forEach(function(D){D()})}};dojo.provide("mojo.helper.ObjectQuery");mojo.helper.ObjectQuery.select=function(A,C){var E=mojo.helper.ObjectQuery._createSchema(A);var B=TrimPath.makeQueryLang(E);var D=B.parseSQL(C);return D.filter(A)};mojo.helper.ObjectQuery._createSchema=function(B){var D={};if(B){if(dojo.isArray(B)){B=B[0]}for(var E in B){D[E]={};var A=B[E];if(dojo.isArray(A)){A=A[0]}for(var C in A){if(typeof (A[C]).toString().toLowerCase().indexOf("number")>-1){D[E][C]={type:"Number"}}else{D[E][C]={type:"String"}}}}}return D};dojo.provide("mojo.helper.String");mojo.toSentenceCase=function(A){return A.charAt(0).toUpperCase()+A.replace(/ \w/g,function(B){return B.toUpperCase()}).substring(1)};dojo.provide("mojo.History");var __mojoHistory=null;dojo.declare("mojo.History",null,{constructor:function(){var A=this;if(rsh.dhtmlHistory._isIE){rsh.dhtmlHistory.init();dojo.connect(rsh.dhtmlHistory,"_fireHistoryEvent",function(B){A.setHash(B);A._execute()})}else{this._interval=window.setInterval(function(){A._execute()},100);A._execute()}},_interval:null,_defaultHash:"",_savedHash:"",_paramsObj:null,_topic:null,getHash:function(){var A=window.location.hash;if(A.length>0){A=A.substring(1)}if(A.toLowerCase()=="null"||A.toLowerCase()=="undefined"){A=""}return A},setHash:function(A){window.location.hash=A},setDefault:function(A){if(typeof (A)=="string"){this._defaultHash=A}else{if(typeof (A)=="object"){this._defaultHash=this._parseObj(A)}}this._execute()},_execute:function(){var A=this.getHash();if(A.length==0&&this._defaultHash.length>0){A=this._defaultHash}if(this._savedHash!=A){document.title=document.title.replace(window.location.hash,"");this._savedHash=A;this._paramsObj=this._parseHash(this._savedHash);this._topic=this._paramsObj["topic"];this.onChange();if(this._topic){mojo.Messaging.publish(this._topic,this._paramsObj)}}},_parseHash:function(D){var C=new Object();var B=D.split("&");for(var A=0;A<B.length;A++){var E=B[A].split("=");if(E.length==2){C[E[0]]=unescape(E[1])}}return C},_parseObj:function(C){var B="";for(var A in C){B+=A+"="+escape(C[A].toString())+"&"}return B},onChange:function(){},getParams:function(){return this._paramsObj},getTopic:function(){return this._topic}});mojo.History.getInstance=function(){if(__mojoHistory==null){__mojoHistory=new mojo.History()}return __mojoHistory};dojo.provide("mojo.*");dojo.provide("mojo.Messaging");var __mojoMessagingTopics=new Array();mojo.Messaging.publish=function(B,C){var A=mojo.Messaging.getTopic(B);A.setMessage(C);A.onPublish(C);dojo.publish(B,C);A.setMessage(null)};mojo.Messaging.subscribe=function(A,B,C){mojo.Messaging.getTopic(A);return dojo.subscribe(A,B,C)};mojo.Messaging.unsubscribe=function(A){dojo.unsubscribe(A)};mojo.Messaging.getTopic=function(A){if(!__mojoMessagingTopics[A]){__mojoMessagingTopics[A]=new mojo.MessagingTopic(A)}return __mojoMessagingTopics[A]};dojo.declare("mojo.MessagingTopic",null,{constructor:function(A){this._topic=A},_topic:null,_messageObj:null,getTopic:function(){return this._topic},getMessage:function(){return this._messageObj},setMessage:function(A){this._messageObj=A},onPublish:function(){}});dojo.provide("mojo.Model");var __mojoModel=new Array();var __mojoModelReferences=new Array();mojo.Model.set=function(A,B){__mojoModel[A]=B;mojo.Model.notify(A)};mojo.Model.add=function(B,D){if(mojo.Model.contains(B)){if(!dojo.isArray(__mojoModel[B])){var C=__mojoModel[B];__mojoModel[B]=new Array();__mojoModel[B].push(C)}if(dojo.isArray(D)){for(var A=0;A<D.length;A++){__mojoModel[B].push(D[A])}}else{__mojoModel[B].push(D)}mojo.Model.notify(B)}else{mojo.Model.set(B,D)}};mojo.Model.get=function(B){var A=__mojoModel[B];if(A){return A}else{if(djConfig&&djConfig.isDebug){console.debug('WARNING mojo.Model - No entry found for "'+B+'" key')}}};mojo.Model.getReference=function(A){if(!__mojoModelReferences[A]){__mojoModelReferences[A]=new mojo.ModelReference(A)}return __mojoModelReferences[A]};mojo.Model.remove=function(A){__mojoModel[A]=null;mojo.Model.notify(A)};mojo.Model.contains=function(B){var A=__mojoModel[B];if(A){return true}return false};mojo.Model.notify=function(A){__mojoModel["__mojoTemplateControllers"]={};var B=mojo.Model.getReference(A);B.onNotify();mojo.Messaging.publish("/mojo/model/"+A);for(var C in __mojoModel["__mojoTemplateControllers"]){mojo.controller.Controller.updateObservers(C)}};mojo.Model.addObserver=function(B,A,C){return mojo.Messaging.subscribe("/mojo/model/"+B,A,C)};mojo.Model.removeObserver=function(A){mojo.Messaging.unsubscribe(A)};dojo.declare("mojo.ModelReference",null,{constructor:function(A){this._key=A},_key:null,getKey:function(){return this._key},getValue:function(){return mojo.Model.get(this._key)},setValue:function(A){mojo.Model.set(this._key,A)},onNotify:function(){}});dojo.provide("mojo.query");mojo.query=function(D,B){if(B&&(typeof B=="string"||typeof B=="object")){var C=dojo.query(D,B)}else{if((new RegExp(/^\#[a-zA-Z0-9\-\_]*$/)).test(D)){var A=document.getElementById(D.substring(1));if(A){var C=[A]}else{var C=[]}}else{var C=dojo.query(D)}}return C};mojo.queryFirst=function(C,A){var B=mojo.query(C,A);if(B.length>0){return B[0]}return null};mojo.distinct=function(E){if(E.length==0){return E}var C=[],F;for(var B=0,A=E.length;B<A;B++){if(!(F=E[B])._counted){F._counted=true;C.push(F)}}for(var B=0,D;D=C[B];B++){D._counted=undefined}return C};dojo.provide("mojo.service.Delegate");dojo.declare("mojo.service.Delegate",null,{constructor:function(A){this._callerObj=A},_callerObj:null,getCaller:function(){return this._callerObj},setCaller:function(A){this._callerObj=A}});dojo.provide("mojo.service.Locator");var __mojoServiceRegistry=new Array();dojo.declare("mojo.service.Locator",null,{constructor:function(){if(__mojoServiceRegistry.length==0){this.addServices()}},addServices:function(){if(djConfig&&djConfig.isDebug){console.debug("ERROR mojo.service.Locator - addServices() not implemented")}},addService:function(A){__mojoServiceRegistry[A.getName()]=A},getService:function(A){return __mojoServiceRegistry[A]}});dojo.provide("mojo.service.Service");dojo.declare("mojo.service.Service",null,{constructor:function(A,B,C){this.setName(A);this.setUri(B);this.setParams(C)},_name:"",_uri:"",_params:new Object(),getName:function(){return this._name},setName:function(A){this._name=A},getUri:function(){return this._uri},setUri:function(A){this._uri=A},getParams:function(){return this._paramsObj},setParams:function(A){if(A){this._paramsObj=A}},invoke:function(L,E){var A=TrimPath.parseTemplate(this.getUri()).process(L);if(L&&L["_MODIFIERS"]&&L["defined"]){delete L["_MODIFIERS"];delete L["defined"]}var M=false;if(this.getParams()&&this.getParams().json!=null){M=this.getParams().json}var D="GET";if(this.getParams()&&this.getParams().method){D=this.getParams().method}else{if(this.getName().toLowerCase().indexOf("add")==0){D="POST"}else{if(this.getName().toLowerCase().indexOf("update")==0){D="PUT"}else{if(this.getName().toLowerCase().indexOf("delete")==0){D="DELETE"}}}}var B=false;if(this.getParams()&&this.getParams().cache!=null){B=this.getParams().cache}else{if(D.toUpperCase()=="GET"){B=true}}var I=0;if(this.getParams()&&this.getParams().cacheExpiry!=null){I=this.getParams().cacheExpiry}var C=0;if(this.getParams()&&this.getParams().retry){C=this.getParams().retry}else{if(D.toUpperCase()=="GET"){C=1}}var N=false;if(this.getParams()&&this.getParams().hijax){N=this.getParams().hijax}if(N&&E.getRequest()&&E.getRequest().callerObj&&E.getRequest().callerObj.tagName=="A"){A=E.getRequest().callerObj.href}var K=0;var H=this.getName();for(var Q in L){if(typeof (L[Q])!="function"){H+=L[Q]}}var J=function(S,R){var U=new Array();if(R){S.code=R.status;U.push(S)}if(typeof (S)=="string"){var T=S;S=new Object();S.message=T}if(S.name){S.code=S.name;U.push(S)}if(S.errors){U=S.errors}if(S.error){U.push(S.error)}if(U[0]["redirectUrl"]){window.location.replace(U[0]["redirectUrl"])}if(R&&C>=K){P()}else{E.onError(U)}};var G=this;var P=function(){return dojo["xhr"+mojo.toSentenceCase(D.toLowerCase())]({url:A,preventCache:(!B&&D=="GET"),handleAs:M?"json":"text",content:L,load:function(S,R){K++;if(R.handleAs=="json"){try{if(S.error||S.errors){J(S)}else{if(B){G._setCache(H,S,I)}E.onResponse(S,R.args.content)}}catch(T){J(T)}}else{if(B){G._setCache(H,S,I)}E.onResponse(S,R.args.content)}},error:function(S,R){K++;J(S,R.xhr)}})};var F;if(B){F=this._getCache(H)}if(F){E.onResponse(F.data,L)}else{var O=P()}return O},_setCache:function(A,D,C){var B=0;if(C>0){B=(new Date()).getTime()+(C*1000)}mojo.Model.set(A,{data:D,expiryTime:B})},_getCache:function(C){var A=null;if(mojo.Model.contains(C)){A=mojo.Model.get(C);var B=(new Date()).getTime();if(A.expiryTime>0&&B>A.expiryTime){mojo.Model.remove(C);A=null}}return A}});dojo.provide("extLib.trimpath.query");if(typeof (TrimPath)=="undefined"){TrimPath={}}(function(){var theEval=eval;var theString=String;var theArray=Array;if(TrimPath==null){TrimPath=new Object()}if(TrimPath.TEST==null){TrimPath.TEST=new Object()}var arrayUniq=function(arr){var result=[];for(var i=0;i<arr.length;i++){if(arrayInclude(result,arr[i])==false){result.push(arr[i])}}return result};var arrayInclude=function(arr,val){for(var j=0;j<arr.length;j++){if(arr[j]==val){return true}}return false};var arrayCompact=function(arr){var result=[];for(var i=0;i<arr.length;i++){if(arr[i]!=null){result.push(arr[i])}}return result};var simpleJson=function(fields,values){var json=["{"];for(var i=0;i<fields.length;i++){if(i>0){json.push(",")}json.push(fields[i]);json.push(":");if(values[i]){json.push('"');json.push(values[i].replace(/(["\\])/g,"\\$1").replace(/\r/g,"").replace(/\n/g,"\\n"));json.push('"')}else{json.push(null)}}json.push("}");return json.join("")};var hashKeys=function(object){var keys=[];for(var property in object){keys.push(property)}return keys};var hashValues=function(object){var values=[];for(var property in object){values.push(object[property])}return values};var strip=function(str){return str.replace(/^\s+/,"").replace(/\s+$/,"")};TrimPath.makeQueryLang_etc={};TrimPath.makeQueryLang_etc.Error=function(message,stmt){this.message=message;this.stmt=stmt};TrimPath.makeQueryLang_etc.Error.prototype.toString=function(){return("TrimPath query Error in "+(this.stmt!=null?this.stmt:"[unknown]")+": "+this.message)};var TODO=function(){throw"currently unsupported"};var USAGE=function(){throw"incorrect keyword usage"};var QueryLang=function(){};TrimPath.makeQueryLang=function(tableInfos,etc){if(etc==null){etc=TrimPath.makeQueryLang_etc}var aliasArr=[];var aliasReg=function(aliasKey,scope,obj){if(scope[aliasKey]!=null){throw new etc.Error("alias redefinition: "+aliasKey)}aliasArr.push({aliasKey:aliasKey,scope:scope,orig:scope[aliasKey]});scope[aliasKey]=obj;return obj};var queryLang=new QueryLang();var checkArgs=function(args,minLength,maxLength,name,typeCheck){args=cleanArray(args);if(minLength==null){minLength=1}if(args==null||args.length<minLength){throw new etc.Error("not enough arguments for "+name)}if(maxLength!=null&&args.length>maxLength){throw new etc.Error("too many arguments for "+name)}if(typeCheck!=null){for(var k in args){if(typeof (args[k])!="function"&&args[k] instanceof typeCheck==false){throw new etc.Error("wrong type for "+args[k]+" to "+name)}}}return args};var sql_date_to_js_date=function(data){if(typeof data=="string"&&data.match(/\d{4}-\d{1,2}-\d{1,2}/)){var dateArr=data.match(/\d{4}-\d{1,2}-\d{1,2}/)[0].split("-");var date=new Date(parseInt(dateArr[0],10),(parseInt(dateArr[1],10)-1),parseInt(dateArr[2],10));return date}return data};var data_insertion=function(table_info,field_name,data,column_ref){if(table_info[field_name]){var data=eval(data);if(table_info[field_name].type&&table_info[field_name].type=="Number"){data=Number(data,10)}else{if(table_info[field_name].type&&table_info[field_name].type=="Date"){data=sql_date_to_js_date(data)}}column_ref[field_name]=data}};var NodeType={select:function(args){var columns=[];var nodes={from:null,where:null,groupBy:null,having:null,orderBy:null,limit:null};for(var i=0;i<args.length;i++){var arg=args[i];var argIsNode=false;for(var nodeTypeName in nodes){if(arg instanceof NodeType[nodeTypeName]){if(nodes[nodeTypeName]!=null){throw new etc.Error("too many "+nodeTypeName.toUpperCase()+" clauses")}nodes[nodeTypeName]=arg;argIsNode=true;break}}if(argIsNode==false){columns.push(arg)}}columns=checkArgs(columns,1,null,"COLUMNS");if(nodes.from==null){throw new etc.Error("missing FROM clause")}var joinDriver=null;var joinFilter=null;var whereFilter=null;var columnConvertor=null;var orderByComparator=null;var groupByCalcValues=null;var havingFilter=null;var typeConverter=function(results){for(var i=0;i<results.length;i++){var result=results[i];for(var attr in result){var value=result[attr];if(value instanceof Date){results[i][attr]=dateToString(value)}}}};this.prepareFilter=function(){if(joinDriver==null){joinDriver=compileJoinDriver(nodes.from.tables)}if(joinFilter==null){joinFilter=compileFilter(compileFilterForJoin,nodes.from.tables)}if(whereFilter==null){whereFilter=compileFilter(compileFilterForWhere,nodes.from.tables,nodes.where!=null?nodes.where.exprs:null)}if(groupByCalcValues==null&&nodes.groupBy!=null){groupByCalcValues=compileGroupByCalcValues(nodes.from.tables,nodes.groupBy.exprs)}if(havingFilter==null&&nodes.having!=null){havingFilter=compileFilter(compileFilterForWhere,[],nodes.having.exprs,{aliasOnly:true})}if(columnConvertor==null){columnConvertor=compileColumnConvertor(nodes.from.tables,columns)}if(orderByComparator==null&&nodes.orderBy!=null){orderByComparator=compileOrderByComparator(nodes.orderBy.exprs)}};this.filter=function(dataTables,bindings,params){this.prepareFilter();if(bindings==null){bindings={}}if(params==null){params={}}var resultOfFromWhere=joinDriver(dataTables,joinFilter,whereFilter,bindings);if(groupByCalcValues!=null){for(var i=0;i<resultOfFromWhere.length;i++){resultOfFromWhere[i].groupByValues=groupByCalcValues.apply(null,resultOfFromWhere[i])}resultOfFromWhere.sort(groupByComparator)}if(params.return_reference){return resultOfFromWhere}var groupByAccum={};var groupByFuncs={SUM:function(key,val){groupByAccum[key]=zeroDefault(groupByAccum[key])+zeroDefault(val);return groupByAccum[key]},COUNT:function(key){groupByAccum[key]=zeroDefault(groupByAccum[key])+1;return groupByAccum[key]},AVG:function(key,val){return groupByFuncs.SUM(key,val)/groupByFuncs.COUNT("_COUNT"+key)}};var result=[],prevItem=null,currItem;for(var i=0;i<resultOfFromWhere.length;i++){currItem=resultOfFromWhere[i];currItem[0]=groupByFuncs;if(prevItem!=null&&groupByComparator(prevItem,currItem)!=0){if(havingFilter==null||havingFilter(prevItem.record)==true){result.push(prevItem.record)}groupByAccum={}}currItem.record=columnConvertor.apply(null,currItem.concat([params.with_table]));prevItem=currItem}if(prevItem!=null&&(havingFilter==null||havingFilter(prevItem.record)==true)){result.push(prevItem.record)}if(orderByComparator!=null){result.sort(orderByComparator)}if(nodes.limit!=null){if(nodes.limit.total==0){return[]}var start=(nodes.limit.offset!=null?nodes.limit.offset:0);result=result.slice(start,start+(nodes.limit.total>0?nodes.limit.total:result.length))}typeConverter(result);return result};setSSFunc(this,function(){var sqlArr=["SELECT",map(columns,toSqlWithAlias).join(", "),nodes.from.toSql()];if(nodes.where!=null){sqlArr.push(nodes.where.toSql())}if(nodes.groupBy!=null){sqlArr.push(nodes.groupBy.toSql())}if(nodes.having!=null){sqlArr.push(nodes.having.toSql())}if(nodes.orderBy!=null){sqlArr.push(nodes.orderBy.toSql())}if(nodes.limit!=null){sqlArr.push(nodes.limit.toSql())}return sqlArr.join(" ")});for(var i=0;i<aliasArr.length;i++){var aliasItem=aliasArr[i];aliasItem.scope[aliasItem.aliasKey]=aliasItem.orig}aliasArr=[]},insert:function(args){var table_info=args[0];var object=args[1];this.filter=function(dataTables,bindings){var table_name=table_info[".name"];if(!dataTables[table_name]){dataTables[table_name]=[]}dataTables[table_name].push({});for(var field_name in object){data_insertion(table_info,field_name,object[field_name],dataTables[table_name][dataTables[table_name].length-1])}return true};setSSFunc(this,function(){var sqlArr=["INSERT INTO",table_info.toSql(),"("+hashKeys(object).join(", ")+")","VALUES","("+hashValues(object).join(", ")+")"];return sqlArr.join(" ")})},update:function(args){var from_node=args[0];var assignments=args[1];var where_node=args[2];this.filter=function(dataTables,bindings){var table_info=from_node.tables[0];var resultOfFromWhere=queryLang.SELECT(from_node,where_node,1).filter(dataTables,null,{return_reference:true});for(var i=0;i<resultOfFromWhere.length;i++){var object=resultOfFromWhere[i][1];for(var field in assignments){var fieldSplit=field.split(".");var field_name=field;if(fieldSplit.length==2){field_name=fieldSplit[1]}data_insertion(table_info,field_name,assignments[field],object)}}return true};setSSFunc(this,function(){var sqlArr=["UPDATE",from_node.toSql()];var assignmentsArr=[];for(var attr in assignments){assignmentsArr.push(attr+"="+assignments[attr])}sqlArr.push(assignmentsArr.join(", "));if(where_node!=null){sqlArr.push(where_node.toSql())}return sqlArr.join(" ")})},destroy:function(args){var select_node=args[0];this.filter=function(dataTables,bindings){var resultOfFromWhere=select_node.filter(dataTables,null,{return_reference:true});for(var i=0;i<resultOfFromWhere.length;i++){var record=resultOfFromWhere[i];for(var j=1;j<record.length;j++){var object=record[j];for(var attr in object){delete object[attr]}}}for(var table_name in dataTables){var table=dataTables[table_name];for(var i=0;i<table.length;i++){if(hashKeys(table[i]).length==0){delete table[i]}}}for(var table_name in dataTables){dataTables[table_name]=arrayCompact(dataTables[table_name])}return true};setSSFunc(this,function(){var sqlArr=["DELETE",select_node.toSql()];return sqlArr.join(" ").replace(/SELECT\s/,"")})},from:function(tables){this.tables=checkArgs(tables,1,null,"FROM",NodeType.tableDef)},where:function(exprs){this.exprs=checkArgs(exprs,1,null,"WHERE",NodeType.expression)},groupBy:function(exprs){this.exprs=checkArgs(exprs,1,null,"GROUP_BY")},having:function(exprs){this.exprs=checkArgs(exprs,1,null,"HAVING",NodeType.expression)},orderBy:function(exprs){this.exprs=checkArgs(exprs,1,null,"ORDER_BY")},expression:function(args,name,opFix,sqlText,minArgs,maxArgs,jsText,alias){var theExpr=this;this.args=checkArgs(args,minArgs,maxArgs,name);this[".name"]=name;this[".alias"]=alias!=null?alias:name;this.opFix=opFix;this.sqlText=sqlText!=null?sqlText:this[".name"];this.jsText=jsText!=null?jsText:this.sqlText;this.AS=function(aliasArg){this[".alias"]=this.ASC[".alias"]=this.DESC[".alias"]=aliasArg;return aliasReg(aliasArg,queryLang,this)};this.ASC=setSSFunc({".name":name,".alias":theExpr[".alias"],order:"ASC"},function(){return theExpr[".alias"]+" ASC"});this.DESC=setSSFunc({".name":name,".alias":theExpr[".alias"],order:"DESC"},function(){return theExpr[".alias"]+" DESC"});this.COLLATE=TODO},aggregate:function(){NodeType.expression.apply(this,arguments)},limit:function(offset,total){if(total==null){this.total=cleanString(offset)}else{this.total=cleanString(total);this.offset=cleanString(offset)}},tableDef:function(name,columnInfos,alias){this[".name"]=name;this[".alias"]=alias!=null?alias:name;this[".allColumns"]=[];for(var columnName in columnInfos){this[columnName]=new NodeType.columnDef(columnName,columnInfos[columnName],this);this[".allColumns"].push(this[columnName])}setSSFunc(this,function(){return name});this.AS=function(alias){return aliasReg(alias,queryLang,new NodeType.tableDef(name,columnInfos,alias))};this.ALL=new NodeType.columnDef("*",null,this);this.ALL.AS=null},columnDef:function(name,columnInfo,tableDef,alias){var theColumnDef=this;this[".name"]=name;this[".alias"]=alias!=null?alias:name;this.tableDef=tableDef;setSSFunc(this,function(flags){if(flags!=null&&flags.aliasOnly==true){return this[".alias"]}return tableDef!=null?((tableDef[".alias"])+"."+name):name});this.AS=function(aliasArg){return aliasReg(aliasArg,queryLang,new NodeType.columnDef(name,columnInfo,tableDef,aliasArg))};if(columnInfo&&columnInfo.type){this.type=columnInfo.type}else{this.type="String"}this.ASC=setSSFunc({".name":name,".alias":theColumnDef[".alias"],tableDef:tableDef,order:"ASC"},function(){return theColumnDef.toSql()+" ASC"});this.DESC=setSSFunc({".name":name,".alias":theColumnDef[".alias"],tableDef:tableDef,order:"DESC"},function(){return theColumnDef.toSql()+" DESC"});this.COLLATE=TODO},join:function(joinType,tableDef){var theJoin=this;this.joinType=joinType;this.fromSeparator=" "+joinType+" JOIN ";for(var k in tableDef){this[k]=tableDef[k]}this.ON=function(){theJoin.ON_exprs=checkArgs(arguments,1,null,"ON");return theJoin};this.USING=function(){theJoin.USING_exprs=cleanArray(arguments,false);return theJoin};this.fromSuffix=function(){if(theJoin.ON_exprs!=null){return(" ON "+map(theJoin.ON_exprs,toSql).join(" AND "))}if(theJoin.USING_exprs!=null){return(" USING ("+theJoin.USING_exprs.join(", ")+")")}return""}}};var setSSFunc=function(obj,func){obj.toSql=obj.toJs=obj.toString=func;return obj};setSSFunc(NodeType.from.prototype,function(){var sqlArr=["FROM "];for(var i=0;i<this.tables.length;i++){if(i>0){var sep=this.tables[i].fromSeparator;if(sep==null){sep=", "}sqlArr.push(sep)}sqlArr.push(toSqlWithAlias(this.tables[i]));if(this.tables[i].fromSuffix!=null){sqlArr.push(this.tables[i].fromSuffix())}}return sqlArr.join("")});setSSFunc(NodeType.where.prototype,function(){return"WHERE "+map(this.exprs,toSql).join(" AND ")});setSSFunc(NodeType.orderBy.prototype,function(){return"ORDER BY "+map(this.exprs,toSql).join(", ")});setSSFunc(NodeType.groupBy.prototype,function(){return"GROUP BY "+map(this.exprs,toSql).join(", ")});setSSFunc(NodeType.having.prototype,function(){return"HAVING "+map(this.exprs,toSql,{aliasOnly:true}).join(" AND ")});setSSFunc(NodeType.limit.prototype,function(){return"LIMIT "+(this.total<0?"ALL":this.total)+(this.offset!=null?(" OFFSET "+this.offset):"")});var makeToFunc=function(toFunc,opText){return function(flags){if(flags!=null&&flags.aliasOnly==true&&this[".alias"]!=this[".name"]){return this[".alias"]}if(this.opFix<0){return this[opText]+" ("+map(this.args,toFunc,flags).join(") "+this[opText]+" (")+")"}if(this.opFix>0){return"("+map(this.args,toFunc,flags).join(") "+this[opText]+" (")+") "+this[opText]}return"("+map(this.args,toFunc,flags).join(") "+this[opText]+" (")+")"}};NodeType.expression.prototype.toSql=makeToFunc(toSql,"sqlText");NodeType.expression.prototype.toJs=makeToFunc(toJs,"jsText");NodeType.aggregate.prototype=new NodeType.expression([],null,null,null,0);NodeType.aggregate.prototype.toJs=function(flags){if(flags!=null&&flags.aliasOnly==true&&this[".alias"]!=this[".name"]){return this[".alias"]}return this.jsText+" ('"+this[".alias"]+"', ("+map(this.args,toJs).join("), (")+"))"};NodeType.join.prototype=new NodeType.tableDef();NodeType.whereSql=function(sql){this.exprs=[new NodeType.rawSql(sql)]};NodeType.whereSql.prototype=new NodeType.where([new NodeType.expression([0],null,0,null,0,null,null,null)]);NodeType.havingSql=function(sql){this.exprs=[new NodeType.rawSql(sql)]};NodeType.havingSql.prototype=new NodeType.having([new NodeType.expression([0],null,0,null,0,null,null,null)]);NodeType.rawSql=function(sql){this.sql=sql};NodeType.rawSql.prototype.toSql=function(flags){return this.sql};NodeType.rawSql.prototype.toJs=function(flags){var js=this.sql;js=js.replace(/ AND /g," && ");js=js.replace(/ OR /g," || ");js=js.replace(/ = /g," == ");js=js.replace(/ IS NULL/g," == null");js=js.replace(/ IS NOT NULL/g," != null");js=js.replace(/ NOT /g," ! ");var LIKE_regex=/(\S+)\sLIKE\s'(\S+)'/g;var matchArr;while(matchArr=LIKE_regex.exec(js)){matchArr[2]=matchArr[2].replace(/%/,".*");js=js.replace(LIKE_regex,"$1.match(/"+matchArr[2]+"/)")}var DATE_regex=/'(\d{4})-(\d{1,2})-(\d{1,2})'/g;while(matchArr=DATE_regex.exec(js)){var dateArr=[parseInt(matchArr[1],10).toString(),(parseInt(matchArr[2],10)-1).toString(),parseInt(matchArr[3],10).toString()];var replacement="(new Date("+dateArr.join(", ")+").valueOf())";js=js.replace(matchArr[0],replacement)}return js};var keywords={INSERT:function(){return new NodeType.insert(arguments)},UPDATE:function(){return new NodeType.update(arguments)},DESTROY:function(){return new NodeType.destroy(arguments)},SELECT_ALL:function(){return new NodeType.select(arguments)},SELECT_DISTINCT:TODO,ALL:USAGE,FROM:function(){return new NodeType.from(arguments)},WHERE:function(){return new NodeType.where(arguments)},AND:function(){return new NodeType.expression(arguments,"AND",0,null,1,null,"&&")},OR:function(){return new NodeType.expression(arguments,"OR",0,null,1,null,"||")},NOT:function(){return new NodeType.expression(arguments,"NOT",-1,null,1,1,"!")},EQ:function(){return new NodeType.expression(arguments,"EQ",0,"=",2,2,"==")},NEQ:function(){return new NodeType.expression(arguments,"NEQ",0,"!=",2,2)},LT:function(){return new NodeType.expression(arguments,"LT",0,"<",2,2)},GT:function(){return new NodeType.expression(arguments,"GT",0,">",2,2)},LTE:function(){return new NodeType.expression(arguments,"LTE",0,"<=",2,2)},GTE:function(){return new NodeType.expression(arguments,"GTE",0,">=",2,2)},IS_NULL:function(){return new NodeType.expression(arguments,"IS_NULL",1,"IS NULL",1,1,"== null")},IS_NOT_NULL:function(){return new NodeType.expression(arguments,"IS_NOT_NULL",1,"IS NOT NULL",1,1,"!= null")},ADD:function(){return new NodeType.expression(arguments,"ADD",0,"+",2,null)},SUBTRACT:function(){return new NodeType.expression(arguments,"SUBTRACT",0,"-",2,null)},NEGATE:function(){return new NodeType.expression(arguments,"NEGATE",-1,"-",1,1)},MULTIPLY:function(){return new NodeType.expression(arguments,"MULTIPLY",0,"*",2,null)},DIVIDE:function(){return new NodeType.expression(arguments,"DIVIDE",0,"/",2,null)},PAREN:function(){return new NodeType.expression(arguments,"PAREN",0,"",1,1)},LIKE:function(){return new NodeType.expression(arguments,"LIKE",0,"LIKE",2,2,"match")},BETWEEN:TODO,AVG:function(){return new NodeType.aggregate(arguments,"AVG",-1,null,1,1)},AVG_ALL:TODO,AVG_DISTINCT:TODO,SUM:function(){return new NodeType.aggregate(arguments,"SUM",-1,null,1,1)},SUM_ALL:TODO,SUM_DISTINCT:TODO,COUNT:function(){return new NodeType.aggregate(arguments,"COUNT",-1,null,1,1)},COUNT_ALL:TODO,COUNT_DISTINCT:TODO,AS:USAGE,IN:TODO,UNION:TODO,UNION_ALL:TODO,EXCEPT:TODO,EXCEPT_ALL:TODO,INTERSECT:TODO,INTERSECT_ALL:TODO,CROSS_JOIN:function(tableDef){return tableDef},INNER_JOIN:function(tableDef){return new NodeType.join("INNER",tableDef)},LEFT_OUTER_JOIN:function(tableDef){return new NodeType.join("LEFT OUTER",tableDef)},RIGHT_OUTER_JOIN:TODO,FULL_OUTER_JOIN:TODO,ON:USAGE,USING:USAGE,GROUP_BY:function(){return new NodeType.groupBy(arguments)},HAVING:function(){return new NodeType.having(arguments)},ORDER_BY:function(){return new NodeType.orderBy(arguments)},LIMIT:function(offset,total){return new NodeType.limit(offset,total)},LIMIT_ALL:function(offset){return queryLang.LIMIT(-1,offset)},OFFSET:USAGE,ANY_SELECT:TODO,ALL_SELECT:TODO,EXISTS:TODO,WHERE_SQL:function(sql){return new NodeType.whereSql(sql)},HAVING_SQL:function(sql){return new NodeType.havingSql(sql)}};keywords.SELECT=keywords.SELECT_ALL;for(var k in keywords){queryLang[k]=keywords[k]}for(var tableName in tableInfos){queryLang[tableName]=new NodeType.tableDef(tableName,tableInfos[tableName])}return queryLang};var compileJoinDriver=function(tables){var funcText=["var TrimPath_query_tmpJD = function(dataTables, joinFilter, whereFilter, bindings) {","var result = [], filterArgs = [ bindings ];"];for(var i=0;i<tables.length;i++){funcText.push("var T"+i+" = dataTables['"+tables[i][".name"]+"'] || [];")}for(var i=0;i<tables.length;i++){funcText.push("for (var t"+i+" = 0; t"+i+" < T"+i+".length; t"+i+"++) {");funcText.push("var resultLength"+i+" = result.length;");funcText.push("filterArgs["+(i+1)+"] = T"+i+"[t"+i+"];")}funcText.push("if ((joinFilter == null || joinFilter.apply(null, filterArgs) == true) && ");funcText.push("    (whereFilter == null || whereFilter.apply(null, filterArgs) == true))");funcText.push("result.push(filterArgs.slice(0));");for(var i=tables.length-1;i>=0;i--){funcText.push("}");if(i>=1&&tables[i].joinType=="LEFT OUTER"){funcText.push("if (resultLength"+(i-1)+" == result.length) {");for(var j=i;j<tables.length;j++){funcText.push("filterArgs["+(j+1)+"] = ")}funcText.push("{}; if (whereFilter == null || whereFilter.apply(null, filterArgs) == true) result.push(filterArgs.slice(0)); }")}}funcText.push("return result; }; TrimPath_query_tmpJD");return theEval(funcText.join(""))};var compileFilter=function(bodyFunc,tables,whereExpressions,flags){var funcText=["var TrimPath_query_tmpWF = function(_BINDINGS"];for(var i=0;i<tables.length;i++){funcText.push(", "+tables[i][".alias"])}funcText.push("){ with(_BINDINGS) {");bodyFunc(funcText,tables,whereExpressions,flags);funcText.push("return true; }}; TrimPath_query_tmpWF");return theEval(funcText.join(""))};var compileFilterForJoin=function(funcText,tables,whereExpressions,flags){for(var i=0;i<tables.length;i++){if(tables[i].joinType!=null){if(tables[i].ON_exprs!=null||tables[i].USING_exprs!=null){funcText.push("if (!(");if(tables[i].ON_exprs!=null&&tables[i].ON_exprs[0].exprs!=null){funcText.push(tables[i].ON_exprs[0].exprs[0].toJs())}else{if(tables[i].ON_exprs!=null){funcText.push(map(tables[i].ON_exprs,toJs).join(" && "))}}if(tables[i].USING_exprs!=null){funcText.push(map(tables[i].USING_exprs,function(col){return"("+tables[i-1][".alias"]+"."+col+" == "+tables[i][".alias"]+"."+col+")"}).join(" && "))}funcText.push(")) return false;")}}}};var compileFilterForWhere=function(funcText,tables,whereExpressions,flags){if(whereExpressions!=null){funcText.push("if (!((");for(var i=0;i<whereExpressions.length;i++){if(i>0){funcText.push(") && (")}funcText.push(toJs(whereExpressions[i],flags))}funcText.push("))) return false;")}};var compileColumnConvertor=function(tables,columnExpressions){var funcText=["var TrimPath_query_tmpCC = function(_BINDINGS, "];var table_aliases=[];for(var i=0;i<tables.length;i++){table_aliases.push(tables[i][".alias"])}funcText.push(arrayUniq(table_aliases).join(", "));funcText.push(", with_table){ with(_BINDINGS) {");funcText.push("var _RESULT = {};");funcText.push("if(with_table) {");compileColumnConvertorHelper(funcText,columnExpressions,true);funcText.push("} else {");compileColumnConvertorHelper(funcText,columnExpressions,false);funcText.push("}");funcText.push("return _RESULT; }}; TrimPath_query_tmpCC");return theEval(funcText.join(""))};var test=function(stuff){var i};var compileColumnConvertorHelper=function(funcText,columnExpressions,with_table){for(var i=0;i<columnExpressions.length;i++){var columnExpression=columnExpressions[i];if(columnExpression[".name"]=="*"){compileColumnConvertorHelper(funcText,columnExpression.tableDef[".allColumns"],with_table)}else{funcText.push("_RESULT['");if(with_table==true){funcText.push(columnExpression.toString())}else{funcText.push(columnExpression[".alias"])}funcText.push("'] = (");funcText.push(toJs(columnExpression));funcText.push(");")}}};var dateToString=function(date){if(typeof date=="object"){return[date.getFullYear(),"-",(date.getMonth()+1),"-",date.getDate()].join("")}if(date==null){return null}};var compileOrderByComparator=function(orderByExpressions){var funcText=["var TrimPath_query_tmpOC = function(A, B) { var a, b; "];for(var i=0;i<orderByExpressions.length;i++){var orderByExpression=orderByExpressions[i];if(orderByExpression.tableDef){funcText.push("a = A['"+orderByExpression[".alias"]+"'] || A['"+orderByExpression.tableDef[".alias"]+"."+orderByExpression[".alias"]+"'] || '';");funcText.push("b = B['"+orderByExpression[".alias"]+"'] || B['"+orderByExpression.tableDef[".alias"]+"."+orderByExpression[".alias"]+"'] || '';")}else{funcText.push("a = A['"+orderByExpression[".alias"]+"'] || '';");funcText.push("b = B['"+orderByExpression[".alias"]+"'] || '';")}var sign=(orderByExpression.order=="DESC"?-1:1);funcText.push("if (a.valueOf() < b.valueOf()) return "+(sign*-1)+";");funcText.push("if (a.valueOf() > b.valueOf()) return "+(sign*1)+";")}funcText.push("return 0; }; TrimPath_query_tmpOC");return theEval(funcText.join(""))};var compileGroupByCalcValues=function(tables,groupByExpressions){var funcText=["var TrimPath_query_tmpGC = function(_BINDINGS"];for(var i=0;i<tables.length;i++){funcText.push(", "+tables[i][".alias"])}funcText.push("){ var _RESULT = [];");for(var i=0;i<groupByExpressions.length;i++){funcText.push("_RESULT.push(");funcText.push(toJs(groupByExpressions[i]));funcText.push(");")}funcText.push("return _RESULT; }; TrimPath_query_tmpGC");return theEval(funcText.join(""))};var groupByComparator=function(a,b){return arrayCompare(a.groupByValues,b.groupByValues)};var arrayCompare=function(x,y){if(x==null||y==null){return -1}for(var i=0;i<x.length&&i<y.length;i++){if(x[i]<y[i]){return -1}if(x[i]>y[i]){return 1}}return 0};var toSqlWithAlias=function(obj,flags){var res=toSql(obj,flags);if(obj[".alias"]!=null&&obj[".alias"]!=obj[".name"]){return res+" AS "+obj[".alias"]}return res};var toSql=function(obj,flags){return toX(obj,"toSql",flags)};var toJs=function(obj,flags){return toX(obj,"toJs",flags)};var toX=function(obj,funcName,flags){if(typeof (obj)=="object"&&obj[funcName]!=null){return obj[funcName].call(obj,flags)}return theString(obj)};var zeroDefault=function(x){return(x!=null?x:0)};var map=function(arr,func,arg2){for(var result=[],i=0;i<arr.length;i++){result.push(func(arr[i],arg2))}return result};var cleanArray=function(src,quotes){for(var result=[],i=0;i<src.length;i++){result.push(cleanString(src[i],quotes))}return result};var cleanString=TrimPath.TEST.cleanString=function(src,quotes){if(src instanceof theString||typeof (src)=="string"){src=theString(src).replace(/\\/g,"\\\\").replace(/'/g,"\\'");if(quotes!=false){src="'"+src+"'"}}return src};var findClause=function(str,regexp){var clauseEnd=str.search(regexp);if(clauseEnd<0){clauseEnd=str.length}return str.substring(0,clauseEnd)};QueryLang.prototype.parseSQL=function(sqlQueryIn,paramsArr){var sqlQuery=sqlQueryIn.replace(/\n/g," ").replace(/\r/g,"");if(paramsArr!=null){if(paramsArr instanceof theArray==false){paramsArr=[paramsArr]}var sqlParts=sqlQuery.split(" ?");for(var i=0;i<sqlParts.length-1;i++){sqlParts[i]=sqlParts[i]+" "+cleanString(paramsArr[i],true)}sqlQuery=sqlParts.join("")}sqlQuery=sqlQuery.replace(/ AS ([_a-zA-z0-9]+)/g,".AS('$1')");var err=function(errMsg){throw ("[ERROR: "+errMsg+" in query: "+sqlQueryIn+"]")};var query_type=sqlQuery.split(/\s+/)[0];if(query_type=="DELETE"){query_type="DESTROY"}if(!arrayInclude(["SELECT","DESTROY","UPDATE","INSERT"],query_type)){err("not a valid query type")}var strip_whitespace=function(str){return str.replace(/\s+/g,"")};if(query_type=="SELECT"||query_type=="DESTROY"){var fromSplit=sqlQuery.substring(7).split(" FROM ");if(fromSplit.length!=2){err("missing a FROM clause")}var columnsClause=fromSplit[0].replace(/\.\*/g,".ALL");var remaining=fromSplit[1];var fromClause=findClause(remaining,/\sWHERE\s|\sGROUP BY\s|\sHAVING\s|\sORDER BY\s|\sLIMIT/);var fromTableClause=findClause(fromClause,/\sLEFT OUTER JOIN\s/);var fromTables=strip_whitespace(fromTableClause).split(",");remaining=remaining.substring(fromClause.length);var fromClauseSplit=fromClause.split(" LEFT OUTER JOIN ");var fromClauseParts=[fromClauseSplit[0]];var leftJoinComponents;for(var i=1;i<fromClauseSplit.length;i++){leftJoinComponents=/(\w+)\sON\s(.+)/.exec(fromClauseSplit[i]);fromTables.push(leftJoinComponents[1]);fromClauseParts.push("("+leftJoinComponents[1]+').ON(WHERE_SQL("'+leftJoinComponents[2]+'"))')}fromClause=fromClauseParts.join(", LEFT_OUTER_JOIN");if(strip_whitespace(columnsClause)=="*"){var new_columns=[];for(var i=0;i<fromTables.length;i++){new_columns.push(fromTables[i]+".ALL")}columnsClause=columnsClause.replace(/\*/,new_columns.join(", "))}var whereClause=findClause(remaining,/\sGROUP BY\s|\sHAVING\s|\sORDER BY\s|\sLIMIT/);remaining=remaining.substring(whereClause.length);var groupByClause=findClause(remaining,/\sHAVING\s|\sORDER BY\s|\sLIMIT /);remaining=remaining.substring(groupByClause.length);var havingClause=findClause(remaining,/\sORDER BY\s|\sLIMIT /);remaining=remaining.substring(havingClause.length);var orderByClause=findClause(remaining,/\sLIMIT /).replace(/\sASC/g,".ASC").replace(/\sDESC/g,".DESC");remaining=remaining.substring(orderByClause.length);var limitClause=remaining;var tql=["SELECT(FROM(",fromClause,"), ",columnsClause];if(whereClause.length>0){tql.push(', WHERE_SQL("'+whereClause.substring(7)+'")')}if(groupByClause.length>0){tql.push(", GROUP_BY("+groupByClause.substring(10)+")")}if(havingClause.length>0){tql.push(', HAVING_SQL("'+havingClause.substring(8)+'")')}if(orderByClause.length>0){tql.push(", ORDER_BY("+orderByClause.substring(10)+")")}if(limitClause.length>0){tql.push(", LIMIT("+limitClause.substring(7)+")")}tql.push(")")}else{if(query_type=="INSERT"){var intoSplit=sqlQuery.substring(6).split(" INTO ");if(intoSplit.length!=2){err("missing an INTO clause")}var insertion_regex=/^\s*(\w+)\s*\((.+)\)\s+VALUES\s+\((.+)\)/;var parsed_sql=intoSplit[1].match(insertion_regex);var table_name=parsed_sql[1];var fields=strip_whitespace(parsed_sql[2]).split(",");var values=parsed_sql[3].split(",");if(fields.length!=values.length){err("values and fields must have same number of elements")}tql=["INSERT(",table_name,",",simpleJson(fields,values),")"]}else{if(query_type=="UPDATE"){var setSplit=sqlQuery.substring(7).split(" SET ");if(setSplit.length!=2){err("missing a SET clause")}var fromClause=setSplit[0];var remaining=setSplit[1];var assignmentClause=findClause(remaining,/\sWHERE\s/);remaining=remaining.substring(assignmentClause.length);var whereClause=remaining;var assignmentArray=assignmentClause.split(",");var fields=[];var values=[];for(var i=0;i<assignmentArray.length;i++){var components=assignmentArray[i].split("=");fields.push(strip(components[0]));values.push(strip(components[1]))}var update_regex=/^UPDATE\s+(\w+)\s+SET\s+(\w+\s*=\s*\w+)/;var parsed_sql=sqlQuery.match(update_regex);var tql=["UPDATE(FROM(",fromClause,"), ",simpleJson(fields,values)];tql.push(', WHERE_SQL("'+whereClause.substring(7)+'")');tql.push(")")}}}if(query_type=="DESTROY"){tql.unshift("DESTROY(");tql.push(")")}with(this){return eval(tql.join(""))}}})();dojo.provide("extLib.trimpath.template");if(typeof (TrimPath)=="undefined"){TrimPath={}}(function(){if(TrimPath==null){TrimPath=new Object()}if(TrimPath.evalEx==null){TrimPath.evalEx=function(src){return eval(src)}}var UNDEFINED;if(Array.prototype.pop==null){Array.prototype.pop=function(){if(this.length===0){return UNDEFINED}return this[--this.length]}}if(Array.prototype.push==null){Array.prototype.push=function(){for(var i=0;i<arguments.length;++i){this[this.length]=arguments[i]}return this.length}}TrimPath.parseTemplate=function(tmplContent,optTmplName,optEtc){if(optEtc==null){optEtc=TrimPath.parseTemplate_etc}var funcSrc=parse(tmplContent,optTmplName,optEtc);var func=TrimPath.evalEx(funcSrc,optTmplName,1);if(func!=null){return new optEtc.Template(optTmplName,tmplContent,funcSrc,func,optEtc)}return null};try{String.prototype.process=function(context,optFlags){var template=TrimPath.parseTemplate(this,null);if(template!=null){return template.process(context,optFlags)}return this}}catch(e){}TrimPath.parseTemplate_etc={};TrimPath.parseTemplate_etc.statementTag="forelse|for|if|elseif|else|var|macro";TrimPath.parseTemplate_etc.statementDef={"if":{delta:1,prefix:"if (",suffix:") {",paramMin:1},"else":{delta:0,prefix:"} else {"},"elseif":{delta:0,prefix:"} else if (",suffix:") {",paramDefault:"true"},"/if":{delta:-1,prefix:"}"},"for":{delta:1,paramMin:3,prefixFunc:function(stmtParts,state,tmplName,etc){if(stmtParts[2]!="in"){throw new etc.ParseError(tmplName,state.line,"bad for loop statement: "+stmtParts.join(" "))}var iterVar=stmtParts[1];var listVar="__LIST__"+iterVar;return["var ",listVar," = ",stmtParts[3],";","var __LENGTH_STACK__;","if (typeof(__LENGTH_STACK__) == 'undefined' || !__LENGTH_STACK__.length) __LENGTH_STACK__ = new Array();","__LENGTH_STACK__[__LENGTH_STACK__.length] = 0;","if ((",listVar,") != null) { ","var ",iterVar,"_ct = 0;","for (var ",iterVar,"_index in ",listVar,") { ",iterVar,"_ct++;","if (typeof(",listVar,"[",iterVar,"_index]) == 'function') {continue;}","__LENGTH_STACK__[__LENGTH_STACK__.length - 1]++;","var ",iterVar," = ",listVar,"[",iterVar,"_index];"].join("")}},"forelse":{delta:0,prefix:"} } if (__LENGTH_STACK__[__LENGTH_STACK__.length - 1] == 0) { if (",suffix:") {",paramDefault:"true"},"/for":{delta:-1,prefix:"} }; delete __LENGTH_STACK__[__LENGTH_STACK__.length - 1];"},"var":{delta:0,prefix:"var ",suffix:";"},"macro":{delta:1,prefixFunc:function(stmtParts,state,tmplName,etc){var macroName=stmtParts[1].split("(")[0];return["var ",macroName," = function",stmtParts.slice(1).join(" ").substring(macroName.length),"{ var _OUT_arr = []; var _OUT = { write: function(m) { if (m) _OUT_arr.push(m); } }; "].join("")}},"/macro":{delta:-1,prefix:" return _OUT_arr.join(''); };"}};TrimPath.parseTemplate_etc.modifierDef={"eat":function(v){return""},"escape":function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},"capitalize":function(s){return String(s).toUpperCase()},"default":function(s,d){return s!=null?s:d}};TrimPath.parseTemplate_etc.modifierDef.h=TrimPath.parseTemplate_etc.modifierDef.escape;TrimPath.parseTemplate_etc.Template=function(tmplName,tmplContent,funcSrc,func,etc){this.process=function(context,flags){if(context==null){context={}}if(context._MODIFIERS==null){context._MODIFIERS={}}if(context.defined==null){context.defined=function(str){return(context[str]!=undefined)}}for(var k in etc.modifierDef){if(context._MODIFIERS[k]==null){context._MODIFIERS[k]=etc.modifierDef[k]}}if(flags==null){flags={}}var resultArr=[];var resultOut={write:function(m){resultArr.push(m)}};try{func(resultOut,context,flags)}catch(e){if(flags.throwExceptions==true){throw e}var result=new String(resultArr.join("")+"[ERROR: "+e.toString()+(e.message?"; "+e.message:"")+"]");result["exception"]=e;return result}return resultArr.join("")};this.name=tmplName;this.source=tmplContent;this.sourceFunc=funcSrc;this.toString=function(){return"TrimPath.Template ["+tmplName+"]"}};TrimPath.parseTemplate_etc.ParseError=function(name,line,message){this.name=name;this.line=line;this.message=message};TrimPath.parseTemplate_etc.ParseError.prototype.toString=function(){return("TrimPath template ParseError in "+this.name+": line "+this.line+", "+this.message)};var parse=function(body,tmplName,etc){body=cleanWhiteSpace(body);var funcText=["var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {"];var state={stack:[],line:1};var endStmtPrev=-1;while(endStmtPrev+1<body.length){var begStmt=endStmtPrev;begStmt=body.indexOf("{",begStmt+1);while(begStmt>=0){var endStmt=body.indexOf("}",begStmt+1);var stmt=body.substring(begStmt,endStmt);var blockrx=stmt.match(/^\{(cdata|minify|eval)/);if(blockrx){var blockType=blockrx[1];var blockMarkerBeg=begStmt+blockType.length+1;var blockMarkerEnd=body.indexOf("}",blockMarkerBeg);if(blockMarkerEnd>=0){var blockMarker;if(blockMarkerEnd-blockMarkerBeg<=0){blockMarker="{/"+blockType+"}"}else{blockMarker=body.substring(blockMarkerBeg+1,blockMarkerEnd)}var blockEnd=body.indexOf(blockMarker,blockMarkerEnd+1);if(blockEnd>=0){emitSectionText(body.substring(endStmtPrev+1,begStmt),funcText);var blockText=body.substring(blockMarkerEnd+1,blockEnd);if(blockType=="cdata"){emitText(blockText,funcText)}else{if(blockType=="minify"){emitText(scrubWhiteSpace(blockText),funcText)}else{if(blockType=="eval"){if(blockText!=null&&blockText.length>0){funcText.push("_OUT.write( (function() { "+blockText+" })() );")}}}}begStmt=endStmtPrev=blockEnd+blockMarker.length-1}}}else{if(body.charAt(begStmt-1)!="$"&&body.charAt(begStmt-1)!="\\"){var offset=(body.charAt(begStmt+1)=="/"?2:1);if(body.substring(begStmt+offset,begStmt+10+offset).search(TrimPath.parseTemplate_etc.statementTag)==0){break}}}begStmt=body.indexOf("{",begStmt+1)}if(begStmt<0){break}var endStmt=body.indexOf("}",begStmt+1);if(endStmt<0){break}emitSectionText(body.substring(endStmtPrev+1,begStmt),funcText);emitStatement(body.substring(begStmt,endStmt+1),state,funcText,tmplName,etc);endStmtPrev=endStmt}emitSectionText(body.substring(endStmtPrev+1),funcText);if(state.stack.length!=0){throw new etc.ParseError(tmplName,state.line,"unclosed, unmatched statement(s): "+state.stack.join(","))}funcText.push("}}; TrimPath_Template_TEMP");return funcText.join("")};var emitStatement=function(stmtStr,state,funcText,tmplName,etc){var parts=stmtStr.slice(1,-1).split(" ");var stmt=etc.statementDef[parts[0]];if(stmt==null){emitSectionText(stmtStr,funcText);return }if(stmt.delta<0){if(state.stack.length<=0){throw new etc.ParseError(tmplName,state.line,"close tag does not match any previous statement: "+stmtStr)}state.stack.pop()}if(stmt.delta>0){state.stack.push(stmtStr)}if(stmt.paramMin!=null&&stmt.paramMin>=parts.length){throw new etc.ParseError(tmplName,state.line,"statement needs more parameters: "+stmtStr)}if(stmt.prefixFunc!=null){funcText.push(stmt.prefixFunc(parts,state,tmplName,etc))}else{funcText.push(stmt.prefix)}if(stmt.suffix!=null){if(parts.length<=1){if(stmt.paramDefault!=null){funcText.push(stmt.paramDefault)}}else{for(var i=1;i<parts.length;i++){if(i>1){funcText.push(" ")}funcText.push(parts[i])}}funcText.push(stmt.suffix)}};var emitSectionText=function(text,funcText){if(text.length<=0){return }var nlPrefix=0;var nlSuffix=text.length-1;while(nlPrefix<text.length&&(text.charAt(nlPrefix)=="\n")){nlPrefix++}while(nlSuffix>=0&&(text.charAt(nlSuffix)==" "||text.charAt(nlSuffix)=="\t")){nlSuffix--}if(nlSuffix<nlPrefix){nlSuffix=nlPrefix}if(nlPrefix>0){funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');var s=text.substring(0,nlPrefix).replace("\n","\\n");if(s.charAt(s.length-1)=="\n"){s=s.substring(0,s.length-1)}funcText.push(s);funcText.push('");')}var lines=text.substring(nlPrefix,nlSuffix+1).split("\n");for(var i=0;i<lines.length;i++){emitSectionTextLine(lines[i],funcText);if(i<lines.length-1){funcText.push('_OUT.write("\\n");\n')}}if(nlSuffix+1<text.length){funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');var s=text.substring(nlSuffix+1).replace("\n","\\n");if(s.charAt(s.length-1)=="\n"){s=s.substring(0,s.length-1)}funcText.push(s);funcText.push('");')}};var emitSectionTextLine=function(line,funcText){var endMarkPrev="}";var endExprPrev=-1;while(endExprPrev+endMarkPrev.length<line.length){var begMark="${",endMark="}";var begExpr=line.indexOf(begMark,endExprPrev+endMarkPrev.length);if(begExpr<0){break}if(line.charAt(begExpr+2)=="%"){begMark="${%";endMark="%}"}var endExpr=line.indexOf(endMark,begExpr+begMark.length);if(endExpr<0){break}emitText(line.substring(endExprPrev+endMarkPrev.length,begExpr),funcText);var exprArr=line.substring(begExpr+begMark.length,endExpr).replace(/\|\|/g,"#@@#").split("|");for(var k in exprArr){if(exprArr[k].replace){exprArr[k]=exprArr[k].replace(/#@@#/g,"||")}}funcText.push("_OUT.write(");emitExpression(exprArr,exprArr.length-1,funcText);funcText.push(");");endExprPrev=endExpr;endMarkPrev=endMark}emitText(line.substring(endExprPrev+endMarkPrev.length),funcText)};var emitText=function(text,funcText){if(text==null||text.length<=0){return }text=text.replace(/\\/g,"\\\\");text=text.replace(/\n/g,"\\n");text=text.replace(/"/g,'\\"');funcText.push('_OUT.write("');funcText.push(text);funcText.push('");')};var emitExpression=function(exprArr,index,funcText){var expr=exprArr[index];if(index<=0){funcText.push(expr);return }var parts=expr.split(":");funcText.push('_MODIFIERS["');funcText.push(parts[0]);funcText.push('"](');emitExpression(exprArr,index-1,funcText);if(parts.length>1){funcText.push(",");funcText.push(parts[1])}funcText.push(")")};var cleanWhiteSpace=function(result){result=result.replace(/\t/g,"    ");result=result.replace(/\r\n/g,"\n");result=result.replace(/\r/g,"\n");result=result.replace(/^(\s*\S*(\s+\S+)*)\s*$/,"$1");return result};var scrubWhiteSpace=function(result){result=result.replace(/^\s+/g,"");result=result.replace(/\s+$/g,"");result=result.replace(/\s+/g," ");result=result.replace(/^(\s*\S*(\s+\S+)*)\s*$/,"$1");return result};TrimPath.parseDOMTemplate=function(elementId,optDocument,optEtc){if(optDocument==null){optDocument=document}var element=optDocument.getElementById(elementId);var content=element.value;if(content==null){content=element.innerHTML}content=content.replace(/&lt;/g,"<").replace(/&gt;/g,">");return TrimPath.parseTemplate(content,elementId,optEtc)};TrimPath.processDOMTemplate=function(elementId,context,optFlags,optDocument,optEtc){return TrimPath.parseDOMTemplate(elementId,optDocument,optEtc).process(context,optFlags)}})()

//MooTools, My Object Oriented Javascript Tools. Copyright (c) 2006-2007 Valerio Proietti, <http://mad4milk.net>, MIT Style License.

var MooTools={version:"1.11"};function $defined(A){return(A!=undefined);}function $type(B){if(!$defined(B)){return false;}if(B.htmlElement){return"element";
}var A=typeof B;if(A=="object"&&B.nodeName){switch(B.nodeType){case 1:return"element";case 3:return(/\S/).test(B.nodeValue)?"textnode":"whitespace";}}if(A=="object"||A=="function"){switch(B.constructor){case Array:return"array";
case RegExp:return"regexp";case Class:return"class";}if(typeof B.length=="number"){if(B.item){return"collection";}if(B.callee){return"arguments";}}}return A;
}function $merge(){var C={};for(var B=0;B<arguments.length;B++){for(var E in arguments[B]){var A=arguments[B][E];var D=C[E];if(D&&$type(A)=="object"&&$type(D)=="object"){C[E]=$merge(D,A);
}else{C[E]=A;}}}return C;}var $extend=function(){var A=arguments;if(!A[1]){A=[this,A[0]];}for(var B in A[1]){A[0][B]=A[1][B];}return A[0];};var $native=function(){for(var B=0,A=arguments.length;
B<A;B++){arguments[B].extend=function(C){for(var D in C){if(!this.prototype[D]){this.prototype[D]=C[D];}if(!this[D]){this[D]=$native.generic(D);}}};}};
$native.generic=function(A){return function(B){return this.prototype[A].apply(B,Array.prototype.slice.call(arguments,1));};};$native(Function,Array,String,Number);
function $chk(A){return !!(A||A===0);}function $pick(B,A){return $defined(B)?B:A;}function $random(B,A){return Math.floor(Math.random()*(A-B+1)+B);}function $time(){return new Date().getTime();
}function $clear(A){clearTimeout(A);clearInterval(A);return null;}var Abstract=function(A){A=A||{};A.extend=$extend;return A;};var Window=new Abstract(window);
var Document=new Abstract(document);document.head=document.getElementsByTagName("head")[0];window.xpath=!!(document.evaluate);if(window.ActiveXObject){window.ie=window[window.XMLHttpRequest?"ie7":"ie6"]=true;
}else{if(document.childNodes&&!document.all&&!navigator.taintEnabled){window.webkit=window[window.xpath?"webkit420":"webkit419"]=true;}else{if(document.getBoxObjectFor!=null){window.gecko=true;
}}}window.khtml=window.webkit;Object.extend=$extend;if(typeof HTMLElement=="undefined"){var HTMLElement=function(){};if(window.webkit){document.createElement("iframe");
}HTMLElement.prototype=(window.webkit)?window["[[DOMElement.prototype]]"]:{};}HTMLElement.prototype.htmlElement=function(){};if(window.ie6){try{document.execCommand("BackgroundImageCache",false,true);
}catch(e){}}var Class=function(B){var A=function(){return(arguments[0]!==null&&this.initialize&&$type(this.initialize)=="function")?this.initialize.apply(this,arguments):this;
};$extend(A,this);A.prototype=B;A.constructor=Class;return A;};Class.empty=function(){};Class.prototype={extend:function(B){var C=new this(null);for(var D in B){var A=C[D];
C[D]=Class.Merge(A,B[D]);}return new Class(C);},implement:function(){for(var B=0,A=arguments.length;B<A;B++){$extend(this.prototype,arguments[B]);}}};Class.Merge=function(C,D){if(C&&C!=D){var B=$type(D);
if(B!=$type(C)){return D;}switch(B){case"function":var A=function(){this.parent=arguments.callee.parent;return D.apply(this,arguments);};A.parent=C;return A;
case"object":return $merge(C,D);}}return D;};var Chain=new Class({chain:function(A){this.chains=this.chains||[];this.chains.push(A);return this;},callChain:function(){if(this.chains&&this.chains.length){this.chains.shift().delay(10,this);
}},clearChain:function(){this.chains=[];}});var Events=new Class({addEvent:function(B,A){if(A!=Class.empty){this.$events=this.$events||{};this.$events[B]=this.$events[B]||[];
this.$events[B].include(A);}return this;},fireEvent:function(C,B,A){if(this.$events&&this.$events[C]){this.$events[C].each(function(D){D.create({"bind":this,"delay":A,"arguments":B})();
},this);}return this;},removeEvent:function(B,A){if(this.$events&&this.$events[B]){this.$events[B].remove(A);}return this;}});var Options=new Class({setOptions:function(){this.options=$merge.apply(null,[this.options].extend(arguments));
if(this.addEvent){for(var A in this.options){if($type(this.options[A]=="function")&&(/^on[A-Z]/).test(A)){this.addEvent(A,this.options[A]);}}}return this;
}});Array.extend({forEach:function(C,D){for(var B=0,A=this.length;B<A;B++){C.call(D,this[B],B,this);}},filter:function(D,E){var C=[];for(var B=0,A=this.length;
B<A;B++){if(D.call(E,this[B],B,this)){C.push(this[B]);}}return C;},map:function(D,E){var C=[];for(var B=0,A=this.length;B<A;B++){C[B]=D.call(E,this[B],B,this);
}return C;},every:function(C,D){for(var B=0,A=this.length;B<A;B++){if(!C.call(D,this[B],B,this)){return false;}}return true;},some:function(C,D){for(var B=0,A=this.length;
B<A;B++){if(C.call(D,this[B],B,this)){return true;}}return false;},indexOf:function(C,D){var A=this.length;for(var B=(D<0)?Math.max(0,A+D):D||0;B<A;B++){if(this[B]===C){return B;
}}return -1;},copy:function(D,C){D=D||0;if(D<0){D=this.length+D;}C=C||(this.length-D);var A=[];for(var B=0;B<C;B++){A[B]=this[D++];}return A;},remove:function(C){var B=0;
var A=this.length;while(B<A){if(this[B]===C){this.splice(B,1);A--;}else{B++;}}return this;},contains:function(A,B){return this.indexOf(A,B)!=-1;},associate:function(C){var D={},B=Math.min(this.length,C.length);
for(var A=0;A<B;A++){D[C[A]]=this[A];}return D;},extend:function(C){for(var B=0,A=C.length;B<A;B++){this.push(C[B]);}return this;},merge:function(C){for(var B=0,A=C.length;
B<A;B++){this.include(C[B]);}return this;},include:function(A){if(!this.contains(A)){this.push(A);}return this;},getRandom:function(){return this[$random(0,this.length-1)]||null;
},getLast:function(){return this[this.length-1]||null;}});Array.prototype.each=Array.prototype.forEach;Array.each=Array.forEach;function $A(A){return Array.copy(A);
}function $each(C,B,D){if(C&&typeof C.length=="number"&&$type(C)!="object"){Array.forEach(C,B,D);}else{for(var A in C){B.call(D||C,C[A],A);}}}Array.prototype.test=Array.prototype.contains;
String.extend({test:function(A,B){return(($type(A)=="string")?new RegExp(A,B):A).test(this);},toInt:function(){return parseInt(this,10);},toFloat:function(){return parseFloat(this);
},camelCase:function(){return this.replace(/-\D/g,function(A){return A.charAt(1).toUpperCase();});},hyphenate:function(){return this.replace(/\w[A-Z]/g,function(A){return(A.charAt(0)+"-"+A.charAt(1).toLowerCase());
});},capitalize:function(){return this.replace(/\b[a-z]/g,function(A){return A.toUpperCase();});},trim:function(){return this.replace(/^\s+|\s+$/g,"");
},clean:function(){return this.replace(/\s{2,}/g," ").trim();},rgbToHex:function(B){var A=this.match(/\d{1,3}/g);return(A)?A.rgbToHex(B):false;},hexToRgb:function(B){var A=this.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
return(A)?A.slice(1).hexToRgb(B):false;},contains:function(A,B){return(B)?(B+this+B).indexOf(B+A+B)>-1:this.indexOf(A)>-1;},escapeRegExp:function(){return this.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1");
}});Array.extend({rgbToHex:function(D){if(this.length<3){return false;}if(this.length==4&&this[3]==0&&!D){return"transparent";}var B=[];for(var A=0;A<3;
A++){var C=(this[A]-0).toString(16);B.push((C.length==1)?"0"+C:C);}return D?B:"#"+B.join("");},hexToRgb:function(C){if(this.length!=3){return false;}var A=[];
for(var B=0;B<3;B++){A.push(parseInt((this[B].length==1)?this[B]+this[B]:this[B],16));}return C?A:"rgb("+A.join(",")+")";}});Function.extend({create:function(A){var B=this;
A=$merge({"bind":B,"event":false,"arguments":null,"delay":false,"periodical":false,"attempt":false},A);if($chk(A.arguments)&&$type(A.arguments)!="array"){A.arguments=[A.arguments];
}return function(E){var C;if(A.event){E=E||window.event;C=[(A.event===true)?E:new A.event(E)];if(A.arguments){C.extend(A.arguments);}}else{C=A.arguments||arguments;
}var F=function(){return B.apply($pick(A.bind,B),C);};if(A.delay){return setTimeout(F,A.delay);}if(A.periodical){return setInterval(F,A.periodical);}if(A.attempt){try{return F();
}catch(D){return false;}}return F();};},pass:function(A,B){return this.create({"arguments":A,"bind":B});},attempt:function(A,B){return this.create({"arguments":A,"bind":B,"attempt":true})();
},bind:function(B,A){return this.create({"bind":B,"arguments":A});},bindAsEventListener:function(B,A){return this.create({"bind":B,"event":true,"arguments":A});
},delay:function(B,C,A){return this.create({"delay":B,"bind":C,"arguments":A})();},periodical:function(A,C,B){return this.create({"periodical":A,"bind":C,"arguments":B})();
}});Number.extend({toInt:function(){return parseInt(this);},toFloat:function(){return parseFloat(this);},limit:function(B,A){return Math.min(A,Math.max(B,this));
},round:function(A){A=Math.pow(10,A||0);return Math.round(this*A)/A;},times:function(B){for(var A=0;A<this;A++){B(A);}}});var Element=new Class({initialize:function(D,C){if($type(D)=="string"){if(window.ie&&C&&(C.name||C.type)){var A=(C.name)?' name="'+C.name+'"':"";
var B=(C.type)?' type="'+C.type+'"':"";delete C.name;delete C.type;D="<"+D+A+B+">";}D=document.createElement(D);}D=$(D);return(!C||!D)?D:D.set(C);}});var Elements=new Class({initialize:function(A){return(A)?$extend(A,this):this;
}});Elements.extend=function(A){for(var B in A){this.prototype[B]=A[B];this[B]=$native.generic(B);}};function $(B){if(!B){return null;}if(B.htmlElement){return Garbage.collect(B);
}if([window,document].contains(B)){return B;}var A=$type(B);if(A=="string"){B=document.getElementById(B);A=(B)?"element":false;}if(A!="element"){return null;
}if(B.htmlElement){return Garbage.collect(B);}if(["object","embed"].contains(B.tagName.toLowerCase())){return B;}$extend(B,Element.prototype);B.htmlElement=function(){};
return Garbage.collect(B);}document.getElementsBySelector=document.getElementsByTagName;function $$(){var D=[];for(var C=0,B=arguments.length;C<B;C++){var A=arguments[C];
switch($type(A)){case"element":D.push(A);case"boolean":break;case false:break;case"string":A=document.getElementsBySelector(A,true);default:D.extend(A);
}}return $$.unique(D);}$$.unique=function(G){var D=[];for(var C=0,A=G.length;C<A;C++){if(G[C].$included){continue;}var B=$(G[C]);if(B&&!B.$included){B.$included=true;
D.push(B);}}for(var F=0,E=D.length;F<E;F++){D[F].$included=null;}return new Elements(D);};Elements.Multi=function(A){return function(){var D=arguments;
var B=[];var G=true;for(var E=0,C=this.length,F;E<C;E++){F=this[E][A].apply(this[E],D);if($type(F)!="element"){G=false;}B.push(F);}return(G)?$$.unique(B):B;
};};Element.extend=function(A){for(var B in A){HTMLElement.prototype[B]=A[B];Element.prototype[B]=A[B];Element[B]=$native.generic(B);var C=(Array.prototype[B])?B+"Elements":B;
Elements.prototype[C]=Elements.Multi(B);}};Element.extend({set:function(A){for(var C in A){var B=A[C];switch(C){case"styles":this.setStyles(B);break;case"events":if(this.addEvents){this.addEvents(B);
}break;case"properties":this.setProperties(B);break;default:this.setProperty(C,B);}}return this;},inject:function(C,A){C=$(C);switch(A){case"before":C.parentNode.insertBefore(this,C);
break;case"after":var B=C.getNext();if(!B){C.parentNode.appendChild(this);}else{C.parentNode.insertBefore(this,B);}break;case"top":var D=C.firstChild;if(D){C.insertBefore(this,D);
break;}default:C.appendChild(this);}return this;},injectBefore:function(A){return this.inject(A,"before");},injectAfter:function(A){return this.inject(A,"after");
},injectInside:function(A){return this.inject(A,"bottom");},injectTop:function(A){return this.inject(A,"top");},adopt:function(){var A=[];$each(arguments,function(B){A=A.concat(B);
});$$(A).inject(this);return this;},remove:function(){return this.parentNode.removeChild(this);},clone:function(C){var B=$(this.cloneNode(C!==false));if(!B.$events){return B;
}B.$events={};for(var A in this.$events){B.$events[A]={"keys":$A(this.$events[A].keys),"values":$A(this.$events[A].values)};}return B.removeEvents();},replaceWith:function(A){A=$(A);
this.parentNode.replaceChild(A,this);return A;},appendText:function(A){this.appendChild(document.createTextNode(A));return this;},hasClass:function(A){return this.className.contains(A," ");
},addClass:function(A){if(!this.hasClass(A)){this.className=(this.className+" "+A).clean();}return this;},removeClass:function(A){this.className=this.className.replace(new RegExp("(^|\\s)"+A+"(?:\\s|$)"),"$1").clean();
return this;},toggleClass:function(A){return this.hasClass(A)?this.removeClass(A):this.addClass(A);},setStyle:function(B,A){switch(B){case"opacity":return this.setOpacity(parseFloat(A));
case"float":B=(window.ie)?"styleFloat":"cssFloat";}B=B.camelCase();switch($type(A)){case"number":if(!["zIndex","zoom"].contains(B)){A+="px";}break;case"array":A="rgb("+A.join(",")+")";
}this.style[B]=A;return this;},setStyles:function(A){switch($type(A)){case"object":Element.setMany(this,"setStyle",A);break;case"string":this.style.cssText=A;
}return this;},setOpacity:function(A){if(A==0){if(this.style.visibility!="hidden"){this.style.visibility="hidden";}}else{if(this.style.visibility!="visible"){this.style.visibility="visible";
}}if(!this.currentStyle||!this.currentStyle.hasLayout){this.style.zoom=1;}if(window.ie){this.style.filter=(A==1)?"":"alpha(opacity="+A*100+")";}this.style.opacity=this.$tmp.opacity=A;
return this;},getStyle:function(C){C=C.camelCase();var A=this.style[C];if(!$chk(A)){if(C=="opacity"){return this.$tmp.opacity;}A=[];for(var B in Element.Styles){if(C==B){Element.Styles[B].each(function(F){var E=this.getStyle(F);
A.push(parseInt(E)?E:"0px");},this);if(C=="border"){var D=A.every(function(E){return(E==A[0]);});return(D)?A[0]:false;}return A.join(" ");}}if(C.contains("border")){if(Element.Styles.border.contains(C)){return["Width","Style","Color"].map(function(E){return this.getStyle(C+E);
},this).join(" ");}else{if(Element.borderShort.contains(C)){return["Top","Right","Bottom","Left"].map(function(E){return this.getStyle("border"+E+C.replace("border",""));
},this).join(" ");}}}if(document.defaultView){A=document.defaultView.getComputedStyle(this,null).getPropertyValue(C.hyphenate());}else{if(this.currentStyle){A=this.currentStyle[C];
}}}if(window.ie){A=Element.fixStyle(C,A,this);}if(A&&C.test(/color/i)&&A.contains("rgb")){return A.split("rgb").splice(1,4).map(function(E){return E.rgbToHex();
}).join(" ");}return A;},getStyles:function(){return Element.getMany(this,"getStyle",arguments);},walk:function(A,C){A+="Sibling";var B=(C)?this[C]:this[A];
while(B&&$type(B)!="element"){B=B[A];}return $(B);},getPrevious:function(){return this.walk("previous");},getNext:function(){return this.walk("next");},getFirst:function(){return this.walk("next","firstChild");
},getLast:function(){return this.walk("previous","lastChild");},getParent:function(){return $(this.parentNode);},getChildren:function(){return $$(this.childNodes);
},hasChild:function(A){return !!$A(this.getElementsByTagName("*")).contains(A);},getProperty:function(D){var B=Element.Properties[D];if(B){return this[B];
}var A=Element.PropertiesIFlag[D]||0;if(!window.ie||A){return this.getAttribute(D,A);}var C=this.attributes[D];return(C)?C.nodeValue:null;},removeProperty:function(B){var A=Element.Properties[B];
if(A){this[A]="";}else{this.removeAttribute(B);}return this;},getProperties:function(){return Element.getMany(this,"getProperty",arguments);},setProperty:function(C,B){var A=Element.Properties[C];
if(A){this[A]=B;}else{this.setAttribute(C,B);}return this;},setProperties:function(A){return Element.setMany(this,"setProperty",A);},setHTML:function(){this.innerHTML=$A(arguments).join("");
return this;},setText:function(B){var A=this.getTag();if(["style","script"].contains(A)){if(window.ie){if(A=="style"){this.styleSheet.cssText=B;}else{if(A=="script"){this.setProperty("text",B);
}}return this;}else{this.removeChild(this.firstChild);return this.appendText(B);}}this[$defined(this.innerText)?"innerText":"textContent"]=B;return this;
},getText:function(){var A=this.getTag();if(["style","script"].contains(A)){if(window.ie){if(A=="style"){return this.styleSheet.cssText;}else{if(A=="script"){return this.getProperty("text");
}}}else{return this.innerHTML;}}return($pick(this.innerText,this.textContent));},getTag:function(){return this.tagName.toLowerCase();},empty:function(){Garbage.trash(this.getElementsByTagName("*"));
return this.setHTML("");}});Element.fixStyle=function(E,A,D){if($chk(parseInt(A))){return A;}if(["height","width"].contains(E)){var B=(E=="width")?["left","right"]:["top","bottom"];
var C=0;B.each(function(F){C+=D.getStyle("border-"+F+"-width").toInt()+D.getStyle("padding-"+F).toInt();});return D["offset"+E.capitalize()]-C+"px";}else{if(E.test(/border(.+)Width|margin|padding/)){return"0px";
}}return A;};Element.Styles={"border":[],"padding":[],"margin":[]};["Top","Right","Bottom","Left"].each(function(B){for(var A in Element.Styles){Element.Styles[A].push(A+B);
}});Element.borderShort=["borderWidth","borderStyle","borderColor"];Element.getMany=function(B,D,C){var A={};$each(C,function(E){A[E]=B[D](E);});return A;
};Element.setMany=function(B,D,C){for(var A in C){B[D](A,C[A]);}return B;};Element.Properties=new Abstract({"class":"className","for":"htmlFor","colspan":"colSpan","rowspan":"rowSpan","accesskey":"accessKey","tabindex":"tabIndex","maxlength":"maxLength","readonly":"readOnly","frameborder":"frameBorder","value":"value","disabled":"disabled","checked":"checked","multiple":"multiple","selected":"selected"});
Element.PropertiesIFlag={"href":2,"src":2};Element.Methods={Listeners:{addListener:function(B,A){if(this.addEventListener){this.addEventListener(B,A,false);
}else{this.attachEvent("on"+B,A);}return this;},removeListener:function(B,A){if(this.removeEventListener){this.removeEventListener(B,A,false);}else{this.detachEvent("on"+B,A);
}return this;}}};window.extend(Element.Methods.Listeners);document.extend(Element.Methods.Listeners);Element.extend(Element.Methods.Listeners);var Garbage={elements:[],collect:function(A){if(!A.$tmp){Garbage.elements.push(A);
A.$tmp={"opacity":1};}return A;},trash:function(D){for(var B=0,A=D.length,C;B<A;B++){if(!(C=D[B])||!C.$tmp){continue;}if(C.$events){C.fireEvent("trash").removeEvents();
}for(var E in C.$tmp){C.$tmp[E]=null;}for(var F in Element.prototype){C[F]=null;}Garbage.elements[Garbage.elements.indexOf(C)]=null;C.htmlElement=C.$tmp=C=null;
}Garbage.elements.remove(null);},empty:function(){Garbage.collect(window);Garbage.collect(document);Garbage.trash(Garbage.elements);}};window.addListener("beforeunload",function(){window.addListener("unload",Garbage.empty);
if(window.ie){window.addListener("unload",CollectGarbage);}});var Event=new Class({initialize:function(C){if(C&&C.$extended){return C;}this.$extended=true;
C=C||window.event;this.event=C;this.type=C.type;this.target=C.target||C.srcElement;if(this.target.nodeType==3){this.target=this.target.parentNode;}this.shift=C.shiftKey;
this.control=C.ctrlKey;this.alt=C.altKey;this.meta=C.metaKey;if(["DOMMouseScroll","mousewheel"].contains(this.type)){this.wheel=(C.wheelDelta)?C.wheelDelta/120:-(C.detail||0)/3;
}else{if(this.type.contains("key")){this.code=C.which||C.keyCode;for(var B in Event.keys){if(Event.keys[B]==this.code){this.key=B;break;}}if(this.type=="keydown"){var A=this.code-111;
if(A>0&&A<13){this.key="f"+A;}}this.key=this.key||String.fromCharCode(this.code).toLowerCase();}else{if(this.type.test(/(click|mouse|menu)/)){this.page={"x":C.pageX||C.clientX+document.documentElement.scrollLeft,"y":C.pageY||C.clientY+document.documentElement.scrollTop};
this.client={"x":C.pageX?C.pageX-window.pageXOffset:C.clientX,"y":C.pageY?C.pageY-window.pageYOffset:C.clientY};this.rightClick=(C.which==3)||(C.button==2);
switch(this.type){case"mouseover":this.relatedTarget=C.relatedTarget||C.fromElement;break;case"mouseout":this.relatedTarget=C.relatedTarget||C.toElement;
}this.fixRelatedTarget();}}}return this;},stop:function(){return this.stopPropagation().preventDefault();},stopPropagation:function(){if(this.event.stopPropagation){this.event.stopPropagation();
}else{this.event.cancelBubble=true;}return this;},preventDefault:function(){if(this.event.preventDefault){this.event.preventDefault();}else{this.event.returnValue=false;
}return this;}});Event.fix={relatedTarget:function(){if(this.relatedTarget&&this.relatedTarget.nodeType==3){this.relatedTarget=this.relatedTarget.parentNode;
}},relatedTargetGecko:function(){try{Event.fix.relatedTarget.call(this);}catch(A){this.relatedTarget=this.target;}}};Event.prototype.fixRelatedTarget=(window.gecko)?Event.fix.relatedTargetGecko:Event.fix.relatedTarget;
Event.keys=new Abstract({"enter":13,"up":38,"down":40,"left":37,"right":39,"esc":27,"space":32,"backspace":8,"tab":9,"delete":46});Element.Methods.Events={addEvent:function(C,B){this.$events=this.$events||{};
this.$events[C]=this.$events[C]||{"keys":[],"values":[]};if(this.$events[C].keys.contains(B)){return this;}this.$events[C].keys.push(B);var A=C;var D=Element.Events[C];
if(D){if(D.add){D.add.call(this,B);}if(D.map){B=D.map;}if(D.type){A=D.type;}}if(!this.addEventListener){B=B.create({"bind":this,"event":true});}this.$events[C].values.push(B);
return(Element.NativeEvents.contains(A))?this.addListener(A,B):this;},removeEvent:function(C,B){if(!this.$events||!this.$events[C]){return this;}var F=this.$events[C].keys.indexOf(B);
if(F==-1){return this;}var A=this.$events[C].keys.splice(F,1)[0];var E=this.$events[C].values.splice(F,1)[0];var D=Element.Events[C];if(D){if(D.remove){D.remove.call(this,B);
}if(D.type){C=D.type;}}return(Element.NativeEvents.contains(C))?this.removeListener(C,E):this;},addEvents:function(A){return Element.setMany(this,"addEvent",A);
},removeEvents:function(A){if(!this.$events){return this;}if(!A){for(var B in this.$events){this.removeEvents(B);}this.$events=null;}else{if(this.$events[A]){this.$events[A].keys.each(function(C){this.removeEvent(A,C);
},this);this.$events[A]=null;}}return this;},fireEvent:function(C,B,A){if(this.$events&&this.$events[C]){this.$events[C].keys.each(function(D){D.create({"bind":this,"delay":A,"arguments":B})();
},this);}return this;},cloneEvents:function(C,A){if(!C.$events){return this;}if(!A){for(var B in C.$events){this.cloneEvents(C,B);}}else{if(C.$events[A]){C.$events[A].keys.each(function(D){this.addEvent(A,D);
},this);}}return this;}};window.extend(Element.Methods.Events);document.extend(Element.Methods.Events);Element.extend(Element.Methods.Events);Element.Events=new Abstract({"mouseenter":{type:"mouseover",map:function(A){A=new Event(A);
if(A.relatedTarget!=this&&!this.hasChild(A.relatedTarget)){this.fireEvent("mouseenter",A);}}},"mouseleave":{type:"mouseout",map:function(A){A=new Event(A);
if(A.relatedTarget!=this&&!this.hasChild(A.relatedTarget)){this.fireEvent("mouseleave",A);}}},"mousewheel":{type:(window.gecko)?"DOMMouseScroll":"mousewheel"}});
Element.NativeEvents=["click","dblclick","mouseup","mousedown","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","keydown","keypress","keyup","load","unload","beforeunload","resize","move","focus","blur","change","submit","reset","select","error","abort","contextmenu","scroll"];
Function.extend({bindWithEvent:function(B,A){return this.create({"bind":B,"arguments":A,"event":Event});}});Elements.extend({filterByTag:function(A){return new Elements(this.filter(function(B){return(Element.getTag(B)==A);
}));},filterByClass:function(A,C){var B=this.filter(function(D){return(D.className&&D.className.contains(A," "));});return(C)?B:new Elements(B);},filterById:function(C,B){var A=this.filter(function(D){return(D.id==C);
});return(B)?A:new Elements(A);},filterByAttribute:function(B,A,D,E){var C=this.filter(function(F){var G=Element.getProperty(F,B);if(!G){return false;}if(!A){return true;
}switch(A){case"=":return(G==D);case"*=":return(G.contains(D));case"^=":return(G.substr(0,D.length)==D);case"$=":return(G.substr(G.length-D.length)==D);
case"!=":return(G!=D);case"~=":return G.contains(D," ");}return false;});return(E)?C:new Elements(C);}});function $E(A,B){return($(B)||document).getElement(A);
}function $ES(A,B){return($(B)||document).getElementsBySelector(A);}$$.shared={"regexp":/^(\w*|\*)(?:#([\w-]+)|\.([\w-]+))?(?:\[(\w+)(?:([!*^$]?=)["']?([^"'\]]*)["']?)?])?$/,"xpath":{getParam:function(B,D,E,C){var A=[D.namespaceURI?"xhtml:":"",E[1]];
if(E[2]){A.push('[@id="',E[2],'"]');}if(E[3]){A.push('[contains(concat(" ", @class, " "), " ',E[3],' ")]');}if(E[4]){if(E[5]&&E[6]){switch(E[5]){case"*=":A.push("[contains(@",E[4],', "',E[6],'")]');
break;case"^=":A.push("[starts-with(@",E[4],', "',E[6],'")]');break;case"$=":A.push("[substring(@",E[4],", string-length(@",E[4],") - ",E[6].length,' + 1) = "',E[6],'"]');
break;case"=":A.push("[@",E[4],'="',E[6],'"]');break;case"!=":A.push("[@",E[4],'!="',E[6],'"]');}}else{A.push("[@",E[4],"]");}}B.push(A.join(""));return B;
},getItems:function(B,E,G){var F=[];var A=document.evaluate(".//"+B.join("//"),E,$$.shared.resolver,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);for(var D=0,C=A.snapshotLength;
D<C;D++){F.push(A.snapshotItem(D));}return(G)?F:new Elements(F.map($));}},"normal":{getParam:function(A,C,E,B){if(B==0){if(E[2]){var D=C.getElementById(E[2]);
if(!D||((E[1]!="*")&&(Element.getTag(D)!=E[1]))){return false;}A=[D];}else{A=$A(C.getElementsByTagName(E[1]));}}else{A=$$.shared.getElementsByTagName(A,E[1]);
if(E[2]){A=Elements.filterById(A,E[2],true);}}if(E[3]){A=Elements.filterByClass(A,E[3],true);}if(E[4]){A=Elements.filterByAttribute(A,E[4],E[5],E[6],true);
}return A;},getItems:function(A,B,C){return(C)?A:$$.unique(A);}},resolver:function(A){return(A=="xhtml")?"http://www.w3.org/1999/xhtml":false;},getElementsByTagName:function(D,C){var E=[];
for(var B=0,A=D.length;B<A;B++){E.extend(D[B].getElementsByTagName(C));}return E;}};$$.shared.method=(window.xpath)?"xpath":"normal";Element.Methods.Dom={getElements:function(A,H){var C=[];
A=A.trim().split(" ");for(var E=0,D=A.length;E<D;E++){var F=A[E];var G=F.match($$.shared.regexp);if(!G){break;}G[1]=G[1]||"*";var B=$$.shared[$$.shared.method].getParam(C,this,G,E);
if(!B){break;}C=B;}return $$.shared[$$.shared.method].getItems(C,this,H);},getElement:function(A){return $(this.getElements(A,true)[0]||false);},getElementsBySelector:function(A,E){var D=[];
A=A.split(",");for(var C=0,B=A.length;C<B;C++){D=D.concat(this.getElements(A[C],true));}return(E)?D:$$.unique(D);}};Element.extend({getElementById:function(C){var B=document.getElementById(C);
if(!B){return false;}for(var A=B.parentNode;A!=this;A=A.parentNode){if(!A){return false;}}return B;},getElementsByClassName:function(A){return this.getElements("."+A);
}});document.extend(Element.Methods.Dom);Element.extend(Element.Methods.Dom);Element.extend({getValue:function(){switch(this.getTag()){case"select":var A=[];
$each(this.options,function(B){if(B.selected){A.push($pick(B.value,B.text));}});return(this.multiple)?A:A[0];case"input":if(!(this.checked&&["checkbox","radio"].contains(this.type))&&!["hidden","text","password"].contains(this.type)){break;
}case"textarea":return this.value;}return false;},getFormElements:function(){return $$(this.getElementsByTagName("input"),this.getElementsByTagName("select"),this.getElementsByTagName("textarea"));
},toQueryString:function(){var A=[];this.getFormElements().each(function(D){var C=D.name;var E=D.getValue();if(E===false||!C||D.disabled){return ;}var B=function(F){A.push(C+"="+encodeURIComponent(F));
};if($type(E)=="array"){E.each(B);}else{B(E);}});return A.join("&");}});Element.extend({scrollTo:function(A,B){this.scrollLeft=A;this.scrollTop=B;},getSize:function(){return{"scroll":{"x":this.scrollLeft,"y":this.scrollTop},"size":{"x":this.offsetWidth,"y":this.offsetHeight},"scrollSize":{"x":this.scrollWidth,"y":this.scrollHeight}};
},getPosition:function(A){A=A||[];var B=this,D=0,C=0;do{D+=B.offsetLeft||0;C+=B.offsetTop||0;B=B.offsetParent;}while(B);A.each(function(E){D-=E.scrollLeft||0;
C-=E.scrollTop||0;});return{"x":D,"y":C};},getTop:function(A){return this.getPosition(A).y;},getLeft:function(A){return this.getPosition(A).x;},getCoordinates:function(B){var A=this.getPosition(B);
var C={"width":this.offsetWidth,"height":this.offsetHeight,"left":A.x,"top":A.y};C.right=C.left+C.width;C.bottom=C.top+C.height;return C;}});Element.Events.domready={add:function(B){if(window.loaded){B.call(this);
return ;}var A=function(){if(window.loaded){return ;}window.loaded=true;window.timer=$clear(window.timer);this.fireEvent("domready");}.bind(this);if(document.readyState&&window.webkit){window.timer=function(){if(["loaded","complete"].contains(document.readyState)){A();
}}.periodical(50);}else{if(document.readyState&&window.ie){if(!$("ie_ready")){var C=(window.location.protocol=="https:")?"://0":"javascript:void(0)";document.write('<script id="ie_ready" defer src="'+C+'"><\/script>');
$("ie_ready").onreadystatechange=function(){if(this.readyState=="complete"){A();}};}}else{window.addListener("load",A);document.addListener("DOMContentLoaded",A);
}}}};window.onDomReady=function(A){return this.addEvent("domready",A);};window.extend({getWidth:function(){if(this.webkit419){return this.innerWidth;}if(this.opera){return document.body.clientWidth;
}return document.documentElement.clientWidth;},getHeight:function(){if(this.webkit419){return this.innerHeight;}if(this.opera){return document.body.clientHeight;
}return document.documentElement.clientHeight;},getScrollWidth:function(){if(this.ie){return Math.max(document.documentElement.offsetWidth,document.documentElement.scrollWidth);
}if(this.webkit){return document.body.scrollWidth;}return document.documentElement.scrollWidth;},getScrollHeight:function(){if(this.ie){return Math.max(document.documentElement.offsetHeight,document.documentElement.scrollHeight);
}if(this.webkit){return document.body.scrollHeight;}return document.documentElement.scrollHeight;},getScrollLeft:function(){return this.pageXOffset||document.documentElement.scrollLeft;
},getScrollTop:function(){return this.pageYOffset||document.documentElement.scrollTop;},getSize:function(){return{"size":{"x":this.getWidth(),"y":this.getHeight()},"scrollSize":{"x":this.getScrollWidth(),"y":this.getScrollHeight()},"scroll":{"x":this.getScrollLeft(),"y":this.getScrollTop()}};
},getPosition:function(){return{"x":0,"y":0};}});var Fx={};Fx.Base=new Class({options:{onStart:Class.empty,onComplete:Class.empty,onCancel:Class.empty,transition:function(A){return -(Math.cos(Math.PI*A)-1)/2;
},duration:500,unit:"px",wait:true,fps:50},initialize:function(A){this.element=this.element||null;this.setOptions(A);if(this.options.initialize){this.options.initialize.call(this);
}},step:function(){var A=$time();if(A<this.time+this.options.duration){this.delta=this.options.transition((A-this.time)/this.options.duration);this.setNow();
this.increase();}else{this.stop(true);this.set(this.to);this.fireEvent("onComplete",this.element,10);this.callChain();}},set:function(A){this.now=A;this.increase();
return this;},setNow:function(){this.now=this.compute(this.from,this.to);},compute:function(B,A){return(A-B)*this.delta+B;},start:function(B,A){if(!this.options.wait){this.stop();
}else{if(this.timer){return this;}}this.from=B;this.to=A;this.change=this.to-this.from;this.time=$time();this.timer=this.step.periodical(Math.round(1000/this.options.fps),this);
this.fireEvent("onStart",this.element);return this;},stop:function(A){if(!this.timer){return this;}this.timer=$clear(this.timer);if(!A){this.fireEvent("onCancel",this.element);
}return this;},custom:function(B,A){return this.start(B,A);},clearTimer:function(A){return this.stop(A);}});Fx.Base.implement(new Chain,new Events,new Options);
Fx.CSS={select:function(B,C){if(B.test(/color/i)){return this.Color;}var A=$type(C);if((A=="array")||(A=="string"&&C.contains(" "))){return this.Multi;
}return this.Single;},parse:function(C,D,A){if(!A.push){A=[A];}var F=A[0],E=A[1];if(!$chk(E)){E=F;F=C.getStyle(D);}var B=this.select(D,E);return{"from":B.parse(F),"to":B.parse(E),"css":B};
}};Fx.CSS.Single={parse:function(A){return parseFloat(A);},getNow:function(C,B,A){return A.compute(C,B);},getValue:function(C,A,B){if(A=="px"&&B!="opacity"){C=Math.round(C);
}return C+A;}};Fx.CSS.Multi={parse:function(A){return A.push?A:A.split(" ").map(function(B){return parseFloat(B);});},getNow:function(E,D,C){var A=[];for(var B=0;
B<E.length;B++){A[B]=C.compute(E[B],D[B]);}return A;},getValue:function(C,A,B){if(A=="px"&&B!="opacity"){C=C.map(Math.round);}return C.join(A+" ")+A;}};
Fx.CSS.Color={parse:function(A){return A.push?A:A.hexToRgb(true);},getNow:function(E,D,C){var A=[];for(var B=0;B<E.length;B++){A[B]=Math.round(C.compute(E[B],D[B]));
}return A;},getValue:function(A){return"rgb("+A.join(",")+")";}};Fx.Style=Fx.Base.extend({initialize:function(B,C,A){this.element=$(B);this.property=C;
this.parent(A);},hide:function(){return this.set(0);},setNow:function(){this.now=this.css.getNow(this.from,this.to,this);},set:function(A){this.css=Fx.CSS.select(this.property,A);
return this.parent(this.css.parse(A));},start:function(C,B){if(this.timer&&this.options.wait){return this;}var A=Fx.CSS.parse(this.element,this.property,[C,B]);
this.css=A.css;return this.parent(A.from,A.to);},increase:function(){this.element.setStyle(this.property,this.css.getValue(this.now,this.options.unit,this.property));
}});Element.extend({effect:function(B,A){return new Fx.Style(this,B,A);}});Fx.Styles=Fx.Base.extend({initialize:function(B,A){this.element=$(B);this.parent(A);
},setNow:function(){for(var A in this.from){this.now[A]=this.css[A].getNow(this.from[A],this.to[A],this);}},set:function(C){var A={};this.css={};for(var B in C){this.css[B]=Fx.CSS.select(B,C[B]);
A[B]=this.css[B].parse(C[B]);}return this.parent(A);},start:function(C){if(this.timer&&this.options.wait){return this;}this.now={};this.css={};var E={},D={};
for(var B in C){var A=Fx.CSS.parse(this.element,B,C[B]);E[B]=A.from;D[B]=A.to;this.css[B]=A.css;}return this.parent(E,D);},increase:function(){for(var A in this.now){this.element.setStyle(A,this.css[A].getValue(this.now[A],this.options.unit,A));
}}});Element.extend({effects:function(A){return new Fx.Styles(this,A);}});Fx.Elements=Fx.Base.extend({initialize:function(B,A){this.elements=$$(B);this.parent(A);
},setNow:function(){for(var C in this.from){var F=this.from[C],E=this.to[C],B=this.css[C],A=this.now[C]={};for(var D in F){A[D]=B[D].getNow(F[D],E[D],this);
}}},set:function(G){var B={};this.css={};for(var D in G){var F=G[D],C=this.css[D]={},A=B[D]={};for(var E in F){C[E]=Fx.CSS.select(E,F[E]);A[E]=C[E].parse(F[E]);
}}return this.parent(B);},start:function(D){if(this.timer&&this.options.wait){return this;}this.now={};this.css={};var I={},J={};for(var E in D){var G=D[E],A=I[E]={},H=J[E]={},C=this.css[E]={};
for(var B in G){var F=Fx.CSS.parse(this.elements[E],B,G[B]);A[B]=F.from;H[B]=F.to;C[B]=F.css;}}return this.parent(I,J);},increase:function(){for(var C in this.now){var A=this.now[C],B=this.css[C];
for(var D in A){this.elements[C].setStyle(D,B[D].getValue(A[D],this.options.unit,D));}}}});Fx.Scroll=Fx.Base.extend({options:{overflown:[],offset:{"x":0,"y":0},wheelStops:true},initialize:function(B,A){this.now=[];
this.element=$(B);this.bound={"stop":this.stop.bind(this,false)};this.parent(A);if(this.options.wheelStops){this.addEvent("onStart",function(){document.addEvent("mousewheel",this.bound.stop);
}.bind(this));this.addEvent("onComplete",function(){document.removeEvent("mousewheel",this.bound.stop);}.bind(this));}},setNow:function(){for(var A=0;A<2;
A++){this.now[A]=this.compute(this.from[A],this.to[A]);}},scrollTo:function(B,F){if(this.timer&&this.options.wait){return this;}var D=this.element.getSize();
var C={"x":B,"y":F};for(var E in D.size){var A=D.scrollSize[E]-D.size[E];if($chk(C[E])){C[E]=($type(C[E])=="number")?C[E].limit(0,A):A;}else{C[E]=D.scroll[E];
}C[E]+=this.options.offset[E];}return this.start([D.scroll.x,D.scroll.y],[C.x,C.y]);},toTop:function(){return this.scrollTo(false,0);},toBottom:function(){return this.scrollTo(false,"full");
},toLeft:function(){return this.scrollTo(0,false);},toRight:function(){return this.scrollTo("full",false);},toElement:function(B){var A=this.element.getPosition(this.options.overflown);
var C=$(B).getPosition(this.options.overflown);return this.scrollTo(C.x-A.x,C.y-A.y);},increase:function(){this.element.scrollTo(this.now[0],this.now[1]);
}});Fx.Slide=Fx.Base.extend({options:{mode:"vertical"},initialize:function(B,A){this.element=$(B);this.wrapper=new Element("div",{"styles":$extend(this.element.getStyles("margin"),{"overflow":"hidden"})}).injectAfter(this.element).adopt(this.element);
this.element.setStyle("margin",0);this.setOptions(A);this.now=[];this.parent(this.options);this.open=true;this.addEvent("onComplete",function(){this.open=(this.now[0]===0);
});if(window.webkit419){this.addEvent("onComplete",function(){if(this.open){this.element.remove().inject(this.wrapper);}});}},setNow:function(){for(var A=0;
A<2;A++){this.now[A]=this.compute(this.from[A],this.to[A]);}},vertical:function(){this.margin="margin-top";this.layout="height";this.offset=this.element.offsetHeight;
},horizontal:function(){this.margin="margin-left";this.layout="width";this.offset=this.element.offsetWidth;},slideIn:function(A){this[A||this.options.mode]();
return this.start([this.element.getStyle(this.margin).toInt(),this.wrapper.getStyle(this.layout).toInt()],[0,this.offset]);},slideOut:function(A){this[A||this.options.mode]();
return this.start([this.element.getStyle(this.margin).toInt(),this.wrapper.getStyle(this.layout).toInt()],[-this.offset,0]);},hide:function(A){this[A||this.options.mode]();
this.open=false;return this.set([-this.offset,0]);},show:function(A){this[A||this.options.mode]();this.open=true;return this.set([0,this.offset]);},toggle:function(A){if(this.wrapper.offsetHeight==0||this.wrapper.offsetWidth==0){return this.slideIn(A);
}return this.slideOut(A);},increase:function(){this.element.setStyle(this.margin,this.now[0]+this.options.unit);this.wrapper.setStyle(this.layout,this.now[1]+this.options.unit);
}});Fx.Transition=function(B,A){A=A||[];if($type(A)!="array"){A=[A];}return $extend(B,{easeIn:function(C){return B(C,A);},easeOut:function(C){return 1-B(1-C,A);
},easeInOut:function(C){return(C<=0.5)?B(2*C,A)/2:(2-B(2*(1-C),A))/2;}});};Fx.Transitions=new Abstract({linear:function(A){return A;}});Fx.Transitions.extend=function(A){for(var B in A){Fx.Transitions[B]=new Fx.Transition(A[B]);
Fx.Transitions.compat(B);}};Fx.Transitions.compat=function(A){["In","Out","InOut"].each(function(B){Fx.Transitions[A.toLowerCase()+B]=Fx.Transitions[A]["ease"+B];
});};Fx.Transitions.extend({Pow:function(B,A){return Math.pow(B,A[0]||6);},Expo:function(A){return Math.pow(2,8*(A-1));},Circ:function(A){return 1-Math.sin(Math.acos(A));
},Sine:function(A){return 1-Math.sin((1-A)*Math.PI/2);},Back:function(B,A){A=A[0]||1.618;return Math.pow(B,2)*((A+1)*B-A);},Bounce:function(D){var C;for(var B=0,A=1;
1;B+=A,A/=2){if(D>=(7-4*B)/11){C=-Math.pow((11-6*B-11*D)/4,2)+A*A;break;}}return C;},Elastic:function(B,A){return Math.pow(2,10*--B)*Math.cos(20*B*Math.PI*(A[0]||1)/3);
}});["Quad","Cubic","Quart","Quint"].each(function(B,A){Fx.Transitions[B]=new Fx.Transition(function(C){return Math.pow(C,[A+2]);});Fx.Transitions.compat(B);
});var Drag={};Drag.Base=new Class({options:{handle:false,unit:"px",onStart:Class.empty,onBeforeStart:Class.empty,onComplete:Class.empty,onSnap:Class.empty,onDrag:Class.empty,limit:false,modifiers:{x:"left",y:"top"},grid:false,snap:6},initialize:function(B,A){this.setOptions(A);
this.element=$(B);this.handle=$(this.options.handle)||this.element;this.mouse={"now":{},"pos":{}};this.value={"start":{},"now":{}};this.bound={"start":this.start.bindWithEvent(this),"check":this.check.bindWithEvent(this),"drag":this.drag.bindWithEvent(this),"stop":this.stop.bind(this)};
this.attach();if(this.options.initialize){this.options.initialize.call(this);}},attach:function(){this.handle.addEvent("mousedown",this.bound.start);return this;
},detach:function(){this.handle.removeEvent("mousedown",this.bound.start);return this;},start:function(C){this.fireEvent("onBeforeStart",this.element);
this.mouse.start=C.page;var A=this.options.limit;this.limit={"x":[],"y":[]};for(var D in this.options.modifiers){if(!this.options.modifiers[D]){continue;
}this.value.now[D]=this.element.getStyle(this.options.modifiers[D]).toInt();this.mouse.pos[D]=C.page[D]-this.value.now[D];if(A&&A[D]){for(var B=0;B<2;B++){if($chk(A[D][B])){this.limit[D][B]=($type(A[D][B])=="function")?A[D][B]():A[D][B];
}}}}if($type(this.options.grid)=="number"){this.options.grid={"x":this.options.grid,"y":this.options.grid};}document.addListener("mousemove",this.bound.check);
document.addListener("mouseup",this.bound.stop);this.fireEvent("onStart",this.element);C.stop();},check:function(A){var B=Math.round(Math.sqrt(Math.pow(A.page.x-this.mouse.start.x,2)+Math.pow(A.page.y-this.mouse.start.y,2)));
if(B>this.options.snap){document.removeListener("mousemove",this.bound.check);document.addListener("mousemove",this.bound.drag);this.drag(A);this.fireEvent("onSnap",this.element);
}A.stop();},drag:function(A){this.out=false;this.mouse.now=A.page;for(var B in this.options.modifiers){if(!this.options.modifiers[B]){continue;}this.value.now[B]=this.mouse.now[B]-this.mouse.pos[B];
if(this.limit[B]){if($chk(this.limit[B][1])&&(this.value.now[B]>this.limit[B][1])){this.value.now[B]=this.limit[B][1];this.out=true;}else{if($chk(this.limit[B][0])&&(this.value.now[B]<this.limit[B][0])){this.value.now[B]=this.limit[B][0];
this.out=true;}}}if(this.options.grid[B]){this.value.now[B]-=(this.value.now[B]%this.options.grid[B]);}this.element.setStyle(this.options.modifiers[B],this.value.now[B]+this.options.unit);
}this.fireEvent("onDrag",this.element);A.stop();},stop:function(){document.removeListener("mousemove",this.bound.check);document.removeListener("mousemove",this.bound.drag);
document.removeListener("mouseup",this.bound.stop);this.fireEvent("onComplete",this.element);}});Drag.Base.implement(new Events,new Options);Element.extend({makeResizable:function(A){return new Drag.Base(this,$merge({modifiers:{x:"width",y:"height"}},A));
}});Drag.Move=Drag.Base.extend({options:{droppables:[],container:false,overflown:[]},initialize:function(B,A){this.setOptions(A);this.element=$(B);this.droppables=$$(this.options.droppables);
this.container=$(this.options.container);this.position={"element":this.element.getStyle("position"),"container":false};if(this.container){this.position.container=this.container.getStyle("position");
}if(!["relative","absolute","fixed"].contains(this.position.element)){this.position.element="absolute";}var D=this.element.getStyle("top").toInt();var C=this.element.getStyle("left").toInt();
if(this.position.element=="absolute"&&!["relative","absolute","fixed"].contains(this.position.container)){D=$chk(D)?D:this.element.getTop(this.options.overflown);
C=$chk(C)?C:this.element.getLeft(this.options.overflown);}else{D=$chk(D)?D:0;C=$chk(C)?C:0;}this.element.setStyles({"top":D,"left":C,"position":this.position.element});
this.parent(this.element);},start:function(C){this.overed=null;if(this.container){var A=this.container.getCoordinates();var B=this.element.getCoordinates();
if(this.position.element=="absolute"&&!["relative","absolute","fixed"].contains(this.position.container)){this.options.limit={"x":[A.left,A.right-B.width],"y":[A.top,A.bottom-B.height]};
}else{this.options.limit={"y":[0,A.height-B.height],"x":[0,A.width-B.width]};}}this.parent(C);},drag:function(A){this.parent(A);var B=this.out?false:this.droppables.filter(this.checkAgainst,this).getLast();
if(this.overed!=B){if(this.overed){this.overed.fireEvent("leave",[this.element,this]);}this.overed=B?B.fireEvent("over",[this.element,this]):null;}return this;
},checkAgainst:function(B){B=B.getCoordinates(this.options.overflown);var A=this.mouse.now;return(A.x>B.left&&A.x<B.right&&A.y<B.bottom&&A.y>B.top);},stop:function(){if(this.overed&&!this.out){this.overed.fireEvent("drop",[this.element,this]);
}else{this.element.fireEvent("emptydrop",this);}this.parent();return this;}});Element.extend({makeDraggable:function(A){return new Drag.Move(this,A);}});
var Cookie=new Abstract({options:{domain:false,path:false,duration:false,secure:false},set:function(C,D,B){B=$merge(this.options,B);D=encodeURIComponent(D);
if(B.domain){D+="; domain="+B.domain;}if(B.path){D+="; path="+B.path;}if(B.duration){var A=new Date();A.setTime(A.getTime()+B.duration*24*60*60*1000);D+="; expires="+A.toGMTString();
}if(B.secure){D+="; secure";}document.cookie=C+"="+D;return $extend(B,{"key":C,"value":D});},get:function(A){var B=document.cookie.match("(?:^|;)\\s*"+A.escapeRegExp()+"=([^;]*)");
return B?decodeURIComponent(B[1]):false;},remove:function(B,A){if($type(B)=="object"){this.set(B.key,"",$merge(B,{duration:-1}));}else{this.set(B,"",$merge(A,{duration:-1}));
}}});var Json={toString:function(C){switch($type(C)){case"string":return'"'+C.replace(/(["\\])/g,"\\$1")+'"';case"array":return"["+C.map(Json.toString).join(",")+"]";
case"object":var A=[];for(var B in C){A.push(Json.toString(B)+":"+Json.toString(C[B]));}return"{"+A.join(",")+"}";case"number":if(isFinite(C)){break;}case false:return"null";
}return String(C);},evaluate:function(str,secure){return(($type(str)!="string")||(secure&&!str.test(/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/)))?null:eval("("+str+")");
}};var Hash=new Class({length:0,initialize:function(A){this.obj=A||{};this.setLength();},get:function(A){return(this.hasKey(A))?this.obj[A]:null;},hasKey:function(A){return(A in this.obj);
},set:function(A,B){if(!this.hasKey(A)){this.length++;}this.obj[A]=B;return this;},setLength:function(){this.length=0;for(var A in this.obj){this.length++;
}return this;},remove:function(A){if(this.hasKey(A)){delete this.obj[A];this.length--;}return this;},each:function(A,B){$each(this.obj,A,B);},extend:function(A){$extend(this.obj,A);
return this.setLength();},merge:function(){this.obj=$merge.apply(null,[this.obj].extend(arguments));return this.setLength();},empty:function(){this.obj={};
this.length=0;return this;},keys:function(){var A=[];for(var B in this.obj){A.push(B);}return A;},values:function(){var A=[];for(var B in this.obj){A.push(this.obj[B]);
}return A;}});function $H(A){return new Hash(A);}Hash.Cookie=Hash.extend({initialize:function(B,A){this.name=B;this.options=$extend({"autoSave":true},A||{});
this.load();},save:function(){if(this.length==0){Cookie.remove(this.name,this.options);return true;}var A=Json.toString(this.obj);if(A.length>4096){return false;
}Cookie.set(this.name,A,this.options);return true;},load:function(){this.obj=Json.evaluate(Cookie.get(this.name),true)||{};this.setLength();}});Hash.Cookie.Methods={};
["extend","set","merge","empty","remove"].each(function(A){Hash.Cookie.Methods[A]=function(){Hash.prototype[A].apply(this,arguments);if(this.options.autoSave){this.save();
}return this;};});Hash.Cookie.implement(Hash.Cookie.Methods);

if(typeof noa=="undefined"){noa=new Object()}noa.runmode="production";dojo.provide("noa.SiteMap");noa.SiteMap={"":[{controller:"noa.controller.PagePromotionController"},{controller:"noa.controller.metrics.MetricsController"},{controller:"noa.controller.PopUpController"},{controller:"noa.controller.ExternalLinkController"}],"http(s)?://[^/]*/?$":[{controller:"noa.controller.pageControllers.HomePageController"}],"http(s)?://[^/]*/ds/lite/features/?$":[{controller:"noa.controller.pageControllers.DSFeaturesPageController"}],"http(s)?://[^/]*/games/?$":[{controller:"noa.controller.pageControllers.GamesHomePageController"}],"http(s)?://[^/]*/(ds|wii|wii/channels/miichannel)/videos(.html)?/?(#[^/]*)?$":[{controller:"noa.controller.pageControllers.VideoPageController"}],"http(s)?://[^/]*/wii/channels/miichannel/videos(.html)?/?(#[^/]*)?$":[{controller:"noa.controller.pageControllers.miiChannelVideosController"}],"http(s)?://[^/]*/whatsnew.*":[{controller:"noa.controller.pageControllers.WhatsNewSectionController"}],"http(s)?://[^/]*/wii.*":[{controller:"noa.controller.pageControllers.WiiSectionController"}],"http(s)?://[^/]*/ds.*":[{controller:"noa.controller.pageControllers.DSSectionController"}],"http(s)?://[^/]*/wii/lite/accessories/zapper/howdoesitwork.*":[{controller:"noa.controller.pageControllers.ZapperHowDoesItWorkController"}],"http(s)?://[^/]*/whatsnew/?(#[^/]*)?$":[{controller:"noa.controller.pageControllers.WhatsNewIndexController"}],"#body_games_detail":[{controller:"noa.controller.pageControllers.GamesDetailPageController"}],"#body_wii_virtualconsole_virtualconsolegames_detail":[{controller:"noa.controller.pageControllers.VirtualConsoleGamesDetailPageController"}],"#body_wii_what_accessories_zapper_howdoiuseit":[{controller:"noa.controller.pageControllers.ZapperHowDoIUseItController"}],"http(s)?://[^/]*/search/?(#[^/]*)?$":[{controller:"noa.controller.search.SearchMainController"}],"http(s)?://[^/]*/wii/channels/?$":[{controller:"noa.controller.DrawerController"}],"#videoArea":[{controller:"noa.controller.VideoAutoEmbedController"}],"#multiVideo":[{controller:"noa.controller.VideoMultiEmbedController"}],"#primaryNav":[{controller:"noa.controller.navigation.GlowController"}],"#globalSearch":[{controller:"noa.controller.search.SearchController"}],"#gamesguide_dropdown":[{controller:"noa.controller.DropDownController"}],"#games_region":[{controller:"noa.controller.GamesListController"}],"#gameguide":[{controller:"noa.controller.GameGuideController"}],"#gameRelease":[{controller:"noa.controller.MiniDataPanelController"}],"#zapperRelease":[{controller:"noa.controller.MiniDataPanelController"}],"#iwatasidebar":[{controller:"noa.controller.IwataSideBarController"}],"#virtualConsoleGamesList":[{controller:"noa.controller.VCController"}],"#gameSliderHolder":[{controller:"noa.controller.gameSliderController"}],"#mainContentContainer.error_404":[{controller:"noa.controller.ErrorPageController"}]};dojo.provide("noa.behavior.AlterClassBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.AlterClassBehavior",mojo.command.Behavior,{execute:function(D){var C=D.paramsObj.method;var B=$(D.paramsObj.element);var A=D.paramsObj.className;if(!B){return }if(C=="set"){B.setProperty("class",A)}else{if(!C||C=="remove"||C=="add"){B[(C||"add")+"Class"](A)}}}});dojo.provide("noa.behavior.CommunicateWithVideoPlayerBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.CommunicateWithVideoPlayerBehavior",mojo.command.Behavior,{execute:function(F){var D=F.getParams();var E=$(F.callerObj);this.videoPlayer=$("videoplayer_noa");if(!this.videoPlayer){return }try{var B=D.theLink?$(D.theLink).getProperty("href"):$(E).getProperty("title");$("video_caption").innerHTML=B}catch(C){}var A={video_path:D.theLink?$(D.theLink).getProperty("href"):E.getProperty("href"),video_name:D.theLink?($(D.theLink).getProperty("title")||""):(E.getProperty("title")||""),id:this.getVideoId(D.theLink?$(D.theLink):E),autoplay:"true"};this.sendCommand(D,A)},getVideoId:function(C){var B=C.className.split(" ");var A;B.forEach(function(E){var D;if(D=E.match(/videoID_(.*)/)){A=D[1]}},this);return A?A:""},sendCommand:function(D,C){var F=$("video_datasender");if(!F){F=new Element("div",{id:"video_datasender"});$(this.videoPlayer.parentNode).adopt(F)}if(!mojo.Model.contains("/flash/localconnection/id")){var B=(new Date()).getTime();mojo.Model.set("/flash/localconnection/id",B)}else{var B=mojo.Model.get("/flash/localconnection/id")}var E=new SWFObject("/video/videoplayer_datasender.swf","datasender",1,1,D.min_version||"7","#FFFFFF");E.addVariable("command",D.command);var A=$merge(C,D.videoParams);$each(A,function(H,G){E.addVariable(G,H)});E.addVariable("local_connection_id",B);E.write(F)}});dojo.provide("noa.behavior.ConvertClassToIDBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.ConvertClassToIDBehavior",mojo.command.Behavior,{execute:function(B){var A=B.paramsObj.callerClass;if(A){mojo.History.getInstance().setHash(A)}if(!A){return }}});dojo.provide("noa.behavior.EmbedFlashBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.EmbedFlashBehavior",mojo.command.Behavior,{execute:function(E){if(!mojo.Model.contains("/flash/localconnection/id")){var A=(new Date()).getTime();mojo.Model.set("/flash/localconnection/id",A)}else{var A=mojo.Model.get("/flash/localconnection/id")}var D=E.getParams();var B=new SWFObject(D.swf_path,D.swf_path.split("/").getLast().split(".")[0],D.width,D.height,D.min_version||"7",D.background_color||"#FDFDFD");D.variables.each(function(F){B.addVariable(F.property,F.value)});D.parameters.each(function(F){B.addParam(F.property,F.value)});B.addVariable("local_connection_id",A);var C=B.write(D.target_id);if(!C){$(mojo.queryFirst(".noFlash")).setStyle("visibility","visible")}}});dojo.provide("noa.behavior.EmbedMultiFlashBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.EmbedMultiFlashBehavior",mojo.command.Behavior,{execute:function(B){var I=true;var F=function(O){var N=O.className.split(" ");var M;N.forEach(function(Q){var P;if(P=Q.match(/videoID_(.*)/)){M=P[1]}},this);return M?M:""};var J=mojo.query(".videoholder");var G={};G.swf_path="/video/videoplayer_noa.swf";G.background_color="#fdfdfd";G.width=0;G.height=0;var K=B.contextObj;G.parameters=Array();G.parameters[0]={property:"scale",value:"noscale"};G.parameters[1]={property:"salign",value:"lt"};G.variables=Array();G.variables[0]={property:"autoplay",value:"false"};G.variables[1]={property:"video_path",value:"https://web.archive.org/web/20090604123521/http://205.166.76.51/bin/M_U2oRAxLjnb-rlCF-cknTDa6WKyps6h/82NEqh2-isHAOuXH5mPLr3e642yyKGE9.flv"};G.variables[2]={property:"theme_color_timeline",value:"#353535"};G.variables[3]={property:"theme_color_played",value:"#34BEED"};G.variables[4]={property:"theme_color_loaded",value:"#1B5469"};G.variables[5]={property:"video_name",value:"bla"};G.variables[6]={property:"id",value:"bla"};for(var H=0;H<J.length;H++){G.variables[1].value=mojo.queryFirst(".videoLink",J[H]).href;G.target_id=J[H].id;G.variables[6].value=F($(J[H]).getElement(".videoLink"));G.variables[5].value=$(J[H]).getElement(".videoLink").getProperty("title")||"";var E=mojo.queryFirst(".videoArea",J[H]);var D=E.className.split(" ");for(b=0;b<D.length;b++){if(D[b].indexOf("w_")>-1){G.width=parseInt(D[b].replace("w_",""))}if(D[b].indexOf("h_")>-1){G.height=parseInt(D[b].replace("h_",""))}}if(I==true){var A=(new Date()).getTime();var C=new SWFObject(G.swf_path,G.swf_path.split("/").getLast().split(".")[0],G.width,G.height,G.min_version||"7",G.background_color||"#FDFDFD");G.variables.each(function(M){C.addVariable(M.property,M.value)});G.parameters.each(function(M){C.addParam(M.property,M.value)});C.addVariable("local_connection_id",A);var L=C.write(G.target_id);if(!L){$(mojo.queryFirst(".noFlash",J[H])).setStyle("visibility","visible")}}}}});dojo.provide("noa.behavior.FireEventBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.FireEventBehavior",mojo.command.Behavior,{execute:function(D){var B=D.paramsObj.element;var C=D.paramsObj.theEvent;var A=D.paramsObj.delay;if(A){mojo.fireEvent.delay(A,this,[B,C])}else{mojo.fireEvent(B,C)}}});dojo.provide("noa.behavior.InjectPopupSizeIntoURLBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.InjectPopupSizeIntoURLBehavior",mojo.command.Behavior,{execute:function(C){var B=C.callerObj.href;if((new RegExp("/videoplayer/")).test(B)&&!(new RegExp("/wii/what/iwataasks/videoplayer/(.*)/[0-9]*/[0-9]*/?$")).test(B)&&!(new RegExp("/wii/what/faq/videoplayer/(.*)/[0-9]*/[0-9]*/?$")).test(B)){var A=$(C.callerObj).getProperty("rel").split(" ");B=B.replace(/\/$/,"");B+="/"+A[1]+"/"+A[2];C.callerObj.href=B}C.invocation.proceed(C)}});dojo.provide("noa.behavior.MapToCountryServletFilterBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.MapToCountryServletFilterBehavior",mojo.command.Behavior,{execute:function(E){for(var B=0,C=E.paramsObj.links.length;B<C;B++){var D=E.paramsObj.links[B];var A=D.rel.split("_");D.href="/servlet/SelectCountry?country="+A[0]+"&lang="+A[1]}}});dojo.provide("noa.behavior.PreventDefaultEventBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.PreventDefaultEventBehavior",mojo.command.Behavior,{execute:function(B){try{(new Event(B.getEvent())).preventDefault();(new Event(B.getEvent())).stop()}catch(A){}}});dojo.provide("noa.behavior.RestartAnimatedGIFBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.RestartAnimatedGIFBehavior",mojo.command.Behavior,{execute:function(C){var B=C.paramsObj.imageElement;var A=B.src;if(B.src.indexOf(".gif")!=-1){B.src="";B.src=A}}});dojo.provide("noa.behavior.SendMessageBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.SendMessageBehavior",mojo.command.Behavior,{execute:function(A){mojo.Messaging.publish(A.paramsObj.topic,A.paramsObj.message)}});dojo.provide("noa.behavior.SendThroughExternalInterstitialBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.SendThroughExternalInterstitialBehavior",mojo.command.Behavior,{execute:function(A){$$(A.paramsObj.selector).each(function(B){B.href="/en/leaving?destination="+B.href})}});dojo.provide("noa.behavior.SetHashBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.SetHashBehavior",mojo.command.Behavior,{execute:function(A){mojo.History.getInstance().setHash(A.paramsObj.value)}});dojo.provide("noa.behavior.SetHistoryBehavior");dojo.require("mojo.command.Behavior");dojo.require("mojo.History");dojo.declare("noa.behavior.SetHistoryBehavior",mojo.command.Behavior,{execute:function(C){if(C.getParams()){var A=mojo.History.getInstance();var B=A._parseObj(C.getParams());mojo.History.getInstance().setHash(B)}}});dojo.provide("noa.behavior.SetVideoTitleBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.SetVideoTitleBehavior",mojo.command.Behavior,{execute:function(F){var A=$$("#videoPlayerArea h4")[0];var D=F.getParams();if(D){if(D.theLink){var C=D.theLink}}if(!C){var C=F.callerObj}var E=mojo.queryFirst("body");while(C!=E){try{C=$(C).parentNode;if($(C).hasClass("promo")&&$(C).hasClass("image")){break}}catch(B){break}}if(C==E){C=null}try{if(C){$(A).setText($(C).getElement("h5").getText())}}catch(B){}}});dojo.provide("noa.behavior.ShowOrHideElementsBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.ShowOrHideElementsBehavior",mojo.command.Behavior,{execute:function(E){var B=E.paramsObj.highlightId;var D=$type(E.paramsObj.elements)=="array"?E.paramsObj.elements:$A(E.paramsObj.elements);var C=E.paramsObj.prefix||"";if(D.length==0){return }if(!B){B=E.paramsObj.defaultElement}for(i=0;i<D.length;i++){var A=D[i];if(A.id==(C+B)){A.style.display="block"}else{if(A.id=="vfullsize"){}else{A.style.display="none"}}}}});dojo.provide("noa.behavior.UpdateVideoGroupLinksBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.UpdateVideoGroupLinksBehavior",mojo.command.Behavior,{execute:function(F){var D=F.getParams();var C=F.callerObj;var E=mojo.queryFirst("body");var A=$("groupSubSelect");while(C!=E){C=$(C.parentNode);if(C.hasClass("promo")&&C.hasClass("image")){break}}if(C==E){return }A.empty();var B;if(B=C.getElements("ul li")){B.forEach(function(H,G){newLink=new Element("a",{href:H.getElement("a").getProperty("href")});newLink.setText("Video "+(G+1));newLink.videoTitle=C.getElement("h5").getText();newListItem=new Element("li");newLink.injectInside(newListItem);newListItem.injectInside(A)})}mojo.controller.Controller.updateObservers("noa.controller.pageControllers.VideoPageController")}});dojo.provide("noa.behavior.games.TagGameguideAsHavingBeenUsedBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.games.TagGameguideAsHavingBeenUsedBehavior",mojo.command.Behavior,{execute:function(A){if(!mojo.Model.contains("/games/guide/used")){mojo.Model.set("/games/guide/used",true);mojo.Messaging.publish("/games/guide/usedonce")}}});dojo.provide("noa.behavior.search.DetectSupportCodeBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.search.DetectSupportCodeBehavior",mojo.command.Behavior,{execute:function(F){var C=$(F.callerObj);var A=$$("#textb_container input");if(A.length>0){var B=A[0].getValue()}else{if(C){if(textInput=C.getElement("input[type=text]")){var B=textInput.getValue()||null}}}if(/^\d{5,6}$/.test(B)){if(F.callerObj&&(F.callerObj.declaredClass=="noa.controller.search.SearchMainController")){A[0].value="";return }if(F.eventObj){var E=(new Event(F.eventObj));E.preventDefault();E.stop()}try{noa.controller.search.SearchMainController.haltSearch=true}catch(D){}window.location.href="/consumer/lookUp.jsp?code="+B}}});dojo.provide("noa.behavior.whatsnew.FilterWhatsNewResultsBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.whatsnew.FilterWhatsNewResultsBehavior",mojo.command.Behavior,{execute:function(D){var C=D.paramsObj?D.paramsObj.method:D.callerObj.href.split("#")[1];var A=$(D.callerObj)||$(dojo.filter(mojo.query("a.filterLink"),function(E){return E.hash=="#"+C})[0]);var B=A?A.getText():null;this.filterResults(C,B,A)},highlightNavLink:function(A){var B=$$("#tertiaryNav a");B.each(function(C){if(C==A){C.setStyle("color","#636363")}else{C.setStyle("color","#0090C7")}})},filterResults:function(D,C,H){$("contentHeader").setText(C);this.highlightNavLink(H);var G=$("itemList");var I=G.getElements("li");for(var B=0,E=I.length;B<E;B++){if(D=="all"){I[B].setStyle("display","block")}else{if(I[B].hasClass(D)){I[B].setStyle("display","block")}else{I[B].setStyle("display","none")}}}var F=G.getElements("li");var A=[];for(var B=0,E=F.length;B<E;B++){if(F[B].getStyle("display")=="block"){A.push(F[B])}}for(var B=0,E=A.length;B<E;B++){if((B%2)){A[B].addClass("l1");A[B].removeClass("l2")}else{A[B].removeClass("l1");A[B].addClass("l2")}}}});dojo.provide("noa.command.BindToAnchorBehavior");dojo.require("mojo.command.Command");dojo.declare("noa.command.BindToAnchorBehavior",mojo.command.Command,{execute:function(F){var A=mojo.query(".more");for(var D=0;D<A.length;D++){var B=false;var C=$(A[D]).getParent();while(B==false){if((C.className.indexOf("promoHotSpot")>-1)||(C.className.indexOf("image")>-1)){B=true}else{C=C.getParent()}}var E=A[D];dojo.connect(C,"onmouseover",function(){mojo.queryFirst(".more",this).fireEvent("mouseover");if(mojo.queryFirst(".more",this).className.indexOf("big")>-1){mojo.queryFirst(".more",this).addClass("hoverbig")}else{mojo.queryFirst(".more",this).addClass("hover")}});dojo.connect(C,"onmouseout",function(){mojo.queryFirst(".more",this).fireEvent("mouseout");mojo.queryFirst(".more",this).removeClass("hover");mojo.queryFirst(".more",this).removeClass("hoverbig")});dojo.connect(C,"onclick",function(G){var H=(new Event(G));H.preventDefault();H.stop();try{mojo.fireEvent(mojo.queryFirst(".more",this),"onclick")}catch(G){if(mojo.queryFirst(".more",this).target=="_blank"){window.open(mojo.queryFirst(".more",this).href)}else{window.location.href=mojo.queryFirst(".more",this).href}}})}}});dojo.provide("noa.command.games.ChooseOptionCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ChooseOptionCommand",mojo.command.Command,{execute:function(D){var A=D.callerObj;if(A.checked){var C=A.parentNode.parentNode.parentNode.parentNode;var B=mojo.queryFirst(".description",C);this.selectOption(A)}else{this.deSelectOption(A)}},selectOption:function(B){var E=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(E,"selected");dojo.addClass(E,"selected");var I=B.parentNode.parentNode.parentNode.parentNode;var F=mojo.queryFirst(".header",I);var A=mojo.queryFirst(".images",I);var C=mojo.queryFirst(".description",I);var K=document.createElement("img");K.src=E.src;K.className="image";K.id=E.id;K.style.position="relative";K.style.marginTop="5px";this.swapImage(K,"head");if(A.getElementsByTagName("img").length>=1){A.appendChild(K)}else{var H=E.offsetHeight;B.disabled=true;var J=new Fx.Styles(F,{duration:200,onComplete:function(){A.appendChild(K);B.disabled=false}});J.start({"height":65});new Fx.Styles(C,{duration:200,onComplete:function(){C.innerHTML=I.title}}).start({"top":5})}if(A.getElementsByTagName("img").length==mojo.query(".option",I).length&&A.getElementsByTagName("img").length>0){var D=mojo.queryFirst(".allOption",I);D.checked=true}var G=mojo.queryFirst("#gameguide").accordionObj;G.params[I.getAttribute("name")].push(B.value)},deSelectOption:function(B){var F=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(F,"selected");var L=B.parentNode.parentNode.parentNode.parentNode;var H=mojo.queryFirst(".header",L);var A=mojo.queryFirst(".images",L);var C=mojo.queryFirst(".description",L);this.swapImage(F,"option");if(A.getElementsByTagName("img").length>1){for(var G=0;G<A.childNodes.length;G++){if(A.childNodes[G].id==F.id){var I=this;A.removeChild(A.childNodes[G]);break}}}else{var L=B.parentNode.parentNode.parentNode.parentNode;var C=mojo.queryFirst(".description",L);new Fx.Styles(C,{duration:200}).start({"top":10});var I=this;var J=A.getElementsByTagName("img")[0];if(J==null){return }B.disabled=true;new Fx.Styles(H,{duration:200,onComplete:function(){B.disabled=false;C.innerHTML=L.panelObj.originalTitle}}).start({"height":48});A.removeChild(J)}if(A.getElementsByTagName("img").length<mojo.query(".option",L).length){var D=mojo.queryFirst(".allOption",L);D.checked=false}var K=mojo.queryFirst("#gameguide").accordionObj;var E=K.params[L.getAttribute("name")];for(var G=0;G<E.length;G++){if(E[G]==B.value){E.splice(G,1);break}}},removeNode:function(A,B){A.removeChild(B)},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")},onResponse:function(){}});dojo.provide("noa.command.games.ClearOptionsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ClearOptionsCommand",mojo.command.Command,{execute:function(A){var E=mojo.queryFirst("#gameguide");var H=mojo.query(".panel","#gameguide");for(var F=0;F<H.length;F++){var C=H[F];var B=mojo.queryFirst(".allOption",C);if(B){B.checked=false}var D=mojo.queryFirst(".description",C);var G=mojo.queryFirst(".header",C);new Fx.Styles(D,{duration:200}).start({"top":10});new Fx.Styles(G,{duration:200}).start({"height":48});D.innerHTML=C.panelObj.originalTitle;var I=mojo.query(".gameguideOption",C);this.deSelectAll(I)}},deSelectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];C.checked=false;this.deSelectOption(C)}},deSelectOption:function(B){var E=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(E,"selected");var I=B.parentNode.parentNode.parentNode.parentNode;var G=mojo.queryFirst(".header",I);var A=mojo.queryFirst(".images",I);var C=mojo.queryFirst(".description",I);this.swapImage(E,"option");for(var F=0;F<A.childNodes.length;F++){if(A.childNodes[F].id==E.id){A.removeChild(A.childNodes[F]);break}}var H=mojo.queryFirst("#gameguide").accordionObj;var D=H.params[I.getAttribute("name")];for(var F=0;F<D.length;F++){if(D[F]==B.value){D.splice(F);break}}},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")},onResponse:function(A){}});dojo.provide("noa.command.games.InitializeCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.InitializeCommand",mojo.command.Command,{execute:function(H){var D=H.paramsObj.panels;for(var E=0;E<D.length;E++){var B=D[E];var C=mojo.queryFirst(".content",B);var F=C.scrollHeight;var A=mojo.queryFirst(".description",B);B.panelObj={contentHeight:F,originalTitle:A.innerHTML};C.style.height="0px"}var G=mojo.queryFirst("#gameguide");G.accordionObj.params={qhardware:[],qesrbRating:[],qplay:[],qgenre:[]}}});dojo.provide("noa.command.PopUpCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.PopUpCommand",mojo.command.Command,{execute:function(A){var D=A.callerObj;var C=$(D).getProperty("rel").split(" ");var I={width:C[1],height:C[2],directories:C[3]||"false",location:C[4]||"false",menubar:C[5]||"false",resizable:C[6]||"false",scrollable:C[7]||"false",status:C[8]||"false",toolbar:C[9]||"false"};var B=I.width;var M=I.height;var F=(screen.width)?(screen.width-B)/2:0;var L=(screen.height)?(screen.height-M)/2:0;var K=A.callerObj.href;var H="Nintendo_of_America";var J=new Array();$each(I,function(O,N){J.push(N+"="+O)});var E=J.join(",")+",top="+Math.round(L)+",left="+Math.round(F);if(this.win&&!this.win.closed){try{this.win.innerHeight=I.height;this.win.innerWidth=I.width}catch(G){this.win.resizeTo(I.width,I.height)}}this.win=window.open(K,H,E,false);this.win.focus()}});dojo.provide("noa.command.games.SearchCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SearchCommand",mojo.command.Command,{execute:function(D){var B=D.callerObj.parentNode;var C=B.getElementsByTagName("input")[0];var A=D.paramsObj.accordionObj;A.params.keyword=C.value}});dojo.provide("noa.command.games.SelectAllOptionsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SelectAllOptionsCommand",mojo.command.Command,{execute:function(G){var A=G.callerObj;var D=A.parentNode.parentNode.parentNode;var B=mojo.queryFirst(".description",D);var F=mojo.queryFirst(".header",D);var C=mojo.query(".gameguideOption",D);A.disabled=true;if(A.checked){var E=this;if(F.getElementsByTagName("img").length==0){new Fx.Styles(B,{duration:200}).start({"top":5});new Fx.Styles(F,{duration:200,onComplete:function(){E.selectAll(C);A.disabled=false;B.innerHTML=D.title;E.onResponse()}}).start({"height":65})}else{this.selectAll(C);A.disabled=false}}else{var E=this;new Fx.Styles(B,{duration:200}).start({"top":10});new Fx.Styles(F,{duration:200,onComplete:function(){A.disabled=false;B.innerHTML=D.panelObj.originalTitle;E.onResponse()}}).start({"height":48});this.deSelectAll(C)}},selectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];if(!C.checked){C.checked=true;this.selectOption(C)}}},deSelectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];C.checked=false;this.deSelectOption(C)}},selectOption:function(B){var D=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(D,"selected");dojo.addClass(D,"selected");var C=B.parentNode.parentNode.parentNode.parentNode;var G=mojo.queryFirst(".header",C);var F=mojo.queryFirst(".images",C);var E=document.createElement("img");E.src=D.src;E.className="image";E.id=D.id;E.style.position="relative";E.style.marginTop="5px";this.swapImage(E,"head");F.appendChild(E);var A=mojo.queryFirst("#gameguide").accordionObj;A.params[C.getAttribute("name")].push(B.value)},deSelectOption:function(B){var E=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(E,"selected");var I=B.parentNode.parentNode.parentNode.parentNode;var G=mojo.queryFirst(".header",I);var A=mojo.queryFirst(".images",I);var C=mojo.queryFirst(".description",I);this.swapImage(E,"option");for(var F=0;F<A.childNodes.length;F++){if(A.childNodes[F].id==E.id){this.removeNode(A,A.childNodes[F]);break}}var H=mojo.queryFirst("#gameguide").accordionObj;var D=H.params[I.getAttribute("name")];for(var F=0;F<D.length;F++){if(D[F]==B.value){D.splice(F);break}}},removeNode:function(A,B){A.removeChild(B)},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")},enableCheckBox:function(A){A.disabled=false},onResponse:function(){}});dojo.provide("noa.command.games.ShowCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ShowCommand",mojo.command.Command,{execute:function(A){var H=mojo.queryFirst("#gameguide").accordionObj;var C=H.expandedPanel;var K=mojo.queryFirst(".header",C);var G=A.callerObj.parentNode;var B=A.callerObj;if(C!==G){var E=mojo.queryFirst(".content",C);var D=new Fx.Styles(E,{duration:200});D.start({"height":0});dojo.removeClass(K,"expand");var I=mojo.queryFirst(".content",G);var J=mojo.queryFirst(".subheader",I).offsetHeight+mojo.queryFirst(".options",I).offsetHeight+"px";var F=new Fx.Styles(I,{duration:200});F.start({"height":J});H.expandedPanel=G;dojo.addClass(B,"expand")}}});dojo.provide("noa.command.games.ShowComponentCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ShowComponentCommand",mojo.command.Command,{execute:function(B){var A=mojo.queryFirst("#gameguide");A.style.visibility="visible"}});dojo.provide("noa.command.UpdateOverlabel");dojo.require("mojo.command.Command");dojo.declare("noa.command.UpdateOverlabel",mojo.command.Command,{execute:function(D){var A=$(D.paramsObj.label)||D.callerObj;var C=$(mojo.queryFirst("#"+A.getProperty("for")))||{value:""};var B=D.paramsObj.focusField||false;if((C.value!=="")||B){A.setStyle("display","none");C.setStyle("visibility","visible")}else{A.setStyle("display","block");C.setStyle("visibility","hidden")}if(B){C.focus()}}});dojo.provide("noa.command.VC.DrawPaginationControlsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.DrawPaginationControlsCommand",mojo.command.Command,{execute:function(E){var C=mojo.Model.get("VCGamesData");if(C){if(!C.pageSize){C={};C.pageSize=15}var D=mojo.Model.get("VCGames");var B=mojo.query(".gamesTotalCount",$("mainSecondary"));var A="";for(i=1;i<Math.ceil((D.total)/C.pageSize);i++){if(C.page==(i-1)){A+=i+" "}else{A+='<a href="#" class="pagControl" onclick="return false">'+i+"</a> "}}var B=mojo.query(".paginationControls",$("mainSecondary"));for(i=0;i<B.length;i++){B[i].innerHTML=A}mojo.controller.Controller.updateObservers()}}});dojo.provide("noa.command.VC.GetCurrentPageCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.GetCurrentPageCommand",mojo.command.Command,{execute:function(A){payload={};payload.id=Array();var B=mojo.Model.get("VCGames");var C=mojo.Model.get("VCGamesData");if(B.game){var F=C.page;var G=C.pageSize;var H=G?F*G:0;var I=G?H+G:B.game.length-1;if(I>B.game.length){I=B.game.length-1}for(i=H;i<=I;i++){payload.id[i-H]=B.game[i].id}mojo.Model.set("PagePayload",payload);var E=noa.service.Locator.getInstance();if(noa.static_mode){var D=E.getService("getGameSpecifics_VCStatic")}else{var D=E.getService("getGameSpecifics")}noa.command.games.currentXhr=D.invoke(payload,this);$("virtualConsoleGamesList").setStyle("display","block");$("vc_games_indicator").style.visibility="visible"}else{if($defined(B.total)&&B.total==0){$("virtualConsoleGamesList").setStyle("display","none")}}},onResponse:function(B,E){if(B.game&&$type(B.game)!="array"){B.game=[B.game]}setTimeout("$('vc_games_indicator').style.visibility = 'hidden';",500);var D=mojo.Model.get("VCGamesData");var F=mojo.Model.get("PagePayload").id;var G={};G.game=Array();for(i=0,len=F.length;i<len;i++){var C=0;for(b=0,len=B.game.length;b<len;b++){if(B.game[b].id==F[i]){C=b;break}}G.game.length++;G.game[G.game.length-1]=B.game[C]}B.game=G.game;for(i=0,len=B.game.length;i<len;i++){B.game[i].system=B.game[i].system.replace("VC - ","");B.game[i].rowclass="";if((i%2)==1){B.game[i].rowclass="alt"}}D.game=D.game.concat(B.game);D.total=D.game.length;B.direction=D.direction;mojo.Model.set("VCGamesData",D);var A=$("gameList");A.innerHTML=TrimPath.parseTemplate(mojo.Model.get("vc_template")).process(B);mojo.controller.Controller.updateObservers()},onError:function(){}});dojo.provide("noa.command.VC.GetVCTitlesCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.GetVCTitlesCommand",mojo.command.Command,{execute:function(E){payload={};var D=mojo.Model.get("VCGames");var C=mojo.Model.get("VCGamesData");payload.qsortBy=C.sortby;payload.qdirection=C.direction[C.sortby];payload.qhardware="VC";var B=noa.service.Locator.getInstance();var A=B.getService("getGames");noa.command.games.currentXhr=A.invoke(payload,this);$("vc_games_indicator").style.visibility="visible"},onResponse:function(A,C){A.total=parseInt(A.total);if(A.game&&$type(A.game)!="array"){A.game=[A.game]}A.direction=C.qdirection;mojo.Model.set("VCGames",A);var B=mojo.query(".gamesTotalCount",$("mainSecondary"));for(i=0,len=B.length;i<len;i++){B[i].innerHTML=A.total}}});dojo.provide("noa.command.VC.SetNextPageCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.SetNextPageCommand",mojo.command.Command,{execute:function(C){var A=mojo.Model.get("VCGamesData");var B=mojo.Model.get("VCGames");A.page++;if(A.page>((Math.ceil(B.total/A.pageSize))-2)){A.page--}mojo.Model.set("VCGamesData",A)}});dojo.provide("noa.command.VC.SetPageCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.SetPageCommand",mojo.command.Command,{execute:function(D){var C=D.callerObj;var B=parseInt(C.innerHTML);var A=mojo.Model.get("VCGamesData");A.page=B-1;mojo.Model.set("VCGamesData",A)}});dojo.provide("noa.command.VC.SetSortCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.SetSortCommand",mojo.command.Command,{execute:function(F){var C=mojo.Model.get("VCGames");var B=mojo.Model.get("VCGamesData");var D=$(F.callerObj);var E=D.className.replace("_","").split(" ")[0];if(B.sortby!=E){if(D.hasClass("descending")){direction="descend";D.addClass("descending");D.removeClass("ascending")}else{direction="ascend";D.addClass("ascending");D.removeClass("descending")}}else{if(D.hasClass("ascending")){direction="descend";D.removeClass("ascending");D.addClass("descending")}else{if(D.hasClass("descending")){direction="ascend";D.addClass("ascending");D.removeClass("descending")}}}B.sortby=E;B.direction[E]=direction;var A=$(F.getContextElement());(5).times(function(G){A.removeClass("sortby_t"+(G+1))});A.addClass("sortby_"+D.getParent().className);mojo.Model.set("VCGamesData",B)}});dojo.provide("noa.command.VC.SetupVCComponentCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.SetupVCComponentCommand",mojo.command.Command,{execute:function(A){$("vc_template").value=$("vc_template").value.replace(/!\{/g,"${");mojo.Model.set("vc_template",$("vc_template").value.replace(/!\{/g,"${"));mojo.Model.set("VCGames",{});mojo.Model.set("VCGamesData",{total:0,game:[],page:0,pageSize:null,sortby:"title",direction:{title:"ascend"}})}});dojo.provide("noa.command.animation.ListScrollBehavior");dojo.require("mojo.command.Command");dojo.declare("noa.command.animation.ListScrollBehavior",mojo.command.Command,{_isAnimating:false,execute:function(B){var D=$(B.callerObj).getParent();while(D.getTag()!="body"){if(D.id.test(B.paramsObj.containerId)){var I=mojo.queryFirst(B.paramsObj.listClass,D);break}D=D.getParent()}if(!I){return }if(this._isAnimating===true){return }var F=this;var K=new Fx.Styles(I,{duration:400,transition:Fx.Transitions.Cubic.easeOut,onStart:function(){F._isAnimating=true},onComplete:function(){F._isAnimating=false}});var J=B.paramsObj.direction;var H;if(J=="left"){if(parseInt(I.offsetLeft)==0){return }H=parseInt(I.offsetLeft)+parseInt(B.paramsObj.distance)}else{var G=Math.ceil(I.getElementsByTagName("li").length/4);var E=Math.abs(parseInt(I.offsetLeft))/parseInt(B.paramsObj.distance)+1;if(G==E){return }H=parseInt(I.offsetLeft)-parseInt(B.paramsObj.distance)}K.start({"left":H});var A=D.getElement("a.back");var C=D.getElement("a.forward");if(G==(E+1)){C.addClass("disabled")}else{C.removeClass("disabled")}if(H==0){A.addClass("disabled")}else{A.removeClass("disabled")}}});dojo.provide("noa.command.animation.MorphStylesBehavior");dojo.require("mojo.command.Command");dojo.declare("noa.command.animation.MorphStylesBehavior",mojo.command.Command,{execute:function(C){var B=$type(C.paramsObj.elements)=="array"?C.paramsObj.elements:[C.paramsObj.elements];var A=B.map(function(D){return new Fx.Styles(D,C.paramsObj.options)});A.forEach(function(D){D.start(C.paramsObj.styles)});return A}});dojo.provide("noa.command.animation.QueueBehavior");dojo.require("mojo.command.Command");dojo.require("mojo.Model");dojo.declare("noa.command.animation.QueueBehavior",mojo.command.Command,{_runningfx:false,execute:function(E){var E=E||this._requestObj;var C=E.paramsObj.queue||"animationQueue";if(!this._runningfx&&mojo.Model.contains(C)){var D=this;if(mojo.Model.get(C).length>0){this._runningfx=true;var A=mojo.Model.get(C).shift();var B=dojo.connect(A(),"stop",function(){D._runningfx=false;D.execute();dojo.disconnect(B)})}else{this._runningfx=false}}}});dojo.provide("noa.command.drawers.OpenDrawerCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.drawers.OpenDrawerCommand",mojo.command.Command,{execute:function(B){var G=$(B.callerObj.parentNode);var O=$(B.callerObj);var I=G;var L=O;if(O.hasClass("isOpened")){O.removeClass("isOpened");if(noa.command.drawers.lastNode!=O.id){this.closeDrawer(O,I)}}else{var N=mojo.queryFirst(".isOpened");if(N){$(N).removeClass("isOpened");if(noa.command.drawers.lastNode!=N.id){noa.command.drawers.lastNode=N.id;this.closeDrawer(N,N.parentNode)}}if(N!=O){$(O).addClass("isOpened");var P=$(G).getElement("div.menuDrawer");var K=$(G).getElement("div.drawerContents").getSize();var H=K.size["y"];var F=$(I).getStyles("width","height","padding","margin");var C=$(I).getCoordinates();var M=$("minorPromos").getCoordinates();var E=C.left-M.left;var J=C.top-M.top;syntheticName=L.getProperty("id")+"_placeholder";var A=new Element("div",{"id":syntheticName,"class":"promoItem","styles":{"overflow":"visible","padding":"0px 5px 20px 9px","margin":"0px 6px 25px -9px","zIndex":"1","float":"left","position":"relative","top":"0","left":"0"}});$(A).injectBefore(I);$(I).setStyles({"overflow":"visible","padding":"0px 5px 20px 9px","margin":"0","zIndex":"999","float":"left","top":J,"left":E,"position":"absolute"});var D=new Fx.Styles(P,{duration:250,transition:Fx.Transitions.Sine.easeOut,onComplete:function(){var Q=$(O.id);Q.setStyles({"position":"relative"})}});D.start({"height":[1,H]});openWiiMenuDrawer=O;O.addClass("openedDrawer");originalText=O.getText();O.setText("Close");return false}}},closeDrawer:function(D,H){var G=D;var A=H;D.removeClass("openedDrawer");D.setText(originalText);var C=$(A).getElement("div.menuDrawer");var F=$(A).getElement("div.drawerContents").getSize();var B=F.size["y"];var E=new Fx.Styles(C,{duration:100,transition:Fx.Transitions.Sine.easeIn,onComplete:function(){$(H).setStyles({"overflow":"visible","padding":"0px 5px 20px 9px","margin":"0px 6px 25px -9px","zIndex":"1","float":"left","position":"relative","top":"0","left":"0"});var I=G.getProperty("id")+"_placeholder";$(H).injectAfter(I);$(I).remove();var J=$(D.id);J.setStyles({"position":"absolute"})}});E.start({"height":[B,1]})}});noa.command.drawers.lastNode=null;dojo.provide("noa.command.drawers.SetupDrawersCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.drawers.SetupDrawersCommand",mojo.command.Command,{execute:function(F){var E=$$("a.call2action");for(j=0;j<E.length;j++){E[j].style.position="absolute";var C="drawer"+j;E[j].setProperty("id",C);var A=$(E[j].parentNode);A.setStyles({"overflow":"visible","padding":"0px 5px 20px 9px","margin":"0px 6px 25px -9px","zIndex":"1","float":"left","position":"relative","top":"0","left":"0"})}var B=mojo.query("a.call2action");for(var D=0;D<B.length;D++){B[D].onmouseover=function(){this.style.backgroundImage="url(/images/wii/menu/wii-menu-panel-footer-on.png)"};B[D].onmouseout=function(){this.style.backgroundImage="url(/images/wii/menu/wii-menu-panel-footer.png)"}}}});dojo.provide("noa.command.dropdown.CheckOpenDropdownCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.dropdown.CheckOpenDropdownCommand",mojo.command.Command,{execute:function(A){var C=new Date;var H=mojo.Model.get("dropdown/itemData");if(((C-noa.command.dropdown.closeHandler)>200)&&(noa.command.dropdown.openstatus==false)){setTimeout("noa.command.dropdown.openstatus = true;",500);var I=$("dropdownbody");var B=$("dropdowntail");var E=$("gamesguide_dropdown");E.className="ggdd_on";if(typeof document.body.style.maxHeight!="undefined"){I.style.backgroundImage="url('/images/games/guide/dd_downbox.png')";B.style.backgroundImage="url('/images/games/guide/dd_box_bot.png')"}else{}I.style.display="block";B.style.display="block";var G="";for(var F=0;F<H.length;F++){G+='<p class="dropdown_listitem" onclick="noa.command.dropdown.runDropDownSel(\''+H[F].split("|")[0]+"', '"+H[F].split("|")[1]+"')\" onmouseover=\"this.className='dropdown_listitem dropdown_listitem_on'\" onmouseout=\"this.className='dropdown_listitem'\">"+H[F].split("|")[0]+"</p>"}I.innerHTML=G;var D=noa.command.games.getCoords(E);I.style.top=43+"px";I.style.left=548+"px";B.style.top=43+I.offsetHeight+"px";B.style.left=548+"px";noa.command.dropdown.closeHandler=new Date()}},notify:function(A){}});dojo.provide("noa.command.dropdown.CloseDropDownCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.dropdown.CloseDropDownCommand",mojo.command.Command,{execute:function(A){noa.command.dropdown.removeDropDown()}});dojo.provide("noa.command.dropdown.SetupDataSetCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.dropdown.SetupDataSetCommand",mojo.command.Command,{execute:function(G){noa.command.IE6=false;if(navigator.appVersion.indexOf("MSIE")!=-1){temp=navigator.appVersion.split("MSIE");version=parseFloat(temp[1]);if(version<7){noa.command.IE6=true}}var B=$("gamesguide_dropdown");var C=B.getElementsByTagName("div");var E=Array();var F=0;for(var D=0;D<C.length;D++){if(C[D].className=="dropdownvalue"){E[F++]=C[D].innerHTML}else{}}mojo.Model.set("dropdown/itemData",E);dojo.connect(window,"onclick",this,noa.command.dropdown.removeDropDown);var A=$("dropdownbody");if(noa.command.IE6==true){}}});noa.command.dropdown.openstatus=false;noa.command.dropdown.closeHandler=new Date();noa.command.dropdown.removeDropDown=function(){if(noa.command.dropdown.openstatus==true){var A=$("dropdownbody");var B=$("dropdowntail");var C=$("gamesguide_dropdown");C.className="ggdd_off";A.style.display="none";B.style.display="none";noa.command.dropdown.openstatus=false;noa.command.dropdown.closeHandler=new Date()}};noa.command.dropdown.runDropDownSel=function(newlabel,jseval){$("dropdowndisplay").innerHTML=newlabel;eval(jseval);mojo.Model.set("dropdownvalue",noa.command.dropdown.value);noa.command.dropdown.removeDropDown()};noa.command.dropdown.value="title";dojo.provide("noa.command.games.AddHistoryItemCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.AddHistoryItemCommand",mojo.command.Command,{execute:function(G){var B=mojo.queryFirst("#gameguide").accordionObj;var A=B.params;var E="";for(var C in A){if(A[C] instanceof Array){E+=C+"="+escape(A[C].join(","))+"&"}}if(B.expandedPanel){E+="panel="+B.expandedPanel.getAttribute("name")}var F=mojo.Model.get("dropdownvalue")||"";if(F!=""){E+="&sortBy="+F}var D=window.location.href.substring(0,window.location.href.indexOf("#"));D+="#"+E;window.location.replace(D);noa.command.games.currentHash=E}});noa.command.games.setCookie=function(D,B,C){var A=new Date();A.setTime(A.getTime()+(C*24*3600*1000));document.cookie=D+"="+escape(B)+((C==null)?"":"; expires="+A.toGMTString())};dojo.provide("noa.command.games.ApplyElipsesCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ApplyElipsesCommand",mojo.command.Command,{constructor:function(){},execute:function(G){try{var F=G.callerObj.getParent().getParent().getParent().getParent();var D=mojo.queryFirst(".images",F);var C=mojo.queryFirst(".elipses",F);if(D.scrollHeight>(G.paramsObj.lines*14)){C.style.top=(D.offsetTop+14)+"px";C.style.display="block"}else{C.style.display="none"}}catch(E){var B=mojo.query(".images",G.contextObj);var A=mojo.query(".elipses",G.contextObj);for(i=0;i<B.length;i++){if(B[i].scrollHeight>(G.paramsObj.lines*14)){A[i].style.top=(B[i].offsetTop+14)+"px";A[i].style.display="block"}else{A[i].style.display="none"}}}}});dojo.provide("noa.command.games.ChooseOptionCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ChooseOptionCommand",mojo.command.Command,{execute:function(D){var A=D.callerObj;if(A.checked){var C=A.parentNode.parentNode.parentNode.parentNode;var B=mojo.queryFirst(".description",C);this.selectOption(A)}else{this.deSelectOption(A)}},selectOption:function(C){var J=C.parentNode.parentNode.parentNode.parentNode;var F=mojo.queryFirst(".header",J);var A=mojo.queryFirst(".images",J);var D=mojo.queryFirst(".description",J);var E=document.createElement("span");if(A.getElementsByTagName("span").length>0){var B=mojo.queryFirst(".gameguideName",C.parentNode).innerHTML.replace(/(<([^>]+)>)/ig,"");E.innerHTML=", "+B;E.id=C.value.replace(" ");A.appendChild(E)}else{C.disabled=true;var G=this;var K=new Fx.Styles(F,{duration:200,onComplete:function(){G.onSelectResponse(E,C,A);C.disabled=false}});new Fx.Styles(D,{duration:200,onComplete:function(){G.onSelectResponse(E,C,A);C.disabled=false;D.innerHTML=J.title}}).start({"top":9})}var I=mojo.queryFirst("#gameguide").accordionObj;try{I.params[J.getAttribute("name")].push(C.value)}catch(H){}},deSelectOption:function(B){var K=B.parentNode.parentNode.parentNode.parentNode;var F=mojo.queryFirst(".header",K);var A=mojo.queryFirst(".images",K);var C=mojo.queryFirst(".description",K);if(A.getElementsByTagName("span").length>1){var I=mojo.queryFirst("#"+B.value.replace(" "),A);try{A.removeChild(I)}catch(G){}}else{var K=B.parentNode.parentNode.parentNode.parentNode;var C=mojo.queryFirst(".description",K);new Fx.Styles(C,{duration:200,onComplete:function(){B.disabled=false;C.innerHTML=K.panelObj.originalTitle}}).start({"top":13});var H=A.getElementsByTagName("span")[0];B.disabled=true;A.removeChild(H)}this.correctHeaderValueText(A);var J=mojo.queryFirst("#gameguide").accordionObj;var D=J.params[K.getAttribute("name")];for(var E=0;E<D.length;E++){if(D[E]==B.value){D.splice(E,1);break}}},removeNode:function(A,B){A.removeChild(B)},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")},correctHeaderValueText:function(B){var A=B.getElementsByTagName("span")[0];if(A&&A.innerHTML.indexOf(",")!=-1){A.innerHTML=A.innerHTML.substring(2)}},onSelectResponse:function(B,A,D){var C=mojo.queryFirst(".gameguideName",A.parentNode).innerHTML.replace(/(<([^>]+)>)/ig,"");B.innerHTML=C;B.id=A.value;D.appendChild(B)},onResponse:function(){}});dojo.provide("noa.command.games.ClearGamesListCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ClearGamesListCommand",mojo.command.Command,{constructor:function(){},execute:function(A){$("games_landscape").innerHTML="";$("games_landscape").style.height="1px"},onError:function(A){mojo.Model.set("gamesError",A)}});dojo.provide("noa.command.games.ClearOptionsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ClearOptionsCommand",mojo.command.Command,{execute:function(A){var D=mojo.queryFirst("#gameguide");var H=mojo.query(".panel","#gameguide");for(var E=0;E<H.length;E++){var B=H[E];var C=mojo.queryFirst(".description",B);var F=mojo.queryFirst(".header",B);new Fx.Styles(C,{duration:200}).start({"top":13});C.innerHTML=B.panelObj.originalTitle;var I=mojo.query(".gameguideOption",B);this.deSelectAll(I);this.resetPanel(B)}var G=mojo.query(".elipses");for(var E=0;E<G.length;E++){G[E].style.display="none"}},deSelectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];C.checked=false}},resetPanel:function(B){var C=mojo.queryFirst(".images",B);C.innerHTML="";var A=mojo.queryFirst("#gameguide").accordionObj;A.params[B.getAttribute("name")]=[]},onResponse:function(A){}});dojo.provide("noa.command.games.DrawGamesBlockCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.DrawGamesBlockCommand",mojo.command.Command,{execute:function(A){var J=mojo.Model.get("gamesCache");var I=mojo.Model.get("gamesViewData");var K=mojo.Model.get("drawnGameIDs");var G=$("games_landscape");var D=document.createElement("div");if((I.list)&&(I.list.length>0)){D.innerHTML+=TrimPath.parseTemplate(mojo.Model.get("box_template")).process(I)}G.appendChild(D);var H=this;var C=G.getElementsByTagName("div");for(var E=0,F=C.length;E<F;E++){var B=C[E].id.substring(1);if(J.hasKey(B)&&J.get(B).renderOK=="yes"){C[E].style.top=J.get(B).absy+"px";C[E].style.left=J.get(B).absx+"px";C[E].style.display="block";K[B]=true}}mojo.Model.set("drawnGameIDs",K)}});noa.command.games.activeCallout=null;noa.command.games.calloutTimer=null;noa.command.games.isActive=false;noa.command.games.cancelCallout=function(A){clearTimeout(noa.command.games.calloutTimer);$("calloutPanel").style.display="none";noa.command.games.isActive=false};noa.command.games.throttleRemoveCallout=function(A){clearTimeout(noa.command.games.calloutTimer);noa.command.games.calloutTimer=setTimeout("noa.command.games.cancelCallout()",1)};noa.command.games.throttleCallout=function(A){clearTimeout(noa.command.games.calloutTimer);noa.command.games.activeCallout=A.id.replace("_","");if(noa.command.games.isActive){noa.command.games.setCalloutState()}else{noa.command.games.calloutTimer=setTimeout("noa.command.games.setCalloutState()",1000)}};noa.command.games.setCalloutState=function(){var B=0;var K=noa.command.games;var A=$("calloutPanel");A.style.display="block";A.style.visibility="hidden";var L=mojo.Model.get("gamesCache");var J=mojo.Model.get("gamesViewData");var C=K.windowRect();var H=$("_i_"+K.activeCallout);var F=K.getCoords(H);if((F.y-C.scrollTop)<((C.scrollTop+C.height)-(F.y+F.h))){B=1}var I={};I.list=Array(1);I.list[0]=L.get(K.activeCallout);var G=50;if(I.list[0].absx<300){G=253;A.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateleft")).process(I)}else{A.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateright")).process(I)}var M=K.getCoords(A);var E=K.getCoords($("_i2_"+K.activeCallout));var N=noa.command.games.getCoords($("games_region"));var D=$("_"+K.activeCallout);if(I.list[0].absx<300){A.style.left=parseInt(D.style.left.replace("px",""))-3+G+"px";A.style.top=parseInt(D.style.top.replace("px",""))+31-parseInt($("games_region").scrollTop)+"px"}else{A.style.left=parseInt(D.style.left.replace("px",""))+60+G+"px";A.style.top=parseInt(D.style.top.replace("px",""))+31-parseInt($("games_region").scrollTop)+"px"}A.style.visibility="visible";noa.command.games.isActive=true};noa.command.games.getCoords=function(B){var C,G;try{var A=B;C=B.offsetWidth;G=B.offsetHeight;for(var E=0,D=0;B!=null;){E+=B.offsetLeft;D+=B.offsetTop;B=B.offsetParent}for(;A!=document.body;){E-=A.scrollLeft;D-=A.scrollTop;A=A.parentNode}}catch(F){}return{x:E,y:D,h:G,w:C}};noa.command.games.windowRect=function(){var A,D;if(self.pageYOffset){A=self.pageXOffset;D=self.pageYOffset}else{if(document.documentElement&&document.documentElement.scrollTop){A=document.documentElement.scrollLeft;D=document.documentElement.scrollTop}else{if(document.body){A=document.body.scrollLeft;D=document.body.scrollTop}}}if(window.innerHeight){var C=window.innerWidth;var B=window.innerHeight}else{var C=document.documentElement.clientWidth;var B=document.documentElement.clientHeight}return{width:C,height:B,scrollTop:D,scrollLeft:A}};dojo.provide("noa.command.games.GetGamesViewCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.GetGamesViewCommand",mojo.command.Command,{constructor:function(){this.totalPages},execute:function(G){var F=G.paramsObj.gameGuideParams;var E="";if(!F){F={}}else{var B=0;for(i=0,len=F.qgenre.length;i<len;i++){if(F.qgenre[i]=="adventure"){F.qgenre.push("action");F.qgenre.push("arcade");F.qgenre.push("battle");F.qgenre.push("fighting");F.qgenre.push("first person");F.qgenre.push("pinball");F.qgenre.push("platformer");F.qgenre.push("shooter");B+=8}else{if(F.qgenre[i]=="rhythm"){F.qgenre.push("music");B+=1}else{if(F.qgenre[i]=="life training"){F.qgenre.push("education");F.qgenre.push("edutainment");F.qgenre.push("mental training");F.qgenre.push("productivity");B+=4}else{if(F.qgenre[i]=="sports"){F.qgenre.push("baseball");F.qgenre.push("basketball");F.qgenre.push("boxing");F.qgenre.push("extreme");F.qgenre.push("fishing");F.qgenre.push("football");F.qgenre.push("golf");F.qgenre.push("hockey");F.qgenre.push("miscellaneous");F.qgenre.push("soccer");F.qgenre.push("sports");F.qgenre.push("tennis");F.qgenre.push("wrestling");B+=13}else{if(F.qgenre[i]=="strategy"){F.qgenre.push("simulation");B+=1}else{if(F.qgenre[i]=="other"){F.qgenre.push("board games");F.qgenre.push("card games");F.qgenre.push("casino");F.qgenre.push("other");F.qgenre.push("virtual pet");B+=5}}}}}}}E=F.qdirection+F.qesrbRating.join(",")+F.qgenre.join(",")+F.qhardware.join(",")+F.qplay.join(",")+F.qrelease.join(",")+F.qsortBy}if(E=="undefined"){E="ascendtitle"}noa.command.games.searchHash=E;var D=mojo.Model.get("dropdownvalue");F.qsortBy=D||"default";F.qdirection=F.qsortBy!="title"?"descend":"ascend";var C=noa.service.Locator.getInstance();var A=C.getService("getGames");if(noa.command.games.currentXhr){noa.command.games.currentXhr.ioArgs.xhr.abort();noa.command.games.currentXhr=null}if(noa.command.games.currentDataXhr){noa.command.games.currentDataXhr.ioArgs.xhr.abort();mojo.Model.get("gamesRequestMarshal").isActive=false}noa.command.games.setThrobber(true);noa.command.games.currentXhr=A.invoke(F,this);F.qgenre.length-=B},onResponse:function(D){noa.command.games.currentXhr=null;if($type(D.game)!="array"){D.list=[D.game]}else{D.list=D.game}noa.command.games.setThrobber(false);if(D.total!="0"){mojo.queryFirst(".sortresultsc").style.visibility="visible";mojo.Model.set("viewRetrieved",true);var F=mojo.Model.get("gamesPerRow");var H=mojo.Model.get("gameItemHeight");var B=mojo.Model.get("gameItemWidth");var A=Math.ceil(D.list.length/F);var I=(D.list.length%F);mojo.Model.set("gamesRemainderCover",'<div class="games_backdrop" style="top: '+((A*H)-H)+"px; left: "+(B*(I))+"px; width:"+(B*(F-I))+"px; height:"+H+'px;"></div>');$("games_landscape").style.height=(A*H)+"px";mojo.Model.set("gamesView",D);var G=mojo.query(".games_count_number");for(var E=0;E<G.length;E++){G[E].innerHTML=D.list.length}$("title").className="title_results";var C=$("gameguide_instructions");C.innerHTML="Tell Gameguide what you're looking for and filter them down fast. You can check as many or as few options as you like.";C.style.color="black"}else{mojo.queryFirst(".sortresultsc").style.visibility="hidden";var F=mojo.Model.get("gamesPerRow");var H=mojo.Model.get("gameItemHeight");var B=mojo.Model.get("gameItemWidth");mojo.Model.set("gamesRemainderCover",'<div class="games_backdrop" style="top: 0px; left: 0px; width:'+(B*F)+"px; height:"+H*1+'px;"></div>');$("games_landscape").style.height=(1*H)+"px";var G=mojo.query(".games_count_number");for(var E=0;E<G.length;E++){G[E].innerHTML=0}$("games_landscape").innerHTML='<div class="noResults"><div style="padding-top: 60px;"><h4>No Games Found</h4>Gameguide can\'t find any games matching your request. <br/>Try changing your filters or click clear all choices to start over.</div></div>';setTimeout("noa.command.games.setThrobber(false);",500);var C=$("gameguide_instructions");C.innerHTML="Uncheck some boxes or click 'Clear all choices' to start over.";C.style.color="#DA474D"}},onError:function(A){mojo.Model.set("gamesError",A);noa.command.games.currentXhr=null}});noa.command.games.currentXhr=null;noa.command.games.searchHash;noa.command.games.setThrobber=function(A){if(A==true){$("throbber").style.visibility="visible"}else{$("throbber").style.visibility="hidden"}};dojo.provide("noa.command.games.GetRelevantDataCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.GetRelevantDataCommand",mojo.command.Command,{constructor:function(){this.totalPages},execute:function(A){var F=new Date();var B=new Date();if(!mojo.Model.contains("gamesCache")){mojo.Model.set("gamesCache",new Hash())}if(!mojo.Model.contains("drawnGameIDs")){mojo.Model.set("drawnGameIDs",new Array())}clearTimeout(noa.command.games.peakAhead);if(A.paramsObj){var H=A.paramsObj;if((H.destroyHTML)&&(H.destroyHTML==true)){$("games_landscape").innerHTML="";$("games_landscape").innerHTML=mojo.Model.get("gamesRemainderCover")||"";mojo.Model.set("drawnGameIDs",new Array())}if((H.preserveScroll)&&(H.preserveScroll==false)){$("games_landscape").scrollTop=0}if((H.renderExisting)&&(H.renderExisting==true)){var J=this.createResultsFromCache();if(J.list.length>0){var D=J.list;this.onResponse(D,{id:this.returnIDArray(J.list)});setTimeout("noa.command.games.setThrobber(false);",1000)}}}var K=$("games_region");if(K){if(mojo.Model.get("gamesRequestMarshal").isActive==false){var J=this.calcViewableItems(mojo.Model.get("gamesView"),K.scrollTop,K.offsetHeight,mojo.Model.get("gameItemHeight"),mojo.Model.get("gameItemWidth"),mojo.Model.get("gamesPerRow"));if((J.downloadOK==true)){var C={pageSize:J.pageSize,pageIndex:J.pageIndex,id:Array()};C.id=this.returnIDArray(J.gameData);var I=mojo.Model.get("gamesCache");if(C.id.length>0){if(C.id.some(function(L){return !I.hasKey(L)})){var G=noa.service.Locator.getInstance();var E=G.getService("getGameSpecifics");if(noa.command.games.currentDataXhr){noa.command.games.currentDataXhr.ioArgs.xhr.abort()}if(!noa.command.games.currentXhr){noa.command.games.currentDataXhr=E.invoke(C,this);mojo.Model.set("gamesRequestObj",J);mojo.Model.get("gamesRequestMarshal").isActive=true}}else{this.onResponse(C.id.map(function(L){return I.get(L)}),C)}}else{}}else{}}else{}}},createResultsFromCache:function(){var C=mojo.Model.get("gamesView");var E=mojo.Model.get("gamesCache");var B={};B.list=new Array();if(!C){return B}var A=0;for(var D=0;D<C.list.length;D++){if(E.hasKey(C.list[D].id)){B.list[A++]=E.get(C.list[D].id)}}return B},returnIDArray:function(B){var A=new Array();B.each(function(C){A.push(C.id)});return A},onResponse:function(E,A){data={};if(E.game){if($type(E.game)!="array"){data.list=[E.game]}else{data.list=E.game}}else{data.list=E}var L=new Hash();data.list.each(function(M){M.intro=M.intro.replace(/(<([^>]+)>)/ig,"");if(M.intro.length>100){M.intro=M.intro.substring(0,99)+".."}if(M.title.length>40){M.title=M.title.substring(0,39)+".."}if(M.genre.length>30){M.genre=M.genre.substring(0,29)+".."}L.set(M.id,M)});noa.command.games.currentDataXhr=null;mojo.Model.get("gamesRequestMarshal").isActive=false;var J=mojo.Model.get("gamesCache");var F=mojo.Model.get("gamesPerRow");var G=mojo.Model.get("gamesRequestObj");var C=mojo.Model.get("gameItemHeight");var H=mojo.Model.get("gameItemWidth");var I=$("games_region");var B=I.scrollTop;var K=mojo.Model.get("gameItemHeight");var D={list:new Array()};L.each(function(M,P){if(A.id.contains(P)){var N=this.getViewPos(P);if($type(N)=="boolean"&&N==false){M.renderOK="no"}else{M.renderOK="yes"}var O=(C*((Math.ceil((N)/F))))-C;if(N%F==0){O+=C}M.absx=(N%F)*H;M.absy=O;D.list.push(M)}J.set(P,M)}.bind(this));mojo.Model.set("gamesCache",J);mojo.Model.set("gamesViewData",D)},getViewPos:function(E){var B=mojo.Model.get("gamesView").list;var D=false;for(var C=0,A=B.length;C<A;C++){if(B[C].id==E){D=C;break}}return D},onError:function(A){mojo.Model.set("gamesError",A)},calcViewableItems:function(P,C,J,L,E,G){if(!P){return{downloadOK:false}}var S=mojo.Model.get("gamesCache");var K=mojo.Model.get("gamesPerRow");var I=mojo.Model.get("drawnGameIDs");var A=Math.ceil((C-L)/L);if(A<0){A=0}var D=Math.ceil((C+J)/L);var R=A*G;var H=(D*G);var Q={};Q.gameData=new Array();Q.gameData.length=0;var B=1;if(noa.command.games.movedUpLast==false){B=-1;noa.command.games.movedUpLast=true}else{noa.command.games.movedUpLast=false}var F=0;var O=0;while(F<(K*5)){O++;if(O>(2*Math.ceil(P.list.length/K))){break}for(var M=0;M<K;M++){try{if(!I[P.list[R+M].id]){Q.gameData[F]=P.list[R+M];F++}}catch(N){}}R+=(B*K);if(R<0){B=-1*B;R=0}if(R>=P.list.length-K){B=-1*B;R=P.list.length-K}}if(F>0){Q.downloadOK=true}else{Q.downloadOK=false}return Q}});noa.command.games.movedUpLast=true;dojo.provide("noa.command.games.InitializeCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.InitializeCommand",mojo.command.Command,{execute:function(A){var G=A.paramsObj.panels;for(var F=0;F<G.length;F++){var B=G[F];var H=mojo.queryFirst(".content",B);var C=mojo.queryFirst(".description",B);B.panelObj={originalTitle:C.innerHTML};H.style.height="1px";var I=B.getElementsByTagName("input");for(var E=0;E<I.length;E++){I[E].checked=false}}var D=mojo.queryFirst("#gameguide");D.accordionObj={};D.accordionObj.params={qhardware:[],qesrbRating:[],qplay:[],qgenre:[],qrelease:[],qsortBy:""}}});dojo.provide("noa.command.games.InitializeFromCookieCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.InitializeFromCookieCommand",mojo.command.Command,{execute:function(A){if(window.location.hash==""){var M=mojo.query("#gameguide .panel");var N=mojo.queryFirst("#gameguide").accordionObj;for(var I=0;I<M.length;I++){var B=M[I];var F=noa.command.games.getCookie(B.getAttribute("name"));if(F){var D=F.split(",");var K=mojo.queryFirst(".header",B);var C=mojo.queryFirst(".header .images",B);var E=mojo.queryFirst(".header .description",B);for(var H=0;H<D.length;H++){if(H==0){K.style.height="65px";E.style.top="5px";E.innerHTML=B.title}var J=mojo.queryFirst("#"+D[H].replace(" ","").toLowerCase()+"_option");var G=mojo.queryFirst(".optionImage",J);this.swapImage(G,"selected");dojo.addClass(G,"selected");var O=document.createElement("img");O.src=G.src;O.className="image";O.id=G.id;O.style.position="relative";O.style.marginTop="5px";this.swapImage(O,"head");C.appendChild(O);var L=mojo.queryFirst(".gameguideOption",J);L.checked=true;N.params[B.getAttribute("name")].push(D[H])}}}}},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")}});noa.command.games.getCookie=function(C){var B,A;if(document.cookie.length>0){B=document.cookie.indexOf(C+"=");if(B!=-1){B+=C.length+1;A=document.cookie.indexOf(";",B);if(A==-1){A=document.cookie.length}return unescape(document.cookie.substring(B,A))}}return null};dojo.provide("noa.command.games.InitializeFromHistoryCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.InitializeFromHistoryCommand",mojo.command.Command,{execute:function(R){var G=mojo.queryFirst("#gameguide").accordionObj;if(window.location.hash!=""){var E=mojo.query("#gameguide .panel");var B=window.location.hash.substring(1).split("&");var Q={};var A=false;for(var O=0;O<B.length;O++){var H=B[O];H=H.split("=");Q[H[0]]=H[1]}if(Q.panel==""||Q.panel==null){var J=mojo.queryFirst("#gameguide .panel");this.expandPanel(J)}for(var O=0;O<E.length;O++){var J=E[O];var P=Q[J.getAttribute("name")];if(P){panelParams=P.split(",");if(panelParams[0]!=""){var N=mojo.queryFirst(".header",J);var D=mojo.queryFirst(".header .images",J);var C=mojo.queryFirst(".header .description",J);A=false;for(var M=0;M<panelParams.length;M++){var K=mojo.queryFirst("#"+panelParams[M].toLowerCase().replace(" ","")+"_option");if(!K){continue}if(A==false){N.style.height="61px";C.style.top="5px";C.innerHTML=J.title.replace(/(<([^>]+)>)/ig,"");A=true}var L=mojo.queryFirst(".gameguideOption",K);L.checked=true;var I=document.createElement("span");var S=mojo.queryFirst(".gameguideName",K).innerHTML.replace(/(<([^>]+)>)/ig,"");if(M==0){I.innerHTML=S}else{I.innerHTML=", "+S}I.id=L.value;D.appendChild(I);var G=mojo.queryFirst("#gameguide").accordionObj;G.params[J.getAttribute("name")].push(panelParams[M])}}}var F=Q.panel;if(J.getAttribute("name")==F){this.expandPanel(J)}}if(Q.sortBy=="title"){$("dropdowndisplay").innerHTML="Alphabetical";$("games_landscape").innerHTML="";mojo.Model.set("dropdownvalue","title")}else{if(Q.sortBy=="releaseDate"){$("dropdowndisplay").innerHTML="Release-date";$("games_landscape").innerHTML="";mojo.Model.set("dropdownvalue","releaseDate")}}}else{var J=mojo.queryFirst("#gameguide .panel");this.expandPanel(J)}},expandPanel:function(C){var F=mojo.queryFirst(".options",C).offsetHeight+"px";var D=mojo.queryFirst(".content",C);var B=mojo.queryFirst("#gameguide").accordionObj;var E=".heightinfo";if(noa.command.IE6==true){E=".ie6_heightinfo"}var A=mojo.queryFirst(E,C).innerHTML+"px";D.style.height=A;B.expandedPanel=C;var G=mojo.queryFirst(".header",C);dojo.addClass(G,"expand")}});dojo.provide("noa.command.games.OperatePeakAheadCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.OperatePeakAheadCommand",mojo.command.Command,{execute:function(A){(function(){this.conditionPass()}).delay(500,this)},conditionPass:function(A){}});noa.command.games.peakAhead=null;dojo.provide("noa.command.games.SearchCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SearchCommand",mojo.command.Command,{execute:function(D){var B=D.callerObj.parentNode;var C=B.getElementsByTagName("input")[0];var A=D.paramsObj.accordionObj;A.params.keyword=C.value}});dojo.provide("noa.command.games.SelectAllOptionsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SelectAllOptionsCommand",mojo.command.Command,{execute:function(G){var A=G.callerObj;var D=A.parentNode.parentNode.parentNode;var B=mojo.queryFirst(".description",D);var F=mojo.queryFirst(".header",D);var C=mojo.query(".gameguideOption",D);A.disabled=true;if(A.checked){var E=this;if(F.getElementsByTagName("img").length==0){new Fx.Styles(B,{duration:200}).start({"top":5});new Fx.Styles(F,{duration:200,onComplete:function(){E.selectAll(C);A.disabled=false;B.innerHTML=D.title;E.onResponse()}}).start({"height":65})}else{this.selectAll(C);A.disabled=false}}else{var E=this;new Fx.Styles(B,{duration:200}).start({"top":10});new Fx.Styles(F,{duration:200,onComplete:function(){A.disabled=false;B.innerHTML=D.panelObj.originalTitle;E.onResponse()}}).start({"height":48});this.deSelectAll(C)}},selectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];if(!C.checked){C.checked=true;this.selectOption(C)}}},deSelectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];C.checked=false;this.deSelectOption(C)}},selectOption:function(B){var D=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(D,"selected");dojo.addClass(D,"selected");var C=B.parentNode.parentNode.parentNode.parentNode;var G=mojo.queryFirst(".header",C);var F=mojo.queryFirst(".images",C);var E=document.createElement("img");E.src=D.src;E.className="image";E.id=D.id;E.style.position="relative";E.style.marginTop="5px";this.swapImage(E,"head");F.appendChild(E);var A=mojo.queryFirst("#gameguide").accordionObj;A.params[C.getAttribute("name")].push(B.value)},deSelectOption:function(B){var E=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(E,"selected");var I=B.parentNode.parentNode.parentNode.parentNode;var G=mojo.queryFirst(".header",I);var A=mojo.queryFirst(".images",I);var C=mojo.queryFirst(".description",I);this.swapImage(E,"option");for(var F=0;F<A.childNodes.length;F++){if(A.childNodes[F].id==E.id){this.removeNode(A,A.childNodes[F]);break}}var H=mojo.queryFirst("#gameguide").accordionObj;var D=H.params[I.getAttribute("name")];for(var F=0;F<D.length;F++){if(D[F]==B.value){D.splice(F);break}}},removeNode:function(A,B){A.removeChild(B)},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")},enableCheckBox:function(A){A.disabled=false},onResponse:function(){}});dojo.provide("noa.command.games.SetupLivescrollerCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SetupLivescrollerCommand",mojo.command.Command,{execute:function(B){dojo.connect($("calloutPanel"),"onmouseout",this,noa.command.games.throttleRemoveCallout);dojo.connect($("gameguide"),"onmouseover",this,noa.command.games.cancelCallout);dojo.connect($("games_region"),"onscroll",this,noa.command.games.cancelCallout);dojo.connect($("dropdownbody"),"onmouseover",this,noa.command.games.cancelCallout);dojo.connect($("gamesGuideSorter"),"onmouseover",this,noa.command.games.cancelCallout);$("box_template").value=$("box_template").value.replace(/!\{/g,"${");$("callout_templateright").value=$("callout_templateright").value.replace(/!\{/g,"${");$("callout_templateleft").value=$("callout_templateleft").value.replace(/!\{/g,"${");mojo.Model.set("box_template",$("box_template").value.replace(/!\{/g,"${"));mojo.Model.set("callout_templateright",$("callout_templateright").value.replace(/!\{/g,"${"));mojo.Model.set("callout_templateleft",$("callout_templateleft").value.replace(/!\{/g,"${"));mojo.Model.set("gamesRequestCache",Array());mojo.Model.set("gamesRemainderCover","");var A={};A.isActive=false;mojo.Model.set("gamesRequestMarshal",A);noa.command.IE6=false;if(navigator.appVersion.indexOf("MSIE")!=-1){temp=navigator.appVersion.split("MSIE");version=parseFloat(temp[1]);if(version<7){noa.command.IE6=true}}setTimeout('noa.command.games.currentXhr = null; mojo.Model.set("gamesView", mojo.Model.get("gamesView"),1000);')}});noa.command.IE6=false;dojo.provide("noa.command.games.SetupMiniGamesModelCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SetupMiniGamesModelCommand",mojo.command.Command,{execute:function(A){mojo.Model.set("gamesRequestCache",Array())}});dojo.provide("noa.command.games.ShowCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ShowCommand",mojo.command.Command,{execute:function(A){var J=mojo.queryFirst("#gameguide").accordionObj;try{var C=J.expandedPanel;var O=mojo.queryFirst(".header",C)}catch(G){}var I=A.callerObj.parentNode;var B=A.callerObj;var K=".heightinfo";if(noa.command.IE6==true){K=".ie6_heightinfo"}if(C&&C!=I){var F=mojo.queryFirst(".content",C);var E=new Fx.Styles(F,{duration:200});E.start({"height":1});dojo.removeClass(O,"expand");var M=mojo.queryFirst(".content",I);var L=mojo.queryFirst(".options",M);var D=mojo.queryFirst(K,M).innerHTML+"px";var N=mojo.queryFirst(".options",M).offsetHeight+"px";var H=new Fx.Styles(M,{duration:200});H.start({"height":D});J.expandedPanel=I;dojo.addClass(B,"expand")}else{var F=mojo.queryFirst(".content",I);if(F.offsetHeight==1){var M=mojo.queryFirst(".content",I);var D=mojo.queryFirst(K,M).innerHTML+"px";var N=mojo.queryFirst(".options",M).offsetHeight+"px";var H=new Fx.Styles(M,{duration:200});H.start({"height":D});J.expandedPanel=I;dojo.addClass(B,"expand")}else{var F=mojo.queryFirst(".content",I);var E=new Fx.Styles(F,{duration:200});E.start({"height":1});dojo.removeClass(B,"expand");J.expandedPanel=null}}}});dojo.provide("noa.command.games.ShowComponentCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ShowComponentCommand",mojo.command.Command,{execute:function(B){var A=mojo.queryFirst("#gameguide");A.style.visibility="visible"}});dojo.provide("noa.command.games.ThrottleViewUpdateCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ThrottleViewUpdateCommand",mojo.command.Command,{execute:function(D){var B=$("games_region");var A=B.scrollTop;if(Math.abs(noa.command.games.lastScroll-A)>B.offsetHeight){mojo.Model.get("gamesRequestMarshal").isActive=false;noa.command.games.movedUpLast=true;clearTimeout(noa.command.games.viewThrottle);var C=this;noa.command.games.viewThrottle=setTimeout(function(){C.conditionPass()},500)}},conditionPass:function(B){var A=$("games_region");noa.command.games.lastScroll=A.scrollTop}});noa.command.games.viewThrottle=null;noa.command.games.lastScroll=-1000;dojo.provide("noa.command.games.UpdateContainerPositionCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.UpdateContainerPositionCommand",mojo.command.Command,{execute:function(C){var B=noa.command.games.getCoords($("games_region_placeholder"));var A=$("games_region");A.style.top=B.y+"px";A.style.left=B.x+"px"}});dojo.provide("noa.command.games.minidatapanel.SetupMiniDataPanelCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.minidatapanel.SetupMiniDataPanelCommand",mojo.command.Command,{execute:function(E){$("callout_templateright").value=$("callout_templateright").value.replace(/!\{/g,"${");$("callout_templateleft").value=$("callout_templateleft").value.replace(/!\{/g,"${");$$("#calloutPanel").addEvent("mouseout",function(){$("calloutPanel").style.display="none"});mojo.Model.set("callout_templateleft",$("callout_templateleft").value.replace(/!\{/g,"${"));mojo.Model.set("callout_templateright",$("callout_templateright").value.replace(/!\{/g,"${"));var B=E.contextObj;var D=B.getElementsByTagName("li");var C="";for(var A=0;A<D.length;A++){noa.command.games.minidatapanel.indexList[A]=D[A].id.replace("game_","");if(A>0){C+=","}C+=D[A].id.replace("game_","");dojo.connect(D[A],"onmouseover",function(){noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleDataPanel(this)});dojo.connect(D[A],"onmouseout",function(){clearTimeout(noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleObj)})}C=C.split(",");myd={};myd.id=C;mojo.Model.set("miniPanel/gameData",C);mojo.Model.set("miniPanel/gameDetailData",{});noa.command.games.currentDataXhr=noa.service.Locator.getInstance().getService("getGameSpecifics").invoke(myd,this)},onResponse:function(A){data={};data.list=A.game;for(i=0;i<data.list.length;i++){if((data.list[i].system=="Wii")||(data.list[i].system=="DS")){}else{data.list[i].system="DS"}}mojo.Model.set("miniPanel/gameDetailData",data)},onError:function(A){}});noa.command.games.minidatapanel.indexList=Array();noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleObj=null;noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleDataPanel=function(C){var B=C.id.replace("game_","");var A=mojo.Model.get("miniPanel/gameDetailData");if(A.list){clearTimeout(noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleObj);noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleObj=setTimeout("noa.command.games.minidatapanel.SetupMiniDataPanelCommand.showPanel('"+B+"')",500)}};noa.command.games.minidatapanel.SetupMiniDataPanelCommand.showPanel=function(G){var M=mojo.Model.get("miniPanel/gameDetailData");for(F=0;F<M.list.length;F++){if(M.list[F].id==G){var C=0;var N=noa.command.games;var B=$("calloutPanel");B.style.top="300px";B.style.left="300px";B.style.display="block";B.style.visibility="hidden";B.innerHTML="";var D=N.windowRect();var K=$("img_"+G);var H=N.getCoords(K);var J={};J.list=Array(1);J.list[0]=M.list[F];var I=50;var A=0;for(var F=0;F<noa.command.games.minidatapanel.indexList.length;F++){if(noa.command.games.minidatapanel.indexList[F]==G){A=F}}if($("panel_"+G)){var L=$("panel_"+G).innerHTML.toUpperCase();if(L=="LEFT"){B.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateleft")).process(J)}else{B.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateright")).process(J)}}else{if((A+1)<=(M.list.length/2)){B.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateleft")).process(J)}else{B.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateright")).process(J)}}var E=N.getCoords($("_i_"+G));B.style.top=300-(E.y-H.y)+"px";B.style.left=300-(E.x-H.x)+"px";B.style.visibility="visible";break}}};noa.command.games.getCoords=function(B){var C,G;try{var A=B;C=B.offsetWidth;G=B.offsetHeight;for(var E=0,D=0;B!=null;){E+=B.offsetLeft;D+=B.offsetTop;B=B.offsetParent}for(;A!=document.body;){E+=B.offsetLeft;D+=B.offsetTop;B=B.offsetParent}}catch(F){}return{x:E,y:D,h:G,w:C}};noa.command.games.windowRect=function(){var A,D;if(self.pageYOffset){A=self.pageXOffset;D=self.pageYOffset}else{if(document.documentElement&&document.documentElement.scrollTop){A=document.documentElement.scrollLeft;D=document.documentElement.scrollTop}else{if(document.body){A=document.body.scrollLeft;D=document.body.scrollTop}}}if(window.innerHeight){var C=window.innerWidth;var B=window.innerHeight}else{var C=document.documentElement.clientWidth;var B=document.documentElement.clientHeight}return{width:C,height:B,scrollTop:D,scrollLeft:A}};dojo.provide("noa.command.gameslider.ChangePaginationCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.gameslider.ChangePaginationCommand",mojo.command.Command,{execute:function(A){var I=mojo.Model.get("gameslider/gameList");var D=mojo.Model.get("gameslider/gameListInfo");var E=A.paramsObj;var B=E.pageChange;if(D.drawMiniBoxes==true){D.currentPos+=B;if((D.currentPos)<=0){D.currentPos=0;$("left_arrow").className="left_arrow_on"}else{$("left_arrow").className="left_arrow"}if((D.currentPos)>=D.gameCount-2){D.currentPos=D.gameCount-2;$("right_arrow").className="right_arrow_on"}else{$("right_arrow").className="right_arrow"}if(noa.command.gameslider.slideAnim){noa.command.gameslider.slideAnim.stop()}if(noa.command.gameslider.miniboxAnimT){noa.command.gameslider.miniboxAnimT.stop()}if(noa.command.gameslider.miniboxAnimB){noa.command.gameslider.miniboxAnimB.stop()}var C=new Fx.Transition(Fx.Transitions.Quint,3);noa.command.gameslider.slideAnim=new Fx.Style($("gameSliderData"),"left",{transition:C.easeOut,duration:1000});noa.command.gameslider.slideAnim.start(-(D.boxWidth*D.currentPos));noa.command.gameslider.miniboxAnimT=new Fx.Style($("minibox_top"),"left",{transition:C.easeOut,duration:1000});noa.command.gameslider.miniboxAnimT.start(D.boxPositions[D.currentPos].x);noa.command.gameslider.miniboxAnimB=new Fx.Style($("minibox_bot"),"left",{transition:C.easeOut,duration:1000});noa.command.gameslider.miniboxAnimB.start(D.boxPositions[D.currentPos].x);var J=mojo.query(".minibox",$("gamelist_mini_boxes"));for(var F=0,G=J.length;F<G;F++){if((F<D.currentPos)||(F>D.currentPos+2)){J[F].src="/images/wii/what/accessories/zapper/unfocusbox.gif"}else{J[F].src="/images/wii/what/accessories/zapper/focusbox.gif"}}try{mojo.queryFirst(".hiddenpanelinfo",I[D.currentPos]).innerHTML="LEFT";mojo.queryFirst(".hiddenpanelinfo",I[D.currentPos+1]).innerHTML="RIGHT";mojo.queryFirst(".hiddenpanelinfo",I[D.currentPos+2]).innerHTML="RIGHT"}catch(H){}}}});noa.command.gameslider.slideAnim=null;noa.command.gameslider.miniboxAnimT=null;noa.command.gameslider.miniboxAnimB=null;dojo.provide("noa.command.gameslider.ReDrawMiniBoxesCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.gameslider.ReDrawMiniBoxesCommand",mojo.command.Command,{execute:function(A){var J=mojo.Model.get("gameslider/gameList");var F=mojo.Model.get("gameslider/gameListInfo");var I=480;var H=23+3;F.boxPositions=Array();var B=H*F.gameCount;var C=Math.round((I-B)/2);if(F.drawMiniBoxes==true){var E="";for(var G=0;G<F.gameCount+1;G++){var D="focusbox.gif";if((G)>=(F.currentPos+3)){D="unfocusbox.gif"}E+='<img src="/images/wii/what/accessories/zapper/'+D+'" class="minibox" style="top:18px; left: '+(C+(G*H))+'px;">';F.boxPositions[G]={x:0,y:0};F.boxPositions[G].x=(C+(G*H));F.boxPositions[G].y=18}E+='<img id="minibox_top" src="/images/wii/what/accessories/zapper/top_focus.gif" class="box_top_focus" style="top:4px; left: '+F.boxPositions[F.currentPos].x+'px;">';E+='<img id="minibox_bot" src="/images/wii/what/accessories/zapper/bot_focus.gif" class="box_bot_focus" style="top:50px; left: '+F.boxPositions[F.currentPos].x+'px;">';$("gamelist_mini_boxes").innerHTML=E;mojo.Model.set("gameslider/gameListInfo",F)}}});dojo.provide("noa.command.gameslider.SetupSliderCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.gameslider.SetupSliderCommand",mojo.command.Command,{execute:function(D){var A=mojo.query("li",D.contextObj);var B={};B.gameCount=A.length-1;B.containerWidth=A.length*134;B.currentPos=0;B.boxWidth=132;$("gameSliderData").style.width=B.containerWidth+5+"px";var C=$("gamelist_mini_boxes");$("left_arrow").className="left_arrow_on";if(B.gameCount>17){C.innerHTML="Use the arrows to scroll the game list.";C.style.marginTop="20px";B.drawMiniBoxes=false}else{if(B.gameCount<=3){C.innerHTML="";C.style.marginTop="20px";B.drawMiniBoxes=false;$("left_arrow").setStyle("visibility","hidden");$("right_arrow").setStyle("visibility","hidden")}else{B.drawMiniBoxes=true}}mojo.queryFirst(".hiddenpanelinfo",A[0]).innerHTML="LEFT";mojo.queryFirst(".hiddenpanelinfo",A[1]).innerHTML="RIGHT";mojo.queryFirst(".hiddenpanelinfo",A[2]).innerHTML="RIGHT";mojo.Model.set("gameslider/gameList",A);mojo.Model.set("gameslider/gameListInfo",B)},onResponse:function(){}});dojo.provide("noa.command.glow.AnimateGlowBehavior");dojo.require("mojo.command.Command");dojo.declare("noa.command.glow.AnimateGlowBehavior",mojo.command.Command,{execute:function(A){var N=17;var F=28;try{var E=new Event(A.getEvent())}catch(J){var E={target:A.getEvent().target,type:null}}var K=$(A.callerObj)||E.target;var L=A.paramsObj.transition;var B=A.contextObj.glowElement;if(mojo.Model.get("/glow").active_item==K&&(E.type=="mouseover"||E.type=="mouseout")){return }if(mojo.Model.contains("/glow/animationQueue/currentAnimation")&&L=="in"){mojo.Model.get("/glow/animationQueue/currentAnimation").stop()}var I=function(S,Q){if(S=="in"){var R=Q.getCoordinates();B.setStyles({top:R.top+R.height-$(A.contextObj).getCoordinates().top,width:R.width+(N*2),left:R.left-N-$(A.contextObj).getCoordinates().left});B.getElement("div.left").setStyle("width",R.width+(N*2)-49);B.getElement("div.right").setStyle("margin-left",R.width+(N*2)-49)}var O=new Fx.Style(B,"height",{duration:(S=="in"?280:100),transition:(S=="in"?Fx.Transitions.Back.easeOut:Fx.Transitions.linear)});var P=O.start(S=="in"?F:0);mojo.Model.set("/glow/animationQueue/currentAnimation",P);return P};if(!mojo.Model.contains("/glow/animationQueue")){mojo.Model.set("/glow/animationQueue",[])}var G=mojo.Model.get("/glow/animationQueue");var M=new Array();for(var D=0,H=G.length;D<H;D++){if(G[D].transition=="out"){M.push(G[D]);break}}if(B.getSize().size.y>0){var C=I.pass(["out"]);C.transition="out";M.push(C)}var C=I.pass([L,K]);C.transition=L;M.push(C);if(A.paramsObj.transition=="out"&&mojo.Model.get("/glow").active_item){var C=I.pass(["in",mojo.Model.get("/glow").active_item]);C.transition="in";M.push(C)}mojo.Model.set("/glow/animationQueue",M)}});dojo.provide("noa.command.glow.InitializeGlowBehavior");dojo.require("mojo.command.Command");dojo.declare("noa.command.glow.InitializeGlowBehavior",mojo.command.Command,{execute:function(G){var E=G.paramsObj.navElement;var D=new Element("div",{"class":"left"});var C=new Element("div",{"class":"right"});var B=new Element("div",{"class":"glow"});D.injectInside(B);C.injectAfter(D);B.injectAfter(E);G.contextObj.glowElement=B;var F=$(E).getElements("li.major a");var A=F.filter(function(H){if(H.getStyle("text-decoration")=="underline"){return H}});A=A.length>0?A[0]:null;mojo.Model.set("/glow",{glowElement:B,active_item:A});if(A){mojo.Messaging.publish("/glow/turn/on",{target:A})}}});dojo.provide("noa.command.iwata.SetupIwataCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.iwata.SetupIwataCommand",mojo.command.Command,{execute:function(S){if(!S.ignoreSafariDetect&&$$("html.dj_safari").length!=0){S.ignoreSafariDetect=true;this.execute.delay(1,this,S);return }var F=mojo.queryFirst("#iwatasidebar");var B;if(B=unescape(mojo.History.getInstance().getHash())){var T=B.split(" ");var L=T[0].replace("section","")}else{var L=F.className.split("_")[1]||"1"}F.expandedID="isb"+L;$$(".sidebarhandle ul").each(function(U){var V=U.getProperty("class").match(/l([^-]*)-sub/)[1];U.expandedHeight=U.offsetHeight;if(V!=L){U.style.height="1px"}});mojo.queryFirst("#sidebar").style.visibility="visible";try{var D=$("next_button_info").innerHTML.split("volume_")[1].replace(".xml","").split("_part_");var M=$("sidebar");var I=M.getElementsByTagName("a");var P=Array();for(J=0,K=I.length;J<K;J++){if(I[J].href.indexOf("iwataasks")>0){var R=I[J].href.split("volume-")[1].replace("#","").split("/part-");P.length++;P[P.length-1]=R;if((R[0]==D[0])&&(R[1]==D[1])&&(I[J].className!="major_handle")){$(I[J]).setStyle("background","#FFFFF0");break}}}var N;while(!$type(N)){var C=$(I[++J]);if(!C){N=false;continue}if(C.hasClass("major_handle")){continue}N=C}var H=$("next_button_link");if(N){H.href=N.href}else{H.remove()}}catch(O){}var A=mojo.query("a",F);for(var J=0,K=A.length;J<K;J++){if(A[J].className.indexOf("major_handle")>-1){}else{var E=mojo.query("td",A[J]);for(var Q=0,K=E.length;Q<K;Q++){E[Q].style.cursor="pointer";var G=A[J].href;dojo.connect(E[Q],"onclick",function(){noa.command.iwata.followParentLink(this)})}}}},checkLinkExists:function(B,A){var C=false;for(i=0,len=B.length;i<len;i++){if((B[i][0]==A[0])&&(B[i][1]==A[1])){C=true}}return C}});noa.command.iwata.followParentLink=function(A){while(A.href==null){A=A.parentNode}window.location.href=A.href};dojo.provide("noa.command.iwata.ShowCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.iwata.ShowCommand",mojo.command.Command,{execute:function(A){A.callerObj=A.callerObj.parentNode;var E=mojo.queryFirst("#iwatasidebar").expandedID;var I=A.callerObj.id;var C=mojo.queryFirst("#"+E);var D=mojo.queryFirst("#"+I);if(E!=I){var H=mojo.queryFirst("ul",C);var J=mojo.queryFirst("a",C);dojo.removeClass(J,"sidebarihover");var F=new Fx.Styles(H,{duration:200});F.start({"height":1});var B=mojo.queryFirst("ul",D);var J=mojo.queryFirst("a",D);dojo.addClass(J,"sidebarihover");B.style.overflowX="hidden";var K=B.expandedHeight+"px";var G=new Fx.Styles(B,{duration:200});G.start({"height":K});mojo.queryFirst("#iwatasidebar").expandedID=D.id}else{var H=mojo.queryFirst("ul",C);if(H.offsetHeight==1){var B=mojo.queryFirst("ul",C);var K=B.expandedHeight+"px";var G=new Fx.Styles(B,{duration:200});G.start({"height":K});mojo.queryFirst("#iwatasidebar").expandedID=D.id;var J=mojo.queryFirst("a",C);dojo.addClass(J,"sidebarihover")}else{var F=new Fx.Styles(H,{duration:200});F.start({"height":1});var J=mojo.queryFirst("a",C);dojo.removeClass(J,"sidebarihover")}}}});dojo.provide("noa.command.metrics.OmnitureInterfaceCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.metrics.OmnitureInterfaceCommand",mojo.command.Command,{constructor:function(){if(!mojo.Model.contains("/metrics/variables")){mojo.Model.set("/metrics/variables",{})}},execute:function(A){if(!A.paramsObj.mode||!this[A.paramsObj.mode]){return }this.storedVariables=mojo.Model.get("/metrics/variables");this[A.paramsObj.mode](A.paramsObj.params||{},A)},track:function(F,G){var D=F["type"]||"pageview";var C=F["clearVariables"]||false;var A=F["options"]||{};var B=F["callerName"]||"anonymousTrigger";if(C){this.clearOmnitureVariables()}this.storeVariables(A);try{if(!s){return }switch(D){case"pageview":this.mapVariablesToOmnitureVariables(this.storedVariables);s.t();break;case"event":this.mapVariablesToOmnitureVariables(this.storedVariables);if(G.callerObj.href){s.tl(G.callerObj,"o")}else{s.tl(G.callerObj,"o",B)}delete this.storedVariables["eventName"];break;default:}}catch(E){}},_printHash:function(A){var B=new Array();$each(A,function(D,C){B.push(C+": "+($type(D)=="string"?"'":"")+D+($type(D)=="string"?"'":""))});return"{ "+B.join(", ")+" }"},storeVariables:function(A){this.storedVariables=$merge(this.storedVariables,A);mojo.Model.set("/metrics/variables",this.storedVariables)},clearOmnitureVariables:function(A){$each(this.storedVariables,function(C,B){this.storedVariables[B]=null}.bind(this));this.mapVariablesToOmnitureVariables(this.storedVariables);mojo.Model.set("/metrics/variables",{})},set:function(A,B){this.storeVariables(A);if(B.paramsObj.mapImmediately){this.mapVariablesToOmnitureVariables(this.storedVariables)}},mapVariablesToOmnitureVariables:function(A){$each(A,function(E,C){switch(C){case"pageName":if(E){s.pageName=E.replace(/ :: /g,"@SEPARATOR@").replace(/:/g,"-").replace(/@SEPARATOR@/g,":").toLowerCase();var D=E.split(" :: ");s.channel=(D[0]+":"+D[1]+":"+D[2]).toLowerCase()}else{if(E!=false){s.pageName=s.channel=null}}break;case"contentArea":s.channel=E;break;case"pageType":s.pageType=E;break;case"productName":s.prop1=$type(E)=="string"?"us:ncom:"+E.toLowerCase():E;break;case"contentType":s.prop2=E;break;case"interactiveToolUsage":s.prop4=E;break;case"toolName":s.eVar6=E;break;case"searchKeyword":var B=$type(E)=="string"?E.toLowerCase():E;s.prop5=B;s.eVar5=B;break;case"productID":s.prop7=E;break;case"articleName":s.prop8=E;break;case"gameTitle":s.prop10=E;break;case"gameCategory":s.prop11=E;break;case"gamePublisher":s.prop12=E;break;case"gameDetailType":s.prop14=E;break;case"videoIdentifier":s.eVar4=E;break;case"fileType":s.eVar3=E;break;case"eventName":switch(E){case"fileDownloaded":s.events="event3";break;case"searchConducted":s.events="event6";break;case"searchResultClicked":s.events="event5";break;case"videoPlayed":s.events="event4";break;case"interactiveToolStart":s.events="event7";break;case"interactiveToolEnd":s.events="event8";break}break;default:break}})}});noa.command.metrics.OmnitureInterfaceCommand.tagVideoAsPlayed=function(A,B){mojo.Messaging.publish("/metrics/videoPlayed",{video_name:B||"",video_id:A||""})};noa.command.metrics.OmnitureInterfaceCommand.tagVideoAsPausing=function(B,D,A,C){mojo.Messaging.publish("/metrics/videoPaused",{tindex:B,len:D,video_name:C||"",video_id:A||""})};noa.command.metrics.OmnitureInterfaceCommand.tagVideoAsPlaying=function(B,D,A,C){mojo.Messaging.publish("/metrics/videoPlaying",{tindex:B,len:D,video_name:C||"",video_id:A||""})};noa.command.metrics.OmnitureInterfaceCommand.tagVideoAsStarted=function(A,B){mojo.Messaging.publish("/metrics/videoStarted",{video_name:B||"",video_id:A||""})};dojo.provide("noa.command.search.BeginSearchCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.BeginSearchCommand",mojo.command.Command,{execute:function(A){if(noa.controller.search.SearchMainController.haltSearch){return }var C=new Date();if((C-noa.command.search.searchThrottle)>1000){noa.command.search.searchThrottle=C;if(A.paramsObj){var D=A.paramsObj.gameGuideParams}if(!D){D={}}var I=mojo.Model.get("/search/keyword")||"";var F=noa.service.Locator.getInstance();var E=F.getService("getSearchResults");var H=mojo.Model.get("search/searchArchiveData");var G=mojo.Model.get("search/searchData");if(H.length==0){E._uri="/search/summary/"+encodeURI(I)}else{E._uri="/search/summary/"+encodeURI(I)+"&start="+noa.command.search.searchPage;noa.command.search.searchPage+=10}var B=100;if((G)&&(G.total)){B=G.total}if((H.length<B)&&((G==null)||(G.searchResults==null)||(G.origResults.length==10)||(H.length==0))){if(noa.command.stoppit==false){noa.command.search.currentXhr=E.invoke(D,this)}}}else{mojo.Messaging.publish.delay(1000,this,"/search/trigger");return }},onResponse:function(D){noa.command.search.IE6=false;if(navigator.appVersion.indexOf("MSIE")!=-1){temp=navigator.appVersion.split("MSIE");version=parseFloat(temp[1]);if(version<7){noa.command.search.IE6=true}}if(D.searchResults){var E=false;D.total=parseInt(D.total);if($type(D.searchResults.result_list)!="array"){D.searchResults.result_list=[D.searchResults.result_list]}D.searchResults=D.searchResults.result_list;D.categories=D.categories.category;D.catResults=Array();var B=mojo.Model.get("search/searchArchiveData");var H=mojo.Model.get("search/categoryTotals");var I=B.length;var A={};A.searchResults=Array();var C=mojo.Model.get("search/searchTotals");for(i=0;i<D.searchResults.length;i++){if(!C[D.searchResults[i].category]){C[D.searchResults[i].category]=0}D.searchResults[i].addok=true;D.searchResults[i].title=D.searchResults[i].title.replace("| Nintendo - ","").replace("Nintendo :: ","").replace("Customer Service | ","").replace("Wii :: ","");D.searchResults[i].id=parseInt(D.searchResults[i].id)+I;if(D.searchResults[i].category=="games"){D.searchResults[i].compel_id=D.searchResults[i].url.split("detail/")[1];isFeatured=false;if(D.features){for(k=0;k<D.features.feature_results.length;k++){if(D.searchResults[i].url==D.features.feature_results[k].url){isFeatured=true}}}if(E==true){isFeatured=false}E=this.addGame(D.searchResults[i].compel_id,isFeatured)}else{for(b=0;b<B.length;b++){if(B[b].url==D.searchResults[i].url){D.searchResults[i].addok=false}}}if(D.searchResults[i].addok){A.searchResults.length++;var G=D.searchResults[i].category;if(!H[G]){H[G]=0}if(G!="games"){H[G]+=1}D.searchResults[i].index=H[G];A.searchResults[A.searchResults.length-1]=D.searchResults[i];if(!C[A.searchResults[A.searchResults.length-1]]){C[A.searchResults[A.searchResults.length-1]]=0}C[A.searchResults[A.searchResults.length-1]]+=1;if(noa.command.search.IE6){}}}D.origResults=D.searchResults;D.searchResults=A.searchResults;var F=D.search_string;if(F.length>11){F=F.substring(0,11)+".."}$("queryString").innerHTML=F;$$("#topstrip h3")[0].setStyle("visibility","visible");$("sch_results").setStyle("display","block");D.catResults=D.categories;mojo.Model.set("search/searchData",D);mojo.Model.set("search/searchTotals",C);mojo.Model.set("search/categoryTotals",H)}else{if((mojo.Model.get("search/gameData").length<=1)&&((mojo.Model.get("search/totalResults")==0)||(!mojo.Model.get("search/totalResults"))||(mojo.Model.get("search/totalResults")=="undefined"))){resultsPane=$("sch_results");resultsPane.innerHTML=TrimPath.parseTemplate(mojo.Model.get("sch_no_results")).process(D);sidebarPane=$("sch_sidebar");sidebarPane.innerHTML=TrimPath.parseTemplate(mojo.Model.get("sch_nores_sidebar_template")).process(D);$("resultCount").innerHTML="0";if(D.search_string){$("queryString").innerHTML=D.search_string;$("resultPaneQS").innerHTML=D.search_string;$$("#topstrip h3")[0].setStyle("visibility","visible");resultsPane.setStyle("display","block")}else{$("queryString").innerHTML="";$("resultPaneQS").innerHTML="";$$("#topstrip h3")[0].setStyle("visibility","hidden");resultsPane.setStyle("display","none")}}}},addGame:function(D,C){var A=mojo.Model.get("search/gameData");var F=mojo.Model.get("search/gameDetailData");var E=true;for(var B=0;B<A.length;B++){if(D==A[B].id){E=false}}for(var B=0;B<F.length;B++){if(D==F[B].id){E=false}}if(E){A.length+=1;A[A.length-1]={};A[A.length-1].id=D;A[A.length-1].isFeatured=C;mojo.Model.set("search/gameData",A)}return E},onError:function(A){}});noa.command.stoppit=false;noa.command.search.searchThrottleTimer=null;noa.command.search.searchThrottle=new Date();noa.command.search.currentXhr=null;noa.command.search.searchPage=10;dojo.provide("noa.command.search.BeginSetupResultsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.BeginSetupResultsCommand",mojo.command.Command,{execute:function(G){var F=mojo.Model.get("search/searchData");var A=mojo.Model.get("search/searchArchiveData");if((A)&&(A.length>0)){}else{if(F.dym){$("DYMk").style.display="block";$("DYMkLink").innerHTML=F.dym;$("DYMk").style.left=310-($("DYMk").offsetWidth)+"px"}else{$("DYMk").style.display="none"}if(!F.total){F.total=0}if(!F.catResults){F.catResults=Array()}var C=$("sch_sidebar");C.innerHTML="";C.innerHTML+=TrimPath.parseTemplate(mojo.Model.get("sch_sidebar_template")).process(F);var B=mojo.Model.get("search/searchCatData");try{for(i=0;i<F.categories.length;i++){B[F.categories[i].name]=0;$("searchTerm_"+F.categories[i].name).innerHTML=F.searchTerm}}catch(E){}mojo.Model.set("search/searchCatData",B);var D={};D.data=F.searchResults;C=$("sch_results");C.innerHTML="";C.innerHTML+=TrimPath.parseTemplate(mojo.Model.get("sch_results_template")).process(F)}this.postrender()},postrender:function(){var C=mojo.Model.get("search/searchData");try{for(i=0;i<C.categories.length;i++){$("results_holder_"+C.categories[i].name).cat_type=C.categories[i].cat_type}}catch(B){}noa.command.search.IE6=false;if(navigator.appVersion.indexOf("MSIE")!=-1){temp=navigator.appVersion.split("MSIE");version=parseFloat(temp[1]);if(version<7){noa.command.search.IE6=true}}if(noa.command.search.IE6==true){var A=mojo.query(".non_ie")}else{var A=mojo.query(".ie6_info")}for(i=0;i<A.length;i++){A[i].style.display="none"}mojo.controller.Controller.updateObservers()},onError:function(A){}});dojo.provide("noa.command.search.CalcViewableRecordsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.CalcViewableRecordsCommand",mojo.command.Command,{execute:function(A){var B=new Date();if((B-noa.command.search.calcViewableThrottle)>300){noa.command.search.calcViewableThrottle=new Date();if(A.paramsObj){if(A.paramsObj.processAll){var N=mojo.query(".search_results_container_games");var C=mojo.query(".search_results_container");C.length++;C[C.length-1]=N[0]}else{var C=Array();C[0]=A.callerObj}}for(t=0;t<C.length;t++){var K=C[t];try{var L=K.id.replace("cat_container_","");var I=K.offsetHeight;var M=K.scrollTop;var H=mojo.query(".sch_rslt",K);$("rescount_"+L).innerHTML="("+H.length+")";$("resultCount_min_"+L).innerHTML=H.length;var O=false;var D=false;var G=0;var F=0;var E=0;for(i=0;i<H.length;i++){if(((E+H[i].offsetHeight-20)>M)&&(!O)){O=true;G=i+1}if((E+20)>parseInt(M+I)&&(!D)){D=true;F=i}E+=parseInt(H[i].offsetHeight)}if(F>H.length){F=H.length}if(F==0){F=H.length}$("min_"+L).innerHTML=G;$("max_"+L).innerHTML=F}catch(J){}}}else{clearTimeout(noa.command.search.throttleObject);noa.command.search.throttleObject=setTimeout('mojo.Model.set("search/searchTrigger", 1)',1000)}},onError:function(A){}});noa.command.search.throttleObject=null;noa.command.search.calcViewableThrottle=new Date();dojo.provide("noa.command.search.CountResultsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.CountResultsCommand",mojo.command.Command,{execute:function(G){if(!mojo.Model.contains("search/searchData")){mojo.Model.set("search/searchData")}var E=mojo.Model.get("search/searchData");var C=mojo.Model.get("search/categoryTotals");var B=0;try{for(var D=0,A=E.categories.length;D<A;D++){if(C[E.categories[D].name]){B+=C[E.categories[D].name];$("resultCount_ie_"+E.categories[D].name).innerHTML=C[E.categories[D].name];$("rescount_"+E.categories[D].name).innerHTML="("+C[E.categories[D].name]+")";$("resultCount_min_"+E.categories[D].name).innerHTML=C[E.categories[D].name]}}mojo.Model.set("search/totalResults",B);$("resultCount").innerHTML=B;$("resultCount2").innerHTML="("+(B)+")"}catch(F){}}});dojo.provide("noa.command.search.DrawSearchResultsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.DrawSearchResultsCommand",mojo.command.Command,{execute:function(A){var I=mojo.Model.get("search/searchData");var H=mojo.Model.get("search/searchArchiveData");var E=mojo.Model.get("search/searchCatData");var J=mojo.Model.get("search/categoryTotals");if(I.searchResults){for(i=0;i<I.searchResults.length;i++){if(!E[I.searchResults[i].category]){E[I.searchResults[i].category]=0}E[I.searchResults[i].category]++}for(i=0;i<I.catResults.length;i++){if(I.catResults[i].cat_type!="games"){var C={};C.catname=I.catResults[i].name;C.searchResults=I.searchResults;var F=$("cat_container_"+I.catResults[i].name);var D=document.createElement("div");D.id="_db"+H.length+I.catResults[i].name;if(!E[I.catResults[i].name]){E[I.catResults[i].name]=0}if(E[I.catResults[i].name]>0){$("sbi_"+I.catResults[i].name).style.display="block";var B=$("results_holder_"+I.catResults[i].name);if((B.isfocus==false)){}else{B.style.display="block"}}if((I.searchResults)&&(I.searchResults.length>0)){if(I.catResults[i].cat_type=="games"){}else{D.innerHTML+=TrimPath.parseTemplate(mojo.Model.get("text_results_template")).process(C)}F.appendChild(D)}}}mojo.Model.set("search/searchCatData",E);var G=H.concat(I.searchResults);mojo.Model.set("search/searchArchiveData",G);this.oncomplete()}},oncomplete:function(){mojo.controller.Controller.updateObservers()},onError:function(A){}});dojo.provide("noa.command.search.GrabCompelDataCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.GrabCompelDataCommand",mojo.command.Command,{execute:function(E){var C=mojo.Model.get("search/gameData");params={};params.id=Array();for(var D=0;D<C.length;D++){params.id[D]=C[D].id}mojo.Model.set("search/gameData",C);if((params.id.length>0)){var B=noa.service.Locator.getInstance();var A=B.getService("getGameSpecifics");if(!noa.command.search.gameXHR){noa.command.search.gameXHR=A.invoke(params,this)}else{}}else{}},onResponse:function(D){noa.command.search.gameXHR=null;if(D.game){var I=mojo.Model.get("search/gameData");var B=mojo.Model.get("search/gameDetailData");if(D.total==1){var E=D.game;D.game=Array();D.game[0]=E}var H=Array();for(var J=0;J<D.game.length;J++){D.game[J].system=D.game[J].system.replace(/ /g,"")}for(var F=0;F<I.length;F++){for(var J=0;J<D.game.length;J++){if(I[F].id==D.game[J].id){H.length++;H[H.length-1]=D.game[J];break}}}D.game=H;for(var F=0;F<D.game.length;F++){D.game[F].icount=B.length+F;D.game[F].intro=D.game[F].intro.replace(/(<([^>]+)>)/ig,"");if(D.game[F].system.length>0){}else{D.game[F].system="wii"}D.game[F].system=D.game[F].system.toLowerCase();for(var J=0;J<I.length;J++){if(I[J].id==D.game[F].id){D.game[F].isFeatured=I[J].isFeatured;I.splice(J,1);break}}}cT=mojo.Model.get("search/categoryTotals");cT["games"]+=D.game.length;mojo.Model.set("search/categoryTotals",cT);mojo.Model.set("search/gameData",I);B=D.game.concat(B);mojo.Model.set("search/gameDetailData",B);var G=$("cat_container_games");var C=document.createElement("div");C.id="_db"+B.length+"games";$("sbi_games").style.display="block";var A=$("results_holder_games");A.style.display="block";C.innerHTML+=TrimPath.parseTemplate(mojo.Model.get("games_results_template")).process(D);G.appendChild(C);mojo.controller.Controller.updateObservers()}},onError:function(A){}});noa.command.search.gameXHR=null;noa.command.search.gameXHRThrottle=null;dojo.provide("noa.command.search.SelectTabCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.SelectTabCommand",mojo.command.Command,{execute:function(H){var G=$("sch_sidebar");var B=mojo.query(".sch_sb_button",G);for(i=0;i<B.length;i++){var D=mojo.queryFirst("a",B[i]);dojo.removeClass(D,"sch_sb_button_active")}var C=H.callerObj;if(H.paramsObj.sideLink){var F=C.className.split(" ")[1];C=$("sbi_"+F)}else{var F=C.id.replace("sbi_","")}D=mojo.queryFirst("a",C);dojo.addClass(D,"sch_sb_button_active");if(F){G=$("sch_results");B=mojo.query(".sresclass",G);for(i=0;i<B.length;i++){if(B[i].id==("results_holder_"+F)){if(B[i].cat_type=="games"){var E=mojo.queryFirst(".search_results_container_games",B[i]);dojo.addClass(E,"zoomzone_games")}else{var E=mojo.queryFirst(".search_results_container",B[i]);dojo.addClass(E,"zoomzone")}B[i].style.display="block";B[i].isfocus=true}else{if(B[i].cat_type=="games"){var E=mojo.queryFirst(".search_results_container_games",B[i]);dojo.removeClass(E,"zoomzone_games")}else{var E=mojo.queryFirst(".search_results_container",B[i]);dojo.removeClass(E,"zoomzone")}B[i].style.display="none";B[i].isfocus=false}}}else{G=$("sch_results");B=mojo.query(".sresclass",G);var A=mojo.Model.get("search/searchCatData");for(i=0;i<B.length;i++){if(A[B[i].id.replace("results_holder_","")]>0){if(B[i].cat_type=="games"){var E=mojo.queryFirst(".search_results_container_games",B[i]);dojo.removeClass(E,"zoomzone_games")}else{var E=mojo.queryFirst(".search_results_container",B[i]);dojo.removeClass(E,"zoomzone")}B[i].style.display="block";B[i].isfocus=false}}}}});dojo.provide("noa.command.search.SetupSearchCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.SetupSearchCommand",mojo.command.Command,{execute:function(B){if(noa.controller.search.SearchMainController.haltSearch){return }noa.command.search.searchPage=10;mojo.Model.set("search/totalResults",0);if(!mojo.Model.contains("search/searchCatData")){mojo.Model.set("search/searchCatData",Array())}mojo.Model.set("search/searchArchiveData",Array());if(!mojo.Model.contains("search/gameData")){mojo.Model.set("search/gameData",Array())}mojo.Model.set("search/gameDetailData",Array());if(!mojo.Model.contains("search/searchTrigger")){mojo.Model.set("search/searchTrigger",null)}mojo.Model.set("search/searchTotals",Array());mojo.Model.set("search/categoryTotals",Array());if(noa.command.search.currentXhr){noa.command.search.currentXhr.ioArgs.xhr.abort();noa.command.search.currentXhr=null}var A=$$("#textb_container input")[0];if(B.paramsObj&&B.paramsObj.useDidYouMeanText){A.setProperty("value",$("DYMkLink").getText())}mojo.Model.set("/search/keyword",A.getValue().clean().replace(/ /g,"+"));mojo.Model.set("sch_no_results",$("sch_no_results").value.replace(/!\{/g,"${"));mojo.Model.set("sch_sidebar_template",$("sch_sidebar_template").value.replace(/!\{/g,"${"));mojo.Model.set("sch_results_template",$("sch_results_template").value.replace(/!\{/g,"${"));mojo.Model.set("text_results_template",$("text_results_template").value.replace(/!\{/g,"${"));mojo.Model.set("games_results_template",$("games_results_template").value.replace(/!\{/g,"${"));mojo.Model.set("sch_nores_sidebar_template",$("sch_nores_sidebar_template").value.replace(/!\{/g,"${"))},onError:function(A){}});dojo.provide("noa.command.zapper.AssembleZapperCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.zapper.AssembleZapperCommand",mojo.command.Command,{execute:function(G){var E=new Fx.Transition(Fx.Transitions.linear,3);if(noa.command.zapper.animationState=="APART"){noa.command.zapper.textAnim=new Fx.Style($("zapper_dis_text"),"opacity",{transition:E.easeOut,duration:500});noa.command.zapper.textAnim.start(0);var B=new Fx.Style($("zapper_dis_toys"),"opacity",{onComplete:function(){noa.command.zapper.swapFixedforFluid()},transition:E.easeOut,duration:800});B.start(0);$("zapper_complete").setStyles({opacity:0.001});$("zapper_nunchuk").setStyles({opacity:0.001});$("zapper_wiimote").setStyles({opacity:0.001});$("anim_bdrop").setStyles({opacity:0.001});$("anim_bdrop").style.display="block";var C=new Fx.Style($("anim_bdrop"),"opacity",{transition:E.easeOut,duration:500});C.start(0.75);var A=new Fx.Style($("zapper_complete"),"opacity",{transition:E.easeOut,duration:800});A.start(1);var F=new Fx.Style($("zapper_nunchuk"),"opacity",{transition:E.easeOut,duration:800});F.start(1);var D=new Fx.Style($("zapper_wiimote"),"opacity",{transition:E.easeOut,duration:800});D.start(1);$("assemble_button").className="assemble assemble_on";$("disassemble_button").className="disassemble disassemble_off"}}});noa.command.zapper.animationState="APART";noa.command.zapper.textAnim=null;noa.command.zapper.zoomPosition={x:35,y:125};noa.command.zapper.swapFixedforFluid=function(){var B=new Fx.Styles($("zapper_complete"),{duration:700,transition:Fx.Transitions.Back.easeInOut});B.start({"top":[96,noa.command.zapper.zoomPosition.y],"left":[108,noa.command.zapper.zoomPosition.x],"width":[390,585],"height":[166,249]});var C=new Fx.Styles($("zapper_nunchuk"),{duration:700,transition:Fx.Transitions.Back.easeInOut});C.start({"top":[27,15],"left":[420,480],"width":[99,150],"height":[113,170]});var A=new Fx.Styles($("zapper_wiimote"),{duration:700,transition:Fx.Transitions.Back.easeInOut,onComplete:function(){noa.command.zapper.setupCombineAnim()}});A.start({"top":[19,20],"left":[114,80],"width":[200,300],"height":[50,75]});setTimeout(function(){noa.command.zapper.swapLoForHi()},200)};noa.command.zapper.swapLoForHi=function(){$("zapper_complete").src="/images/wii/what/accessories/zapper/anim/zapper_complete_big.gif";$("zapper_nunchuk").src="/images/wii/what/accessories/zapper/anim/nunchuk_big.gif";$("zapper_wiimote").src="/images/wii/what/accessories/zapper/anim/wiimote_big.gif"};noa.command.zapper.nunchuk={};noa.command.zapper.wiimote={};noa.command.zapper.zapper={};noa.command.zapper.setupCombineAnim=function(){$("zapper_complete").style.display="none";$("zapper_backg").style.top=$("zapper_complete").style.top;$("zapper_backg").style.left=$("zapper_complete").style.left;$("zapper_forg").style.top=$("zapper_complete").style.top;$("zapper_forg").style.left=$("zapper_complete").style.left;$("zapper_forg").style.display="block";$("zapper_backg").style.display="block";$("zapper_forg").style.display="block";var D={};var A={};var E={};D.x=parseInt($("zapper_nunchuk").style.left.replace("px",""));D.y=parseInt($("zapper_nunchuk").style.top.replace("px",""));E.x=parseInt($("zapper_complete").style.left.replace("px",""));E.y=parseInt($("zapper_complete").style.top.replace("px",""));A.x=parseInt($("zapper_wiimote").style.left.replace("px",""));A.y=parseInt($("zapper_wiimote").style.top.replace("px",""));noa.command.zapper.nunchuk=D;noa.command.zapper.wiimote=A;noa.command.zapper.zapper=E;var C=new Fx.Styles($("zapper_nunchuk"),{duration:700,transition:Fx.Transitions.Back.easeIn,onComplete:function(){noa.command.zapper.swapPiecesforSingle()}});C.start({"top":[D.y,noa.command.zapper.zoomPosition.y+3],"left":[D.x,noa.command.zapper.zoomPosition.x+421]});var B=new Fx.Styles($("zapper_wiimote"),{duration:700,transition:Fx.Transitions.Back.easeIn});var G=noa.command.zapper.zoomPosition.x+17;var F=noa.command.zapper.zoomPosition.y-5;B.start({"top":[A.y,F],"left":[A.x,G]})};noa.command.zapper.swapPiecesforSingle=function(){var B={};B.x=parseInt($("zapper_complete").style.left.replace("px",""));B.y=parseInt($("zapper_complete").style.top.replace("px",""));var D=B.y-10;var E=B.x+1;$("zapper_together_big").style.visibility="visible";$("zapper_together_big").style.display="block";$("zapper_together_big").style.top=D+"px";$("zapper_together_big").style.left=E+"px";$("zapper_forg").style.display="none";$("zapper_backg").style.display="none";$("zapper_wiimote").style.display="none";$("zapper_nunchuk").style.display="none";var A=new Fx.Styles($("zapper_together_big"),{duration:500,transition:Fx.Transitions.Back.easeIn,onComplete:function(){noa.command.zapper.showTogetherDecorations()}});A.start({"top":[D,60],"left":[E,80],"width":[585,440],"height":[259,195]});var C=new Fx.Style($("anim_bdrop"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:1200});C.start(0);setTimeout(function(){$("zapper_together_big").src="/images/wii/what/accessories/zapper/anim/zapper_together_small.gif"},250)};noa.command.zapper.showTogetherDecorations=function(){var A={};A.x=parseInt($("zapper_together_big").style.left.replace("px",""));A.y=parseInt($("zapper_together_big").style.top.replace("px",""));$("zapper_together_decorations").style.top=A.y-30+"px";$("zapper_together_decorations").style.left=A.x+"px";$("zapper_together_decorations").setStyles({opacity:0.001});var B=new Fx.Style($("zapper_together_decorations"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:1200});B.start(1);noa.command.zapper.animationState="TOGETHER"};dojo.provide("noa.command.zapper.BeginZapperVideoAnimCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.zapper.BeginZapperVideoAnimCommand",mojo.command.Command,{execute:function(A){vinfo=mojo.Messaging.getTopic("/metrics/videoPlaying").getMessage();noa.command.zapper.timeIndex=new Date();if(vinfo.video_id=="shooting_zapper_video"){noa.command.zapper.timerArray[0]=setTimeout("noa.command.zapper.showAnimFrame('arrow1', 500)",150);noa.command.zapper.timerArray[1]=setTimeout("noa.command.zapper.showAnimFrame('arrow1', 500)",2800);noa.command.zapper.timerArray[2]=setTimeout("noa.command.zapper.showAnimFrame('arrow1', 500)",6000);noa.command.zapper.timerArray[3]=setTimeout("noa.command.zapper.showAnimFrame('arrow2', 500)",1000);noa.command.zapper.timerArray[4]=setTimeout("noa.command.zapper.showAnimFrame('arrow2', 500)",3500);noa.command.zapper.timerArray[5]=setTimeout("noa.command.zapper.showAnimFrame('arrow2', 500)",6800);noa.command.zapper.timerArray[6]=setTimeout("noa.command.zapper.showAnimFrame('arrow3', 2000)",1600);noa.command.zapper.timerArray[7]=setTimeout("noa.command.zapper.showAnimFrame('arrow3', 1800)",4700)}if(vinfo.video_id=="moving_zapper_video"){noa.command.zapper.timerArray[0]=setTimeout("noa.command.zapper.showAnimFrame('nunchk1', 1700)",50);noa.command.zapper.timerArray[1]=setTimeout("noa.command.zapper.showAnimFrame('nunchk4', 1700)",1750);noa.command.zapper.timerArray[2]=setTimeout("noa.command.zapper.showAnimFrame('nunchk3', 1700)",4050);noa.command.zapper.timerArray[3]=setTimeout("noa.command.zapper.showAnimFrame('nunchk2', 2000)",5850)}}});noa.command.zapper.showAnimFrame=function(B,A){$(B).style.visibility="visible";setTimeout("$('"+B+"').style.visibility = 'hidden';",A)};noa.command.zapper.timerArray=Array();noa.command.zapper.timeIndex=null;dojo.provide("noa.command.zapper.DisassembleZapperCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.zapper.DisassembleZapperCommand",mojo.command.Command,{execute:function(D){var C=new Fx.Transition(Fx.Transitions.linear,3);if(noa.command.zapper.animationState=="TOGETHER"){var A=new Fx.Style($("zapper_together_decorations"),"opacity",{onComplete:function(){noa.command.zapper.zoomOutTogetherZapper()},transition:C.easeOut,duration:800});A.start(0);var B=new Fx.Style($("anim_bdrop"),"opacity",{transition:C.easeOut,duration:500});B.start(0.75);$("assemble_button").className="assemble assemble_off";$("disassemble_button").className="disassemble disassemble_on"}}});noa.command.zapper.zoomOutTogetherZapper=function(){var D=$("zapper_together_big");var F=parseInt(D.style.left.replace("px",""));var C=parseInt(D.style.top.replace("px",""));var B=D.offsetWidth;var E=D.offsetHeight;var A=new Fx.Styles(D,{duration:700,transition:Fx.Transitions.Back.easeInOut,onComplete:function(){noa.command.zapper.convertToPieces()}});A.start({"top":[C,noa.command.zapper.zoomPosition.y-10],"left":[F,noa.command.zapper.zoomPosition.x+1],"width":[B,585],"height":[E,259]});setTimeout(function(){$("zapper_together_big").src="/images/wii/what/accessories/zapper/anim/zapper_together_big.gif"},350)};noa.command.zapper.convertToPieces=function(){$("zapper_forg").style.display="block";$("zapper_backg").style.display="block";$("zapper_wiimote").style.display="block";$("zapper_nunchuk").style.display="block";$("zapper_together_big").style.display="none";var D={};var A={};var E={};D.x=parseInt($("zapper_nunchuk").style.left.replace("px",""));D.y=parseInt($("zapper_nunchuk").style.top.replace("px",""));E.x=parseInt($("zapper_complete").style.left.replace("px",""));E.y=parseInt($("zapper_complete").style.top.replace("px",""));A.x=parseInt($("zapper_wiimote").style.left.replace("px",""));A.y=parseInt($("zapper_wiimote").style.top.replace("px",""));var C=new Fx.Styles($("zapper_nunchuk"),{duration:700,transition:Fx.Transitions.Back.easeOut,onComplete:function(){}});C.start({"top":[D.y,noa.command.zapper.nunchuk.y],"left":[D.x,noa.command.zapper.nunchuk.x]});var B=new Fx.Styles($("zapper_wiimote"),{duration:700,transition:Fx.Transitions.Back.easeOut,onComplete:function(){noa.command.zapper.shrinkToTiny()}});var G=noa.command.zapper.zoomPosition.x+17;var F=noa.command.zapper.zoomPosition.y-5;B.start({"top":[A.y,noa.command.zapper.wiimote.y],"left":[A.x,noa.command.zapper.wiimote.x]})};noa.command.zapper.shrinkToTiny=function(){$("zapper_forg").style.display="none";$("zapper_backg").style.display="none";$("zapper_forg").style.display="none";$("zapper_complete").style.display="block";var B=new Fx.Styles($("zapper_complete"),{duration:700,transition:Fx.Transitions.Back.easeIn});B.start({"top":[noa.command.zapper.zoomPosition.y,96],"left":[noa.command.zapper.zoomPosition.x,108],"width":[585,390],"height":[249,166]});var C=new Fx.Styles($("zapper_nunchuk"),{duration:700,transition:Fx.Transitions.Back.easeIn});C.start({"top":[15,27],"left":[480,420],"width":[150,99],"height":[170,113]});var A=new Fx.Styles($("zapper_wiimote"),{duration:700,transition:Fx.Transitions.Back.easeIn,onComplete:function(){noa.command.zapper.restoreDecorations()}});A.start({"top":[20,19],"left":[80,114],"width":[300,200],"height":[75,50]});setTimeout(function(){noa.command.zapper.swapHiForLo()},350);var D=new Fx.Style($("anim_bdrop"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:1200});D.start(0)};noa.command.zapper.swapHiForLo=function(){$("zapper_complete").src="/images/wii/what/accessories/zapper/anim/zapper_complete.gif";$("zapper_nunchuk").src="/images/wii/what/accessories/zapper/anim/nunchuk.gif";$("zapper_wiimote").src="/images/wii/what/accessories/zapper/anim/wiimote.gif"};noa.command.zapper.restoreDecorations=function(){noa.command.zapper.textAnim=new Fx.Style($("zapper_dis_text"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:500});noa.command.zapper.textAnim.start(1);var B=new Fx.Style($("zapper_dis_toys"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:800});B.start(1);var A=new Fx.Style($("zapper_wiimote"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:800});A.start(0);var D=new Fx.Style($("zapper_nunchuk"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:800});D.start(0);var C=new Fx.Style($("zapper_complete"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:800});C.start(0);noa.command.zapper.animationState="APART"};dojo.provide("noa.controller.DrawerController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.DrawerController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupDrawers");this.addObserver("a.call2action","onclick","OpenDrawer")},addCommands:function(){this.addCommand("SetupDrawers","noa.command.drawers.SetupDrawersCommand");this.addCommand("OpenDrawer","noa.command.drawers.OpenDrawerCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.DropDownController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.DropDownController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupDataSet");this.addObserver("#gamesguide_dropdown","onclick","CloseDropDown");this.addObserver("#gamesguide_dropdown","onclick","CheckOpenDropdown");this.addObserver(mojo.Model.getReference("dropdownvalue"),"onNotify","AddHistoryItem");this.addObserver(mojo.Model.getReference("dropdownvalue"),"onNotify","GetGamesView",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}})},addCommands:function(){this.addCommand("SetupDataSet","noa.command.dropdown.SetupDataSetCommand");this.addCommand("CheckOpenDropdown","noa.command.dropdown.CheckOpenDropdownCommand");this.addCommand("GetGamesView","noa.command.games.GetGamesViewCommand");this.addCommand("AddHistoryItem","noa.command.games.AddHistoryItemCommand");this.addCommand("CloseDropDown","noa.command.dropdown.CloseDropDownCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.ErrorPageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.ErrorPageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Metrics",function(){return{mode:"set",params:{pageType:"errorPage"}}})},addCommands:function(){this.addCommand("Metrics","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.ExternalLinkController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.ExternalLinkController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SendThroughExternalInterstitial",{selector:"a[rel=external]"})},addCommands:function(){this.addCommand("SendThroughExternalInterstitial","noa.behavior.SendThroughExternalInterstitialBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.GameGuideController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.GameGuideController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","InitializeCommand",function(){return{panels:mojo.query(".panel")}});this.addObserver(this,"onInit","InitializeFromHistoryCommand");this.addObserver(this,"onInit","ShowComponentCommand");this.addObserver(this,"onInit","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver(".panel .header","onclick","ShowCommand");this.addObserver(this.getCommand("ShowCommand"),"execute","AddHistoryItemCommand");this.addObserver(".gameguideOption","onchange","ChooseOptionCommand");this.addObserver(".gameguideOption","onchange","AddHistoryItemCommand");this.addObserver(".gameguideOption","onchange","ClearGamesList");this.addObserver(".gameguideOption","onchange","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver(".gameguideOption","onchange","ApplyElipsesCommand",function(){return{lines:2}});this.addObserver(this,"onInit","ApplyElipsesCommand",function(){return{lines:2}});this.addObserver("#clearChoices","onclick","ClearOptionsCommand");this.addObserver("#clearChoices","onclick","AddHistoryItemCommand");this.addObserver("#clearChoices","onclick","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver(this.getCommand("ClearOptionsCommand"),"execute","AddHistoryItemCommand");this.addObserver(this.getCommand("ClearOptionsCommand"),"execute","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver(this.getCommand("SelectAllOptionsCommand"),"onResponse","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver("#keywordSearchButton","onclick","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver(this.getCommand("ChooseOptionCommand"),"execute","TagGameguideAsHavingBeenUsed");this.addObserver(noa.command.dropdown,"runDropDownSel","TagGameguideAsHavingBeenUsed");this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Metrics",function(){return{mode:"set",params:{interactiveToolUsage:"gameguide"}}});this.addObserver(mojo.Messaging.getTopic("/games/guide/gameChosen"),"onPublish","Metrics",function(){if(mojo.Model.contains("/games/guide/used")&&mojo.Model.get("/games/guide/used")==true){return{mode:"track",params:{type:"event",clearVariables:true,options:{eventName:"interactiveToolEnd",toolName:"gameguide"}}}}});this.addObserver(mojo.Messaging.getTopic("/games/guide/usedonce"),"onPublish","Metrics",function(){return{mode:"track",params:{type:"event",clearVariables:true,options:{eventName:"interactiveToolStart",toolName:"gameguide"}}}})},addCommands:function(){this.addCommand("InitializeCommand","noa.command.games.InitializeCommand");this.addCommand("ShowCommand","noa.command.games.ShowCommand");this.addCommand("ShowComponentCommand","noa.command.games.ShowComponentCommand");this.addCommand("ChooseOptionCommand","noa.command.games.ChooseOptionCommand");this.addCommand("ClearOptionsCommand","noa.command.games.ClearOptionsCommand");this.addCommand("GetGamesViewCommand","noa.command.games.GetGamesViewCommand");this.addCommand("InitializeFromCookieCommand","noa.command.games.InitializeFromCookieCommand");this.addCommand("AddHistoryItemCommand","noa.command.games.AddHistoryItemCommand");this.addCommand("InitializeFromHistoryCommand","noa.command.games.InitializeFromHistoryCommand");this.addCommand("ApplyElipsesCommand","noa.command.games.ApplyElipsesCommand");this.addCommand("ClearGamesList","noa.command.games.ClearGamesListCommand");this.addCommand("Metrics","noa.command.metrics.OmnitureInterfaceCommand");this.addCommand("TagGameguideAsHavingBeenUsed","noa.behavior.games.TagGameguideAsHavingBeenUsedBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.GamesListController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.GamesListController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupMiniGamesModel");this.addObserver(this,"onInit","SetupLivescroller");this.addObserver(mojo.Model.getReference("gamesView"),"onNotify","SetupMiniGamesModel");this.addObserver(mojo.Model.getReference("gamesView"),"onNotify","GetRelevantData",{renderExisting:true,destroyHTML:true,preserveScroll:false});this.addObserver(this.getCommand("DrawGamesBlock"),"execute","OperatePeakAhead");mojo.Model.set("gameItemWidth",112);mojo.Model.set("gameItemHeight",212);mojo.Model.set("gamesPerRow",6);this.addObserver(mojo.Model.getReference("gamesViewData"),"onNotify","DrawGamesBlock");this.addObserver("#games_region","onscroll","ThrottleViewUpdate");this.addObserver(this.getCommand("ThrottleViewUpdate"),"conditionPass","GetRelevantData");this.addObserver(this.getCommand("OperatePeakAhead"),"conditionPass","GetRelevantData")},addCommands:function(){this.addCommand("GetGamesView","noa.command.games.GetGamesViewCommand");this.addCommand("GetRelevantData","noa.command.games.GetRelevantDataCommand");this.addCommand("DrawGamesBlock","noa.command.games.DrawGamesBlockCommand");this.addCommand("SetupMiniGamesModel","noa.command.games.SetupMiniGamesModelCommand");this.addCommand("UpdateContainerPosition","noa.command.games.UpdateContainerPositionCommand");this.addCommand("ThrottleViewUpdate","noa.command.games.ThrottleViewUpdateCommand");this.addCommand("OperatePeakAhead","noa.command.games.OperatePeakAheadCommand");this.addCommand("SetupLivescroller","noa.command.games.SetupLivescrollerCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.IwataSideBarController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.IwataSideBarController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupIwataNav");this.addObserver(".major_handle","onclick","ShowCommand")},addCommands:function(){this.addCommand("SetupIwataNav","noa.command.iwata.SetupIwataCommand");this.addCommand("ShowCommand","noa.command.iwata.ShowCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.MiniDataPanelController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.MiniDataPanelController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupDataPanel")},addCommands:function(){this.addCommand("SetupDataPanel","noa.command.games.minidatapanel.SetupMiniDataPanelCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.PagePromotionController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.PagePromotionController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","BindToAnchor")},addCommands:function(){this.addCommand("BindToAnchor","noa.command.BindToAnchorBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.PopUpController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.PopUpController",mojo.controller.Controller,{addObservers:function(){this.addObserver("a[rel~=popup]","onclick","PopUp");this.addObserver("a[rel~=popup]","onclick","PreventDefaultEvent")},addCommands:function(){this.addCommand("PopUp","noa.command.PopUpCommand");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior");this.addCommand("InjectPopupSizeIntoURL","noa.behavior.InjectPopupSizeIntoURLBehavior")},addIntercepts:function(){this.addIntercept("around","PopUp","InjectPopupSizeIntoURL","execute")}});dojo.provide("noa.controller.VCController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.VCController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupVCComponent");this.addObserver(this,"onInit","GetVCTitles");this.addObserver(mojo.Model.getReference("VCGames"),"onNotify","GetCurrentPage",{pageNumber:0});this.addObserver(mojo.query(".sorter"),"onclick","SetSort",{});this.addObserver(this.getCommand("SetSort"),"execute","GetVCTitles")},addCommands:function(){this.addCommand("SetupVCComponent","noa.command.VC.SetupVCComponentCommand");this.addCommand("GetVCTitles","noa.command.VC.GetVCTitlesCommand");this.addCommand("GetCurrentPage","noa.command.VC.GetCurrentPageCommand");this.addCommand("SetSort","noa.command.VC.SetSortCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.VideoAutoEmbedController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.VideoAutoEmbedController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","EmbedFlash",function(){var A=mojo.queryFirst("a.videoLink");var B=function(E){var D=E.className.split(" ");var C;D.forEach(function(G){var F;if(F=G.match(/videoID_(.*)/)){C=F[1]}},this);return C?C:""};if(!A){A=mojo.queryFirst("a.videoLink")}return{swf_path:"/video/videoplayer_noa.swf",width:this.extractParameterFromStyles(this.getContextElement(),"w")||300,height:this.extractParameterFromStyles(this.getContextElement(),"h")||260,min_version:7,background_color:"#FDFDFD",variables:[{property:"autoplay",value:this.extractParameterFromStyles(this.getContextElement(),"autoplay")=="true"?"true":"false"},{property:"video_path",value:A?A.href:""},{property:"video_name",value:A?A.title:""},{property:"id",value:A?B(A):""},{property:"theme_color_timeline",value:"#353535"},{property:"theme_color_played",value:this.extractParameterFromStyles(this.getContextElement(),"platform")=="ds"?"#D13636":"#34BEED"},{property:"theme_color_loaded",value:this.extractParameterFromStyles(this.getContextElement(),"platform")=="ds"?"#5E1919":"#1B5469"}],parameters:[{property:"scale",value:"noscale"},{property:"salign",value:"lt"}],target_id:"videoArea"}}.bind(this))},addCommands:function(){this.addCommand("EmbedFlash","noa.behavior.EmbedFlashBehavior");this.addCommand("SetVideoTitle","noa.behavior.SetVideoTitleBehavior");this.addCommand("UpdateVideoGroupLinks","noa.behavior.UpdateVideoGroupLinksBehavior");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior")},addIntercepts:function(){},extractParameterFromStyles:function(C,A){var B=C.className.split(" ");var E=[null,null];var D;B.forEach(function(F){E=F.split("_");if(E.length==2&&E[0]==A){D=E[1]}});return D||false}});dojo.provide("noa.controller.VideoMultiEmbedController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.VideoMultiEmbedController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","EmbedFlash")},addCommands:function(){this.addCommand("EmbedFlash","noa.behavior.EmbedMultiFlashBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.gameSliderController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.gameSliderController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupSlider");this.addObserver(this,"onInit","ReDrawMiniBoxes");this.addObserver("#left_arrow","onclick","ChangePagination",function(){return{pageChange:-3}});this.addObserver("#right_arrow","onclick","ChangePagination",function(){return{pageChange:3}})},addCommands:function(){this.addCommand("SetupSlider","noa.command.gameslider.SetupSliderCommand");this.addCommand("ReDrawMiniBoxes","noa.command.gameslider.ReDrawMiniBoxesCommand");this.addCommand("ChangePagination","noa.command.gameslider.ChangePaginationCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.metrics.MetricsController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.metrics.MetricsController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.controller.Map.getInstance(),"onComplete","Track",function(){return{mode:"track",params:{type:"pageview",options:{pageName:function(){if(s.pageName){return false}else{var B=noa.reformatPageTitle(document.title).replace(/^Nintendo ::/,"US :: NCom ::");var A=B.replace(/ :: /g,"@SEPARATOR@").replace(/:/g,"-").replace(/@SEPARATOR@/g,":").toLowerCase();if(A=="us:ncom:not found"){return null}else{return B}}}()}}}});this.addObserver(mojo.Messaging.getTopic("/metrics/videoPlayed"),"onPublish","Track",function(A,C){var B=C.getMessage();return{mode:"track",params:{clearVariables:true,type:"event",callerName:"videoPlayTimer",options:{eventName:"videoPlayed",videoIdentifier:B.video_id+":"+B.video_name}}}})},addCommands:function(){this.addCommand("Track","noa.command.metrics.OmnitureInterfaceCommand");this.addCommand("SendMessage","noa.behavior.SendMessageBehavior")},addIntercepts:function(){this.addIntercept("before","Track","SendMessage",{topic:"/metrics/callForInfo"})}});dojo.provide("noa.controller.navigation.GlowController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.navigation.GlowController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","InitializeGlow",function(){return{navElement:mojo.queryFirst("#primaryNav")}});this.addObserver(mojo.Messaging.getTopic("/glow/turn/on"),"onPublish","AnimateGlow",{transition:"in"});this.addObserver(mojo.Messaging.getTopic("/glow/turn/off"),"onPublish","AnimateGlow",{transition:"out"});this.addObserver(this.getCommand("AnimateGlow"),"execute","AnimationQueue",{queue:"/glow/animationQueue"});this.addObserver("li.major a","onmouseover","AnimateGlow",{transition:"in"});this.addObserver("li.major a","onmouseout","AnimateGlow",{transition:"out"})},addCommands:function(){this.addCommand("MorphStyles","noa.command.animation.MorphStylesBehavior");this.addCommand("InitializeGlow","noa.command.glow.InitializeGlowBehavior");this.addCommand("AnimateGlow","noa.command.glow.AnimateGlowBehavior");this.addCommand("AnimationQueue","noa.command.animation.QueueBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.DSFeaturesPageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.DSFeaturesPageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","ShowOrHideElements",function(){return{elements:mojo.query("#featureDisplay > div"),defaultElement:"introduction",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(this,"onInit","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#featureMenu"),className:mojo.History.getInstance().getHash()!=""?mojo.History.getInstance().getHash():"introduction"}});this.addObserver("#featureMenu a","onclick","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#featureMenu"),className:this.callerObj.href.split("#")[1]}});this.addObserver("#featureMenu a","onclick","RestartAnimatedGIF",function(){return{imageElement:mojo.queryFirst("#"+this.callerObj.href.split("#")[1]+" img")}});this.addObserver("#featureMenu a","onclick","ShowOrHideElements",function(){return{elements:mojo.query("#featureDisplay > div"),highlightId:this.callerObj.href.split("#")[1]}});this.addObserver("#featureMenu a","onclick","PreventDefaultEvent")},addCommands:function(){this.addCommand("AlterClass","noa.behavior.AlterClassBehavior");this.addCommand("RestartAnimatedGIF","noa.behavior.RestartAnimatedGIFBehavior");this.addCommand("ShowOrHideElements","noa.behavior.ShowOrHideElementsBehavior");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.DSSectionController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.DSSectionController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{productName:"DS",contentType:"platform"}})},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.GamesDetailPageController");dojo.require("mojo.controller.Controller");dojo.require("mojo.History");dojo.declare("noa.controller.pageControllers.GamesDetailPageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","ShowOrHideElements",function(){return{prefix:"panel_",elements:mojo.query("#gameDetailsContainer > div"),defaultElement:"overview",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(this,"onInit","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#gameDetailsSubnav"),className:mojo.History.getInstance().getHash()!=""?"nav_"+mojo.History.getInstance().getHash():"nav_overview"}});this.addObserver(mojo.History.getInstance(),"onChange","ShowOrHideElements",function(){return{prefix:"panel_",elements:mojo.query("#gameDetailsContainer > div"),defaultElement:"overview",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(mojo.History.getInstance(),"onChange","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#gameDetailsSubnav"),className:mojo.History.getInstance().getHash()!=""?"nav_"+mojo.History.getInstance().getHash():"nav_overview"}});this.addObserver(this,"onInit","ShowOrHideElements",function(){return{prefix:"fullsize_",elements:mojo.query("#panel_images .lg-image li"),highlightId:mojo.queryFirst("#panel_images .thumbnails .list li")?mojo.queryFirst("#panel_images .thumbnails .list li").id.split("_")[1]:null}});this.addObserver(["#gameDetailsSubnav li.category a",".gameResources a.level1"],"onclick","ShowOrHideElements",function(){return{prefix:"panel_",elements:mojo.query("#gameDetailsContainer > div"),defaultElement:"overview",highlightId:this.callerObj.href.split("#")[1]}});this.addObserver(["#gameDetailsSubnav li.category a",".gameResources a.level1"],"onclick","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#gameDetailsSubnav"),className:"nav_"+this.callerObj.href.split("#")[1]}});this.addObserver("a.box_flip","onclick","ShowOrHideElements",function(){return{prefix:"box_",elements:mojo.query(".links img.box_art"),defaultElement:"front",highlightId:$(mojo.queryFirst("#box_front")).getStyle("display")!="none"?"back":"front"}});this.addObserver("a.box_flip","onclick","PreventDefaultEvent");this.addObserver(".thumbnails .forward","onclick","ListScroll",{containerId:/^panel_/,listClass:".thumbnails .list",direction:"right",distance:615});this.addObserver(".thumbnails .back","onclick","ListScroll",{containerId:/^panel_/,listClass:".thumbnails .list",direction:"left",distance:615});this.addObserver(".thumbnails .forward","onclick","PreventDefaultEvent");this.addObserver(".thumbnails .back","onclick","PreventDefaultEvent");this.addObserver(".thumbnails .list a","onclick","ShowOrHideElements",function(){return{prefix:"fullsize_",elements:mojo.query("#panel_"+this.callerObj.className.replace("Link","s")+" .lg-image li"),highlightId:$(this.callerObj).getParent().id.split("_")[1]}});this.addObserver("#panel_videos .videoLink","onclick","CommunicateWithVideoPlayer",{command:"loadvideo"});this.addObserver("#panel_videos .videoLink","onclick","PreventDefaultEvent");this.addObserver(".gameResources .deepLink","onclick","PreventDefaultEvent");this.addObserver(".gameResources .deepLink","onclick","ShowOrHideElements",function(){return{prefix:"fullsize_",elements:mojo.query("#panel_"+$(this.callerObj).getProperty("class").split(" ")[1]+" .lg-image li"),highlightId:this.callerObj.href.split("#")[1].split("_")[1]}});this.addObserver(".gameResources .deepLink","onclick","ShowOrHideElements",function(){return{prefix:"panel_",elements:mojo.query("#gameDetailsContainer > div"),highlightId:$(this.callerObj).getProperty("class").split(" ")[1].replace("Link","s")}});this.addObserver(".gameResources .videos","onclick","FireEvent",function(){return{element:mojo.queryFirst("#panel_videos #videothumb_"+this.callerObj.href.split("#")[1].split("_")[1]+" a"),theEvent:"onclick"}});this.addObserver(".gameResources .deepLink","onclick","SetHash",function(){return{value:this.callerObj.href.test("#fullsize_")?"images":this.callerObj.href.split("#")[1].split("_")[0]}});this.addObserver("#panel_downloads .gallery a","onclick","Metrics",function(){return{mode:"set",mapImmediately:true,params:{eventName:"fileDownloaded",fileType:$(this.callerObj).getProperty("rel")}}});this.addObserver("#gameDetailsSubnav li.category a","onclick","CommunicateWithVideoPlayer",{command:"pausevideo"});this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Metrics",function(){this.metricsHasRunOnce=true;var A=$((mojo.queryFirst("#mainContentContainer .gameBanner img[alt]")||mojo.queryFirst("#mainContentContainer .gameBanner h3")));return{mode:"set",mapImmediately:true,params:{productName:function(){var D=$$(".systemData td");if(D.length<2){return""}var C=D[1];var B=C?C.getText()+":":"";return(B?B.toLowerCase():"")+(A?A.getProperty("alt")||A.getText():"")}(),pageName:function(){var C=noa.reformatPageTitle(document.title).replace(/^Nintendo ::/,"US :: NCom ::");var B=C+" :: "+(mojo.History.getInstance().getHash()==""?"overview":mojo.History.getInstance().getHash());return B}(),contentType:"game:details",gameDetailType:function(){var B=mojo.History.getInstance().getHash();switch(B){case"features":gameDetailSection="features";break;case"images":gameDetailSection="images";break;case"downloads":gameDetailSection="downloads";break;case"videos":gameDetailSection="videos";break;default:gameDetailSection="home"}if(gameDetailSection){return gameDetailSection}}(),productID:function(){var C=$("mainContentContainer").className.split(" ");var B;C.each(function(E){var D;if(D=E.match(/gameID_(.*)/)){B=D[1]}});return B||""}(),gameTitle:function(){return A?A.getProperty("alt")||A.getText():""}(),gameCategory:function(){var E=$$(".genreData td");if(E.length<2){return""}var C=E[1];var B=C?C.getText():"";var D=B?B.toLowerCase().replace(/^\s*/,"").replace(/,\s*/g,":").replace(/\s\s+/gi,""):"";return D}(),gamePublisher:function(){var D=$$(".publisherData td");if(D.length<2){return""}var B=D[1];var C=B?B.getText():"";return(C?C.toLowerCase():"")}()}}}.bind(this));this.addObserver(mojo.History.getInstance(),"onChange","Metrics",function(){if(this.metricsHasRunOnce){return{mode:"track",params:{type:"pageview",options:{contentType:"game:details",gameDetailType:function(){var A=mojo.History.getInstance().getHash();switch(A){case"features":gameDetailSection="features";break;case"images":gameDetailSection="images";break;case"downloads":gameDetailSection="downloads";break;case"videos":gameDetailSection="videos";break;default:gameDetailSection="home"}if(gameDetailSection){return gameDetailSection}}(),pageName:function(){var B=noa.reformatPageTitle(document.title).replace(/^Nintendo ::/,"US :: NCom ::");var A=B+" :: "+mojo.History.getInstance().getHash();return A}(),productID:function(){var B=$("mainContentContainer").className.split(" ");var A;B.each(function(D){var C;if(C=D.match(/gameID_(.*)/)){A=C[1]}});return A||""}()}}}}}.bind(this))},addCommands:function(){this.addCommand("ShowOrHideElements","noa.behavior.ShowOrHideElementsBehavior");this.addCommand("AlterClass","noa.behavior.AlterClassBehavior");this.addCommand("SetHash","noa.behavior.SetHashBehavior");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior");this.addCommand("ListScroll","noa.command.animation.ListScrollBehavior");this.addCommand("SetHistory","noa.behavior.SetHistoryBehavior");this.addCommand("CommunicateWithVideoPlayer","noa.behavior.CommunicateWithVideoPlayerBehavior");this.addCommand("FireEvent","noa.behavior.FireEventBehavior");this.addCommand("Metrics","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.GamesHomePageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.GamesHomePageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{contentType:"games:home"}})},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.HomePageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.HomePageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{contentType:"site:home"}})},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.VideoPageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.VideoPageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","EmbedFlash",this.embed.pass($(mojo.queryFirst("#minorPromos div.promo"))||$(mojo.queryFirst("#minorPromos li")),this));this.addObserver(this,"onInit","SetVideoTitle",function(){return{theLink:$$("#minorPromos div.promo a.more")[0]}});this.addObserver("#minorPromos a","onclick","UpdateVideoGroupLinks");this.addObserver(["#minorPromos a","#groupSubSelect li a"],"onclick","CommunicateWithVideoPlayer",{command:"loadvideo"});this.addObserver("#minorPromos a","onclick","SetVideoTitle");this.addObserver(["#minorPromos a","#groupSubSelect li a"],"onclick","PreventDefaultEvent")},addCommands:function(){this.addCommand("EmbedFlash","noa.behavior.EmbedFlashBehavior");this.addCommand("CommunicateWithVideoPlayer","noa.behavior.CommunicateWithVideoPlayerBehavior");this.addCommand("SetVideoTitle","noa.behavior.SetVideoTitleBehavior");this.addCommand("UpdateVideoGroupLinks","noa.behavior.UpdateVideoGroupLinksBehavior");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior")},addIntercepts:function(){},embed:function(D){if(!D){return false}var C=$(mojo.queryFirst("a",D));var B=function(G){var F=G.className.split(" ");var E;F.forEach(function(I){var H;if(H=I.match(/videoID_(.*)/)){E=H[1]}},this);return E?E:""};var A={swf_path:"/video/videoplayer_noa.swf",width:this.extractParameterFromStyles($("videoPlayer"),"w")||320,height:this.extractParameterFromStyles($("videoPlayer"),"h")||260,min_version:7,background_color:"#FDFDFD",variables:[{property:"autoplay",value:"false"},{property:"video_path",value:C.getProperty("href")},{property:"video_name",value:C.getProperty("title")||""},{property:"id",value:B(C)}],parameters:[{property:"scale",value:"noscale"},{property:"salign",value:"lt"}],target_id:"videoPlayer"};if(D.hasClass("wii")){A.variables.merge([{property:"theme_color_timeline",value:"#353535"},{property:"theme_color_played",value:"#34BEED"},{property:"theme_color_loaded",value:"#1B5469"}])}else{A.variables.merge([{property:"theme_color_timeline",value:"#353535"},{property:"theme_color_played",value:"#D13636"},{property:"theme_color_loaded",value:"#5E1919"}])}return A},extractParameterFromStyles:function(C,A){var B=C.className.split(" ");var E=[null,null];var D;B.forEach(function(F){E=F.split("_");if(E.length==2&&E[0]==A){D=E[1]}});return D||false}});dojo.provide("noa.controller.pageControllers.VirtualConsoleGamesDetailPageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.VirtualConsoleGamesDetailPageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",function(){return{mode:"set",params:{productName:function(){var C=$((mojo.queryFirst("h4.titleData")));var D=$$(".systemData");if(D.length==0){return""}var B=D[0];var A=B?B.getText()+":":"";return(A?A.toLowerCase().replace("system: ",""):"")+(C?C.getText():"")}(),gameTitle:function(){var A=$((mojo.queryFirst("h4.titleData")));return A.getText()}(),gameCategory:function(){var C=$$(".genreData");if(C.length==0){return""}var B=C[0];var A=B?B.getText():"";return(A?A.toLowerCase().replace("genre: ","").replace(/,\s*/g,":"):"")}(),gamePublisher:function(){var C=$$(".publisherData");if(C.length==0){return""}var A=C[0];var B=A?A.getText():"";return(B?B.toLowerCase().replace("publisher: ",""):"")}(),productID:function(){var B=$("mainContentContainer").className.split(" ");var A;B.each(function(D){var C;if(C=D.match(/gameID_(.*)/)){A=C[1]}});return A||""}()}}})},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.WhatsNewIndexController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.WhatsNewIndexController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","FilterWhatsNewResults",function(){return{method:mojo.History.getInstance().getHash()||"all"}});this.addObserver(".filterLink","onclick","FilterWhatsNewResults");this.addObserver(mojo.History.getInstance(),"onChange","FilterWhatsNewResults",function(){return{method:mojo.History.getInstance().getHash()}})},addCommands:function(){this.addCommand("FilterWhatsNewResults","noa.behavior.whatsnew.FilterWhatsNewResultsBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.WhatsNewSectionController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.WhatsNewSectionController",mojo.controller.Controller,{addObservers:function(){var A=document.getElementById("mainPrimary").getElementsByTagName("h3");var B=A[0].firstChild.nodeValue;if(B){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{contentType:"article",articleName:B,productID:function(){var D=$("mainContentContainer").className.split(" ");var C;D.each(function(F){var E;if(E=F.match(/articleID_(.*)/)){C=E[1]}});return C||""}()}})}else{this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{contentType:"article"}})}},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.WiiSectionController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.WiiSectionController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{productName:"Wii",contentType:"wii marketing"}})},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.ZapperHowDoIUseItController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.ZapperHowDoIUseItController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/videoPlaying"),"onPublish","BeginZapperVideoAnim")},addCommands:function(){this.addCommand("BeginZapperVideoAnim","noa.command.zapper.BeginZapperVideoAnimCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.ZapperHowDoesItWorkController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.ZapperHowDoesItWorkController",mojo.controller.Controller,{addObservers:function(){this.addObserver("#assemble_button","onclick","AssembleZapper");this.addObserver("#disassemble_button","onclick","DisassembleZapper")},addCommands:function(){this.addCommand("AssembleZapper","noa.command.zapper.AssembleZapperCommand");this.addCommand("DisassembleZapper","noa.command.zapper.DisassembleZapperCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.miiChannelVideosController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.miiChannelVideosController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","CommunicateWithVideoPlayer",function(){var A=mojo.History.getInstance().getHash()!=""?mojo.History.getInstance().getHash():"link";return{theLink:mojo.queryFirst("#minorPromos a."+A),command:"loadvideo"}});this.addObserver(mojo.History.getInstance(),"onChange","CommunicateWithVideoPlayer",function(){var A=mojo.History.getInstance().getHash()!=""?mojo.History.getInstance().getHash():"link";return{theLink:mojo.queryFirst("#minorPromos a."+A)||mojo.queryFirst("#minorPromos a"),command:"loadvideo"}});this.addObserver(this,"onInit","ShowOrHideElements",function(){return{prefix:"tip_",elements:mojo.query("#tipContainer ul"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(this,"onInit","ShowOrHideElements",function(){return{prefix:"photo_",elements:mojo.query("#photoContainer img"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(this,"onInit","ShowOrHideElements",function(){return{prefix:"title_",elements:mojo.query("#titleContainer h4"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(this,"onInit","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#minorPromos"),className:mojo.History.getInstance().getHash()!=""?mojo.History.getInstance().getHash():"link"}});this.addObserver("#minorPromos a","onclick","convertClassToID",function(){return{callerClass:this.callerObj.className.split(" ")[0]}});this.addObserver(mojo.History.getInstance(),"onChange","ShowOrHideElements",function(){return{prefix:"tip_",elements:mojo.query("#tipContainer ul"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(mojo.History.getInstance(),"onChange","ShowOrHideElements",function(){return{prefix:"photo_",elements:mojo.query("#photoContainer img"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(mojo.History.getInstance(),"onChange","ShowOrHideElements",function(){return{prefix:"title_",elements:mojo.query("#titleContainer h4"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(mojo.History.getInstance(),"onChange","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#minorPromos"),className:mojo.History.getInstance().getHash()!=""?mojo.History.getInstance().getHash():"link"}})},addCommands:function(){this.addCommand("AlterClass","noa.behavior.AlterClassBehavior");this.addCommand("convertClassToID","noa.behavior.ConvertClassToIDBehavior");this.addCommand("ShowOrHideElements","noa.behavior.ShowOrHideElementsBehavior");this.addCommand("CommunicateWithVideoPlayer","noa.behavior.CommunicateWithVideoPlayerBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.search.SearchController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.search.SearchController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","UpdateOverlabel",function(){return{label:mojo.queryFirst(".overlabel")}});this.addObserver("#globalSearchKeyword","onfocus","UpdateOverlabel",function(){return{label:mojo.queryFirst(".overlabel"),focusField:true}});this.addObserver("#globalSearchKeyword","onblur","UpdateOverlabel",function(){return{label:mojo.queryFirst(".overlabel")}});this.addObserver(this.getContextElement(),"onsubmit","Metrics",function(){return{mode:"track",params:{clearVariables:true,type:"event",callerName:"globalSearch",options:{eventName:"searchConducted",searchKeyword:$("globalSearchKeyword").getValue()}}}});this.addObserver(this.getContextElement(),"onsubmit","DetectSupportCode");this.addObserver(".overlabel","onclick","UpdateOverlabel",{focusField:true})},addCommands:function(){this.addCommand("UpdateOverlabel","noa.command.UpdateOverlabel");this.addCommand("DetectSupportCode","noa.behavior.search.DetectSupportCodeBehavior");this.addCommand("Metrics","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.search.SearchMainController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.search.SearchMainController",mojo.controller.Controller,{addObservers:function(){noa.command.search.IE6=false;if(navigator.appVersion.indexOf("MSIE")!=-1){temp=navigator.appVersion.split("MSIE");version=parseFloat(temp[1]);if(version<7){noa.command.search.IE6=true}}this.addObserver(this,"onInit","DetectSupportCode");this.addObserver(this,"onInit","SetupSearch");this.addObserver("#search_again_button","onclick","DetectSupportCode");this.addObserver("#search_again_button","onclick","SetupSearch");this.addObserver("#sch_frm","onsubmit","DetectSupportCode");this.addObserver("#sch_frm","onsubmit","SetupSearch");this.addObserver("#dymkLink","onclick","DetectSupportCode");this.addObserver("#dymkLink","onclick","SetupSearch",{useDidYouMeanText:true});this.addObserver("#dymkLink","onclick","PreventDefaultEvent");this.addObserver(mojo.Model.getReference("/search/keyword"),"onNotify","InitiateSearch");this.addObserver(mojo.Messaging.getTopic("/search/trigger"),"onPublish","InitiateSearch");this.addObserver(mojo.Model.getReference("search/searchData"),"onNotify","SetupResults");this.addObserver(this.getCommand("ClearOptionsCommand"),"execute","AddHistoryItemCommand");this.addObserver(this.getCommand("SetupResults"),"postrender","DrawSearchResults");this.addObserver(this.getCommand("DrawSearchResults"),"oncomplete","InitiateSearch");this.addObserver(".sch_sb_button","onclick","SelectTab",{});this.addObserver(".sideLink","onclick","SelectTab",{sideLink:true});if(noa.command.search.IE6==false){this.addObserver(".search_results_container","onscroll","CalcViewable",{});this.addObserver(".search_results_container_games","onscroll","CalcViewable",{});this.addObserver(this.getCommand("DrawSearchResults"),"execute","CalcViewable",{processAll:true});this.addObserver(this.getCommand("GrabCompelData"),"onResponse","CalcViewable",{processAll:true});this.addObserver(this.getCommand("GrabCompelData"),"onResponse","CountResults",{processAll:true});this.addObserver(this.getCommand("SelectTab"),"execute","CalcViewable",{processAll:true});this.addObserver(mojo.Model.getReference("search/searchTrigger"),"onNotify","CalcViewable",{processAll:true})}this.addObserver(this.getCommand("InitiateSearch"),"onResponse","GrabCompelData");this.addObserver(this.getCommand("DrawSearchResults"),"execute","CountResults");this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Metrics",function(){return{mode:"track",params:{clearVariables:true,type:"pageView",contentType:"search:results",options:{searchKeyword:$("globalSearchKeyword").getValue()}}}});this.addObserver(".sch_rslt a","onclick","Metrics",function(){return{mode:"track",params:{clearVariables:true,type:"event",callerName:"sch_rslt",options:{eventName:"searchResultClicked",searchKeyword:mojo.Model.get("/search/keyword")||""}}}});this.addObserver(["#search_again_button","#dymkLink"],"onclick","Metrics",function(){return{mode:"track",params:{clearVariables:true,type:"event",callerName:"search_again_button",options:{eventName:"searchConducted",searchKeyword:mojo.Model.get("/search/keyword")||""}}}});this.addObserver("#sch_frm","onsubmit","Metrics",function(){return{mode:"track",params:{clearVariables:true,type:"event",callerName:"search_again_button",options:{eventName:"searchConducted",searchKeyword:mojo.Model.get("/search/keyword")||""}}}})},addCommands:function(){this.addCommand("InitiateSearch","noa.command.search.BeginSearchCommand");this.addCommand("SetupResults","noa.command.search.BeginSetupResultsCommand");this.addCommand("SetupSearch","noa.command.search.SetupSearchCommand");this.addCommand("DrawSearchResults","noa.command.search.DrawSearchResultsCommand");this.addCommand("SelectTab","noa.command.search.SelectTabCommand");this.addCommand("CalcViewable","noa.command.search.CalcViewableRecordsCommand");this.addCommand("GrabCompelData","noa.command.search.GrabCompelDataCommand");this.addCommand("CountResults","noa.command.search.CountResultsCommand");this.addCommand("DetectSupportCode","noa.behavior.search.DetectSupportCodeBehavior");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior");this.addCommand("Metrics","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.lib.OmnitureLibrary");s_account=($chk(noa.runmode)&&noa.runmode=="production")?"ncomglobal,ncomprod":"ncomdev";s=s_gi(s_account);s.dynamicAccountSelection=true;s.dynamicAccountList="ncomglobal,ncomsupport=/consumer/";s.dynamicAccountMatch=window.location.pathname;s.charSet="UTF-8";s.trackDownloadLinks=true;s.trackExternalLinks=true;s.trackInlineStats=true;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";s.linkInternalFilters="javascript:,192.168.,nintendo.com";s.linkLeaveQueryString=false;s.linkTrackVars="eVar3,eVar4,eVar5,eVar6,events";s.linkTrackEvents="event8,event7,event6,event5,event4,event3";s.formList="";s.trackFormList=true;s.trackPageName=true;s.useCommerce=false;s.varUsed="prop9";s.eventList="";s.usePlugins=true;function s_doPlugins(A){A.campaign=A.getQueryParam("cid");A.campaign=A.getValOnce(A.campaign,"s_cid",0);A.setupFormAnalysis();A.today=new Date();A.prop13=A.getTimeParting("w","-5",A.today.getFullYear());A.prop13=A.prop13+":"+A.getTimeParting("d","-5",A.today.getFullYear());A.prop13=A.prop13+":"+A.getTimeParting("h","-5",A.today.getFullYear());A.eVar7=A.prop13;A.prop6="us:en";A.supportURL=location.href.toLowerCase();if(A.supportURL.match("/consumer/")&&(A.pageName.match("us:support:")==null||A.channel.match("us:support:")==null)){if(A.supportURL.match("/systems/")){A.supportURL=A.supportURL.substring(A.supportURL.indexOf("/systems/")+9,A.supportURL.length);if(A.supportURL.indexOf("/")==-1){A.supportURL="ds"}else{A.supportURL=A.supportURL.substring(0,A.supportURL.indexOf("/"))}A.channel="us:support:"+A.supportURL+":";if(A.supportURL=="general"||A.supportURL=="other"){A.channel="us:support:systems:general"}if(A.pageName){A.pageName=A.channel+A.pageName}if(A.prop1){A.prop1=A.channel+A.prop1}}else{A.supportURL=A.supportURL.substring(A.supportURL.indexOf("/consumer/")+10,A.supportURL.length);if(A.supportURL.match("wfc/")){if(A.supportURL.match("/wii/")){A.channel="us:support:wii:wfc:"}if(A.supportURL.match("/ds/")){A.channel="us:support:ds:wfc:"}}else{A.supportURL=A.supportURL.substring(0,A.supportURL.indexOf("/"));A.channel="us:support:"+A.supportURL}if(A.supportURL=="routers"){A.channel="us:support:wii routers:"}if(A.pageName){A.pageName=A.channel+A.pageName}if(A.prop1){A.prop1=A.channel+A.prop1}}}if(A.pageName){A.pageName=A.pageName.toLowerCase()}if(A.channel){A.channel=A.channel.toLowerCase()}if(A.prop1){A.prop1=A.prop1.toLowerCase()}}s.doPlugins=s_doPlugins;s.getQueryParam=new Function("p","d","u","var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v");s.p_gpv=new Function("k","u","var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v");s.p_gvf=new Function("t","k","if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''");s.getValOnce=new Function("v","c","e","var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");s.linkHandler=new Function("p","t","var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkName)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkName=l=='[['?'':l;s.linkType=t;return h;}return '';");s.p_gn=new Function("t","h","var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x=t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}return 0;");s.channelExtract=new Function("d","p","u","pv","var s=this,v='';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;u=u+'';li=u.lastIndexOf(d);if(li>0){u=u.substring(0,li);var i,n,a=s.split(u,d),al=a.length;if(al<p){if(pv==1) p=al;else return '';}for(i=0;i<p;i++){n=a[i];v=v+n;}return v}return '';");s.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");s.getTimeParting=new Function("t","z","y","dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay();gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+':'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return timestring}if(t=='d'){return daystring};if(t=='w'){return endstring}}};");s.setupFormAnalysis=new Function("var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s.wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.eventList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('','','','')}");s.sendFormEvent=new Function("t","pn","fn","en","var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");s.faol=new Function("e","var s=s_c_il["+s._in+"],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd.event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.length>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name;tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.elements[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.onmousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toString():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s.wd.onunload;s.wd.onunload=s.fasl;}return r;");s.faos=new Function("e","var s=s_c_il["+s._in+"],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.vu]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):true;");s.fasl=new Function("e","var s=s_c_il["+s._in+"],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPageName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.pathname:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]='Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackVars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars=ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lte=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,',','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s.events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f.vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.usePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;");s.fam=new Function("e","var s=s_c_il["+s._in+"],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLastChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this.form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e.which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOWN'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIMAGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va[1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fakd(e);");s.ee=new Function("e","n","return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");s.fage=new Function("e","a","var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");s.visitorNamespace="nintendo";s.dc=112;var s_code="",s_objectID;function s_gi(un,pg,ss){var d="function s_dr(x,o,n){var i=x.indexOf(o);if(i>=0&&x.split)x=(x.split(o)).join(n);else while(i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o)}return x}w.s_dr=s_dr;function s_d(x) {var t='`^@$#',l='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',d,n=0,b,k,w,i=x.lastIndexOf('~~');if(i>0){d=x.substring(0,i);x=x.substring(i+2);while(d){w=d;i=d.indexOf('~');if(i>0){w=d.substring(0,i);d=d.substring(i+1)}else d='';b=parseInt(n/62);k=n-b*62;k=t.substring(b,b+1)+l.substring(k,k+1);x=s_dr(x,k,w);n++}for(i=0;i<5;i++){w=t.substring(i,i+1);x=s_dr(x,w+' ',w)}}return x}w.s_d=s_d;",c=".substring(~.indexOf(~return ~=fun`K(~){`Os=^u~`t $6~;$6~.toLowerCase()~`cFun`K('e`s`Os=s_c_il['+@i+']~};s.~.length~.toUpperCase~`cObject~s.wd~t^D~.location~')q='~dynamicAccount~link~s.apv~ction~$l$X~)$6x^X!Object||!Object.prototype||!Object.prototype[x])~@G^Al)@G^Al['+@i+'].mrq(\"'+un+'\")'~var ~s.pt(~ookieDomainPeriods~,`s,'~while(~);s.~.protocol~){$6~visitor~=''~:'')~;@F^Vs[k],255)}~s_c2f~javaEnabled~=new ~.lastIndexOf('~tm.get~@5\"$Qs.b.addBehavior('# default# ~onclick~ternalFilters~entElement~Name~javascriptVersion~=parseFloat(~cookie~parseInt(~s.^J~Type~o^joid~browser~','~else~referrer~colorDepth~String~.host~s.rep(~}catch(e){~r=s.m(f)?s[f](~}$6~s.un~s.eo~s.sq~t=s.ot(o)~track~j='1.~)?'Y':'N'~$dURL~^jc_i~s.ismac~lugins~=='~;for(~Sampling~s.rc[un]~s.b.addEventListener~Download~tfs~resolution~.get@I()~s.eh~s.isie~s.vl_l~s.vl_t~Height~t,h){t=t?t~isopera~escape(~screen.~s.fl(~harCode~&&(~variableProvider~s.gg('objectID')~&&s.~:'';h=h?h~e&&l$kSESSION'~');~f',~_'+~Date~name~home$d~.s_~s.c_r(~s.rl[u~o.href~Lifetime~Width~sEnabled~'){q='~b.attachEvent~&&l$kNONE'){~ExternalLinks~this~charSet~onerror~currencyCode~s=s_gi(~e$SElement~;s.gl(s.vl_g~.parent~Array~lnk~Opera~eval(~Math.~s.fsg~s.ns6~docum~s.oun~conne~InlineStats~Track~'0123456789~s[k]=~window~onload~Time~s.epa(~s.c_w(~o.type~(s.ssl~n=s.oid(o)~LeaveQuery~')>=~&&t~'=')~){n=~+1))~' '+~s.t()}~\",''),~=s.oh(o);~+(y<1900?~ingServer~s_gs~true~sess~campaign~lif~;fun~,100)~s.co(~s._in~x in ~='s_~ffset~s.c_d~'&pe~s.gv(~s.qav~s.pl~=(apn~sqs',q);~Year(~=s.n.app~&&!~(''+~(\")>=~)+'/~',s~s()+':'+~){p=~():''~a):f(~){v=s.n.~channel~if(~un)~.target~o.value~etscape~(ns?ns:~s_')t=t~omePage~++}~')<~){x~1);~e))~'+n~height~events~trk~random~code~un,~try{~'MSIE ~.src~INPUT'~floor(~s.pg~s.num(~s.ape(~s.c_gd~s.dc~.inner~transa~Events~page~.set~Group,~Match,~.fromC~++){~?'':~!='~='+~(\")<~?'&~+';~(f){~>=5)~&&i>~[b](~=l[n];~~fun`K `ae$p`Ox`X,s=0,e,a,b,c;`S1){e=f`1'\"@z);b=f`1'\\\\',s);c=f`1\"\\n\",s)`6e<0||(b>=0&&b<$Ie=b`6e<0||(c>=0&&c<$Ie=c`6e>=0$G+=(e>s?f`0s,e)`Y+(e==c?'\\\\n':'\\\\'+f`0e,e@T;s=e+1}`t `2x+f`0s)}`2f}w.`ae=`ae@f`K `aa$p`Os=f`1'(')+1,e=f`1')'),a`X,c;`Ss>=0&&s<e){c=f`0s,s+1)`6c==`s)a+='\",\"';`5(\"\\n\\r\\t \")`1c)<0)a+=c;s$E`2a?'\"'+a+'\"':a}w.`aa=`ae@f`K `a(cc){cc`X+cc;`Ofc='`Of`cFun`K(@z=cc`1';',cc`1'{')),e=cc`d}'),o,a,d,q,c,f,h,x;fc+=`aa(cc)+',\"`Os`C;';c=cc`0s+1,e);s=c`1'fun`K^d`Ss>=0){d=1;q`X;x=0;f=c`0s);a=`aa(f);e=o=c`1'{@z);e++;`Sd>0){h=c`0e,e+1)`6q`Vh==q@vx)q`X`6h^D\\\\')x=x?0:1;`t x=0}`t{$6h^D\"'||h==\"'\")q=h`6h^D{')d++`6h^D}')d--^1d>0)e$Ec=c`00,s)+'new Fun`K('+(a?a+`s`Y+'\"'+`ae(c`0o+1,$I+'\")'+c`0e+$Hs=c`1'fun`K')}fc+=`ae(c)$o`2s\");';@5fc);`2f}w.`a=`a`6pg){fun`K s_co(o){`O^y\"_\",1,$H`2@ho)}w^jco=s_co@f`K @a($7{`O^y$P1,$H`2@Vw^jgs=@a@f`K s_dc($7{`O^y$P$H`2@Vw^jdc=s_dc;}fun`K s_c($Ppg,ss`4;s._c@kc';`D=@G`6!`D^An){`D^Al`c@2;`D^An=0;}s._il=`D^Al;@i=`D^An;s._il[@i]=s;`D^An++;s.m`3m){`2@wm)`1'{$F0`9fl`3x,l){`2x?@wx)`00,l):x`9co`3o`V!o)`2o;`On`C,x^E@jo)$6x`1'select$F0&&x`1'filter$F0)n[x]=o[x];`2n`9num`3x$G`X+x^E`Op=0;p<x`A;p++)$6(@E')`1x`0p,p@T<0)`20;`21`9rep`3x,o,n){`Oi=x`1o);`Sx$r=0$G=x`00,i)+n+x`0i+o`A);i=x`1o,i+n`A)}`2x`9ape`3x`4,h=@EABCDEF',i,c=s.^v,n,l,e,y`X;c=c?c`B$2`6x$G`X+x`6c^DAUTO'^X'').c^WAt){for(i=0;i<x`A;i$ic=x`0i,i+$Hn=x.c^WAt(i)`6n>127){l=0;e`X;`Sn||l<4){e=h`0n%16,n%16+1)+e;n=`nn/16);l$Ey+='%u'+e}`5c^D+')y+='%2B';`t y+=^Tc)}x=y}`t{x=x?`y^T''+x),'+`s%2B'):x`6x&&c^aem==1&&x`1'%u$F0&&x`1'%U$F0){i=x`1'%^d`Si>=0){i++`6h`08)`1x`0i,i+1)`B())>=0)`2x`00,i)+'u00'+x`0i);i=x`1'%',i)}}}}`2x`9epa`3x`4;`2x?un^T`y''+x,'+`s ')):x`9pt`3x,d,f,a`4,t=x,z=0,y,r;`St){y=t`1d);y=y<0?t`A:y;t=t`00,y);^0t,$3t,a)`6r)`2r;z+=y+d`A;t=x`0z,x`A);t=z<x`A?t:''}`2''`9isf`3t,a){`Oc=a`1':')`6c>=0)a=a`00,c)`6t`00,2)^D$C`02);`2(t!`X@Q==a)`9fsf`3t,a`4`6`Pa`Ris^et))@7+=(@7!`X?`s`Y+t;`20`9fs`3x,f`4;@7`X;`Px`Rfs^ef);`2@7`9c_d`X;$Yf`3t,a`4`6!$Wt))`21;`20`9c_gd`3`4,d=`D`F`x^h,n=s.fpC`Q,p`6!n)n=s.c`Q`6d@v@m@Sn?`nn):2;n=n>2?n:2;p=d`d.')`6p>=0){`Sp>=0&&n>1$1d`d.',p-$Hn--}@m=p>0&&`Pd,'.`sc_gd^e0)?d`0p):d}}`2@m`9c_r`3k`4;k=$Xk);`Oc=@Us.d.`m,i=c`1@Uk+@R,e=i<0?i:c`1';',i),v=i<0$j@Jc`0i+2+k`A,e<0?c`A:$I;`2v$k[[B]]'?v:''`9c_w`3k,v,e`4,d=$Y(),l=s.`m^n,t;v`X+v;l=l?@wl)`B$2`6^c^st=(v!`X?`nl?l:0):-60)`6t){e`c^g;e$e@I(e^L+(t*1000))}^1k^ss.d.`m=k+'`Lv!`X?v:'[[B]]')$o path=/;'+(^c?' expires$le.toGMT`w()$o'`Y+(d?' domain$ld$o'`Y;`2^kk)==v}`20`9eh`3o,e,r,f`4,b='s^fe+'^f@i,n=-1,l,i,x`6!^Ml)^Ml`c@2;l=^Ml^Ei=0;i<l`A&&n<0;i++`Vl[i].o==o&&l[i].e==e)n=i^1n<0@Si;l[n]`C}x$tx.o=o;x.e=e;f=r?x.b:f`6r||f$G.b=r?0:o[e];x.o[e]=f^1x.b$G.o[b]=x.b;`2b}`20`9cet`3f,a,t,o,b`4,r`6`J>=5^X!s.^S||`J>=7))@5'$Q^0$3a)`zr=s.m(t)?s[t](e):t(e)}^d`t{$6^B^au`1$R4@P0)r=s.m(b)?s$sa):b(a);`t{^M(`D,'^w',0,o);^0$3a`Teh(`D,'^w',1)}}`2r`9g^Jet`3e`4;`2`o`9g^Joe`8;^M(@G,\"^w\",1`Te^J=1;`Oc=s.t()`6c)s.d.write(c`Te^J=0;`2@b'`Tg^Jfb`3a){`2@G`9g^Jf`3w`4,p=w@1,l=w`F;`o=w`6p&&p`F!=l&&p`F`x==l`x){`o=p;`2s.g^Jf(`o)}`2`o`9g^J`3`4`6!`o){`o=`D`6!s.e^J)`o=s.cet('g^J^e`o,'g^Jet@z.g^Joe,'g^Jfb')}`2`o`9mrq`3u`4,l=^l],n,r;^l]=0`6l)for(n=0;n<l`A;n$ir$ts.mr(0,0,r.t,r.u,r.r)}`9mr`3@c,q,ta,u,rs`4,dc=$Z,t1=s.^6@Z,t2=s.^6@ZSecure,ns=s.`W`jspace,un=u?u:$Bs.f$7,unc=`y$P'_`s-'),r`C,l,imn@ki^f($7,im,b,e`6!rs){rs='http'+@M?'s'`Y+'://'+(t1?@M@Q2?t2:t1):($B@M?'102':unc))+'.'+($Z?$Z:112)+'.2o7.net')@yb/ss/'+^2+'/1/H.14/'+@c+'?[AQB]&ndh=1'+(q?q`Y+'&[AQE]'`6^N@v^B`V`J>5.5)rs=^Vrs,4095);`t rs=^Vrs,2047)}^1s.d.images&&`J>=3^X!s.^S||`J>=7)^X@8<0||`J>=6.1)`V!s.rc)s.rc`C`6!^G){^G=1`6!s.rl)s.rl`C;^ln]`c@2;set@Iout('$6`N,750)}`t{l=^ln]`6l){r.t=ta;r.u=un;r.r=rs;l[l`A]=r;`2''}imn+='^f^G;^G$Eim=`D[imn]`6!im)im=`D[imn]`cImage;im^jl=0;im.@H`cFun`K('e`s^u^jl=1`6`N);im$S=rs`6rs`1@n=@P0^X!ta||ta^D_self'||ta^D_top'||(`D.^h@Qa==`D.^h))){b=e`c^g;`S!im^jl&&e^L-b^L<500)e`c^g}`2''}`2'<im'+'g sr'+'c=\"'+rs+'\" width=1 $K=1 border=0 alt=\"\">'`9gg`3v`4`6!`D['s^fv])`D['s^fv]`X;`2`D['s^fv]`9glf`3t,a`Vt`00,2)^D$C`02);`Os=^u,v=s.gg(t)`6v)s[t]=v`9gl`3v`4`6$V)`Pv`Rgl^e0)`9gv`3v`4;`2s['vpm^fv]?s['vpv^fv]:(s[v]?s[v]`Y`9havf`3t,a`4,b=t`00,4),x=t`04),n=`nx),k='g^ft,m='vpm^ft,q=t,v=s.`I@DVars,e=s.`I@D$c;@F@ot)`6s.@3||^3){v=v?v+`s+^O+`s+^O2:''`6v@v`Pv`Ris^et))s[k]`X`6`E$L'&&e)@Fs.fs(s[k],e)}s[m]=0`6`E`WID`Gvid';`5`E^9^qg'`Z`5`E`u^qr'`Z`5`Evmk`Gvmt';`5`E^v^qce'`6s[k]&&s[k]`B()^DAUTO')@F'ISO8859-1';`5s[k]^aem==2)@F'UTF-8'}`5`E`W`jspace`Gns';`5`Ec`Q`Gcdp';`5`E`m^n`Gcl';`5`E^Y`Gvvp';`5`E^x`Gcc';`5`E$5`Gch';`5`E$b`KID`Gxact';`5`E@d`Gv0';`5`E^K`Gs';`5`E`v`Gc';`5`E`k`Gj';`5`E`b`Gv';`5`E`m^p`Gk';`5`E`r^o`Gbw';`5`E`r^Q`Gbh';`5`E@B`K`p`Gct';`5`E^i`Ghp';`5`Ep^C`Gp';`5$Wx)`Vb^Dprop`Gc$J;`5b^DeVar`Gv$J;`5b^Dhier^qh$J`Z^1s[k]@Q$k`I`j'@Q$k`I`p')@p+='&'+q+'`Ls[k]);`2''`9hav`3`4;@p`X;`P^P`Rhav^e0);`2@p`9lnf`3^R`7^b`7:'';`Ote=t`1@R`6t@Qe>0&&h`1t`0te@T>=0)`2t`00,te);`2''`9ln`3h`4,n=s.`I`js`6n)`2`Pn`Rln^eh);`2''`9ltdf`3^R`7^b`7:'';`Oqi=h`1'?^dh=qi>=0?h`00,qi):h`6t&&h`0h`A-(t`A@T^D.'+t)`21;`20`9ltef`3^R`7^b`7:''`6t&&h`1t)>=0)`21;`20`9lt`3h`4,lft=s.`I^IFile`ps,lef=s.`IEx`h,@e=s.`IIn`h;@e=@e?@e:`D`F`x^h;h=h`7`6s.^6^ILinks&&lft&&`Plft`Rltd^eh))`2'd'`6s.^6^t^Xlef||@e)^X!lef||`Plef`Rlte^eh))^X!@e||!`P@e`Rlte^eh)))`2'e';`2''`9lc`8,b=^M(^u,\"`g\"`T@3=@h^u`Tt(`T@3=0`6b)`2^u$se);`2@b'`Tbc`8,f`6s.d^ad.all^ad.all.cppXYctnr)return;^3=^z?^z:e$8;@5\"$Q$6^3^X^3.tag`j||^3.par`i||^3@1Nod$I@Vcatch$p}\"`Teo=0'`Toh`3o`4,l=`D`F,h=^m?^m:'',i,j,k,p;i=h`1':^dj=h`1'?^dk=h`1'/')`6h^Xi<0||(j>=0$rj)||(k>=0$rk))$1o`U&&o`U`A>1?o`U:(l`U?l`U`Y;i=l.path^h`d/^dh=(p?p+'//'`Y+(o`x?o`x:(l`x?l`x`Y)+(h`00,1)$k/'?l.path^h`00,i<0?0:i@y'`Y+h}`2h`9ot`3o){`Ot=o.tag`j;t=t@Q`B?t`B$2`6`ESHAPE')t`X`6t`V`E$T&&@L&&@L`B)t=@L`B();`5^m)t='A';}`2t`9oid`3o`4,^5,p,c,n`X,x=0`6t@v`q$1o`U;c=o.`g`6^m^X`EA'||`EAREA')^X!c||!p||p`7`1'javascript$F0))n@X`5c@S`ys.rep(`ys.rep@wc,\"\\r@W\"\\n@W\"\\t@W' `s^dx=2}`5$9^X`E$T||`ESUBMIT')@S$9;x=3}`5o$S&&`EIMAGE')n=o$S`6n){`q=^Vn@g;`qt=x}}`2`q`9rqf`3t,un`4,e=t`1@R,u=e>=0?`s+t`00,e)+`s:'';`2u&&u`1`s+un+`s)>=0?@Jt`0e@T:''`9rq`3un`4,c=un`1`s),v=^k's_sq'),q`X`6c<0)`2`Pv,'&`srq^e$7;`2`Pun`Rrq',0)`9sqp`3t,a`4,e=t`1@R,q=e<0$j@Jt`0e+1)`Tsqq[q]`X`6e>=0)`Pt`00,e)`R@s`20`9sqs`3$Pq`4;^4u[un]=q;`20`9sq`3q`4,k@ksq',v=^kk),x,c=0;^4q`C;^4u`C;^4q[q]`X;`Pv,'&`ssqp',0);`P^2`R@sv`X^E@j^4u`M)^4q[^4u[x]]+=(^4q[^4u[x]]?`s`Y+x^E@j^4q`M&&^4q[x]^Xx==q||c<2)){v+=(v$n'`Y+^4q[x]+'`Lx);c$E`2@Kk,v,0)`9wdl`8,r=@b,b=^M(`D,\"@H\"),i,o,oc`6b)r=^u$se)^Ei=0;i<s.d.`Is`A;i$io=s.d.`Is[i];oc=o.`g?\"\"+o.`g:\"\"`6(oc`1\"@a$m0||oc`1\"^joc@x0)&&oc`1\".tl$m0)^M(o,\"`g\",0,s.lc);}`2r^d`Ds`3`4`6`J>3^X!^N||!^B||`J$q`Vs.b^a^r)s.^r('`g@z.bc);`5s.b&&^H)^H('click@z.bc,false);`t ^M(`D,'@H',0,`Dl)}`9vs`3x`4,v=s.`W^F,g=s.`W^F$fk@kvsn^f^2+(g?'^fg`Y,n=^kk),e`c^g,y=e.get@t);e$e@ty+10@Y1900:0))`6v){v*=100`6!n`V!@Kk,x,$I`20;n=x^1n%10000>v)`20}`21`9dyasmf`3t,m`Vt&&m&&m`1t)>=0)`21;`20`9dyasf`3t,m`4,i=t?t`1@R:-1,n,x`6i>=0&&m){`On=t`00,i),x=t`0i+1)`6`Px`Rdyasm^em))`2n}`20`9uns`3`4,x=s.`HSele`K,l=s.`HList,m=s.`H$gn,i;^2=^2`7`6x&&l`V!m)m=`D`F`x`6!m.toLowerCase)m`X+m;l=l`7;m=m`7;n=`Pl,';`sdyas^em)`6n)^2=n}i=^2`1`s`Tfun=i<0?^2:^2`00,i)`9sa`3un`4;^2=un`6!@A)@A=un;`5(`s+@A+`s)`1$7<0)@A+=`s+un;^2s()`9t`3`4,$M=1,tm`c^g,sed=Math&&@6$N?@6$U@6$N()*10000000000000):`e@I(),@c='s'+@6$U`e@I()/10800000)%10+sed,y=`e@t),vt=`e^g(@y'+`eMonth(@y'@Yy+1900:y)+@U`eHour$0`eMinute$0`eSeconds()+@U`eDay()+@U`e@IzoneO@l(),^J=s.g^J(),ta`X,q`X,qs`X@0`Tuns()`6!s.td){`Otl=^J`F,a,o,i,x`X,c`X,v`X,p`X,bw`X,bh`X,^70',k=@K's_cc`s@b',0^8,hp`X,ct`X,pn=0,ps`6`w&&`w.prototype){^71'`6j.match){^72'`6tm$eUTC^g){^73'`6^N&&^B&&`J$q^74'`6pn.toPrecision){^75';a`c@2`6a.forEach){^76';i=0;o`C;@5'$Qi`cIterator(o)`z}')`6i&&i.next)^77'}}}}^1`J>=4)x=^Uwidth+'x'+^U$K`6s.isns||s.^S`V`J>=3$4`b(^8`6`J>=4){c=^UpixelDepth;bw=`D$a^o;bh=`D$a^Q}}@q=s.n.p^C}`5^N`V`J>=4$4`b(^8;c=^U`v`6`J$q{bw=s.d.@9`i.o@l^o;bh=s.d.@9`i.o@l^Q`6!^B^ab){`fh$D^dhp=s.b.isH$D(tl^8`z}\");`fclientCaps^dct=s.b.@B`K`p`z}\")}}}`t r`X^1@q)`Spn<@q`A&&pn<30){ps=^V@q[pn].^h@g$o'`6p`1ps)<0)p+=ps;pn$Es.^K=x;s.`v=c;s.`k=j;s.`b=v;s.`m^p=k;s.`r^o=bw;s.`r^Q=bh;s.@B`K`p=ct;s.^i=hp;s.p^C=p;s.td=1^1s.useP^C)s.doP^C(s);`Ol=`D`F,r=^J.@9ent.`u`6!s.^9)s.^9=l`6!s.`u)s.`u=r`6s.@3||^3){`Oo=^3?^3:s.@3`6!o)`2'';`Op=@o'$d`j'),w=1,^5,@N,x=`qt,h,l,i,oc`6^3&&o==^3){`So@vn@Q$kBODY'){o=o.par`i?o.par`i:o@1Node`6!o)`2'';^5;@N;x=`qt}oc=o.`g?''+o.`g:''`6(oc`1\"@a@x0&&oc`1\"^joc$m0)||oc`1\".tl@x0)`2''}ta=n?o$8:1;h@Xi=h`1'?^dh=s.`I@O`w||i<0?h:h`00,i);l=s.`I`j?s.`I`j:s.ln(h);t=s.`I`p?s.`I`p`7:s.lt(h)`6t^Xh||l))q+=@n=@3^f(`Ed'||`Ee'?$Xt):'o')+(h?@nv1`Lh)`Y+(l?@nv2`Ll)`Y;`t $M=0`6s.^6@C`V!p$1@o'^9^dw=0}^5;i=o.sourceIndex`6^Z@S^Z;x=1;i=1^1p&&n@Q)qs='&pid`L^Vp,255))+(w$npidt$lw`Y+'&oid`L^Vn@g)+(x$noidt$lx`Y+'&ot`Lt)+(i$noi$li`Y}^1!$M@vqs)`2''`6s.p_r)s.p_r();`O$O`X`6$M^avs(sed))$O=s.mr(@c,(vt$nt`Lvt)`Y+s.hav()+q+(qs?qs:s.rq(^2)),ta`Tsq($M$jqs`T@3=^3=s.`I`j=s.`I`p=`D^jobjectID=s.ppu`X`6$V)`D^j@3=`D^jeo=`D^j`I`j=`D^j`I`p`X;`2$O`9tl`3o,t,n`4;s.@3=@ho`T`I`p=t;s.`I`j=n;s.t()`9ssl=(`D`F`U`7`1'https@P0`Td=@9ent;s.b=s.d.body;s.n=navigator;s.u=s.n.userAgent;@8=s.u`1'N$A6/^d`Oapn@u`j,v@uVersion,ie=v`1$R'),o=s.u`1'@4 '),i`6v`1'@4@P0||o>0)apn='@4';^N@r^DMicrosoft Internet Explorer'`Tisns@r^DN$A'`T^S@r^D@4'`Tismac=(s.u`1'Mac@P0)`6o>0)`J`ls.u`0o+6));`5ie>0){`J=`ni=v`0ie+5))`6`J>3)`J`li)}`5@8>0)`J`ls.u`0@8+10));`t `J`lv`Tem=0`6`w$h^W){i=^T`w$h^W(256))`B(`Tem=(i^D%C4%80'?2:(i^D%U0100'?1:0))}s.sa(un`Tvl_l='`WID,vmk,ppu,^v,`W`jspace,c`Q,`m^n,$d`j,^9,`u,^x';^P=^O+',^Y,$5,server,$d`p,$b`KID,purchaseID,@d,state,zip,$L,products,`I`j,`I`p'^E`On=1;n<51;n++)^P+=',prop$J+',eVar$J+',hier$J;^O2='^K,`v,`k,`b,`m^p,`r^o,`r^Q,@B`K`p,^i,p^C';^P+=`s+^O2;s.vl_g=^P+',`W^F,`W^F$f`HSele`K,`HList,`H$g^6^ILinks,^6^t,^6@C,`I@O`w,`I^IFile`ps,`IEx`h,`IIn`h,`I@DVars,`I@D$c,`I`js,@3';$V=pg@0)`6!ss)`Ds()}",w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf("MSIE "),m=u.indexOf("Netscape6/"),a,i,s;if(un){un=un.toLowerCase();if(l){for(i=0;i<l.length;i++){s=l[i];if(s._c=="s_c"){if(s.oun==un){return s}else{if(s.fs(s.oun,un)){s.sa(un);return s}}}}}}eval(d);c=s_d(c);i=c.indexOf("function s_c(");eval(c.substring(0,i));if(!un){return 0}c=c.substring(i);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3){a=parseFloat(i)}}else{if(m>0){a=parseFloat(u.substring(m+10))}else{a=parseFloat(v)}}if(a>=5&&v.indexOf("Opera")<0&&u.indexOf("Opera")<0){eval(c);return new s_c(un,pg,ss)}else{s=s_c2f(c)}return s(un,pg,ss)}s_gi();dojo.provide("noa.*");dojo.provide("noa.service.Locator");dojo.require("mojo.service.Locator");dojo.require("mojo.service.Service");var __demoServiceLocator=null;dojo.declare("noa.service.Locator",mojo.service.Locator,{addServices:function(){this.addService(new mojo.service.Service("getSearchResults","/json/content/get/search/summary",{json:true,method:"post",cache:true}));this.addService(new mojo.service.Service("getSearchDetail","/json/content/get/search/details",{json:true,method:"post",cache:true}));this.addService(new mojo.service.Service("getGames","/json/content/get/game/filter",{json:true,method:"get",cache:false}));this.addService(new mojo.service.Service("getGameDetails","/json/content/get/game",{json:true,method:"post",cache:true}));this.addService(new mojo.service.Service("getGameSpecifics","/json/content/get/game/subset",{json:true,method:"post",cache:true}));this.addService(new mojo.service.Service("getGameSpecifics_VCStatic","/json/content/get/game/subset_virtualconsole",{json:true,method:"post",cache:true}));this.addService(new mojo.service.Service("getSearchResults","/search/summary",{json:true,method:"post",cache:false}))}});noa.service.Locator.getInstance=function(){if(__demoServiceLocator==null){__demoServiceLocator=new noa.service.Locator()}return __demoServiceLocator};dojo.provide("noa.SiteMap");noa.SiteMap={"":[{controller:"noa.controller.PagePromotionController"},{controller:"noa.controller.metrics.MetricsController"},{controller:"noa.controller.PopUpController"},{controller:"noa.controller.ExternalLinkController"}],"http(s)?://[^/]*/?$":[{controller:"noa.controller.pageControllers.HomePageController"}],"http(s)?://[^/]*/ds/lite/features/?$":[{controller:"noa.controller.pageControllers.DSFeaturesPageController"}],"http(s)?://[^/]*/games/?$":[{controller:"noa.controller.pageControllers.GamesHomePageController"}],"http(s)?://[^/]*/(ds|wii|wii/channels/miichannel)/videos(.html)?/?(#[^/]*)?$":[{controller:"noa.controller.pageControllers.VideoPageController"}],"http(s)?://[^/]*/wii/channels/miichannel/videos(.html)?/?(#[^/]*)?$":[{controller:"noa.controller.pageControllers.miiChannelVideosController"}],"http(s)?://[^/]*/whatsnew.*":[{controller:"noa.controller.pageControllers.WhatsNewSectionController"}],"http(s)?://[^/]*/wii.*":[{controller:"noa.controller.pageControllers.WiiSectionController"}],"http(s)?://[^/]*/ds.*":[{controller:"noa.controller.pageControllers.DSSectionController"}],"http(s)?://[^/]*/wii/what/accessories/zapper/howdoesitwork.*":[{controller:"noa.controller.pageControllers.ZapperHowDoesItWorkController"}],"http(s)?://[^/]*/whatsnew/?(#[^/]*)?$":[{controller:"noa.controller.pageControllers.WhatsNewIndexController"}],"#body_games_detail":[{controller:"noa.controller.pageControllers.GamesDetailPageController"}],"#body_wii_virtualconsole_virtualconsolegames_detail":[{controller:"noa.controller.pageControllers.VirtualConsoleGamesDetailPageController"}],"#body_wii_what_accessories_zapper_howdoiuseit":[{controller:"noa.controller.pageControllers.ZapperHowDoIUseItController"}],"http(s)?://[^/]*/search/?(#[^/]*)?$":[{controller:"noa.controller.search.SearchMainController"}],"http(s)?://[^/]*/wii/channels/?$":[{controller:"noa.controller.DrawerController"}],"#videoArea":[{controller:"noa.controller.VideoAutoEmbedController"}],"#multiVideo":[{controller:"noa.controller.VideoMultiEmbedController"}],"#primaryNav":[{controller:"noa.controller.navigation.GlowController"}],"#globalSearch":[{controller:"noa.controller.search.SearchController"}],"#gamesguide_dropdown":[{controller:"noa.controller.DropDownController"}],"#games_region":[{controller:"noa.controller.GamesListController"}],"#gameguide":[{controller:"noa.controller.GameGuideController"}],"#gameRelease":[{controller:"noa.controller.MiniDataPanelController"}],"#zapperRelease":[{controller:"noa.controller.MiniDataPanelController"}],"#iwatasidebar":[{controller:"noa.controller.IwataSideBarController"}],"#virtualConsoleGamesList":[{controller:"noa.controller.VCController"}],"#gameSliderHolder":[{controller:"noa.controller.gameSliderController"}],"#mainContentContainer.error_404":[{controller:"noa.controller.ErrorPageController"}]};dojo.provide("noa.behavior.AlterClassBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.AlterClassBehavior",mojo.command.Behavior,{execute:function(D){var C=D.paramsObj.method;var B=$(D.paramsObj.element);var A=D.paramsObj.className;if(!B){return }if(C=="set"){B.setProperty("class",A)}else{if(!C||C=="remove"||C=="add"){B[(C||"add")+"Class"](A)}}}});dojo.provide("noa.behavior.CommunicateWithVideoPlayerBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.CommunicateWithVideoPlayerBehavior",mojo.command.Behavior,{execute:function(F){var D=F.getParams();var E=$(F.callerObj);this.videoPlayer=$("videoplayer_noa");if(!this.videoPlayer){return }try{var B=D.theLink?$(D.theLink).getProperty("href"):$(E).getProperty("title");$("video_caption").innerHTML=B}catch(C){}var A={video_path:D.theLink?$(D.theLink).getProperty("href"):E.getProperty("href"),video_name:D.theLink?($(D.theLink).getProperty("title")||""):(E.getProperty("title")||""),id:this.getVideoId(D.theLink?$(D.theLink):E),autoplay:"true"};this.sendCommand(D,A)},getVideoId:function(C){var B=C.className.split(" ");var A;B.forEach(function(E){var D;if(D=E.match(/videoID_(.*)/)){A=D[1]}},this);return A?A:""},sendCommand:function(D,C){var F=$("video_datasender");if(!F){F=new Element("div",{id:"video_datasender"});$(this.videoPlayer.parentNode).adopt(F)}if(!mojo.Model.contains("/flash/localconnection/id")){var B=(new Date()).getTime();mojo.Model.set("/flash/localconnection/id",B)}else{var B=mojo.Model.get("/flash/localconnection/id")}var E=new SWFObject("/video/videoplayer_datasender.swf","datasender",1,1,D.min_version||"7","#FFFFFF");E.addVariable("command",D.command);var A=$merge(C,D.videoParams);$each(A,function(H,G){E.addVariable(G,H)});E.addVariable("local_connection_id",B);E.write(F)}});dojo.provide("noa.behavior.ConvertClassToIDBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.ConvertClassToIDBehavior",mojo.command.Behavior,{execute:function(B){var A=B.paramsObj.callerClass;if(A){mojo.History.getInstance().setHash(A)}if(!A){return }}});dojo.provide("noa.behavior.EmbedFlashBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.EmbedFlashBehavior",mojo.command.Behavior,{execute:function(E){if(!mojo.Model.contains("/flash/localconnection/id")){var A=(new Date()).getTime();mojo.Model.set("/flash/localconnection/id",A)}else{var A=mojo.Model.get("/flash/localconnection/id")}var D=E.getParams();var B=new SWFObject(D.swf_path,D.swf_path.split("/").getLast().split(".")[0],D.width,D.height,D.min_version||"7",D.background_color||"#FDFDFD");D.variables.each(function(F){B.addVariable(F.property,F.value)});D.parameters.each(function(F){B.addParam(F.property,F.value)});B.addVariable("local_connection_id",A);var C=B.write(D.target_id);if(!C){$(mojo.queryFirst(".noFlash")).setStyle("visibility","visible")}}});dojo.provide("noa.behavior.EmbedMultiFlashBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.EmbedMultiFlashBehavior",mojo.command.Behavior,{execute:function(B){var I=true;var F=function(O){var N=O.className.split(" ");var M;N.forEach(function(Q){var P;if(P=Q.match(/videoID_(.*)/)){M=P[1]}},this);return M?M:""};var J=mojo.query(".videoholder");var G={};G.swf_path="/video/videoplayer_noa.swf";G.background_color="#fdfdfd";G.width=0;G.height=0;var K=B.contextObj;G.parameters=Array();G.parameters[0]={property:"scale",value:"noscale"};G.parameters[1]={property:"salign",value:"lt"};G.variables=Array();G.variables[0]={property:"autoplay",value:"false"};G.variables[1]={property:"video_path",value:"https://web.archive.org/web/20090604123521/http://205.166.76.51/bin/M_U2oRAxLjnb-rlCF-cknTDa6WKyps6h/82NEqh2-isHAOuXH5mPLr3e642yyKGE9.flv"};G.variables[2]={property:"theme_color_timeline",value:"#353535"};G.variables[3]={property:"theme_color_played",value:"#34BEED"};G.variables[4]={property:"theme_color_loaded",value:"#1B5469"};G.variables[5]={property:"video_name",value:"bla"};G.variables[6]={property:"id",value:"bla"};for(var H=0;H<J.length;H++){G.variables[1].value=mojo.queryFirst(".videoLink",J[H]).href;G.target_id=J[H].id;G.variables[6].value=F($(J[H]).getElement(".videoLink"));G.variables[5].value=$(J[H]).getElement(".videoLink").getProperty("title")||"";var E=mojo.queryFirst(".videoArea",J[H]);var D=E.className.split(" ");for(b=0;b<D.length;b++){if(D[b].indexOf("w_")>-1){G.width=parseInt(D[b].replace("w_",""))}if(D[b].indexOf("h_")>-1){G.height=parseInt(D[b].replace("h_",""))}}if(I==true){var A=(new Date()).getTime();var C=new SWFObject(G.swf_path,G.swf_path.split("/").getLast().split(".")[0],G.width,G.height,G.min_version||"7",G.background_color||"#FDFDFD");G.variables.each(function(M){C.addVariable(M.property,M.value)});G.parameters.each(function(M){C.addParam(M.property,M.value)});C.addVariable("local_connection_id",A);var L=C.write(G.target_id);if(!L){$(mojo.queryFirst(".noFlash",J[H])).setStyle("visibility","visible")}}}}});dojo.provide("noa.behavior.FireEventBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.FireEventBehavior",mojo.command.Behavior,{execute:function(D){var B=D.paramsObj.element;var C=D.paramsObj.theEvent;var A=D.paramsObj.delay;if(A){mojo.fireEvent.delay(A,this,[B,C])}else{mojo.fireEvent(B,C)}}});dojo.provide("noa.behavior.InjectPopupSizeIntoURLBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.InjectPopupSizeIntoURLBehavior",mojo.command.Behavior,{execute:function(C){var B=C.callerObj.href;if((new RegExp("/videoplayer/")).test(B)&&!(new RegExp("/wii/what/iwataasks/videoplayer/(.*)/[0-9]*/[0-9]*/?$")).test(B)&&!(new RegExp("/wii/what/faq/videoplayer/(.*)/[0-9]*/[0-9]*/?$")).test(B)){var A=$(C.callerObj).getProperty("rel").split(" ");B=B.replace(/\/$/,"");B+="/"+A[1]+"/"+A[2];C.callerObj.href=B}C.invocation.proceed(C)}});dojo.provide("noa.behavior.MapToCountryServletFilterBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.MapToCountryServletFilterBehavior",mojo.command.Behavior,{execute:function(E){for(var B=0,C=E.paramsObj.links.length;B<C;B++){var D=E.paramsObj.links[B];var A=D.rel.split("_");D.href="/servlet/SelectCountry?country="+A[0]+"&lang="+A[1]}}});dojo.provide("noa.behavior.PreventDefaultEventBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.PreventDefaultEventBehavior",mojo.command.Behavior,{execute:function(B){try{(new Event(B.getEvent())).preventDefault();(new Event(B.getEvent())).stop()}catch(A){}}});dojo.provide("noa.behavior.RestartAnimatedGIFBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.RestartAnimatedGIFBehavior",mojo.command.Behavior,{execute:function(C){var B=C.paramsObj.imageElement;var A=B.src;if(B.src.indexOf(".gif")!=-1){B.src="";B.src=A}}});dojo.provide("noa.behavior.SendMessageBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.SendMessageBehavior",mojo.command.Behavior,{execute:function(A){mojo.Messaging.publish(A.paramsObj.topic,A.paramsObj.message)}});dojo.provide("noa.behavior.SendThroughExternalInterstitialBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.SendThroughExternalInterstitialBehavior",mojo.command.Behavior,{execute:function(A){$$(A.paramsObj.selector).each(function(B){B.href="/en/leaving?destination="+B.href})}});dojo.provide("noa.behavior.SetHashBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.SetHashBehavior",mojo.command.Behavior,{execute:function(A){mojo.History.getInstance().setHash(A.paramsObj.value)}});dojo.provide("noa.behavior.SetHistoryBehavior");dojo.require("mojo.command.Behavior");dojo.require("mojo.History");dojo.declare("noa.behavior.SetHistoryBehavior",mojo.command.Behavior,{execute:function(C){if(C.getParams()){var A=mojo.History.getInstance();var B=A._parseObj(C.getParams());mojo.History.getInstance().setHash(B)}}});dojo.provide("noa.behavior.SetVideoTitleBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.SetVideoTitleBehavior",mojo.command.Behavior,{execute:function(F){var A=$$("#videoPlayerArea h4")[0];var D=F.getParams();if(D){if(D.theLink){var C=D.theLink}}if(!C){var C=F.callerObj}var E=mojo.queryFirst("body");while(C!=E){try{C=$(C).parentNode;if($(C).hasClass("promo")&&$(C).hasClass("image")){break}}catch(B){break}}if(C==E){C=null}try{if(C){$(A).setText($(C).getElement("h5").getText())}}catch(B){}}});dojo.provide("noa.behavior.ShowOrHideElementsBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.ShowOrHideElementsBehavior",mojo.command.Behavior,{execute:function(E){var B=E.paramsObj.highlightId;var D=$type(E.paramsObj.elements)=="array"?E.paramsObj.elements:$A(E.paramsObj.elements);var C=E.paramsObj.prefix||"";if(D.length==0){return }if(!B){B=E.paramsObj.defaultElement}for(i=0;i<D.length;i++){var A=D[i];if(A.id==(C+B)){A.style.display="block"}else{if(A.id=="vfullsize"){}else{A.style.display="none"}}}}});dojo.provide("noa.behavior.UpdateVideoGroupLinksBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.UpdateVideoGroupLinksBehavior",mojo.command.Behavior,{execute:function(F){var D=F.getParams();var C=F.callerObj;var E=mojo.queryFirst("body");var A=$("groupSubSelect");while(C!=E){C=$(C.parentNode);if(C.hasClass("promo")&&C.hasClass("image")){break}}if(C==E){return }A.empty();var B;if(B=C.getElements("ul li")){B.forEach(function(H,G){newLink=new Element("a",{href:H.getElement("a").getProperty("href")});newLink.setText("Video "+(G+1));newLink.videoTitle=C.getElement("h5").getText();newListItem=new Element("li");newLink.injectInside(newListItem);newListItem.injectInside(A)})}mojo.controller.Controller.updateObservers("noa.controller.pageControllers.VideoPageController")}});dojo.provide("noa.behavior.games.TagGameguideAsHavingBeenUsedBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.games.TagGameguideAsHavingBeenUsedBehavior",mojo.command.Behavior,{execute:function(A){if(!mojo.Model.contains("/games/guide/used")){mojo.Model.set("/games/guide/used",true);mojo.Messaging.publish("/games/guide/usedonce")}}});dojo.provide("noa.behavior.search.DetectSupportCodeBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.search.DetectSupportCodeBehavior",mojo.command.Behavior,{execute:function(F){var C=$(F.callerObj);var A=$$("#textb_container input");if(A.length>0){var B=A[0].getValue()}else{if(C){if(textInput=C.getElement("input[type=text]")){var B=textInput.getValue()||null}}}if(/^\d{5,6}$/.test(B)){if(F.callerObj&&(F.callerObj.declaredClass=="noa.controller.search.SearchMainController")){A[0].value="";return }if(F.eventObj){var E=(new Event(F.eventObj));E.preventDefault();E.stop()}try{noa.controller.search.SearchMainController.haltSearch=true}catch(D){}window.location.href="/consumer/lookUp.jsp?code="+B}}});dojo.provide("noa.behavior.whatsnew.FilterWhatsNewResultsBehavior");dojo.require("mojo.command.Behavior");dojo.declare("noa.behavior.whatsnew.FilterWhatsNewResultsBehavior",mojo.command.Behavior,{execute:function(D){var C=D.paramsObj?D.paramsObj.method:D.callerObj.href.split("#")[1];var A=$(D.callerObj)||$(dojo.filter(mojo.query("a.filterLink"),function(E){return E.hash=="#"+C})[0]);var B=A?A.getText():null;this.filterResults(C,B,A)},highlightNavLink:function(A){var B=$$("#tertiaryNav a");B.each(function(C){if(C==A){C.setStyle("color","#636363")}else{C.setStyle("color","#0090C7")}})},filterResults:function(D,C,H){$("contentHeader").setText(C);this.highlightNavLink(H);var G=$("itemList");var I=G.getElements("li");for(var B=0,E=I.length;B<E;B++){if(D=="all"){I[B].setStyle("display","block")}else{if(I[B].hasClass(D)){I[B].setStyle("display","block")}else{I[B].setStyle("display","none")}}}var F=G.getElements("li");var A=[];for(var B=0,E=F.length;B<E;B++){if(F[B].getStyle("display")=="block"){A.push(F[B])}}for(var B=0,E=A.length;B<E;B++){if((B%2)){A[B].addClass("l1");A[B].removeClass("l2")}else{A[B].removeClass("l1");A[B].addClass("l2")}}}});dojo.provide("noa.command.BindToAnchorBehavior");dojo.require("mojo.command.Command");dojo.declare("noa.command.BindToAnchorBehavior",mojo.command.Command,{execute:function(F){var A=mojo.query(".more");for(var D=0;D<A.length;D++){var B=false;var C=$(A[D]).getParent();while(B==false){if((C.className.indexOf("promoHotSpot")>-1)||(C.className.indexOf("image")>-1)){B=true}else{C=C.getParent()}}var E=A[D];dojo.connect(C,"onmouseover",function(){mojo.queryFirst(".more",this).fireEvent("mouseover");if(mojo.queryFirst(".more",this).className.indexOf("big")>-1){mojo.queryFirst(".more",this).addClass("hoverbig")}else{mojo.queryFirst(".more",this).addClass("hover")}});dojo.connect(C,"onmouseout",function(){mojo.queryFirst(".more",this).fireEvent("mouseout");mojo.queryFirst(".more",this).removeClass("hover");mojo.queryFirst(".more",this).removeClass("hoverbig")});dojo.connect(C,"onclick",function(G){var H=(new Event(G));H.preventDefault();H.stop();try{mojo.fireEvent(mojo.queryFirst(".more",this),"onclick")}catch(G){if(mojo.queryFirst(".more",this).target=="_blank"){window.open(mojo.queryFirst(".more",this).href)}else{window.location.href=mojo.queryFirst(".more",this).href}}})}}});dojo.provide("noa.command.games.ChooseOptionCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ChooseOptionCommand",mojo.command.Command,{execute:function(D){var A=D.callerObj;if(A.checked){var C=A.parentNode.parentNode.parentNode.parentNode;var B=mojo.queryFirst(".description",C);this.selectOption(A)}else{this.deSelectOption(A)}},selectOption:function(B){var E=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(E,"selected");dojo.addClass(E,"selected");var I=B.parentNode.parentNode.parentNode.parentNode;var F=mojo.queryFirst(".header",I);var A=mojo.queryFirst(".images",I);var C=mojo.queryFirst(".description",I);var K=document.createElement("img");K.src=E.src;K.className="image";K.id=E.id;K.style.position="relative";K.style.marginTop="5px";this.swapImage(K,"head");if(A.getElementsByTagName("img").length>=1){A.appendChild(K)}else{var H=E.offsetHeight;B.disabled=true;var J=new Fx.Styles(F,{duration:200,onComplete:function(){A.appendChild(K);B.disabled=false}});J.start({"height":65});new Fx.Styles(C,{duration:200,onComplete:function(){C.innerHTML=I.title}}).start({"top":5})}if(A.getElementsByTagName("img").length==mojo.query(".option",I).length&&A.getElementsByTagName("img").length>0){var D=mojo.queryFirst(".allOption",I);D.checked=true}var G=mojo.queryFirst("#gameguide").accordionObj;G.params[I.getAttribute("name")].push(B.value)},deSelectOption:function(B){var F=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(F,"selected");var L=B.parentNode.parentNode.parentNode.parentNode;var H=mojo.queryFirst(".header",L);var A=mojo.queryFirst(".images",L);var C=mojo.queryFirst(".description",L);this.swapImage(F,"option");if(A.getElementsByTagName("img").length>1){for(var G=0;G<A.childNodes.length;G++){if(A.childNodes[G].id==F.id){var I=this;A.removeChild(A.childNodes[G]);break}}}else{var L=B.parentNode.parentNode.parentNode.parentNode;var C=mojo.queryFirst(".description",L);new Fx.Styles(C,{duration:200}).start({"top":10});var I=this;var J=A.getElementsByTagName("img")[0];if(J==null){return }B.disabled=true;new Fx.Styles(H,{duration:200,onComplete:function(){B.disabled=false;C.innerHTML=L.panelObj.originalTitle}}).start({"height":48});A.removeChild(J)}if(A.getElementsByTagName("img").length<mojo.query(".option",L).length){var D=mojo.queryFirst(".allOption",L);D.checked=false}var K=mojo.queryFirst("#gameguide").accordionObj;var E=K.params[L.getAttribute("name")];for(var G=0;G<E.length;G++){if(E[G]==B.value){E.splice(G,1);break}}},removeNode:function(A,B){A.removeChild(B)},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")},onResponse:function(){}});dojo.provide("noa.command.games.ClearOptionsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ClearOptionsCommand",mojo.command.Command,{execute:function(A){var E=mojo.queryFirst("#gameguide");var H=mojo.query(".panel","#gameguide");for(var F=0;F<H.length;F++){var C=H[F];var B=mojo.queryFirst(".allOption",C);if(B){B.checked=false}var D=mojo.queryFirst(".description",C);var G=mojo.queryFirst(".header",C);new Fx.Styles(D,{duration:200}).start({"top":10});new Fx.Styles(G,{duration:200}).start({"height":48});D.innerHTML=C.panelObj.originalTitle;var I=mojo.query(".gameguideOption",C);this.deSelectAll(I)}},deSelectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];C.checked=false;this.deSelectOption(C)}},deSelectOption:function(B){var E=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(E,"selected");var I=B.parentNode.parentNode.parentNode.parentNode;var G=mojo.queryFirst(".header",I);var A=mojo.queryFirst(".images",I);var C=mojo.queryFirst(".description",I);this.swapImage(E,"option");for(var F=0;F<A.childNodes.length;F++){if(A.childNodes[F].id==E.id){A.removeChild(A.childNodes[F]);break}}var H=mojo.queryFirst("#gameguide").accordionObj;var D=H.params[I.getAttribute("name")];for(var F=0;F<D.length;F++){if(D[F]==B.value){D.splice(F);break}}},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")},onResponse:function(A){}});dojo.provide("noa.command.games.InitializeCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.InitializeCommand",mojo.command.Command,{execute:function(H){var D=H.paramsObj.panels;for(var E=0;E<D.length;E++){var B=D[E];var C=mojo.queryFirst(".content",B);var F=C.scrollHeight;var A=mojo.queryFirst(".description",B);B.panelObj={contentHeight:F,originalTitle:A.innerHTML};C.style.height="0px"}var G=mojo.queryFirst("#gameguide");G.accordionObj.params={qhardware:[],qesrbRating:[],qplay:[],qgenre:[]}}});dojo.provide("noa.command.PopUpCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.PopUpCommand",mojo.command.Command,{execute:function(A){var D=A.callerObj;var C=$(D).getProperty("rel").split(" ");var I={width:C[1],height:C[2],directories:C[3]||"false",location:C[4]||"false",menubar:C[5]||"false",resizable:C[6]||"false",scrollable:C[7]||"false",status:C[8]||"false",toolbar:C[9]||"false"};var B=I.width;var M=I.height;var F=(screen.width)?(screen.width-B)/2:0;var L=(screen.height)?(screen.height-M)/2:0;var K=A.callerObj.href;var H="Nintendo_of_America";var J=new Array();$each(I,function(O,N){J.push(N+"="+O)});var E=J.join(",")+",top="+Math.round(L)+",left="+Math.round(F);if(this.win&&!this.win.closed){try{this.win.innerHeight=I.height;this.win.innerWidth=I.width}catch(G){this.win.resizeTo(I.width,I.height)}}this.win=window.open(K,H,E,false);this.win.focus()}});dojo.provide("noa.command.games.SearchCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SearchCommand",mojo.command.Command,{execute:function(D){var B=D.callerObj.parentNode;var C=B.getElementsByTagName("input")[0];var A=D.paramsObj.accordionObj;A.params.keyword=C.value}});dojo.provide("noa.command.games.SelectAllOptionsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SelectAllOptionsCommand",mojo.command.Command,{execute:function(G){var A=G.callerObj;var D=A.parentNode.parentNode.parentNode;var B=mojo.queryFirst(".description",D);var F=mojo.queryFirst(".header",D);var C=mojo.query(".gameguideOption",D);A.disabled=true;if(A.checked){var E=this;if(F.getElementsByTagName("img").length==0){new Fx.Styles(B,{duration:200}).start({"top":5});new Fx.Styles(F,{duration:200,onComplete:function(){E.selectAll(C);A.disabled=false;B.innerHTML=D.title;E.onResponse()}}).start({"height":65})}else{this.selectAll(C);A.disabled=false}}else{var E=this;new Fx.Styles(B,{duration:200}).start({"top":10});new Fx.Styles(F,{duration:200,onComplete:function(){A.disabled=false;B.innerHTML=D.panelObj.originalTitle;E.onResponse()}}).start({"height":48});this.deSelectAll(C)}},selectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];if(!C.checked){C.checked=true;this.selectOption(C)}}},deSelectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];C.checked=false;this.deSelectOption(C)}},selectOption:function(B){var D=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(D,"selected");dojo.addClass(D,"selected");var C=B.parentNode.parentNode.parentNode.parentNode;var G=mojo.queryFirst(".header",C);var F=mojo.queryFirst(".images",C);var E=document.createElement("img");E.src=D.src;E.className="image";E.id=D.id;E.style.position="relative";E.style.marginTop="5px";this.swapImage(E,"head");F.appendChild(E);var A=mojo.queryFirst("#gameguide").accordionObj;A.params[C.getAttribute("name")].push(B.value)},deSelectOption:function(B){var E=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(E,"selected");var I=B.parentNode.parentNode.parentNode.parentNode;var G=mojo.queryFirst(".header",I);var A=mojo.queryFirst(".images",I);var C=mojo.queryFirst(".description",I);this.swapImage(E,"option");for(var F=0;F<A.childNodes.length;F++){if(A.childNodes[F].id==E.id){this.removeNode(A,A.childNodes[F]);break}}var H=mojo.queryFirst("#gameguide").accordionObj;var D=H.params[I.getAttribute("name")];for(var F=0;F<D.length;F++){if(D[F]==B.value){D.splice(F);break}}},removeNode:function(A,B){A.removeChild(B)},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")},enableCheckBox:function(A){A.disabled=false},onResponse:function(){}});dojo.provide("noa.command.games.ShowCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ShowCommand",mojo.command.Command,{execute:function(A){var H=mojo.queryFirst("#gameguide").accordionObj;var C=H.expandedPanel;var K=mojo.queryFirst(".header",C);var G=A.callerObj.parentNode;var B=A.callerObj;if(C!==G){var E=mojo.queryFirst(".content",C);var D=new Fx.Styles(E,{duration:200});D.start({"height":0});dojo.removeClass(K,"expand");var I=mojo.queryFirst(".content",G);var J=mojo.queryFirst(".subheader",I).offsetHeight+mojo.queryFirst(".options",I).offsetHeight+"px";var F=new Fx.Styles(I,{duration:200});F.start({"height":J});H.expandedPanel=G;dojo.addClass(B,"expand")}}});dojo.provide("noa.command.games.ShowComponentCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ShowComponentCommand",mojo.command.Command,{execute:function(B){var A=mojo.queryFirst("#gameguide");A.style.visibility="visible"}});dojo.provide("noa.command.UpdateOverlabel");dojo.require("mojo.command.Command");dojo.declare("noa.command.UpdateOverlabel",mojo.command.Command,{execute:function(D){var A=$(D.paramsObj.label)||D.callerObj;var C=$(mojo.queryFirst("#"+A.getProperty("for")))||{value:""};var B=D.paramsObj.focusField||false;if((C.value!=="")||B){A.setStyle("display","none");C.setStyle("visibility","visible")}else{A.setStyle("display","block");C.setStyle("visibility","hidden")}if(B){C.focus()}}});dojo.provide("noa.command.VC.DrawPaginationControlsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.DrawPaginationControlsCommand",mojo.command.Command,{execute:function(E){var C=mojo.Model.get("VCGamesData");if(C){if(!C.pageSize){C={};C.pageSize=15}var D=mojo.Model.get("VCGames");var B=mojo.query(".gamesTotalCount",$("mainSecondary"));var A="";for(i=1;i<Math.ceil((D.total)/C.pageSize);i++){if(C.page==(i-1)){A+=i+" "}else{A+='<a href="#" class="pagControl" onclick="return false">'+i+"</a> "}}var B=mojo.query(".paginationControls",$("mainSecondary"));for(i=0;i<B.length;i++){B[i].innerHTML=A}mojo.controller.Controller.updateObservers()}}});dojo.provide("noa.command.VC.GetCurrentPageCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.GetCurrentPageCommand",mojo.command.Command,{execute:function(A){payload={};payload.id=Array();var B=mojo.Model.get("VCGames");var C=mojo.Model.get("VCGamesData");if(B.game){var F=C.page;var G=C.pageSize;var H=G?F*G:0;var I=G?H+G:B.game.length-1;if(I>B.game.length){I=B.game.length-1}for(i=H;i<=I;i++){payload.id[i-H]=B.game[i].id}mojo.Model.set("PagePayload",payload);var E=noa.service.Locator.getInstance();if(noa.static_mode){var D=E.getService("getGameSpecifics_VCStatic")}else{var D=E.getService("getGameSpecifics")}noa.command.games.currentXhr=D.invoke(payload,this);$("virtualConsoleGamesList").setStyle("display","block");$("vc_games_indicator").style.visibility="visible"}else{if($defined(B.total)&&B.total==0){$("virtualConsoleGamesList").setStyle("display","none")}}},onResponse:function(B,E){if(B.game&&$type(B.game)!="array"){B.game=[B.game]}setTimeout("$('vc_games_indicator').style.visibility = 'hidden';",500);var D=mojo.Model.get("VCGamesData");var F=mojo.Model.get("PagePayload").id;var G={};G.game=Array();for(i=0,len=F.length;i<len;i++){var C=0;for(b=0,len=B.game.length;b<len;b++){if(B.game[b].id==F[i]){C=b;break}}G.game.length++;G.game[G.game.length-1]=B.game[C]}B.game=G.game;for(i=0,len=B.game.length;i<len;i++){B.game[i].system=B.game[i].system.replace("VC - ","");B.game[i].rowclass="";if((i%2)==1){B.game[i].rowclass="alt"}}D.game=D.game.concat(B.game);D.total=D.game.length;B.direction=D.direction;mojo.Model.set("VCGamesData",D);var A=$("gameList");A.innerHTML=TrimPath.parseTemplate(mojo.Model.get("vc_template")).process(B);mojo.controller.Controller.updateObservers()},onError:function(){}});dojo.provide("noa.command.VC.GetVCTitlesCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.GetVCTitlesCommand",mojo.command.Command,{execute:function(E){payload={};var D=mojo.Model.get("VCGames");var C=mojo.Model.get("VCGamesData");payload.qsortBy=C.sortby;payload.qdirection=C.direction[C.sortby];payload.qhardware="VC";var B=noa.service.Locator.getInstance();var A=B.getService("getGames");noa.command.games.currentXhr=A.invoke(payload,this);$("vc_games_indicator").style.visibility="visible"},onResponse:function(A,C){A.total=parseInt(A.total);if(A.game&&$type(A.game)!="array"){A.game=[A.game]}A.direction=C.qdirection;mojo.Model.set("VCGames",A);var B=mojo.query(".gamesTotalCount",$("mainSecondary"));for(i=0,len=B.length;i<len;i++){B[i].innerHTML=A.total}}});dojo.provide("noa.command.VC.SetNextPageCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.SetNextPageCommand",mojo.command.Command,{execute:function(C){var A=mojo.Model.get("VCGamesData");var B=mojo.Model.get("VCGames");A.page++;if(A.page>((Math.ceil(B.total/A.pageSize))-2)){A.page--}mojo.Model.set("VCGamesData",A)}});dojo.provide("noa.command.VC.SetPageCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.SetPageCommand",mojo.command.Command,{execute:function(D){var C=D.callerObj;var B=parseInt(C.innerHTML);var A=mojo.Model.get("VCGamesData");A.page=B-1;mojo.Model.set("VCGamesData",A)}});dojo.provide("noa.command.VC.SetSortCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.SetSortCommand",mojo.command.Command,{execute:function(F){var C=mojo.Model.get("VCGames");var B=mojo.Model.get("VCGamesData");var D=$(F.callerObj);var E=D.className.replace("_","").split(" ")[0];if(B.sortby!=E){if(D.hasClass("descending")){direction="descend";D.addClass("descending");D.removeClass("ascending")}else{direction="ascend";D.addClass("ascending");D.removeClass("descending")}}else{if(D.hasClass("ascending")){direction="descend";D.removeClass("ascending");D.addClass("descending")}else{if(D.hasClass("descending")){direction="ascend";D.addClass("ascending");D.removeClass("descending")}}}B.sortby=E;B.direction[E]=direction;var A=$(F.getContextElement());(5).times(function(G){A.removeClass("sortby_t"+(G+1))});A.addClass("sortby_"+D.getParent().className);mojo.Model.set("VCGamesData",B)}});dojo.provide("noa.command.VC.SetupVCComponentCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.VC.SetupVCComponentCommand",mojo.command.Command,{execute:function(A){$("vc_template").value=$("vc_template").value.replace(/!\{/g,"${");mojo.Model.set("vc_template",$("vc_template").value.replace(/!\{/g,"${"));mojo.Model.set("VCGames",{});mojo.Model.set("VCGamesData",{total:0,game:[],page:0,pageSize:null,sortby:"title",direction:{title:"ascend"}})}});dojo.provide("noa.command.animation.ListScrollBehavior");dojo.require("mojo.command.Command");dojo.declare("noa.command.animation.ListScrollBehavior",mojo.command.Command,{_isAnimating:false,execute:function(B){var D=$(B.callerObj).getParent();while(D.getTag()!="body"){if(D.id.test(B.paramsObj.containerId)){var I=mojo.queryFirst(B.paramsObj.listClass,D);break}D=D.getParent()}if(!I){return }if(this._isAnimating===true){return }var F=this;var K=new Fx.Styles(I,{duration:400,transition:Fx.Transitions.Cubic.easeOut,onStart:function(){F._isAnimating=true},onComplete:function(){F._isAnimating=false}});var J=B.paramsObj.direction;var H;if(J=="left"){if(parseInt(I.offsetLeft)==0){return }H=parseInt(I.offsetLeft)+parseInt(B.paramsObj.distance)}else{var G=Math.ceil(I.getElementsByTagName("li").length/4);var E=Math.abs(parseInt(I.offsetLeft))/parseInt(B.paramsObj.distance)+1;if(G==E){return }H=parseInt(I.offsetLeft)-parseInt(B.paramsObj.distance)}K.start({"left":H});var A=D.getElement("a.back");var C=D.getElement("a.forward");if(G==(E+1)){C.addClass("disabled")}else{C.removeClass("disabled")}if(H==0){A.addClass("disabled")}else{A.removeClass("disabled")}}});dojo.provide("noa.command.animation.MorphStylesBehavior");dojo.require("mojo.command.Command");dojo.declare("noa.command.animation.MorphStylesBehavior",mojo.command.Command,{execute:function(C){var B=$type(C.paramsObj.elements)=="array"?C.paramsObj.elements:[C.paramsObj.elements];var A=B.map(function(D){return new Fx.Styles(D,C.paramsObj.options)});A.forEach(function(D){D.start(C.paramsObj.styles)});return A}});dojo.provide("noa.command.animation.QueueBehavior");dojo.require("mojo.command.Command");dojo.require("mojo.Model");dojo.declare("noa.command.animation.QueueBehavior",mojo.command.Command,{_runningfx:false,execute:function(E){var E=E||this._requestObj;var C=E.paramsObj.queue||"animationQueue";if(!this._runningfx&&mojo.Model.contains(C)){var D=this;if(mojo.Model.get(C).length>0){this._runningfx=true;var A=mojo.Model.get(C).shift();var B=dojo.connect(A(),"stop",function(){D._runningfx=false;D.execute();dojo.disconnect(B)})}else{this._runningfx=false}}}});dojo.provide("noa.command.drawers.OpenDrawerCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.drawers.OpenDrawerCommand",mojo.command.Command,{execute:function(B){var G=$(B.callerObj.parentNode);var O=$(B.callerObj);var I=G;var L=O;if(O.hasClass("isOpened")){O.removeClass("isOpened");if(noa.command.drawers.lastNode!=O.id){this.closeDrawer(O,I)}}else{var N=mojo.queryFirst(".isOpened");if(N){$(N).removeClass("isOpened");if(noa.command.drawers.lastNode!=N.id){noa.command.drawers.lastNode=N.id;this.closeDrawer(N,N.parentNode)}}if(N!=O){$(O).addClass("isOpened");var P=$(G).getElement("div.menuDrawer");var K=$(G).getElement("div.drawerContents").getSize();var H=K.size["y"];var F=$(I).getStyles("width","height","padding","margin");var C=$(I).getCoordinates();var M=$("minorPromos").getCoordinates();var E=C.left-M.left;var J=C.top-M.top;syntheticName=L.getProperty("id")+"_placeholder";var A=new Element("div",{"id":syntheticName,"class":"promoItem","styles":{"overflow":"visible","padding":"0px 5px 20px 9px","margin":"0px 6px 25px -9px","zIndex":"1","float":"left","position":"relative","top":"0","left":"0"}});$(A).injectBefore(I);$(I).setStyles({"overflow":"visible","padding":"0px 5px 20px 9px","margin":"0","zIndex":"999","float":"left","top":J,"left":E,"position":"absolute"});var D=new Fx.Styles(P,{duration:250,transition:Fx.Transitions.Sine.easeOut,onComplete:function(){var Q=$(O.id);Q.setStyles({"position":"relative"})}});D.start({"height":[1,H]});openWiiMenuDrawer=O;O.addClass("openedDrawer");originalText=O.getText();O.setText("Close");return false}}},closeDrawer:function(D,H){var G=D;var A=H;D.removeClass("openedDrawer");D.setText(originalText);var C=$(A).getElement("div.menuDrawer");var F=$(A).getElement("div.drawerContents").getSize();var B=F.size["y"];var E=new Fx.Styles(C,{duration:100,transition:Fx.Transitions.Sine.easeIn,onComplete:function(){$(H).setStyles({"overflow":"visible","padding":"0px 5px 20px 9px","margin":"0px 6px 25px -9px","zIndex":"1","float":"left","position":"relative","top":"0","left":"0"});var I=G.getProperty("id")+"_placeholder";$(H).injectAfter(I);$(I).remove();var J=$(D.id);J.setStyles({"position":"absolute"})}});E.start({"height":[B,1]})}});noa.command.drawers.lastNode=null;dojo.provide("noa.command.drawers.SetupDrawersCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.drawers.SetupDrawersCommand",mojo.command.Command,{execute:function(F){var E=$$("a.call2action");for(j=0;j<E.length;j++){E[j].style.position="absolute";var C="drawer"+j;E[j].setProperty("id",C);var A=$(E[j].parentNode);A.setStyles({"overflow":"visible","padding":"0px 5px 20px 9px","margin":"0px 6px 25px -9px","zIndex":"1","float":"left","position":"relative","top":"0","left":"0"})}var B=mojo.query("a.call2action");for(var D=0;D<B.length;D++){B[D].onmouseover=function(){this.style.backgroundImage="url(/images/wii/menu/wii-menu-panel-footer-on.png)"};B[D].onmouseout=function(){this.style.backgroundImage="url(/images/wii/menu/wii-menu-panel-footer.png)"}}}});dojo.provide("noa.command.dropdown.CheckOpenDropdownCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.dropdown.CheckOpenDropdownCommand",mojo.command.Command,{execute:function(A){var C=new Date;var H=mojo.Model.get("dropdown/itemData");if(((C-noa.command.dropdown.closeHandler)>200)&&(noa.command.dropdown.openstatus==false)){setTimeout("noa.command.dropdown.openstatus = true;",500);var I=$("dropdownbody");var B=$("dropdowntail");var E=$("gamesguide_dropdown");E.className="ggdd_on";if(typeof document.body.style.maxHeight!="undefined"){I.style.backgroundImage="url('/images/games/guide/dd_downbox.png')";B.style.backgroundImage="url('/images/games/guide/dd_box_bot.png')"}else{}I.style.display="block";B.style.display="block";var G="";for(var F=0;F<H.length;F++){G+='<p class="dropdown_listitem" onclick="noa.command.dropdown.runDropDownSel(\''+H[F].split("|")[0]+"', '"+H[F].split("|")[1]+"')\" onmouseover=\"this.className='dropdown_listitem dropdown_listitem_on'\" onmouseout=\"this.className='dropdown_listitem'\">"+H[F].split("|")[0]+"</p>"}I.innerHTML=G;var D=noa.command.games.getCoords(E);I.style.top=43+"px";I.style.left=548+"px";B.style.top=43+I.offsetHeight+"px";B.style.left=548+"px";noa.command.dropdown.closeHandler=new Date()}},notify:function(A){}});dojo.provide("noa.command.dropdown.CloseDropDownCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.dropdown.CloseDropDownCommand",mojo.command.Command,{execute:function(A){noa.command.dropdown.removeDropDown()}});dojo.provide("noa.command.dropdown.SetupDataSetCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.dropdown.SetupDataSetCommand",mojo.command.Command,{execute:function(G){noa.command.IE6=false;if(navigator.appVersion.indexOf("MSIE")!=-1){temp=navigator.appVersion.split("MSIE");version=parseFloat(temp[1]);if(version<7){noa.command.IE6=true}}var B=$("gamesguide_dropdown");var C=B.getElementsByTagName("div");var E=Array();var F=0;for(var D=0;D<C.length;D++){if(C[D].className=="dropdownvalue"){E[F++]=C[D].innerHTML}else{}}mojo.Model.set("dropdown/itemData",E);dojo.connect(window,"onclick",this,noa.command.dropdown.removeDropDown);var A=$("dropdownbody");if(noa.command.IE6==true){}}});noa.command.dropdown.openstatus=false;noa.command.dropdown.closeHandler=new Date();noa.command.dropdown.removeDropDown=function(){if(noa.command.dropdown.openstatus==true){var A=$("dropdownbody");var B=$("dropdowntail");var C=$("gamesguide_dropdown");C.className="ggdd_off";A.style.display="none";B.style.display="none";noa.command.dropdown.openstatus=false;noa.command.dropdown.closeHandler=new Date()}};noa.command.dropdown.runDropDownSel=function(newlabel,jseval){$("dropdowndisplay").innerHTML=newlabel;eval(jseval);mojo.Model.set("dropdownvalue",noa.command.dropdown.value);noa.command.dropdown.removeDropDown()};noa.command.dropdown.value="title";dojo.provide("noa.command.games.AddHistoryItemCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.AddHistoryItemCommand",mojo.command.Command,{execute:function(G){var B=mojo.queryFirst("#gameguide").accordionObj;var A=B.params;var E="";for(var C in A){if(A[C] instanceof Array){E+=C+"="+escape(A[C].join(","))+"&"}}if(B.expandedPanel){E+="panel="+B.expandedPanel.getAttribute("name")}var F=mojo.Model.get("dropdownvalue")||"";if(F!=""){E+="&sortBy="+F}var D=window.location.href.substring(0,window.location.href.indexOf("#"));D+="#"+E;window.location.replace(D);noa.command.games.currentHash=E}});noa.command.games.setCookie=function(D,B,C){var A=new Date();A.setTime(A.getTime()+(C*24*3600*1000));document.cookie=D+"="+escape(B)+((C==null)?"":"; expires="+A.toGMTString())};dojo.provide("noa.command.games.ApplyElipsesCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ApplyElipsesCommand",mojo.command.Command,{constructor:function(){},execute:function(G){try{var F=G.callerObj.getParent().getParent().getParent().getParent();var D=mojo.queryFirst(".images",F);var C=mojo.queryFirst(".elipses",F);if(D.scrollHeight>(G.paramsObj.lines*14)){C.style.top=(D.offsetTop+14)+"px";C.style.display="block"}else{C.style.display="none"}}catch(E){var B=mojo.query(".images",G.contextObj);var A=mojo.query(".elipses",G.contextObj);for(i=0;i<B.length;i++){if(B[i].scrollHeight>(G.paramsObj.lines*14)){A[i].style.top=(B[i].offsetTop+14)+"px";A[i].style.display="block"}else{A[i].style.display="none"}}}}});dojo.provide("noa.command.games.ChooseOptionCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ChooseOptionCommand",mojo.command.Command,{execute:function(D){var A=D.callerObj;if(A.checked){var C=A.parentNode.parentNode.parentNode.parentNode;var B=mojo.queryFirst(".description",C);this.selectOption(A)}else{this.deSelectOption(A)}},selectOption:function(C){var J=C.parentNode.parentNode.parentNode.parentNode;var F=mojo.queryFirst(".header",J);var A=mojo.queryFirst(".images",J);var D=mojo.queryFirst(".description",J);var E=document.createElement("span");if(A.getElementsByTagName("span").length>0){var B=mojo.queryFirst(".gameguideName",C.parentNode).innerHTML.replace(/(<([^>]+)>)/ig,"");E.innerHTML=", "+B;E.id=C.value.replace(" ");A.appendChild(E)}else{C.disabled=true;var G=this;var K=new Fx.Styles(F,{duration:200,onComplete:function(){G.onSelectResponse(E,C,A);C.disabled=false}});new Fx.Styles(D,{duration:200,onComplete:function(){G.onSelectResponse(E,C,A);C.disabled=false;D.innerHTML=J.title}}).start({"top":9})}var I=mojo.queryFirst("#gameguide").accordionObj;try{I.params[J.getAttribute("name")].push(C.value)}catch(H){}},deSelectOption:function(B){var K=B.parentNode.parentNode.parentNode.parentNode;var F=mojo.queryFirst(".header",K);var A=mojo.queryFirst(".images",K);var C=mojo.queryFirst(".description",K);if(A.getElementsByTagName("span").length>1){var I=mojo.queryFirst("#"+B.value.replace(" "),A);try{A.removeChild(I)}catch(G){}}else{var K=B.parentNode.parentNode.parentNode.parentNode;var C=mojo.queryFirst(".description",K);new Fx.Styles(C,{duration:200,onComplete:function(){B.disabled=false;C.innerHTML=K.panelObj.originalTitle}}).start({"top":13});var H=A.getElementsByTagName("span")[0];B.disabled=true;A.removeChild(H)}this.correctHeaderValueText(A);var J=mojo.queryFirst("#gameguide").accordionObj;var D=J.params[K.getAttribute("name")];for(var E=0;E<D.length;E++){if(D[E]==B.value){D.splice(E,1);break}}},removeNode:function(A,B){A.removeChild(B)},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")},correctHeaderValueText:function(B){var A=B.getElementsByTagName("span")[0];if(A&&A.innerHTML.indexOf(",")!=-1){A.innerHTML=A.innerHTML.substring(2)}},onSelectResponse:function(B,A,D){var C=mojo.queryFirst(".gameguideName",A.parentNode).innerHTML.replace(/(<([^>]+)>)/ig,"");B.innerHTML=C;B.id=A.value;D.appendChild(B)},onResponse:function(){}});dojo.provide("noa.command.games.ClearGamesListCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ClearGamesListCommand",mojo.command.Command,{constructor:function(){},execute:function(A){$("games_landscape").innerHTML="";$("games_landscape").style.height="1px"},onError:function(A){mojo.Model.set("gamesError",A)}});dojo.provide("noa.command.games.ClearOptionsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ClearOptionsCommand",mojo.command.Command,{execute:function(A){var D=mojo.queryFirst("#gameguide");var H=mojo.query(".panel","#gameguide");for(var E=0;E<H.length;E++){var B=H[E];var C=mojo.queryFirst(".description",B);var F=mojo.queryFirst(".header",B);new Fx.Styles(C,{duration:200}).start({"top":13});C.innerHTML=B.panelObj.originalTitle;var I=mojo.query(".gameguideOption",B);this.deSelectAll(I);this.resetPanel(B)}var G=mojo.query(".elipses");for(var E=0;E<G.length;E++){G[E].style.display="none"}},deSelectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];C.checked=false}},resetPanel:function(B){var C=mojo.queryFirst(".images",B);C.innerHTML="";var A=mojo.queryFirst("#gameguide").accordionObj;A.params[B.getAttribute("name")]=[]},onResponse:function(A){}});dojo.provide("noa.command.games.DrawGamesBlockCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.DrawGamesBlockCommand",mojo.command.Command,{execute:function(A){var J=mojo.Model.get("gamesCache");var I=mojo.Model.get("gamesViewData");var K=mojo.Model.get("drawnGameIDs");var G=$("games_landscape");var D=document.createElement("div");if((I.list)&&(I.list.length>0)){D.innerHTML+=TrimPath.parseTemplate(mojo.Model.get("box_template")).process(I)}G.appendChild(D);var H=this;var C=G.getElementsByTagName("div");for(var E=0,F=C.length;E<F;E++){var B=C[E].id.substring(1);if(J.hasKey(B)&&J.get(B).renderOK=="yes"){C[E].style.top=J.get(B).absy+"px";C[E].style.left=J.get(B).absx+"px";C[E].style.display="block";K[B]=true}}mojo.Model.set("drawnGameIDs",K)}});noa.command.games.activeCallout=null;noa.command.games.calloutTimer=null;noa.command.games.isActive=false;noa.command.games.cancelCallout=function(A){clearTimeout(noa.command.games.calloutTimer);$("calloutPanel").style.display="none";noa.command.games.isActive=false};noa.command.games.throttleRemoveCallout=function(A){clearTimeout(noa.command.games.calloutTimer);noa.command.games.calloutTimer=setTimeout("noa.command.games.cancelCallout()",1)};noa.command.games.throttleCallout=function(A){clearTimeout(noa.command.games.calloutTimer);noa.command.games.activeCallout=A.id.replace("_","");if(noa.command.games.isActive){noa.command.games.setCalloutState()}else{noa.command.games.calloutTimer=setTimeout("noa.command.games.setCalloutState()",1000)}};noa.command.games.setCalloutState=function(){var B=0;var K=noa.command.games;var A=$("calloutPanel");A.style.display="block";A.style.visibility="hidden";var L=mojo.Model.get("gamesCache");var J=mojo.Model.get("gamesViewData");var C=K.windowRect();var H=$("_i_"+K.activeCallout);var F=K.getCoords(H);if((F.y-C.scrollTop)<((C.scrollTop+C.height)-(F.y+F.h))){B=1}var I={};I.list=Array(1);I.list[0]=L.get(K.activeCallout);var G=50;if(I.list[0].absx<300){G=253;A.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateleft")).process(I)}else{A.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateright")).process(I)}var M=K.getCoords(A);var E=K.getCoords($("_i2_"+K.activeCallout));var N=noa.command.games.getCoords($("games_region"));var D=$("_"+K.activeCallout);if(I.list[0].absx<300){A.style.left=parseInt(D.style.left.replace("px",""))-3+G+"px";A.style.top=parseInt(D.style.top.replace("px",""))+31-parseInt($("games_region").scrollTop)+"px"}else{A.style.left=parseInt(D.style.left.replace("px",""))+60+G+"px";A.style.top=parseInt(D.style.top.replace("px",""))+31-parseInt($("games_region").scrollTop)+"px"}A.style.visibility="visible";noa.command.games.isActive=true};noa.command.games.getCoords=function(B){var C,G;try{var A=B;C=B.offsetWidth;G=B.offsetHeight;for(var E=0,D=0;B!=null;){E+=B.offsetLeft;D+=B.offsetTop;B=B.offsetParent}for(;A!=document.body;){E-=A.scrollLeft;D-=A.scrollTop;A=A.parentNode}}catch(F){}return{x:E,y:D,h:G,w:C}};noa.command.games.windowRect=function(){var A,D;if(self.pageYOffset){A=self.pageXOffset;D=self.pageYOffset}else{if(document.documentElement&&document.documentElement.scrollTop){A=document.documentElement.scrollLeft;D=document.documentElement.scrollTop}else{if(document.body){A=document.body.scrollLeft;D=document.body.scrollTop}}}if(window.innerHeight){var C=window.innerWidth;var B=window.innerHeight}else{var C=document.documentElement.clientWidth;var B=document.documentElement.clientHeight}return{width:C,height:B,scrollTop:D,scrollLeft:A}};dojo.provide("noa.command.games.GetGamesViewCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.GetGamesViewCommand",mojo.command.Command,{constructor:function(){this.totalPages},execute:function(G){var F=G.paramsObj.gameGuideParams;var E="";if(!F){F={}}else{var B=0;for(i=0,len=F.qgenre.length;i<len;i++){if(F.qgenre[i]=="adventure"){F.qgenre.push("action");F.qgenre.push("arcade");F.qgenre.push("battle");F.qgenre.push("fighting");F.qgenre.push("first person");F.qgenre.push("pinball");F.qgenre.push("platformer");F.qgenre.push("shooter");B+=8}else{if(F.qgenre[i]=="rhythm"){F.qgenre.push("music");B+=1}else{if(F.qgenre[i]=="life training"){F.qgenre.push("education");F.qgenre.push("edutainment");F.qgenre.push("mental training");F.qgenre.push("productivity");B+=4}else{if(F.qgenre[i]=="sports"){F.qgenre.push("baseball");F.qgenre.push("basketball");F.qgenre.push("boxing");F.qgenre.push("extreme");F.qgenre.push("fishing");F.qgenre.push("football");F.qgenre.push("golf");F.qgenre.push("hockey");F.qgenre.push("miscellaneous");F.qgenre.push("soccer");F.qgenre.push("sports");F.qgenre.push("tennis");F.qgenre.push("wrestling");B+=13}else{if(F.qgenre[i]=="strategy"){F.qgenre.push("simulation");B+=1}else{if(F.qgenre[i]=="other"){F.qgenre.push("board games");F.qgenre.push("card games");F.qgenre.push("casino");F.qgenre.push("other");F.qgenre.push("virtual pet");B+=5}}}}}}}E=F.qdirection+F.qesrbRating.join(",")+F.qgenre.join(",")+F.qhardware.join(",")+F.qplay.join(",")+F.qrelease.join(",")+F.qsortBy}if(E=="undefined"){E="ascendtitle"}noa.command.games.searchHash=E;var D=mojo.Model.get("dropdownvalue");F.qsortBy=D||"default";F.qdirection=F.qsortBy!="title"?"descend":"ascend";var C=noa.service.Locator.getInstance();var A=C.getService("getGames");if(noa.command.games.currentXhr){noa.command.games.currentXhr.ioArgs.xhr.abort();noa.command.games.currentXhr=null}if(noa.command.games.currentDataXhr){noa.command.games.currentDataXhr.ioArgs.xhr.abort();mojo.Model.get("gamesRequestMarshal").isActive=false}noa.command.games.setThrobber(true);noa.command.games.currentXhr=A.invoke(F,this);F.qgenre.length-=B},onResponse:function(D){noa.command.games.currentXhr=null;if($type(D.game)!="array"){D.list=[D.game]}else{D.list=D.game}noa.command.games.setThrobber(false);if(D.total!="0"){mojo.queryFirst(".sortresultsc").style.visibility="visible";mojo.Model.set("viewRetrieved",true);var F=mojo.Model.get("gamesPerRow");var H=mojo.Model.get("gameItemHeight");var B=mojo.Model.get("gameItemWidth");var A=Math.ceil(D.list.length/F);var I=(D.list.length%F);mojo.Model.set("gamesRemainderCover",'<div class="games_backdrop" style="top: '+((A*H)-H)+"px; left: "+(B*(I))+"px; width:"+(B*(F-I))+"px; height:"+H+'px;"></div>');$("games_landscape").style.height=(A*H)+"px";mojo.Model.set("gamesView",D);var G=mojo.query(".games_count_number");for(var E=0;E<G.length;E++){G[E].innerHTML=D.list.length}$("title").className="title_results";var C=$("gameguide_instructions");C.innerHTML="Tell Gameguide what you're looking for and filter them down fast. You can check as many or as few options as you like.";C.style.color="black"}else{mojo.queryFirst(".sortresultsc").style.visibility="hidden";var F=mojo.Model.get("gamesPerRow");var H=mojo.Model.get("gameItemHeight");var B=mojo.Model.get("gameItemWidth");mojo.Model.set("gamesRemainderCover",'<div class="games_backdrop" style="top: 0px; left: 0px; width:'+(B*F)+"px; height:"+H*1+'px;"></div>');$("games_landscape").style.height=(1*H)+"px";var G=mojo.query(".games_count_number");for(var E=0;E<G.length;E++){G[E].innerHTML=0}$("games_landscape").innerHTML='<div class="noResults"><div style="padding-top: 60px;"><h4>No Games Found</h4>Gameguide can\'t find any games matching your request. <br/>Try changing your filters or click clear all choices to start over.</div></div>';setTimeout("noa.command.games.setThrobber(false);",500);var C=$("gameguide_instructions");C.innerHTML="Uncheck some boxes or click 'Clear all choices' to start over.";C.style.color="#DA474D"}},onError:function(A){mojo.Model.set("gamesError",A);noa.command.games.currentXhr=null}});noa.command.games.currentXhr=null;noa.command.games.searchHash;noa.command.games.setThrobber=function(A){if(A==true){$("throbber").style.visibility="visible"}else{$("throbber").style.visibility="hidden"}};dojo.provide("noa.command.games.GetRelevantDataCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.GetRelevantDataCommand",mojo.command.Command,{constructor:function(){this.totalPages},execute:function(A){var F=new Date();var B=new Date();if(!mojo.Model.contains("gamesCache")){mojo.Model.set("gamesCache",new Hash())}if(!mojo.Model.contains("drawnGameIDs")){mojo.Model.set("drawnGameIDs",new Array())}clearTimeout(noa.command.games.peakAhead);if(A.paramsObj){var H=A.paramsObj;if((H.destroyHTML)&&(H.destroyHTML==true)){$("games_landscape").innerHTML="";$("games_landscape").innerHTML=mojo.Model.get("gamesRemainderCover")||"";mojo.Model.set("drawnGameIDs",new Array())}if((H.preserveScroll)&&(H.preserveScroll==false)){$("games_landscape").scrollTop=0}if((H.renderExisting)&&(H.renderExisting==true)){var J=this.createResultsFromCache();if(J.list.length>0){var D=J.list;this.onResponse(D,{id:this.returnIDArray(J.list)});setTimeout("noa.command.games.setThrobber(false);",1000)}}}var K=$("games_region");if(K){if(mojo.Model.get("gamesRequestMarshal").isActive==false){var J=this.calcViewableItems(mojo.Model.get("gamesView"),K.scrollTop,K.offsetHeight,mojo.Model.get("gameItemHeight"),mojo.Model.get("gameItemWidth"),mojo.Model.get("gamesPerRow"));if((J.downloadOK==true)){var C={pageSize:J.pageSize,pageIndex:J.pageIndex,id:Array()};C.id=this.returnIDArray(J.gameData);var I=mojo.Model.get("gamesCache");if(C.id.length>0){if(C.id.some(function(L){return !I.hasKey(L)})){var G=noa.service.Locator.getInstance();var E=G.getService("getGameSpecifics");if(noa.command.games.currentDataXhr){noa.command.games.currentDataXhr.ioArgs.xhr.abort()}if(!noa.command.games.currentXhr){noa.command.games.currentDataXhr=E.invoke(C,this);mojo.Model.set("gamesRequestObj",J);mojo.Model.get("gamesRequestMarshal").isActive=true}}else{this.onResponse(C.id.map(function(L){return I.get(L)}),C)}}else{}}else{}}else{}}},createResultsFromCache:function(){var C=mojo.Model.get("gamesView");var E=mojo.Model.get("gamesCache");var B={};B.list=new Array();if(!C){return B}var A=0;for(var D=0;D<C.list.length;D++){if(E.hasKey(C.list[D].id)){B.list[A++]=E.get(C.list[D].id)}}return B},returnIDArray:function(B){var A=new Array();B.each(function(C){A.push(C.id)});return A},onResponse:function(E,A){data={};if(E.game){if($type(E.game)!="array"){data.list=[E.game]}else{data.list=E.game}}else{data.list=E}var L=new Hash();data.list.each(function(M){M.intro=M.intro.replace(/(<([^>]+)>)/ig,"");if(M.intro.length>100){M.intro=M.intro.substring(0,99)+".."}if(M.title.length>40){M.title=M.title.substring(0,39)+".."}if(M.genre.length>30){M.genre=M.genre.substring(0,29)+".."}L.set(M.id,M)});noa.command.games.currentDataXhr=null;mojo.Model.get("gamesRequestMarshal").isActive=false;var J=mojo.Model.get("gamesCache");var F=mojo.Model.get("gamesPerRow");var G=mojo.Model.get("gamesRequestObj");var C=mojo.Model.get("gameItemHeight");var H=mojo.Model.get("gameItemWidth");var I=$("games_region");var B=I.scrollTop;var K=mojo.Model.get("gameItemHeight");var D={list:new Array()};L.each(function(M,P){if(A.id.contains(P)){var N=this.getViewPos(P);if($type(N)=="boolean"&&N==false){M.renderOK="no"}else{M.renderOK="yes"}var O=(C*((Math.ceil((N)/F))))-C;if(N%F==0){O+=C}M.absx=(N%F)*H;M.absy=O;D.list.push(M)}J.set(P,M)}.bind(this));mojo.Model.set("gamesCache",J);mojo.Model.set("gamesViewData",D)},getViewPos:function(E){var B=mojo.Model.get("gamesView").list;var D=false;for(var C=0,A=B.length;C<A;C++){if(B[C].id==E){D=C;break}}return D},onError:function(A){mojo.Model.set("gamesError",A)},calcViewableItems:function(P,C,J,L,E,G){if(!P){return{downloadOK:false}}var S=mojo.Model.get("gamesCache");var K=mojo.Model.get("gamesPerRow");var I=mojo.Model.get("drawnGameIDs");var A=Math.ceil((C-L)/L);if(A<0){A=0}var D=Math.ceil((C+J)/L);var R=A*G;var H=(D*G);var Q={};Q.gameData=new Array();Q.gameData.length=0;var B=1;if(noa.command.games.movedUpLast==false){B=-1;noa.command.games.movedUpLast=true}else{noa.command.games.movedUpLast=false}var F=0;var O=0;while(F<(K*5)){O++;if(O>(2*Math.ceil(P.list.length/K))){break}for(var M=0;M<K;M++){try{if(!I[P.list[R+M].id]){Q.gameData[F]=P.list[R+M];F++}}catch(N){}}R+=(B*K);if(R<0){B=-1*B;R=0}if(R>=P.list.length-K){B=-1*B;R=P.list.length-K}}if(F>0){Q.downloadOK=true}else{Q.downloadOK=false}return Q}});noa.command.games.movedUpLast=true;dojo.provide("noa.command.games.InitializeCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.InitializeCommand",mojo.command.Command,{execute:function(A){var G=A.paramsObj.panels;for(var F=0;F<G.length;F++){var B=G[F];var H=mojo.queryFirst(".content",B);var C=mojo.queryFirst(".description",B);B.panelObj={originalTitle:C.innerHTML};H.style.height="1px";var I=B.getElementsByTagName("input");for(var E=0;E<I.length;E++){I[E].checked=false}}var D=mojo.queryFirst("#gameguide");D.accordionObj={};D.accordionObj.params={qhardware:[],qesrbRating:[],qplay:[],qgenre:[],qrelease:[],qsortBy:""}}});dojo.provide("noa.command.games.InitializeFromCookieCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.InitializeFromCookieCommand",mojo.command.Command,{execute:function(A){if(window.location.hash==""){var M=mojo.query("#gameguide .panel");var N=mojo.queryFirst("#gameguide").accordionObj;for(var I=0;I<M.length;I++){var B=M[I];var F=noa.command.games.getCookie(B.getAttribute("name"));if(F){var D=F.split(",");var K=mojo.queryFirst(".header",B);var C=mojo.queryFirst(".header .images",B);var E=mojo.queryFirst(".header .description",B);for(var H=0;H<D.length;H++){if(H==0){K.style.height="65px";E.style.top="5px";E.innerHTML=B.title}var J=mojo.queryFirst("#"+D[H].replace(" ","").toLowerCase()+"_option");var G=mojo.queryFirst(".optionImage",J);this.swapImage(G,"selected");dojo.addClass(G,"selected");var O=document.createElement("img");O.src=G.src;O.className="image";O.id=G.id;O.style.position="relative";O.style.marginTop="5px";this.swapImage(O,"head");C.appendChild(O);var L=mojo.queryFirst(".gameguideOption",J);L.checked=true;N.params[B.getAttribute("name")].push(D[H])}}}}},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")}});noa.command.games.getCookie=function(C){var B,A;if(document.cookie.length>0){B=document.cookie.indexOf(C+"=");if(B!=-1){B+=C.length+1;A=document.cookie.indexOf(";",B);if(A==-1){A=document.cookie.length}return unescape(document.cookie.substring(B,A))}}return null};dojo.provide("noa.command.games.InitializeFromHistoryCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.InitializeFromHistoryCommand",mojo.command.Command,{execute:function(R){var G=mojo.queryFirst("#gameguide").accordionObj;if(window.location.hash!=""){var E=mojo.query("#gameguide .panel");var B=window.location.hash.substring(1).split("&");var Q={};var A=false;for(var O=0;O<B.length;O++){var H=B[O];H=H.split("=");Q[H[0]]=H[1]}if(Q.panel==""||Q.panel==null){var J=mojo.queryFirst("#gameguide .panel");this.expandPanel(J)}for(var O=0;O<E.length;O++){var J=E[O];var P=Q[J.getAttribute("name")];if(P){panelParams=P.split(",");if(panelParams[0]!=""){var N=mojo.queryFirst(".header",J);var D=mojo.queryFirst(".header .images",J);var C=mojo.queryFirst(".header .description",J);A=false;for(var M=0;M<panelParams.length;M++){var K=mojo.queryFirst("#"+panelParams[M].toLowerCase().replace(" ","")+"_option");if(!K){continue}if(A==false){N.style.height="61px";C.style.top="5px";C.innerHTML=J.title.replace(/(<([^>]+)>)/ig,"");A=true}var L=mojo.queryFirst(".gameguideOption",K);L.checked=true;var I=document.createElement("span");var S=mojo.queryFirst(".gameguideName",K).innerHTML.replace(/(<([^>]+)>)/ig,"");if(M==0){I.innerHTML=S}else{I.innerHTML=", "+S}I.id=L.value;D.appendChild(I);var G=mojo.queryFirst("#gameguide").accordionObj;G.params[J.getAttribute("name")].push(panelParams[M])}}}var F=Q.panel;if(J.getAttribute("name")==F){this.expandPanel(J)}}if(Q.sortBy=="title"){$("dropdowndisplay").innerHTML="Alphabetical";$("games_landscape").innerHTML="";mojo.Model.set("dropdownvalue","title")}else{if(Q.sortBy=="releaseDate"){$("dropdowndisplay").innerHTML="Release-date";$("games_landscape").innerHTML="";mojo.Model.set("dropdownvalue","releaseDate")}}}else{var J=mojo.queryFirst("#gameguide .panel");this.expandPanel(J)}},expandPanel:function(C){var F=mojo.queryFirst(".options",C).offsetHeight+"px";var D=mojo.queryFirst(".content",C);var B=mojo.queryFirst("#gameguide").accordionObj;var E=".heightinfo";if(noa.command.IE6==true){E=".ie6_heightinfo"}var A=mojo.queryFirst(E,C).innerHTML+"px";D.style.height=A;B.expandedPanel=C;var G=mojo.queryFirst(".header",C);dojo.addClass(G,"expand")}});dojo.provide("noa.command.games.OperatePeakAheadCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.OperatePeakAheadCommand",mojo.command.Command,{execute:function(A){(function(){this.conditionPass()}).delay(500,this)},conditionPass:function(A){}});noa.command.games.peakAhead=null;dojo.provide("noa.command.games.SearchCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SearchCommand",mojo.command.Command,{execute:function(D){var B=D.callerObj.parentNode;var C=B.getElementsByTagName("input")[0];var A=D.paramsObj.accordionObj;A.params.keyword=C.value}});dojo.provide("noa.command.games.SelectAllOptionsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SelectAllOptionsCommand",mojo.command.Command,{execute:function(G){var A=G.callerObj;var D=A.parentNode.parentNode.parentNode;var B=mojo.queryFirst(".description",D);var F=mojo.queryFirst(".header",D);var C=mojo.query(".gameguideOption",D);A.disabled=true;if(A.checked){var E=this;if(F.getElementsByTagName("img").length==0){new Fx.Styles(B,{duration:200}).start({"top":5});new Fx.Styles(F,{duration:200,onComplete:function(){E.selectAll(C);A.disabled=false;B.innerHTML=D.title;E.onResponse()}}).start({"height":65})}else{this.selectAll(C);A.disabled=false}}else{var E=this;new Fx.Styles(B,{duration:200}).start({"top":10});new Fx.Styles(F,{duration:200,onComplete:function(){A.disabled=false;B.innerHTML=D.panelObj.originalTitle;E.onResponse()}}).start({"height":48});this.deSelectAll(C)}},selectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];if(!C.checked){C.checked=true;this.selectOption(C)}}},deSelectAll:function(A){for(var B=0;B<A.length;B++){var C=A[B];C.checked=false;this.deSelectOption(C)}},selectOption:function(B){var D=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(D,"selected");dojo.addClass(D,"selected");var C=B.parentNode.parentNode.parentNode.parentNode;var G=mojo.queryFirst(".header",C);var F=mojo.queryFirst(".images",C);var E=document.createElement("img");E.src=D.src;E.className="image";E.id=D.id;E.style.position="relative";E.style.marginTop="5px";this.swapImage(E,"head");F.appendChild(E);var A=mojo.queryFirst("#gameguide").accordionObj;A.params[C.getAttribute("name")].push(B.value)},deSelectOption:function(B){var E=mojo.queryFirst(".optionImage",B.parentNode);this.swapImage(E,"selected");var I=B.parentNode.parentNode.parentNode.parentNode;var G=mojo.queryFirst(".header",I);var A=mojo.queryFirst(".images",I);var C=mojo.queryFirst(".description",I);this.swapImage(E,"option");for(var F=0;F<A.childNodes.length;F++){if(A.childNodes[F].id==E.id){this.removeNode(A,A.childNodes[F]);break}}var H=mojo.queryFirst("#gameguide").accordionObj;var D=H.params[I.getAttribute("name")];for(var F=0;F<D.length;F++){if(D[F]==B.value){D.splice(F);break}}},removeNode:function(A,B){A.removeChild(B)},swapImage:function(B,D){var C=B.src;var E=C.split("/");var A=E[E.length-1];A=A.replace(/(\w*)_\w*.png/,"$1_"+D+".png");E[E.length-1]=A;B.src=E.join("/")},enableCheckBox:function(A){A.disabled=false},onResponse:function(){}});dojo.provide("noa.command.games.SetupLivescrollerCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SetupLivescrollerCommand",mojo.command.Command,{execute:function(B){dojo.connect($("calloutPanel"),"onmouseout",this,noa.command.games.throttleRemoveCallout);dojo.connect($("gameguide"),"onmouseover",this,noa.command.games.cancelCallout);dojo.connect($("games_region"),"onscroll",this,noa.command.games.cancelCallout);dojo.connect($("dropdownbody"),"onmouseover",this,noa.command.games.cancelCallout);dojo.connect($("gamesGuideSorter"),"onmouseover",this,noa.command.games.cancelCallout);$("box_template").value=$("box_template").value.replace(/!\{/g,"${");$("callout_templateright").value=$("callout_templateright").value.replace(/!\{/g,"${");$("callout_templateleft").value=$("callout_templateleft").value.replace(/!\{/g,"${");mojo.Model.set("box_template",$("box_template").value.replace(/!\{/g,"${"));mojo.Model.set("callout_templateright",$("callout_templateright").value.replace(/!\{/g,"${"));mojo.Model.set("callout_templateleft",$("callout_templateleft").value.replace(/!\{/g,"${"));mojo.Model.set("gamesRequestCache",Array());mojo.Model.set("gamesRemainderCover","");var A={};A.isActive=false;mojo.Model.set("gamesRequestMarshal",A);noa.command.IE6=false;if(navigator.appVersion.indexOf("MSIE")!=-1){temp=navigator.appVersion.split("MSIE");version=parseFloat(temp[1]);if(version<7){noa.command.IE6=true}}setTimeout('noa.command.games.currentXhr = null; mojo.Model.set("gamesView", mojo.Model.get("gamesView"),1000);')}});noa.command.IE6=false;dojo.provide("noa.command.games.SetupMiniGamesModelCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.SetupMiniGamesModelCommand",mojo.command.Command,{execute:function(A){mojo.Model.set("gamesRequestCache",Array())}});dojo.provide("noa.command.games.ShowCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ShowCommand",mojo.command.Command,{execute:function(A){var J=mojo.queryFirst("#gameguide").accordionObj;try{var C=J.expandedPanel;var O=mojo.queryFirst(".header",C)}catch(G){}var I=A.callerObj.parentNode;var B=A.callerObj;var K=".heightinfo";if(noa.command.IE6==true){K=".ie6_heightinfo"}if(C&&C!=I){var F=mojo.queryFirst(".content",C);var E=new Fx.Styles(F,{duration:200});E.start({"height":1});dojo.removeClass(O,"expand");var M=mojo.queryFirst(".content",I);var L=mojo.queryFirst(".options",M);var D=mojo.queryFirst(K,M).innerHTML+"px";var N=mojo.queryFirst(".options",M).offsetHeight+"px";var H=new Fx.Styles(M,{duration:200});H.start({"height":D});J.expandedPanel=I;dojo.addClass(B,"expand")}else{var F=mojo.queryFirst(".content",I);if(F.offsetHeight==1){var M=mojo.queryFirst(".content",I);var D=mojo.queryFirst(K,M).innerHTML+"px";var N=mojo.queryFirst(".options",M).offsetHeight+"px";var H=new Fx.Styles(M,{duration:200});H.start({"height":D});J.expandedPanel=I;dojo.addClass(B,"expand")}else{var F=mojo.queryFirst(".content",I);var E=new Fx.Styles(F,{duration:200});E.start({"height":1});dojo.removeClass(B,"expand");J.expandedPanel=null}}}});dojo.provide("noa.command.games.ShowComponentCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ShowComponentCommand",mojo.command.Command,{execute:function(B){var A=mojo.queryFirst("#gameguide");A.style.visibility="visible"}});dojo.provide("noa.command.games.ThrottleViewUpdateCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.ThrottleViewUpdateCommand",mojo.command.Command,{execute:function(D){var B=$("games_region");var A=B.scrollTop;if(Math.abs(noa.command.games.lastScroll-A)>B.offsetHeight){mojo.Model.get("gamesRequestMarshal").isActive=false;noa.command.games.movedUpLast=true;clearTimeout(noa.command.games.viewThrottle);var C=this;noa.command.games.viewThrottle=setTimeout(function(){C.conditionPass()},500)}},conditionPass:function(B){var A=$("games_region");noa.command.games.lastScroll=A.scrollTop}});noa.command.games.viewThrottle=null;noa.command.games.lastScroll=-1000;dojo.provide("noa.command.games.UpdateContainerPositionCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.UpdateContainerPositionCommand",mojo.command.Command,{execute:function(C){var B=noa.command.games.getCoords($("games_region_placeholder"));var A=$("games_region");A.style.top=B.y+"px";A.style.left=B.x+"px"}});dojo.provide("noa.command.games.minidatapanel.SetupMiniDataPanelCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.games.minidatapanel.SetupMiniDataPanelCommand",mojo.command.Command,{execute:function(E){$("callout_templateright").value=$("callout_templateright").value.replace(/!\{/g,"${");$("callout_templateleft").value=$("callout_templateleft").value.replace(/!\{/g,"${");$$("#calloutPanel").addEvent("mouseout",function(){$("calloutPanel").style.display="none"});mojo.Model.set("callout_templateleft",$("callout_templateleft").value.replace(/!\{/g,"${"));mojo.Model.set("callout_templateright",$("callout_templateright").value.replace(/!\{/g,"${"));var B=E.contextObj;var D=B.getElementsByTagName("li");var C="";for(var A=0;A<D.length;A++){noa.command.games.minidatapanel.indexList[A]=D[A].id.replace("game_","");if(A>0){C+=","}C+=D[A].id.replace("game_","");dojo.connect(D[A],"onmouseover",function(){noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleDataPanel(this)});dojo.connect(D[A],"onmouseout",function(){clearTimeout(noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleObj)})}C=C.split(",");myd={};myd.id=C;mojo.Model.set("miniPanel/gameData",C);mojo.Model.set("miniPanel/gameDetailData",{});noa.command.games.currentDataXhr=noa.service.Locator.getInstance().getService("getGameSpecifics").invoke(myd,this)},onResponse:function(A){data={};data.list=A.game;for(i=0;i<data.list.length;i++){if((data.list[i].system=="Wii")||(data.list[i].system=="DS")){}else{data.list[i].system="DS"}}mojo.Model.set("miniPanel/gameDetailData",data)},onError:function(A){}});noa.command.games.minidatapanel.indexList=Array();noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleObj=null;noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleDataPanel=function(C){var B=C.id.replace("game_","");var A=mojo.Model.get("miniPanel/gameDetailData");if(A.list){clearTimeout(noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleObj);noa.command.games.minidatapanel.SetupMiniDataPanelCommand.throttleObj=setTimeout("noa.command.games.minidatapanel.SetupMiniDataPanelCommand.showPanel('"+B+"')",500)}};noa.command.games.minidatapanel.SetupMiniDataPanelCommand.showPanel=function(G){var M=mojo.Model.get("miniPanel/gameDetailData");for(F=0;F<M.list.length;F++){if(M.list[F].id==G){var C=0;var N=noa.command.games;var B=$("calloutPanel");B.style.top="300px";B.style.left="300px";B.style.display="block";B.style.visibility="hidden";B.innerHTML="";var D=N.windowRect();var K=$("img_"+G);var H=N.getCoords(K);var J={};J.list=Array(1);J.list[0]=M.list[F];var I=50;var A=0;for(var F=0;F<noa.command.games.minidatapanel.indexList.length;F++){if(noa.command.games.minidatapanel.indexList[F]==G){A=F}}if($("panel_"+G)){var L=$("panel_"+G).innerHTML.toUpperCase();if(L=="LEFT"){B.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateleft")).process(J)}else{B.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateright")).process(J)}}else{if((A+1)<=(M.list.length/2)){B.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateleft")).process(J)}else{B.innerHTML=TrimPath.parseTemplate(mojo.Model.get("callout_templateright")).process(J)}}var E=N.getCoords($("_i_"+G));B.style.top=300-(E.y-H.y)+"px";B.style.left=300-(E.x-H.x)+"px";B.style.visibility="visible";break}}};noa.command.games.getCoords=function(B){var C,G;try{var A=B;C=B.offsetWidth;G=B.offsetHeight;for(var E=0,D=0;B!=null;){E+=B.offsetLeft;D+=B.offsetTop;B=B.offsetParent}for(;A!=document.body;){E+=B.offsetLeft;D+=B.offsetTop;B=B.offsetParent}}catch(F){}return{x:E,y:D,h:G,w:C}};noa.command.games.windowRect=function(){var A,D;if(self.pageYOffset){A=self.pageXOffset;D=self.pageYOffset}else{if(document.documentElement&&document.documentElement.scrollTop){A=document.documentElement.scrollLeft;D=document.documentElement.scrollTop}else{if(document.body){A=document.body.scrollLeft;D=document.body.scrollTop}}}if(window.innerHeight){var C=window.innerWidth;var B=window.innerHeight}else{var C=document.documentElement.clientWidth;var B=document.documentElement.clientHeight}return{width:C,height:B,scrollTop:D,scrollLeft:A}};dojo.provide("noa.command.gameslider.ChangePaginationCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.gameslider.ChangePaginationCommand",mojo.command.Command,{execute:function(A){var I=mojo.Model.get("gameslider/gameList");var D=mojo.Model.get("gameslider/gameListInfo");var E=A.paramsObj;var B=E.pageChange;if(D.drawMiniBoxes==true){D.currentPos+=B;if((D.currentPos)<=0){D.currentPos=0;$("left_arrow").className="left_arrow_on"}else{$("left_arrow").className="left_arrow"}if((D.currentPos)>=D.gameCount-2){D.currentPos=D.gameCount-2;$("right_arrow").className="right_arrow_on"}else{$("right_arrow").className="right_arrow"}if(noa.command.gameslider.slideAnim){noa.command.gameslider.slideAnim.stop()}if(noa.command.gameslider.miniboxAnimT){noa.command.gameslider.miniboxAnimT.stop()}if(noa.command.gameslider.miniboxAnimB){noa.command.gameslider.miniboxAnimB.stop()}var C=new Fx.Transition(Fx.Transitions.Quint,3);noa.command.gameslider.slideAnim=new Fx.Style($("gameSliderData"),"left",{transition:C.easeOut,duration:1000});noa.command.gameslider.slideAnim.start(-(D.boxWidth*D.currentPos));noa.command.gameslider.miniboxAnimT=new Fx.Style($("minibox_top"),"left",{transition:C.easeOut,duration:1000});noa.command.gameslider.miniboxAnimT.start(D.boxPositions[D.currentPos].x);noa.command.gameslider.miniboxAnimB=new Fx.Style($("minibox_bot"),"left",{transition:C.easeOut,duration:1000});noa.command.gameslider.miniboxAnimB.start(D.boxPositions[D.currentPos].x);var J=mojo.query(".minibox",$("gamelist_mini_boxes"));for(var F=0,G=J.length;F<G;F++){if((F<D.currentPos)||(F>D.currentPos+2)){J[F].src="/images/wii/what/accessories/zapper/unfocusbox.gif"}else{J[F].src="/images/wii/what/accessories/zapper/focusbox.gif"}}try{mojo.queryFirst(".hiddenpanelinfo",I[D.currentPos]).innerHTML="LEFT";mojo.queryFirst(".hiddenpanelinfo",I[D.currentPos+1]).innerHTML="RIGHT";mojo.queryFirst(".hiddenpanelinfo",I[D.currentPos+2]).innerHTML="RIGHT"}catch(H){}}}});noa.command.gameslider.slideAnim=null;noa.command.gameslider.miniboxAnimT=null;noa.command.gameslider.miniboxAnimB=null;dojo.provide("noa.command.gameslider.ReDrawMiniBoxesCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.gameslider.ReDrawMiniBoxesCommand",mojo.command.Command,{execute:function(A){var J=mojo.Model.get("gameslider/gameList");var F=mojo.Model.get("gameslider/gameListInfo");var I=480;var H=23+3;F.boxPositions=Array();var B=H*F.gameCount;var C=Math.round((I-B)/2);if(F.drawMiniBoxes==true){var E="";for(var G=0;G<F.gameCount+1;G++){var D="focusbox.gif";if((G)>=(F.currentPos+3)){D="unfocusbox.gif"}E+='<img src="/images/wii/what/accessories/zapper/'+D+'" class="minibox" style="top:18px; left: '+(C+(G*H))+'px;">';F.boxPositions[G]={x:0,y:0};F.boxPositions[G].x=(C+(G*H));F.boxPositions[G].y=18}E+='<img id="minibox_top" src="/images/wii/what/accessories/zapper/top_focus.gif" class="box_top_focus" style="top:4px; left: '+F.boxPositions[F.currentPos].x+'px;">';E+='<img id="minibox_bot" src="/images/wii/what/accessories/zapper/bot_focus.gif" class="box_bot_focus" style="top:50px; left: '+F.boxPositions[F.currentPos].x+'px;">';$("gamelist_mini_boxes").innerHTML=E;mojo.Model.set("gameslider/gameListInfo",F)}}});dojo.provide("noa.command.gameslider.SetupSliderCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.gameslider.SetupSliderCommand",mojo.command.Command,{execute:function(D){var A=mojo.query("li",D.contextObj);var B={};B.gameCount=A.length-1;B.containerWidth=A.length*134;B.currentPos=0;B.boxWidth=132;$("gameSliderData").style.width=B.containerWidth+5+"px";var C=$("gamelist_mini_boxes");$("left_arrow").className="left_arrow_on";if(B.gameCount>17){C.innerHTML="Use the arrows to scroll the game list.";C.style.marginTop="20px";B.drawMiniBoxes=false}else{if(B.gameCount<=3){C.innerHTML="";C.style.marginTop="20px";B.drawMiniBoxes=false;$("left_arrow").setStyle("visibility","hidden");$("right_arrow").setStyle("visibility","hidden")}else{B.drawMiniBoxes=true}}mojo.queryFirst(".hiddenpanelinfo",A[0]).innerHTML="LEFT";mojo.queryFirst(".hiddenpanelinfo",A[1]).innerHTML="RIGHT";mojo.queryFirst(".hiddenpanelinfo",A[2]).innerHTML="RIGHT";mojo.Model.set("gameslider/gameList",A);mojo.Model.set("gameslider/gameListInfo",B)},onResponse:function(){}});dojo.provide("noa.command.glow.AnimateGlowBehavior");dojo.require("mojo.command.Command");dojo.declare("noa.command.glow.AnimateGlowBehavior",mojo.command.Command,{execute:function(A){var N=17;var F=28;try{var E=new Event(A.getEvent())}catch(J){var E={target:A.getEvent().target,type:null}}var K=$(A.callerObj)||E.target;var L=A.paramsObj.transition;var B=A.contextObj.glowElement;if(mojo.Model.get("/glow").active_item==K&&(E.type=="mouseover"||E.type=="mouseout")){return }if(mojo.Model.contains("/glow/animationQueue/currentAnimation")&&L=="in"){mojo.Model.get("/glow/animationQueue/currentAnimation").stop()}var I=function(S,Q){if(S=="in"){var R=Q.getCoordinates();B.setStyles({top:R.top+R.height-$(A.contextObj).getCoordinates().top,width:R.width+(N*2),left:R.left-N-$(A.contextObj).getCoordinates().left});B.getElement("div.left").setStyle("width",R.width+(N*2)-49);B.getElement("div.right").setStyle("margin-left",R.width+(N*2)-49)}var O=new Fx.Style(B,"height",{duration:(S=="in"?280:100),transition:(S=="in"?Fx.Transitions.Back.easeOut:Fx.Transitions.linear)});var P=O.start(S=="in"?F:0);mojo.Model.set("/glow/animationQueue/currentAnimation",P);return P};if(!mojo.Model.contains("/glow/animationQueue")){mojo.Model.set("/glow/animationQueue",[])}var G=mojo.Model.get("/glow/animationQueue");var M=new Array();for(var D=0,H=G.length;D<H;D++){if(G[D].transition=="out"){M.push(G[D]);break}}if(B.getSize().size.y>0){var C=I.pass(["out"]);C.transition="out";M.push(C)}var C=I.pass([L,K]);C.transition=L;M.push(C);if(A.paramsObj.transition=="out"&&mojo.Model.get("/glow").active_item){var C=I.pass(["in",mojo.Model.get("/glow").active_item]);C.transition="in";M.push(C)}mojo.Model.set("/glow/animationQueue",M)}});dojo.provide("noa.command.glow.InitializeGlowBehavior");dojo.require("mojo.command.Command");dojo.declare("noa.command.glow.InitializeGlowBehavior",mojo.command.Command,{execute:function(G){var E=G.paramsObj.navElement;var D=new Element("div",{"class":"left"});var C=new Element("div",{"class":"right"});var B=new Element("div",{"class":"glow"});D.injectInside(B);C.injectAfter(D);B.injectAfter(E);G.contextObj.glowElement=B;var F=$(E).getElements("li.major a");var A=F.filter(function(H){if(H.getStyle("text-decoration")=="underline"){return H}});A=A.length>0?A[0]:null;mojo.Model.set("/glow",{glowElement:B,active_item:A});if(A){mojo.Messaging.publish("/glow/turn/on",{target:A})}}});dojo.provide("noa.command.iwata.SetupIwataCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.iwata.SetupIwataCommand",mojo.command.Command,{execute:function(S){if(!S.ignoreSafariDetect&&$$("html.dj_safari").length!=0){S.ignoreSafariDetect=true;this.execute.delay(1,this,S);return }var F=mojo.queryFirst("#iwatasidebar");var B;if(B=unescape(mojo.History.getInstance().getHash())){var T=B.split(" ");var L=T[0].replace("section","")}else{var L=F.className.split("_")[1]||"1"}F.expandedID="isb"+L;$$(".sidebarhandle ul").each(function(U){var V=U.getProperty("class").match(/l([^-]*)-sub/)[1];U.expandedHeight=U.offsetHeight;if(V!=L){U.style.height="1px"}});mojo.queryFirst("#sidebar").style.visibility="visible";try{var D=$("next_button_info").innerHTML.split("volume_")[1].replace(".xml","").split("_part_");var M=$("sidebar");var I=M.getElementsByTagName("a");var P=Array();for(J=0,K=I.length;J<K;J++){if(I[J].href.indexOf("iwataasks")>0){var R=I[J].href.split("volume-")[1].replace("#","").split("/part-");P.length++;P[P.length-1]=R;if((R[0]==D[0])&&(R[1]==D[1])&&(I[J].className!="major_handle")){$(I[J]).setStyle("background","#FFFFF0");break}}}var N;while(!$type(N)){var C=$(I[++J]);if(!C){N=false;continue}if(C.hasClass("major_handle")){continue}N=C}var H=$("next_button_link");if(N){H.href=N.href}else{H.remove()}}catch(O){}var A=mojo.query("a",F);for(var J=0,K=A.length;J<K;J++){if(A[J].className.indexOf("major_handle")>-1){}else{var E=mojo.query("td",A[J]);for(var Q=0,K=E.length;Q<K;Q++){E[Q].style.cursor="pointer";var G=A[J].href;dojo.connect(E[Q],"onclick",function(){noa.command.iwata.followParentLink(this)})}}}},checkLinkExists:function(B,A){var C=false;for(i=0,len=B.length;i<len;i++){if((B[i][0]==A[0])&&(B[i][1]==A[1])){C=true}}return C}});noa.command.iwata.followParentLink=function(A){while(A.href==null){A=A.parentNode}window.location.href=A.href};dojo.provide("noa.command.iwata.ShowCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.iwata.ShowCommand",mojo.command.Command,{execute:function(A){A.callerObj=A.callerObj.parentNode;var E=mojo.queryFirst("#iwatasidebar").expandedID;var I=A.callerObj.id;var C=mojo.queryFirst("#"+E);var D=mojo.queryFirst("#"+I);if(E!=I){var H=mojo.queryFirst("ul",C);var J=mojo.queryFirst("a",C);dojo.removeClass(J,"sidebarihover");var F=new Fx.Styles(H,{duration:200});F.start({"height":1});var B=mojo.queryFirst("ul",D);var J=mojo.queryFirst("a",D);dojo.addClass(J,"sidebarihover");B.style.overflowX="hidden";var K=B.expandedHeight+"px";var G=new Fx.Styles(B,{duration:200});G.start({"height":K});mojo.queryFirst("#iwatasidebar").expandedID=D.id}else{var H=mojo.queryFirst("ul",C);if(H.offsetHeight==1){var B=mojo.queryFirst("ul",C);var K=B.expandedHeight+"px";var G=new Fx.Styles(B,{duration:200});G.start({"height":K});mojo.queryFirst("#iwatasidebar").expandedID=D.id;var J=mojo.queryFirst("a",C);dojo.addClass(J,"sidebarihover")}else{var F=new Fx.Styles(H,{duration:200});F.start({"height":1});var J=mojo.queryFirst("a",C);dojo.removeClass(J,"sidebarihover")}}}});dojo.provide("noa.command.metrics.OmnitureInterfaceCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.metrics.OmnitureInterfaceCommand",mojo.command.Command,{constructor:function(){if(!mojo.Model.contains("/metrics/variables")){mojo.Model.set("/metrics/variables",{})}},execute:function(A){if(!A.paramsObj.mode||!this[A.paramsObj.mode]){return }this.storedVariables=mojo.Model.get("/metrics/variables");this[A.paramsObj.mode](A.paramsObj.params||{},A)},track:function(F,G){var D=F["type"]||"pageview";var C=F["clearVariables"]||false;var A=F["options"]||{};var B=F["callerName"]||"anonymousTrigger";if(C){this.clearOmnitureVariables()}this.storeVariables(A);try{if(!s){return }switch(D){case"pageview":this.mapVariablesToOmnitureVariables(this.storedVariables);s.t();break;case"event":this.mapVariablesToOmnitureVariables(this.storedVariables);if(G.callerObj.href){s.tl(G.callerObj,"o")}else{s.tl(G.callerObj,"o",B)}delete this.storedVariables["eventName"];break;default:}}catch(E){}},_printHash:function(A){var B=new Array();$each(A,function(D,C){B.push(C+": "+($type(D)=="string"?"'":"")+D+($type(D)=="string"?"'":""))});return"{ "+B.join(", ")+" }"},storeVariables:function(A){this.storedVariables=$merge(this.storedVariables,A);mojo.Model.set("/metrics/variables",this.storedVariables)},clearOmnitureVariables:function(A){$each(this.storedVariables,function(C,B){this.storedVariables[B]=null}.bind(this));this.mapVariablesToOmnitureVariables(this.storedVariables);mojo.Model.set("/metrics/variables",{})},set:function(A,B){this.storeVariables(A);if(B.paramsObj.mapImmediately){this.mapVariablesToOmnitureVariables(this.storedVariables)}},mapVariablesToOmnitureVariables:function(A){$each(A,function(E,C){switch(C){case"pageName":if(E){s.pageName=E.replace(/ :: /g,"@SEPARATOR@").replace(/:/g,"-").replace(/@SEPARATOR@/g,":").toLowerCase();var D=E.split(" :: ");s.channel=(D[0]+":"+D[1]+":"+D[2]).toLowerCase()}else{if(E!=false){s.pageName=s.channel=null}}break;case"contentArea":s.channel=E;break;case"pageType":s.pageType=E;break;case"productName":s.prop1=$type(E)=="string"?"us:ncom:"+E.toLowerCase():E;break;case"contentType":s.prop2=E;break;case"interactiveToolUsage":s.prop4=E;break;case"toolName":s.eVar6=E;break;case"searchKeyword":var B=$type(E)=="string"?E.toLowerCase():E;s.prop5=B;s.eVar5=B;break;case"productID":s.prop7=E;break;case"articleName":s.prop8=E;break;case"gameTitle":s.prop10=E;break;case"gameCategory":s.prop11=E;break;case"gamePublisher":s.prop12=E;break;case"gameDetailType":s.prop14=E;break;case"videoIdentifier":s.eVar4=E;break;case"fileType":s.eVar3=E;break;case"eventName":switch(E){case"fileDownloaded":s.events="event3";break;case"searchConducted":s.events="event6";break;case"searchResultClicked":s.events="event5";break;case"videoPlayed":s.events="event4";break;case"interactiveToolStart":s.events="event7";break;case"interactiveToolEnd":s.events="event8";break}break;default:break}})}});noa.command.metrics.OmnitureInterfaceCommand.tagVideoAsPlayed=function(A,B){mojo.Messaging.publish("/metrics/videoPlayed",{video_name:B||"",video_id:A||""})};noa.command.metrics.OmnitureInterfaceCommand.tagVideoAsPausing=function(B,D,A,C){mojo.Messaging.publish("/metrics/videoPaused",{tindex:B,len:D,video_name:C||"",video_id:A||""})};noa.command.metrics.OmnitureInterfaceCommand.tagVideoAsPlaying=function(B,D,A,C){mojo.Messaging.publish("/metrics/videoPlaying",{tindex:B,len:D,video_name:C||"",video_id:A||""})};noa.command.metrics.OmnitureInterfaceCommand.tagVideoAsStarted=function(A,B){mojo.Messaging.publish("/metrics/videoStarted",{video_name:B||"",video_id:A||""})};dojo.provide("noa.command.search.BeginSearchCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.BeginSearchCommand",mojo.command.Command,{execute:function(A){if(noa.controller.search.SearchMainController.haltSearch){return }var C=new Date();if((C-noa.command.search.searchThrottle)>1000){noa.command.search.searchThrottle=C;if(A.paramsObj){var D=A.paramsObj.gameGuideParams}if(!D){D={}}var I=mojo.Model.get("/search/keyword")||"";var F=noa.service.Locator.getInstance();var E=F.getService("getSearchResults");var H=mojo.Model.get("search/searchArchiveData");var G=mojo.Model.get("search/searchData");if(H.length==0){E._uri="/search/summary/"+encodeURI(I)}else{E._uri="/search/summary/"+encodeURI(I)+"&start="+noa.command.search.searchPage;noa.command.search.searchPage+=10}var B=100;if((G)&&(G.total)){B=G.total}if((H.length<B)&&((G==null)||(G.searchResults==null)||(G.origResults.length==10)||(H.length==0))){if(noa.command.stoppit==false){noa.command.search.currentXhr=E.invoke(D,this)}}}else{mojo.Messaging.publish.delay(1000,this,"/search/trigger");return }},onResponse:function(D){noa.command.search.IE6=false;if(navigator.appVersion.indexOf("MSIE")!=-1){temp=navigator.appVersion.split("MSIE");version=parseFloat(temp[1]);if(version<7){noa.command.search.IE6=true}}if(D.searchResults){var E=false;D.total=parseInt(D.total);if($type(D.searchResults.result_list)!="array"){D.searchResults.result_list=[D.searchResults.result_list]}D.searchResults=D.searchResults.result_list;D.categories=D.categories.category;D.catResults=Array();var B=mojo.Model.get("search/searchArchiveData");var H=mojo.Model.get("search/categoryTotals");var I=B.length;var A={};A.searchResults=Array();var C=mojo.Model.get("search/searchTotals");for(i=0;i<D.searchResults.length;i++){if(!C[D.searchResults[i].category]){C[D.searchResults[i].category]=0}D.searchResults[i].addok=true;D.searchResults[i].title=D.searchResults[i].title.replace("| Nintendo - ","").replace("Nintendo :: ","").replace("Customer Service | ","").replace("Wii :: ","");D.searchResults[i].id=parseInt(D.searchResults[i].id)+I;if(D.searchResults[i].category=="games"){D.searchResults[i].compel_id=D.searchResults[i].url.split("detail/")[1];isFeatured=false;if(D.features){for(k=0;k<D.features.feature_results.length;k++){if(D.searchResults[i].url==D.features.feature_results[k].url){isFeatured=true}}}if(E==true){isFeatured=false}E=this.addGame(D.searchResults[i].compel_id,isFeatured)}else{for(b=0;b<B.length;b++){if(B[b].url==D.searchResults[i].url){D.searchResults[i].addok=false}}}if(D.searchResults[i].addok){A.searchResults.length++;var G=D.searchResults[i].category;if(!H[G]){H[G]=0}if(G!="games"){H[G]+=1}D.searchResults[i].index=H[G];A.searchResults[A.searchResults.length-1]=D.searchResults[i];if(!C[A.searchResults[A.searchResults.length-1]]){C[A.searchResults[A.searchResults.length-1]]=0}C[A.searchResults[A.searchResults.length-1]]+=1;if(noa.command.search.IE6){}}}D.origResults=D.searchResults;D.searchResults=A.searchResults;var F=D.search_string;if(F.length>11){F=F.substring(0,11)+".."}$("queryString").innerHTML=F;$$("#topstrip h3")[0].setStyle("visibility","visible");$("sch_results").setStyle("display","block");D.catResults=D.categories;mojo.Model.set("search/searchData",D);mojo.Model.set("search/searchTotals",C);mojo.Model.set("search/categoryTotals",H)}else{if((mojo.Model.get("search/gameData").length<=1)&&((mojo.Model.get("search/totalResults")==0)||(!mojo.Model.get("search/totalResults"))||(mojo.Model.get("search/totalResults")=="undefined"))){resultsPane=$("sch_results");resultsPane.innerHTML=TrimPath.parseTemplate(mojo.Model.get("sch_no_results")).process(D);sidebarPane=$("sch_sidebar");sidebarPane.innerHTML=TrimPath.parseTemplate(mojo.Model.get("sch_nores_sidebar_template")).process(D);$("resultCount").innerHTML="0";if(D.search_string){$("queryString").innerHTML=D.search_string;$("resultPaneQS").innerHTML=D.search_string;$$("#topstrip h3")[0].setStyle("visibility","visible");resultsPane.setStyle("display","block")}else{$("queryString").innerHTML="";$("resultPaneQS").innerHTML="";$$("#topstrip h3")[0].setStyle("visibility","hidden");resultsPane.setStyle("display","none")}}}},addGame:function(D,C){var A=mojo.Model.get("search/gameData");var F=mojo.Model.get("search/gameDetailData");var E=true;for(var B=0;B<A.length;B++){if(D==A[B].id){E=false}}for(var B=0;B<F.length;B++){if(D==F[B].id){E=false}}if(E){A.length+=1;A[A.length-1]={};A[A.length-1].id=D;A[A.length-1].isFeatured=C;mojo.Model.set("search/gameData",A)}return E},onError:function(A){}});noa.command.stoppit=false;noa.command.search.searchThrottleTimer=null;noa.command.search.searchThrottle=new Date();noa.command.search.currentXhr=null;noa.command.search.searchPage=10;dojo.provide("noa.command.search.BeginSetupResultsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.BeginSetupResultsCommand",mojo.command.Command,{execute:function(G){var F=mojo.Model.get("search/searchData");var A=mojo.Model.get("search/searchArchiveData");if((A)&&(A.length>0)){}else{if(F.dym){$("DYMk").style.display="block";$("DYMkLink").innerHTML=F.dym;$("DYMk").style.left=310-($("DYMk").offsetWidth)+"px"}else{$("DYMk").style.display="none"}if(!F.total){F.total=0}if(!F.catResults){F.catResults=Array()}var C=$("sch_sidebar");C.innerHTML="";C.innerHTML+=TrimPath.parseTemplate(mojo.Model.get("sch_sidebar_template")).process(F);var B=mojo.Model.get("search/searchCatData");try{for(i=0;i<F.categories.length;i++){B[F.categories[i].name]=0;$("searchTerm_"+F.categories[i].name).innerHTML=F.searchTerm}}catch(E){}mojo.Model.set("search/searchCatData",B);var D={};D.data=F.searchResults;C=$("sch_results");C.innerHTML="";C.innerHTML+=TrimPath.parseTemplate(mojo.Model.get("sch_results_template")).process(F)}this.postrender()},postrender:function(){var C=mojo.Model.get("search/searchData");try{for(i=0;i<C.categories.length;i++){$("results_holder_"+C.categories[i].name).cat_type=C.categories[i].cat_type}}catch(B){}noa.command.search.IE6=false;if(navigator.appVersion.indexOf("MSIE")!=-1){temp=navigator.appVersion.split("MSIE");version=parseFloat(temp[1]);if(version<7){noa.command.search.IE6=true}}if(noa.command.search.IE6==true){var A=mojo.query(".non_ie")}else{var A=mojo.query(".ie6_info")}for(i=0;i<A.length;i++){A[i].style.display="none"}mojo.controller.Controller.updateObservers()},onError:function(A){}});dojo.provide("noa.command.search.CalcViewableRecordsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.CalcViewableRecordsCommand",mojo.command.Command,{execute:function(A){var B=new Date();if((B-noa.command.search.calcViewableThrottle)>300){noa.command.search.calcViewableThrottle=new Date();if(A.paramsObj){if(A.paramsObj.processAll){var N=mojo.query(".search_results_container_games");var C=mojo.query(".search_results_container");C.length++;C[C.length-1]=N[0]}else{var C=Array();C[0]=A.callerObj}}for(t=0;t<C.length;t++){var K=C[t];try{var L=K.id.replace("cat_container_","");var I=K.offsetHeight;var M=K.scrollTop;var H=mojo.query(".sch_rslt",K);$("rescount_"+L).innerHTML="("+H.length+")";$("resultCount_min_"+L).innerHTML=H.length;var O=false;var D=false;var G=0;var F=0;var E=0;for(i=0;i<H.length;i++){if(((E+H[i].offsetHeight-20)>M)&&(!O)){O=true;G=i+1}if((E+20)>parseInt(M+I)&&(!D)){D=true;F=i}E+=parseInt(H[i].offsetHeight)}if(F>H.length){F=H.length}if(F==0){F=H.length}$("min_"+L).innerHTML=G;$("max_"+L).innerHTML=F}catch(J){}}}else{clearTimeout(noa.command.search.throttleObject);noa.command.search.throttleObject=setTimeout('mojo.Model.set("search/searchTrigger", 1)',1000)}},onError:function(A){}});noa.command.search.throttleObject=null;noa.command.search.calcViewableThrottle=new Date();dojo.provide("noa.command.search.CountResultsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.CountResultsCommand",mojo.command.Command,{execute:function(G){if(!mojo.Model.contains("search/searchData")){mojo.Model.set("search/searchData")}var E=mojo.Model.get("search/searchData");var C=mojo.Model.get("search/categoryTotals");var B=0;try{for(var D=0,A=E.categories.length;D<A;D++){if(C[E.categories[D].name]){B+=C[E.categories[D].name];$("resultCount_ie_"+E.categories[D].name).innerHTML=C[E.categories[D].name];$("rescount_"+E.categories[D].name).innerHTML="("+C[E.categories[D].name]+")";$("resultCount_min_"+E.categories[D].name).innerHTML=C[E.categories[D].name]}}mojo.Model.set("search/totalResults",B);$("resultCount").innerHTML=B;$("resultCount2").innerHTML="("+(B)+")"}catch(F){}}});dojo.provide("noa.command.search.DrawSearchResultsCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.DrawSearchResultsCommand",mojo.command.Command,{execute:function(A){var I=mojo.Model.get("search/searchData");var H=mojo.Model.get("search/searchArchiveData");var E=mojo.Model.get("search/searchCatData");var J=mojo.Model.get("search/categoryTotals");if(I.searchResults){for(i=0;i<I.searchResults.length;i++){if(!E[I.searchResults[i].category]){E[I.searchResults[i].category]=0}E[I.searchResults[i].category]++}for(i=0;i<I.catResults.length;i++){if(I.catResults[i].cat_type!="games"){var C={};C.catname=I.catResults[i].name;C.searchResults=I.searchResults;var F=$("cat_container_"+I.catResults[i].name);var D=document.createElement("div");D.id="_db"+H.length+I.catResults[i].name;if(!E[I.catResults[i].name]){E[I.catResults[i].name]=0}if(E[I.catResults[i].name]>0){$("sbi_"+I.catResults[i].name).style.display="block";var B=$("results_holder_"+I.catResults[i].name);if((B.isfocus==false)){}else{B.style.display="block"}}if((I.searchResults)&&(I.searchResults.length>0)){if(I.catResults[i].cat_type=="games"){}else{D.innerHTML+=TrimPath.parseTemplate(mojo.Model.get("text_results_template")).process(C)}F.appendChild(D)}}}mojo.Model.set("search/searchCatData",E);var G=H.concat(I.searchResults);mojo.Model.set("search/searchArchiveData",G);this.oncomplete()}},oncomplete:function(){mojo.controller.Controller.updateObservers()},onError:function(A){}});dojo.provide("noa.command.search.GrabCompelDataCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.GrabCompelDataCommand",mojo.command.Command,{execute:function(E){var C=mojo.Model.get("search/gameData");params={};params.id=Array();for(var D=0;D<C.length;D++){params.id[D]=C[D].id}mojo.Model.set("search/gameData",C);if((params.id.length>0)){var B=noa.service.Locator.getInstance();var A=B.getService("getGameSpecifics");if(!noa.command.search.gameXHR){noa.command.search.gameXHR=A.invoke(params,this)}else{}}else{}},onResponse:function(D){noa.command.search.gameXHR=null;if(D.game){var I=mojo.Model.get("search/gameData");var B=mojo.Model.get("search/gameDetailData");if(D.total==1){var E=D.game;D.game=Array();D.game[0]=E}var H=Array();for(var J=0;J<D.game.length;J++){D.game[J].system=D.game[J].system.replace(/ /g,"")}for(var F=0;F<I.length;F++){for(var J=0;J<D.game.length;J++){if(I[F].id==D.game[J].id){H.length++;H[H.length-1]=D.game[J];break}}}D.game=H;for(var F=0;F<D.game.length;F++){D.game[F].icount=B.length+F;D.game[F].intro=D.game[F].intro.replace(/(<([^>]+)>)/ig,"");if(D.game[F].system.length>0){}else{D.game[F].system="wii"}D.game[F].system=D.game[F].system.toLowerCase();for(var J=0;J<I.length;J++){if(I[J].id==D.game[F].id){D.game[F].isFeatured=I[J].isFeatured;I.splice(J,1);break}}}cT=mojo.Model.get("search/categoryTotals");cT["games"]+=D.game.length;mojo.Model.set("search/categoryTotals",cT);mojo.Model.set("search/gameData",I);B=D.game.concat(B);mojo.Model.set("search/gameDetailData",B);var G=$("cat_container_games");var C=document.createElement("div");C.id="_db"+B.length+"games";$("sbi_games").style.display="block";var A=$("results_holder_games");A.style.display="block";C.innerHTML+=TrimPath.parseTemplate(mojo.Model.get("games_results_template")).process(D);G.appendChild(C);mojo.controller.Controller.updateObservers()}},onError:function(A){}});noa.command.search.gameXHR=null;noa.command.search.gameXHRThrottle=null;dojo.provide("noa.command.search.SelectTabCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.SelectTabCommand",mojo.command.Command,{execute:function(H){var G=$("sch_sidebar");var B=mojo.query(".sch_sb_button",G);for(i=0;i<B.length;i++){var D=mojo.queryFirst("a",B[i]);dojo.removeClass(D,"sch_sb_button_active")}var C=H.callerObj;if(H.paramsObj.sideLink){var F=C.className.split(" ")[1];C=$("sbi_"+F)}else{var F=C.id.replace("sbi_","")}D=mojo.queryFirst("a",C);dojo.addClass(D,"sch_sb_button_active");if(F){G=$("sch_results");B=mojo.query(".sresclass",G);for(i=0;i<B.length;i++){if(B[i].id==("results_holder_"+F)){if(B[i].cat_type=="games"){var E=mojo.queryFirst(".search_results_container_games",B[i]);dojo.addClass(E,"zoomzone_games")}else{var E=mojo.queryFirst(".search_results_container",B[i]);dojo.addClass(E,"zoomzone")}B[i].style.display="block";B[i].isfocus=true}else{if(B[i].cat_type=="games"){var E=mojo.queryFirst(".search_results_container_games",B[i]);dojo.removeClass(E,"zoomzone_games")}else{var E=mojo.queryFirst(".search_results_container",B[i]);dojo.removeClass(E,"zoomzone")}B[i].style.display="none";B[i].isfocus=false}}}else{G=$("sch_results");B=mojo.query(".sresclass",G);var A=mojo.Model.get("search/searchCatData");for(i=0;i<B.length;i++){if(A[B[i].id.replace("results_holder_","")]>0){if(B[i].cat_type=="games"){var E=mojo.queryFirst(".search_results_container_games",B[i]);dojo.removeClass(E,"zoomzone_games")}else{var E=mojo.queryFirst(".search_results_container",B[i]);dojo.removeClass(E,"zoomzone")}B[i].style.display="block";B[i].isfocus=false}}}}});dojo.provide("noa.command.search.SetupSearchCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.search.SetupSearchCommand",mojo.command.Command,{execute:function(B){if(noa.controller.search.SearchMainController.haltSearch){return }noa.command.search.searchPage=10;mojo.Model.set("search/totalResults",0);if(!mojo.Model.contains("search/searchCatData")){mojo.Model.set("search/searchCatData",Array())}mojo.Model.set("search/searchArchiveData",Array());if(!mojo.Model.contains("search/gameData")){mojo.Model.set("search/gameData",Array())}mojo.Model.set("search/gameDetailData",Array());if(!mojo.Model.contains("search/searchTrigger")){mojo.Model.set("search/searchTrigger",null)}mojo.Model.set("search/searchTotals",Array());mojo.Model.set("search/categoryTotals",Array());if(noa.command.search.currentXhr){noa.command.search.currentXhr.ioArgs.xhr.abort();noa.command.search.currentXhr=null}var A=$$("#textb_container input")[0];if(B.paramsObj&&B.paramsObj.useDidYouMeanText){A.setProperty("value",$("DYMkLink").getText())}mojo.Model.set("/search/keyword",A.getValue().clean().replace(/ /g,"+"));mojo.Model.set("sch_no_results",$("sch_no_results").value.replace(/!\{/g,"${"));mojo.Model.set("sch_sidebar_template",$("sch_sidebar_template").value.replace(/!\{/g,"${"));mojo.Model.set("sch_results_template",$("sch_results_template").value.replace(/!\{/g,"${"));mojo.Model.set("text_results_template",$("text_results_template").value.replace(/!\{/g,"${"));mojo.Model.set("games_results_template",$("games_results_template").value.replace(/!\{/g,"${"));mojo.Model.set("sch_nores_sidebar_template",$("sch_nores_sidebar_template").value.replace(/!\{/g,"${"))},onError:function(A){}});dojo.provide("noa.command.zapper.AssembleZapperCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.zapper.AssembleZapperCommand",mojo.command.Command,{execute:function(G){var E=new Fx.Transition(Fx.Transitions.linear,3);if(noa.command.zapper.animationState=="APART"){noa.command.zapper.textAnim=new Fx.Style($("zapper_dis_text"),"opacity",{transition:E.easeOut,duration:500});noa.command.zapper.textAnim.start(0);var B=new Fx.Style($("zapper_dis_toys"),"opacity",{onComplete:function(){noa.command.zapper.swapFixedforFluid()},transition:E.easeOut,duration:800});B.start(0);$("zapper_complete").setStyles({opacity:0.001});$("zapper_nunchuk").setStyles({opacity:0.001});$("zapper_wiimote").setStyles({opacity:0.001});$("anim_bdrop").setStyles({opacity:0.001});$("anim_bdrop").style.display="block";var C=new Fx.Style($("anim_bdrop"),"opacity",{transition:E.easeOut,duration:500});C.start(0.75);var A=new Fx.Style($("zapper_complete"),"opacity",{transition:E.easeOut,duration:800});A.start(1);var F=new Fx.Style($("zapper_nunchuk"),"opacity",{transition:E.easeOut,duration:800});F.start(1);var D=new Fx.Style($("zapper_wiimote"),"opacity",{transition:E.easeOut,duration:800});D.start(1);$("assemble_button").className="assemble assemble_on";$("disassemble_button").className="disassemble disassemble_off"}}});noa.command.zapper.animationState="APART";noa.command.zapper.textAnim=null;noa.command.zapper.zoomPosition={x:35,y:125};noa.command.zapper.swapFixedforFluid=function(){var B=new Fx.Styles($("zapper_complete"),{duration:700,transition:Fx.Transitions.Back.easeInOut});B.start({"top":[96,noa.command.zapper.zoomPosition.y],"left":[108,noa.command.zapper.zoomPosition.x],"width":[390,585],"height":[166,249]});var C=new Fx.Styles($("zapper_nunchuk"),{duration:700,transition:Fx.Transitions.Back.easeInOut});C.start({"top":[27,15],"left":[420,480],"width":[99,150],"height":[113,170]});var A=new Fx.Styles($("zapper_wiimote"),{duration:700,transition:Fx.Transitions.Back.easeInOut,onComplete:function(){noa.command.zapper.setupCombineAnim()}});A.start({"top":[19,20],"left":[114,80],"width":[200,300],"height":[50,75]});setTimeout(function(){noa.command.zapper.swapLoForHi()},200)};noa.command.zapper.swapLoForHi=function(){$("zapper_complete").src="/images/wii/what/accessories/zapper/anim/zapper_complete_big.gif";$("zapper_nunchuk").src="/images/wii/what/accessories/zapper/anim/nunchuk_big.gif";$("zapper_wiimote").src="/images/wii/what/accessories/zapper/anim/wiimote_big.gif"};noa.command.zapper.nunchuk={};noa.command.zapper.wiimote={};noa.command.zapper.zapper={};noa.command.zapper.setupCombineAnim=function(){$("zapper_complete").style.display="none";$("zapper_backg").style.top=$("zapper_complete").style.top;$("zapper_backg").style.left=$("zapper_complete").style.left;$("zapper_forg").style.top=$("zapper_complete").style.top;$("zapper_forg").style.left=$("zapper_complete").style.left;$("zapper_forg").style.display="block";$("zapper_backg").style.display="block";$("zapper_forg").style.display="block";var D={};var A={};var E={};D.x=parseInt($("zapper_nunchuk").style.left.replace("px",""));D.y=parseInt($("zapper_nunchuk").style.top.replace("px",""));E.x=parseInt($("zapper_complete").style.left.replace("px",""));E.y=parseInt($("zapper_complete").style.top.replace("px",""));A.x=parseInt($("zapper_wiimote").style.left.replace("px",""));A.y=parseInt($("zapper_wiimote").style.top.replace("px",""));noa.command.zapper.nunchuk=D;noa.command.zapper.wiimote=A;noa.command.zapper.zapper=E;var C=new Fx.Styles($("zapper_nunchuk"),{duration:700,transition:Fx.Transitions.Back.easeIn,onComplete:function(){noa.command.zapper.swapPiecesforSingle()}});C.start({"top":[D.y,noa.command.zapper.zoomPosition.y+3],"left":[D.x,noa.command.zapper.zoomPosition.x+421]});var B=new Fx.Styles($("zapper_wiimote"),{duration:700,transition:Fx.Transitions.Back.easeIn});var G=noa.command.zapper.zoomPosition.x+17;var F=noa.command.zapper.zoomPosition.y-5;B.start({"top":[A.y,F],"left":[A.x,G]})};noa.command.zapper.swapPiecesforSingle=function(){var B={};B.x=parseInt($("zapper_complete").style.left.replace("px",""));B.y=parseInt($("zapper_complete").style.top.replace("px",""));var D=B.y-10;var E=B.x+1;$("zapper_together_big").style.visibility="visible";$("zapper_together_big").style.display="block";$("zapper_together_big").style.top=D+"px";$("zapper_together_big").style.left=E+"px";$("zapper_forg").style.display="none";$("zapper_backg").style.display="none";$("zapper_wiimote").style.display="none";$("zapper_nunchuk").style.display="none";var A=new Fx.Styles($("zapper_together_big"),{duration:500,transition:Fx.Transitions.Back.easeIn,onComplete:function(){noa.command.zapper.showTogetherDecorations()}});A.start({"top":[D,60],"left":[E,80],"width":[585,440],"height":[259,195]});var C=new Fx.Style($("anim_bdrop"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:1200});C.start(0);setTimeout(function(){$("zapper_together_big").src="/images/wii/what/accessories/zapper/anim/zapper_together_small.gif"},250)};noa.command.zapper.showTogetherDecorations=function(){var A={};A.x=parseInt($("zapper_together_big").style.left.replace("px",""));A.y=parseInt($("zapper_together_big").style.top.replace("px",""));$("zapper_together_decorations").style.top=A.y-30+"px";$("zapper_together_decorations").style.left=A.x+"px";$("zapper_together_decorations").setStyles({opacity:0.001});var B=new Fx.Style($("zapper_together_decorations"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:1200});B.start(1);noa.command.zapper.animationState="TOGETHER"};dojo.provide("noa.command.zapper.BeginZapperVideoAnimCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.zapper.BeginZapperVideoAnimCommand",mojo.command.Command,{execute:function(A){vinfo=mojo.Messaging.getTopic("/metrics/videoPlaying").getMessage();noa.command.zapper.timeIndex=new Date();if(vinfo.video_id=="shooting_zapper_video"){noa.command.zapper.timerArray[0]=setTimeout("noa.command.zapper.showAnimFrame('arrow1', 500)",150);noa.command.zapper.timerArray[1]=setTimeout("noa.command.zapper.showAnimFrame('arrow1', 500)",2800);noa.command.zapper.timerArray[2]=setTimeout("noa.command.zapper.showAnimFrame('arrow1', 500)",6000);noa.command.zapper.timerArray[3]=setTimeout("noa.command.zapper.showAnimFrame('arrow2', 500)",1000);noa.command.zapper.timerArray[4]=setTimeout("noa.command.zapper.showAnimFrame('arrow2', 500)",3500);noa.command.zapper.timerArray[5]=setTimeout("noa.command.zapper.showAnimFrame('arrow2', 500)",6800);noa.command.zapper.timerArray[6]=setTimeout("noa.command.zapper.showAnimFrame('arrow3', 2000)",1600);noa.command.zapper.timerArray[7]=setTimeout("noa.command.zapper.showAnimFrame('arrow3', 1800)",4700)}if(vinfo.video_id=="moving_zapper_video"){noa.command.zapper.timerArray[0]=setTimeout("noa.command.zapper.showAnimFrame('nunchk1', 1700)",50);noa.command.zapper.timerArray[1]=setTimeout("noa.command.zapper.showAnimFrame('nunchk4', 1700)",1750);noa.command.zapper.timerArray[2]=setTimeout("noa.command.zapper.showAnimFrame('nunchk3', 1700)",4050);noa.command.zapper.timerArray[3]=setTimeout("noa.command.zapper.showAnimFrame('nunchk2', 2000)",5850)}}});noa.command.zapper.showAnimFrame=function(B,A){$(B).style.visibility="visible";setTimeout("$('"+B+"').style.visibility = 'hidden';",A)};noa.command.zapper.timerArray=Array();noa.command.zapper.timeIndex=null;dojo.provide("noa.command.zapper.DisassembleZapperCommand");dojo.require("mojo.command.Command");dojo.declare("noa.command.zapper.DisassembleZapperCommand",mojo.command.Command,{execute:function(D){var C=new Fx.Transition(Fx.Transitions.linear,3);if(noa.command.zapper.animationState=="TOGETHER"){var A=new Fx.Style($("zapper_together_decorations"),"opacity",{onComplete:function(){noa.command.zapper.zoomOutTogetherZapper()},transition:C.easeOut,duration:800});A.start(0);var B=new Fx.Style($("anim_bdrop"),"opacity",{transition:C.easeOut,duration:500});B.start(0.75);$("assemble_button").className="assemble assemble_off";$("disassemble_button").className="disassemble disassemble_on"}}});noa.command.zapper.zoomOutTogetherZapper=function(){var D=$("zapper_together_big");var F=parseInt(D.style.left.replace("px",""));var C=parseInt(D.style.top.replace("px",""));var B=D.offsetWidth;var E=D.offsetHeight;var A=new Fx.Styles(D,{duration:700,transition:Fx.Transitions.Back.easeInOut,onComplete:function(){noa.command.zapper.convertToPieces()}});A.start({"top":[C,noa.command.zapper.zoomPosition.y-10],"left":[F,noa.command.zapper.zoomPosition.x+1],"width":[B,585],"height":[E,259]});setTimeout(function(){$("zapper_together_big").src="/images/wii/what/accessories/zapper/anim/zapper_together_big.gif"},350)};noa.command.zapper.convertToPieces=function(){$("zapper_forg").style.display="block";$("zapper_backg").style.display="block";$("zapper_wiimote").style.display="block";$("zapper_nunchuk").style.display="block";$("zapper_together_big").style.display="none";var D={};var A={};var E={};D.x=parseInt($("zapper_nunchuk").style.left.replace("px",""));D.y=parseInt($("zapper_nunchuk").style.top.replace("px",""));E.x=parseInt($("zapper_complete").style.left.replace("px",""));E.y=parseInt($("zapper_complete").style.top.replace("px",""));A.x=parseInt($("zapper_wiimote").style.left.replace("px",""));A.y=parseInt($("zapper_wiimote").style.top.replace("px",""));var C=new Fx.Styles($("zapper_nunchuk"),{duration:700,transition:Fx.Transitions.Back.easeOut,onComplete:function(){}});C.start({"top":[D.y,noa.command.zapper.nunchuk.y],"left":[D.x,noa.command.zapper.nunchuk.x]});var B=new Fx.Styles($("zapper_wiimote"),{duration:700,transition:Fx.Transitions.Back.easeOut,onComplete:function(){noa.command.zapper.shrinkToTiny()}});var G=noa.command.zapper.zoomPosition.x+17;var F=noa.command.zapper.zoomPosition.y-5;B.start({"top":[A.y,noa.command.zapper.wiimote.y],"left":[A.x,noa.command.zapper.wiimote.x]})};noa.command.zapper.shrinkToTiny=function(){$("zapper_forg").style.display="none";$("zapper_backg").style.display="none";$("zapper_forg").style.display="none";$("zapper_complete").style.display="block";var B=new Fx.Styles($("zapper_complete"),{duration:700,transition:Fx.Transitions.Back.easeIn});B.start({"top":[noa.command.zapper.zoomPosition.y,96],"left":[noa.command.zapper.zoomPosition.x,108],"width":[585,390],"height":[249,166]});var C=new Fx.Styles($("zapper_nunchuk"),{duration:700,transition:Fx.Transitions.Back.easeIn});C.start({"top":[15,27],"left":[480,420],"width":[150,99],"height":[170,113]});var A=new Fx.Styles($("zapper_wiimote"),{duration:700,transition:Fx.Transitions.Back.easeIn,onComplete:function(){noa.command.zapper.restoreDecorations()}});A.start({"top":[20,19],"left":[80,114],"width":[300,200],"height":[75,50]});setTimeout(function(){noa.command.zapper.swapHiForLo()},350);var D=new Fx.Style($("anim_bdrop"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:1200});D.start(0)};noa.command.zapper.swapHiForLo=function(){$("zapper_complete").src="/images/wii/what/accessories/zapper/anim/zapper_complete.gif";$("zapper_nunchuk").src="/images/wii/what/accessories/zapper/anim/nunchuk.gif";$("zapper_wiimote").src="/images/wii/what/accessories/zapper/anim/wiimote.gif"};noa.command.zapper.restoreDecorations=function(){noa.command.zapper.textAnim=new Fx.Style($("zapper_dis_text"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:500});noa.command.zapper.textAnim.start(1);var B=new Fx.Style($("zapper_dis_toys"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:800});B.start(1);var A=new Fx.Style($("zapper_wiimote"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:800});A.start(0);var D=new Fx.Style($("zapper_nunchuk"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:800});D.start(0);var C=new Fx.Style($("zapper_complete"),"opacity",{transition:Fx.Transitions.linear.easeOut,duration:800});C.start(0);noa.command.zapper.animationState="APART"};dojo.provide("noa.controller.DrawerController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.DrawerController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupDrawers");this.addObserver("a.call2action","onclick","OpenDrawer")},addCommands:function(){this.addCommand("SetupDrawers","noa.command.drawers.SetupDrawersCommand");this.addCommand("OpenDrawer","noa.command.drawers.OpenDrawerCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.DropDownController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.DropDownController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupDataSet");this.addObserver("#gamesguide_dropdown","onclick","CloseDropDown");this.addObserver("#gamesguide_dropdown","onclick","CheckOpenDropdown");this.addObserver(mojo.Model.getReference("dropdownvalue"),"onNotify","AddHistoryItem");this.addObserver(mojo.Model.getReference("dropdownvalue"),"onNotify","GetGamesView",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}})},addCommands:function(){this.addCommand("SetupDataSet","noa.command.dropdown.SetupDataSetCommand");this.addCommand("CheckOpenDropdown","noa.command.dropdown.CheckOpenDropdownCommand");this.addCommand("GetGamesView","noa.command.games.GetGamesViewCommand");this.addCommand("AddHistoryItem","noa.command.games.AddHistoryItemCommand");this.addCommand("CloseDropDown","noa.command.dropdown.CloseDropDownCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.ErrorPageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.ErrorPageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Metrics",function(){return{mode:"set",params:{pageType:"errorPage"}}})},addCommands:function(){this.addCommand("Metrics","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.ExternalLinkController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.ExternalLinkController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SendThroughExternalInterstitial",{selector:"a[rel=external]"})},addCommands:function(){this.addCommand("SendThroughExternalInterstitial","noa.behavior.SendThroughExternalInterstitialBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.GameGuideController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.GameGuideController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","InitializeCommand",function(){return{panels:mojo.query(".panel")}});this.addObserver(this,"onInit","InitializeFromHistoryCommand");this.addObserver(this,"onInit","ShowComponentCommand");this.addObserver(this,"onInit","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver(".panel .header","onclick","ShowCommand");this.addObserver(this.getCommand("ShowCommand"),"execute","AddHistoryItemCommand");this.addObserver(".gameguideOption","onchange","ChooseOptionCommand");this.addObserver(".gameguideOption","onchange","AddHistoryItemCommand");this.addObserver(".gameguideOption","onchange","ClearGamesList");this.addObserver(".gameguideOption","onchange","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver(".gameguideOption","onchange","ApplyElipsesCommand",function(){return{lines:2}});this.addObserver(this,"onInit","ApplyElipsesCommand",function(){return{lines:2}});this.addObserver("#clearChoices","onclick","ClearOptionsCommand");this.addObserver("#clearChoices","onclick","AddHistoryItemCommand");this.addObserver("#clearChoices","onclick","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver(this.getCommand("ClearOptionsCommand"),"execute","AddHistoryItemCommand");this.addObserver(this.getCommand("ClearOptionsCommand"),"execute","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver(this.getCommand("SelectAllOptionsCommand"),"onResponse","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver("#keywordSearchButton","onclick","GetGamesViewCommand",function(){return{gameGuideParams:mojo.queryFirst("#gameguide").accordionObj.params}});this.addObserver(this.getCommand("ChooseOptionCommand"),"execute","TagGameguideAsHavingBeenUsed");this.addObserver(noa.command.dropdown,"runDropDownSel","TagGameguideAsHavingBeenUsed");this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Metrics",function(){return{mode:"set",params:{interactiveToolUsage:"gameguide"}}});this.addObserver(mojo.Messaging.getTopic("/games/guide/gameChosen"),"onPublish","Metrics",function(){if(mojo.Model.contains("/games/guide/used")&&mojo.Model.get("/games/guide/used")==true){return{mode:"track",params:{type:"event",clearVariables:true,options:{eventName:"interactiveToolEnd",toolName:"gameguide"}}}}});this.addObserver(mojo.Messaging.getTopic("/games/guide/usedonce"),"onPublish","Metrics",function(){return{mode:"track",params:{type:"event",clearVariables:true,options:{eventName:"interactiveToolStart",toolName:"gameguide"}}}})},addCommands:function(){this.addCommand("InitializeCommand","noa.command.games.InitializeCommand");this.addCommand("ShowCommand","noa.command.games.ShowCommand");this.addCommand("ShowComponentCommand","noa.command.games.ShowComponentCommand");this.addCommand("ChooseOptionCommand","noa.command.games.ChooseOptionCommand");this.addCommand("ClearOptionsCommand","noa.command.games.ClearOptionsCommand");this.addCommand("GetGamesViewCommand","noa.command.games.GetGamesViewCommand");this.addCommand("InitializeFromCookieCommand","noa.command.games.InitializeFromCookieCommand");this.addCommand("AddHistoryItemCommand","noa.command.games.AddHistoryItemCommand");this.addCommand("InitializeFromHistoryCommand","noa.command.games.InitializeFromHistoryCommand");this.addCommand("ApplyElipsesCommand","noa.command.games.ApplyElipsesCommand");this.addCommand("ClearGamesList","noa.command.games.ClearGamesListCommand");this.addCommand("Metrics","noa.command.metrics.OmnitureInterfaceCommand");this.addCommand("TagGameguideAsHavingBeenUsed","noa.behavior.games.TagGameguideAsHavingBeenUsedBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.GamesListController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.GamesListController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupMiniGamesModel");this.addObserver(this,"onInit","SetupLivescroller");this.addObserver(mojo.Model.getReference("gamesView"),"onNotify","SetupMiniGamesModel");this.addObserver(mojo.Model.getReference("gamesView"),"onNotify","GetRelevantData",{renderExisting:true,destroyHTML:true,preserveScroll:false});this.addObserver(this.getCommand("DrawGamesBlock"),"execute","OperatePeakAhead");mojo.Model.set("gameItemWidth",112);mojo.Model.set("gameItemHeight",212);mojo.Model.set("gamesPerRow",6);this.addObserver(mojo.Model.getReference("gamesViewData"),"onNotify","DrawGamesBlock");this.addObserver("#games_region","onscroll","ThrottleViewUpdate");this.addObserver(this.getCommand("ThrottleViewUpdate"),"conditionPass","GetRelevantData");this.addObserver(this.getCommand("OperatePeakAhead"),"conditionPass","GetRelevantData")},addCommands:function(){this.addCommand("GetGamesView","noa.command.games.GetGamesViewCommand");this.addCommand("GetRelevantData","noa.command.games.GetRelevantDataCommand");this.addCommand("DrawGamesBlock","noa.command.games.DrawGamesBlockCommand");this.addCommand("SetupMiniGamesModel","noa.command.games.SetupMiniGamesModelCommand");this.addCommand("UpdateContainerPosition","noa.command.games.UpdateContainerPositionCommand");this.addCommand("ThrottleViewUpdate","noa.command.games.ThrottleViewUpdateCommand");this.addCommand("OperatePeakAhead","noa.command.games.OperatePeakAheadCommand");this.addCommand("SetupLivescroller","noa.command.games.SetupLivescrollerCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.IwataSideBarController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.IwataSideBarController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupIwataNav");this.addObserver(".major_handle","onclick","ShowCommand")},addCommands:function(){this.addCommand("SetupIwataNav","noa.command.iwata.SetupIwataCommand");this.addCommand("ShowCommand","noa.command.iwata.ShowCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.MiniDataPanelController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.MiniDataPanelController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupDataPanel")},addCommands:function(){this.addCommand("SetupDataPanel","noa.command.games.minidatapanel.SetupMiniDataPanelCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.PagePromotionController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.PagePromotionController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","BindToAnchor")},addCommands:function(){this.addCommand("BindToAnchor","noa.command.BindToAnchorBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.PopUpController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.PopUpController",mojo.controller.Controller,{addObservers:function(){this.addObserver("a[rel~=popup]","onclick","PopUp");this.addObserver("a[rel~=popup]","onclick","PreventDefaultEvent")},addCommands:function(){this.addCommand("PopUp","noa.command.PopUpCommand");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior");this.addCommand("InjectPopupSizeIntoURL","noa.behavior.InjectPopupSizeIntoURLBehavior")},addIntercepts:function(){this.addIntercept("around","PopUp","InjectPopupSizeIntoURL","execute")}});dojo.provide("noa.controller.VCController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.VCController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupVCComponent");this.addObserver(this,"onInit","GetVCTitles");this.addObserver(mojo.Model.getReference("VCGames"),"onNotify","GetCurrentPage",{pageNumber:0});this.addObserver(mojo.query(".sorter"),"onclick","SetSort",{});this.addObserver(this.getCommand("SetSort"),"execute","GetVCTitles")},addCommands:function(){this.addCommand("SetupVCComponent","noa.command.VC.SetupVCComponentCommand");this.addCommand("GetVCTitles","noa.command.VC.GetVCTitlesCommand");this.addCommand("GetCurrentPage","noa.command.VC.GetCurrentPageCommand");this.addCommand("SetSort","noa.command.VC.SetSortCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.VideoAutoEmbedController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.VideoAutoEmbedController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","EmbedFlash",function(){var A=mojo.queryFirst("a.videoLink");var B=function(E){var D=E.className.split(" ");var C;D.forEach(function(G){var F;if(F=G.match(/videoID_(.*)/)){C=F[1]}},this);return C?C:""};if(!A){A=mojo.queryFirst("a.videoLink")}return{swf_path:"/video/videoplayer_noa.swf",width:this.extractParameterFromStyles(this.getContextElement(),"w")||300,height:this.extractParameterFromStyles(this.getContextElement(),"h")||260,min_version:7,background_color:"#FDFDFD",variables:[{property:"autoplay",value:this.extractParameterFromStyles(this.getContextElement(),"autoplay")=="true"?"true":"false"},{property:"video_path",value:A?A.href:""},{property:"video_name",value:A?A.title:""},{property:"id",value:A?B(A):""},{property:"theme_color_timeline",value:"#353535"},{property:"theme_color_played",value:this.extractParameterFromStyles(this.getContextElement(),"platform")=="ds"?"#D13636":"#34BEED"},{property:"theme_color_loaded",value:this.extractParameterFromStyles(this.getContextElement(),"platform")=="ds"?"#5E1919":"#1B5469"}],parameters:[{property:"scale",value:"noscale"},{property:"salign",value:"lt"}],target_id:"videoArea"}}.bind(this))},addCommands:function(){this.addCommand("EmbedFlash","noa.behavior.EmbedFlashBehavior");this.addCommand("SetVideoTitle","noa.behavior.SetVideoTitleBehavior");this.addCommand("UpdateVideoGroupLinks","noa.behavior.UpdateVideoGroupLinksBehavior");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior")},addIntercepts:function(){},extractParameterFromStyles:function(C,A){var B=C.className.split(" ");var E=[null,null];var D;B.forEach(function(F){E=F.split("_");if(E.length==2&&E[0]==A){D=E[1]}});return D||false}});dojo.provide("noa.controller.VideoMultiEmbedController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.VideoMultiEmbedController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","EmbedFlash")},addCommands:function(){this.addCommand("EmbedFlash","noa.behavior.EmbedMultiFlashBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.gameSliderController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.gameSliderController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","SetupSlider");this.addObserver(this,"onInit","ReDrawMiniBoxes");this.addObserver("#left_arrow","onclick","ChangePagination",function(){return{pageChange:-3}});this.addObserver("#right_arrow","onclick","ChangePagination",function(){return{pageChange:3}})},addCommands:function(){this.addCommand("SetupSlider","noa.command.gameslider.SetupSliderCommand");this.addCommand("ReDrawMiniBoxes","noa.command.gameslider.ReDrawMiniBoxesCommand");this.addCommand("ChangePagination","noa.command.gameslider.ChangePaginationCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.metrics.MetricsController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.metrics.MetricsController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.controller.Map.getInstance(),"onComplete","Track",function(){return{mode:"track",params:{type:"pageview",options:{pageName:function(){if(s.pageName){return false}else{var B=noa.reformatPageTitle(document.title).replace(/^Nintendo ::/,"US :: NCom ::");var A=B.replace(/ :: /g,"@SEPARATOR@").replace(/:/g,"-").replace(/@SEPARATOR@/g,":").toLowerCase();if(A=="us:ncom:not found"){return null}else{return B}}}()}}}});this.addObserver(mojo.Messaging.getTopic("/metrics/videoPlayed"),"onPublish","Track",function(A,C){var B=C.getMessage();return{mode:"track",params:{clearVariables:true,type:"event",callerName:"videoPlayTimer",options:{eventName:"videoPlayed",videoIdentifier:B.video_id+":"+B.video_name}}}})},addCommands:function(){this.addCommand("Track","noa.command.metrics.OmnitureInterfaceCommand");this.addCommand("SendMessage","noa.behavior.SendMessageBehavior")},addIntercepts:function(){this.addIntercept("before","Track","SendMessage",{topic:"/metrics/callForInfo"})}});dojo.provide("noa.controller.navigation.GlowController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.navigation.GlowController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","InitializeGlow",function(){return{navElement:mojo.queryFirst("#primaryNav")}});this.addObserver(mojo.Messaging.getTopic("/glow/turn/on"),"onPublish","AnimateGlow",{transition:"in"});this.addObserver(mojo.Messaging.getTopic("/glow/turn/off"),"onPublish","AnimateGlow",{transition:"out"});this.addObserver(this.getCommand("AnimateGlow"),"execute","AnimationQueue",{queue:"/glow/animationQueue"});this.addObserver("li.major a","onmouseover","AnimateGlow",{transition:"in"});this.addObserver("li.major a","onmouseout","AnimateGlow",{transition:"out"})},addCommands:function(){this.addCommand("MorphStyles","noa.command.animation.MorphStylesBehavior");this.addCommand("InitializeGlow","noa.command.glow.InitializeGlowBehavior");this.addCommand("AnimateGlow","noa.command.glow.AnimateGlowBehavior");this.addCommand("AnimationQueue","noa.command.animation.QueueBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.DSFeaturesPageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.DSFeaturesPageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","ShowOrHideElements",function(){return{elements:mojo.query("#featureDisplay > div"),defaultElement:"introduction",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(this,"onInit","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#featureMenu"),className:mojo.History.getInstance().getHash()!=""?mojo.History.getInstance().getHash():"introduction"}});this.addObserver("#featureMenu a","onclick","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#featureMenu"),className:this.callerObj.href.split("#")[1]}});this.addObserver("#featureMenu a","onclick","RestartAnimatedGIF",function(){return{imageElement:mojo.queryFirst("#"+this.callerObj.href.split("#")[1]+" img")}});this.addObserver("#featureMenu a","onclick","ShowOrHideElements",function(){return{elements:mojo.query("#featureDisplay > div"),highlightId:this.callerObj.href.split("#")[1]}});this.addObserver("#featureMenu a","onclick","PreventDefaultEvent")},addCommands:function(){this.addCommand("AlterClass","noa.behavior.AlterClassBehavior");this.addCommand("RestartAnimatedGIF","noa.behavior.RestartAnimatedGIFBehavior");this.addCommand("ShowOrHideElements","noa.behavior.ShowOrHideElementsBehavior");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.DSSectionController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.DSSectionController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{productName:"DS",contentType:"platform"}})},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.GamesDetailPageController");dojo.require("mojo.controller.Controller");dojo.require("mojo.History");dojo.declare("noa.controller.pageControllers.GamesDetailPageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","ShowOrHideElements",function(){return{prefix:"panel_",elements:mojo.query("#gameDetailsContainer > div"),defaultElement:"overview",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(this,"onInit","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#gameDetailsSubnav"),className:mojo.History.getInstance().getHash()!=""?"nav_"+mojo.History.getInstance().getHash():"nav_overview"}});this.addObserver(mojo.History.getInstance(),"onChange","ShowOrHideElements",function(){return{prefix:"panel_",elements:mojo.query("#gameDetailsContainer > div"),defaultElement:"overview",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(mojo.History.getInstance(),"onChange","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#gameDetailsSubnav"),className:mojo.History.getInstance().getHash()!=""?"nav_"+mojo.History.getInstance().getHash():"nav_overview"}});this.addObserver(this,"onInit","ShowOrHideElements",function(){return{prefix:"fullsize_",elements:mojo.query("#panel_images .lg-image li"),highlightId:mojo.queryFirst("#panel_images .thumbnails .list li")?mojo.queryFirst("#panel_images .thumbnails .list li").id.split("_")[1]:null}});this.addObserver(["#gameDetailsSubnav li.category a",".gameResources a.level1"],"onclick","ShowOrHideElements",function(){return{prefix:"panel_",elements:mojo.query("#gameDetailsContainer > div"),defaultElement:"overview",highlightId:this.callerObj.href.split("#")[1]}});this.addObserver(["#gameDetailsSubnav li.category a",".gameResources a.level1"],"onclick","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#gameDetailsSubnav"),className:"nav_"+this.callerObj.href.split("#")[1]}});this.addObserver("a.box_flip","onclick","ShowOrHideElements",function(){return{prefix:"box_",elements:mojo.query(".links img.box_art"),defaultElement:"front",highlightId:$(mojo.queryFirst("#box_front")).getStyle("display")!="none"?"back":"front"}});this.addObserver("a.box_flip","onclick","PreventDefaultEvent");this.addObserver(".thumbnails .forward","onclick","ListScroll",{containerId:/^panel_/,listClass:".thumbnails .list",direction:"right",distance:615});this.addObserver(".thumbnails .back","onclick","ListScroll",{containerId:/^panel_/,listClass:".thumbnails .list",direction:"left",distance:615});this.addObserver(".thumbnails .forward","onclick","PreventDefaultEvent");this.addObserver(".thumbnails .back","onclick","PreventDefaultEvent");this.addObserver(".thumbnails .list a","onclick","ShowOrHideElements",function(){return{prefix:"fullsize_",elements:mojo.query("#panel_"+this.callerObj.className.replace("Link","s")+" .lg-image li"),highlightId:$(this.callerObj).getParent().id.split("_")[1]}});this.addObserver("#panel_videos .videoLink","onclick","CommunicateWithVideoPlayer",{command:"loadvideo"});this.addObserver("#panel_videos .videoLink","onclick","PreventDefaultEvent");this.addObserver(".gameResources .deepLink","onclick","PreventDefaultEvent");this.addObserver(".gameResources .deepLink","onclick","ShowOrHideElements",function(){return{prefix:"fullsize_",elements:mojo.query("#panel_"+$(this.callerObj).getProperty("class").split(" ")[1]+" .lg-image li"),highlightId:this.callerObj.href.split("#")[1].split("_")[1]}});this.addObserver(".gameResources .deepLink","onclick","ShowOrHideElements",function(){return{prefix:"panel_",elements:mojo.query("#gameDetailsContainer > div"),highlightId:$(this.callerObj).getProperty("class").split(" ")[1].replace("Link","s")}});this.addObserver(".gameResources .videos","onclick","FireEvent",function(){return{element:mojo.queryFirst("#panel_videos #videothumb_"+this.callerObj.href.split("#")[1].split("_")[1]+" a"),theEvent:"onclick"}});this.addObserver(".gameResources .deepLink","onclick","SetHash",function(){return{value:this.callerObj.href.test("#fullsize_")?"images":this.callerObj.href.split("#")[1].split("_")[0]}});this.addObserver("#panel_downloads .gallery a","onclick","Metrics",function(){return{mode:"set",mapImmediately:true,params:{eventName:"fileDownloaded",fileType:$(this.callerObj).getProperty("rel")}}});this.addObserver("#gameDetailsSubnav li.category a","onclick","CommunicateWithVideoPlayer",{command:"pausevideo"});this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Metrics",function(){this.metricsHasRunOnce=true;var A=$((mojo.queryFirst("#mainContentContainer .gameBanner img[alt]")||mojo.queryFirst("#mainContentContainer .gameBanner h3")));return{mode:"set",mapImmediately:true,params:{productName:function(){var D=$$(".systemData td");if(D.length<2){return""}var C=D[1];var B=C?C.getText()+":":"";return(B?B.toLowerCase():"")+(A?A.getProperty("alt")||A.getText():"")}(),pageName:function(){var C=noa.reformatPageTitle(document.title).replace(/^Nintendo ::/,"US :: NCom ::");var B=C+" :: "+(mojo.History.getInstance().getHash()==""?"overview":mojo.History.getInstance().getHash());return B}(),contentType:"game:details",gameDetailType:function(){var B=mojo.History.getInstance().getHash();switch(B){case"features":gameDetailSection="features";break;case"images":gameDetailSection="images";break;case"downloads":gameDetailSection="downloads";break;case"videos":gameDetailSection="videos";break;default:gameDetailSection="home"}if(gameDetailSection){return gameDetailSection}}(),productID:function(){var C=$("mainContentContainer").className.split(" ");var B;C.each(function(E){var D;if(D=E.match(/gameID_(.*)/)){B=D[1]}});return B||""}(),gameTitle:function(){return A?A.getProperty("alt")||A.getText():""}(),gameCategory:function(){var E=$$(".genreData td");if(E.length<2){return""}var C=E[1];var B=C?C.getText():"";var D=B?B.toLowerCase().replace(/^\s*/,"").replace(/,\s*/g,":").replace(/\s\s+/gi,""):"";return D}(),gamePublisher:function(){var D=$$(".publisherData td");if(D.length<2){return""}var B=D[1];var C=B?B.getText():"";return(C?C.toLowerCase():"")}()}}}.bind(this));this.addObserver(mojo.History.getInstance(),"onChange","Metrics",function(){if(this.metricsHasRunOnce){return{mode:"track",params:{type:"pageview",options:{contentType:"game:details",gameDetailType:function(){var A=mojo.History.getInstance().getHash();switch(A){case"features":gameDetailSection="features";break;case"images":gameDetailSection="images";break;case"downloads":gameDetailSection="downloads";break;case"videos":gameDetailSection="videos";break;default:gameDetailSection="home"}if(gameDetailSection){return gameDetailSection}}(),pageName:function(){var B=noa.reformatPageTitle(document.title).replace(/^Nintendo ::/,"US :: NCom ::");var A=B+" :: "+mojo.History.getInstance().getHash();return A}(),productID:function(){var B=$("mainContentContainer").className.split(" ");var A;B.each(function(D){var C;if(C=D.match(/gameID_(.*)/)){A=C[1]}});return A||""}()}}}}}.bind(this))},addCommands:function(){this.addCommand("ShowOrHideElements","noa.behavior.ShowOrHideElementsBehavior");this.addCommand("AlterClass","noa.behavior.AlterClassBehavior");this.addCommand("SetHash","noa.behavior.SetHashBehavior");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior");this.addCommand("ListScroll","noa.command.animation.ListScrollBehavior");this.addCommand("SetHistory","noa.behavior.SetHistoryBehavior");this.addCommand("CommunicateWithVideoPlayer","noa.behavior.CommunicateWithVideoPlayerBehavior");this.addCommand("FireEvent","noa.behavior.FireEventBehavior");this.addCommand("Metrics","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.GamesHomePageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.GamesHomePageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{contentType:"games:home"}})},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.HomePageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.HomePageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{contentType:"site:home"}})},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.VideoPageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.VideoPageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","EmbedFlash",this.embed.pass($(mojo.queryFirst("#minorPromos div.promo"))||$(mojo.queryFirst("#minorPromos li")),this));this.addObserver(this,"onInit","SetVideoTitle",function(){return{theLink:$$("#minorPromos div.promo a.more")[0]}});this.addObserver("#minorPromos a","onclick","UpdateVideoGroupLinks");this.addObserver(["#minorPromos a","#groupSubSelect li a"],"onclick","CommunicateWithVideoPlayer",{command:"loadvideo"});this.addObserver("#minorPromos a","onclick","SetVideoTitle");this.addObserver(["#minorPromos a","#groupSubSelect li a"],"onclick","PreventDefaultEvent")},addCommands:function(){this.addCommand("EmbedFlash","noa.behavior.EmbedFlashBehavior");this.addCommand("CommunicateWithVideoPlayer","noa.behavior.CommunicateWithVideoPlayerBehavior");this.addCommand("SetVideoTitle","noa.behavior.SetVideoTitleBehavior");this.addCommand("UpdateVideoGroupLinks","noa.behavior.UpdateVideoGroupLinksBehavior");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior")},addIntercepts:function(){},embed:function(D){if(!D){return false}var C=$(mojo.queryFirst("a",D));var B=function(G){var F=G.className.split(" ");var E;F.forEach(function(I){var H;if(H=I.match(/videoID_(.*)/)){E=H[1]}},this);return E?E:""};var A={swf_path:"/video/videoplayer_noa.swf",width:this.extractParameterFromStyles($("videoPlayer"),"w")||320,height:this.extractParameterFromStyles($("videoPlayer"),"h")||260,min_version:7,background_color:"#FDFDFD",variables:[{property:"autoplay",value:"false"},{property:"video_path",value:C.getProperty("href")},{property:"video_name",value:C.getProperty("title")||""},{property:"id",value:B(C)}],parameters:[{property:"scale",value:"noscale"},{property:"salign",value:"lt"}],target_id:"videoPlayer"};if(D.hasClass("wii")){A.variables.merge([{property:"theme_color_timeline",value:"#353535"},{property:"theme_color_played",value:"#34BEED"},{property:"theme_color_loaded",value:"#1B5469"}])}else{A.variables.merge([{property:"theme_color_timeline",value:"#353535"},{property:"theme_color_played",value:"#D13636"},{property:"theme_color_loaded",value:"#5E1919"}])}return A},extractParameterFromStyles:function(C,A){var B=C.className.split(" ");var E=[null,null];var D;B.forEach(function(F){E=F.split("_");if(E.length==2&&E[0]==A){D=E[1]}});return D||false}});dojo.provide("noa.controller.pageControllers.VirtualConsoleGamesDetailPageController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.VirtualConsoleGamesDetailPageController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",function(){return{mode:"set",params:{productName:function(){var C=$((mojo.queryFirst("h4.titleData")));var D=$$(".systemData");if(D.length==0){return""}var B=D[0];var A=B?B.getText()+":":"";return(A?A.toLowerCase().replace("system: ",""):"")+(C?C.getText():"")}(),gameTitle:function(){var A=$((mojo.queryFirst("h4.titleData")));return A.getText()}(),gameCategory:function(){var C=$$(".genreData");if(C.length==0){return""}var B=C[0];var A=B?B.getText():"";return(A?A.toLowerCase().replace("genre: ","").replace(/,\s*/g,":"):"")}(),gamePublisher:function(){var C=$$(".publisherData");if(C.length==0){return""}var A=C[0];var B=A?A.getText():"";return(B?B.toLowerCase().replace("publisher: ",""):"")}(),productID:function(){var B=$("mainContentContainer").className.split(" ");var A;B.each(function(D){var C;if(C=D.match(/gameID_(.*)/)){A=C[1]}});return A||""}()}}})},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.WhatsNewIndexController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.WhatsNewIndexController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","FilterWhatsNewResults",function(){return{method:mojo.History.getInstance().getHash()||"all"}});this.addObserver(".filterLink","onclick","FilterWhatsNewResults");this.addObserver(mojo.History.getInstance(),"onChange","FilterWhatsNewResults",function(){return{method:mojo.History.getInstance().getHash()}})},addCommands:function(){this.addCommand("FilterWhatsNewResults","noa.behavior.whatsnew.FilterWhatsNewResultsBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.WhatsNewSectionController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.WhatsNewSectionController",mojo.controller.Controller,{addObservers:function(){var A=document.getElementById("mainPrimary").getElementsByTagName("h3");var B=A[0].firstChild.nodeValue;if(B){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{contentType:"article",articleName:B,productID:function(){var D=$("mainContentContainer").className.split(" ");var C;D.each(function(F){var E;if(E=F.match(/articleID_(.*)/)){C=E[1]}});return C||""}()}})}else{this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{contentType:"article"}})}},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.WiiSectionController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.WiiSectionController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Set",{mode:"set",params:{productName:"Wii",contentType:"wii marketing"}})},addCommands:function(){this.addCommand("Set","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.ZapperHowDoIUseItController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.ZapperHowDoIUseItController",mojo.controller.Controller,{addObservers:function(){this.addObserver(mojo.Messaging.getTopic("/metrics/videoPlaying"),"onPublish","BeginZapperVideoAnim")},addCommands:function(){this.addCommand("BeginZapperVideoAnim","noa.command.zapper.BeginZapperVideoAnimCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.ZapperHowDoesItWorkController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.ZapperHowDoesItWorkController",mojo.controller.Controller,{addObservers:function(){this.addObserver("#assemble_button","onclick","AssembleZapper");this.addObserver("#disassemble_button","onclick","DisassembleZapper")},addCommands:function(){this.addCommand("AssembleZapper","noa.command.zapper.AssembleZapperCommand");this.addCommand("DisassembleZapper","noa.command.zapper.DisassembleZapperCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.pageControllers.miiChannelVideosController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.pageControllers.miiChannelVideosController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","CommunicateWithVideoPlayer",function(){var A=mojo.History.getInstance().getHash()!=""?mojo.History.getInstance().getHash():"link";return{theLink:mojo.queryFirst("#minorPromos a."+A),command:"loadvideo"}});this.addObserver(mojo.History.getInstance(),"onChange","CommunicateWithVideoPlayer",function(){var A=mojo.History.getInstance().getHash()!=""?mojo.History.getInstance().getHash():"link";return{theLink:mojo.queryFirst("#minorPromos a."+A)||mojo.queryFirst("#minorPromos a"),command:"loadvideo"}});this.addObserver(this,"onInit","ShowOrHideElements",function(){return{prefix:"tip_",elements:mojo.query("#tipContainer ul"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(this,"onInit","ShowOrHideElements",function(){return{prefix:"photo_",elements:mojo.query("#photoContainer img"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(this,"onInit","ShowOrHideElements",function(){return{prefix:"title_",elements:mojo.query("#titleContainer h4"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(this,"onInit","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#minorPromos"),className:mojo.History.getInstance().getHash()!=""?mojo.History.getInstance().getHash():"link"}});this.addObserver("#minorPromos a","onclick","convertClassToID",function(){return{callerClass:this.callerObj.className.split(" ")[0]}});this.addObserver(mojo.History.getInstance(),"onChange","ShowOrHideElements",function(){return{prefix:"tip_",elements:mojo.query("#tipContainer ul"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(mojo.History.getInstance(),"onChange","ShowOrHideElements",function(){return{prefix:"photo_",elements:mojo.query("#photoContainer img"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(mojo.History.getInstance(),"onChange","ShowOrHideElements",function(){return{prefix:"title_",elements:mojo.query("#titleContainer h4"),defaultElement:"link",highlightId:mojo.History.getInstance().getHash()}});this.addObserver(mojo.History.getInstance(),"onChange","AlterClass",function(){return{method:"set",element:mojo.queryFirst("#minorPromos"),className:mojo.History.getInstance().getHash()!=""?mojo.History.getInstance().getHash():"link"}})},addCommands:function(){this.addCommand("AlterClass","noa.behavior.AlterClassBehavior");this.addCommand("convertClassToID","noa.behavior.ConvertClassToIDBehavior");this.addCommand("ShowOrHideElements","noa.behavior.ShowOrHideElementsBehavior");this.addCommand("CommunicateWithVideoPlayer","noa.behavior.CommunicateWithVideoPlayerBehavior")},addIntercepts:function(){}});dojo.provide("noa.controller.search.SearchController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.search.SearchController",mojo.controller.Controller,{addObservers:function(){this.addObserver(this,"onInit","UpdateOverlabel",function(){return{label:mojo.queryFirst(".overlabel")}});this.addObserver("#globalSearchKeyword","onfocus","UpdateOverlabel",function(){return{label:mojo.queryFirst(".overlabel"),focusField:true}});this.addObserver("#globalSearchKeyword","onblur","UpdateOverlabel",function(){return{label:mojo.queryFirst(".overlabel")}});this.addObserver(this.getContextElement(),"onsubmit","Metrics",function(){return{mode:"track",params:{clearVariables:true,type:"event",callerName:"globalSearch",options:{eventName:"searchConducted",searchKeyword:$("globalSearchKeyword").getValue()}}}});this.addObserver(this.getContextElement(),"onsubmit","DetectSupportCode");this.addObserver(".overlabel","onclick","UpdateOverlabel",{focusField:true})},addCommands:function(){this.addCommand("UpdateOverlabel","noa.command.UpdateOverlabel");this.addCommand("DetectSupportCode","noa.behavior.search.DetectSupportCodeBehavior");this.addCommand("Metrics","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.controller.search.SearchMainController");dojo.require("mojo.controller.Controller");dojo.declare("noa.controller.search.SearchMainController",mojo.controller.Controller,{addObservers:function(){noa.command.search.IE6=false;if(navigator.appVersion.indexOf("MSIE")!=-1){temp=navigator.appVersion.split("MSIE");version=parseFloat(temp[1]);if(version<7){noa.command.search.IE6=true}}this.addObserver(this,"onInit","DetectSupportCode");this.addObserver(this,"onInit","SetupSearch");this.addObserver("#search_again_button","onclick","DetectSupportCode");this.addObserver("#search_again_button","onclick","SetupSearch");this.addObserver("#sch_frm","onsubmit","DetectSupportCode");this.addObserver("#sch_frm","onsubmit","SetupSearch");this.addObserver("#dymkLink","onclick","DetectSupportCode");this.addObserver("#dymkLink","onclick","SetupSearch",{useDidYouMeanText:true});this.addObserver("#dymkLink","onclick","PreventDefaultEvent");this.addObserver(mojo.Model.getReference("/search/keyword"),"onNotify","InitiateSearch");this.addObserver(mojo.Messaging.getTopic("/search/trigger"),"onPublish","InitiateSearch");this.addObserver(mojo.Model.getReference("search/searchData"),"onNotify","SetupResults");this.addObserver(this.getCommand("ClearOptionsCommand"),"execute","AddHistoryItemCommand");this.addObserver(this.getCommand("SetupResults"),"postrender","DrawSearchResults");this.addObserver(this.getCommand("DrawSearchResults"),"oncomplete","InitiateSearch");this.addObserver(".sch_sb_button","onclick","SelectTab",{});this.addObserver(".sideLink","onclick","SelectTab",{sideLink:true});if(noa.command.search.IE6==false){this.addObserver(".search_results_container","onscroll","CalcViewable",{});this.addObserver(".search_results_container_games","onscroll","CalcViewable",{});this.addObserver(this.getCommand("DrawSearchResults"),"execute","CalcViewable",{processAll:true});this.addObserver(this.getCommand("GrabCompelData"),"onResponse","CalcViewable",{processAll:true});this.addObserver(this.getCommand("GrabCompelData"),"onResponse","CountResults",{processAll:true});this.addObserver(this.getCommand("SelectTab"),"execute","CalcViewable",{processAll:true});this.addObserver(mojo.Model.getReference("search/searchTrigger"),"onNotify","CalcViewable",{processAll:true})}this.addObserver(this.getCommand("InitiateSearch"),"onResponse","GrabCompelData");this.addObserver(this.getCommand("DrawSearchResults"),"execute","CountResults");this.addObserver(mojo.Messaging.getTopic("/metrics/callForInfo"),"onPublish","Metrics",function(){return{mode:"track",params:{clearVariables:true,type:"pageView",contentType:"search:results",options:{searchKeyword:$("globalSearchKeyword").getValue()}}}});this.addObserver(".sch_rslt a","onclick","Metrics",function(){return{mode:"track",params:{clearVariables:true,type:"event",callerName:"sch_rslt",options:{eventName:"searchResultClicked",searchKeyword:mojo.Model.get("/search/keyword")||""}}}});this.addObserver(["#search_again_button","#dymkLink"],"onclick","Metrics",function(){return{mode:"track",params:{clearVariables:true,type:"event",callerName:"search_again_button",options:{eventName:"searchConducted",searchKeyword:mojo.Model.get("/search/keyword")||""}}}});this.addObserver("#sch_frm","onsubmit","Metrics",function(){return{mode:"track",params:{clearVariables:true,type:"event",callerName:"search_again_button",options:{eventName:"searchConducted",searchKeyword:mojo.Model.get("/search/keyword")||""}}}})},addCommands:function(){this.addCommand("InitiateSearch","noa.command.search.BeginSearchCommand");this.addCommand("SetupResults","noa.command.search.BeginSetupResultsCommand");this.addCommand("SetupSearch","noa.command.search.SetupSearchCommand");this.addCommand("DrawSearchResults","noa.command.search.DrawSearchResultsCommand");this.addCommand("SelectTab","noa.command.search.SelectTabCommand");this.addCommand("CalcViewable","noa.command.search.CalcViewableRecordsCommand");this.addCommand("GrabCompelData","noa.command.search.GrabCompelDataCommand");this.addCommand("CountResults","noa.command.search.CountResultsCommand");this.addCommand("DetectSupportCode","noa.behavior.search.DetectSupportCodeBehavior");this.addCommand("PreventDefaultEvent","noa.behavior.PreventDefaultEventBehavior");this.addCommand("Metrics","noa.command.metrics.OmnitureInterfaceCommand")},addIntercepts:function(){}});dojo.provide("noa.lib.OmnitureLibrary");s_account=($chk(noa.runmode)&&noa.runmode=="production")?"ncomglobal,ncomprod":"ncomdev";s=s_gi(s_account);s.dynamicAccountSelection=true;s.dynamicAccountList="ncomglobal,ncomsupport=/consumer/";s.dynamicAccountMatch=window.location.pathname;s.charSet="UTF-8";s.trackDownloadLinks=true;s.trackExternalLinks=true;s.trackInlineStats=true;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";s.linkInternalFilters="javascript:,192.168.,nintendo.com";s.linkLeaveQueryString=false;s.linkTrackVars="eVar3,eVar4,eVar5,eVar6,events";s.linkTrackEvents="event8,event7,event6,event5,event4,event3";s.formList="";s.trackFormList=true;s.trackPageName=true;s.useCommerce=false;s.varUsed="prop9";s.eventList="";s.usePlugins=true;function s_doPlugins(A){A.campaign=A.getQueryParam("cid");A.campaign=A.getValOnce(A.campaign,"s_cid",0);A.setupFormAnalysis();A.today=new Date();A.prop13=A.getTimeParting("w","-5",A.today.getFullYear());A.prop13=A.prop13+":"+A.getTimeParting("d","-5",A.today.getFullYear());A.prop13=A.prop13+":"+A.getTimeParting("h","-5",A.today.getFullYear());A.eVar7=A.prop13;A.prop6="us:en";A.supportURL=location.href.toLowerCase();if(A.supportURL.match("/consumer/")&&(A.pageName.match("us:support:")==null||A.channel.match("us:support:")==null)){if(A.supportURL.match("/systems/")){A.supportURL=A.supportURL.substring(A.supportURL.indexOf("/systems/")+9,A.supportURL.length);if(A.supportURL.indexOf("/")==-1){A.supportURL="ds"}else{A.supportURL=A.supportURL.substring(0,A.supportURL.indexOf("/"))}A.channel="us:support:"+A.supportURL+":";if(A.supportURL=="general"||A.supportURL=="other"){A.channel="us:support:systems:general"}if(A.pageName){A.pageName=A.channel+A.pageName}if(A.prop1){A.prop1=A.channel+A.prop1}}else{A.supportURL=A.supportURL.substring(A.supportURL.indexOf("/consumer/")+10,A.supportURL.length);if(A.supportURL.match("wfc/")){if(A.supportURL.match("/wii/")){A.channel="us:support:wii:wfc:"}if(A.supportURL.match("/ds/")){A.channel="us:support:ds:wfc:"}}else{A.supportURL=A.supportURL.substring(0,A.supportURL.indexOf("/"));A.channel="us:support:"+A.supportURL}if(A.supportURL=="routers"){A.channel="us:support:wii routers:"}if(A.pageName){A.pageName=A.channel+A.pageName}if(A.prop1){A.prop1=A.channel+A.prop1}}}if(A.pageName){A.pageName=A.pageName.toLowerCase()}if(A.channel){A.channel=A.channel.toLowerCase()}if(A.prop1){A.prop1=A.prop1.toLowerCase()}}s.doPlugins=s_doPlugins;s.getQueryParam=new Function("p","d","u","var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v");s.p_gpv=new Function("k","u","var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v");s.p_gvf=new Function("t","k","if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''");s.getValOnce=new Function("v","c","e","var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");s.linkHandler=new Function("p","t","var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkName)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkName=l=='[['?'':l;s.linkType=t;return h;}return '';");s.p_gn=new Function("t","h","var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x=t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}return 0;");s.channelExtract=new Function("d","p","u","pv","var s=this,v='';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;u=u+'';li=u.lastIndexOf(d);if(li>0){u=u.substring(0,li);var i,n,a=s.split(u,d),al=a.length;if(al<p){if(pv==1) p=al;else return '';}for(i=0;i<p;i++){n=a[i];v=v+n;}return v}return '';");s.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");s.getTimeParting=new Function("t","z","y","dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay();gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+':'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return timestring}if(t=='d'){return daystring};if(t=='w'){return endstring}}};");s.setupFormAnalysis=new Function("var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s.wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.eventList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('','','','')}");s.sendFormEvent=new Function("t","pn","fn","en","var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");s.faol=new Function("e","var s=s_c_il["+s._in+"],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd.event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.length>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name;tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.elements[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.onmousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toString():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s.wd.onunload;s.wd.onunload=s.fasl;}return r;");s.faos=new Function("e","var s=s_c_il["+s._in+"],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.vu]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):true;");s.fasl=new Function("e","var s=s_c_il["+s._in+"],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPageName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.pathname:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]='Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackVars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars=ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lte=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,',','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s.events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f.vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.usePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;");s.fam=new Function("e","var s=s_c_il["+s._in+"],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLastChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this.form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e.which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOWN'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIMAGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va[1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fakd(e);");s.ee=new Function("e","n","return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");s.fage=new Function("e","a","var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");s.visitorNamespace="nintendo";s.dc=112;var s_code="",s_objectID;function s_gi(un,pg,ss){var d="function s_dr(x,o,n){var i=x.indexOf(o);if(i>=0&&x.split)x=(x.split(o)).join(n);else while(i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o)}return x}w.s_dr=s_dr;function s_d(x) {var t='`^@$#',l='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',d,n=0,b,k,w,i=x.lastIndexOf('~~');if(i>0){d=x.substring(0,i);x=x.substring(i+2);while(d){w=d;i=d.indexOf('~');if(i>0){w=d.substring(0,i);d=d.substring(i+1)}else d='';b=parseInt(n/62);k=n-b*62;k=t.substring(b,b+1)+l.substring(k,k+1);x=s_dr(x,k,w);n++}for(i=0;i<5;i++){w=t.substring(i,i+1);x=s_dr(x,w+' ',w)}}return x}w.s_d=s_d;",c=".substring(~.indexOf(~return ~=fun`K(~){`Os=^u~`t $6~;$6~.toLowerCase()~`cFun`K('e`s`Os=s_c_il['+@i+']~};s.~.length~.toUpperCase~`cObject~s.wd~t^D~.location~')q='~dynamicAccount~link~s.apv~ction~$l$X~)$6x^X!Object||!Object.prototype||!Object.prototype[x])~@G^Al)@G^Al['+@i+'].mrq(\"'+un+'\")'~var ~s.pt(~ookieDomainPeriods~,`s,'~while(~);s.~.protocol~){$6~visitor~=''~:'')~;@F^Vs[k],255)}~s_c2f~javaEnabled~=new ~.lastIndexOf('~tm.get~@5\"$Qs.b.addBehavior('# default# ~onclick~ternalFilters~entElement~Name~javascriptVersion~=parseFloat(~cookie~parseInt(~s.^J~Type~o^joid~browser~','~else~referrer~colorDepth~String~.host~s.rep(~}catch(e){~r=s.m(f)?s[f](~}$6~s.un~s.eo~s.sq~t=s.ot(o)~track~j='1.~)?'Y':'N'~$dURL~^jc_i~s.ismac~lugins~=='~;for(~Sampling~s.rc[un]~s.b.addEventListener~Download~tfs~resolution~.get@I()~s.eh~s.isie~s.vl_l~s.vl_t~Height~t,h){t=t?t~isopera~escape(~screen.~s.fl(~harCode~&&(~variableProvider~s.gg('objectID')~&&s.~:'';h=h?h~e&&l$kSESSION'~');~f',~_'+~Date~name~home$d~.s_~s.c_r(~s.rl[u~o.href~Lifetime~Width~sEnabled~'){q='~b.attachEvent~&&l$kNONE'){~ExternalLinks~this~charSet~onerror~currencyCode~s=s_gi(~e$SElement~;s.gl(s.vl_g~.parent~Array~lnk~Opera~eval(~Math.~s.fsg~s.ns6~docum~s.oun~conne~InlineStats~Track~'0123456789~s[k]=~window~onload~Time~s.epa(~s.c_w(~o.type~(s.ssl~n=s.oid(o)~LeaveQuery~')>=~&&t~'=')~){n=~+1))~' '+~s.t()}~\",''),~=s.oh(o);~+(y<1900?~ingServer~s_gs~true~sess~campaign~lif~;fun~,100)~s.co(~s._in~x in ~='s_~ffset~s.c_d~'&pe~s.gv(~s.qav~s.pl~=(apn~sqs',q);~Year(~=s.n.app~&&!~(''+~(\")>=~)+'/~',s~s()+':'+~){p=~():''~a):f(~){v=s.n.~channel~if(~un)~.target~o.value~etscape~(ns?ns:~s_')t=t~omePage~++}~')<~){x~1);~e))~'+n~height~events~trk~random~code~un,~try{~'MSIE ~.src~INPUT'~floor(~s.pg~s.num(~s.ape(~s.c_gd~s.dc~.inner~transa~Events~page~.set~Group,~Match,~.fromC~++){~?'':~!='~='+~(\")<~?'&~+';~(f){~>=5)~&&i>~[b](~=l[n];~~fun`K `ae$p`Ox`X,s=0,e,a,b,c;`S1){e=f`1'\"@z);b=f`1'\\\\',s);c=f`1\"\\n\",s)`6e<0||(b>=0&&b<$Ie=b`6e<0||(c>=0&&c<$Ie=c`6e>=0$G+=(e>s?f`0s,e)`Y+(e==c?'\\\\n':'\\\\'+f`0e,e@T;s=e+1}`t `2x+f`0s)}`2f}w.`ae=`ae@f`K `aa$p`Os=f`1'(')+1,e=f`1')'),a`X,c;`Ss>=0&&s<e){c=f`0s,s+1)`6c==`s)a+='\",\"';`5(\"\\n\\r\\t \")`1c)<0)a+=c;s$E`2a?'\"'+a+'\"':a}w.`aa=`ae@f`K `a(cc){cc`X+cc;`Ofc='`Of`cFun`K(@z=cc`1';',cc`1'{')),e=cc`d}'),o,a,d,q,c,f,h,x;fc+=`aa(cc)+',\"`Os`C;';c=cc`0s+1,e);s=c`1'fun`K^d`Ss>=0){d=1;q`X;x=0;f=c`0s);a=`aa(f);e=o=c`1'{@z);e++;`Sd>0){h=c`0e,e+1)`6q`Vh==q@vx)q`X`6h^D\\\\')x=x?0:1;`t x=0}`t{$6h^D\"'||h==\"'\")q=h`6h^D{')d++`6h^D}')d--^1d>0)e$Ec=c`00,s)+'new Fun`K('+(a?a+`s`Y+'\"'+`ae(c`0o+1,$I+'\")'+c`0e+$Hs=c`1'fun`K')}fc+=`ae(c)$o`2s\");';@5fc);`2f}w.`a=`a`6pg){fun`K s_co(o){`O^y\"_\",1,$H`2@ho)}w^jco=s_co@f`K @a($7{`O^y$P1,$H`2@Vw^jgs=@a@f`K s_dc($7{`O^y$P$H`2@Vw^jdc=s_dc;}fun`K s_c($Ppg,ss`4;s._c@kc';`D=@G`6!`D^An){`D^Al`c@2;`D^An=0;}s._il=`D^Al;@i=`D^An;s._il[@i]=s;`D^An++;s.m`3m){`2@wm)`1'{$F0`9fl`3x,l){`2x?@wx)`00,l):x`9co`3o`V!o)`2o;`On`C,x^E@jo)$6x`1'select$F0&&x`1'filter$F0)n[x]=o[x];`2n`9num`3x$G`X+x^E`Op=0;p<x`A;p++)$6(@E')`1x`0p,p@T<0)`20;`21`9rep`3x,o,n){`Oi=x`1o);`Sx$r=0$G=x`00,i)+n+x`0i+o`A);i=x`1o,i+n`A)}`2x`9ape`3x`4,h=@EABCDEF',i,c=s.^v,n,l,e,y`X;c=c?c`B$2`6x$G`X+x`6c^DAUTO'^X'').c^WAt){for(i=0;i<x`A;i$ic=x`0i,i+$Hn=x.c^WAt(i)`6n>127){l=0;e`X;`Sn||l<4){e=h`0n%16,n%16+1)+e;n=`nn/16);l$Ey+='%u'+e}`5c^D+')y+='%2B';`t y+=^Tc)}x=y}`t{x=x?`y^T''+x),'+`s%2B'):x`6x&&c^aem==1&&x`1'%u$F0&&x`1'%U$F0){i=x`1'%^d`Si>=0){i++`6h`08)`1x`0i,i+1)`B())>=0)`2x`00,i)+'u00'+x`0i);i=x`1'%',i)}}}}`2x`9epa`3x`4;`2x?un^T`y''+x,'+`s ')):x`9pt`3x,d,f,a`4,t=x,z=0,y,r;`St){y=t`1d);y=y<0?t`A:y;t=t`00,y);^0t,$3t,a)`6r)`2r;z+=y+d`A;t=x`0z,x`A);t=z<x`A?t:''}`2''`9isf`3t,a){`Oc=a`1':')`6c>=0)a=a`00,c)`6t`00,2)^D$C`02);`2(t!`X@Q==a)`9fsf`3t,a`4`6`Pa`Ris^et))@7+=(@7!`X?`s`Y+t;`20`9fs`3x,f`4;@7`X;`Px`Rfs^ef);`2@7`9c_d`X;$Yf`3t,a`4`6!$Wt))`21;`20`9c_gd`3`4,d=`D`F`x^h,n=s.fpC`Q,p`6!n)n=s.c`Q`6d@v@m@Sn?`nn):2;n=n>2?n:2;p=d`d.')`6p>=0){`Sp>=0&&n>1$1d`d.',p-$Hn--}@m=p>0&&`Pd,'.`sc_gd^e0)?d`0p):d}}`2@m`9c_r`3k`4;k=$Xk);`Oc=@Us.d.`m,i=c`1@Uk+@R,e=i<0?i:c`1';',i),v=i<0$j@Jc`0i+2+k`A,e<0?c`A:$I;`2v$k[[B]]'?v:''`9c_w`3k,v,e`4,d=$Y(),l=s.`m^n,t;v`X+v;l=l?@wl)`B$2`6^c^st=(v!`X?`nl?l:0):-60)`6t){e`c^g;e$e@I(e^L+(t*1000))}^1k^ss.d.`m=k+'`Lv!`X?v:'[[B]]')$o path=/;'+(^c?' expires$le.toGMT`w()$o'`Y+(d?' domain$ld$o'`Y;`2^kk)==v}`20`9eh`3o,e,r,f`4,b='s^fe+'^f@i,n=-1,l,i,x`6!^Ml)^Ml`c@2;l=^Ml^Ei=0;i<l`A&&n<0;i++`Vl[i].o==o&&l[i].e==e)n=i^1n<0@Si;l[n]`C}x$tx.o=o;x.e=e;f=r?x.b:f`6r||f$G.b=r?0:o[e];x.o[e]=f^1x.b$G.o[b]=x.b;`2b}`20`9cet`3f,a,t,o,b`4,r`6`J>=5^X!s.^S||`J>=7))@5'$Q^0$3a)`zr=s.m(t)?s[t](e):t(e)}^d`t{$6^B^au`1$R4@P0)r=s.m(b)?s$sa):b(a);`t{^M(`D,'^w',0,o);^0$3a`Teh(`D,'^w',1)}}`2r`9g^Jet`3e`4;`2`o`9g^Joe`8;^M(@G,\"^w\",1`Te^J=1;`Oc=s.t()`6c)s.d.write(c`Te^J=0;`2@b'`Tg^Jfb`3a){`2@G`9g^Jf`3w`4,p=w@1,l=w`F;`o=w`6p&&p`F!=l&&p`F`x==l`x){`o=p;`2s.g^Jf(`o)}`2`o`9g^J`3`4`6!`o){`o=`D`6!s.e^J)`o=s.cet('g^J^e`o,'g^Jet@z.g^Joe,'g^Jfb')}`2`o`9mrq`3u`4,l=^l],n,r;^l]=0`6l)for(n=0;n<l`A;n$ir$ts.mr(0,0,r.t,r.u,r.r)}`9mr`3@c,q,ta,u,rs`4,dc=$Z,t1=s.^6@Z,t2=s.^6@ZSecure,ns=s.`W`jspace,un=u?u:$Bs.f$7,unc=`y$P'_`s-'),r`C,l,imn@ki^f($7,im,b,e`6!rs){rs='http'+@M?'s'`Y+'://'+(t1?@M@Q2?t2:t1):($B@M?'102':unc))+'.'+($Z?$Z:112)+'.2o7.net')@yb/ss/'+^2+'/1/H.14/'+@c+'?[AQB]&ndh=1'+(q?q`Y+'&[AQE]'`6^N@v^B`V`J>5.5)rs=^Vrs,4095);`t rs=^Vrs,2047)}^1s.d.images&&`J>=3^X!s.^S||`J>=7)^X@8<0||`J>=6.1)`V!s.rc)s.rc`C`6!^G){^G=1`6!s.rl)s.rl`C;^ln]`c@2;set@Iout('$6`N,750)}`t{l=^ln]`6l){r.t=ta;r.u=un;r.r=rs;l[l`A]=r;`2''}imn+='^f^G;^G$Eim=`D[imn]`6!im)im=`D[imn]`cImage;im^jl=0;im.@H`cFun`K('e`s^u^jl=1`6`N);im$S=rs`6rs`1@n=@P0^X!ta||ta^D_self'||ta^D_top'||(`D.^h@Qa==`D.^h))){b=e`c^g;`S!im^jl&&e^L-b^L<500)e`c^g}`2''}`2'<im'+'g sr'+'c=\"'+rs+'\" width=1 $K=1 border=0 alt=\"\">'`9gg`3v`4`6!`D['s^fv])`D['s^fv]`X;`2`D['s^fv]`9glf`3t,a`Vt`00,2)^D$C`02);`Os=^u,v=s.gg(t)`6v)s[t]=v`9gl`3v`4`6$V)`Pv`Rgl^e0)`9gv`3v`4;`2s['vpm^fv]?s['vpv^fv]:(s[v]?s[v]`Y`9havf`3t,a`4,b=t`00,4),x=t`04),n=`nx),k='g^ft,m='vpm^ft,q=t,v=s.`I@DVars,e=s.`I@D$c;@F@ot)`6s.@3||^3){v=v?v+`s+^O+`s+^O2:''`6v@v`Pv`Ris^et))s[k]`X`6`E$L'&&e)@Fs.fs(s[k],e)}s[m]=0`6`E`WID`Gvid';`5`E^9^qg'`Z`5`E`u^qr'`Z`5`Evmk`Gvmt';`5`E^v^qce'`6s[k]&&s[k]`B()^DAUTO')@F'ISO8859-1';`5s[k]^aem==2)@F'UTF-8'}`5`E`W`jspace`Gns';`5`Ec`Q`Gcdp';`5`E`m^n`Gcl';`5`E^Y`Gvvp';`5`E^x`Gcc';`5`E$5`Gch';`5`E$b`KID`Gxact';`5`E@d`Gv0';`5`E^K`Gs';`5`E`v`Gc';`5`E`k`Gj';`5`E`b`Gv';`5`E`m^p`Gk';`5`E`r^o`Gbw';`5`E`r^Q`Gbh';`5`E@B`K`p`Gct';`5`E^i`Ghp';`5`Ep^C`Gp';`5$Wx)`Vb^Dprop`Gc$J;`5b^DeVar`Gv$J;`5b^Dhier^qh$J`Z^1s[k]@Q$k`I`j'@Q$k`I`p')@p+='&'+q+'`Ls[k]);`2''`9hav`3`4;@p`X;`P^P`Rhav^e0);`2@p`9lnf`3^R`7^b`7:'';`Ote=t`1@R`6t@Qe>0&&h`1t`0te@T>=0)`2t`00,te);`2''`9ln`3h`4,n=s.`I`js`6n)`2`Pn`Rln^eh);`2''`9ltdf`3^R`7^b`7:'';`Oqi=h`1'?^dh=qi>=0?h`00,qi):h`6t&&h`0h`A-(t`A@T^D.'+t)`21;`20`9ltef`3^R`7^b`7:''`6t&&h`1t)>=0)`21;`20`9lt`3h`4,lft=s.`I^IFile`ps,lef=s.`IEx`h,@e=s.`IIn`h;@e=@e?@e:`D`F`x^h;h=h`7`6s.^6^ILinks&&lft&&`Plft`Rltd^eh))`2'd'`6s.^6^t^Xlef||@e)^X!lef||`Plef`Rlte^eh))^X!@e||!`P@e`Rlte^eh)))`2'e';`2''`9lc`8,b=^M(^u,\"`g\"`T@3=@h^u`Tt(`T@3=0`6b)`2^u$se);`2@b'`Tbc`8,f`6s.d^ad.all^ad.all.cppXYctnr)return;^3=^z?^z:e$8;@5\"$Q$6^3^X^3.tag`j||^3.par`i||^3@1Nod$I@Vcatch$p}\"`Teo=0'`Toh`3o`4,l=`D`F,h=^m?^m:'',i,j,k,p;i=h`1':^dj=h`1'?^dk=h`1'/')`6h^Xi<0||(j>=0$rj)||(k>=0$rk))$1o`U&&o`U`A>1?o`U:(l`U?l`U`Y;i=l.path^h`d/^dh=(p?p+'//'`Y+(o`x?o`x:(l`x?l`x`Y)+(h`00,1)$k/'?l.path^h`00,i<0?0:i@y'`Y+h}`2h`9ot`3o){`Ot=o.tag`j;t=t@Q`B?t`B$2`6`ESHAPE')t`X`6t`V`E$T&&@L&&@L`B)t=@L`B();`5^m)t='A';}`2t`9oid`3o`4,^5,p,c,n`X,x=0`6t@v`q$1o`U;c=o.`g`6^m^X`EA'||`EAREA')^X!c||!p||p`7`1'javascript$F0))n@X`5c@S`ys.rep(`ys.rep@wc,\"\\r@W\"\\n@W\"\\t@W' `s^dx=2}`5$9^X`E$T||`ESUBMIT')@S$9;x=3}`5o$S&&`EIMAGE')n=o$S`6n){`q=^Vn@g;`qt=x}}`2`q`9rqf`3t,un`4,e=t`1@R,u=e>=0?`s+t`00,e)+`s:'';`2u&&u`1`s+un+`s)>=0?@Jt`0e@T:''`9rq`3un`4,c=un`1`s),v=^k's_sq'),q`X`6c<0)`2`Pv,'&`srq^e$7;`2`Pun`Rrq',0)`9sqp`3t,a`4,e=t`1@R,q=e<0$j@Jt`0e+1)`Tsqq[q]`X`6e>=0)`Pt`00,e)`R@s`20`9sqs`3$Pq`4;^4u[un]=q;`20`9sq`3q`4,k@ksq',v=^kk),x,c=0;^4q`C;^4u`C;^4q[q]`X;`Pv,'&`ssqp',0);`P^2`R@sv`X^E@j^4u`M)^4q[^4u[x]]+=(^4q[^4u[x]]?`s`Y+x^E@j^4q`M&&^4q[x]^Xx==q||c<2)){v+=(v$n'`Y+^4q[x]+'`Lx);c$E`2@Kk,v,0)`9wdl`8,r=@b,b=^M(`D,\"@H\"),i,o,oc`6b)r=^u$se)^Ei=0;i<s.d.`Is`A;i$io=s.d.`Is[i];oc=o.`g?\"\"+o.`g:\"\"`6(oc`1\"@a$m0||oc`1\"^joc@x0)&&oc`1\".tl$m0)^M(o,\"`g\",0,s.lc);}`2r^d`Ds`3`4`6`J>3^X!^N||!^B||`J$q`Vs.b^a^r)s.^r('`g@z.bc);`5s.b&&^H)^H('click@z.bc,false);`t ^M(`D,'@H',0,`Dl)}`9vs`3x`4,v=s.`W^F,g=s.`W^F$fk@kvsn^f^2+(g?'^fg`Y,n=^kk),e`c^g,y=e.get@t);e$e@ty+10@Y1900:0))`6v){v*=100`6!n`V!@Kk,x,$I`20;n=x^1n%10000>v)`20}`21`9dyasmf`3t,m`Vt&&m&&m`1t)>=0)`21;`20`9dyasf`3t,m`4,i=t?t`1@R:-1,n,x`6i>=0&&m){`On=t`00,i),x=t`0i+1)`6`Px`Rdyasm^em))`2n}`20`9uns`3`4,x=s.`HSele`K,l=s.`HList,m=s.`H$gn,i;^2=^2`7`6x&&l`V!m)m=`D`F`x`6!m.toLowerCase)m`X+m;l=l`7;m=m`7;n=`Pl,';`sdyas^em)`6n)^2=n}i=^2`1`s`Tfun=i<0?^2:^2`00,i)`9sa`3un`4;^2=un`6!@A)@A=un;`5(`s+@A+`s)`1$7<0)@A+=`s+un;^2s()`9t`3`4,$M=1,tm`c^g,sed=Math&&@6$N?@6$U@6$N()*10000000000000):`e@I(),@c='s'+@6$U`e@I()/10800000)%10+sed,y=`e@t),vt=`e^g(@y'+`eMonth(@y'@Yy+1900:y)+@U`eHour$0`eMinute$0`eSeconds()+@U`eDay()+@U`e@IzoneO@l(),^J=s.g^J(),ta`X,q`X,qs`X@0`Tuns()`6!s.td){`Otl=^J`F,a,o,i,x`X,c`X,v`X,p`X,bw`X,bh`X,^70',k=@K's_cc`s@b',0^8,hp`X,ct`X,pn=0,ps`6`w&&`w.prototype){^71'`6j.match){^72'`6tm$eUTC^g){^73'`6^N&&^B&&`J$q^74'`6pn.toPrecision){^75';a`c@2`6a.forEach){^76';i=0;o`C;@5'$Qi`cIterator(o)`z}')`6i&&i.next)^77'}}}}^1`J>=4)x=^Uwidth+'x'+^U$K`6s.isns||s.^S`V`J>=3$4`b(^8`6`J>=4){c=^UpixelDepth;bw=`D$a^o;bh=`D$a^Q}}@q=s.n.p^C}`5^N`V`J>=4$4`b(^8;c=^U`v`6`J$q{bw=s.d.@9`i.o@l^o;bh=s.d.@9`i.o@l^Q`6!^B^ab){`fh$D^dhp=s.b.isH$D(tl^8`z}\");`fclientCaps^dct=s.b.@B`K`p`z}\")}}}`t r`X^1@q)`Spn<@q`A&&pn<30){ps=^V@q[pn].^h@g$o'`6p`1ps)<0)p+=ps;pn$Es.^K=x;s.`v=c;s.`k=j;s.`b=v;s.`m^p=k;s.`r^o=bw;s.`r^Q=bh;s.@B`K`p=ct;s.^i=hp;s.p^C=p;s.td=1^1s.useP^C)s.doP^C(s);`Ol=`D`F,r=^J.@9ent.`u`6!s.^9)s.^9=l`6!s.`u)s.`u=r`6s.@3||^3){`Oo=^3?^3:s.@3`6!o)`2'';`Op=@o'$d`j'),w=1,^5,@N,x=`qt,h,l,i,oc`6^3&&o==^3){`So@vn@Q$kBODY'){o=o.par`i?o.par`i:o@1Node`6!o)`2'';^5;@N;x=`qt}oc=o.`g?''+o.`g:''`6(oc`1\"@a@x0&&oc`1\"^joc$m0)||oc`1\".tl@x0)`2''}ta=n?o$8:1;h@Xi=h`1'?^dh=s.`I@O`w||i<0?h:h`00,i);l=s.`I`j?s.`I`j:s.ln(h);t=s.`I`p?s.`I`p`7:s.lt(h)`6t^Xh||l))q+=@n=@3^f(`Ed'||`Ee'?$Xt):'o')+(h?@nv1`Lh)`Y+(l?@nv2`Ll)`Y;`t $M=0`6s.^6@C`V!p$1@o'^9^dw=0}^5;i=o.sourceIndex`6^Z@S^Z;x=1;i=1^1p&&n@Q)qs='&pid`L^Vp,255))+(w$npidt$lw`Y+'&oid`L^Vn@g)+(x$noidt$lx`Y+'&ot`Lt)+(i$noi$li`Y}^1!$M@vqs)`2''`6s.p_r)s.p_r();`O$O`X`6$M^avs(sed))$O=s.mr(@c,(vt$nt`Lvt)`Y+s.hav()+q+(qs?qs:s.rq(^2)),ta`Tsq($M$jqs`T@3=^3=s.`I`j=s.`I`p=`D^jobjectID=s.ppu`X`6$V)`D^j@3=`D^jeo=`D^j`I`j=`D^j`I`p`X;`2$O`9tl`3o,t,n`4;s.@3=@ho`T`I`p=t;s.`I`j=n;s.t()`9ssl=(`D`F`U`7`1'https@P0`Td=@9ent;s.b=s.d.body;s.n=navigator;s.u=s.n.userAgent;@8=s.u`1'N$A6/^d`Oapn@u`j,v@uVersion,ie=v`1$R'),o=s.u`1'@4 '),i`6v`1'@4@P0||o>0)apn='@4';^N@r^DMicrosoft Internet Explorer'`Tisns@r^DN$A'`T^S@r^D@4'`Tismac=(s.u`1'Mac@P0)`6o>0)`J`ls.u`0o+6));`5ie>0){`J=`ni=v`0ie+5))`6`J>3)`J`li)}`5@8>0)`J`ls.u`0@8+10));`t `J`lv`Tem=0`6`w$h^W){i=^T`w$h^W(256))`B(`Tem=(i^D%C4%80'?2:(i^D%U0100'?1:0))}s.sa(un`Tvl_l='`WID,vmk,ppu,^v,`W`jspace,c`Q,`m^n,$d`j,^9,`u,^x';^P=^O+',^Y,$5,server,$d`p,$b`KID,purchaseID,@d,state,zip,$L,products,`I`j,`I`p'^E`On=1;n<51;n++)^P+=',prop$J+',eVar$J+',hier$J;^O2='^K,`v,`k,`b,`m^p,`r^o,`r^Q,@B`K`p,^i,p^C';^P+=`s+^O2;s.vl_g=^P+',`W^F,`W^F$f`HSele`K,`HList,`H$g^6^ILinks,^6^t,^6@C,`I@O`w,`I^IFile`ps,`IEx`h,`IIn`h,`I@DVars,`I@D$c,`I`js,@3';$V=pg@0)`6!ss)`Ds()}",w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf("MSIE "),m=u.indexOf("Netscape6/"),a,i,s;if(un){un=un.toLowerCase();if(l){for(i=0;i<l.length;i++){s=l[i];if(s._c=="s_c"){if(s.oun==un){return s}else{if(s.fs(s.oun,un)){s.sa(un);return s}}}}}}eval(d);c=s_d(c);i=c.indexOf("function s_c(");eval(c.substring(0,i));if(!un){return 0}c=c.substring(i);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3){a=parseFloat(i)}}else{if(m>0){a=parseFloat(u.substring(m+10))}else{a=parseFloat(v)}}if(a>=5&&v.indexOf("Opera")<0&&u.indexOf("Opera")<0){eval(c);return new s_c(un,pg,ss)}else{s=s_c2f(c)}return s(un,pg,ss)}s_gi();dojo.provide("noa.*");dojo.provide("noa.service.Locator");dojo.require("mojo.service.Locator");dojo.require("mojo.service.Service");var __demoServiceLocator=null;dojo.declare("noa.service.Locator",mojo.service.Locator,{addServices:function(){this.addService(new mojo.service.Service("getSearchResults","/json/content/get/search/summary",{json:true,method:"post",cache:true}));this.addService(new mojo.service.Service("getSearchDetail","/json/content/get/search/details",{json:true,method:"post",cache:true}));this.addService(new mojo.service.Service("getGames","/json/content/get/game/filter",{json:true,method:"get",cache:false}));this.addService(new mojo.service.Service("getGameDetails","/json/content/get/game",{json:true,method:"post",cache:true}));this.addService(new mojo.service.Service("getGameSpecifics","/json/content/get/game/subset",{json:true,method:"post",cache:true}));this.addService(new mojo.service.Service("getGameSpecifics_VCStatic","/json/content/get/game/subset_virtualconsole",{json:true,method:"post",cache:true}));this.addService(new mojo.service.Service("getSearchResults","/search/summary",{json:true,method:"post",cache:false}))}});noa.service.Locator.getInstance=function(){if(__demoServiceLocator==null){__demoServiceLocator=new noa.service.Locator()}return __demoServiceLocator}

/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;

/** An object that provides DHTML history, history data, and bookmarking
	for AJAX applications. */
var rsh = {};
rsh.dhtmlHistory = {

	_currentLocation:	null,	/** Our current hash location, without the "#" symbol. */
	_listener:			null,	/** Our history change listener. */
	_iframe:			null,	/** A hidden IFrame we use in Internet Explorer to detect history changes. */
	_ignoreChange:		null,	/** Indicates to the browser whether to ignore location changes. */
	_WAIT_TIME:			200,	/** The amount of time in milliseconds that we should wait between add requests. Firefox is okay with 200 ms, but Internet Explorer needs 400. */
	_currentWaitTime:	0,		/** The amount of time in milliseconds an add request has to wait in line before being run on a window.setTimeout. */
	_fireOnNewListener:	null,	/* init state variable for !IE browsers */
	_firstLoad:			true,	/* variable to define first page load, vs history.back load */
	_ieAtomicChange:	null,	/* variable to distinguish between scripted and native url changes in IE */
	_isIE:				((document.all && navigator.userAgent.toLowerCase().indexOf('msie')!=-1)?true:false),

	init:			function()
						{
							if (this._isIE == false) {return;}

							// if this is the first time this page has loaded...
							if (this._firstLoad)
							{
								this._fireOnNewListener = false;
								this._firstLoad = false;
							}
							// else if this is a fake onload event
							else
							{
								this._fireOnNewListener = true;
							}
						},

	addListener:		function(callback)
						{
							this._listener = callback;

							// if the page was just loaded and we should not ignore it, fire an event to our new listener now
							if (this._fireOnNewListener == true)
							{
								this._fireHistoryEvent(this._currentLocation);
								this._fireOnNewListener = false;
							}
						},

	add:				function(newLocation, historyData)
						{
							var self = this;
							var addImpl =	function()
											{
												// indicate that the current wait time is now less
												if (self._currentWaitTime > 0)
												self._currentWaitTime = self._currentWaitTime - self._WAIT_TIME;

												// remove any leading hash symbols on newLocation
												newLocation = self._removeHash(newLocation);

												// IE bug disallows history + id conflict
												if (document.getElementById(newLocation))
												{
													throw ("Exception: history path conflicts with page element #" + newLocation);
												}

												// indicate to the browser to ignore this upcoming location change
												self._ignoreChange = true;

												// indicate to IE that this is an atomic location change block
												this._ieAtomicChange = true;

												// save this as our current location
												self._currentLocation = newLocation;

												// change the browser location
												window.location.hash = newLocation;

												// change the hidden iframe's location if on IE
												if (self._isIE) {self._iframe.src = "/blank.html?" + newLocation;}

												// end of atomic location change block for IE
												this._ieAtomicChange = false;
											};

							// now execute this add request after waiting a certain amount of time, so as to queue up requests
							window.setTimeout(addImpl, this._currentWaitTime);
							// indicate that the next request will have to wait for awhile
							this._currentWaitTime = this._currentWaitTime + this._WAIT_TIME;
						},

	/** Creates the DHTML history infrastructure. */
	create:				function()
						{
							// get our initial location
							var initialHash = this._getCurrentLocation();

							// save this as our current location
							this._currentLocation = initialHash;

							// add an unload listener for the page; this is
							// needed for Firefox 1.5+ because this browser caches all
							// dynamic updates to the page, which can break some of our
							// logic related to testing whether this is the first instance
							// a page has loaded or whether it is being pulled from the cache
							var self = this;
							window.onunload = function() {self._firstLoad = null;};

							// determine if this is our first page load;
							// for Internet Explorer, we do this in
							// this._iframeLoaded(), which is fired on
							// page load. We do it there because
							// we have no historyStorage at this point
							// in IE, which only exists after the page
							// is finished loading for that browser

							// write out a hidden iframe for IE and set the amount of time to wait between add() requests
							if (this._isIE)
							{
								document.write("<iframe style='border: 0px; width: 1px; height: 1px; position: absolute; bottom: 0px; right: 0px; visibility: visible;' name='DhtmlHistoryFrame' id='DhtmlHistoryFrame' src='/blank.html?" + initialHash + "'></iframe>");
								this._WAIT_TIME = 400;
								// the iframe will get loaded on page load, and we want to ignore this fact
								this._ignoreChange = true;
								this._iframe = document.getElementById("DhtmlHistoryFrame");
							}
							else
							{
								if (this._firstLoad)
								{
									this._ignoreChange = true;
									this._firstLoad = false;
								}
								else
								{
									this._ignoreChange = false;
									this._fireOnNewListener = true;
								}
							}

							//run a blind interval as history change "detection"
							var self = this;
							var locationHandler = function() {self._checkLocation();};
							setInterval(locationHandler, 100);
						},

	_getCurrentLocation:function()
						{
							return this._removeHash(window.location.hash);
						},

	/** Notify the listener of new history changes. */
	_fireHistoryEvent:	function(newHash)
						{
							// call our listener
							//this._listener.call(null, newHash, historyData);
						},

	/** Sees if the browsers has changed location.  This is the primary^h _only_ history mechanism */
	_checkLocation:		function()
						{
							// ignore any location changes that we made ourselves for browsers other than Internet Explorer
							if (!this._isIE)
							{
								if (this._ignoreChange) {
									this._ignoreChange = false;
									return;
								}

								// if we are dealing with Internet Explorer and we are in the middle of making a location change from an iframe, ignore it
								if (this._ieAtomicChange) {return;}
							}

							if (document.title.indexOf("#") > 0) {
								document.title = document.title.substring(0, document.title.indexOf("#"));
							}
							// get hash location
							var hash = this._getCurrentLocation();

							// see if there has been a change
							if (hash == this._currentLocation) {return;}

							this._ieAtomicChange = true;

							if (this._isIE) {
								/* compare iframe and document locations to detect manual url changes */
								this._iframe.src = "/blank.html?" + hash;
							}

							// save this new location
							this._currentLocation = hash;

							this._ieAtomicChange = false;

							// notify listeners of the change
							this._fireHistoryEvent(hash);
						},

	/** Gets the current location of the hidden IFrames that is stored as history. For Internet Explorer. */
	_getIFrameHash:		function()
						{
							// get the new location
							var historyFrame = document.getElementById("DhtmlHistoryFrame");
							var doc = historyFrame.contentWindow.document;
							var hash = new String(doc.location.search);
							if (hash.length >0 && hash.charAt(0) == "?") {hash = hash.substring(1);}

							return hash;
						},

	/** Removes any leading hash that might be on a location. */
	_removeHash:		function(hashValue)
						{
							if (!hashValue) {return null;}
							else if (hashValue.length > 0 && hashValue.charAt(0) == "#") {return hashValue.substring(1);}
							else {return hashValue;}
						},

	/** For IE, says when the hidden iframe has finished loading - this is only actually called from blank.htm */
	_iframeLoaded:		function(newLocation)
						{
							// ignore any location changes that we made ourselves
							if (this._ignoreChange == true) {
								this._ignoreChange = false;
								return;
							}

							// get the new location
							var hash = new String(newLocation.search);
							if (hash.length >0 && hash.charAt(0) == "?") {hash = hash.substring(1);}

							// move to this location in the browser location bar if we are not dealing with a page load event
							if (this.pageLoadEvent != true) {window.location.hash = hash;}

							// notify listeners of the change
							this._fireHistoryEvent(hash);
						}
};

/** Initialize all of our objects now. */
rsh.dhtmlHistory.create();

dojo.registerModulePath("noa", "../noa");
dojo.require("mojo.component.Template");
dojo.require("mojo.controller.Map");
dojo.require("noa.SiteMap");

// Some configuration
window.monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

noa.reformatPageTitle = function(title) {
  switch(title) {
    case 'Nintendo':
      return 'Nintendo :: Home';
      break;
    case 'DS at Nintendo':
      return 'Nintendo :: DS :: Home';
      break;
    case 'Wii at Nintendo':
      return 'Nintendo :: Wii :: Home';
      break;
  }
  
  var parts = title.split(' at ');
  return (parts[1] ? (parts[1] + ' :: ') : '') + parts[0];
};

// Start up the application
var init = function() {
	var ctrlIniter = mojo.controller.Map.getInstance();
	ctrlIniter.setSiteMap(noa.SiteMap);
	ctrlIniter.mapControllers(window.location.href);
};
dojo.addOnLoad(init);

//** Tab Content script v2.0- � Dynamic Drive DHTML code library (http://www.dynamicdrive.com)
//** Updated Oct 7th, 07 to version 2.0. Contains numerous improvements:
//   -Added Auto Mode: Script auto rotates the tabs based on an interval, until a tab is explicitly selected
//   -Ability to expand/contract arbitrary DIVs on the page as the tabbed content is expanded/ contracted
//   -Ability to dynamically select a tab either based on its position within its peers, or its ID attribute (give the target tab one 1st)
//   -Ability to set where the CSS classname "selected" get assigned- either to the target tab's link ("A"), or its parent container
//** Updated Feb 18th, 08 to version 2.1: Adds a "tabinstance.cycleit(dir)" method to cycle forward or backward between tabs dynamically
//** Updated April 8th, 08 to version 2.2: Adds support for expanding a tab using a URL parameter (ie: http://mysite.com/tabcontent.htm?tabinterfaceid=0) 

////NO NEED TO EDIT BELOW////////////////////////

function ddtabcontent(tabinterfaceid){
	this.tabinterfaceid=tabinterfaceid //ID of Tab Menu main container
	this.tabs=document.getElementById(tabinterfaceid).getElementsByTagName("a") //Get all tab links within container
	this.enabletabpersistence=true
	this.hottabspositions=[] //Array to store position of tabs that have a "rel" attr defined, relative to all tab links, within container
	this.currentTabIndex=0 //Index of currently selected hot tab (tab with sub content) within hottabspositions[] array
	this.subcontentids=[] //Array to store ids of the sub contents ("rel" attr values)
	this.revcontentids=[] //Array to store ids of arbitrary contents to expand/contact as well ("rev" attr values)
	this.selectedClassTarget="link" //keyword to indicate which target element to assign "selected" CSS class ("linkparent" or "link")
}

ddtabcontent.getCookie=function(Name){ 
	var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
	if (document.cookie.match(re)) //if cookie found
		return document.cookie.match(re)[0].split("=")[1] //return its value
	return ""
}

ddtabcontent.setCookie=function(name, value){
	document.cookie = name+"="+value+";path=/" //cookie value is domain wide (path=/)
}

ddtabcontent.prototype={

	expandit:function(tabid_or_position){ //PUBLIC function to select a tab either by its ID or position(int) within its peers
		this.cancelautorun() //stop auto cycling of tabs (if running)
		var tabref=""
		try{
			if (typeof tabid_or_position=="string" && document.getElementById(tabid_or_position).getAttribute("rel")) //if specified tab contains "rel" attr
				tabref=document.getElementById(tabid_or_position)
			else if (parseInt(tabid_or_position)!=NaN && this.tabs[tabid_or_position].getAttribute("rel")) //if specified tab contains "rel" attr
				tabref=this.tabs[tabid_or_position]
		}
		catch(err){alert("Invalid Tab ID or position entered!")}
		if (tabref!="") //if a valid tab is found based on function parameter
			this.expandtab(tabref) //expand this tab
	},

	cycleit:function(dir, autorun){ //PUBLIC function to move foward or backwards through each hot tab (tabinstance.cycleit('foward/back') )
		if (dir=="next"){
			var currentTabIndex=(this.currentTabIndex<this.hottabspositions.length-1)? this.currentTabIndex+1 : 0
		}
		else if (dir=="prev"){
			var currentTabIndex=(this.currentTabIndex>0)? this.currentTabIndex-1 : this.hottabspositions.length-1
		}
		if (typeof autorun=="undefined") //if cycleit() is being called by user, versus autorun() function
			this.cancelautorun() //stop auto cycling of tabs (if running)
		this.expandtab(this.tabs[this.hottabspositions[currentTabIndex]])
	},

	setpersist:function(bool){ //PUBLIC function to toggle persistence feature
			this.enabletabpersistence=bool
	},

	setselectedClassTarget:function(objstr){ //PUBLIC function to set which target element to assign "selected" CSS class ("linkparent" or "link")
		this.selectedClassTarget=objstr || "link"
	},

	getselectedClassTarget:function(tabref){ //Returns target element to assign "selected" CSS class to
		return (this.selectedClassTarget==("linkparent".toLowerCase()))? tabref.parentNode : tabref
	},

	urlparamselect:function(tabinterfaceid){
		var result=window.location.search.match(new RegExp(tabinterfaceid+"=(\\d+)", "i")) //check for "?tabinterfaceid=2" in URL
		return (result==null)? null : parseInt(RegExp.$1) //returns null or index, where index (int) is the selected tab's index
	},

	expandtab:function(tabref){
		var subcontentid=tabref.getAttribute("rel") //Get id of subcontent to expand
		//Get "rev" attr as a string of IDs in the format ",john,george,trey,etc," to easily search through
		var associatedrevids=(tabref.getAttribute("rev"))? ","+tabref.getAttribute("rev").replace(/\s+/, "")+"," : ""
		this.expandsubcontent(subcontentid)
		this.expandrevcontent(associatedrevids)
		for (var i=0; i<this.tabs.length; i++){ //Loop through all tabs, and assign only the selected tab the CSS class "selected"
			this.getselectedClassTarget(this.tabs[i]).className=(this.tabs[i].getAttribute("rel")==subcontentid)? "selected" : ""
		}
		if (this.enabletabpersistence) //if persistence enabled, save selected tab position(int) relative to its peers
			ddtabcontent.setCookie(this.tabinterfaceid, tabref.tabposition)
		this.setcurrenttabindex(tabref.tabposition) //remember position of selected tab within hottabspositions[] array
	},

	expandsubcontent:function(subcontentid){
		for (var i=0; i<this.subcontentids.length; i++){
			var subcontent=document.getElementById(this.subcontentids[i]) //cache current subcontent obj (in for loop)
			subcontent.style.display=(subcontent.id==subcontentid)? "block" : "none" //"show" or hide sub content based on matching id attr value
		}
	},

	expandrevcontent:function(associatedrevids){
		var allrevids=this.revcontentids
		for (var i=0; i<allrevids.length; i++){ //Loop through rev attributes for all tabs in this tab interface
			//if any values stored within associatedrevids matches one within allrevids, expand that DIV, otherwise, contract it
			document.getElementById(allrevids[i]).style.display=(associatedrevids.indexOf(","+allrevids[i]+",")!=-1)? "block" : "none"
		}
	},

	setcurrenttabindex:function(tabposition){ //store current position of tab (within hottabspositions[] array)
		for (var i=0; i<this.hottabspositions.length; i++){
			if (tabposition==this.hottabspositions[i]){
				this.currentTabIndex=i
				break
			}
		}
	},

	autorun:function(){ //function to auto cycle through and select tabs based on a set interval
		this.cycleit('next', true)
	},

	cancelautorun:function(){
		if (typeof this.autoruntimer!="undefined")
			clearInterval(this.autoruntimer)
	},

	init:function(automodeperiod){
		var persistedtab=ddtabcontent.getCookie(this.tabinterfaceid) //get position of persisted tab (applicable if persistence is enabled)
		var selectedtab=-1 //Currently selected tab index (-1 meaning none)
		var selectedtabfromurl=this.urlparamselect(this.tabinterfaceid) //returns null or index from: tabcontent.htm?tabinterfaceid=index
		this.automodeperiod=automodeperiod || 0
		for (var i=0; i<this.tabs.length; i++){
			this.tabs[i].tabposition=i //remember position of tab relative to its peers
			if (this.tabs[i].getAttribute("rel")){
				var tabinstance=this
				this.hottabspositions[this.hottabspositions.length]=i //store position of "hot" tab ("rel" attr defined) relative to its peers
				this.subcontentids[this.subcontentids.length]=this.tabs[i].getAttribute("rel") //store id of sub content ("rel" attr value)
				this.tabs[i].onclick=function(){
					tabinstance.expandtab(this)
					tabinstance.cancelautorun() //stop auto cycling of tabs (if running)
					return false
				}
				if (this.tabs[i].getAttribute("rev")){ //if "rev" attr defined, store each value within "rev" as an array element
					this.revcontentids=this.revcontentids.concat(this.tabs[i].getAttribute("rev").split(/\s*,\s*/))
				}
				if (selectedtabfromurl==i || this.enabletabpersistence && selectedtab==-1 && parseInt(persistedtab)==i || !this.enabletabpersistence && selectedtab==-1 && this.getselectedClassTarget(this.tabs[i]).className=="selected"){
					selectedtab=i //Selected tab index, if found
				}
			}
		} //END for loop
		if (selectedtab!=-1) //if a valid default selected tab index is found
			this.expandtab(this.tabs[selectedtab]) //expand selected tab (either from URL parameter, persistent feature, or class="selected" class)
		else //if no valid default selected index found
			this.expandtab(this.tabs[this.hottabspositions[0]]) //Just select first tab that contains a "rel" attr
		if (parseInt(this.automodeperiod)>500 && this.hottabspositions.length>1){
			this.autoruntimer=setInterval(function(){tabinstance.autorun()}, this.automodeperiod)
		}
	} //END int() function

} //END Prototype assignment

/* SpryAccordion.js - Revision: Spry Preview Release 1.4 */

// Copyright (c) 2006. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

var Spry;
if (!Spry) Spry = {};
if (!Spry.Widget) Spry.Widget = {};

Spry.Widget.Accordion = function(element, opts)
{
	this.element = this.getElement(element);
	this.defaultPanel = 0;
	this.hoverClass = "AccordionPanelTabHover";
	this.openClass = "AccordionPanelOpen";
	this.closedClass = "AccordionPanelClosed";
	this.focusedClass = "AccordionFocused";
	this.enableAnimation = true;
	this.enableKeyboardNavigation = true;
	this.currentPanel = null;
	this.animator = null;
	this.hasFocus = null;
	this.duration = 200;

	this.previousPanelKeyCode = Spry.Widget.Accordion.KEY_UP;
	this.nextPanelKeyCode = Spry.Widget.Accordion.KEY_DOWN;

	this.useFixedPanelHeights = true;
	this.fixedPanelHeight = 0;

	Spry.Widget.Accordion.setOptions(this, opts, true);

	// Unfortunately in some browsers like Safari, the Stylesheets our
	// page depends on may not have been loaded at the time we are called.
	// This means we have to defer attaching our behaviors until after the
	// onload event fires, since some of our behaviors rely on dimensions
	// specified in the CSS.

	if (Spry.Widget.Accordion.onloadDidFire)
		this.attachBehaviors();
	else
		Spry.Widget.Accordion.loadQueue.push(this);
};

Spry.Widget.Accordion.onloadDidFire = false;
Spry.Widget.Accordion.loadQueue = [];

Spry.Widget.Accordion.addLoadListener = function(handler)
{
	if (typeof window.addEventListener != 'undefined')
		window.addEventListener('load', handler, false);
	else if (typeof document.addEventListener != 'undefined')
		document.addEventListener('load', handler, false);
	else if (typeof window.attachEvent != 'undefined')
		window.attachEvent('onload', handler);
};

Spry.Widget.Accordion.processLoadQueue = function(handler)
{
	Spry.Widget.Accordion.onloadDidFire = true;
	var q = Spry.Widget.Accordion.loadQueue;
	var qlen = q.length;
	for (var i = 0; i < qlen; i++)
		q[i].attachBehaviors();
};

Spry.Widget.Accordion.addLoadListener(Spry.Widget.Accordion.processLoadQueue);

Spry.Widget.Accordion.prototype.getElement = function(ele)
{
	if (ele && typeof ele == "string")
		return document.getElementById(ele);
	return ele;
};

Spry.Widget.Accordion.prototype.addClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1))
		return;
	ele.className += (ele.className ? " " : "") + className;
};

Spry.Widget.Accordion.prototype.removeClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1))
		return;
	ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

Spry.Widget.Accordion.setOptions = function(obj, optionsObj, ignoreUndefinedProps)
{
	if (!optionsObj)
		return;
	for (var optionName in optionsObj)
	{
		if (ignoreUndefinedProps && optionsObj[optionName] == undefined)
			continue;
		obj[optionName] = optionsObj[optionName];
	}
};

Spry.Widget.Accordion.prototype.onPanelTabMouseOver = function(panel)
{
	if (panel)
		this.addClassName(this.getPanelTab(panel), this.hoverClass);
};

Spry.Widget.Accordion.prototype.onPanelTabMouseOut = function(panel)
{
	if (panel)
		this.removeClassName(this.getPanelTab(panel), this.hoverClass);
};

Spry.Widget.Accordion.prototype.openPanel = function(panel)
{
	var panelA = this.currentPanel;
	var panelB = panel;
	
	if (!panelB || panelA == panelB)	
		return;

	var contentA; 
	if( panelA )
		contentA = this.getPanelContent(panelA);
	var contentB = this.getPanelContent(panelB);

	if (! contentB)
		return;

	if (this.useFixedPanelHeights && !this.fixedPanelHeight)
	{
		this.fixedPanelHeight = (contentA.offsetHeight) ? contentA.offsetHeight : contentA.scrollHeight;
	}

	if (this.enableAnimation)
	{
		if (this.animator)
			this.animator.stop();
		this.animator = new Spry.Widget.Accordion.PanelAnimator(this, panelB, { duration: this.duration });
		this.animator.start();
	}
	else
	{
		if(contentA)
			contentA.style.height = "0px";
		contentB.style.height = (this.useFixedPanelHeights ? this.fixedPanelHeight : contentB.scrollHeight) + "px";
	}

	if(panelA)
	{
		this.removeClassName(panelA, this.openClass);
		this.addClassName(panelA, this.closedClass);
	}

	this.removeClassName(panelB, this.closedClass);
	this.addClassName(panelB, this.openClass);

	this.currentPanel = panelB;
};

Spry.Widget.Accordion.prototype.openNextPanel = function()
{
	var panels = this.getPanels();
	var curPanelIndex = this.getCurrentPanelIndex();
	
	if( panels && curPanelIndex >= 0 && (curPanelIndex+1) < panels.length )
		this.openPanel(panels[curPanelIndex+1]);
};

Spry.Widget.Accordion.prototype.openPreviousPanel = function()
{
	var panels = this.getPanels();
	var curPanelIndex = this.getCurrentPanelIndex();
	
	if( panels && curPanelIndex > 0 && curPanelIndex < panels.length )
		this.openPanel(panels[curPanelIndex-1]);
};

Spry.Widget.Accordion.prototype.openFirstPanel = function()
{
	var panels = this.getPanels();
	if( panels )
		this.openPanel(panels[0]);
};

Spry.Widget.Accordion.prototype.openLastPanel = function()
{
	var panels = this.getPanels();
	if( panels )
		this.openPanel(panels[panels.length-1]);
};

Spry.Widget.Accordion.prototype.onPanelClick = function(panel)
{
	// if (this.enableKeyboardNavigation)
	// 	this.element.focus();
	if (panel != this.currentPanel)
		this.openPanel(panel);
	this.focus();
};

Spry.Widget.Accordion.prototype.onFocus = function(e)
{
	// this.element.focus();
	this.hasFocus = true;
	this.addClassName(this.element, this.focusedClass);
};

Spry.Widget.Accordion.prototype.onBlur = function(e)
{
	// this.element.blur();
	this.hasFocus = false;
	this.removeClassName(this.element, this.focusedClass);
};

Spry.Widget.Accordion.KEY_UP = 38;
Spry.Widget.Accordion.KEY_DOWN = 40;

Spry.Widget.Accordion.prototype.onKeyDown = function(e)
{
	var key = e.keyCode;
	if (!this.hasFocus || (key != this.previousPanelKeyCode && key != this.nextPanelKeyCode))
		return true;
	
	var panels = this.getPanels();
	if (!panels || panels.length < 1)
		return false;
	var currentPanel = this.currentPanel ? this.currentPanel : panels[0];
	var nextPanel = (key == this.nextPanelKeyCode) ? currentPanel.nextSibling : currentPanel.previousSibling;
	
	while (nextPanel)
	{
		if (nextPanel.nodeType == 1 /* Node.ELEMENT_NODE */)
			break;
		nextPanel = (key == this.nextPanelKeyCode) ? nextPanel.nextSibling : nextPanel.previousSibling;
	}
	
	if (nextPanel && currentPanel != nextPanel)
		this.openPanel(nextPanel);

	if (e.stopPropagation)
		e.stopPropagation();
	if (e.preventDefault)
		e.preventDefault();

	return false;
};

Spry.Widget.Accordion.prototype.attachPanelHandlers = function(panel)
{
	if (!panel)
		return;

	var tab = this.getPanelTab(panel);

	if (tab)
	{
		var self = this;
		Spry.Widget.Accordion.addEventListener(tab, "click", function(e) { return self.onPanelClick(panel); }, false);
		Spry.Widget.Accordion.addEventListener(tab, "mouseover", function(e) { return self.onPanelTabMouseOver(panel); }, false);
		Spry.Widget.Accordion.addEventListener(tab, "mouseout", function(e) { return self.onPanelTabMouseOut(panel); }, false);
	}
};

Spry.Widget.Accordion.addEventListener = function(element, eventType, handler, capture)
{
	try
	{
		if (element.addEventListener)
			element.addEventListener(eventType, handler, capture);
		else if (element.attachEvent)
			element.attachEvent("on" + eventType, handler);
	}
	catch (e) {}
};

Spry.Widget.Accordion.prototype.initPanel = function(panel, isDefault)
{
	var content = this.getPanelContent(panel);
	if (isDefault)
	{
		this.currentPanel = panel;
		this.removeClassName(panel, this.closedClass);
		this.addClassName(panel, this.openClass);
	}
	else
	{
		this.removeClassName(panel, this.openClass);
		this.addClassName(panel, this.closedClass);
		content.style.height = "0px";
	}
	
	this.attachPanelHandlers(panel);
};

Spry.Widget.Accordion.prototype.attachBehaviors = function()
{
	var panels = this.getPanels();
	for (var i = 0; i < panels.length; i++)
	{
		this.initPanel(panels[i], i == this.defaultPanel);
	}

	if (this.enableKeyboardNavigation)
	{
		// XXX: IE doesn't allow the setting of tabindex dynamically. This means we can't
		// rely on adding the tabindex attribute if it is missing to enable keyboard navigation
		// by default.

		var tabIndexAttr = this.element.attributes.getNamedItem("tabindex");
		// if (!tabIndexAttr) this.element.tabindex = 0;
		if (tabIndexAttr)
		{
			var self = this;
			Spry.Widget.Accordion.addEventListener(this.element, "focus", function(e) { return self.onFocus(e); }, false);
			Spry.Widget.Accordion.addEventListener(this.element, "blur", function(e) { return self.onBlur(e); }, false);
			Spry.Widget.Accordion.addEventListener(this.element, "keydown", function(e) { return self.onKeyDown(e); }, false);
		}
	}
};

Spry.Widget.Accordion.prototype.getPanels = function()
{
	return this.getElementChildren(this.element);
};

Spry.Widget.Accordion.prototype.getCurrentPanel = function()
{
	return this.currentPanel;
};

Spry.Widget.Accordion.prototype.getCurrentPanelIndex = function()
{
	var panels = this.getPanels();
	for( var i = 0 ; i < panels.length; i++ )
	{
		if( this.currentPanel == panels[i] )
			return i;
	}
	return 0;
};

Spry.Widget.Accordion.prototype.getPanelTab = function(panel)
{
	if (!panel)
		return null;
	return this.getElementChildren(panel)[0];
};

Spry.Widget.Accordion.prototype.getPanelContent = function(panel)
{
	if (!panel)
		return null;
	return this.getElementChildren(panel)[1];
};

Spry.Widget.Accordion.prototype.getElementChildren = function(element)
{
	var children = [];
	var child = element.firstChild;
	while (child)
	{
		if (child.nodeType == 1 /* Node.ELEMENT_NODE */)
			children.push(child);
		child = child.nextSibling;
	}
	return children;
};

Spry.Widget.Accordion.prototype.focus = function()
{
	if (this.element && this.element.focus)
		this.element.focus();
};

/////////////////////////////////////////////////////

Spry.Widget.Accordion.PanelAnimator = function(accordion, panel, opts)
{
	this.timer = null;
	this.interval = 0;
	this.stepCount = 0;

	this.fps = 0;
	this.steps = 10;
	this.duration = 500;
	this.onComplete = null;

	this.panel = panel;
	this.panelToOpen = accordion.getElement(panel);
	this.panelData = [];

	Spry.Widget.Accordion.setOptions(this, opts, true);


	// If caller specified speed in terms of frames per second,
	// convert them into steps.

	if (this.fps > 0)
	{
		this.interval = Math.floor(1000 / this.fps);
		this.steps = parseInt((this.duration + (this.interval - 1)) / this.interval);
	}
	else if (this.steps > 0)
		this.interval = this.duration / this.steps;

	// Set up the array of panels we want to animate.

	var panels = accordion.getPanels();
	for (var i = 0; i < panels.length; i++)
	{
		var p = panels[i];
		var c = accordion.getPanelContent(p);
		if (c)
		{
			var h = c.offsetHeight;
			if (h == undefined)
				h = 0;
			if (p == panel || h > 0)
			{
				var obj = new Object;
				obj.panel = p;
				obj.content = c;
				obj.fromHeight = h;
				obj.toHeight = (p == panel) ? (accordion.useFixedPanelHeights ? accordion.fixedPanelHeight : c.scrollHeight) : 0;
				obj.increment = (obj.toHeight - obj.fromHeight) / this.steps;
				obj.overflow = c.style.overflow;
				this.panelData.push(obj);

				c.style.overflow = "hidden";
				c.style.height = h + "px";
			}
		}
	}
};

Spry.Widget.Accordion.PanelAnimator.prototype.start = function()
{
	var self = this;
	this.timer = setTimeout(function() { self.stepAnimation(); }, this.interval);
};

Spry.Widget.Accordion.PanelAnimator.prototype.stop = function()
{
	if (this.timer)
	{
		clearTimeout(this.timer);

		// If we're killing the timer, restore the overflow
		// properties on the panels we were animating!

		if (this.stepCount < this.steps)
		{
			for (i = 0; i < this.panelData.length; i++)
			{
				obj = this.panelData[i];
				obj.content.style.overflow = obj.overflow;
			}
		}
	}

	this.timer = null;
};

Spry.Widget.Accordion.PanelAnimator.prototype.stepAnimation = function()
{
	++this.stepCount;

	this.animate();

	if (this.stepCount < this.steps)
		this.start();
	else if (this.onComplete)
		this.onComplete();
};

Spry.Widget.Accordion.PanelAnimator.prototype.animate = function()
{
	var i, obj;

	if (this.stepCount >= this.steps)
	{
		for (i = 0; i < this.panelData.length; i++)
		{
			obj = this.panelData[i];
			if (obj.panel != this.panel)
				obj.content.style.height = "0px";
			obj.content.style.overflow = obj.overflow;
			obj.content.style.height = obj.toHeight + "px";
		}
	}
	else
	{
		for (i = 0; i < this.panelData.length; i++)
		{
			obj = this.panelData[i];
			obj.fromHeight += obj.increment;
			obj.content.style.height = obj.fromHeight + "px";
		}
	}
};



/****Customer: Nintendo
/************ don't modify below this line *********
 *************  Version: OnExit 7.3 v.26 ***********
 ****** Copyright 2001-2008 ForeseeResults, Inc****/

/**MAIN PARAMETERS**/
if(!window.foresee) window.foresee = new Object();
foresee.triggerParms= new Array();
foresee.triggerParms["displayMode"] = 3; 						// 0=disable survey, 1=Invitation when PUB present, 2=No Invitation, 3=Invitation Only
foresee.triggerParms["mid"] = "5dhhhIJYodpJRVg0YlR1xQ==";   	// model instance id (Default is XYZ Company survey) - Comment if using 'sid'
foresee.triggerParms["cid"] = "5EclwdUE9E9NZldQg91hVg==";   	// customer id
foresee.triggerParms["dLF"] = 3; 								// loyalty factor
foresee.triggerParms["spL"] = 3.0; 							// sample percentage
foresee.triggerParms["rw"] = 129600; 							// resample wait (value in minutes)
foresee.triggerParms["npc"] = 0; 								// 0-default persistent cookies, 1 - session
foresee.triggerParms["compliant508"] = 0; 						// 508 compliant if 1
//foresee.triggerParms["omb"] = "1505-0186"; 					// uncomment if required
foresee.triggerParms["width"] = 450;							// survey width
foresee.triggerParms["height"] = 500;							// survey height
//foresee.triggerParms["domain"] = ".nintendo.com";	 	// domain name
foresee.triggerParms["dhtmlURL"] ="/js/foresee/oeFSRInvite.html"; //path to survey invitation

/**ONEXIT PARAMETERS**/
foresee.triggerParms["oeMode"]= 1;					// onExit mode: 0=triggers survey on subdomain or protocol change, 1=triggers survey on domain change only or in absence of code (default)
foresee.triggerParms["sMode"] = 1; 					// survey mode: 1=preload survey, 0=load at exit
foresee.triggerParms["dLFPreCheck"] = 1; 			// default 1, count page visit before opening Invite/Tracker, otherwise 0 to count after
foresee.triggerParms["trackerURL"] ="/js/foresee/surveyTracker.html"; //path to survey child

/**MISC PARAMETERS**/
//foresee.triggerParms["sid"] = "";							// e.g.: BROWSE|CHECKOUT|POS  - foresee defined survey identifier, default commented
//foresee.triggerParms["patternType"] = "";					// use either URL|CK=<paste_your_cookie_name>|VALUE as a lookup pattern, default commented
foresee.triggerParms["lfcookie"] = "ForeseeLoyalty";		// loyalty cookie name
foresee.triggerParms["ascookie"] = "ForeseeSurveyShown";	// "survey shown" cookie name
foresee.triggerParms["olpu"] = 1;							// default 1, 0 will pop survey UNDER browser window
foresee.triggerParms["userURL"] = 1; 						// capture URL if 1
foresee.triggerParms["capturePageView"] = 1;				// capture pages viewed if 1
//Double Cookie/1 settings
//foresee.triggerParms["dcUniqueId"] = "TEST04JloZZN0k9cI1Ep5d";// (22 chars unique Id for double cookie I/II)
//foresee.triggerParms["midexp"] = 129600; 					// for double cookie (value in minutes)
//foresee.triggerParms["nLF"] = 0; 							// navigation loyalty factor, commented by default
foresee.triggerParms["spE"] = 100.0; 						// execute sample percentage

/**DHTML PARAMETERS**/
foresee.triggerParms["dhtmlIndex"]= 10000;					// z-index s/b greater then client�s dhtml z-index (if exist) - default 100
foresee.triggerParms["dhtmlWidth"] = 450;					// invite page width
foresee.triggerParms["dhtmlHeight"]= 290;					// invite page height
foresee.triggerParms["dhtmlDelay"]= 100;					// default=1ms, invite timeout in millisecs
foresee.triggerParms["dhtmlHighlight"]= 0; 					// 1- enable dhtml lightbox effect, 0-disable
foresee.triggerParms["dhtmlOverlayBgClr"]= "#EFEFEF";		// default background div color
foresee.triggerParms["dhtmlOverlayOpacity"]= "0.85"; 		// default background div opacity

//DHTML Positioning
foresee.xPosition="CENTER";   	//enter "CENTER", "LEFT", or "RIGHT" for horizontal positioning
foresee.yPosition="CENTER";    	//enter "CENTER", "TOP", or "BOTTOM" for vertical positioning

/**SCOUT TRACKER PARAMETERS**/
foresee.triggerParms["trackerRetry"] = 2; 				// default=2, check multiple times if OE condition is true.
foresee.triggerParms["trackerDelay"] = 1000;			// default=1 sec, scout delay in millseconds.
foresee.triggerParms["trackerWidth"]  = 500;			// child window Width
foresee.triggerParms["trackerHeight"] = 325;			// child window Height
foresee.triggerParms["trackerThirdPartyCheck"] = 0;		// check for 3rd party persistent cookie if 1,  default 0 or disable
foresee.triggerParms["trackerWinRep"] = 0;				// drops 'ScoutClosed' ScoutRunning cookie if 0
foresee.triggerParms["trackerExclude"]= 0;				// If 1, tracker closes when exclude list requirement is met (default 0)

/**FORESEE SYSTEM PARAMETERS**/
foresee.triggerParms["captureTriggerVersion"] = "OE7.3rel26";// track trigger version
foresee.triggerParms["evtListener"]=1;					// default=1, register tracker as an event listener on body onload, 0 to call separately
foresee.triggerParms["useOneCookie"]= 1;				// drop one cookie if 1, separate cookies if 0
foresee.triggerParms["fsrCkSeparator"] = "||";			// Cookie values seperator
foresee.triggerParms["fsrParmSeparator"] = "=";			// parameters name value pair seperator
foresee.triggerParms["flashDetect"]= 0;					// set to 1 to prevent survey invitation on pages with flash
//display alert message on survey link if user has already surveyed
foresee.fsrMSG1= "Sorry, but you have already surveyed once - Thank you";	

/*********************************
 **CLIENT PAGE SETUP PARAMETERS **
 *********************************/
/**CLIENT CPPS**/
//foresee.triggerParms["oecpp_cppName"]="Foresee_cppName";	//uncomment & enter cppName (in both places)

/**multi-language invite **/
//foresee.triggerParms['midEng']="";						//uncomment & enter english equivalent MID value here
//foresee.triggerParms['langCode']="";						//uncomment & enter foreign language code here 

/**multimeasure lookup table **/
//foresee.midLookupTable = new Array();
//foresee.midLookupTable["NAME"] ="[spL]:[MID]:[nLF]";		//uncomment & enter page name, sampling %, MID and loyalty

/**multivendor lookup table **/
//foresee.vendorLookupTable = new Array();
//foresee.vendorLookupTable["NAME"]	 = "[spL]||[URL]";		//uncomment & define 3rd party vendor name, sampling % and path to code

/**page exclude list, do not show invite/tracker**/
//foresee.excludeList = new Array();
//foresee.excludeList[0]= "[NAME]";							//uncomment & add page names on which to exclude the invitation.

/**page referrer exclude list, do not show invite/tracker**/
//foresee.referrerList = new Array();
//foresee.referrerList[0]= "[NAME]";						//uncomment & add any value that exists in the referrer URL

/**click event Listener Tag List, add event listener on the tag list with matching string**/
//foresee.eventTagList = new Array();
//foresee.eventTagList["matchStr"]= "tag|event";			//uncomment & add tag name and event for a particular matching string in that URL property

/****Customer: Nintendo
/************ don't modify below this line *********
 *************  Version: OnExit 7.3 v.28 [compatible with triggerParams.js v.26] ***********
 ****** Copyright 2001-2008 ForeseeResults, Inc****/

foresee.popupURL = "//web.archive.org/web/20090604123521/http://www.foreseeresults.com/survey/display";	//do not change this url
foresee.FSRImgURL= "//web.archive.org/web/20090604123521/http://www.foreseeresults.com/survey/FSRImg"; 	//do not change this url
foresee.CSURL= "//web.archive.org/web/20090604123521/http://www.foreseeresults.com/survey/processCPP"; 	//do not change this url
foresee.OTCImgURL = "//web.archive.org/web/20090604123521/http://controller.foreseeresults.com/fsrSurvey/OTCImg";
foresee.fullURL="";
foresee.winOptions = "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=1,height=1,top=4000,left=4000";
foresee.ckAlreadyShown = foresee.triggerParms["ascookie"];
foresee.ckLoyaltyCount = foresee.triggerParms["lfcookie"];
foresee.surveyPresentedBy = "normal";
foresee.dcQString="";
foresee.fsrTrackerImg=null;
foresee.OTCImg=null;
foresee.FSRImg=null;
foresee.rNum=null;
foresee.newDt=null;
foresee.currTime=null;	
foresee.runningscout=null;
foresee.scoutTracker=null;
foresee.trackerFromClick = false;
foresee.timeoutId=null;
foresee.fsrAbortTimer=false;
foresee.hParent = window.opener;
foresee.tempURL= null;
foresee.oeCounter=1;
foresee.fireBug = (typeof(console) == "undefined") ? false : true;
foresee.PROCESS_RSID=1;	/*action id to generate respondent*/
foresee.PROCESS_CPP=2;	/*action id to save CPPs*/
foresee.persistentExpires = new Date();
foresee.persistentExpires.setTime(foresee.persistentExpires.getTime() + (foresee.triggerParms["rw"]*60*1000));
foresee.detect = navigator.userAgent.toLowerCase();
foresee.version= navigator.appVersion.toLowerCase();
foresee.fsr_aol= ((foresee.detect.indexOf("aol") >=0) || (foresee.detect.indexOf("america online browser") >=0)) ? 1 : 0;
foresee.fsr_opera = (foresee.detect.indexOf("opera") >=0) ? 1 : 0;
foresee.fsr_NS = ((foresee.detect.indexOf("netscape") >=0) || (foresee.detect.indexOf("firefox") >=0)) ? 1 : 0;
foresee.fsr_NS8=(foresee.detect.indexOf("netscape/8") >=0) ? 1 : 0;	
foresee.fsr_NS70=(foresee.detect.indexOf("netscape") >= 0 && foresee.detect.indexOf("7.0") >= 0) ? 1 : 0;
foresee.fsr_NS62=(foresee.detect.indexOf("netscape") >= 0 && foresee.detect.indexOf("6.2") >= 0) ? 1 : 0;
foresee.fsr_mac= (navigator.platform.indexOf("Win32") < 0) ? 1 : 0;
foresee.fsr_safari=(foresee.detect.indexOf("safari") >=0) ? 1 : 0;
foresee.fsr_safari_2_x=(foresee.fsr_mac && foresee.detect.indexOf("safari") >=0 && foresee.detect.indexOf("412") >= 0) ? 1 : 0;
foresee.fsr_ie=(foresee.detect.indexOf("msie")>=0 && foresee.version.indexOf("win") != -1) ? 1 :0;
foresee.fsr_ie5=(foresee.detect.indexOf("msie 5")>=0 && foresee.version.indexOf("win") != -1) ? 1 :0;
foresee.fsr_sp2=(navigator.appMinorVersion && navigator.appMinorVersion.toLowerCase().indexOf('sp2') != -1) ? 1 : 0
if (typeof(foresee.triggerParms["domain"]) == "undefined") foresee.triggerParms["domain"]= document.domain;
if (foresee.fsr_safari || (foresee.fsr_ie && foresee.fsr_sp2)) foresee.triggerParms["sMode"] = 0;
foresee.triggerParms["dhtmlLeft"]=0;
foresee.triggerParms["dhtmlTop"]=0;

foresee.cppUrlPatch= function cppUrlPatch(s) {
	var translated = "";
	var i; 
	var found = 0;
	for(i = 0; (found = s.indexOf(':', found)) != -1; ) {
		translated += s.substring(i, found) + "|";
		i = found + 1;
		found++;
	}
	translated += s.substring(i, s.length);
	return translated;
}
foresee.specialEscape = function specialEscape(str) {
	var translated = "";
	var i; 
	var found = 0;
	for(i = 0; (found = str.indexOf('+', found)) != -1; ) {
		translated += str.substring(i, found) + "%2B";
		i = found + 1;
		found++;
	}
	translated += str.substring(i, str.length);
	return translated;
}
foresee.fsrExceptionHandler = function fsrExceptionHandler(obj,e) {
	if (foresee.fireBug) {console.log("Error in "+ obj +"."+ e.name + "="+ e.message);}
}
foresee.fsrAttachEvent = function fsrAttachEvent(obj, evt, fnc, useCapture){
	if (foresee.triggerParms["evtListener"] == 0) return false;
	if (fnc == null || obj == null) return true;
	if (obj.addEventListener && document.addEventListener) {
		if (evt == "beforeunload") return false;
		obj.addEventListener(evt,fnc,useCapture);	/*W3C DOM*/
	}
	else if (obj.attachEvent) {
		obj.attachEvent("on"+evt,fnc);	/*IE DOM Model*/
	}
	else {
		/**otherwise not supported by major browsers - disable event listener mode**/
		foresee.triggerParms["evtListener"] = 0;
		return false;
	}
	return true;
} 
foresee.fsrCallCookieTimer = function fsrCallCookieTimer(){
	/**Avoiding False Positive Pops using multiple tabs in browsers**/ 
	if (foresee.fsrReadCookie(foresee.ckAlreadyShown) != null) {return;}
	foresee.fsrWriteCookie('currentURL', escape(window.location.href));
	foresee.timeoutId = setTimeout("foresee.fsrCallCookieTimer()", 1000, "JavaScript");
}		
foresee.ForeCStdGetCookie = function ForeCStdGetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return foresee.ForeCStdGetCookieVal (j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) {
			break;
		}
	}
	return null;
}
foresee.ForeCStdGetCookieVal = function ForeCStdGetCookieVal(offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) {
		endstr = document.cookie.length;
	}
	return document.cookie.substring(offset, endstr);
}
foresee.ForeCStdSetCookie = function ForeCStdSetCookie (name, value, expires, path, domain, secure){
    document.cookie = name+'='+value +
        ((expires) ? ';expires=' + expires.toGMTString() : '') +
        ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ((secure) ? ';secure' : '');
}
foresee.fsrFindCookieVal = function fsrFindCookieVal(ckVal, name){
	if (ckVal == null || typeof ckVal == "undefined" || name==null) return null;
	var ckParams = ckVal.split(foresee.triggerParms["fsrCkSeparator"]);
	for (var i=0; i<ckParams.length; i++) {
		var ckValues = ckParams[i].split(foresee.triggerParms["fsrParmSeparator"]);
		if (name.toLowerCase()==ckValues[0].toLowerCase()){ return unescape(ckValues[1]);}
	}
	return null;
}
foresee.fsrReplaceCookieVal = function fsrReplaceCookieVal(ckVal, name, value){
	if (ckVal == null || typeof ckVal == "undefined") return "";
	var replaceCkValue = "";
	var ckParams = ckVal.split(foresee.triggerParms["fsrCkSeparator"]);
	for (var i=0; i<ckParams.length; i++) {
		var ckValues = ckParams[i].split(foresee.triggerParms["fsrParmSeparator"]);
		replaceCkValue += ckValues[0];
		if (name.toLowerCase()==ckValues[0].toLowerCase()){
			var newCkValue = ckValues[1].replace(ckValues[1], value);
            ckValues[1] = newCkValue;
		}
		if (ckValues[1] != null) {
			replaceCkValue += foresee.triggerParms["fsrParmSeparator"] + ckValues[1];
		}
	    if (i+1 < ckParams.length) {
    	    replaceCkValue += foresee.triggerParms["fsrCkSeparator"];
		}	
	}
	return replaceCkValue;
}
foresee.fsrReadCookie = function fsrReadCookie(paramName, cookieName){
	var ckName="FSRCookie";
	if (arguments.length==2) {
		ckName = cookieName;
	}
	if (foresee.triggerParms["useOneCookie"] == 0 && arguments.length==1) return foresee.ForeCStdGetCookie(paramName);
	var ckVal = foresee.ForeCStdGetCookie(ckName);
	return foresee.fsrFindCookieVal(ckVal, paramName);
}
foresee.fsrWriteCookie = function fsrWriteCookie(parmName, parmValue, cookieName, expDt){
    if (foresee.fsrReadCookie(foresee.ckAlreadyShown) == 'true') return;
	var ckName="FSRCookie";
	if (arguments.length==4) {
		ckName = cookieName;
	}
	if (foresee.triggerParms["useOneCookie"] == 0 && arguments.length==2) {
		(foresee.triggerParms["npc"] == 0 && parmName == foresee.ckAlreadyShown) ? foresee.ForeCStdSetCookie(parmName, parmValue , foresee.persistentExpires, '/',foresee.triggerParms['domain']) : foresee.ForeCStdSetCookie(parmName, parmValue , null ,'/',foresee.triggerParms['domain']);
		return;
	}
	if (parmName == null || parmValue == null || typeof(parmValue) == "undefined") return;
	if (parmValue.length==0) return;
	if (parmName == "ScoutRunningCheck")	{ parmValue = escape(parmValue);}	/*only for MID's we meed to encode the == signs*/
	var ckVal = (foresee.ForeCStdGetCookie(ckName) == null) ? "" : foresee.ForeCStdGetCookie(ckName);
	var isParamExists=false;
	if (ckVal.indexOf(parmName) != -1) {
		ckVal = foresee.fsrReplaceCookieVal(ckVal, parmName, parmValue);
		isParamExists=true;
	}
	if (!isParamExists) {
		if (ckVal.length>0) ckVal += foresee.triggerParms["fsrCkSeparator"];
		ckVal += parmName + foresee.triggerParms["fsrParmSeparator"] + parmValue;
	}
	if (arguments.length==4) foresee.ForeCStdSetCookie(ckName, ckVal , expDt, '/',foresee.triggerParms['domain']);
	else {
		(foresee.triggerParms["npc"]== 0 && parmName == foresee.ckAlreadyShown) ? foresee.ForeCStdSetCookie(ckName, ckVal , foresee.persistentExpires ,'/',foresee.triggerParms['domain']) : foresee.ForeCStdSetCookie(ckName, ckVal , null, '/',foresee.triggerParms['domain']); 
	}
}
foresee.fsrDeleteCookie = function fsrDeleteCookie(name) {
	 var expires="Fri, 3 Aug 2001 00:00:00 GMT";	//some arbitary past date
	 document.cookie = name+'=' + ';expires=' + expires + ';path=/' +
        ((typeof(foresee.triggerParms["domain"]) != "undefined") ? ';domain=' + foresee.triggerParms["domain"] : '');
}
foresee.fsrDeleteAdminCookie = function fsrDeleteAdminCookie(val) {
	if (foresee.triggerParms["useOneCookie"] == 0) {
		foresee.fsrDeleteCookie(foresee.ckAlreadyShown);
		foresee.fsrDeleteCookie('ScoutRunningCheck');
	}
	else {
		foresee.fsrDeleteCookie('FSRCookie');
		foresee.fsrDeleteCookie('FSRAdmin');	
	}
}
foresee.fsrWriteAdminCookie = function fsrWriteAdminCookie(val,lf,sp) {
	if (foresee.triggerParms["useOneCookie"] == 0 && val=="1") foresee.fsrDeleteCookie('ScoutRunningCheck');
	else if (foresee.triggerParms["useOneCookie"] == 1 && val=="1") foresee.fsrDeleteCookie('FSRCookie');
	var expDate = new Date();
	expDate.setTime(expDate.getTime() + (24*60*1000));	//1 day expiry date
	if (val=="0"){
		foresee.fsrWriteCookie("lf", lf, "FSRAdmin", expDate);
		foresee.fsrWriteCookie("sp", sp, "FSRAdmin", expDate);	
	}
	else {
		foresee.fsrWriteCookie("dLF", lf, "FSRAdmin", expDate);
		foresee.fsrWriteCookie("spL", sp, "FSRAdmin", expDate);	
	}
}
foresee.fsrOnBeforeUnload = function fsrOnBeforeUnload(){
	if (foresee.triggerParms["oeMode"] == 1 && foresee.fsrReadCookie(foresee.ckAlreadyShown) == null) {
		if (foresee.fsrReadCookie('currentURL') != null || foresee.fsrReadCookie('currentURL') != 'blank') {
			foresee.fsrWriteCookie('previousURL',escape(foresee.fsrReadCookie('currentURL')));
		}
		foresee.fsrWriteCookie('currentURL', 'blank');
	}
}
foresee.fsrOnUnload = function fsrOnUnload(){
	if (foresee.triggerParms["oeMode"] == 1 && foresee.fsrReadCookie(foresee.ckAlreadyShown) == null) {
		if (foresee.fsrReadCookie('currentURL') != 'blank') {
			foresee.fsrWriteCookie('previousURL',escape(foresee.fsrReadCookie('currentURL')));
		}
		foresee.fsrWriteCookie('currentURL', 'blank');
	}
}
foresee.fsrOnUnloadTracker = function fsrOnUnloadTracker(){
	if(foresee.triggerParms["trackerWinRep"] == 0) {
		foresee.fsrWriteCookie('ScoutRunningCheck', 'ScoutClosed');
	}
}
foresee.fsrGetURLParameters = function fsrGetURLParameters(paramName) {
	if (paramName == null || typeof(paramName) == "undefined") return "";
	try {
	var sURL = window.document.URL.toString();		
	if (sURL.indexOf("?") == -1) return "";
	var arrParams = sURL.split("?");			
	var arrURLParams = arrParams[1].split("&");		
	for (var i=0;i<arrURLParams.length;i++)
	{
	    var sParam =  arrURLParams[i].split("=");
	    if (paramName.toLowerCase()==sParam[0].toLowerCase()){
	    	if (sParam[1] == "undefined") return "";
	       	return unescape(sParam[1]);
	    }
	}
	} catch (e) {}
	return "";
}
foresee.setFSRSurveyCookie = function setFSRSurveyCookie() {
		foresee.fsrWriteCookie(foresee.ckAlreadyShown,'true');
}
foresee.fsrSizeWindow = function fsrSizeWindow(w,h) {
	/**important xp2 fix - do not change these lines below**/
	window.moveTo(self.screen.width/2 - w/2,self.screen.height/2 - h/2);
	window.resizeTo(w,h);
}
foresee.fsrIsCookieEnabled = function fsrIsCookieEnabled() {
	var cookieEnabled=(navigator.cookieEnabled)? true : false;
	/*if not IE4+ nor NS6+*/
	if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled){ 
		document.cookie="testcookie";
		cookieEnabled=(document.cookie.indexOf("testcookie")!=-1)? true : false;
	}
	return cookieEnabled;
}
foresee.isReferrerSponsoredLink = function isReferrerSponsoredLink() {
	if ((window.document.referrer!="")&&(window.document.referrer!="-")){
		if (foresee.fsrIsOnList(foresee.referrerList,foresee.triggerParms["trackerExclude"],document.referrer)) return true;
	}
	return false;
}
foresee.fsrIsOnList = function fsrIsOnList(list,trkActFlg,param){
	/** where list is any generic array list 
        param is the parameter that is checked against this list values
        if param is missing, then by default we choose the page URL 
        trkActFlg is the boolean that is defined in foresee.triggerParms["trackerExclude"], false by default
	**/
	if (typeof(list) == "undefined") return false;
	if (list.length == 0) {return false;}
	if (arguments.length==1 || param == null) {
		foresee.hParent = window.opener;
		if (foresee.hParent != null ){param = foresee.hParent.location.href;}	/**default page url**/
		else {param = window.parent.location.href;}
	}
	/* can still reach the parent - check if on excludeList*/
	for(var i=0; i<list.length ; i++) {
		if ((param.toLowerCase()).indexOf(list[i].toLowerCase()) != -1) {
		    if (typeof(trgActFlg) != "undefined" && trkActFlg==1) foresee.closeTrackerWin();	
			return true;
		}
	}
	return false;
}
foresee.oeImgProc = function oeImgProc() {
	if(foresee.triggerParms["compliant508"] == 1) { foresee.showDHTMLWin(); }
	else {setTimeout("foresee.showDHTMLWin();", foresee.triggerParms["dhtmlDelay"],"JavaScript");}
}
foresee.fsrShowSurvey = function fsrShowSurvey(){
	if(foresee.dcQString == "") { foresee.oeImgProc(); }
	else {
		foresee.newDt   = new Date();
		foresee.currTime= foresee.newDt.getTime(); 
		foresee.FSRImg = new Image();
		foresee.FSRImg.onerror = foresee.imgErrorProc;
		foresee.FSRImg.onload = foresee.imgOnloadProc;
		foresee.FSRImg.src = foresee.FSRImgURL + "?" + foresee.dcQString + "&uid="+ foresee.currTime;	
	}
}
foresee.imgOnloadProc = function imgOnloadProc() {
	if(foresee.FSRImg.width == 3) { foresee.oeImgProc(); }
  	return true;
}
foresee.imgErrorProc = function imgErrorProc() {
	return true;
}
foresee.otcOnloadProc = function otcOnloadProc() {
	if(foresee.OTCImg.width == 3) { foresee.fsrShowSurvey(); }
  	return true;
}
foresee.otcErrorProc = function otcErrorProc() {
	foresee.fsrShowSurvey();
	return true;
}
foresee.fsrSendReq = function fsrSendReq(actId) {
	var midVal= (foresee.triggerParms["mid"] == null) ? foresee.triggerParms["sid"] : foresee.specialEscape(escape(foresee.triggerParms["mid"]));
	if (actId==foresee.PROCESS_RSID) {
		foresee.CSURL += "?actionId="+ actId +"&mid="+ midVal;
	}
	else if (actId==foresee.PROCESS_CPP) {
		foresee.CSURL += "?actionId="+ actId +"&mid="+ midVal + foresee.fsrGetCPP();
	}	
	foresee.fsrTrackerImg = new Image();
 	foresee.fsrTrackerImg.onerror = foresee.fsrOnImgError;
 	foresee.fsrTrackerImg.onload = foresee.fsrOnImgLoad;
 	foresee.newDt   = new Date();
 	foresee.currTime= foresee.newDt.getTime(); 
 	foresee.fsrTrackerImg.src = foresee.CSURL + "&uid="+ foresee.currTime;
}
foresee.fsrOnImgLoad = function fsrOnImgLoad(){
	if(foresee.fsrTrackerImg.width >= 5) {
		if (foresee.triggerParms["sMode"]==1) {
			foresee.fsrWriteCookie("fsrImgLoaded",false);
			window.close();
		}
	}
	else {
		if (foresee.triggerParms["sMode"]==1) foresee.fsrWriteCookie("fsrImgLoaded",true);
	}
}
foresee.fsrOnImgError = function fsrOnImgError() {
	if (foresee.triggerParms["sMode"]==1) foresee.fsrWriteCookie("fsrImgLoaded",false);
}
foresee.fsrSetFilter = function fsrSetFilter() {
	foresee.fullURL += "&sid=" + foresee.triggerParms["sid"];
	if (foresee.triggerParms["patternType"] != null && (foresee.triggerParms["patternType"].toUpperCase()).indexOf("URL") != -1) {
		var parentURL = "";
		if (foresee.fsrReadCookie('currentURL') != null && foresee.fsrReadCookie('currentURL') != 'blank')
			parentURL = foresee.fsrReadCookie('currentURL');
		else if (foresee.fsrReadCookie('previousURL') != null)
			parentURL = foresee.fsrReadCookie('previousURL');
		foresee.fullURL += "&pattern="+ escape(parentURL);
	}
	else if (foresee.triggerParms["patternType"] != null && (foresee.triggerParms["patternType"].toUpperCase()).indexOf("CK=") != -1) {
		var pos = foresee.triggerParms["patternType"].indexOf("=");
		var cookieValue = foresee.fsrReadCookie(foresee.triggerParms["patternType"].substring(pos+1));
		foresee.fullURL += "&pattern="+ escape(cookieValue);
	}
	else if (foresee.triggerParms["patternType"] != null && (foresee.triggerParms["patternType"].toUpperCase()) != null && foresee.triggerParms["patternType"].length >0) {
		foresee.fullURL += "&pattern="+ escape(foresee.triggerParms["patternType"]);
	}	
}
foresee.fsrSetFullURL = function fsrSetFullURL() {
	foresee.fullURL = foresee.popupURL + "?" + "width=" + foresee.triggerParms["width"] + "&height=" + foresee.triggerParms["height"] +
		"&cid=" + foresee.specialEscape(escape(foresee.triggerParms["cid"]));
	if (foresee.triggerParms["sid"] != null && foresee.triggerParms["mid"] == null) {
		foresee.fsrSetFilter();
	}		
	if (foresee.triggerParms["mid"] != null) {
		foresee.fullURL += "&mid=" + foresee.specialEscape(escape(foresee.triggerParms["mid"]));
	}
	if (foresee.triggerParms["omb"] != null) {
		foresee.fullURL += "&omb=" + escape(foresee.triggerParms["omb"]);
	}
	if ((foresee.triggerParms["cmetrics"] ) != null) {
		foresee.fullURL += "&cmetrics=" + escape(foresee.triggerParms["cmetrics"]);
	}	
	if (foresee.triggerParms["olpu"] == 1) {
		foresee.fullURL += "&olpu=1";
	}
	if ((foresee.triggerParms["dcUniqueId"]) != null) {
		foresee.fullURL += "&dcUniqueId=" + escape(foresee.triggerParms["dcUniqueId"]);
	}
	if ((foresee.triggerParms["midexp"] ) != null) {
		foresee.fullURL += "&ndc=1&fsexp=5256000&midexp=" + foresee.triggerParms["midexp"];
	}
	if (foresee.triggerParms["sMode"] != null) {
		foresee.fullURL += "&sMode="+ foresee.triggerParms["sMode"];
	}
}
foresee.getCPPString = function getCPPString(){
	var cppString="";
	for(paramKey in foresee.triggerParms) {
	     if(paramKey.substring(0,3) == "cpp"){
		  cppString += "&" + paramKey + "=" + escape(foresee.triggerParms[paramKey]);
	     }
	}
	return cppString;
}
foresee.fsrGetCPP = function fsrGetCPP(){
	var pageCount = foresee.fsrReadCookie(foresee.ckLoyaltyCount);
	if (pageCount == null) {pageCount = 1;}
	if (foresee.triggerParms["capturePageView"] == 1) {
		foresee.triggerParms["cpp_2"] = "PageView:"+ pageCount; 
	}
	var sMode=foresee.triggerParms["sMode"];
	if (foresee.triggerParms["sMode"] == null) {sMode=0};
	foresee.triggerParms["cpp_3"] = "Browser:OE_Mode"+ foresee.triggerParms["oeMode"] +";Survey_Mode"+ sMode +";" + foresee.cppUrlPatch (foresee.detect) + ";" + foresee.triggerParms["captureTriggerVersion"] + ";" + foresee.fsrGetURLParameters('surveypresented');
	var counter=4;
	for(paramKey in foresee.triggerParms) {
		if(paramKey.substring(0,5) == "oecpp"){
			var value = foresee.triggerParms[paramKey];
			var session = foresee.fsrReadCookie(value);
			if (session != null) {
				foresee.triggerParms["cpp_"+ counter] = value.substring(8,value.length) + ":" + foresee.cppUrlPatch (session);
				counter++;	
			}
		}
	}	
	return foresee.getCPPString();
}
/************************* Scout Tracker Code starts here **************************/
foresee.fsrShowConsole = function fsrShowConsole(msg){
	if (foresee.fireBug) {
		console.log(msg);
	}
}
foresee.popSurvey = function popSurvey(){
	if (!foresee.oePoll()) {window.close();}
	foresee.fsrAbortTimer=true; /**used to abort tracker code which is running in a loop**/
}
foresee.isParentClosed = function isParentClosed(){
	try {if (window.opener.closed){return true;}}
	catch (e) {return true;}
	return false;
}
foresee.retryScout = function retryScout(){
	if (foresee.oeCounter<foresee.triggerParms["trackerRetry"]) {
		foresee.oeCounter++;
		return true;
	}
	/** added MODE 0 false positive check for MODE 1 (sitewise) code to see if its in the same domain otherwise continue checking**
	 ** Updated 3/3/08 **/
	try {
	  if (foresee.triggerParms["oeMode"] == 1) {
	      foresee.hParent = window.opener;
		  foresee.fsrShowConsole("retryScout() - Checking domain false positive check");
	      if (foresee.triggerParms["domain"] == null || typeof(foresee.triggerParms["domain"]) == "undefined") { foresee.triggerParms["domain"] = window.location.hostname;}
	      if ((foresee.hParent.location.hostname).indexOf(foresee.triggerParms["domain"]) != -1 ) {
			if (foresee.oeCounter >1) {foresee.oeCounter=1;}
			return true;
	      }
	  }
	} catch (e) {
		  foresee.fsrShowConsole("retryScout() - domain check failed - popping survey");
	}
	if (!foresee.fsrAbortTimer)	foresee.popSurvey();
	return false;
}
foresee.updateParentURL = function updateParentURL(){
try {
	if (foresee.triggerParms["userURL"] == 1) {
		if (foresee.triggerParms["oeMode"] == 0){
			foresee.hParent = window.opener;
			foresee.triggerParms["cpp_1"] = "userURL:"+ foresee.cppUrlPatch (foresee.hParent.location.href);
		}
		else {
			if (foresee.fsrReadCookie('previousURL') != null && arguments.length == 0 && foresee.triggerParms["nLF"] == null)
				foresee.triggerParms["cpp_1"] = "userURL:"+ foresee.cppUrlPatch (foresee.fsrReadCookie('previousURL'));
			else {
				if (foresee.fsrReadCookie('currentURL') == 'blank') foresee.triggerParms["cpp_1"] = "userURL:"+ foresee.cppUrlPatch (foresee.fsrReadCookie('previousURL'));
				else foresee.triggerParms["cpp_1"] = "userURL:"+ foresee.cppUrlPatch (foresee.fsrReadCookie('currentURL'));
			}
		}
	}
} catch (e) {foresee.fsrShowConsole(e); foresee.errortrap();}	
}
foresee.updateLoyaltyFactor = function updateLoyaltyFactor() {
try {
   var currentURL=null;
   if (arguments.length==0 && foresee.triggerParms["oeMode"] == 0){
   	foresee.hParent = window.opener;
   	currentURL= foresee.hParent.location.href;/*throws exception in OnExit condition*/
   }
   else if (foresee.triggerParms["oeMode"] == 1){
   	currentURL = foresee.fsrReadCookie('currentURL');
   }
   if (currentURL != foresee.tempURL && currentURL != 'blank') {
    	var stickyCounter =  foresee.fsrReadCookie(foresee.ckLoyaltyCount);
		if (stickyCounter == null) {stickyCounter = 1;}
		else if (arguments.length == 0) stickyCounter++;
		foresee.fsrWriteCookie(foresee.ckLoyaltyCount,stickyCounter);
   }
   foresee.tempURL=currentURL;
   if (typeof(foresee.excludeList) != "undefined") {if (foresee.fsrIsOnList(foresee.excludeList,foresee.triggerParms["trackerExclude"])) {return;}}
} catch (e) {foresee.fsrShowConsole(e); foresee.errortrap();}	
}
foresee.javaUpdate = function javaUpdate(){
	foresee.updateParentURL();
	if (foresee.triggerParms["dLFPreCheck"]==0) foresee.updateLoyaltyFactor();
	if(foresee.triggerParms["nLF"] != null) {	
		var lfCounter = foresee.fsrReadCookie(foresee.ckLoyaltyCount);
		if(lfCounter >= foresee.triggerParms["nLF"] && (foresee.fsrReadCookie("fsrImgLoaded") != null && foresee.fsrReadCookie("fsrImgLoaded") == "true")) {
			foresee.trackerFromClick=true;
			if (!foresee.fsrAbortTimer)	foresee.popSurvey();
		}		
	}	
}
foresee.fsrSurveyTimeout = function fsrSurveyTimeout(){
try {
	foresee.fsrShowConsole("foresee.fsrSurveyTimeout() - checking exit condition...");
	if (foresee.fsrAbortTimer) { 
		foresee.fsrShowConsole("foresee.fsrSurveyTimeout() - STOP checking...");
		return false;
	}
	if (foresee.fsrReadCookie("ScoutRunningCheck") == null || foresee.fsrReadCookie(foresee.ckAlreadyShown) != null) {window.close();}
	foresee.javaUpdate();
	foresee.hParent = window.opener;
	if (foresee.triggerParms["oeMode"] == 0) {
		if (window.document.domain != foresee.hParent.document.domain) {
			if (foresee.retryScout()&& !foresee.fsrAbortTimer) {
				setTimeout("foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );
			}
		}
		else if (!foresee.fsrAbortTimer) {setTimeout("foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );}
	}
	else {
		foresee.fsrIsCookieBlank();
	}
} catch (e) {foresee.fsrShowConsole(e); foresee.errortrap();}	
}
foresee.fsrIsCookieBlank = function fsrIsCookieBlank(){
try {	/*no cookies setup, close tracker*/
	if (foresee.fsrReadCookie("currentURL") == null){window.close();}
	else {
		if (foresee.fsrReadCookie('currentURL') == 'blank') {
			foresee.fsrShowConsole("fsrIsCookieBlank() - Cookie blank check :"+ foresee.oeCounter);
			foresee.fsrWriteCookie('fsr_retry', foresee.oeCounter);
			/**In IE, onUnload is blocked by GoogleToobar if the parent browser/tab is closed
			 **To make the cookie blank, we use the onBeforeUnload event for IE only
			 **Otherwise it causes the survey to pop even when other tabs are open
			 **In Mozilla - do not use hParent.closed - causes problem
			 **COMMENTED CODE BELOW TO AVOID SURVEY WHEN CLOSING MULTIPLE TABS
			 **updated 5/7/08 **/
			 //if (window.opener == null || (foresee.fsr_ie && foresee.isParentClosed())){
				// updateParentURL(true);/*get currentURL instead of previousURL*/
				// foresee.oeCounter = foresee.triggerParms["trackerRetry"];
				 //if (!foresee.fsrAbortTimer) foresee.popSurvey(); 
				 //return false;
			 //}
			 if (foresee.retryScout() && !foresee.fsrAbortTimer) {			
				setTimeout ( "foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );
			 }
		}
		else {
			/**resetting retry counter to avoid false positive due to delay in page loading**/
			if (foresee.oeCounter >1) {foresee.oeCounter=1;}
			if (!foresee.fsrAbortTimer) {setTimeout("foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );}
		}
	}
} catch (e) {foresee.fsrShowConsole(e);}
}
foresee.errortrap = function errortrap(){
	/*for debugging purpose*/
	foresee.fsrShowConsole("errortrap() - Exception caught");
	if (foresee.fsrReadCookie("ScoutRunningCheck") == null) {window.close();}
	foresee.hParent = window.opener;
	if (foresee.triggerParms["oeMode"] == 0){
		if (foresee.hParent == null || (foresee.fsr_ie && foresee.isParentClosed())){ foresee.oeCounter = foresee.triggerParms["trackerRetry"]};
		if (foresee.retryScout() && !foresee.fsrAbortTimer) {setTimeout("foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );}
	}
	else {
		foresee.fsrIsCookieBlank();
	}
	return true;
}
/********************* Scout Tracker Code ends here *****************************/
foresee.showDHTMLWin = function showDHTMLWin(){
	if((foresee.runningscout != null && !foresee.runningscout.closed && foresee.fsr_aol==false) || foresee.scoutTracker != null){return;}
	foresee.surveyPresentedBy = "dhtml";
	if(document.all) {
		if (foresee.triggerParms["dhtmlHighlight"]==1) document.all.fsrOverlayDiv.style.visibility = 'visible';
		document.all.FSRInviteWin.style.visibility = 'visible';
	}			
	else if(document.getElementById) {
		if (foresee.triggerParms["dhtmlHighlight"]==1) document.getElementById("fsrOverlayDiv").style.visibility = 'visible';
		document.getElementById("FSRInviteWin").style.visibility = 'visible';
	}	
}
foresee.FSRInviteAct = function FSRInviteAct(actFlag) {
	if(actFlag == '1') {
		if (arguments.length>1) {
			foresee.triggerParms["mid"] = arguments[1];
			foresee.fsrWriteCookie(foresee.triggerParms["oecpp_Language"], arguments[2]);
		}
	 	foresee.openTrackerWin();
	}
	else {
		foresee.setFSRSurveyCookie();
	}
	/*always hide div after tracker is open otherwise it will be blocked in IE-GooglePopup blocker*/

	if(document.all) {
		if (foresee.triggerParms["dhtmlHighlight"]==1) document.all.fsrOverlayDiv.style.visibility = 'hidden';
		document.all.FSRInviteWin.style.visibility = 'hidden';
	}	
	else if(document.getElementById) {
		if (foresee.triggerParms["dhtmlHighlight"]==1) document.getElementById("fsrOverlayDiv").style.visibility = 'hidden';
		document.getElementById("FSRInviteWin").style.visibility = 'hidden';
	}
}
foresee.fsrSetDivPos = function fsrSetDivPos() {
	var xWidth;var yWidth;
	if (window.innerHeight) {
		/**used by Mozilla based browsers and Safari **/
		xWidth = window.innerWidth; yWidth = window.innerHeight;
	} else if (document.documentElement.clientHeight > 0) {
		/**used by IE based browsers **/
		xWidth = document.documentElement.clientWidth; yWidth = document.documentElement.clientHeight;
	} else {
		/**used by AOL Explorer **/
		xWidth = document.body.clientWidth; yWidth = document.body.clientHeight;
	}
	if (foresee.xPosition == "CENTER") {foresee.triggerParms["dhtmlLeft"] = (xWidth/2) - (foresee.triggerParms["dhtmlWidth"]/2);}
	else if (foresee.xPosition == "LEFT") {foresee.triggerParms["dhtmlLeft"] = 10;}
	else if (foresee.xPosition == "RIGHT") {foresee.triggerParms["dhtmlLeft"] = (xWidth) - (foresee.triggerParms["dhtmlWidth"]) - 30;}
	if (foresee.yPosition == "CENTER") {foresee.triggerParms["dhtmlTop"] = (yWidth/2) - (foresee.triggerParms["dhtmlHeight"]/2);}
	else if (foresee.yPosition == "TOP") {foresee.triggerParms["dhtmlTop"] = 10;}
	else if (foresee.yPosition == "BOTTOM") {foresee.triggerParms["dhtmlTop"] = (yWidth) - (foresee.triggerParms["dhtmlHeight"]) - 30;}
}
foresee.fsrShowDIV = function fsrShowDIV(divId, dLeft, dTop, dWidth, dHeight, dVisible, zIdx, pos, cursorType) {
	var oBody = document.getElementsByTagName("BODY")[0];
	if (oBody==null || typeof(oBody) == "undefined") {
		return false;
	}	
	var oDiv = document.createElement("div");
	oDiv.id = divId;
	oDiv.style.background = foresee.triggerParms["dhtmlOverlayBgClr"];
	oDiv.style.position = pos;
	oDiv.style.left = dLeft +"pt";
	oDiv.style.top = dTop +"pt";
	oDiv.style.width=dWidth +"%";
	oDiv.style.height=dHeight +"%";
	oDiv.style.border = "0";
	oDiv.style.visibility = dVisible;
	oDiv.style.zIndex = zIdx;
	oDiv.style.opacity = foresee.triggerParms["dhtmlOverlayOpacity"];
	oDiv.style.filter = "-moz-opacity ="+ foresee.triggerParms["dhtmlOverlayOpacity"];
	oDiv.style.filter = "alpha(opacity="+ foresee.triggerParms["dhtmlOverlayOpacity"]*100+")";
	oDiv.style.cursor = cursorType;
	oBody.appendChild(oDiv);
	return true;
}
foresee.fsrCreateInvite = function fsrCreateInvite(type, divId, dLeft, dTop, dWidth, dHeight, dVisible, frameId, fWidth, fHeight, fScroll, frameSrc) {
	if (type==1) {/*when opening Invite*/
		foresee.fsrSetDivPos();
		dLeft = foresee.triggerParms["dhtmlLeft"];
		dTop = foresee.triggerParms["dhtmlTop"];
	}
	if (foresee.triggerParms["evtListener"]==0 && type==1){
		var divStr= "<div id=\""+ divId+ "\" style=\"position:absolute; left:" + dLeft+"px; top:"+ dTop+ "px; z-index:"+foresee.triggerParms["dhtmlIndex"]+"; border:0; visibility:"+dVisible+";\">"
				   +"<iframe id=\""+ frameId+"\" src=\""+ frameSrc+"\" FrameBorder=0 Scrolling="+fScroll+" width="+fWidth+" height="+fHeight+"></iframe></div>";
		document.write(divStr);
		return true;	
	}
	var oBody = document.getElementsByTagName("BODY")[0];
	if (oBody==null || typeof(oBody) == "undefined") {
		return false;
	}	
	var oDiv = document.createElement("div");
	oDiv.id = divId;
	oDiv.style.position = "absolute";
	oDiv.style.left = dLeft +"px";
	oDiv.style.top = dTop +"px";
	if (type==0) {/*when opening Tracker*/
		oDiv.style.width=dWidth +"%";;
		oDiv.style.height=dHeight +"%";
	}
	oDiv.style.border = "0";
	oDiv.style.visibility = dVisible;
	oDiv.style.zIndex = foresee.triggerParms["dhtmlIndex"];
	oBody.appendChild(oDiv);
	var divEl  = document.getElementById(divId);
	var oFrame = document.createElement("iframe");
	oFrame.id  = frameId;
	oFrame.src = frameSrc;
	if (type==1) {/*when opening Invite*/
		oFrame.width=fWidth +"px";
		oFrame.height=fHeight +"px";
	}
	else {
		oFrame.width=fWidth + "%";
		oFrame.height=fHeight + "%";
	}
	oFrame.frameBorder = "0";
	oFrame.scrolling = fScroll;
	divEl.appendChild(oFrame);
	return true;
}
foresee.fsrCreateScript = function fsrCreateScript(srcName, tag){
	var headNode = document.getElementsByTagName(tag)[0];
    var fsrScript = document.createElement('script');
    fsrScript.type = 'text/javascript';
    fsrScript.src = srcName;
    headNode.appendChild(fsrScript);
}
foresee.fsrLoadIFrame = function fsrLoadIFrame(){
	if (foresee.triggerParms["sMode"] == 1) {
		foresee.fsrSetFullURL();
		foresee.fsrCreateInvite("0", "FSRSurveyDiv", 0, 0, 100, 100, "hidden", "FSRSurveyIframeWin", 100, 100, "YES", foresee.fullURL);  
	}
}
foresee.closeTrackerWin = function closeTrackerWin() {
    foresee.scoutTracker = foresee.fsrReadCookie("ScoutRunningCheck");
    if (foresee.scoutTracker!=null) {
		var trackerWin = window.open("","ForeseeSurveyWindow");
	    if (trackerWin != null && !trackerWin.closed) {trackerWin.close();}
    }
}
/**passing a parameter 'true' will increment LF cookie */
foresee.fsrCheckPageVisited = function fsrCheckPageVisited() {
	if (foresee.triggerParms["dLFPreCheck"] == 0) {return foresee.triggerParms["dLF"];}
	var stickyCounter = foresee.fsrReadCookie(foresee.ckLoyaltyCount);
 	if (stickyCounter == null) stickyCounter = 0;
 	 /**don't drop or increment LFCookie when pageCounter<=1 or continue button is clicked from Invite dhtml ***/
 	if (arguments.length==1) {
 		stickyCounter++;
 		foresee.fsrWriteCookie(foresee.ckLoyaltyCount, stickyCounter);
 	}
 	return stickyCounter;
}
foresee.openFSRSurveyLink = function openFSRSurveyLink() {	
	foresee.fsrSetClientCPPS();
	foresee.closeTrackerWin();
	var lf =(self.screen.width - foresee.triggerParms["width"])/2;
	var tp =(self.screen.height - foresee.triggerParms["height"])/2;
	foresee.winOptions = "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,top="+tp+",left="+lf+",width="+foresee.triggerParms["width"]+ ",height="+ foresee.triggerParms["height"];
	foresee.trackerFromClick=true;
	if (!foresee.oePoll(true)) {alert(foresee.fsrMSG1)};
}
foresee.oePoll = function oePoll() {
	foresee.rNum = Math.random()*100;
	var stickyCounter = foresee.fsrReadCookie(foresee.ckLoyaltyCount);
	var alreadyShown = foresee.fsrReadCookie(foresee.ckAlreadyShown);
	if (alreadyShown == null && stickyCounter != null) {
		if(stickyCounter >= foresee.triggerParms["dLF"] || foresee.trackerFromClick) {
		    if(foresee.rNum <= foresee.triggerParms["spE"]) {
				foresee.setFSRSurveyCookie();
		    	if (foresee.triggerParms["sMode"] == 1 && arguments.length==0) {
					foresee.fsrSendReq(foresee.PROCESS_CPP);
					if (foresee.triggerParms["olpu"] == 0) window.blur();
					else window.focus();
					document.getElementById("FSRTrackerDiv").style.visibility = "hidden";
					document.getElementById("FSRSurveyDiv").style.visibility = "visible";
					foresee.fsrSizeWindow(foresee.triggerParms["width"],foresee.triggerParms["height"]);	
					return true;
				}
				else {	
					foresee.fsrSetFullURL();
					foresee.fullURL += foresee.fsrGetCPP();
					document.getElementById("FSRTrackerDiv").innerHTML = "<font class='subtitle'>Survey is loading. Please wait...</font>";
					var myPopUp = window.open(foresee.fullURL, "ForeseeSurveyWindow",foresee.winOptions);
					if(myPopUp == null || myPopUp.closed) {return false;}
					if (foresee.triggerParms["olpu"] == 0) myPopUp.blur();
					else myPopUp.focus();
					return true;
				}
			}				
		}
	}
	return false;
}
foresee.openTrackerWin = function openTrackerWin(){
	var sl = (screen.width-foresee.triggerParms["trackerWidth"])/2;
	var st = (screen.height-foresee.triggerParms["trackerHeight"])/2;
	var winOpts = "top=" + st + ",left=" + sl + ",width=" + foresee.triggerParms["trackerWidth"] + ",height=" + foresee.triggerParms["trackerHeight"] + ",resizable=1,toolbar=0,location=0,statusbar=0,menubar=0";
	if (foresee.triggerParms["sMode"] == 1) { winOpts += ",scrollbars=0";}
	else {winOpts += ",scrollbars=1";}
	if(arguments.length == 0) {foresee.rNum = 0}		
	foresee.scoutTracker = foresee.fsrReadCookie("ScoutRunningCheck");
	if (foresee.scoutTracker == null) {
		/**** Checking dLF & spL before opening ScoutTracker ***/
		if(foresee.fsrCheckPageVisited() >= foresee.triggerParms["dLF"] && foresee.rNum <= foresee.triggerParms["spL"]) {
		   if (foresee.triggerParms["displayMode"] ==3 && arguments[0] >0) {return 0;}
		   foresee.runningscout = window.open(foresee.triggerParms["trackerURL"]+"?mid="+escape(foresee.triggerParms["mid"]) + "&sid="+ foresee.triggerParms["sid"] +"&surveypresented="+foresee.surveyPresentedBy, "ForeseeSurveyWindow", winOpts);
		}
		else {return 1;}
	} else {	
		var midVal="";
		if (typeof(foresee.triggerParms["mid"]) == "undefined") midVal = foresee.triggerParms["sid"];
		if (typeof(foresee.triggerParms["sid"]) == "undefined") midVal = foresee.triggerParms["mid"];
		/*dont show dhtml or open scout again if already surveyed or mid is same or if one scout closes another scout or user closes scout or dhtml*/
		if (foresee.fsrReadCookie(foresee.ckAlreadyShown) != null || foresee.scoutTracker == midVal){return 1;}
		/*otherwise override scout tracker with another MID - ignore spL once tracker is open */
		foresee.runningscout = window.open(foresee.triggerParms["trackerURL"]+"?mid="+escape(foresee.triggerParms["mid"]) + "&sid="+ foresee.triggerParms["sid"] + "&surveypresented="+foresee.surveyPresentedBy, "ForeseeSurveyWindow", winOpts);
	}	
	if((foresee.trackerFromClick == true || arguments.length == 0) && foresee.runningscout != null && !foresee.runningscout.closed) {
		/**hide behind when opening through DHTML Invite or Click event **/
		foresee.runningscout.blur();
	}
	window.parent.focus();
	if (foresee.triggerParms["sMode"] == 1 || (foresee.triggerParms["sid"] != null && foresee.triggerParms["mid"] == null && foresee.triggerParms["patternType"] != null)) {foresee.fsrSendReq(foresee.PROCESS_RSID);}	/*generate RSID when new tracker opens*/
	return 0;
}
foresee.openFSRTracker = function openFSRTracker() {	
		var alreadyShown = foresee.fsrReadCookie(foresee.ckAlreadyShown);
		var excludeBrowserFlag = foresee.fsr_NS62 || foresee.fsr_safari_2_x;
		if(foresee.triggerParms["displayMode"] == 0 || excludeBrowserFlag || alreadyShown!=null || foresee.fsrReadCookie("ScoutRunningCheck") == 'ScoutClosed' || !foresee.fsrIsCookieEnabled()) {return;}
		foresee.fsrSetAdminParms();
		foresee.fsrCheckPageVisited(true);	/**passing true will indicate an increment to LF cookie */		
		var excludeListFlag = false; 
		if (typeof(foresee.excludeList) != "undefined") {excludeListFlag = foresee.fsrIsOnList(foresee.excludeList,foresee.triggerParms["trackerExclude"]);}
		if(excludeListFlag || foresee.isReferrerSponsoredLink()) {return;}
		foresee.trackerFromClick = false;
		if (arguments.length>0 && arguments[0] == '0')	foresee.triggerParms["displayMode"] = 0;
		if(arguments.length >0 && arguments[1] == true) {foresee.trackerFromClick = true;}
		if (foresee.triggerParms["sid"] != null && foresee.triggerParms["mid"] == null && foresee.triggerParms["patternType"] != null && (foresee.triggerParms["patternType"].toUpperCase()).indexOf("URL") != -1) {
			foresee.triggerParms["sMode"] = 0;
			if (foresee.triggerParms["oeMode"] == 0) {
				foresee.fsrWriteCookie("currentURL", escape(window.location.href));
			}
		}
		foresee.rNum = Math.random()*100;
		/***calling client functions here **/
		if (foresee.fsrSetClientFunc() == false) return;
		/***/
		var scoutFlag = foresee.openTrackerWin(foresee.rNum);
		if (foresee.fsr_aol) {
		  try{ /*aolToolbar and yahoo popupblocker fix*/
		    foresee.runningscout.focus();
		    scoutFlag=1;
		  } catch (e){scoutFlag=0;}
		}
		if(!foresee.trackerFromClick && !foresee.fsr_NS70 && (scoutFlag==null || scoutFlag == 0) && foresee.triggerParms["displayMode"] != 2) {
				if (foresee.fsr_NS8) foresee.triggerParms["dhtmlHeight"] = foresee.triggerParms["dhtmlHeight"] + 15;
				/**show curtain-div **/
				if (foresee.triggerParms["dhtmlHighlight"]==1) foresee.fsrShowDIV("fsrOverlayDiv", 0, 0, 100, 100, "hidden", 9999, "fixed", "wait");
				/**creating foresee invite div element using DOM**/ 
				if (!foresee.fsrCreateInvite("1", "FSRInviteWin", foresee.triggerParms["dhtmlLeft"], foresee.triggerParms["dhtmlTop"], 100, 100, "hidden", "cframe", foresee.triggerParms["dhtmlWidth"], foresee.triggerParms["dhtmlHeight"], "NO", foresee.triggerParms["dhtmlURL"])) {foresee.fsrWriteCookie("FSRDivCreated", "false"); return;}
				if ((foresee.triggerParms["midexp"] ) != null) {
					foresee.dcQString = "ndc=1&midexp=" + foresee.triggerParms["midexp"] + "&mid=" + foresee.specialEscape(escape(foresee.triggerParms["mid"]));
					if(foresee.triggerParms["dcUniqueId"]!=null) { foresee.dcQString += "&dcUniqueId=" + foresee.specialEscape(escape(foresee.triggerParms["dcUniqueId"])); }						
				}
				foresee.newDt   = new Date();
				foresee.currTime= foresee.newDt.getTime(); 
				foresee.OTCImg = new Image();
				foresee.OTCImg.onerror = foresee.otcErrorProc;
				foresee.OTCImg.onload = foresee.otcOnloadProc;
				foresee.OTCImg.src = foresee.OTCImgURL + "?protocol=" + window.location.protocol + "&uid="+ foresee.currTime;	
				
		}
}
foresee.openMultiVendorSurvey = function openMultiVendorSurvey(randNum) {
		foresee.closeTrackerWin();			/**Explicitly closing tracker if its open **/		
		/**Looping through MultiVendors**/
		var spVendor1 = foresee.triggerParms["spL"];
		for(var key in foresee.vendorLookupTable) {
			pos = foresee.vendorLookupTable[key].indexOf(foresee.triggerParms["fsrCkSeparator"]);
			vendorSP = foresee.vendorLookupTable[key].substring(0,pos);
			vendorURL= foresee.vendorLookupTable[key].substring(pos+2);
			if (randNum > spVendor1 && randNum <= vendorSP) {
				foresee.setFSRSurveyCookie();
				foresee.fsrCreateScript(vendorURL, "head");		/*appending dynamic vendor's survey code at the end of body tag*/
				return;
			}
			spVendor1 = vendorSP;
		}
}
foresee.fsrSetAdminParms = function fsrSetAdminParms(){
	if (foresee.fsrReadCookie("dLF","FSRAdmin") != null && foresee.fsrReadCookie("spL","FSRAdmin") != null) {
		foresee.triggerParms["dLF"] = foresee.fsrReadCookie("dLF","FSRAdmin");
		foresee.triggerParms["spL"] = foresee.fsrReadCookie("spL","FSRAdmin");
	}
}
foresee.fsrSetMode1Parms = function fsrSetMode1Parms(){
	if (foresee.triggerParms["oeMode"] == 1 && foresee.fsrReadCookie(foresee.ckAlreadyShown) == null) {
		if (foresee.fsr_ie) foresee.fsrAttachEvent(window, "beforeunload", foresee.fsrOnBeforeUnload, false);
		foresee.fsrAttachEvent(window, "unload", foresee.fsrOnUnload, false);
    	setTimeout("foresee.fsrCallCookieTimer()", 1000, "JavaScript");
	}
}
foresee.fsrSetTrackerParms = function fsrSetTrackerParms(){
	midVal = foresee.fsrGetURLParameters('mid');
	if (midVal == "") {
		midVal = foresee.fsrGetURLParameters('sid');
		if (midVal=="")	midVal = foresee.triggerParms["mid"];
	}
	else {foresee.triggerParms["mid"] = midVal;}
	foresee.fsrWriteCookie("ScoutRunningCheck", midVal);
	foresee.fsrSetTriggerParms();
}
foresee.fsrSetTriggerParms = function fsrSetTriggerParms(cValue){
	if (foresee.fsr_ie5) foresee.triggerParms["evtListener"]=0;
	if (typeof(foresee.midLookupTable) == "undefined") return false;
	if (cValue == null) {	/**check location pathname as default **/
			foresee.hParent = window.opener;
			if (foresee.hParent != null )	{cValue = foresee.hParent.location.href;}	
			else {cValue = window.location.href;}
	}
	for(var key in foresee.midLookupTable) {
		if ((cValue.toLowerCase()).indexOf(key.toLowerCase()) != -1) {
			var lookupParams = foresee.midLookupTable[key].split(":");			
			foresee.triggerParms["spL"] = lookupParams[0];
			foresee.triggerParms["mid"] = lookupParams[1];
			if (lookupParams.length == 3)	foresee.triggerParms["nLF"] = lookupParams[2];
			return true;
		}
	}
	return false;
}
foresee.fsrTagEvent = function fsrTagEvent(tag,matchStr,evt,fnc){
	var anchorTags=null;
	if (window.opener) 
		anchorTags = window.opener.document.getElementsByTagName(tag.toLowerCase());
	else 
		anchorTags = document.getElementsByTagName(tag.toLowerCase());
	for (var i=0; i< anchorTags.length ; i++)
	{
	   var oTag = anchorTags[i];
	   var oProperty = oTag.href;
 	   if (oProperty != null) {
 	   		if ((oProperty.toLowerCase()).indexOf(matchStr.toLowerCase()) != -1) {
		   		foresee.fsrAttachEvent(oTag, evt, fnc);
			}
		}
	}
}
foresee.fsrTagEventListeners = function fsrTagEventListeners(tagFunc){
	if (typeof(foresee.eventTagList) == "undefined" || foresee.fsrReadCookie(foresee.ckAlreadyShown) != null) {
		return;
	}
	if (tagFunc == null) return;
	for(var matchingStr in foresee.eventTagList) {
		var arrParams = foresee.eventTagList[matchingStr].split("|");			
		if (arrParams.length==2) {
			foresee.fsrTagEvent(arrParams[0], matchingStr, arrParams[1], tagFunc);
		}
	}
}
foresee.fsrSetClientFunc = function fsrSetClientFunc(){
	/** add event listener here **/
	foresee.fsrTagEventListeners(foresee.closeTrackerWin);	//passing function reference as parameter to be executed
	/** add multivendor code here **/
	if (typeof(foresee.vendorLookupTable) != "undefined") {
		if (foresee.rNum >0 && foresee.rNum > foresee.triggerParms["spL"]) {
			foresee.openMultiVendorSurvey(foresee.rNum);
			return false;
		}
	}
	if (foresee.triggerParms["flashDetect"]==1){
		if (foresee.fsrDetectFlash() == false) return false;
	}
	return true;
}
foresee.fsrDetectFlash = function fsrDetectFlash(){
	/** return a true if no flash is detected otherwise dont show invite/tracker **
	/** For Mozilla based browsers **/
	if (document.embeds && document.embeds.length > 0) {
			return false;
	}
	/** For all other browsers **/
	else if (document.all){
		var obj = document.all.tags("OBJECT");
    	for (var e=0; e<obj.length;e++){
   	    	for (var d=0; d<obj[e].attributes.length;d++){
	       	     if ((obj[e].attributes[d].name).toLowerCase() == "classid") {
					return false;
        	  	 }
       		}
    	}
    }
	return true;
}
/********************************/
/**calling foresee survey code **/
/********************************/
try {
	if (window.name=="ForeseeSurveyWindow" || (window.opener && foresee.triggerParms["displayMode"] == 2)) {	/*if tracker*/
		window.name="ForeseeSurveyWindow";	//must be set for displayMode 2
		foresee.fsrSetTrackerParms();	/**reload the mid or sid passed from the parent page**/
		setTimeout("foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );
	}
	else {
		foresee.fsrSetTriggerParms();	/**used for multi-measure only, overwrite triggerParams**/
		foresee.fsrSetMode1Parms();		/**used for mode1 only, drop cookie and attach unload event listener**/	
		if (!foresee.fsrAttachEvent(window, "load", foresee.openFSRTracker, false)) foresee.openFSRTracker();
	}
} catch(e) {foresee.fsrExceptionHandler(foresee.triggerParms["captureTriggerVersion"],e);} 

/****Customer: Nintendo
/************ don't modify below this line *********
 *************  Version: OnExit 7.3 v.26 ***********
 ****** Copyright 2001-2008 ForeseeResults, Inc****/

/**MAIN PARAMETERS**/
if(!window.foresee) window.foresee = new Object();
foresee.triggerParms= new Array();
foresee.triggerParms["displayMode"] = 3; 						// 0=disable survey, 1=Invitation when PUB present, 2=No Invitation, 3=Invitation Only
foresee.triggerParms["mid"] = "5dhhhIJYodpJRVg0YlR1xQ==";   	// model instance id (Default is XYZ Company survey) - Comment if using 'sid'
foresee.triggerParms["cid"] = "5EclwdUE9E9NZldQg91hVg==";   	// customer id
foresee.triggerParms["dLF"] = 3; 								// loyalty factor
foresee.triggerParms["spL"] = 3.0; 							// sample percentage
foresee.triggerParms["rw"] = 129600; 							// resample wait (value in minutes)
foresee.triggerParms["npc"] = 0; 								// 0-default persistent cookies, 1 - session
foresee.triggerParms["compliant508"] = 0; 						// 508 compliant if 1
//foresee.triggerParms["omb"] = "1505-0186"; 					// uncomment if required
foresee.triggerParms["width"] = 450;							// survey width
foresee.triggerParms["height"] = 500;							// survey height
//foresee.triggerParms["domain"] = ".nintendo.com";	 	// domain name
foresee.triggerParms["dhtmlURL"] ="/js/foresee/oeFSRInvite.html"; //path to survey invitation

/**ONEXIT PARAMETERS**/
foresee.triggerParms["oeMode"]= 1;					// onExit mode: 0=triggers survey on subdomain or protocol change, 1=triggers survey on domain change only or in absence of code (default)
foresee.triggerParms["sMode"] = 1; 					// survey mode: 1=preload survey, 0=load at exit
foresee.triggerParms["dLFPreCheck"] = 1; 			// default 1, count page visit before opening Invite/Tracker, otherwise 0 to count after
foresee.triggerParms["trackerURL"] ="/js/foresee/surveyTracker.html"; //path to survey child

/**MISC PARAMETERS**/
//foresee.triggerParms["sid"] = "";							// e.g.: BROWSE|CHECKOUT|POS  - foresee defined survey identifier, default commented
//foresee.triggerParms["patternType"] = "";					// use either URL|CK=<paste_your_cookie_name>|VALUE as a lookup pattern, default commented
foresee.triggerParms["lfcookie"] = "ForeseeLoyalty";		// loyalty cookie name
foresee.triggerParms["ascookie"] = "ForeseeSurveyShown";	// "survey shown" cookie name
foresee.triggerParms["olpu"] = 1;							// default 1, 0 will pop survey UNDER browser window
foresee.triggerParms["userURL"] = 1; 						// capture URL if 1
foresee.triggerParms["capturePageView"] = 1;				// capture pages viewed if 1
//Double Cookie/1 settings
//foresee.triggerParms["dcUniqueId"] = "TEST04JloZZN0k9cI1Ep5d";// (22 chars unique Id for double cookie I/II)
//foresee.triggerParms["midexp"] = 129600; 					// for double cookie (value in minutes)
//foresee.triggerParms["nLF"] = 0; 							// navigation loyalty factor, commented by default
foresee.triggerParms["spE"] = 100.0; 						// execute sample percentage

/**DHTML PARAMETERS**/
foresee.triggerParms["dhtmlIndex"]= 10000;					// z-index s/b greater then client�s dhtml z-index (if exist) - default 100
foresee.triggerParms["dhtmlWidth"] = 450;					// invite page width
foresee.triggerParms["dhtmlHeight"]= 290;					// invite page height
foresee.triggerParms["dhtmlDelay"]= 100;					// default=1ms, invite timeout in millisecs
foresee.triggerParms["dhtmlHighlight"]= 0; 					// 1- enable dhtml lightbox effect, 0-disable
foresee.triggerParms["dhtmlOverlayBgClr"]= "#EFEFEF";		// default background div color
foresee.triggerParms["dhtmlOverlayOpacity"]= "0.85"; 		// default background div opacity

//DHTML Positioning
foresee.xPosition="CENTER";   	//enter "CENTER", "LEFT", or "RIGHT" for horizontal positioning
foresee.yPosition="CENTER";    	//enter "CENTER", "TOP", or "BOTTOM" for vertical positioning

/**SCOUT TRACKER PARAMETERS**/
foresee.triggerParms["trackerRetry"] = 2; 				// default=2, check multiple times if OE condition is true.
foresee.triggerParms["trackerDelay"] = 1000;			// default=1 sec, scout delay in millseconds.
foresee.triggerParms["trackerWidth"]  = 500;			// child window Width
foresee.triggerParms["trackerHeight"] = 325;			// child window Height
foresee.triggerParms["trackerThirdPartyCheck"] = 0;		// check for 3rd party persistent cookie if 1,  default 0 or disable
foresee.triggerParms["trackerWinRep"] = 0;				// drops 'ScoutClosed' ScoutRunning cookie if 0
foresee.triggerParms["trackerExclude"]= 0;				// If 1, tracker closes when exclude list requirement is met (default 0)

/**FORESEE SYSTEM PARAMETERS**/
foresee.triggerParms["captureTriggerVersion"] = "OE7.3rel26";// track trigger version
foresee.triggerParms["evtListener"]=1;					// default=1, register tracker as an event listener on body onload, 0 to call separately
foresee.triggerParms["useOneCookie"]= 1;				// drop one cookie if 1, separate cookies if 0
foresee.triggerParms["fsrCkSeparator"] = "||";			// Cookie values seperator
foresee.triggerParms["fsrParmSeparator"] = "=";			// parameters name value pair seperator
foresee.triggerParms["flashDetect"]= 0;					// set to 1 to prevent survey invitation on pages with flash
//display alert message on survey link if user has already surveyed
foresee.fsrMSG1= "Sorry, but you have already surveyed once - Thank you";	

/*********************************
 **CLIENT PAGE SETUP PARAMETERS **
 *********************************/
/**CLIENT CPPS**/
//foresee.triggerParms["oecpp_cppName"]="Foresee_cppName";	//uncomment & enter cppName (in both places)

/**multi-language invite **/
//foresee.triggerParms['midEng']="";						//uncomment & enter english equivalent MID value here
//foresee.triggerParms['langCode']="";						//uncomment & enter foreign language code here 

/**multimeasure lookup table **/
//foresee.midLookupTable = new Array();
//foresee.midLookupTable["NAME"] ="[spL]:[MID]:[nLF]";		//uncomment & enter page name, sampling %, MID and loyalty

/**multivendor lookup table **/
//foresee.vendorLookupTable = new Array();
//foresee.vendorLookupTable["NAME"]	 = "[spL]||[URL]";		//uncomment & define 3rd party vendor name, sampling % and path to code

/**page exclude list, do not show invite/tracker**/
//foresee.excludeList = new Array();
//foresee.excludeList[0]= "[NAME]";							//uncomment & add page names on which to exclude the invitation.

/**page referrer exclude list, do not show invite/tracker**/
//foresee.referrerList = new Array();
//foresee.referrerList[0]= "[NAME]";						//uncomment & add any value that exists in the referrer URL

/**click event Listener Tag List, add event listener on the tag list with matching string**/
//foresee.eventTagList = new Array();
//foresee.eventTagList["matchStr"]= "tag|event";			//uncomment & add tag name and event for a particular matching string in that URL property

/****Customer: Nintendo
/************ don't modify below this line *********
 *************  Version: OnExit 7.3 v.28 [compatible with triggerParams.js v.26] ***********
 ****** Copyright 2001-2008 ForeseeResults, Inc****/

foresee.popupURL = "//web.archive.org/web/20090604123521/http://www.foreseeresults.com/survey/display";	//do not change this url
foresee.FSRImgURL= "//web.archive.org/web/20090604123521/http://www.foreseeresults.com/survey/FSRImg"; 	//do not change this url
foresee.CSURL= "//web.archive.org/web/20090604123521/http://www.foreseeresults.com/survey/processCPP"; 	//do not change this url
foresee.OTCImgURL = "//web.archive.org/web/20090604123521/http://controller.foreseeresults.com/fsrSurvey/OTCImg";
foresee.fullURL="";
foresee.winOptions = "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=1,height=1,top=4000,left=4000";
foresee.ckAlreadyShown = foresee.triggerParms["ascookie"];
foresee.ckLoyaltyCount = foresee.triggerParms["lfcookie"];
foresee.surveyPresentedBy = "normal";
foresee.dcQString="";
foresee.fsrTrackerImg=null;
foresee.OTCImg=null;
foresee.FSRImg=null;
foresee.rNum=null;
foresee.newDt=null;
foresee.currTime=null;	
foresee.runningscout=null;
foresee.scoutTracker=null;
foresee.trackerFromClick = false;
foresee.timeoutId=null;
foresee.fsrAbortTimer=false;
foresee.hParent = window.opener;
foresee.tempURL= null;
foresee.oeCounter=1;
foresee.fireBug = (typeof(console) == "undefined") ? false : true;
foresee.PROCESS_RSID=1;	/*action id to generate respondent*/
foresee.PROCESS_CPP=2;	/*action id to save CPPs*/
foresee.persistentExpires = new Date();
foresee.persistentExpires.setTime(foresee.persistentExpires.getTime() + (foresee.triggerParms["rw"]*60*1000));
foresee.detect = navigator.userAgent.toLowerCase();
foresee.version= navigator.appVersion.toLowerCase();
foresee.fsr_aol= ((foresee.detect.indexOf("aol") >=0) || (foresee.detect.indexOf("america online browser") >=0)) ? 1 : 0;
foresee.fsr_opera = (foresee.detect.indexOf("opera") >=0) ? 1 : 0;
foresee.fsr_NS = ((foresee.detect.indexOf("netscape") >=0) || (foresee.detect.indexOf("firefox") >=0)) ? 1 : 0;
foresee.fsr_NS8=(foresee.detect.indexOf("netscape/8") >=0) ? 1 : 0;	
foresee.fsr_NS70=(foresee.detect.indexOf("netscape") >= 0 && foresee.detect.indexOf("7.0") >= 0) ? 1 : 0;
foresee.fsr_NS62=(foresee.detect.indexOf("netscape") >= 0 && foresee.detect.indexOf("6.2") >= 0) ? 1 : 0;
foresee.fsr_mac= (navigator.platform.indexOf("Win32") < 0) ? 1 : 0;
foresee.fsr_safari=(foresee.detect.indexOf("safari") >=0) ? 1 : 0;
foresee.fsr_safari_2_x=(foresee.fsr_mac && foresee.detect.indexOf("safari") >=0 && foresee.detect.indexOf("412") >= 0) ? 1 : 0;
foresee.fsr_ie=(foresee.detect.indexOf("msie")>=0 && foresee.version.indexOf("win") != -1) ? 1 :0;
foresee.fsr_ie5=(foresee.detect.indexOf("msie 5")>=0 && foresee.version.indexOf("win") != -1) ? 1 :0;
foresee.fsr_sp2=(navigator.appMinorVersion && navigator.appMinorVersion.toLowerCase().indexOf('sp2') != -1) ? 1 : 0
if (typeof(foresee.triggerParms["domain"]) == "undefined") foresee.triggerParms["domain"]= document.domain;
if (foresee.fsr_safari || (foresee.fsr_ie && foresee.fsr_sp2)) foresee.triggerParms["sMode"] = 0;
foresee.triggerParms["dhtmlLeft"]=0;
foresee.triggerParms["dhtmlTop"]=0;

foresee.cppUrlPatch= function cppUrlPatch(s) {
	var translated = "";
	var i; 
	var found = 0;
	for(i = 0; (found = s.indexOf(':', found)) != -1; ) {
		translated += s.substring(i, found) + "|";
		i = found + 1;
		found++;
	}
	translated += s.substring(i, s.length);
	return translated;
}
foresee.specialEscape = function specialEscape(str) {
	var translated = "";
	var i; 
	var found = 0;
	for(i = 0; (found = str.indexOf('+', found)) != -1; ) {
		translated += str.substring(i, found) + "%2B";
		i = found + 1;
		found++;
	}
	translated += str.substring(i, str.length);
	return translated;
}
foresee.fsrExceptionHandler = function fsrExceptionHandler(obj,e) {
	if (foresee.fireBug) {console.log("Error in "+ obj +"."+ e.name + "="+ e.message);}
}
foresee.fsrAttachEvent = function fsrAttachEvent(obj, evt, fnc, useCapture){
	if (foresee.triggerParms["evtListener"] == 0) return false;
	if (fnc == null || obj == null) return true;
	if (obj.addEventListener && document.addEventListener) {
		if (evt == "beforeunload") return false;
		obj.addEventListener(evt,fnc,useCapture);	/*W3C DOM*/
	}
	else if (obj.attachEvent) {
		obj.attachEvent("on"+evt,fnc);	/*IE DOM Model*/
	}
	else {
		/**otherwise not supported by major browsers - disable event listener mode**/
		foresee.triggerParms["evtListener"] = 0;
		return false;
	}
	return true;
} 
foresee.fsrCallCookieTimer = function fsrCallCookieTimer(){
	/**Avoiding False Positive Pops using multiple tabs in browsers**/ 
	if (foresee.fsrReadCookie(foresee.ckAlreadyShown) != null) {return;}
	foresee.fsrWriteCookie('currentURL', escape(window.location.href));
	foresee.timeoutId = setTimeout("foresee.fsrCallCookieTimer()", 1000, "JavaScript");
}		
foresee.ForeCStdGetCookie = function ForeCStdGetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return foresee.ForeCStdGetCookieVal (j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) {
			break;
		}
	}
	return null;
}
foresee.ForeCStdGetCookieVal = function ForeCStdGetCookieVal(offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) {
		endstr = document.cookie.length;
	}
	return document.cookie.substring(offset, endstr);
}
foresee.ForeCStdSetCookie = function ForeCStdSetCookie (name, value, expires, path, domain, secure){
    document.cookie = name+'='+value +
        ((expires) ? ';expires=' + expires.toGMTString() : '') +
        ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ((secure) ? ';secure' : '');
}
foresee.fsrFindCookieVal = function fsrFindCookieVal(ckVal, name){
	if (ckVal == null || typeof ckVal == "undefined" || name==null) return null;
	var ckParams = ckVal.split(foresee.triggerParms["fsrCkSeparator"]);
	for (var i=0; i<ckParams.length; i++) {
		var ckValues = ckParams[i].split(foresee.triggerParms["fsrParmSeparator"]);
		if (name.toLowerCase()==ckValues[0].toLowerCase()){ return unescape(ckValues[1]);}
	}
	return null;
}
foresee.fsrReplaceCookieVal = function fsrReplaceCookieVal(ckVal, name, value){
	if (ckVal == null || typeof ckVal == "undefined") return "";
	var replaceCkValue = "";
	var ckParams = ckVal.split(foresee.triggerParms["fsrCkSeparator"]);
	for (var i=0; i<ckParams.length; i++) {
		var ckValues = ckParams[i].split(foresee.triggerParms["fsrParmSeparator"]);
		replaceCkValue += ckValues[0];
		if (name.toLowerCase()==ckValues[0].toLowerCase()){
			var newCkValue = ckValues[1].replace(ckValues[1], value);
            ckValues[1] = newCkValue;
		}
		if (ckValues[1] != null) {
			replaceCkValue += foresee.triggerParms["fsrParmSeparator"] + ckValues[1];
		}
	    if (i+1 < ckParams.length) {
    	    replaceCkValue += foresee.triggerParms["fsrCkSeparator"];
		}	
	}
	return replaceCkValue;
}
foresee.fsrReadCookie = function fsrReadCookie(paramName, cookieName){
	var ckName="FSRCookie";
	if (arguments.length==2) {
		ckName = cookieName;
	}
	if (foresee.triggerParms["useOneCookie"] == 0 && arguments.length==1) return foresee.ForeCStdGetCookie(paramName);
	var ckVal = foresee.ForeCStdGetCookie(ckName);
	return foresee.fsrFindCookieVal(ckVal, paramName);
}
foresee.fsrWriteCookie = function fsrWriteCookie(parmName, parmValue, cookieName, expDt){
    if (foresee.fsrReadCookie(foresee.ckAlreadyShown) == 'true') return;
	var ckName="FSRCookie";
	if (arguments.length==4) {
		ckName = cookieName;
	}
	if (foresee.triggerParms["useOneCookie"] == 0 && arguments.length==2) {
		(foresee.triggerParms["npc"] == 0 && parmName == foresee.ckAlreadyShown) ? foresee.ForeCStdSetCookie(parmName, parmValue , foresee.persistentExpires, '/',foresee.triggerParms['domain']) : foresee.ForeCStdSetCookie(parmName, parmValue , null ,'/',foresee.triggerParms['domain']);
		return;
	}
	if (parmName == null || parmValue == null || typeof(parmValue) == "undefined") return;
	if (parmValue.length==0) return;
	if (parmName == "ScoutRunningCheck")	{ parmValue = escape(parmValue);}	/*only for MID's we meed to encode the == signs*/
	var ckVal = (foresee.ForeCStdGetCookie(ckName) == null) ? "" : foresee.ForeCStdGetCookie(ckName);
	var isParamExists=false;
	if (ckVal.indexOf(parmName) != -1) {
		ckVal = foresee.fsrReplaceCookieVal(ckVal, parmName, parmValue);
		isParamExists=true;
	}
	if (!isParamExists) {
		if (ckVal.length>0) ckVal += foresee.triggerParms["fsrCkSeparator"];
		ckVal += parmName + foresee.triggerParms["fsrParmSeparator"] + parmValue;
	}
	if (arguments.length==4) foresee.ForeCStdSetCookie(ckName, ckVal , expDt, '/',foresee.triggerParms['domain']);
	else {
		(foresee.triggerParms["npc"]== 0 && parmName == foresee.ckAlreadyShown) ? foresee.ForeCStdSetCookie(ckName, ckVal , foresee.persistentExpires ,'/',foresee.triggerParms['domain']) : foresee.ForeCStdSetCookie(ckName, ckVal , null, '/',foresee.triggerParms['domain']); 
	}
}
foresee.fsrDeleteCookie = function fsrDeleteCookie(name) {
	 var expires="Fri, 3 Aug 2001 00:00:00 GMT";	//some arbitary past date
	 document.cookie = name+'=' + ';expires=' + expires + ';path=/' +
        ((typeof(foresee.triggerParms["domain"]) != "undefined") ? ';domain=' + foresee.triggerParms["domain"] : '');
}
foresee.fsrDeleteAdminCookie = function fsrDeleteAdminCookie(val) {
	if (foresee.triggerParms["useOneCookie"] == 0) {
		foresee.fsrDeleteCookie(foresee.ckAlreadyShown);
		foresee.fsrDeleteCookie('ScoutRunningCheck');
	}
	else {
		foresee.fsrDeleteCookie('FSRCookie');
		foresee.fsrDeleteCookie('FSRAdmin');	
	}
}
foresee.fsrWriteAdminCookie = function fsrWriteAdminCookie(val,lf,sp) {
	if (foresee.triggerParms["useOneCookie"] == 0 && val=="1") foresee.fsrDeleteCookie('ScoutRunningCheck');
	else if (foresee.triggerParms["useOneCookie"] == 1 && val=="1") foresee.fsrDeleteCookie('FSRCookie');
	var expDate = new Date();
	expDate.setTime(expDate.getTime() + (24*60*1000));	//1 day expiry date
	if (val=="0"){
		foresee.fsrWriteCookie("lf", lf, "FSRAdmin", expDate);
		foresee.fsrWriteCookie("sp", sp, "FSRAdmin", expDate);	
	}
	else {
		foresee.fsrWriteCookie("dLF", lf, "FSRAdmin", expDate);
		foresee.fsrWriteCookie("spL", sp, "FSRAdmin", expDate);	
	}
}
foresee.fsrOnBeforeUnload = function fsrOnBeforeUnload(){
	if (foresee.triggerParms["oeMode"] == 1 && foresee.fsrReadCookie(foresee.ckAlreadyShown) == null) {
		if (foresee.fsrReadCookie('currentURL') != null || foresee.fsrReadCookie('currentURL') != 'blank') {
			foresee.fsrWriteCookie('previousURL',escape(foresee.fsrReadCookie('currentURL')));
		}
		foresee.fsrWriteCookie('currentURL', 'blank');
	}
}
foresee.fsrOnUnload = function fsrOnUnload(){
	if (foresee.triggerParms["oeMode"] == 1 && foresee.fsrReadCookie(foresee.ckAlreadyShown) == null) {
		if (foresee.fsrReadCookie('currentURL') != 'blank') {
			foresee.fsrWriteCookie('previousURL',escape(foresee.fsrReadCookie('currentURL')));
		}
		foresee.fsrWriteCookie('currentURL', 'blank');
	}
}
foresee.fsrOnUnloadTracker = function fsrOnUnloadTracker(){
	if(foresee.triggerParms["trackerWinRep"] == 0) {
		foresee.fsrWriteCookie('ScoutRunningCheck', 'ScoutClosed');
	}
}
foresee.fsrGetURLParameters = function fsrGetURLParameters(paramName) {
	if (paramName == null || typeof(paramName) == "undefined") return "";
	try {
	var sURL = window.document.URL.toString();		
	if (sURL.indexOf("?") == -1) return "";
	var arrParams = sURL.split("?");			
	var arrURLParams = arrParams[1].split("&");		
	for (var i=0;i<arrURLParams.length;i++)
	{
	    var sParam =  arrURLParams[i].split("=");
	    if (paramName.toLowerCase()==sParam[0].toLowerCase()){
	    	if (sParam[1] == "undefined") return "";
	       	return unescape(sParam[1]);
	    }
	}
	} catch (e) {}
	return "";
}
foresee.setFSRSurveyCookie = function setFSRSurveyCookie() {
		foresee.fsrWriteCookie(foresee.ckAlreadyShown,'true');
}
foresee.fsrSizeWindow = function fsrSizeWindow(w,h) {
	/**important xp2 fix - do not change these lines below**/
	window.moveTo(self.screen.width/2 - w/2,self.screen.height/2 - h/2);
	window.resizeTo(w,h);
}
foresee.fsrIsCookieEnabled = function fsrIsCookieEnabled() {
	var cookieEnabled=(navigator.cookieEnabled)? true : false;
	/*if not IE4+ nor NS6+*/
	if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled){ 
		document.cookie="testcookie";
		cookieEnabled=(document.cookie.indexOf("testcookie")!=-1)? true : false;
	}
	return cookieEnabled;
}
foresee.isReferrerSponsoredLink = function isReferrerSponsoredLink() {
	if ((window.document.referrer!="")&&(window.document.referrer!="-")){
		if (foresee.fsrIsOnList(foresee.referrerList,foresee.triggerParms["trackerExclude"],document.referrer)) return true;
	}
	return false;
}
foresee.fsrIsOnList = function fsrIsOnList(list,trkActFlg,param){
	/** where list is any generic array list 
        param is the parameter that is checked against this list values
        if param is missing, then by default we choose the page URL 
        trkActFlg is the boolean that is defined in foresee.triggerParms["trackerExclude"], false by default
	**/
	if (typeof(list) == "undefined") return false;
	if (list.length == 0) {return false;}
	if (arguments.length==1 || param == null) {
		foresee.hParent = window.opener;
		if (foresee.hParent != null ){param = foresee.hParent.location.href;}	/**default page url**/
		else {param = window.parent.location.href;}
	}
	/* can still reach the parent - check if on excludeList*/
	for(var i=0; i<list.length ; i++) {
		if ((param.toLowerCase()).indexOf(list[i].toLowerCase()) != -1) {
		    if (typeof(trgActFlg) != "undefined" && trkActFlg==1) foresee.closeTrackerWin();	
			return true;
		}
	}
	return false;
}
foresee.oeImgProc = function oeImgProc() {
	if(foresee.triggerParms["compliant508"] == 1) { foresee.showDHTMLWin(); }
	else {setTimeout("foresee.showDHTMLWin();", foresee.triggerParms["dhtmlDelay"],"JavaScript");}
}
foresee.fsrShowSurvey = function fsrShowSurvey(){
	if(foresee.dcQString == "") { foresee.oeImgProc(); }
	else {
		foresee.newDt   = new Date();
		foresee.currTime= foresee.newDt.getTime(); 
		foresee.FSRImg = new Image();
		foresee.FSRImg.onerror = foresee.imgErrorProc;
		foresee.FSRImg.onload = foresee.imgOnloadProc;
		foresee.FSRImg.src = foresee.FSRImgURL + "?" + foresee.dcQString + "&uid="+ foresee.currTime;	
	}
}
foresee.imgOnloadProc = function imgOnloadProc() {
	if(foresee.FSRImg.width == 3) { foresee.oeImgProc(); }
  	return true;
}
foresee.imgErrorProc = function imgErrorProc() {
	return true;
}
foresee.otcOnloadProc = function otcOnloadProc() {
	if(foresee.OTCImg.width == 3) { foresee.fsrShowSurvey(); }
  	return true;
}
foresee.otcErrorProc = function otcErrorProc() {
	foresee.fsrShowSurvey();
	return true;
}
foresee.fsrSendReq = function fsrSendReq(actId) {
	var midVal= (foresee.triggerParms["mid"] == null) ? foresee.triggerParms["sid"] : foresee.specialEscape(escape(foresee.triggerParms["mid"]));
	if (actId==foresee.PROCESS_RSID) {
		foresee.CSURL += "?actionId="+ actId +"&mid="+ midVal;
	}
	else if (actId==foresee.PROCESS_CPP) {
		foresee.CSURL += "?actionId="+ actId +"&mid="+ midVal + foresee.fsrGetCPP();
	}	
	foresee.fsrTrackerImg = new Image();
 	foresee.fsrTrackerImg.onerror = foresee.fsrOnImgError;
 	foresee.fsrTrackerImg.onload = foresee.fsrOnImgLoad;
 	foresee.newDt   = new Date();
 	foresee.currTime= foresee.newDt.getTime(); 
 	foresee.fsrTrackerImg.src = foresee.CSURL + "&uid="+ foresee.currTime;
}
foresee.fsrOnImgLoad = function fsrOnImgLoad(){
	if(foresee.fsrTrackerImg.width >= 5) {
		if (foresee.triggerParms["sMode"]==1) {
			foresee.fsrWriteCookie("fsrImgLoaded",false);
			window.close();
		}
	}
	else {
		if (foresee.triggerParms["sMode"]==1) foresee.fsrWriteCookie("fsrImgLoaded",true);
	}
}
foresee.fsrOnImgError = function fsrOnImgError() {
	if (foresee.triggerParms["sMode"]==1) foresee.fsrWriteCookie("fsrImgLoaded",false);
}
foresee.fsrSetFilter = function fsrSetFilter() {
	foresee.fullURL += "&sid=" + foresee.triggerParms["sid"];
	if (foresee.triggerParms["patternType"] != null && (foresee.triggerParms["patternType"].toUpperCase()).indexOf("URL") != -1) {
		var parentURL = "";
		if (foresee.fsrReadCookie('currentURL') != null && foresee.fsrReadCookie('currentURL') != 'blank')
			parentURL = foresee.fsrReadCookie('currentURL');
		else if (foresee.fsrReadCookie('previousURL') != null)
			parentURL = foresee.fsrReadCookie('previousURL');
		foresee.fullURL += "&pattern="+ escape(parentURL);
	}
	else if (foresee.triggerParms["patternType"] != null && (foresee.triggerParms["patternType"].toUpperCase()).indexOf("CK=") != -1) {
		var pos = foresee.triggerParms["patternType"].indexOf("=");
		var cookieValue = foresee.fsrReadCookie(foresee.triggerParms["patternType"].substring(pos+1));
		foresee.fullURL += "&pattern="+ escape(cookieValue);
	}
	else if (foresee.triggerParms["patternType"] != null && (foresee.triggerParms["patternType"].toUpperCase()) != null && foresee.triggerParms["patternType"].length >0) {
		foresee.fullURL += "&pattern="+ escape(foresee.triggerParms["patternType"]);
	}	
}
foresee.fsrSetFullURL = function fsrSetFullURL() {
	foresee.fullURL = foresee.popupURL + "?" + "width=" + foresee.triggerParms["width"] + "&height=" + foresee.triggerParms["height"] +
		"&cid=" + foresee.specialEscape(escape(foresee.triggerParms["cid"]));
	if (foresee.triggerParms["sid"] != null && foresee.triggerParms["mid"] == null) {
		foresee.fsrSetFilter();
	}		
	if (foresee.triggerParms["mid"] != null) {
		foresee.fullURL += "&mid=" + foresee.specialEscape(escape(foresee.triggerParms["mid"]));
	}
	if (foresee.triggerParms["omb"] != null) {
		foresee.fullURL += "&omb=" + escape(foresee.triggerParms["omb"]);
	}
	if ((foresee.triggerParms["cmetrics"] ) != null) {
		foresee.fullURL += "&cmetrics=" + escape(foresee.triggerParms["cmetrics"]);
	}	
	if (foresee.triggerParms["olpu"] == 1) {
		foresee.fullURL += "&olpu=1";
	}
	if ((foresee.triggerParms["dcUniqueId"]) != null) {
		foresee.fullURL += "&dcUniqueId=" + escape(foresee.triggerParms["dcUniqueId"]);
	}
	if ((foresee.triggerParms["midexp"] ) != null) {
		foresee.fullURL += "&ndc=1&fsexp=5256000&midexp=" + foresee.triggerParms["midexp"];
	}
	if (foresee.triggerParms["sMode"] != null) {
		foresee.fullURL += "&sMode="+ foresee.triggerParms["sMode"];
	}
}
foresee.getCPPString = function getCPPString(){
	var cppString="";
	for(paramKey in foresee.triggerParms) {
	     if(paramKey.substring(0,3) == "cpp"){
		  cppString += "&" + paramKey + "=" + escape(foresee.triggerParms[paramKey]);
	     }
	}
	return cppString;
}
foresee.fsrGetCPP = function fsrGetCPP(){
	var pageCount = foresee.fsrReadCookie(foresee.ckLoyaltyCount);
	if (pageCount == null) {pageCount = 1;}
	if (foresee.triggerParms["capturePageView"] == 1) {
		foresee.triggerParms["cpp_2"] = "PageView:"+ pageCount; 
	}
	var sMode=foresee.triggerParms["sMode"];
	if (foresee.triggerParms["sMode"] == null) {sMode=0};
	foresee.triggerParms["cpp_3"] = "Browser:OE_Mode"+ foresee.triggerParms["oeMode"] +";Survey_Mode"+ sMode +";" + foresee.cppUrlPatch (foresee.detect) + ";" + foresee.triggerParms["captureTriggerVersion"] + ";" + foresee.fsrGetURLParameters('surveypresented');
	var counter=4;
	for(paramKey in foresee.triggerParms) {
		if(paramKey.substring(0,5) == "oecpp"){
			var value = foresee.triggerParms[paramKey];
			var session = foresee.fsrReadCookie(value);
			if (session != null) {
				foresee.triggerParms["cpp_"+ counter] = value.substring(8,value.length) + ":" + foresee.cppUrlPatch (session);
				counter++;	
			}
		}
	}	
	return foresee.getCPPString();
}
/************************* Scout Tracker Code starts here **************************/
foresee.fsrShowConsole = function fsrShowConsole(msg){
	if (foresee.fireBug) {
		console.log(msg);
	}
}
foresee.popSurvey = function popSurvey(){
	if (!foresee.oePoll()) {window.close();}
	foresee.fsrAbortTimer=true; /**used to abort tracker code which is running in a loop**/
}
foresee.isParentClosed = function isParentClosed(){
	try {if (window.opener.closed){return true;}}
	catch (e) {return true;}
	return false;
}
foresee.retryScout = function retryScout(){
	if (foresee.oeCounter<foresee.triggerParms["trackerRetry"]) {
		foresee.oeCounter++;
		return true;
	}
	/** added MODE 0 false positive check for MODE 1 (sitewise) code to see if its in the same domain otherwise continue checking**
	 ** Updated 3/3/08 **/
	try {
	  if (foresee.triggerParms["oeMode"] == 1) {
	      foresee.hParent = window.opener;
		  foresee.fsrShowConsole("retryScout() - Checking domain false positive check");
	      if (foresee.triggerParms["domain"] == null || typeof(foresee.triggerParms["domain"]) == "undefined") { foresee.triggerParms["domain"] = window.location.hostname;}
	      if ((foresee.hParent.location.hostname).indexOf(foresee.triggerParms["domain"]) != -1 ) {
			if (foresee.oeCounter >1) {foresee.oeCounter=1;}
			return true;
	      }
	  }
	} catch (e) {
		  foresee.fsrShowConsole("retryScout() - domain check failed - popping survey");
	}
	if (!foresee.fsrAbortTimer)	foresee.popSurvey();
	return false;
}
foresee.updateParentURL = function updateParentURL(){
try {
	if (foresee.triggerParms["userURL"] == 1) {
		if (foresee.triggerParms["oeMode"] == 0){
			foresee.hParent = window.opener;
			foresee.triggerParms["cpp_1"] = "userURL:"+ foresee.cppUrlPatch (foresee.hParent.location.href);
		}
		else {
			if (foresee.fsrReadCookie('previousURL') != null && arguments.length == 0 && foresee.triggerParms["nLF"] == null)
				foresee.triggerParms["cpp_1"] = "userURL:"+ foresee.cppUrlPatch (foresee.fsrReadCookie('previousURL'));
			else {
				if (foresee.fsrReadCookie('currentURL') == 'blank') foresee.triggerParms["cpp_1"] = "userURL:"+ foresee.cppUrlPatch (foresee.fsrReadCookie('previousURL'));
				else foresee.triggerParms["cpp_1"] = "userURL:"+ foresee.cppUrlPatch (foresee.fsrReadCookie('currentURL'));
			}
		}
	}
} catch (e) {foresee.fsrShowConsole(e); foresee.errortrap();}	
}
foresee.updateLoyaltyFactor = function updateLoyaltyFactor() {
try {
   var currentURL=null;
   if (arguments.length==0 && foresee.triggerParms["oeMode"] == 0){
   	foresee.hParent = window.opener;
   	currentURL= foresee.hParent.location.href;/*throws exception in OnExit condition*/
   }
   else if (foresee.triggerParms["oeMode"] == 1){
   	currentURL = foresee.fsrReadCookie('currentURL');
   }
   if (currentURL != foresee.tempURL && currentURL != 'blank') {
    	var stickyCounter =  foresee.fsrReadCookie(foresee.ckLoyaltyCount);
		if (stickyCounter == null) {stickyCounter = 1;}
		else if (arguments.length == 0) stickyCounter++;
		foresee.fsrWriteCookie(foresee.ckLoyaltyCount,stickyCounter);
   }
   foresee.tempURL=currentURL;
   if (typeof(foresee.excludeList) != "undefined") {if (foresee.fsrIsOnList(foresee.excludeList,foresee.triggerParms["trackerExclude"])) {return;}}
} catch (e) {foresee.fsrShowConsole(e); foresee.errortrap();}	
}
foresee.javaUpdate = function javaUpdate(){
	foresee.updateParentURL();
	if (foresee.triggerParms["dLFPreCheck"]==0) foresee.updateLoyaltyFactor();
	if(foresee.triggerParms["nLF"] != null) {	
		var lfCounter = foresee.fsrReadCookie(foresee.ckLoyaltyCount);
		if(lfCounter >= foresee.triggerParms["nLF"] && (foresee.fsrReadCookie("fsrImgLoaded") != null && foresee.fsrReadCookie("fsrImgLoaded") == "true")) {
			foresee.trackerFromClick=true;
			if (!foresee.fsrAbortTimer)	foresee.popSurvey();
		}		
	}	
}
foresee.fsrSurveyTimeout = function fsrSurveyTimeout(){
try {
	foresee.fsrShowConsole("foresee.fsrSurveyTimeout() - checking exit condition...");
	if (foresee.fsrAbortTimer) { 
		foresee.fsrShowConsole("foresee.fsrSurveyTimeout() - STOP checking...");
		return false;
	}
	if (foresee.fsrReadCookie("ScoutRunningCheck") == null || foresee.fsrReadCookie(foresee.ckAlreadyShown) != null) {window.close();}
	foresee.javaUpdate();
	foresee.hParent = window.opener;
	if (foresee.triggerParms["oeMode"] == 0) {
		if (window.document.domain != foresee.hParent.document.domain) {
			if (foresee.retryScout()&& !foresee.fsrAbortTimer) {
				setTimeout("foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );
			}
		}
		else if (!foresee.fsrAbortTimer) {setTimeout("foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );}
	}
	else {
		foresee.fsrIsCookieBlank();
	}
} catch (e) {foresee.fsrShowConsole(e); foresee.errortrap();}	
}
foresee.fsrIsCookieBlank = function fsrIsCookieBlank(){
try {	/*no cookies setup, close tracker*/
	if (foresee.fsrReadCookie("currentURL") == null){window.close();}
	else {
		if (foresee.fsrReadCookie('currentURL') == 'blank') {
			foresee.fsrShowConsole("fsrIsCookieBlank() - Cookie blank check :"+ foresee.oeCounter);
			foresee.fsrWriteCookie('fsr_retry', foresee.oeCounter);
			/**In IE, onUnload is blocked by GoogleToobar if the parent browser/tab is closed
			 **To make the cookie blank, we use the onBeforeUnload event for IE only
			 **Otherwise it causes the survey to pop even when other tabs are open
			 **In Mozilla - do not use hParent.closed - causes problem
			 **COMMENTED CODE BELOW TO AVOID SURVEY WHEN CLOSING MULTIPLE TABS
			 **updated 5/7/08 **/
			 //if (window.opener == null || (foresee.fsr_ie && foresee.isParentClosed())){
				// updateParentURL(true);/*get currentURL instead of previousURL*/
				// foresee.oeCounter = foresee.triggerParms["trackerRetry"];
				 //if (!foresee.fsrAbortTimer) foresee.popSurvey(); 
				 //return false;
			 //}
			 if (foresee.retryScout() && !foresee.fsrAbortTimer) {			
				setTimeout ( "foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );
			 }
		}
		else {
			/**resetting retry counter to avoid false positive due to delay in page loading**/
			if (foresee.oeCounter >1) {foresee.oeCounter=1;}
			if (!foresee.fsrAbortTimer) {setTimeout("foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );}
		}
	}
} catch (e) {foresee.fsrShowConsole(e);}
}
foresee.errortrap = function errortrap(){
	/*for debugging purpose*/
	foresee.fsrShowConsole("errortrap() - Exception caught");
	if (foresee.fsrReadCookie("ScoutRunningCheck") == null) {window.close();}
	foresee.hParent = window.opener;
	if (foresee.triggerParms["oeMode"] == 0){
		if (foresee.hParent == null || (foresee.fsr_ie && foresee.isParentClosed())){ foresee.oeCounter = foresee.triggerParms["trackerRetry"]};
		if (foresee.retryScout() && !foresee.fsrAbortTimer) {setTimeout("foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );}
	}
	else {
		foresee.fsrIsCookieBlank();
	}
	return true;
}
/********************* Scout Tracker Code ends here *****************************/
foresee.showDHTMLWin = function showDHTMLWin(){
	if((foresee.runningscout != null && !foresee.runningscout.closed && foresee.fsr_aol==false) || foresee.scoutTracker != null){return;}
	foresee.surveyPresentedBy = "dhtml";
	if(document.all) {
		if (foresee.triggerParms["dhtmlHighlight"]==1) document.all.fsrOverlayDiv.style.visibility = 'visible';
		document.all.FSRInviteWin.style.visibility = 'visible';
	}			
	else if(document.getElementById) {
		if (foresee.triggerParms["dhtmlHighlight"]==1) document.getElementById("fsrOverlayDiv").style.visibility = 'visible';
		document.getElementById("FSRInviteWin").style.visibility = 'visible';
	}	
}
foresee.FSRInviteAct = function FSRInviteAct(actFlag) {
	if(actFlag == '1') {
		if (arguments.length>1) {
			foresee.triggerParms["mid"] = arguments[1];
			foresee.fsrWriteCookie(foresee.triggerParms["oecpp_Language"], arguments[2]);
		}
	 	foresee.openTrackerWin();
	}
	else {
		foresee.setFSRSurveyCookie();
	}
	/*always hide div after tracker is open otherwise it will be blocked in IE-GooglePopup blocker*/

	if(document.all) {
		if (foresee.triggerParms["dhtmlHighlight"]==1) document.all.fsrOverlayDiv.style.visibility = 'hidden';
		document.all.FSRInviteWin.style.visibility = 'hidden';
	}	
	else if(document.getElementById) {
		if (foresee.triggerParms["dhtmlHighlight"]==1) document.getElementById("fsrOverlayDiv").style.visibility = 'hidden';
		document.getElementById("FSRInviteWin").style.visibility = 'hidden';
	}
}
foresee.fsrSetDivPos = function fsrSetDivPos() {
	var xWidth;var yWidth;
	if (window.innerHeight) {
		/**used by Mozilla based browsers and Safari **/
		xWidth = window.innerWidth; yWidth = window.innerHeight;
	} else if (document.documentElement.clientHeight > 0) {
		/**used by IE based browsers **/
		xWidth = document.documentElement.clientWidth; yWidth = document.documentElement.clientHeight;
	} else {
		/**used by AOL Explorer **/
		xWidth = document.body.clientWidth; yWidth = document.body.clientHeight;
	}
	if (foresee.xPosition == "CENTER") {foresee.triggerParms["dhtmlLeft"] = (xWidth/2) - (foresee.triggerParms["dhtmlWidth"]/2);}
	else if (foresee.xPosition == "LEFT") {foresee.triggerParms["dhtmlLeft"] = 10;}
	else if (foresee.xPosition == "RIGHT") {foresee.triggerParms["dhtmlLeft"] = (xWidth) - (foresee.triggerParms["dhtmlWidth"]) - 30;}
	if (foresee.yPosition == "CENTER") {foresee.triggerParms["dhtmlTop"] = (yWidth/2) - (foresee.triggerParms["dhtmlHeight"]/2);}
	else if (foresee.yPosition == "TOP") {foresee.triggerParms["dhtmlTop"] = 10;}
	else if (foresee.yPosition == "BOTTOM") {foresee.triggerParms["dhtmlTop"] = (yWidth) - (foresee.triggerParms["dhtmlHeight"]) - 30;}
}
foresee.fsrShowDIV = function fsrShowDIV(divId, dLeft, dTop, dWidth, dHeight, dVisible, zIdx, pos, cursorType) {
	var oBody = document.getElementsByTagName("BODY")[0];
	if (oBody==null || typeof(oBody) == "undefined") {
		return false;
	}	
	var oDiv = document.createElement("div");
	oDiv.id = divId;
	oDiv.style.background = foresee.triggerParms["dhtmlOverlayBgClr"];
	oDiv.style.position = pos;
	oDiv.style.left = dLeft +"pt";
	oDiv.style.top = dTop +"pt";
	oDiv.style.width=dWidth +"%";
	oDiv.style.height=dHeight +"%";
	oDiv.style.border = "0";
	oDiv.style.visibility = dVisible;
	oDiv.style.zIndex = zIdx;
	oDiv.style.opacity = foresee.triggerParms["dhtmlOverlayOpacity"];
	oDiv.style.filter = "-moz-opacity ="+ foresee.triggerParms["dhtmlOverlayOpacity"];
	oDiv.style.filter = "alpha(opacity="+ foresee.triggerParms["dhtmlOverlayOpacity"]*100+")";
	oDiv.style.cursor = cursorType;
	oBody.appendChild(oDiv);
	return true;
}
foresee.fsrCreateInvite = function fsrCreateInvite(type, divId, dLeft, dTop, dWidth, dHeight, dVisible, frameId, fWidth, fHeight, fScroll, frameSrc) {
	if (type==1) {/*when opening Invite*/
		foresee.fsrSetDivPos();
		dLeft = foresee.triggerParms["dhtmlLeft"];
		dTop = foresee.triggerParms["dhtmlTop"];
	}
	if (foresee.triggerParms["evtListener"]==0 && type==1){
		var divStr= "<div id=\""+ divId+ "\" style=\"position:absolute; left:" + dLeft+"px; top:"+ dTop+ "px; z-index:"+foresee.triggerParms["dhtmlIndex"]+"; border:0; visibility:"+dVisible+";\">"
				   +"<iframe id=\""+ frameId+"\" src=\""+ frameSrc+"\" FrameBorder=0 Scrolling="+fScroll+" width="+fWidth+" height="+fHeight+"></iframe></div>";
		document.write(divStr);
		return true;	
	}
	var oBody = document.getElementsByTagName("BODY")[0];
	if (oBody==null || typeof(oBody) == "undefined") {
		return false;
	}	
	var oDiv = document.createElement("div");
	oDiv.id = divId;
	oDiv.style.position = "absolute";
	oDiv.style.left = dLeft +"px";
	oDiv.style.top = dTop +"px";
	if (type==0) {/*when opening Tracker*/
		oDiv.style.width=dWidth +"%";;
		oDiv.style.height=dHeight +"%";
	}
	oDiv.style.border = "0";
	oDiv.style.visibility = dVisible;
	oDiv.style.zIndex = foresee.triggerParms["dhtmlIndex"];
	oBody.appendChild(oDiv);
	var divEl  = document.getElementById(divId);
	var oFrame = document.createElement("iframe");
	oFrame.id  = frameId;
	oFrame.src = frameSrc;
	if (type==1) {/*when opening Invite*/
		oFrame.width=fWidth +"px";
		oFrame.height=fHeight +"px";
	}
	else {
		oFrame.width=fWidth + "%";
		oFrame.height=fHeight + "%";
	}
	oFrame.frameBorder = "0";
	oFrame.scrolling = fScroll;
	divEl.appendChild(oFrame);
	return true;
}
foresee.fsrCreateScript = function fsrCreateScript(srcName, tag){
	var headNode = document.getElementsByTagName(tag)[0];
    var fsrScript = document.createElement('script');
    fsrScript.type = 'text/javascript';
    fsrScript.src = srcName;
    headNode.appendChild(fsrScript);
}
foresee.fsrLoadIFrame = function fsrLoadIFrame(){
	if (foresee.triggerParms["sMode"] == 1) {
		foresee.fsrSetFullURL();
		foresee.fsrCreateInvite("0", "FSRSurveyDiv", 0, 0, 100, 100, "hidden", "FSRSurveyIframeWin", 100, 100, "YES", foresee.fullURL);  
	}
}
foresee.closeTrackerWin = function closeTrackerWin() {
    foresee.scoutTracker = foresee.fsrReadCookie("ScoutRunningCheck");
    if (foresee.scoutTracker!=null) {
		var trackerWin = window.open("","ForeseeSurveyWindow");
	    if (trackerWin != null && !trackerWin.closed) {trackerWin.close();}
    }
}
/**passing a parameter 'true' will increment LF cookie */
foresee.fsrCheckPageVisited = function fsrCheckPageVisited() {
	if (foresee.triggerParms["dLFPreCheck"] == 0) {return foresee.triggerParms["dLF"];}
	var stickyCounter = foresee.fsrReadCookie(foresee.ckLoyaltyCount);
 	if (stickyCounter == null) stickyCounter = 0;
 	 /**don't drop or increment LFCookie when pageCounter<=1 or continue button is clicked from Invite dhtml ***/
 	if (arguments.length==1) {
 		stickyCounter++;
 		foresee.fsrWriteCookie(foresee.ckLoyaltyCount, stickyCounter);
 	}
 	return stickyCounter;
}
foresee.openFSRSurveyLink = function openFSRSurveyLink() {	
	foresee.fsrSetClientCPPS();
	foresee.closeTrackerWin();
	var lf =(self.screen.width - foresee.triggerParms["width"])/2;
	var tp =(self.screen.height - foresee.triggerParms["height"])/2;
	foresee.winOptions = "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,top="+tp+",left="+lf+",width="+foresee.triggerParms["width"]+ ",height="+ foresee.triggerParms["height"];
	foresee.trackerFromClick=true;
	if (!foresee.oePoll(true)) {alert(foresee.fsrMSG1)};
}
foresee.oePoll = function oePoll() {
	foresee.rNum = Math.random()*100;
	var stickyCounter = foresee.fsrReadCookie(foresee.ckLoyaltyCount);
	var alreadyShown = foresee.fsrReadCookie(foresee.ckAlreadyShown);
	if (alreadyShown == null && stickyCounter != null) {
		if(stickyCounter >= foresee.triggerParms["dLF"] || foresee.trackerFromClick) {
		    if(foresee.rNum <= foresee.triggerParms["spE"]) {
				foresee.setFSRSurveyCookie();
		    	if (foresee.triggerParms["sMode"] == 1 && arguments.length==0) {
					foresee.fsrSendReq(foresee.PROCESS_CPP);
					if (foresee.triggerParms["olpu"] == 0) window.blur();
					else window.focus();
					document.getElementById("FSRTrackerDiv").style.visibility = "hidden";
					document.getElementById("FSRSurveyDiv").style.visibility = "visible";
					foresee.fsrSizeWindow(foresee.triggerParms["width"],foresee.triggerParms["height"]);	
					return true;
				}
				else {	
					foresee.fsrSetFullURL();
					foresee.fullURL += foresee.fsrGetCPP();
					document.getElementById("FSRTrackerDiv").innerHTML = "<font class='subtitle'>Survey is loading. Please wait...</font>";
					var myPopUp = window.open(foresee.fullURL, "ForeseeSurveyWindow",foresee.winOptions);
					if(myPopUp == null || myPopUp.closed) {return false;}
					if (foresee.triggerParms["olpu"] == 0) myPopUp.blur();
					else myPopUp.focus();
					return true;
				}
			}				
		}
	}
	return false;
}
foresee.openTrackerWin = function openTrackerWin(){
	var sl = (screen.width-foresee.triggerParms["trackerWidth"])/2;
	var st = (screen.height-foresee.triggerParms["trackerHeight"])/2;
	var winOpts = "top=" + st + ",left=" + sl + ",width=" + foresee.triggerParms["trackerWidth"] + ",height=" + foresee.triggerParms["trackerHeight"] + ",resizable=1,toolbar=0,location=0,statusbar=0,menubar=0";
	if (foresee.triggerParms["sMode"] == 1) { winOpts += ",scrollbars=0";}
	else {winOpts += ",scrollbars=1";}
	if(arguments.length == 0) {foresee.rNum = 0}		
	foresee.scoutTracker = foresee.fsrReadCookie("ScoutRunningCheck");
	if (foresee.scoutTracker == null) {
		/**** Checking dLF & spL before opening ScoutTracker ***/
		if(foresee.fsrCheckPageVisited() >= foresee.triggerParms["dLF"] && foresee.rNum <= foresee.triggerParms["spL"]) {
		   if (foresee.triggerParms["displayMode"] ==3 && arguments[0] >0) {return 0;}
		   foresee.runningscout = window.open(foresee.triggerParms["trackerURL"]+"?mid="+escape(foresee.triggerParms["mid"]) + "&sid="+ foresee.triggerParms["sid"] +"&surveypresented="+foresee.surveyPresentedBy, "ForeseeSurveyWindow", winOpts);
		}
		else {return 1;}
	} else {	
		var midVal="";
		if (typeof(foresee.triggerParms["mid"]) == "undefined") midVal = foresee.triggerParms["sid"];
		if (typeof(foresee.triggerParms["sid"]) == "undefined") midVal = foresee.triggerParms["mid"];
		/*dont show dhtml or open scout again if already surveyed or mid is same or if one scout closes another scout or user closes scout or dhtml*/
		if (foresee.fsrReadCookie(foresee.ckAlreadyShown) != null || foresee.scoutTracker == midVal){return 1;}
		/*otherwise override scout tracker with another MID - ignore spL once tracker is open */
		foresee.runningscout = window.open(foresee.triggerParms["trackerURL"]+"?mid="+escape(foresee.triggerParms["mid"]) + "&sid="+ foresee.triggerParms["sid"] + "&surveypresented="+foresee.surveyPresentedBy, "ForeseeSurveyWindow", winOpts);
	}	
	if((foresee.trackerFromClick == true || arguments.length == 0) && foresee.runningscout != null && !foresee.runningscout.closed) {
		/**hide behind when opening through DHTML Invite or Click event **/
		foresee.runningscout.blur();
	}
	window.parent.focus();
	if (foresee.triggerParms["sMode"] == 1 || (foresee.triggerParms["sid"] != null && foresee.triggerParms["mid"] == null && foresee.triggerParms["patternType"] != null)) {foresee.fsrSendReq(foresee.PROCESS_RSID);}	/*generate RSID when new tracker opens*/
	return 0;
}
foresee.openFSRTracker = function openFSRTracker() {	
		var alreadyShown = foresee.fsrReadCookie(foresee.ckAlreadyShown);
		var excludeBrowserFlag = foresee.fsr_NS62 || foresee.fsr_safari_2_x;
		if(foresee.triggerParms["displayMode"] == 0 || excludeBrowserFlag || alreadyShown!=null || foresee.fsrReadCookie("ScoutRunningCheck") == 'ScoutClosed' || !foresee.fsrIsCookieEnabled()) {return;}
		foresee.fsrSetAdminParms();
		foresee.fsrCheckPageVisited(true);	/**passing true will indicate an increment to LF cookie */		
		var excludeListFlag = false; 
		if (typeof(foresee.excludeList) != "undefined") {excludeListFlag = foresee.fsrIsOnList(foresee.excludeList,foresee.triggerParms["trackerExclude"]);}
		if(excludeListFlag || foresee.isReferrerSponsoredLink()) {return;}
		foresee.trackerFromClick = false;
		if (arguments.length>0 && arguments[0] == '0')	foresee.triggerParms["displayMode"] = 0;
		if(arguments.length >0 && arguments[1] == true) {foresee.trackerFromClick = true;}
		if (foresee.triggerParms["sid"] != null && foresee.triggerParms["mid"] == null && foresee.triggerParms["patternType"] != null && (foresee.triggerParms["patternType"].toUpperCase()).indexOf("URL") != -1) {
			foresee.triggerParms["sMode"] = 0;
			if (foresee.triggerParms["oeMode"] == 0) {
				foresee.fsrWriteCookie("currentURL", escape(window.location.href));
			}
		}
		foresee.rNum = Math.random()*100;
		/***calling client functions here **/
		if (foresee.fsrSetClientFunc() == false) return;
		/***/
		var scoutFlag = foresee.openTrackerWin(foresee.rNum);
		if (foresee.fsr_aol) {
		  try{ /*aolToolbar and yahoo popupblocker fix*/
		    foresee.runningscout.focus();
		    scoutFlag=1;
		  } catch (e){scoutFlag=0;}
		}
		if(!foresee.trackerFromClick && !foresee.fsr_NS70 && (scoutFlag==null || scoutFlag == 0) && foresee.triggerParms["displayMode"] != 2) {
				if (foresee.fsr_NS8) foresee.triggerParms["dhtmlHeight"] = foresee.triggerParms["dhtmlHeight"] + 15;
				/**show curtain-div **/
				if (foresee.triggerParms["dhtmlHighlight"]==1) foresee.fsrShowDIV("fsrOverlayDiv", 0, 0, 100, 100, "hidden", 9999, "fixed", "wait");
				/**creating foresee invite div element using DOM**/ 
				if (!foresee.fsrCreateInvite("1", "FSRInviteWin", foresee.triggerParms["dhtmlLeft"], foresee.triggerParms["dhtmlTop"], 100, 100, "hidden", "cframe", foresee.triggerParms["dhtmlWidth"], foresee.triggerParms["dhtmlHeight"], "NO", foresee.triggerParms["dhtmlURL"])) {foresee.fsrWriteCookie("FSRDivCreated", "false"); return;}
				if ((foresee.triggerParms["midexp"] ) != null) {
					foresee.dcQString = "ndc=1&midexp=" + foresee.triggerParms["midexp"] + "&mid=" + foresee.specialEscape(escape(foresee.triggerParms["mid"]));
					if(foresee.triggerParms["dcUniqueId"]!=null) { foresee.dcQString += "&dcUniqueId=" + foresee.specialEscape(escape(foresee.triggerParms["dcUniqueId"])); }						
				}
				foresee.newDt   = new Date();
				foresee.currTime= foresee.newDt.getTime(); 
				foresee.OTCImg = new Image();
				foresee.OTCImg.onerror = foresee.otcErrorProc;
				foresee.OTCImg.onload = foresee.otcOnloadProc;
				foresee.OTCImg.src = foresee.OTCImgURL + "?protocol=" + window.location.protocol + "&uid="+ foresee.currTime;	
				
		}
}
foresee.openMultiVendorSurvey = function openMultiVendorSurvey(randNum) {
		foresee.closeTrackerWin();			/**Explicitly closing tracker if its open **/		
		/**Looping through MultiVendors**/
		var spVendor1 = foresee.triggerParms["spL"];
		for(var key in foresee.vendorLookupTable) {
			pos = foresee.vendorLookupTable[key].indexOf(foresee.triggerParms["fsrCkSeparator"]);
			vendorSP = foresee.vendorLookupTable[key].substring(0,pos);
			vendorURL= foresee.vendorLookupTable[key].substring(pos+2);
			if (randNum > spVendor1 && randNum <= vendorSP) {
				foresee.setFSRSurveyCookie();
				foresee.fsrCreateScript(vendorURL, "head");		/*appending dynamic vendor's survey code at the end of body tag*/
				return;
			}
			spVendor1 = vendorSP;
		}
}
foresee.fsrSetAdminParms = function fsrSetAdminParms(){
	if (foresee.fsrReadCookie("dLF","FSRAdmin") != null && foresee.fsrReadCookie("spL","FSRAdmin") != null) {
		foresee.triggerParms["dLF"] = foresee.fsrReadCookie("dLF","FSRAdmin");
		foresee.triggerParms["spL"] = foresee.fsrReadCookie("spL","FSRAdmin");
	}
}
foresee.fsrSetMode1Parms = function fsrSetMode1Parms(){
	if (foresee.triggerParms["oeMode"] == 1 && foresee.fsrReadCookie(foresee.ckAlreadyShown) == null) {
		if (foresee.fsr_ie) foresee.fsrAttachEvent(window, "beforeunload", foresee.fsrOnBeforeUnload, false);
		foresee.fsrAttachEvent(window, "unload", foresee.fsrOnUnload, false);
    	setTimeout("foresee.fsrCallCookieTimer()", 1000, "JavaScript");
	}
}
foresee.fsrSetTrackerParms = function fsrSetTrackerParms(){
	midVal = foresee.fsrGetURLParameters('mid');
	if (midVal == "") {
		midVal = foresee.fsrGetURLParameters('sid');
		if (midVal=="")	midVal = foresee.triggerParms["mid"];
	}
	else {foresee.triggerParms["mid"] = midVal;}
	foresee.fsrWriteCookie("ScoutRunningCheck", midVal);
	foresee.fsrSetTriggerParms();
}
foresee.fsrSetTriggerParms = function fsrSetTriggerParms(cValue){
	if (foresee.fsr_ie5) foresee.triggerParms["evtListener"]=0;
	if (typeof(foresee.midLookupTable) == "undefined") return false;
	if (cValue == null) {	/**check location pathname as default **/
			foresee.hParent = window.opener;
			if (foresee.hParent != null )	{cValue = foresee.hParent.location.href;}	
			else {cValue = window.location.href;}
	}
	for(var key in foresee.midLookupTable) {
		if ((cValue.toLowerCase()).indexOf(key.toLowerCase()) != -1) {
			var lookupParams = foresee.midLookupTable[key].split(":");			
			foresee.triggerParms["spL"] = lookupParams[0];
			foresee.triggerParms["mid"] = lookupParams[1];
			if (lookupParams.length == 3)	foresee.triggerParms["nLF"] = lookupParams[2];
			return true;
		}
	}
	return false;
}
foresee.fsrTagEvent = function fsrTagEvent(tag,matchStr,evt,fnc){
	var anchorTags=null;
	if (window.opener) 
		anchorTags = window.opener.document.getElementsByTagName(tag.toLowerCase());
	else 
		anchorTags = document.getElementsByTagName(tag.toLowerCase());
	for (var i=0; i< anchorTags.length ; i++)
	{
	   var oTag = anchorTags[i];
	   var oProperty = oTag.href;
 	   if (oProperty != null) {
 	   		if ((oProperty.toLowerCase()).indexOf(matchStr.toLowerCase()) != -1) {
		   		foresee.fsrAttachEvent(oTag, evt, fnc);
			}
		}
	}
}
foresee.fsrTagEventListeners = function fsrTagEventListeners(tagFunc){
	if (typeof(foresee.eventTagList) == "undefined" || foresee.fsrReadCookie(foresee.ckAlreadyShown) != null) {
		return;
	}
	if (tagFunc == null) return;
	for(var matchingStr in foresee.eventTagList) {
		var arrParams = foresee.eventTagList[matchingStr].split("|");			
		if (arrParams.length==2) {
			foresee.fsrTagEvent(arrParams[0], matchingStr, arrParams[1], tagFunc);
		}
	}
}
foresee.fsrSetClientFunc = function fsrSetClientFunc(){
	/** add event listener here **/
	foresee.fsrTagEventListeners(foresee.closeTrackerWin);	//passing function reference as parameter to be executed
	/** add multivendor code here **/
	if (typeof(foresee.vendorLookupTable) != "undefined") {
		if (foresee.rNum >0 && foresee.rNum > foresee.triggerParms["spL"]) {
			foresee.openMultiVendorSurvey(foresee.rNum);
			return false;
		}
	}
	if (foresee.triggerParms["flashDetect"]==1){
		if (foresee.fsrDetectFlash() == false) return false;
	}
	return true;
}
foresee.fsrDetectFlash = function fsrDetectFlash(){
	/** return a true if no flash is detected otherwise dont show invite/tracker **
	/** For Mozilla based browsers **/
	if (document.embeds && document.embeds.length > 0) {
			return false;
	}
	/** For all other browsers **/
	else if (document.all){
		var obj = document.all.tags("OBJECT");
    	for (var e=0; e<obj.length;e++){
   	    	for (var d=0; d<obj[e].attributes.length;d++){
	       	     if ((obj[e].attributes[d].name).toLowerCase() == "classid") {
					return false;
        	  	 }
       		}
    	}
    }
	return true;
}
/********************************/
/**calling foresee survey code **/
/********************************/
try {
	if (window.name=="ForeseeSurveyWindow" || (window.opener && foresee.triggerParms["displayMode"] == 2)) {	/*if tracker*/
		window.name="ForeseeSurveyWindow";	//must be set for displayMode 2
		foresee.fsrSetTrackerParms();	/**reload the mid or sid passed from the parent page**/
		setTimeout("foresee.fsrSurveyTimeout();", foresee.triggerParms["trackerDelay"], "JavaScript" );
	}
	else {
		foresee.fsrSetTriggerParms();	/**used for multi-measure only, overwrite triggerParams**/
		foresee.fsrSetMode1Parms();		/**used for mode1 only, drop cookie and attach unload event listener**/	
		if (!foresee.fsrAttachEvent(window, "load", foresee.openFSRTracker, false)) foresee.openFSRTracker();
	}
} catch(e) {foresee.fsrExceptionHandler(foresee.triggerParms["captureTriggerVersion"],e);} 

// Custom scripts for Nintendo.com --Chris

function MM_preloadImages() { 
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i < a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { 
  var i,x,a=document.MM_sr; for(i=0;a&&i < a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { 
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i = 0;!x&&i < d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i < d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { 
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}



}
/*
     FILE ARCHIVED ON 12:35:21 Jun 04, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:42:27 Nov 22, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.722
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 43.251
  LoadShardBlock: 324.597 (3)
  PetaboxLoader3.datanode: 320.064 (4)
  PetaboxLoader3.resolve: 182.264 (2)
  load_resource: 403.437
*/