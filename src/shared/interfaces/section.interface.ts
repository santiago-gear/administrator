





type SectionsStyles = {
    backgroundImage?: string,
    backgroundColor?: string,
    backgroundRepeat?:string,
    backgroundPosition?:string,
    borderColor?:string,
    borderRadius?:string,
    borderWidth?:string,
    border?:string,
}

type TextStyles = {
    color?:string,
    fontSize?: string,
    fontWeight?:string | number,
    fontFamily:string,
    textAlign?:string,
    textDecoration?: string,
    textShadow?: string,
}

type ButtonStyles={
    width:string, 
    height:string,
    borderRadius:string,
    border:string,
    backgroundColor:string,
    color:string,
    marginTop:string,
}

type ImageElement = {
    type:string;
    img:string;
}

type TextElement = {
    type:string;
    value:string;
    styles?:TextStyles;
}

export type SectionElements = Record<string,TextElement | ImageElement | ButtonStyles>  

export type DataBaseSection = Omit<Section,'component'>;

export type Section = {
    id:number,
    type:string;
    templateName:string;
    properties:Object;
    elements:SectionElements;
    styles?:SectionsStyles;
    component: Object;
}

export const proof = () =>{
    console.log(proof)
}
