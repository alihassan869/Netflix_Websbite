import React ,{createContext,useState} from 'react'
import Cardsdata3 from '../../product';
import Card from 'react-bootstrap/Card';
import Header from '../Header';
import Footer from '../Footer';
export const Golobalinfo = createContext('')
function Home() {
  const [Search ,setsearch]=useState('');
  const getsearch = (item) => {
    setsearch(item);
    
  };
  console.log(Search)
  const datafilter = Cardsdata3.filter((item) =>
  Search 
    ? item.rname?.toLowerCase()?.includes(Search?.toLowerCase())
    : true,
);
  return (
    <>
      <Golobalinfo.Provider
      value={{Getsearch:getsearch  }}
    >
    <Header/>
    <div className="container">
      <div className="row g-2">
         {datafilter.length > 0 ? (
            datafilter.map((item, id) => {
              return (
                <Card className="col-md-3 col-10 mx-auto mb-md-0 mb-3 px-0 ms-1  " >
                <Card.Img variant="top" src={item.imgdata} />
                <Card.Body>
                  <p className='flex justify-between'>{item.rname}
                  <div >
                  {item.rating}
                  </div>
                  </p>
                  <button className='bg-red-800 w-100 py-2' > <a href={item.video} className=' py-2  text-decoration-none text-white px-3 ms-3 ' >Click Here To Watch</a></button>
                </Card.Body>
              </Card>
              );
            })
          ) : (
            <div
              className="py-5 text-center text-red-800"
              style={{ minHeight: '80vh' }}
            >
              <h3>Items not found</h3>
            </div>
          )}
      </div>
      </div>
      <Footer/>
      </Golobalinfo.Provider>
    </>
  )
}

export default Home
