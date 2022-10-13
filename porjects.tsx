import readn from './public/readn-poster.png';
import Grab from './public/images/grab-a-snak.png';
import Apex from './public/images/apex.png';
import GAS from './public/images/gas.jpeg'
import ApexMain from './public/images/apexMain.jpeg'

const Projects = [
    {
        id:1,
        mainPoster:Grab,
        title:"Grab A Snak -  An extended ecommerce application",
        pageLink:'grab-a-snak',
        urls:{
            prodURL:"",
            uiURL:"https://grab-a-snak-ui.netlify.app/"
        },
        description:{
            name:"Grab a snak",
            details:"<p>Grab-a-snak is a ecommerce application having two types of users-subscribers and customers. <br/> <br/>Subscriber will list his items online through subscriber portal and customers will be able to buy items by scanning the QR code.</p>",
            mainImage:GAS,
            techStacks:{
                frontend:["REACT JS", "TYPESCRIPT", "TAILWIND CSS"],
                backend:["NODE JS", "Express", "MONOGO DB", "STRIPE (for payment)"]
            }

        }
        
    },
    {
        id:3,
        mainPoster:Apex,
        title:"APEX - An informatics application",
        pageLink:'apex-informarics',
        urls:{
            prodURL:"",
            uiURL:"https://apex-dev-ui.netlify.app/"
        },
        description:{
            name:"Apex Informatics",
            details:"<p>Apex informatics is an projects management software being used in construction industry. <br/><br/> Users can add projects and assign tasks to other users and can track all the progress in the same app.</p>",
            mainImage:ApexMain,
            techStacks:{
                frontend:["REACT JS", "TYPESCRIPT", "TAILWIND CSS"],
                backend:["NODE JS", "Express", "MONOGO DB", "STRIPE (for payment)"]
            }

        }

    },
    {
        id:4,
        mainPoster:readn,
        title:"READN -  A Blog page on book review",
        pageLink:'readn',
        urls:{
            prodURL:"https://www.readn.org/"
        },
        description:{
            name:"Readn",
            details:"<p>Readn is a blog website in which I share my experience with the book I have read and try to summerise it into some short paragraphs.</p>",
            mainImage:readn,
            techStacks:{
                frontend:["NEXT JS", "TYPESCRIPT", "TAILWIND CSS"],
                backend:["NODE JS", "Express", "MONOGO DB"]
            }

        }
    }
]



export default Projects;
