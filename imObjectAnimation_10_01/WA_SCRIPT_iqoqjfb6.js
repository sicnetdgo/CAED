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
window.f46512B8AB8E949C1DEACEA3613691AAC = function(callback) { if (!window.WA) { setTimeout(function () { f46512B8AB8E949C1DEACEA3613691AAC(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

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

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_10_01/WA.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/modernizr.custom.43133.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/spin.min.js", "js");

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_10_01/JQ_Textualizer.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_10_01/WA.min.css", "css");            
       }
	   
	   loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_10_01/ani.css", "css");                          
}
	// Global variables




function MAPA_AGUA_SUSTENTABLEstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var MAPA_AGUA_SUSTENTABLE = new WA();
MAPA_AGUA_SUSTENTABLE.custom = {
}

MAPA_AGUA_SUSTENTABLE.stage = [{            

            // SCENE 1
            'Oid': 'X998ca83_f1c7c7c68c24b8524e944badc8f10d41',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 2000,
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
                    'Oid': 'X998d455_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a5c_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '292px',
                    'Left': '191px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc486f_f1c7c7c68c24b8524e944badc8f10d41',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a65_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '360px',
                    'Left': '444px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc4d07_f1c7c7c68c24b8524e944badc8f10d41',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a6c_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '196px',
                    'Left': '444px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc567e_f1c7c7c68c24b8524e944badc8f10d41',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a72_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '272px',
                    'Left': '640px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc5967_f1c7c7c68c24b8524e944badc8f10d41',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc354d_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '173px',
                    'Left': '700px',
                    'Height': '433px',
                    'Width': '561px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/por que agua saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ccd4cd_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '376px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ccd10d_f1c7c7c68c24b8524e944badc8f10d41',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9cb0a5c_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9cc354d_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':100,
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
                            'ObjectId':'X9cb0a65_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9ccd4cd_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9cb0a6c_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9cb0a72_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':700,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.5s',
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
},

{            

            // SCENE 2
            'Oid': 'X9cc5967_f1c7c7c68c24b8524e944badc8f10d41',
            'Name': 'SCENE_2',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 1200,
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
                    'Oid': 'X9cc596a_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc5979_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '272px',
                    'Left': '640px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X998ca83_f1c7c7c68c24b8524e944badc8f10d41',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc59e8_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '197px',
                    'Left': '667px',
                    'Height': '117px',
                    'Width': '128px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/tanque coahuila.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc59fb_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '273px',
                    'Left': '10px',
                    'Height': '428px',
                    'Width': '611px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/lineas por gravedad.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cc59fb_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9cc59e8_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.2s',
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
},

{            

            // SCENE 3
            'Oid': 'X9cc567e_f1c7c7c68c24b8524e944badc8f10d41',
            'Name': 'SCENE_3',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 1200,
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
                    'Oid': 'X9cc5681_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc568d_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '196px',
                    'Left': '444px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X998ca83_f1c7c7c68c24b8524e944badc8f10d41',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc56ff_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '119px',
                    'Left': '471px',
                    'Height': '120px',
                    'Width': '128px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/tanque durango.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc5764_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '196px',
                    'Left': '575px',
                    'Height': '464px',
                    'Width': '675px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/lineas por gravedad.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cc5764_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9cc56ff_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.2s',
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
},

{            

            // SCENE 4
            'Oid': 'X9cc4d07_f1c7c7c68c24b8524e944badc8f10d41',
            'Name': 'SCENE_4',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 13700,
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
                    'Oid': 'X9cc4d0a_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4d13_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '360px',
                    'Left': '444px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X998ca83_f1c7c7c68c24b8524e944badc8f10d41',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4f40_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '276px',
                    'Left': '472px',
                    'Height': '117px',
                    'Width': '128px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/derivadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4f6e_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '71px',
                    'Left': '640px',
                    'Height': '448px',
                    'Width': '628px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/planta derivadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4fba_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '283px',
                    'Left': '581px',
                    'Height': '430px',
                    'Width': '619px',
                    'ZIndex': '19','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/planta de bombeo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cc4f6e_f1c7c7c68c24b8524e944badc8f10d41',
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
                            'ObjectId':'X9cc4f40_f1c7c7c68c24b8524e944badc8f10d41',
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
                            'ObjectId':'X9cc4fba_f1c7c7c68c24b8524e944badc8f10d41',
                            'StartTime':12600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.1s',
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
},

{            

            // SCENE 5
            'Oid': 'X9ccd10d_f1c7c7c68c24b8524e944badc8f10d41',
            'Name': 'SCENE_5',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 1000,
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
                    'Oid': 'X9ccd110_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ccd113_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '376px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X998ca83_f1c7c7c68c24b8524e944badc8f10d41',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ccd5db_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '275px',
                    'Left': '411px',
                    'Height': '128px',
                    'Width': '125px',
                    'ZIndex': '19','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/bandera_cañon fernandez.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cce554_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '145px',
                    'Left': '556px',
                    'Height': '440px',
                    'Width': '676px',
                    'ZIndex': '20','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/info-cfdez111111111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ccd5db_f1c7c7c68c24b8524e944badc8f10d41',
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
                            'ObjectId':'X9cce554_f1c7c7c68c24b8524e944badc8f10d41',
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


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
},

{            

            // SCENE 6
            'Oid': 'X9cc486f_f1c7c7c68c24b8524e944badc8f10d41',
            'Name': 'SCENE_6',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 1500,
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
                    'Oid': 'X9cc4872_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4878_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '292px',
                    'Left': '191px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X998ca83_f1c7c7c68c24b8524e944badc8f10d41',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc48f0_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '220px',
                    'Left': '219px',
                    'Height': '117px',
                    'Width': '128px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/p potabilizadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc48fb_f1c7c7c68c24b8524e944badc8f10d41',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '145px',
                    'Left': '548px',
                    'Height': '455px',
                    'Width': '631px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/planta potebilizadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cc48fb_f1c7c7c68c24b8524e944badc8f10d41',
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
                            'ObjectId':'X9cc48f0_f1c7c7c68c24b8524e944badc8f10d41',
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


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
}];

            MAPA_AGUA_SUSTENTABLE.init();
            MAPA_AGUA_SUSTENTABLE.stageHeight = 720;
            MAPA_AGUA_SUSTENTABLE.stageWidth  = 1280;
            MAPA_AGUA_SUSTENTABLE.t  = '423003011251459419865563586523700950525';
            MAPA_AGUA_SUSTENTABLE.stageInitialTransition = 'instant';
            MAPA_AGUA_SUSTENTABLE.stageInitialTransitionDirection = 'left';
            MAPA_AGUA_SUSTENTABLE.stageInitialTransitionSpeed = 1000;

            MAPA_AGUA_SUSTENTABLE.responsiveStage = true;
            MAPA_AGUA_SUSTENTABLE.responsiveStageKeepRatio = true;
            MAPA_AGUA_SUSTENTABLE.scaleX = 1;
            MAPA_AGUA_SUSTENTABLE.scaleY = 1;
            MAPA_AGUA_SUSTENTABLE.scale = 1;

            MAPA_AGUA_SUSTENTABLE.showBrowserCompatibilityCheck = false;
                MAPA_AGUA_SUSTENTABLE.loaderType = 1;
                MAPA_AGUA_SUSTENTABLE.loaderBackgroundColor = '#fff';
                MAPA_AGUA_SUSTENTABLE.loaderForegroundColor = '#000';
            MAPA_AGUA_SUSTENTABLE.stageInitialScene = 'X998ca83_f1c7c7c68c24b8524e944badc8f10d41';
            MAPA_AGUA_SUSTENTABLE.debug = false;
            MAPA_AGUA_SUSTENTABLE.preloadImages = true;
MAPA_AGUA_SUSTENTABLE.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/por que agua saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/tanque coahuila.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/lineas por gravedad.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/tanque durango.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/lineas por gravedad.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/derivadora.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/planta derivadora.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/planta de bombeo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/bandera_cañon fernandez.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/info-cfdez111111111.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/p potabilizadora.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_10_01/planta potebilizadora.png'
];MAPA_AGUA_SUSTENTABLE.createWorkspace('imObjectAnimation_10_01_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_10_01_stage');
addLoadEvent(MAPA_AGUA_SUSTENTABLEstart);


 })( wajq );