$(document).ready(function() {
    $("#msgForm").validate({
        rules: {
            name : {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true,
            },
            message: {
                required: true
            }
        },
        messages : {
            name: {
                required: "Name is required",
                minlength: "Name should be at least 3 characters"
            },
            email: {
                email: "The email should be in the format: abc@domain.tld"
            },
            }
    });
});

function checkAnswer1() {
    let selectedValue = document.querySelector('input[name=wonders]:checked').value;
    let fbspan = document.getElementById("fb1");
    if(selectedValue == "victoria") {
        fbspan.innerHTML = "";
        fbspan.innerHTML = "Correct!";
    }
    else{
        fbspan.innerHTML = "";
        fbspan.innerHTML = "Not quite.. The Victoria Falls is one of the seven wonders of the world with the largest natural sheet of falling water.";
    }
}
    function checkAnswer2() {
        let selectedValue = document.querySelector('input[name=business]:checked').value;
        let fbspan = document.getElementById("fb2");
        if(selectedValue == "estate") {
            fbspan.innerHTML = "";
            fbspan.innerHTML = "Correct!";
        }
        else{
            fbspan.innerHTML = "";
            fbspan.innerHTML = "Oops! Real estate is the fastest growing business in Zimbabwe on the international market as the affordable land prices are attracting a lot of foreign investors.";
        }
    }
    function checkAnswer3() {
        let selectedValue = document.querySelector('input[name=city]:checked').value;
        let fbspan = document.getElementById("fb3");
        if(selectedValue == "harare") {
            fbspan.innerHTML = "";
            fbspan.innerHTML = "Correct!";
        }
        else{
            fbspan.innerHTML = "";
            fbspan.innerHTML = "Not quite.. Harare, originally called Salisburry is the biggest as well as the capital city of Zimbabwe.";
        }
    }
    function checkAnswer4() {
        let selectedValue = document.querySelector('input[name=park]:checked').value;
        let fbspan = document.getElementById("fb4");
        if(selectedValue == "hwange") {
            fbspan.innerHTML = "";
            fbspan.innerHTML = "Correct!";
        }
        else{
            fbspan.innerHTML = "";
            fbspan.innerHTML = "Not really.. Hwange National Park is the biggest national park and former heritage site for the stone and iron age people.";
        }
    }
    function checkAnswer5() {
        let selectedValue = document.querySelector('input[name=crop]:checked').value;
        let fbspan = document.getElementById("fb5");
        if(selectedValue == "maize") {
            fbspan.innerHTML = "";
            fbspan.innerHTML = "Correct!";
        }
        else{
            fbspan.innerHTML = "";
            fbspan.innerHTML = "Not quite.. Maize is the most grown and staple food of Zimbabwe. This is why Zimbabwe is refereed to as the breadbasket of Africa!";
        }
    }