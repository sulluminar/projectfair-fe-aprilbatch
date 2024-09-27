
import axios from 'axios';

// httpRequestType:  type of Http call (GET, POST, PUT, DELETE)
export const commonApi = async(httpRequestType, url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpRequestType,
        url:url,
        data:reqBody,
        headers:reqHeader?reqHeader: {'Content-Type':'application/json'}
       
    }
    return await axios(reqConfig).then((result)=>{
        return result;
    }).catch((err)=>{
        return err;
    })

}