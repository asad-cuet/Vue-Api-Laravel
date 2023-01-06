<template>
    <div>
        <h3>Create</h3>

        <div class="" style="max-width: 400px;width:100%;margin:auto">

            <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <input type="text" name="name" class="form-control" v-model="name" placeholder="Enter Name">
                </div>
                <div class="mb-3">
                    <input type="text" name="slug" class="form-control" v-model="slug" placeholder="Enter Slug">
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
    setup() {
        const name=ref(null)
        const slug=ref(null)
        const {storeSkill}=useSkills()

        const handleSubmit=async()=>
        {
            let data={
                name:name.value,
                slug:slug.value
            }
            console.log(data)
            await storeSkill(data)
        }

        return {
            name,slug,handleSubmit
        }
    }
}

</script>