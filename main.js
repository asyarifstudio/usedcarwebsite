

$("#main-form").submit((event)=>{
    event.preventDefault();
    var name = event.target.name.value;
    var phone = event.target.phone.value;

    

    if(event.target.name.checkValidity() && event.target.phone.checkValidity()){
        //both form true, attempt to submit
    }
    else{
        
    }
})