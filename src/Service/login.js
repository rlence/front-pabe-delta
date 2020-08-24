import firebase from '../Config/firebase';

export async function loginUser(email, password){

    try{
        const auth = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = await auth.user.uid;
        return Promise.resolve(user);

    }catch(err){    


        if(err.code){
            if(err.code == 'auth/wrong-password'){
                return Promise.reject('Contraseña invalida')
            }else{
                return Promise.reject('El usuario no existe');
            }
        }

        return Promise.reject('Hubo un error inesperado intentelo mas tarde');

    }    

}


