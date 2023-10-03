import logo from './logo.svg';
import './App.css';
import {Table} from 'react-bootstrap';
function App() {
  const num = [
    {name : "anil", email : "san@gmail.com", Address : [
      {hn:2, city : "lahore" , country : "pakistan"},
      {hn:2, city : "lahore" , country : "pakistan"},
      {hn:2, city : "lahore" , country : "pakistan"},

    ] },
    {name : "anil", email : "sau@gmail.com",  Address : [
      {hn:2, city : "lahore" , country : "pakistan"},
      {hn:2, city : "lahore" , country : "pakistan"},
      {hn:2, city : "lahore" , country : "pakistan"},

    ] },
    {name : "anil", email : "sai@gmail.com",  Address : [
      {hn:2, city : "lahore" , country : "pakistan"},
      {hn:2, city : "lahore" , country : "pakistan"},
      {hn:2, city : "lahore" , country : "pakistan"},

    ] },
  ]
  return (
    <div className="App">
      <h1>hello world</h1>
  <Table variant='dark' bordered hover>
    <tbody>
      <tr>
      <th>counting</th>
        <th>name</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
      {
        num.map((data , i)=>
        <tr key={i}>
           <th>{i +1}</th>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>
            <Table  variant='dark' bordered hover>
              <tbody>
                
            {data.Address.map((item , i)=>
              <tr key={i}>
           <td>{item.hn}</td>
           <td>{item.city}</td>
           <td>{item.country}</td>
           </tr>
          )}
          </tbody>
          </Table>
          </td>
        </tr>
        
        )
      }
    </tbody>
  </Table>
    </div>
  );
}

export default App;
