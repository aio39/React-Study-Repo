import { useRouter } from 'next/router';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Item from '../../src/component/Item';
const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  function getData() {
    Axios.get(API_URL).then(res => {
      const {
        name,
        image_link,
        price,
        description,
        updated_at,
        category,
        product_type,
        product_link,
      } = res.data;
      setItem({
        name,
        image_link,
        price,
        description,
        updated_at,
        category,
        product_type,
        product_link,
      });
    });
  }
  useEffect(() => {
    if (id && id > 0) getData();
  }, [id]);

  return <Item item={item} />;
};

export default Post;
