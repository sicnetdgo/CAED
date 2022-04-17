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
window.fB8FEDE47BD6E0541D7179F1AF223493E = function(callback) { if (!window.WA) { setTimeout(function () { fB8FEDE47BD6E0541D7179F1AF223493E(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

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

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_9_01/WA.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/modernizr.custom.43133.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/spin.min.js", "js");

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_9_01/JQ_Textualizer.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_9_01/WA.min.css", "css");            
       }
	   
	   loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_9_01/ani.css", "css");                          
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
            'Oid': 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 5000,
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
                    'Oid': 'X9cdfd75_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '1px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdfdef_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '342px',
                    'Left': '767px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce0213_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff36_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '388px',
                    'Left': '688px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce0d63_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff3f_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '314px',
                    'Left': '578px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1530_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff47_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '583px',
                    'Left': '628px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce131a_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff4e_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '360px',
                    'Left': '543px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce19a7_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff55_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '286px',
                    'Left': '477px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '8','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1b10_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff63_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '162px',
                    'Left': '382px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1c06_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff69_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '267px',
                    'Left': '253px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1def_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff6e_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '508px',
                    'Left': '358px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce2001_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff73_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '341px',
                    'Left': '382px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1d05_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f2939a_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '386px',
                    'Left': '1016px',
                    'Height': '300px',
                    'Width': '250px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda11.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cdff6e_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9cdff69_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9cdff73_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9cdff63_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9cdff55_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9cdff47_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9cdff3f_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9cdff4e_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9cdff36_db1a46bebdb3b6ede128be0f230b4ef0',
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
{
                            'ObjectId':'X9cdfdef_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':2400,
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
                            'ObjectId':'X9f2939a_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3500,
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
                            'ObjectId':'X9cdfd75_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':5000,
                            'TransitionElements':[]
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
            'Oid': 'X9ce2001_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_2',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 4500,
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
                    'Oid': 'X9ce2004_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1281px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce200a_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,255,255,1);stroke:rgba(105,105,105,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1197px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '3','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.51',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce2022_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '508px',
                    'Left': '358px',
                    'Height': '54px',
                    'Width': '35px',
                    'ZIndex': '11','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce2028_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '450px',
                    'Left': '1150px',
                    'Height': '250px',
                    'Width': '120px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f1c3d5_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '160px',
                    'Left': '494px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '15','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio santiago.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f257b5_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '16','BackgroundColor': '#8A2BE2','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '15px',
                'LineHeight': '0.3em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/que-es-.html',



'Pressed': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#A9A9A9',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#A9A9A9',
                             'BackgroundGradientColor2' : '#A9A9A9',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9370DB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9370DB',
                             'BackgroundGradientColor2' : '#9370DB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9f1c3d5_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9ce2028_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9f257b5_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3000,
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
},

{            

            // SCENE 3
            'Oid': 'X9ce1def_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_3',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 4800,
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
                    'Oid': 'X9ce1df2_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1281px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1e0d_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '267px',
                    'Left': '253px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1e16_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '450px',
                    'Left': '1150px',
                    'Height': '250px',
                    'Width': '120px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1eb0_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '171px',
                    'Left': '432px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio tepehuanes.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d456c7_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<audio  controls><source src="' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio_tepehuanes.mp3"  type="audio/mp3"/></audio>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '198px',
                    'Left': '771px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '18','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/icono_audio.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f2764e_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '19','BackgroundColor': '#8A2BE2','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '15px',
                'LineHeight': '0.3em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/que-es-.html',



'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#A9A9A9',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#A9A9A9',
                             'BackgroundGradientColor2' : '#A9A9A9',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9370DB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9370DB',
                             'BackgroundGradientColor2' : '#9370DB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'X9f28777_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,255,255,1);stroke:rgba(105,105,105,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1201px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '20','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.51',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9ce1eb0_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9ce1e16_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9f2764e_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3000,
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
                            'ObjectId':'X9d456c7_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3800,
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
            'Oid': 'X9ce1d05_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_4',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 4800,
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
                    'Oid': 'X9ce1d08_db1a46bebdb3b6ede128be0f230b4ef0',                
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
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1d29_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '341px',
                    'Left': '382px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '12','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1d2c_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '450px',
                    'Left': '1150px',
                    'Height': '250px',
                    'Width': '120px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1dc6_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '151px',
                    'Left': '575px',
                    'Height': '450px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio ramos.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f276e8_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '18','BackgroundColor': '#8A2BE2','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '15px',
                'LineHeight': '0.3em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/que-es-.html',



'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#A9A9A9',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#A9A9A9',
                             'BackgroundGradientColor2' : '#A9A9A9',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9370DB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9370DB',
                             'BackgroundGradientColor2' : '#9370DB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'X9f2878a_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,255,255,1);stroke:rgba(105,105,105,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1197px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '19','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.51',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f3291b_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<audio  controls><source src="' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio_ramos.mp3"  type="audio/mp3"/></audio>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '182px',
                    'Left': '920px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '20','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/icono_audio.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce1dc6_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9ce1d2c_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9f276e8_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3000,
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
                            'ObjectId':'X9f3291b_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3800,
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
            'Oid': 'X9ce1c06_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_5',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 4500,
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
                    'Oid': 'X9ce1c09_db1a46bebdb3b6ede128be0f230b4ef0',                
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
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1c21_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '162px',
                    'Left': '382px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1c2d_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '450px',
                    'Left': '1150px',
                    'Height': '250px',
                    'Width': '120px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1cc7_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '150px',
                    'Left': '579px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio sextin.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f27819_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '18','BackgroundColor': '#8A2BE2','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '15px',
                'LineHeight': '0.3em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/que-es-.html',



'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#A9A9A9',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#A9A9A9',
                             'BackgroundGradientColor2' : '#A9A9A9',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9370DB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9370DB',
                             'BackgroundGradientColor2' : '#9370DB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'X9f2879f_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,255,255,1);stroke:rgba(105,105,105,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1197px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '19','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.51',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9ce1cc7_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9ce1c2d_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9f27819_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3000,
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
},

{            

            // SCENE 6
            'Oid': 'X9ce1b10_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_6',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 4500,
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
                    'Oid': 'X9ce1b13_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1b28_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '286px',
                    'Left': '477px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '8','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1b37_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '450px',
                    'Left': '1150px',
                    'Height': '250px',
                    'Width': '120px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1bd1_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '175px',
                    'Left': '592px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/presa lazaro cardenas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f27996_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '18','BackgroundColor': '#8A2BE2','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '15px',
                'LineHeight': '0.3em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/que-es-.html',



'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#A9A9A9',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#A9A9A9',
                             'BackgroundGradientColor2' : '#A9A9A9',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9370DB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9370DB',
                             'BackgroundGradientColor2' : '#9370DB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'X9f287ad_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,255,255,1);stroke:rgba(105,105,105,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1197px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '19','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.51',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9ce1bd1_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9ce1b37_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9f27996_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3000,
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
},

{            

            // SCENE 7
            'Oid': 'X9ce19a7_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_7',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 5500,
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
                    'Oid': 'X9ce19aa_db1a46bebdb3b6ede128be0f230b4ef0',                
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
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce19bc_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '360px',
                    'Left': '543px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce19ce_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '450px',
                    'Left': '1150px',
                    'Height': '250px',
                    'Width': '120px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1a6b_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '158px',
                    'Left': '27px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio nazas-1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f27a0d_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '18','BackgroundColor': '#8A2BE2','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '15px',
                'LineHeight': '0.3em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/que-es-.html',



'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#A9A9A9',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#A9A9A9',
                             'BackgroundGradientColor2' : '#A9A9A9',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9370DB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9370DB',
                             'BackgroundGradientColor2' : '#9370DB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'X9f287c3_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,255,255,1);stroke:rgba(105,105,105,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1197px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '19','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.51',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f31f73_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<audio  controls><source src="' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio_nazas.mp3"  type="audio/mp3"/></audio>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '180px',
                    'Left': '370px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '20','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/icono_audio.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce1a6b_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9ce19ce_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9ce19bc_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9f27a0d_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3000,
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
                            'ObjectId':'X9f31f73_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':4500,
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
            'Oid': 'X9ce1530_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_8',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 5000,
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
                    'Oid': 'X9ce1533_db1a46bebdb3b6ede128be0f230b4ef0',                
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
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce153f_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '314px',
                    'Left': '578px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1557_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '450px',
                    'Left': '1150px',
                    'Height': '250px',
                    'Width': '120px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce15f1_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '189px',
                    'Left': '24px',
                    'Height': '450px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/arroyo naitcha.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f282e3_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '18','BackgroundColor': '#8A2BE2','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '15px',
                'LineHeight': '0.3em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/que-es-.html',



'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#A9A9A9',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#A9A9A9',
                             'BackgroundGradientColor2' : '#A9A9A9',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9370DB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9370DB',
                             'BackgroundGradientColor2' : '#9370DB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'X9f287d4_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,255,255,1);stroke:rgba(105,105,105,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1197px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '19','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.51',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f31ddf_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<audio  controls><source src="' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/arroyo naitcha.mp3"  type="audio/mp3"/></audio>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '217px',
                    'Left': '368px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '20','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/icono_audio.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce15f1_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9ce1557_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9f282e3_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3000,
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
                            'ObjectId':'X9f31ddf_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':4000,
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
            'Oid': 'X9ce131a_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_9',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 5500,
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
                    'Oid': 'X9ce131d_db1a46bebdb3b6ede128be0f230b4ef0',                
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
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce132c_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '583px',
                    'Left': '628px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1341_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '450px',
                    'Left': '1150px',
                    'Height': '250px',
                    'Width': '120px',
                    'ZIndex': '13','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cf6a23_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '167px',
                    'Left': '61px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio del peñon.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f283f0_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '18','BackgroundColor': '#8A2BE2','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '15px',
                'LineHeight': '0.3em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/que-es-.html',



'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#A9A9A9',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#A9A9A9',
                             'BackgroundGradientColor2' : '#A9A9A9',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9370DB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9370DB',
                             'BackgroundGradientColor2' : '#9370DB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'X9f287e4_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,255,255,1);stroke:rgba(105,105,105,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1197px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '19','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.51',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f31867_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<audio  controls><source src="' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio_peñon.mp3"  type="audio/mp3"/></audio>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '189px',
                    'Left': '397px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '20','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/icono_audio.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cf6a23_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9ce1341_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9f283f0_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3000,
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
                            'ObjectId':'X9f31867_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':4500,
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
            'Oid': 'X9ce0d63_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_10',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 4500,
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
                    'Oid': 'X9ce0d66_db1a46bebdb3b6ede128be0f230b4ef0',                
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
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0d6f_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '388px',
                    'Left': '688px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0e08_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '172px',
                    'Left': '40px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/presa fco zarco.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': '_8f4e211c-5527-4694-a585-10a9897645e6_db1a46bebdb3b6ede128be0f230b4ef0',                
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
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cf70b4_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '450px',
                    'Left': '1150px',
                    'Height': '250px',
                    'Width': '120px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f28618_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '10','BackgroundColor': '#8A2BE2','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '15px',
                'LineHeight': '0.3em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/que-es-.html',



'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#A9A9A9',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#A9A9A9',
                             'BackgroundGradientColor2' : '#A9A9A9',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9370DB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9370DB',
                             'BackgroundGradientColor2' : '#9370DB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'X9f287f2_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,255,255,1);stroke:rgba(105,105,105,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1200px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '11','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.51',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9ce0e08_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9cf70b4_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9f28618_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3000,
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
},

{            

            // SCENE 11
            'Oid': 'X9ce0213_db1a46bebdb3b6ede128be0f230b4ef0',
            'Name': 'SCENE_11',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 4500,
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
                    'Oid': 'X9ce0216_db1a46bebdb3b6ede128be0f230b4ef0',                
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
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0219_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '342px',
                    'Left': '767px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0825_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '450px',
                    'Left': '1150px',
                    'Height': '250px',
                    'Width': '120px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cf6dc9_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '160px',
                    'Left': '79px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/cañon fdez-1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f286c1_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '390px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '11','BackgroundColor': '#8A2BE2','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#B5B5B5',
                        'BorderLeftWidth': '1px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#B5B5B5',
                        'BorderRightWidth': '1px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#B5B5B5',
                        'BorderTopWidth': '1px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#B5B5B5',
                        'BorderBottomWidth': '1px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#F5F5F5',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '15px',
                'LineHeight': '0.3em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/que-es-.html',



'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#A9A9A9',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#A9A9A9',
                             'BackgroundGradientColor2' : '#A9A9A9',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '16'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9370DB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9370DB',
                             'BackgroundGradientColor2' : '#9370DB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'X9f28802_db1a46bebdb3b6ede128be0f230b4ef0',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(255,255,255,1);stroke:rgba(105,105,105,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1200px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '12','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.51',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9cf6dc9_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9ce0825_db1a46bebdb3b6ede128be0f230b4ef0',
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
                            'ObjectId':'X9f286c1_db1a46bebdb3b6ede128be0f230b4ef0',
                            'StartTime':3000,
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
            LA_CUENCA_NAZAS.stageInitialScene = 'X9cdfb7d_db1a46bebdb3b6ede128be0f230b4ef0';
            LA_CUENCA_NAZAS.debug = false;
            LA_CUENCA_NAZAS.preloadImages = true;
LA_CUENCA_NAZAS.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda11.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio santiago.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio tepehuanes.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio_tepehuanes.mp3',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/icono_audio.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio ramos.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio_ramos.mp3',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/icono_audio.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio sextin.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/presa lazaro cardenas.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio nazas-1.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio_nazas.mp3',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/icono_audio.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/arroyo naitcha.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/arroyo naitcha.mp3',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/icono_audio.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio del peñon.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/rio_peñon.mp3',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/icono_audio.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/presa fco zarco.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/fondo_animacion_cuenca_nazas_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/puntero_3d_rojo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/jaa_izquierda_2.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_9_01/cañon fdez-1.png'
];LA_CUENCA_NAZAS.createWorkspace('imObjectAnimation_9_01_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_9_01_stage');
addLoadEvent(LA_CUENCA_NAZASstart);


 })( wajq );