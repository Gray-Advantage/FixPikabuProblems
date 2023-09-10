const pikabuContent = document.getElementById('forPikabuUrlsContent');
const otherContent = document.getElementById('forOtherUrlsContent');

const checkboxHideBlurBlock = document.getElementById('checkboxHideBlurBlock');

const saveButton = document.getElementById('saveButton');
const creatorLink = document.getElementById('creatorLink');


function close() {
    setTimeout(() => {
        window.close();
    }, 100)
}


chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    const isPikabu = tabs[0].url.includes('pikabu.ru');

    pikabuContent.style.display = isPikabu ? 'block' : 'none';
    otherContent.style.display = isPikabu ? 'none' : 'block';
});

checkboxHideBlurBlock.addEventListener('change', () => {
    saveButton.disabled = false;
});
chrome.storage.sync.get('HideBlurBlock', data => {
    checkboxHideBlurBlock.checked = data.HideBlurBlock;
});

creatorLink.addEventListener('click', close)

saveButton.addEventListener('click', () => {
    chrome.storage.sync.set({HideBlurBlock: checkboxHideBlurBlock.checked});

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.reload(tabs[0].id);
        close();
    });
});