document.querySelector('#url-fetch-button').addEventListener('click', () => {
    // TODO: try catch
    const url = new URL(document.querySelector('#url-input').value);
    const id = url.searchParams.get('v');

    const types = [
        '0',
        '1',
        '2',
        '3',
        'default',
        'hqdefault',
        'mqdefault',
        'sddefault',
        'maxresdefault',
    ];

    types.forEach(type => {
        document.querySelector(`#thumbnail-${type}`).setAttribute('src', `https://img.youtube.com/vi/${id}/${type}.jpg`);
    });
})
