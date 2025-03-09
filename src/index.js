import createContent from "./modules/content";
import createTabs from "./modules/tab";
import createSidebar from "./modules/sidebar";

function createPage() {
    createContent();
    createTabs();
    createSidebar();
}

createPage();