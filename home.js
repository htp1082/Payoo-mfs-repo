
document.getElementById('btn')
        .addEventListener('click',function(){
            // console.log("home js is connected")

        const addAmount = parseInt(document.getElementById('addNumber').value);
        const balance = parseInt(document.getElementById('amount').innerText);

        const newAvailableValance= addAmount + balance;
        console.log(newAvailableValance);

        document.getElementById('amount').innerText=newAvailableValance;

            
        })