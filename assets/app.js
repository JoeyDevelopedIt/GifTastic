$("#car-button").on("click", function(){

    var input2 = $("#searchtext").val()

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=car&api_key=S7YJDZ7PhpiLtegPMIgkXm2TtCJPGjiC&limit=10");

    xhr.done(function(response) { 
        
        console.log("success got data", response);  
    
        var gifs = response.data
    
        for (i in gifs){
    
        $('.inner').append("<img src='"+gifs[i].images.original.url+"' style='height:350px; width:350px;'/>")
    }
    });
});    


//Add animate only when gif is clicked on

//Add rating of gif




$("#rari-button").on("click", function(){

    var input = $("#searchtext").val()

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ferrari&api_key=S7YJDZ7PhpiLtegPMIgkXm2TtCJPGjiC&limit=10");

    xhr.done(function(response) { 
        
        console.log("success got data", response);  
    
        var gifs = response.data
    
        for (i in gifs){
    
        $('.inner').append("<img src='"+gifs[i].images.original.url+"' style='height:350px; width:350px;'/>")
    }
    });
});    
 




function getData(){

    var input = $("#searchtext").val()

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=S7YJDZ7PhpiLtegPMIgkXm2TtCJPGjiC&limit=10");

    xhr.done(function(response) { 
        
        console.log("success got data", response);  
    
        var gifs = response.data
    
        for (i in gifs){
    
        $('.inner').append("<img src='"+gifs[i].images.original.url+"' style='height:350px; width:350px;'/>")
    }
    });

}

