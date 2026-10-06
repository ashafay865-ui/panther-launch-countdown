const launchDate = new Date("October 31, 2026 01:00:00 GMT+0100").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance <= 0) {
const notifyBtn = document.getElementById("notifyBtn");

if (notifyBtn) {
    notifyBtn.textContent = "ENTER PANTHER TECH HUB →";
    notifyBtn.onclick = function () {
        alert("Welcome to Panther Tech Hub! 🚀");
    };
}
        clearInterval(countdown);
                         document.querySelector(".launch-page").classList.add("live");

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("launchMessage").textContent =
            "🎉 WE ARE LIVE! Welcome to Panther Tech Hub.";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
        (distance / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}, 1000);
// Notify button

const notifyBtn = document.getElementById("notifyBtn");

if (notifyBtn) {

    notifyBtn.onclick = function () {

        alert(
            "🔔 Panther Tech Hub Launch\n\n" +
            "Launch date: October 31, 2026\n" +
            "Time: 1:00 AM WAT\n\n" +
            "Get ready! 🚀"
        );

    };

}

// =========================
// INTRO SCREEN
// =========================

const introScreen = document.getElementById("introScreen");

if (introScreen) {
    setTimeout(function () {
        introScreen.remove();
    }, 3000);
}// =========================
// SHARE LAUNCH
// =========================

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

    shareBtn.addEventListener("click", async function () {

        const shareData = {
            title: "Panther Tech Hub Launch",
            text: "🚀 Panther Tech Hub is launching on October 31, 2026 at 1:00 AM!",
            url: window.location.href
        };

        if (navigator.share) {

            try {
                await navigator.share(shareData);
            } catch (error) {
                console.log("Share cancelled.");
            }

        } else {

            try {
                await navigator.clipboard.writeText(window.location.href);

                alert(
                    "🔗 Launch link copied!\n\n" +
                    "You can now share it with your friends."
                );

            } catch (error) {

                alert(
                    "Copy this page link and share it with your friends!"
                );

            }

        }

    });

}