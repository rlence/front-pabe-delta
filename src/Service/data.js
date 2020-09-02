import firebase from '../Config/firebase';
import fire from 'firebase';
import moment from 'moment';
moment.locale('es')
const db = firebase.firestore();

export async function getDocuments(){

    try{
        const data = await db.collection("allTemplate").get();
        let listDoc;
        data.forEach(doc => {
            listDoc = doc.data().doc;
        });
        return Promise.resolve(listDoc)
    }catch(err){
        console.log('GET DOCUMENTS',err)
        return Promise.reject('Se produjo un error')
    }

}

export async function createNewDocument(){
    const today = moment();
    const todayFormat = today.format('L').replace('/', '-').replace('/','-');
    console.log(todayFormat)
    try{
        const create = await db.collection("template").doc(todayFormat).set({
            create_date: todayFormat,
            list:[]
        });
        //obtener el listado y validar los documentos existentes
        const add = await db.collection("allTemplate").doc("VktypwFmRIgKbwTWSmOF").get();
        const data = add.data().doc;
        let list = [];
        const include = data.includes(todayFormat);
        if(!include){
            list = [todayFormat, ...data];
            await db.collection("allTemplate").doc("VktypwFmRIgKbwTWSmOF").update({
                doc: list
            })
        }
        
        return Promise.resolve(create);

    }catch(err){

        console.log('CREATE DOCUMENTS',err);
        return Promise.reject(err)
    }
}

export async function getOneDocument(id){

    try{
        const res = await db.collection("template").doc(id).get();
        const data = res.data();
        console.log(data)
        return Promise.resolve(data);
    }catch(err){
        
        console.log('ONEDOCUMENT', err)
        return Promise.reject('Se produjo un error al conectar con db')
    }
}

export async function newTemplate(templateName, id){
    console.log(templateName, id)
    const today = moment();
    const todayFormat = today.format('L').replace('/', '-').replace('/','-');
    try{
        const obj = {
            name:templateName,
            header:{},
            body:{},
            footer:{},
            create_date:todayFormat
        }
        const res = await db.collection("template").doc(id).update({
            list: fire.firestore.FieldValue.arrayUnion(obj)
        })

        console.log(res);
        return Promise.resolve(res);

    }catch(err){

        console.log(err);
        return Promise.reject(err);
    }

}

export function saveData(data){
    console.log(data)

    return Promise.resolve(true)
}