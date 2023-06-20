import React , {useEffect, useState} from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
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
   const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword');
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ keyword }),
        });

        if (response.ok) {
          const data = await response.json();
          setResults(data);
        } else {
          throw new Error('Failed to fetch search results');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [keyword]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!Array.isArray(results) || results.length === 0) {
    return <p>No results found.</p>;
  }
  return (
    <RPAGE>
    <Navbar/>
    {/* <div className='top'>
        <h3>Results For:</h3>
    </div> */}
    
    <div className='content'>
    
    {results.map((result,index) =>(
    <div key={index}>
    <Item className="container" image={result.image_url} name={result.title} price={"₹ "+result.price} seller={result.product_url} rating={result.rating}/*seller={value.seller} rating ={value.rating}*/ />
    </div>   
    ))}
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