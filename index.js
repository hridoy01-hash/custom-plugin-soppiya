window.onload = () => {
    setTimeout(() => {


        const body_container = document.querySelector(".body_container");
        const circuleButton_wrapper = elementMaker("div", ["circuleButton_wrapper"], "circuleButton_wrapper_id");
        const topIcon = elementMaker("div", ["topIcon"]);
        topIcon.innerHTML = `<svg id="liquid_chevron_icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.547" viewBox="0 0 12 6.147"> <path class="liquid_svg_icons" id="Arrow" d="M16.749,8.165a.857.857,0,0,0-1.212,0L11.606,12.1a.875.875,0,0,1-1.212,0L6.463,8.165A.857.857,0,1,0,5.251,9.377l3.93,3.931a2.571,2.571,0,0,0,3.637,0l3.931-3.931A.857.857,0,0,0,16.749,8.165Z" transform="translate(-5 -7.914)" fill="#1e272e"></path> </svg>`;
        circuleButton_wrapper.appendChild(topIcon);
        body_container.appendChild(circuleButton_wrapper);
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                circuleButton_wrapper.style.display = "block";
            } else {
                circuleButton_wrapper.style.display = "none";
            }
        }
        const circuleButton_wrapper_id = document.getElementById("circuleButton_wrapper_id");
        circuleButton_wrapper_id.addEventListener("click", function () {
            document.documentElement.scrollTop = 0;
        });










        function elementMaker(name, className, id) {
            try {
                let element = document.createElement(name);
                className && (element.className = className.join(" "));
                id && (element.id = id);
                return element;
            } catch (err) {
                console.log(err.message);
            };
        };

        function setAttributes(elementName, allAttributes) {
            for (let key in allAttributes) {
                elementName.setAttribute(key, allAttributes[key]);
            };
        };

    }, 1300)
};