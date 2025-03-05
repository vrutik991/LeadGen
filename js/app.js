$(document).ready(function () {

    $("#owl-demo").owlCarousel({

        navigation: true, // Show next and prev buttons

        slideSpeed: 300,
        paginationSpeed: 400,

        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false

    });
});


const cal_item_heading = document.querySelectorAll(".cal-item h3")
// const calculator = document.querySelector(".calculator");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

function increaseCounter() {
    cal_item_heading.forEach((item, index) => {
        setInterval(() => {
            if (count1 < 1500) {
                count1++;
                cal_item_heading[0].innerHTML = count1;
            }
            if (count2 < 1400) {
                count2++;
                cal_item_heading[1].innerHTML = count2;
            }
            if (count3 < 1250) {
                count3++;
                cal_item_heading[2].innerHTML = count3;
            }
            if (count4 < 1600) {
                count4++;
                cal_item_heading[3].innerHTML = count4;
            }
        }, 5)

    })
}

increaseCounter();