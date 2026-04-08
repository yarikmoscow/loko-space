gdjs.VictoryCode = {};
gdjs.VictoryCode.localVariables = [];
gdjs.VictoryCode.idToCallbackMap = new Map();
gdjs.VictoryCode.GDGameOverTextObjects1= [];
gdjs.VictoryCode.GDGameOverTextObjects2= [];
gdjs.VictoryCode.GDFinalScoreTextObjects1= [];
gdjs.VictoryCode.GDFinalScoreTextObjects2= [];
gdjs.VictoryCode.GDNewSpriteObjects1= [];
gdjs.VictoryCode.GDNewSpriteObjects2= [];
gdjs.VictoryCode.GDbackgroundObjects1= [];
gdjs.VictoryCode.GDbackgroundObjects2= [];
gdjs.VictoryCode.GDBtnMenuObjects1= [];
gdjs.VictoryCode.GDBtnMenuObjects2= [];
gdjs.VictoryCode.GDBtnRetryObjects1= [];
gdjs.VictoryCode.GDBtnRetryObjects2= [];
gdjs.VictoryCode.GDNewSprite2Objects1= [];
gdjs.VictoryCode.GDNewSprite2Objects2= [];


gdjs.VictoryCode.mapOfGDgdjs_9546VictoryCode_9546GDBtnMenuObjects1Objects = Hashtable.newFrom({"BtnMenu": gdjs.VictoryCode.GDBtnMenuObjects1});
gdjs.VictoryCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FinalScoreText"), gdjs.VictoryCode.GDFinalScoreTextObjects1);
{for(var i = 0, len = gdjs.VictoryCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDFinalScoreTextObjects1[i].getBehavior("Text").setText("Очки:" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{for(var i = 0, len = gdjs.VictoryCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDFinalScoreTextObjects1[i].setX(320 - (gdjs.VictoryCode.GDFinalScoreTextObjects1[i].getWidth()) / 2);
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Bad Romance [G9vwFsyuJsA].ogg", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMenu"), gdjs.VictoryCode.GDBtnMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.VictoryCode.mapOfGDgdjs_9546VictoryCode_9546GDBtnMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartMenu", false);
}
}

}


};

gdjs.VictoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoryCode.GDGameOverTextObjects1.length = 0;
gdjs.VictoryCode.GDGameOverTextObjects2.length = 0;
gdjs.VictoryCode.GDFinalScoreTextObjects1.length = 0;
gdjs.VictoryCode.GDFinalScoreTextObjects2.length = 0;
gdjs.VictoryCode.GDNewSpriteObjects1.length = 0;
gdjs.VictoryCode.GDNewSpriteObjects2.length = 0;
gdjs.VictoryCode.GDbackgroundObjects1.length = 0;
gdjs.VictoryCode.GDbackgroundObjects2.length = 0;
gdjs.VictoryCode.GDBtnMenuObjects1.length = 0;
gdjs.VictoryCode.GDBtnMenuObjects2.length = 0;
gdjs.VictoryCode.GDBtnRetryObjects1.length = 0;
gdjs.VictoryCode.GDBtnRetryObjects2.length = 0;
gdjs.VictoryCode.GDNewSprite2Objects1.length = 0;
gdjs.VictoryCode.GDNewSprite2Objects2.length = 0;

gdjs.VictoryCode.eventsList0(runtimeScene);
gdjs.VictoryCode.GDGameOverTextObjects1.length = 0;
gdjs.VictoryCode.GDGameOverTextObjects2.length = 0;
gdjs.VictoryCode.GDFinalScoreTextObjects1.length = 0;
gdjs.VictoryCode.GDFinalScoreTextObjects2.length = 0;
gdjs.VictoryCode.GDNewSpriteObjects1.length = 0;
gdjs.VictoryCode.GDNewSpriteObjects2.length = 0;
gdjs.VictoryCode.GDbackgroundObjects1.length = 0;
gdjs.VictoryCode.GDbackgroundObjects2.length = 0;
gdjs.VictoryCode.GDBtnMenuObjects1.length = 0;
gdjs.VictoryCode.GDBtnMenuObjects2.length = 0;
gdjs.VictoryCode.GDBtnRetryObjects1.length = 0;
gdjs.VictoryCode.GDBtnRetryObjects2.length = 0;
gdjs.VictoryCode.GDNewSprite2Objects1.length = 0;
gdjs.VictoryCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['VictoryCode'] = gdjs.VictoryCode;
