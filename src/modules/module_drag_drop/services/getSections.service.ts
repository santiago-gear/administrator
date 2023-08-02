import {type DataBaseSection } from './../../../shared/interfaces/section.interface';


import DB from '@/Mocks/database.mock'


const getDB = ():Object =>{
    return DB
}

const getDefault = (name:string):DataBaseSection => {
    return DB[name]
}

const getSection = (name:string):DataBaseSection =>{
    return DB[name]
}

const getLastId =() =>{
    return Object.keys(DB).length
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
}
