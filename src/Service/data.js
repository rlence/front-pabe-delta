import firebase from '../Config/firebase';
import fire from 'firebase';
import moment from 'moment';
import TemplateHeader from '../Components/Plantilla-Header/Template-header';
moment.locale('es')
const db = firebase.firestore();
const storage = firebase.storage().ref();

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

export async function saveData(data, date, name){
    try{

        const {teamplateHaeder, templatesBody, templanteFooter} = data;
        
        const {firstImg, listDesactivacion, listActivacion, listPresentes, 
                listBloqueo, listResiduales, listPuesta, listPabe, 
                opcion1, text1, opcion2, text2, opcion3, text3, opcion4, text4
        } = templatesBody;
        const uploadTask1 = await uploadFile(firstImg);
        const body = {
            firstImg: uploadTask1,
            listDesactivacion,
            listActivacion,
            listPresentes,
            listBloqueo,
            listResiduales,
            listPuesta,
            listPabe,
            opcion1,
            text1,
            opcion2,
            text2,
            opcion3,
            text3,
            opcion4,
            text4
        }

        const {puntoImg1, puntoText1, puntoImg2, puntoText2, 
            puntoImg3,puntoText3, puntoImg4,puntoText4, puntoImg5,puntoText5,
            puntoImg6, puntoText6
        } = templanteFooter;

        const uploadTask2 = puntoImg1 !== '' ? await uploadFile(puntoImg1) : '';
        const uploadTask3 = puntoImg2 !== '' ? await uploadFile(puntoImg2) : '';
        const uploadTask4 = puntoImg3 !== '' ? await uploadFile(puntoImg3) : '';
        const uploadTask5 = puntoImg4 !== '' ? await uploadFile(puntoImg4) : '';
        const uploadTask6 = puntoImg5 !== '' ? await uploadFile(puntoImg5) : '';
        const uploadTask7 = puntoImg6 !== '' ? await uploadFile(puntoImg6) : '';

        const footer = {
            puntoImg1:  uploadTask2,
            puntoText1,
            puntoImg2: uploadTask3,
            puntoText2,
            puntoImg3: uploadTask4,
            puntoText3,
            puntoImg4: uploadTask5,
            puntoText4,
            puntoImg5: uploadTask6,
            puntoText5,
            puntoImg6: uploadTask7,
            puntoText6
        }

        const res = await db.collection("template").doc(date).get();
        let dataDays = [];
        const docs = await res.data().list;  
        

        docs.map( item => {
            if(item.name === name){
                item.body = body;
                item.header = teamplateHaeder;
                item.footer = footer;
            }
        })
        
        const updateRes = await db.collection("template").doc(date).update({
            list:docs
        })
        return Promise.resolve(true)

    }catch(err){
        console.log('err', err);
        Promise.reject(false);
    }
}

const uploadFile = async (file) => {
    try{
        const uploadTask =  storage.child(file.name).put(file);
        const urlDonload =  await uploadTask.snapshot.ref.getDownloadURL()
        return urlDonload;
        
    }catch(err){
        console.log(err);
        return err;
    }
   

}