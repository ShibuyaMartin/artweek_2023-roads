import * as ui from '@dcl/ui-scene-utils'
import { PanelData } from './types'
import resources, { RESOURCES } from "./resources"

export let behaviorContainer:UIContainerRect
export let behaviorCodeImage: UIImage
export let behaviorCodeClose: UIImage
export let behaviorCodeText: UIText

const canvas:UICanvas = ui.canvas
 
let desc:UIText
let name:UIText
let year:UIText
let image:UIImage



export type ImageSection = {
    visible: boolean
    sourceWidth: number
    sourceHeight: number
    sourceLeft?: number
    sourceTop?: number
    width?: number
    height?: number
    vAlign?: string
    hAlign?: string
    positionX?: number
    positionY?: number
    onclick?: any
  }

export type Text = {
    value: string
    fontSize: number
    isPointerBlocker: boolean
    font?: Font
    width?: number
    textWrapping?: boolean
    vTextAlign?: string
    hTextAlign?: string
    vAlign?: string
    hAlign?: string
    color?: Color4
    positionX?: number
    positionY?: number

}



export function setSection(image: UIImage, section: ImageSection) {
    image.sourceWidth = section.sourceWidth
    image.sourceHeight = section.sourceHeight
    image.sourceLeft = section.sourceLeft ? section.sourceLeft : 0
    image.sourceTop = section.sourceTop ? section.sourceTop : 0

    image.width = section.width ? section.width : 0
    image.height = section.height ? section.height : 0

    image.vAlign = section.vAlign ? section.vAlign : "center"
    image.hAlign = section.hAlign ? section.hAlign : "center"

    image.positionX = section.positionX ? section.positionX : 0
    image.positionY = section.positionY ? section.positionY : 0

    if(section.onclick.enabled){
        image.onClick = new OnClick(section.onclick.f)
    }
    
    image.visible = section.visible

    return image
    
  }

export function setText(text:UIText, display: Text){
    text.value = display.value
    text.fontSize = display.fontSize ? display.fontSize : 10

    text.vTextAlign = display.vTextAlign ? display.vTextAlign : "center"
    text.hTextAlign = display.hTextAlign ? display.hTextAlign : "center"

    text.vAlign = display.vAlign ? display.vAlign : "center"
    text.hAlign = display.hAlign ? display.hAlign : "center"

    display.positionX ? text.positionX = display.positionX : null
    display.positionY ? text.positionY = display.positionY : null

    display.font ? text.font = display.font : null
    display.textWrapping ? text.textWrapping = display.textWrapping : null
    display.color? text.color = display.color : text.color = Color4.White()
    display.width ? text.width = display.width : null
    text.isPointerBlocker = display.isPointerBlocker

    return text
}

export function createInstallationInfo(){
 
    const atlas = RESOURCES.textures.installation_atlas
    behaviorContainer = new UIContainerRect(canvas)
    behaviorContainer.width = "100%"
    behaviorContainer.height = "100%"
    behaviorContainer.visible = false

    setSection(new UIImage(behaviorContainer, atlas), resources.images.behaviorCodeBG)

    resources.images.behaviorCodeClose.onclick.f =  ()=>{
        hideInstallationInfo()
        //showCaledar()
    }
 
    setSection(new UIImage(behaviorContainer, atlas), resources.images.behaviorCodeClose)

    
    
    setText(new UIText(behaviorContainer), resources.text.prideFlagHistoryTitle)

    image = setSection(new UIImage(behaviorContainer, atlas), resources.images.flagBG)    
 
    desc = setText(new UIText(behaviorContainer), resources.text.behaviorCodeText)
    
    name = setText(new UIText(behaviorContainer), resources.text.prideFlagName)
    
    year = setText(new UIText(behaviorContainer), resources.text.prideFlagHistoryYear)
}

export function showInstallationInfo(flag:PanelData){
    log("showInstallationInfo",flag)

    //desc.value = flag.desc
    name.value = flag.name
    //year.value = flag.year 
    
    /*
    image.sourceLeft = flag.imageSource.sourceLeft ? flag.imageSource.sourceLeft : 0
    image.sourceTop = flag.imageSource.sourceTop ? flag.imageSource.sourceTop : 0

    image.sourceHeight = flag.imageSource.sourceHeight
    image.sourceWidth = flag.imageSource.sourceWidth
    */
    behaviorContainer.visible = true
}
 
export function hideInstallationInfo(){
    behaviorContainer.visible = false
}