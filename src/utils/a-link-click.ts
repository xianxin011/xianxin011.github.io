export function Link(url: string, target = '_self') {
    const aLink = document.createElement('a');
    aLink.href = url;
    aLink.target = target;
    document.body.appendChild(aLink);
    aLink.click();
    document.body.removeChild(aLink);
}