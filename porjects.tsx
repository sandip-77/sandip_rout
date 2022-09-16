import readn from './public/readn-poster.png';
import Grab from './public/images/grab-a-snak.png';
import Apex from './public/images/apex.png';
import GAS from './public/images/gas.jpeg'

const Projects = [
    {
        id:1,
        mainPoster:Grab,
        title:"Grab A Snak -  An extended ecommerce application",
        pageLink:'grab-a-snak',
        urls:{
            prodURL:"",
            uiURL:"http://grab-a-snak-develop.s3-website-us-east-1.amazonaws.com/"
        },
        description:{
            name:"Grab a snak",
            details:"Grab-a-snak is a ecommerce application having two types of users-subscribers and customers. <br/> Subscriber will list his items online through subscriber portal and customers will be able to buy items by scanning the QR code.",
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
            details:"",
            mainImage:GAS,
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
            prodURL:"https://apex-dev-ui.netlify.app/"
        }
    }
]



export default Projects;
