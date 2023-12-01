let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () =>{

    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");

};

const disableDarkMode = () => {

    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);

};

if(darkMode === "enabled"){

    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {

    darkMode = localStorage.getItem("darkMode");

    if(darkMode !== "enabled"){

        enableDarkMode();
        // console.log(darkMode); 
    }
    else{
        
        disableDarkMode();
        // console.log(darkMode);
    }
});

const rotateButton = document.getElementById("dark-mode-toggle");
let rotated = false;

rotateButton.addEventListener("click", function () {
  if (!rotated) {
    rotateButton.classList.add("rotate");
    rotated = true;
    setTimeout(() => {
        rotateButton.classList.remove("rotate");
        rotated = false;
      }, 800);
    }
});

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > $(window).height()*1.11) {
//           $(".navbar-container").css("background" , "#E5C0D6");
//         }
//         else if (scroll > 10) {
//           $(".navbar").css("background" , "#C2EBF9");
//         }
//         // else{
//         //   $(".navbar-container").css("background" , "transparent");
//         // }
//     })
// })

// document.querySelector("#imgID").addEventListener("click", () => {
//     window.location.href = "http://google.com";
// });


