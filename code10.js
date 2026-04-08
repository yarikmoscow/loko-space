gdjs.Cutscene5Code = {};
gdjs.Cutscene5Code.localVariables = [];
gdjs.Cutscene5Code.idToCallbackMap = new Map();
gdjs.Cutscene5Code.GDNewSpriteObjects1= [];
gdjs.Cutscene5Code.GDNewSpriteObjects2= [];
gdjs.Cutscene5Code.GDNewTextObjects1= [];
gdjs.Cutscene5Code.GDNewTextObjects2= [];
gdjs.Cutscene5Code.GDBtnContinueObjects1= [];
gdjs.Cutscene5Code.GDBtnContinueObjects2= [];
gdjs.Cutscene5Code.GDFadeOverlayObjects1= [];
gdjs.Cutscene5Code.GDFadeOverlayObjects2= [];


gdjs.Cutscene5Code.mapOfGDgdjs_9546Cutscene5Code_9546GDBtnContinueObjects1Objects = Hashtable.newFrom({"BtnContinue": gdjs.Cutscene5Code.GDBtnContinueObjects1});
gdjs.Cutscene5Code.mapOfGDgdjs_9546Cutscene5Code_9546GDBtnContinueObjects1Objects = Hashtable.newFrom({"BtnContinue": gdjs.Cutscene5Code.GDBtnContinueObjects1});
gdjs.Cutscene5Code.mapOfGDgdjs_9546Cutscene5Code_9546GDBtnContinueObjects1Objects = Hashtable.newFrom({"BtnContinue": gdjs.Cutscene5Code.GDBtnContinueObjects1});
gdjs.Cutscene5Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnContinue"), gdjs.Cutscene5Code.GDBtnContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("FadeOverlay"), gdjs.Cutscene5Code.GDFadeOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cutscene5Code.GDNewTextObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TypeTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDNewTextObjects1[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDBtnContinueObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDBtnContinueObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds/ITOG SOUND.ogg", 0, false, 70, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DelayTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDFadeOverlayObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDFadeOverlayObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDFadeOverlayObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDFadeOverlayObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "easeOutQuad", 7, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "DelayTimer") > 7.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TypeTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TypeTimer") > 0.075;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cutscene5Code.GDNewTextObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TypeTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnContinue"), gdjs.Cutscene5Code.GDBtnContinueObjects1);
{for(var i = 0, len = gdjs.Cutscene5Code.GDBtnContinueObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDBtnContinueObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnContinue"), gdjs.Cutscene5Code.GDBtnContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cutscene5Code.mapOfGDgdjs_9546Cutscene5Code_9546GDBtnContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene5Code.GDBtnContinueObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene5Code.GDBtnContinueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene5Code.GDBtnContinueObjects1[k] = gdjs.Cutscene5Code.GDBtnContinueObjects1[i];
        ++k;
    }
}
gdjs.Cutscene5Code.GDBtnContinueObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cutscene5Code.GDBtnContinueObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Cutscene5Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cutscene5Code.GDNewTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDNewTextObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDBtnContinueObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDBtnContinueObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("cat1_2");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TypeTimer");
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDNewTextObjects1[i].setPosition(32,32);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnContinue"), gdjs.Cutscene5Code.GDBtnContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cutscene5Code.mapOfGDgdjs_9546Cutscene5Code_9546GDBtnContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene5Code.GDBtnContinueObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene5Code.GDBtnContinueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene5Code.GDBtnContinueObjects1[k] = gdjs.Cutscene5Code.GDBtnContinueObjects1[i];
        ++k;
    }
}
gdjs.Cutscene5Code.GDBtnContinueObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartMenu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnContinue"), gdjs.Cutscene5Code.GDBtnContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cutscene5Code.mapOfGDgdjs_9546Cutscene5Code_9546GDBtnContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene5Code.GDBtnContinueObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene5Code.GDBtnContinueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene5Code.GDBtnContinueObjects1[k] = gdjs.Cutscene5Code.GDBtnContinueObjects1[i];
        ++k;
    }
}
gdjs.Cutscene5Code.GDBtnContinueObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cutscene5Code.GDBtnContinueObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Cutscene5Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cutscene5Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Cutscene5Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDNewTextObjects1[i].setPosition(32,32);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDNewTextObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDBtnContinueObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDBtnContinueObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Cutscene5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Cutscene5Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("cat1_3");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TypeTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeOverlay"), gdjs.Cutscene5Code.GDFadeOverlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene5Code.GDFadeOverlayObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene5Code.GDFadeOverlayObjects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene5Code.GDFadeOverlayObjects1[k] = gdjs.Cutscene5Code.GDFadeOverlayObjects1[i];
        ++k;
    }
}
gdjs.Cutscene5Code.GDFadeOverlayObjects1.length = k;
if (isConditionTrue_0) {
}

}


};

gdjs.Cutscene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene5Code.GDNewSpriteObjects1.length = 0;
gdjs.Cutscene5Code.GDNewSpriteObjects2.length = 0;
gdjs.Cutscene5Code.GDNewTextObjects1.length = 0;
gdjs.Cutscene5Code.GDNewTextObjects2.length = 0;
gdjs.Cutscene5Code.GDBtnContinueObjects1.length = 0;
gdjs.Cutscene5Code.GDBtnContinueObjects2.length = 0;
gdjs.Cutscene5Code.GDFadeOverlayObjects1.length = 0;
gdjs.Cutscene5Code.GDFadeOverlayObjects2.length = 0;

gdjs.Cutscene5Code.eventsList0(runtimeScene);
gdjs.Cutscene5Code.GDNewSpriteObjects1.length = 0;
gdjs.Cutscene5Code.GDNewSpriteObjects2.length = 0;
gdjs.Cutscene5Code.GDNewTextObjects1.length = 0;
gdjs.Cutscene5Code.GDNewTextObjects2.length = 0;
gdjs.Cutscene5Code.GDBtnContinueObjects1.length = 0;
gdjs.Cutscene5Code.GDBtnContinueObjects2.length = 0;
gdjs.Cutscene5Code.GDFadeOverlayObjects1.length = 0;
gdjs.Cutscene5Code.GDFadeOverlayObjects2.length = 0;


return;

}

gdjs['Cutscene5Code'] = gdjs.Cutscene5Code;
