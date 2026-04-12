gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDMascotObjects1= [];
gdjs.GameCode.GDMascotObjects2= [];
gdjs.GameCode.GDMascotObjects3= [];
gdjs.GameCode.GDMeteorObjects1= [];
gdjs.GameCode.GDMeteorObjects2= [];
gdjs.GameCode.GDMeteorObjects3= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDLivesTextObjects1= [];
gdjs.GameCode.GDLivesTextObjects2= [];
gdjs.GameCode.GDLivesTextObjects3= [];
gdjs.GameCode.GDBonusBallObjects1= [];
gdjs.GameCode.GDBonusBallObjects2= [];
gdjs.GameCode.GDBonusBallObjects3= [];
gdjs.GameCode.GDEarthObjects1= [];
gdjs.GameCode.GDEarthObjects2= [];
gdjs.GameCode.GDEarthObjects3= [];
gdjs.GameCode.GDheartObjects1= [];
gdjs.GameCode.GDheartObjects2= [];
gdjs.GameCode.GDheartObjects3= [];
gdjs.GameCode.GDgalaxyObjects1= [];
gdjs.GameCode.GDgalaxyObjects2= [];
gdjs.GameCode.GDgalaxyObjects3= [];
gdjs.GameCode.GDGagarinObjects1= [];
gdjs.GameCode.GDGagarinObjects2= [];
gdjs.GameCode.GDGagarinObjects3= [];
gdjs.GameCode.GDstar1Objects1= [];
gdjs.GameCode.GDstar1Objects2= [];
gdjs.GameCode.GDstar1Objects3= [];
gdjs.GameCode.GDFadeOverlayObjects1= [];
gdjs.GameCode.GDFadeOverlayObjects2= [];
gdjs.GameCode.GDFadeOverlayObjects3= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMeteorObjects2Objects = Hashtable.newFrom({"Meteor": gdjs.GameCode.GDMeteorObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMeteorObjects2Objects = Hashtable.newFrom({"Meteor": gdjs.GameCode.GDMeteorObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMeteorObjects2Objects = Hashtable.newFrom({"Meteor": gdjs.GameCode.GDMeteorObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMeteorObjects1Objects = Hashtable.newFrom({"Meteor": gdjs.GameCode.GDMeteorObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.GameCode.GDMeteorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMeteorObjects2Objects, 42, 129, "");
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(3)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].getBehavior("Resizable").setSize(240, 195);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 4));
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomInRange(0, 1) * 2 - 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setAngle(0);
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
gdjs.GameCode.GDMeteorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMeteorObjects2Objects, 1860, 129, "");
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(3)).setNumber(2);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].getBehavior("Resizable").setSize(240, 195);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 4));
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomInRange(0, 1) * 2 - 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setAngle(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.GameCode.GDMeteorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMeteorObjects2Objects, 42, 933, "");
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].getBehavior("Resizable").setSize(240, 195);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(3)).setNumber(3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 4));
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].returnVariable(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomInRange(0, 1) * 2 - 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setAngle(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.GameCode.GDMeteorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMeteorObjects1Objects, 1860, 933, "");
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].getBehavior("Resizable").setSize(240, 195);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].returnVariable(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(3)).setNumber(4);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].returnVariable(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 4));
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].returnVariable(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].returnVariable(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomInRange(0, 1) * 2 - 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].setAngle(0);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMascotObjects1Objects = Hashtable.newFrom({"Mascot": gdjs.GameCode.GDMascotObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMeteorObjects1Objects = Hashtable.newFrom({"Meteor": gdjs.GameCode.GDMeteorObjects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDMeteorObjects1, gdjs.GameCode.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects2[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects2[k] = gdjs.GameCode.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].getBehavior("Animation").setAnimationName("destroy_1");
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDMeteorObjects1, gdjs.GameCode.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects2[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects2[k] = gdjs.GameCode.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].getBehavior("Animation").setAnimationName("destroy_2");
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDMeteorObjects1, gdjs.GameCode.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects2[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects2[k] = gdjs.GameCode.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].getBehavior("Animation").setAnimationName("destroy_3");
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDMeteorObjects1, gdjs.GameCode.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects2[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects2[k] = gdjs.GameCode.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].getBehavior("Animation").setAnimationName("destroy_4");
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDMeteorObjects1, gdjs.GameCode.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects2[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(3)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects2[k] = gdjs.GameCode.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDMascotObjects1, gdjs.GameCode.GDMascotObjects2);

/* Reuse gdjs.GameCode.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setX((( gdjs.GameCode.GDMascotObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMascotObjects2[0].getPointX("")) - 150);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setY((( gdjs.GameCode.GDMascotObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMascotObjects2[0].getPointY("")) - 90);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDMeteorObjects1, gdjs.GameCode.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects2[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(3)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects2[k] = gdjs.GameCode.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDMascotObjects1, gdjs.GameCode.GDMascotObjects2);

/* Reuse gdjs.GameCode.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setX((( gdjs.GameCode.GDMascotObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMascotObjects2[0].getPointX("")) + 540);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setY((( gdjs.GameCode.GDMascotObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMascotObjects2[0].getPointY("")) - 90);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDMeteorObjects1, gdjs.GameCode.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects2[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(3)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects2[k] = gdjs.GameCode.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDMascotObjects1, gdjs.GameCode.GDMascotObjects2);

/* Reuse gdjs.GameCode.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setX((( gdjs.GameCode.GDMascotObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMascotObjects2[0].getPointX("")) - 150);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setY((( gdjs.GameCode.GDMascotObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMascotObjects2[0].getPointY("")) + 240);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDMeteorObjects1, gdjs.GameCode.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects2[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects2[i].getVariables().getFromIndex(3)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects2[k] = gdjs.GameCode.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDMascotObjects1, gdjs.GameCode.GDMascotObjects2);

/* Reuse gdjs.GameCode.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setX((( gdjs.GameCode.GDMascotObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMascotObjects2[0].getPointX("")) + 540);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects2[i].setY((( gdjs.GameCode.GDMascotObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMascotObjects2[0].getPointY("")) + 240);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDstar1Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDstar1Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDstar1Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDstar1Objects1[k] = gdjs.GameCode.GDstar1Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDstar1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDstar1Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDstar1Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeOverlay"), gdjs.GameCode.GDFadeOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("LivesText"), gdjs.GameCode.GDLivesTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.GameCode.GDstar1Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}
{for(var i = 0, len = gdjs.GameCode.GDLivesTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLivesTextObjects1[i].getBehavior("Text").setText("x" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}
{for(var i = 0, len = gdjs.GameCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDstar1Objects1[i].returnVariable(gdjs.GameCode.GDstar1Objects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(2, 8));
}
}
{for(var i = 0, len = gdjs.GameCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDstar1Objects1[i].resetTimer("BlinkTimer");
}
}
{for(var i = 0, len = gdjs.GameCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDstar1Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
{for(var i = 0, len = gdjs.GameCode.GDFadeOverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFadeOverlayObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "easeOutQuad", 1.8, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpawnTimer") > Math.max(0.8, 2 - runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() * 0.01);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.GameCode.GDMascotObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 4));
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


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
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds/1leveITOG.ogg", 0, true, 50 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)), 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < 960;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) < 540;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.GameCode.GDMascotObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ReturnTimer");
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Tween").addObjectPositionTween2("move", 240, 240, "easeOutCubic", 0.08, false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("fly_left");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) >= 960;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) < 540;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.GameCode.GDMascotObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ReturnTimer");
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Tween").addObjectPositionTween2("move", 1164, 240, "easeOutCubic", 0.08, false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("fly");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < 960;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) >= 540;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.GameCode.GDMascotObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ReturnTimer");
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Tween").addObjectPositionTween2("move", 240, 579, "easeOutCubic", 0.08, false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("fly_left");
}
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].setAngle(-(45));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) >= 960;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) >= 540;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.GameCode.GDMascotObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ReturnTimer");
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Tween").addObjectPositionTween2("move", 1164, 579, "easeOutCubic", 0.08, false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("fly");
}
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].setAngle(45);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ReturnTimer") >= 0.15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.GameCode.GDMascotObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(false);
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Tween").addObjectPositionTween2("moveBack", 831, 297, "easeInOutQuad", 0.06, false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.GameCode.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].setX(gdjs.GameCode.GDMeteorObjects1[i].getX() + (Math.cos(Math.atan2(540 - (gdjs.GameCode.GDMeteorObjects1[i].getPointY("")), 960 - (gdjs.GameCode.GDMeteorObjects1[i].getPointX("")))) * 720 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].setY(gdjs.GameCode.GDMeteorObjects1[i].getY() + (Math.sin(Math.atan2(540 - (gdjs.GameCode.GDMeteorObjects1[i].getPointY("")), 960 - (gdjs.GameCode.GDMeteorObjects1[i].getPointX("")))) * 720 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].setAngle(gdjs.GameCode.GDMeteorObjects1[i].getAngle() + (3 * (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(2)))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.GameCode.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getX() >= 867 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getY() >= 498 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getX() <= 1047 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getY() <= 576 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LivesText"), gdjs.GameCode.GDLivesTextObjects1);
/* Reuse gdjs.GameCode.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}
{for(var i = 0, len = gdjs.GameCode.GDLivesTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLivesTextObjects1[i].getBehavior("Text").setText("x" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BlinkTimer");
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].returnVariable(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.GameCode.GDMascotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.GameCode.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMascotObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMeteorObjects1Objects, 300, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].returnVariable(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].returnVariable(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Очки:" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds/destroy1.ogg", 1, false, 50 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)), 1);
}

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BlinkTimer") <= 0.75;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.GameCode.GDMascotObjects1);
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Opacity").setOpacity(50 + 205 * Math.abs(Math.sin(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "BlinkTimer") * 220)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BlinkTimer") > 0.75;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.GameCode.GDMascotObjects1);
{for(var i = 0, len = gdjs.GameCode.GDMascotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMascotObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > 300);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15044060);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeOverlay"), gdjs.GameCode.GDFadeOverlayObjects1);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
{for(var i = 0, len = gdjs.GameCode.GDFadeOverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFadeOverlayObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 255, "easeInQuad", 0.8, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FadeOutTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.GameCode.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].getBehavior("Animation").setAnimationName("fly_1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.GameCode.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].getBehavior("Animation").setAnimationName("fly_2");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.GameCode.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].getBehavior("Animation").setAnimationName("fly_3");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.GameCode.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].getBehavior("Animation").setAnimationName("fly_4");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.GameCode.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getVariableNumber(gdjs.GameCode.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMeteorObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMeteorObjects1[k] = gdjs.GameCode.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMeteorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMeteorObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.GameCode.GDstar1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDstar1Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDstar1Objects1[i].getTimerElapsedTimeInSecondsOrNaN("BlinkTimer") > (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDstar1Objects1[i].getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDstar1Objects1[k] = gdjs.GameCode.GDstar1Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDstar1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDstar1Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDstar1Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 3));
}
}
{for(var i = 0, len = gdjs.GameCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDstar1Objects1[i].returnVariable(gdjs.GameCode.GDstar1Objects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(2, 8));
}
}
{for(var i = 0, len = gdjs.GameCode.GDstar1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDstar1Objects1[i].resetTimer("BlinkTimer");
}
}

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "FadeOutTimer") >= 0.8;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene2", false);
}
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDMascotObjects1.length = 0;
gdjs.GameCode.GDMascotObjects2.length = 0;
gdjs.GameCode.GDMascotObjects3.length = 0;
gdjs.GameCode.GDMeteorObjects1.length = 0;
gdjs.GameCode.GDMeteorObjects2.length = 0;
gdjs.GameCode.GDMeteorObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDLivesTextObjects1.length = 0;
gdjs.GameCode.GDLivesTextObjects2.length = 0;
gdjs.GameCode.GDLivesTextObjects3.length = 0;
gdjs.GameCode.GDBonusBallObjects1.length = 0;
gdjs.GameCode.GDBonusBallObjects2.length = 0;
gdjs.GameCode.GDBonusBallObjects3.length = 0;
gdjs.GameCode.GDEarthObjects1.length = 0;
gdjs.GameCode.GDEarthObjects2.length = 0;
gdjs.GameCode.GDEarthObjects3.length = 0;
gdjs.GameCode.GDheartObjects1.length = 0;
gdjs.GameCode.GDheartObjects2.length = 0;
gdjs.GameCode.GDheartObjects3.length = 0;
gdjs.GameCode.GDgalaxyObjects1.length = 0;
gdjs.GameCode.GDgalaxyObjects2.length = 0;
gdjs.GameCode.GDgalaxyObjects3.length = 0;
gdjs.GameCode.GDGagarinObjects1.length = 0;
gdjs.GameCode.GDGagarinObjects2.length = 0;
gdjs.GameCode.GDGagarinObjects3.length = 0;
gdjs.GameCode.GDstar1Objects1.length = 0;
gdjs.GameCode.GDstar1Objects2.length = 0;
gdjs.GameCode.GDstar1Objects3.length = 0;
gdjs.GameCode.GDFadeOverlayObjects1.length = 0;
gdjs.GameCode.GDFadeOverlayObjects2.length = 0;
gdjs.GameCode.GDFadeOverlayObjects3.length = 0;

gdjs.GameCode.eventsList3(runtimeScene);
gdjs.GameCode.GDMascotObjects1.length = 0;
gdjs.GameCode.GDMascotObjects2.length = 0;
gdjs.GameCode.GDMascotObjects3.length = 0;
gdjs.GameCode.GDMeteorObjects1.length = 0;
gdjs.GameCode.GDMeteorObjects2.length = 0;
gdjs.GameCode.GDMeteorObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDLivesTextObjects1.length = 0;
gdjs.GameCode.GDLivesTextObjects2.length = 0;
gdjs.GameCode.GDLivesTextObjects3.length = 0;
gdjs.GameCode.GDBonusBallObjects1.length = 0;
gdjs.GameCode.GDBonusBallObjects2.length = 0;
gdjs.GameCode.GDBonusBallObjects3.length = 0;
gdjs.GameCode.GDEarthObjects1.length = 0;
gdjs.GameCode.GDEarthObjects2.length = 0;
gdjs.GameCode.GDEarthObjects3.length = 0;
gdjs.GameCode.GDheartObjects1.length = 0;
gdjs.GameCode.GDheartObjects2.length = 0;
gdjs.GameCode.GDheartObjects3.length = 0;
gdjs.GameCode.GDgalaxyObjects1.length = 0;
gdjs.GameCode.GDgalaxyObjects2.length = 0;
gdjs.GameCode.GDgalaxyObjects3.length = 0;
gdjs.GameCode.GDGagarinObjects1.length = 0;
gdjs.GameCode.GDGagarinObjects2.length = 0;
gdjs.GameCode.GDGagarinObjects3.length = 0;
gdjs.GameCode.GDstar1Objects1.length = 0;
gdjs.GameCode.GDstar1Objects2.length = 0;
gdjs.GameCode.GDstar1Objects3.length = 0;
gdjs.GameCode.GDFadeOverlayObjects1.length = 0;
gdjs.GameCode.GDFadeOverlayObjects2.length = 0;
gdjs.GameCode.GDFadeOverlayObjects3.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
