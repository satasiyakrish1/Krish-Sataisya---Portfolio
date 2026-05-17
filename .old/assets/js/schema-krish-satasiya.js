const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Krish Satasiya",
    "alternateName": "satasiyakrish1",
    "jobTitle": "Web Developer, UI/UX Designer",
    "image": "https://krishsatasiya.netlify.app/assets/img/project/IMG_20241020_111538.jpg",
    "description": "Connect with Krish Satasiya, a talented Computer Programmer and UI/UX Designer. Find all his social media profiles, developer platforms, and professional networks in one place.",
    "url": "https://krishsatasiya.netlify.app/Pages/krishsatasiya.html",
    "sameAs": [
      "https://www.linkedin.com/in/satasiyakrish1",
      "https://github.com/satasiyakrish1",
      "https://dribbble.com/satasiyakrish1",
      "https://www.behance.net/satasiyakrish1",
      "https://twitter.com/satasiyakrish1",
      "https://www.instagram.com/satasiyakrish1",
      "https://www.facebook.com/satasiyakrish1",
      "https://www.pinterest.com/satasiyakrish1",
      "https://t.me/satasiyakrish1",
      "https://discord.com/users/satasiyakrish1",
      "https://codepen.io/satasiyakrish1",
      "https://stackoverflow.com/users/satasiyakrish1",
      "https://leetcode.com/satasiyakrish1",
      "https://www.hackerrank.com/satasiyakrish1",
      "https://codeforces.com/profile/satasiyakrish1",
      "https://www.codechef.com/users/satasiyakrish1",
      "https://g.dev/satasiyakrish1",
      "https://learn.microsoft.com/en-us/users/satasiyakrish1",
      "https://www.geeksforgeeks.org/user/satasiyakrish1/",
      "https://topmate.io/satasiyakrish1",
      "https://echai.ventures/satasiyakrish1",
      "https://www.credly.com/users/satasiyakrish1",
      "https://www.cloudskillsboost.google/public_profiles/68b2c888-f20d-47ec-ac22-37221514a350",
      "https://www.udemy.com/user/krish-satasiya/",
      "https://www.coursera.org/learner/satasiyakrish1",
      "https://medium.com/@satasiyakrish1",
      "https://dev.to/satasiyakrish1",
      "https://www.reddit.com/user/satasiyakrish1",
      "https://www.reddit.com/user/satasiyakrish1",
      "https://buymeacoffee.com/satasiyakrish1",
      "https://gitlab.com/satasiyakrish1",
      "https://lu.ma/user/satasiyakrish1",
      "https://www.meetup.com/members/408530207/"
    ],
    "email": "mailto:krishsatasiya44@gmail.com",
    "birthPlace": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      }
    },
    "knowsAbout": [
      "MERN Stack",
      "UI/UX Design",
      "Web Development",
      "JavaScript",
      "Figma",
      "Adobe XD",
      "Open Source",
      "Cyber Security"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "GTU (Gujarat Technological University)"
    }
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
  