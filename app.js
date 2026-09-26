document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /*
     * Smooth scrolling
     */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /*
     * FAQ
     * Close other questions when opening one.
     */

    const faqItems = document.querySelectorAll(".faq details");

    faqItems.forEach(function (item) {

        item.addEventListener("toggle", function () {

            if (!item.open) {
                return;
            }

            faqItems.forEach(function (otherItem) {

                if (otherItem !== item) {
                    otherItem.removeAttribute("open");
                }

            });

        });

    });

});