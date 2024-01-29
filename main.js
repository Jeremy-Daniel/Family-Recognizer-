var model_load;
var img;

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#your_webcam");

function take_picture(){
Webcam.snap(function(picture_storage){
document.getElementById("your_picture").innerHTML = "<img id='actual_picture' src = '"+ picture_storage+"'>";
});
}

console.log("M15 version", m15.version);


model_load = ml5.imageClassifier("https://storage.googleapis.com/tm-model/d8LZXAh9J/model.json", model_loaded);

function model_loaded(){
    console.log("it worked");
}

function identifying_image(){
img = document.getElementById("actual_picture");
model_load.classify(img,result_got);
}

function result_got(error,no_problem){
if(error){
    console.log(error);
}
else{
    console.log(no_problem);
    document.getElementById("person_name").innerHTML = no_problem[0].label;
    document.getElementById("person_accuracy").innerHTML = no_problem[0].confidence.toFixed(2);
}
}
