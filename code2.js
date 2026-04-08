gdjs.Game_95Level2Code = {};
gdjs.Game_95Level2Code.localVariables = [];
gdjs.Game_95Level2Code.idToCallbackMap = new Map();
gdjs.Game_95Level2Code.GDMascotObjects1= [];
gdjs.Game_95Level2Code.GDMascotObjects2= [];
gdjs.Game_95Level2Code.GDMascotObjects3= [];
gdjs.Game_95Level2Code.GDMeteorObjects1= [];
gdjs.Game_95Level2Code.GDMeteorObjects2= [];
gdjs.Game_95Level2Code.GDMeteorObjects3= [];
gdjs.Game_95Level2Code.GDScoreTextObjects1= [];
gdjs.Game_95Level2Code.GDScoreTextObjects2= [];
gdjs.Game_95Level2Code.GDScoreTextObjects3= [];
gdjs.Game_95Level2Code.GDLivesTextObjects1= [];
gdjs.Game_95Level2Code.GDLivesTextObjects2= [];
gdjs.Game_95Level2Code.GDLivesTextObjects3= [];
gdjs.Game_95Level2Code.GDBonusBallObjects1= [];
gdjs.Game_95Level2Code.GDBonusBallObjects2= [];
gdjs.Game_95Level2Code.GDBonusBallObjects3= [];
gdjs.Game_95Level2Code.GDEarthObjects1= [];
gdjs.Game_95Level2Code.GDEarthObjects2= [];
gdjs.Game_95Level2Code.GDEarthObjects3= [];
gdjs.Game_95Level2Code.GDheartObjects1= [];
gdjs.Game_95Level2Code.GDheartObjects2= [];
gdjs.Game_95Level2Code.GDheartObjects3= [];
gdjs.Game_95Level2Code.GDgalaxyObjects1= [];
gdjs.Game_95Level2Code.GDgalaxyObjects2= [];
gdjs.Game_95Level2Code.GDgalaxyObjects3= [];
gdjs.Game_95Level2Code.GDGagarinObjects1= [];
gdjs.Game_95Level2Code.GDGagarinObjects2= [];
gdjs.Game_95Level2Code.GDGagarinObjects3= [];
gdjs.Game_95Level2Code.GDstar1Objects1= [];
gdjs.Game_95Level2Code.GDstar1Objects2= [];
gdjs.Game_95Level2Code.GDstar1Objects3= [];


gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMeteorObjects2Objects = Hashtable.newFrom({"Meteor": gdjs.Game_95Level2Code.GDMeteorObjects2});
gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMeteorObjects2Objects = Hashtable.newFrom({"Meteor": gdjs.Game_95Level2Code.GDMeteorObjects2});
gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMeteorObjects2Objects = Hashtable.newFrom({"Meteor": gdjs.Game_95Level2Code.GDMeteorObjects2});
gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMeteorObjects1Objects = Hashtable.newFrom({"Meteor": gdjs.Game_95Level2Code.GDMeteorObjects1});
gdjs.Game_95Level2Code.eventsList0 = function(runtimeScene) {

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
gdjs.Game_95Level2Code.GDMeteorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMeteorObjects2Objects, 42, 129, "");
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(3)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].getBehavior("Resizable").setSize(240, 195);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 4));
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomInRange(0, 1) * 2 - 1);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setAngle(0);
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
gdjs.Game_95Level2Code.GDMeteorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMeteorObjects2Objects, 1860, 129, "");
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(3)).setNumber(2);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].getBehavior("Resizable").setSize(240, 195);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 4));
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomInRange(0, 1) * 2 - 1);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setAngle(0);
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
gdjs.Game_95Level2Code.GDMeteorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMeteorObjects2Objects, 42, 933, "");
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].getBehavior("Resizable").setSize(240, 195);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(3)).setNumber(3);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 4));
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomInRange(0, 1) * 2 - 1);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setAngle(0);
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
gdjs.Game_95Level2Code.GDMeteorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMeteorObjects1Objects, 1860, 933, "");
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].getBehavior("Resizable").setSize(240, 195);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(3)).setNumber(4);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 4));
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomInRange(0, 1) * 2 - 1);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].setAngle(0);
}
}
}

}


};gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMascotObjects1Objects = Hashtable.newFrom({"Mascot": gdjs.Game_95Level2Code.GDMascotObjects1});
gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMeteorObjects1Objects = Hashtable.newFrom({"Meteor": gdjs.Game_95Level2Code.GDMeteorObjects1});
gdjs.Game_95Level2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_95Level2Code.GDMeteorObjects1, gdjs.Game_95Level2Code.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects2[k] = gdjs.Game_95Level2Code.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].getBehavior("Animation").setAnimationName("destroy_1");
}
}
}

}


{

gdjs.copyArray(gdjs.Game_95Level2Code.GDMeteorObjects1, gdjs.Game_95Level2Code.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects2[k] = gdjs.Game_95Level2Code.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].getBehavior("Animation").setAnimationName("destroy_2");
}
}
}

}


{

gdjs.copyArray(gdjs.Game_95Level2Code.GDMeteorObjects1, gdjs.Game_95Level2Code.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects2[k] = gdjs.Game_95Level2Code.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].getBehavior("Animation").setAnimationName("destroy_3");
}
}
}

}


{

gdjs.copyArray(gdjs.Game_95Level2Code.GDMeteorObjects1, gdjs.Game_95Level2Code.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects2[k] = gdjs.Game_95Level2Code.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].getBehavior("Animation").setAnimationName("destroy_4");
}
}
}

}


{

gdjs.copyArray(gdjs.Game_95Level2Code.GDMeteorObjects1, gdjs.Game_95Level2Code.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(3)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects2[k] = gdjs.Game_95Level2Code.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_95Level2Code.GDMascotObjects1, gdjs.Game_95Level2Code.GDMascotObjects2);

/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setX((( gdjs.Game_95Level2Code.GDMascotObjects2.length === 0 ) ? 0 :gdjs.Game_95Level2Code.GDMascotObjects2[0].getPointX("")) - 150);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setY((( gdjs.Game_95Level2Code.GDMascotObjects2.length === 0 ) ? 0 :gdjs.Game_95Level2Code.GDMascotObjects2[0].getPointY("")) - 90);
}
}
}

}


{

gdjs.copyArray(gdjs.Game_95Level2Code.GDMeteorObjects1, gdjs.Game_95Level2Code.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(3)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects2[k] = gdjs.Game_95Level2Code.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_95Level2Code.GDMascotObjects1, gdjs.Game_95Level2Code.GDMascotObjects2);

/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setX((( gdjs.Game_95Level2Code.GDMascotObjects2.length === 0 ) ? 0 :gdjs.Game_95Level2Code.GDMascotObjects2[0].getPointX("")) + 540);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setY(90);
}
}
}

}


{

gdjs.copyArray(gdjs.Game_95Level2Code.GDMeteorObjects1, gdjs.Game_95Level2Code.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(3)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects2[k] = gdjs.Game_95Level2Code.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_95Level2Code.GDMascotObjects1, gdjs.Game_95Level2Code.GDMascotObjects2);

/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setX((( gdjs.Game_95Level2Code.GDMascotObjects2.length === 0 ) ? 0 :gdjs.Game_95Level2Code.GDMascotObjects2[0].getPointX("")) - 150);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setY((( gdjs.Game_95Level2Code.GDMascotObjects2.length === 0 ) ? 0 :gdjs.Game_95Level2Code.GDMascotObjects2[0].getPointY("")) + 240);
}
}
}

}


{

gdjs.copyArray(gdjs.Game_95Level2Code.GDMeteorObjects1, gdjs.Game_95Level2Code.GDMeteorObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects2.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects2[i].getVariables().getFromIndex(3)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects2[k] = gdjs.Game_95Level2Code.GDMeteorObjects2[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_95Level2Code.GDMascotObjects1, gdjs.Game_95Level2Code.GDMascotObjects2);

/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects2 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setX((( gdjs.Game_95Level2Code.GDMascotObjects2.length === 0 ) ? 0 :gdjs.Game_95Level2Code.GDMascotObjects2[0].getPointX("")) + 540);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects2.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects2[i].setY((( gdjs.Game_95Level2Code.GDMascotObjects2.length === 0 ) ? 0 :gdjs.Game_95Level2Code.GDMascotObjects2[0].getPointY("")) + 240);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Game_95Level2Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Game_95Level2Code.GDstar1Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDstar1Objects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDstar1Objects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDstar1Objects1[k] = gdjs.Game_95Level2Code.GDstar1Objects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDstar1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDstar1Objects1 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDstar1Objects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDstar1Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


};gdjs.Game_95Level2Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LivesText"), gdjs.Game_95Level2Code.GDLivesTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.Game_95Level2Code.GDstar1Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDLivesTextObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDLivesTextObjects1[i].getBehavior("Text").setText("x" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDstar1Objects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDstar1Objects1[i].returnVariable(gdjs.Game_95Level2Code.GDstar1Objects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(2, 8));
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDstar1Objects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDstar1Objects1[i].resetTimer("BlinkTimer");
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDstar1Objects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDstar1Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpawnTimer") > Math.max(0.7, 1.8 - runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() * 0.008);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.Game_95Level2Code.GDMascotObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 4));
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}

{ //Subevents
gdjs.Game_95Level2Code.eventsList0(runtimeScene);} //End of subevents
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
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds/2LVLitog.ogg", 0, true, 50 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)), 1);
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
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.Game_95Level2Code.GDMascotObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ReturnTimer");
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Tween").addObjectPositionTween2("move", 240, 240, "easeOutCubic", 0.08, false);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("fly_left");
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
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.Game_95Level2Code.GDMascotObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ReturnTimer");
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Tween").addObjectPositionTween2("move", 1164, 240, "easeOutCubic", 0.08, false);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("fly");
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
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.Game_95Level2Code.GDMascotObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ReturnTimer");
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Tween").addObjectPositionTween2("move", 240, 579, "easeOutCubic", 0.08, false);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("fly_left");
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].setAngle(-(45));
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
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.Game_95Level2Code.GDMascotObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ReturnTimer");
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Tween").addObjectPositionTween2("move", 1164, 579, "easeOutCubic", 0.08, false);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("fly");
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].setAngle(45);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ReturnTimer") >= 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.Game_95Level2Code.GDMascotObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(false);
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Tween").addObjectPositionTween2("moveBack", 831, 297, "easeInOutQuad", 0.06, false);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.Game_95Level2Code.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].setX(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getX() + (Math.cos(Math.atan2(180 - (gdjs.Game_95Level2Code.GDMeteorObjects1[i].getPointY("")), 320 - (gdjs.Game_95Level2Code.GDMeteorObjects1[i].getPointX("")))) * 300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].setY(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getY() + (Math.sin(Math.atan2(180 - (gdjs.Game_95Level2Code.GDMeteorObjects1[i].getPointY("")), 320 - (gdjs.Game_95Level2Code.GDMeteorObjects1[i].getPointX("")))) * 300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].setAngle(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getAngle() + (3 * (gdjs.RuntimeObject.getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(2)))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.Game_95Level2Code.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getX() >= 867 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getY() >= 498 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getX() <= 1047 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getY() <= 576 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LivesText"), gdjs.Game_95Level2Code.GDLivesTextObjects1);
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDLivesTextObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDLivesTextObjects1[i].getBehavior("Text").setText(gdjs.Game_95Level2Code.GDLivesTextObjects1[i].getBehavior("Text").getText() + ("x" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BlinkTimer");
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.Game_95Level2Code.GDMascotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.Game_95Level2Code.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMascotObjects1Objects, gdjs.Game_95Level2Code.mapOfGDgdjs_9546Game_959595Level2Code_9546GDMeteorObjects1Objects, 300, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Game_95Level2Code.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].returnVariable(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDScoreTextObjects1[i].getBehavior("Text").setText("Очки:" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "sounds/destroy1.ogg", 1, false, 15 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)), 1);
}

{ //Subevents
gdjs.Game_95Level2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BlinkTimer") <= 0.75;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.Game_95Level2Code.GDMascotObjects1);
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Opacity").setOpacity(50 + 205 * Math.abs(Math.sin(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "BlinkTimer") * 220)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BlinkTimer") > 0.75;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mascot"), gdjs.Game_95Level2Code.GDMascotObjects1);
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMascotObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMascotObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > 400);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene3", false);
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

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.Game_95Level2Code.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].getBehavior("Animation").setAnimationName("fly_1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.Game_95Level2Code.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].getBehavior("Animation").setAnimationName("fly_2");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.Game_95Level2Code.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].getBehavior("Animation").setAnimationName("fly_3");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.Game_95Level2Code.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].getBehavior("Animation").setAnimationName("fly_4");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor"), gdjs.Game_95Level2Code.GDMeteorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariableNumber(gdjs.Game_95Level2Code.GDMeteorObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDMeteorObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDMeteorObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDMeteorObjects1[k] = gdjs.Game_95Level2Code.GDMeteorObjects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDMeteorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDMeteorObjects1 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDMeteorObjects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDMeteorObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.Game_95Level2Code.GDstar1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Level2Code.GDstar1Objects1.length;i<l;++i) {
    if ( gdjs.Game_95Level2Code.GDstar1Objects1[i].getTimerElapsedTimeInSecondsOrNaN("BlinkTimer") > (gdjs.RuntimeObject.getVariableNumber(gdjs.Game_95Level2Code.GDstar1Objects1[i].getVariables().getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Level2Code.GDstar1Objects1[k] = gdjs.Game_95Level2Code.GDstar1Objects1[i];
        ++k;
    }
}
gdjs.Game_95Level2Code.GDstar1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_95Level2Code.GDstar1Objects1 */
{for(var i = 0, len = gdjs.Game_95Level2Code.GDstar1Objects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDstar1Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 3));
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDstar1Objects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDstar1Objects1[i].returnVariable(gdjs.Game_95Level2Code.GDstar1Objects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(2, 8));
}
}
{for(var i = 0, len = gdjs.Game_95Level2Code.GDstar1Objects1.length ;i < len;++i) {
    gdjs.Game_95Level2Code.GDstar1Objects1[i].resetTimer("BlinkTimer");
}
}

{ //Subevents
gdjs.Game_95Level2Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_95Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95Level2Code.GDMascotObjects1.length = 0;
gdjs.Game_95Level2Code.GDMascotObjects2.length = 0;
gdjs.Game_95Level2Code.GDMascotObjects3.length = 0;
gdjs.Game_95Level2Code.GDMeteorObjects1.length = 0;
gdjs.Game_95Level2Code.GDMeteorObjects2.length = 0;
gdjs.Game_95Level2Code.GDMeteorObjects3.length = 0;
gdjs.Game_95Level2Code.GDScoreTextObjects1.length = 0;
gdjs.Game_95Level2Code.GDScoreTextObjects2.length = 0;
gdjs.Game_95Level2Code.GDScoreTextObjects3.length = 0;
gdjs.Game_95Level2Code.GDLivesTextObjects1.length = 0;
gdjs.Game_95Level2Code.GDLivesTextObjects2.length = 0;
gdjs.Game_95Level2Code.GDLivesTextObjects3.length = 0;
gdjs.Game_95Level2Code.GDBonusBallObjects1.length = 0;
gdjs.Game_95Level2Code.GDBonusBallObjects2.length = 0;
gdjs.Game_95Level2Code.GDBonusBallObjects3.length = 0;
gdjs.Game_95Level2Code.GDEarthObjects1.length = 0;
gdjs.Game_95Level2Code.GDEarthObjects2.length = 0;
gdjs.Game_95Level2Code.GDEarthObjects3.length = 0;
gdjs.Game_95Level2Code.GDheartObjects1.length = 0;
gdjs.Game_95Level2Code.GDheartObjects2.length = 0;
gdjs.Game_95Level2Code.GDheartObjects3.length = 0;
gdjs.Game_95Level2Code.GDgalaxyObjects1.length = 0;
gdjs.Game_95Level2Code.GDgalaxyObjects2.length = 0;
gdjs.Game_95Level2Code.GDgalaxyObjects3.length = 0;
gdjs.Game_95Level2Code.GDGagarinObjects1.length = 0;
gdjs.Game_95Level2Code.GDGagarinObjects2.length = 0;
gdjs.Game_95Level2Code.GDGagarinObjects3.length = 0;
gdjs.Game_95Level2Code.GDstar1Objects1.length = 0;
gdjs.Game_95Level2Code.GDstar1Objects2.length = 0;
gdjs.Game_95Level2Code.GDstar1Objects3.length = 0;

gdjs.Game_95Level2Code.eventsList3(runtimeScene);
gdjs.Game_95Level2Code.GDMascotObjects1.length = 0;
gdjs.Game_95Level2Code.GDMascotObjects2.length = 0;
gdjs.Game_95Level2Code.GDMascotObjects3.length = 0;
gdjs.Game_95Level2Code.GDMeteorObjects1.length = 0;
gdjs.Game_95Level2Code.GDMeteorObjects2.length = 0;
gdjs.Game_95Level2Code.GDMeteorObjects3.length = 0;
gdjs.Game_95Level2Code.GDScoreTextObjects1.length = 0;
gdjs.Game_95Level2Code.GDScoreTextObjects2.length = 0;
gdjs.Game_95Level2Code.GDScoreTextObjects3.length = 0;
gdjs.Game_95Level2Code.GDLivesTextObjects1.length = 0;
gdjs.Game_95Level2Code.GDLivesTextObjects2.length = 0;
gdjs.Game_95Level2Code.GDLivesTextObjects3.length = 0;
gdjs.Game_95Level2Code.GDBonusBallObjects1.length = 0;
gdjs.Game_95Level2Code.GDBonusBallObjects2.length = 0;
gdjs.Game_95Level2Code.GDBonusBallObjects3.length = 0;
gdjs.Game_95Level2Code.GDEarthObjects1.length = 0;
gdjs.Game_95Level2Code.GDEarthObjects2.length = 0;
gdjs.Game_95Level2Code.GDEarthObjects3.length = 0;
gdjs.Game_95Level2Code.GDheartObjects1.length = 0;
gdjs.Game_95Level2Code.GDheartObjects2.length = 0;
gdjs.Game_95Level2Code.GDheartObjects3.length = 0;
gdjs.Game_95Level2Code.GDgalaxyObjects1.length = 0;
gdjs.Game_95Level2Code.GDgalaxyObjects2.length = 0;
gdjs.Game_95Level2Code.GDgalaxyObjects3.length = 0;
gdjs.Game_95Level2Code.GDGagarinObjects1.length = 0;
gdjs.Game_95Level2Code.GDGagarinObjects2.length = 0;
gdjs.Game_95Level2Code.GDGagarinObjects3.length = 0;
gdjs.Game_95Level2Code.GDstar1Objects1.length = 0;
gdjs.Game_95Level2Code.GDstar1Objects2.length = 0;
gdjs.Game_95Level2Code.GDstar1Objects3.length = 0;


return;

}

gdjs['Game_95Level2Code'] = gdjs.Game_95Level2Code;
