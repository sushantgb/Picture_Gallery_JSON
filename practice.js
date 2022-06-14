var i = 0;  //variable for increment of image position
let dataLen; //variable for length of image gallery
var nextBtn = document.getElementById("next"); //next button
var backBtn = document.getElementById("back"); //back button
loadpage(i); //function calling for loading the image

//function for loading the data
function loadpage(i) {
    var xhr = new XMLHttpRequest(); //XHR function
    xhr.onload = function () {
        const obj = xhr.responseText;
        var xhrObj = JSON.parse(obj); //parsing the object
        console.log(xhrObj);
        var gallery = xhrObj.gallery; //getting gallery data by JSON object
        var dataLen = gallery.length; //gallery length
        console.log("Gallery Length : "+ dataLen);
        //for printing the total number of images
        document.querySelector(".total").innerHTML = dataLen; 
        printData(i, gallery);
        //next button funtion
        nextBtn.onclick = function(){
            if (i < dataLen-1) {
                i++; //incrementing till reached gallery length
                loadpage(i);
            }else{
                console.log((i+1)-dataLen);
                i= (i+1)-dataLen; //after last image moving to first image
                loadpage(i);
            }
        };
        backBtn.onclick = function(){
            if(i>0){
                i--; //decrementing till i reaches 0
                loadpage(i);
            }else{
                console.log(dataLen-(i++));
                i=dataLen-(i++); //after first image moving to last image
                loadpage(i);
            }
        };
    };
    xhr.open("GET", "practice.json", true);
    xhr.send();
}


function printData(e, gallery) {
    var image = gallery[e].url;
    var title = gallery[e].title;
    var serial =gallery[e].serial;
    document.querySelector(".image").src = image;
    document.querySelector(".title").innerHTML = title;
    document.querySelector(".serial").innerHTML = serial;
    console.log(image);
}
