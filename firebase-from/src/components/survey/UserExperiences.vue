<template>
<section>
    <base-card>
        <h2>Submitted Experiences</h2>
        <div>
            <base-button @click.native="loadExperiences()">Load Submitted Experiences</base-button>
        </div>
        <p v-if="isLoading">Loading...</p>
        <p v-else-if="!isLoading && error">{{ error }}</p>
        <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found. Start adding some survey results first.</p>
        <ul v-else>
            <survey-result v-for="result in results" :key="result.id" :name="result.name" :rating="result.rating"></survey-result>
        </ul>
    </base-card>
</section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
    components: {
        SurveyResult,
    },
    data() {
        return {
            results: [],
            isLoading: false,
            error: null,
        };
    },
    methods: {
        async loadExperiences() {
            try {

                this.isLoading = true;
                this.error = null;
                const response = await fetch("https://kirti-prac-default-rtdb.firebaseio.com/data.json");

                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    this.isLoading = false;
                    const results = [];
                    for (const id in data) {
                        results.push({
                            id: id,
                            name: data[id].name,
                            rating: data[id].rating,
                        });
                    }
                    this.results = results;
                    console.log(data, "data");
                } else {
                    throw new Error("Request failed with status: " + response.status);
                }
            } catch (error) {
                this.isLoading = false;
                this.error = 'Failed to fetch data - please try again later.';
                console.log(error, "hehehe");
            }
        },
    },
//https://console.firebase.google.com/project/kirti-prac/database/kirti-prac-default-rtdb/data/~2F
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
