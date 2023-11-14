const bgImages = [
    {
        id: 0,
        name: "LUNDEV",
        description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
        media: {
            type: 'image',
            source: '/images/1.jpg',
        },
    },
    {
        id: 1,
        name: "LUNDEV",
        description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
        media: {
            type: 'image',
            source: '/images/2.jpg',
        },
    },
    {
        id: 2,
        name: "LUNDEV",
        description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
        media: {
            type: 'image',
            source: '/images/3.jpg',
        },
    },
    {
        id: 3,
        name: "LUNDEV",
        description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
        media: {
            type: 'image',
            source: '/images/4.jpg',
        },
    },
    {
        id: 4,
        name: "LUNDEV",
        description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
        media: {
            type: 'image',
            source: '/images/5.jpg',
        },
    },
    {
        id: 5,
        name: "LUNDEV",
        description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
        media: {
            type: 'image',
            source: '/images/6.jpg',
        },
    },
];

function createItemElement(imageObj) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.style.backgroundImage = `url(${imageObj.media.source})`;

    const content = document.createElement('div');
    content.classList.add('content');

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = imageObj.name;

    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = imageObj.description;

    const button = document.createElement('button');
    button.textContent = 'See more';

    const img = document.createElement('img');
    img.id = 'item';
    img.src = '';  // Set the image source if needed
    img.alt = '';

    content.appendChild(name);
    content.appendChild(description);
    content.appendChild(button);
    content.appendChild(img);

    item.appendChild(content);

    return item;
}

function appendItemsToSlide() {
    const slide = document.getElementById('slide');
    bgImages.forEach(imageObj => {
        const itemElement = createItemElement(imageObj);
        slide.appendChild(itemElement);
    });
}

appendItemsToSlide();

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}