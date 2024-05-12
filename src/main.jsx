import React from 'react'
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
import AddTouristSpot from './Components/AddTouristSpot/AddTouristSpot.jsx';
import SpotDetails from './Components/SpotDetails/SpotDetails.jsx';
import Update from './Components/Update/Update.jsx';
import PrivateRpute from './Components/Route/PrivateRpute.jsx';
import MyList from './Components/MyList/MyList.jsx';
import Spots from './Components/Spots/Spots.jsx';
import AllBooks from './Components/AllBooks/AllBooks.jsx';
import Nobel from './Components/CategoriesOfBook/Nobel.jsx';
import Thriller from './Components/CategoriesOfBook/Thriller.jsx';
import Drama from './Components/CategoriesOfBook/Drama.jsx';
import History from './Components/CategoriesOfBook/History.jsx';
import AddBooks from './Components/AddBooks/AddBooks.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';


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
        loader: () => fetch('http://localhost:5000/books')
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
      },
      {
        path: "/nobel",
        element: <Nobel></Nobel>,
        loader: () => fetch('http://localhost:5000/books')
      },
      {
        path: "/thriller",
        element: <Thriller></Thriller>,
        loader: () => fetch('http://localhost:5000/books')
      },
      {
        path: "/drama",
        element: <Drama></Drama>,
        loader: () => fetch('http://localhost:5000/books')
      },
      {
        path: "/history",
        element: <History></History>,
        loader: () => fetch('http://localhost:5000/books')
      },
      {
        path: "/detail/:id",
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
      },
      {
        path: "/addBooks",
        element: <PrivateRpute><AddBooks></AddBooks></PrivateRpute>
      },
      {
        path: "/addSpots",
        element: <PrivateRpute><AddTouristSpot></AddTouristSpot></PrivateRpute>
      },
      {
        path: "/mylist",
        element: <PrivateRpute><MyList></MyList></PrivateRpute>,
        loader: () => fetch('https://tourism-rosy.vercel.app/spot')
      },
      {
        path: "/spot/:id",
        element: <PrivateRpute><SpotDetails></SpotDetails></PrivateRpute>,
        loader: ({params}) => fetch(`https://tourism-rosy.vercel.app/spot/${params.id}`)
      },
      {
        path: "/countries/:id",
        element: <Spots></Spots>,
        loader: ({params}) => fetch(`https://tourism-rosy.vercel.app/countries/${params.id}`)
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
  <React.StrictMode>
    <AuthProvider>
      
      <div className='max-w-6xl mx-auto'>
      <RouterProvider router={router} />
      </div>
      
    </AuthProvider>
  </React.StrictMode>,
)
