import {useState} from 'react';

const useFormNested = (editData) => {
    const [formData, setData] = useState({...editData});

    const onFormChange = (e) => {
        console.log(e)

        const dependantRoutes = e.target.parentElement.getAttribute('dependantRoutes').split(',')
        console.log(dependantRoutes)

        let updatedData = {
            ...formData,
            [e.target.parentElement.attributes.routeId.value]: {
                ...formData[e.target.parentElement.attributes.routeId.value],
                [e.target.name]: e.target.value
            },
        }

        if (e.target.name === 'freeSpace')
            dependantRoutes.forEach(x => {
                updatedData = {
                    ...updatedData,
                    [x]: {
                        ...formData[x],
                        [e.target.name]: e.target.value
                    },
                }
            })
        setData(updatedData);
        console.log(updatedData)
    };

    const setFormData = (newData) => {
        setData({...newData});
    }
    return {
        formData,
        onFormChange,
        setFormData
    };
};

export default useFormNested;