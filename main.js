
const header = document.createElement('header');
header.className = 'header';

function Heading(tag, content, classCss) {
    const heading = document.createElement(tag);

    heading.textContent = content;

    heading.classList.add(classCss);

    return heading;
}

const h3 = Heading("h3", 'Last works');
header.append(h3);


function Button(content, border, classCss) {
    const button = document.createElement("button");

    button.textContent = content;
    button.style.border = border;
    button.className = "button";

    button.classList.add(classCss);

    return button;
}

const button = Button('Explore Showcase', '2px solid rgba(235, 234, 237, 1)');
header.append(button);

document.body.append(header);

class Card{
    constructor(title, text, titleClass, buttonClass, textClass, backgroundClass){
        this.card = document.createElement("div");

        const h5 = Heading("h5", title, titleClass);
        this.card.append(h5);

        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        paragraph.classList.add(textClass);
        this.card.append(paragraph);

        const button = Button('Explore', 'none', buttonClass);
        this.card.append(button);

        this.card.className = 'card';

        this.card.classList.add(backgroundClass);
    }    
}

class Grid {
    constructor(){
        this.grid = document.createElement("div");
        this.grid.classList.add('grid');
    }
}

const grid = new Grid().grid;
document.body.append(grid);

const card1 = new Card('Startup Framework', 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.');
grid.append(card1.card);

const card2 = new Card('Web Generator', 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.', 'h5', 'button--green', 'p--grey', 'card--background-white');
grid.append(card2.card);

const card3 = new Card('Slides 4', 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.', 'h5--white', 'button', 'p--white', 'card--background-blue');
grid.append(card3.card);

const card4 = new Card('Postcards', 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.', 'h5--white', 'button', 'p--white', 'card--background-image');
grid.append(card4.card);