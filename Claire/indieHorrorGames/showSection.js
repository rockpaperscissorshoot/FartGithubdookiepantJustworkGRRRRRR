function showSection(sectionId) {
    const sections = document.getElementsByClassName('infoSection');
    const showMoreSections = document.querySelectorAll('.slide.active');

    // Hide all sections except those with the 'active' class
    for (let i = 0; i < sections.length; i++) {
        if (!sections[i].classList.contains('active')) {
            sections[i].style.display = 'none';
            sections[i].style.opacity = '0'; // Set opacity to 0
        }
    }

    // Clear all "Show More" sections
    showMoreSections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
        section.style.opacity = '0';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
        setTimeout(() => {
            selectedSection.style.opacity = '1';
        }, 10);
    }
}