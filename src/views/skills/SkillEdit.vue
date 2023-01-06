<template>
    <div>
    <h3>Edit Skill</h3>

    <div class="" style="max-width: 400px;width:100%;margin:auto">

        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <input type="text" name="name" class="form-control" v-model="skill.name" placeholder="Enter Name">
            </div>
            <div class="mb-3">
                <input type="text" name="slug" class="form-control" v-model="skill.slug" placeholder="Enter Slug">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>


    </div>
</template>

<script>
import useSkills from '@/composables/skills.js'
import {ref} from 'vue'
export default {
    props:['id'],
    setup(props) {
        const id=ref(props.id)
        const {skill,getSkill,updateSkill}=useSkills()

        getSkill(props.id)

        const handleSubmit=async()=>
        {
            let data={
                name:skill.value.name,
                slug:skill.value.slug,
            }
            console.log(data)
            await updateSkill(props.id,data)
        }

        return {
            skill,handleSubmit
        }

    }
}

</script>