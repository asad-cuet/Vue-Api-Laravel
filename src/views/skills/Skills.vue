<template>
    <div>
    <h3>Skills</h3>
    
<div class="" style="max-width: 600px;width:100%;margin:auto">
    <div class="float-end">
        <router-link :to="{name:'SkillCreate'}" class="btn btn-sm btn-primary">Add skill</router-link>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="skill in skills" :key="skill.id">
                <td>{{ skill.id }}</td>
                <td>{{ skill.name }}</td>
                <td>{{ skill.slug }}</td>
                <td>
                    <router-link :to="{name:'SkillEdit',params:{id:skill.id}}" class="btn btn-sm btn-info m-2">Edit</router-link>
                    <button @click="deleteSkill(skill.id)" class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>



    
    </div>
</template>

<script>
import useSkills from '@/composables/skills.js'
export default {
    setup() {
        const {skills,getSkills,deleteSkill}=useSkills()

        getSkills()

        console.log(skills.data)
        return {
            skills,deleteSkill
        }

    }
}

</script>