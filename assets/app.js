const types = {
    Max: ['maxresdefault'],
    Shorts: ['oardefault'],
    Default: ['default'],
    Misc: ['0', '1', '2', '3'],
    HQ: ['hq1', 'hq2', 'hq3', 'hq720', 'hqdefault'],
    MQ: ['mq1', 'mq2', 'mq3', 'mqdefault'],
    SD: ['sd1', 'sd2', 'sd3', 'sddefault'],
};

const prefixes = {
    jpg: 'vi',
    webp: 'vi_webp',
};

function getVideoId(videoUrl) {
    if (videoUrl.pathname.startsWith('/shorts')) {
        return videoUrl.pathname.split('/')[2];
    }

    return videoUrl.searchParams.get('v');
}

function generateThumbnailUrl(videoId, type, format) {
    return `https://i.ytimg.com/${prefixes[format]}/${videoId}/${type}.${format}`;
}

document.querySelector('#fetch-btn').addEventListener('click', () => {
    const videoUrl = new URL(document.querySelector('#video-url-input').value);
    const videoId = getVideoId(videoUrl);
    const format = document.querySelector('#format-selector').value;

    Object.values(types).flat().forEach(type => {
        const url = generateThumbnailUrl(videoId, type, format);

        // Display thumbnail
        document.querySelector(`#thumbnail-${type}`).setAttribute('src', url);
    });

    // Show thumbnail container
    document.querySelector('#thumbnail-container').style.display = 'initial';
});

const formatSelector = document.querySelector('#format-selector');
const thumbnailContainer = document.querySelector('#thumbnail-container');

// Dynamically generate format selector
for (const [format, prefix] of Object.entries(prefixes)) {
    const option = document.createElement('option');
    option.textContent = format;
    option.value = format;
    formatSelector.appendChild(option);
}

// Dynamically generate thumbnail container
for (const [category, typeList] of Object.entries(types)) {
    const header = document.createElement('h2');
    header.textContent = category;
    thumbnailContainer.appendChild(header);

    typeList.forEach(type => {
        const img = document.createElement('img');
        img.id = `thumbnail-${type}`;
        thumbnailContainer.appendChild(img);
    });
}