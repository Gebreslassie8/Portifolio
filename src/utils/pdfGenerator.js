// utils/pdfGenerator.js
import jsPDF from 'jspdf';

export const generateResumePDF = async (portfolioData) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  let yPosition = margin;

  // ===== SMART COLOR PALETTE =====
  const C = {
    navy: [25, 42, 86],
    blue: [52, 152, 219],
    blueLight: [235, 245, 252],
    blueMid: [174, 214, 241],
    green: [39, 174, 96],
    greenLight: [232, 248, 240],
    gray: [100, 100, 100],
    grayLight: [150, 150, 150],
    text: [55, 65, 81],
    bg: [248, 250, 252],
    border: [226, 232, 240],
    white: [255, 255, 255],
    purple: [155, 89, 182],
    orange: [230, 126, 34],
    red: [231, 76, 60]
  };

  // ===== HEADER — SMART SIDEBAR DESIGN =====
  const addHeader = () => {
    // Left navy sidebar
    doc.setFillColor(...C.navy);
    doc.rect(0, 0, 10, 78, 'F');

    // Right subtle background
    doc.setFillColor(...C.bg);
    doc.rect(10, 0, pageWidth - 10, 78, 'F');

    // Accent line under header
    doc.setFillColor(...C.blue);
    doc.rect(10, 78, pageWidth - 10, 1.5, 'F');

    // Name
    doc.setTextColor(...C.navy);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('GEBRESLASSIE DESSIE AGDEW', 20, 20);

    // Title
    doc.setTextColor(...C.blue);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Full Stack Software Engineer  |  ICT Solutions Specialist', 20, 29);

    // Divider
    doc.setDrawColor(...C.blue);
    doc.setLineWidth(1);
    doc.line(20, 33, 75, 33);

    // ===== CONTACT GRID (2 columns) =====
    doc.setFontSize(8.5);

    const contactLeft = [
      { label: 'Email', value: 'gebreslassiedessie@gmail.com' },
      { label: 'Phone', value: '+251 902 067 211 / +251 906 995 513' },
      { label: 'Location', value: 'Addis Ababa, Ethiopia' }
    ];

    let cy = 42;
    contactLeft.forEach(item => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...C.navy);
      doc.text(item.label + ':', 20, cy);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...C.text);
      doc.text(item.value, 40, cy);
      cy += 5.5;
    });

    // Right column links
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...C.navy);
    doc.text('GitHub:', 120, 42);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...C.blue);
    doc.textWithLink('github.com/Gebreslassie8', 135, 42, { url: 'https://github.com/Gebreslassie8' });

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...C.navy);
    doc.text('Portfolio:', 120, 47.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...C.blue);
    doc.textWithLink('portfolio-igqe.vercel.app', 137, 47.5, { url: 'https://portfolio-igqe.vercel.app' });

    // ===== ICT SOLUTIONS BADGE =====
    doc.setFillColor(...C.blue);
    doc.roundedRect(pageWidth - 78, 54, 62, 8, 2, 2, 'F');
    doc.setTextColor(...C.white);
    doc.setFontSize(6.8);
    doc.setFont('helvetica', 'bold');
    doc.text('ALL ICT SOLUTIONS PROVIDER', pageWidth - 75, 59);
  };

  // ===== SMART SECTION HEADER =====
  const addSectionHeader = (title, y) => {
    // Left accent block
    doc.setFillColor(...C.blue);
    doc.rect(margin, y - 3.5, 3.5, 7, 'F');

    // Title
    doc.setTextColor(...C.navy);
    doc.setFontSize(11.5);
    doc.setFont('helvetica', 'bold');
    doc.text(title.toUpperCase(), margin + 7, y + 1);

    // Underline
    doc.setDrawColor(...C.border);
    doc.setLineWidth(0.4);
    doc.line(margin, y + 4, pageWidth - margin, y + 4);

    return y + 10;
  };

  // ===== PROFESSIONAL SUMMARY =====
  const addSummary = (y) => {
    y = addSectionHeader('Professional Summary', y);

    const summary = 'High-achieving Full Stack Software Engineer with a 3.74/4.00 CGPA from Mizan-Tepi University and a 73.75% National Exit Exam score. Specialized in modern full-stack web development with core expertise in React.js, Next.js, Node.js, Express.js, TypeScript, and Tailwind CSS. Currently expanding expertise into cross-platform Mobile App Development using Flutter and React Native. Fast learner with strong analytical skills, creative project ideation, and a commitment to writing clean, scalable, production-ready code. Provider of all ICT solutions — from web and mobile applications to enterprise systems, cloud solutions, and digital transformation.';

    doc.setTextColor(...C.text);
    doc.setFontSize(8.8);
    doc.setFont('helvetica', 'normal');

    const wrapped = doc.splitTextToSize(summary, pageWidth - (2 * margin));
    wrapped.forEach(line => {
      doc.text(line, margin, y);
      y += 4.6;
    });

    return y + 5;
  };

  // ===== EDUCATION & CREDENTIALS (with short coursework) =====
  const addEducation = (y) => {
    y = addSectionHeader('Education & Credentials', y);

    // Card
    doc.setFillColor(...C.blueLight);
    doc.roundedRect(margin, y - 2, pageWidth - (2 * margin), 28, 2.5, 2.5, 'F');
    doc.setDrawColor(...C.blueMid);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y - 2, pageWidth - (2 * margin), 28, 2.5, 2.5, 'S');

    // Left accent
    doc.setFillColor(...C.blue);
    doc.rect(margin, y - 2, 3, 28, 'F');

    // Degree
    doc.setTextColor(...C.navy);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('B.Sc. in Software Engineering', margin + 7, y + 5);

    // Year badge
    doc.setFillColor(...C.blue);
    doc.roundedRect(pageWidth - margin - 37, y + 1, 34, 6.5, 1.5, 1.5, 'F');
    doc.setTextColor(...C.white);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.text('2014 - 2018 E.C', pageWidth - margin - 35, y + 5.5);

    // University
    doc.setTextColor(...C.gray);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Mizan-Tepi University', margin + 7, y + 11.5);

    // CGPA - GREEN BOLD
    doc.setTextColor(...C.green);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'bold');
    doc.text('• CGPA: 3.74/4.00', margin + 7, y + 17);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...C.gray);
    doc.text('(Graduated with Distinction)', margin + 42, y + 17);

    // ---- SHORT COURSEWORK (only main ones) ----
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...C.navy);
    doc.setFontSize(7.8);
    doc.text('Relevant Coursework:', margin + 7, y + 23);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...C.text);
    doc.setFontSize(7.5);
    // Select only the core/main courses (4-5)
    const mainCourses = 'Operating Systems, Web Security, Mobile Application Development, Data Structures & Algorithms';
    doc.text(mainCourses, margin + 42, y + 23);

    return y + 34;
  };

  // ===== TECHNICAL SKILLS =====
  const addSkills = (y) => {
    y = addSectionHeader('Technical Skills', y);

    const skillGroups = [
      {
        label: 'Frontend Web',
        skills: 'React.js, Next.js, TypeScript, JavaScript (ES6+), Vue.js, Tailwind CSS, HTML5, CSS3, Responsive Design',
        color: C.blue
      },
      {
        label: 'Backend Web',
        skills: 'Node.js, Express.js, Java, RESTful APIs, MVC Architecture, JWT Authentication',
        color: C.green
      },
      {
        label: 'Mobile Development',
        skills: 'Flutter, Dart, React Native (currently studying and building projects)',
        color: C.purple
      },
      {
        label: 'Database & Tools',
        skills: 'PostgreSQL, MySQL, MongoDB, Supabase, Git, GitHub, Vercel, Render, Postman, NPM',
        color: C.orange
      },
      {
        label: 'Cloud & Security',
        skills: 'Cloud Systems, Web Security Fundamentals, CI/CD Pipelines, Docker (learning)',
        color: C.red
      },
      {
        label: 'Corporate Experience',
        skills: 'On-site Software Engineering Internship at the Ethiopian ICT Park (2025)',
        color: [44, 62, 80]
      }
    ];

    skillGroups.forEach(group => {
      if (y > pageHeight - 30) {
        doc.addPage();
        y = margin;
        y = addSectionHeader('Technical Skills (continued)', y);
      }

      // Colored dot
      doc.setFillColor(...group.color);
      doc.circle(margin + 2, y - 1, 1.3, 'F');

      // Label
      doc.setTextColor(...C.navy);
      doc.setFontSize(8.8);
      doc.setFont('helvetica', 'bold');
      doc.text(group.label + ':', margin + 6, y);

      // Skills
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(...C.text);

      const wrapped = doc.splitTextToSize(group.skills, pageWidth - margin - 48);
      wrapped.forEach((line, idx) => {
        doc.text(line, margin + 45, y + (idx * 4));
      });

      y += (wrapped.length * 4) + 4;
    });

    return y + 3;
  };

  // ===== PROJECT EXPERIENCE =====
  const addProjects = (y) => {
    y = addSectionHeader('Project Experience', y);

    const projects = [
      {
        title: 'Online Theater Ticketing System',
        type: 'Full-Stack Web Application',
        stack: 'React.js  •  TypeScript  •  Node.js  •  Express.js',
        points: [
          'Built a complete end-to-end ticketing web application using React.js and TypeScript on the frontend, with Node.js and Express.js handling backend REST APIs.',
          'Engineered an interactive real-time seat reservation interface, responsive seating map layout, and secure user authentication.',
          'Designed and optimized database schemas for handling showtime schedules and user bookings.'
        ]
      },
      {
        title: 'Enterprise Content Management System (CMS)',
        type: 'Full-Stack Enterprise Solution',
        stack: 'React.js  •  Node.js  •  Express.js  •  JWT  •  RBAC',
        points: [
          'Engineered a scalable, high-performance administrative content management platform utilizing React.js for a dynamic user interface and Node.js/Express.js for RESTful API services.',
          'Implemented secure JSON Web Token (JWT) authentication, granular Role-Based Access Control (RBAC), and full CRUD workflows to ensure strict data security and administrative integrity.',
          'Designed modular API routes and integrated cloud/database persistence to streamline digital asset management, content publishing, and audit logging.'
        ]
      }
    ];

    projects.forEach((project, index) => {
      if (y > pageHeight - 55) {
        doc.addPage();
        y = margin;
        y = addSectionHeader('Project Experience (continued)', y);
      }

      // Project title bar
      doc.setFillColor(...C.bg);
      doc.roundedRect(margin, y - 2, pageWidth - (2 * margin), 6, 1.5, 1.5, 'F');
      doc.setFillColor(...C.blue);
      doc.rect(margin, y - 2, 2.5, 6, 'F');

      // Title
      doc.setTextColor(...C.navy);
      doc.setFontSize(9.8);
      doc.setFont('helvetica', 'bold');
      doc.text(project.title, margin + 6, y + 2);

      // Type badge
      doc.setFillColor(...C.blueLight);
      doc.roundedRect(pageWidth - margin - 48, y - 1, 46, 4.5, 1, 1, 'F');
      doc.setTextColor(...C.blue);
      doc.setFontSize(6.3);
      doc.setFont('helvetica', 'bold');
      doc.text(project.type, pageWidth - margin - 46, y + 1.7);

      y += 7;

      // Stack
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(...C.blue);
      doc.text('Stack:', margin + 6, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...C.gray);
      doc.text(project.stack, margin + 17, y);
      y += 5;

      // Bullet points
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(...C.text);

      project.points.forEach(point => {
        const wrapped = doc.splitTextToSize('•  ' + point, pageWidth - (2 * margin) - 8);
        wrapped.forEach((line, lineIdx) => {
          doc.text(line, margin + (lineIdx === 0 ? 6 : 11), y);
          y += 4;
        });
        y += 1;
      });

      // Separator
      if (index < projects.length - 1) {
        doc.setDrawColor(...C.border);
        doc.setLineWidth(0.25);
        doc.line(margin + 6, y + 1, pageWidth - margin - 6, y + 1);
        y += 5;
      } else {
        y += 3;
      }
    });

    return y + 3;
  };

  // ===== KEY STRENGTHS =====
  const addStrengths = (y) => {
    y = addSectionHeader('Key Strengths & Competencies', y);

    const strengths = [
      {
        title: 'Logical Problem Solving',
        desc: 'Exceptional analytical thinking, system architecture design, and algorithmic debugging skills.',
        color: C.blue
      },
      {
        title: 'Clean Code & Architecture',
        desc: 'Strong commitment to modular, scalable, and readable code standards.',
        color: C.green
      },
      {
        title: 'Continuous Learning',
        desc: 'Actively expanding technical skills into mobile development, cloud systems, and modern databases.',
        color: C.purple
      },
      {
        title: 'Technical Communication',
        desc: 'Fluent in technical Amharic, English writing and verbal presentations.',
        color: C.orange
      }
    ];

    const cardWidth = (pageWidth - (2 * margin) - 6) / 2;

    strengths.forEach((strength, index) => {
      if (y > pageHeight - 30) {
        doc.addPage();
        y = margin;
        y = addSectionHeader('Key Strengths (continued)', y);
      }

      const col = index % 2;
      const xPos = margin + col * (cardWidth + 6);
      const rowY = y + Math.floor(index / 2) * 17;

      // Card
      doc.setFillColor(...C.bg);
      doc.roundedRect(xPos, rowY - 2, cardWidth, 15, 2, 2, 'F');

      // Left accent
      doc.setFillColor(...strength.color);
      doc.rect(xPos, rowY - 2, 2.5, 15, 'F');

      // Title
      doc.setTextColor(...C.navy);
      doc.setFontSize(8.6);
      doc.setFont('helvetica', 'bold');
      doc.text(strength.title, xPos + 6, rowY + 3);

      // Description
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.4);
      doc.setTextColor(...C.text);
      const wrapped = doc.splitTextToSize(strength.desc, cardWidth - 10);
      wrapped.forEach((line, lineIdx) => {
        doc.text(line, xPos + 6, rowY + 8 + (lineIdx * 3.3));
      });
    });

    const rowCount = Math.ceil(strengths.length / 2);
    return y + (rowCount * 17) + 4;
  };

  // ===== ADDITIONAL INFORMATION =====
  const addExtras = (y) => {
    if (y > pageHeight - 40) {
      doc.addPage();
      y = margin;
    }

    y = addSectionHeader('Additional Information', y);

    const items = [
      { label: 'Languages', value: 'English, Amharic' },
      { label: 'Hobbies', value: 'Coding, New Technology Search, Video Editing, Reading Tech Blogs' },
      { label: 'Availability', value: 'Open to freelance, full-time, and collaborative opportunities worldwide' }
    ];

    items.forEach(item => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...C.navy);
      doc.setFontSize(8.5);
      doc.text(item.label + ':', margin + 2, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...C.text);
      doc.text(item.value, margin + 28, y);
      y += 5;
    });

    return y + 3;
  };

  // ===== THANK YOU SECTION =====
  const addThankYou = (y) => {
    if (y > pageHeight - 35) {
      doc.addPage();
      y = margin;
    }

    // Decorative box
    doc.setFillColor(...C.blueLight);
    doc.roundedRect(margin, y, pageWidth - (2 * margin), 22, 3, 3, 'F');
    doc.setDrawColor(...C.blue);
    doc.setLineWidth(0.5);
    doc.roundedRect(margin, y, pageWidth - (2 * margin), 22, 3, 3, 'S');

    // Decorative stars
    doc.setFontSize(9);
    doc.setTextColor(...C.blue);
    doc.text('✦', margin + 5, y + 7);
    doc.text('✦', pageWidth - margin - 8, y + 7);

    // Thank you title
    doc.setTextColor(...C.navy);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('THANK YOU', pageWidth / 2, y + 8, { align: 'center' });

    // Message
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(...C.text);
    const message = 'Thank you for reviewing my qualifications. I am eager to apply my skills and dedication to a challenging role and contribute to an innovative team.';
    const wrapped = doc.splitTextToSize(message, pageWidth - (2 * margin) - 15);
    wrapped.forEach((line, idx) => {
      doc.text(line, pageWidth / 2, y + 13 + (idx * 3.5), { align: 'center' });
    });

    return y + 28;
  };

  // ===== FOOTER =====
  const addFooter = () => {
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);

      // Footer accent line
      doc.setDrawColor(...C.blue);
      doc.setLineWidth(0.4);
      doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

      doc.setFontSize(7);
      doc.setTextColor(...C.grayLight);
      doc.setFont('helvetica', 'normal');
      doc.text('Gebreslassie Dessie Agdew  |  Full Stack Software Engineer', margin, pageHeight - 8);
      doc.text('Page ' + i + ' of ' + pageCount, pageWidth - margin, pageHeight - 8, { align: 'right' });
    }
  };

  // ===== GENERATE PDF =====
  try {
    addHeader();
    yPosition = 85;

    yPosition = addSummary(yPosition);

    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition = addEducation(yPosition);

    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition = addSkills(yPosition);

    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition = addProjects(yPosition);

    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition = addStrengths(yPosition);

    if (yPosition > pageHeight - 45) {
      doc.addPage();
      yPosition = margin;
    }

    yPosition = addExtras(yPosition);

    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = margin;
    }

    addThankYou(yPosition);
    addFooter();

    const fileName = 'Gebreslassie_Dessie_CV.pdf';
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
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = margin;

  // Header
  doc.setFillColor(25, 42, 86);
  doc.rect(0, 0, pageWidth, 45, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('GEBRESLASSIE DESSIE AGDEW', margin, 20);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(52, 152, 219);
  doc.text('Full Stack Software Engineer', margin, 28);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text('gebreslassiedessie@gmail.com  |  +251 902 067 211  |  Addis Ababa, Ethiopia', margin, 38);

  y = 55;

  // Summary
  doc.setTextColor(25, 42, 86);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Professional Summary', margin, y);
  y += 6;

  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const summary = 'High-achieving Full Stack Software Engineer with 3.74/4.00 CGPA from Mizan-Tepi University. Specialized in full-stack web development with expertise in React.js, Next.js, Node.js, Express.js, TypeScript, and Tailwind CSS.';
  const wrappedSummary = doc.splitTextToSize(summary, pageWidth - (2 * margin));
  wrappedSummary.forEach(line => {
    doc.text(line, margin, y);
    y += 4.5;
  });

  y += 6;

  // Education
  doc.setTextColor(25, 42, 86);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Education', margin, y);
  y += 6;

  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('B.Sc. in Software Engineering - Mizan-Tepi University', margin, y);
  y += 4.5;
  doc.setTextColor(39, 174, 96);
  doc.setFont('helvetica', 'bold');
  doc.text('• CGPA: 3.74/4.00 (Graduated with Distinction)', margin, y);
  y += 8;

  // Platform Stats
  doc.setTextColor(25, 42, 86);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Platform Expertise', margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text('Mobile: React Native, Flutter', margin, y);
  y += 5;
  doc.text('Desktop: Electron, .NET MAUI', margin, y);
  y += 5;
  doc.text('Web: React, Next.js, Node.js', margin, y);

  doc.save('Gebreslassie_Dessie.pdf');
};