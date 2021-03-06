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
window.fD0151974D58695644B60427CE96F389A = function(callback) { if (!window.WA) { setTimeout(function () { fD0151974D58695644B60427CE96F389A(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

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




function MAPA_CUENCA_NAZASstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var MAPA_CUENCA_NAZAS = new WA();
MAPA_CUENCA_NAZAS.custom = {
}

MAPA_CUENCA_NAZAS.stage = [{            

            // SCENE 1
            'Oid': 'X991717b_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 1400,
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
                    'Oid': 'X99171bd_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9918925_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '135px',
                    'Left': '628px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9918fb5_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99189c2_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '202px',
                    'Left': '652px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '3','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X997cb8e_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99189ce_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '231px',
                    'Left': '534px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9919db8_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X997e874_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,165,0,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '600px',
                    'Left': '1150px',
                    'Height': '120px',
                    'Width': '100px',
                    'ZIndex': '6','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X998ca83_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '1000',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99aaed7_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '149px',
                    'Left': '456px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X99bb038_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99aaf12_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '317px',
                    'Left': '665px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '8','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X99bbbc4_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99aaf2f_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '366px',
                    'Left': '383px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X99ba4e4_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99ab0bd_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '492px',
                    'Left': '572px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X99bd056_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99ab0ca_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '291px',
                    'Left': '760px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X99be5a4_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99ab0da_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '386px',
                    'Left': '824px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X99bed69_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99ab0e3_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '386px',
                    'Left': '910px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X99bfe10_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X99aaf2f_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99aaed7_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99189ce_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9918925_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':300,
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
                            'ObjectId':'X99189c2_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99aaf12_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':500,
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
                            'ObjectId':'X99ab0bd_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':600,
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
                            'ObjectId':'X99ab0ca_7dabb5a44eddac01442fd302cffb0177',
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
{
                            'ObjectId':'X99ab0da_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':800,
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
                            'ObjectId':'X99ab0e3_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':900,
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
            'Oid': 'X99bfe10_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_2',
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
                    'Oid': 'X99bfe13_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bfe37_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '386px',
                    'Left': '910px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bfee2_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '304px',
                    'Left': '937px',
                    'Height': '142px',
                    'Width': '87px',
                    'ZIndex': '14','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_ca??on fernandez11.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99caa5a_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '135px',
                    'Left': '235px',
                    'Height': '476px',
                    'Width': '621px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info ca??on fdez.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X99bfee2_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99caa5a_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 3
            'Oid': 'X99bed69_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_3',
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
                    'Oid': 'X99bed6c_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bed8d_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '386px',
                    'Left': '824px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bef35_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '294px',
                    'Left': '855px',
                    'Height': '152px',
                    'Width': '102px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_presa fco zarco1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bfd3f_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '187px',
                    'Left': '49px',
                    'Height': '450px',
                    'Width': '600px',
                    'ZIndex': '14','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-presa fco zarco.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X99bef35_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99bfd3f_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 4
            'Oid': 'X99be5a4_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_4',
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
                    'Oid': 'X99be5a7_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99be5c5_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '291px',
                    'Left': '760px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99be6c5_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '259px',
                    'Left': '793px',
                    'Height': '124px',
                    'Width': '94px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_a naitcha1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bebe9_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '125px',
                    'Left': '157px',
                    'Height': '350px',
                    'Width': '500px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info a naitcha.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X99be6c5_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99bebe9_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 5
            'Oid': 'X99bd056_7dabb5a44eddac01442fd302cffb0177',
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
                    'Oid': 'X99bd059_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bd074_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '492px',
                    'Left': '572px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bd14c_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '397px',
                    'Left': '600px',
                    'Height': '129px',
                    'Width': '126px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio pe??on1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bdfae_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '26px',
                    'Left': '674px',
                    'Height': '406px',
                    'Width': '540px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info rio pe??on.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X99bd14c_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99bdfae_7dabb5a44eddac01442fd302cffb0177',
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
            'Oid': 'X99bbbc4_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_6',
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
                    'Oid': 'X99bbbc7_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bbbdc_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '317px',
                    'Left': '665px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '8','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bbf46_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '235px',
                    'Left': '690px',
                    'Height': '142px',
                    'Width': '113px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio nazas1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.01',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bc058_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '250px',
                    'Left': '27px',
                    'Height': '450px',
                    'Width': '600px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio nazas1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.01',
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
                            'ObjectId':'X99bc058_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99bbf46_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 7
            'Oid': 'X99bb038_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_7',
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
                    'Oid': 'X99bb03b_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bb04d_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '149px',
                    'Left': '456px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bb0e8_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '48px',
                    'Left': '481px',
                    'Height': '152px',
                    'Width': '128px',
                    'ZIndex': '8','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio tepehuanes1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99bb30b_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '181px',
                    'Left': '600px',
                    'Height': '450px',
                    'Width': '600px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio tepehuanes.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X99bb30b_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99bb0e8_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 8
            'Oid': 'X99ba4e4_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_8',
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
                    'Oid': 'X99ba4e7_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99ba4ff_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '366px',
                    'Left': '383px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99ba58f_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '240px',
                    'Left': '408px',
                    'Height': '158px',
                    'Width': '127px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio santiago1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99ba904_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '168px',
                    'Left': '615px',
                    'Height': '450px',
                    'Width': '600px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio santiago.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X99ba904_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99ba58f_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 9
            'Oid': 'X997cb8e_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_9',
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
                    'Oid': 'X997cb91_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99b5fc9_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '106px',
                    'Left': '677px',
                    'Height': '136px',
                    'Width': '99px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_presa lazaro cardenas11.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99b6674_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '267px',
                    'Left': '13px',
                    'Height': '444px',
                    'Width': '645px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-lazaro cardenas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99b775a_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '202px',
                    'Left': '652px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://mediateca.inah.gob.mx/repositorio/islandora/object/fotografia:455346',


'OnMouseOut' : 2,
'OnMouseOutParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X99b5fc9_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99b6674_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 10
            'Oid': 'X9919db8_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_10',
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
                    'Oid': 'X9919dbb_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9919dc4_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '231px',
                    'Left': '534px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'http://www.inafed.gob.mx/work/enciclopedia/EMM10durango/mediofisico.html',


'OnMouseOut' : 2,
'OnMouseOutParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99ba276_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '121px',
                    'Left': '559px',
                    'Height': '145px',
                    'Width': '106px',
                    'ZIndex': '8','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_ rio ramos1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99ba2a2_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '198px',
                    'Left': '710px',
                    'Height': '400px',
                    'Width': '500px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio ramos.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X99ba276_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99ba2a2_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 11
            'Oid': 'X9918fb5_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_11',
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
                    'Oid': 'X9918fbb_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '135px',
                    'Left': '628px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://www.redalyc.org/articulo.oa?id=455545068010',


'OnMouseOut' : 2,
'OnMouseOutParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9919549_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99b8ac6_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '43px',
                    'Left': '653px',
                    'Height': '132px',
                    'Width': '102px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio sextin11.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X99b8d3a_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '202px',
                    'Left': '641px',
                    'Height': '400px',
                    'Width': '600px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio sextin1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X99b8ac6_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X99b8d3a_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 12
            'Oid': 'X998ca83_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_12',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 2500,
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
                    'Oid': 'X998d455_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X998d502_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,165,0,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '600px',
                    'Left': '1150px',
                    'Height': '120px',
                    'Width': '100px',
                    'ZIndex': '8','Display': 'block','TextAlign': 'left',
'BorderRadiusTopLeft': '2px',
'BorderRadiusTopRight': '2px',
'BorderRadiusBottomLeft': '2px',
'BorderRadiusBottomRight': '2px',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X991717b_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '1000',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a5c_7dabb5a44eddac01442fd302cffb0177',                
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
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc486f_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a65_7dabb5a44eddac01442fd302cffb0177',                
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
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc4d07_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a6c_7dabb5a44eddac01442fd302cffb0177',                
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
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc567e_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a72_7dabb5a44eddac01442fd302cffb0177',                
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
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc5967_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a8f_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '400px',
                    'Left': '375px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc6489_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc354d_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '173px',
                    'Left': '700px',
                    'Height': '433px',
                    'Width': '561px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/por que agua saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cb0a5c_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cb0a65_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cb0a6c_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cb0a72_7dabb5a44eddac01442fd302cffb0177',
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
{
                            'ObjectId':'X9cb0a8f_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9cc354d_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1500,
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

            // SCENE 13
            'Oid': 'X9cc6489_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_13',
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
                    'Oid': 'X9cc648c_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc64a1_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '400px',
                    'Left': '375px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X998ca83_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc651b_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '330px',
                    'Left': '403px',
                    'Height': '117px',
                    'Width': '118px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_ca??on fernandez111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc6556_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '125px',
                    'Left': '559px',
                    'Height': '480px',
                    'Width': '654px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info ca??on fdez-2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cc6556_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cc651b_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 14
            'Oid': 'X9cc5967_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_14',
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
                    'Oid': 'X9cc596a_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc5979_7dabb5a44eddac01442fd302cffb0177',                
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
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X998ca83_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc59e8_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '197px',
                    'Left': '667px',
                    'Height': '117px',
                    'Width': '128px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/tanque coahuila.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc59fb_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '273px',
                    'Left': '10px',
                    'Height': '428px',
                    'Width': '611px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/lineas por gravedad.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cc59fb_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cc59e8_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 15
            'Oid': 'X9cc567e_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_15',
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
                    'Oid': 'X9cc5681_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc568d_7dabb5a44eddac01442fd302cffb0177',                
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
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X998ca83_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc56ff_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '119px',
                    'Left': '471px',
                    'Height': '120px',
                    'Width': '128px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/tanque durango.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc5764_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '196px',
                    'Left': '575px',
                    'Height': '464px',
                    'Width': '675px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/lineas por gravedad.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cc5764_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cc56ff_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 16
            'Oid': 'X9cc4d07_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_16',
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
                    'Oid': 'X9cc4d0a_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4d13_7dabb5a44eddac01442fd302cffb0177',                
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
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X998ca83_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4f40_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '276px',
                    'Left': '472px',
                    'Height': '117px',
                    'Width': '128px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/derivadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4f6e_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '71px',
                    'Left': '640px',
                    'Height': '448px',
                    'Width': '628px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/planta derivadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4fba_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '283px',
                    'Left': '581px',
                    'Height': '430px',
                    'Width': '619px',
                    'ZIndex': '19','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/planta de bombeo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cc4f6e_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cc4f40_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cc4fba_7dabb5a44eddac01442fd302cffb0177',
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

            // SCENE 17
            'Oid': 'X9cc486f_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_17',
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
                    'Oid': 'X9cc4872_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4878_7dabb5a44eddac01442fd302cffb0177',                
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
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',



'OnMouseOut' : 2,
'OnMouseOutParam' : 'X998ca83_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOutTransition' : 'instant',
'OnMouseOutTransitionSpeed' : '0',
'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc48f0_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '220px',
                    'Left': '219px',
                    'Height': '117px',
                    'Width': '128px',
                    'ZIndex': '17','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/p potabilizadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc48fb_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '145px',
                    'Left': '548px',
                    'Height': '455px',
                    'Width': '631px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/planta potebilizadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cc48fb_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cc48f0_7dabb5a44eddac01442fd302cffb0177',
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

            MAPA_CUENCA_NAZAS.init();
            MAPA_CUENCA_NAZAS.stageHeight = 720;
            MAPA_CUENCA_NAZAS.stageWidth  = 1280;
            MAPA_CUENCA_NAZAS.t  = '423003011251459419865563586523700950525';
            MAPA_CUENCA_NAZAS.stageInitialTransition = 'instant';
            MAPA_CUENCA_NAZAS.stageInitialTransitionDirection = 'left';
            MAPA_CUENCA_NAZAS.stageInitialTransitionSpeed = 1000;

            MAPA_CUENCA_NAZAS.responsiveStage = true;
            MAPA_CUENCA_NAZAS.responsiveStageKeepRatio = true;
            MAPA_CUENCA_NAZAS.scaleX = 1;
            MAPA_CUENCA_NAZAS.scaleY = 1;
            MAPA_CUENCA_NAZAS.scale = 1;

            MAPA_CUENCA_NAZAS.showBrowserCompatibilityCheck = false;
                MAPA_CUENCA_NAZAS.loaderType = 1;
                MAPA_CUENCA_NAZAS.loaderBackgroundColor = '#fff';
                MAPA_CUENCA_NAZAS.loaderForegroundColor = '#000';
            MAPA_CUENCA_NAZAS.stageInitialScene = 'X991717b_7dabb5a44eddac01442fd302cffb0177';
            MAPA_CUENCA_NAZAS.debug = false;
            MAPA_CUENCA_NAZAS.preloadImages = true;
MAPA_CUENCA_NAZAS.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_ca??on fernandez11.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info ca??on fdez.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_presa fco zarco1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-presa fco zarco.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_a naitcha1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info a naitcha.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio pe??on1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info rio pe??on.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio nazas1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio nazas1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio tepehuanes1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio tepehuanes.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio santiago1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio santiago.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_presa lazaro cardenas11.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-lazaro cardenas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/455346',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_ rio ramos1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio ramos.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio sextin11.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio sextin1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/por que agua saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_ca??on fernandez111.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info ca??on fdez-2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/tanque coahuila.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/lineas por gravedad.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/tanque durango.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/lineas por gravedad.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/derivadora.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/planta derivadora.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/planta de bombeo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_agua_saludable.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/p potabilizadora.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/planta potebilizadora.png'
];MAPA_CUENCA_NAZAS.createWorkspace('imObjectAnimation_3_10_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_3_10_stage');
addLoadEvent(MAPA_CUENCA_NAZASstart);


 })( wajq );