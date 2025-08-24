
// console.log('connected to js Script')

document.getElementById('btn')
       .addEventListener('click', function(){
        // console.log(" button was clicked")

        const mobile_number = 15337743510;
        const pinNumber = 1082;

        const mobile_number_value = document.getElementById('mobileNumber').value ;
        const pin_number_value = document.getElementById('pin').value ;

        const mobile_number_converted = parseInt(mobile_number_value);
        const pin_number_converted = parseInt(pin_number_value);

        if( mobile_number_converted === mobile_number && pinNumber === pin_number_converted){

           window.location.href ="./home.html"
           console.log("working")
        }else{
            // console.log("invalid")
            alert("Invalid")
        }
       })