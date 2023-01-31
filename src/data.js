import Tirukural from "./assets/portfolioImages/TirukuralAPI.jpg";
import covid19 from "./assets/portfolioImages/Covid19.jpg";
import Ecommerce from "./assets/portfolioImages/Ecommerce.jpg";

const ProjectsData = [
  {
    id: "tirukural",
    img: Tirukural,
    name: "Tirukural API",
    stack: ["< RESTful API >", "< Bootstrap v5 >", "< Javascript >"],
    live: "https://deluxe-douhua-cf5543.netlify.app/",
    source: "https://github.com/SathishSKA/Tirukkural-API-Task",
    description: "Responsive website which integrates with the REST API to pull specified Tirukural data. You can view the particular tirukural in tamil and english with meaning by entering the kural number in search box.",
  },
  {
    id: "covid19",
    img: covid19,
    name: "Covid-19 API",
    stack: ["< RESTful API >", "< Bootstrap v5 >", "< Javascript >"],
    live: "https://gregarious-llama-221818.netlify.app/",
    source: "https://github.com/SathishSKA/Covid19-IndiaAPI-Task",
    description: "This site delivers the covid-19 case details of all over india. Simply input your state code and get your detailed covid-19 information. ",
  },
  {
    id: "Ecommerce",
    img: Ecommerce,
    name: "Online Shopping APP",
    stack: ["< React.js >", "< Bootstrap v5 >", "< Javascript >"],
    live: "https://splendorous-buttercream-b74abc.netlify.app/",
    source: "https://github.com/SathishSKA/ShopApp-HomePage",
    description: "This is a simple ecommerce website. We can search, add and remove an item from the cart.",
  },
];

export default { ProjectsData };
