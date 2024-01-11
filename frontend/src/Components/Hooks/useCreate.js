import axios from "../../axios";

const useCreate = () => {

    //const history = useNavigate();
    const createEntity = async (url, entity, getData, getData2) => {
        console.log(entity)
        await axios
            .post(url, null, {
                params: entity,
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // }
            })
            .then((res) => {
                //history.push('/hotel');
                console.log(res)
                getData(prev => ++prev)
                getData2(prev => ++prev)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
            });
    }

    return {
        createEntity
    };

}

export default useCreate;