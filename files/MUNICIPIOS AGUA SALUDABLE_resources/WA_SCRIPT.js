
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

            loadjscssfile("MUNICIPIOS AGUA SALUDABLE_resources/WA.min.js", "js");
            loadjscssfile("MUNICIPIOS AGUA SALUDABLE_resources/modernizr.custom.43133.min.js", "js");
            loadjscssfile("MUNICIPIOS AGUA SALUDABLE_resources/spin.min.js", "js");

            loadjscssfile("MUNICIPIOS AGUA SALUDABLE_resources/JQ_Textualizer.min.js", "js");
            loadjscssfile("MUNICIPIOS AGUA SALUDABLE_resources/WA.min.css", "css");            
       }
	   
	   loadjscssfile("MUNICIPIOS AGUA SALUDABLE_resources/ani.css", "css");                          
}
	// Global variables




function MUNICIPIOS_AGUA_SALUDABLEstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var MUNICIPIOS_AGUA_SALUDABLE = new WA();
MUNICIPIOS_AGUA_SALUDABLE.custom = {
}

MUNICIPIOS_AGUA_SALUDABLE.stage = [{            

            // SCENE 1
            'Oid': 'X9fa7998',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#FFFFFF',
            'SceneEnd': 4900,
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
                    'Oid': 'X9fa9da2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-260px',
                    'Left': '-90px',
                    'Height': '694px',
                    'Width': '802px',
                    'ZIndex': '1','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/ubicacion_municipios11.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fa9f7b',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '947px',
                    'Left': '18px',
                    'Height': '142px',
                    'Width': '114px',
                    'ZIndex': '2','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mpio_tlahualilo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fa9fb5',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '90px',
                    'Left': '-7px',
                    'Height': '204px',
                    'Width': '152px',
                    'ZIndex': '3','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mpio_mapimi.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fa9fd6',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '53px',
                    'Left': '355px',
                    'Height': '57px',
                    'Width': '58px',
                    'ZIndex': '4','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mpio_gomezp.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fa9fef',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '978px',
                    'Left': '886px',
                    'Height': '94px',
                    'Width': '88px',
                    'ZIndex': '5','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mpio_lerdo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab14a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-26px',
                    'Left': '1794px',
                    'Height': '161px',
                    'Width': '82px',
                    'ZIndex': '6','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mpio_fcomadero.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab18a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '935px',
                    'Left': '1571px',
                    'Height': '163px',
                    'Width': '206px',
                    'ZIndex': '7','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mpio_sanpedro.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab1cf',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '12px',
                    'Left': '459px',
                    'Height': '63px',
                    'Width': '48px',
                    'ZIndex': '8','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mpio_matamoros.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab1f0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '958px',
                    'Left': '332px',
                    'Height': '145px',
                    'Width': '87px',
                    'ZIndex': '9','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mpio_torreon.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab226',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '261px',
                    'Left': '456px',
                    'Height': '140px',
                    'Width': '134px',
                    'ZIndex': '10','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mpio_viesca.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab4cd',                
                    'Type': 'box',
                    'InnerHTML': 'GÓMEZ PALACIO'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '100px',
                    'Left': '1500px',
                    'Height': '40px',
                    'Width': '250px',
                    'ZIndex': '11','BackgroundColor': '#2A2AFF','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#A9A9A9',
                        'BorderLeftWidth': '3px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#A9A9A9',
                        'BorderRightWidth': '3px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#A9A9A9',
                        'BorderTopWidth': '3px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#A9A9A9',
                        'BorderBottomWidth': '3px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '24px',
                'LineHeight': '1.8em',

                               
                        'BoxShadow': [{
                                'OffsetX': '2px',
                                'OffsetY':'2px',
                                'BlurRadius' : '2px',
                                'Color' : '#000000'
                        }],  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9fac30c',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '500',


'Pressed': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#ABABAB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#ABABAB',
                             'BackgroundGradientColor2' : '#ABABAB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'BorderBottomColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderLeftColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderRightColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderTopColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '3px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#FFFFFF'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#5858FF',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#5858FF',
                             'BackgroundGradientColor2' : '#5858FF',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#000000'
                         }],},
                {
                    'Oid': 'X9fab8d7',                
                    'Type': 'box',
                    'InnerHTML': 'LERDO'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '180px',
                    'Left': '1500px',
                    'Height': '40px',
                    'Width': '250px',
                    'ZIndex': '12','BackgroundColor': '#5F5FD3','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#A9A9A9',
                        'BorderLeftWidth': '3px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#A9A9A9',
                        'BorderRightWidth': '3px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#A9A9A9',
                        'BorderTopWidth': '3px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#A9A9A9',
                        'BorderBottomWidth': '3px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '24px',
                'LineHeight': '1.8em',

                               
                        'BoxShadow': [{
                                'OffsetX': '2px',
                                'OffsetY':'2px',
                                'BlurRadius' : '2px',
                                'Color' : '#000000'
                        }],  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9fb9281',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '500',


'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#ABABAB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#ABABAB',
                             'BackgroundGradientColor2' : '#ABABAB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'BorderBottomColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderLeftColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderRightColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderTopColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '3px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#FFFFFF'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#9D9DFC',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#9D9DFC',
                             'BackgroundGradientColor2' : '#9D9DFC',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#000000'
                         }],},
                {
                    'Oid': 'X9fab9ec',                
                    'Type': 'box',
                    'InnerHTML': 'TLAHUALILO'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '260px',
                    'Left': '1500px',
                    'Height': '40px',
                    'Width': '250px',
                    'ZIndex': '13','BackgroundColor': '#5F8DD3','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#A9A9A9',
                        'BorderLeftWidth': '3px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#A9A9A9',
                        'BorderRightWidth': '3px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#A9A9A9',
                        'BorderTopWidth': '3px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#A9A9A9',
                        'BorderBottomWidth': '3px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '24px',
                'LineHeight': '1.8em',

                               
                        'BoxShadow': [{
                                'OffsetX': '2px',
                                'OffsetY':'2px',
                                'BlurRadius' : '2px',
                                'Color' : '#000000'
                        }],  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9fc0b96',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '500',


'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#ABABAB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#ABABAB',
                             'BackgroundGradientColor2' : '#ABABAB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'BorderBottomColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderLeftColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderRightColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderTopColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '3px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#FFFFFF'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#97B5FC',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#97B5FC',
                             'BackgroundGradientColor2' : '#97B5FC',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#000000'
                         }],},
                {
                    'Oid': 'X9fabb9e',                
                    'Type': 'box',
                    'InnerHTML': 'MAPIMÍ'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '340px',
                    'Left': '1500px',
                    'Height': '40px',
                    'Width': '250px',
                    'ZIndex': '14','BackgroundColor': '#2A7FFF','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#A9A9A9',
                        'BorderLeftWidth': '3px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#A9A9A9',
                        'BorderRightWidth': '3px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#A9A9A9',
                        'BorderTopWidth': '3px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#A9A9A9',
                        'BorderBottomWidth': '3px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '24px',
                'LineHeight': '1.8em',

                               
                        'BoxShadow': [{
                                'OffsetX': '2px',
                                'OffsetY':'2px',
                                'BlurRadius' : '2px',
                                'Color' : '#000000'
                        }],  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9fc0202',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '500',


'Pressed': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#ABABAB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#ABABAB',
                             'BackgroundGradientColor2' : '#ABABAB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'BorderBottomColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderLeftColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderRightColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderTopColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '3px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#FFFFFF'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#63A2FF',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#63A2FF',
                             'BackgroundGradientColor2' : '#63A2FF',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#000000'
                         }],},
                {
                    'Oid': 'X9fbaee5',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '1080px',
                    'Width': '1920px',
                    'ZIndex': '0','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags11.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc3cba',                
                    'Type': 'box',
                    'InnerHTML': 'FCO I MADERO'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '580px',
                    'Left': '1500px',
                    'Height': '40px',
                    'Width': '250px',
                    'ZIndex': '15','BackgroundColor': '#FF8C00','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#A9A9A9',
                        'BorderLeftWidth': '3px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#A9A9A9',
                        'BorderRightWidth': '3px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#A9A9A9',
                        'BorderTopWidth': '3px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#A9A9A9',
                        'BorderBottomWidth': '3px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '24px',
                'LineHeight': '1.8em',

                               
                        'BoxShadow': [{
                                'OffsetX': '2px',
                                'OffsetY':'2px',
                                'BlurRadius' : '2px',
                                'Color' : '#000000'
                        }],  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9fce99f',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '500',


'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#ABABAB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#ABABAB',
                             'BackgroundGradientColor2' : '#ABABAB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'BorderBottomColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderLeftColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderRightColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderTopColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '3px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#FFFFFF'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#F4A460',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#F4A460',
                             'BackgroundGradientColor2' : '#F4A460',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#000000'
                         }],},
                {
                    'Oid': 'X9fc4333',                
                    'Type': 'box',
                    'InnerHTML': 'SAN PEDRO'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '660px',
                    'Left': '1500px',
                    'Height': '40px',
                    'Width': '250px',
                    'ZIndex': '16','BackgroundColor': '#CD5C5C','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#A9A9A9',
                        'BorderLeftWidth': '3px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#A9A9A9',
                        'BorderRightWidth': '3px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#A9A9A9',
                        'BorderTopWidth': '3px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#A9A9A9',
                        'BorderBottomWidth': '3px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '24px',
                'LineHeight': '1.8em',

                               
                        'BoxShadow': [{
                                'OffsetX': '2px',
                                'OffsetY':'2px',
                                'BlurRadius' : '2px',
                                'Color' : '#000000'
                        }],  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9fcf727',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '500',


'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#ABABAB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#ABABAB',
                             'BackgroundGradientColor2' : '#ABABAB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'BorderBottomColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderLeftColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderRightColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderTopColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '3px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#FFFFFF'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#F08080',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#F08080',
                             'BackgroundGradientColor2' : '#F08080',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#000000'
                         }],},
                {
                    'Oid': 'X9fc44b2',                
                    'Type': 'box',
                    'InnerHTML': 'TORREÓN'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '500px',
                    'Left': '1500px',
                    'Height': '40px',
                    'Width': '250px',
                    'ZIndex': '17','BackgroundColor': '#FF5555','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#A9A9A9',
                        'BorderLeftWidth': '3px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#A9A9A9',
                        'BorderRightWidth': '3px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#A9A9A9',
                        'BorderTopWidth': '3px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#A9A9A9',
                        'BorderBottomWidth': '3px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '24px',
                'LineHeight': '1.8em',

                               
                        'BoxShadow': [{
                                'OffsetX': '2px',
                                'OffsetY':'2px',
                                'BlurRadius' : '2px',
                                'Color' : '#000000'
                        }],  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9fcd6a0',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '500',


'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#ABABAB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#ABABAB',
                             'BackgroundGradientColor2' : '#ABABAB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'BorderBottomColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderLeftColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderRightColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderTopColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '3px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#FFFFFF'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#F5706E',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#F5706E',
                             'BackgroundGradientColor2' : '#F5706E',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#000000'
                         }],},
                {
                    'Oid': 'X9fc49f7',                
                    'Type': 'box',
                    'InnerHTML': 'MATAMOROS'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '740px',
                    'Left': '1500px',
                    'Height': '40px',
                    'Width': '250px',
                    'ZIndex': '18','BackgroundColor': '#A0522D','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#A9A9A9',
                        'BorderLeftWidth': '3px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#A9A9A9',
                        'BorderRightWidth': '3px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#A9A9A9',
                        'BorderTopWidth': '3px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#A9A9A9',
                        'BorderBottomWidth': '3px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '24px',
                'LineHeight': '1.8em',

                               
                        'BoxShadow': [{
                                'OffsetX': '2px',
                                'OffsetY':'2px',
                                'BlurRadius' : '2px',
                                'Color' : '#000000'
                        }],  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9fcde1d',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '500',


'Pressed': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#ABABAB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#ABABAB',
                             'BackgroundGradientColor2' : '#ABABAB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'BorderBottomColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderLeftColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderRightColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderTopColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '3px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#FFFFFF'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'ZIndex',
                            'EndValue': '11'
                         },
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#D2691E',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#D2691E',
                             'BackgroundGradientColor2' : '#D2691E',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#000000'
                         }],},
                {
                    'Oid': 'X9fc4b44',                
                    'Type': 'box',
                    'InnerHTML': 'VIESCA'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '820px',
                    'Left': '1500px',
                    'Height': '40px',
                    'Width': '250px',
                    'ZIndex': '19','BackgroundColor': '#D38D5F','Display': 'block','TextAlign': 'Center',
                
                        'BorderLeftColor': '#A9A9A9',
                        'BorderLeftWidth': '3px',
                        'BorderLeftStyle': 'solid', 
                        'BorderRightColor': '#A9A9A9',
                        'BorderRightWidth': '3px',
                        'BorderRightStyle': 'solid', 
                        'BorderTopColor': '#A9A9A9',
                        'BorderTopWidth': '3px',
                        'BorderTopStyle': 'solid', 
                        'BorderBottomColor': '#A9A9A9',
                        'BorderBottomWidth': '3px',
                        'BorderBottomStyle': 'solid','BorderRadiusTopLeft': '5px',
'BorderRadiusTopRight': '5px',
'BorderRadiusBottomLeft': '5px',
'BorderRadiusBottomRight': '5px',
'Bold': 'true',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '24px',
                'LineHeight': '1.8em',

                               
                        'BoxShadow': [{
                                'OffsetX': '2px',
                                'OffsetY':'2px',
                                'BlurRadius' : '2px',
                                'Color' : '#000000'
                        }],  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '1px',
                            'OffsetY' : '1px'
                        }],

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'X9fcfef5',
'OnMouseClickTransition' : 'fade',
'OnMouseClickTransitionSpeed' : '500',


'Pressed': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#ABABAB',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#ABABAB',
                             'BackgroundGradientColor2' : '#ABABAB',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'TextColor',
                            'EndValue': '#000000'
                         },
                         {
                            'Property': 'BorderBottomColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderLeftColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderRightColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'BorderTopColor',
                            'EndValue': '#B5B5B5'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '3px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#FFFFFF'
                         }],
                    
                    'Hover': [
                         {
                            'Property': 'Background',
                            'BackgroundColor': '#FFB37E',
                             'BackgroundGradientType':'singleColor',
                             'BackgroundGradientStart' : 'left top',
                             'BackgroundGradientEnd' : 'right top',
                             'BackgroundGradientColor1' : '#FFB37E',
                             'BackgroundGradientColor2' : '#FFB37E',
                             'BackgroundGradientAngle': '90deg'
                         },
                         {
                            'Property': 'Opacity',
                            'EndValue': '1'
                         },
                         {
                            'Property': 'BoxShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '3px', 
                             'Color': '#000000'
                         },
                         {
                            'Property': 'TextShadow',
                            'OffsetX': '2px',
                             'OffsetY': '2px',
                             'BlurRadius': '2px', 
                             'Color': '#000000'
                         }],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fa9da2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '431px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'0.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '419px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'2.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fc44b2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fabb9e',
                            'StartTime':200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab4cd',
                            'StartTime':300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab9ec',
                            'StartTime':400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fc3cba',
                            'StartTime':400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fc49f7',
                            'StartTime':400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab8d7',
                            'StartTime':600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fa9da2',
                            'StartTime':700,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '568px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '212px'
                        }]
},
{
                            'ObjectId':'X9fc4333',
                            'StartTime':800,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fc4b44',
                            'StartTime':900,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fa9f7b',
                            'StartTime':1200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1045px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '233px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fa9fb5',
                            'StartTime':1200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '957px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '220px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'2.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fa9fd6',
                            'StartTime':1200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1116px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '151px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'2.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fa9fef',
                            'StartTime':1200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '783px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '648px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'2.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab14a',
                            'StartTime':1200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1276px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '343px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'2.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab18a',
                            'StartTime':1200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1483px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '422px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'2.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab1cf',
                            'StartTime':1200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1059px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '614px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab1f0',
                            'StartTime':1200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1311px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.1s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '670px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab226',
                            'StartTime':1200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '726px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '546px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'3.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fa9fd6',
                            'StartTime':2300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1088px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.7s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '364px'
                        }]
},
{
                            'ObjectId':'X9fa9fef',
                            'StartTime':2300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1050px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '383px'
                        }]
},
{
                            'ObjectId':'X9fab14a',
                            'StartTime':2300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1134px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '232px'
                        }]
},
{
                            'ObjectId':'X9fab1cf',
                            'StartTime':2300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1141px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '382px'
                        }]
},
{
                            'ObjectId':'X9fab1f0',
                            'StartTime':2300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1118px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2.3s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '394px'
                        }]
},
{
                            'ObjectId':'X9fab18a',
                            'StartTime':2500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1162px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '249px'
                        }]
},
{
                            'ObjectId':'X9fab226',
                            'StartTime':2700,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'2.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1138px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'2.2s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '403px'
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
            'Oid': 'X9fac30c',
            'Name': 'SCENE_2',
            'Autostart': 'true',
            'BackgroundColor': '#transparent',
            'SceneEnd': 3500,
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
                    'Oid': 'X9fb9580',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(235,235,235,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '950px',
                    'Left': '20px',
                    'Height': '120px',
                    'Width': '120px',
                    'ZIndex': '6','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true','OnMouseDown' : 2,
'OnMouseDownParam' : 'X9fa7998',
'OnMouseDownTransition' : 'fade',
'OnMouseDownTransitionSpeed' : '500',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbb4a1',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-1px',
                    'Left': '0px',
                    'Height': '1080px',
                    'Width': '1920px',
                    'ZIndex': '0','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbf306',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '33px',
                    'Left': '48px',
                    'Height': '411px',
                    'Width': '951px',
                    'ZIndex': '7','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/gomez ficha 1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '6px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbf342',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '500px',
                    'Left': '130px',
                    'Height': '411px',
                    'Width': '951px',
                    'ZIndex': '8','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/gomez ficha 2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '5px',
                                'OffsetY':'5px',
                                'BlurRadius' : '6px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbf37a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '33px',
                    'Left': '1484px',
                    'Height': '320px',
                    'Width': '380px',
                    'ZIndex': '9','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/gomez ficha 3.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '6px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbfc8e',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '381px',
                    'Left': '1110px',
                    'Height': '318px',
                    'Width': '721px',
                    'ZIndex': '10','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/gomez ficha 4.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'6px',
                                'BlurRadius' : '6px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc00b2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '735px',
                    'Left': '1143px',
                    'Height': '318px',
                    'Width': '721px',
                    'ZIndex': '11','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/gomez ficha 5.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fbf306',
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
                            'ObjectId':'X9fbf342',
                            'StartTime':400,
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
                            'ObjectId':'X9fc00b2',
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
                            'ObjectId':'X9fbf37a',
                            'StartTime':800,
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
                            'ObjectId':'X9fbfc8e',
                            'StartTime':1200,
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
                            'ObjectId':'X9fb9580',
                            'StartTime':2000,
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
            'Oid': 'X9fb9281',
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
                    'Oid': 'X9fb9670',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(235,235,235,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '950px',
                    'Left': '20px',
                    'Height': '120px',
                    'Width': '120px',
                    'ZIndex': '6','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true','OnMouseDown' : 2,
'OnMouseDownParam' : 'X9fa7998',
'OnMouseDownTransition' : 'fade',
'OnMouseDownTransitionSpeed' : '500',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbb5a8',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '-1px',
                    'Left': '0px',
                    'Height': '1080px',
                    'Width': '1920px',
                    'ZIndex': '0','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags1111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbd24d',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '40px',
                    'Left': '50px',
                    'Height': '450px',
                    'Width': '951px',
                    'ZIndex': '7','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/lerdo-ficha 1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '5px',
                                'OffsetY':'5px',
                                'BlurRadius' : '6px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbd2b0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '550px',
                    'Left': '130px',
                    'Height': '411px',
                    'Width': '951px',
                    'ZIndex': '8','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/lerdo-ficha 2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '5px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbd2cb',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '1480px',
                    'Height': '320px',
                    'Width': '380px',
                    'ZIndex': '9','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/ubicacion lerdo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '6px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbd323',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '370px',
                    'Left': '1130px',
                    'Height': '328px',
                    'Width': '721px',
                    'ZIndex': '10','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/hidrografia lerdo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '5px',
                                'OffsetY':'5px',
                                'BlurRadius' : '6px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fbd38c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '727px',
                    'Left': '1150px',
                    'Height': '322px',
                    'Width': '721px',
                    'ZIndex': '11','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/lerdo clima ecosistema.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '5px',
                                'OffsetY':'5px',
                                'BlurRadius' : '6px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fbd24d',
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
                            'ObjectId':'X9fbd2b0',
                            'StartTime':400,
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
                            'ObjectId':'X9fbd2cb',
                            'StartTime':800,
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
                            'ObjectId':'X9fbd323',
                            'StartTime':1200,
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
                            'ObjectId':'X9fbd38c',
                            'StartTime':1600,
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
                            'ObjectId':'X9fb9670',
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
            'Oid': 'X9fc0202',
            'Name': 'SCENE_4',
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
                    'Oid': 'X9fc021e',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '1080px',
                    'Width': '1920px',
                    'ZIndex': '1','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags11111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc0244',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(235,235,235,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '950px',
                    'Left': '20px',
                    'Height': '120px',
                    'Width': '120px',
                    'ZIndex': '2','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true','OnMouseDown' : 2,
'OnMouseDownParam' : 'X9fa7998',
'OnMouseDownTransition' : 'fade',
'OnMouseDownTransitionSpeed' : '500',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc0ab6',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '30px',
                    'Left': '36px',
                    'Height': '449px',
                    'Width': '951px',
                    'ZIndex': '3','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mapimi ficha 1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '6px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc0ac4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '527px',
                    'Left': '130px',
                    'Height': '411px',
                    'Width': '951px',
                    'ZIndex': '4','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mapimi ficha 2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '6px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc0b02',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '30px',
                    'Left': '1491px',
                    'Height': '320px',
                    'Width': '380px',
                    'ZIndex': '5','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mapimi ubicacion.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '5px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc0b1b',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '373px',
                    'Left': '1118px',
                    'Height': '236px',
                    'Width': '721px',
                    'ZIndex': '6','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mapimi ficha 3.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '5px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc0b25',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '637px',
                    'Left': '1144px',
                    'Height': '426px',
                    'Width': '721px',
                    'ZIndex': '7','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mapimi ficha 4.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '5px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fc0ab6',
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
                            'ObjectId':'X9fc0ac4',
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
                            'ObjectId':'X9fc0b02',
                            'StartTime':900,
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
                            'ObjectId':'X9fc0b1b',
                            'StartTime':1200,
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
                            'ObjectId':'X9fc0b25',
                            'StartTime':1600,
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
                            'ObjectId':'X9fc0244',
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

            // SCENE 5
            'Oid': 'X9fc0b96',
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
                    'Oid': 'X9fc0bb2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '1080px',
                    'Width': '1920px',
                    'ZIndex': '1','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc1145',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '34px',
                    'Left': '56px',
                    'Height': '449px',
                    'Width': '951px',
                    'ZIndex': '2','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/tlahua ficha 1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc115e',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '520px',
                    'Left': '130px',
                    'Height': '411px',
                    'Width': '951px',
                    'ZIndex': '3','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/tlahua ficha 2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc1173',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(235,235,235,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '950px',
                    'Left': '20px',
                    'Height': '120px',
                    'Width': '120px',
                    'ZIndex': '4','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true','OnMouseDown' : 2,
'OnMouseDownParam' : 'X9fa7998',
'OnMouseDownTransition' : 'fade',
'OnMouseDownTransitionSpeed' : '500',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc119a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '22px',
                    'Left': '1492px',
                    'Height': '320px',
                    'Width': '380px',
                    'ZIndex': '5','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/tlahua ubicacion.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc11af',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '374px',
                    'Left': '1112px',
                    'Height': '232px',
                    'Width': '721px',
                    'ZIndex': '6','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/tlahua ficha 3.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fc11c2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '683px',
                    'Left': '1151px',
                    'Height': '333px',
                    'Width': '721px',
                    'ZIndex': '7','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/tlahua ficha 4.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fc1145',
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
                            'ObjectId':'X9fc115e',
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
                            'ObjectId':'X9fc11af',
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
                            'ObjectId':'X9fc11c2',
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
                            'ObjectId':'X9fc119a',
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
                            'ObjectId':'X9fc1173',
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
            'Oid': 'X9fcd6a0',
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
                    'Oid': 'X9fcd6a3',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '1080px',
                    'Width': '1920px',
                    'ZIndex': '1','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcd6a6',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '34px',
                    'Left': '56px',
                    'Height': '449px',
                    'Width': '951px',
                    'ZIndex': '2','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/torreon ficha 1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcd6a9',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '520px',
                    'Left': '130px',
                    'Height': '411px',
                    'Width': '951px',
                    'ZIndex': '3','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/torreon ficha 2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcd6ac',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(235,235,235,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '950px',
                    'Left': '20px',
                    'Height': '120px',
                    'Width': '120px',
                    'ZIndex': '4','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true','OnMouseDown' : 2,
'OnMouseDownParam' : 'X9fa7998',
'OnMouseDownTransition' : 'fade',
'OnMouseDownTransitionSpeed' : '500',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcd6af',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '22px',
                    'Left': '1492px',
                    'Height': '320px',
                    'Width': '380px',
                    'ZIndex': '5','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/torreon ubicacion.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcd6b2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '363px',
                    'Left': '1115px',
                    'Height': '284px',
                    'Width': '721px',
                    'ZIndex': '6','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/torreon ficha 3.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcd6b5',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '666px',
                    'Left': '1151px',
                    'Height': '393px',
                    'Width': '721px',
                    'ZIndex': '7','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/torreon ficha 4.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fcd6a6',
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
                            'ObjectId':'X9fcd6a9',
                            'StartTime':600,
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
                            'ObjectId':'X9fcd6af',
                            'StartTime':600,
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
                            'ObjectId':'X9fcd6b2',
                            'StartTime':1100,
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
                            'ObjectId':'X9fcd6b5',
                            'StartTime':1600,
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
                            'ObjectId':'X9fcd6ac',
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
            'Oid': 'X9fcde1d',
            'Name': 'SCENE_7',
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
                    'Oid': 'X9fcde20',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '1080px',
                    'Width': '1920px',
                    'ZIndex': '1','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcde23',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '34px',
                    'Left': '56px',
                    'Height': '449px',
                    'Width': '951px',
                    'ZIndex': '2','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/matamoros f1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcde26',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '520px',
                    'Left': '130px',
                    'Height': '411px',
                    'Width': '951px',
                    'ZIndex': '3','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/mamtamoros f2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcde29',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(235,235,235,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '950px',
                    'Left': '20px',
                    'Height': '120px',
                    'Width': '120px',
                    'ZIndex': '4','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true','OnMouseDown' : 2,
'OnMouseDownParam' : 'X9fa7998',
'OnMouseDownTransition' : 'fade',
'OnMouseDownTransitionSpeed' : '500',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcde2c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '22px',
                    'Left': '1492px',
                    'Height': '320px',
                    'Width': '380px',
                    'ZIndex': '5','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/matam ubica.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcde2f',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '365px',
                    'Left': '1115px',
                    'Height': '227px',
                    'Width': '721px',
                    'ZIndex': '6','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/matam f3.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcde32',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '619px',
                    'Left': '1151px',
                    'Height': '440px',
                    'Width': '721px',
                    'ZIndex': '7','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/matamoros f4.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fcde23',
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
                            'ObjectId':'X9fcde26',
                            'StartTime':600,
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
                            'ObjectId':'X9fcde2c',
                            'StartTime':600,
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
                            'ObjectId':'X9fcde2f',
                            'StartTime':1100,
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
                            'ObjectId':'X9fcde32',
                            'StartTime':1600,
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
                            'ObjectId':'X9fcde29',
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

            // SCENE 8
            'Oid': 'X9fce99f',
            'Name': 'SCENE_8',
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
                    'Oid': 'X9fce9a2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '1080px',
                    'Width': '1920px',
                    'ZIndex': '1','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fce9a5',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '34px',
                    'Left': '56px',
                    'Height': '449px',
                    'Width': '951px',
                    'ZIndex': '2','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/madero f1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fce9a8',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '520px',
                    'Left': '130px',
                    'Height': '411px',
                    'Width': '951px',
                    'ZIndex': '3','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/madero f2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fce9ab',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(235,235,235,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '950px',
                    'Left': '20px',
                    'Height': '120px',
                    'Width': '120px',
                    'ZIndex': '4','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true','OnMouseDown' : 2,
'OnMouseDownParam' : 'X9fa7998',
'OnMouseDownTransition' : 'fade',
'OnMouseDownTransitionSpeed' : '500',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fce9ae',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '22px',
                    'Left': '1492px',
                    'Height': '320px',
                    'Width': '380px',
                    'ZIndex': '5','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/madero ubica.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fce9b1',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '365px',
                    'Left': '1115px',
                    'Height': '227px',
                    'Width': '721px',
                    'ZIndex': '6','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/madero f3.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fce9b4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '619px',
                    'Left': '1151px',
                    'Height': '440px',
                    'Width': '721px',
                    'ZIndex': '7','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/madero f4.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fce9a5',
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
                            'ObjectId':'X9fce9a8',
                            'StartTime':600,
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
                            'ObjectId':'X9fce9ae',
                            'StartTime':600,
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
                            'ObjectId':'X9fce9b1',
                            'StartTime':1100,
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
                            'ObjectId':'X9fce9b4',
                            'StartTime':1600,
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
                            'ObjectId':'X9fce9ab',
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

            // SCENE 9
            'Oid': 'X9fcf727',
            'Name': 'SCENE_9',
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
                    'Oid': 'X9fcf72a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '1080px',
                    'Width': '1920px',
                    'ZIndex': '1','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcf72d',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '34px',
                    'Left': '56px',
                    'Height': '449px',
                    'Width': '951px',
                    'ZIndex': '2','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/san pedro 1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcf730',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '520px',
                    'Left': '130px',
                    'Height': '411px',
                    'Width': '951px',
                    'ZIndex': '3','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/san pedro f2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcf733',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(235,235,235,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '950px',
                    'Left': '20px',
                    'Height': '120px',
                    'Width': '120px',
                    'ZIndex': '4','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true','OnMouseDown' : 2,
'OnMouseDownParam' : 'X9fa7998',
'OnMouseDownTransition' : 'fade',
'OnMouseDownTransitionSpeed' : '500',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcf736',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '22px',
                    'Left': '1492px',
                    'Height': '320px',
                    'Width': '380px',
                    'ZIndex': '5','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/san pedro ubica.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcf739',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '365px',
                    'Left': '1115px',
                    'Height': '268px',
                    'Width': '721px',
                    'ZIndex': '6','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/san pedro f3.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcf73c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '669px',
                    'Left': '1151px',
                    'Height': '390px',
                    'Width': '721px',
                    'ZIndex': '7','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/san pedro f4.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fcf72d',
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
                            'ObjectId':'X9fcf730',
                            'StartTime':600,
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
                            'ObjectId':'X9fcf736',
                            'StartTime':600,
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
                            'ObjectId':'X9fcf739',
                            'StartTime':1100,
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
                            'ObjectId':'X9fcf73c',
                            'StartTime':1600,
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
                            'ObjectId':'X9fcf733',
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

            // SCENE 10
            'Oid': 'X9fcfef5',
            'Name': 'SCENE_10',
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
                    'Oid': 'X9fcfef8',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '0px',
                    'Left': '0px',
                    'Height': '1080px',
                    'Width': '1920px',
                    'ZIndex': '1','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcfefb',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '34px',
                    'Left': '56px',
                    'Height': '449px',
                    'Width': '951px',
                    'ZIndex': '2','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/viesca f1.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcfefe',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '520px',
                    'Left': '130px',
                    'Height': '411px',
                    'Width': '951px',
                    'ZIndex': '3','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/viesca f2.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcff01',                
                    'Type': 'box',
                    'InnerHTML': '<svg viewBox="0 0 24 24" width="100%" height="100%" preserveAspectRatio="none"><path style="fill:rgba(235,235,235,1);stroke:rgba(0,0,0,1);stroke-width:1;" vector-effect="non-scaling-stroke" d="M8,20H5V12H2L12,3L22,12H19V20H12V14H8V20ZM14,14V17H17V14H14Z" /></svg>'
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '950px',
                    'Left': '20px',
                    'Height': '120px',
                    'Width': '120px',
                    'ZIndex': '4','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true','OnMouseDown' : 2,
'OnMouseDownParam' : 'X9fa7998',
'OnMouseDownTransition' : 'fade',
'OnMouseDownTransitionSpeed' : '500',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcff04',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '22px',
                    'Left': '1492px',
                    'Height': '320px',
                    'Width': '380px',
                    'ZIndex': '5','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/viesca ubica.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcff07',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '365px',
                    'Left': '1115px',
                    'Height': '232px',
                    'Width': '721px',
                    'ZIndex': '6','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/viesca f3.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fcff0a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '632px',
                    'Left': '1151px',
                    'Height': '427px',
                    'Width': '721px',
                    'ZIndex': '7','BackgroundImage': 'MUNICIPIOS AGUA SALUDABLE_resources/viesca ficha 4.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                               
                        'BoxShadow': [{
                                'OffsetX': '4px',
                                'OffsetY':'5px',
                                'BlurRadius' : '5px',
                                'Color' : '#000000'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fcfefb',
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
                            'ObjectId':'X9fcfefe',
                            'StartTime':600,
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
                            'ObjectId':'X9fcff04',
                            'StartTime':600,
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
                            'ObjectId':'X9fcff07',
                            'StartTime':1100,
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
                            'ObjectId':'X9fcff0a',
                            'StartTime':1600,
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
                            'ObjectId':'X9fcff01',
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

            MUNICIPIOS_AGUA_SALUDABLE.init();
            MUNICIPIOS_AGUA_SALUDABLE.stageHeight = 1080;
            MUNICIPIOS_AGUA_SALUDABLE.stageWidth  = 1920;
            MUNICIPIOS_AGUA_SALUDABLE.t  = '423003011251459419865563586523700950525';
            MUNICIPIOS_AGUA_SALUDABLE.stageInitialTransition = 'instant';
            MUNICIPIOS_AGUA_SALUDABLE.stageInitialTransitionDirection = 'left';
            MUNICIPIOS_AGUA_SALUDABLE.stageInitialTransitionSpeed = 1000;

            MUNICIPIOS_AGUA_SALUDABLE.responsiveStage = true;
            MUNICIPIOS_AGUA_SALUDABLE.responsiveStageKeepRatio = true;
            MUNICIPIOS_AGUA_SALUDABLE.scaleX = 1;
            MUNICIPIOS_AGUA_SALUDABLE.scaleY = 1;
            MUNICIPIOS_AGUA_SALUDABLE.scale = 1;

            MUNICIPIOS_AGUA_SALUDABLE.showBrowserCompatibilityCheck = false;
                MUNICIPIOS_AGUA_SALUDABLE.loaderType = 3;
                MUNICIPIOS_AGUA_SALUDABLE.loaderBackgroundColor = '#fff';
                MUNICIPIOS_AGUA_SALUDABLE.loaderForegroundColor = '#000';
            MUNICIPIOS_AGUA_SALUDABLE.stageInitialScene = 'X9fa7998';
            MUNICIPIOS_AGUA_SALUDABLE.debug = false;
            MUNICIPIOS_AGUA_SALUDABLE.preloadImages = true;
MUNICIPIOS_AGUA_SALUDABLE.imagesToPreload = [
'MUNICIPIOS AGUA SALUDABLE_resources/ubicacion_municipios11.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mpio_tlahualilo.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mpio_mapimi.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mpio_gomezp.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mpio_lerdo.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mpio_fcomadero.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mpio_sanpedro.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mpio_matamoros.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mpio_torreon.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mpio_viesca.png',
'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags11.png',
'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111.png',
'MUNICIPIOS AGUA SALUDABLE_resources/gomez ficha 1.png',
'MUNICIPIOS AGUA SALUDABLE_resources/gomez ficha 2.png',
'MUNICIPIOS AGUA SALUDABLE_resources/gomez ficha 3.png',
'MUNICIPIOS AGUA SALUDABLE_resources/gomez ficha 4.png',
'MUNICIPIOS AGUA SALUDABLE_resources/gomez ficha 5.png',
'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags1111.png',
'MUNICIPIOS AGUA SALUDABLE_resources/lerdo-ficha 1.png',
'MUNICIPIOS AGUA SALUDABLE_resources/lerdo-ficha 2.png',
'MUNICIPIOS AGUA SALUDABLE_resources/ubicacion lerdo.png',
'MUNICIPIOS AGUA SALUDABLE_resources/hidrografia lerdo.png',
'MUNICIPIOS AGUA SALUDABLE_resources/lerdo clima ecosistema.png',
'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags11111.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mapimi ficha 1.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mapimi ficha 2.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mapimi ubicacion.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mapimi ficha 3.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mapimi ficha 4.png',
'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png',
'MUNICIPIOS AGUA SALUDABLE_resources/tlahua ficha 1.png',
'MUNICIPIOS AGUA SALUDABLE_resources/tlahua ficha 2.png',
'MUNICIPIOS AGUA SALUDABLE_resources/tlahua ubicacion.png',
'MUNICIPIOS AGUA SALUDABLE_resources/tlahua ficha 3.png',
'MUNICIPIOS AGUA SALUDABLE_resources/tlahua ficha 4.png',
'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png',
'MUNICIPIOS AGUA SALUDABLE_resources/torreon ficha 1.png',
'MUNICIPIOS AGUA SALUDABLE_resources/torreon ficha 2.png',
'MUNICIPIOS AGUA SALUDABLE_resources/torreon ubicacion.png',
'MUNICIPIOS AGUA SALUDABLE_resources/torreon ficha 3.png',
'MUNICIPIOS AGUA SALUDABLE_resources/torreon ficha 4.png',
'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png',
'MUNICIPIOS AGUA SALUDABLE_resources/matamoros f1.png',
'MUNICIPIOS AGUA SALUDABLE_resources/mamtamoros f2.png',
'MUNICIPIOS AGUA SALUDABLE_resources/matam ubica.png',
'MUNICIPIOS AGUA SALUDABLE_resources/matam f3.png',
'MUNICIPIOS AGUA SALUDABLE_resources/matamoros f4.png',
'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png',
'MUNICIPIOS AGUA SALUDABLE_resources/madero f1.png',
'MUNICIPIOS AGUA SALUDABLE_resources/madero f2.png',
'MUNICIPIOS AGUA SALUDABLE_resources/madero ubica.png',
'MUNICIPIOS AGUA SALUDABLE_resources/madero f3.png',
'MUNICIPIOS AGUA SALUDABLE_resources/madero f4.png',
'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png',
'MUNICIPIOS AGUA SALUDABLE_resources/san pedro 1.png',
'MUNICIPIOS AGUA SALUDABLE_resources/san pedro f2.png',
'MUNICIPIOS AGUA SALUDABLE_resources/san pedro ubica.png',
'MUNICIPIOS AGUA SALUDABLE_resources/san pedro f3.png',
'MUNICIPIOS AGUA SALUDABLE_resources/san pedro f4.png',
'MUNICIPIOS AGUA SALUDABLE_resources/textura dgo-chi-coah-zac-nay-ags111111.png',
'MUNICIPIOS AGUA SALUDABLE_resources/viesca f1.png',
'MUNICIPIOS AGUA SALUDABLE_resources/viesca f2.png',
'MUNICIPIOS AGUA SALUDABLE_resources/viesca ubica.png',
'MUNICIPIOS AGUA SALUDABLE_resources/viesca f3.png',
'MUNICIPIOS AGUA SALUDABLE_resources/viesca ficha 4.png'
];MUNICIPIOS_AGUA_SALUDABLE.createWorkspace('MUNICIPIOS_AGUA_SALUDABLEStage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('MUNICIPIOS_AGUA_SALUDABLEStage');
addLoadEvent(MUNICIPIOS_AGUA_SALUDABLEstart);

