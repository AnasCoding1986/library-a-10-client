
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';


import Update from './Components/Update/Update.jsx';
import PrivateRpute from './Components/Route/PrivateRpute.jsx';


import AllBooks from './Components/AllBooks/AllBooks.jsx';
import Nobel from './Components/CategoriesOfBook/Nobel.jsx';
import Thriller from './Components/CategoriesOfBook/Thriller.jsx';
import Drama from './Components/CategoriesOfBook/Drama.jsx';
import History from './Components/CategoriesOfBook/History.jsx';
import AddBooks from './Components/AddBooks/AddBooks.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import BorrowedBooks from './Components/BorrowedBooks/BorrowedBooks.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allBooks",
        element: <AllBooks></AllBooks>,
        loader: () => fetch('https://tourism-rosy.vercel.app/books')
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://tourism-rosy.vercel.app/books/${params.id}`)
      },
      {
        path: "/nobel",
        element: <Nobel></Nobel>,
        loader: () => fetch('https://tourism-rosy.vercel.app/books')
      },
      {
        path: "/thriller",
        element: <Thriller></Thriller>,
        loader: () => fetch('https://tourism-rosy.vercel.app/books')
      },
      {
        path: "/drama",
        element: <Drama></Drama>,
        loader: () => fetch('https://tourism-rosy.vercel.app/books')
      },
      {
        path: "/history",
        element: <History></History>,
        loader: () => fetch('https://tourism-rosy.vercel.app/books')
      },
      {
        path: "/detail/:id",
        element: <PrivateRpute><BookDetails></BookDetails></PrivateRpute>,
        loader: ({params}) => fetch(`https://tourism-rosy.vercel.app/books/${params.id}`)
      },
      {
        path: "/addBooks",
        element: <PrivateRpute><AddBooks></AddBooks></PrivateRpute>
      },
      {
        path: "/borrowedBooks",
        element: <BorrowedBooks></BorrowedBooks>,
        loader: () => fetch('https://tourism-rosy.vercel.app/borrowedBooks')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      
      <div className='max-w-6xl mx-auto'>
      <RouterProvider router={router} />
      </div>
      
    </AuthProvider>,
)
