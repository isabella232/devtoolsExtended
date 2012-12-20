
var Protocol = {};
/** @typedef {string}*/
Protocol.Error;



var InspectorAgent = {};

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
InspectorAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
InspectorAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
InspectorAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
InspectorAgent.disable.invoke = function(obj, opt_callback) {}
/** @interface */
InspectorAgent.Dispatcher = function() {};
/**
 * @param {number} testCallId
 * @param {string} script
 */
InspectorAgent.Dispatcher.prototype.evaluateForTestInFrontend = function(testCallId, script) {};
/**
 * @param {RuntimeAgent.RemoteObject} object
 * @param {Object} hints
 */
InspectorAgent.Dispatcher.prototype.inspect = function(object, hints) {};
/**
 * @param {string} reason
 */
InspectorAgent.Dispatcher.prototype.detached = function(reason) {};
/**
 * @param {InspectorAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerInspectorDispatcher = function(dispatcher) {}



var MemoryAgent = {};

/** @constructor */
MemoryAgent.NodeCount = function()
{
/** @type {string} */ this.nodeName;
/** @type {number} */ this.count;
}

/** @constructor */
MemoryAgent.ListenerCount = function()
{
/** @type {string} */ this.type;
/** @type {number} */ this.count;
}

/** @constructor */
MemoryAgent.StringStatistics = function()
{
/** @type {number} */ this.dom;
/** @type {number} */ this.js;
/** @type {number} */ this.shared;
}

/** @constructor */
MemoryAgent.DOMGroup = function()
{
/** @type {number} */ this.size;
/** @type {string} */ this.title;
/** @type {string|undefined} */ this.documentURI;
/** @type {Array.<MemoryAgent.NodeCount>} */ this.nodeCount;
/** @type {Array.<MemoryAgent.ListenerCount>} */ this.listenerCount;
}

/** @constructor */
MemoryAgent.MemoryBlock = function()
{
/** @type {number|undefined} */ this.size;
/** @type {string} */ this.name;
/** @type {Array.<MemoryAgent.MemoryBlock>|undefined} */ this.children;
}

/**
 * @param {function(?Protocol.Error, Array.<MemoryAgent.DOMGroup>, MemoryAgent.StringStatistics):void=} opt_callback
 */
MemoryAgent.getDOMNodeCount = function(opt_callback) {}
/** @param {function(?Protocol.Error, Array.<MemoryAgent.DOMGroup>, MemoryAgent.StringStatistics):void=} opt_callback */
MemoryAgent.getDOMNodeCount.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean=} opt_reportGraph
 * @param {function(?Protocol.Error, MemoryAgent.MemoryBlock, Object=):void=} opt_callback
 */
MemoryAgent.getProcessMemoryDistribution = function(opt_reportGraph, opt_callback) {}
/** @param {function(?Protocol.Error, MemoryAgent.MemoryBlock, Object=):void=} opt_callback */
MemoryAgent.getProcessMemoryDistribution.invoke = function(obj, opt_callback) {}
/** @interface */
MemoryAgent.Dispatcher = function() {};
/**
 * @param {MemoryAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerMemoryDispatcher = function(dispatcher) {}



var PageAgent = {};

/** @typedef {string} */
PageAgent.ResourceType;

/** @constructor */
PageAgent.Frame = function()
{
/** @type {string} */ this.id;
/** @type {string|undefined} */ this.parentId;
/** @type {NetworkAgent.LoaderId} */ this.loaderId;
/** @type {string|undefined} */ this.name;
/** @type {string} */ this.url;
/** @type {string|undefined} */ this.securityOrigin;
/** @type {string} */ this.mimeType;
}

/** @constructor */
PageAgent.FrameResourceTree = function()
{
/** @type {PageAgent.Frame} */ this.frame;
/** @type {Array.<PageAgent.FrameResourceTree>|undefined} */ this.childFrames;
/** @type {Array.<Object>} */ this.resources;
}

/** @constructor */
PageAgent.SearchMatch = function()
{
/** @type {number} */ this.lineNumber;
/** @type {string} */ this.lineContent;
}

/** @constructor */
PageAgent.SearchResult = function()
{
/** @type {string} */ this.url;
/** @type {NetworkAgent.FrameId} */ this.frameId;
/** @type {number} */ this.matchesCount;
}

/** @constructor */
PageAgent.Cookie = function()
{
/** @type {string} */ this.name;
/** @type {string} */ this.value;
/** @type {string} */ this.domain;
/** @type {string} */ this.path;
/** @type {number} */ this.expires;
/** @type {number} */ this.size;
/** @type {boolean} */ this.httpOnly;
/** @type {boolean} */ this.secure;
/** @type {boolean} */ this.session;
}

/** @typedef {string} */
PageAgent.ScriptIdentifier;

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {string} scriptSource
 * @param {function(?Protocol.Error, PageAgent.ScriptIdentifier):void=} opt_callback
 */
PageAgent.addScriptToEvaluateOnLoad = function(scriptSource, opt_callback) {}
/** @param {function(?Protocol.Error, PageAgent.ScriptIdentifier):void=} opt_callback */
PageAgent.addScriptToEvaluateOnLoad.invoke = function(obj, opt_callback) {}

/**
 * @param {PageAgent.ScriptIdentifier} identifier
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.removeScriptToEvaluateOnLoad = function(identifier, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.removeScriptToEvaluateOnLoad.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean=} opt_ignoreCache
 * @param {string=} opt_scriptToEvaluateOnLoad
 * @param {string=} opt_scriptPreprocessor
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.reload = function(opt_ignoreCache, opt_scriptToEvaluateOnLoad, opt_scriptPreprocessor, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.reload.invoke = function(obj, opt_callback) {}

/**
 * @param {string} url
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.navigate = function(url, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.navigate.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, Array.<PageAgent.Cookie>, string):void=} opt_callback
 */
PageAgent.getCookies = function(opt_callback) {}
/** @param {function(?Protocol.Error, Array.<PageAgent.Cookie>, string):void=} opt_callback */
PageAgent.getCookies.invoke = function(obj, opt_callback) {}

/**
 * @param {string} cookieName
 * @param {string} domain
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.deleteCookie = function(cookieName, domain, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.deleteCookie.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, PageAgent.FrameResourceTree):void=} opt_callback
 */
PageAgent.getResourceTree = function(opt_callback) {}
/** @param {function(?Protocol.Error, PageAgent.FrameResourceTree):void=} opt_callback */
PageAgent.getResourceTree.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.FrameId} frameId
 * @param {string} url
 * @param {function(?Protocol.Error, string, boolean):void=} opt_callback
 */
PageAgent.getResourceContent = function(frameId, url, opt_callback) {}
/** @param {function(?Protocol.Error, string, boolean):void=} opt_callback */
PageAgent.getResourceContent.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.FrameId} frameId
 * @param {string} url
 * @param {string} query
 * @param {boolean=} opt_caseSensitive
 * @param {boolean=} opt_isRegex
 * @param {function(?Protocol.Error, Array.<PageAgent.SearchMatch>):void=} opt_callback
 */
PageAgent.searchInResource = function(frameId, url, query, opt_caseSensitive, opt_isRegex, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<PageAgent.SearchMatch>):void=} opt_callback */
PageAgent.searchInResource.invoke = function(obj, opt_callback) {}

/**
 * @param {string} text
 * @param {boolean=} opt_caseSensitive
 * @param {boolean=} opt_isRegex
 * @param {function(?Protocol.Error, Array.<PageAgent.SearchResult>):void=} opt_callback
 */
PageAgent.searchInResources = function(text, opt_caseSensitive, opt_isRegex, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<PageAgent.SearchResult>):void=} opt_callback */
PageAgent.searchInResources.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.FrameId} frameId
 * @param {string} html
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.setDocumentContent = function(frameId, html, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.setDocumentContent.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
PageAgent.canOverrideDeviceMetrics = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
PageAgent.canOverrideDeviceMetrics.invoke = function(obj, opt_callback) {}

/**
 * @param {number} width
 * @param {number} height
 * @param {number} fontScaleFactor
 * @param {boolean} fitWindow
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.setDeviceMetricsOverride = function(width, height, fontScaleFactor, fitWindow, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.setDeviceMetricsOverride.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} result
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.setShowPaintRects = function(result, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.setShowPaintRects.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
PageAgent.canShowFPSCounter = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
PageAgent.canShowFPSCounter.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} show
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.setShowFPSCounter = function(show, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.setShowFPSCounter.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, string):void=} opt_callback
 */
PageAgent.getScriptExecutionStatus = function(opt_callback) {}
/** @param {function(?Protocol.Error, string):void=} opt_callback */
PageAgent.getScriptExecutionStatus.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} value
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.setScriptExecutionDisabled = function(value, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.setScriptExecutionDisabled.invoke = function(obj, opt_callback) {}

/**
 * @param {number=} opt_latitude
 * @param {number=} opt_longitude
 * @param {number=} opt_accuracy
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.setGeolocationOverride = function(opt_latitude, opt_longitude, opt_accuracy, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.setGeolocationOverride.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.clearGeolocationOverride = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.clearGeolocationOverride.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
PageAgent.canOverrideGeolocation = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
PageAgent.canOverrideGeolocation.invoke = function(obj, opt_callback) {}

/**
 * @param {number} alpha
 * @param {number} beta
 * @param {number} gamma
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.setDeviceOrientationOverride = function(alpha, beta, gamma, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.setDeviceOrientationOverride.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.clearDeviceOrientationOverride = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.clearDeviceOrientationOverride.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
PageAgent.canOverrideDeviceOrientation = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
PageAgent.canOverrideDeviceOrientation.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} enabled
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.setTouchEmulationEnabled = function(enabled, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.setTouchEmulationEnabled.invoke = function(obj, opt_callback) {}

/**
 * @param {string} media
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.setEmulatedMedia = function(media, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.setEmulatedMedia.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
PageAgent.getCompositingBordersVisible = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
PageAgent.getCompositingBordersVisible.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} visible
 * @param {function(?Protocol.Error):void=} opt_callback
 */
PageAgent.setCompositingBordersVisible = function(visible, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
PageAgent.setCompositingBordersVisible.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, string):void=} opt_callback
 */
PageAgent.captureScreenshot = function(opt_callback) {}
/** @param {function(?Protocol.Error, string):void=} opt_callback */
PageAgent.captureScreenshot.invoke = function(obj, opt_callback) {}
/** @interface */
PageAgent.Dispatcher = function() {};
/**
 * @param {number} timestamp
 */
PageAgent.Dispatcher.prototype.domContentEventFired = function(timestamp) {};
/**
 * @param {number} timestamp
 */
PageAgent.Dispatcher.prototype.loadEventFired = function(timestamp) {};
/**
 * @param {PageAgent.Frame} frame
 */
PageAgent.Dispatcher.prototype.frameNavigated = function(frame) {};
/**
 * @param {NetworkAgent.FrameId} frameId
 */
PageAgent.Dispatcher.prototype.frameDetached = function(frameId) {};
/**
 * @param {PageAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerPageDispatcher = function(dispatcher) {}



var RuntimeAgent = {};

/** @typedef {string} */
RuntimeAgent.RemoteObjectId;

/** @constructor */
RuntimeAgent.RemoteObject = function()
{
/** @type {string} */ this.type;
/** @type {string|undefined} */ this.subtype;
/** @type {string|undefined} */ this.className;
/** @type {*|undefined} */ this.value;
/** @type {string|undefined} */ this.description;
/** @type {RuntimeAgent.RemoteObjectId|undefined} */ this.objectId;
/** @type {RuntimeAgent.ObjectPreview|undefined} */ this.preview;
}

/** @constructor */
RuntimeAgent.ObjectPreview = function()
{
/** @type {boolean} */ this.lossless;
/** @type {boolean} */ this.overflow;
/** @type {Array.<RuntimeAgent.PropertyPreview>} */ this.properties;
}

/** @constructor */
RuntimeAgent.PropertyPreview = function()
{
/** @type {string} */ this.name;
/** @type {string} */ this.type;
/** @type {string|undefined} */ this.value;
/** @type {string|undefined} */ this.subtype;
}

/** @constructor */
RuntimeAgent.PropertyDescriptor = function()
{
/** @type {string} */ this.name;
/** @type {RuntimeAgent.RemoteObject|undefined} */ this.value;
/** @type {boolean|undefined} */ this.writable;
/** @type {RuntimeAgent.RemoteObject|undefined} */ this.get;
/** @type {RuntimeAgent.RemoteObject|undefined} */ this.set;
/** @type {boolean} */ this.configurable;
/** @type {boolean} */ this.enumerable;
/** @type {boolean|undefined} */ this.wasThrown;
/** @type {boolean|undefined} */ this.isOwn;
}

/** @constructor */
RuntimeAgent.InternalPropertyDescriptor = function()
{
/** @type {string} */ this.name;
/** @type {RuntimeAgent.RemoteObject|undefined} */ this.value;
}

/** @constructor */
RuntimeAgent.CallArgument = function()
{
/** @type {*|undefined} */ this.value;
/** @type {RuntimeAgent.RemoteObjectId|undefined} */ this.objectId;
}

/** @typedef {number} */
RuntimeAgent.ExecutionContextId;

/** @constructor */
RuntimeAgent.ExecutionContextDescription = function()
{
/** @type {RuntimeAgent.ExecutionContextId} */ this.id;
/** @type {boolean} */ this.isPageContext;
/** @type {string} */ this.name;
/** @type {NetworkAgent.FrameId} */ this.frameId;
}

/**
 * @param {string} expression
 * @param {string=} opt_objectGroup
 * @param {boolean=} opt_includeCommandLineAPI
 * @param {boolean=} opt_doNotPauseOnExceptionsAndMuteConsole
 * @param {RuntimeAgent.ExecutionContextId=} opt_contextId
 * @param {boolean=} opt_returnByValue
 * @param {boolean=} opt_generatePreview
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback
 */
RuntimeAgent.evaluate = function(expression, opt_objectGroup, opt_includeCommandLineAPI, opt_doNotPauseOnExceptionsAndMuteConsole, opt_contextId, opt_returnByValue, opt_generatePreview, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback */
RuntimeAgent.evaluate.invoke = function(obj, opt_callback) {}

/**
 * @param {RuntimeAgent.RemoteObjectId} objectId
 * @param {string} functionDeclaration
 * @param {Array.<RuntimeAgent.CallArgument>=} opt_arguments
 * @param {boolean=} opt_doNotPauseOnExceptionsAndMuteConsole
 * @param {boolean=} opt_returnByValue
 * @param {boolean=} opt_generatePreview
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback
 */
RuntimeAgent.callFunctionOn = function(objectId, functionDeclaration, opt_arguments, opt_doNotPauseOnExceptionsAndMuteConsole, opt_returnByValue, opt_generatePreview, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback */
RuntimeAgent.callFunctionOn.invoke = function(obj, opt_callback) {}

/**
 * @param {RuntimeAgent.RemoteObjectId} objectId
 * @param {boolean=} opt_ownProperties
 * @param {function(?Protocol.Error, Array.<RuntimeAgent.PropertyDescriptor>, Array.<RuntimeAgent.InternalPropertyDescriptor>=):void=} opt_callback
 */
RuntimeAgent.getProperties = function(objectId, opt_ownProperties, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<RuntimeAgent.PropertyDescriptor>, Array.<RuntimeAgent.InternalPropertyDescriptor>=):void=} opt_callback */
RuntimeAgent.getProperties.invoke = function(obj, opt_callback) {}

/**
 * @param {RuntimeAgent.RemoteObjectId} objectId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
RuntimeAgent.releaseObject = function(objectId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
RuntimeAgent.releaseObject.invoke = function(obj, opt_callback) {}

/**
 * @param {string} objectGroup
 * @param {function(?Protocol.Error):void=} opt_callback
 */
RuntimeAgent.releaseObjectGroup = function(objectGroup, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
RuntimeAgent.releaseObjectGroup.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
RuntimeAgent.run = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
RuntimeAgent.run.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
RuntimeAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
RuntimeAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
RuntimeAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
RuntimeAgent.disable.invoke = function(obj, opt_callback) {}
/** @interface */
RuntimeAgent.Dispatcher = function() {};
/**
 * @param {RuntimeAgent.ExecutionContextDescription} context
 */
RuntimeAgent.Dispatcher.prototype.executionContextCreated = function(context) {};
/**
 * @param {RuntimeAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerRuntimeDispatcher = function(dispatcher) {}



var ConsoleAgent = {};

/** @constructor */
ConsoleAgent.ConsoleMessage = function()
{
/** @type {string} */ this.source;
/** @type {string} */ this.level;
/** @type {string} */ this.text;
/** @type {string|undefined} */ this.type;
/** @type {string|undefined} */ this.url;
/** @type {number|undefined} */ this.line;
/** @type {number|undefined} */ this.repeatCount;
/** @type {Array.<RuntimeAgent.RemoteObject>|undefined} */ this.parameters;
/** @type {ConsoleAgent.StackTrace|undefined} */ this.stackTrace;
/** @type {NetworkAgent.RequestId|undefined} */ this.networkRequestId;
}

/** @constructor */
ConsoleAgent.CallFrame = function()
{
/** @type {string} */ this.functionName;
/** @type {string} */ this.url;
/** @type {number} */ this.lineNumber;
/** @type {number} */ this.columnNumber;
}

/** @typedef {Array.<ConsoleAgent.CallFrame>} */
ConsoleAgent.StackTrace;

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.clearMessages = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.clearMessages.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} enabled
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.setMonitoringXHREnabled = function(enabled, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.setMonitoringXHREnabled.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.addInspectedNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.addInspectedNode.invoke = function(obj, opt_callback) {}

/**
 * @param {number} heapObjectId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ConsoleAgent.addInspectedHeapObject = function(heapObjectId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ConsoleAgent.addInspectedHeapObject.invoke = function(obj, opt_callback) {}
/** @interface */
ConsoleAgent.Dispatcher = function() {};
/**
 * @param {ConsoleAgent.ConsoleMessage} message
 */
ConsoleAgent.Dispatcher.prototype.messageAdded = function(message) {};
/**
 * @param {number} count
 */
ConsoleAgent.Dispatcher.prototype.messageRepeatCountUpdated = function(count) {};
ConsoleAgent.Dispatcher.prototype.messagesCleared = function() {};
/**
 * @param {ConsoleAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerConsoleDispatcher = function(dispatcher) {}



var NetworkAgent = {};

/** @typedef {string} */
NetworkAgent.LoaderId;

/** @typedef {string} */
NetworkAgent.FrameId;

/** @typedef {string} */
NetworkAgent.RequestId;

/** @typedef {number} */
NetworkAgent.Timestamp;

/** @constructor */
NetworkAgent.Headers = function()
{
}

/** @constructor */
NetworkAgent.ResourceTiming = function()
{
/** @type {number} */ this.requestTime;
/** @type {number} */ this.proxyStart;
/** @type {number} */ this.proxyEnd;
/** @type {number} */ this.dnsStart;
/** @type {number} */ this.dnsEnd;
/** @type {number} */ this.connectStart;
/** @type {number} */ this.connectEnd;
/** @type {number} */ this.sslStart;
/** @type {number} */ this.sslEnd;
/** @type {number} */ this.sendStart;
/** @type {number} */ this.sendEnd;
/** @type {number} */ this.receiveHeadersEnd;
}

/** @constructor */
NetworkAgent.Request = function()
{
/** @type {string} */ this.url;
/** @type {string} */ this.method;
/** @type {NetworkAgent.Headers} */ this.headers;
/** @type {string|undefined} */ this.postData;
}

/** @constructor */
NetworkAgent.Response = function()
{
/** @type {string} */ this.url;
/** @type {number} */ this.status;
/** @type {string} */ this.statusText;
/** @type {NetworkAgent.Headers} */ this.headers;
/** @type {string|undefined} */ this.headersText;
/** @type {string} */ this.mimeType;
/** @type {NetworkAgent.Headers|undefined} */ this.requestHeaders;
/** @type {string|undefined} */ this.requestHeadersText;
/** @type {boolean} */ this.connectionReused;
/** @type {number} */ this.connectionId;
/** @type {boolean|undefined} */ this.fromDiskCache;
/** @type {NetworkAgent.ResourceTiming|undefined} */ this.timing;
}

/** @constructor */
NetworkAgent.WebSocketRequest = function()
{
/** @type {string} */ this.requestKey3;
/** @type {NetworkAgent.Headers} */ this.headers;
}

/** @constructor */
NetworkAgent.WebSocketResponse = function()
{
/** @type {number} */ this.status;
/** @type {string} */ this.statusText;
/** @type {NetworkAgent.Headers} */ this.headers;
/** @type {string} */ this.challengeResponse;
}

/** @constructor */
NetworkAgent.WebSocketFrame = function()
{
/** @type {number} */ this.opcode;
/** @type {boolean} */ this.mask;
/** @type {string} */ this.payloadData;
}

/** @constructor */
NetworkAgent.CachedResource = function()
{
/** @type {string} */ this.url;
/** @type {PageAgent.ResourceType} */ this.type;
/** @type {NetworkAgent.Response|undefined} */ this.response;
/** @type {number} */ this.bodySize;
}

/** @constructor */
NetworkAgent.Initiator = function()
{
/** @type {string} */ this.type;
/** @type {ConsoleAgent.StackTrace|undefined} */ this.stackTrace;
/** @type {string|undefined} */ this.url;
/** @type {number|undefined} */ this.lineNumber;
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {string} userAgent
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.setUserAgentOverride = function(userAgent, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.setUserAgentOverride.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.Headers} headers
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.setExtraHTTPHeaders = function(headers, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.setExtraHTTPHeaders.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {function(?Protocol.Error, string, boolean):void=} opt_callback
 */
NetworkAgent.getResponseBody = function(requestId, opt_callback) {}
/** @param {function(?Protocol.Error, string, boolean):void=} opt_callback */
NetworkAgent.getResponseBody.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.replayXHR = function(requestId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.replayXHR.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
NetworkAgent.canClearBrowserCache = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
NetworkAgent.canClearBrowserCache.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.clearBrowserCache = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.clearBrowserCache.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
NetworkAgent.canClearBrowserCookies = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
NetworkAgent.canClearBrowserCookies.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.clearBrowserCookies = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.clearBrowserCookies.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} cacheDisabled
 * @param {function(?Protocol.Error):void=} opt_callback
 */
NetworkAgent.setCacheDisabled = function(cacheDisabled, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
NetworkAgent.setCacheDisabled.invoke = function(obj, opt_callback) {}
/** @interface */
NetworkAgent.Dispatcher = function() {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.FrameId} frameId
 * @param {NetworkAgent.LoaderId} loaderId
 * @param {string} documentURL
 * @param {NetworkAgent.Request} request
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {NetworkAgent.Initiator} initiator
 * @param {NetworkAgent.Response=} opt_redirectResponse
 */
NetworkAgent.Dispatcher.prototype.requestWillBeSent = function(requestId, frameId, loaderId, documentURL, request, timestamp, initiator, opt_redirectResponse) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 */
NetworkAgent.Dispatcher.prototype.requestServedFromCache = function(requestId) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.FrameId} frameId
 * @param {NetworkAgent.LoaderId} loaderId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {PageAgent.ResourceType} type
 * @param {NetworkAgent.Response} response
 */
NetworkAgent.Dispatcher.prototype.responseReceived = function(requestId, frameId, loaderId, timestamp, type, response) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {number} dataLength
 * @param {number} encodedDataLength
 */
NetworkAgent.Dispatcher.prototype.dataReceived = function(requestId, timestamp, dataLength, encodedDataLength) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 */
NetworkAgent.Dispatcher.prototype.loadingFinished = function(requestId, timestamp) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {string} errorText
 * @param {boolean=} opt_canceled
 */
NetworkAgent.Dispatcher.prototype.loadingFailed = function(requestId, timestamp, errorText, opt_canceled) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.FrameId} frameId
 * @param {NetworkAgent.LoaderId} loaderId
 * @param {string} documentURL
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {NetworkAgent.Initiator} initiator
 * @param {NetworkAgent.CachedResource} resource
 */
NetworkAgent.Dispatcher.prototype.requestServedFromMemoryCache = function(requestId, frameId, loaderId, documentURL, timestamp, initiator, resource) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {NetworkAgent.WebSocketRequest} request
 */
NetworkAgent.Dispatcher.prototype.webSocketWillSendHandshakeRequest = function(requestId, timestamp, request) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {NetworkAgent.WebSocketResponse} response
 */
NetworkAgent.Dispatcher.prototype.webSocketHandshakeResponseReceived = function(requestId, timestamp, response) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {string} url
 */
NetworkAgent.Dispatcher.prototype.webSocketCreated = function(requestId, url) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 */
NetworkAgent.Dispatcher.prototype.webSocketClosed = function(requestId, timestamp) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {NetworkAgent.WebSocketFrame} response
 */
NetworkAgent.Dispatcher.prototype.webSocketFrameReceived = function(requestId, timestamp, response) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {string} errorMessage
 */
NetworkAgent.Dispatcher.prototype.webSocketFrameError = function(requestId, timestamp, errorMessage) {};
/**
 * @param {NetworkAgent.RequestId} requestId
 * @param {NetworkAgent.Timestamp} timestamp
 * @param {NetworkAgent.WebSocketFrame} response
 */
NetworkAgent.Dispatcher.prototype.webSocketFrameSent = function(requestId, timestamp, response) {};
/**
 * @param {NetworkAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerNetworkDispatcher = function(dispatcher) {}



var DatabaseAgent = {};

/** @typedef {string} */
DatabaseAgent.DatabaseId;

/** @constructor */
DatabaseAgent.Database = function()
{
/** @type {DatabaseAgent.DatabaseId} */ this.id;
/** @type {string} */ this.domain;
/** @type {string} */ this.name;
/** @type {string} */ this.version;
}

/** @constructor */
DatabaseAgent.Error = function()
{
/** @type {string} */ this.message;
/** @type {number} */ this.code;
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DatabaseAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DatabaseAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DatabaseAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DatabaseAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {DatabaseAgent.DatabaseId} databaseId
 * @param {function(?Protocol.Error, Array.<string>):void=} opt_callback
 */
DatabaseAgent.getDatabaseTableNames = function(databaseId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<string>):void=} opt_callback */
DatabaseAgent.getDatabaseTableNames.invoke = function(obj, opt_callback) {}

/**
 * @param {DatabaseAgent.DatabaseId} databaseId
 * @param {string} query
 * @param {function(?Protocol.Error, Array.<string>=, Array.<*>=, DatabaseAgent.Error=):void=} opt_callback
 */
DatabaseAgent.executeSQL = function(databaseId, query, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<string>=, Array.<*>=, DatabaseAgent.Error=):void=} opt_callback */
DatabaseAgent.executeSQL.invoke = function(obj, opt_callback) {}
/** @interface */
DatabaseAgent.Dispatcher = function() {};
/**
 * @param {DatabaseAgent.Database} database
 */
DatabaseAgent.Dispatcher.prototype.addDatabase = function(database) {};
/**
 * @param {DatabaseAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerDatabaseDispatcher = function(dispatcher) {}



var IndexedDBAgent = {};

/** @constructor */
IndexedDBAgent.SecurityOriginWithDatabaseNames = function()
{
/** @type {string} */ this.securityOrigin;
/** @type {Array.<string>} */ this.databaseNames;
}

/** @constructor */
IndexedDBAgent.DatabaseWithObjectStores = function()
{
/** @type {string} */ this.name;
/** @type {string} */ this.version;
/** @type {number} */ this.intVersion;
/** @type {Array.<IndexedDBAgent.ObjectStore>} */ this.objectStores;
}

/** @constructor */
IndexedDBAgent.ObjectStore = function()
{
/** @type {string} */ this.name;
/** @type {IndexedDBAgent.KeyPath} */ this.keyPath;
/** @type {boolean} */ this.autoIncrement;
/** @type {Array.<IndexedDBAgent.ObjectStoreIndex>} */ this.indexes;
}

/** @constructor */
IndexedDBAgent.ObjectStoreIndex = function()
{
/** @type {string} */ this.name;
/** @type {IndexedDBAgent.KeyPath} */ this.keyPath;
/** @type {boolean} */ this.unique;
/** @type {boolean} */ this.multiEntry;
}

/** @constructor */
IndexedDBAgent.Key = function()
{
/** @type {string} */ this.type;
/** @type {number|undefined} */ this.number;
/** @type {string|undefined} */ this.string;
/** @type {number|undefined} */ this.date;
/** @type {Array.<IndexedDBAgent.Key>|undefined} */ this.array;
}

/** @constructor */
IndexedDBAgent.KeyRange = function()
{
/** @type {IndexedDBAgent.Key|undefined} */ this.lower;
/** @type {IndexedDBAgent.Key|undefined} */ this.upper;
/** @type {boolean} */ this.lowerOpen;
/** @type {boolean} */ this.upperOpen;
}

/** @constructor */
IndexedDBAgent.DataEntry = function()
{
/** @type {RuntimeAgent.RemoteObject} */ this.key;
/** @type {RuntimeAgent.RemoteObject} */ this.primaryKey;
/** @type {RuntimeAgent.RemoteObject} */ this.value;
}

/** @constructor */
IndexedDBAgent.KeyPath = function()
{
/** @type {string} */ this.type;
/** @type {string|undefined} */ this.string;
/** @type {Array.<string>|undefined} */ this.array;
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
IndexedDBAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
IndexedDBAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
IndexedDBAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
IndexedDBAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.FrameId} frameId
 * @param {function(?Protocol.Error, IndexedDBAgent.SecurityOriginWithDatabaseNames):void=} opt_callback
 */
IndexedDBAgent.requestDatabaseNamesForFrame = function(frameId, opt_callback) {}
/** @param {function(?Protocol.Error, IndexedDBAgent.SecurityOriginWithDatabaseNames):void=} opt_callback */
IndexedDBAgent.requestDatabaseNamesForFrame.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.FrameId} frameId
 * @param {string} databaseName
 * @param {function(?Protocol.Error, IndexedDBAgent.DatabaseWithObjectStores):void=} opt_callback
 */
IndexedDBAgent.requestDatabase = function(frameId, databaseName, opt_callback) {}
/** @param {function(?Protocol.Error, IndexedDBAgent.DatabaseWithObjectStores):void=} opt_callback */
IndexedDBAgent.requestDatabase.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.FrameId} frameId
 * @param {string} databaseName
 * @param {string} objectStoreName
 * @param {string} indexName
 * @param {number} skipCount
 * @param {number} pageSize
 * @param {IndexedDBAgent.KeyRange=} opt_keyRange
 * @param {function(?Protocol.Error, Array.<IndexedDBAgent.DataEntry>, boolean):void=} opt_callback
 */
IndexedDBAgent.requestData = function(frameId, databaseName, objectStoreName, indexName, skipCount, pageSize, opt_keyRange, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<IndexedDBAgent.DataEntry>, boolean):void=} opt_callback */
IndexedDBAgent.requestData.invoke = function(obj, opt_callback) {}
/** @interface */
IndexedDBAgent.Dispatcher = function() {};
/**
 * @param {IndexedDBAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerIndexedDBDispatcher = function(dispatcher) {}



var DOMStorageAgent = {};

/** @typedef {string} */
DOMStorageAgent.StorageId;

/** @constructor */
DOMStorageAgent.Entry = function()
{
/** @type {string} */ this.origin;
/** @type {boolean} */ this.isLocalStorage;
/** @type {DOMStorageAgent.StorageId} */ this.id;
}

/** @typedef {Array.<string>} */
DOMStorageAgent.Item;

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMStorageAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMStorageAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMStorageAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMStorageAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMStorageAgent.StorageId} storageId
 * @param {function(?Protocol.Error, Array.<DOMStorageAgent.Item>):void=} opt_callback
 */
DOMStorageAgent.getDOMStorageEntries = function(storageId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<DOMStorageAgent.Item>):void=} opt_callback */
DOMStorageAgent.getDOMStorageEntries.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMStorageAgent.StorageId} storageId
 * @param {string} key
 * @param {string} value
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
DOMStorageAgent.setDOMStorageItem = function(storageId, key, value, opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
DOMStorageAgent.setDOMStorageItem.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMStorageAgent.StorageId} storageId
 * @param {string} key
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
DOMStorageAgent.removeDOMStorageItem = function(storageId, key, opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
DOMStorageAgent.removeDOMStorageItem.invoke = function(obj, opt_callback) {}
/** @interface */
DOMStorageAgent.Dispatcher = function() {};
/**
 * @param {DOMStorageAgent.Entry} storage
 */
DOMStorageAgent.Dispatcher.prototype.addDOMStorage = function(storage) {};
/**
 * @param {DOMStorageAgent.StorageId} storageId
 */
DOMStorageAgent.Dispatcher.prototype.domStorageUpdated = function(storageId) {};
/**
 * @param {DOMStorageAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerDOMStorageDispatcher = function(dispatcher) {}



var ApplicationCacheAgent = {};

/** @constructor */
ApplicationCacheAgent.ApplicationCacheResource = function()
{
/** @type {string} */ this.url;
/** @type {number} */ this.size;
/** @type {string} */ this.type;
}

/** @constructor */
ApplicationCacheAgent.ApplicationCache = function()
{
/** @type {string} */ this.manifestURL;
/** @type {number} */ this.size;
/** @type {number} */ this.creationTime;
/** @type {number} */ this.updateTime;
/** @type {Array.<ApplicationCacheAgent.ApplicationCacheResource>} */ this.resources;
}

/** @constructor */
ApplicationCacheAgent.FrameWithManifest = function()
{
/** @type {NetworkAgent.FrameId} */ this.frameId;
/** @type {string} */ this.manifestURL;
/** @type {number} */ this.status;
}

/**
 * @param {function(?Protocol.Error, Array.<ApplicationCacheAgent.FrameWithManifest>):void=} opt_callback
 */
ApplicationCacheAgent.getFramesWithManifests = function(opt_callback) {}
/** @param {function(?Protocol.Error, Array.<ApplicationCacheAgent.FrameWithManifest>):void=} opt_callback */
ApplicationCacheAgent.getFramesWithManifests.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ApplicationCacheAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ApplicationCacheAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.FrameId} frameId
 * @param {function(?Protocol.Error, string):void=} opt_callback
 */
ApplicationCacheAgent.getManifestForFrame = function(frameId, opt_callback) {}
/** @param {function(?Protocol.Error, string):void=} opt_callback */
ApplicationCacheAgent.getManifestForFrame.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.FrameId} frameId
 * @param {function(?Protocol.Error, ApplicationCacheAgent.ApplicationCache):void=} opt_callback
 */
ApplicationCacheAgent.getApplicationCacheForFrame = function(frameId, opt_callback) {}
/** @param {function(?Protocol.Error, ApplicationCacheAgent.ApplicationCache):void=} opt_callback */
ApplicationCacheAgent.getApplicationCacheForFrame.invoke = function(obj, opt_callback) {}
/** @interface */
ApplicationCacheAgent.Dispatcher = function() {};
/**
 * @param {NetworkAgent.FrameId} frameId
 * @param {string} manifestURL
 * @param {number} status
 */
ApplicationCacheAgent.Dispatcher.prototype.applicationCacheStatusUpdated = function(frameId, manifestURL, status) {};
/**
 * @param {boolean} isNowOnline
 */
ApplicationCacheAgent.Dispatcher.prototype.networkStateUpdated = function(isNowOnline) {};
/**
 * @param {ApplicationCacheAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerApplicationCacheDispatcher = function(dispatcher) {}



var FileSystemAgent = {};

/** @constructor */
FileSystemAgent.Entry = function()
{
/** @type {string} */ this.url;
/** @type {string} */ this.name;
/** @type {boolean} */ this.isDirectory;
/** @type {string|undefined} */ this.mimeType;
/** @type {PageAgent.ResourceType|undefined} */ this.resourceType;
/** @type {boolean|undefined} */ this.isTextFile;
}

/** @constructor */
FileSystemAgent.Metadata = function()
{
/** @type {number} */ this.modificationTime;
/** @type {number} */ this.size;
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
FileSystemAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
FileSystemAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
FileSystemAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
FileSystemAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {string} origin
 * @param {string} type
 * @param {function(?Protocol.Error, number, FileSystemAgent.Entry=):void=} opt_callback
 */
FileSystemAgent.requestFileSystemRoot = function(origin, type, opt_callback) {}
/** @param {function(?Protocol.Error, number, FileSystemAgent.Entry=):void=} opt_callback */
FileSystemAgent.requestFileSystemRoot.invoke = function(obj, opt_callback) {}

/**
 * @param {string} url
 * @param {function(?Protocol.Error, number, Array.<FileSystemAgent.Entry>=):void=} opt_callback
 */
FileSystemAgent.requestDirectoryContent = function(url, opt_callback) {}
/** @param {function(?Protocol.Error, number, Array.<FileSystemAgent.Entry>=):void=} opt_callback */
FileSystemAgent.requestDirectoryContent.invoke = function(obj, opt_callback) {}

/**
 * @param {string} url
 * @param {function(?Protocol.Error, number, FileSystemAgent.Metadata=):void=} opt_callback
 */
FileSystemAgent.requestMetadata = function(url, opt_callback) {}
/** @param {function(?Protocol.Error, number, FileSystemAgent.Metadata=):void=} opt_callback */
FileSystemAgent.requestMetadata.invoke = function(obj, opt_callback) {}

/**
 * @param {string} url
 * @param {boolean} readAsText
 * @param {number=} opt_start
 * @param {number=} opt_end
 * @param {string=} opt_charset
 * @param {function(?Protocol.Error, number, string=, string=):void=} opt_callback
 */
FileSystemAgent.requestFileContent = function(url, readAsText, opt_start, opt_end, opt_charset, opt_callback) {}
/** @param {function(?Protocol.Error, number, string=, string=):void=} opt_callback */
FileSystemAgent.requestFileContent.invoke = function(obj, opt_callback) {}

/**
 * @param {string} url
 * @param {function(?Protocol.Error, number):void=} opt_callback
 */
FileSystemAgent.deleteEntry = function(url, opt_callback) {}
/** @param {function(?Protocol.Error, number):void=} opt_callback */
FileSystemAgent.deleteEntry.invoke = function(obj, opt_callback) {}
/** @interface */
FileSystemAgent.Dispatcher = function() {};
/**
 * @param {FileSystemAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerFileSystemDispatcher = function(dispatcher) {}



var DOMAgent = {};

/** @typedef {number} */
DOMAgent.NodeId;

/** @constructor */
DOMAgent.Node = function()
{
/** @type {DOMAgent.NodeId} */ this.nodeId;
/** @type {number} */ this.nodeType;
/** @type {string} */ this.nodeName;
/** @type {string} */ this.localName;
/** @type {string} */ this.nodeValue;
/** @type {number|undefined} */ this.childNodeCount;
/** @type {Array.<DOMAgent.Node>|undefined} */ this.children;
/** @type {Array.<string>|undefined} */ this.attributes;
/** @type {string|undefined} */ this.documentURL;
/** @type {string|undefined} */ this.baseURL;
/** @type {string|undefined} */ this.publicId;
/** @type {string|undefined} */ this.systemId;
/** @type {string|undefined} */ this.internalSubset;
/** @type {string|undefined} */ this.xmlVersion;
/** @type {string|undefined} */ this.name;
/** @type {string|undefined} */ this.value;
/** @type {NetworkAgent.FrameId|undefined} */ this.frameId;
/** @type {DOMAgent.Node|undefined} */ this.contentDocument;
/** @type {Array.<DOMAgent.Node>|undefined} */ this.shadowRoots;
}

/** @constructor */
DOMAgent.EventListener = function()
{
/** @type {string} */ this.type;
/** @type {boolean} */ this.useCapture;
/** @type {boolean} */ this.isAttribute;
/** @type {DOMAgent.NodeId} */ this.nodeId;
/** @type {string} */ this.handlerBody;
/** @type {DebuggerAgent.Location|undefined} */ this.location;
/** @type {string|undefined} */ this.sourceName;
}

/** @constructor */
DOMAgent.RGBA = function()
{
/** @type {number} */ this.r;
/** @type {number} */ this.g;
/** @type {number} */ this.b;
/** @type {number|undefined} */ this.a;
}

/** @constructor */
DOMAgent.HighlightConfig = function()
{
/** @type {boolean|undefined} */ this.showInfo;
/** @type {DOMAgent.RGBA|undefined} */ this.contentColor;
/** @type {DOMAgent.RGBA|undefined} */ this.paddingColor;
/** @type {DOMAgent.RGBA|undefined} */ this.borderColor;
/** @type {DOMAgent.RGBA|undefined} */ this.marginColor;
}

/**
 * @param {function(?Protocol.Error, DOMAgent.Node):void=} opt_callback
 */
DOMAgent.getDocument = function(opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.Node):void=} opt_callback */
DOMAgent.getDocument.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.requestChildNodes = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.requestChildNodes.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} selector
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.querySelector = function(nodeId, selector, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.querySelector.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} selector
 * @param {function(?Protocol.Error, Array.<DOMAgent.NodeId>):void=} opt_callback
 */
DOMAgent.querySelectorAll = function(nodeId, selector, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<DOMAgent.NodeId>):void=} opt_callback */
DOMAgent.querySelectorAll.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} name
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.setNodeName = function(nodeId, name, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.setNodeName.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} value
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.setNodeValue = function(nodeId, value, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.setNodeValue.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.removeNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.removeNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} name
 * @param {string} value
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.setAttributeValue = function(nodeId, name, value, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.setAttributeValue.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} text
 * @param {string=} opt_name
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.setAttributesAsText = function(nodeId, text, opt_name, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.setAttributesAsText.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} name
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.removeAttribute = function(nodeId, name, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.removeAttribute.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error, Array.<DOMAgent.EventListener>):void=} opt_callback
 */
DOMAgent.getEventListenersForNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<DOMAgent.EventListener>):void=} opt_callback */
DOMAgent.getEventListenersForNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error, string):void=} opt_callback
 */
DOMAgent.getOuterHTML = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error, string):void=} opt_callback */
DOMAgent.getOuterHTML.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} outerHTML
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.setOuterHTML = function(nodeId, outerHTML, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.setOuterHTML.invoke = function(obj, opt_callback) {}

/**
 * @param {string} query
 * @param {function(?Protocol.Error, string, number):void=} opt_callback
 */
DOMAgent.performSearch = function(query, opt_callback) {}
/** @param {function(?Protocol.Error, string, number):void=} opt_callback */
DOMAgent.performSearch.invoke = function(obj, opt_callback) {}

/**
 * @param {string} searchId
 * @param {number} fromIndex
 * @param {number} toIndex
 * @param {function(?Protocol.Error, Array.<DOMAgent.NodeId>):void=} opt_callback
 */
DOMAgent.getSearchResults = function(searchId, fromIndex, toIndex, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<DOMAgent.NodeId>):void=} opt_callback */
DOMAgent.getSearchResults.invoke = function(obj, opt_callback) {}

/**
 * @param {string} searchId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.discardSearchResults = function(searchId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.discardSearchResults.invoke = function(obj, opt_callback) {}

/**
 * @param {RuntimeAgent.RemoteObjectId} objectId
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.requestNode = function(objectId, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.requestNode.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} enabled
 * @param {DOMAgent.HighlightConfig=} opt_highlightConfig
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.setInspectModeEnabled = function(enabled, opt_highlightConfig, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.setInspectModeEnabled.invoke = function(obj, opt_callback) {}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {DOMAgent.RGBA=} opt_color
 * @param {DOMAgent.RGBA=} opt_outlineColor
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.highlightRect = function(x, y, width, height, opt_color, opt_outlineColor, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.highlightRect.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.HighlightConfig} highlightConfig
 * @param {DOMAgent.NodeId=} opt_nodeId
 * @param {RuntimeAgent.RemoteObjectId=} opt_objectId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.highlightNode = function(highlightConfig, opt_nodeId, opt_objectId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.highlightNode.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.hideHighlight = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.hideHighlight.invoke = function(obj, opt_callback) {}

/**
 * @param {NetworkAgent.FrameId} frameId
 * @param {DOMAgent.RGBA=} opt_contentColor
 * @param {DOMAgent.RGBA=} opt_contentOutlineColor
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.highlightFrame = function(frameId, opt_contentColor, opt_contentOutlineColor, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.highlightFrame.invoke = function(obj, opt_callback) {}

/**
 * @param {string} path
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.pushNodeByPathToFrontend = function(path, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.pushNodeByPathToFrontend.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string=} opt_objectGroup
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject):void=} opt_callback
 */
DOMAgent.resolveNode = function(nodeId, opt_objectGroup, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject):void=} opt_callback */
DOMAgent.resolveNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error, Array.<string>):void=} opt_callback
 */
DOMAgent.getAttributes = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<string>):void=} opt_callback */
DOMAgent.getAttributes.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {DOMAgent.NodeId} targetNodeId
 * @param {DOMAgent.NodeId=} opt_insertBeforeNodeId
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
DOMAgent.moveTo = function(nodeId, targetNodeId, opt_insertBeforeNodeId, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
DOMAgent.moveTo.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.undo = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.undo.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.redo = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.redo.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.markUndoableState = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.markUndoableState.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMAgent.focus = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMAgent.focus.invoke = function(obj, opt_callback) {}
/** @interface */
DOMAgent.Dispatcher = function() {};
DOMAgent.Dispatcher.prototype.documentUpdated = function() {};
/**
 * @param {DOMAgent.NodeId} parentId
 * @param {Array.<DOMAgent.Node>} nodes
 */
DOMAgent.Dispatcher.prototype.setChildNodes = function(parentId, nodes) {};
/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} name
 * @param {string} value
 */
DOMAgent.Dispatcher.prototype.attributeModified = function(nodeId, name, value) {};
/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} name
 */
DOMAgent.Dispatcher.prototype.attributeRemoved = function(nodeId, name) {};
/**
 * @param {Array.<DOMAgent.NodeId>} nodeIds
 */
DOMAgent.Dispatcher.prototype.inlineStyleInvalidated = function(nodeIds) {};
/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {string} characterData
 */
DOMAgent.Dispatcher.prototype.characterDataModified = function(nodeId, characterData) {};
/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {number} childNodeCount
 */
DOMAgent.Dispatcher.prototype.childNodeCountUpdated = function(nodeId, childNodeCount) {};
/**
 * @param {DOMAgent.NodeId} parentNodeId
 * @param {DOMAgent.NodeId} previousNodeId
 * @param {DOMAgent.Node} node
 */
DOMAgent.Dispatcher.prototype.childNodeInserted = function(parentNodeId, previousNodeId, node) {};
/**
 * @param {DOMAgent.NodeId} parentNodeId
 * @param {DOMAgent.NodeId} nodeId
 */
DOMAgent.Dispatcher.prototype.childNodeRemoved = function(parentNodeId, nodeId) {};
/**
 * @param {DOMAgent.NodeId} hostId
 * @param {DOMAgent.Node} root
 */
DOMAgent.Dispatcher.prototype.shadowRootPushed = function(hostId, root) {};
/**
 * @param {DOMAgent.NodeId} hostId
 * @param {DOMAgent.NodeId} rootId
 */
DOMAgent.Dispatcher.prototype.shadowRootPopped = function(hostId, rootId) {};
/**
 * @param {DOMAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerDOMDispatcher = function(dispatcher) {}



var CSSAgent = {};

/** @typedef {string} */
CSSAgent.StyleSheetId;

/** @constructor */
CSSAgent.CSSStyleId = function()
{
/** @type {CSSAgent.StyleSheetId} */ this.styleSheetId;
/** @type {number} */ this.ordinal;
}

/** @typedef {string} */
CSSAgent.StyleSheetOrigin;

/** @constructor */
CSSAgent.CSSRuleId = function()
{
/** @type {CSSAgent.StyleSheetId} */ this.styleSheetId;
/** @type {number} */ this.ordinal;
}

/** @constructor */
CSSAgent.PseudoIdMatches = function()
{
/** @type {number} */ this.pseudoId;
/** @type {Array.<CSSAgent.RuleMatch>} */ this.matches;
}

/** @constructor */
CSSAgent.InheritedStyleEntry = function()
{
/** @type {CSSAgent.CSSStyle|undefined} */ this.inlineStyle;
/** @type {Array.<CSSAgent.RuleMatch>} */ this.matchedCSSRules;
}

/** @constructor */
CSSAgent.RuleMatch = function()
{
/** @type {CSSAgent.CSSRule} */ this.rule;
/** @type {Array.<number>} */ this.matchingSelectors;
}

/** @constructor */
CSSAgent.SelectorList = function()
{
/** @type {Array.<string>} */ this.selectors;
/** @type {string} */ this.text;
/** @type {CSSAgent.SourceRange|undefined} */ this.range;
}

/** @constructor */
CSSAgent.CSSStyleAttribute = function()
{
/** @type {string} */ this.name;
/** @type {CSSAgent.CSSStyle} */ this.style;
}

/** @constructor */
CSSAgent.CSSStyleSheetHeader = function()
{
/** @type {CSSAgent.StyleSheetId} */ this.styleSheetId;
/** @type {NetworkAgent.FrameId} */ this.frameId;
/** @type {string} */ this.sourceURL;
/** @type {CSSAgent.StyleSheetOrigin} */ this.origin;
/** @type {string} */ this.title;
/** @type {boolean} */ this.disabled;
}

/** @constructor */
CSSAgent.CSSStyleSheetBody = function()
{
/** @type {CSSAgent.StyleSheetId} */ this.styleSheetId;
/** @type {Array.<CSSAgent.CSSRule>} */ this.rules;
/** @type {string|undefined} */ this.text;
}

/** @constructor */
CSSAgent.CSSRule = function()
{
/** @type {CSSAgent.CSSRuleId|undefined} */ this.ruleId;
/** @type {CSSAgent.SelectorList} */ this.selectorList;
/** @type {string|undefined} */ this.sourceURL;
/** @type {number} */ this.sourceLine;
/** @type {CSSAgent.StyleSheetOrigin} */ this.origin;
/** @type {CSSAgent.CSSStyle} */ this.style;
/** @type {Array.<CSSAgent.CSSMedia>|undefined} */ this.media;
}

/** @constructor */
CSSAgent.SourceRange = function()
{
/** @type {number} */ this.start;
/** @type {number} */ this.end;
}

/** @constructor */
CSSAgent.ShorthandEntry = function()
{
/** @type {string} */ this.name;
/** @type {string} */ this.value;
}

/** @constructor */
CSSAgent.CSSPropertyInfo = function()
{
/** @type {string} */ this.name;
/** @type {Array.<string>|undefined} */ this.longhands;
}

/** @constructor */
CSSAgent.CSSComputedStyleProperty = function()
{
/** @type {string} */ this.name;
/** @type {string} */ this.value;
}

/** @constructor */
CSSAgent.CSSStyle = function()
{
/** @type {CSSAgent.CSSStyleId|undefined} */ this.styleId;
/** @type {Array.<CSSAgent.CSSProperty>} */ this.cssProperties;
/** @type {Array.<CSSAgent.ShorthandEntry>} */ this.shorthandEntries;
/** @type {string|undefined} */ this.cssText;
/** @type {CSSAgent.SourceRange|undefined} */ this.range;
/** @type {string|undefined} */ this.width;
/** @type {string|undefined} */ this.height;
}

/** @constructor */
CSSAgent.CSSProperty = function()
{
/** @type {string} */ this.name;
/** @type {string} */ this.value;
/** @type {string|undefined} */ this.priority;
/** @type {boolean|undefined} */ this.implicit;
/** @type {string|undefined} */ this.text;
/** @type {boolean|undefined} */ this.parsedOk;
/** @type {string|undefined} */ this.status;
/** @type {CSSAgent.SourceRange|undefined} */ this.range;
}

/** @constructor */
CSSAgent.CSSMedia = function()
{
/** @type {string} */ this.text;
/** @type {string} */ this.source;
/** @type {string|undefined} */ this.sourceURL;
/** @type {number|undefined} */ this.sourceLine;
}

/** @constructor */
CSSAgent.SelectorProfileEntry = function()
{
/** @type {string} */ this.selector;
/** @type {string} */ this.url;
/** @type {number} */ this.lineNumber;
/** @type {number} */ this.time;
/** @type {number} */ this.hitCount;
/** @type {number} */ this.matchCount;
}

/** @constructor */
CSSAgent.SelectorProfile = function()
{
/** @type {number} */ this.totalTime;
/** @type {Array.<CSSAgent.SelectorProfileEntry>} */ this.data;
}

/** @constructor */
CSSAgent.Region = function()
{
/** @type {string} */ this.regionOverset;
/** @type {DOMAgent.NodeId} */ this.nodeId;
}

/** @constructor */
CSSAgent.NamedFlow = function()
{
/** @type {DOMAgent.NodeId} */ this.documentNodeId;
/** @type {string} */ this.name;
/** @type {boolean} */ this.overset;
/** @type {Array.<DOMAgent.NodeId>} */ this.content;
/** @type {Array.<CSSAgent.Region>} */ this.regions;
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
CSSAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
CSSAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
CSSAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
CSSAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {boolean=} opt_includePseudo
 * @param {boolean=} opt_includeInherited
 * @param {function(?Protocol.Error, Array.<CSSAgent.RuleMatch>=, Array.<CSSAgent.PseudoIdMatches>=, Array.<CSSAgent.InheritedStyleEntry>=):void=} opt_callback
 */
CSSAgent.getMatchedStylesForNode = function(nodeId, opt_includePseudo, opt_includeInherited, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<CSSAgent.RuleMatch>=, Array.<CSSAgent.PseudoIdMatches>=, Array.<CSSAgent.InheritedStyleEntry>=):void=} opt_callback */
CSSAgent.getMatchedStylesForNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error, CSSAgent.CSSStyle=, CSSAgent.CSSStyle=):void=} opt_callback
 */
CSSAgent.getInlineStylesForNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSStyle=, CSSAgent.CSSStyle=):void=} opt_callback */
CSSAgent.getInlineStylesForNode.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {function(?Protocol.Error, Array.<CSSAgent.CSSComputedStyleProperty>):void=} opt_callback
 */
CSSAgent.getComputedStyleForNode = function(nodeId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<CSSAgent.CSSComputedStyleProperty>):void=} opt_callback */
CSSAgent.getComputedStyleForNode.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, Array.<CSSAgent.CSSStyleSheetHeader>):void=} opt_callback
 */
CSSAgent.getAllStyleSheets = function(opt_callback) {}
/** @param {function(?Protocol.Error, Array.<CSSAgent.CSSStyleSheetHeader>):void=} opt_callback */
CSSAgent.getAllStyleSheets.invoke = function(obj, opt_callback) {}

/**
 * @param {CSSAgent.StyleSheetId} styleSheetId
 * @param {function(?Protocol.Error, CSSAgent.CSSStyleSheetBody):void=} opt_callback
 */
CSSAgent.getStyleSheet = function(styleSheetId, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSStyleSheetBody):void=} opt_callback */
CSSAgent.getStyleSheet.invoke = function(obj, opt_callback) {}

/**
 * @param {CSSAgent.StyleSheetId} styleSheetId
 * @param {function(?Protocol.Error, string):void=} opt_callback
 */
CSSAgent.getStyleSheetText = function(styleSheetId, opt_callback) {}
/** @param {function(?Protocol.Error, string):void=} opt_callback */
CSSAgent.getStyleSheetText.invoke = function(obj, opt_callback) {}

/**
 * @param {CSSAgent.StyleSheetId} styleSheetId
 * @param {string} text
 * @param {function(?Protocol.Error):void=} opt_callback
 */
CSSAgent.setStyleSheetText = function(styleSheetId, text, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
CSSAgent.setStyleSheetText.invoke = function(obj, opt_callback) {}

/**
 * @param {CSSAgent.CSSStyleId} styleId
 * @param {number} propertyIndex
 * @param {string} text
 * @param {boolean} overwrite
 * @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback
 */
CSSAgent.setPropertyText = function(styleId, propertyIndex, text, overwrite, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback */
CSSAgent.setPropertyText.invoke = function(obj, opt_callback) {}

/**
 * @param {CSSAgent.CSSStyleId} styleId
 * @param {number} propertyIndex
 * @param {boolean} disable
 * @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback
 */
CSSAgent.toggleProperty = function(styleId, propertyIndex, disable, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSStyle):void=} opt_callback */
CSSAgent.toggleProperty.invoke = function(obj, opt_callback) {}

/**
 * @param {CSSAgent.CSSRuleId} ruleId
 * @param {string} selector
 * @param {function(?Protocol.Error, CSSAgent.CSSRule):void=} opt_callback
 */
CSSAgent.setRuleSelector = function(ruleId, selector, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSRule):void=} opt_callback */
CSSAgent.setRuleSelector.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} contextNodeId
 * @param {string} selector
 * @param {function(?Protocol.Error, CSSAgent.CSSRule):void=} opt_callback
 */
CSSAgent.addRule = function(contextNodeId, selector, opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.CSSRule):void=} opt_callback */
CSSAgent.addRule.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, Array.<CSSAgent.CSSPropertyInfo>):void=} opt_callback
 */
CSSAgent.getSupportedCSSProperties = function(opt_callback) {}
/** @param {function(?Protocol.Error, Array.<CSSAgent.CSSPropertyInfo>):void=} opt_callback */
CSSAgent.getSupportedCSSProperties.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {Array.<string>} forcedPseudoClasses
 * @param {function(?Protocol.Error):void=} opt_callback
 */
CSSAgent.forcePseudoState = function(nodeId, forcedPseudoClasses, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
CSSAgent.forcePseudoState.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
CSSAgent.startSelectorProfiler = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
CSSAgent.startSelectorProfiler.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, CSSAgent.SelectorProfile):void=} opt_callback
 */
CSSAgent.stopSelectorProfiler = function(opt_callback) {}
/** @param {function(?Protocol.Error, CSSAgent.SelectorProfile):void=} opt_callback */
CSSAgent.stopSelectorProfiler.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} documentNodeId
 * @param {function(?Protocol.Error, Array.<CSSAgent.NamedFlow>):void=} opt_callback
 */
CSSAgent.getNamedFlowCollection = function(documentNodeId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<CSSAgent.NamedFlow>):void=} opt_callback */
CSSAgent.getNamedFlowCollection.invoke = function(obj, opt_callback) {}
/** @interface */
CSSAgent.Dispatcher = function() {};
CSSAgent.Dispatcher.prototype.mediaQueryResultChanged = function() {};
/**
 * @param {CSSAgent.StyleSheetId} styleSheetId
 */
CSSAgent.Dispatcher.prototype.styleSheetChanged = function(styleSheetId) {};
/**
 * @param {CSSAgent.NamedFlow} namedFlow
 */
CSSAgent.Dispatcher.prototype.namedFlowCreated = function(namedFlow) {};
/**
 * @param {DOMAgent.NodeId} documentNodeId
 * @param {string} flowName
 */
CSSAgent.Dispatcher.prototype.namedFlowRemoved = function(documentNodeId, flowName) {};
/**
 * @param {CSSAgent.NamedFlow} namedFlow
 */
CSSAgent.Dispatcher.prototype.regionLayoutUpdated = function(namedFlow) {};
/**
 * @param {CSSAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerCSSDispatcher = function(dispatcher) {}



var TimelineAgent = {};

/** @constructor */
TimelineAgent.TimelineEvent = function()
{
/** @type {string} */ this.type;
/** @type {Object} */ this.data;
/** @type {Array.<TimelineAgent.TimelineEvent>|undefined} */ this.children;
}

/**
 * @param {number=} opt_maxCallStackDepth
 * @param {function(?Protocol.Error):void=} opt_callback
 */
TimelineAgent.start = function(opt_maxCallStackDepth, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
TimelineAgent.start.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
TimelineAgent.stop = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
TimelineAgent.stop.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} enabled
 * @param {function(?Protocol.Error):void=} opt_callback
 */
TimelineAgent.setIncludeMemoryDetails = function(enabled, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
TimelineAgent.setIncludeMemoryDetails.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
TimelineAgent.supportsFrameInstrumentation = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
TimelineAgent.supportsFrameInstrumentation.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
TimelineAgent.canMonitorMainThread = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
TimelineAgent.canMonitorMainThread.invoke = function(obj, opt_callback) {}
/** @interface */
TimelineAgent.Dispatcher = function() {};
/**
 * @param {TimelineAgent.TimelineEvent} record
 */
TimelineAgent.Dispatcher.prototype.eventRecorded = function(record) {};
/**
 * @param {TimelineAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerTimelineDispatcher = function(dispatcher) {}



var DebuggerAgent = {};

/** @typedef {string} */
DebuggerAgent.BreakpointId;

/** @typedef {string} */
DebuggerAgent.ScriptId;

/** @typedef {string} */
DebuggerAgent.CallFrameId;

/** @constructor */
DebuggerAgent.Location = function()
{
/** @type {DebuggerAgent.ScriptId} */ this.scriptId;
/** @type {number} */ this.lineNumber;
/** @type {number|undefined} */ this.columnNumber;
}

/** @constructor */
DebuggerAgent.FunctionDetails = function()
{
/** @type {DebuggerAgent.Location} */ this.location;
/** @type {string|undefined} */ this.name;
/** @type {string|undefined} */ this.displayName;
/** @type {string|undefined} */ this.inferredName;
/** @type {Array.<DebuggerAgent.Scope>|undefined} */ this.scopeChain;
}

/** @constructor */
DebuggerAgent.CallFrame = function()
{
/** @type {DebuggerAgent.CallFrameId} */ this.callFrameId;
/** @type {string} */ this.functionName;
/** @type {DebuggerAgent.Location} */ this.location;
/** @type {Array.<DebuggerAgent.Scope>} */ this.scopeChain;
/** @type {RuntimeAgent.RemoteObject} */ this.this;
}

/** @constructor */
DebuggerAgent.Scope = function()
{
/** @type {string} */ this.type;
/** @type {RuntimeAgent.RemoteObject} */ this.object;
}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
DebuggerAgent.causesRecompilation = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
DebuggerAgent.causesRecompilation.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
DebuggerAgent.supportsSeparateScriptCompilationAndExecution = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
DebuggerAgent.supportsSeparateScriptCompilationAndExecution.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} active
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.setBreakpointsActive = function(active, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.setBreakpointsActive.invoke = function(obj, opt_callback) {}

/**
 * @param {number} lineNumber
 * @param {string=} opt_url
 * @param {string=} opt_urlRegex
 * @param {number=} opt_columnNumber
 * @param {string=} opt_condition
 * @param {function(?Protocol.Error, DebuggerAgent.BreakpointId, Array.<DebuggerAgent.Location>):void=} opt_callback
 */
DebuggerAgent.setBreakpointByUrl = function(lineNumber, opt_url, opt_urlRegex, opt_columnNumber, opt_condition, opt_callback) {}
/** @param {function(?Protocol.Error, DebuggerAgent.BreakpointId, Array.<DebuggerAgent.Location>):void=} opt_callback */
DebuggerAgent.setBreakpointByUrl.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.Location} location
 * @param {string=} opt_condition
 * @param {function(?Protocol.Error, DebuggerAgent.BreakpointId, DebuggerAgent.Location):void=} opt_callback
 */
DebuggerAgent.setBreakpoint = function(location, opt_condition, opt_callback) {}
/** @param {function(?Protocol.Error, DebuggerAgent.BreakpointId, DebuggerAgent.Location):void=} opt_callback */
DebuggerAgent.setBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.BreakpointId} breakpointId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.removeBreakpoint = function(breakpointId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.removeBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.Location} location
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.continueToLocation = function(location, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.continueToLocation.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.stepOver = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.stepOver.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.stepInto = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.stepInto.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.stepOut = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.stepOut.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.pause = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.pause.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.resume = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.resume.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.ScriptId} scriptId
 * @param {string} query
 * @param {boolean=} opt_caseSensitive
 * @param {boolean=} opt_isRegex
 * @param {function(?Protocol.Error, Array.<PageAgent.SearchMatch>):void=} opt_callback
 */
DebuggerAgent.searchInContent = function(scriptId, query, opt_caseSensitive, opt_isRegex, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<PageAgent.SearchMatch>):void=} opt_callback */
DebuggerAgent.searchInContent.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
DebuggerAgent.canSetScriptSource = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
DebuggerAgent.canSetScriptSource.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.ScriptId} scriptId
 * @param {string} scriptSource
 * @param {boolean=} opt_preview
 * @param {function(?Protocol.Error, Array.<DebuggerAgent.CallFrame>=, Object=):void=} opt_callback
 */
DebuggerAgent.setScriptSource = function(scriptId, scriptSource, opt_preview, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<DebuggerAgent.CallFrame>=, Object=):void=} opt_callback */
DebuggerAgent.setScriptSource.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.CallFrameId} callFrameId
 * @param {function(?Protocol.Error, Array.<DebuggerAgent.CallFrame>, Object):void=} opt_callback
 */
DebuggerAgent.restartFrame = function(callFrameId, opt_callback) {}
/** @param {function(?Protocol.Error, Array.<DebuggerAgent.CallFrame>, Object):void=} opt_callback */
DebuggerAgent.restartFrame.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.ScriptId} scriptId
 * @param {function(?Protocol.Error, string):void=} opt_callback
 */
DebuggerAgent.getScriptSource = function(scriptId, opt_callback) {}
/** @param {function(?Protocol.Error, string):void=} opt_callback */
DebuggerAgent.getScriptSource.invoke = function(obj, opt_callback) {}

/**
 * @param {RuntimeAgent.RemoteObjectId} functionId
 * @param {function(?Protocol.Error, DebuggerAgent.FunctionDetails):void=} opt_callback
 */
DebuggerAgent.getFunctionDetails = function(functionId, opt_callback) {}
/** @param {function(?Protocol.Error, DebuggerAgent.FunctionDetails):void=} opt_callback */
DebuggerAgent.getFunctionDetails.invoke = function(obj, opt_callback) {}

/**
 * @param {string} state
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.setPauseOnExceptions = function(state, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.setPauseOnExceptions.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.CallFrameId} callFrameId
 * @param {string} expression
 * @param {string=} opt_objectGroup
 * @param {boolean=} opt_includeCommandLineAPI
 * @param {boolean=} opt_doNotPauseOnExceptionsAndMuteConsole
 * @param {boolean=} opt_returnByValue
 * @param {boolean=} opt_generatePreview
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback
 */
DebuggerAgent.evaluateOnCallFrame = function(callFrameId, expression, opt_objectGroup, opt_includeCommandLineAPI, opt_doNotPauseOnExceptionsAndMuteConsole, opt_returnByValue, opt_generatePreview, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback */
DebuggerAgent.evaluateOnCallFrame.invoke = function(obj, opt_callback) {}

/**
 * @param {string} expression
 * @param {string} sourceURL
 * @param {function(?Protocol.Error, DebuggerAgent.ScriptId=, string=):void=} opt_callback
 */
DebuggerAgent.compileScript = function(expression, sourceURL, opt_callback) {}
/** @param {function(?Protocol.Error, DebuggerAgent.ScriptId=, string=):void=} opt_callback */
DebuggerAgent.compileScript.invoke = function(obj, opt_callback) {}

/**
 * @param {DebuggerAgent.ScriptId} scriptId
 * @param {RuntimeAgent.ExecutionContextId=} opt_contextId
 * @param {string=} opt_objectGroup
 * @param {boolean=} opt_doNotPauseOnExceptionsAndMuteConsole
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback
 */
DebuggerAgent.runScript = function(scriptId, opt_contextId, opt_objectGroup, opt_doNotPauseOnExceptionsAndMuteConsole, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject, boolean=):void=} opt_callback */
DebuggerAgent.runScript.invoke = function(obj, opt_callback) {}

/**
 * @param {string=} opt_message
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DebuggerAgent.setOverlayMessage = function(opt_message, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DebuggerAgent.setOverlayMessage.invoke = function(obj, opt_callback) {}
/** @interface */
DebuggerAgent.Dispatcher = function() {};
DebuggerAgent.Dispatcher.prototype.globalObjectCleared = function() {};
/**
 * @param {DebuggerAgent.ScriptId} scriptId
 * @param {string} url
 * @param {number} startLine
 * @param {number} startColumn
 * @param {number} endLine
 * @param {number} endColumn
 * @param {boolean=} opt_isContentScript
 * @param {string=} opt_sourceMapURL
 * @param {boolean=} opt_hasSourceURL
 */
DebuggerAgent.Dispatcher.prototype.scriptParsed = function(scriptId, url, startLine, startColumn, endLine, endColumn, opt_isContentScript, opt_sourceMapURL, opt_hasSourceURL) {};
/**
 * @param {string} url
 * @param {string} scriptSource
 * @param {number} startLine
 * @param {number} errorLine
 * @param {string} errorMessage
 */
DebuggerAgent.Dispatcher.prototype.scriptFailedToParse = function(url, scriptSource, startLine, errorLine, errorMessage) {};
/**
 * @param {DebuggerAgent.BreakpointId} breakpointId
 * @param {DebuggerAgent.Location} location
 */
DebuggerAgent.Dispatcher.prototype.breakpointResolved = function(breakpointId, location) {};
/**
 * @param {Array.<DebuggerAgent.CallFrame>} callFrames
 * @param {string} reason
 * @param {Object=} opt_data
 */
DebuggerAgent.Dispatcher.prototype.paused = function(callFrames, reason, opt_data) {};
DebuggerAgent.Dispatcher.prototype.resumed = function() {};
/**
 * @param {DebuggerAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerDebuggerDispatcher = function(dispatcher) {}



var DOMDebuggerAgent = {};

/** @typedef {string} */
DOMDebuggerAgent.DOMBreakpointType;

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {DOMDebuggerAgent.DOMBreakpointType} type
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.setDOMBreakpoint = function(nodeId, type, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.setDOMBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {DOMAgent.NodeId} nodeId
 * @param {DOMDebuggerAgent.DOMBreakpointType} type
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.removeDOMBreakpoint = function(nodeId, type, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.removeDOMBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {string} eventName
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.setEventListenerBreakpoint = function(eventName, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.setEventListenerBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {string} eventName
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.removeEventListenerBreakpoint = function(eventName, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.removeEventListenerBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {string} eventName
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.setInstrumentationBreakpoint = function(eventName, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.setInstrumentationBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {string} eventName
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.removeInstrumentationBreakpoint = function(eventName, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.removeInstrumentationBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {string} url
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.setXHRBreakpoint = function(url, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.setXHRBreakpoint.invoke = function(obj, opt_callback) {}

/**
 * @param {string} url
 * @param {function(?Protocol.Error):void=} opt_callback
 */
DOMDebuggerAgent.removeXHRBreakpoint = function(url, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
DOMDebuggerAgent.removeXHRBreakpoint.invoke = function(obj, opt_callback) {}
/** @interface */
DOMDebuggerAgent.Dispatcher = function() {};
/**
 * @param {DOMDebuggerAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerDOMDebuggerDispatcher = function(dispatcher) {}



var ProfilerAgent = {};

/** @constructor */
ProfilerAgent.ProfileHeader = function()
{
/** @type {string} */ this.typeId;
/** @type {string} */ this.title;
/** @type {number} */ this.uid;
/** @type {number|undefined} */ this.maxJSObjectId;
}

/** @constructor */
ProfilerAgent.Profile = function()
{
/** @type {Object|undefined} */ this.head;
/** @type {Object|undefined} */ this.bottomUpHead;
/** @type {number|undefined} */ this.idleTime;
}

/** @typedef {string} */
ProfilerAgent.HeapSnapshotObjectId;

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
ProfilerAgent.causesRecompilation = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
ProfilerAgent.causesRecompilation.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
ProfilerAgent.isSampling = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
ProfilerAgent.isSampling.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, boolean):void=} opt_callback
 */
ProfilerAgent.hasHeapProfiler = function(opt_callback) {}
/** @param {function(?Protocol.Error, boolean):void=} opt_callback */
ProfilerAgent.hasHeapProfiler.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.start = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.start.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.stop = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.stop.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, Array.<ProfilerAgent.ProfileHeader>):void=} opt_callback
 */
ProfilerAgent.getProfileHeaders = function(opt_callback) {}
/** @param {function(?Protocol.Error, Array.<ProfilerAgent.ProfileHeader>):void=} opt_callback */
ProfilerAgent.getProfileHeaders.invoke = function(obj, opt_callback) {}

/**
 * @param {string} type
 * @param {number} uid
 * @param {function(?Protocol.Error, ProfilerAgent.Profile):void=} opt_callback
 */
ProfilerAgent.getProfile = function(type, uid, opt_callback) {}
/** @param {function(?Protocol.Error, ProfilerAgent.Profile):void=} opt_callback */
ProfilerAgent.getProfile.invoke = function(obj, opt_callback) {}

/**
 * @param {string} type
 * @param {number} uid
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.removeProfile = function(type, uid, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.removeProfile.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.clearProfiles = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.clearProfiles.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.takeHeapSnapshot = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.takeHeapSnapshot.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
ProfilerAgent.collectGarbage = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
ProfilerAgent.collectGarbage.invoke = function(obj, opt_callback) {}

/**
 * @param {ProfilerAgent.HeapSnapshotObjectId} objectId
 * @param {string=} opt_objectGroup
 * @param {function(?Protocol.Error, RuntimeAgent.RemoteObject):void=} opt_callback
 */
ProfilerAgent.getObjectByHeapObjectId = function(objectId, opt_objectGroup, opt_callback) {}
/** @param {function(?Protocol.Error, RuntimeAgent.RemoteObject):void=} opt_callback */
ProfilerAgent.getObjectByHeapObjectId.invoke = function(obj, opt_callback) {}

/**
 * @param {RuntimeAgent.RemoteObjectId} objectId
 * @param {function(?Protocol.Error, ProfilerAgent.HeapSnapshotObjectId):void=} opt_callback
 */
ProfilerAgent.getHeapObjectId = function(objectId, opt_callback) {}
/** @param {function(?Protocol.Error, ProfilerAgent.HeapSnapshotObjectId):void=} opt_callback */
ProfilerAgent.getHeapObjectId.invoke = function(obj, opt_callback) {}
/** @interface */
ProfilerAgent.Dispatcher = function() {};
/**
 * @param {ProfilerAgent.ProfileHeader} header
 */
ProfilerAgent.Dispatcher.prototype.addProfileHeader = function(header) {};
/**
 * @param {number} uid
 * @param {string} chunk
 */
ProfilerAgent.Dispatcher.prototype.addHeapSnapshotChunk = function(uid, chunk) {};
/**
 * @param {number} uid
 */
ProfilerAgent.Dispatcher.prototype.finishHeapSnapshot = function(uid) {};
/**
 * @param {boolean} isProfiling
 */
ProfilerAgent.Dispatcher.prototype.setRecordingProfile = function(isProfiling) {};
ProfilerAgent.Dispatcher.prototype.resetProfiles = function() {};
/**
 * @param {number} done
 * @param {number} total
 */
ProfilerAgent.Dispatcher.prototype.reportHeapSnapshotProgress = function(done, total) {};
/**
 * @param {ProfilerAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerProfilerDispatcher = function(dispatcher) {}



var WorkerAgent = {};

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {number} workerId
 * @param {Object} message
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.sendMessageToWorker = function(workerId, message, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.sendMessageToWorker.invoke = function(obj, opt_callback) {}

/**
 * @param {number} workerId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.connectToWorker = function(workerId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.connectToWorker.invoke = function(obj, opt_callback) {}

/**
 * @param {number} workerId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.disconnectFromWorker = function(workerId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.disconnectFromWorker.invoke = function(obj, opt_callback) {}

/**
 * @param {boolean} value
 * @param {function(?Protocol.Error):void=} opt_callback
 */
WorkerAgent.setAutoconnectToWorkers = function(value, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
WorkerAgent.setAutoconnectToWorkers.invoke = function(obj, opt_callback) {}
/** @interface */
WorkerAgent.Dispatcher = function() {};
/**
 * @param {number} workerId
 * @param {string} url
 * @param {boolean} inspectorConnected
 */
WorkerAgent.Dispatcher.prototype.workerCreated = function(workerId, url, inspectorConnected) {};
/**
 * @param {number} workerId
 */
WorkerAgent.Dispatcher.prototype.workerTerminated = function(workerId) {};
/**
 * @param {number} workerId
 * @param {Object} message
 */
WorkerAgent.Dispatcher.prototype.dispatchMessageFromWorker = function(workerId, message) {};
WorkerAgent.Dispatcher.prototype.disconnectedFromWorker = function() {};
/**
 * @param {WorkerAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerWorkerDispatcher = function(dispatcher) {}



var CanvasAgent = {};

/** @typedef {string} */
CanvasAgent.TraceLogId;

/** @constructor */
CanvasAgent.Call = function()
{
/** @type {string|undefined} */ this.functionName;
/** @type {Array.<string>|undefined} */ this.arguments;
/** @type {string|undefined} */ this.property;
/** @type {string|undefined} */ this.value;
/** @type {string|undefined} */ this.result;
/** @type {string|undefined} */ this.sourceURL;
/** @type {number|undefined} */ this.lineNumber;
/** @type {number|undefined} */ this.columnNumber;
}

/** @constructor */
CanvasAgent.TraceLog = function()
{
/** @type {CanvasAgent.TraceLogId} */ this.id;
/** @type {Array.<CanvasAgent.Call>} */ this.calls;
/** @type {number|undefined} */ this.startOffset;
/** @type {boolean|undefined} */ this.alive;
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
CanvasAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
CanvasAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
CanvasAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
CanvasAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {CanvasAgent.TraceLogId} traceLogId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
CanvasAgent.dropTraceLog = function(traceLogId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
CanvasAgent.dropTraceLog.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, CanvasAgent.TraceLogId):void=} opt_callback
 */
CanvasAgent.captureFrame = function(opt_callback) {}
/** @param {function(?Protocol.Error, CanvasAgent.TraceLogId):void=} opt_callback */
CanvasAgent.captureFrame.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, CanvasAgent.TraceLogId):void=} opt_callback
 */
CanvasAgent.startCapturing = function(opt_callback) {}
/** @param {function(?Protocol.Error, CanvasAgent.TraceLogId):void=} opt_callback */
CanvasAgent.startCapturing.invoke = function(obj, opt_callback) {}

/**
 * @param {CanvasAgent.TraceLogId} traceLogId
 * @param {function(?Protocol.Error):void=} opt_callback
 */
CanvasAgent.stopCapturing = function(traceLogId, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
CanvasAgent.stopCapturing.invoke = function(obj, opt_callback) {}

/**
 * @param {CanvasAgent.TraceLogId} traceLogId
 * @param {number=} opt_startOffset
 * @param {function(?Protocol.Error, CanvasAgent.TraceLog):void=} opt_callback
 */
CanvasAgent.getTraceLog = function(traceLogId, opt_startOffset, opt_callback) {}
/** @param {function(?Protocol.Error, CanvasAgent.TraceLog):void=} opt_callback */
CanvasAgent.getTraceLog.invoke = function(obj, opt_callback) {}

/**
 * @param {CanvasAgent.TraceLogId} traceLogId
 * @param {number} stepNo
 * @param {function(?Protocol.Error, string):void=} opt_callback
 */
CanvasAgent.replayTraceLog = function(traceLogId, stepNo, opt_callback) {}
/** @param {function(?Protocol.Error, string):void=} opt_callback */
CanvasAgent.replayTraceLog.invoke = function(obj, opt_callback) {}
/** @interface */
CanvasAgent.Dispatcher = function() {};
/**
 * @param {CanvasAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerCanvasDispatcher = function(dispatcher) {}



var InputAgent = {};

/**
 * @param {string} type
 * @param {number=} opt_modifiers
 * @param {number=} opt_timestamp
 * @param {string=} opt_text
 * @param {string=} opt_unmodifiedText
 * @param {string=} opt_keyIdentifier
 * @param {number=} opt_windowsVirtualKeyCode
 * @param {number=} opt_nativeVirtualKeyCode
 * @param {number=} opt_macCharCode
 * @param {boolean=} opt_autoRepeat
 * @param {boolean=} opt_isKeypad
 * @param {boolean=} opt_isSystemKey
 * @param {function(?Protocol.Error):void=} opt_callback
 */
InputAgent.dispatchKeyEvent = function(type, opt_modifiers, opt_timestamp, opt_text, opt_unmodifiedText, opt_keyIdentifier, opt_windowsVirtualKeyCode, opt_nativeVirtualKeyCode, opt_macCharCode, opt_autoRepeat, opt_isKeypad, opt_isSystemKey, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
InputAgent.dispatchKeyEvent.invoke = function(obj, opt_callback) {}

/**
 * @param {string} type
 * @param {number} x
 * @param {number} y
 * @param {number=} opt_modifiers
 * @param {number=} opt_timestamp
 * @param {string=} opt_button
 * @param {number=} opt_clickCount
 * @param {function(?Protocol.Error):void=} opt_callback
 */
InputAgent.dispatchMouseEvent = function(type, x, y, opt_modifiers, opt_timestamp, opt_button, opt_clickCount, opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
InputAgent.dispatchMouseEvent.invoke = function(obj, opt_callback) {}
/** @interface */
InputAgent.Dispatcher = function() {};
/**
 * @param {InputAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerInputDispatcher = function(dispatcher) {}



var LayerTreeAgent = {};

/** @typedef {string} */
LayerTreeAgent.LayerId;

/** @constructor */
LayerTreeAgent.IntRect = function()
{
/** @type {number} */ this.x;
/** @type {number} */ this.y;
/** @type {number} */ this.width;
/** @type {number} */ this.height;
}

/** @constructor */
LayerTreeAgent.Layer = function()
{
/** @type {LayerTreeAgent.LayerId} */ this.layerId;
/** @type {LayerTreeAgent.IntRect} */ this.bounds;
/** @type {boolean} */ this.isComposited;
/** @type {number|undefined} */ this.paintCount;
/** @type {number|undefined} */ this.memory;
/** @type {LayerTreeAgent.IntRect|undefined} */ this.compositedBounds;
/** @type {Array.<LayerTreeAgent.Layer>|undefined} */ this.childLayers;
}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
LayerTreeAgent.enable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
LayerTreeAgent.enable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error):void=} opt_callback
 */
LayerTreeAgent.disable = function(opt_callback) {}
/** @param {function(?Protocol.Error):void=} opt_callback */
LayerTreeAgent.disable.invoke = function(obj, opt_callback) {}

/**
 * @param {function(?Protocol.Error, LayerTreeAgent.Layer):void=} opt_callback
 */
LayerTreeAgent.getLayerTree = function(opt_callback) {}
/** @param {function(?Protocol.Error, LayerTreeAgent.Layer):void=} opt_callback */
LayerTreeAgent.getLayerTree.invoke = function(obj, opt_callback) {}

/**
 * @param {LayerTreeAgent.LayerId} layerId
 * @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback
 */
LayerTreeAgent.nodeIdForLayerId = function(layerId, opt_callback) {}
/** @param {function(?Protocol.Error, DOMAgent.NodeId):void=} opt_callback */
LayerTreeAgent.nodeIdForLayerId.invoke = function(obj, opt_callback) {}
/** @interface */
LayerTreeAgent.Dispatcher = function() {};
LayerTreeAgent.Dispatcher.prototype.layerTreeDidChange = function() {};
/**
 * @param {LayerTreeAgent.Dispatcher} dispatcher
 */
InspectorBackend.registerLayerTreeDispatcher = function(dispatcher) {}
