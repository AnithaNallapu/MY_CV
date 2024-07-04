function showDescription(skill) {
    const descriptions = {
        html: "Proficient in using HTML to create and structure web content effectively; hands-on experience in developing responsive websites.",
        css: "Experienced in applying CSS for designing and styling web pages; worked on projects involving complex layouts and animations.",
        js: "Skilled in utilising JavaScript for dynamic and interactive web development; developed interactive web applications and enhanced user interfaces.",
        sql: "Adept in using SQL for database management, querying, and data manipulation; executed projects involving data extraction and report generation.",
        powerbi: "Experienced in using PowerBI for data visualisation and business intelligence reporting; created dashboards to support data-driven decision making.",
        tableau: "Skilled in Tableau for creating insightful and interactive data visualisations; worked on projects that presented complex data in an accessible format.",
        excel:"Proficient in Excel for data analysis, complex calculations, and creating detailed spreadsheets; handled projects involving financial modeling and data tracking.",
        python: "Familiar with the basics of Python for simple scripting and data manipulation; completed projects automating tasks and analyzing data sets."
    };

    const descriptionElement = document.getElementById('skill-description');
    descriptionElement.innerHTML = descriptions[skill];
}
