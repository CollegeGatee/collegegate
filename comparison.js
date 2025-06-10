const collegeData = [
        {
            id: 1,
            name: 'UPES Dehradun',
            logo: '🏛️',
            tuitionFee: 200000,
            hostelFee: 120000,
            examFee: 5000,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 335000,
            courses: ['B.Tech', 'BBA', 'LLB', 'MBA']
        },
        {
            id: 2,
            name: 'Jigyasa University, Dehradun',
            logo: '🎓',
            tuitionFee: 150000,
            hostelFee: 90000,
            examFee: 4000,
            libraryFee: 8000,
            scholarshipAvailable: true,
            totalFee: 252000,
            courses: ['B.Tech', 'BCA', 'B.Sc', 'M.Tech']
        },
        {
            id: 3,
            name: 'Dev Bhoomi University, Dehradun',
            logo: '🏫',
            tuitionFee: 180000,
            hostelFee: 100000,
            examFee: 4500,
            libraryFee: 9000,
            scholarshipAvailable: true,
            totalFee: 293500,
            courses: ['B.Tech', 'BBA', 'B.Pharm', 'MBA']
        },
        {
            id: 4,
            name: 'GRD Institute, Dehradun',
            logo: '🏢',
            tuitionFee: 140000,
            hostelFee: 85000,
            examFee: 3500,
            libraryFee: 7000,
            scholarshipAvailable: true,
            totalFee: 235500,
            courses: ['B.Tech', 'MCA', 'BCA', 'B.Sc IT']
        },
        {
            id: 5,
            name: 'PCSTI University, Dehradun',
            logo: '🏛️',
            tuitionFee: 190000,
            hostelFee: 110000,
            examFee: 5000,
            libraryFee: 9500,
            scholarshipAvailable: true,
            totalFee: 314500,
            courses: ['B.Tech', 'BBA', 'B.Arch', 'M.Tech']
        },
        {
            id: 6,
            name: 'Graphic Era University, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 7,
            name: 'COER University, Roorkee',
            logo: '⛪️',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 8,
            name: 'Sai Group of Institutions, Dehradun',
            logo: '',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 9,
            name: 'Uttaranchal University, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 10,
            name: 'Maya Devi Institute of Technology, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 11,
            name: 'BFIITM, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 12,
            name: 'JBIT, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 13,
            name: 'Ras Bihari Bose Subharti University, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        }
    ];

    // Format currency
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    }

    // Get fee class based on amount
    function getFeeClass(fee, colleges) {
        const maxFee = Math.max(...colleges.map(c => c.totalFee));
        const minFee = Math.min(...colleges.map(c => c.totalFee));
        
        if (fee === minFee) return 'fees-low';
        if (fee === maxFee) return 'fees-high';
        
        const range = maxFee - minFee;
        const position = (fee - minFee) / range;
        
        if (position < 0.33) return 'fees-low';
        if (position < 0.66) return 'fees-medium';
        return 'fees-high';
    }

    // Variables to track state
    let sortConfig = {
        key: 'totalFee',
        direction: 'ascending'
    };
    let searchTerm = '';
    let selectedCourseFilter = '';
    let compareColleges = {};

    // DOM elements
    const collegeTableBody = document.getElementById('collegeTableBody');
    const noResultsElement = document.getElementById('noResults');
    const collegeSearchInput = document.getElementById('collegeSearch');
    const courseFilterSelect = document.getElementById('courseFilter');
    const compareBtn = document.getElementById('compareBtn');
    const selectedCountBadge = document.getElementById('selectedCount');
    const comparisonModal = document.getElementById('comparisonModal');
    const closeModalBtn = document.getElementById('closeModal');
    const collegeHeaderCompare = document.getElementById('collegeHeaderCompare');
    const feeComparisonTableBody = document.getElementById('feeComparisonTableBody');
    const coursesGrid = document.getElementById('coursesGrid');
    const college1NameHeader = document.getElementById('college1NameHeader');
    const college2NameHeader = document.getElementById('college2NameHeader');

    // Sort headers
    const sortableHeaders = document.querySelectorAll('th.sortable');

    // Function to render college table
    function renderCollegeTable() {
        // Filter colleges
        let filteredColleges = [...collegeData];
        
        if (searchTerm) {
            filteredColleges = filteredColleges.filter(college => 
                college.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        if (selectedCourseFilter) {
            filteredColleges = filteredColleges.filter(college => 
                college.courses.includes(selectedCourseFilter)
            );
        }
        
        // Sort colleges
        filteredColleges.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        
        // Clear table body
        collegeTableBody.innerHTML = '';
        
        // Show/hide no results message
        if (filteredColleges.length === 0) {
            noResultsElement.style.display = 'block';
        } else {
            noResultsElement.style.display = 'none';
        }
        
        // Create table rows
        filteredColleges.forEach(college => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>
                    <div class="college-info">
                        <input 
                            type="checkbox" 
                            id="compare-${college.id}" 
                            ${compareColleges[college.id] ? 'checked' : ''} 
                            ${!compareColleges[college.id] && Object.values(compareColleges).filter(Boolean).length >= 4 ? 'disabled' : ''}
                            style="margin-right: 0.75rem;"
                        >
                        <div class="college-logo">${college.logo}</div>
                        <div>
                            <div class="college-name">${college.name}</div>
                            ${college.scholarshipAvailable ? 
                                `<div class="badge-green">Scholarships Available</div>` : ''}
                        </div>
                    </div>
                </td>
                <td>${formatCurrency(college.tuitionFee)}<span style="color: var(--text-muted);">/year</span></td>
                <td>${formatCurrency(college.hostelFee)}<span style="color: var(--text-muted);">/year</span></td>
                <td>
                    <div class="fees-info" style="position: relative;">
                        View Details ℹ️
                        <div class="fees-tooltip">
                            <div class="tooltip-item">
                                <span>Exam Fee:</span>
                                <span>${formatCurrency(college.examFee)}</span>
                            </div>
                            <div class="tooltip-item">
                                <span>Library Fee:</span>
                                <span>${formatCurrency(college.libraryFee)}</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="${getFeeClass(college.totalFee, filteredColleges)}">
                        ${formatCurrency(college.totalFee)}<span style="color: var(--text-muted); font-weight: normal;">/year</span>
                    </div>
                </td>
            `;
            
            collegeTableBody.appendChild(row);
            
            // Add checkbox event listener
            const checkbox = row.querySelector(`#compare-${college.id}`);
            checkbox.addEventListener('change', () => {
                compareColleges[college.id] = checkbox.checked;
                updateCompareButton();
                renderCollegeTable(); // Re-render to update disabled states
            });
        });
    }

    // Update compare button state
    function updateCompareButton() {
        const selectedCount = Object.values(compareColleges).filter(Boolean).length;
        selectedCountBadge.textContent = `${selectedCount}/4`;
        
        if (selectedCount >= 2 && selectedCount <= 4) {
            compareBtn.disabled = false;
        } else {
            compareBtn.disabled = true;
        }
    }

    // Render comparison modal
    function renderComparisonModal() {
        // Get selected colleges
        const selectedCollegeIds = Object.entries(compareColleges)
            .filter(([_, selected]) => selected)
            .map(([id]) => parseInt(id));
        
        if (selectedCollegeIds.length < 2) return;
        
        const selectedColleges = selectedCollegeIds.map(id => collegeData.find(c => c.id === id));
        
        // Render college headers
        collegeHeaderCompare.innerHTML = selectedColleges.map(college => `
            <div class="college-header-item">
                <div class="college-header-logo">${college.logo}</div>
                <div>
                    <div class="college-header-name">${college.name}</div>
                    ${college.scholarshipAvailable ? 
                        `<div class="badge-green">Scholarships Available</div>` : ''}
                </div>
            </div>
        `).join('');
        
        // Update table headers
        const headerRow = document.querySelector('#feeComparisonTable thead tr');
        headerRow.innerHTML = `
            <th>Fee Type</th>
            ${selectedColleges.map(college => `<th>${college.name}</th>`).join('')}
            <th>Difference Range</th>
        `;
        
        // Render fee comparison table
        const feeTypes = ['tuitionFee', 'hostelFee', 'examFee', 'libraryFee', 'totalFee'];
        const feeLabels = {
            tuitionFee: 'Tuition Fee',
            hostelFee: 'Hostel Fee',
            examFee: 'Exam Fee',
            libraryFee: 'Library Fee',
            totalFee: 'Total Fee'
        };
        
        feeComparisonTableBody.innerHTML = feeTypes.map(feeType => {
            const fees = selectedColleges.map(college => college[feeType]);
            const minFee = Math.min(...fees);
            const maxFee = Math.max(...fees);
            const difference = maxFee - minFee;
            
            return `
                <tr ${feeType === 'totalFee' ? 'style="background-color: #f9fafb; font-weight: 600;"' : ''}>
                    <td>${feeLabels[feeType]}</td>
                    ${fees.map(fee => `
                        <td class="${fee === minFee ? 'fees-low' : fee === maxFee ? 'fees-high' : ''}">${formatCurrency(fee)}</td>
                    `).join('')}
                    <td>
                        <span class="fees-difference">
                            Range: ${formatCurrency(difference)}
                            (${((maxFee - minFee) / maxFee * 100).toFixed(1)}% variation)
                        </span>
                    </td>
                </tr>
            `;
        }).join('');
        
        // Render courses grid
        const allCourses = [...new Set(selectedColleges.flatMap(college => college.courses))].sort();
        
        coursesGrid.innerHTML = allCourses.map(course => `
            <div class="course-item">
                <span class="course-name">${course}</span>
                <div class="course-availability">
                    ${selectedColleges.map(college => `
                        <span class="${college.courses.includes(course) ? 'available' : 'not-available'}">
                            ${college.courses.includes(course) ? '✓' : '✗'}
                        </span>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
        // Render chart
        renderComparisonChart(selectedColleges);
        
        // Show modal
        comparisonModal.classList.add('active');
    }

    // Update chart rendering for multiple colleges
    function renderComparisonChart(colleges) {
        const ctx = document.getElementById('comparisonChart').getContext('2d');
        
        if (window.comparisonChartInstance) {
            window.comparisonChartInstance.destroy();
        }
        
        const labels = ['Tuition Fee', 'Hostel Fee', 'Exam Fee', 'Library Fee', 'Total Fee'];
        const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444'];
        
        const datasets = colleges.map((college, index) => ({
            label: college.name,
            data: [
                college.tuitionFee,
                college.hostelFee,
                college.examFee,
                college.libraryFee,
                college.totalFee
            ],
            backgroundColor: colors[index],
            borderColor: colors[index],
            borderWidth: 1
        }));
        
        window.comparisonChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + formatCurrency(context.raw);
                            }
                        }
                    }
                }
            }
        });
    }

    // Event listeners
    sortableHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const key = header.getAttribute('data-sort');
            if (sortConfig.key === key) {
                sortConfig.direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
            } else {
                sortConfig.key = key;
                sortConfig.direction = 'ascending';
            }
            renderCollegeTable();
        });
    });

    collegeSearchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderCollegeTable();
    });

    courseFilterSelect.addEventListener('change', (e) => {
        selectedCourseFilter = e.target.value;
        renderCollegeTable();
    });

    compareBtn.addEventListener('click', () => {
        renderComparisonModal();
    });

    closeModalBtn.addEventListener('click', () => {
        comparisonModal.classList.remove('active');
    });

    // Initial render
    renderCollegeTable();