
export type PanelInst={
  host:Entity
  panel:Entity
}

export type SignData={
  index:number
  id:string,
  name:string,
  hoverText:string
  teleportPos:string
  url:string,
  signModel:string,
  hasAudio:string,
  imgIdx?:number,
  teaserText?:string
}

export type PanelData=SignData & {
}
