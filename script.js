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
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-audio');
    
    // Function to play audio
    function playAudio() {
        audio.play().catch(function(error) {
            console.log("Audio autoplay failed");
        });
    }

    // Try to play audio when page loads
    playAudio();

    // Play audio on first user interaction
    document.addEventListener('click', function() {
        playAudio();
    }, { once: true });
});
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-audio');
    
    function playAudio() {
        audio.play().catch(error => {
            console.log("Audio autoplay failed");
        });
    }

    function pauseAudio() {
        audio.pause();
    }

    // تشغيل الصوت عند تحميل الصفحة
    playAudio();

    // تشغيل الصوت عند أول تفاعل من المستخدم
    document.addEventListener('click', playAudio, { once: true });

    // إيقاف وتشغيل الصوت عند تغيير تركيز الصفحة
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            pauseAudio(); // توقف الصوت عند مغادرة الصفحة
        } else {
            playAudio(); // تشغيل الصوت عند العودة
        }
    });
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
