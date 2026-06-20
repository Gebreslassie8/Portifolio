// utils/pdfGenerator.js
import jsPDF from 'jspdf';

export const generateResumePDF = async (portfolioData) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  // ===== HEADER WITH NAME AND TITLE =====
  const addHeader = () => {
    // Clean white background for header
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, pageWidth, 50, 'F');

    // Name - Large and bold
    doc.setTextColor(25, 42, 86);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('GEBRESLASSIE DESSIE', pageWidth / 2, 25, { align: 'center' });

    // Title
    doc.setTextColor(52, 152, 219);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Full-Stack Developer', pageWidth / 2, 35, { align: 'center' });

    // Divider line
    doc.setDrawColor(52, 152, 219);
    doc.setLineWidth(0.5);
    doc.line(margin + 40, 42, pageWidth - margin - 40, 42);

    // Contact info - centered
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.text('gebreslassiedessie@gmail.com  |  +251906995513  |  Addis Ababa, Ethiopia', pageWidth / 2, 48, { align: 'center' });
  };

  // ===== SECTION HEADER =====
  const addSectionHeader = (title, y) => {
    doc.setTextColor(25, 42, 86);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin, y);

    // Underline
    doc.setDrawColor(52, 152, 219);
    doc.setLineWidth(0.5);
    doc.line(margin, y + 2, margin + doc.getTextWidth(title) + 10, y + 2);

    return y + 8;
  };

  // ===== PROFESSIONAL SUMMARY =====
  const addSummary = (y) => {
    y = addSectionHeader('PROFESSIONAL SUMMARY', y);

    doc.setTextColor(60, 60, 60);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');

    const summary = 'Results-oriented Full-Stack Developer with hands-on experience building scalable web applications at ICT Park. Proficient in React.js, Tailwind CSS, Node.js, MySQL, and Supabase. Holds a B.Sc. in Software Engineering from Mizan Tepi University. Passionate about delivering high-performance, user-centric solutions.';

    const wrappedSummary = doc.splitTextToSize(summary, pageWidth - (2 * margin));
    wrappedSummary.forEach(line => {
      doc.text(line, margin, y);
      y += 5;
    });

    return y + 8;
  };

  // ===== TECHNICAL SKILLS =====
  const addSkills = (y) => {
    y = addSectionHeader('TECHNICAL SKILLS', y);

    const skillCategories = [
      { title: 'Mobile Development', skills: ['React Native', 'Flutter', 'iOS Development', 'Android Development', 'Mobile UI/UX'] },
      { title: 'Desktop Development', skills: ['Electron', '.NET MAUI', 'Java FX', 'Tauri'] },
      { title: 'Web Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
      { title: 'Web Backend', skills: ['Node.js', 'Express', 'Python/Django', 'PostgreSQL', 'MongoDB'] },
      { title: 'Tools & Platforms', skills: ['Git/GitHub', 'Docker', 'Vercel/Netlify', 'CI/CD Pipelines', 'Agile Methodologies'] }
    ];

    skillCategories.forEach((category, catIndex) => {
      if (y > pageHeight - 40) {
        doc.addPage();
        y = margin;
        y = addSectionHeader('TECHNICAL SKILLS (cont.)', y);
      }

      // Category title
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(52, 152, 219);
      doc.setFontSize(9);
      doc.text(category.title + ':', margin, y);
      y += 4;

      // Skills as clean text
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(60, 60, 60);

      const skillsText = category.skills.join('  •  ');
      const wrappedSkills = doc.splitTextToSize(skillsText, pageWidth - (2 * margin));
      wrappedSkills.forEach(line => {
        doc.text(line, margin + 2, y);
        y += 4.5;
      });

      y += 4;
    });

    return y + 5;
  };

  // ===== PROFESSIONAL EXPERIENCE =====
  const addExperience = (y) => {
    y = addSectionHeader('PROFESSIONAL EXPERIENCE', y);

    const experiences = [
      {
        company: 'ICT Park Company',
        position: 'Full-Stack Developer | Content Management System',
        period: '2017 E.C',
        description: [
          'Designed and developed a comprehensive Content Management System to digitize book cataloging, member registration, and processes.',
          'Built an intuitive frontend interface using React and Tailwind CSS for librarians and patrons.',
          'Engineered backend APIs using Node.js and MySQL for efficient data management.',
          'Implemented search and filter functionality for quick book discovery.',
          'Developed admin dashboard for monitoring library activities and generating reports.'
        ],
        technologies: ['React', 'Tailwind CSS', 'Node.js', 'MySQL']
      },
      {
        company: 'Online Theatre Ticketing System',
        position: 'Full-Stack Developer',
        period: '2018 E.C',
        description: [
          'Architected the backend of an online theatre ticketing platform, optimizing queries and caching to support a 15% growth in transaction volume.',
          'Integrated core backend systems, including secure payment gateways, automated notifications, and real-time seat inventory APIs to improve checkout retention.'
        ],
        technologies: ['React', 'Node.js', 'Payment Gateway', 'REST APIs']
      }
    ];

    experiences.forEach((exp, index) => {
      if (y > pageHeight - 80) {
        doc.addPage();
        y = margin;
        y = addSectionHeader('PROFESSIONAL EXPERIENCE (cont.)', y);
      }

      // Company - bold
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(25, 42, 86);
      doc.setFontSize(10);
      doc.text(exp.company, margin, y);

      // Period - bold and blue
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(52, 152, 219);
      doc.setFontSize(9);
      doc.text(exp.period, pageWidth - margin - doc.getTextWidth(exp.period), y);
      y += 5;

      // Position
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(60, 60, 60);
      doc.setFontSize(9);
      doc.text(exp.position, margin, y);
      y += 5;

      // Description with bullet points
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.setFontSize(8.5);

      exp.description.forEach((point) => {
        const wrappedPoint = doc.splitTextToSize('• ' + point, pageWidth - (2 * margin) - 4);
        wrappedPoint.forEach((line, lineIdx) => {
          const indent = lineIdx === 0 ? 0 : 6;
          doc.text(line, margin + indent, y);
          y += 4.5;
        });
      });

      // Technologies
      y += 2;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(52, 152, 219);
      doc.setFontSize(8);
      doc.text('Technologies:', margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.text(exp.technologies.join('  •  '), margin + 30, y);
      y += 6;

      // Separator
      if (index < experiences.length - 1) {
        doc.setDrawColor(220, 220, 220);
        doc.setLineWidth(0.3);
        doc.line(margin, y, pageWidth - margin, y);
        y += 6;
      }
    });

    return y + 5;
  };

  // ===== EDUCATION =====
  const addEducation = (y) => {
    y = addSectionHeader('EDUCATION', y);

    doc.setTextColor(60, 60, 60);
    doc.setFontSize(9);

    // Degree - bold
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(25, 42, 86);
    doc.setFontSize(10);
    doc.text('B.Sc. in Software Engineering', margin, y);

    // Period - bold and blue
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(52, 152, 219);
    doc.setFontSize(9);
    doc.text('2014 - 2018 E.C', pageWidth - margin - 35, y);
    y += 5;

    // University
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.text('Mizan Tepi University', margin, y);
    y += 5;

    // ===== DECORATED ACHIEVEMENTS =====
    // Draw decorative box around achievements
    const achievementsY = y;
    const achievementsHeight = 30;

    // Box background with subtle color
    doc.setFillColor(245, 248, 255);
    doc.setDrawColor(52, 152, 219, 0.3);
    doc.roundedRect(margin, achievementsY, pageWidth - (2 * margin), achievementsHeight, 3, 3, 'FD');

    // Decorative left border
    doc.setFillColor(52, 152, 219);
    doc.rect(margin, achievementsY, 3, achievementsHeight, 'F');

    // Star decoration
    doc.setFontSize(10);
    doc.setTextColor(52, 152, 219);
    doc.text('✦', margin + 10, achievementsY + 6);

    doc.setTextColor(52, 152, 219);
    doc.text('✦', margin + 10, achievementsY + 14);

    doc.text('✦', margin + 10, achievementsY + 22);

    // Achievements with bold CGPA
    doc.setFontSize(8.5);

    // Achievement 1: CGPA - BOLD
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(25, 42, 86);
    doc.text('CGPA: 3.74/4.0', margin + 18, achievementsY + 6);

    // Achievement 2: First Class Honors - normal
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.text('First Class Honors', margin + 18, achievementsY + 14);

    // Achievement 3: Dean's List - normal
    doc.text("Dean's List for Academic Excellence (2014-2018 E.C)", margin + 18, achievementsY + 22);

    y = achievementsY + achievementsHeight + 5;

    // Relevant Coursework
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(25, 42, 86);
    doc.setFontSize(8.5);
    doc.text('Relevant Coursework:', margin, y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const coursework = 'Data Structures & Algorithms, Database Management Systems, Web Application Development, Software Architecture, Object-Oriented Programming';
    const wrappedCoursework = doc.splitTextToSize(coursework, pageWidth - (2 * margin) - 4);
    wrappedCoursework.forEach(line => {
      doc.text(line, margin + 2, y);
      y += 4;
    });

    return y + 8;
  };

  // ===== PLATFORM EXPERTISE =====
  const addPlatformStats = (y) => {
    y = addSectionHeader('PLATFORM EXPERTISE', y);

    const platformData = [
      { name: 'Mobile', tech: 'React Native, Flutter' },
      { name: 'Desktop', tech: 'Electron, .NET MAUI' },
      { name: 'Web', tech: 'React, Node.js, Next.js' }
    ];

    const platformWidth = (pageWidth - (2 * margin) - 8) / 3;

    platformData.forEach((platform, index) => {
      if (y > pageHeight - 40) {
        doc.addPage();
        y = margin;
        y = addSectionHeader('PLATFORM EXPERTISE (cont.)', y);
      }

      const xPos = margin + index * (platformWidth + 4);

      // Card with subtle border
      doc.setDrawColor(200, 210, 220);
      doc.setFillColor(248, 250, 252);
      doc.roundedRect(xPos, y, platformWidth, 22, 2, 2, 'FD');

      // Platform name
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(52, 152, 219);
      doc.text(platform.name, xPos + 6, y + 6);

      // Tech
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.setFontSize(7);
      doc.text(platform.tech, xPos + 6, y + 15);
    });

    return y + 28;
  };

  // ===== ADDITIONAL INFORMATION =====
  const addExtras = (y) => {
    y = addSectionHeader('ADDITIONAL INFORMATION', y);

    doc.setTextColor(60, 60, 60);
    doc.setFontSize(8.5);

    // Languages
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(25, 42, 86);
    doc.text('Languages:', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.text('English, Amharic', margin + 30, y);
    y += 5.5;

    // Hobbies
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(25, 42, 86);
    doc.text('Hobbies:', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.text('Coding, New Technology Search, Video Editing, Reading Tech Blogs', margin + 28, y);
    y += 5.5;

    // GitHub
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(25, 42, 86);
    doc.text('GitHub:', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(52, 152, 219);
    doc.textWithLink('github.com/Gebreslassie8', margin + 28, y, { url: 'https://github.com/Gebreslassie8' });

    return y + 10;
  };

  // ===== FOOTER =====
  const addFooter = () => {
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.text('Resume - Gebreslassie Dessie', margin, pageHeight - 10);
    doc.text('Updated: ' + new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }), pageWidth - margin - 45, pageHeight - 10);

    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setTextColor(150, 150, 150);
      doc.text('Page ' + i + ' of ' + pageCount, pageWidth / 2, pageHeight - 10, { align: 'center' });
    }
  };

  // ===== GENERATE PDF =====
  try {
    addHeader();
    yPosition = 55;

    yPosition = addSummary(yPosition);
    yPosition = addSkills(yPosition);

    if (yPosition > pageHeight - 80) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition = addExperience(yPosition);

    if (yPosition > pageHeight - 80) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition = addEducation(yPosition);

    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition = addPlatformStats(yPosition);

    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = margin;
    }

    addExtras(yPosition);
    addFooter();

    const fileName = 'Gebreslassie_Dessie_Resume.pdf';
    doc.save(fileName);

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate professional PDF resume');
  }
};

// ===== SIMPLE VERSION =====
export const generateSimpleResumePDF = (portfolioData) => {
  const doc = new jsPDF();
  const margin = 20;
  let y = margin;

  // Header
  doc.setTextColor(25, 42, 86);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('GEBRESLASSIE DESSIE', doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
  y += 8;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(52, 152, 219);
  doc.text('Full-Stack Developer', doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
  y += 6;

  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text('gebreslassiedessie@gmail.com  |  +251906995513  |  Addis Ababa, Ethiopia', doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
  y += 12;

  // Summary
  doc.setTextColor(25, 42, 86);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Professional Summary', margin, y);
  y += 6;

  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const summary = 'Results-oriented Full-Stack Developer with hands-on experience building scalable web applications at ICT Park. Proficient in React.js, Tailwind CSS, Node.js, MySQL, and Supabase.';
  const wrappedSummary = doc.splitTextToSize(summary, pageWidth - (2 * margin));
  wrappedSummary.forEach(line => {
    doc.text(line, margin, y);
    y += 5;
  });

  y += 8;

  // Platform Stats
  doc.setTextColor(25, 42, 86);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Platform Expertise', margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text('Mobile: React Native, Flutter', margin, y);
  y += 6;
  doc.text('Desktop: Electron, .NET MAUI', margin, y);
  y += 6;
  doc.text('Web: React, Node.js, Next.js', margin, y);

  doc.save('Gebreslassie_Dessie_Resume_Quick.pdf');
};