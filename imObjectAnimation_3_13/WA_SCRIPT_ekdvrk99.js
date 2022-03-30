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
            'SceneEnd': 3200,
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
                    'Oid': 'X9d84368_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': 'LA REGIÓN HIDROLÓGICA DEL NAZAS (RH 36)'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '296px',
                    'Left': '216px',
                    'Height': '100px',
                    'Width': '900px',
                    'ZIndex': '1','Display': 'block','TextAlign': 'center',
'Bold': 'true',

                'TextColor': '#CD853F',
                'Opacity': '0',
                'FontFamily': 'Microsoft Sans Serif',
                'FontSize': '44px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9d820bc_a8050a03309992de75623d173eec76a4',
'OnMouseOverTransition' : 'fade',
'OnMouseOverTransitionSpeed' : '1000',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
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
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':1000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '30px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '500px'
                        }]
},
{
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':1300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '70px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '350px'
                        }]
},
{
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':1600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '109px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '500px'
                        }]
},
{
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':1900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '142px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '390px'
                        }]
},
{
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':2100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '173px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '500px'
                        }]
},
{
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':2300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '194px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '430px'
                        }]
},
{
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':2500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '214px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '500px'
                        }]
},
{
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':2700,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '228px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '469px'
                        }]
},
{
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':2900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '242px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '500px'
                        }]
},
{
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':3000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '252px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '484px'
                        }]
},
{
                            'ObjectId':'X9d84368_a8050a03309992de75623d173eec76a4',
                            'StartTime':3100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '262px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '500px'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
},

{            

            // SCENE 2
            'Oid': 'X9d820bc_a8050a03309992de75623d173eec76a4',
            'Name': 'SCENE_2',
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
                    'Oid': 'X9d820be_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': 'LA REGIÓN HIDROLÓGICA DEL NAZAS (RH 36)'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '12px',
                    'Left': '9px',
                    'Height': '94px',
                    'Width': '674px',
                    'ZIndex': '1','Display': 'block','TextAlign': 'left',
'Bold': 'true',
'LetterSpacing': '1px',

                'TextColor': '#6B8E23',
                'Opacity': '1',
                'FontFamily': 'Microsoft Sans Serif',
                'FontSize': '44px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d820fe_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': 'México está dividido en treinta y siete regiones hidrológicas administradas por la Comisión Nacional del Agua (CONAGUA) con el fin de recabar de manera mas eficiente información hidrológica y de calidad del agua.'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '124px',
                    'Left': '13px',
                    'Height': '107px',
                    'Width': '589px',
                    'ZIndex': '2','Display': 'block','TextAlign': 'justify',
'LetterSpacing': '1px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Montserrat',
                'FontSize': '16px',
                'LineHeight': '1.4em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d8213e_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': 'La región hidrológica en donde se encuentran el río Nazas y la Comarca Lagunera es la número 36 y tiene una superficie de 92,000 km2 que se extienden desde la Sierra Madre Occidental hasta la laguna de Mayrán. Su superficie municipios (o parte de ellos) pertenecientes a dos estados del norte de la República Méxicana: Coahuila y Durango.'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '327px',
                    'Left': '915px',
                    'Height': '249px',
                    'Width': '349px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'justify',
'LetterSpacing': '1px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Montserrat',
                'FontSize': '16px',
                'LineHeight': '1.5em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d821a9_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': 'Esta cuenca es Endorréica o Cerrada. Tiene su origen en las partes altas de la sierra de Durango, cruza los valles y desemboca en la llanura, para  descargar finalmente en la laguna antes mencionada. Antes de la construcción de las presas, la laguna contenía agua casi permanéntemente, sin embargo en la actualidad, su lecho está completamente seco.'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '624px',
                    'Left': '13px',
                    'Height': '88px',
                    'Width': '1251px',
                    'ZIndex': '4','Display': 'block','TextAlign': 'justify',
'LetterSpacing': '1px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Montserrat',
                'FontSize': '16px',
                'LineHeight': '1.5em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X9d7ec81_a8050a03309992de75623d173eec76a4',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d821fa_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '258px',
                    'Left': '13px',
                    'Height': '338px',
                    'Width': '514px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/img_1400.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d8228c_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '790px',
                    'Height': '286px',
                    'Width': '474px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/img_1550.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                    'Oid': 'X9d8231c_a8050a03309992de75623d173eec76a4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-61px',
                    'Left': '-103px',
                    'Height': '312px',
                    'Width': '424px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/img_1137.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9d821fa_a8050a03309992de75623d173eec76a4',
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
                            'ObjectId':'X9d8228c_a8050a03309992de75623d173eec76a4',
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
                            'ObjectId':'X9d821fa_a8050a03309992de75623d173eec76a4',
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
                            'ObjectId':'X9d8228c_a8050a03309992de75623d173eec76a4',
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
                            'ObjectId':'X9d8231c_a8050a03309992de75623d173eec76a4',
                            'StartTime':3100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '446px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '224px'
                        }]
},
{
                            'ObjectId':'X9d8231c_a8050a03309992de75623d173eec76a4',
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
            CUENCA_NAZAS_1.stageHeight = 720;
            CUENCA_NAZAS_1.stageWidth  = 1280;
            CUENCA_NAZAS_1.t  = '493007611211953358459314896194049547099';
            CUENCA_NAZAS_1.stageInitialTransition = 'instant';
            CUENCA_NAZAS_1.stageInitialTransitionDirection = 'left';
            CUENCA_NAZAS_1.stageInitialTransitionSpeed = 1000;

            CUENCA_NAZAS_1.responsiveStage = true;
            CUENCA_NAZAS_1.responsiveStageKeepRatio = true;
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
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/img_1400.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/img_1550.jpg',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_13/img_1137.jpg'
];CUENCA_NAZAS_1.createWorkspace('imObjectAnimation_3_13_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_3_13_stage');
addLoadEvent(CUENCA_NAZAS_1start);


 })( wajq );