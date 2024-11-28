let value;

function muunna(){
    let lampotila = Number(document.getElementById("syote").value);
    if (isNaN(lampotila)) {
        alert('Syötä luku!')
    } else if (lampotila < -273.15 && document.getElementById("valitsin").value == "from_celcius") {
        alert('Lämpötila on alle absoluuttisen nollapisteen!')
    } else if (lampotila < -459.67 && document.getElementById("valitsin").value != "from_celcius") {
        alert('Lämpötila on alle absoluuttisen nollapisteen!')
    } else {
        if (document.getElementById("valitsin").value == "from_celcius") {
            if (lampotila <= -20) {
                document.body.style.backgroundImage = 'url(metsä3.jpg)'
                document.body.style.backgroundPosition = "center center"
                document.body.style.backgroundSize = 'cover'
                document.body.style.backgroundRepeat = 'no-repeat'
                document.body.style.backgroundAttachment = 'fixed'
            } else if (lampotila >= 20) {
                document.body.style.backgroundImage = 'url(metsä.jpg)'
                document.body.style.backgroundPosition = 'center center'
                document.body.style.backgroundSize = 'cover'
                document.body.style.backgroundRepeat = 'no-repeat'
                document.body.style.backgroundAttachment = 'fixed'
            } else {
                document.body.style.backgroundImage = 'url(metsä2.webp)'
                document.body.style.backgroundPosition = 'center center'
                document.body.style.backgroundSize = 'cover'
                document.body.style.backgroundRepeat = 'no-repeat'
                document.body.style.backgroundAttachment = 'fixed'
            }
            value = lampotila * 1.8 + 32;
            document.getElementById("tulostus").innerHTML = value + ' Fahrenheit';
        } else {
            value = (lampotila-32) / 1.8;
            document.getElementById("tulostus").innerHTML = value + ' Celcius';
            if (value <= -20) {
                document.body.style.backgroundImage = 'url(metsä3.jpg)'
                document.body.style.backgroundPosition = "center center"
                document.body.style.backgroundSize = 'cover'
                document.body.style.backgroundRepeat = 'no-repeat'
                document.body.style.backgroundAttachment = 'fixed'
            } else if (value >= 20) {
                document.body.style.backgroundImage = 'url(metsä.jpg)'
                document.body.style.backgroundPosition = 'center center'
                document.body.style.backgroundSize = 'cover'
                document.body.style.backgroundRepeat = 'no-repeat'
                document.body.style.backgroundAttachment = 'fixed'
            } else {
                document.body.style.backgroundImage = 'url(metsä2.webp)'
                document.body.style.backgroundPosition = 'center center'
                document.body.style.backgroundSize = 'cover'
                document.body.style.backgroundRepeat = 'no-repeat'
                document.body.style.backgroundAttachment = 'fixed'
            }
        }
    }
} 

function desimaali1() {
    if (document.getElementById("valitsin").value == "from_celcius"){
        document.getElementById("tulostus").innerHTML = value.toFixed(1) + ' Fahrenheit';
    } else {
        document.getElementById("tulostus").innerHTML = value.toFixed(1) + ' Celcius';
    }
}

function desimaali2() {
    if (document.getElementById("valitsin").value == "from_celcius"){
        document.getElementById("tulostus").innerHTML = value.toFixed(2) + ' Fahrenheit';
    } else {
        document.getElementById("tulostus").innerHTML = value.toFixed(2) + ' Celcius';
    }
}

function desimaali3() {
    if (document.getElementById("valitsin").value == "from_celcius"){
        document.getElementById("tulostus").innerHTML = value.toFixed(3) + ' Fahrenheit';
    } else {
        document.getElementById("tulostus").innerHTML = value.toFixed(3) + ' Celcius';
    }
}
