import nstarImage from "../../assets/nstar1.jpg";
import movieImage from "../../assets/irely_logo.jpg";

const PortfolioData = [
  {
    id: 1,
    title: "NSTAR",
    tools: [
      "HTML",
      "CSS/Bootstrap",
      "SQL Server",
      "JavaScript",
      "PHP"
    ],
    overview:
      "A web-based system developed to manage researchers, publications, patents, products, and other research-related information. The system also includes a web scraping tool that collects researcher publication information.",
    image: nstarImage,
  },

  {
    id: 2,
    title: "iRely Business Features",
    tools: [
      "Ext JS",
      "ASP.NET Web API",
      "RESTful API",
      "Entity Framework",
      "SQL Server"
    ],
    overview:
      "Manage and Create Business Features for ERP & CTRM Software System including Maintainance Screens, Report Screens and Screen Optimizations.",
    image: movieImage,
  },
];

export default PortfolioData;