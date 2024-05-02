
Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality: 100
})
camera= document.getElementById("camera");
Webcam.attach("#camera")

function imag(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/21UJzOAcc/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }


function check(){
    img = document.getElementById("captured_image")
    classifier.classify(img, gotResult)
}

function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML = results[0].label;

        gesture = results[0].label;
        
        toSpeak = "";
        if(gesture == "Ok")
        {
          toSpeak = "This is looking amazing";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
        }
        else if(gesture == "Thumbs Up")
        {
          toSpeak = "All the best";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
        }
        else if(gesture == "Peace")
        {
          toSpeak = "That was the marvelous victory";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
        }
    
        speak();
    }
}
 

function speak(){
    var synth = window.speechSynthesis;

    speak_data = toSpeak;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}






















