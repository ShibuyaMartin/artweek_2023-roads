import { SignData } from "./types"

const ParcelCountX:number = 20
const ParcelCountZ:number = 20
 
const signArr:SignData[] = [ 
  {index:0,id:"sothebys",hoverText:"Visit",teleportPos:"52,84",name:"Sotheby's",signModel:"",url:"",hasAudio:"",imgIdx:0,teaserText:"Sotheby’s surprises with multiple new art collaborations, including the first jewelry sculpture in the metaverse with Metagolden. Throughout Art Week, Sotheby’s will display its permanent collection"},
  {index:1,id:"portion",hoverText:"Visit",teleportPos:"61,67",name:"Portion",signModel:"models/signs/portion_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/portion-installation",hasAudio:"TRUE",imgIdx:1,teaserText:"The Portion NFT Marketplace presents TEMPERAMENTS immersive installations, created by The Martini Police, an art duo founded by @StillmanVisual & @iamyonson."},
  {index:2,id:"frida-kahl",hoverText:"Visit",teleportPos:"50,93",name:"Frida Kahlo",signModel:"",url:"",hasAudio:"",imgIdx:2,teaserText:"Frida Kahlo’s Family in collaboration with Ezel.Life, will launch the Frida Kahlo Family Red House, an immersive experience showcasing the first-half of Frida’s exceptional life."},
  {index:3,id:"rarible",hoverText:"Visit",teleportPos:"66,62",name:"Rarible",signModel:"models/signs/rarible_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/rarible-gallery",hasAudio:"TRUE",imgIdx:3,teaserText:"Multi disciplinary exhibition with AI, Digital Painting, Self Portrait, Photoshop Painting, and more."},
  {index:4,id:"opensea",hoverText:"Visit",teleportPos:"61,56",name:"OpenSea Infinite Gallery",signModel:"models/signs/opensea_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/open-sea-infinite",hasAudio:"TRUE",imgIdx:4,teaserText:"A fantastic infinite gallery in collaboration with OpenSea, showing for the first time an endless space of digital art, where art is limitless."},
  {index:5,id:"gossape-girl",hoverText:"Visit",teleportPos:"53,57",name:"APEHRODITE",signModel:"models/signs/apehrodite_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/apehrodite",hasAudio:"TRUE",imgIdx:5,teaserText:"An interactive installation triggered by the users behaviours. The Apehrodite sculpture is a celebration of women in NFTs and all things code."},
  {index:6,id:"gernic",hoverText:"Visit",teleportPos:"58,53",name:"gernic_primo",signModel:"models/signs/gernic_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/gernic-primo",hasAudio:"TRUE",imgIdx:6,teaserText:"The artist incorporated his background from muralism, focusing on expressions, feelings, something that connects to human emotions, and intentions."},
  {index:7,id:"metagolden",hoverText:"Visit",teleportPos:"53,66",name:"Metagolden",signModel:"models/signs/metagolden_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/metagolden",hasAudio:"TRUE",imgIdx:7,teaserText:"This interactive digital sculpture represents its physical counterpart- an 18k gold and emerald ring at auction in Sotheby’s ‘Art as Jewelry as Art’ collection, 9/24- 10/4, 2022 in NYC."},
  {index:8,id:"vvsvs",hoverText:"Visit",teleportPos:"54,64",name:"VVSVS",signModel:"models/signs/vvsvs_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/vvsvs",hasAudio:"TRUE",imgIdx:8,teaserText:"Computer graphics allows us to create constructions of shapes and complex sculptures as natural juxtapositions of artifacts."},
  {index:9,id:"makersplace",hoverText:"Visit",teleportPos:"55,62",name:"Makers Place",signModel:"models/signs/makersplace_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/makers-place",hasAudio:"TRUE",imgIdx:9,teaserText:"For this event’s edition, Makers Place showcase this incredible art-piece as an installation to immerse viewers in the Alan Bolton's universe."},
  {index:10,id:"ai-gallery",hoverText:"Visit",teleportPos:"66,57",name:"AI Gallery",signModel:"models/signs/ai_gallery_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/ai-pixelmind-art-gallery",hasAudio:"TRUE",imgIdx:10,teaserText:"This art piece was specially created by the Lastraum and Martin Shibuya with Pixelmind, pushing the boundaries by creating the first AI Art Gallery on our platform."},
  {index:11,id:"operator",hoverText:"Visit",teleportPos:"58,60",name:"Operator",signModel:"models/signs/operator_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/operator",hasAudio:"",imgIdx:11,teaserText:"The title of the series, Attempts, is rooted in the understanding that online privacy is nothing but a series of attempts. Each piece features an original score by Amon Tobin."},
  {index:12,id:"cashlabs",hoverText:"Visit",teleportPos:"73,15",name:"Cashlabs",signModel:"",url:"",hasAudio:"",imgIdx:12,teaserText:"Decentraland mainstay the “Cash Labs Gallery” will launch its permanent collection, featuring different shows on each of its four floors."},
  {index:13,id:"uxart",hoverText:"Visit",teleportPos:"69,69",name:"UXArt",signModel:"",url:"https://decentraland.org/blog/art-week-2022/ux-art-lab",hasAudio:"",imgIdx:30,teaserText:"Presents diverse, internationally recognized Argentinian masters from the 60´s that represent the best of kinetic and pop art in the region."},
  {index:14,id:"nicola-formichetti",hoverText:"Visit",teleportPos:"69,65",name:"Nicola Formichetti",signModel:"models/signs/nicola_formichetti_sign_artweek_2022.glb",url:"",hasAudio:"",imgIdx:14,teaserText:"This piece is part of a self love portrait series - represents not being scared of showing who the artist is inside and out."},
  
  {index:15,id:"proxi-maxi",hoverText:"Visit",teleportPos:"54,54",name:"Proxi-Maxi",signModel:"models/signs/proxi_maxi_sign_artweek_2022.glb",url:"",hasAudio:"TRUE",imgIdx:15,teaserText:"Created by the Decentraland Foundation members, Bence Vargas, Thomas Wright and Will Caine. Proxi Maxi is an art piece showcasing Newton's Third Law of Motion"},
  {index:16,id:"digital-panopticon",hoverText:"",teleportPos:"69,54",name:"Digital Panopticon",signModel:"models/signs/digital_panoptic_sign_artweek_2022.glb",url:"",hasAudio:"TRUE",imgIdx:16,teaserText:"Created by the Decentraland Foundation, the art piece in the Digital Panopticon was created by Juan Pablo Colasso, Martin Shibuya, and Dall-E-2."},
  {index:17,id:"marjan-moghadan",hoverText:"Visit",teleportPos:"54,59",name:"Marjan Moghadan",signModel:"models/signs/marjan_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/marjan-moghadan/",hasAudio:"",imgIdx:17,teaserText:"As Chronometric Sculpture, this Venus explores the possibilities for digital bodies in the metaverse, artistically"},
  {index:18,id:"iris-nebula",hoverText:"Visit",teleportPos:"67,68",name:"IRIS NEBULA",signModel:"models/signs/iris_nebula_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/iris-nebula",hasAudio:"TRUE",imgIdx:18,teaserText:"An art piece showcasing the first and the second of the Seven Hermetic principles: As above, so below; as below, so above is The Kybalion’s principle of correspondence."},
  {index:19,id:"tauromaquia",hoverText:"Visit",teleportPos:"57,57",name:"Tauromaquia",signModel:"models/signs/tauromaquia_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/tauromaquia",hasAudio:"TRUE",imgIdx:19,teaserText:"An immersive, interactive data sculpture exhibited in Decentraland inspired by a bull-fighting scene."},
  {index:20,id:"voltaire-district",hoverText:"Visit",teleportPos:"55,96",name:"Voltaire District",signModel:"",url:"",hasAudio:"",imgIdx:20,teaserText:"Voltaire Disctrict celebrates the Metaverse Art Week with new exhibitions from Known Origin, Makers Place, Portion, Super Rare Lab and many more."},
  {index:21,id:"ckrypt",hoverText:"Visit",teleportPos:"54,69",name:"CryptoArg",signModel:"models/signs/cryptoarg_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/crypto-arg",hasAudio:"TRUE",imgIdx:21,teaserText:"This exhibition ventures into a relationship with reality, between its fictionalized construction and the material conditions that bring it about."},
  {index:22,id:"nick-knight",hoverText:"Visit",teleportPos:"69,58",name:"Nick Knight",signModel:"models/signs/nick_knight_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/nick-knight",hasAudio:"",imgIdx:22,teaserText:"3d scan of model Jazzelle Zanaughti used in the soon to be released ikon-1 NFT collection by Nick Knight."},
  {index:23,id:"artnet",hoverText:"Visit",teleportPos:"64,65",name:"ArtNet",signModel:"models/signs/artnet_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/artnet",hasAudio:"TRUE",imgIdx:23,teaserText:"Artnet has curated the programme together with theVERSEverse, bringing participatory art experiences into the virtual world, as every experience in the Decentraland will be personal and irreplicable."},
  {index:24,id:"knownorigin",hoverText:"Visit",teleportPos:"57,67",name:"Known Origin",signModel:"models/signs/ko_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/known-origin-metaborealishttps://decentraland.org/blog/art-week-2022/known-origin-metaborealishttps://decentraland.org/blog/art-week-2022/known-origin-metaborealis",hasAudio:"TRUE",imgIdx:24,teaserText:"Metaborealis, a frozen artworld shattered by the Crypto Winter, is host to a ray of hope found in the creations of the artists that inhabit it."},
  {index:25,id:"marc-o-matic",hoverText:"Visit",teleportPos:"54,50",name:"Marc-0-Matic",signModel:"",url:"",hasAudio:"",imgIdx:25,teaserText:"Creating a unique live sculpture, the artists take over the Art Week's Roads with Colossus walking around. "},
  {index:26,id:"gavin-shapiro",hoverText:"Visit",teleportPos:"61,70",name:"Gavin Shapiro",signModel:"models/signs/gavin_shapiro_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/gavin-shapiro",hasAudio:"TRUE",imgIdx:26,teaserText:"Fibonacci was created as an experimental collaboration between Gavin Shapiro and Arben Vllasaliu, as a celebration of mathematics and the artistic process."},
  {index:27,id:"krista-kim",hoverText:"Visit",teleportPos:"64,70",name:"Krista Kim",signModel:"models/signs/krista_kim_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/krista-kim",hasAudio:"",imgIdx:27,teaserText:"CONTINUUM is a light and sound video installation that creates a meditative space for the viewer."},
  {index:28,id:"samj",hoverText:"Visit",teleportPos:"58,63",name:"SamJ",signModel:"models/signs/sam_j_sign_artweek_2022.glb",url:"https://decentraland.org/blog/art-week-2022/sam-j",hasAudio:"",imgIdx:28,teaserText:"As a reference to some of SAMJ’S most significant past works, they elevated they’re art by bringing their body as a canvas for digital fashion into an interactive space."},
{index:29,id:"burton-morris",hoverText:"Visit",teleportPos:"64,52",name:"Burton Morris",signModel:"models/signs/burton_morris_sign_artweek_2022.glb",url:"https://decentraland.notion.site/Burton-Morris-e38e84ba0935456791759d1f08716854",hasAudio:"TRUE",imgIdx:29,teaserText:"Pop!Wall, is a 3D interactive art wall resembling Morris’s notorious popcorn kernel artwork."},
]

export class Config{
  sizeX!:number
  sizeY!:number
  sizeZ!:number

  signs:SignData[] = signArr

  models:string[] = [
    "model1","model2","model4"
  ]

  center!:Vector3
  centerGround!:Vector3
  init(){
    this.sizeX = ParcelCountX*16
    this.sizeZ = ParcelCountZ*16 
    this.sizeY = (Math.log((ParcelCountX*ParcelCountZ) + 1) * Math.LOG2E) * 20// log2(n+1) x 20 //Math.log2( ParcelScale + 1 ) * 20
    this.center = new Vector3(this.sizeX/2,this.sizeY/2,this.sizeZ/2)
    this.centerGround = new Vector3(this.sizeX/2,0,this.sizeZ/2)
    
  }
}

export const CONFIG = new Config()
CONFIG.init()