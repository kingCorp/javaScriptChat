$(function(){
        //using json to get api
        $.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',{ "_": $.now() },function(response){
            console.log(response);
           $('#myquotes').html(response[0].content);
           $('#myquotestitle').html(response[0].title);
        })

       //gets data from fields and puts back to webpage 
       $('#sends').click(function(){
           var myName = $('#name').val();
           console.log(myName);
           var myCom = $('#comment').val();
           console.log(myCom);
           var t = new Date();
           $('#name').val('');
           $('#comment').val('');
           
           var myout = "<p><strong> "+myName+" </strong> <span> says: </span> "+myCom+" </p> "
           $('#messages').append(myout+" \t "+t.getHours()+" : "+t.getUTCMinutes()+" mins ");
           
       }); 

     });