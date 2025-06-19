function showMore(sectionId) {
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        // Check if the section is currently active
        const isActive = selectedSection.classList.contains('active');

        // Toggle the 'active' class
        if (isActive) {
            selectedSection.classList.remove('active');
            selectedSection.style.display = 'none'; // Hide the section
            selectedSection.style.opacity = '0'; // Set opacity to 0
            selectedSection.style.visibility = 'hidden'; // Prevent interaction
        } else {
            selectedSection.classList.add('active');
            selectedSection.style.display = 'block'; // Show the section
            selectedSection.style.visibility = 'visible'; // Allow interaction
            setTimeout(() => {
                selectedSection.style.opacity = '1'; // Smoothly fade in
            }, 10);

            // Smooth scroll to the section when activating
            selectedSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    } else {
        console.error(`Element with id "${sectionId}" not found.`);
    }
}