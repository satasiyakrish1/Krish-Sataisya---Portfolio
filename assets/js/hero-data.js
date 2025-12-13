/**
 * ================================================================
 * HERO SECTION DATA - CENTRALIZED CONFIGURATION
 * ================================================================
 * Update this file to automatically reflect changes across ALL pages
 * Last Updated: 2025-12-13
 */

const heroData = {
    // Personal Information
    name: "Krish Satasiya",
    subtitle: "AVAILABLE FOR FREELANCE",

    // Profile Image
    profileImage: "/assets/img/project/IMG_20241020_111538.jpg",

    // Job Titles/Tags
    tags: [
        "WEB Developer",
        "UX/UI Designer"
    ],

    // Reviews Section
    reviews: {
        title: "Happy Clients | Dribble | Behance",
        reviewCount: "200+ 5 star reviews",
        testimonialImages: [
            "/assets/img/testimonials/user/1722585861710.jpg",
            "/assets/img/testimonials/user/Prashant.jpeg"
        ]
    },

    // Counter Statistics (Measuring Success By Numbers)
    counters: [
        {
            number: "2",
            suffix: "+",
            label: "Years of",
            sublabel: "Experience"
        },
        {
            number: "33",
            suffix: "+",
            label: "Project",
            sublabel: "Completed"
        },
        {
            number: "4",
            suffix: "+",
            label: "Industrial",
            sublabel: "Projects"
        }
    ],

    // Section Titles
    sectionTitle: {
        subtitle: "Projects",
        title: "Measuring Success By Numbers"
    }
};

/**
 * ================================================================
 * AUTO-UPDATE ENGINE
 * ================================================================
 * Automatically updates all hero section elements across all pages
 */

class HeroDataManager {
    constructor(data) {
        this.data = data;
        this.initialized = false;
        this.retryCount = 0;
        this.maxRetries = 5;
        this.retryDelay = 100; // ms
    }

    /**
     * Initialize and update all hero section elements
     */
    init() {
        try {
            console.log('[Hero Data Manager] Initializing...');

            // Update all sections
            this.updateSubtitle();
            this.updateName();
            this.updateProfileImage();
            this.updateJobTags();
            this.updateReviews();
            this.updateTestimonialImages();
            this.updateCounters();
            this.updateSectionTitles();

            this.initialized = true;
            console.log('[Hero Data Manager] ✅ Successfully initialized and data updated!');

            return true;
        } catch (error) {
            console.error('[Hero Data Manager] ❌ Error during initialization:', error);
            return false;
        }
    }

    /**
     * Update subtitle (AVAILABLE FOR FREELANCE)
     */
    updateSubtitle() {
        const element = document.querySelector('.tj-hero-4-subtitle');
        if (element) {
            element.textContent = this.data.subtitle;
            console.log('[Hero Data] ✓ Subtitle updated:', this.data.subtitle);
        }
    }

    /**
     * Update name/title (I AM Krish Satasiya)
     */
    updateName() {
        const element = document.querySelector('.tj-hero-4-title');
        if (element) {
            element.innerHTML = `I AM <br> ${this.data.name}`;
            console.log('[Hero Data] ✓ Name updated:', this.data.name);
        }
    }

    /**
     * Update profile image
     */
    updateProfileImage() {
        const element = document.querySelector('.tj-hero-4-bottom-thumb .image-animated img');
        if (element) {
            element.src = this.data.profileImage;
            element.alt = `${this.data.name} - Professional Photo`;
            console.log('[Hero Data] ✓ Profile image updated');
        }
    }

    /**
     * Update job tags (WEB Developer, UX/UI Designer)
     */
    updateJobTags() {
        const tag1 = document.querySelector('.tj-hero-4-bottom-thumb-shape-1 .tj-hero-4-bottom-tag');
        const tag2 = document.querySelector('.tj-hero-4-bottom-thumb-shape-2 .tj-hero-4-bottom-tag');

        if (tag1 && this.data.tags[0]) {
            tag1.textContent = this.data.tags[0];
            console.log('[Hero Data] ✓ Tag 1 updated:', this.data.tags[0]);
        }

        if (tag2 && this.data.tags[1]) {
            tag2.textContent = this.data.tags[1];
            console.log('[Hero Data] ✓ Tag 2 updated:', this.data.tags[1]);
        }
    }

    /**
     * Update reviews section title and count
     */
    updateReviews() {
        const titleElement = document.querySelector('.tj-hero-4-bottom-reviews-title p');
        const countElement = document.querySelector('.tj-hero-4-bottom-reviews-wrap-rating p');

        if (titleElement) {
            titleElement.textContent = this.data.reviews.title;
            console.log('[Hero Data] ✓ Reviews title updated');
        }

        if (countElement) {
            countElement.textContent = this.data.reviews.reviewCount;
            console.log('[Hero Data] ✓ Review count updated:', this.data.reviews.reviewCount);
        }
    }

    /**
     * Update testimonial images - Creates them dynamically if needed
     */
    updateTestimonialImages() {
        const container = document.querySelector('.tj-hero-4-bottom-reviews-wrap-thumb ul');

        if (!container) return;

        // Clear existing images
        container.innerHTML = '';

        // Create new image elements dynamically
        this.data.reviews.testimonialImages.forEach((imageSrc, index) => {
            const li = document.createElement('li');
            const img = document.createElement('img');

            img.src = imageSrc;
            img.alt = `Testimonial ${index + 1}`;
            img.decoding = 'async';

            li.appendChild(img);
            container.appendChild(li);
        });

        console.log('[Hero Data] ✓ Testimonial images updated:', this.data.reviews.testimonialImages.length);
    }

    /**
     * Update counter statistics (Years, Projects, etc.)
     */
    updateCounters() {
        const counterContainer = document.querySelector('.tj-hero-4-bottom-counter');

        if (!counterContainer) return;

        const counterItems = counterContainer.querySelectorAll('.tj-hero-4-bottom-counter-item');

        // Update existing counters
        counterItems.forEach((item, index) => {
            if (this.data.counters[index]) {
                const counter = this.data.counters[index];
                const numberSpan = item.querySelector('.number span');
                const numberDiv = item.querySelector('.number');
                const textDiv = item.querySelector('.text');

                // Update number
                if (numberSpan) {
                    numberSpan.textContent = counter.number;
                }

                // Update full number with suffix
                if (numberDiv) {
                    numberDiv.innerHTML = `<span>${counter.number}</span> ${counter.suffix}`;
                }

                // Update label text
                if (textDiv) {
                    textDiv.innerHTML = `${counter.label} <br>${counter.sublabel}`;
                }

                console.log(`[Hero Data] ✓ Counter ${index + 1} updated: ${counter.number}${counter.suffix} ${counter.label} ${counter.sublabel}`);
            }
        });

        // If we have more counters in data than in DOM, create them
        if (this.data.counters.length > counterItems.length) {
            for (let i = counterItems.length; i < this.data.counters.length; i++) {
                const counter = this.data.counters[i];
                const newItem = this.createCounterElement(counter);
                counterContainer.appendChild(newItem);
                console.log(`[Hero Data] ✓ New counter created: ${counter.label}`);
            }
        }
    }

    /**
     * Create a new counter element
     */
    createCounterElement(counter) {
        const wrapper = document.createElement('div');
        wrapper.className = 'tj-hero-4-bottom-counter-item';
        wrapper.style = 'translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);';

        wrapper.innerHTML = `
            <div class="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div class="number">
                    <span>${counter.number}</span> ${counter.suffix}
                </div>
                <div class="text">${counter.label} <br>${counter.sublabel}</div>
            </div>
        `;

        return wrapper;
    }

    /**
     * Update section header titles
     */
    updateSectionTitles() {
        // Find the first section-header that comes after the hero section
        const sectionHeaders = document.querySelectorAll('.section-header');

        sectionHeaders.forEach(header => {
            const subtitle = header.querySelector('.subtitle');
            const title = header.querySelector('.title');

            // Only update if both elements exist and they're empty or contain project-related text
            if (subtitle && (subtitle.textContent.trim() === '' || subtitle.textContent.includes('Project'))) {
                subtitle.textContent = this.data.sectionTitle.subtitle;
                console.log('[Hero Data] ✓ Section subtitle updated');
            }

            if (title && (title.textContent.trim() === '' || title.textContent.includes('Success') || title.textContent.includes('Numbers'))) {
                title.textContent = this.data.sectionTitle.title;
                console.log('[Hero Data] ✓ Section title updated');
            }
        });
    }

    /**
     * Retry initialization if DOM not ready
     */
    retryInit() {
        if (this.retryCount >= this.maxRetries) {
            console.warn('[Hero Data Manager] ⚠️ Max retries reached. Some elements may not be updated.');
            return;
        }

        this.retryCount++;
        console.log(`[Hero Data Manager] Retrying initialization (${this.retryCount}/${this.maxRetries})...`);

        setTimeout(() => {
            const success = this.init();
            if (!success) {
                this.retryInit();
            }
        }, this.retryDelay * this.retryCount);
    }
}

/**
 * ================================================================
 * AUTO-INITIALIZATION
 * ================================================================
 */

// Create manager instance
const heroManager = new HeroDataManager(heroData);

// Initialize when DOM is ready
function initializeHeroData() {
    console.log('[Hero Data] DOM State:', document.readyState);

    const success = heroManager.init();

    // Retry if initialization failed
    if (!success) {
        heroManager.retryInit();
    }
}

// Multiple initialization strategies for maximum compatibility
if (document.readyState === 'loading') {
    // DOM still loading
    document.addEventListener('DOMContentLoaded', initializeHeroData);
} else if (document.readyState === 'interactive' || document.readyState === 'complete') {
    // DOM already loaded
    initializeHeroData();
}

// Also try on window load as fallback
window.addEventListener('load', function () {
    if (!heroManager.initialized) {
        console.log('[Hero Data] Initializing on window load (fallback)...');
        initializeHeroData();
    }
});

/**
 * ================================================================
 * PUBLIC API - For manual updates if needed
 * ================================================================
 */

// Expose global function for manual refresh
window.refreshHeroData = function () {
    console.log('[Hero Data] Manual refresh triggered');
    heroManager.init();
};

// Expose data for external access
window.getHeroData = function () {
    return heroData;
};

console.log('[Hero Data Manager] Script loaded successfully. Auto-update enabled.');
