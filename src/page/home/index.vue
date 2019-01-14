<template>
<div class="app">
    <nb-header></nb-header>
    <div>
        <router-view style="min-height:680px;"></router-view>
    </div>
    <nb-footer></nb-footer>
</div>
</template>

<script>
import nbHeader from '../common/layout/header'
import nbFooter from '../common/layout/footer'
export default {
    name: 'home',
    components: {
        nbHeader,
        nbFooter
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
