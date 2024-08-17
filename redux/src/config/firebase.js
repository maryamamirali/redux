import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged  } from "firebase/auth";
import { getFirestore , collection , addDoc , getDocs, getDoc , doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBxfqfq4iuRU6mQ7IREXSfIogDAQKv7dWA",
    authDomain: "firestoreprc.firebaseapp.com",
    projectId: "firestoreprc",
    storageBucket: "firestoreprc.appspot.com",
    messagingSenderId: "474301683325",
    appId: "1:474301683325:web:9f81f05accb87f793b0314",
    measurementId: "G-T6BTG9XLEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


//register
async function Register (email , password) {
await createUserWithEmailAndPassword(auth , email , password)
return addDoc(collection(db , "users"),{email , password })
}


//login
function Login (email , password) {
return signInWithEmailAndPassword(auth , email , password)
}


//product
async function ProductsData(productinfo) {
const {title , description , price , image } = productinfo;

const storageRef = ref(storage , 'products/' + image.name);
await uploadBytes(storageRef , image);
const url = await getDownloadURL(storageRef);

return addDoc(collection(db , "products"), {title , description , price , image:url})
}

//get product
async function GetProduct() {
    const querySnapshot = await getDocs(collection(db, "products"));
    console.log(querySnapshot, 'this worked');

    const Products = [];

    querySnapshot.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        Products.push(data);
    });

    return Products;
}


//singleproduct
async function getSingleProduct(prdctId) {
const docRef = doc(db , "products" , prdctId);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("document data" , prdctId);
return docSnap.data()
}else {
    console.log("no such document");
    
}
}

export {
Register , 
Login ,
onAuthStateChanged,
auth,
ProductsData,
GetProduct,
getSingleProduct
}