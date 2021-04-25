import { useRouter } from 'next/router';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Item from '../../src/component/Item';
import { Loader } from 'semantic-ui-react';
const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    });
  }
  useEffect(() => {
    if (id && id > 0) getData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      ) : (
        <Item item={item} />
      )}
    </>
  );
};

export default Post;
