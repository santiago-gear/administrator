

import { type Section } from "@/shared/interfaces/section.interface"

import DB from '@/Mocks/database.mock'


const getDB = ():Object =>{
    return DB
}

const getDefault = (name:string):Section => {

    let id =0;
    switch(name){
        case 'BigHeader':
            id=0;
            break;
        case 'SmallHeader':
            id=1;
            break;
        case 'FixNavbar':
            id=2;
            break;
        case 'DarkFooter':
            id=3;
            break;
        case 'TextCarousel':
            id=4;
            break;
    }
    return DB[id]
}

/* const saveSection = (id:number,sectionObject:Section):void =>{
    DB[id as keyof typeof DB]=sectionObject
} */

const getSections = ():number[] =>{
    return [5,6]
}
const getSection = (id:number):Section =>{
    return DB[id as keyof typeof DB]
}

const getLastId =() =>{
    return 6
}

const deleteSection = (id:number):void => {
    delete DB[id as keyof typeof DB]
}

export {
    deleteSection, 
    getDefault,
    getDB,
    getLastId,
    getSection, 
    getSections,
    /*saveSection, */
}
