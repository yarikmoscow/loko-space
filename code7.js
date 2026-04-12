gdjs.Cutscene2Code = {};
gdjs.Cutscene2Code.localVariables = [];
gdjs.Cutscene2Code.idToCallbackMap = new Map();
gdjs.Cutscene2Code.GDNewSpriteObjects1= [];
gdjs.Cutscene2Code.GDNewSpriteObjects2= [];
gdjs.Cutscene2Code.GDNewTextObjects1= [];
gdjs.Cutscene2Code.GDNewTextObjects2= [];
gdjs.Cutscene2Code.GDBtnContinueObjects1= [];
gdjs.Cutscene2Code.GDBtnContinueObjects2= [];
gdjs.Cutscene2Code.GDFadeOverlayObjects1= [];
gdjs.Cutscene2Code.GDFadeOverlayObjects2= [];


gdjs.Cutscene2Code.mapOfGDgdjs_9546Cutscene2Code_9546GDBtnContinueObjects1Objects = Hashtable.newFrom({"BtnContinue": gdjs.Cutscene2Code.GDBtnContinueObjects1});
gdjs.Cutscene2Code.mapOfGDgdjs_9546Cutscene2Code_9546GDBtnContinueObjects1Objects = Hashtable.newFrom({"BtnContinue": gdjs.Cutscene2Code.GDBtnContinueObjects1});
gdjs.Cutscene2Code.mapOfGDgdjs_9546Cutscene2Code_9546GDBtnContinueObjects1Objects = Hashtable.newFrom({"BtnContinue": gdjs.Cutscene2Code.GDBtnContinueObjects1});
gdjs.Cutscene2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnContinue"), gdjs.Cutscene2Code.GDBtnContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("FadeOverlay"), gdjs.Cutscene2Code.GDFadeOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cutscene2Code.GDNewTextObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TypeTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDNewTextObjects1[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDBtnContinueObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDBtnContinueObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds/startMUSICinter.ogg", 0, false, 70 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)), 1);
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDFadeOverlayObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDFadeOverlayObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "easeOutQuad", 2, false);
}
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDFadeOverlayObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDFadeOverlayObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TypeTimer") > 0.01;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cutscene2Code.GDNewTextObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TypeTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)));
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
gdjs.copyArray(runtimeScene.getObjects("BtnContinue"), gdjs.Cutscene2Code.GDBtnContinueObjects1);
{for(var i = 0, len = gdjs.Cutscene2Code.GDBtnContinueObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDBtnContinueObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnContinue"), gdjs.Cutscene2Code.GDBtnContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cutscene2Code.mapOfGDgdjs_9546Cutscene2Code_9546GDBtnContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene2Code.GDBtnContinueObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene2Code.GDBtnContinueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene2Code.GDBtnContinueObjects1[k] = gdjs.Cutscene2Code.GDBtnContinueObjects1[i];
        ++k;
    }
}
gdjs.Cutscene2Code.GDBtnContinueObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cutscene2Code.GDBtnContinueObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Cutscene2Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cutscene2Code.GDNewTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDNewTextObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDBtnContinueObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDBtnContinueObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("cat1_2");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TypeTimer");
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDNewTextObjects1[i].setPosition(96,860);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnContinue"), gdjs.Cutscene2Code.GDBtnContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cutscene2Code.mapOfGDgdjs_9546Cutscene2Code_9546GDBtnContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene2Code.GDBtnContinueObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene2Code.GDBtnContinueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene2Code.GDBtnContinueObjects1[k] = gdjs.Cutscene2Code.GDBtnContinueObjects1[i];
        ++k;
    }
}
gdjs.Cutscene2Code.GDBtnContinueObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_Level2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnContinue"), gdjs.Cutscene2Code.GDBtnContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cutscene2Code.mapOfGDgdjs_9546Cutscene2Code_9546GDBtnContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cutscene2Code.GDBtnContinueObjects1.length;i<l;++i) {
    if ( gdjs.Cutscene2Code.GDBtnContinueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cutscene2Code.GDBtnContinueObjects1[k] = gdjs.Cutscene2Code.GDBtnContinueObjects1[i];
        ++k;
    }
}
gdjs.Cutscene2Code.GDBtnContinueObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cutscene2Code.GDBtnContinueObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Cutscene2Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Cutscene2Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Cutscene2Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDNewTextObjects1[i].setPosition(96,880);
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
{for(var i = 0, len = gdjs.Cutscene2Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDNewTextObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDBtnContinueObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDBtnContinueObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Cutscene2Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Cutscene2Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationName("cat1_3");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TypeTimer");
}
}

}


};

gdjs.Cutscene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cutscene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Cutscene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Cutscene2Code.GDNewTextObjects1.length = 0;
gdjs.Cutscene2Code.GDNewTextObjects2.length = 0;
gdjs.Cutscene2Code.GDBtnContinueObjects1.length = 0;
gdjs.Cutscene2Code.GDBtnContinueObjects2.length = 0;
gdjs.Cutscene2Code.GDFadeOverlayObjects1.length = 0;
gdjs.Cutscene2Code.GDFadeOverlayObjects2.length = 0;

gdjs.Cutscene2Code.eventsList0(runtimeScene);
gdjs.Cutscene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Cutscene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Cutscene2Code.GDNewTextObjects1.length = 0;
gdjs.Cutscene2Code.GDNewTextObjects2.length = 0;
gdjs.Cutscene2Code.GDBtnContinueObjects1.length = 0;
gdjs.Cutscene2Code.GDBtnContinueObjects2.length = 0;
gdjs.Cutscene2Code.GDFadeOverlayObjects1.length = 0;
gdjs.Cutscene2Code.GDFadeOverlayObjects2.length = 0;


return;

}

gdjs['Cutscene2Code'] = gdjs.Cutscene2Code;
