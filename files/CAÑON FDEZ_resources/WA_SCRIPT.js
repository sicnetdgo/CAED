
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

            loadjscssfile("CAÑON FDEZ_resources/WA.min.js", "js");
            loadjscssfile("CAÑON FDEZ_resources/modernizr.custom.43133.min.js", "js");
            loadjscssfile("CAÑON FDEZ_resources/spin.min.js", "js");

            loadjscssfile("CAÑON FDEZ_resources/JQ_Textualizer.min.js", "js");
            loadjscssfile("CAÑON FDEZ_resources/WA.min.css", "css");            
       }
	   
	   loadjscssfile("CAÑON FDEZ_resources/ani.css", "css");                          
}
	// Global variables




function CA_ON_FDEZstart() {    

    try
    {   
        if (navigator.userAgent.match(/msie/i))
		{			
            
		    return;            
		}

    var CA_ON_FDEZ = new WA();
CA_ON_FDEZ.custom = {
}

CA_ON_FDEZ.stage = [{            

            // SCENE 1
            'Oid': 'Xa004817',
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
                    'Oid': 'Xa004819',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'CAÑON FDEZ_resources/dsc09961.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00481c',                
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
                    'ZIndex': '2','BackgroundImage': 'CAÑON FDEZ_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa0048c2',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00481f',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa004821',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa004823',                
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
                    'ZIndex': '3','BackgroundImage': 'CAÑON FDEZ_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00482a',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa004826',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa004828',

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
                'Oid': 'Xa00481f',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00481c',
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
                'Oid': 'Xa004821',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00481c',
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
                'Oid': 'Xa004826',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004823',
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
                'Oid': 'Xa004828',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004823',
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
            'Oid': 'Xa00482a',
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
                    'Oid': 'Xa00482c',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'CAÑON FDEZ_resources/img_0589.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00482f',                
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
                    'ZIndex': '2','BackgroundImage': 'CAÑON FDEZ_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa004817',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa004832',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa004834',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa004836',                
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
                    'ZIndex': '3','BackgroundImage': 'CAÑON FDEZ_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00483d',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa004839',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00483b',

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
                'Oid': 'Xa004832',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00482f',
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
                'Oid': 'Xa004834',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00482f',
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
                'Oid': 'Xa004839',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004836',
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
                'Oid': 'Xa00483b',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004836',
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
            'Oid': 'Xa00483d',
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
                    'Oid': 'Xa00483f',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'CAÑON FDEZ_resources/img_0596.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa004842',                
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
                    'ZIndex': '2','BackgroundImage': 'CAÑON FDEZ_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00482a',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa004845',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa004847',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa004849',                
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
                    'ZIndex': '3','BackgroundImage': 'CAÑON FDEZ_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa004850',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00484c',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00484e',

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
                'Oid': 'Xa004845',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004842',
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
                'Oid': 'Xa004847',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004842',
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
                'Oid': 'Xa00484c',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004849',
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
                'Oid': 'Xa00484e',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004849',
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
            'Oid': 'Xa004850',
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
                    'Oid': 'Xa004852',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'CAÑON FDEZ_resources/img_0632.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa004855',                
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
                    'ZIndex': '2','BackgroundImage': 'CAÑON FDEZ_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00483d',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa004858',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00485a',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00485c',                
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
                    'ZIndex': '3','BackgroundImage': 'CAÑON FDEZ_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa004863',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00485f',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa004861',

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
                'Oid': 'Xa004858',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004855',
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
                'Oid': 'Xa00485a',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004855',
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
                'Oid': 'Xa00485f',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00485c',
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
                'Oid': 'Xa004861',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00485c',
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
            'Oid': 'Xa004863',
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
                    'Oid': 'Xa004865',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'CAÑON FDEZ_resources/img_1137.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa004868',                
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
                    'ZIndex': '2','BackgroundImage': 'CAÑON FDEZ_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa004850',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00486b',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00486d',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00486f',                
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
                    'ZIndex': '3','BackgroundImage': 'CAÑON FDEZ_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa004876',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa004872',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa004874',

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
                'Oid': 'Xa00486b',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004868',
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
                'Oid': 'Xa00486d',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004868',
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
                'Oid': 'Xa004872',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00486f',
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
                'Oid': 'Xa004874',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00486f',
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
            'Oid': 'Xa004876',
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
                    'Oid': 'Xa004878',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'CAÑON FDEZ_resources/img_1583.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00487b',                
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
                    'ZIndex': '2','BackgroundImage': 'CAÑON FDEZ_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa004863',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa00487e',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa004880',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa004882',                
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
                    'ZIndex': '3','BackgroundImage': 'CAÑON FDEZ_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa004889',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa004885',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa004887',

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
                'Oid': 'Xa00487e',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00487b',
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
                'Oid': 'Xa004880',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00487b',
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
                'Oid': 'Xa004885',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004882',
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
                'Oid': 'Xa004887',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004882',
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
            'Oid': 'Xa004889',
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
                    'Oid': 'Xa00488b',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'CAÑON FDEZ_resources/img_6614.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa00488e',                
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
                    'ZIndex': '2','BackgroundImage': 'CAÑON FDEZ_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa004876',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa004891',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa004893',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa004895',                
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
                    'ZIndex': '3','BackgroundImage': 'CAÑON FDEZ_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00489c',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa004898',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa00489a',

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
                'Oid': 'Xa004891',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00488e',
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
                'Oid': 'Xa004893',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa00488e',
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
                'Oid': 'Xa004898',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004895',
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
                'Oid': 'Xa00489a',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa004895',
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
            'Oid': 'Xa00489c',
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
                    'Oid': 'Xa00489e',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'CAÑON FDEZ_resources/imgl4984.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0048a1',                
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
                    'ZIndex': '2','BackgroundImage': 'CAÑON FDEZ_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa004889',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0048a4',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0048a6',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0048a8',                
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
                    'ZIndex': '3','BackgroundImage': 'CAÑON FDEZ_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa0048af',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0048ab',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0048ad',

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
                'Oid': 'Xa0048a4',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048a1',
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
                'Oid': 'Xa0048a6',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048a1',
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
                'Oid': 'Xa0048ab',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048a8',
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
                'Oid': 'Xa0048ad',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048a8',
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
            'Oid': 'Xa0048af',
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
                    'Oid': 'Xa0048b1',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'CAÑON FDEZ_resources/imgl5026.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0048b4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Cursor': 'Pointer',
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '334px',
                    'Left': '-2px',
                    'Height': '64px',
                    'Width': '64px',
                    'ZIndex': '2','BackgroundImage': 'CAÑON FDEZ_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa00489c',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0048b7',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0048b9',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0048bb',                
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
                    'ZIndex': '3','BackgroundImage': 'CAÑON FDEZ_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa0048c2',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0048be',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0048c0',

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
                'Oid': 'Xa0048b7',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048b4',
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
                'Oid': 'Xa0048b9',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048b4',
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
                'Oid': 'Xa0048be',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048bb',
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
                'Oid': 'Xa0048c0',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048bb',
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
            'Oid': 'Xa0048c2',
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
                    'Oid': 'Xa0048c4',                
                    'Type': 'box',
                    'InnerHTML': ''
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '20px',
                    'Left': '36px',
                    'Height': '680px',
                    'Width': '1209px',
                    'ZIndex': '1','BackgroundImage': 'CAÑON FDEZ_resources/imgl5438.jpg','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0048c7',                
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
                    'ZIndex': '2','BackgroundImage': 'CAÑON FDEZ_resources/bt_prev.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa0048af',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'right',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0048ca',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0048cc',

'Pressed': [],
                    
                    'Hover': [],},
                {
                    'Oid': 'Xa0048ce',                
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
                    'ZIndex': '3','BackgroundImage': 'CAÑON FDEZ_resources/bt_next.png','BackgroundSize': '100% 100%','Display': 'block','TextAlign': 'left',

                'TextColor': '#000000',
                'Opacity': '0.2',
                'FontFamily': 'Arial',
                'FontSize': '14px',
                'LineHeight': '1em',

                

                'Visible': 'true',

'OnMouseClick' : 2,
'OnMouseClickParam' : 'Xa004817',
'OnMouseClickTransition' : 'slide',
'OnMouseClickTransitionDirection' : 'left',
'OnMouseClickTransitionSpeed' : '1000',
'OnMouseOver' : 3,
'OnMouseOverParam' : 'Xa0048d1',

'OnMouseOut' : 3,
'OnMouseOutParam' : 'Xa0048d3',

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
                'Oid': 'Xa0048ca',
                'Name': 'bt_prev_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048c7',
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
                'Oid': 'Xa0048cc',
                'Name': 'bt_prev_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048c7',
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
                'Oid': 'Xa0048d1',
                'Name': 'bt_next_over',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048ce',
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
                'Oid': 'Xa0048d3',
                'Name': 'bt_next_out',
                'Transforms': [
			
                    

			    ],
                'Transitions': [
			
                    {
                            'ObjectId':'Xa0048ce',
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

            CA_ON_FDEZ.init();
            CA_ON_FDEZ.stageHeight = 720;
            CA_ON_FDEZ.stageWidth  = 1280;
            CA_ON_FDEZ.t  = '423003011251459419865563586523700950525';
            CA_ON_FDEZ.stageInitialTransition = 'instant';
            CA_ON_FDEZ.stageInitialTransitionDirection = 'left';
            CA_ON_FDEZ.stageInitialTransitionSpeed = 1000;

            CA_ON_FDEZ.responsiveStage = true;
            CA_ON_FDEZ.responsiveStageKeepRatio = true;
            CA_ON_FDEZ.scaleX = 1;
            CA_ON_FDEZ.scaleY = 1;
            CA_ON_FDEZ.scale = 1;

            CA_ON_FDEZ.showBrowserCompatibilityCheck = false;
                CA_ON_FDEZ.loaderType = 1;
                CA_ON_FDEZ.loaderBackgroundColor = '#000';
                CA_ON_FDEZ.loaderForegroundColor = '#fff';
            CA_ON_FDEZ.stageInitialScene = 'Xa004817';
            CA_ON_FDEZ.debug = false;
            CA_ON_FDEZ.preloadImages = true;
CA_ON_FDEZ.imagesToPreload = [
'CAÑON FDEZ_resources/dsc09961.jpg',
'CAÑON FDEZ_resources/bt_prev.png',
'CAÑON FDEZ_resources/bt_next.png',
'CAÑON FDEZ_resources/img_0589.jpg',
'CAÑON FDEZ_resources/bt_prev.png',
'CAÑON FDEZ_resources/bt_next.png',
'CAÑON FDEZ_resources/img_0596.jpg',
'CAÑON FDEZ_resources/bt_prev.png',
'CAÑON FDEZ_resources/bt_next.png',
'CAÑON FDEZ_resources/img_0632.jpg',
'CAÑON FDEZ_resources/bt_prev.png',
'CAÑON FDEZ_resources/bt_next.png',
'CAÑON FDEZ_resources/img_1137.jpg',
'CAÑON FDEZ_resources/bt_prev.png',
'CAÑON FDEZ_resources/bt_next.png',
'CAÑON FDEZ_resources/img_1583.jpg',
'CAÑON FDEZ_resources/bt_prev.png',
'CAÑON FDEZ_resources/bt_next.png',
'CAÑON FDEZ_resources/img_6614.jpg',
'CAÑON FDEZ_resources/bt_prev.png',
'CAÑON FDEZ_resources/bt_next.png',
'CAÑON FDEZ_resources/imgl4984.jpg',
'CAÑON FDEZ_resources/bt_prev.png',
'CAÑON FDEZ_resources/bt_next.png',
'CAÑON FDEZ_resources/imgl5026.jpg',
'CAÑON FDEZ_resources/bt_prev.png',
'CAÑON FDEZ_resources/bt_next.png',
'CAÑON FDEZ_resources/imgl5438.jpg',
'CAÑON FDEZ_resources/bt_prev.png',
'CAÑON FDEZ_resources/bt_next.png'
];CA_ON_FDEZ.createWorkspace('CA_ON_FDEZStage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('CA_ON_FDEZStage');
addLoadEvent(CA_ON_FDEZstart);

