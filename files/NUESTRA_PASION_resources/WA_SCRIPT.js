
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



function addLoadEvent(func) {
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

            loadjscssfile("NUESTRA_PASION_resources/WA.min.js", "js");
            loadjscssfile("NUESTRA_PASION_resources/modernizr.custom.43133.min.js", "js");
            loadjscssfile("NUESTRA_PASION_resources/spin.min.js", "js");

            loadjscssfile("NUESTRA_PASION_resources/JQ_Textualizer.min.js", "js");
            loadjscssfile("NUESTRA_PASION_resources/WA.min.css", "css");            
       }
	   
	   loadjscssfile("NUESTRA_PASION_resources/ani.css", "css");                          
}
	// Global variables




function NUESTRA_PASIONstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var NUESTRA_PASION = new WA();
NUESTRA_PASION.custom = {
}

NUESTRA_PASION.stage = [{            

            // SCENE 1
            'Oid': 'Xa2394df',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#1A3D53',
            'SceneEnd': 23000,
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
                    'Oid': 'Xa239544',                
                    'Type': 'box',
                    'InnerHTML': 'Nuestra Pasión:'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '50px',
                    'Left': '100px',
                    'Height': '76px',
                    'Width': '619px',
                    'ZIndex': '1','Display': 'block','TextAlign': 'left',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '1',
                'FontFamily': 'Montserrat',
                'FontSize': '68px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '5px',
                            'Color':'#000000',
                            'OffsetX' : '4px',
                            'OffsetY' : '4px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa2395e0',                
                    'Type': 'box',
                    'InnerHTML': 'El promover la cultura del buen uso del agua con acciones educativas,  culturales y de difusión nos dan la oportunidad de dar a conocer la  importancia del agua no solo para la salud humana, sino generar  conciencia de su importancia en su cuidado para las futuras  generaciones.'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '180px',
                    'Left': '100px',
                    'Height': '248px',
                    'Width': '550px',
                    'ZIndex': '2','Display': 'block','TextAlign': 'justify',

                'TextColor': '#F5F5F5',
                'Opacity': '1',
                'FontFamily': 'Montserrat',
                'FontSize': '20px',
                'LineHeight': '2em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa239681',                
                    'Type': 'box',
                    'InnerHTML': 'En el estado de Durango creamos 49 espacios de cultura del agua, en ellos informamos y capacitamos a toda la sociedad involucrada en el buen uso de agua, ya sean en nuestros espacios, escuelas, empresas o comunidades.'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '460px',
                    'Left': '100px',
                    'Height': '208px',
                    'Width': '550px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'justify',

                'TextColor': '#F5F5F5',
                'Opacity': '1',
                'FontFamily': 'Montserrat',
                'FontSize': '20px',
                'LineHeight': '2em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa2396f0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '480px',
                    'ZIndex': '4','BackgroundImage': 'NUESTRA_PASION_resources/imgl5566.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa239d32',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '152px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '480px',
                    'ZIndex': '6','BackgroundImage': 'NUESTRA_PASION_resources/imgl5637.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa239e8b',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '54px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '440px',
                    'ZIndex': '7','BackgroundImage': 'NUESTRA_PASION_resources/imgl5775.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa23a0cc',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '420px',
                    'ZIndex': '8','BackgroundImage': 'NUESTRA_PASION_resources/gota_agua_nuestra_pasion.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'Xa2396f0',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '700px'
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
                            'ObjectId':'Xa2396f0',
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
                            'ObjectId':'Xa2396f0',
                            'StartTime':7000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'Xa239d32',
                            'StartTime':7000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '700px'
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
                            'ObjectId':'Xa239d32',
                            'StartTime':7000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0.99'
                        }]
},
{
                            'ObjectId':'Xa239d32',
                            'StartTime':14000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'Xa239e8b',
                            'StartTime':14000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '700px'
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
                            'ObjectId':'Xa239e8b',
                            'StartTime':14000,
                            'TransitionElements':[
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
                            'ObjectId':'Xa239e8b',
                            'StartTime':21000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0'
                        }]
},
{
                            'ObjectId':'Xa23a0cc',
                            'StartTime':21000,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '740px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '0px'
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


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
}];

            NUESTRA_PASION.init();
            NUESTRA_PASION.stageHeight = 720;
            NUESTRA_PASION.stageWidth  = 1280;
            NUESTRA_PASION.t  = '423003011251459419865563586523700950525';
            NUESTRA_PASION.stageInitialTransition = 'instant';
            NUESTRA_PASION.stageInitialTransitionDirection = 'left';
            NUESTRA_PASION.stageInitialTransitionSpeed = 1000;

            NUESTRA_PASION.responsiveStage = true;
            NUESTRA_PASION.responsiveStageKeepRatio = true;
            NUESTRA_PASION.scaleX = 1;
            NUESTRA_PASION.scaleY = 1;
            NUESTRA_PASION.scale = 1;

            NUESTRA_PASION.showBrowserCompatibilityCheck = false;
                NUESTRA_PASION.loaderType = 1;
                NUESTRA_PASION.loaderBackgroundColor = '#000';
                NUESTRA_PASION.loaderForegroundColor = '#fff';
            NUESTRA_PASION.stageInitialScene = 'Xa2394df';
            NUESTRA_PASION.debug = false;
            NUESTRA_PASION.preloadImages = true;
NUESTRA_PASION.imagesToPreload = [
'NUESTRA_PASION_resources/imgl5566.png',
'NUESTRA_PASION_resources/imgl5637.png',
'NUESTRA_PASION_resources/imgl5775.png',
'NUESTRA_PASION_resources/gota_agua_nuestra_pasion.png'
];NUESTRA_PASION.createWorkspace('NUESTRA_PASIONStage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('NUESTRA_PASIONStage');
addLoadEvent(NUESTRA_PASIONstart);

