import React, { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [cityData, setCityData] = useState([])
  const [dataKeep, setDataKeep] = useState([])
  const [noData, setNoData] = useState();


  useEffect(() => {

    axios.get("https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json")
      .then(res => setCityData(res.data))
      .catch(err => console.log(err))

  }, [])

  const show = (e) => {
    const newCityAbout = cityData.filter(citys => citys.name === e.target.value)
    setDataKeep(newCityAbout);
    setNoData(e.target.value)
  }


  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-12 mt-5'>
            <h2 className='text-center'>Türkiye'nin Şehirleri Hakkında Bilgiler</h2>
            <input type="text" className='form-control mb-4' placeholder='İl adı giriniz..' onChange={show}></input>

            {noData !== "" ? dataKeep.map((citys, index) =>
            (<div key={index}>
              <table className="table table-striped table-success">
                <thead>
                  <tr>
                    <th scope="col">Şehir</th>
                    <th scope="col">Bulunduğu Bölge</th>
                    <th scope="col">Nüfusu</th>
                    <th scope="col">Plaka Kodu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{citys.name}</td>
                    <td>{citys.region}</td>
                    <td>{citys.population.toLocaleString()}</td>
                    <td>{citys.id}</td>
                  </tr>
                </tbody>
              </table>
            </div>)
            ) : cityData.map((allCitys, index) =>
              <div key={index} >
                <table className="table table-success table-striped">
                  <thead>
                    <tr>
                      <th className='col-3'>Şehir</th>
                      <th className='col-3'>Bulunduğu Bölge</th>
                      <th className='col-3'>Nüfusu</th>
                      <th className='col-3'>Plaka Kodu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{allCitys.name}</td>
                      <td>{allCitys.region}</td>
                      <td>{allCitys.population.toLocaleString()}</td>
                      <td>{allCitys.id}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
