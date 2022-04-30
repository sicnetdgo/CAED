
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

            loadjscssfile("DISTRITO 017_resources/WA.min.js", "js");
            loadjscssfile("DISTRITO 017_resources/modernizr.custom.43133.min.js", "js");
            loadjscssfile("DISTRITO 017_resources/spin.min.js", "js");

            loadjscssfile("DISTRITO 017_resources/JQ_Textualizer.min.js", "js");
            loadjscssfile("DISTRITO 017_resources/WA.min.css", "css");            
       }
	   
	   loadjscssfile("DISTRITO 017_resources/ani.css", "css");                          
}
	// Global variables




function DISTRITO_017start() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var DISTRITO_017 = new WA();
DISTRITO_017.custom = {
}

DISTRITO_017.stage = [{            

            // SCENE 1
            'Oid': 'Xa00c1b7',
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
                    'Oid': 'Xa00c1b9',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_1243.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c1bc',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c2ae',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c1bf',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c1c1',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c1c3',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c1ca',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c1c6',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c1c8',

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
                'Oid': 'Xa00c1bf',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1bc',
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
                'Oid': 'Xa00c1c1',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1bc',
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
                'Oid': 'Xa00c1c6',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1c3',
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
                'Oid': 'Xa00c1c8',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1c3',
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
            'Oid': 'Xa00c1ca',
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
                    'Oid': 'Xa00c1cc',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_1602.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c1cf',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c1b7',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c1d2',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c1d4',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c1d6',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c1dd',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c1d9',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c1db',

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
                'Oid': 'Xa00c1d2',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1cf',
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
                'Oid': 'Xa00c1d4',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1cf',
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
                'Oid': 'Xa00c1d9',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1d6',
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
                'Oid': 'Xa00c1db',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1d6',
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
            'Oid': 'Xa00c1dd',
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
                    'Oid': 'Xa00c1df',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_1660.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c1e2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '328px',
                    'Left': '-2px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c1ca',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c1e5',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c1e7',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c1e9',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c1f0',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c1ec',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c1ee',

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
                'Oid': 'Xa00c1e5',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1e2',
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
                'Oid': 'Xa00c1e7',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1e2',
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
                'Oid': 'Xa00c1ec',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1e9',
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
                'Oid': 'Xa00c1ee',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1e9',
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
            'Oid': 'Xa00c1f0',
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
                    'Oid': 'Xa00c1f2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_1670.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c1f5',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c1dd',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c1f8',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c1fa',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c1fc',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c203',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c1ff',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c201',

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
                'Oid': 'Xa00c1f8',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1f5',
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
                'Oid': 'Xa00c1fa',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1f5',
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
                'Oid': 'Xa00c1ff',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1fc',
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
                'Oid': 'Xa00c201',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c1fc',
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
            'Oid': 'Xa00c203',
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
                    'Oid': 'Xa00c205',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_1674.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c208',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c1f0',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c20b',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c20d',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c20f',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c216',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c212',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c214',

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
                'Oid': 'Xa00c20b',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c208',
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
                'Oid': 'Xa00c20d',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c208',
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
                'Oid': 'Xa00c212',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c20f',
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
                'Oid': 'Xa00c214',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c20f',
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
            'Oid': 'Xa00c216',
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
                    'Oid': 'Xa00c218',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_1925.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c21b',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c203',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c21e',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c220',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c222',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c229',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c225',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c227',

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
                'Oid': 'Xa00c21e',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c21b',
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
                'Oid': 'Xa00c220',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c21b',
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
                'Oid': 'Xa00c225',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c222',
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
                'Oid': 'Xa00c227',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c222',
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
            'Oid': 'Xa00c229',
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
                    'Oid': 'Xa00c22b',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_5138.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c22e',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c216',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c231',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c233',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c235',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c23c',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c238',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c23a',

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
                'Oid': 'Xa00c231',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c22e',
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
                'Oid': 'Xa00c233',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c22e',
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
                'Oid': 'Xa00c238',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c235',
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
                'Oid': 'Xa00c23a',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c235',
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
            'Oid': 'Xa00c23c',
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
                    'Oid': 'Xa00c23e',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_5175.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c241',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c229',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c244',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c246',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c248',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c24f',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c24b',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c24d',

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
                'Oid': 'Xa00c244',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c241',
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
                'Oid': 'Xa00c246',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c241',
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
                'Oid': 'Xa00c24b',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c248',
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
                'Oid': 'Xa00c24d',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c248',
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
            'Oid': 'Xa00c24f',
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
                    'Oid': 'Xa00c251',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_5260.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c254',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c23c',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c257',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c259',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c25b',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c262',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c25e',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c260',

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
                'Oid': 'Xa00c257',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c254',
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
                'Oid': 'Xa00c259',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c254',
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
                'Oid': 'Xa00c25e',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c25b',
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
                'Oid': 'Xa00c260',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c25b',
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
            'Oid': 'Xa00c262',
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
                    'Oid': 'Xa00c264',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_5375.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c267',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c24f',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c26a',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c26c',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c26e',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c275',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c271',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c273',

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
                'Oid': 'Xa00c26a',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c267',
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
                'Oid': 'Xa00c26c',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c267',
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
                'Oid': 'Xa00c271',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c26e',
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
                'Oid': 'Xa00c273',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c26e',
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

            // SCENE 11
            'Oid': 'Xa00c275',
            'Name': 'SCENE_11',
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
                    'Oid': 'Xa00c277',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_5995.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c27a',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c262',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c27d',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c27f',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c281',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c288',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c284',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c286',

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
                'Oid': 'Xa00c27d',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c27a',
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
                'Oid': 'Xa00c27f',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c27a',
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
                'Oid': 'Xa00c284',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c281',
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
                'Oid': 'Xa00c286',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c281',
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

            // SCENE 12
            'Oid': 'Xa00c288',
            'Name': 'SCENE_12',
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
                    'Oid': 'Xa00c28a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_6237.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c28d',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c275',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c290',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c292',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c294',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c29b',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c297',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c299',

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
                'Oid': 'Xa00c290',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c28d',
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
                'Oid': 'Xa00c292',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c28d',
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
                'Oid': 'Xa00c297',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c294',
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
                'Oid': 'Xa00c299',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c294',
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

            // SCENE 13
            'Oid': 'Xa00c29b',
            'Name': 'SCENE_13',
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
                    'Oid': 'Xa00c29d',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_6720.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c2a0',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c288',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c2a3',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c2a5',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c2a7',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c2ae',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c2aa',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c2ac',

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
                'Oid': 'Xa00c2a3',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c2a0',
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
                'Oid': 'Xa00c2a5',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c2a0',
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
                'Oid': 'Xa00c2aa',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c2a7',
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
                'Oid': 'Xa00c2ac',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c2a7',
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

            // SCENE 14
            'Oid': 'Xa00c2ae',
            'Name': 'SCENE_14',
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
                    'Oid': 'Xa00c2b0',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'DISTRITO 017_resources/img_6724.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c2b3',                
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
                    'ZIndex': '2','BackgroundImage': 'DISTRITO 017_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c29b',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c2b6',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c2b8',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00c2ba',                
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
                    'ZIndex': '3','BackgroundImage': 'DISTRITO 017_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00c1b7',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00c2bd',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00c2bf',

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
                'Oid': 'Xa00c2b6',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c2b3',
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
                'Oid': 'Xa00c2b8',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c2b3',
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
                'Oid': 'Xa00c2bd',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c2ba',
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
                'Oid': 'Xa00c2bf',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00c2ba',
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

            DISTRITO_017.init();
            DISTRITO_017.stageHeight = 720;
            DISTRITO_017.stageWidth  = 1280;
            DISTRITO_017.t  = '423003011251459419865563586523700950525';
            DISTRITO_017.stageInitialTransition = 'instant';
            DISTRITO_017.stageInitialTransitionDirection = 'left';
            DISTRITO_017.stageInitialTransitionSpeed = 1000;

            DISTRITO_017.responsiveStage = true;
            DISTRITO_017.responsiveStageKeepRatio = true;
            DISTRITO_017.scaleX = 1;
            DISTRITO_017.scaleY = 1;
            DISTRITO_017.scale = 1;

            DISTRITO_017.showBrowserCompatibilityCheck = false;
                DISTRITO_017.loaderType = 1;
                DISTRITO_017.loaderBackgroundColor = '#000';
                DISTRITO_017.loaderForegroundColor = '#fff';
            DISTRITO_017.stageInitialScene = 'Xa00c1b7';
            DISTRITO_017.debug = false;
            DISTRITO_017.preloadImages = true;
DISTRITO_017.imagesToPreload = [
'DISTRITO 017_resources/img_1243.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_1602.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_1660.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_1670.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_1674.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_1925.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_5138.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_5175.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_5260.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_5375.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_5995.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_6237.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_6720.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png',
'DISTRITO 017_resources/img_6724.jpg',
'DISTRITO 017_resources/bt_prev.png',
'DISTRITO 017_resources/bt_next.png'
];DISTRITO_017.createWorkspace('DISTRITO_017Stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('DISTRITO_017Stage');
addLoadEvent(DISTRITO_017start);

