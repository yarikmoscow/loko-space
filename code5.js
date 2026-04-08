gdjs.ResultCode = {};
gdjs.ResultCode.localVariables = [];
gdjs.ResultCode.idToCallbackMap = new Map();


gdjs.ResultCode.eventsList0 = function(runtimeScene) {

};

gdjs.ResultCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.ResultCode.eventsList0(runtimeScene);


return;

}

gdjs['ResultCode'] = gdjs.ResultCode;
