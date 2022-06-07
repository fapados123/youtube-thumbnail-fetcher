function getVideoUrl() {
    return document.querySelector('#url-input').value;
}

function getVideoId() {
    return new URL(getVideoUrl()).searchParams.get('v');
}

function getThumbnailFormat() {
    return document.querySelector('#format-selector').value;
}

function getPrefix(format) {
    switch (format) {
        case 'jpg':
            return 'vi';

        case 'webp':
            return 'vi_webp';

        default:
            return 'vi';
    }
}

function getTypes() {
    return [
        '0',
        '1',
        '2',
        '3',
        'hq1',
        'hq2',
        'hq3',
        'hq720',
        'hqdefault',
        'mq1',
        'mq2',
        'mq3',
        'mqdefault',
        'sd1',
        'sd2',
        'sd3',
        'sddefault',
        'default',
        'maxresdefault',
    ];
}

function generateThumbnailUrl(videoId, type, format) {
    return `https://i.ytimg.com/${getPrefix(format)}/${videoId}/${type}.${format}`;
}

function displayThumbnail(videoId, type, format) {
    document.querySelector(`#thumbnail-${type}`).setAttribute('src', generateThumbnailUrl(videoId, type, format));
}

function showThumbnailContainer() {
    document.querySelector('#thumbnail-container').style.display = 'initial';
}

function fetchThumbnails() {
    getTypes().forEach(type => {
        displayThumbnail(getVideoId(), type, getThumbnailFormat());
    });

    showThumbnailContainer();
}

document.querySelector('#fetch-button').addEventListener('click', () => {
    fetchThumbnails();
});
