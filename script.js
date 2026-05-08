// ---------- DATA MODELS (enriched with descriptions and categories) ----------
const projectsData = [
    { title: "AI SELF-HEALING SOIL (SHSS)", category: "sustainability", icon: "fas fa-leaf", desc: "Autonomous soil regeneration using neural sensor mesh and microbiological healing. Achieved 89% efficiency increase in field tests.", tech: "AI • Environmental Robotics • IoT • ML" },
    { title: "AERIAL SWARM FORESTRY", category: "robotics", icon: "fas fa-drone", desc: "Coordinated drone swarms for reforestation & real-time biomass monitoring. 12k+ trees seeded per month.", tech: "Swarm Robotics • Computer Vision • Lidar" },
    { title: "NEURAL WATER PURIFIER", category: "ai", icon: "fas fa-tint", desc: "AI-powered filtration that adapts to pollutants in real-time, reducing toxins by 94% with predictive maintenance.", tech: "Machine Learning • Smart Sensors • Edge AI" },
    { title: "AUTONOMOUS WASTE SORTING", category: "robotics", icon: "fas fa-recycle", desc: "Robotic arm with deep learning classification — industrial waste recovery rate +78% in pilot plants.", tech: "Robotics • Deep Learning • Computer Vision" },
    { title: "SMART AGRICULTURE NEXUS", category: "sustainability", icon: "fas fa-seedling", desc: "IoT + predictive analytics for water & nutrient optimization, raising yield 40% while reducing water usage.", tech: "IoT • Predictive Modeling • Cloud Analytics" },
    { title: "CYBER-PHYSICAL TWIN", category: "ai", icon: "fas fa-microchip", desc: "Digital twin simulation for urban environmental planning with real sensor fusion & real-time forecasting.", tech: "Digital Twin • AI • Real-time data" }
];

// gallery items with detailed captions (stylish photo descriptions)
const galleryData = [
    { imgId: "1ktQmBkmDgZ8bgYVPyOZ6tJRtnJQyZ9Wn", category: "lab", caption: "⚡ NEURAL INTERFACE CALIBRATION — Abdullah testing early haptic feedback gloves for robotic teleoperation. (Biomechatronics Lab, 2024)" },
    { imgId: "1naNmsXlf_nv52VNlVj7Q79PiktYNSeb6", category: "events", caption: "🏆 INTERNATIONAL ROBOTICS SUMMIT 2023 — receiving Young Innovator Award for SHSS prototype. Singapore Expo." },
    { imgId: "1e_M1OySW5DJMbyFBa8kfoeoLh7UWhOQ8", category: "events", caption: "🌍 GLOBAL AI FOR GOOD CEREMONY — Abdullah presenting sustainable automation framework. Geneva, 2024." },
    { imgId: "1kMd2rviIyHX6immdT_-YyuOiEY5sGK4Z", category: "lab", caption: "🔬 PROTOTYPING SELF-HEALING SOIL SENSOR ARRAY — inside the cybernetics lab, assembling neural probes (March 2024)." },
    { imgId: "1Ta-81SYMWLIWRQ7SPKMId9jhSDI8PEiU", category: "field", caption: "🌾 FIELD DEPLOYMENT — semi-arid region, drone swarm seeding mission. Real-time soil data transmission overlay (March 2025)." },
    { imgId: "1OyBnf6UWKkYmNcKZCih92yIrPOrIPWSb", category: "events", caption: "🎤 KEYNOTE AT ROBOTIC FUTURE CONFERENCE: 'Cybernetic Ecology and Regenerative AI' — Berlin, 2024." },
    { imgId: "1SgKMw_gNT-92AQzOWGCK_eEmDZmAAImn", category: "field", caption: "📊 SOIL REGENERATION PILOT — Before vs After analysis using SHSS technology. 87% microbial restoration observed." },
    { imgId: "1yq74h95maRWB3zuWJkQznhuiB78ksd6h", category: "lab", caption: "🦾 EARLY PROTOTYPE: AI-driven biomechanical hand for environmental sampling. 16 DOF tactile sensing (2023)." },
    { imgId: "1qXtpi4KfCE2v8TRi1NcvEbrLTR0PVb4L", category: "field", caption: "🛸 DRONE IMAGERY OVERLAY — real-time soil health mapping, Northern region. Multispectral analysis & NDVI." }
];

const achievementsData = [
    { imgId: "1naNmsXlf_nv52VNlVj7Q79PiktYNSeb6", title: "INTERNATIONAL ROBOTICS SUMMIT WINNER", desc: "First place in sustainable automation category, Singapore 2023 — SHSS recognized as breakthrough." },
    { imgId: "1e_M1OySW5DJMbyFBa8kfoeoLh7UWhOQ8", title: "AI FOR EARTH GOLD MEDAL", desc: "Global recognition for AI-driven environmental restoration, UNEP sponsored award 2024." },
    { imgId: "1kMd2rviIyHX6immdT_-YyuOiEY5sGK4Z", title: "CYBER-PHYSICAL SYSTEMS PATENT", desc: "Patent filed for self-regulating soil sensor network (USPTO #2024-1189)." },
    { imgId: "1Ta-81SYMWLIWRQ7SPKMId9jhSDI8PEiU", title: "TECH FOR GOOD FELLOWSHIP", desc: "UNEP fellowship for climate robotics innovations, awarded to 12 global fellows." },
    { imgId: "1OyBnf6UWKkYmNcKZCih92yIrPOrIPWSb", title: "YOUNG SCIENTIST AWARD", desc: "National Academy of Engineering, 2024 — for contributions to adaptive robotics." },
    { imgId: "1SgKMw_gNT-92AQzOWGCK_eEmDZmAAImn", title: "BEST INNOVATION - ROBOTICS", desc: "Asia-Pacific Robotics Expo 2024: Gold medal for SHSS field implementation." }
];

function getImageUrl(id) {
    return `https://lh3.googleusercontent.com/d/${id}=s900`;
}

// Helper render functions
function renderProjects(category) {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    const filtered = category === 'all' ? projectsData : projectsData.filter(p => p.category === category);
    container.innerHTML = filtered.map(proj => `
        <div class="project-card">
            <div class="project-icon"><i class="${proj.icon}"></i></div>
            <h3 style="color:#0ff; margin-bottom:0.6rem;">${proj.title}</h3>
            <p style="margin:0.5rem 0; font-size:0.9rem;">${proj.desc}</p>
            <div style="font-size:0.7rem; color:#aaf; margin-top:0.8rem;">⚙️ ${proj.tech}</div>
        </div>
    `).join('');
}

function renderGallery(category) {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    const filtered = category === 'all' ? galleryData : galleryData.filter(g => g.category === category);
    container.innerHTML = filtered.map(item => `
        <div class="gallery-item-cat" onclick="openLightbox('${getImageUrl(item.imgId)}')">
            <img src="${getImageUrl(item.imgId)}" alt="gallery visual" loading="lazy" onerror="this.src='https://picsum.photos/id/95/400/300'">
            <div class="img-caption"><i class="fas fa-camera-retro"></i> ${item.caption}</div>
        </div>
    `).join('');
}

function renderAchievements() {
    const container = document.getElementById('achievementsContainer');
    if (!container) return;
    container.innerHTML = achievementsData.map(ach => `
        <div class="project-card" onclick="openLightbox('${getImageUrl(ach.imgId)}')" style="cursor:pointer;">
            <i class="fas fa-award" style="color:#ffd966; font-size:2rem;"></i>
            <h3 style="margin:0.7rem 0; color:#0ff;">${ach.title}</h3>
            <p style="font-size:0.85rem;">${ach.desc}</p>
            <div style="margin-top:0.5rem; font-size:0.7rem; color:#6cf;"><i class="fas fa-certificate"></i> click to view</div>
        </div>
    `).join('');
}

// Lightbox global functions
window.openLightbox = function(src) {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    if (modal && modalImg) {
        modal.style.display = 'flex';
        modalImg.src = src;
    }
};

window.closeLightbox = function() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.style.display = 'none';
    }
};

// Initialize event listeners and rendering
document.addEventListener('DOMContentLoaded', () => {
    // Render initial content
    renderProjects('all');
    renderGallery('all');
    renderAchievements();

    // Project category switcher
    const projectBtns = document.querySelectorAll('#projectTabs .cat-btn');
    projectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projectBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.getAttribute('data-cat'));
        });
    });

    // Gallery category switcher
    const galleryBtns = document.querySelectorAll('#galleryTabs .cat-btn');
    galleryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            galleryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.getAttribute('data-catg'));
        });
    });

    // Contact form handler
    const sendBtn = document.getElementById('sendMsgBtn');
    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            const name = document.getElementById('contactName')?.value || 'anonymous';
            const email = document.getElementById('contactEmail')?.value;
            const msg = document.getElementById('contactMsg')?.value;
            if (!email && !msg) {
                alert("⟡ Neural link incomplete: please input at least email and message ⟡");
            } else {
                alert(`⟡ Transmission received, ${name || 'innovator'}. Abdullah's AI will establish secure channel.`);
                if (document.getElementById('contactName')) document.getElementById('contactName').value = '';
                if (document.getElementById('contactEmail')) document.getElementById('contactEmail').value = '';
                if (document.getElementById('contactMsg')) document.getElementById('contactMsg').value = '';
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "") return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
});