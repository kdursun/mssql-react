import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import { toast } from 'react-toastify';



const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        kisi: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    
    case 'DELETE_REQUEST':
      return { ...state, loading: true };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loading: false,
        kisi:state.kisi.filter(item=>item.IDUser !==action.payload)
      };
    case 'DELETE_FAIL':
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default function KisiScreen() {
  const [
    {
      loading,
      error,
      kisi
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: false,
    error: '',
    kisi:[]
  });


  useEffect(() => {
    const fetchKisi = async () => {
      try {
        dispatch({type:'FETCH_REQUEST'})
        const { data } = await axios.get('/api/kisi/', {
        });

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        console.log(err.message);
        dispatch({type:'FETCH_FAIL',payload:err.message})
      }
    };
      fetchKisi();
    }, []);

    const uyeSil=async(IdUser)=>{
      console.log(IdUser);
      try{
        dispatch({type:"DELETE_REQUEST"});
            const {data}=await axios.delete(`/api/kisi/UyeSil/${IdUser}`,{});
          if(data==="ok"){
            dispatch({type:"DELETE_SUCCESS",payload:IdUser})
            toast.success("Üye başarı ile slilindi");
          }
      }
      catch(err){
        console.log(err.message);
        dispatch({type:'DELETE_FAIL',payload:err.message})
      }
   
    }

  return (
    <Container>
     <h1 className="my-3">Üyeler</h1>

      {loading ? (
      <div>Yükleniyor</div>
      ) :error ?(<div>{error}</div>): (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ad Soyad</th>
                <th>Tel</th>
                <th>Aktif</th>
                <th>Aksiyon</th>
              
              </tr>
            </thead>
            <tbody>
              {kisi.map((k) => (
                <tr key={k.IDUser}>
                  <td>{k.IDUser}</td>
                  <td>{k.AdSoyad}</td>
                  <td>{k.Tel}</td>
                  <td>{k.Aktif.toString()}</td>
                  <td>
                  <Button variant="danger" size="sm"
                  onClick={()=>uyeSil(k.IDUser)}>
                      Sil
                 </Button>
                    </td>
                
                </tr>
              ))}
            </tbody>
          </table>
     </>
      )}
      </Container>
  )
  
}
