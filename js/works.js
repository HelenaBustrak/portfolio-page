const project = document.querySelectorAll(".project");
const textOverlay = document.querySelectorAll(".project__overlay");
const x = window.matchMedia("(max-width: 1019px)");

function showOnclick(x) {
    if (x.matches) {

        textOverlay.forEach((overlay) => {
            overlay.addEventListener("click", handleClick);
        });

        function handleClick() {
            this.style.opacity = "1";

        }
        

        
    }
}


x.addListener(showOnclick(x));

