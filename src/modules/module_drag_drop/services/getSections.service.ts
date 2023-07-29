import {type DataBaseSection } from './../../../shared/interfaces/section.interface';


import DB from '@/Mocks/database.mock'


const getDB = ():Object =>{
    return DB
}

const getDefault = (name:string):DataBaseSection => {

    let id =0;
    switch(name){
        case 'BigHeader':
            id=0;
            break;
        case 'SmallHeader':
            id=1;
            break;
        case 'DialoHeader':
            id=2;
            break;
        case 'DialoAbout':
            id=3;
            break;
    }
    console.log(id)
    return DB[id]
}

/* const saveSection = (id:number,sectionObject:Section):void =>{
    DB[id as keyof typeof DB]=sectionObject
} */

const getSections = ():number[] =>{
    return [5,6]
}
const getSection = (id:number):DataBaseSection =>{
    return DB[id]
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
