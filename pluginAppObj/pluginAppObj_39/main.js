function socialicons_pluginAppObj_39() {
    
    var containerWidth;
    var btnWidth;
    var btnHeight;
    var btnMargin;
    var numBtn; 
    
    x5engine.boot.push(function(){
        
        btnWidth = 50;
        btnHeight = 50;
        btnMargin = 30;
        numBtn = $("#pluginAppObj_39 .social-icon").length;
        
        $('#imContent').on('breakpointChangedOrFluid', function (e, breakpoint) {
            resizeSocials_pluginAppObj_39();
        });
        resizeSocials_pluginAppObj_39();
    });

       function resizeSocials_pluginAppObj_39() {
           
           /*reset margins*/
           $("#pluginAppObj_39 .social-icon").removeClass("last-item-row");
           $("#pluginAppObj_39 .social-icon").removeClass("last-row");
           $("#pluginAppObj_39 .social-icon").removeClass("one-row");
                 
           containerWidth = $('#pluginAppObj_39').width();
           
           var buttonPerRow = 1;
           if("horizontal" === "horizontal")
                buttonPerRow = getButtonPerRow();
               
           if(buttonPerRow == 1){
               $("#pluginAppObj_39 .social-icon:last-child").addClass("last-row");
           }
           else if(numBtn == buttonPerRow){
               $("#pluginAppObj_39 .social-icon").addClass("last-row");
               $("#pluginAppObj_39 .social-icon:last-child").addClass("last-item-row");  
            }
           else{
               $("#pluginAppObj_39 .social-icon:nth-child(" + buttonPerRow + "n)").addClass("last-item-row");
               $("#pluginAppObj_39 .social-icon:nth-child(n+" + parseInt(buttonPerRow+1) + ")").addClass("last-row");
           }
             
           var fact = containerWidth < btnWidth ? containerWidth / btnWidth : 1;
           $('#pluginAppObj_39 .social-icon, #pluginAppObj_39 .sides-container').css({
               width: btnWidth * fact,
               height: btnHeight * fact
           });
       }

        function getButtonPerRow() {
            var remaining = containerWidth - btnWidth;
            var count = 1;
            while (remaining >= btnWidth + (count == numBtn-1 ? 0 : btnMargin)) {
                count++;
                if(count == numBtn)
                    break;
                
                remaining -= btnWidth + btnMargin;
            }           
            return count;
        }
}