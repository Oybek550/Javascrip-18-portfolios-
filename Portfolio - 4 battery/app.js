navigator.getBattery().then(battery => {

    let percantage = document.querySelector(".percantage");
    let numberpercent = document.querySelector(".numberpercent");
    let text = document.querySelector(".text");

    
    function show () {
        zayryanchikniuqqanda ()
        pop ()
    }
    show ()

    function pop () {
        percantage.style.width = battery.level * 100 + '%';
        numberpercent.innerHTML = battery.level * 100 + '%';
    }

    function zayryanchikniuqqanda () {
        text.innerHTML = battery.charging ? "your device charging" : ""
    }

    battery.addEventListener('levelchange',() => {
        pop ()
    })

    battery.addEventListener('chargingchange', () =>{
        zayryanchikniuqqanda ()
    })
}) 