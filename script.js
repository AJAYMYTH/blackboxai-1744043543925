// Common functionality across all pages

document.addEventListener('DOMContentLoaded', function() {
    console.log('Trovvin Recyclers website initialized');
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('border-red-500');
                    isValid = false;
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
});

// Placeholder for Google Maps integration
function initMap() {
    if (typeof google !== 'undefined') {
        console.log('Google Maps API loaded');
        // Map initialization code would go here
    }
}

// Placeholder for Firebase integration
function initFirebase() {
    console.log('Firebase would be initialized here');
    // Firebase initialization code would go here
}