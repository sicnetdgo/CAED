
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

            loadjscssfile("PRESA LAZARO CARDENAS_resources/WA.min.js", "js");
            loadjscssfile("PRESA LAZARO CARDENAS_resources/modernizr.custom.43133.min.js", "js");
            loadjscssfile("PRESA LAZARO CARDENAS_resources/spin.min.js", "js");

            loadjscssfile("PRESA LAZARO CARDENAS_resources/JQ_Textualizer.min.js", "js");
            loadjscssfile("PRESA LAZARO CARDENAS_resources/WA.min.css", "css");            
       }
	   
	   loadjscssfile("PRESA LAZARO CARDENAS_resources/ani.css", "css");                          
}
	// Global variables




function PRESA_LAZARO_CARDENASstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var PRESA_LAZARO_CARDENAS = new WA();
PRESA_LAZARO_CARDENAS.custom = {
}

PRESA_LAZARO_CARDENAS.stage = [{            

            // SCENE 1
            'Oid': 'Xa003a97',
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
                    'Oid': 'Xa003a9c',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003b1c',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003a9f',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003aa1',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003aa3',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003aaa',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003aa6',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003aa8',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003d37',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/15 julio 2010 075.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003a9f',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003a9c',
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
                'Oid': 'Xa003aa1',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003a9c',
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
                'Oid': 'Xa003aa6',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003aa3',
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
                'Oid': 'Xa003aa8',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003aa3',
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
            'Oid': 'Xa003aaa',
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
                    'Oid': 'Xa003aaf',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003a97',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003ab2',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003ab4',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003ab6',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003abd',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003ab9',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003abb',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003d6a',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/15 julio 2010 124.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

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
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            },
            {
                'Oid': 'Xa003ab2',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003aaf',
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
                'Oid': 'Xa003ab4',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003aaf',
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
                'Oid': 'Xa003ab9',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003ab6',
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
                'Oid': 'Xa003abb',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003ab6',
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
            'Oid': 'Xa003abd',
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
                    'Oid': 'Xa003abf',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/img_1368.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003ac2',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003aaa',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003ac5',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003ac7',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003ac9',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003ad0',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003acc',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003ace',

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
                'Oid': 'Xa003ac5',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003ac2',
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
                'Oid': 'Xa003ac7',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003ac2',
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
                'Oid': 'Xa003acc',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003ac9',
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
                'Oid': 'Xa003ace',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003ac9',
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
            'Oid': 'Xa003ad0',
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
                    'Oid': 'Xa003ad2',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/img_1371.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003ad5',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003abd',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003ad8',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003ada',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003adc',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003ae3',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003adf',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003ae1',

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
                'Oid': 'Xa003ad8',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003ad5',
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
                'Oid': 'Xa003ada',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003ad5',
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
                'Oid': 'Xa003adf',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003adc',
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
                'Oid': 'Xa003ae1',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003adc',
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
            'Oid': 'Xa003ae3',
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
                    'Oid': 'Xa003ae5',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/img_1399.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003ae8',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003ad0',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003aeb',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003aed',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003aef',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003af6',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003af2',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003af4',

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
                'Oid': 'Xa003aeb',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003ae8',
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
                'Oid': 'Xa003aed',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003ae8',
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
                'Oid': 'Xa003af2',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003aef',
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
                'Oid': 'Xa003af4',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003aef',
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
            'Oid': 'Xa003af6',
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
                    'Oid': 'Xa003af8',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '33px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/img_1400.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003afb',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003ae3',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003afe',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003b00',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003b02',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003b09',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003b05',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003b07',

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
                'Oid': 'Xa003afe',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003afb',
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
                'Oid': 'Xa003b00',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003afb',
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
                'Oid': 'Xa003b05',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003b02',
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
                'Oid': 'Xa003b07',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003b02',
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
            'Oid': 'Xa003b09',
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
                    'Oid': 'Xa003b0b',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '39px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/img_1404.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003b0e',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003af6',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003b11',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003b13',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003b15',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003b1c',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003b18',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003b1a',

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
                'Oid': 'Xa003b11',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003b0e',
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
                'Oid': 'Xa003b13',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003b0e',
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
                'Oid': 'Xa003b18',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003b15',
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
                'Oid': 'Xa003b1a',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003b15',
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
            'Oid': 'Xa003b1c',
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
                    'Oid': 'Xa003b1e',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '39px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/img_1411.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003b21',                
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
                    'ZIndex': '2','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003b09',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003b24',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003b26',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa003b28',                
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
                    'ZIndex': '3','BackgroundImage': 'PRESA LAZARO CARDENAS_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa003a97',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa003b2b',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa003b2d',

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
                'Oid': 'Xa003b24',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003b21',
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
                'Oid': 'Xa003b26',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003b21',
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
                'Oid': 'Xa003b2b',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003b28',
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
                'Oid': 'Xa003b2d',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa003b28',
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

            PRESA_LAZARO_CARDENAS.init();
            PRESA_LAZARO_CARDENAS.stageHeight = 720;
            PRESA_LAZARO_CARDENAS.stageWidth  = 1280;
            PRESA_LAZARO_CARDENAS.t  = '423003011251459419865563586523700950525';
            PRESA_LAZARO_CARDENAS.stageInitialTransition = 'instant';
            PRESA_LAZARO_CARDENAS.stageInitialTransitionDirection = 'left';
            PRESA_LAZARO_CARDENAS.stageInitialTransitionSpeed = 1000;

            PRESA_LAZARO_CARDENAS.responsiveStage = true;
            PRESA_LAZARO_CARDENAS.responsiveStageKeepRatio = true;
            PRESA_LAZARO_CARDENAS.scaleX = 1;
            PRESA_LAZARO_CARDENAS.scaleY = 1;
            PRESA_LAZARO_CARDENAS.scale = 1;

            PRESA_LAZARO_CARDENAS.showBrowserCompatibilityCheck = false;
                PRESA_LAZARO_CARDENAS.loaderType = 1;
                PRESA_LAZARO_CARDENAS.loaderBackgroundColor = '#000';
                PRESA_LAZARO_CARDENAS.loaderForegroundColor = '#fff';
            PRESA_LAZARO_CARDENAS.stageInitialScene = 'Xa003a97';
            PRESA_LAZARO_CARDENAS.debug = false;
            PRESA_LAZARO_CARDENAS.preloadImages = true;
PRESA_LAZARO_CARDENAS.imagesToPreload = [
'PRESA LAZARO CARDENAS_resources/bt_prev.png',
'PRESA LAZARO CARDENAS_resources/bt_next.png',
'PRESA LAZARO CARDENAS_resources/15 julio 2010 075.jpg',
'PRESA LAZARO CARDENAS_resources/bt_prev.png',
'PRESA LAZARO CARDENAS_resources/bt_next.png',
'PRESA LAZARO CARDENAS_resources/15 julio 2010 124.jpg',
'PRESA LAZARO CARDENAS_resources/img_1368.jpg',
'PRESA LAZARO CARDENAS_resources/bt_prev.png',
'PRESA LAZARO CARDENAS_resources/bt_next.png',
'PRESA LAZARO CARDENAS_resources/img_1371.jpg',
'PRESA LAZARO CARDENAS_resources/bt_prev.png',
'PRESA LAZARO CARDENAS_resources/bt_next.png',
'PRESA LAZARO CARDENAS_resources/img_1399.jpg',
'PRESA LAZARO CARDENAS_resources/bt_prev.png',
'PRESA LAZARO CARDENAS_resources/bt_next.png',
'PRESA LAZARO CARDENAS_resources/img_1400.jpg',
'PRESA LAZARO CARDENAS_resources/bt_prev.png',
'PRESA LAZARO CARDENAS_resources/bt_next.png',
'PRESA LAZARO CARDENAS_resources/img_1404.jpg',
'PRESA LAZARO CARDENAS_resources/bt_prev.png',
'PRESA LAZARO CARDENAS_resources/bt_next.png',
'PRESA LAZARO CARDENAS_resources/img_1411.jpg',
'PRESA LAZARO CARDENAS_resources/bt_prev.png',
'PRESA LAZARO CARDENAS_resources/bt_next.png'
];PRESA_LAZARO_CARDENAS.createWorkspace('PRESA_LAZARO_CARDENASStage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('PRESA_LAZARO_CARDENASStage');
addLoadEvent(PRESA_LAZARO_CARDENASstart);

