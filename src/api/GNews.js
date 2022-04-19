import axios from 'axios';

export default axios.create({
  baseURL: 'https://gnews.io/api/v4',
  // headers: {
  //   Authorization: 'Bearer e8046a2bc199753ce9a57b553327faf7'
  //   // Authorization: 'Bearer e8046a2bc199753ce9a57b553327fa'
  // }
});
