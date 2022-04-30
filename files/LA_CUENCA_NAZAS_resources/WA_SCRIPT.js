
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

            loadjscssfile("LA_CUENCA_NAZAS_resources/WA.min.js", "js");
            loadjscssfile("LA_CUENCA_NAZAS_resources/modernizr.custom.43133.min.js", "js");
            loadjscssfile("LA_CUENCA_NAZAS_resources/spin.min.js", "js");

            loadjscssfile("LA_CUENCA_NAZAS_resources/JQ_Textualizer.min.js", "js");
            loadjscssfile("LA_CUENCA_NAZAS_resources/WA.min.css", "css");            
       }
	   
	   loadjscssfile("LA_CUENCA_NAZAS_resources/ani.css", "css");                          
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
            'Oid': 'X9cdfb7d',
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
                    'Oid': 'X9cdfd75',                
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
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdfdef',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '184px',
                    'Left': '754px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '2','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce0213',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff36',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '232px',
                    'Left': '675px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '4','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce0d63',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff3f',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '216px',
                    'Left': '622px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '5','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1530',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff47',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '386px',
                    'Left': '640px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '6','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce131a',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff4e',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '216px',
                    'Left': '528px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '7','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce19a7',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff55',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '161px',
                    'Left': '453px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '8','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1b10',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff63',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '123px',
                    'Left': '388px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '9','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1c06',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff69',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '161px',
                    'Left': '227px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '10','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1def',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff6e',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '322px',
                    'Left': '370px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '11','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce2001',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cdff73',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '222px',
                    'Left': '361px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '12','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ce1d05',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9cdff6e',
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
                            'ObjectId':'X9cdff69',
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
                            'ObjectId':'X9cdff73',
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
                            'ObjectId':'X9cdff63',
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
                            'ObjectId':'X9cdff55',
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
                            'ObjectId':'X9cdff47',
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
                            'ObjectId':'X9cdff3f',
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
                            'ObjectId':'X9cdff4e',
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
                            'ObjectId':'X9cdff36',
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
                            'ObjectId':'X9cdfdef',
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
                            'ObjectId':'X9cdfd75',
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
            'Oid': 'X9ce2001',
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
                    'Oid': 'X9ce2004',                
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
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce200a',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(138,43,226,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
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
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce2022',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '322px',
                    'Left': '370px',
                    'Height': '54px',
                    'Width': '35px',
                    'ZIndex': '11','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f1c3d5',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '110px',
                    'Left': '507px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '15','BackgroundImage': 'LA_CUENCA_NAZAS_resources/rio santiago.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f257b5',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '200px',
                    'Left': '1000px',
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
                            'ObjectId':'X9f1c3d5',
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
                            'ObjectId':'X9f257b5',
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
            'Oid': 'X9ce1def',
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
                    'Oid': 'X9ce1df2',                
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
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1e0d',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '161px',
                    'Left': '227px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '10','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1eb0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '61px',
                    'Left': '487px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': 'LA_CUENCA_NAZAS_resources/rio tepehuanes.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9d456c7',                
                    'Type': 'box',
                    'InnerHTML': '<audio  controls><source src="LA_CUENCA_NAZAS_resources/rio_tepehuanes.mp3"  type="audio/mp3"/></audio>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '89px',
                    'Left': '836px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '18','BackgroundImage': 'LA_CUENCA_NAZAS_resources/icono_escucha_activa.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f2764e',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '200px',
                    'Left': '1000px',
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
                            'Property': 'Left',
                            'EndValue': '-118px'
                         },
                         {
                            'Property': 'Top',
                            'EndValue': '-194px'
                         },
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
                            'Property': 'Left',
                            'EndValue': '-118px'
                         },
                         {
                            'Property': 'Top',
                            'EndValue': '-194px'
                         },
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
                    'Oid': 'X9f28777',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(138,43,226,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
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
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9ce1eb0',
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
                            'ObjectId':'X9f2764e',
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
                            'ObjectId':'X9d456c7',
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
            'Oid': 'X9ce1d05',
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
                    'Oid': 'X9ce1d08',                
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
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1d29',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '222px',
                    'Left': '361px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '12','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1dc6',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '151px',
                    'Left': '575px',
                    'Height': '450px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': 'LA_CUENCA_NAZAS_resources/rio ramos.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f276e8',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '200px',
                    'Left': '1050px',
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
                    'Oid': 'X9f2878a',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(138,43,226,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
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
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f3291b',                
                    'Type': 'box',
                    'InnerHTML': '<audio  controls><source src="LA_CUENCA_NAZAS_resources/rio_ramos.mp3"  type="audio/mp3"/></audio>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '182px',
                    'Left': '920px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '20','BackgroundImage': 'LA_CUENCA_NAZAS_resources/icono_escucha_activa.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce1dc6',
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
                            'ObjectId':'X9f276e8',
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
                            'ObjectId':'X9f3291b',
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
            'Oid': 'X9ce1c06',
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
                    'Oid': 'X9ce1c09',                
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
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1c21',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '123px',
                    'Left': '388px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '9','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1cc7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '59px',
                    'Left': '529px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': 'LA_CUENCA_NAZAS_resources/rio sextin.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f27819',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '200px',
                    'Left': '1000px',
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
                    'Oid': 'X9f2879f',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(138,43,226,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
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
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9ce1cc7',
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
                            'ObjectId':'X9f27819',
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
            'Oid': 'X9ce1b10',
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
                    'Oid': 'X9ce1b13',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1b28',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '161px',
                    'Left': '453px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '8','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1bd1',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '68px',
                    'Left': '556px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': 'LA_CUENCA_NAZAS_resources/presa lazaro cardenas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f27996',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '200px',
                    'Left': '1050px',
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
                    'Oid': 'X9f287ad',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(138,43,226,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
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
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9ce1bd1',
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
                            'ObjectId':'X9f27996',
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
            'Oid': 'X9ce19a7',
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
                    'Oid': 'X9ce19aa',                
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
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce19bc',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '216px',
                    'Left': '528px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '7','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce1a6b',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '95px',
                    'Left': '656px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': 'LA_CUENCA_NAZAS_resources/rio nazas-1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f27a0d',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '200px',
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
                    'Oid': 'X9f287c3',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(138,43,226,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
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
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f31f73',                
                    'Type': 'box',
                    'InnerHTML': '<audio  controls><source src="LA_CUENCA_NAZAS_resources/rio_nazas.mp3"  type="audio/mp3"/></audio>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '119px',
                    'Left': '999px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '20','BackgroundImage': 'LA_CUENCA_NAZAS_resources/icono_escucha_activa.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce1a6b',
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
                            'ObjectId':'X9ce19bc',
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
                            'ObjectId':'X9f27a0d',
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
                            'ObjectId':'X9f31f73',
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
            'Oid': 'X9ce1530',
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
                    'Oid': 'X9ce1533',                
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
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce153f',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '216px',
                    'Left': '622px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '5','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce15f1',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '90px',
                    'Left': '126px',
                    'Height': '450px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': 'LA_CUENCA_NAZAS_resources/arroyo naitcha.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f282e3',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '100px',
                    'Left': '600px',
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
                    'Oid': 'X9f287d4',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(138,43,226,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
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
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f31ddf',                
                    'Type': 'box',
                    'InnerHTML': '<audio  controls><source src="LA_CUENCA_NAZAS_resources/arroyo naitcha.mp3"  type="audio/mp3"/></audio>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '125px',
                    'Left': '471px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '20','BackgroundImage': 'LA_CUENCA_NAZAS_resources/icono_escucha_activa.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9ce15f1',
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
                            'ObjectId':'X9f282e3',
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
                            'ObjectId':'X9f31ddf',
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
            'Oid': 'X9ce131a',
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
                    'Oid': 'X9ce131d',                
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
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce132c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '386px',
                    'Left': '640px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '6','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cf6a23',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '53px',
                    'Left': '140px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '16','BackgroundImage': 'LA_CUENCA_NAZAS_resources/rio del peñon.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f283f0',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '100px',
                    'Left': '620px',
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
                    'Oid': 'X9f287e4',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(138,43,226,1);stroke:rgba(220,220,220,1);stroke-width:4;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
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
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f31867',                
                    'Type': 'box',
                    'InnerHTML': '<audio  controls><source src="LA_CUENCA_NAZAS_resources/rio_peñon.mp3"  type="audio/mp3"/></audio>'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '75px',
                    'Left': '488px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '20','BackgroundImage': 'LA_CUENCA_NAZAS_resources/icono_escucha_activa.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
                            'ObjectId':'X9cf6a23',
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
                            'ObjectId':'X9f283f0',
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
                            'ObjectId':'X9f31867',
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
            'Oid': 'X9ce0d63',
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
                    'Oid': 'X9ce0d66',                
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
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0d6f',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '232px',
                    'Left': '675px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '4','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0e08',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '63px',
                    'Left': '154px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '6','BackgroundImage': 'LA_CUENCA_NAZAS_resources/presa fco zarco.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': '_8f4e211c-5527-4694-a585-10a9897645e6',                
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
                    'Oid': 'X9f28618',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '100px',
                    'Left': '620px',
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
                    'Oid': 'X9f287f2',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(138,43,226,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
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
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9ce0e08',
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
                            'ObjectId':'X9f28618',
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
            'Oid': 'X9ce0213',
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
                    'Oid': 'X9ce0216',                
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
                    'ZIndex': '1','BackgroundImage': 'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ce0219',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '184px',
                    'Left': '754px',
                    'Height': '55px',
                    'Width': '35px',
                    'ZIndex': '2','BackgroundImage': 'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cf6dc9',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '40px',
                    'Left': '130px',
                    'Height': '500px',
                    'Width': '463px',
                    'ZIndex': '9','BackgroundImage': 'LA_CUENCA_NAZAS_resources/cañon fdez-1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f286c1',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '100px',
                    'Left': '600px',
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
                    'Oid': 'X9f28802',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(138,43,226,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
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
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9cdfb7d',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9cf6dc9',
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
                            'ObjectId':'X9f286c1',
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
            LA_CUENCA_NAZAS.stageInitialScene = 'X9cdfb7d';
            LA_CUENCA_NAZAS.debug = false;
            LA_CUENCA_NAZAS.preloadImages = true;
LA_CUENCA_NAZAS.imagesToPreload = [
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/rio santiago.png',
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/rio tepehuanes.png',
'LA_CUENCA_NAZAS_resources/rio_tepehuanes.mp3',
'LA_CUENCA_NAZAS_resources/icono_escucha_activa.png',
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/rio ramos.png',
'LA_CUENCA_NAZAS_resources/rio_ramos.mp3',
'LA_CUENCA_NAZAS_resources/icono_escucha_activa.png',
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/rio sextin.png',
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/presa lazaro cardenas.png',
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/rio nazas-1.png',
'LA_CUENCA_NAZAS_resources/rio_nazas.mp3',
'LA_CUENCA_NAZAS_resources/icono_escucha_activa.png',
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/arroyo naitcha.png',
'LA_CUENCA_NAZAS_resources/arroyo naitcha.mp3',
'LA_CUENCA_NAZAS_resources/icono_escucha_activa.png',
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/rio del peñon.png',
'LA_CUENCA_NAZAS_resources/rio_peñon.mp3',
'LA_CUENCA_NAZAS_resources/icono_escucha_activa.png',
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/presa fco zarco.png',
'LA_CUENCA_NAZAS_resources/mapa animacion-la cuenca del nazas.png',
'LA_CUENCA_NAZAS_resources/puntero_3d_rojo.png',
'LA_CUENCA_NAZAS_resources/cañon fdez-1.png'
];LA_CUENCA_NAZAS.createWorkspace('LA_CUENCA_NAZASStage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('LA_CUENCA_NAZASStage');
addLoadEvent(LA_CUENCA_NAZASstart);

