gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.idToCallbackMap = new Map();
gdjs.SettingsCode.GDNewSpriteObjects1= [];
gdjs.SettingsCode.GDNewSpriteObjects2= [];
gdjs.SettingsCode.GD_951052_951059_951047_951067_951050_951040Objects1= [];
gdjs.SettingsCode.GD_951052_951059_951047_951067_951050_951040Objects2= [];
gdjs.SettingsCode.GD_951053_951040_951057_951058_951056_951054_951048_951050_951040Objects1= [];
gdjs.SettingsCode.GD_951053_951040_951057_951058_951056_951054_951048_951050_951040Objects2= [];
gdjs.SettingsCode.GDBtnMusicToggleObjects1= [];
gdjs.SettingsCode.GDBtnMusicToggleObjects2= [];
gdjs.SettingsCode.GDBtnBackObjects1= [];
gdjs.SettingsCode.GDBtnBackObjects2= [];
gdjs.SettingsCode.GDSFXObjects1= [];
gdjs.SettingsCode.GDSFXObjects2= [];
gdjs.SettingsCode.GDBtnSfxToggleObjects1= [];
gdjs.SettingsCode.GDBtnSfxToggleObjects2= [];


gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDBtnBackObjects1Objects = Hashtable.newFrom({"BtnBack": gdjs.SettingsCode.GDBtnBackObjects1});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDBtnMusicToggleObjects1Objects = Hashtable.newFrom({"BtnMusicToggle": gdjs.SettingsCode.GDBtnMusicToggleObjects1});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDBtnSfxToggleObjects1Objects = Hashtable.newFrom({"BtnSfxToggle": gdjs.SettingsCode.GDBtnSfxToggleObjects1});
gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("BtnMusicToggle"), gdjs.SettingsCode.GDBtnMusicToggleObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDBtnMusicToggleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBtnMusicToggleObjects1[i].getBehavior("Animation").setAnimationName("вкл");
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds/StartMenu2.ogg", 0, true, 70, 1);
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
gdjs.copyArray(runtimeScene.getObjects("BtnMusicToggle"), gdjs.SettingsCode.GDBtnMusicToggleObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDBtnMusicToggleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBtnMusicToggleObjects1[i].getBehavior("Animation").setAnimationName("выкл");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnSfxToggle"), gdjs.SettingsCode.GDBtnSfxToggleObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDBtnSfxToggleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBtnSfxToggleObjects1[i].getBehavior("Animation").setAnimationName("вкл");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnSfxToggle"), gdjs.SettingsCode.GDBtnSfxToggleObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDBtnSfxToggleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBtnSfxToggleObjects1[i].getBehavior("Animation").setAnimationName("выкл");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBack"), gdjs.SettingsCode.GDBtnBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDBtnBackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartMenu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMusicToggle"), gdjs.SettingsCode.GDBtnMusicToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDBtnMusicToggleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDBtnMusicToggleObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds/StartMenu2.ogg", 0, true, 70 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)), 1);
}
{for(var i = 0, len = gdjs.SettingsCode.GDBtnMusicToggleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBtnMusicToggleObjects1[i].getBehavior("Animation").setAnimationIndex(1 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnSfxToggle"), gdjs.SettingsCode.GDBtnSfxToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDBtnSfxToggleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDBtnSfxToggleObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
{for(var i = 0, len = gdjs.SettingsCode.GDBtnSfxToggleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBtnSfxToggleObjects1[i].getBehavior("Animation").setAnimationIndex(1 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "sounds/kamen1.mp3", false, 70 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)), 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDNewSpriteObjects1.length = 0;
gdjs.SettingsCode.GDNewSpriteObjects2.length = 0;
gdjs.SettingsCode.GD_951052_951059_951047_951067_951050_951040Objects1.length = 0;
gdjs.SettingsCode.GD_951052_951059_951047_951067_951050_951040Objects2.length = 0;
gdjs.SettingsCode.GD_951053_951040_951057_951058_951056_951054_951048_951050_951040Objects1.length = 0;
gdjs.SettingsCode.GD_951053_951040_951057_951058_951056_951054_951048_951050_951040Objects2.length = 0;
gdjs.SettingsCode.GDBtnMusicToggleObjects1.length = 0;
gdjs.SettingsCode.GDBtnMusicToggleObjects2.length = 0;
gdjs.SettingsCode.GDBtnBackObjects1.length = 0;
gdjs.SettingsCode.GDBtnBackObjects2.length = 0;
gdjs.SettingsCode.GDSFXObjects1.length = 0;
gdjs.SettingsCode.GDSFXObjects2.length = 0;
gdjs.SettingsCode.GDBtnSfxToggleObjects1.length = 0;
gdjs.SettingsCode.GDBtnSfxToggleObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
gdjs.SettingsCode.GDNewSpriteObjects1.length = 0;
gdjs.SettingsCode.GDNewSpriteObjects2.length = 0;
gdjs.SettingsCode.GD_951052_951059_951047_951067_951050_951040Objects1.length = 0;
gdjs.SettingsCode.GD_951052_951059_951047_951067_951050_951040Objects2.length = 0;
gdjs.SettingsCode.GD_951053_951040_951057_951058_951056_951054_951048_951050_951040Objects1.length = 0;
gdjs.SettingsCode.GD_951053_951040_951057_951058_951056_951054_951048_951050_951040Objects2.length = 0;
gdjs.SettingsCode.GDBtnMusicToggleObjects1.length = 0;
gdjs.SettingsCode.GDBtnMusicToggleObjects2.length = 0;
gdjs.SettingsCode.GDBtnBackObjects1.length = 0;
gdjs.SettingsCode.GDBtnBackObjects2.length = 0;
gdjs.SettingsCode.GDSFXObjects1.length = 0;
gdjs.SettingsCode.GDSFXObjects2.length = 0;
gdjs.SettingsCode.GDBtnSfxToggleObjects1.length = 0;
gdjs.SettingsCode.GDBtnSfxToggleObjects2.length = 0;


return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
