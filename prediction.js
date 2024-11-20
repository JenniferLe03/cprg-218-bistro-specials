shake.addEventListener('click', function () {
	console.log('Shake it off!');

	let response = Math.random();
	console.log(response);
    response = Math.floor(Math.random() * 11); //0-10

    if (response==0){
        output.innerHTML = "Yes, indeed"
    }

    if (response ==1){
        output.innerHTML = "Ask again later"
    }

    if (response ==2){
        output.innerHTML = "Very doubtful"
    }

    console.log(response);
});

//response - Math.floor(Math.random()*9)+1; this code is a way to generate it from 0-10

/* we don't want js to run soemthing until something happens*/
/*telling it to run everything in this function*/
/*"let" variable let you change something often"*/

