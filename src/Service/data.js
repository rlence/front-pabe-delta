import axios from 'axios';
import moment from 'moment';
moment.locale('es')

export function getDocuments(){


}

export function createNewDocument(){
    const today = moment();
    const todayFormat = today.format('L').replace('/', '-').replace('/','-');
    console.log(todayFormat)
}

export function getOneDocument(){
    
}

export function saveData(){

}