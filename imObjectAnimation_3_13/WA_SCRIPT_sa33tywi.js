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
window.fA20DEA7CBE63489E075DD340DB7B346A = function(callback) { if (!window.WA) { setTimeout(function () { fA20DEA7CBE63489E075DD340DB7B346A(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

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

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_3_13/WA.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/modernizr.custom.43133.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/spin.min.js", "js");

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_3_13/JQ_Textualizer.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_3_13/WA.min.css", "css");            
       }
	   
	   loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_3_13/ani.css", "css");                          
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

            // SCENE 1
            'Oid': 'X9d7ec81_a8050a03309992de75623d173eec76a4',
            'Name': 'SCENE_1',
            'Autostart': 'false',
            'BackgroundColor': '#transparent',
            'SceneEnd': 6300,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',


'OnKeyDown': 3,      
                              'OnKeyDownParam': 'MAIN_TIMELINE',



                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': 'X9d7ece4_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': '<b style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 26.6667px; vertical-align: baseline; background: transparent; color: rgb(180, 162, 118); font-family: Montserrat;\">LA REGIÓN HIDROLÓGICA DEL NAZAS (RH 36)</b>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '22px',
                    'Left': '8px',
                    'Height': '77px',
                    'Width': '691px',
                    'ZIndex': '1','Display': 'block','TextAlign': 'left',
'Bold': 'true',
'LetterSpacing': '1px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Averia Sans Libre',
                'FontSize': '48px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d7edb6_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': '<span style=\"font-family: Montserrat; font-size: 18.6667px; text-align: justify;\">México está dividido en treinta y siete regiones hidrológicas administradas por la Comisión Nacional del Agua (CONAGUA) con el fin de recabar de manera mas eficiente información hidrológica y de calidad del agua.</span>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '108px',
                    'Left': '8px',
                    'Height': '108px',
                    'Width': '658px',
                    'ZIndex': '2','Display': 'block','TextAlign': 'justify',
'LetterSpacing': '2px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Franklin Gothic Medium',
                'FontSize': '14px',
                'LineHeight': '1.4em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d7edfa_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': '<span style=\"font-family: Montserrat; font-size: 18.6667px; text-align: justify;\">La región hidrológica en donde se encuentran el río Nazas y la Comarca Lagunera es la número 36 y tiene una superficie de 92,000 km2 que se extienden desde la Sierra Madre Occidental hasta la laguna de Mayrán. Su superficie municipios (o parte de ellos) pertenecientes a dos estados del norte de la República Méxicana: Coahuila y Durango.</span>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '353px',
                    'Left': '837px',
                    'Height': '231px',
                    'Width': '438px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'justify',
'LetterSpacing': '2px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Montserrat',
                'FontSize': '14px',
                'LineHeight': '1.5em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d7ef7d_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': '<span style=\"font-family: Montserrat; font-size: 18.6667px; text-align: justify;\">Esta cuenca es Endorréica o Cerrada. Tiene su origen en las partes altas de la sierra de Durango, cruza los valles y desemboca en la llanura, para descargar finalmente en la laguna antes mencionada. Antes de la construcción de las presas, la laguna contenía agua casi permanéntemente, sin embargo en la actualidad, su lecho está completamente seco.</span>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '601px',
                    'Left': '8px',
                    'Height': '94px',
                    'Width': '1267px',
                    'ZIndex': '4','Display': 'block','TextAlign': 'justify',
'LetterSpacing': '2px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Averia Sans Libre',
                'FontSize': '14px',
                'LineHeight': '1.5em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d7f06d_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '222px',
                    'Left': '8px',
                    'Height': '349px',
                    'Width': '475px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/img_1399.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                    'Oid': 'X9d7f24f_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '22px',
                    'Left': '708px',
                    'Height': '309px',
                    'Width': '567px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/imgl5188.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                    'Oid': 'X9d7f638_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-127px',
                    'Left': '1065px',
                    'Height': '295px',
                    'Width': '399px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/imgl4984.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9d7f06d_a8050a03309992de75623d173eec76a4',
                            'StartTime':2300,
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
                            'ObjectId':'X9d7f24f_a8050a03309992de75623d173eec76a4',
                            'StartTime':4300,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-360deg'
                        }]
},


			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9d7f638_a8050a03309992de75623d173eec76a4',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '404px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '238px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9d7f06d_a8050a03309992de75623d173eec76a4',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9d7f24f_a8050a03309992de75623d173eec76a4',
                            'StartTime':500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1s',
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
            CUENCA_NAZAS_1.stageHeight = 720;
            CUENCA_NAZAS_1.stageWidth  = 1280;
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
            CUENCA_NAZAS_1.stageInitialScene = 'X9d7ec81_a8050a03309992de75623d173eec76a4';
            CUENCA_NAZAS_1.debug = false;
            CUENCA_NAZAS_1.preloadImages = true;
CUENCA_NAZAS_1.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/img_1399.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/imgl5188.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/imgl4984.jpg'
];CUENCA_NAZAS_1.createWorkspace('imObjectAnimation_3_13_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_3_13_stage');
addLoadEvent(CUENCA_NAZAS_1start);


 })( wajq );