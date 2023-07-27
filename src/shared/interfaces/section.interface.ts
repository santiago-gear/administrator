

type Element = {
    type:String;
    value:String;
    styles:Object;
}

export type Elements ={
    [key:string]:Element
}

export type Section ={
    id:number,
    type:String;
    templateName:String;
    elements:Elements;
    component?: Object;
}