function showIframe(type, url) {
    const iframe = document.getElementById('iframe');
    const overlay = document.getElementById('overlay');
    
    iframe.src = 'https://jkleemola-240420-631-demo.my.site.com/consumer/survey/runtimeApp.app?invitationId=0KiWy0000000Eiv&surveyName=dnv_customer_excellence_survey&UUID=bd9edaca-a6a8-49bf-8845-6859a0593d0f';
    iframe.style.display = 'block';
    overlay.style.display = 'block';

    if (type === 'popup') {
        iframe.className = 'iframe-popup';
    } else if (type === 'corner') {
        iframe.className = 'iframe-corner';
    } else if (type === 'bottom-corner') {
        iframe.className = 'iframe-bottom-corner';
    }
}

function hideIframe() {
    const iframe = document.getElementById('iframe');
    const overlay = document.getElementById('overlay');
    
    iframe.style.display = 'none';
    overlay.style.display = 'none';
}