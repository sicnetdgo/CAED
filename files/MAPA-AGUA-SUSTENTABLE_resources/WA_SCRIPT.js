
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

            loadjscssfile("MAPA-AGUA-SUSTENTABLE_resources/WA.min.js", "js");
            loadjscssfile("MAPA-AGUA-SUSTENTABLE_resources/modernizr.custom.43133.min.js", "js");
            loadjscssfile("MAPA-AGUA-SUSTENTABLE_resources/spin.min.js", "js");

            loadjscssfile("MAPA-AGUA-SUSTENTABLE_resources/JQ_Textualizer.min.js", "js");
            loadjscssfile("MAPA-AGUA-SUSTENTABLE_resources/WA.min.css", "css");            
       }
	   
	   loadjscssfile("MAPA-AGUA-SUSTENTABLE_resources/ani.css", "css");                          
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
            'Oid': 'X998ca83',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
            'SceneEnd': 1300,
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
                    'Oid': 'X998d455',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a5c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '237px',
                    'Left': '263px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '10','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc486f',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a65',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '294px',
                    'Left': '304px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '11','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc4d07',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a6c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '277px',
                    'Left': '426px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '12','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc567e',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cb0a72',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '366px',
                    'Left': '416px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '13','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9cc5967',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc354d',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '8px',
                    'Left': '860px',
                    'Height': '533px',
                    'Width': '413px',
                    'ZIndex': '17','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/por que agua saludable.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ccd4cd',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '320px',
                    'Left': '218px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '18','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',


'OnMouseOver' : 2,
'OnMouseOverParam' : 'X9ccd10d',
'OnMouseOverTransition' : 'instant',
'OnMouseOverTransitionSpeed' : '0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6dac34',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '60px',
                    'Left': '366px',
                    'Height': '110px',
                    'Width': '100px',
                    'ZIndex': '19','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera mapimi.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6dac50',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '126px',
                    'Left': '583px',
                    'Height': '108px',
                    'Width': '114px',
                    'ZIndex': '20','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera tlahualilo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6dac6d',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '173px',
                    'Left': '326px',
                    'Height': '111px',
                    'Width': '100px',
                    'ZIndex': '21','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera lerdo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6dac92',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '209px',
                    'Left': '466px',
                    'Height': '111px',
                    'Width': '101px',
                    'ZIndex': '22','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera gomez palacio.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6dacb4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '334px',
                    'Left': '538px',
                    'Height': '109px',
                    'Width': '121px',
                    'ZIndex': '23','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera matamoros.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6dacf3',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '292px',
                    'Left': '467px',
                    'Height': '109px',
                    'Width': '100px',
                    'ZIndex': '24','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera torreón.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6dad36',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '455px',
                    'Left': '475px',
                    'Height': '109px',
                    'Width': '99px',
                    'ZIndex': '25','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera viesca.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6dad5f',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '211px',
                    'Left': '753px',
                    'Height': '109px',
                    'Width': '101px',
                    'ZIndex': '26','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera fco i madero.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6dad81',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '360px',
                    'Left': '729px',
                    'Height': '110px',
                    'Width': '110px',
                    'ZIndex': '27','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera san pedro.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
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
                            'ObjectId':'X9cb0a5c',
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
                            'ObjectId':'X9cc354d',
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
                            'ObjectId':'X9cb0a65',
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
                            'ObjectId':'X9ccd4cd',
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
                            'ObjectId':'X9cb0a6c',
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
                            'ObjectId':'X9cb0a72',
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
            'Oid': 'X9cc5967',
            'Name': 'SCENE_2',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
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
                    'Oid': 'X9cc596a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc5979',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '366px',
                    'Left': '416px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '13','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc59fb',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '152px',
                    'Left': '682px',
                    'Height': '416px',
                    'Width': '395px',
                    'ZIndex': '18','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/lineas gravedad.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cff571',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(65,105,225,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1200px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '21','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X998ca83',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f2993a',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '50px',
                    'Left': '850px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '22','BackgroundColor': '#4169E1','Display': 'block','TextAlign': 'Center',
                
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
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/agua-saludable.html',



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
                            'BackgroundColor': '#6495ED',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#6495ED',
                             'BackgroundGradientColor2' : '#6495ED',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'Xa6daf7e',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '324px',
                    'Left': '461px',
                    'Height': '111px',
                    'Width': '101px',
                    'ZIndex': '23','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/tanque coahuila.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6db1f7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '280px',
                    'Left': '457px',
                    'Height': '110px',
                    'Width': '90px',
                    'ZIndex': '24','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera torreón.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
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
                            'ObjectId':'X9cc59fb',
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
                            'ObjectId':'X9f2993a',
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
            'Oid': 'X9cc567e',
            'Name': 'SCENE_3',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
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
                    'Oid': 'X9cc5681',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc568d',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '277px',
                    'Left': '426px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '12','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc5764',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '152px',
                    'Left': '672px',
                    'Height': '416px',
                    'Width': '395px',
                    'ZIndex': '18','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/lineas gravedad.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cff5bf',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(65,105,225,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1200px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '21','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X998ca83',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f29c65',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '50px',
                    'Left': '800px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '22','BackgroundColor': '#4169E1','Display': 'block','TextAlign': 'Center',
                
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
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/agua-saludable.html',



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
                            'BackgroundColor': '#6495ED',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#6495ED',
                             'BackgroundGradientColor2' : '#6495ED',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'Xa6db0e7',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '214px',
                    'Left': '455px',
                    'Height': '110px',
                    'Width': '101px',
                    'ZIndex': '23','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/tanque durango.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6db254',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '251px',
                    'Left': '508px',
                    'Height': '109px',
                    'Width': '90px',
                    'ZIndex': '24','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera gomez palacio.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
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
                            'ObjectId':'X9cc5764',
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
                            'ObjectId':'X9f29c65',
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

            // SCENE 4
            'Oid': 'X9cc4d07',
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
                    'Oid': 'X9cc4d0a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4d13',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '294px',
                    'Left': '304px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '11','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 4,
'OnMouseClickParam' : 'https://trial-8899.websitex5.me/agua-saludable.html',



'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4fba',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '211px',
                    'Left': '826px',
                    'Height': '380px',
                    'Width': '416px',
                    'ZIndex': '23','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/planta bombeo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cff685',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(65,105,225,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1200px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '21','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X998ca83',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f29e4b',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '100px',
                    'Left': '665px',
                    'Height': '420px',
                    'Width': '380px',
                    'ZIndex': '22','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/planta derivadora1111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f29f14',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '100px',
                    'Left': '1100px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '24','BackgroundColor': '#4169E1','Display': 'block','TextAlign': 'Center',
                
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
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/agua-saludable.html',



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
                            'BackgroundColor': '#6495ED',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#6495ED',
                             'BackgroundGradientColor2' : '#6495ED',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'Xa6db165',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '223px',
                    'Left': '337px',
                    'Height': '111px',
                    'Width': '111px',
                    'ZIndex': '25','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/derivadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6db197',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '270px',
                    'Left': '364px',
                    'Height': '109px',
                    'Width': '90px',
                    'ZIndex': '26','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera lerdo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
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
                            'ObjectId':'X9f29f14',
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
                            'ObjectId':'X9cc4fba',
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
            'Oid': 'X9ccd10d',
            'Name': 'SCENE_5',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
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
                    'Oid': 'X9ccd110',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9ccd113',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '320px',
                    'Left': '218px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '11','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cce554',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '98px',
                    'Left': '820px',
                    'Height': '460px',
                    'Width': '380px',
                    'ZIndex': '20','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/cañon fdez 2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cff6b5',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(65,105,225,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1200px',
                    'Height': '80px',
                    'Width': '80px',
                    'ZIndex': '23','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X998ca83',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f2a041',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '70px',
                    'Left': '620px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '24','BackgroundColor': '#4169E1','Display': 'block','TextAlign': 'Center',
                
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
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/agua-saludable.html',



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
                            'BackgroundColor': '#6495ED',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#6495ED',
                             'BackgroundGradientColor2' : '#6495ED',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'Xa6db314',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '251px',
                    'Left': '250px',
                    'Height': '109px',
                    'Width': '90px',
                    'ZIndex': '25','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera cañon fdez.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6db339',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '273px',
                    'Left': '346px',
                    'Height': '110px',
                    'Width': '91px',
                    'ZIndex': '26','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera lerdo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
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
                            'ObjectId':'X9cce554',
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
                            'ObjectId':'X9f2a041',
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
            'Oid': 'X9cc486f',
            'Name': 'SCENE_6',
            'Autostart': 'true',
            'BackgroundColor': '#ffffff',
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
                    'Oid': 'X9cc4872',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '720px',
                    'Width': '1280px',
                    'ZIndex': '1','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc4878',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '237px',
                    'Left': '263px',
                    'Height': '40px',
                    'Width': '25px',
                    'ZIndex': '10','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cc48fb',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '114px',
                    'Left': '588px',
                    'Height': '420px',
                    'Width': '380px',
                    'ZIndex': '18','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/planta potabilizadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9cff6f1',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(65,105,225,1);stroke:rgba(220,220,220,1);stroke-width:3;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '1200px',
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
'OnMouseClickParam' : 'X998ca83',
'OnMouseClickTransition' : 'instant',
'OnMouseClickTransitionSpeed' : '0',


'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9f2a0d4',                
                    'Type': 'box',
                    'InnerHTML': '<P>Da Click!</P>  <P>Para saber más.</P>  '
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '100px',
                    'Left': '1112px',
                    'Height': '55px',
                    'Width': '138px',
                    'ZIndex': '21','BackgroundColor': '#4169E1','Display': 'block','TextAlign': 'Center',
                
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
'OnMouseClickParam' : 'https://sicnetdgo.github.io/CAED/agua-saludable.html',



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
                            'BackgroundColor': '#6495ED',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#6495ED',
                             'BackgroundGradientColor2' : '#6495ED',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         }],},
                {
                    'Oid': 'Xa6db3c5',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '167px',
                    'Left': '298px',
                    'Height': '110px',
                    'Width': '109px',
                    'ZIndex': '22','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/p potabilizadora.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa6db3e0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '269px',
                    'Left': '346px',
                    'Height': '109px',
                    'Width': '91px',
                    'ZIndex': '23','BackgroundImage': 'MAPA-AGUA-SUSTENTABLE_resources/bandera lerdo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
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
                            'ObjectId':'X9cc48fb',
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
                            'ObjectId':'X9f2a0d4',
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
            MAPA_AGUA_SUSTENTABLE.stageInitialScene = 'X998ca83';
            MAPA_AGUA_SUSTENTABLE.debug = false;
            MAPA_AGUA_SUSTENTABLE.preloadImages = true;
MAPA_AGUA_SUSTENTABLE.imagesToPreload = [
'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png',
'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png',
'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png',
'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png',
'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png',
'MAPA-AGUA-SUSTENTABLE_resources/por que agua saludable.png',
'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera mapimi.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera tlahualilo.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera lerdo.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera gomez palacio.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera matamoros.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera torreón.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera viesca.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera fco i madero.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera san pedro.png',
'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png',
'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png',
'MAPA-AGUA-SUSTENTABLE_resources/lineas gravedad.png',
'MAPA-AGUA-SUSTENTABLE_resources/tanque coahuila.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera torreón.png',
'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png',
'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png',
'MAPA-AGUA-SUSTENTABLE_resources/lineas gravedad.png',
'MAPA-AGUA-SUSTENTABLE_resources/tanque durango.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera gomez palacio.png',
'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png',
'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png',
'MAPA-AGUA-SUSTENTABLE_resources/planta bombeo.png',
'MAPA-AGUA-SUSTENTABLE_resources/planta derivadora1111.png',
'MAPA-AGUA-SUSTENTABLE_resources/derivadora.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera lerdo.png',
'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png',
'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png',
'MAPA-AGUA-SUSTENTABLE_resources/cañon fdez 2.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera cañon fdez.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera lerdo.png',
'MAPA-AGUA-SUSTENTABLE_resources/municipios beneficiados 96 ppp.png',
'MAPA-AGUA-SUSTENTABLE_resources/puntero_3d_rojo.png',
'MAPA-AGUA-SUSTENTABLE_resources/planta potabilizadora.png',
'MAPA-AGUA-SUSTENTABLE_resources/p potabilizadora.png',
'MAPA-AGUA-SUSTENTABLE_resources/bandera lerdo.png'
];MAPA_AGUA_SUSTENTABLE.createWorkspace('MAPA_AGUA_SUSTENTABLEStage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('MAPA_AGUA_SUSTENTABLEStage');
addLoadEvent(MAPA_AGUA_SUSTENTABLEstart);

