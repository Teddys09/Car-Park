import axios from 'axios';

const GetAllParks = async (token: string) => {
  await axios
    .get('http://localhost:5000/api/park/all', {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);

      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { GetAllParks };
