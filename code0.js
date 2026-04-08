gdjs.StartMenuCode = {};
gdjs.StartMenuCode.localVariables = [];
gdjs.StartMenuCode.idToCallbackMap = new Map();
gdjs.StartMenuCode.GDBackgroundObjects1= [];
gdjs.StartMenuCode.GDBackgroundObjects2= [];
gdjs.StartMenuCode.GDTapTextObjects1= [];
gdjs.StartMenuCode.GDTapTextObjects2= [];
gdjs.StartMenuCode.GDOverlayObjects1= [];
gdjs.StartMenuCode.GDOverlayObjects2= [];
gdjs.StartMenuCode.GDBtnPlayObjects1= [];
gdjs.StartMenuCode.GDBtnPlayObjects2= [];
gdjs.StartMenuCode.GDBtnSettingsObjects1= [];
gdjs.StartMenuCode.GDBtnSettingsObjects2= [];
gdjs.StartMenuCode.GDBtnExitObjects1= [];
gdjs.StartMenuCode.GDBtnExitObjects2= [];
gdjs.StartMenuCode.GDpodlozhkaObjects1= [];
gdjs.StartMenuCode.GDpodlozhkaObjects2= [];
gdjs.StartMenuCode.GDNewSprite2Objects1= [];
gdjs.StartMenuCode.GDNewSprite2Objects2= [];
gdjs.StartMenuCode.GDCockpitBGObjects1= [];
gdjs.StartMenuCode.GDCockpitBGObjects2= [];


gdjs.StartMenuCode.mapOfGDgdjs_9546StartMenuCode_9546GDBtnPlayObjects1Objects = Hashtable.newFrom({"BtnPlay": gdjs.StartMenuCode.GDBtnPlayObjects1});
gdjs.StartMenuCode.mapOfGDgdjs_9546StartMenuCode_9546GDBtnSettingsObjects1Objects = Hashtable.newFrom({"BtnSettings": gdjs.StartMenuCode.GDBtnSettingsObjects1});
gdjs.StartMenuCode.mapOfGDgdjs_9546StartMenuCode_9546GDBtnExitObjects1Objects = Hashtable.newFrom({"BtnExit": gdjs.StartMenuCode.GDBtnExitObjects1});
gdjs.StartMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnExit"), gdjs.StartMenuCode.GDBtnExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnPlay"), gdjs.StartMenuCode.GDBtnPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnSettings"), gdjs.StartMenuCode.GDBtnSettingsObjects1);
gdjs.copyArray(runtimeScene.getObjects("CockpitBG"), gdjs.StartMenuCode.GDCockpitBGObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDBtnPlayObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBtnPlayObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDBtnSettingsObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBtnSettingsObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDBtnExitObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBtnExitObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDCockpitBGObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDCockpitBGObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pulse");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnExit"), gdjs.StartMenuCode.GDBtnExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnPlay"), gdjs.StartMenuCode.GDBtnPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnSettings"), gdjs.StartMenuCode.GDBtnSettingsObjects1);
gdjs.copyArray(runtimeScene.getObjects("CockpitBG"), gdjs.StartMenuCode.GDCockpitBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Overlay"), gdjs.StartMenuCode.GDOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TapText"), gdjs.StartMenuCode.GDTapTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("podlozhka"), gdjs.StartMenuCode.GDpodlozhkaObjects1);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds/StartMenu2.ogg", 0, true, 70, 1);
}
{for(var i = 0, len = gdjs.StartMenuCode.GDOverlayObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDOverlayObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDTapTextObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDTapTextObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDCockpitBGObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDCockpitBGObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDBtnPlayObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBtnPlayObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDBtnSettingsObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBtnSettingsObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDBtnExitObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBtnExitObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{for(var i = 0, len = gdjs.StartMenuCode.GDBtnPlayObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBtnPlayObjects1[i].getBehavior("Tween").addObjectPositionXTween2("slideIn", 1071, "easeOutCubic", 1.2, false);
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDBtnSettingsObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBtnSettingsObjects1[i].getBehavior("Tween").addObjectPositionXTween2("slideIn", 1071, "easeOutCubic", 1.2, false);
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDBtnExitObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDBtnExitObjects1[i].getBehavior("Tween").addObjectPositionXTween2("slideIn", 1071, "easeOutCubic", 1.2, false);
}
}
{for(var i = 0, len = gdjs.StartMenuCode.GDpodlozhkaObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDpodlozhkaObjects1[i].getBehavior("Tween").addObjectPositionXTween2("slideIn", 0, "easeOutCubic", 1.2, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnPlay"), gdjs.StartMenuCode.GDBtnPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_9546StartMenuCode_9546GDBtnPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSettings"), gdjs.StartMenuCode.GDBtnSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_9546StartMenuCode_9546GDBtnSettingsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnExit"), gdjs.StartMenuCode.GDBtnExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_9546StartMenuCode_9546GDBtnExitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pulse") > 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TapText"), gdjs.StartMenuCode.GDTapTextObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDTapTextObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDTapTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pulse");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pulse") > 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TapText"), gdjs.StartMenuCode.GDTapTextObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDTapTextObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDTapTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pulse");
}
}

}


};

gdjs.StartMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartMenuCode.GDBackgroundObjects1.length = 0;
gdjs.StartMenuCode.GDBackgroundObjects2.length = 0;
gdjs.StartMenuCode.GDTapTextObjects1.length = 0;
gdjs.StartMenuCode.GDTapTextObjects2.length = 0;
gdjs.StartMenuCode.GDOverlayObjects1.length = 0;
gdjs.StartMenuCode.GDOverlayObjects2.length = 0;
gdjs.StartMenuCode.GDBtnPlayObjects1.length = 0;
gdjs.StartMenuCode.GDBtnPlayObjects2.length = 0;
gdjs.StartMenuCode.GDBtnSettingsObjects1.length = 0;
gdjs.StartMenuCode.GDBtnSettingsObjects2.length = 0;
gdjs.StartMenuCode.GDBtnExitObjects1.length = 0;
gdjs.StartMenuCode.GDBtnExitObjects2.length = 0;
gdjs.StartMenuCode.GDpodlozhkaObjects1.length = 0;
gdjs.StartMenuCode.GDpodlozhkaObjects2.length = 0;
gdjs.StartMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.StartMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.StartMenuCode.GDCockpitBGObjects1.length = 0;
gdjs.StartMenuCode.GDCockpitBGObjects2.length = 0;

gdjs.StartMenuCode.eventsList0(runtimeScene);
gdjs.StartMenuCode.GDBackgroundObjects1.length = 0;
gdjs.StartMenuCode.GDBackgroundObjects2.length = 0;
gdjs.StartMenuCode.GDTapTextObjects1.length = 0;
gdjs.StartMenuCode.GDTapTextObjects2.length = 0;
gdjs.StartMenuCode.GDOverlayObjects1.length = 0;
gdjs.StartMenuCode.GDOverlayObjects2.length = 0;
gdjs.StartMenuCode.GDBtnPlayObjects1.length = 0;
gdjs.StartMenuCode.GDBtnPlayObjects2.length = 0;
gdjs.StartMenuCode.GDBtnSettingsObjects1.length = 0;
gdjs.StartMenuCode.GDBtnSettingsObjects2.length = 0;
gdjs.StartMenuCode.GDBtnExitObjects1.length = 0;
gdjs.StartMenuCode.GDBtnExitObjects2.length = 0;
gdjs.StartMenuCode.GDpodlozhkaObjects1.length = 0;
gdjs.StartMenuCode.GDpodlozhkaObjects2.length = 0;
gdjs.StartMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.StartMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.StartMenuCode.GDCockpitBGObjects1.length = 0;
gdjs.StartMenuCode.GDCockpitBGObjects2.length = 0;


return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
