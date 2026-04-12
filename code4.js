gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.idToCallbackMap = new Map();
gdjs.GameOverCode.GDGameOverTextObjects1= [];
gdjs.GameOverCode.GDGameOverTextObjects2= [];
gdjs.GameOverCode.GDFinalScoreTextObjects1= [];
gdjs.GameOverCode.GDFinalScoreTextObjects2= [];
gdjs.GameOverCode.GDNewSpriteObjects1= [];
gdjs.GameOverCode.GDNewSpriteObjects2= [];
gdjs.GameOverCode.GDbackgroundObjects1= [];
gdjs.GameOverCode.GDbackgroundObjects2= [];
gdjs.GameOverCode.GDBtnMenuObjects1= [];
gdjs.GameOverCode.GDBtnMenuObjects2= [];
gdjs.GameOverCode.GDBtnRetryObjects1= [];
gdjs.GameOverCode.GDBtnRetryObjects2= [];
gdjs.GameOverCode.GDpoflozhka2Objects1= [];
gdjs.GameOverCode.GDpoflozhka2Objects2= [];
gdjs.GameOverCode.GDFadeOverlayObjects1= [];
gdjs.GameOverCode.GDFadeOverlayObjects2= [];


gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDBtnRetryObjects1Objects = Hashtable.newFrom({"BtnRetry": gdjs.GameOverCode.GDBtnRetryObjects1});
gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDBtnMenuObjects1Objects = Hashtable.newFrom({"BtnMenu": gdjs.GameOverCode.GDBtnMenuObjects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeOverlay"), gdjs.GameOverCode.GDFadeOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("FinalScoreText"), gdjs.GameOverCode.GDFinalScoreTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFinalScoreTextObjects1[i].getBehavior("Text").setText("Очки: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{for(var i = 0, len = gdjs.GameOverCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFinalScoreTextObjects1[i].setX(960 - (gdjs.GameOverCode.GDFinalScoreTextObjects1[i].getWidth()) / 2);
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds/startMUSICinter.ogg", 0, false, 50 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)), 1);
}
{for(var i = 0, len = gdjs.GameOverCode.GDFadeOverlayObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFadeOverlayObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.GameOverCode.GDFadeOverlayObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFadeOverlayObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "easeOutQuad", 2, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnRetry"), gdjs.GameOverCode.GDBtnRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDBtnRetryObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMenu"), gdjs.GameOverCode.GDBtnMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDBtnMenuObjects1Objects, runtimeScene, true, false);
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

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverCode.GDFinalScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDFinalScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDbackgroundObjects1.length = 0;
gdjs.GameOverCode.GDbackgroundObjects2.length = 0;
gdjs.GameOverCode.GDBtnMenuObjects1.length = 0;
gdjs.GameOverCode.GDBtnMenuObjects2.length = 0;
gdjs.GameOverCode.GDBtnRetryObjects1.length = 0;
gdjs.GameOverCode.GDBtnRetryObjects2.length = 0;
gdjs.GameOverCode.GDpoflozhka2Objects1.length = 0;
gdjs.GameOverCode.GDpoflozhka2Objects2.length = 0;
gdjs.GameOverCode.GDFadeOverlayObjects1.length = 0;
gdjs.GameOverCode.GDFadeOverlayObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverCode.GDFinalScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDFinalScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDbackgroundObjects1.length = 0;
gdjs.GameOverCode.GDbackgroundObjects2.length = 0;
gdjs.GameOverCode.GDBtnMenuObjects1.length = 0;
gdjs.GameOverCode.GDBtnMenuObjects2.length = 0;
gdjs.GameOverCode.GDBtnRetryObjects1.length = 0;
gdjs.GameOverCode.GDBtnRetryObjects2.length = 0;
gdjs.GameOverCode.GDpoflozhka2Objects1.length = 0;
gdjs.GameOverCode.GDpoflozhka2Objects2.length = 0;
gdjs.GameOverCode.GDFadeOverlayObjects1.length = 0;
gdjs.GameOverCode.GDFadeOverlayObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
