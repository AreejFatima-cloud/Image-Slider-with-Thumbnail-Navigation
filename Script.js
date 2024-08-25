var prev = document.getElementById("prev");
        var next = document.getElementById("next");
        var thumbnail = document.getElementsByClassName("thumbnail");
        var hero = document.getElementById("hero");

        var bgImg = [
             "img6.jpg",
             "img1.jpg",
             "img2.jpeg",
             "img3.jpg",
             "img4.PNG",
             "img5.jpg",
             "img8.jpg",
             "img7.jpg"
            ];
        let i = 0;

        next.onclick = function() {
            thumbnail[i].classList.remove("active");// remove previous thumbnail
            i = (i + 1) % bgImg.length; // forwards the images in circular motion 
            hero.style.backgroundImage = 'url("' + bgImg[i] + '")';
           
            thumbnail[i].classList.add("active");//change the thumbnial
        }

        prev.onclick = function() {
            thumbnail[i].classList.remove("active");//remove the previous thumbnail
            i = (i - 1 + bgImg.length) % bgImg.length; // backwards the images in circular motion
            hero.style.backgroundImage = 'url("' + bgImg[i] + '")';
            thumbnail[i].classList.add("active");//add the new thumbnail
        }