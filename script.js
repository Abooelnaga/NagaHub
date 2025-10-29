// Theme management functions
function saveThemePreference(isDark) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function loadThemePreference() {
    return localStorage.getItem('theme') || 'light';
}

function applyTheme(isDark) {
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');

    if (isDark) {
        body.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.removeAttribute('data-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

function toggleTheme() {
    const body = document.body;
    const isCurrentlyDark = body.getAttribute('data-theme') === 'dark';
    const newTheme = !isCurrentlyDark;

    applyTheme(newTheme);
    saveThemePreference(newTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = loadThemePreference();
    const isDark = savedTheme === 'dark';
    applyTheme(isDark);
});






// وظائف الأوصاف التفاعلية للروابط
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link[data-description]');
    const tooltip = document.getElementById('link-tooltip');
    const tooltipContent = tooltip.querySelector('.tooltip-content');

    links.forEach(link => {
        const linkTitle = link.querySelector('.link-title');
        const linkDescription = link.querySelector('.link-description');

        // التأكد من وجود العناصر
        if (!linkTitle || !linkDescription) return;

        link.addEventListener('mouseenter', function () {
            // إخفاء العنوان وإظهار الوصف
            linkTitle.style.opacity = '0';
            linkTitle.style.transform = 'translateY(-20px)';

            linkDescription.style.opacity = '1';
            linkDescription.style.transform = 'translate(-50%, -50%) translateY(0)';
        });

        link.addEventListener('mouseleave', function () {
            // إظهار العنوان وإخفاء الوصف
            linkTitle.style.opacity = '1';
            linkTitle.style.transform = 'translateY(0)';

            linkDescription.style.opacity = '0';
            linkDescription.style.transform = 'translate(-50%, -50%) translateY(20px)';
        });
    });
});