import { http } from "../utils"

export const userData= async (id) => {
  console.log('here in userdata=>', id)

    let response=''
    if(id==='users'){
        response = await http.get(`/api/all/users`)
    }
   
    return response.data
}

