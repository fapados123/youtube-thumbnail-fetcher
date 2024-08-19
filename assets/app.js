const types = [
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

const prefixes = {
    jpg: 'vi',
    webp: 'vi_webp',
};

function generateThumbnailUrl(videoId, type, format) {
    return `https://i.ytimg.com/${prefixes[format]}/${videoId}/${type}.${format}`;
}

document.querySelector('#fetch-button').addEventListener('click', () => {
    let videoUrl = document.querySelector('#url-input').value;
    let videoId = new URL(videoUrl).searchParams.get('v');
    let thumbnailFormat = document.querySelector('#format-selector').value;

    types.forEach(type => {
        let url = generateThumbnailUrl(videoId, type, thumbnailFormat);
        
        // Display thumbnail
        document.querySelector(`#thumbnail-${type}`).setAttribute('src', url);
    });

    // Show thumbnail container
    document.querySelector('#thumbnail-container').style.display = 'initial';
});
