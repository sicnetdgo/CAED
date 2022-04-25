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
window.fC5288BE3CB52D31CFA43B58A1713CD09 = function(callback) { if (!window.WA) { setTimeout(function () { fC5288BE3CB52D31CFA43B58A1713CD09(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

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

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_4_66/WA.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/modernizr.custom.43133.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/spin.min.js", "js");

            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_4_66/JQ_Textualizer.min.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_4_66/WA.min.css", "css");            
       }
	   
	   loadjscssfile("" + x5engine.settings.currentPath + "imObjectAnimation_4_66/ani.css", "css");                          
}
	// Global variables




function MUNICIPIOS_AGUA_SALUDABLE_2start() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var MUNICIPIOS_AGUA_SALUDABLE_2 = new WA();
MUNICIPIOS_AGUA_SALUDABLE_2.custom = {
}

MUNICIPIOS_AGUA_SALUDABLE_2.stage = [{            

            // SCENE 1
            'Oid': 'X9fa7998_bc18902ce3c311a57ef7623150152018',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#FFFFFF',
            'SceneEnd': 10000,
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
                    'Oid': 'X9fa9da2_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '14px',
                    'Left': '275px',
                    'Height': '694px',
                    'Width': '802px',
                    'ZIndex': '1','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/ubicacion_municipios11.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fa9f7b_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '36px',
                    'Left': '751px',
                    'Height': '142px',
                    'Width': '114px',
                    'ZIndex': '2','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_tlahualilo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fa9fb5_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '23px',
                    'Left': '664px',
                    'Height': '204px',
                    'Width': '152px',
                    'ZIndex': '3','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_mapimi.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fa9fd6_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '168px',
                    'Left': '796px',
                    'Height': '57px',
                    'Width': '58px',
                    'ZIndex': '4','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_gomezp.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fa9fef_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '186px',
                    'Left': '757px',
                    'Height': '94px',
                    'Width': '88px',
                    'ZIndex': '5','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_lerdo.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab14a_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '34px',
                    'Left': '841px',
                    'Height': '161px',
                    'Width': '82px',
                    'ZIndex': '6','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_fcomadero.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab18a_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '51px',
                    'Left': '869px',
                    'Height': '163px',
                    'Width': '206px',
                    'ZIndex': '7','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_sanpedro.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab1cf_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '185px',
                    'Left': '848px',
                    'Height': '63px',
                    'Width': '48px',
                    'ZIndex': '8','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_matamoros.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab1f0_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '196px',
                    'Left': '824px',
                    'Height': '145px',
                    'Width': '87px',
                    'ZIndex': '9','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_torreon.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fab226_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '205px',
                    'Left': '844px',
                    'Height': '140px',
                    'Width': '134px',
                    'ZIndex': '10','BackgroundImage': '' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_viesca.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fd3036_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': 'GÓMEZ PALACIO'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '97px',
                    'Left': '30px',
                    'Height': '59px',
                    'Width': '200px',
                    'ZIndex': '11','Display': 'block','TextAlign': 'left',
'Bold': 'true',
'LetterSpacing': '2px',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '28px',
                'LineHeight': '1.1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '4px',
                            'Color':'#000000',
                            'OffsetX' : '0px',
                            'OffsetY' : '0px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fd30d5_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': 'LERDO'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '240px',
                    'Left': '30px',
                    'Height': '59px',
                    'Width': '200px',
                    'ZIndex': '12','Display': 'block','TextAlign': 'left',
'Bold': 'true',
'LetterSpacing': '2px',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '28px',
                'LineHeight': '1.1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '4px',
                            'Color':'#000000',
                            'OffsetX' : '0px',
                            'OffsetY' : '0px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fd30ed_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': 'TLAHUALILO'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '394px',
                    'Left': '30px',
                    'Height': '59px',
                    'Width': '200px',
                    'ZIndex': '13','Display': 'block','TextAlign': 'left',
'Bold': 'true',
'LetterSpacing': '2px',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '28px',
                'LineHeight': '1.1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '4px',
                            'Color':'#000000',
                            'OffsetX' : '0px',
                            'OffsetY' : '0px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fd3111_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': 'MAPIMÍ'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '570px',
                    'Left': '30px',
                    'Height': '59px',
                    'Width': '200px',
                    'ZIndex': '14','Display': 'block','TextAlign': 'left',
'Bold': 'true',
'LetterSpacing': '2px',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '28px',
                'LineHeight': '1.1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '4px',
                            'Color':'#000000',
                            'OffsetX' : '0px',
                            'OffsetY' : '0px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fd3126_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': 'TORREÓN'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '38px',
                    'Left': '1058px',
                    'Height': '59px',
                    'Width': '200px',
                    'ZIndex': '15','Display': 'block','TextAlign': 'right',
'Bold': 'true',
'LetterSpacing': '2px',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '28px',
                'LineHeight': '1.1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '4px',
                            'Color':'#000000',
                            'OffsetX' : '0px',
                            'OffsetY' : '0px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fd315b_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': 'FCO I MADERO'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '181px',
                    'Left': '1058px',
                    'Height': '59px',
                    'Width': '200px',
                    'ZIndex': '16','Display': 'block','TextAlign': 'right',
'Bold': 'true',
'LetterSpacing': '2px',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '28px',
                'LineHeight': '1.1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '4px',
                            'Color':'#000000',
                            'OffsetX' : '0px',
                            'OffsetY' : '0px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fd3177_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': 'SAN PEDRO'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '321px',
                    'Left': '1058px',
                    'Height': '59px',
                    'Width': '200px',
                    'ZIndex': '17','Display': 'block','TextAlign': 'right',
'Bold': 'true',
'LetterSpacing': '2px',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '28px',
                'LineHeight': '1.1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '4px',
                            'Color':'#000000',
                            'OffsetX' : '0px',
                            'OffsetY' : '0px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fd3189_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': 'MATAMOROS'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '470px',
                    'Left': '1058px',
                    'Height': '59px',
                    'Width': '200px',
                    'ZIndex': '18','Display': 'block','TextAlign': 'right',
'Bold': 'true',
'LetterSpacing': '2px',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '28px',
                'LineHeight': '1.1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '4px',
                            'Color':'#000000',
                            'OffsetX' : '0px',
                            'OffsetY' : '0px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fd31b8_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': 'VIESCA'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '615px',
                    'Left': '1058px',
                    'Height': '59px',
                    'Width': '200px',
                    'ZIndex': '19','Display': 'block','TextAlign': 'right',
'Bold': 'true',
'LetterSpacing': '1px',

                'TextColor': '#FFFFFF',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '28px',
                'LineHeight': '1em',

                  
                        'TextShadow': [{
                            'BlurRadius': '4px',
                            'Color':'#000000',
                            'OffsetX' : '0px',
                            'OffsetY' : '0px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'X9fd3a8a_bc18902ce3c311a57ef7623150152018',                
                    'Type': 'box',
                    'InnerHTML': 'Da Click para saber más...'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '280px',
                    'Left': '483px',
                    'Height': '101px',
                    'Width': '263px',
                    'ZIndex': '20','Display': 'block','TextAlign': 'center',
'Bold': 'true',

                'TextColor': '#7B68EE',
                'Opacity': '0',
                'FontFamily': 'Montserrat',
                'FontSize': '36px',
                'LineHeight': '1.5em',

                  
                        'TextShadow': [{
                            'BlurRadius': '3px',
                            'Color':'#000000',
                            'OffsetX' : '3px',
                            'OffsetY' : '3px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'X9fa9da2_bc18902ce3c311a57ef7623150152018',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fa9f7b_bc18902ce3c311a57ef7623150152018',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fa9fb5_bc18902ce3c311a57ef7623150152018',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fa9fef_bc18902ce3c311a57ef7623150152018',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab14a_bc18902ce3c311a57ef7623150152018',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fa9fd6_bc18902ce3c311a57ef7623150152018',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab226_bc18902ce3c311a57ef7623150152018',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab18a_bc18902ce3c311a57ef7623150152018',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab1f0_bc18902ce3c311a57ef7623150152018',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fab1cf_bc18902ce3c311a57ef7623150152018',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1'
                        }]
},
{
                            'ObjectId':'X9fd3036_bc18902ce3c311a57ef7623150152018',
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
                            'ObjectId':'X9fd30d5_bc18902ce3c311a57ef7623150152018',
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
                            'ObjectId':'X9fd30ed_bc18902ce3c311a57ef7623150152018',
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
                            'ObjectId':'X9fd3111_bc18902ce3c311a57ef7623150152018',
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
                            'ObjectId':'X9fd315b_bc18902ce3c311a57ef7623150152018',
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
                            'ObjectId':'X9fd3177_bc18902ce3c311a57ef7623150152018',
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
                            'ObjectId':'X9fd3189_bc18902ce3c311a57ef7623150152018',
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
                            'ObjectId':'X9fd31b8_bc18902ce3c311a57ef7623150152018',
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
                            'ObjectId':'X9fd3126_bc18902ce3c311a57ef7623150152018',
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
                            'ObjectId':'X9fab18a_bc18902ce3c311a57ef7623150152018',
                            'StartTime':2200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '898px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '290px'
                        }]
},
{
                            'ObjectId':'X9fab1f0_bc18902ce3c311a57ef7623150152018',
                            'StartTime':2200,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '1001px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.8s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '3px'
                        }]
},
{
                            'ObjectId':'X9fa9fb5_bc18902ce3c311a57ef7623150152018',
                            'StartTime':2300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '237px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '502px'
                        }]
},
{
                            'ObjectId':'X9fa9fef_bc18902ce3c311a57ef7623150152018',
                            'StartTime':2300,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '239px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '207px'
                        }]
},
{
                            'ObjectId':'X9fab1cf_bc18902ce3c311a57ef7623150152018',
                            'StartTime':2400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '995px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.9s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '460px'
                        }]
},
{
                            'ObjectId':'X9fab226_bc18902ce3c311a57ef7623150152018',
                            'StartTime':2400,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.6s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '912px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.6s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '559px'
                        }]
},
{
                            'ObjectId':'X9fa9fd6_bc18902ce3c311a57ef7623150152018',
                            'StartTime':2500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '241px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '97px'
                        }]
},
{
                            'ObjectId':'X9fab14a_bc18902ce3c311a57ef7623150152018',
                            'StartTime':2500,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.6s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '138px'
                        }]
},
{
                            'ObjectId':'X9fab14a_bc18902ce3c311a57ef7623150152018',
                            'StartTime':2600,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.5s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '969px'
                        }]
},
{
                            'ObjectId':'X9fa9f7b_bc18902ce3c311a57ef7623150152018',
                            'StartTime':2700,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Left',
                            'Duration':'1.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '233px'
                        },
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Top',
                            'Duration':'1.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '336px'
                        }]
},
{
                            'ObjectId':'X9fd3a8a_bc18902ce3c311a57ef7623150152018',
                            'StartTime':4000,
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
                            'ObjectId':'X9fd3a8a_bc18902ce3c311a57ef7623150152018',
                            'StartTime':10000,
                            'TransitionElements':[]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
}];

            MUNICIPIOS_AGUA_SALUDABLE_2.init();
            MUNICIPIOS_AGUA_SALUDABLE_2.stageHeight = 720;
            MUNICIPIOS_AGUA_SALUDABLE_2.stageWidth  = 1280;
            MUNICIPIOS_AGUA_SALUDABLE_2.t  = '423003011251459419865563586523700950525';
            MUNICIPIOS_AGUA_SALUDABLE_2.stageInitialTransition = 'instant';
            MUNICIPIOS_AGUA_SALUDABLE_2.stageInitialTransitionDirection = 'left';
            MUNICIPIOS_AGUA_SALUDABLE_2.stageInitialTransitionSpeed = 1000;

            MUNICIPIOS_AGUA_SALUDABLE_2.responsiveStage = true;
            MUNICIPIOS_AGUA_SALUDABLE_2.responsiveStageKeepRatio = true;
            MUNICIPIOS_AGUA_SALUDABLE_2.scaleX = 1;
            MUNICIPIOS_AGUA_SALUDABLE_2.scaleY = 1;
            MUNICIPIOS_AGUA_SALUDABLE_2.scale = 1;

            MUNICIPIOS_AGUA_SALUDABLE_2.showBrowserCompatibilityCheck = false;
                MUNICIPIOS_AGUA_SALUDABLE_2.loaderType = 3;
                MUNICIPIOS_AGUA_SALUDABLE_2.loaderBackgroundColor = '#fff';
                MUNICIPIOS_AGUA_SALUDABLE_2.loaderForegroundColor = '#000';
            MUNICIPIOS_AGUA_SALUDABLE_2.stageInitialScene = 'X9fa7998_bc18902ce3c311a57ef7623150152018';
            MUNICIPIOS_AGUA_SALUDABLE_2.debug = false;
            MUNICIPIOS_AGUA_SALUDABLE_2.preloadImages = true;
MUNICIPIOS_AGUA_SALUDABLE_2.imagesToPreload = [
'' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/ubicacion_municipios11.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_tlahualilo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_mapimi.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_gomezp.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_lerdo.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_fcomadero.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_sanpedro.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_matamoros.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_torreon.png',
'' + x5engine.settings.currentPath + 'imObjectAnimation_4_66/mpio_viesca.png'
];MUNICIPIOS_AGUA_SALUDABLE_2.createWorkspace('imObjectAnimation_4_66_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imObjectAnimation_4_66_stage');
addLoadEvent(MUNICIPIOS_AGUA_SALUDABLE_2start);


 })( wajq );