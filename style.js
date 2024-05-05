document.addEventListener('DOMContentLoaded', function () {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-links");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-links");
        document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }

    const typed = new Typed('.multiple-text', {
        strings: ['Frontend ', 'Java Programmer', 'DSA Programmer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyZl4ddRVGJ5WgP07GjunMm5mcOD-L9s-un5q0y_k_7rQpKT2lLZZYaPkMKyq0Y2WnS/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message Sent Successfully";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });
});
