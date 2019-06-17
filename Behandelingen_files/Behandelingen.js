// Created by iWeb 3.0.4 local-build-20160826

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke(),reflection_0:new IWReflection({opacity:0.50,offset:-9.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Behandelingen_files/BehandelingenMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Behandelingen_files','shapeimage_3','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
