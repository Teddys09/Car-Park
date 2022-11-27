import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setParks } from '../store/store';

const GetAllParks = async (token: string) => {
  const dispatch = useDispatch();
  await axios
    .get('http://localhost:5000/api/park/all', {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(setParks(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { GetAllParks };
