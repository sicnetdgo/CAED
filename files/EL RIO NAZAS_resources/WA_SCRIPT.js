
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

            loadjscssfile("EL RIO NAZAS_resources/WA.min.js", "js");
            loadjscssfile("EL RIO NAZAS_resources/modernizr.custom.43133.min.js", "js");
            loadjscssfile("EL RIO NAZAS_resources/spin.min.js", "js");

            loadjscssfile("EL RIO NAZAS_resources/JQ_Textualizer.min.js", "js");
            loadjscssfile("EL RIO NAZAS_resources/WA.min.css", "css");            
       }
	   
	   loadjscssfile("EL RIO NAZAS_resources/ani.css", "css");                          
}
	// Global variables




function EL_RIO_NAZASstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var EL_RIO_NAZAS = new WA();
EL_RIO_NAZAS.custom = {
}

EL_RIO_NAZAS.stage = [{            

            // SCENE 1
            'Oid': 'Xa003524',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#000000',
            'SceneEnd': 100,
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
                    'Oid': 'Xa003526',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'EL RIO NAZAS_resources/15 julio 2010 049.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003529',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '0px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '2','BackgroundImage': 'EL RIO NAZAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003596',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00352c',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00352e',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003530',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '1216px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '3','BackgroundImage': 'EL RIO NAZAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003537',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003533',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003535',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00352c',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003529',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00352e',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003529',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003533',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003530',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003535',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003530',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
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
            'Oid': 'Xa003537',
            'Name': 'SCENE_2',
            'Autostart': 'true',
            'BackgroundColor': '#000000',
            'SceneEnd': 100,
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
                    'Oid': 'Xa003539',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'EL RIO NAZAS_resources/img_1450.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00353c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '268px',
                    'Left': '0px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '2','BackgroundImage': 'EL RIO NAZAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003524',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00353f',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003541',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003543',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '1216px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '3','BackgroundImage': 'EL RIO NAZAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00354a',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003546',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003548',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00353f',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00353c',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003541',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00353c',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003546',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003543',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003548',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003543',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
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
            'Oid': 'Xa00354a',
            'Name': 'SCENE_3',
            'Autostart': 'true',
            'BackgroundColor': '#000000',
            'SceneEnd': 100,
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
                    'Oid': 'Xa00354c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'EL RIO NAZAS_resources/img_1466.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00354f',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '0px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '2','BackgroundImage': 'EL RIO NAZAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003537',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003552',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003554',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003556',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '1216px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '3','BackgroundImage': 'EL RIO NAZAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00355d',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003559',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00355b',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003552',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00354f',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003554',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00354f',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003559',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003556',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00355b',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003556',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
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
            'Oid': 'Xa00355d',
            'Name': 'SCENE_4',
            'Autostart': 'true',
            'BackgroundColor': '#000000',
            'SceneEnd': 100,
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
                    'Oid': 'Xa00355f',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'EL RIO NAZAS_resources/img_1485.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003562',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '0px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '2','BackgroundImage': 'EL RIO NAZAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00354a',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003565',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003567',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003569',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '1216px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '3','BackgroundImage': 'EL RIO NAZAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003570',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00356c',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00356e',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003565',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003562',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003567',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003562',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00356c',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003569',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00356e',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003569',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
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
            'Oid': 'Xa003570',
            'Name': 'SCENE_5',
            'Autostart': 'true',
            'BackgroundColor': '#000000',
            'SceneEnd': 100,
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
                    'Oid': 'Xa003572',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'EL RIO NAZAS_resources/img_1624.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003575',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '0px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '2','BackgroundImage': 'EL RIO NAZAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00355d',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003578',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00357a',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00357c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '1216px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '3','BackgroundImage': 'EL RIO NAZAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003583',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00357f',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003581',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003578',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003575',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00357a',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003575',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00357f',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00357c',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003581',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00357c',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
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
            'Oid': 'Xa003583',
            'Name': 'SCENE_6',
            'Autostart': 'true',
            'BackgroundColor': '#000000',
            'SceneEnd': 100,
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
                    'Oid': 'Xa003585',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'EL RIO NAZAS_resources/img_1691.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003588',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '0px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '2','BackgroundImage': 'EL RIO NAZAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003570',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00358b',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00358d',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00358f',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '1216px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '3','BackgroundImage': 'EL RIO NAZAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003596',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003592',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003594',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00358b',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003588',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00358d',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003588',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003592',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00358f',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003594',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00358f',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
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
            'Oid': 'Xa003596',
            'Name': 'SCENE_7',
            'Autostart': 'true',
            'BackgroundColor': '#000000',
            'SceneEnd': 100,
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
                    'Oid': 'Xa003598',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'EL RIO NAZAS_resources/img_1696.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00359b',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '0px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '2','BackgroundImage': 'EL RIO NAZAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003583',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00359e',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0035a0',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0035a2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '1216px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '3','BackgroundImage': 'EL RIO NAZAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003524',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0035a5',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0035a7',

'Pressed': [],
                    
                    'Hover': [],}

                ],
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa00359e',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00359b',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa0035a0',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00359b',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa0035a5',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0035a2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '1'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa0035a7',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0035a2',
                            'StartTime':100,
                            'TransitionElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'Opacity',
                            'Duration':'0.2s',
                            'Delay':'0s',
                            'TimingFunc':'ease-in-out',
                            'EndValue': '0.2'
                        }]
},


			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
}];

            EL_RIO_NAZAS.init();
            EL_RIO_NAZAS.stageHeight = 720;
            EL_RIO_NAZAS.stageWidth  = 1280;
            EL_RIO_NAZAS.t  = '423003011251459419865563586523700950525';
            EL_RIO_NAZAS.stageInitialTransition = 'instant';
            EL_RIO_NAZAS.stageInitialTransitionDirection = 'left';
            EL_RIO_NAZAS.stageInitialTransitionSpeed = 1000;

            EL_RIO_NAZAS.responsiveStage = true;
            EL_RIO_NAZAS.responsiveStageKeepRatio = true;
            EL_RIO_NAZAS.scaleX = 1;
            EL_RIO_NAZAS.scaleY = 1;
            EL_RIO_NAZAS.scale = 1;

            EL_RIO_NAZAS.showBrowserCompatibilityCheck = false;
                EL_RIO_NAZAS.loaderType = 1;
                EL_RIO_NAZAS.loaderBackgroundColor = '#000';
                EL_RIO_NAZAS.loaderForegroundColor = '#fff';
            EL_RIO_NAZAS.stageInitialScene = 'Xa003524';
            EL_RIO_NAZAS.debug = false;
            EL_RIO_NAZAS.preloadImages = true;
EL_RIO_NAZAS.imagesToPreload = [
'EL RIO NAZAS_resources/15 julio 2010 049.jpg',
'EL RIO NAZAS_resources/bt_prev.png',
'EL RIO NAZAS_resources/bt_next.png',
'EL RIO NAZAS_resources/img_1450.jpg',
'EL RIO NAZAS_resources/bt_prev.png',
'EL RIO NAZAS_resources/bt_next.png',
'EL RIO NAZAS_resources/img_1466.jpg',
'EL RIO NAZAS_resources/bt_prev.png',
'EL RIO NAZAS_resources/bt_next.png',
'EL RIO NAZAS_resources/img_1485.jpg',
'EL RIO NAZAS_resources/bt_prev.png',
'EL RIO NAZAS_resources/bt_next.png',
'EL RIO NAZAS_resources/img_1624.jpg',
'EL RIO NAZAS_resources/bt_prev.png',
'EL RIO NAZAS_resources/bt_next.png',
'EL RIO NAZAS_resources/img_1691.jpg',
'EL RIO NAZAS_resources/bt_prev.png',
'EL RIO NAZAS_resources/bt_next.png',
'EL RIO NAZAS_resources/img_1696.jpg',
'EL RIO NAZAS_resources/bt_prev.png',
'EL RIO NAZAS_resources/bt_next.png'
];EL_RIO_NAZAS.createWorkspace('EL_RIO_NAZASStage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('EL_RIO_NAZASStage');
addLoadEvent(EL_RIO_NAZASstart);

