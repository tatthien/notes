<template>
    <header id="masthead" class="site-header" role="banner">
        <div class="container inner">
            <div id="logo" class="site-header__logo">
                <router-link :to="{ name: 'home' }">Thien's Notes</router-link>
            </div><!-- #logo -->

            <div id="submenu" class="site-header__submenu">
                <nav class="menu" role="navigation">
                    <a href="#">About</a>
                </nav>
            </div><!-- #sub-menu -->
        </div>
    </header><!-- .site-header -->
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
    @import "./../assets/scss/global/variables";

    .site-header {
        box-shadow: 0 3px 4px rgba(0,0,0,.05);
        padding: 15px 0;
        background-color: #000000;
        .inner {
            display: flex;
            justify-content: space-between;
        }
        &__logo {
            a {
                font-family: $font-family--heading;
                color: #ffffff;
            }
        }
        &__submenu {
            a {
                color: #ffffff;
                font-weight: 700;
                display: inline-block;
                margin-left: 15px;
            }
        }
    }
</style>
