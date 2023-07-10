import * as utils from '@dcl/ecs-scene-utils'
import { InstallationsModal } from './carousel-installations'
import { CONFIG } from "./config"
import { RESOURCES } from './resources'
import { SignData } from './types'

const basePosition = CONFIG.centerGround.clone()
const baseShape = new GLTFShape('models/road_artweek_2023.glb')

const USE_TEMP_LOADER = false
const tempLoadNow = new Entity()
// add a shape to the entity
tempLoadNow.addComponent(baseShape)
// add the entity to the engine
if(USE_TEMP_LOADER) engine.addEntity(tempLoadNow) 
tempLoadNow.addComponent(new Transform({ 
  position: basePosition,
  scale: Vector3.One(),
  //rotation: Quaternion.Euler(0,180,0)
})) 
const installationsModal = new InstallationsModal()
installationsModal.init()
installationsModal.hide()


function openInstallationInfo(panelData1:SignData){
  installationsModal.updateData(panelData1)
  //showInstallationInfo(panelData1)
  installationsModal.show()
}
function createModel(parent:Entity,modelPath:string){
  const modelEntity = new Entity()
  // add a transform to the entity
  modelEntity.addComponent(new Transform({ 
    position: basePosition, 
    scale: new Vector3(1,1,1),//Vector3.One().scale(10),
    rotation: Quaternion.Euler(0,180,0)
  })) 
  modelEntity.addComponent(new GLTFShape(modelPath))
  
  //signEntity.setParent(parent)
  engine.addEntity(modelEntity) 
}
function createSignage(parent:Entity,signData:SignData){
  const signEntity = new Entity()
  // add a transform to the entity
  signEntity.addComponent(new Transform({ 
    position: basePosition, 
    scale: new Vector3(1,1,1),//Vector3.One().scale(10),
    rotation: Quaternion.Euler(0,180,0)
  })) 
  signEntity.addComponent(new GLTFShape(signData.signModel))
  signEntity.addComponent(new OnPointerDown(()=>{
    log("clicked " ,signData)
    openInstallationInfo(signData)
  },{
    hoverText: signData.hoverText + " " + signData.name
  }))
  //signEntity.setParent(parent)
  engine.addEntity(signEntity) 
}
async function init(){
  log("init called")
  // create the entity
  const baseScene = new Entity()
  // add a transform to the entity
  baseScene.addComponent(new Transform({ 
    position: basePosition,
    //scale: Vector3.One().scale(.01),
    rotation: Quaternion.Euler(0,180,0)
  })) 
  /*baseScene.addComponent(new utils.Delay(100,()=>{
    baseScene.getComponent(Transform).scale = Vector3.One()
  }))*/
  // add a shape to the entity
  baseScene.addComponent(baseShape)
  // add the entity to the engine
  engine.addEntity(baseScene)
  engine.removeEntity(tempLoadNow)

  for( const p in CONFIG.signs){
    const signData = CONFIG.signs[p]

    if(signData.signModel && signData.signModel !== ''){
      log("adding sign ",signData)
      createSignage( baseScene, signData )
    }
  }

  for( const p in RESOURCES.models.decorations){
    const model = RESOURCES.models.decorations[p]

    if(model && model !== ''){
      log("adding model ",model)
      createModel( baseScene, model )
    }
  }

}

//due to red box appearing on load and fear it wont render in scene going to defer till engine started

if(USE_TEMP_LOADER){
  tempLoadNow.addComponent(new utils.Delay(0,()=>{
    init() 
  }))
}else{
  init()
}
  
/*
const groundPlaceHolder = spawnCube(CONFIG.sizeX/2, .1, CONFIG.sizeZ/2)
groundPlaceHolder.getComponent(Transform).scale = new Vector3(CONFIG.sizeX, .1, CONFIG.sizeZ)

const greenMat:Material = new Material()
greenMat.albedoColor = Color4.Green()
groundPlaceHolder.addComponent( greenMat )*/



const input = Input.instance

let started = false
let forwardVector = new Vector3()
const camera = Camera.instance
 
const box = new Entity()
box.addComponent( new BoxShape() )
box.addComponent( new Transform({position:new Vector3(2,.5,2),scale:new Vector3(2,.5,2)}))
//engine.addEntity(box)       
   
log("added box  ")
        
input.subscribe("BUTTON_DOWN", ActionButton.POINTER, true, (e) => {
  if(!started){
    started = true
    //engine.addSystem(lerps)
  }
})

input.subscribe("BUTTON_UP", ActionButton.POINTER, true, (e) => {
  //engine.removeSystem(lerps)
  started = false
})

@Component("lerpData")
export class LerpData {
  origin: Vector3 = Vector3.Zero()
  target: Vector3 = Vector3.Zero()
  fraction: number = 0
}

// a system to carry out the movement
export class LerpMove implements ISystem {
  update(dt: number) {
    
    //if (lerp.fraction < 1) {
    //if(interval.update(dt)){
      forwardVector = Vector3.Forward().rotate(Camera.instance.rotation)
      let temp = camera.position.add( forwardVector.normalize().scale(5))
    
      box.getComponent(LerpData).origin = box.getComponent(Transform).position
      box.getComponent(LerpData).target = temp

      let transform = box.getComponent(Transform)
      let lerp = box.getComponent(LerpData)

      //log("lerp.fraction",lerp.fraction,dt)
      if(lerp.fraction){
        lerp.fraction += dt / 8
      }else{
        lerp.fraction = dt / 8
      }
      if (lerp.fraction < 1) {
        transform.position = Vector3.Lerp(lerp.origin, lerp.target, lerp.fraction)
      }else{
        transform.position = Vector3.Lerp(lerp.origin, lerp.target, .1)
      }
  }
}

//box.addComponent(new LerpData())
//let lerps = new LerpMove()