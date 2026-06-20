// utils/pdfGenerator.js
import jsPDF from 'jspdf';

export const generateResumePDF = async (portfolioData) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  // Add elegant header with personal info
  const addHeader = () => {
    // Main header with gradient effect (dark blue)
    doc.setFillColor(30, 60, 90);
    doc.rect(0, 0, pageWidth, 70, 'F');

    // Name - Large and prominent
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(26);
    doc.setFont('helvetica', 'bold');
    doc.text(portfolioData.personal.name.toUpperCase(), margin, 30);

    // Title
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(portfolioData.personal.title, margin, 38);

    // Contact info in a clean, organized layout
    doc.setFontSize(10);

    // Left column - Professional info
    const leftColumn = [
      { icon: '📧', text: portfolioData.personal.email },
      { icon: '📱', text: portfolioData.personal.phone }
    ];

    // Right column - Location & Education
    const rightColumn = [
      { icon: '📍', text: portfolioData.personal.location },
      { icon: '🎓', text: 'MTU Software Engineering' }
    ];

    // Draw contact info boxes
    const boxWidth = (pageWidth - (3 * margin)) / 2;
    const boxHeight = 25;
    const boxY = 45;

    // Left box
    doc.setFillColor(255, 255, 255, 0.1);
    doc.rect(margin, boxY, boxWidth, boxHeight, 'F');
    doc.setDrawColor(255, 255, 255, 0.3);
    doc.rect(margin, boxY, boxWidth, boxHeight);

    // Right box
    doc.rect(margin * 2 + boxWidth, boxY, boxWidth, boxHeight, 'F');
    doc.setDrawColor(255, 255, 255, 0.3);
    doc.rect(margin * 2 + boxWidth, boxY, boxWidth, boxHeight);

    // Fill left box content
    leftColumn.forEach((item, index) => {
      const yPos = boxY + 8 + (index * 8);
      doc.setTextColor(255, 255, 255);
      doc.text(item.icon, margin + 5, yPos);
      doc.text(item.text, margin + 15, yPos);
    });

    // Fill right box content
    rightColumn.forEach((item, index) => {
      const yPos = boxY + 8 + (index * 8);
      const xPos = margin * 2 + boxWidth + 5;
      doc.setTextColor(255, 255, 255);
      doc.text(item.icon, xPos, yPos);
      doc.text(item.text, xPos + 10, yPos);
    });

    // Add subtle decorative line
    doc.setDrawColor(255, 255, 255, 0.5);
    doc.setLineWidth(0.3);
    doc.line(margin, 72, pageWidth - margin, 72);
  };

  // Add professional section header
  const addSectionHeader = (title, y) => {
    doc.setFillColor(240, 245, 249);
    doc.rect(margin, y, pageWidth - (2 * margin), 8, 'F');
    doc.setTextColor(30, 60, 90);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin + 5, y + 5.5);

    // Add accent line
    doc.setDrawColor(41, 128, 185);
    doc.setLineWidth(1);
    doc.line(margin + 5, y + 7, margin + 25, y + 7);

    return y + 15;
  };

  // Add skills with progress bars
  const addSkills = (y) => {
    y = addSectionHeader('TECHNICAL EXPERTISE', y);

    doc.setTextColor(60, 60, 60);
    doc.setFontSize(9);

    const skillCategories = [
      { title: 'Mobile Development', skills: portfolioData.skills.mobile },
      { title: 'Desktop Development', skills: portfolioData.skills.desktop },
      { title: 'Web Frontend', skills: portfolioData.skills.web.frontend },
      { title: 'Web Backend', skills: portfolioData.skills.web.backend },
      { title: 'DevOps & Tools', skills: portfolioData.skills.tools }
    ];

    skillCategories.forEach(category => {
      if (y > pageHeight - 40) {
        doc.addPage();
        y = margin;
      }

      // Category title
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 60, 90);
      doc.text(category.title + ':', margin, y);
      y += 4;

      // Skills with levels
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);

      const skillsPerRow = 2;
      const skillWidth = (pageWidth - (2 * margin)) / skillsPerRow - 5;

      category.skills.forEach((skill, index) => {
        if (index % skillsPerRow === 0 && index !== 0) {
          y += 8;
        }

        const xPos = margin + (index % skillsPerRow) * (skillWidth + 5);

        // Skill name
        doc.text(skill.name, xPos, y);

        // Progress bar background
        doc.setDrawColor(220, 220, 220);
        doc.setFillColor(245, 245, 245);
        doc.rect(xPos, y + 1, skillWidth - 10, 2, 'F');

        // Progress bar fill
        const progressWidth = (skillWidth - 10) * (skill.level / 100);
        doc.setFillColor(41, 128, 185);
        doc.rect(xPos, y + 1, progressWidth, 2, 'F');

        // Percentage
        doc.setFontSize(7);
        doc.setTextColor(100, 100, 100);
        doc.text(`${skill.level}%`, xPos + skillWidth - 12, y);
        doc.setFontSize(9);
      });

      y += 12;
    });

    return y + 5;
  };

  // Add professional experience
  const addExperience = (y) => {
    y = addSectionHeader('PROFESSIONAL EXPERIENCE', y);

    doc.setTextColor(60, 60, 60);
    doc.setFontSize(9);

    portfolioData.experience.forEach((exp, index) => {
      if (y > pageHeight - 60) {
        doc.addPage();
        y = margin;
      }

      // Company and period
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 60, 90);
      doc.text(exp.company, margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);
      doc.text(exp.period, pageWidth - margin - 30, y);
      y += 4;

      // Location
      doc.setFontSize(8);
      doc.text(exp.location, margin, y);
      y += 4;

      // Technologies
      doc.setFontSize(8);
      const techText = `Technologies: ${exp.technologies.join(', ')}`;
      const platformsText = `Platforms: ${exp.platforms.join(', ')}`;

      doc.text(techText, margin, y);
      y += 3.5;
      doc.text(platformsText, margin, y);
      y += 8;

      // Add subtle separator
      if (index < portfolioData.experience.length - 1) {
        doc.setDrawColor(240, 240, 240);
        doc.line(margin, y, pageWidth - margin, y);
        y += 5;
      }
    });

    return y + 8;
  };

  // Add featured projects
  const addProjects = (y) => {
    y = addSectionHeader('FEATURED PROJECTS', y);

    doc.setTextColor(60, 60, 60);
    doc.setFontSize(9);

    const featuredProjects = portfolioData.projects.filter(project => project.featured);

    featuredProjects.forEach((project, index) => {
      if (y > pageHeight - 50) {
        doc.addPage();
        y = margin;
      }

      // Project title
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 60, 90);
      const projectTitle = `${project.platform.charAt(0).toUpperCase() + project.platform.slice(1)} Application`;
      doc.text(projectTitle, margin, y);

      // Status
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);
      doc.text(`Status: ${project.status}`, pageWidth - margin - 30, y);

      y += 5;

      // Technologies
      doc.setFontSize(8);
      doc.setTextColor(60, 60, 60);
      const techText = `Technologies: ${project.technologies.join(' • ')}`;
      const wrappedTech = doc.splitTextToSize(techText, pageWidth - (2 * margin));
      wrappedTech.forEach(line => {
        doc.text(line, margin, y);
        y += 3.5;
      });

      y += 6;

      // Add separator
      if (index < featuredProjects.length - 1) {
        doc.setDrawColor(240, 240, 240);
        doc.line(margin, y, pageWidth - margin, y);
        y += 8;
      }
    });

    return y + 8;
  };

  // Add education with achievements
  const addEducation = (y) => {
    y = addSectionHeader('EDUCATION & QUALIFICATIONS', y);

    doc.setTextColor(60, 60, 60);
    doc.setFontSize(9);

    // MTU Education
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 60, 90);
    doc.text('MASTER OF TECHNOLOGY (MTU) IN SOFTWARE ENGINEERING', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('2022 - 2024', pageWidth - margin - 30, y);
    y += 4;

    doc.setTextColor(60, 60, 60);
    doc.text('Mizan-Tepi University', margin, y);
    y += 4;

    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);

    const achievements = [
      '• Specialized in Cloud Architecture & Distributed Systems',
      '• Research Focus: AI-Driven Software Testing Methodologies',
      '• GPA: 3.74/4.0 - Graduated with Distinction'
    ];

    achievements.forEach(achievement => {
      doc.text(achievement, margin + 2, y);
      y += 3.5;
    });

    y += 6;

    // BSc Education
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 60, 90);
    doc.text('BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('2017 - 2021', pageWidth - margin - 30, y);
    y += 4;

    doc.setTextColor(60, 60, 60);
    doc.text('Mizan-Tepi University', margin, y);
    y += 4;

    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);

    const bscAchievements = [
      '• GPA: 3.74/4.0 - First Class Honors',
      '• Dean\'s List for Academic Excellence (2019-2021)',
      '• Best Final Year Project Award Recipient'
    ];

    bscAchievements.forEach(achievement => {
      doc.text(achievement, margin + 2, y);
      y += 3.5;
    });

    return y + 12;
  };

  // Add platform expertise summary
  const addPlatformStats = (y) => {
    y = addSectionHeader('PLATFORM EXPERTISE SUMMARY', y);

    doc.setTextColor(60, 60, 60);
    doc.setFontSize(9);

    const { platformStats } = portfolioData;
    const platformData = Object.entries(platformStats);

    platformData.forEach(([platform, stats], index) => {
      if (y > pageHeight - 30) {
        doc.addPage();
        y = margin;
      }

      const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
      const xPos = margin + (index % 2) * ((pageWidth - (2 * margin)) / 2);

      // Platform card with subtle styling
      doc.setFillColor(248, 250, 252);
      doc.rect(xPos, y, (pageWidth - (2 * margin)) / 2 - 5, 25, 'F');
      doc.setDrawColor(220, 220, 220);
      doc.rect(xPos, y, (pageWidth - (2 * margin)) / 2 - 5, 25);

      // Platform name
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 60, 90);
      doc.text(platformName, xPos + 5, y + 6);

      // Stats
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.setFontSize(8);
      doc.text(`${stats.projects}+ Projects`, xPos + 5, y + 12);
      doc.text(`${stats.experience} Experience`, xPos + 5, y + 16);

      // Key technologies
      const keyTechs = stats.technologies.slice(0, 3).join(', ');
      doc.text(keyTechs, xPos + 5, y + 21);

      if (index % 2 === 1 || index === platformData.length - 1) {
        y += 30;
      }
    });

    return y + 8;
  };

  // Add professional footer
  const addFooter = () => {
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text(`Professional Resume - ${portfolioData.personal.name}`, margin, pageHeight - 10);
    doc.text(`Generated on ${new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}`, pageWidth - margin - 50, pageHeight - 10);

    // Page numbers
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text(`Page ${i} of ${pageCount}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
    }
  };

  // Generate PDF
  try {
    addHeader();
    yPosition = 80; // Start below the enhanced header

    yPosition = addSkills(yPosition);
    yPosition = addExperience(yPosition);

    // Check if we need new page for projects
    if (yPosition > pageHeight - 100) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition = addProjects(yPosition);
    yPosition = addEducation(yPosition);

    // Check if we need new page for platform stats
    if (yPosition > pageHeight - 80) {
      doc.addPage();
      yPosition = margin;
    }

    addPlatformStats(yPosition);
    addFooter();

    // Save the PDF with professional filename
    const fileName = `${portfolioData.personal.name.replace(' ', '_')}_Professional_Resume_${new Date().getFullYear()}.pdf`;
    doc.save(fileName);

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate professional PDF resume');
  }
};

// Simple version for quick download
export const generateSimpleResumePDF = (portfolioData) => {
  const doc = new jsPDF();
  const margin = 20;
  let y = margin;

  // Elegant header
  doc.setFillColor(30, 60, 90);
  doc.rect(0, 0, doc.internal.pageSize.getWidth(), 50, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text(portfolioData.personal.name, margin, 25);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(portfolioData.personal.title, margin, 33);

  // Contact info in a clean layout
  doc.setFontSize(9);
  doc.text(`📧 ${portfolioData.personal.email}`, margin, 42);
  doc.text(`📱 ${portfolioData.personal.phone}`, doc.internal.pageSize.getWidth() / 2, 42);
  doc.text(`📍 ${portfolioData.personal.location}`, margin, 47);
  doc.text(`🎓 MTU Software Engineering`, doc.internal.pageSize.getWidth() / 2, 47);

  y = 60;

  // Quick professional summary
  const totalProjects = Object.values(portfolioData.platformStats).reduce((total, platform) => total + platform.projects, 0);
  const totalExperience = Math.max(...Object.values(portfolioData.platformStats).map(p => parseInt(p.experience)));

  doc.setTextColor(30, 60, 90);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(`Professional Summary`, margin, y);
  y += 6;

  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`${totalProjects}+ Projects Completed | ${totalExperience}+ Years Experience | Full Stack Developer`, margin, y);

  // Save
  doc.save(`${portfolioData.personal.name.replace(' ', '_')}_Resume.pdf`);
};