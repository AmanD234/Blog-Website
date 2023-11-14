const navItems = document.querySelector('.nav_items');
const open_navButton = document.querySelector('#open_nav-btn');
const close_navButton = document.querySelector('#close_nav-btn');

const openNav = () => {
    navItems.style.display = 'flex';
    open_navButton.style.display = 'none';
    close_navButton.style.display = 'inline-block';
}

const closeNav = () => {
    navItems.style.display = 'none';
    open_navButton.style.display = 'inline-block';
    close_navButton.style.display = 'none';
}

open_navButton.addEventListener('click', openNav);
close_navButton.addEventListener('click', closeNav);


const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show_sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide_sidebar-btn');

// shows sidebar on small devices
const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

// hides sidebar on small devices
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}

showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);
