import axios from 'axios'

export default function configTime(time) {
  return (dispatch) => {
    console.log('from action config time ==>', time)
    // axios({
    //   method: 'POST',
    //   url: 'http://101.110.123.126:3030/config',
    //   data: {

    //   }
    // })

  }
}