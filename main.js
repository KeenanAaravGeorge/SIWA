function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.sounClassifier('https://teachablemachine.withgoogle.com/models/YIUNpuVbX/model.json', modelReady)
}
function modelReady() {
   classifier.classify(gotResults) 
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";


        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        if (results[0].label == "Meow") {
            img.src = 'https://tenor.com/bJKu6.gif';
            img1.src = 'https://mpng.subpng.com/20180712/olx/kisspng-boxer-labrador-retriever-puppy-pet-clip-art-boxer-dog-5b47725f7735b7.1734161115314089914883.jpg';
            img2.src = 'https://png.pngtree.com/png-vector/20200418/ourlarge/pngtree-cow-illustration-in-a-cute-cartoon-style-png-image_2189783.jpg';
            img3.src = 'https://i.pinimg.com/originals/1d/7b/73/1d7b73af203e184d6df6617c4c78e2c9.png';
        } else if (results[0].label == "Bark") {
            img.src = 'https://img.lovepik.com/element/45001/6381.png_860.png';
            img1.src = 'https://i.gifer.com/7FuC.gif';
            img2.src = 'https://png.pngtree.com/png-vector/20200418/ourlarge/pngtree-cow-illustration-in-a-cute-cartoon-style-png-image_2189783.jpg';
            img3.src = 'https://i.pinimg.com/originals/1d/7b/73/1d7b73af203e184d6df6617c4c78e2c9.png';
        } else if (results[0].label == "moo") {
            img.src = 'https://img.lovepik.com/element/45001/6381.png_860.png';
            img1.src = 'https://mpng.subpng.com/20180712/olx/kisspng-boxer-labrador-retriever-puppy-pet-clip-art-boxer-dog-5b47725f7735b7.1734161115314089914883.jpg';
            img2.src = 'gihttps://media.giphy.com/media/h55EUEsTG9224/giphy.gif';
            img3.src = 'https://i.pinimg.com/originals/1d/7b/73/1d7b73af203e184d6df6617c4c78e2c9.png';
        } 
        else if (results[0].label == "roar") {       
        img.src = 'https://img.lovepik.com/element/45001/6381.png_860.png';
        img1.src = 'https://mpng.subpng.com/20180712/olx/kisspng-boxer-labrador-retriever-puppy-pet-clip-art-boxer-dog-5b47725f7735b7.1734161115314089914883.jpg';
        img2.src = 'gihttps://media.giphy.com/media/h55EUEsTG9224/giphy.gif';
        img3.src = 'https://pin.it/31Ef2dB';
    } 
    }
}