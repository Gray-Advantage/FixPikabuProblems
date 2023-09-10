chrome.storage.sync.get('HideBlurBlock', data => {
    if (data.HideBlurBlock) {
        let style = document.createElement('style');
        style.innerHTML = `
            .story__content_overlayed * {
                filter: none !important;
            }
      
            .story__adult-overlay {
                display: none;
            }
        `;
        document.head.appendChild(style);
    }
});
