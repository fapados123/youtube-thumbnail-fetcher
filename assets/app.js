function fetchThumbnails() {
    const url = new URL(document.querySelector('#url-input').value);
    const id = url.searchParams.get('v');
    const format = document.querySelector('#format-selector').value;

    const prefixes = {
        jpg: 'vi',
        webp: 'vi_webp',
    };

    const prefix = prefixes[format];

    const types = [
        '0',
        '1',
        '2',
        '3',
        'hq1',
        'hq2',
        'hq3',
        'mq1',
        'mq2',
        'mq3',
        'sd1',
        'sd2',
        'sd3',
        'hq720',
        'default',
        'hqdefault',
        'mqdefault',
        'sddefault',
        'maxresdefault',
    ];

    types.forEach(type => {
        document.querySelector(`#thumbnail-${type}`).setAttribute('src', `https://i.ytimg.com/${prefix}/${id}/${type}.${format}`);
    });

    document.querySelector('#thumbnail-container').style.display = 'initial';
}

document.querySelector('#fetch-button').addEventListener('click', () => {
    // TODO: try catch
    fetchThumbnails();
})
