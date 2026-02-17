export let theme = "light";

const navigate = (url = "") => {
    console.log("URL", url);
    history.pushState({}, null, url);
    let path = url.split("/").pop();
    if (!path) path = "home";
    console.log("Path", path);
    // console.log("navegando a " + path);
    const sectionElements = document.querySelectorAll("main>section");
    // console.log(sectionElements)
    sectionElements.forEach((section) => {
        if (section.id === path) {
            section.hidden = false;
        } else {
            section.hidden = true;
        }
    });
};

const handleChange = (event) => {
    const element = event.target;
    theme = element.checked ? "dark" : "light";
    console.log(theme);
};

const handleDialogMenu = (event) => {
    console.log("Click", event);
    const current = event.currentTarget;
    // const target = event.target
    event.stopPropagation();
    // console.log('Current')
    // console.dir(current)
    // console.log('Target')
    // console.dir(target)
    const menuDialogElement = document.querySelector("#menu-dialog");
    if (current.localName === "a") {
        event.preventDefault();
        menuDialogElement.showModal();
    } else if (current.localName === "menu") {
        event.preventDefault();
        navigate(event.target.href);
        menuDialogElement.close();
    } else {
        menuDialogElement.close();
    }
};

const handleContact = (event) =>  {
    event.preventDefault()

    const target = event.target
    console.log('Target')
    console.dir(target.elements)

    console.log('Enviando...')

}

export function main() {
    console.log("Loaded main");
    navigate(location.pathname);

    window.addEventListener("popstate", (event) => {
        console.log(location.path);
        navigate(location.pathname);
    });

    // Theme
    const toggleElement = document.querySelector("#theme-toggle");
    toggleElement.addEventListener("change", handleChange);

    // Menu (Navegación)

    const menuIconElement = document.querySelector("#menu-icon");
    const menuDialogElement = document.querySelector("#menu-dialog menu");

    menuIconElement.addEventListener("click", handleDialogMenu);
    menuDialogElement.addEventListener("click", handleDialogMenu);

    document.body.addEventListener("click", handleDialogMenu);

    // Formulario

    document.querySelector('#contact form')
    .addEventListener('submit', handleContact)
}
