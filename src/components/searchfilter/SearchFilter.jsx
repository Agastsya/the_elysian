import axios from 'axios';
import { useEffect, useState } from 'react';
import { server } from '../..';
import toast from 'react-hot-toast';
import { Box, Center, Input, Heading } from '@chakra-ui/react';
import Table from './Table';
import { useNavigate } from 'react-router-dom';
import Test from './Test';

const SearchFilter = () => {
  const [searchItem, setSearchItem] = useState('');
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = e => {
    setSearchItem(e.target.value);
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${server}/products`);
      setItem(data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    navigate('/tester');
    fetchData();
  }, [searchItem]);

  const filteredItems = item.filter(item =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );
  <Test selected={filteredItems} />;

  return (
    <>
      <Center w="100vw" my={'20px'} display={'flex'} flexDirection={'column'}>
        <Heading fontFamily={'Arbutus Slab'}>
          Sift Through Our Inventory
        </Heading>
        <Input
          w="40vw"
          value={searchItem}
          onChange={handleInputChange}
          borderColor={'green.500'}
          focusBorderColor="green.500"
          placeholder="Search for products..."
        />
      </Center>
      <Box display={'flex'} flexWrap={'wrap'} mx={'3vw'} columnGap={'3vw'}>
        {filteredItems.map((i, index) => (
          <Table
            key={i.id}
            title={i.title}
            id={i.id}
            price={i.price}
            image={i.image}
            category={i.category}
          />
        ))}
      </Box>
    </>
  );
};

export default SearchFilter;
