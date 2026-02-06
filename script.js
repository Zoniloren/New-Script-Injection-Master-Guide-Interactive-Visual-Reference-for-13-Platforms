document.addEventListener('DOMContentLoaded', function() {
    console.log('Guide loaded!');
    
    var codes = {
        ga4: '<!-- Google Analytics -->\n<' + 'script async src="https://www.googletagmanager.com/gtag/js?id=G-XXX"><' + '/script>\n<' + 'script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag("js", new Date());\ngtag("config", "G-XXX");\n<' + '/script>',
        fbpixel: '<!-- Facebook Pixel -->\n<' + 'script>\nfbq("init", "PIXEL_ID");\nfbq("track", "PageView");\n<' + '/script>',
        gtm: '<!-- Google Tag Manager -->\n<' + 'script>\n(function(w,d,s,l,i){w[l]=w[l]||[];})();\n<' + '/script>',
        hotjar: '<!-- Hotjar Tracking -->\n<' + 'script>\n(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\nh._hjSettings={hjid:YOUR_ID,hjsv:6};\n<' + '/script>',
        intercom: '<!-- Intercom Widget -->\n<' + 'script>\nwindow.intercomSettings = {app_id: "YOUR_APP_ID"};\n<' + '/script>'
    };
    
    var tabs = document.querySelectorAll('.tab');
    console.log('Found tabs:', tabs.length);
    
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var target = this.getAttribute('data-tab');
            console.log('Tab clicked:', target);
            
            document.querySelectorAll('.tab').forEach(function(t) {
                t.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(function(c) {
                c.classList.remove('active');
            });
            
            this.classList.add('active');
            var content = document.getElementById(target);
            if (content) {
                content.classList.add('active');
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        });
    });
    
    var links = document.querySelectorAll('.quick-link');
    console.log('Found code links:', links.length);
    
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            var type = this.getAttribute('data-code');
            console.log('Code clicked:', type);
            
            var display = document.getElementById('codeDisplay');
            var container = document.getElementById('codeExample');
            
            if (codes[type]) {
                display.textContent = codes[type];
                container.style.display = 'block';
            }
        });
    });
    
    console.log('All events attached successfully!');
});
