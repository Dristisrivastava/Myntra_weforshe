gdjs.initialdress1Code = {};
gdjs.initialdress1Code.localVariables = [];
gdjs.initialdress1Code.GDbackgroundObjects1= [];
gdjs.initialdress1Code.GDbackgroundObjects2= [];
gdjs.initialdress1Code.GDNewTiledSpriteObjects1= [];
gdjs.initialdress1Code.GDNewTiledSpriteObjects2= [];
gdjs.initialdress1Code.GDdollObjects1= [];
gdjs.initialdress1Code.GDdollObjects2= [];
gdjs.initialdress1Code.GDNewSpriteObjects1= [];
gdjs.initialdress1Code.GDNewSpriteObjects2= [];
gdjs.initialdress1Code.GDNewSprite2Objects1= [];
gdjs.initialdress1Code.GDNewSprite2Objects2= [];
gdjs.initialdress1Code.GDNewSprite3Objects1= [];
gdjs.initialdress1Code.GDNewSprite3Objects2= [];
gdjs.initialdress1Code.GDNewSprite4Objects1= [];
gdjs.initialdress1Code.GDNewSprite4Objects2= [];
gdjs.initialdress1Code.GDNewSprite5Objects1= [];
gdjs.initialdress1Code.GDNewSprite5Objects2= [];
gdjs.initialdress1Code.GDNewTextObjects1= [];
gdjs.initialdress1Code.GDNewTextObjects2= [];
gdjs.initialdress1Code.GDNewText2Objects1= [];
gdjs.initialdress1Code.GDNewText2Objects2= [];
gdjs.initialdress1Code.GDNewSprite6Objects1= [];
gdjs.initialdress1Code.GDNewSprite6Objects2= [];


gdjs.initialdress1Code.mapOfGDgdjs_9546initialdress1Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.initialdress1Code.GDNewSpriteObjects1});
gdjs.initialdress1Code.mapOfGDgdjs_9546initialdress1Code_9546GDdollObjects1Objects = Hashtable.newFrom({"doll": gdjs.initialdress1Code.GDdollObjects1});
gdjs.initialdress1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.initialdress1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("doll"), gdjs.initialdress1Code.GDdollObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.initialdress1Code.mapOfGDgdjs_9546initialdress1Code_9546GDNewSpriteObjects1Objects, gdjs.initialdress1Code.mapOfGDgdjs_9546initialdress1Code_9546GDdollObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.initialdress1Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.initialdress1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.initialdress1Code.GDNewSpriteObjects1[i].setPosition(50,172);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.initialdress1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.initialdress1Code.GDbackgroundObjects1.length = 0;
gdjs.initialdress1Code.GDbackgroundObjects2.length = 0;
gdjs.initialdress1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.initialdress1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.initialdress1Code.GDdollObjects1.length = 0;
gdjs.initialdress1Code.GDdollObjects2.length = 0;
gdjs.initialdress1Code.GDNewSpriteObjects1.length = 0;
gdjs.initialdress1Code.GDNewSpriteObjects2.length = 0;
gdjs.initialdress1Code.GDNewSprite2Objects1.length = 0;
gdjs.initialdress1Code.GDNewSprite2Objects2.length = 0;
gdjs.initialdress1Code.GDNewSprite3Objects1.length = 0;
gdjs.initialdress1Code.GDNewSprite3Objects2.length = 0;
gdjs.initialdress1Code.GDNewSprite4Objects1.length = 0;
gdjs.initialdress1Code.GDNewSprite4Objects2.length = 0;
gdjs.initialdress1Code.GDNewSprite5Objects1.length = 0;
gdjs.initialdress1Code.GDNewSprite5Objects2.length = 0;
gdjs.initialdress1Code.GDNewTextObjects1.length = 0;
gdjs.initialdress1Code.GDNewTextObjects2.length = 0;
gdjs.initialdress1Code.GDNewText2Objects1.length = 0;
gdjs.initialdress1Code.GDNewText2Objects2.length = 0;
gdjs.initialdress1Code.GDNewSprite6Objects1.length = 0;
gdjs.initialdress1Code.GDNewSprite6Objects2.length = 0;

gdjs.initialdress1Code.eventsList0(runtimeScene);

return;

}

gdjs['initialdress1Code'] = gdjs.initialdress1Code;
