function addElement(tagName, content, id = "", classes = [], styles = {}) {
    const newElement = document.createElement(tagName);

    newElement.textContent = content;

    if (id) newElement.id = id;

    if (classes.length > 0) {
        newElement.classList.add(...classes);
    }

    for (const [key, value] of Object.entries(styles)) {
        newElement.style[key] = value;
    }

    document.body.appendChild(newElement);
}

function createHeader( type = "0", backgroundColor = "#f7f4f3", color = "#141414", font = "Arial", name = "Unknown", logoPath = "https://placehold.co/50x50", links = {}, login = false, isLoggedIn = false, userProfilePicture = null, customIds = {}, customStyles = {}) {
    const header = document.createElement('header');
    const headerClass = "header-" + type;
    header.classList.add(headerClass);
    if (backgroundColor === null || backgroundColor === "null") {
        header.style.backgroundColor = "#f7f4f3";
    } else {
        header.style.backgroundColor = backgroundColor;
    }
    if (color === null || color === "null") {
        header.style.color = "#141414";
    } else {
        header.style.color = color;
    }

    const logo = document.createElement('img');
    logo.src = logoPath;
    logo.alt = name + '-alt';

    const linksContainer = document.createElement('div');
    const linksContainerClass = "header-" + type + "-links";
    linksContainer.classList.add(linksContainerClass);

    for (const [key, value] of Object.entries(links)) {
        const link = document.createElement('a');
        link.textContent = key;
        link.href = value;

        if (color === null || color === "null") {
            link.style.color = "#141414";
        } else {
            link.style.color = color;
        }
        linksContainer.appendChild(link);
    }

    if (login === true && isLoggedIn === false) {
        const loginBttn = document.createElement('button');
        //const loginBttn
    }

    header.appendChild(logo);
    header.appendChild(linksContainer);
    document.body.appendChild(header);
}

document.addEventListener("DOMContentLoaded", () => {});