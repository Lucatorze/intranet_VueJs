<template>
    <main id="app">

        <header>
            <nav class="container">
                <a href="#">Accueil</a>
                <a href="#">Liste des collaborateurs</a>
                <a href="#">Ajouter un collaborateur</a>
            </nav>
        </header>

        <home-view />
    </main>
</template>

<script>
    import HomeView from './views/Home.vue'

    export default {
        name: 'app',

        components : { HomeView }
    }
</script>
