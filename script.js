// Side Drawer
function openMenu() {
    document.getElementById("drawer").style.left = "0";
}

function closeMenu() {
    document.getElementById("drawer").style.left = "-260px";
}

// Drawer ke bahar click karne par close
document.addEventListener("click", function (e) {
    const drawer = document.getElementById("drawer");
    const menuBtn = document.querySelector(".menu-btn");

    if (
        drawer.style.left === "0px" &&
        !drawer.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        closeMenu();
    }
});

// Form Submit
const submitBtn = document.querySelector(".form button");

submitBtn.addEventListener("click", function () {

    const name = document.querySelector('input[placeholder="Full Name"]').value.trim();
    const mobile = document.querySelector('input[placeholder="Mobile Number"]').value.trim();
    const pan = document.querySelector('input[placeholder="PAN Number"]').value.trim();
    const income = document.querySelector('input[placeholder="Monthly Income"]').value.trim();

    if (!name || !mobile || !pan || !income) {
        alert("Please fill all fields.");
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return;
    }

    alert(
        "Thank you, " +
        name +
        "! Your loan enquiry has been submitted successfully."
    );
});

// Check Eligibility Button
const checkBtn = document.querySelector(".hero button");

checkBtn.addEventListener("click", function () {
    document.querySelector(".form").scrollIntoView({
        behavior: "smooth"
    });
});
