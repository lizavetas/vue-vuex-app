<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-result-b></app-result-b>
                <app-counter></app-counter>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import ResultB from './components/ResultB.vue';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appResultB: ResultB,
        }
    }
</script>
