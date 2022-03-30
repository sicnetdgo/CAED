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
window.fFAB44CA5A70EE52A48947C10CD2F98A7 = function(callback) { if (!window.WA) { setTimeout(function () { fFAB44CA5A70EE52A48947C10CD2F98A7(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

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




function LA_CUENCA_NAZASstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var LA_CUENCA_NAZAS = new WA();
LA_CUENCA_NAZAS.custom = {
}

LA_CUENCA_NAZAS.stage = [{            

            // SCENE 1
            'Oid': 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 2600,
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
                    'Oid': 'X9cdfd75_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdfdef_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '377px',
                    'Left': '907px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce0213_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdfe57_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff36_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '377px',
                    'Left': '807px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce0d63_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff3f_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '262px',
                    'Left': '741px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1530_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff47_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '522px',
                    'Left': '578px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce131a_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff4e_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '305px',
                    'Left': '664px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce19a7_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff55_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '190px',
                    'Left': '656px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '8','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1b10_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff63_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '58px',
                    'Left': '640px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1c06_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff69_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '113px',
                    'Left': '447px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1def_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff6e_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '360px',
                    'Left': '367px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce2001_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff73_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '212px',
                    'Left': '509px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1d05_7dabb5a44eddac01442fd302cffb0177',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0ef7_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '454px',
                    'Left': '1063px',
                    'Height': '253px',
                    'Width': '214px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0efc_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Dá Click para  Saber más'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '467px',
                    'Left': '1139px',
                    'Height': '42px',
                    'Width': '129px',
                    'ZIndex': '14','Display': 'block','TextAlign': 'center',

                'TextColor': '#0000FF',
                'Opacity': '0',
                'FontFamily': 'Comic Sans MS',
                'FontSize': '19px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '2px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9cdff6e_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cdff69_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cdff73_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cdfdef_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cdff63_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9cdff55_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce0ef7_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce0efc_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9cdff47_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1300,
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
                            'ObjectId':'X9cdff3f_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1600,
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
                            'ObjectId':'X9cdff4e_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1800,
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
                            'ObjectId':'X9cdff36_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':2100,
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
            'Oid': 'X9ce2001_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_2',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
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
                    'Oid': 'X9ce2004_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce200a_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce2022_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '360px',
                    'Left': '367px',
                    'Height': '54px',
                    'Width': '35px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce2028_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '454px',
                    'Left': '1063px',
                    'Height': '253px',
                    'Width': '214px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce202b_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Dá Click para  Saber más'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '467px',
                    'Left': '1139px',
                    'Height': '42px',
                    'Width': '129px',
                    'ZIndex': '14','Display': 'block','TextAlign': 'center',

                'TextColor': '#0000FF',
                'Opacity': '0',
                'FontFamily': 'Comic Sans MS',
                'FontSize': '19px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '2px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce20bf_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '265px',
                    'Left': '402px',
                    'Height': '143px',
                    'Width': '119px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio santiago.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce20c2_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '77px',
                    'Left': '570px',
                    'Height': '400px',
                    'Width': '600px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio santiago.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce20bf_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce20c2_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce2028_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce202b_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
            'Oid': 'X9ce1def_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_3',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
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
                    'Oid': 'X9ce1df2_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1df8_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1e0d_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '113px',
                    'Left': '447px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1e16_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '454px',
                    'Left': '1063px',
                    'Height': '253px',
                    'Width': '214px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1e19_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Dá Click para  Saber más'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '467px',
                    'Left': '1139px',
                    'Height': '42px',
                    'Width': '129px',
                    'ZIndex': '14','Display': 'block','TextAlign': 'center',

                'TextColor': '#0000FF',
                'Opacity': '0',
                'FontFamily': 'Comic Sans MS',
                'FontSize': '19px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '2px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1ead_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '48px',
                    'Left': '475px',
                    'Height': '146px',
                    'Width': '147px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio tepehuanes.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1eb0_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '235px',
                    'Left': '308px',
                    'Height': '400px',
                    'Width': '601px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio tepehuanes.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce1ead_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1eb0_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1e16_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce1e19_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
            'Oid': 'X9ce1d05_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_4',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
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
                    'Oid': 'X9ce1d08_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1d0e_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1d29_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '212px',
                    'Left': '509px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1d2c_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '454px',
                    'Left': '1063px',
                    'Height': '253px',
                    'Width': '214px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1d2f_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Dá Click para  Saber más'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '467px',
                    'Left': '1139px',
                    'Height': '42px',
                    'Width': '129px',
                    'ZIndex': '14','Display': 'block','TextAlign': 'center',

                'TextColor': '#0000FF',
                'Opacity': '0',
                'FontFamily': 'Comic Sans MS',
                'FontSize': '19px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '2px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1dc3_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '140px',
                    'Left': '544px',
                    'Height': '127px',
                    'Width': '101px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_ rio ramos.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1dc6_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '295px',
                    'Left': '17px',
                    'Height': '400px',
                    'Width': '600px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio ramos.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce1dc6_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1dc3_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1d2c_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce1d2f_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
            'Oid': 'X9ce1c06_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_5',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
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
                    'Oid': 'X9ce1c09_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1c0f_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1c21_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '58px',
                    'Left': '640px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1c2d_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '454px',
                    'Left': '1063px',
                    'Height': '253px',
                    'Width': '214px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1c30_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Dá Click para  Saber más'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '467px',
                    'Left': '1139px',
                    'Height': '42px',
                    'Width': '129px',
                    'ZIndex': '14','Display': 'block','TextAlign': 'center',

                'TextColor': '#0000FF',
                'Opacity': '0',
                'FontFamily': 'Comic Sans MS',
                'FontSize': '19px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '2px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1cc4_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '4px',
                    'Left': '668px',
                    'Height': '130px',
                    'Width': '120px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio sextin.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1cc7_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '207px',
                    'Left': '321px',
                    'Height': '450px',
                    'Width': '650px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio sextin.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce1cc7_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1cc4_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1c2d_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce1c30_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
            'Oid': 'X9ce1b10_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_6',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
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
                    'Oid': 'X9ce1b13_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1b19_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1b28_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '190px',
                    'Left': '656px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '8','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1b37_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '454px',
                    'Left': '1063px',
                    'Height': '253px',
                    'Width': '214px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1b3a_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Dá Click para  Saber más'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '467px',
                    'Left': '1139px',
                    'Height': '42px',
                    'Width': '129px',
                    'ZIndex': '14','Display': 'block','TextAlign': 'center',

                'TextColor': '#0000FF',
                'Opacity': '0',
                'FontFamily': 'Comic Sans MS',
                'FontSize': '19px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '2px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1bce_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '97px',
                    'Left': '640px',
                    'Height': '140px',
                    'Width': '105px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_presa lazaro cardenas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1bd1_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '257px',
                    'Left': '16px',
                    'Height': '450px',
                    'Width': '650px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-lazaro cardenas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce1bce_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1bd1_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1b37_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce1b3a_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
            'Oid': 'X9ce19a7_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_7',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 2300,
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
                    'Oid': 'X9ce19aa_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce19b0_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce19bc_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '305px',
                    'Left': '664px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce19ce_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '454px',
                    'Left': '1063px',
                    'Height': '253px',
                    'Width': '214px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce19d1_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Dá Click para  Saber más'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '467px',
                    'Left': '1139px',
                    'Height': '42px',
                    'Width': '129px',
                    'ZIndex': '14','Display': 'block','TextAlign': 'center',

                'TextColor': '#0000FF',
                'Opacity': '0',
                'FontFamily': 'Comic Sans MS',
                'FontSize': '19px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '2px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1a65_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '265px',
                    'Left': '699px',
                    'Height': '132px',
                    'Width': '105px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1a6b_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '242px',
                    'Left': '7px',
                    'Height': '450px',
                    'Width': '650px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce1a65_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1a6b_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce19ce_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce19d1_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce19bc_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1800,
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

            // SCENE 8
            'Oid': 'X9ce1530_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_8',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
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
                    'Oid': 'X9ce1533_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1539_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce153f_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '262px',
                    'Left': '741px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1557_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '454px',
                    'Left': '1063px',
                    'Height': '253px',
                    'Width': '214px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce155a_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Dá Click para  Saber más'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '467px',
                    'Left': '1139px',
                    'Height': '42px',
                    'Width': '129px',
                    'ZIndex': '14','Display': 'block','TextAlign': 'center',

                'TextColor': '#0000FF',
                'Opacity': '0',
                'FontFamily': 'Comic Sans MS',
                'FontSize': '19px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '2px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce15ee_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '198px',
                    'Left': '770px',
                    'Height': '129px',
                    'Width': '94px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_a naitcha.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce15f1_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '246px',
                    'Left': '65px',
                    'Height': '450px',
                    'Width': '650px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info a naitcha.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce15ee_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce15f1_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1557_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce155a_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
            'Oid': 'X9ce131a_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_9',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
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
                    'Oid': 'X9ce131d_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1323_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce132c_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '522px',
                    'Left': '578px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1341_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '454px',
                    'Left': '1063px',
                    'Height': '253px',
                    'Width': '214px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1344_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Dá Click para  Saber más'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '467px',
                    'Left': '1139px',
                    'Height': '42px',
                    'Width': '129px',
                    'ZIndex': '14','Display': 'block','TextAlign': 'center',

                'TextColor': '#0000FF',
                'Opacity': '0',
                'FontFamily': 'Comic Sans MS',
                'FontSize': '19px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '2px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce13d8_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '484px',
                    'Left': '620px',
                    'Height': '131px',
                    'Width': '124px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio peñon.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce13db_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '38px',
                    'Left': '520px',
                    'Height': '450px',
                    'Width': '650px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info rio peñon.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce13db_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce13d8_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce1341_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce1344_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
            'Oid': 'X9ce0d63_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_10',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 2600,
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
                    'Oid': 'X9ce0d66_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0d6c_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0d6f_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '377px',
                    'Left': '807px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0e05_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '325px',
                    'Left': '848px',
                    'Height': '117px',
                    'Width': '90px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_presa fco zarco.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0e08_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '245px',
                    'Left': '155px',
                    'Height': '450px',
                    'Width': '650px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-presa fco zarco.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': '_8f4e211c-5527-4694-a585-10a9897645e6_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '0px',
                    'Width': '0px',
                    'ZIndex': '0','BackgroundColor': '','Display': 'block','TextAlign': '',

                'TextColor': '',
                'Opacity': '1',
                'FontFamily': '',
                'FontSize': '0px',
                'LineHeight': '0em',

                

                'Visible': 'true','OnMouseDown' : 0,
'OnMouseDownParam' : '',

'OnMouseUp' : 0,
'OnMouseUpParam' : '',

'OnMouseClick' : 0,
'OnMouseClickParam' : '',

'OnMouseOver' : 0,
'OnMouseOverParam' : '',

'OnMouseOut' : 0,
'OnMouseOutParam' : '',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9ce0d6f_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':2100,
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

            // SCENE 11
            'Oid': 'X9ce0213_7dabb5a44eddac01442fd302cffb0177',
            'Name': 'SCENE_11',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
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
                    'Oid': 'X9ce0216_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
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

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0219_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '377px',
                    'Left': '907px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce021c_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(247,218,113,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1180px',
                    'Height': '100px',
                    'Width': '100px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce04ea_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '288px',
                    'Left': '948px',
                    'Height': '130px',
                    'Width': '108px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_cañon fernandez11.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0559_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '241px',
                    'Left': '183px',
                    'Height': '450px',
                    'Width': '650px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info cañon fdez.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0825_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '457px',
                    'Left': '1056px',
                    'Height': '253px',
                    'Width': '214px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce088e_7dabb5a44eddac01442fd302cffb0177',                
                    'Type': 'box',
                    'InnerHTML': 'Dá Click para  Saber más'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '471px',
                    'Left': '1130px',
                    'Height': '42px',
                    'Width': '129px',
                    'ZIndex': '7','Display': 'block','TextAlign': 'center',

                'TextColor': '#0000FF',
                'Opacity': '0',
                'FontFamily': 'Comic Sans MS',
                'FontSize': '19px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '2px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9ce04ea_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce0559_7dabb5a44eddac01442fd302cffb0177',
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
                            'ObjectId':'X9ce0825_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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
                            'ObjectId':'X9ce088e_7dabb5a44eddac01442fd302cffb0177',
                            'StartTime':1000,
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

            LA_CUENCA_NAZAS.init();
            LA_CUENCA_NAZAS.stageHeight = 720;
            LA_CUENCA_NAZAS.stageWidth  = 1280;
            LA_CUENCA_NAZAS.t  = '423003011251459419865563586523700950525';
            LA_CUENCA_NAZAS.stageInitialTransition = 'instant';
            LA_CUENCA_NAZAS.stageInitialTransitionDirection = 'left';
            LA_CUENCA_NAZAS.stageInitialTransitionSpeed = 1000;

            LA_CUENCA_NAZAS.responsiveStage = true;
            LA_CUENCA_NAZAS.responsiveStageKeepRatio = true;
            LA_CUENCA_NAZAS.scaleX = 1;
            LA_CUENCA_NAZAS.scaleY = 1;
            LA_CUENCA_NAZAS.scale = 1;

            LA_CUENCA_NAZAS.showBrowserCompatibilityCheck = false;
                LA_CUENCA_NAZAS.loaderType = 1;
                LA_CUENCA_NAZAS.loaderBackgroundColor = '#fff';
                LA_CUENCA_NAZAS.loaderForegroundColor = '#000';
            LA_CUENCA_NAZAS.stageInitialScene = 'X9cdfb7d_7dabb5a44eddac01442fd302cffb0177';
            LA_CUENCA_NAZAS.debug = false;
            LA_CUENCA_NAZAS.preloadImages = true;
LA_CUENCA_NAZAS.imagesToPreload = [
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
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio santiago.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio santiago.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio tepehuanes.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio tepehuanes.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_ rio ramos.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio ramos.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio sextin.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio sextin.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_presa lazaro cardenas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-lazaro cardenas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-rio nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_a naitcha.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info a naitcha.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_rio peñon.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info rio peñon.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_presa fco zarco.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info-presa fco zarco.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/fondo_animacion_cuenca_nazas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/bandera_cañon fernandez11.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/info cañon fdez.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_3_10/jaa_saber_mas.png'
];LA_CUENCA_NAZAS.createWorkspace('imObjectAnimation_3_10_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_3_10_stage');
addLoadEvent(LA_CUENCA_NAZASstart);


 })( wajq );