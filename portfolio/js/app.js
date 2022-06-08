const overlay = document.getElementById('overlay');
const mainWrap = document.getElementById('main-wrap');


const menuIconMap = {
    'menu-image-news' : 'project-news',
    'menu-image-style' : 'project-style',
    'menu-image-gallery' : 'project-gallery',
    'menu-image-game' : 'project-game',
    'menu-image-dashboard' : 'project-dashboard',
    'menu-image-directory' : 'project-directory',
    'menu-image-responsive' : 'project-responsive',
    'menu-image-folders' : 'project-folders'
}

const projects = [
    {
        projectId : 'project-news',
        tabId : 'tab-news',
        tabText : 'Newsletter',
        imageSrc : 'img/newsletter-signup.png',
        altText : 'news signup site',
        title : 'Project: Newsletter Signup',
        description : 'In this project, I learned to leverage forms to capture form data, set requirements for form input, and transition css effects when fields are focused.',
    },
    {
        projectId : 'project-style',
        tabId : 'tab-style',
        tabText : 'Style Guide',
        imageSrc : 'img/web-style-guide.png',
        altText : 'web style guide site',
        title : 'Project: Web Style Guide',
        description : 'In this project, I learned to use SCSS for streamlining and standardizing css source code.'
    },
    {
        projectId : 'project-gallery',
        tabId : 'tab-gallery',
        tabText : 'Photo Gallery',
        imageSrc : 'img/interactive-photo-gallery.png',
        altText : 'photo gallery site',
        title : 'Project: Photo Gallery',
        description : 'In this project, I learned to use CSS grid to create a dynamic, responsive layout, and to use Javascript for lightbox gallery view and search functionality.'  
    },
    {
        projectId : 'project-game',
        tabId : 'tab-game',
        tabText : 'Game Show App',
        imageSrc : 'img/game-show-app.png',
        altText : 'game show site',
        title : 'Project: Game Show App',
        description : 'In this project, I learned to use javascript to track scores, interact with DOM elements to display user choices and display messages depending on win or lose status.'
    },
    {
        projectId : 'project-dashboard',
        tabId : 'tab-dashboard',
        tabText : 'Web App Dashboard',
        imageSrc : 'img/web-app-dashboard.png',
        altText : 'web app dashboard site',
        title : 'Project: Web App Dashboard',
        description : 'In this project, I learned to use SCSS for streamlining and standardizing css source code.',
    },
    {
        projectId : 'project-directory',
        tabId : 'tab-directory',
        tabText : 'Employee Directory',
        imageSrc : 'img/employee-directory.png',
        altText : 'employee directory search site',
        title : 'Project: Employee Directory',
        description : 'In this project, I learned to use SCSS for streamlining and standardizing css source code.',
    },
    {
        projectId : 'project-responsive',
        tabId : 'tab-responsive',
        tabText : 'Mobile First Layout',
        imageSrc : 'img/responsive-layout.png',
        altText : 'employee directory search site',
        title : 'Project: Mobile 1st Responsive Layout',
        description : 'In this project, I learned to use SCSS for streamlining and standardizing css source code.',
    },
    {
        projectId : 'project-folders',
        tabId : 'tab-folders',
        tabText : 'Folders',
        imageSrc : 'img/folder-open.svg',
        altText : 'open folders site',
        title : 'Project: Open Folders',
        description : 'In this project, I learned to use SCSS for streamlining and standardizing css source code.'
    }
]

projects.forEach(project => {
    mainWrap.insertAdjacentHTML('afterbegin', `
    <div id="${project.projectId}" class="folder">
        <div class="folder-front"></div>
        <h2 id="${project.tabId}" class="folder-tab">${project.tabText}</h2>
        <div class="frame">
        <img class="project" src="${project.imageSrc}" alt="${project.altText}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        </div>
    </div>
    `)
});

function setOverlay(boolean) {
    if(boolean){
        overlay.style.display = 'grid';
        mainWrap.style.display = 'none';
    } else {
        overlay.style.display = 'none';
        mainWrap.style.display = 'grid';
    }
}

// displays selected project folder in mobile view
menu.addEventListener('click', (e) => {
    const targetId = e.target.id;
    if (menuIconMap[targetId]) {
        const projectFolder = document.getElementById(menuIconMap[targetId]);
        setOverlay(false);
        Array.from(mainWrap.children).map(child => child.style.display = 'none')
        projectFolder.style.display = 'block';
    } 
    else if(window.innerWidth < 768) {
        setOverlay(true);
    }
}); 

// formats window on resize
window.addEventListener('resize', (e) => {
    const screenWidth = e.currentTarget.screen.width;
    if (screenWidth >= 768) {
        overlay.style.display = 'none';
        Array.from(mainWrap.children).map(child => child.style.display = 'block');
    }
    if (screenWidth < 768) {
        overlay.style.display = 'grid';
        Array.from(mainWrap.children).map(child => child.style.display = 'none');
    }
})