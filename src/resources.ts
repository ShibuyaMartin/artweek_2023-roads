import { CONFIG } from "./config"
import { PanelData } from "./types"

export const INVISIBLE_MATERIAL = new BasicMaterial()
const INVISIBLE_MATERIAL_texture = new Texture('images/transparent-texture.png')
INVISIBLE_MATERIAL.texture = INVISIBLE_MATERIAL_texture
INVISIBLE_MATERIAL.alphaTest = 1



const outerBoxMat = new Material()
outerBoxMat.albedoColor = Color4.Black()
outerBoxMat.emissiveColor = Color3.Black()
outerBoxMat.emissiveIntensity = 10 
outerBoxMat.reflectivityColor = Color3.Black()
outerBoxMat.metallic = 1
outerBoxMat.roughness = 0


/*
export function findPanelData(index:number,id?:string){
  const findArr = panelArr.filter((itm)=>{
      return itm.index == index
  })
  if(findArr.length == 1){
      log("findPanelData found for index",index,id,findArr)
      return findArr[0]
  }else if(findArr.length == 1){
      log("findPanelData found more than 1 for index",index,id,findArr)
      return findArr[0]
  }else{
      log("findPanelData unable to find for index",index,id,findArr)
      return undefined
  }  
} */
const customUIAtlas = new Texture('images/DispenserAtlas.png')



export const RESOURCES = {
        models:{
          names:{
            
          },
          instances:{
          },
          decorations:[
            
          ]
        },
        textures: {
          //sprite_sheet: spriteSheetTexture,
          transparent: INVISIBLE_MATERIAL_texture,
          logos_01: new Texture('images/logos_01.png'),
          logos_02: new Texture('images/logos_02.png'),
          custUiAtlas: customUIAtlas,
          installation_atlas: customUIAtlas
        },
        materials: {
          //sprite_sheet: spriteSheetMaterial
          transparent: INVISIBLE_MATERIAL
        },
        images:{
          portrait:{
          }
          
        },
        panelArr: CONFIG.signs
      }




const flagWidth = 270 - 3
const flagHeight = 180 - 1

const flagSourceLeftCol1 = 54 + 1
const flagSourceLeftCol2 = 377 + 1
const flagSourceLeftCol3 = 707 + 1


const leftAlignText = 0//-200
const flagAlignX = -176
const flagScale = .45
const topTextY = 210
const leftSideFont = new Font(Fonts.SansSerif_Heavy)

export default {
  events:[
      
  ],

  eventBanners:[
      
  ],
  text:{
      prideFlagHistoryTitle:{
          value: "Pride Flag HistoryXXXXXX",
          fontSize:28,
          font:leftSideFont,
          hTextAlign:"center",
          color:Color4.White(),
          vAlign:"center",
          hAlign:"center",
          vTextAlign:"top",
          textWrapping:true,
          width:400,
          positionX:leftAlignText,
          positionY:topTextY - 10,
          isPointerBlocker:false
      },


      prideFlagName:{
          value: "XXX6-Color Pride Flag",
          fontSize:22,
          font:leftSideFont,
          hTextAlign:"center",
          color:Color4.White(),
          vAlign:"center",
          hAlign:"center",
          vTextAlign:"top",
          textWrapping:true,
          width:300,
          positionX:leftAlignText,
          positionY:140,
          isPointerBlocker:false
      },

      prideFlagHistoryYear:{
          value: "2018",
          fontSize:22,
          font:leftSideFont,
          hTextAlign:"left",
          color:Color4.White(),
          vAlign:"center",
          hAlign:"center",
          vTextAlign:"top",
          textWrapping:true,
          width:300,
          positionX:leftAlignText,
          positionY:topTextY * -1,
          isPointerBlocker:false
      },

      behaviorCodeText:{
          value: 
          "default text",
          fontSize:14,
          hTextAlign:"left",
          color:Color4.White(),
          vAlign:"center",
          hAlign:"center",
          vTextAlign:"center",
          textWrapping:true,
          width:500,//330,
          positionX:0,
          positionY:0,
          isPointerBlocker:false
      },
      

  },



  images:{

      flagBG:{
        sourceTop:828,
            sourceLeft:0,
            sourceWidth:250,
            sourceHeight:100,
            width:175,
            height:70,
            vAlign:"top",
            hAlign:"left",
            positionX:210,
            positionY:60,
            visible: true,
            onclick:{
                enabled: false,
            }
      },


      behaviorCodeBG:{
        sourceTop:0,
            sourceLeft:0,
            sourceWidth:1024,
            sourceHeight:726,
            width:768,
            height:544,
            vAlign:"center",
            hAlign:"center",
            visible: true,
            onclick:{
                enabled: false,
            }
    },
      behaviorCodeClose:{
        sourceTop:727,
        sourceLeft:0,
        sourceWidth:36,
        sourceHeight:36,
        width:25,
        height:25,
        vAlign:"center",
        hAlign:"center",
        positionX:355,
        positionY:245,
        visible: true,
        onclick:{
            enabled: true,
            f:()=>{
                //hideCalendar()
            }
        }
    },



  }
}