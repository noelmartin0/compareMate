import React , {useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import Footer from '../components/footer'
import Item from '../components/Item'
/*const ResultPage = [

    {
    image:'nikered.jpg',
    name: 'Nike Red',
    price: 'Rs 4,999',
    seller:'Amazon',
    rating: '4/5⭐',
    },
    {
    image:'nikegreen.jpg',
    name: 'Nike Green',
    price: 'Rs 4,550',
    seller:'Flipkart',
    rating: '3/5⭐',
    },
    
    {
    image:'canvasBlue.jpg',
    name: 'Converse',
    price: 'Rs 6,000',
    seller:'Ajio',
    rating: '4.2/5⭐',
    },


];*/

const Results = () => {
const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch the search results from the backend
    const fetchResults = async () => {
      try {
        const response = await fetch(`/api/search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ keyword }),
        });
        const data = await response.json();
        console.log('Fetched data:', data);
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchResults();
  }, [keyword]);

  console.log('Results:', results);


  return (
    <RPAGE>
    <Navbar/>
    {/* <div className='top'>
        <h3>Results For:</h3>
    </div> */}
    
    <div className='content'>
    {results.length > 0 ? (
    results.map((result,index) =>(
    <div key={index}>
    <Item className="container" image={result.image_url} name={result.title} price={"₹ "+result.price} seller={result.product_url} rating={result.rating}/*seller={value.seller} rating ={value.rating}*/ />
    </div>   
    ))
  
  ) : (
          <p>No results found.</p>
        )}
    
    </div> 
    <Footer />
    </RPAGE>
  );
};
const RPAGE = styled.section`
.top{
    padding-top:3rem;
    margin-left:7rem;
    color:#002b5b;
} 

.content{
  margin-left:4rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.container{
  border-radius: 15px;
  padding: 1.5rem;
  margin-top: 1.9rem;
  box-shadow: 0.9px 1px 7px rgb(166,164 ,164);
}

`;
export default Results