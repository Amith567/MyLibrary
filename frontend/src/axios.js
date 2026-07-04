    import axios from "axios"
    import Cookies from "js-cookie"

    const API= axios.create({
        baseURL:"http://localhost:8000/",withCredentials:true
    });
    API.interceptors.request.use((config)=>{
        const token=Cookies.get('csrftoken');
        if (token){
            config.headers["X-CSRFToken"]=token
        }
        return config;
    })

    export default API