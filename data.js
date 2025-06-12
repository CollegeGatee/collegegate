// College data
colleges = [
  // Existing colleges
  {
    id: 1,
    name: "Graphic Era University",
    shortName: "GEU",
    type: "Private",
    rating: 4.6,
    state: "Uttarakhand",
    accreditation: "NAAC A+",
    location: "Dehradun, Uttarakhand",
    established: 1993,
    image: "assets/images/colleges/graphic-era/gallery/geu.jpeg",
    logoImg: "assets/images/colleges/graphic-era/gallery/logo.png",
    description: "Graphic Era University, founded by Prof. Kamal Ghanshala, started as a computer center in 1993 and evolved into a prestigious deemed university. Located in Clement Town, Dehradun, the 25-acre campus is bordered by Rajaji National Park and Clement Town Cantonment. The university holds NAAC A+ accreditation and ranks 52nd nationally in engineering (NIRF 2024).",
    facilities: ["Smart Classrooms", "Research Labs", "High-Speed Wi-Fi Campus", "World-Class Hostels", "Sports Complex", "Technology Business Incubator", "Multiple Cafeterias", "Indoor & Outdoor Auditoriums"],
    ranking: "Ranked #52 in the University Category by the NIRF 2024",
    website: "https://www.geu.ac.in/",
    contact: "+91 7060800800",
    courses: [
      // B.Tech Programs
      { name: "B.Tech in Computer Science and Engineering", duration: "4 Years", fees: 354730, specialization: "Core CSE" },
      { name: "B.Tech in CSE", duration: "4 Years", fees: 354730, specialization: "Artificial Intelligence & Machine Learning" },
      { name: "B.Tech in CSE", duration: "4 Years", fees: 354730, specialization: "Data Science" },
      { name: "B.Tech in CSE", duration: "4 Years", fees: 354730, specialization: "Cloud Computing & Virtualization" },
      { name: "B.Tech in CSE", duration: "4 Years", fees: 354730, specialization: "Cyber Security & Forensics" },
      { name: "B.Tech in Electronics & Communication", duration: "4 Years", fees: 354730 },
      { name: "B.Tech in Mechanical Engineering", duration: "4 Years", fees: 354730 },
      { name: "B.Tech in Civil Engineering", duration: "4 Years", fees: 354730 },
      { name: "B.Tech in Electrical Engineering", duration: "4 Years", fees: 354730 },
      
      // Management Programs
      { name: "BBA", duration: "3 Years", fees: 95000, specialization: "General" },
      { name: "BBA", duration: "3 Years", fees: 95000, specialization: "Digital Marketing" },
      { name: "BBA", duration: "3 Years", fees: 95000, specialization: "Business Analytics" },
      { name: "MBA", duration: "2 Years", fees: 180000, specialization: "Marketing" },
      { name: "MBA", duration: "2 Years", fees: 180000, specialization: "Finance" },
      { name: "MBA", duration: "2 Years", fees: 180000, specialization: "HR" },
      { name: "MBA", duration: "2 Years", fees: 180000, specialization: "Business Analytics" },
      
      // Computer Applications
      { name: "BCA", duration: "3 Years", fees: 85000 },
      { name: "MCA", duration: "2 Years", fees: 120000 },
      
      // Science Programs
      { name: "B.Sc", duration: "3 Years", fees: 75000, specialization: "Physics" },
      { name: "B.Sc", duration: "3 Years", fees: 75000, specialization: "Chemistry" },
      { name: "B.Sc", duration: "3 Years", fees: 75000, specialization: "Mathematics" },
      { name: "B.Sc", duration: "3 Years", fees: 85000, specialization: "Agriculture" },
      { name: "B.Sc", duration: "3 Years", fees: 85000, specialization: "Biotechnology" },
      
      // Commerce & Arts
      { name: "B.Com", duration: "3 Years", fees: 75000, specialization: "Honours" },
      { name: "B.Com", duration: "3 Years", fees: 65000, specialization: "Regular" },
      { name: "BA", duration: "3 Years", fees: 65000, specialization: "Economics" },
      { name: "BA", duration: "3 Years", fees: 65000, specialization: "English" },
      
      // Law Programs
      { name: "BBA-LLB", duration: "5 Years", fees: 125000, specialization: "Integrated" },
      { name: "LLB", duration: "3 Years", fees: 95000 },
      
      // Research Programs
      { name: "Ph.D", duration: "3-5 Years", fees: 150000, specialization: "Various Disciplines" },
      
      // M.Tech Programs
      { name: "M.Tech in CSE", duration: "2 Years", fees: 120000 },
      { name: "M.Tech in Data Science", duration: "2 Years", fees: 120000 },
      { name: "M.Tech in AI & ML", duration: "2 Years", fees: 120000 },
      { name: "M.Tech in ECE", duration: "2 Years", fees: 120000 },
      { name: "M.Tech in Mechanical", duration: "2 Years", fees: 120000 }
    ],
    photoGallery: {
      featured:  {
        image: "assets/images/colleges/graphic-era/gallery/campus.webp",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/graphic-era/gallery/library.jpg",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/graphic-era/gallery/lab.webp",
          title: "Computer Lab"
        },
        {
          image: "assets/images/colleges/graphic-era/gallery/auditorium.jpeg",
          title: "Auditorium"
        },
        {
          image: "assets/images/colleges/graphic-era/gallery/sports.jpg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/graphic-era/gallery/cafeteria.jpeg",
          title: "Student Cafeteria"
        },
        {
          image: "assets/images/colleges/graphic-era/gallery/classroom.jpg",
          title: "Classroom"
        },
        {
          image: "assets/images/colleges/graphic-era/gallery/event.webp",
          title: "Events"
        },
        {
          image: "assets/images/colleges/graphic-era/gallery/student.jpg",
          title: "Events"
        }
      ]
    }
  },
  {
    id: 2,
    name: "COER University",
    shortName: "COER",
    type: "Private",
    rating: 4.5,
    state: "Uttarakhand",
    accreditation: "NAAC B+",
    location: "Roorkee, Uttarakhand",
    established: 1998,
    image: "assets/images/colleges/coer/gallery/coer.webp",
    logoImg: "assets/images/colleges/coer/gallery/coerlogo.png",
    description: "College of Engineering Roorkee (COER) is a premier engineering institution established in 1998. Located in Roorkee, it offers high-quality technical education with state-of-the-art infrastructure and experienced faculty. The university focuses on holistic development through industry collaborations, research opportunities, and practical training.",
    facilities: ["Smart Classrooms", "Research Labs", "High-Speed Wi-Fi Campus", "World-Class Hostels", "Sports Complex", "Technology Business Incubator", "Multiple Cafeterias", "Indoor & Outdoor Auditoriums"],
    ranking: "Ranked #24 in the University Category by the NIRF 2024 ",
    website: "https://www.coer.ac.in/",
    contact: "+91 133 263 0000",
    courses: [
      // B.Tech Programs
      { name: "B.Tech in Computer Science and Engineering", duration: "4 Years", fees: 168150, specialization: "Core CSE" },
      { name: "B.Tech in Mechanical Engineering", duration: "4 Years", fees: 168150 },
      { name: "B.Tech in Electronics & Communication", duration: "4 Years", fees: 168150 },
      { name: "B.Tech in Civil Engineering", duration: "4 Years", fees: 168150 },
      { name: "B.Tech in Electrical Engineering", duration: "4 Years", fees: 168150 },
      { name: "B.Tech in Applied Electronics & Instrumentation", duration: "4 Years", fees: 168150 },
      { name: "B.Tech in Electronics & Telecommunication", duration: "4 Years", fees: 168150 },
      { name: "B.Tech in Information Technology", duration: "4 Years", fees: 168150 },
      { name: "B.Tech in Plastic & Polymer Engineering", duration: "4 Years", fees: 168150 },
    //diploma
    {name: "Diploma in Computer Science and Engineering", duration: "3 Years", fees: 76000},

    //post graduate
    {name: "M.Tech in Computer Science and Engineering", duration: "2 Years", fees: 125900},
    {name: "M.Tech in Mechanical Engineering", duration: "2 Years", fees: 125900},

    //mba
    {name: "MBA", duration: "2 Years", fees: 130000},

    //bsc
    {name: "B.Sc in Agriculture", duration: "3 Years", fees: 147000},
    {name: "B.Sc in Nursing", duration: "3 Years", fees: 147000},
    
    ],
    photoGallery: {
      featured:   {
        image: "assets/images/colleges/coer/gallery/campus.avif",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/coer/gallery/library.webp",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/coer/gallery/lab.webp",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/coer/gallery/sports.jpeg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/coer/gallery/auditorium.webp",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/coer/gallery/cafeteria.webp",
          title: "Student Cafeteria"
        }
      ]
    }
  },
  {
    id: 3,
    name: "University of Petroleum and Energy Studies",
    shortName: "UPES",
    type: "Private",
    rating: 4.5,
    state: "Uttarakhand",
    affiliation: "UGC",
    location: "Prem nagar, Dehradun, Uttarakhand",
    established: 2003,
    image: "assets/images/colleges/upes/gallery/upes.jpg",
    logoImg: "assets/images/colleges/upes/gallery/upeslogo.png",
    description: "UPES is a private university located in Dehradun, Uttarakhand, India. Tucked away in the hills of misty Dehradun, the serene, quiet, campuses at Bidholi and Kandoli are ideal places for a truly immersive learning experience. UPES is known for its specialized programs in energy, petroleum, and other sectors.",
    facilities: ["Modern Library", "Sports Complex", "Advanced Labs", "Cafeteria", "Hostels", "Wi-Fi Campus"],
    ranking: "Ranked #1 in Petroleum Engineering by NIRF 2023",
    website: "https://www.upes.ac.in/",
    contact: "+91 135 277 6055",
    courses: [
      { name: "B.Tech(niotech) ", duration: "4 Years", fees: 160000, specialization: "Core CSE" },
      { name: "B.Tech(petroleum) ", duration: "4 Years", fees: 160000, specialization: "Petroleum Engineering" },
      { name: "B.Tech(chemical) ", duration: "4 Years", fees: 160000, specialization: "Chemical Engineering" },
      { name: "BBA", duration: "3 Years", fees: 120000, specialization: "General" },
      { name: "MBA", duration: "2 Years", fees: 180000, seats: 60 }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/upes/gallery/campus.jpeg",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/upes/gallery/library.avif",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/upes/gallery/lab.webp",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/upes/gallery/sports.jpeg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/upes/gallery/auditorium.jpeg",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/upes/gallery/campus.avif",
          title: "Campus View"
        }
      ]
    }
  },
  {
    id: 4,
    name: "Dev Bhoomi Group of Institutions",
    shortName: "DBGI",
    type: "Private",
    rating: 4.2,
    state: "Uttarakhand",
    accreditation: "NAAC B++",
    location: "Dehradun, Uttarakhand",
    established: 2005,
    image: "assets/images/colleges/dbgi/gallery/dev.jpeg",
    logoImg: "assets/images/colleges/dbgi/gallery/devbhoomilogo.png",
    description: "Dev Bhoomi Group of Institutions (DBGI) was established in 2005 as a leading educational institution in Uttarakhand. The campus features modern infrastructure, advanced laboratories, and experienced faculty members. DBGI is known for its industry-focused curriculum, placement assistance, and emphasis on practical learning.",
    facilities: ["Digital Library", "Indoor Stadium", "Hostels", "Transport", "Medical Facility"],
    ranking: "Ranked among Top 10 Private Colleges in Uttarakhand",
    website: "https://www.dbgidoon.ac.in/",
    contact: "+91 1352 773030",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 89000, specialization: "Computer Science and Engineering" },
      { name: "MBA", duration: "2 Years", fees: 95000, specialization: "General" },
      { name: "BCA", duration: "3 Years", fees: 65000, specialization: "Computer Application" },
      { name: "Dimploma", duration: "2 Years", fees: 65000, specialization: "Computer Application" },
      { name: "B.Pharm", duration: "4 Years", fees: 65000, specialization: "Pharmacy" }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/dbgi/gallery/campus.webp",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/dbgi/gallery/library.webp",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/dbgi/gallery/lab.webp",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/dbgi/gallery/sports.webp",
          title: "Sports"
        },
        {
          image: "assets/images/colleges/dbgi/gallery/auditorium.jpeg",
          title: "Auditorium"
        },
        {
          image: "assets/images/colleges/dbgi/gallery/cafeteria.webp",
          title: "Student Cafeteria"
        }
      ]
    }
  },
  {
    id: 5,
    name: "Sai Group of Institutions",
    shortName: "SGI",
    type: "Private",
    rating: 4.1,
    state: "Uttarakhand",
    accreditation: "NAAC B+",
    location: "Dehradun, Uttarakhand",
    established: 2003,
    image: "assets/images/colleges/sgi/gallery/sai.jpg",
    logoImg: "assets/images/colleges/sgi/gallery/Sailogo.png",
    description: "Sai Group of Institutions was established in 2003 as Sai Institute of Paramedical and Allied Sciences by Mr. Harish Arora and Mrs. Rani Arora. The institute has grown into a comprehensive educational group offering programs in paramedical sciences, nursing, management, agriculture, and more.",
    facilities: ["Modern Labs", "Hospital Exposure", "Library", "Hostel", "Transport", "Research Center", "Cafeteria"],
    ranking: "Leading Healthcare Education Institute in Uttarakhand",
    website: "https://www.sipasddn.com/",
    contact: "+91 8193936666",
    courses: [
      { name: "Paramedical Courses", duration: "3-4 Years", fees: 80000, specialization: "Paramedical" },
      { name: "Nursing Programs", duration: "2-4 Years", fees: 90000, specialization: "Nursing" },
      { name: "B.Sc Nursing", duration: "4 Years", fees: 160000, specialization: "Nursing" },
      { name: "BBA", duration: "3 Years", fees: 49000, specialization: "Business Administration" },
      { name: "BCA", duration: "3 Years", fees: 49000, specialization: "Computer Application" },
      { name: "B.Com(simple/hons)", duration: "3 Years", fees: 49000, specialization: "Commerce" }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/sgi/gallery/campus.jpg",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/sgi/gallery/library.jpg",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/sgi/gallery/lab.jpg",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/sgi/gallery/sports.jpg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/sgi/gallery/auditorium.jpg",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/sgi/gallery/cafeteria.jpg",
          title: "Student Cafeteria"
        }
      ]
    }
  },

  // New colleges
  {
    id: 6,
    name: "Jigyasa University",
    shortName: "JU",
    type: "Private",
    rating: 4.3,
    state: "Uttarakhand",
    accreditation: "UGC Recognized",
    location: "Dehradun, Uttarakhand",
    established: 2003,
    image: "assets/images/colleges/jigyasa/gallery/jigyasa.jpg",
    logoImg: "assets/images/colleges/jigyasa/gallery/jigyasalogo.png",
    description: "Jigyasa University (formerly Himgiri Zee University) was established in 2003 and is recognized by UGC. Located on a 50-acre campus in Dehradun, it offers diverse programs across science, technology, education, journalism, hospitality, legal studies, and more. The university emphasizes practical learning, research opportunities, and holistic development with state-of-the-art facilities.",
    facilities: ["Smart Classrooms", "Research Labs", "Wi-Fi Campus", "Hostels", "Sports Complex", "Library", "Cafeteria"],
    ranking: "Emerging Research University in Uttarakhand",
    website: "https://www.jigyasauniversity.edu.in/",
    contact: "+91 18001804181",
    courses: [
      { name: "BBA in Fintech & Business Analytics", duration: "3 Years", fees: 110000, specialization: "Business Administration" },
      { name: "MBA in Fintech & Business Analytics", duration: "2 Years", fees: 170000, specialization: "Business Administration" },
      { name: "BA in Journalism & Mass Communication", duration: "3 Years", fees: 100000, specialization: "Journalism" },
      { name: "MA in Journalism & Mass Communication", duration: "2 Years", fees: 80000, specialization: "Journalism" },
      { name: "B.Tech with specialization", duration: "4 Years", fees: 150000, specialization: "Computer Science and Engineering" },
      { name: "M.Tech with specialization", duration: "2 Years", fees: 100000, specialization: "Computer Science and Engineering" },
      { name: "B.Ed", duration: "2 Years", fees: 110000, specialization: "Education" }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/jigyasa/gallery/campus.jpg",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/jigyasa/gallery/library.jpg",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/jigyasa/gallery/lab.jpg",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/upes/gallery/sports.jpg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/jigyasa/gallery/auditorium.jpg",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/jigyasa/gallery/cafeteria.jpg",
          title: "Student Cafeteria"
        }
      ]
    }
  },
  {
    id: 7,
    name: "GRD Institute of Technology and Management",
    shortName: "GRDIM",
    type: "Private",
    rating: 3.9,
    state: "Uttarakhand",
    accreditation: "NAAC B",
    location: "Dehradun, Uttarakhand",
    established: 2003,
    image: "assets/images/colleges/grd/gallery/grd.jpg",
    logoImg: "assets/images/colleges/grd/gallery/grdlogo.png",
    description: "GRD Institute of Technology and Management offers industry-oriented courses with a focus on practical skills development.",
    facilities: ["Library", "Labs", "Workshops", "Cafeteria", "Placement Cell"],
    ranking: "Top Technology Institute in Dehradun",
    website: "https://www.grdim.edu.in/",
    contact: "+91 8765432109",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 85000, specialization: "Computer Science and Engineering" },
      { name: "Diploma", duration: "3 Years", fees: 45000, specialization: "Computer Science and Engineering" },
      { name: "B.Sc in agriculture / Physiotherapy / Medical Laboratory Technolog", duration: "3 Years", fees: 60000, specialization: "Agriculture" },
      { name: "B.Sc in agriculture", duration: "3 Years", fees: 60000, specialization: "Agriculture" }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/grd/gallery/campus.jpg",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/grd/gallery/library.jpg",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/grd/gallery/lab.jpg",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/grd/gallery/sports.jpg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/grd/gallery/auditorium.jpg",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/grd/gallery/cafeteria.jpg",
          title: "Student Cafeteria"
        }
      ]
    }
  },
  {
    id: 8,
    name: "PCSTI – HOTEL & CRUISE MANAGEMENT COURSE",
    shortName: "PCSTI",
    type: "Private",
    rating: 4.0,
    state: "Uttarakhand",
    accreditation: "Industry Recognized",
    location: "Dehradun, Uttarakhand",
    established: 2009,
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logoImg: "assets/images/colleges/pcsti/gallery/pcstilogo.png",
    description: "PCSTI specializes in hospitality education with a focus on hotel and cruise management, offering industry i nternships and placements.",
    facilities: ["Training Kitchen", "Mock Cruise Setup", "Hospitality Lab", "Placement Cell", "Industry Visits"],
    ranking: "Leading Hospitality Training Institute in North India",
    website: "https://www.pcsti.edu.in/",
    contact: "+91 7654321098",
    courses: [
      { name: "Hotel Management", duration: "3 Years", fees: 120000 },
      { name: "Cruise Management", duration: "2 Years", fees: 150000 },
      { name: "Culinary Arts", duration: "1.5 Years", fees: 95000 }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/pcsti/gallery/campus.jpg",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/pcsti/gallery/library.jpg",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/pcsti/gallery/lab.jpg",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/pcsti/gallery/sports.jpg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/pcsti/gallery/auditorium.jpg",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/pcsti/gallery/cafeteria.jpg",
          title: "Student Cafeteria"
        }
      ]
    }
  },
  {
    id: 9,
    name: "Uttaranchal University",
    shortName: "UU",
    type: "Private",
    rating: 4.3,
    state: "Uttarakhand",
    accreditation: "NAAC A",
    location: "Dehradun, Uttarakhand",
    established: 2013,
    image: "assets/images/colleges/uu/gallery/uttaranchal.jpg",
    logoImg: "assets/images/colleges/uu/gallery/uttaranchallogo.png",
    description: "Uttaranchal University offers a wide range of courses across various disciplines with state-of-the-art infrastructure.",
    facilities: ["Central Library", "Labs", "Hostels", "Sports Facilities", "Cafeteria"],
    ranking: "Top 5 Universities in Uttarakhand",
    website: "https://uttaranchaluniversity.ac.in/",
    contact: "+91 7088111000",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 110000, specialization: "Computer Science and Engineering" },
      { name: "LLB", duration: "3 Years", fees: 85000, specialization: "Law" },
      { name: "B.Pharm", duration: "4 Years", fees: 95000, specialization: "Pharmacy" }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/uu/gallery/campus.jpg",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/uu/gallery/library.jpg",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/uu/gallery/lab.jpg",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/uu/gallery/sports.jpg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/uu/gallery/auditorium.jpg",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/uu/gallery/cafeteria.jpg",
          title: "Student Cafeteria"
        }
      ]
    }
  },
  {
    id: 10,
    name: "Maya Devi University",
    shortName: "MDU",
    type: "Private",
    rating: 3.8,
    state: "Uttarakhand",
    accreditation: "NAAC B",
    location: "Dehradun, Uttarakhand",
    established: 2019,
    image: "assets/images/colleges/maya/gallery/maya.webp",
    logoImg: "assets/images/colleges/maya/gallery/mayalogo.png",
    description: "Maya Devi University is an emerging institution focused on providing quality education with an emphasis on holistic development.",
    facilities: ["Digital Library", "Computer Labs", "Hostels", "Auditorium", "Sports Ground"],
    ranking: "Emerging University in Uttarakhand",
    website: "https://www.mayadeviinstitute.edu.in/",
    contact: "+91 6543210987",
    courses: [
      { name: "BBA", duration: "3 Years", fees: 70000, specialization: "Business Administration" },
      { name: "B.Sc", duration: "3 Years", fees: 55000, specialization: "Science" },
      { name: "B.Ed", duration: "2 Years", fees: 60000, specialization: "Education" }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/maya/gallery/campus.jpg",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/maya/gallery/library.jpg",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/maya/gallery/lab.jpg",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/maya/gallery/sports.jpg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/maya/gallery/auditorium.jpg",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/maya/gallery/cafeteria.jpg",
          title: "Student Cafeteria"
        }
      ]
    }
  },
  {
    id: 11,
    name: "BFIT Group of Institutions",
    shortName: "BFIT",
    type: "Private",
    rating: 4.1,
    state: "Uttarakhand",
    accreditation: "NAAC B+",
    location: "Dehradun, Uttarakhand",
    established: 2000,
    image: "assets/images/colleges/bfit/gallery/bfit-dehradun.jpg",
    logoImg: "assets/images/colleges/bfit/gallery/bfitlogo.png",
    description: "BFIT Group of Institutions offers technical and professional courses with a focus on practical training and industry readiness.",
    facilities: ["Labs", "Library", "Workshops", "Hostels", "Placement Cell"],
    ranking: "Top Technical Institute in Dehradun",
    website: "https://www.bfitdoon.com/",
    contact: "+91 9412057134",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 80000, specialization: "Computer Science and Engineering" },
      { name: "MCA", duration: "2 Years", fees: 70000, specialization: "Computer Application" },
      { name: "Polytechnic", duration: "3 Years", fees: 45000, specialization: "Computer Science and Engineering" }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/bfit/gallery/campus.jpg",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/bfit/gallery/library.jpg",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/bfit/gallery/lab.jpg",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/bfit/gallery/sports.jpg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/bfit/gallery/auditorium.jpg",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/bfit/gallery/cafeteria.jpg",
          title: "Student Cafeteria"
        }
      ]
    }
  },
  {
    id: 12,
    name: "JB Institute of Technology",
    shortName: "JBIT",
    type: "Private",
    rating: 3.9,
    state: "Uttarakhand",
    accreditation: "NAAC B",
    location: "Dehradun, Uttarakhand",
    established: 2007,
    image: "assets/images/colleges/jbit/gallery/jbit.jpg",
    logoImg: "assets/images/colleges/jbit/gallery/jbitlogo.jpg",
    description: "JB Institute of Technology offers technical education with a focus on innovation, entrepreneurship, and industry collaboration.",
    facilities: ["Technical Labs", "Innovation Hub", "Library", "Hostels", "Sports Facilities"],
    ranking: "Recognized Technical Institute in Uttarakhand",
    website: "https://www.jbit.edu.in/",
    contact: "+91 5432109876",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 75000, specialization: "Computer Science and Engineering" },
      { name: "Diploma", duration: "3 Years", fees: 40000, specialization: "Computer Science and Engineering" },
      { name: "M.Tech", duration: "2 Years", fees: 85000, specialization: "Computer Science and Engineering" }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/jbit/gallery/campus.jpg",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/jbit/gallery/library.jpg",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/jbit/gallery/lab.jpg",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/jbit/gallery/sports.jpg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/jbit/gallery/auditorium.jpg",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/jbit/gallery/cafeteria.jpg",
          title: "Student Cafeteria"
        }
      ]
    }
  },
  {
    id: 13,
    name: "Ras Bihari Bose Subharti University",
    shortName: "RBBSU",
    type: "Private",
    rating: 4.2,
    state: "Uttarakhand",
    accreditation: "NAAC B++",
    location: "Dehradun, Uttarakhand",
    established: 2016,
    image: "assets/images/colleges/rbbsu/gallery/subharti.jpg",
    logoImg: "assets/images/colleges/rbbsu/gallery/raslogo.png",
    description: "Ras Bihari Bose Subharti University offers diverse programs across various disciplines with a focus on research and innovation.",
    facilities: ["Research Centers", "Library", "Hostels", "Sports Complex", "Auditorium"],
    ranking: "Emerging Research University in Uttarakhand",
    website: "https://rbbsu.edu.in/",
    contact: "+91 7500012143",
    courses: [
      { name: "B.Tech CSE", duration: "4 Years", fees: 95000, specialization: "Computer Science and Engineering" },
      { name: "MBA", duration: "2 Years", fees: 85000, specialization: "Business Administration" },
      { name: "Medical", duration: "5 Years", fees: 550000, specialization: "Medical" }
    ],
    photoGallery: {
      featured: {
        image: "assets/images/colleges/rbbsu/gallery/campus.jpg",
        title: "Campus View"
      },
      images: [
        {
          image: "assets/images/colleges/rbbsu/gallery/library.jpg",
          title: "Central Library"
        },
        {
          image: "assets/images/colleges/rbbsu/gallery/lab.jpg",
          title: "Research Laboratory"
        },
        {
          image: "assets/images/colleges/rbbsu/gallery/sports.jpg",
          title: "Sports Complex"
        },
        {
          image: "assets/images/colleges/rbbsu/gallery/auditorium.jpg",
          title: "Main Auditorium"
        },
        {
          image: "assets/images/colleges/rbbsu/gallery/cafeteria.jpg",
          title: "Student Cafeteria"
        }
      ]
    }
  }
];