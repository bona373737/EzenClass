import { useLocation } from "react-router-dom";

const useQueryString =()=>{
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const entries = params.entries();
    //리턴할 빈 객체
    const result ={};
    for(const [key,value] of entries){
        result[key]= value;
    }
    return result;
    
}

export { useQueryString};

