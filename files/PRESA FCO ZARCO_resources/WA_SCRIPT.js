
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

            loadjscssfile("PRESA FCO ZARCO_resources/WA.min.js", "js");
            loadjscssfile("PRESA FCO ZARCO_resources/modernizr.custom.43133.min.js", "js");
            loadjscssfile("PRESA FCO ZARCO_resources/spin.min.js", "js");

            loadjscssfile("PRESA FCO ZARCO_resources/JQ_Textualizer.min.js", "js");
            loadjscssfile("PRESA FCO ZARCO_resources/WA.min.css", "css");            
       }
	   
	   loadjscssfile("PRESA FCO ZARCO_resources/ani.css", "css");                          
}
	// Global variables




function PRESA_FCO_ZARCOstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var PRESA_FCO_ZARCO = new WA();
PRESA_FCO_ZARCO.custom = {
}

PRESA_FCO_ZARCO.stage = [{            

            // SCENE 1
            'Oid': 'Xa0020cc',
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
                    'Oid': 'Xa0020ce',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA FCO ZARCO_resources/img_1552.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0020d1',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa002177',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0020d4',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0020d6',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0020d8',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa0020df',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0020db',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0020dd',

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
                'Oid': 'Xa0020d4',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020d1',
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
                'Oid': 'Xa0020d6',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020d1',
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
                'Oid': 'Xa0020db',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020d8',
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
                'Oid': 'Xa0020dd',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020d8',
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
            'Oid': 'Xa0020df',
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
                    'Oid': 'Xa0020e1',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA FCO ZARCO_resources/imgl5097.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0020e4',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa0020cc',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0020e7',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0020e9',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0020eb',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa0020f2',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0020ee',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0020f0',

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
                'Oid': 'Xa0020e7',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020e4',
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
                'Oid': 'Xa0020e9',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020e4',
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
                'Oid': 'Xa0020ee',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020eb',
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
                'Oid': 'Xa0020f0',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020eb',
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
            'Oid': 'Xa0020f2',
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
                    'Oid': 'Xa0020f4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA FCO ZARCO_resources/imgl5100.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0020f7',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa0020df',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0020fa',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0020fc',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0020fe',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa002105',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa002101',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa002103',

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
                'Oid': 'Xa0020fa',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020f7',
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
                'Oid': 'Xa0020fc',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020f7',
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
                'Oid': 'Xa002101',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020fe',
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
                'Oid': 'Xa002103',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0020fe',
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
            'Oid': 'Xa002105',
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
                    'Oid': 'Xa002107',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA FCO ZARCO_resources/imgl5128.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00210a',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa0020f2',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00210d',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00210f',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa002111',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa002118',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa002114',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa002116',

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
                'Oid': 'Xa00210d',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00210a',
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
                'Oid': 'Xa00210f',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00210a',
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
                'Oid': 'Xa002114',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002111',
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
                'Oid': 'Xa002116',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002111',
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
            'Oid': 'Xa002118',
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
                    'Oid': 'Xa00211a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA FCO ZARCO_resources/imgl5159.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00211d',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa002105',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa002120',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa002122',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa002124',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00212b',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa002127',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa002129',

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
                'Oid': 'Xa002120',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00211d',
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
                'Oid': 'Xa002122',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00211d',
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
                'Oid': 'Xa002127',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002124',
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
                'Oid': 'Xa002129',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002124',
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
            'Oid': 'Xa00212b',
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
                    'Oid': 'Xa00212d',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA FCO ZARCO_resources/imgl5164.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa002130',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa002118',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa002133',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa002135',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa002137',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00213e',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00213a',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00213c',

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
                'Oid': 'Xa002133',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002130',
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
                'Oid': 'Xa002135',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002130',
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
                'Oid': 'Xa00213a',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002137',
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
                'Oid': 'Xa00213c',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002137',
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
            'Oid': 'Xa00213e',
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
                    'Oid': 'Xa002140',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA FCO ZARCO_resources/imgl5188.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa002143',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00212b',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa002146',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa002148',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00214a',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa002151',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00214d',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00214f',

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
                'Oid': 'Xa002146',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002143',
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
                'Oid': 'Xa002148',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002143',
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
                'Oid': 'Xa00214d',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00214a',
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
                'Oid': 'Xa00214f',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00214a',
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

            // SCENE 8
            'Oid': 'Xa002151',
            'Name': 'SCENE_8',
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
                    'Oid': 'Xa002153',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA FCO ZARCO_resources/imgl5192.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa002156',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00213e',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa002159',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00215b',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00215d',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa002164',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa002160',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa002162',

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
                'Oid': 'Xa002159',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002156',
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
                'Oid': 'Xa00215b',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002156',
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
                'Oid': 'Xa002160',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00215d',
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
                'Oid': 'Xa002162',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00215d',
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

            // SCENE 9
            'Oid': 'Xa002164',
            'Name': 'SCENE_9',
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
                    'Oid': 'Xa002166',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA FCO ZARCO_resources/imgl5218.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa002169',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa002151',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00216c',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00216e',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa002170',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa002177',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa002173',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa002175',

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
                'Oid': 'Xa00216c',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002169',
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
                'Oid': 'Xa00216e',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002169',
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
                'Oid': 'Xa002173',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002170',
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
                'Oid': 'Xa002175',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002170',
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

            // SCENE 10
            'Oid': 'Xa002177',
            'Name': 'SCENE_10',
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
                    'Oid': 'Xa002179',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA FCO ZARCO_resources/imgl5357.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00217c',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa002164',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00217f',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa002181',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa002183',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA FCO ZARCO_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa0020cc',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa002186',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa002188',

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
                'Oid': 'Xa00217f',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00217c',
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
                'Oid': 'Xa002181',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00217c',
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
                'Oid': 'Xa002186',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002183',
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
                'Oid': 'Xa002188',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa002183',
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

            PRESA_FCO_ZARCO.init();
            PRESA_FCO_ZARCO.stageHeight = 720;
            PRESA_FCO_ZARCO.stageWidth  = 1280;
            PRESA_FCO_ZARCO.t  = '423003011251459419865563586523700950525';
            PRESA_FCO_ZARCO.stageInitialTransition = 'instant';
            PRESA_FCO_ZARCO.stageInitialTransitionDirection = 'left';
            PRESA_FCO_ZARCO.stageInitialTransitionSpeed = 1000;

            PRESA_FCO_ZARCO.responsiveStage = true;
            PRESA_FCO_ZARCO.responsiveStageKeepRatio = true;
            PRESA_FCO_ZARCO.scaleX = 1;
            PRESA_FCO_ZARCO.scaleY = 1;
            PRESA_FCO_ZARCO.scale = 1;

            PRESA_FCO_ZARCO.showBrowserCompatibilityCheck = false;
                PRESA_FCO_ZARCO.loaderType = 1;
                PRESA_FCO_ZARCO.loaderBackgroundColor = '#000';
                PRESA_FCO_ZARCO.loaderForegroundColor = '#fff';
            PRESA_FCO_ZARCO.stageInitialScene = 'Xa0020cc';
            PRESA_FCO_ZARCO.debug = false;
            PRESA_FCO_ZARCO.preloadImages = true;
PRESA_FCO_ZARCO.imagesToPreload = [
'PRESA FCO ZARCO_resources/img_1552.jpg',
'PRESA FCO ZARCO_resources/bt_prev.png',
'PRESA FCO ZARCO_resources/bt_next.png',
'PRESA FCO ZARCO_resources/imgl5097.jpg',
'PRESA FCO ZARCO_resources/bt_prev.png',
'PRESA FCO ZARCO_resources/bt_next.png',
'PRESA FCO ZARCO_resources/imgl5100.jpg',
'PRESA FCO ZARCO_resources/bt_prev.png',
'PRESA FCO ZARCO_resources/bt_next.png',
'PRESA FCO ZARCO_resources/imgl5128.jpg',
'PRESA FCO ZARCO_resources/bt_prev.png',
'PRESA FCO ZARCO_resources/bt_next.png',
'PRESA FCO ZARCO_resources/imgl5159.jpg',
'PRESA FCO ZARCO_resources/bt_prev.png',
'PRESA FCO ZARCO_resources/bt_next.png',
'PRESA FCO ZARCO_resources/imgl5164.jpg',
'PRESA FCO ZARCO_resources/bt_prev.png',
'PRESA FCO ZARCO_resources/bt_next.png',
'PRESA FCO ZARCO_resources/imgl5188.jpg',
'PRESA FCO ZARCO_resources/bt_prev.png',
'PRESA FCO ZARCO_resources/bt_next.png',
'PRESA FCO ZARCO_resources/imgl5192.jpg',
'PRESA FCO ZARCO_resources/bt_prev.png',
'PRESA FCO ZARCO_resources/bt_next.png',
'PRESA FCO ZARCO_resources/imgl5218.jpg',
'PRESA FCO ZARCO_resources/bt_prev.png',
'PRESA FCO ZARCO_resources/bt_next.png',
'PRESA FCO ZARCO_resources/imgl5357.jpg',
'PRESA FCO ZARCO_resources/bt_prev.png',
'PRESA FCO ZARCO_resources/bt_next.png'
];PRESA_FCO_ZARCO.createWorkspace('PRESA_FCO_ZARCOStage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('PRESA_FCO_ZARCOStage');
addLoadEvent(PRESA_FCO_ZARCOstart);

