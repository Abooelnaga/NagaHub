function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}
window.addEventListener('DOMContentLoaded', function () {
    const audio = document.querySelector('audio');
    audio.volume = 1;

    function playAudio() {
        audio.play().then(() => {
            console.log("تم تشغيل الصوت بنجاح 🎵");
        }).catch((error) => {
            console.log("المتصفح يمنع التشغيل التلقائي، انتظر تفاعل المستخدم.");
        });

        // إزالة الأحداث بعد التشغيل
        document.removeEventListener('click', playAudio);
        document.removeEventListener('touchstart', playAudio);
        document.removeEventListener('keydown', playAudio);
    }

    // استدعاء تشغيل الصوت عند تفاعل المستخدم الأول
    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);
    document.addEventListener('keydown', playAudio);
});



function showNotification() {
    const notification = document.getElementById('prophet-reminder');
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Show notification every 5 minutes
setInterval(showNotification, 900000);

// Show first notification after 10 seconds
setTimeout(showNotification, 10000);
