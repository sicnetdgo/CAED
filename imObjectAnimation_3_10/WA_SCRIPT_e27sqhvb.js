(function ( $ ) { 

function loadjscssfile(filename, filetype) {
    
    if (filetype=="js") { 

        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css") { 

        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }

    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}



var functs = Array();
window.f539F5F9D2F23D4DD0C946ADB477C89EC = function(callback) { if (!window.WA) { setTimeout(function () { f539F5F9D2F23D4DD0C946ADB477C89EC(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

function addLoadEvent(func) {
	functs.push(func);
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
       window.onload = func
    } else {
       window.onload = function() {
           if (oldonload) {
                  oldonload()
          }
          func()
       }
   }
} 


function loadResources(thisId) {

   var firstWaDiv = $('.wascript:first');
       
       var firstId = $(firstWaDiv).attr('id');
       
       if(firstId == thisId) {

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_3_10/WA.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/modernizr.custom.43133.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/spin.min.js", "js");

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_3_10/JQ_Textualizer.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_3_10/WA.min.css", "css");            
       }
	   
	   loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_3_10/ani.css", "css");                          
}
	// Global variables




function CUENCA_NAZAS_1start() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var CUENCA_NAZAS_1 = new WA();
CUENCA_NAZAS_1.custom = {
}

CUENCA_NAZAS_1.stage = [{            

            // SCENE 2
            'Oid': 'X9d871f4_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_2',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 100,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',






                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X9d8722d_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'LA REGI??N HIDROL??GICA DEL NAZAS (RH 36)'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '265px',
                    'Left': '28px',
                    'Height': '148px',
                    'Width': '969px',
                    'ZIndex': '1','Display': 'block','TextAlign': 'center',

                'TextColor': '#B8860B',
                'Opacity': '1',
                'FontFamily': 'Franklin Gothic Medium',
                'FontSize': '72px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '5px',
                            'Color':'#2E2E2E',
                            'OffsetX' : '3px',
                            'OffsetY' : '3px'
                        }],

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9d820bc_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'fade',
'OnMouseOverTransitionSpeed' : '1000',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
},

{            

            // SCENE 1
            'Oid': 'X9d820bc_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 5100,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',






                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X9d820be_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'LA REGI??N HIDROL??GICA DEL NAZAS (RH 36)'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '12px',
                    'Left': '9px',
                    'Height': '92px',
                    'Width': '621px',
                    'ZIndex': '1','Display': 'block','TextAlign': 'left',
'Bold': 'true',
'LetterSpacing': '1px',

                'TextColor': '#DAA520',
                'Opacity': '1',
                'FontFamily': 'Verdana',
                'FontSize': '38px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d820fe_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'M??xico est?? dividido en treinta y siete regiones hidrol??gicas administradas por la Comisi??n Nacional del Agua (CONAGUA) con el fin de recabar de manera mas eficiente informaci??n hidrol??gica y de calidad del agua.'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '124px',
                    'Left': '9px',
                    'Height': '124px',
                    'Width': '465px',
                    'ZIndex': '2','Display': 'block','TextAlign': 'justify',
'LetterSpacing': '2px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '16px',
                'LineHeight': '1.5em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d8213e_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'La regi??n hidrol??gica en donde se encuentran el r??o Nazas y la Comarca Lagunera es la n??mero 36 y tiene una superficie de 92,000 km2 que se extienden desde la Sierra Madre Occidental hasta la laguna de Mayr??n. Su superficie municipios (o parte de ellos) pertenecientes a dos estados del norte de la Rep??blica M??xicana: Coahuila y Durango.'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '307px',
                    'Left': '726px',
                    'Height': '317px',
                    'Width': '280px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'justify',
'LetterSpacing': '2px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '16px',
                'LineHeight': '1.5em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d821a9_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Esta cuenca es Endorr??ica o Cerrada. Tiene su origen en las partes altas de la sierra de Durango, cruza los valles y desemboca en la llanura, para  descargar finalmente en la laguna antes mencionada. Antes de la construcci??n de las presas, la laguna conten??a agua casi perman??ntemente, sin embargo en la actualidad, su lecho est?? completamente seco.'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '642px',
                    'Left': '9px',
                    'Height': '120px',
                    'Width': '1004px',
                    'ZIndex': '4','Display': 'block','TextAlign': 'justify',
'LetterSpacing': '2px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '18px',
                'LineHeight': '1.5em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X9d871f4_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'fade',
'OnMouseOutTransitionSpeed' : '1000',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d821fa_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '284px',
                    'Left': '9px',
                    'Height': '328px',
                    'Width': '445px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/img_1400.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '3px',
                                'OffsetY':'3px',
                                'BlurRadius' : '3px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',


'OnMouseOver' : 1,
'OnMouseOverParam' : '',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d8228c_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '12px',
                    'Left': '619px',
                    'Height': '256px',
                    'Width': '387px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/img_1550.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '3px',
                                'OffsetY':'3px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d8231c_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '5px',
                    'Left': '7px',
                    'Height': '260px',
                    'Width': '366px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/img_1137.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '3px',
                                'OffsetY':'3px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    {
                            'ObjectId':'X9d821fa_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':500,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateX',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '360deg'
                        }]
},
{
                            'ObjectId':'X9d8228c_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '360deg'
                        }]
},


			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9d821fa_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9d8228c_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9d8231c_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':3100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '338px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '233px'
                        }]
},
{
                            'ObjectId':'X9d8231c_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':3100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
}];

            CUENCA_NAZAS_1.init();
            CUENCA_NAZAS_1.stageHeight = 768;
            CUENCA_NAZAS_1.stageWidth  = 1024;
            CUENCA_NAZAS_1.t  = '493007611211953358459314896194049547099';
            CUENCA_NAZAS_1.stageInitialTransition = 'instant';
            CUENCA_NAZAS_1.stageInitialTransitionDirection = 'left';
            CUENCA_NAZAS_1.stageInitialTransitionSpeed = 1000;

            CUENCA_NAZAS_1.responsiveStage = true;
            CUENCA_NAZAS_1.responsiveStageKeepRatio = false;
            CUENCA_NAZAS_1.scaleX = 1;
            CUENCA_NAZAS_1.scaleY = 1;
            CUENCA_NAZAS_1.scale = 1;

            CUENCA_NAZAS_1.showBrowserCompatibilityCheck = false;
                CUENCA_NAZAS_1.loaderType = 1;
                CUENCA_NAZAS_1.loaderBackgroundColor = '#fff';
                CUENCA_NAZAS_1.loaderForegroundColor = '#000';
            CUENCA_NAZAS_1.stageInitialScene = 'X9d871f4_7dabb5a44eddac01442fd302cffb0177';
            CUENCA_NAZAS_1.debug = false;
            CUENCA_NAZAS_1.preloadImages = true;
CUENCA_NAZAS_1.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/img_1400.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/img_1550.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/img_1137.jpg'
];CUENCA_NAZAS_1.createWorkspace('imObjectAnimation_3_10_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_3_10_stage');
addLoadEvent(CUENCA_NAZAS_1start);


 })( wajq );