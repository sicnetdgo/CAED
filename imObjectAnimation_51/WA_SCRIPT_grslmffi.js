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
window.fFC868B5FEFE1721FEB31B21F97F1A1C3 = function(callback) { if (!window.WA) { setTimeout(function () { fFC868B5FEFE1721FEB31B21F97F1A1C3(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

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

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_51/WA.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/modernizr.custom.43133.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/spin.min.js", "js");

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_51/JQ_Textualizer.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_51/WA.min.css", "css");            
       }
	   
	   loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_51/ani.css", "css");                          
}
	// Global variables




function CAED_NUESTRA_PASIONstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var CAED_NUESTRA_PASION = new WA();
CAED_NUESTRA_PASION.custom = {
}

CAED_NUESTRA_PASION.stage = [{            

            // SCENE 1
            'Oid': 'Xa18c997_586933ee9464f55fee03aaa33b11649c',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#1A3D53',
            'SceneEnd': 17700,
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
                    'Oid': 'Xa18ca39_586933ee9464f55fee03aaa33b11649c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '-605px',
                    'Height': '720px',
                    'Width': '480px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_51/imgl5566.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa18ccff_586933ee9464f55fee03aaa33b11649c',                
                    'Type': 'box',
                    'InnerHTML': 'Nuestra Pasión'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '26px',
                    'Left': '40px',
                    'Height': '61px',
                    'Width': '469px',
                    'ZIndex': '2','Display': 'block','TextAlign': 'left',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '52px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '4px',
                            'OffsetY' : '3px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa18cddb_586933ee9464f55fee03aaa33b11649c',                
                    'Type': 'box',
                    'InnerHTML': 'El promover la cultura del buen uso del agua con acciones educativas, culturales y de difusión nos dan la oportunidad de dar a conocer la importancia del agua no solo para la salud humana, sino generar conciencia de su importancia en su cuidado para las futuras generaciones.'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '160px',
                    'Left': '80px',
                    'Height': '245px',
                    'Width': '571px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'justify',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '20px',
                'LineHeight': '2em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa18d3ea_586933ee9464f55fee03aaa33b11649c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '-605px',
                    'Height': '720px',
                    'Width': '480px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_51/imgl5637.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa18d5e9_586933ee9464f55fee03aaa33b11649c',                
                    'Type': 'box',
                    'InnerHTML': 'En el estado de Durango creamos 49 espacios de cultura del agua, en ellos informamos y capacitamos a toda la sociedad involucrada en el buen uso de agua, ya sean en nuestros espacios, escuelas, empresas o comunidades.'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '438px',
                    'Left': '80px',
                    'Height': '151px',
                    'Width': '569px',
                    'ZIndex': '5','Display': 'block','TextAlign': 'justify',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '20px',
                'LineHeight': '2em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa18d7e0_586933ee9464f55fee03aaa33b11649c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '-605px',
                    'Height': '720px',
                    'Width': '480px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_51/imgl5775.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa18e821_586933ee9464f55fee03aaa33b11649c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '45px',
                    'Left': '814px',
                    'Height': '630px',
                    'Width': '345px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_51/gota_agua_nuestra_pasion.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa18ca39_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '746px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        }]
},
{
                            'ObjectId':'Xa18ccff_586933ee9464f55fee03aaa33b11649c',
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
                            'ObjectId':'Xa18cddb_586933ee9464f55fee03aaa33b11649c',
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
{
                            'ObjectId':'Xa18ca39_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':1100,
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
                            'ObjectId':'Xa18d3ea_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':5000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '746px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        }]
},
{
                            'ObjectId':'Xa18d3ea_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':6100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.97'
                        }]
},
{
                            'ObjectId':'Xa18d5e9_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':6100,
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
                            'ObjectId':'Xa18d7e0_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':11000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '746px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
                        }]
},
{
                            'ObjectId':'Xa18d7e0_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':12100,
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
                            'ObjectId':'Xa18ca39_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':13500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'Xa18d3ea_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':13500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'Xa18d7e0_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':16100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'Xa18e821_586933ee9464f55fee03aaa33b11649c',
                            'StartTime':16700,
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

            CAED_NUESTRA_PASION.init();
            CAED_NUESTRA_PASION.stageHeight = 720;
            CAED_NUESTRA_PASION.stageWidth  = 1280;
            CAED_NUESTRA_PASION.t  = '423003011251459419865563586523700950525';
            CAED_NUESTRA_PASION.stageInitialTransition = 'instant';
            CAED_NUESTRA_PASION.stageInitialTransitionDirection = 'left';
            CAED_NUESTRA_PASION.stageInitialTransitionSpeed = 1000;

            CAED_NUESTRA_PASION.responsiveStage = true;
            CAED_NUESTRA_PASION.responsiveStageKeepRatio = true;
            CAED_NUESTRA_PASION.scaleX = 1;
            CAED_NUESTRA_PASION.scaleY = 1;
            CAED_NUESTRA_PASION.scale = 1;

            CAED_NUESTRA_PASION.showBrowserCompatibilityCheck = false;
                CAED_NUESTRA_PASION.loaderType = 1;
                CAED_NUESTRA_PASION.loaderBackgroundColor = '#000';
                CAED_NUESTRA_PASION.loaderForegroundColor = '#fff';
            CAED_NUESTRA_PASION.stageInitialScene = 'Xa18c997_586933ee9464f55fee03aaa33b11649c';
            CAED_NUESTRA_PASION.debug = false;
            CAED_NUESTRA_PASION.preloadImages = true;
CAED_NUESTRA_PASION.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_51/imgl5566.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_51/imgl5637.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_51/imgl5775.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_51/gota_agua_nuestra_pasion.png'
];CAED_NUESTRA_PASION.createWorkspace('imObjectAnimation_51_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_51_stage');
addLoadEvent(CAED_NUESTRA_PASIONstart);


 })( wajq );