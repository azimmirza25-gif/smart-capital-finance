// Smart Capital Loans

document.addEventListener("DOMContentLoaded", function () {

    console.log("Smart Capital Loans Loaded");

    // Loan Form
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = form.querySelector('input[name="name"]').value.trim();
            const mobile = form.querySelector('input[name="mobile"]').value.trim();
            const city = form.querySelector('input[name="city"]').value.trim();
            const loanType = form.querySelector('select[name="loanType"]').value;

            if (name === "" || mobile === "" || city === "") {
                alert("Please fill all required fields.");
                return;
            }

            if (!/^[6-9]\d{9}$/.test(mobile)) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            alert(
                "Thank you, " +
                name +
                "!\n\nYour enquiry has been submitted.\n\nLoan Type: " +
                loanType
            );

            form.reset();
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
