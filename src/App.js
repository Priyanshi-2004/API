import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  let [catData, setCatData] = useState([])
  let [products, setProduct] = useState([])

  // product data using API 
  let getProduct = (catname = '') => {
    let apiURL;

    if (catname === "") {
      apiURL = "https://dummyjson.com/products";
    }
    else {
      apiURL = `https://dummyjson.com/products/category/${catname}`
    }


    axios.get(apiURL)
      .then((res) => {
        return res.data;
      })
      .then((finalres) => {
        setProduct(finalres.products)
      })

  }

  // category data using API
  let getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        // handle success
        setCatData(response.data);
      })


  }
  useEffect(() => {
    getCategory()
    getProduct()
  }, [])


  return (
    <>
      <div className='container-fluid py-5 bg-primary'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='border'>
                <h4>Category</h4>

                <ul className="list-group list-group-flush">
                  {
                    catData.map((v, i) => {
                      return (
                        <li onClick={() => getProduct(v)} className="list-group-item" > {v} </li>

                      )
                    })
                  }
                </ul>
                </div>
                </div>
                      <div className='col-lg-9'>
                 <h2 className='text-center'>OUR PRODUCTS</h2>
                 <div className='row gy-3'>

                {
                  products.map((items, i) => {
                    return (

                      <div className='col-lg-4'>
                        <div className="card">
                          <img style={{ white: "100%", height: "200px" }} src={items.thumbnail} alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{items.title}</h5>
                            <p className="card-text">{items.price} | {items.category}</p>
                            <Link to={'/product/' + items.id} className='btn btn-danger'>View Details</Link>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                          </div>
                        </div>
                      </div>

                    )
                  })
                }

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
