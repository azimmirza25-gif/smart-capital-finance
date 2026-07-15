// EMI Calculator
function calculateEMI() {

    let loan = parseFloat(document.getElementById("loan").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseFloat(document.getElementById("year").value);

    if (isNaN(loan) || isNaN(rate) || isNaN(years)) {
        document.getElementById("result").innerHTML =
            "Please enter all values.";
        return;
    }

    let monthlyRate = rate / 12 / 100;
    let months = years * 12;

    let emi =
        (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    document.getElementById("result").innerHTML =
        "Monthly EMI: ₹ " + emi.toFixed(2);
}

// Loan Enquiry Form
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const mobile = form.querySelector('input[type="tel"]').value;
        const amount = form.querySelector('input[type="number"]').value;
        const loanType = form.querySelector("select").value;

        if (mobile.length !== 10) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        const message =
`📋 *New Loan Enquiry*

👤 Name: ${name}
📱 Mobile: ${mobile}
💰 Loan Amount: ₹${amount}
🏦 Loan Type: ${loanType}`;

        // Open WhatsApp with enquiry details
        window.open(
            "https://wa.me/916309321325?text=" +
            encodeURIComponent(message),
            "_blank"
        );

        alert("Thank you! Your enquiry is ready to send on WhatsApp.");

        form.reset();

    });

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});
function checkEligibility() {

    let age = Number(document.getElementById("age").value);
    let income = Number(document.getElementById("income").value);
    let emi = Number(document.getElementById("emi").value);
    let cibil = Number(document.getElementById("cibil").value);

    let result = document.getElementById("eligibilityResult");

    if (age < 21 || age > 60) {
        result.innerHTML = "❌ Not Eligible (Age should be 21-60)";
        return;
    }

    if (income < 20000) {
        result.innerHTML = "❌ Not Eligible (Minimum income ₹20,000)";
        return;
    }

    if (cibil < 700) {
        result.innerHTML = "⚠️ Low CIBIL Score. Eligibility depends on lender.";
        return;
    }

    let maxLoan = Math.round((income - emi) * 60);

    result.innerHTML =
        "✅ Congratulations!<br>" +
        "You are likely eligible.<br><br>" +
        "Estimated Loan Amount: <b>₹" +
        maxLoan.toLocaleString("en-IN") +
        "</b>";
}
