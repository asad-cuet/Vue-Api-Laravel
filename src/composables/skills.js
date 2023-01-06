import {ref, watchEffect} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'



const useSkills=()=>{
    axios.defaults.baseURL='http://127.0.0.1:8000/api/v1/'
    const router=useRouter()
    const skills=ref([])
    const skill=ref([])
    const error=ref({})


    // const getSkills=async()=> {
    //     const skills=ref(null)
    //     try {
    //         const data=await axios.get('skills')
    //         if(!data.ok)                  //data have key named ok
    //         {
    //             throw Error('No data')
    //         }
    //     }
    //     catch (err) {
    //         error.value=err.message
    //         console.log(error.value)
    //     }

    //     // const unsub = collectionRef.onSnapshot((snap)=>{
    //     //     let results=[]
    //     //     skills.value=results
    //     //     error.value=null
    //     // },
    //     // (err)=>{
    //     //         error.value="Could not fetch the data"
    //     //         skills.value=null
    //     //         console.log(err.message)
    //     // })

    //     // //problem: after logout and login again,previous snapshot alive,
    //     // //but we want to re initialize snapshot when relog in.
    //     // //for tis we took unsub
    //     // watchEffect((onInvalidate)=>{
    //     //     onInvalidate(()=>unsub())
    //     // })
        
    //     return { error,skills }       
    // }
    
    const getSkills=async()=> {
        const response=await axios.get('skills')
        skills.value=response.data.data
        console.log(skills.value)
    }

    const getSkill=async(id)=> {
        const response=await axios.get('skills/'+id)
        skill.value=response.data.data
    }


    const storeSkill=async(data)=> {
        try {
            await axios.post('skills',data)
            await router.push({name:'Skills'})
        }
        catch(err) {
            if(err.response.status===422)
            {
                error.value=err.response.data.erros
            }
        }
    }


    const updateSkill=async(id,data)=> {
        try {
            await axios.put('skills/'+id,data)
            await router.push({name:'Skills'})
        }
        catch(err) {
            if(err.response.status===422)
            {
                error.value=err.response.data.erros
            }
        }
    }

    const deleteSkill=async(id)=> {
        if(!window.confirm('Are you sure?'))
        {
            return ;
        }
        await axios.delete('skills/'+id)
        await getSkills()
    }




    return {
        skills,
        skill,
        error,
        getSkills,
        getSkill,
        storeSkill,
        updateSkill,
        deleteSkill,

    }

}


export default useSkills


// Or the structure is:

// export default function useSkills() {
//     // ....
//     return {

//     }
// }