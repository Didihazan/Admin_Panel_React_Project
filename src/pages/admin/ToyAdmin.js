import React, { useEffect, useState } from 'react'
import AuthAdmin from '../../components/admin/AuthAdmin'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../../services/apiService';
import PageNav from '../../components/PageNav';

export default function ToyAdmin() {
  const [ar, setAr] = useState([]);
  // מספר העמודים שקיבלנו
  const [pages,setPages] = useState(0);
  const [query] = useSearchParams();

  useEffect(() => {
    doApi();
  }, [query])

  const doApi = async () => {
    axios.defaults.withCredentials = true;
    try {
      // אוסף את מספר העמוד אם לא קיבלנו בקווארי הברירת מחדל תיהיה 1
      const page = query.get("page") || 1;
      const limit = 5
      // הופך את הפייג' לסקיפ מה שצד השרת מצפה לקבל
      const skip = (page - 1) * limit;
      const url = API_URL + "/toys?skip= " + skip;
      const { data } = await axios.get(url);
      console.log(data);
      
      // בקשה לשרת כדי לקבל את מספר העמודים שיש להציג
      const urlPages = API_URL+"/toys/count";
      const resp = await axios.get(urlPages);
      console.log(resp.data);
      setPages(resp.data.pages);
      setAr(data);

    }
    catch (error) {
      // alert("Error , come back later")
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <AuthAdmin />

      <h1>Table of toys</h1>
      <Link to="/admin/toys/add" className="btn btn-info">Add new Toy</Link>
      <div className='my-2'>
        {/* יציג מעבר בין עמודים 
        toPageUrl=המיקום שבו יוסיף את הקווארי של הפייג'
        pageCount - כמה עמודים להציג
        cssClass - מאפשר להעביר קלאס סי אס אס עם עיצוב אחר של בוטסטארפ /טיילווינד או משהו שאנחנו יצרנו
        */}
        {pages > 0 && <PageNav toPageUrl={"/admin/toys"} pageCount={pages} cssClass={"btn btn-danger mx-1"} />}
      </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>#</td>
            <td>name</td>
            <td>category_id</td>
            <td>price</td>
            <td>info</td>
            <td>Del/Edit</td>
          </tr>
        </thead>
        <tbody>
          {ar.map((item, i) => {
            return (
              <tr key={item._id}>
                {/* td -תאים בשורה / עמודות */}
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.category.name}</td>
                <td>{item.price}</td>
                {/* substing - יחתוך את הסטרינג שלא כל האינפו יוצג */}
                {/* title - יציג בטול טיפ את כל המידע של האינפו */}
                <td title={item.info}>{item.info.substring(0, 20)}...</td>
                <td>
                  <button onClick={() => {

                  }} className='bg-danger'>X</button>
                  <button onClick={() => {

                  }} className='bg-info'>Edit</button>
                </td>
              </tr>
            )
          })}


        </tbody>
      </table >
    </div >
  )
}
